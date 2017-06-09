# Lazy-Henderson.cljs
Inspired by [Peter Henderson](http://pmh-systems.co.uk/pmhs/)'s seminal papers on Functional Geometry in [Higher Order and Symbolic Computation, Vol 15, 2002](http://users.ecs.soton.ac.uk/ph/papers/funcgeo2.pdf) and [LFP '82 Proceedings of the 1982 ACM symposium on LISP and functional programming, 1982](http://users.ecs.soton.ac.uk/ph/funcgeo.pdf).

---

## Usage

A contructor macro, `painter`, takes the id of a canvas in the form of a string as well as the floating point coordinates of a bitmap image:

```
;; (macros/painter <canvas> <image>)
```

This example uses the stick figure "George," the eponymous low-level programmer of abstractions big and small from SICP volume one, coordinates provided by the now defunct numerical programming blog of astrophysicist [Weiqun Zhang](https://ccse.lbl.gov/people/weiqun/):

```
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

(draw (macros/painter "canvas" george) 5)
```

![George](https://github.com/Sophia-Gold/Lazy-Henderson.cljs/blob/master/george.jpg)


George on a recursive mindtrip from having to actually implement Abelson & Sussman's code on a hardware level:

```
(square-limit (macros/painter "canvas" george) 5)
```

![Recursive George](https://github.com/Sophia-Gold/Lazy-Henderson.cljs/blob/master/square-limit.jpg)