(ns Lazy-Henderson.core
  (:require-macros [Lazy-Henderson.macros :as macros :refer [painter]]))

;; (enable-console-print!)

;; FRAME CONSTRUCTORS AND SELECTORS

(defn make-vect [x y]
  (vector x y))
(defn xcor-vect [vect]
  (first vect))
(defn ycor-vect [vect]
  (peek vect))

(defn add-vect [v1 v2]
  (make-vect
   (+ (xcor-vect v1) (xcor-vect v2))
   (+ (ycor-vect v1) (ycor-vect v2))))
(defn sub-vect [v1 v2]
  (make-vect
   (- (xcor-vect v1) (xcor-vect v2))
   (- (ycor-vect v1) (ycor-vect v2))))
(defn scale-vect [s v]
  (make-vect
   (* s (xcor-vect v))
   (* s (ycor-vect v))))

(defn make-segment [v1 v2]
  (vector v1 v2))
(defn start-segment [segment]
  (first segment))
(defn end-segment [segment]
  (peek segment))

(defn make-frame [edge1 edge2 origin]
  (vector
   (xcor-vect edge1) (ycor-vect edge1)
   (xcor-vect edge2) (ycor-vect edge2)
   (xcor-vect origin) (ycor-vect origin)))
(defn edge1-frame [frame]
  (subvec frame 0 2))
(defn edge2-frame [frame]
  (subvec frame 2 4))
(defn origin-frame [frame]
  (subvec frame 4 6))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; DRAWING FUNCTIONS

(defn transform-painter [ctx frame]
  (apply #(.setTransform ctx %1 %2 %3 %4 %5 %6) frame))

(defn draw-painter [ctx image]
  (.beginPath ctx)
  (.moveTo ctx (first image) (fnext image))
  (run!
   (fn [segment]
     (.lineTo
      ctx
      (xcor-vect (start-segment segment))
      (ycor-vect (start-segment segment)))
     (.lineTo
      ctx
      (xcor-vect (end-segment segment))
      (ycor-vect (end-segment segment))))
   image)
  (.closePath ctx)
  (set! (.-lineWidth ctx) 0.05)
  (.stroke ctx))

(defn draw [store]
  (let [ctx (get store :ctx)
        image (get store :image)
        frame (get store :frame)]
    (do
      (transform-painter ctx frame)
      (draw-painter ctx image))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;TRANSFORMATIONS

(defn flip-vert [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame
                   (edge1-frame old-frame)
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (- (ycor-vect (edge2-frame old-frame))))
                   (make-vect 
                    (xcor-vect (origin-frame old-frame))
                    (+ (ycor-vect (origin-frame old-frame))
                       (ycor-vect (edge2-frame old-frame)))))]
    (assoc store :frame new-frame)))

(defn flip-horiz [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame
                   (make-vect
                    (- (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (edge1-frame old-frame)))
                   (edge2-frame old-frame)
                   (make-vect 
                    (+ (xcor-vect (origin-frame old-frame))
                       (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (origin-frame old-frame))))]
    (assoc store :frame new-frame)))

(defn rotate90 [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame
                   (make-vect
                    (ycor-vect (edge1-frame old-frame))
                    (xcor-vect (edge1-frame old-frame)))
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (- (ycor-vect (edge2-frame old-frame))))
                   (make-vect 
                    (xcor-vect (origin-frame old-frame))
                    (+ (ycor-vect (origin-frame old-frame))
                       (ycor-vect (edge2-frame old-frame)))))]
    (assoc store :frame new-frame)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMBINING PROCEDURES

(defn beside-left [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame 
                   (scale-vect 0.5 (edge1-frame old-frame))
                   (edge2-frame old-frame)
                   (origin-frame old-frame))]
    (assoc store :frame new-frame)))

(defn beside-right [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame 
                   (scale-vect 0.5 (edge1-frame old-frame))
                   (edge2-frame old-frame)
                   (add-vect
                    (origin-frame old-frame)
                    (scale-vect 0.5 (edge1-frame old-frame))))]
    (assoc store :frame new-frame)))

(defn beside [store]
  (do
    (draw (beside-left store))
    (draw (beside-right store))))

