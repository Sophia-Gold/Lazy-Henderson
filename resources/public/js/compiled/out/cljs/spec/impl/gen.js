// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33219 = arguments.length;
var i__27778__auto___33220 = (0);
while(true){
if((i__27778__auto___33220 < len__27777__auto___33219)){
args__27784__auto__.push((arguments[i__27778__auto___33220]));

var G__33221 = (i__27778__auto___33220 + (1));
i__27778__auto___33220 = G__33221;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33218){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33218));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33223 = arguments.length;
var i__27778__auto___33224 = (0);
while(true){
if((i__27778__auto___33224 < len__27777__auto___33223)){
args__27784__auto__.push((arguments[i__27778__auto___33224]));

var G__33225 = (i__27778__auto___33224 + (1));
i__27778__auto___33224 = G__33225;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33222){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33222));
});

var g_QMARK__33226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_33227 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33226){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33226))
,null));
var mkg_33228 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33226,g_33227){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33226,g_33227))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33226,g_33227,mkg_33228){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33226).call(null,x);
});})(g_QMARK__33226,g_33227,mkg_33228))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33226,g_33227,mkg_33228){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33228).call(null,gfn);
});})(g_QMARK__33226,g_33227,mkg_33228))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33226,g_33227,mkg_33228){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33227).call(null,generator);
});})(g_QMARK__33226,g_33227,mkg_33228))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33190__auto___33246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33190__auto___33246){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33247 = arguments.length;
var i__27778__auto___33248 = (0);
while(true){
if((i__27778__auto___33248 < len__27777__auto___33247)){
args__27784__auto__.push((arguments[i__27778__auto___33248]));

var G__33249 = (i__27778__auto___33248 + (1));
i__27778__auto___33248 = G__33249;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33246))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33246),args);
});})(g__33190__auto___33246))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33190__auto___33246){
return (function (seq33229){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33229));
});})(g__33190__auto___33246))
;


var g__33190__auto___33250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33190__auto___33250){
return (function cljs$spec$impl$gen$list(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33251 = arguments.length;
var i__27778__auto___33252 = (0);
while(true){
if((i__27778__auto___33252 < len__27777__auto___33251)){
args__27784__auto__.push((arguments[i__27778__auto___33252]));

var G__33253 = (i__27778__auto___33252 + (1));
i__27778__auto___33252 = G__33253;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33250))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33250),args);
});})(g__33190__auto___33250))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33190__auto___33250){
return (function (seq33230){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33230));
});})(g__33190__auto___33250))
;


var g__33190__auto___33254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33190__auto___33254){
return (function cljs$spec$impl$gen$map(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33255 = arguments.length;
var i__27778__auto___33256 = (0);
while(true){
if((i__27778__auto___33256 < len__27777__auto___33255)){
args__27784__auto__.push((arguments[i__27778__auto___33256]));

var G__33257 = (i__27778__auto___33256 + (1));
i__27778__auto___33256 = G__33257;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33254))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33254),args);
});})(g__33190__auto___33254))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33190__auto___33254){
return (function (seq33231){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33231));
});})(g__33190__auto___33254))
;


var g__33190__auto___33258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33190__auto___33258){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33259 = arguments.length;
var i__27778__auto___33260 = (0);
while(true){
if((i__27778__auto___33260 < len__27777__auto___33259)){
args__27784__auto__.push((arguments[i__27778__auto___33260]));

var G__33261 = (i__27778__auto___33260 + (1));
i__27778__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33258))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33258),args);
});})(g__33190__auto___33258))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33190__auto___33258){
return (function (seq33232){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33232));
});})(g__33190__auto___33258))
;


var g__33190__auto___33262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33190__auto___33262){
return (function cljs$spec$impl$gen$set(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33263 = arguments.length;
var i__27778__auto___33264 = (0);
while(true){
if((i__27778__auto___33264 < len__27777__auto___33263)){
args__27784__auto__.push((arguments[i__27778__auto___33264]));

var G__33265 = (i__27778__auto___33264 + (1));
i__27778__auto___33264 = G__33265;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33262))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33262),args);
});})(g__33190__auto___33262))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33190__auto___33262){
return (function (seq33233){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33233));
});})(g__33190__auto___33262))
;


var g__33190__auto___33266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33190__auto___33266){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33267 = arguments.length;
var i__27778__auto___33268 = (0);
while(true){
if((i__27778__auto___33268 < len__27777__auto___33267)){
args__27784__auto__.push((arguments[i__27778__auto___33268]));

var G__33269 = (i__27778__auto___33268 + (1));
i__27778__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33266))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33266),args);
});})(g__33190__auto___33266))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33190__auto___33266){
return (function (seq33234){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33234));
});})(g__33190__auto___33266))
;


