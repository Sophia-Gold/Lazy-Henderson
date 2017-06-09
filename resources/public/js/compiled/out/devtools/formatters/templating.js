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
var x40024_40025 = value;
x40024_40025.devtools$protocols$IGroup$ = true;


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
var x40029_40030 = value;
x40029_40030.devtools$protocols$ITemplate$ = true;


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
var x40034_40035 = value;
x40034_40035.devtools$protocols$ISurrogate$ = true;


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
var len__27777__auto___40043 = arguments.length;
var i__27778__auto___40044 = (0);
while(true){
if((i__27778__auto___40044 < len__27777__auto___40043)){
args__27784__auto__.push((arguments[i__27778__auto___40044]));

var G__40045 = (i__27778__auto___40044 + (1));
i__27778__auto___40044 = G__40045;
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
var seq__40039_40046 = cljs.core.seq.call(null,items);
var chunk__40040_40047 = null;
var count__40041_40048 = (0);
var i__40042_40049 = (0);
while(true){
if((i__40042_40049 < count__40041_40048)){
var item_40050 = cljs.core._nth.call(null,chunk__40040_40047,i__40042_40049);
if(cljs.core.some_QMARK_.call(null,item_40050)){
if(cljs.core.coll_QMARK_.call(null,item_40050)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40050)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40050));
}
} else {
}

var G__40051 = seq__40039_40046;
var G__40052 = chunk__40040_40047;
var G__40053 = count__40041_40048;
var G__40054 = (i__40042_40049 + (1));
seq__40039_40046 = G__40051;
chunk__40040_40047 = G__40052;
count__40041_40048 = G__40053;
i__40042_40049 = G__40054;
continue;
} else {
var temp__6753__auto___40055 = cljs.core.seq.call(null,seq__40039_40046);
if(temp__6753__auto___40055){
var seq__40039_40056__$1 = temp__6753__auto___40055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40039_40056__$1)){
var c__27497__auto___40057 = cljs.core.chunk_first.call(null,seq__40039_40056__$1);
var G__40058 = cljs.core.chunk_rest.call(null,seq__40039_40056__$1);
var G__40059 = c__27497__auto___40057;
var G__40060 = cljs.core.count.call(null,c__27497__auto___40057);
var G__40061 = (0);
seq__40039_40046 = G__40058;
chunk__40040_40047 = G__40059;
count__40041_40048 = G__40060;
i__40042_40049 = G__40061;
continue;
} else {
var item_40062 = cljs.core.first.call(null,seq__40039_40056__$1);
if(cljs.core.some_QMARK_.call(null,item_40062)){
if(cljs.core.coll_QMARK_.call(null,item_40062)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40062)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40062));
}
} else {
}

var G__40063 = cljs.core.next.call(null,seq__40039_40056__$1);
var G__40064 = null;
var G__40065 = (0);
var G__40066 = (0);
seq__40039_40046 = G__40063;
chunk__40040_40047 = G__40064;
count__40041_40048 = G__40065;
i__40042_40049 = G__40066;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40038){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40038));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40074 = arguments.length;
var i__27778__auto___40075 = (0);
while(true){
if((i__27778__auto___40075 < len__27777__auto___40074)){
args__27784__auto__.push((arguments[i__27778__auto___40075]));

var G__40076 = (i__27778__auto___40075 + (1));
i__27778__auto___40075 = G__40076;
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
var seq__40070_40077 = cljs.core.seq.call(null,children);
var chunk__40071_40078 = null;
var count__40072_40079 = (0);
var i__40073_40080 = (0);
while(true){
if((i__40073_40080 < count__40072_40079)){
var child_40081 = cljs.core._nth.call(null,chunk__40071_40078,i__40073_40080);
if(cljs.core.some_QMARK_.call(null,child_40081)){
if(cljs.core.coll_QMARK_.call(null,child_40081)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40081))));
} else {
var temp__6751__auto___40082 = devtools.formatters.helpers.pref.call(null,child_40081);
if(cljs.core.truth_(temp__6751__auto___40082)){
var child_value_40083 = temp__6751__auto___40082;
template.push(child_value_40083);
} else {
}
}
} else {
}

