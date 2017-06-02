goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('Lazy_Henderson.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47461__delegate = function (x){
if(cljs.core.truth_(Lazy_Henderson.core.on_js_reload)){
return cljs.core.apply.call(null,Lazy_Henderson.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'Lazy-Henderson.core/on-js-reload' is missing");
}
};
var G__47461 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47462__i = 0, G__47462__a = new Array(arguments.length -  0);
while (G__47462__i < G__47462__a.length) {G__47462__a[G__47462__i] = arguments[G__47462__i + 0]; ++G__47462__i;}
  x = new cljs.core.IndexedSeq(G__47462__a,0);
} 
return G__47461__delegate.call(this,x);};
G__47461.cljs$lang$maxFixedArity = 0;
G__47461.cljs$lang$applyTo = (function (arglist__47463){
var x = cljs.core.seq(arglist__47463);
return G__47461__delegate(x);
});
G__47461.cljs$core$IFn$_invoke$arity$variadic = G__47461__delegate;
return G__47461;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
