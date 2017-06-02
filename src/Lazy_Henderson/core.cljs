(ns Lazy-Henderson.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer [defui ui]]
            [om.dom :as dom]))

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

(def segment-list (list
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
                   (make-segment (make-vect .4 0) (make-vect .25 0))))

(def store (atom {}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; RENDERING FUNCTIONS

(def reconciler
  (om/reconciler {:state store}))

(defui canvas
  Object
  (componentDidMount [this]
                     (om/set-state! this
                                    {:ctx (.getContext
                                           (.getElementById js/document
                                                            (get-in (om/props this) [:keys :id]))
                                           "2d")})

                     ;; (swap! store assoc-in [this :ctx]
                     ;;            (.getContext
                     ;;             (.getElementById js/document (str id)) "2d"))

                     )
  (render [this]
          (let [{:keys [id width height]} (om/props this)]
            (dom/input #js
                       {:id id
                        :width width
                        :height height
                        }))))

(def canvas-factory (om/factory canvas))

(defui canvas-generator
  Object
  (render [this]
          (apply dom/div nil
                 (map #(canvas-factory
                        {:react-key %
                         :id %
                         :width %
                         :height %})
                      (next (keys (om/props this)))))))

(om/add-root! reconciler
              canvas-generator (gdom/getElement "app"))

(defn new-canvas [id width height]
  (swap! store assoc (keyword id)
         {:id (str id), :width width, :height height})
  id)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; DRAWING FUNCTIONS

(defn transform-painter [frame ctx]
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
  (swap! store assoc (keyword image)
         (make-frame (make-vect 400 0)
                     (make-vect 0 -400)
                     (make-vect 0 400)))
  image)

(defn draw [image canvas]
  (let [ctx (get-in @store [(keyword canvas) :ctx])
        frame (get @store (keyword image))]
    (transform-painter frame ctx)
    (draw-painter segment-list ctx)))

(defn draw-new [image]
  (let [id (gensym)]
    (do
      (new-canvas id "400px" "400px")
      (draw image id))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;TRANSFORMATIONS

(defn flip-vert [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame
                   (edge1-frame old-frame)
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (- (ycor-vect (edge2-frame old-frame))))
                   (make-vect 
                    (xcor-vect (origin-frame old-frame))
                    (+ (ycor-vect (origin-frame old-frame))
                       (ycor-vect (edge2-frame old-frame)))))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn flip-horiz [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame
                   (make-vect
                    (- (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (edge1-frame old-frame)))
                   (edge2-frame old-frame)
                   (make-vect 
                    (+ (xcor-vect (origin-frame old-frame))
                       (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (origin-frame old-frame))))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn rotate90 [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
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
    (swap! store assoc new-image new-frame)
    new-image))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMBINING PROCEDURES

(defn beside-left [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame 
                   (scale-vect 0.5 (edge1-frame old-frame))
                   (edge2-frame old-frame)
                   (origin-frame old-frame))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn beside-right [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame 
                   (scale-vect 0.5 (edge1-frame old-frame))
                   (edge2-frame old-frame)
                   (add-vect
                    (origin-frame old-frame)
                    (scale-vect 0.5 (edge1-frame old-frame))))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn beside [left-image right-image]
  (let [id (gensym)]
    (do
      (new-canvas id "400px" "400px")
      (draw (beside-left left-image) id)
      (draw (beside-right right-image) id))))

(defn below-top [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (scale-vect 0.5 (edge2-frame old-frame))
                   (add-vect
                    (origin-frame old-frame)
                    (scale-vect 0.5 (edge2-frame old-frame))))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn below-bottom [image]
  (let [old-image (keyword image)
        new-image (keyword (gensym (str image)))
        old-frame (get @store old-image)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (scale-vect 0.5 (edge2-frame old-frame))
                   (origin-frame old-frame))]
    (swap! store assoc new-image new-frame)
    new-image))

(defn below [top-image bottom-image]
  (let [id (gensym)]
    (do
      (new-canvas id "400px" "400px")
      (draw (below-top top-image) id)
      (draw (below-bottom bottom-image) id))))

(defn flipped-pairs [image]
  (let [id (gensym)]
    (do
      (new-canvas id "400px" "400px")
      (draw (below-top (beside-left image)) id)
      (draw (below-top (beside-right (flip-vert image))) id)
      (draw (below-bottom (beside-left image)) id)
      (draw (below-bottom (beside-right (flip-vert image))) id))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMPLEX COMBINING PROCEDURES

;; (defn right-split [image n]
;;   (let [id (gensym)]
;;     (new-canvas id "400px" "400px")
;;     (if (= n 0)
;;       image
;;       (let [smaller (right-split (beside-right image) (- n 1))]
;;         (do
;;           (draw (beside-left image) id)
;;           (draw (beside-right (below-top image)) id)
;;           (draw (beside-right (below-bottom image)) id))))))

;; (defn up-split [image n]
;;   (let [id (gensym)]
;;     (new-canvas id "400px" "400px")
;;     (if (= n 0)
;;       image
;;       (let [smaller (up-split (below-top image) (- n 1))]
;;         (do
;;           (draw (below-bottom image) id)
;;           (draw (below-top (beside-left image)) id)
;;           (draw (below-top (beside-right image)) id))))))

;; (defn corner-split [image n]
;;   (let [id (gensym)]
;;     (do
;;       (new-canvas id "400px" "400px")
;;       (draw (beside-left (below-bottom image)) id)
;;       (right-split (beside-right (below-bottom image)) n)
;;       (up-split (beside-left (below-top image)) n)
;;       (corner-split (beside-right (below-top image)) (- n 1)))))
    
;; (defn square-limit [image n]
;;   (corner-split (flip-horiz (below-top (beside-left image))) n)
;;   (corner-split (below-top (beside-right image)) n)
;;   (corner-split (flip-vert (flip-horiz (below-bottom (beside-left image)))) n)
;;   (corner-split (flip-vert (below-bottom (beside-right image))) n))
    
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TESTS

;; (draw-new (painter "george"))

;; (draw-new (flip-vert (painter "george")))
;; (draw-new (flip-horiz (painter "george")))
;; (draw-new (rotate90 (painter "george")))

;; (draw-new (beside-left (painter "george")))
;; (draw-new (beside-right (painter "george")))
;; (beside (painter "george") (painter "george"))

;; (draw-new (below-top (painter "george")))
;; (draw-new (below-bottom (painter "george")))
;; (below (painter "george") (painter "george"))

;; (flipped-pairs (painter "george"))

;; (right-split (painter "george") 5)
;; (up-split (painter "george") 5)

;; (corner-split (painter "george") 5)

;; (square-limit (painter "george") 5)

(new-canvas 'foo "400px" "400px")
(print @store)
