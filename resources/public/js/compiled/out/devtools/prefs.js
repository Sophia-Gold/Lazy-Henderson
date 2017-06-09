// Compiled by ClojureScript 1.9.198 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs._STAR_prefs_STAR_ = devtools.defaults.prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38170 = arguments.length;
var i__27778__auto___38171 = (0);
while(true){
if((i__27778__auto___38171 < len__27777__auto___38170)){
args__27784__auto__.push((arguments[i__27778__auto___38171]));

var G__38172 = (i__27778__auto___38171 + (1));
i__27778__auto___38171 = G__38172;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((2) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27785__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq38167){
var G__38168 = cljs.core.first.call(null,seq38167);
var seq38167__$1 = cljs.core.next.call(null,seq38167);
var G__38169 = cljs.core.first.call(null,seq38167__$1);
var seq38167__$2 = cljs.core.next.call(null,seq38167__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38168,G__38169,seq38167__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1496990004727