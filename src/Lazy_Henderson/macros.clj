(ns Lazy-Henderson.macros)

(defmacro painter [canvas image]
  `(let [canvas# (.getElementById js/document ~canvas)
         ctx# (.getContext canvas# "2d")
         width# (.-width canvas#)
         height# (.-height canvas#)]
     {:ctx ctx#
      :image ~image
      :frame (Lazy-Henderson.core/make-frame (Lazy-Henderson.core/make-vect width# 0)
                                             (Lazy-Henderson.core/make-vect 0 (- height#))
                                             (Lazy-Henderson.core/make-vect 0 height#))}))
