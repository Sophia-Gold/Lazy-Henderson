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
var x17611_17612 = value;

x17611_17612.devtools$protocols$IGroup$ = true;


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
var x17616_17617 = value;

x17616_17617.devtools$protocols$ITemplate$ = true;


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
var x17621_17622 = value;

x17621_17622.devtools$protocols$ISurrogate$ = true;


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
var and__6926__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6926__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8128__auto__ = [];
var len__8121__auto___17630 = arguments.length;
var i__8122__auto___17631 = (0);
while(true){
if((i__8122__auto___17631 < len__8121__auto___17630)){
args__8128__auto__.push((arguments[i__8122__auto___17631]));

var G__17632 = (i__8122__auto___17631 + (1));
i__8122__auto___17631 = G__17632;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((0) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8129__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__17626_17633 = cljs.core.seq.call(null,items);
var chunk__17627_17634 = null;
var count__17628_17635 = (0);
var i__17629_17636 = (0);
while(true){
if((i__17629_17636 < count__17628_17635)){
var item_17637 = cljs.core._nth.call(null,chunk__17627_17634,i__17629_17636);
if(cljs.core.some_QMARK_.call(null,item_17637)){
if(cljs.core.coll_QMARK_.call(null,item_17637)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_17637)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_17637));
}
} else {
}

var G__17638 = seq__17626_17633;
var G__17639 = chunk__17627_17634;
var G__17640 = count__17628_17635;
var G__17641 = (i__17629_17636 + (1));
seq__17626_17633 = G__17638;
chunk__17627_17634 = G__17639;
count__17628_17635 = G__17640;
i__17629_17636 = G__17641;
continue;
} else {
var temp__6753__auto___17642 = cljs.core.seq.call(null,seq__17626_17633);
if(temp__6753__auto___17642){
var seq__17626_17643__$1 = temp__6753__auto___17642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17626_17643__$1)){
var c__7841__auto___17644 = cljs.core.chunk_first.call(null,seq__17626_17643__$1);
var G__17645 = cljs.core.chunk_rest.call(null,seq__17626_17643__$1);
var G__17646 = c__7841__auto___17644;
var G__17647 = cljs.core.count.call(null,c__7841__auto___17644);
var G__17648 = (0);
seq__17626_17633 = G__17645;
chunk__17627_17634 = G__17646;
count__17628_17635 = G__17647;
i__17629_17636 = G__17648;
continue;
} else {
var item_17649 = cljs.core.first.call(null,seq__17626_17643__$1);
if(cljs.core.some_QMARK_.call(null,item_17649)){
if(cljs.core.coll_QMARK_.call(null,item_17649)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_17649)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_17649));
}
} else {
}

var G__17650 = cljs.core.next.call(null,seq__17626_17643__$1);
var G__17651 = null;
var G__17652 = (0);
var G__17653 = (0);
seq__17626_17633 = G__17650;
chunk__17627_17634 = G__17651;
count__17628_17635 = G__17652;
i__17629_17636 = G__17653;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq17625){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17625));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8128__auto__ = [];
var len__8121__auto___17661 = arguments.length;
var i__8122__auto___17662 = (0);
while(true){
if((i__8122__auto___17662 < len__8121__auto___17661)){
args__8128__auto__.push((arguments[i__8122__auto___17662]));

var G__17663 = (i__8122__auto___17662 + (1));
i__8122__auto___17662 = G__17663;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((2) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8129__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__17657_17664 = cljs.core.seq.call(null,children);
var chunk__17658_17665 = null;
var count__17659_17666 = (0);
var i__17660_17667 = (0);
while(true){
if((i__17660_17667 < count__17659_17666)){
var child_17668 = cljs.core._nth.call(null,chunk__17658_17665,i__17660_17667);
if(cljs.core.some_QMARK_.call(null,child_17668)){
if(cljs.core.coll_QMARK_.call(null,child_17668)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_17668))));
} else {
var temp__6751__auto___17669 = devtools.formatters.helpers.pref.call(null,child_17668);
if(cljs.core.truth_(temp__6751__auto___17669)){
var child_value_17670 = temp__6751__auto___17669;
template.push(child_value_17670);
} else {
}
}
} else {
}

var G__17671 = seq__17657_17664;
var G__17672 = chunk__17658_17665;
var G__17673 = count__17659_17666;
var G__17674 = (i__17660_17667 + (1));
seq__17657_17664 = G__17671;
chunk__17658_17665 = G__17672;
count__17659_17666 = G__17673;
i__17660_17667 = G__17674;
continue;
} else {
var temp__6753__auto___17675 = cljs.core.seq.call(null,seq__17657_17664);
if(temp__6753__auto___17675){
var seq__17657_17676__$1 = temp__6753__auto___17675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17657_17676__$1)){
var c__7841__auto___17677 = cljs.core.chunk_first.call(null,seq__17657_17676__$1);
var G__17678 = cljs.core.chunk_rest.call(null,seq__17657_17676__$1);
var G__17679 = c__7841__auto___17677;
var G__17680 = cljs.core.count.call(null,c__7841__auto___17677);
var G__17681 = (0);
seq__17657_17664 = G__17678;
chunk__17658_17665 = G__17679;
count__17659_17666 = G__17680;
i__17660_17667 = G__17681;
continue;
} else {
var child_17682 = cljs.core.first.call(null,seq__17657_17676__$1);
if(cljs.core.some_QMARK_.call(null,child_17682)){
if(cljs.core.coll_QMARK_.call(null,child_17682)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_17682))));
} else {
var temp__6751__auto___17683 = devtools.formatters.helpers.pref.call(null,child_17682);
if(cljs.core.truth_(temp__6751__auto___17683)){
var child_value_17684 = temp__6751__auto___17683;
template.push(child_value_17684);
} else {
}
}
} else {
}