var G__40084 = seq__40070_40077;
var G__40085 = chunk__40071_40078;
var G__40086 = count__40072_40079;
var G__40087 = (i__40073_40080 + (1));
seq__40070_40077 = G__40084;
chunk__40071_40078 = G__40085;
count__40072_40079 = G__40086;
i__40073_40080 = G__40087;
continue;
} else {
var temp__6753__auto___40088 = cljs.core.seq.call(null,seq__40070_40077);
if(temp__6753__auto___40088){
var seq__40070_40089__$1 = temp__6753__auto___40088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40070_40089__$1)){
var c__27497__auto___40090 = cljs.core.chunk_first.call(null,seq__40070_40089__$1);
var G__40091 = cljs.core.chunk_rest.call(null,seq__40070_40089__$1);
var G__40092 = c__27497__auto___40090;
var G__40093 = cljs.core.count.call(null,c__27497__auto___40090);
var G__40094 = (0);
seq__40070_40077 = G__40091;
chunk__40071_40078 = G__40092;
count__40072_40079 = G__40093;
i__40073_40080 = G__40094;
continue;
} else {
var child_40095 = cljs.core.first.call(null,seq__40070_40089__$1);
if(cljs.core.some_QMARK_.call(null,child_40095)){
if(cljs.core.coll_QMARK_.call(null,child_40095)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40095))));
} else {
var temp__6751__auto___40096 = devtools.formatters.helpers.pref.call(null,child_40095);
if(cljs.core.truth_(temp__6751__auto___40096)){
var child_value_40097 = temp__6751__auto___40096;
template.push(child_value_40097);
} else {
}
}
} else {
}

var G__40098 = cljs.core.next.call(null,seq__40070_40089__$1);
var G__40099 = null;
var G__40100 = (0);
var G__40101 = (0);
seq__40070_40077 = G__40098;
chunk__40071_40078 = G__40099;
count__40072_40079 = G__40100;
i__40073_40080 = G__40101;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40067){
var G__40068 = cljs.core.first.call(null,seq40067);
var seq40067__$1 = cljs.core.next.call(null,seq40067);
var G__40069 = cljs.core.first.call(null,seq40067__$1);
var seq40067__$2 = cljs.core.next.call(null,seq40067__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40068,G__40069,seq40067__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40104 = arguments.length;
var i__27778__auto___40105 = (0);
while(true){
if((i__27778__auto___40105 < len__27777__auto___40104)){
args__27784__auto__.push((arguments[i__27778__auto___40105]));

var G__40106 = (i__27778__auto___40105 + (1));
i__27778__auto___40105 = G__40106;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40102){
var G__40103 = cljs.core.first.call(null,seq40102);
var seq40102__$1 = cljs.core.next.call(null,seq40102);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40103,seq40102__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40109 = arguments.length;
var i__27778__auto___40110 = (0);
while(true){
if((i__27778__auto___40110 < len__27777__auto___40109)){
args__27784__auto__.push((arguments[i__27778__auto___40110]));

var G__40111 = (i__27778__auto___40110 + (1));
i__27778__auto___40110 = G__40111;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40107){
var G__40108 = cljs.core.first.call(null,seq40107);
var seq40107__$1 = cljs.core.next.call(null,seq40107);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40108,seq40107__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40112 = [];
var len__27777__auto___40117 = arguments.length;
var i__27778__auto___40118 = (0);
while(true){
if((i__27778__auto___40118 < len__27777__auto___40117)){
args40112.push((arguments[i__27778__auto___40118]));

var G__40119 = (i__27778__auto___40118 + (1));
i__27778__auto___40118 = G__40119;
continue;
} else {
}
break;
}

var G__40114 = args40112.length;
switch (G__40114) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40112.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40116 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26594__auto__ = start_index;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return (0);
}
})()};
return obj40116;
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
var len__27777__auto___40127 = arguments.length;
var i__27778__auto___40128 = (0);
while(true){
if((i__27778__auto___40128 < len__27777__auto___40127)){
args__27784__auto__.push((arguments[i__27778__auto___40128]));

var G__40129 = (i__27778__auto___40128 + (1));
i__27778__auto___40128 = G__40129;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40123){
var vec__40124 = p__40123;
var state_override_fn = cljs.core.nth.call(null,vec__40124,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40121){
var G__40122 = cljs.core.first.call(null,seq40121);
var seq40121__$1 = cljs.core.next.call(null,seq40121);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40122,seq40121__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27678__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40133_40136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40134_40137 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40133_40136,_STAR_print_fn_STAR_40134_40137,sb__27678__auto__){
return (function (x__27679__auto__){
return sb__27678__auto__.append(x__27679__auto__);
});})(_STAR_print_newline_STAR_40133_40136,_STAR_print_fn_STAR_40134_40137,sb__27678__auto__))
;

try{var _STAR_print_level_STAR_40135_40138 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40135_40138;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40134_40137;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40133_40136;
}
return [cljs.core.str(sb__27678__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40140 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40140;
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
var G__40142 = name;
switch (G__40142) {
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
var vec__40147 = tag;
var html_tag = cljs.core.nth.call(null,vec__40147,(0),null);
var style = cljs.core.nth.call(null,vec__40147,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40151 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40151;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40154 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40155 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40155;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40154;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40156 = initial_value;
var G__40157 = value.call(null);
initial_value = G__40156;
value = G__40157;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40158 = initial_value;
var G__40159 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40158;
value = G__40159;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40160 = initial_value;
var G__40161 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40160;
value = G__40161;
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

//# sourceMappingURL=templating.js.map?rel=1496990007084