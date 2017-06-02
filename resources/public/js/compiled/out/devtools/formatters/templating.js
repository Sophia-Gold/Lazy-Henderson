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
var x46494_46495 = value;

x46494_46495.devtools$protocols$IGroup$ = true;


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
var x46499_46500 = value;

x46499_46500.devtools$protocols$ITemplate$ = true;


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
var x46504_46505 = value;

x46504_46505.devtools$protocols$ISurrogate$ = true;


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
var len__27785__auto___46513 = arguments.length;
var i__27786__auto___46514 = (0);
while(true){
if((i__27786__auto___46514 < len__27785__auto___46513)){
args__27792__auto__.push((arguments[i__27786__auto___46514]));

var G__46515 = (i__27786__auto___46514 + (1));
i__27786__auto___46514 = G__46515;
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
var seq__46509_46516 = cljs.core.seq.call(null,items);
var chunk__46510_46517 = null;
var count__46511_46518 = (0);
var i__46512_46519 = (0);
while(true){
if((i__46512_46519 < count__46511_46518)){
var item_46520 = cljs.core._nth.call(null,chunk__46510_46517,i__46512_46519);
if(cljs.core.some_QMARK_.call(null,item_46520)){
if(cljs.core.coll_QMARK_.call(null,item_46520)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46520)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46520));
}
} else {
}

var G__46521 = seq__46509_46516;
var G__46522 = chunk__46510_46517;
var G__46523 = count__46511_46518;
var G__46524 = (i__46512_46519 + (1));
seq__46509_46516 = G__46521;
chunk__46510_46517 = G__46522;
count__46511_46518 = G__46523;
i__46512_46519 = G__46524;
continue;
} else {
var temp__6753__auto___46525 = cljs.core.seq.call(null,seq__46509_46516);
if(temp__6753__auto___46525){
var seq__46509_46526__$1 = temp__6753__auto___46525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46509_46526__$1)){
var c__27505__auto___46527 = cljs.core.chunk_first.call(null,seq__46509_46526__$1);
var G__46528 = cljs.core.chunk_rest.call(null,seq__46509_46526__$1);
var G__46529 = c__27505__auto___46527;
var G__46530 = cljs.core.count.call(null,c__27505__auto___46527);
var G__46531 = (0);
seq__46509_46516 = G__46528;
chunk__46510_46517 = G__46529;
count__46511_46518 = G__46530;
i__46512_46519 = G__46531;
continue;
} else {
var item_46532 = cljs.core.first.call(null,seq__46509_46526__$1);
if(cljs.core.some_QMARK_.call(null,item_46532)){
if(cljs.core.coll_QMARK_.call(null,item_46532)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_46532)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_46532));
}
} else {
}

var G__46533 = cljs.core.next.call(null,seq__46509_46526__$1);
var G__46534 = null;
var G__46535 = (0);
var G__46536 = (0);
seq__46509_46516 = G__46533;
chunk__46510_46517 = G__46534;
count__46511_46518 = G__46535;
i__46512_46519 = G__46536;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq46508){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46508));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46544 = arguments.length;
var i__27786__auto___46545 = (0);
while(true){
if((i__27786__auto___46545 < len__27785__auto___46544)){
args__27792__auto__.push((arguments[i__27786__auto___46545]));

var G__46546 = (i__27786__auto___46545 + (1));
i__27786__auto___46545 = G__46546;
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
var seq__46540_46547 = cljs.core.seq.call(null,children);
var chunk__46541_46548 = null;
var count__46542_46549 = (0);
var i__46543_46550 = (0);
while(true){
if((i__46543_46550 < count__46542_46549)){
var child_46551 = cljs.core._nth.call(null,chunk__46541_46548,i__46543_46550);
if(cljs.core.some_QMARK_.call(null,child_46551)){
if(cljs.core.coll_QMARK_.call(null,child_46551)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46551))));
} else {
var temp__6751__auto___46552 = devtools.formatters.helpers.pref.call(null,child_46551);
if(cljs.core.truth_(temp__6751__auto___46552)){
var child_value_46553 = temp__6751__auto___46552;
template.push(child_value_46553);
} else {
}
}
} else {
}

