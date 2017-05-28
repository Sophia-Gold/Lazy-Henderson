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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"make_template");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"make_group");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"make_reference");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"make_surrogate");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"render_markup");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"_LT_header_GT_");
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
var o__44139__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__44139__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__44139__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__44139__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__44138__auto__ = temp__6753__auto____$2;
return goog.object.get(o__44138__auto__,"_LT_standard_body_GT_");
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
var len__27785__auto___44160 = arguments.length;
var i__27786__auto___44161 = (0);
while(true){
if((i__27786__auto___44161 < len__27785__auto___44160)){
args__27792__auto__.push((arguments[i__27786__auto___44161]));

var G__44162 = (i__27786__auto___44161 + (1));
i__27786__auto___44161 = G__44162;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq44159){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44159));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44164 = arguments.length;
var i__27786__auto___44165 = (0);
while(true){
if((i__27786__auto___44165 < len__27785__auto___44164)){
args__27792__auto__.push((arguments[i__27786__auto___44165]));

var G__44166 = (i__27786__auto___44165 + (1));
i__27786__auto___44165 = G__44166;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq44163){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44163));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44168 = arguments.length;
var i__27786__auto___44169 = (0);
while(true){
if((i__27786__auto___44169 < len__27785__auto___44168)){
args__27792__auto__.push((arguments[i__27786__auto___44169]));

var G__44170 = (i__27786__auto___44169 + (1));
i__27786__auto___44169 = G__44170;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq44167){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44167));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44172 = arguments.length;
var i__27786__auto___44173 = (0);
while(true){
if((i__27786__auto___44173 < len__27785__auto___44172)){
args__27792__auto__.push((arguments[i__27786__auto___44173]));

var G__44174 = (i__27786__auto___44173 + (1));
i__27786__auto___44173 = G__44174;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq44171){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44171));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44176 = arguments.length;
var i__27786__auto___44177 = (0);
while(true){
if((i__27786__auto___44177 < len__27785__auto___44176)){
args__27792__auto__.push((arguments[i__27786__auto___44177]));

var G__44178 = (i__27786__auto___44177 + (1));
i__27786__auto___44177 = G__44178;
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

devtools.format.template.cljs$lang$applyTo = (function (seq44175){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44175));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44180 = arguments.length;
var i__27786__auto___44181 = (0);
while(true){
if((i__27786__auto___44181 < len__27785__auto___44180)){
args__27792__auto__.push((arguments[i__27786__auto___44181]));

var G__44182 = (i__27786__auto___44181 + (1));
i__27786__auto___44181 = G__44182;
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

devtools.format.group.cljs$lang$applyTo = (function (seq44179){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44179));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44184 = arguments.length;
var i__27786__auto___44185 = (0);
while(true){
if((i__27786__auto___44185 < len__27785__auto___44184)){
args__27792__auto__.push((arguments[i__27786__auto___44185]));

var G__44186 = (i__27786__auto___44185 + (1));
i__27786__auto___44185 = G__44186;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq44183){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44183));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44194 = arguments.length;
var i__27786__auto___44195 = (0);
while(true){
if((i__27786__auto___44195 < len__27785__auto___44194)){
args__27792__auto__.push((arguments[i__27786__auto___44195]));

var G__44196 = (i__27786__auto___44195 + (1));
i__27786__auto___44195 = G__44196;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__44190){
var vec__44191 = p__44190;
var state_override = cljs.core.nth.call(null,vec__44191,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__44191,state_override){
return (function (p1__44187_SHARP_){
return cljs.core.merge.call(null,p1__44187_SHARP_,state_override);
});})(vec__44191,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq44188){
var G__44189 = cljs.core.first.call(null,seq44188);
var seq44188__$1 = cljs.core.next.call(null,seq44188);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__44189,seq44188__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44198 = arguments.length;
var i__27786__auto___44199 = (0);
while(true){
if((i__27786__auto___44199 < len__27785__auto___44198)){
args__27792__auto__.push((arguments[i__27786__auto___44199]));

var G__44200 = (i__27786__auto___44199 + (1));
i__27786__auto___44199 = G__44200;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq44197){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44197));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___44203 = arguments.length;
var i__27786__auto___44204 = (0);
while(true){
if((i__27786__auto___44204 < len__27785__auto___44203)){
args__27792__auto__.push((arguments[i__27786__auto___44204]));

var G__44205 = (i__27786__auto___44204 + (1));
i__27786__auto___44204 = G__44205;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq44201){
var G__44202 = cljs.core.first.call(null,seq44201);
var seq44201__$1 = cljs.core.next.call(null,seq44201);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__44202,seq44201__$1);
});


//# sourceMappingURL=format.js.map?rel=1495936729039