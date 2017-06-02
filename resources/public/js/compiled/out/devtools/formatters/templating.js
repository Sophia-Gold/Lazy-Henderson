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
var x46628_46629 = value;

x46628_46629.devtools$protocols$IGroup$ = true;


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
var x46633_46634 = value;

x46633_46634.devtools$protocols$ITemplate$ = true;


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
var x46638_46639 = value;

x46638_46639.devtools$protocols$ISurrogate$ = true;


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
var and__26590__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26590__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46647 = arguments.length;
var i__27786__auto___46648 = (0);
while(true){
if((i__27786__auto___46648 < len__27785__auto___46647)){
args__27792__auto__.push((arguments[i__27786__auto___46648]));

var G__46649 = (i__27786__auto___46648 + (1));
i__27786__auto___46648 = G__46649;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__46643_46650 = cljs.core.seq.call(null,items);
var chunk__46644_46651 = null;
var count__46645_46652 = (0);
var i__46646_46653 = (0);
while(true){
if((i__46646_46653 < count__46645_46652)){
var item_46654 = cljs.core._nth.call(null,chunk__46644_46651,i__46646_46653);
if(cljs.core.some_QMARK_.call(null,item_46654)){
if(cljs.core.coll_QMARK_.call(null,item_46654)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46654)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46654));
}
} else {
}

var G__46655 = seq__46643_46650;
var G__46656 = chunk__46644_46651;
var G__46657 = count__46645_46652;
var G__46658 = (i__46646_46653 + (1));
seq__46643_46650 = G__46655;
chunk__46644_46651 = G__46656;
count__46645_46652 = G__46657;
i__46646_46653 = G__46658;
continue;
} else {
var temp__6753__auto___46659 = cljs.core.seq.call(null,seq__46643_46650);
if(temp__6753__auto___46659){
var seq__46643_46660__$1 = temp__6753__auto___46659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46643_46660__$1)){
var c__27505__auto___46661 = cljs.core.chunk_first.call(null,seq__46643_46660__$1);
var G__46662 = cljs.core.chunk_rest.call(null,seq__46643_46660__$1);
var G__46663 = c__27505__auto___46661;
var G__46664 = cljs.core.count.call(null,c__27505__auto___46661);
var G__46665 = (0);
seq__46643_46650 = G__46662;
chunk__46644_46651 = G__46663;
count__46645_46652 = G__46664;
i__46646_46653 = G__46665;
continue;
} else {
var item_46666 = cljs.core.first.call(null,seq__46643_46660__$1);
if(cljs.core.some_QMARK_.call(null,item_46666)){
if(cljs.core.coll_QMARK_.call(null,item_46666)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46666)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46666));
}
} else {
}

var G__46667 = cljs.core.next.call(null,seq__46643_46660__$1);
var G__46668 = null;
var G__46669 = (0);
var G__46670 = (0);
seq__46643_46650 = G__46667;
chunk__46644_46651 = G__46668;
count__46645_46652 = G__46669;
i__46646_46653 = G__46670;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq46642){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46642));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46678 = arguments.length;
var i__27786__auto___46679 = (0);
while(true){
if((i__27786__auto___46679 < len__27785__auto___46678)){
args__27792__auto__.push((arguments[i__27786__auto___46679]));

var G__46680 = (i__27786__auto___46679 + (1));
i__27786__auto___46679 = G__46680;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((2) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27793__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__46674_46681 = cljs.core.seq.call(null,children);
var chunk__46675_46682 = null;
var count__46676_46683 = (0);
var i__46677_46684 = (0);
while(true){
if((i__46677_46684 < count__46676_46683)){
var child_46685 = cljs.core._nth.call(null,chunk__46675_46682,i__46677_46684);
if(cljs.core.some_QMARK_.call(null,child_46685)){
if(cljs.core.coll_QMARK_.call(null,child_46685)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46685))));
} else {
var temp__6751__auto___46686 = devtools.formatters.helpers.pref.call(null,child_46685);
if(cljs.core.truth_(temp__6751__auto___46686)){
var child_value_46687 = temp__6751__auto___46686;
template.push(child_value_46687);
} else {
}
}
} else {
}

var G__46688 = seq__46674_46681;
var G__46689 = chunk__46675_46682;
var G__46690 = count__46676_46683;
var G__46691 = (i__46677_46684 + (1));
seq__46674_46681 = G__46688;
chunk__46675_46682 = G__46689;
count__46676_46683 = G__46690;
i__46677_46684 = G__46691;
continue;
} else {
var temp__6753__auto___46692 = cljs.core.seq.call(null,seq__46674_46681);
if(temp__6753__auto___46692){
var seq__46674_46693__$1 = temp__6753__auto___46692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46674_46693__$1)){
var c__27505__auto___46694 = cljs.core.chunk_first.call(null,seq__46674_46693__$1);
var G__46695 = cljs.core.chunk_rest.call(null,seq__46674_46693__$1);
var G__46696 = c__27505__auto___46694;
var G__46697 = cljs.core.count.call(null,c__27505__auto___46694);
var G__46698 = (0);
seq__46674_46681 = G__46695;
chunk__46675_46682 = G__46696;
count__46676_46683 = G__46697;
i__46677_46684 = G__46698;
continue;
} else {
var child_46699 = cljs.core.first.call(null,seq__46674_46693__$1);
if(cljs.core.some_QMARK_.call(null,child_46699)){
if(cljs.core.coll_QMARK_.call(null,child_46699)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46699))));
} else {
var temp__6751__auto___46700 = devtools.formatters.helpers.pref.call(null,child_46699);
if(cljs.core.truth_(temp__6751__auto___46700)){
var child_value_46701 = temp__6751__auto___46700;
template.push(child_value_46701);
} else {
}
}
} else {
}

