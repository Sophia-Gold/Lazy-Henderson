(ns Lazy-Henderson.core)

(enable-console-print!)

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

;; DATASTORE

(def george (atom {:ctx (.getContext
                         (.getElementById js/document "canvas") "2d"),
                   :segment-list
                   (list
                    (make-segment (make-vect .25 0) (make-vect .35 .5))
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
                    (make-segment (make-vect .4 0) (make-vect .25 0))),
                   :frame []}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; DRAWING FUNCTIONS

(defn transform-painter [frame ctx]
  ;; (do (println (interpose "," frame))
  (apply #(.setTransform ctx %1 %2 %3 %4 %5 %6) frame))

(defn draw-painter [segment-list ctx ]
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

(defn painter [image]
  @image
  (swap! image update :frame conj
         (make-frame (make-vect 400 0)
                     (make-vect 0 -400)
                     (make-vect 0 400)))
  image)

(defn draw [image]
  (let [ctx ( @image :ctx)
        segment-list (@image :segment-list)]
    (defn p [frame]
      (transform-painter frame ctx)
      (draw-painter segment-list ctx)
      (swap! image update :frame pop))
    (mapcat p
      (@image :frame))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;TRANSFORMATIONS

(defn flip-vert [image]
  (defn flip-vert-frame [old-frame]
    @image
    (swap! image update :frame pop)
    (swap! image update :frame conj
           (make-frame (edge1-frame old-frame)
                       (make-vect
                        (xcor-vect (edge2-frame old-frame))
                        (- (ycor-vect (edge2-frame old-frame))))
                       (make-vect 
                        (xcor-vect (origin-frame old-frame))
                        (+ (ycor-vect (origin-frame old-frame))
                           (ycor-vect (edge2-frame old-frame)))))))
  (#(mapv flip-vert-frame %&)
   (peek
    (@image :frame)))
  image)

(defn flip-horiz [image]
  (defn flip-horiz-frame [old-frame]
    @image
    (swap! image update :frame pop)
    (swap! image update :frame conj
           (make-frame (make-vect
                        (- (xcor-vect (edge1-frame old-frame)))
                        (ycor-vect (edge1-frame old-frame)))
                       (edge2-frame old-frame)
                       (make-vect 
                        (+ (xcor-vect (origin-frame old-frame))
                           (xcor-vect (edge1-frame old-frame)))
                        (ycor-vect (origin-frame old-frame))))))
  (#(mapv flip-horiz-frame %&)
   (peek
    (@image :frame)))
  image)

(defn rotate90 [image]
  (defn rotate90-frame [old-frame]
    @image
    (swap! image update :frame pop)
    (swap! image update :frame conj
           (make-frame (make-vect
                        (ycor-vect (edge1-frame old-frame))
                        (xcor-vect (edge1-frame old-frame)))
                       (make-vect
                        (- (ycor-vect (edge2-frame old-frame)))
                        (xcor-vect (edge2-frame old-frame)))
                       (make-vect 
                        (xcor-vect (origin-frame old-frame))
                        (+ (ycor-vect (origin-frame old-frame))
                           (ycor-vect (edge2-frame old-frame)))))))
  (#(mapv rotate90-frame %&)
   (peek
    (@image :frame)))
  image)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMBINING PROCEDURES

(defn beside [image & painters]
  (let [frames (vector (peek (pop (@image :frame))) (peek (@image :frame)))]
    (defn beside-frame [frames]
      (let [old-frame1 (first frames)
            old-frame2 (fnext frames)]
    (let [new-frame1 (make-frame 
                      (scale-vect 0.5 (edge1-frame old-frame1))
                      (edge2-frame old-frame1)
                      (origin-frame old-frame1))
          new-frame2 (make-frame
                      (scale-vect 0.5 (edge1-frame old-frame2))
                      (edge2-frame old-frame2)
                      (add-vect
                       (origin-frame old-frame2)
                       (scale-vect 0.5 (edge1-frame old-frame2))))]
          @image
          (swap! image update :frame pop)
          (swap! image update :frame pop)
          (swap! image update :frame conj new-frame1)
          (swap! image update :frame conj new-frame2))))
    (#(mapv beside-frame %&)
     frames))
  image)

(defn below [image & painters]
  (let [frames (vector (peek (pop (@image :frame))) (peek (@image :frame)))]
    (defn below-frame [frames]  
      (let [old-frame1 (first frames)
            old-frame2 (fnext frames)]
      (let [new-frame1 (make-frame 
                        (edge1-frame old-frame1)
                        (scale-vect 0.5 (edge2-frame old-frame1))
                        (origin-frame old-frame1))
                        ;; (add-vect 
                        ;;  (origin-frame old-frame1) 
                        ;;  (scale-vect 0.5 (edge2-frame old-frame1))))
            new-frame2 (make-frame 
                        (edge1-frame old-frame2)
                        (scale-vect 0.5 (edge2-frame old-frame2))
                        (add-vect 
                         (origin-frame old-frame2) 
                         (scale-vect 0.5 (edge2-frame old-frame2))))]
          @image
          (swap! image update :frame pop)
          (swap! image update :frame pop)
          (swap! image update :frame conj new-frame1)
          (swap! image update :frame conj new-frame2))))
    (#(mapv below-frame %&)
     frames))
  image)

(defn flipped-pairs [painter]
  (let [painter2 #(beside (painter) (flip-vert (painter)))]
    (below (painter2) (painter2))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMPLEX COMBINING PROCEDURES

(defn split [painter n f g]
  (if (= n 0)
    (painter)
    (f (painter) (g (split painter (- n 1) f g)
                    (split painter (- n 1) f g)))))

(defn right-split [painter n]
  (split painter n beside below))

(defn up-split [painter n] 
  (split painter n below beside))

(defn corner-split [painter n]
  (if (= n 0)
      (painter)
      (let [up (up-split painter (- n 1))
            right (right-split painter (- n 1))]
        (let [top-left (beside up up)
              bottom-right (below right right)
              corner (corner-split painter (- n 1))]
          (beside (below (painter) top-left)
                  (below bottom-right corner))))))

(defn square-limit [painter n]
  (let [quarter (corner-split painter n)]
    (let [half (beside (flip-horiz quarter) quarter)]
      (below (flip-vert half) half))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TESTS

;; (draw (painter george))
;; (draw (flip-vert (painter george)))
;; (draw (flip-horiz (painter george)))
;; (draw (rotate90 (painter george)))

;; (draw (beside (painter george) (flip-vert (painter george))))
;; (draw (below (painter george) (flip-vert (painter george))))
;; (draw (flipped-pairs #(painter george)))

;; (draw (right-split #(painter george) 5))
;; (draw (up-split #(painter george) 5))
;; (draw (corner-split #(painter george) 5))

(draw (square-limit #(painter george) 5))