var g__33190__auto___33270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33190__auto___33270){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33271 = arguments.length;
var i__27778__auto___33272 = (0);
while(true){
if((i__27778__auto___33272 < len__27777__auto___33271)){
args__27784__auto__.push((arguments[i__27778__auto___33272]));

var G__33273 = (i__27778__auto___33272 + (1));
i__27778__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33270))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33270),args);
});})(g__33190__auto___33270))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33190__auto___33270){
return (function (seq33235){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33235));
});})(g__33190__auto___33270))
;


var g__33190__auto___33274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33190__auto___33274){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33275 = arguments.length;
var i__27778__auto___33276 = (0);
while(true){
if((i__27778__auto___33276 < len__27777__auto___33275)){
args__27784__auto__.push((arguments[i__27778__auto___33276]));

var G__33277 = (i__27778__auto___33276 + (1));
i__27778__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33274))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33274),args);
});})(g__33190__auto___33274))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33190__auto___33274){
return (function (seq33236){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33236));
});})(g__33190__auto___33274))
;


var g__33190__auto___33278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33190__auto___33278){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33279 = arguments.length;
var i__27778__auto___33280 = (0);
while(true){
if((i__27778__auto___33280 < len__27777__auto___33279)){
args__27784__auto__.push((arguments[i__27778__auto___33280]));

var G__33281 = (i__27778__auto___33280 + (1));
i__27778__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33278))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33278),args);
});})(g__33190__auto___33278))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33190__auto___33278){
return (function (seq33237){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33237));
});})(g__33190__auto___33278))
;


var g__33190__auto___33282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33190__auto___33282){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33283 = arguments.length;
var i__27778__auto___33284 = (0);
while(true){
if((i__27778__auto___33284 < len__27777__auto___33283)){
args__27784__auto__.push((arguments[i__27778__auto___33284]));

var G__33285 = (i__27778__auto___33284 + (1));
i__27778__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33282))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33282),args);
});})(g__33190__auto___33282))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33190__auto___33282){
return (function (seq33238){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33238));
});})(g__33190__auto___33282))
;


var g__33190__auto___33286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33190__auto___33286){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33287 = arguments.length;
var i__27778__auto___33288 = (0);
while(true){
if((i__27778__auto___33288 < len__27777__auto___33287)){
args__27784__auto__.push((arguments[i__27778__auto___33288]));

var G__33289 = (i__27778__auto___33288 + (1));
i__27778__auto___33288 = G__33289;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33286))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33286),args);
});})(g__33190__auto___33286))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33190__auto___33286){
return (function (seq33239){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33239));
});})(g__33190__auto___33286))
;


var g__33190__auto___33290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33190__auto___33290){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33291 = arguments.length;
var i__27778__auto___33292 = (0);
while(true){
if((i__27778__auto___33292 < len__27777__auto___33291)){
args__27784__auto__.push((arguments[i__27778__auto___33292]));

var G__33293 = (i__27778__auto___33292 + (1));
i__27778__auto___33292 = G__33293;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33290))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33290),args);
});})(g__33190__auto___33290))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33190__auto___33290){
return (function (seq33240){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33240));
});})(g__33190__auto___33290))
;


var g__33190__auto___33294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33190__auto___33294){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33295 = arguments.length;
var i__27778__auto___33296 = (0);
while(true){
if((i__27778__auto___33296 < len__27777__auto___33295)){
args__27784__auto__.push((arguments[i__27778__auto___33296]));

var G__33297 = (i__27778__auto___33296 + (1));
i__27778__auto___33296 = G__33297;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33294))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33294),args);
});})(g__33190__auto___33294))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33190__auto___33294){
return (function (seq33241){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33241));
});})(g__33190__auto___33294))
;


var g__33190__auto___33298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33190__auto___33298){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33299 = arguments.length;
var i__27778__auto___33300 = (0);
while(true){
if((i__27778__auto___33300 < len__27777__auto___33299)){
args__27784__auto__.push((arguments[i__27778__auto___33300]));

var G__33301 = (i__27778__auto___33300 + (1));
i__27778__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33298))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33298),args);
});})(g__33190__auto___33298))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33190__auto___33298){
return (function (seq33242){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33242));
});})(g__33190__auto___33298))
;


var g__33190__auto___33302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33190__auto___33302){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33303 = arguments.length;
var i__27778__auto___33304 = (0);
while(true){
if((i__27778__auto___33304 < len__27777__auto___33303)){
args__27784__auto__.push((arguments[i__27778__auto___33304]));

var G__33305 = (i__27778__auto___33304 + (1));
i__27778__auto___33304 = G__33305;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33302))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33302),args);
});})(g__33190__auto___33302))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33190__auto___33302){
return (function (seq33243){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33243));
});})(g__33190__auto___33302))
;


