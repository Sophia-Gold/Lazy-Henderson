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
var x40009_40010 = value;
x40009_40010.devtools$protocols$IGroup$ = true;


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
var x40014_40015 = value;
x40014_40015.devtools$protocols$ITemplate$ = true;


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
var x40019_40020 = value;
x40019_40020.devtools$protocols$ISurrogate$ = true;


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
var len__27777__auto___40028 = arguments.length;
var i__27778__auto___40029 = (0);
while(true){
if((i__27778__auto___40029 < len__27777__auto___40028)){
args__27784__auto__.push((arguments[i__27778__auto___40029]));

var G__40030 = (i__27778__auto___40029 + (1));
i__27778__auto___40029 = G__40030;
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
var seq__40024_40031 = cljs.core.seq.call(null,items);
var chunk__40025_40032 = null;
var count__40026_40033 = (0);
var i__40027_40034 = (0);
while(true){
if((i__40027_40034 < count__40026_40033)){
var item_40035 = cljs.core._nth.call(null,chunk__40025_40032,i__40027_40034);
if(cljs.core.some_QMARK_.call(null,item_40035)){
if(cljs.core.coll_QMARK_.call(null,item_40035)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40035)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40035));
}
} else {
}

var G__40036 = seq__40024_40031;
var G__40037 = chunk__40025_40032;
var G__40038 = count__40026_40033;
var G__40039 = (i__40027_40034 + (1));
seq__40024_40031 = G__40036;
chunk__40025_40032 = G__40037;
count__40026_40033 = G__40038;
i__40027_40034 = G__40039;
continue;
} else {
var temp__6753__auto___40040 = cljs.core.seq.call(null,seq__40024_40031);
if(temp__6753__auto___40040){
var seq__40024_40041__$1 = temp__6753__auto___40040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40024_40041__$1)){
var c__27497__auto___40042 = cljs.core.chunk_first.call(null,seq__40024_40041__$1);
var G__40043 = cljs.core.chunk_rest.call(null,seq__40024_40041__$1);
var G__40044 = c__27497__auto___40042;
var G__40045 = cljs.core.count.call(null,c__27497__auto___40042);
var G__40046 = (0);
seq__40024_40031 = G__40043;
chunk__40025_40032 = G__40044;
count__40026_40033 = G__40045;
i__40027_40034 = G__40046;
continue;
} else {
var item_40047 = cljs.core.first.call(null,seq__40024_40041__$1);
if(cljs.core.some_QMARK_.call(null,item_40047)){
if(cljs.core.coll_QMARK_.call(null,item_40047)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40047)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40047));
}
} else {
}

var G__40048 = cljs.core.next.call(null,seq__40024_40041__$1);
var G__40049 = null;
var G__40050 = (0);
var G__40051 = (0);
seq__40024_40031 = G__40048;
chunk__40025_40032 = G__40049;
count__40026_40033 = G__40050;
i__40027_40034 = G__40051;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40023){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40023));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40059 = arguments.length;
var i__27778__auto___40060 = (0);
while(true){
if((i__27778__auto___40060 < len__27777__auto___40059)){
args__27784__auto__.push((arguments[i__27778__auto___40060]));

var G__40061 = (i__27778__auto___40060 + (1));
i__27778__auto___40060 = G__40061;
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
var seq__40055_40062 = cljs.core.seq.call(null,children);
var chunk__40056_40063 = null;
var count__40057_40064 = (0);
var i__40058_40065 = (0);
while(true){
if((i__40058_40065 < count__40057_40064)){
var child_40066 = cljs.core._nth.call(null,chunk__40056_40063,i__40058_40065);
if(cljs.core.some_QMARK_.call(null,child_40066)){
if(cljs.core.coll_QMARK_.call(null,child_40066)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40066))));
} else {
var temp__6751__auto___40067 = devtools.formatters.helpers.pref.call(null,child_40066);
if(cljs.core.truth_(temp__6751__auto___40067)){
var child_value_40068 = temp__6751__auto___40067;
template.push(child_value_40068);
} else {
}
}
} else {
}

