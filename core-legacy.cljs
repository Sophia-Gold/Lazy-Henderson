(ns Lazy-Henderson.core)

;FRAME CONSTRUCTORS AND SELECTORS

(defn make-vect [x y]
  (vector x y))
(defn xcor-vect [vect]
  (first vect))
(defn ycor-vect [vect]
  (peek vect))
  ;; (last vect)) ;lazy version

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
  ;; (last segment))  ;lazy version

(defn make-frame [origin edge1 edge2]
  (vector origin edge1 edge2))
(defn origin-frame [frame]
  (nth frame 0))
  ;; (take 2 frame))  ;lazy version
(defn edge1-frame [frame]
  (nth frame 1))
  ;; (take 2 frame))  ;lazy version
(defn edge2-frame [frame]
  (nth frame 2))
  ;; (take 2 frame))  ;lazy version

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(def start-frame (make-frame (make-vect 100 300)  ;global
                             (make-vect 200 0)
                             (make-vect 0 -200)))
(def george-big (make-frame (make-vect 0 400)  ;global 
                            (make-vect 400 0)
                            (make-vect 0 -400)))

(def george-image (list
                   (make-segment (make-vect .25 0) (make-vect .35 .5))  ;global
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
                   (make-segment (make-vect .4 0) (make-vect .25 0))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;DRAWING FUNCTIONS

(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))

(defn transform-painter [frame]
  (.setTransform ctx
    (xcor-vect (edge1-frame frame))
    (ycor-vect (edge1-frame frame))
    (xcor-vect (edge2-frame frame))
    (ycor-vect (edge2-frame frame))
    (xcor-vect (origin-frame frame))
    (ycor-vect (origin-frame frame))))

(defn draw-painter [segment-list]
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
    segment-list)
  (set! (.-lineWidth ctx) .01)
  (.stroke ctx))

(defn painter [frame]
  [frame
   (delay 
    (transform-painter frame)
    (draw-painter george-image))])