var g__33190__auto___33306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33190__auto___33306){
return (function cljs$spec$impl$gen$return(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33307 = arguments.length;
var i__27778__auto___33308 = (0);
while(true){
if((i__27778__auto___33308 < len__27777__auto___33307)){
args__27784__auto__.push((arguments[i__27778__auto___33308]));

var G__33309 = (i__27778__auto___33308 + (1));
i__27778__auto___33308 = G__33309;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33306))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33306),args);
});})(g__33190__auto___33306))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33190__auto___33306){
return (function (seq33244){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33244));
});})(g__33190__auto___33306))
;


var g__33190__auto___33310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33190__auto___33310){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33311 = arguments.length;
var i__27778__auto___33312 = (0);
while(true){
if((i__27778__auto___33312 < len__27777__auto___33311)){
args__27784__auto__.push((arguments[i__27778__auto___33312]));

var G__33313 = (i__27778__auto___33312 + (1));
i__27778__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33190__auto___33310))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33190__auto___33310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33190__auto___33310),args);
});})(g__33190__auto___33310))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33190__auto___33310){
return (function (seq33245){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33245));
});})(g__33190__auto___33310))
;

var g__33203__auto___33335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33203__auto___33335){
return (function cljs$spec$impl$gen$any(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33336 = arguments.length;
var i__27778__auto___33337 = (0);
while(true){
if((i__27778__auto___33337 < len__27777__auto___33336)){
args__27784__auto__.push((arguments[i__27778__auto___33337]));

var G__33338 = (i__27778__auto___33337 + (1));
i__27778__auto___33337 = G__33338;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33335))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33335){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33335);
});})(g__33203__auto___33335))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33203__auto___33335){
return (function (seq33314){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33314));
});})(g__33203__auto___33335))
;


var g__33203__auto___33339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33203__auto___33339){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33340 = arguments.length;
var i__27778__auto___33341 = (0);
while(true){
if((i__27778__auto___33341 < len__27777__auto___33340)){
args__27784__auto__.push((arguments[i__27778__auto___33341]));

var G__33342 = (i__27778__auto___33341 + (1));
i__27778__auto___33341 = G__33342;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33339))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33339){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33339);
});})(g__33203__auto___33339))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33203__auto___33339){
return (function (seq33315){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33315));
});})(g__33203__auto___33339))
;


var g__33203__auto___33343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33203__auto___33343){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33344 = arguments.length;
var i__27778__auto___33345 = (0);
while(true){
if((i__27778__auto___33345 < len__27777__auto___33344)){
args__27784__auto__.push((arguments[i__27778__auto___33345]));

var G__33346 = (i__27778__auto___33345 + (1));
i__27778__auto___33345 = G__33346;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33343))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33343){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33343);
});})(g__33203__auto___33343))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33203__auto___33343){
return (function (seq33316){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33316));
});})(g__33203__auto___33343))
;


var g__33203__auto___33347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33203__auto___33347){
return (function cljs$spec$impl$gen$char(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33348 = arguments.length;
var i__27778__auto___33349 = (0);
while(true){
if((i__27778__auto___33349 < len__27777__auto___33348)){
args__27784__auto__.push((arguments[i__27778__auto___33349]));

var G__33350 = (i__27778__auto___33349 + (1));
i__27778__auto___33349 = G__33350;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33347))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33347){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33347);
});})(g__33203__auto___33347))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33203__auto___33347){
return (function (seq33317){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33317));
});})(g__33203__auto___33347))
;


var g__33203__auto___33351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33203__auto___33351){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33352 = arguments.length;
var i__27778__auto___33353 = (0);
while(true){
if((i__27778__auto___33353 < len__27777__auto___33352)){
args__27784__auto__.push((arguments[i__27778__auto___33353]));

var G__33354 = (i__27778__auto___33353 + (1));
i__27778__auto___33353 = G__33354;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33351))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33351){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33351);
});})(g__33203__auto___33351))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33203__auto___33351){
return (function (seq33318){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33318));
});})(g__33203__auto___33351))
;


var g__33203__auto___33355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33203__auto___33355){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33356 = arguments.length;
var i__27778__auto___33357 = (0);
while(true){
if((i__27778__auto___33357 < len__27777__auto___33356)){
args__27784__auto__.push((arguments[i__27778__auto___33357]));

var G__33358 = (i__27778__auto___33357 + (1));
i__27778__auto___33357 = G__33358;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33355))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33355){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33355);
});})(g__33203__auto___33355))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33203__auto___33355){
return (function (seq33319){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33319));
});})(g__33203__auto___33355))
;