(defn below-top [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (scale-vect 0.5 (edge2-frame old-frame))
                   (add-vect
                    (origin-frame old-frame)
                    (scale-vect 0.5 (edge2-frame old-frame))))]
    (assoc store :frame new-frame)))

(defn below-bottom [store]
  (let [old-frame (get store :frame)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (scale-vect 0.5 (edge2-frame old-frame))
                   (origin-frame old-frame))]
    (assoc store :frame new-frame)))

(defn below [store]
  (draw (below-top store))
  (draw (below-bottom store)))

(defn flipped-pairs [store]
  (draw (below-top (beside-left store)))
  (draw (below-top (beside-right (flip-vert store))))
  (draw (below-bottom (beside-left store)))
  (draw (below-bottom (beside-right (flip-vert store)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMPLEX COMBINING PROCEDURES

(defn right-split [store n]
  (if (zero? n)
    store
    (do
      (draw (beside-left (flip-vert store)))
      (recur (beside-right (flip-vert store)) (- n 1)))))
    
(defn up-split [store n]
  (if (zero? n)
    store
    (do
      (draw (below-bottom (flip-horiz store)))
      (recur (below-top (flip-horiz store)) (- n 1)))))
            
(defn corner-split [store n]
  (if (zero? n)
    store
    (do
      (draw (beside-left (below-bottom store)))
      (right-split (beside-right (below-bottom store)) n)
      (up-split (beside-left (below-top store)) n)
      (recur (beside-right (below-top store)) (- n 1)))))
  
(defn square-limit [store n]
  (corner-split (flip-horiz (below-top (beside-left store))) n)
  (corner-split (below-top (beside-right store)) n)
  (corner-split (flip-vert (flip-horiz (below-bottom (beside-left store)))) n)
  (corner-split (flip-vert (below-bottom (beside-right store))) n))
    
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TESTS

(def george [(make-segment (make-vect .25 0) (make-vect .35 .5))
             (make-segment (make-vect .35 .5) (make-vect .3 .6))
             (make-segment (make-vect .3 .6) (make-vect .15 .4))
             (make-segment (make-vect .15 .4) (make-vect 0 .65))
             (make-segment (make-vect 0 .65) (make-vect 0 .85))
             (make-segment (make-vect 0 .85) (make-vect .15 .6))
             (make-segment (make-vect .15 .6) (make-vect .3 .65))
             (make-segment (make-vect .3 .65) (make-vect .4 .65))
             (make-segment (make-vect .4 .65) (make-vect .35 .85))
             (make-segment (make-vect .35 .85) (make-vect .4 1))
             (make-segment (make-vect .4 1) (make-vect .6 1))
             (make-segment (make-vect .6 1) (make-vect .65 .85))
             (make-segment (make-vect .65 .85) (make-vect .6 .65))
             (make-segment (make-vect .6 .65) (make-vect .75 .65))
             (make-segment (make-vect .75 .65) (make-vect 1 .35))
             (make-segment (make-vect 1 .35) (make-vect 1 .15))
             (make-segment (make-vect 1 .15) (make-vect .6 .45))
             (make-segment (make-vect .6 .45) (make-vect .75 0))
             (make-segment (make-vect .75 0) (make-vect .6 0))
             (make-segment (make-vect .6 0) (make-vect .5 .3))
             (make-segment (make-vect .5 .3) (make-vect .4 0))
             (make-segment (make-vect .4 0) (make-vect .25 0))])

;; (draw (macros/painter "canvas" george))

;; (draw (flip-vert (macros/painter "canvas" george)))
;; (draw (flip-horiz (macros/painter "canvas" george)))
;; (draw (rotate90 (macros/painter "canvas" george)))

;; (draw (beside-left (macros/painter "canvas" george)))
;; (draw (beside-right (macros/painter "canvas" george)))
;; (beside (macros/painter "canvas" george))

;; (draw (below-top (macros/painter "canvas" george)))
;; (draw (below-bottom (macros/painter "canvas" george)))
;; (below (macros/painter "canvas" george))

;; (flipped-pairs (macros/painter "canvas" george))

;; (right-split (macros/painter "canvas" george) 5)
;; (up-split (macros/painter "canvas" george) 5)

;; (corner-split (macros/painter "canvas" george) 5)

;; (square-limit (macros/painter "canvas" george) 5)
                                      
