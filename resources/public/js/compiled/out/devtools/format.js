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
var x__27315__auto__ = (((value == null))?null:value);
var m__27316__auto__ = (devtools.format._header[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,value);
} else {
var m__27316__auto____$1 = (devtools.format._header["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,value);
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
var x__27315__auto__ = (((value == null))?null:value);
var m__27316__auto__ = (devtools.format._has_body[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,value);
} else {
var m__27316__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,value);
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
var x__27315__auto__ = (((value == null))?null:value);
var m__27316__auto__ = (devtools.format._body[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,value);
} else {
var m__27316__auto____$1 = (devtools.format._body["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,value);
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"make_template");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"make_group");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"make_reference");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"make_surrogate");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"render_markup");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"_LT_header_GT_");
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
var o__44114__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44114__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44114__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44114__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44113__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44113__auto__,"_LT_standard_body_GT_");
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
var args__27792__auto__ = [];
var len__27785__auto___44135 = arguments.length;
var i__27786__auto___44136 = (0);
while(true){
if((i__27786__auto___44136 < len__27785__auto___44135)){
args__27792__auto__.push((arguments[i__27786__auto___44136]));

var G__44137 = (i__27786__auto___44136 + (1));
i__27786__auto___44136 = G__44137;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq44134){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44134));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44139 = arguments.length;
var i__27786__auto___44140 = (0);
while(true){
if((i__27786__auto___44140 < len__27785__auto___44139)){
args__27792__auto__.push((arguments[i__27786__auto___44140]));

var G__44141 = (i__27786__auto___44140 + (1));
i__27786__auto___44140 = G__44141;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq44138){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44138));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44143 = arguments.length;
var i__27786__auto___44144 = (0);
while(true){
if((i__27786__auto___44144 < len__27785__auto___44143)){
args__27792__auto__.push((arguments[i__27786__auto___44144]));

var G__44145 = (i__27786__auto___44144 + (1));
i__27786__auto___44144 = G__44145;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq44142){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44142));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44147 = arguments.length;
var i__27786__auto___44148 = (0);
while(true){
if((i__27786__auto___44148 < len__27785__auto___44147)){
args__27792__auto__.push((arguments[i__27786__auto___44148]));

var G__44149 = (i__27786__auto___44148 + (1));
i__27786__auto___44148 = G__44149;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq44146){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44146));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44151 = arguments.length;
var i__27786__auto___44152 = (0);
while(true){
if((i__27786__auto___44152 < len__27785__auto___44151)){
args__27792__auto__.push((arguments[i__27786__auto___44152]));

var G__44153 = (i__27786__auto___44152 + (1));
i__27786__auto___44152 = G__44153;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq44150){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44150));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44155 = arguments.length;
var i__27786__auto___44156 = (0);
while(true){
if((i__27786__auto___44156 < len__27785__auto___44155)){
args__27792__auto__.push((arguments[i__27786__auto___44156]));

var G__44157 = (i__27786__auto___44156 + (1));
i__27786__auto___44156 = G__44157;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq44154){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44154));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44159 = arguments.length;
var i__27786__auto___44160 = (0);
while(true){
if((i__27786__auto___44160 < len__27785__auto___44159)){
args__27792__auto__.push((arguments[i__27786__auto___44160]));

var G__44161 = (i__27786__auto___44160 + (1));
i__27786__auto___44160 = G__44161;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq44158){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44158));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44169 = arguments.length;
var i__27786__auto___44170 = (0);
while(true){
if((i__27786__auto___44170 < len__27785__auto___44169)){
args__27792__auto__.push((arguments[i__27786__auto___44170]));

var G__44171 = (i__27786__auto___44170 + (1));
i__27786__auto___44170 = G__44171;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44165){
var vec__44166 = p__44165;
var state_override = cljs.core.nth.call(null,vec__44166,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__44166,state_override){
return (function (p1__44162_SHARP_){
return cljs.core.merge.call(null,p1__44162_SHARP_,state_override);
});})(vec__44166,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq44163){
var G__44164 = cljs.core.first.call(null,seq44163);
var seq44163__$1 = cljs.core.next.call(null,seq44163);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__44164,seq44163__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44173 = arguments.length;
var i__27786__auto___44174 = (0);
while(true){
if((i__27786__auto___44174 < len__27785__auto___44173)){
args__27792__auto__.push((arguments[i__27786__auto___44174]));

var G__44175 = (i__27786__auto___44174 + (1));
i__27786__auto___44174 = G__44175;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq44172){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44172));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44178 = arguments.length;
var i__27786__auto___44179 = (0);
while(true){
if((i__27786__auto___44179 < len__27785__auto___44178)){
args__27792__auto__.push((arguments[i__27786__auto___44179]));

var G__44180 = (i__27786__auto___44179 + (1));
i__27786__auto___44179 = G__44180;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq44176){
var G__44177 = cljs.core.first.call(null,seq44176);
var seq44176__$1 = cljs.core.next.call(null,seq44176);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__44177,seq44176__$1);
});


//# sourceMappingURL=format.js.map?rel=1496386704113