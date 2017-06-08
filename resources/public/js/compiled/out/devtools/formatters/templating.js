// Compiled by ClojureScript 1.9.198 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38531_38532 = value;
x38531_38532.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38536_38537 = value;
x38536_38537.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38541_38542 = value;
x38541_38542.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26582__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26582__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26582__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38550 = arguments.length;
var i__27778__auto___38551 = (0);
while(true){
if((i__27778__auto___38551 < len__27777__auto___38550)){
args__27784__auto__.push((arguments[i__27778__auto___38551]));

var G__38552 = (i__27778__auto___38551 + (1));
i__27778__auto___38551 = G__38552;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38546_38553 = cljs.core.seq.call(null,items);
var chunk__38547_38554 = null;
var count__38548_38555 = (0);
var i__38549_38556 = (0);
while(true){
if((i__38549_38556 < count__38548_38555)){
var item_38557 = cljs.core._nth.call(null,chunk__38547_38554,i__38549_38556);
if(cljs.core.some_QMARK_.call(null,item_38557)){
if(cljs.core.coll_QMARK_.call(null,item_38557)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38557)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38557));
}
} else {
}

var G__38558 = seq__38546_38553;
var G__38559 = chunk__38547_38554;
var G__38560 = count__38548_38555;
var G__38561 = (i__38549_38556 + (1));
seq__38546_38553 = G__38558;
chunk__38547_38554 = G__38559;
count__38548_38555 = G__38560;
i__38549_38556 = G__38561;
continue;
} else {
var temp__6753__auto___38562 = cljs.core.seq.call(null,seq__38546_38553);
if(temp__6753__auto___38562){
var seq__38546_38563__$1 = temp__6753__auto___38562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38546_38563__$1)){
var c__27497__auto___38564 = cljs.core.chunk_first.call(null,seq__38546_38563__$1);
var G__38565 = cljs.core.chunk_rest.call(null,seq__38546_38563__$1);
var G__38566 = c__27497__auto___38564;
var G__38567 = cljs.core.count.call(null,c__27497__auto___38564);
var G__38568 = (0);
seq__38546_38553 = G__38565;
chunk__38547_38554 = G__38566;
count__38548_38555 = G__38567;
i__38549_38556 = G__38568;
continue;
} else {
var item_38569 = cljs.core.first.call(null,seq__38546_38563__$1);
if(cljs.core.some_QMARK_.call(null,item_38569)){
if(cljs.core.coll_QMARK_.call(null,item_38569)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38569)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38569));
}
} else {
}

var G__38570 = cljs.core.next.call(null,seq__38546_38563__$1);
var G__38571 = null;
var G__38572 = (0);
var G__38573 = (0);
seq__38546_38553 = G__38570;
chunk__38547_38554 = G__38571;
count__38548_38555 = G__38572;
i__38549_38556 = G__38573;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38545){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38545));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38581 = arguments.length;
var i__27778__auto___38582 = (0);
while(true){
if((i__27778__auto___38582 < len__27777__auto___38581)){
args__27784__auto__.push((arguments[i__27778__auto___38582]));

var G__38583 = (i__27778__auto___38582 + (1));
i__27778__auto___38582 = G__38583;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((2) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27785__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38577_38584 = cljs.core.seq.call(null,children);
var chunk__38578_38585 = null;
var count__38579_38586 = (0);
var i__38580_38587 = (0);
while(true){
if((i__38580_38587 < count__38579_38586)){
var child_38588 = cljs.core._nth.call(null,chunk__38578_38585,i__38580_38587);
if(cljs.core.some_QMARK_.call(null,child_38588)){
if(cljs.core.coll_QMARK_.call(null,child_38588)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38588))));
} else {
var temp__6751__auto___38589 = devtools.formatters.helpers.pref.call(null,child_38588);
if(cljs.core.truth_(temp__6751__auto___38589)){
var child_value_38590 = temp__6751__auto___38589;
template.push(child_value_38590);
} else {
}
}
} else {
}

var G__38591 = seq__38577_38584;
var G__38592 = chunk__38578_38585;
var G__38593 = count__38579_38586;
var G__38594 = (i__38580_38587 + (1));
seq__38577_38584 = G__38591;
chunk__38578_38585 = G__38592;
count__38579_38586 = G__38593;
i__38580_38587 = G__38594;
continue;
} else {
var temp__6753__auto___38595 = cljs.core.seq.call(null,seq__38577_38584);
if(temp__6753__auto___38595){
var seq__38577_38596__$1 = temp__6753__auto___38595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38577_38596__$1)){
var c__27497__auto___38597 = cljs.core.chunk_first.call(null,seq__38577_38596__$1);
var G__38598 = cljs.core.chunk_rest.call(null,seq__38577_38596__$1);
var G__38599 = c__27497__auto___38597;
var G__38600 = cljs.core.count.call(null,c__27497__auto___38597);
var G__38601 = (0);
seq__38577_38584 = G__38598;
chunk__38578_38585 = G__38599;
count__38579_38586 = G__38600;
i__38580_38587 = G__38601;
continue;
} else {
var child_38602 = cljs.core.first.call(null,seq__38577_38596__$1);
if(cljs.core.some_QMARK_.call(null,child_38602)){
if(cljs.core.coll_QMARK_.call(null,child_38602)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38602))));
} else {
var temp__6751__auto___38603 = devtools.formatters.helpers.pref.call(null,child_38602);
if(cljs.core.truth_(temp__6751__auto___38603)){
var child_value_38604 = temp__6751__auto___38603;
template.push(child_value_38604);
} else {
}
}
} else {
}