var G__40069 = seq__40055_40062;
var G__40070 = chunk__40056_40063;
var G__40071 = count__40057_40064;
var G__40072 = (i__40058_40065 + (1));
seq__40055_40062 = G__40069;
chunk__40056_40063 = G__40070;
count__40057_40064 = G__40071;
i__40058_40065 = G__40072;
continue;
} else {
var temp__6753__auto___40073 = cljs.core.seq.call(null,seq__40055_40062);
if(temp__6753__auto___40073){
var seq__40055_40074__$1 = temp__6753__auto___40073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40055_40074__$1)){
var c__27497__auto___40075 = cljs.core.chunk_first.call(null,seq__40055_40074__$1);
var G__40076 = cljs.core.chunk_rest.call(null,seq__40055_40074__$1);
var G__40077 = c__27497__auto___40075;
var G__40078 = cljs.core.count.call(null,c__27497__auto___40075);
var G__40079 = (0);
seq__40055_40062 = G__40076;
chunk__40056_40063 = G__40077;
count__40057_40064 = G__40078;
i__40058_40065 = G__40079;
continue;
} else {
var child_40080 = cljs.core.first.call(null,seq__40055_40074__$1);
if(cljs.core.some_QMARK_.call(null,child_40080)){
if(cljs.core.coll_QMARK_.call(null,child_40080)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40080))));
} else {
var temp__6751__auto___40081 = devtools.formatters.helpers.pref.call(null,child_40080);
if(cljs.core.truth_(temp__6751__auto___40081)){
var child_value_40082 = temp__6751__auto___40081;
template.push(child_value_40082);
} else {
}
}
} else {
}

var G__40083 = cljs.core.next.call(null,seq__40055_40074__$1);
var G__40084 = null;
var G__40085 = (0);
var G__40086 = (0);
seq__40055_40062 = G__40083;
chunk__40056_40063 = G__40084;
count__40057_40064 = G__40085;
i__40058_40065 = G__40086;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40052){
var G__40053 = cljs.core.first.call(null,seq40052);
var seq40052__$1 = cljs.core.next.call(null,seq40052);
var G__40054 = cljs.core.first.call(null,seq40052__$1);
var seq40052__$2 = cljs.core.next.call(null,seq40052__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40053,G__40054,seq40052__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40089 = arguments.length;
var i__27778__auto___40090 = (0);
while(true){
if((i__27778__auto___40090 < len__27777__auto___40089)){
args__27784__auto__.push((arguments[i__27778__auto___40090]));

var G__40091 = (i__27778__auto___40090 + (1));
i__27778__auto___40090 = G__40091;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40087){
var G__40088 = cljs.core.first.call(null,seq40087);
var seq40087__$1 = cljs.core.next.call(null,seq40087);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40088,seq40087__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___40094 = arguments.length;
var i__27778__auto___40095 = (0);
while(true){
if((i__27778__auto___40095 < len__27777__auto___40094)){
args__27784__auto__.push((arguments[i__27778__auto___40095]));

var G__40096 = (i__27778__auto___40095 + (1));
i__27778__auto___40095 = G__40096;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40092){
var G__40093 = cljs.core.first.call(null,seq40092);
var seq40092__$1 = cljs.core.next.call(null,seq40092);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40093,seq40092__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40097 = [];
var len__27777__auto___40102 = arguments.length;
var i__27778__auto___40103 = (0);
while(true){
if((i__27778__auto___40103 < len__27777__auto___40102)){
args40097.push((arguments[i__27778__auto___40103]));

var G__40104 = (i__27778__auto___40103 + (1));
i__27778__auto___40103 = G__40104;
continue;
} else {
}
break;
}

var G__40099 = args40097.length;
switch (G__40099) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40097.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40101 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26594__auto__ = start_index;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return (0);
}
})()};
return obj40101;
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
var len__27777__auto___40112 = arguments.length;
var i__27778__auto___40113 = (0);
while(true){
if((i__27778__auto___40113 < len__27777__auto___40112)){
args__27784__auto__.push((arguments[i__27778__auto___40113]));

var G__40114 = (i__27778__auto___40113 + (1));
i__27778__auto___40113 = G__40114;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40108){
var vec__40109 = p__40108;
var state_override_fn = cljs.core.nth.call(null,vec__40109,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40106){
var G__40107 = cljs.core.first.call(null,seq40106);
var seq40106__$1 = cljs.core.next.call(null,seq40106);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40107,seq40106__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27678__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40118_40121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40119_40122 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40118_40121,_STAR_print_fn_STAR_40119_40122,sb__27678__auto__){
return (function (x__27679__auto__){
return sb__27678__auto__.append(x__27679__auto__);
});})(_STAR_print_newline_STAR_40118_40121,_STAR_print_fn_STAR_40119_40122,sb__27678__auto__))
;

try{var _STAR_print_level_STAR_40120_40123 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40120_40123;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40119_40122;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40118_40121;
}
return [cljs.core.str(sb__27678__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40125 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40125;
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
var G__40127 = name;
switch (G__40127) {
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
var vec__40132 = tag;
var html_tag = cljs.core.nth.call(null,vec__40132,(0),null);
var style = cljs.core.nth.call(null,vec__40132,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40136 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40136;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40139 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40140 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40140;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40139;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40141 = initial_value;
var G__40142 = value.call(null);
initial_value = G__40141;
value = G__40142;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40143 = initial_value;
var G__40144 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40143;
value = G__40144;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40145 = initial_value;
var G__40146 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40145;
value = G__40146;
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

//# sourceMappingURL=templating.js.map?rel=1496384622961