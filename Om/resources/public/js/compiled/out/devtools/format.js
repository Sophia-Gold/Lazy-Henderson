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
var x__7651__auto__ = (((value == null))?null:value);
var m__7652__auto__ = (devtools.format._header[goog.typeOf(x__7651__auto__)]);
if(!((m__7652__auto__ == null))){
return m__7652__auto__.call(null,value);
} else {
var m__7652__auto____$1 = (devtools.format._header["_"]);
if(!((m__7652__auto____$1 == null))){
return m__7652__auto____$1.call(null,value);
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
var x__7651__auto__ = (((value == null))?null:value);
var m__7652__auto__ = (devtools.format._has_body[goog.typeOf(x__7651__auto__)]);
if(!((m__7652__auto__ == null))){
return m__7652__auto__.call(null,value);
} else {
var m__7652__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7652__auto____$1 == null))){
return m__7652__auto____$1.call(null,value);
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
var x__7651__auto__ = (((value == null))?null:value);
var m__7652__auto__ = (devtools.format._body[goog.typeOf(x__7651__auto__)]);
if(!((m__7652__auto__ == null))){
return m__7652__auto__.call(null,value);
} else {
var m__7652__auto____$1 = (devtools.format._body["_"]);
if(!((m__7652__auto____$1 == null))){
return m__7652__auto____$1.call(null,value);
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"make_template");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"make_group");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"make_reference");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"make_surrogate");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"render_markup");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"_LT_header_GT_");
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
var o__15015__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__15015__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__15015__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__15015__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__15014__auto__ = temp__6753__auto____$2;
return goog.object.get(o__15014__auto__,"_LT_standard_body_GT_");
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
var args__8128__auto__ = [];
var len__8121__auto___15036 = arguments.length;
var i__8122__auto___15037 = (0);
while(true){
if((i__8122__auto___15037 < len__8121__auto___15036)){
args__8128__auto__.push((arguments[i__8122__auto___15037]));

var G__15038 = (i__8122__auto___15037 + (1));
i__8122__auto___15037 = G__15038;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq15035){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15035));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15040 = arguments.length;
var i__8122__auto___15041 = (0);
while(true){
if((i__8122__auto___15041 < len__8121__auto___15040)){
args__8128__auto__.push((arguments[i__8122__auto___15041]));

var G__15042 = (i__8122__auto___15041 + (1));
i__8122__auto___15041 = G__15042;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq15039){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15039));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15044 = arguments.length;
var i__8122__auto___15045 = (0);
while(true){
if((i__8122__auto___15045 < len__8121__auto___15044)){
args__8128__auto__.push((arguments[i__8122__auto___15045]));

var G__15046 = (i__8122__auto___15045 + (1));
i__8122__auto___15045 = G__15046;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq15043){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15043));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15048 = arguments.length;
var i__8122__auto___15049 = (0);
while(true){
if((i__8122__auto___15049 < len__8121__auto___15048)){
args__8128__auto__.push((arguments[i__8122__auto___15049]));

var G__15050 = (i__8122__auto___15049 + (1));
i__8122__auto___15049 = G__15050;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq15047){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15047));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15052 = arguments.length;
var i__8122__auto___15053 = (0);
while(true){
if((i__8122__auto___15053 < len__8121__auto___15052)){
args__8128__auto__.push((arguments[i__8122__auto___15053]));

var G__15054 = (i__8122__auto___15053 + (1));
i__8122__auto___15053 = G__15054;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq15051){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15051));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15056 = arguments.length;
var i__8122__auto___15057 = (0);
while(true){
if((i__8122__auto___15057 < len__8121__auto___15056)){
args__8128__auto__.push((arguments[i__8122__auto___15057]));

var G__15058 = (i__8122__auto___15057 + (1));
i__8122__auto___15057 = G__15058;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq15055){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15055));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15060 = arguments.length;
var i__8122__auto___15061 = (0);
while(true){
if((i__8122__auto___15061 < len__8121__auto___15060)){
args__8128__auto__.push((arguments[i__8122__auto___15061]));

var G__15062 = (i__8122__auto___15061 + (1));
i__8122__auto___15061 = G__15062;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq15059){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15059));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15070 = arguments.length;
var i__8122__auto___15071 = (0);
while(true){
if((i__8122__auto___15071 < len__8121__auto___15070)){
args__8128__auto__.push((arguments[i__8122__auto___15071]));

var G__15072 = (i__8122__auto___15071 + (1));
i__8122__auto___15071 = G__15072;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((1) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8129__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15066){
var vec__15067 = p__15066;
var state_override = cljs.core.nth.call(null,vec__15067,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__15067,state_override){
return (function (p1__15063_SHARP_){
return cljs.core.merge.call(null,p1__15063_SHARP_,state_override);
});})(vec__15067,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq15064){
var G__15065 = cljs.core.first.call(null,seq15064);
var seq15064__$1 = cljs.core.next.call(null,seq15064);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__15065,seq15064__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15074 = arguments.length;
var i__8122__auto___15075 = (0);
while(true){
if((i__8122__auto___15075 < len__8121__auto___15074)){
args__8128__auto__.push((arguments[i__8122__auto___15075]));

var G__15076 = (i__8122__auto___15075 + (1));
i__8122__auto___15075 = G__15076;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq15073){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15073));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8128__auto__ = [];
var len__8121__auto___15079 = arguments.length;
var i__8122__auto___15080 = (0);
while(true){
if((i__8122__auto___15080 < len__8121__auto___15079)){
args__8128__auto__.push((arguments[i__8122__auto___15080]));

var G__15081 = (i__8122__auto___15080 + (1));
i__8122__auto___15080 = G__15081;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((1) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8129__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq15077){
var G__15078 = cljs.core.first.call(null,seq15077);
var seq15077__$1 = cljs.core.next.call(null,seq15077);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__15078,seq15077__$1);
});


//# sourceMappingURL=format.js.map?rel=1492673030407