var G__46554 = seq__46540_46547;
var G__46555 = chunk__46541_46548;
var G__46556 = count__46542_46549;
var G__46557 = (i__46543_46550 + (1));
seq__46540_46547 = G__46554;
chunk__46541_46548 = G__46555;
count__46542_46549 = G__46556;
i__46543_46550 = G__46557;
continue;
} else {
var temp__6753__auto___46558 = cljs.core.seq.call(null,seq__46540_46547);
if(temp__6753__auto___46558){
var seq__46540_46559__$1 = temp__6753__auto___46558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46540_46559__$1)){
var c__27505__auto___46560 = cljs.core.chunk_first.call(null,seq__46540_46559__$1);
var G__46561 = cljs.core.chunk_rest.call(null,seq__46540_46559__$1);
var G__46562 = c__27505__auto___46560;
var G__46563 = cljs.core.count.call(null,c__27505__auto___46560);
var G__46564 = (0);
seq__46540_46547 = G__46561;
chunk__46541_46548 = G__46562;
count__46542_46549 = G__46563;
i__46543_46550 = G__46564;
continue;
} else {
var child_46565 = cljs.core.first.call(null,seq__46540_46559__$1);
if(cljs.core.some_QMARK_.call(null,child_46565)){
if(cljs.core.coll_QMARK_.call(null,child_46565)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_46565))));
} else {
var temp__6751__auto___46566 = devtools.formatters.helpers.pref.call(null,child_46565);
if(cljs.core.truth_(temp__6751__auto___46566)){
var child_value_46567 = temp__6751__auto___46566;
template.push(child_value_46567);
} else {
}
}
} else {
}

var G__46568 = cljs.core.next.call(null,seq__46540_46559__$1);
var G__46569 = null;
var G__46570 = (0);
var G__46571 = (0);
seq__46540_46547 = G__46568;
chunk__46541_46548 = G__46569;
count__46542_46549 = G__46570;
i__46543_46550 = G__46571;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq46537){
var G__46538 = cljs.core.first.call(null,seq46537);
var seq46537__$1 = cljs.core.next.call(null,seq46537);
var G__46539 = cljs.core.first.call(null,seq46537__$1);
var seq46537__$2 = cljs.core.next.call(null,seq46537__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__46538,G__46539,seq46537__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46574 = arguments.length;
var i__27786__auto___46575 = (0);
while(true){
if((i__27786__auto___46575 < len__27785__auto___46574)){
args__27792__auto__.push((arguments[i__27786__auto___46575]));

var G__46576 = (i__27786__auto___46575 + (1));
i__27786__auto___46575 = G__46576;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq46572){
var G__46573 = cljs.core.first.call(null,seq46572);
var seq46572__$1 = cljs.core.next.call(null,seq46572);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46573,seq46572__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___46579 = arguments.length;
var i__27786__auto___46580 = (0);
while(true){
if((i__27786__auto___46580 < len__27785__auto___46579)){
args__27792__auto__.push((arguments[i__27786__auto___46580]));

var G__46581 = (i__27786__auto___46580 + (1));
i__27786__auto___46580 = G__46581;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq46577){
var G__46578 = cljs.core.first.call(null,seq46577);
var seq46577__$1 = cljs.core.next.call(null,seq46577);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46578,seq46577__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args46582 = [];
var len__27785__auto___46587 = arguments.length;
var i__27786__auto___46588 = (0);
while(true){
if((i__27786__auto___46588 < len__27785__auto___46587)){
args46582.push((arguments[i__27786__auto___46588]));

var G__46589 = (i__27786__auto___46588 + (1));
i__27786__auto___46588 = G__46589;
continue;
} else {
}
break;
}

var G__46584 = args46582.length;
switch (G__46584) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46582.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj46586 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26602__auto__ = start_index;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return (0);
}
})()};
return obj46586;
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
var len__27785__auto___46597 = arguments.length;
var i__27786__auto___46598 = (0);
while(true){
if((i__27786__auto___46598 < len__27785__auto___46597)){
args__27792__auto__.push((arguments[i__27786__auto___46598]));

var G__46599 = (i__27786__auto___46598 + (1));
i__27786__auto___46598 = G__46599;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__46593){
var vec__46594 = p__46593;
var state_override_fn = cljs.core.nth.call(null,vec__46594,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq46591){
var G__46592 = cljs.core.first.call(null,seq46591);
var seq46591__$1 = cljs.core.next.call(null,seq46591);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__46592,seq46591__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27686__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46603_46606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_46604_46607 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46603_46606,_STAR_print_fn_STAR_46604_46607,sb__27686__auto__){
return (function (x__27687__auto__){
return sb__27686__auto__.append(x__27687__auto__);
});})(_STAR_print_newline_STAR_46603_46606,_STAR_print_fn_STAR_46604_46607,sb__27686__auto__))
;

try{var _STAR_print_level_STAR_46605_46608 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46605_46608;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46604_46607;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46603_46606;
}
return [cljs.core.str(sb__27686__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_46610 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46610;
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
var G__46612 = name;
switch (G__46612) {
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
var vec__46617 = tag;
var html_tag = cljs.core.nth.call(null,vec__46617,(0),null);
var style = cljs.core.nth.call(null,vec__46617,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_46621 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46621;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_46624 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_46625 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_46625;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_46624;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__46626 = initial_value;
var G__46627 = value.call(null);
initial_value = G__46626;
value = G__46627;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__46628 = initial_value;
var G__46629 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__46628;
value = G__46629;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__46630 = initial_value;
var G__46631 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__46630;
value = G__46631;
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

//# sourceMappingURL=templating.js.map?rel=1496386707337