var g__33203__auto___33359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33203__auto___33359){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33360 = arguments.length;
var i__27778__auto___33361 = (0);
while(true){
if((i__27778__auto___33361 < len__27777__auto___33360)){
args__27784__auto__.push((arguments[i__27778__auto___33361]));

var G__33362 = (i__27778__auto___33361 + (1));
i__27778__auto___33361 = G__33362;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33359))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33359){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33359);
});})(g__33203__auto___33359))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33203__auto___33359){
return (function (seq33320){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33320));
});})(g__33203__auto___33359))
;


var g__33203__auto___33363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33203__auto___33363){
return (function cljs$spec$impl$gen$double(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33364 = arguments.length;
var i__27778__auto___33365 = (0);
while(true){
if((i__27778__auto___33365 < len__27777__auto___33364)){
args__27784__auto__.push((arguments[i__27778__auto___33365]));

var G__33366 = (i__27778__auto___33365 + (1));
i__27778__auto___33365 = G__33366;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33363))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33363){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33363);
});})(g__33203__auto___33363))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33203__auto___33363){
return (function (seq33321){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33321));
});})(g__33203__auto___33363))
;


var g__33203__auto___33367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33203__auto___33367){
return (function cljs$spec$impl$gen$int(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33368 = arguments.length;
var i__27778__auto___33369 = (0);
while(true){
if((i__27778__auto___33369 < len__27777__auto___33368)){
args__27784__auto__.push((arguments[i__27778__auto___33369]));

var G__33370 = (i__27778__auto___33369 + (1));
i__27778__auto___33369 = G__33370;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33367))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33367){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33367);
});})(g__33203__auto___33367))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33203__auto___33367){
return (function (seq33322){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33322));
});})(g__33203__auto___33367))
;


var g__33203__auto___33371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33203__auto___33371){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33372 = arguments.length;
var i__27778__auto___33373 = (0);
while(true){
if((i__27778__auto___33373 < len__27777__auto___33372)){
args__27784__auto__.push((arguments[i__27778__auto___33373]));

var G__33374 = (i__27778__auto___33373 + (1));
i__27778__auto___33373 = G__33374;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33371))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33371){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33371);
});})(g__33203__auto___33371))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33203__auto___33371){
return (function (seq33323){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33323));
});})(g__33203__auto___33371))
;


var g__33203__auto___33375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33203__auto___33375){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33376 = arguments.length;
var i__27778__auto___33377 = (0);
while(true){
if((i__27778__auto___33377 < len__27777__auto___33376)){
args__27784__auto__.push((arguments[i__27778__auto___33377]));

var G__33378 = (i__27778__auto___33377 + (1));
i__27778__auto___33377 = G__33378;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33375))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33375){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33375);
});})(g__33203__auto___33375))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33203__auto___33375){
return (function (seq33324){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33324));
});})(g__33203__auto___33375))
;


var g__33203__auto___33379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33203__auto___33379){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33380 = arguments.length;
var i__27778__auto___33381 = (0);
while(true){
if((i__27778__auto___33381 < len__27777__auto___33380)){
args__27784__auto__.push((arguments[i__27778__auto___33381]));

var G__33382 = (i__27778__auto___33381 + (1));
i__27778__auto___33381 = G__33382;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33379))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33379){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33379);
});})(g__33203__auto___33379))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33203__auto___33379){
return (function (seq33325){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33325));
});})(g__33203__auto___33379))
;


var g__33203__auto___33383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33203__auto___33383){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33384 = arguments.length;
var i__27778__auto___33385 = (0);
while(true){
if((i__27778__auto___33385 < len__27777__auto___33384)){
args__27784__auto__.push((arguments[i__27778__auto___33385]));

var G__33386 = (i__27778__auto___33385 + (1));
i__27778__auto___33385 = G__33386;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33383))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33383){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33383);
});})(g__33203__auto___33383))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33203__auto___33383){
return (function (seq33326){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33326));
});})(g__33203__auto___33383))
;


var g__33203__auto___33387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33203__auto___33387){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33388 = arguments.length;
var i__27778__auto___33389 = (0);
while(true){
if((i__27778__auto___33389 < len__27777__auto___33388)){
args__27784__auto__.push((arguments[i__27778__auto___33389]));

var G__33390 = (i__27778__auto___33389 + (1));
i__27778__auto___33389 = G__33390;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33387))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33387){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33387);
});})(g__33203__auto___33387))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33203__auto___33387){
return (function (seq33327){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33327));
});})(g__33203__auto___33387))
;


