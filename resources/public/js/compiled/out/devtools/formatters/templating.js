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
var x45027_45028 = value;

x45027_45028.devtools$protocols$IGroup$ = true;


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
var x45032_45033 = value;

x45032_45033.devtools$protocols$ITemplate$ = true;


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
var x45037_45038 = value;

x45037_45038.devtools$protocols$ISurrogate$ = true;


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
var len__27785__auto___45046 = arguments.length;
var i__27786__auto___45047 = (0);
while(true){
if((i__27786__auto___45047 < len__27785__auto___45046)){
args__27792__auto__.push((arguments[i__27786__auto___45047]));

var G__45048 = (i__27786__auto___45047 + (1));
i__27786__auto___45047 = G__45048;
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
var seq__45042_45049 = cljs.core.seq.call(null,items);
var chunk__45043_45050 = null;
var count__45044_45051 = (0);
var i__45045_45052 = (0);
while(true){
if((i__45045_45052 < count__45044_45051)){
var item_45053 = cljs.core._nth.call(null,chunk__45043_45050,i__45045_45052);
if(cljs.core.some_QMARK_.call(null,item_45053)){
if(cljs.core.coll_QMARK_.call(null,item_45053)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45053)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45053));
}
} else {
}

var G__45054 = seq__45042_45049;
var G__45055 = chunk__45043_45050;
var G__45056 = count__45044_45051;
var G__45057 = (i__45045_45052 + (1));
seq__45042_45049 = G__45054;
chunk__45043_45050 = G__45055;
count__45044_45051 = G__45056;
i__45045_45052 = G__45057;
continue;
} else {
var temp__6753__auto___45058 = cljs.core.seq.call(null,seq__45042_45049);
if(temp__6753__auto___45058){
var seq__45042_45059__$1 = temp__6753__auto___45058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45042_45059__$1)){
var c__27505__auto___45060 = cljs.core.chunk_first.call(null,seq__45042_45059__$1);
var G__45061 = cljs.core.chunk_rest.call(null,seq__45042_45059__$1);
var G__45062 = c__27505__auto___45060;
var G__45063 = cljs.core.count.call(null,c__27505__auto___45060);
var G__45064 = (0);
seq__45042_45049 = G__45061;
chunk__45043_45050 = G__45062;
count__45044_45051 = G__45063;
i__45045_45052 = G__45064;
continue;
} else {
var item_45065 = cljs.core.first.call(null,seq__45042_45059__$1);
if(cljs.core.some_QMARK_.call(null,item_45065)){
if(cljs.core.coll_QMARK_.call(null,item_45065)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45065)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45065));
}
} else {
}

var G__45066 = cljs.core.next.call(null,seq__45042_45059__$1);
var G__45067 = null;
var G__45068 = (0);
var G__45069 = (0);
seq__45042_45049 = G__45066;
chunk__45043_45050 = G__45067;
count__45044_45051 = G__45068;
i__45045_45052 = G__45069;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq45041){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45041));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27792__auto__ = [];
var len__27785__auto___45077 = arguments.length;
var i__27786__auto___45078 = (0);
while(true){
if((i__27786__auto___45078 < len__27785__auto___45077)){
args__27792__auto__.push((arguments[i__27786__auto___45078]));

var G__45079 = (i__27786__auto___45078 + (1));
i__27786__auto___45078 = G__45079;
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
var seq__45073_45080 = cljs.core.seq.call(null,children);
var chunk__45074_45081 = null;
var count__45075_45082 = (0);
var i__45076_45083 = (0);
while(true){
if((i__45076_45083 < count__45075_45082)){
var child_45084 = cljs.core._nth.call(null,chunk__45074_45081,i__45076_45083);
if(cljs.core.some_QMARK_.call(null,child_45084)){
if(cljs.core.coll_QMARK_.call(null,child_45084)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45084))));
} else {
var temp__6751__auto___45085 = devtools.formatters.helpers.pref.call(null,child_45084);
if(cljs.core.truth_(temp__6751__auto___45085)){
var child_value_45086 = temp__6751__auto___45085;
template.push(child_value_45086);
} else {
}
}
} else {
}