var G__17685 = cljs.core.next.call(null,seq__17657_17676__$1);
var G__17686 = null;
var G__17687 = (0);
var G__17688 = (0);
seq__17657_17664 = G__17685;
chunk__17658_17665 = G__17686;
count__17659_17666 = G__17687;
i__17660_17667 = G__17688;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq17654){
var G__17655 = cljs.core.first.call(null,seq17654);
var seq17654__$1 = cljs.core.next.call(null,seq17654);
var G__17656 = cljs.core.first.call(null,seq17654__$1);
var seq17654__$2 = cljs.core.next.call(null,seq17654__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__17655,G__17656,seq17654__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8128__auto__ = [];
var len__8121__auto___17691 = arguments.length;
var i__8122__auto___17692 = (0);
while(true){
if((i__8122__auto___17692 < len__8121__auto___17691)){
args__8128__auto__.push((arguments[i__8122__auto___17692]));

var G__17693 = (i__8122__auto___17692 + (1));
i__8122__auto___17692 = G__17693;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((1) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8129__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq17689){
var G__17690 = cljs.core.first.call(null,seq17689);
var seq17689__$1 = cljs.core.next.call(null,seq17689);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17690,seq17689__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8128__auto__ = [];
var len__8121__auto___17696 = arguments.length;
var i__8122__auto___17697 = (0);
while(true){
if((i__8122__auto___17697 < len__8121__auto___17696)){
args__8128__auto__.push((arguments[i__8122__auto___17697]));

var G__17698 = (i__8122__auto___17697 + (1));
i__8122__auto___17697 = G__17698;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((1) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8129__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq17694){
var G__17695 = cljs.core.first.call(null,seq17694);
var seq17694__$1 = cljs.core.next.call(null,seq17694);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17695,seq17694__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args17699 = [];
var len__8121__auto___17704 = arguments.length;
var i__8122__auto___17705 = (0);
while(true){
if((i__8122__auto___17705 < len__8121__auto___17704)){
args17699.push((arguments[i__8122__auto___17705]));

var G__17706 = (i__8122__auto___17705 + (1));
i__8122__auto___17705 = G__17706;
continue;
} else {
}
break;
}

var G__17701 = args17699.length;
switch (G__17701) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17699.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj17703 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6938__auto__ = start_index;
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return (0);
}
})()};
return obj17703;
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
var args__8128__auto__ = [];
var len__8121__auto___17714 = arguments.length;
var i__8122__auto___17715 = (0);
while(true){
if((i__8122__auto___17715 < len__8121__auto___17714)){
args__8128__auto__.push((arguments[i__8122__auto___17715]));

var G__17716 = (i__8122__auto___17715 + (1));
i__8122__auto___17715 = G__17716;
continue;
} else {
}
break;
}

var argseq__8129__auto__ = ((((1) < args__8128__auto__.length))?(new cljs.core.IndexedSeq(args__8128__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8129__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__17710){
var vec__17711 = p__17710;
var state_override_fn = cljs.core.nth.call(null,vec__17711,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq17708){
var G__17709 = cljs.core.first.call(null,seq17708);
var seq17708__$1 = cljs.core.next.call(null,seq17708);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__17709,seq17708__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8022__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17720_17723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17721_17724 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17720_17723,_STAR_print_fn_STAR_17721_17724,sb__8022__auto__){
return (function (x__8023__auto__){
return sb__8022__auto__.append(x__8023__auto__);
});})(_STAR_print_newline_STAR_17720_17723,_STAR_print_fn_STAR_17721_17724,sb__8022__auto__))
;

try{var _STAR_print_level_STAR_17722_17725 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17722_17725;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17721_17724;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17720_17723;
}
return [cljs.core.str(sb__8022__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_17727 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17727;
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
var G__17729 = name;
switch (G__17729) {
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
var vec__17734 = tag;
var html_tag = cljs.core.nth.call(null,vec__17734,(0),null);
var style = cljs.core.nth.call(null,vec__17734,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_17738 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_17738;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_17741 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_17742 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_17742;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_17741;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__17743 = initial_value;
var G__17744 = value.call(null);
initial_value = G__17743;
value = G__17744;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__17745 = initial_value;
var G__17746 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__17745;
value = G__17746;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__17747 = initial_value;
var G__17748 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__17747;
value = G__17748;
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

//# sourceMappingURL=templating.js.map?rel=1492673033119