var g__33203__auto___33391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33203__auto___33391){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33392 = arguments.length;
var i__27778__auto___33393 = (0);
while(true){
if((i__27778__auto___33393 < len__27777__auto___33392)){
args__27784__auto__.push((arguments[i__27778__auto___33393]));

var G__33394 = (i__27778__auto___33393 + (1));
i__27778__auto___33393 = G__33394;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33391))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33391){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33391);
});})(g__33203__auto___33391))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33203__auto___33391){
return (function (seq33328){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33328));
});})(g__33203__auto___33391))
;


var g__33203__auto___33395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33203__auto___33395){
return (function cljs$spec$impl$gen$string(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33396 = arguments.length;
var i__27778__auto___33397 = (0);
while(true){
if((i__27778__auto___33397 < len__27777__auto___33396)){
args__27784__auto__.push((arguments[i__27778__auto___33397]));

var G__33398 = (i__27778__auto___33397 + (1));
i__27778__auto___33397 = G__33398;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33395))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33395){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33395);
});})(g__33203__auto___33395))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33203__auto___33395){
return (function (seq33329){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33329));
});})(g__33203__auto___33395))
;


var g__33203__auto___33399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33203__auto___33399){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33400 = arguments.length;
var i__27778__auto___33401 = (0);
while(true){
if((i__27778__auto___33401 < len__27777__auto___33400)){
args__27784__auto__.push((arguments[i__27778__auto___33401]));

var G__33402 = (i__27778__auto___33401 + (1));
i__27778__auto___33401 = G__33402;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33399))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33399){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33399);
});})(g__33203__auto___33399))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33203__auto___33399){
return (function (seq33330){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33330));
});})(g__33203__auto___33399))
;


var g__33203__auto___33403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33203__auto___33403){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33404 = arguments.length;
var i__27778__auto___33405 = (0);
while(true){
if((i__27778__auto___33405 < len__27777__auto___33404)){
args__27784__auto__.push((arguments[i__27778__auto___33405]));

var G__33406 = (i__27778__auto___33405 + (1));
i__27778__auto___33405 = G__33406;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33403))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33403){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33403);
});})(g__33203__auto___33403))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33203__auto___33403){
return (function (seq33331){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33331));
});})(g__33203__auto___33403))
;


var g__33203__auto___33407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33203__auto___33407){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33408 = arguments.length;
var i__27778__auto___33409 = (0);
while(true){
if((i__27778__auto___33409 < len__27777__auto___33408)){
args__27784__auto__.push((arguments[i__27778__auto___33409]));

var G__33410 = (i__27778__auto___33409 + (1));
i__27778__auto___33409 = G__33410;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33407))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33407){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33407);
});})(g__33203__auto___33407))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33203__auto___33407){
return (function (seq33332){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33332));
});})(g__33203__auto___33407))
;


var g__33203__auto___33411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33203__auto___33411){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33412 = arguments.length;
var i__27778__auto___33413 = (0);
while(true){
if((i__27778__auto___33413 < len__27777__auto___33412)){
args__27784__auto__.push((arguments[i__27778__auto___33413]));

var G__33414 = (i__27778__auto___33413 + (1));
i__27778__auto___33413 = G__33414;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33411))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33411){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33411);
});})(g__33203__auto___33411))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33203__auto___33411){
return (function (seq33333){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33333));
});})(g__33203__auto___33411))
;


var g__33203__auto___33415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33203__auto___33415){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33416 = arguments.length;
var i__27778__auto___33417 = (0);
while(true){
if((i__27778__auto___33417 < len__27777__auto___33416)){
args__27784__auto__.push((arguments[i__27778__auto___33417]));

var G__33418 = (i__27778__auto___33417 + (1));
i__27778__auto___33417 = G__33418;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});})(g__33203__auto___33415))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33203__auto___33415){
return (function (args){
return cljs.core.deref.call(null,g__33203__auto___33415);
});})(g__33203__auto___33415))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33203__auto___33415){
return (function (seq33334){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33334));
});})(g__33203__auto___33415))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27784__auto__ = [];
var len__27777__auto___33421 = arguments.length;
var i__27778__auto___33422 = (0);
while(true){
if((i__27778__auto___33422 < len__27777__auto___33421)){
args__27784__auto__.push((arguments[i__27778__auto___33422]));

var G__33423 = (i__27778__auto___33422 + (1));
i__27778__auto___33422 = G__33423;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33419_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33419_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33420){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33420));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__33424_SHARP_){
return (new Date(p1__33424_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1492572233687