(ns Lazy-Henderson.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer [defui ui]]
            [om.dom :as dom]))

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

;; RENDERING FUNCTIONS

;; (def store (atom (sorted-map :a 49)))

(def store (atom {}))

(def reconciler
  (om/reconciler {:state store}))

(defui slider
  Object
  (render [this]
          (let [{:keys [id value transform]} (om/props this)]
            (dom/input #js
                       {:id id
                        :type "range"
                        :min 0
                        :max 99
                        :step 1
                        ;; :value value
                        :style #js {:width "360px"
                                    :position "absolute"
                                    :transform transform}
                        ;; :onChange (fn [x] (swap! store update :a x.target.value))
                        }))))
  
(def slider-factory (om/factory slider))

(defui slider-generator
  Object
  (render [this]
          (apply dom/div nil
                 (map #(slider-factory
                        {:react-key %
                         :id %
                         ;; :value (get :a (om/props this))
                         :transform (str "matrix("
                                         (apply str (interpose "," (% (om/props this)))) ")" )})
                      ;; (nnext (keys (om/props this)))
                      (next (keys (om/props this)))
                      ))))

(om/add-root! reconciler
              slider-generator (gdom/getElement "app"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;TRANSFORMATIONS

(defn flip-vert [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame
                   (edge1-frame old-frame)
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (- (ycor-vect (edge2-frame old-frame))))
                   (origin-frame old-frame))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn flip-horiz [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame
                   (make-vect
                    (- (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (edge1-frame old-frame)))
                   (edge2-frame old-frame)
                   (origin-frame old-frame))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn rotate45 [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame
                   (make-vect
                    (xcor-vect (edge1-frame old-frame))
                    (+ 1 (ycor-vect (edge1-frame old-frame))))
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (ycor-vect (edge2-frame old-frame)))
                   (origin-frame old-frame))]
    (swap! store assoc new-component new-frame)
    new-component))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMBINING PROCEDURES

(defn beside-left [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame
                   (make-vect
                    (* 0.5 (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (edge1-frame old-frame)))
                   (edge2-frame old-frame)
                   (make-vect
                    (- (xcor-vect (origin-frame old-frame)) 90)
                    (ycor-vect (edge1-frame old-frame))))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn beside-right [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame
                   (make-vect
                    (* 0.5 (xcor-vect (edge1-frame old-frame)))
                    (ycor-vect (edge1-frame old-frame)))
                   (edge2-frame old-frame)
                   (make-vect
                    (+ (xcor-vect (origin-frame old-frame)) 90)
                    (ycor-vect (edge1-frame old-frame))))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn beside [left-component right-component]
  (beside-left left-component)
  (beside-right right-component))

(defn below-top [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (* 0.5 (ycor-vect (edge2-frame old-frame))))
                   (make-vect
                    (xcor-vect (origin-frame old-frame))
                    (+ (ycor-vect (origin-frame old-frame)) 90)))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn below-bottom [component]
  (let [old-component (keyword component)
        new-component (keyword (gensym (str component)))
        old-frame (get @store old-component)
        new-frame (make-frame 
                   (edge1-frame old-frame)
                   (make-vect
                    (xcor-vect (edge2-frame old-frame))
                    (* 0.5 (ycor-vect (edge2-frame old-frame))))
                   (make-vect
                    (xcor-vect (origin-frame old-frame))
                    (- (ycor-vect (origin-frame old-frame)) 90)))]
    (swap! store assoc new-component new-frame)
    new-component))

(defn below [top-component bottom-component]
  (below-top top-component)
  (below-bottom bottom-component))

(defn flipped-pairs [component]
  (below-top (beside-left component))
  (below-top (beside-right (flip-vert component)))
  (below-bottom (beside-left component))
  (below-bottom (beside-right (flip-vert component))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; COMPLEX COMBINING PROCEDURES

(defn right-split [component n]
  (if (zero? n)
    component
    (do
      (beside-left (flip-vert component))
      (recur (beside-right (flip-vert component)) (- n 1)))))
    
(defn up-split [component n]
  (if (zero? n)
    component
    (do
      (below-bottom (flip-horiz component))
      (recur (below-top (flip-horiz component)) (- n 1)))))
            
(defn corner-split [component n]
  (if (zero? n)
    component
    (do
      (beside-left (below-bottom component))
      (right-split (beside-right (below-bottom component)) n)
      (up-split (beside-left (below-top component)) n)
      (recur (beside-right (below-top component)) (- n 1)))))
  
(defn square-limit [component n]
  (corner-split (flip-horiz (below-top (beside-left component))) n)
  (corner-split (below-top (beside-right component)) n)
  (corner-split (flip-vert (flip-horiz (below-bottom (beside-left component)))) n)
  (corner-split (flip-vert (below-bottom (beside-right component))) n))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TESTS

(defn component [component]
  (swap! store assoc (keyword component)
         (make-frame (make-vect 1 0)
                     (make-vect 0 1)
                     (make-vect 0 1)))
  component)

;; (component "slider")

;; (flip-vert (component "slider"))
;; (flip-horiz (component "slider"))
;; (rotate45 (component "slider"))

;; (beside-left (component "slider"))
;; (beside-right (component "slider"))
;; (beside (component "slider") (component "slider"))

;; (below-top (component "slider"))
;; (below-bottom (component "slider"))
;; (below (component "slider") (component "slider"))

;; (flipped-pairs (component "slider"))

;; (right-split (component "slider") 5)
;; (up-split (component "slider") 5)

;; (corner-split (component "slider") 5)

(square-limit (component "slider") 5)
