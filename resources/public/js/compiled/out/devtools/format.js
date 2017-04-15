// Compiled by ClojureScript 1.9.198 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__7643__auto__ = (((value == null))?null:value);
var m__7644__auto__ = (devtools.format._header[goog.typeOf(x__7643__auto__)]);
if(!((m__7644__auto__ == null))){
return m__7644__auto__.call(null,value);
} else {
var m__7644__auto____$1 = (devtools.format._header["_"]);
if(!((m__7644__auto____$1 == null))){
return m__7644__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__7643__auto__ = (((value == null))?null:value);
var m__7644__auto__ = (devtools.format._has_body[goog.typeOf(x__7643__auto__)]);
if(!((m__7644__auto__ == null))){
return m__7644__auto__.call(null,value);
} else {
var m__7644__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7644__auto____$1 == null))){
return m__7644__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__7643__auto__ = (((value == null))?null:value);
var m__7644__auto__ = (devtools.format._body[goog.typeOf(x__7643__auto__)]);
if(!((m__7644__auto__ == null))){
return m__7644__auto__.call(null,value);
} else {
var m__7644__auto____$1 = (devtools.format._body["_"]);
if(!((m__7644__auto____$1 == null))){
return m__7644__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__8222__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__8222__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__8222__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__8222__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__8221__auto__ = temp__6753__auto____$2;
return goog.object.get(o__8221__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8243 = arguments.length;
var i__8114__auto___8244 = (0);
while(true){
if((i__8114__auto___8244 < len__8113__auto___8243)){
args__8120__auto__.push((arguments[i__8114__auto___8244]));

var G__8245 = (i__8114__auto___8244 + (1));
i__8114__auto___8244 = G__8245;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq8242){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8242));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8247 = arguments.length;
var i__8114__auto___8248 = (0);
while(true){
if((i__8114__auto___8248 < len__8113__auto___8247)){
args__8120__auto__.push((arguments[i__8114__auto___8248]));

var G__8249 = (i__8114__auto___8248 + (1));
i__8114__auto___8248 = G__8249;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq8246){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8246));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8251 = arguments.length;
var i__8114__auto___8252 = (0);
while(true){
if((i__8114__auto___8252 < len__8113__auto___8251)){
args__8120__auto__.push((arguments[i__8114__auto___8252]));

var G__8253 = (i__8114__auto___8252 + (1));
i__8114__auto___8252 = G__8253;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq8250){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8250));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8255 = arguments.length;
var i__8114__auto___8256 = (0);
while(true){
if((i__8114__auto___8256 < len__8113__auto___8255)){
args__8120__auto__.push((arguments[i__8114__auto___8256]));

var G__8257 = (i__8114__auto___8256 + (1));
i__8114__auto___8256 = G__8257;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq8254){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8259 = arguments.length;
var i__8114__auto___8260 = (0);
while(true){
if((i__8114__auto___8260 < len__8113__auto___8259)){
args__8120__auto__.push((arguments[i__8114__auto___8260]));

var G__8261 = (i__8114__auto___8260 + (1));
i__8114__auto___8260 = G__8261;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq8258){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8258));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8263 = arguments.length;
var i__8114__auto___8264 = (0);
while(true){
if((i__8114__auto___8264 < len__8113__auto___8263)){
args__8120__auto__.push((arguments[i__8114__auto___8264]));

var G__8265 = (i__8114__auto___8264 + (1));
i__8114__auto___8264 = G__8265;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq8262){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8262));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8267 = arguments.length;
var i__8114__auto___8268 = (0);
while(true){
if((i__8114__auto___8268 < len__8113__auto___8267)){
args__8120__auto__.push((arguments[i__8114__auto___8268]));

var G__8269 = (i__8114__auto___8268 + (1));
i__8114__auto___8268 = G__8269;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq8266){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8277 = arguments.length;
var i__8114__auto___8278 = (0);
while(true){
if((i__8114__auto___8278 < len__8113__auto___8277)){
args__8120__auto__.push((arguments[i__8114__auto___8278]));

var G__8279 = (i__8114__auto___8278 + (1));
i__8114__auto___8278 = G__8279;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((1) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8121__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__8273){
var vec__8274 = p__8273;
var state_override = cljs.core.nth.call(null,vec__8274,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__8274,state_override){
return (function (p1__8270_SHARP_){
return cljs.core.merge.call(null,p1__8270_SHARP_,state_override);
});})(vec__8274,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq8271){
var G__8272 = cljs.core.first.call(null,seq8271);
var seq8271__$1 = cljs.core.next.call(null,seq8271);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__8272,seq8271__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8281 = arguments.length;
var i__8114__auto___8282 = (0);
while(true){
if((i__8114__auto___8282 < len__8113__auto___8281)){
args__8120__auto__.push((arguments[i__8114__auto___8282]));

var G__8283 = (i__8114__auto___8282 + (1));
i__8114__auto___8282 = G__8283;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq8280){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8280));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8120__auto__ = [];
var len__8113__auto___8286 = arguments.length;
var i__8114__auto___8287 = (0);
while(true){
if((i__8114__auto___8287 < len__8113__auto___8286)){
args__8120__auto__.push((arguments[i__8114__auto___8287]));

var G__8288 = (i__8114__auto___8287 + (1));
i__8114__auto___8287 = G__8288;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((1) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8121__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq8284){
var G__8285 = cljs.core.first.call(null,seq8284);
var seq8284__$1 = cljs.core.next.call(null,seq8284);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__8285,seq8284__$1);
});


//# sourceMappingURL=format.js.map?rel=1492242826258