var G__45087 = seq__45073_45080;
var G__45088 = chunk__45074_45081;
var G__45089 = count__45075_45082;
var G__45090 = (i__45076_45083 + (1));
seq__45073_45080 = G__45087;
chunk__45074_45081 = G__45088;
count__45075_45082 = G__45089;
i__45076_45083 = G__45090;
continue;
} else {
var temp__6753__auto___45091 = cljs.core.seq.call(null,seq__45073_45080);
if(temp__6753__auto___45091){
var seq__45073_45092__$1 = temp__6753__auto___45091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45073_45092__$1)){
var c__27505__auto___45093 = cljs.core.chunk_first.call(null,seq__45073_45092__$1);
var G__45094 = cljs.core.chunk_rest.call(null,seq__45073_45092__$1);
var G__45095 = c__27505__auto___45093;
var G__45096 = cljs.core.count.call(null,c__27505__auto___45093);
var G__45097 = (0);
seq__45073_45080 = G__45094;
chunk__45074_45081 = G__45095;
count__45075_45082 = G__45096;
i__45076_45083 = G__45097;
continue;
} else {
var child_45098 = cljs.core.first.call(null,seq__45073_45092__$1);
if(cljs.core.some_QMARK_.call(null,child_45098)){
if(cljs.core.coll_QMARK_.call(null,child_45098)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45098))));
} else {
var temp__6751__auto___45099 = devtools.formatters.helpers.pref.call(null,child_45098);
if(cljs.core.truth_(temp__6751__auto___45099)){
var child_value_45100 = temp__6751__auto___45099;
template.push(child_value_45100);
} else {
}
}
} else {
}

var G__45101 = cljs.core.next.call(null,seq__45073_45092__$1);
var G__45102 = null;
var G__45103 = (0);
var G__45104 = (0);
seq__45073_45080 = G__45101;
chunk__45074_45081 = G__45102;
count__45075_45082 = G__45103;
i__45076_45083 = G__45104;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq45070){
var G__45071 = cljs.core.first.call(null,seq45070);
var seq45070__$1 = cljs.core.next.call(null,seq45070);
var G__45072 = cljs.core.first.call(null,seq45070__$1);
var seq45070__$2 = cljs.core.next.call(null,seq45070__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__45071,G__45072,seq45070__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___45107 = arguments.length;
var i__27786__auto___45108 = (0);
while(true){
if((i__27786__auto___45108 < len__27785__auto___45107)){
args__27792__auto__.push((arguments[i__27786__auto___45108]));

var G__45109 = (i__27786__auto___45108 + (1));
i__27786__auto___45108 = G__45109;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq45105){
var G__45106 = cljs.core.first.call(null,seq45105);
var seq45105__$1 = cljs.core.next.call(null,seq45105);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45106,seq45105__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___45112 = arguments.length;
var i__27786__auto___45113 = (0);
while(true){
if((i__27786__auto___45113 < len__27785__auto___45112)){
args__27792__auto__.push((arguments[i__27786__auto___45113]));

var G__45114 = (i__27786__auto___45113 + (1));
i__27786__auto___45113 = G__45114;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq45110){
var G__45111 = cljs.core.first.call(null,seq45110);
var seq45110__$1 = cljs.core.next.call(null,seq45110);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45111,seq45110__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args45115 = [];
var len__27785__auto___45120 = arguments.length;
var i__27786__auto___45121 = (0);
while(true){
if((i__27786__auto___45121 < len__27785__auto___45120)){
args45115.push((arguments[i__27786__auto___45121]));

var G__45122 = (i__27786__auto___45121 + (1));
i__27786__auto___45121 = G__45122;
continue;
} else {
}
break;
}

var G__45117 = args45115.length;
switch (G__45117) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45115.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj45119 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26602__auto__ = start_index;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return (0);
}
})()};
return obj45119;
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
var len__27785__auto___45130 = arguments.length;
var i__27786__auto___45131 = (0);
while(true){
if((i__27786__auto___45131 < len__27785__auto___45130)){
args__27792__auto__.push((arguments[i__27786__auto___45131]));

var G__45132 = (i__27786__auto___45131 + (1));
i__27786__auto___45131 = G__45132;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45126){
var vec__45127 = p__45126;
var state_override_fn = cljs.core.nth.call(null,vec__45127,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq45124){
var G__45125 = cljs.core.first.call(null,seq45124);
var seq45124__$1 = cljs.core.next.call(null,seq45124);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__45125,seq45124__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27686__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45136_45139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45137_45140 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45136_45139,_STAR_print_fn_STAR_45137_45140,sb__27686__auto__){
return (function (x__27687__auto__){
return sb__27686__auto__.append(x__27687__auto__);
});})(_STAR_print_newline_STAR_45136_45139,_STAR_print_fn_STAR_45137_45140,sb__27686__auto__))
;

try{var _STAR_print_level_STAR_45138_45141 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45138_45141;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45137_45140;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45136_45139;
}
return [cljs.core.str(sb__27686__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_45143 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45143;
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
var G__45145 = name;
switch (G__45145) {
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
var vec__45150 = tag;
var html_tag = cljs.core.nth.call(null,vec__45150,(0),null);
var style = cljs.core.nth.call(null,vec__45150,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_45154 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45154;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_45157 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_45158 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45158;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_45157;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__45159 = initial_value;
var G__45160 = value.call(null);
initial_value = G__45159;
value = G__45160;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__45161 = initial_value;
var G__45162 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__45161;
value = G__45162;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__45163 = initial_value;
var G__45164 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__45163;
value = G__45164;
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

//# sourceMappingURL=templating.js.map?rel=1495936729947