var G__46702 = cljs.core.next.call(null,seq__46674_46693__$1);
var G__46703 = null;
var G__46704 = (0);
var G__46705 = (0);
seq__46674_46681 = G__46702;
chunk__46675_46682 = G__46703;
count__46676_46683 = G__46704;
i__46677_46684 = G__46705;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq46671){
var G__46672 = cljs.core.first.call(null,seq46671);
var seq46671__$1 = cljs.core.next.call(null,seq46671);
var G__46673 = cljs.core.first.call(null,seq46671__$1);
var seq46671__$2 = cljs.core.next.call(null,seq46671__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__46672,G__46673,seq46671__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46708 = arguments.length;
var i__27786__auto___46709 = (0);
while(true){
if((i__27786__auto___46709 < len__27785__auto___46708)){
args__27792__auto__.push((arguments[i__27786__auto___46709]));

var G__46710 = (i__27786__auto___46709 + (1));
i__27786__auto___46709 = G__46710;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq46706){
var G__46707 = cljs.core.first.call(null,seq46706);
var seq46706__$1 = cljs.core.next.call(null,seq46706);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46707,seq46706__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46713 = arguments.length;
var i__27786__auto___46714 = (0);
while(true){
if((i__27786__auto___46714 < len__27785__auto___46713)){
args__27792__auto__.push((arguments[i__27786__auto___46714]));

var G__46715 = (i__27786__auto___46714 + (1));
i__27786__auto___46714 = G__46715;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq46711){
var G__46712 = cljs.core.first.call(null,seq46711);
var seq46711__$1 = cljs.core.next.call(null,seq46711);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46712,seq46711__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args46716 = [];
var len__27785__auto___46721 = arguments.length;
var i__27786__auto___46722 = (0);
while(true){
if((i__27786__auto___46722 < len__27785__auto___46721)){
args46716.push((arguments[i__27786__auto___46722]));

var G__46723 = (i__27786__auto___46722 + (1));
i__27786__auto___46722 = G__46723;
continue;
} else {
}
break;
}

var G__46718 = args46716.length;
switch (G__46718) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46716.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj46720 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26602__auto__ = start_index;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return (0);
}
})()};
return obj46720;
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
var args__27792__auto__ = [];
var len__27785__auto___46731 = arguments.length;
var i__27786__auto___46732 = (0);
while(true){
if((i__27786__auto___46732 < len__27785__auto___46731)){
args__27792__auto__.push((arguments[i__27786__auto___46732]));

var G__46733 = (i__27786__auto___46732 + (1));
i__27786__auto___46732 = G__46733;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__46727){
var vec__46728 = p__46727;
var state_override_fn = cljs.core.nth.call(null,vec__46728,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq46725){
var G__46726 = cljs.core.first.call(null,seq46725);
var seq46725__$1 = cljs.core.next.call(null,seq46725);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__46726,seq46725__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27686__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46737_46740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_46738_46741 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46737_46740,_STAR_print_fn_STAR_46738_46741,sb__27686__auto__){
return (function (x__27687__auto__){
return sb__27686__auto__.append(x__27687__auto__);
});})(_STAR_print_newline_STAR_46737_46740,_STAR_print_fn_STAR_46738_46741,sb__27686__auto__))
;

try{var _STAR_print_level_STAR_46739_46742 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46739_46742;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46738_46741;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46737_46740;
}
return [cljs.core.str(sb__27686__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_46744 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46744;
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
var G__46746 = name;
switch (G__46746) {
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
var vec__46751 = tag;
var html_tag = cljs.core.nth.call(null,vec__46751,(0),null);
var style = cljs.core.nth.call(null,vec__46751,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_46755 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46755;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_46758 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_46759 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46759;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_46758;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__46760 = initial_value;
var G__46761 = value.call(null);
initial_value = G__46760;
value = G__46761;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__46762 = initial_value;
var G__46763 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__46762;
value = G__46763;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__46764 = initial_value;
var G__46765 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__46764;
value = G__46765;
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

//# sourceMappingURL=templating.js.map?rel=1496385414321