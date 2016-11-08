;list version:
(defn make-vect [x y]
  (list x y))
(defn xcor-vect [vect]
  (first vect))
(defn ycor-vect [vect]
  (fnext vect))

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
  (list v1 v2))
(defn start-segment [segment]
  (first segment))
(defn end-segment [segment]
  (fnext segment))

(defn make-frame [origin edge1 edge2]
  (list origin edge1 edge2))
(defn origin-frame [frame]
  (subseq frame = 0))
(defn edge1-frame [frame]
  (subseq frame = 1))
(defn edge2-frame [frame]
  (subseq frame = 2))