(defn draw [f]
  (force (peek f)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;TRANSFORMATIONS

(defn flip-vert [& painter]
  (defn flip-vert-frame [frame]
    (let [old-frame (into [] (mapcat identity) (pop frame))]
      (let [new-frame (make-frame
                       (make-vect 
                        (xcor-vect (origin-frame old-frame))
                        (+ (ycor-vect (origin-frame old-frame))
                           (ycor-vect (edge2-frame old-frame))))
                       (edge1-frame old-frame)
                       (make-vect
                        (xcor-vect (edge2-frame old-frame))
                        (- (ycor-vect (edge2-frame old-frame)))))]
        [new-frame
         (delay 
          (transform-painter new-frame)
          (draw-painter george-image))])))
  (mapcat flip-vert-frame painters))
    
(defn flip-horiz [& painters]
  (defn flip-horiz-frame [frame]
    (let [old-frame (into [] (mapcat identity) (pop frame))]
      (let [new-frame (make-frame
                       (make-vect 
                        (+ (xcor-vect (origin-frame old-frame))
                           (xcor-vect (edge1-frame old-frame)))
                        (ycor-vect (origin-frame old-frame)))
                       (make-vect
                        (- (xcor-vect (edge1-frame old-frame)))
                        (ycor-vect (edge1-frame old-frame)))
                       (edge2-frame old-frame))]
        [new-frame
         (delay 
          (transform-painter new-frame)
          (draw-painter george-image))])))
  (mapcat flip-horiz-frame painters))

(defn rotate90 [& painters]
  (defn rotate90-frame [frame]
    (let [old-frame (into [] (mapcat identity) (pop frame))]
      (let [new-frame (make-frame
                       (make-vect 
                        (xcor-vect (origin-frame old-frame))
                        (+ (ycor-vect (origin-frame old-frame))
                           (ycor-vect (edge2-frame old-frame))))  
                       (make-vect
                        (ycor-vect (edge1-frame old-frame))
                        (xcor-vect (edge1-frame old-frame)))
                       (make-vect
                        (- (ycor-vect (edge2-frame old-frame)))
                        (xcor-vect (edge2-frame old-frame))))]
        [new-frame
         (delay 
          (transform-painter new-frame)
          (draw-painter george-image))])))
  (mapcat rotate90-frame painters))

;same as flip-vert
(defn rotate180 [painters]
  (nth (iterate rotate90 painters) 2))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;COMBINING PROCEDURES

(defn beside [painter1 painter2]
  (println painter1)
  (println painter2)
  (defn beside-frame [frame1 frame2]
    (let [old-frame1 (pop frame1)
          old-frame2 (pop frame2)]
    (println old-frame1)
    (println old-frame2)
    (let [new-frame1 (make-frame 
                      (origin-frame old-frame1)
                      (scale-vect 0.5 (edge1-frame old-frame1))
                      (edge2-frame old-frame1))        
          new-frame2 (make-frame
                      (add-vect
                       (origin-frame old-frame2)
                       (scale-vect 0.5 (edge1-frame old-frame2)))
                      (scale-vect 0.5 (edge1-frame old-frame2))
                      (edge2-frame old-frame2))]
      [[:frame new-frame1
       :render (delay 
        (transform-painter new-frame1)
        (draw-painter george-image))]
      [:frame new-frame2
       :render (delay
        (transform-painter new-frame2)
        (draw-painter george-image))]])))
  (map beside-frame painter1 painter2))
           
(defn below [painter1 painter2]
  (defn below-frame [frame1 frame2]
    (println frame1) (println (pop frame1))
    (println frame2) (println (pop frame2))
    (let [old-frame1 (fnext frame1)
          old-frame2 (fnext frame2)]
      (let [new-frame1 (make-frame 
                        (origin-frame old-frame1)
                        (edge1-frame old-frame1)
                        (scale-vect 0.5 (edge2-frame old-frame1)))
            new-frame2 (make-frame 
                        (add-vect 
                         (origin-frame old-frame2) 
                         (scale-vect 0.5 (edge2-frame old-frame2)))
                        (edge1-frame old-frame2)
                        (scale-vect 0.5 (edge2-frame old-frame2)))]
        [new-frame1
         (delay 
           (transform-painter new-frame1)
           (draw-painter george-image))]
        [new-frame2
         (delay
          (transform-painter new-frame2)
          (draw-painter george-image))])))
  (mapcat below-frame painter1 painter2))

(defn flipped-pairs [painter]
  (below (beside painter (flip-vert painter))
         (beside painter (flip-vert painter))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;COMPLEX COMBINING PROCEDURES

(defn split [frame n f g]             
  (let [frame1 (painter (fnext frame))]
    (if (= n 0)
    frame1
    (f frame1 (g (split frame1 (- n 1) f g)
                 (split frame1 (- n 1) f g))))))

(defn right-split [frame n] 
  (split frame n beside below))

(defn up-split [frame n] 
  (split frame n below beside))

(defn corner-split [frame n]
  (if (= n 0)
    frame
    (beside (below frame (beside (up-split frame (- n 1)) (up-split frame (- n 1))))
            (below (below (right-split frame (- n 1)) (right-split frame (- n 1))) (corner-split frame (- n 1))))))

(defn square-of-four [tl tr bl br]
  (fn [painter]
    (let [top (beside (tl painter) (tr painter))
          bottom (beside (bl painter) (br painter))]
      (below bottom top))))

(defn square-limit [frame n]
  (let [combine4 (square-of-four flip-horiz identity rotate180 flip-vert)]
    (combine4 (corner-split frame n))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(draw george (painter george start-frame))
;; (draw (flip-vert (painter george)))
;; (draw (flip-horiz (painter george)))
;; (draw (rotate90 (painter george)))
;; (draw (rotate180 (painter george))))

;; (draw (beside (painter george) (flip-vert (painter george))))
;; (draw (below (painter george) (rotate90 (painter george))))
;; (draw (flipped-pairs (painter george)))

;; (draw (right-split (painter george 5)))
;; (draw (up-split (painter george 5)))
;; (draw (right-split' (painter george 5)))
;; (draw (up-split' (painter george 5)))
