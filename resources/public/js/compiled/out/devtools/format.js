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
var x__27307__auto__ = (((value == null))?null:value);
var m__27308__auto__ = (devtools.format._header[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,value);
} else {
var m__27308__auto____$1 = (devtools.format._header["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,value);
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
var x__27307__auto__ = (((value == null))?null:value);
var m__27308__auto__ = (devtools.format._has_body[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,value);
} else {
var m__27308__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,value);
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
var x__27307__auto__ = (((value == null))?null:value);
var m__27308__auto__ = (devtools.format._body[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,value);
} else {
var m__27308__auto____$1 = (devtools.format._body["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,value);
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"make_template");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"make_group");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"make_reference");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"make_surrogate");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"render_markup");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"_LT_header_GT_");
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
var o__37629__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__37629__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__37629__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__37629__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__37628__auto__ = temp__6753__auto____$2;
return goog.object.get(o__37628__auto__,"_LT_standard_body_GT_");
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
var args__27784__auto__ = [];
var len__27777__auto___37650 = arguments.length;
var i__27778__auto___37651 = (0);
while(true){
if((i__27778__auto___37651 < len__27777__auto___37650)){
args__27784__auto__.push((arguments[i__27778__auto___37651]));

var G__37652 = (i__27778__auto___37651 + (1));
i__27778__auto___37651 = G__37652;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37649){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37649));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37654 = arguments.length;
var i__27778__auto___37655 = (0);
while(true){
if((i__27778__auto___37655 < len__27777__auto___37654)){
args__27784__auto__.push((arguments[i__27778__auto___37655]));

var G__37656 = (i__27778__auto___37655 + (1));
i__27778__auto___37655 = G__37656;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37653){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37653));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37658 = arguments.length;
var i__27778__auto___37659 = (0);
while(true){
if((i__27778__auto___37659 < len__27777__auto___37658)){
args__27784__auto__.push((arguments[i__27778__auto___37659]));

var G__37660 = (i__27778__auto___37659 + (1));
i__27778__auto___37659 = G__37660;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37657){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37657));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37662 = arguments.length;
var i__27778__auto___37663 = (0);
while(true){
if((i__27778__auto___37663 < len__27777__auto___37662)){
args__27784__auto__.push((arguments[i__27778__auto___37663]));

var G__37664 = (i__27778__auto___37663 + (1));
i__27778__auto___37663 = G__37664;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37661){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37661));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37666 = arguments.length;
var i__27778__auto___37667 = (0);
while(true){
if((i__27778__auto___37667 < len__27777__auto___37666)){
args__27784__auto__.push((arguments[i__27778__auto___37667]));

var G__37668 = (i__27778__auto___37667 + (1));
i__27778__auto___37667 = G__37668;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37665){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37665));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37670 = arguments.length;
var i__27778__auto___37671 = (0);
while(true){
if((i__27778__auto___37671 < len__27777__auto___37670)){
args__27784__auto__.push((arguments[i__27778__auto___37671]));

var G__37672 = (i__27778__auto___37671 + (1));
i__27778__auto___37671 = G__37672;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37669){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37669));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37674 = arguments.length;
var i__27778__auto___37675 = (0);
while(true){
if((i__27778__auto___37675 < len__27777__auto___37674)){
args__27784__auto__.push((arguments[i__27778__auto___37675]));

var G__37676 = (i__27778__auto___37675 + (1));
i__27778__auto___37675 = G__37676;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37673){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37673));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37684 = arguments.length;
var i__27778__auto___37685 = (0);
while(true){
if((i__27778__auto___37685 < len__27777__auto___37684)){
args__27784__auto__.push((arguments[i__27778__auto___37685]));

var G__37686 = (i__27778__auto___37685 + (1));
i__27778__auto___37685 = G__37686;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37680){
var vec__37681 = p__37680;
var state_override = cljs.core.nth.call(null,vec__37681,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37681,state_override){
return (function (p1__37677_SHARP_){
return cljs.core.merge.call(null,p1__37677_SHARP_,state_override);
});})(vec__37681,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37678){
var G__37679 = cljs.core.first.call(null,seq37678);
var seq37678__$1 = cljs.core.next.call(null,seq37678);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37679,seq37678__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37688 = arguments.length;
var i__27778__auto___37689 = (0);
while(true){
if((i__27778__auto___37689 < len__27777__auto___37688)){
args__27784__auto__.push((arguments[i__27778__auto___37689]));

var G__37690 = (i__27778__auto___37689 + (1));
i__27778__auto___37689 = G__37690;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37687){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37687));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37693 = arguments.length;
var i__27778__auto___37694 = (0);
while(true){
if((i__27778__auto___37694 < len__27777__auto___37693)){
args__27784__auto__.push((arguments[i__27778__auto___37694]));

var G__37695 = (i__27778__auto___37694 + (1));
i__27778__auto___37694 = G__37695;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37691){
var G__37692 = cljs.core.first.call(null,seq37691);
var seq37691__$1 = cljs.core.next.call(null,seq37691);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37692,seq37691__$1);
});


//# sourceMappingURL=format.js.map?rel=1496384620300