var G__38605 = cljs.core.next.call(null,seq__38577_38596__$1);
var G__38606 = null;
var G__38607 = (0);
var G__38608 = (0);
seq__38577_38584 = G__38605;
chunk__38578_38585 = G__38606;
count__38579_38586 = G__38607;
i__38580_38587 = G__38608;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38574){
var G__38575 = cljs.core.first.call(null,seq38574);
var seq38574__$1 = cljs.core.next.call(null,seq38574);
var G__38576 = cljs.core.first.call(null,seq38574__$1);
var seq38574__$2 = cljs.core.next.call(null,seq38574__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38575,G__38576,seq38574__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38611 = arguments.length;
var i__27778__auto___38612 = (0);
while(true){
if((i__27778__auto___38612 < len__27777__auto___38611)){
args__27784__auto__.push((arguments[i__27778__auto___38612]));

var G__38613 = (i__27778__auto___38612 + (1));
i__27778__auto___38612 = G__38613;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38609){
var G__38610 = cljs.core.first.call(null,seq38609);
var seq38609__$1 = cljs.core.next.call(null,seq38609);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38610,seq38609__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38616 = arguments.length;
var i__27778__auto___38617 = (0);
while(true){
if((i__27778__auto___38617 < len__27777__auto___38616)){
args__27784__auto__.push((arguments[i__27778__auto___38617]));

var G__38618 = (i__27778__auto___38617 + (1));
i__27778__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38614){
var G__38615 = cljs.core.first.call(null,seq38614);
var seq38614__$1 = cljs.core.next.call(null,seq38614);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38615,seq38614__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38619 = [];
var len__27777__auto___38624 = arguments.length;
var i__27778__auto___38625 = (0);
while(true){
if((i__27778__auto___38625 < len__27777__auto___38624)){
args38619.push((arguments[i__27778__auto___38625]));

var G__38626 = (i__27778__auto___38625 + (1));
i__27778__auto___38625 = G__38626;
continue;
} else {
}
break;
}

var G__38621 = args38619.length;
switch (G__38621) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38619.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38623 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26594__auto__ = start_index;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return (0);
}
})()};
return obj38623;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27784__auto__ = [];
var len__27777__auto___38634 = arguments.length;
var i__27778__auto___38635 = (0);
while(true){
if((i__27778__auto___38635 < len__27777__auto___38634)){
args__27784__auto__.push((arguments[i__27778__auto___38635]));

var G__38636 = (i__27778__auto___38635 + (1));
i__27778__auto___38635 = G__38636;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38630){
var vec__38631 = p__38630;
var state_override_fn = cljs.core.nth.call(null,vec__38631,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38628){
var G__38629 = cljs.core.first.call(null,seq38628);
var seq38628__$1 = cljs.core.next.call(null,seq38628);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38629,seq38628__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27678__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38640_38643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38641_38644 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38640_38643,_STAR_print_fn_STAR_38641_38644,sb__27678__auto__){
return (function (x__27679__auto__){
return sb__27678__auto__.append(x__27679__auto__);
});})(_STAR_print_newline_STAR_38640_38643,_STAR_print_fn_STAR_38641_38644,sb__27678__auto__))
;

try{var _STAR_print_level_STAR_38642_38645 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38642_38645;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38641_38644;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38640_38643;
}
return [cljs.core.str(sb__27678__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38647 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38647;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38649 = name;
switch (G__38649) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38654 = tag;
var html_tag = cljs.core.nth.call(null,vec__38654,(0),null);
var style = cljs.core.nth.call(null,vec__38654,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38658 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38658;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38661 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38662 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38662;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38661;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38663 = initial_value;
var G__38664 = value.call(null);
initial_value = G__38663;
value = G__38664;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38665 = initial_value;
var G__38666 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38665;
value = G__38666;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38667 = initial_value;
var G__38668 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38667;
value = G__38668;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1496888104702