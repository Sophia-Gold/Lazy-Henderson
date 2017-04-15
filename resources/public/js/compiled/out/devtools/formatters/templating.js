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
var x10818_10819 = value;
x10818_10819.devtools$protocols$IGroup$ = true;


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
var x10823_10824 = value;
x10823_10824.devtools$protocols$ITemplate$ = true;


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
var x10828_10829 = value;
x10828_10829.devtools$protocols$ISurrogate$ = true;


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
var and__6918__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6918__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6918__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8120__auto__ = [];
var len__8113__auto___10837 = arguments.length;
var i__8114__auto___10838 = (0);
while(true){
if((i__8114__auto___10838 < len__8113__auto___10837)){
args__8120__auto__.push((arguments[i__8114__auto___10838]));

var G__10839 = (i__8114__auto___10838 + (1));
i__8114__auto___10838 = G__10839;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((0) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8121__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__10833_10840 = cljs.core.seq.call(null,items);
var chunk__10834_10841 = null;
var count__10835_10842 = (0);
var i__10836_10843 = (0);
while(true){
if((i__10836_10843 < count__10835_10842)){
var item_10844 = cljs.core._nth.call(null,chunk__10834_10841,i__10836_10843);
if(cljs.core.some_QMARK_.call(null,item_10844)){
if(cljs.core.coll_QMARK_.call(null,item_10844)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_10844)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_10844));
}
} else {
}

var G__10845 = seq__10833_10840;
var G__10846 = chunk__10834_10841;
var G__10847 = count__10835_10842;
var G__10848 = (i__10836_10843 + (1));
seq__10833_10840 = G__10845;
chunk__10834_10841 = G__10846;
count__10835_10842 = G__10847;
i__10836_10843 = G__10848;
continue;
} else {
var temp__6753__auto___10849 = cljs.core.seq.call(null,seq__10833_10840);
if(temp__6753__auto___10849){
var seq__10833_10850__$1 = temp__6753__auto___10849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10833_10850__$1)){
var c__7833__auto___10851 = cljs.core.chunk_first.call(null,seq__10833_10850__$1);
var G__10852 = cljs.core.chunk_rest.call(null,seq__10833_10850__$1);
var G__10853 = c__7833__auto___10851;
var G__10854 = cljs.core.count.call(null,c__7833__auto___10851);
var G__10855 = (0);
seq__10833_10840 = G__10852;
chunk__10834_10841 = G__10853;
count__10835_10842 = G__10854;
i__10836_10843 = G__10855;
continue;
} else {
var item_10856 = cljs.core.first.call(null,seq__10833_10850__$1);
if(cljs.core.some_QMARK_.call(null,item_10856)){
if(cljs.core.coll_QMARK_.call(null,item_10856)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_10856)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_10856));
}
} else {
}

var G__10857 = cljs.core.next.call(null,seq__10833_10850__$1);
var G__10858 = null;
var G__10859 = (0);
var G__10860 = (0);
seq__10833_10840 = G__10857;
chunk__10834_10841 = G__10858;
count__10835_10842 = G__10859;
i__10836_10843 = G__10860;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq10832){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10832));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8120__auto__ = [];
var len__8113__auto___10868 = arguments.length;
var i__8114__auto___10869 = (0);
while(true){
if((i__8114__auto___10869 < len__8113__auto___10868)){
args__8120__auto__.push((arguments[i__8114__auto___10869]));

var G__10870 = (i__8114__auto___10869 + (1));
i__8114__auto___10869 = G__10870;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((2) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8121__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__10864_10871 = cljs.core.seq.call(null,children);
var chunk__10865_10872 = null;
var count__10866_10873 = (0);
var i__10867_10874 = (0);
while(true){
if((i__10867_10874 < count__10866_10873)){
var child_10875 = cljs.core._nth.call(null,chunk__10865_10872,i__10867_10874);
if(cljs.core.some_QMARK_.call(null,child_10875)){
if(cljs.core.coll_QMARK_.call(null,child_10875)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_10875))));
} else {
var temp__6751__auto___10876 = devtools.formatters.helpers.pref.call(null,child_10875);
if(cljs.core.truth_(temp__6751__auto___10876)){
var child_value_10877 = temp__6751__auto___10876;
template.push(child_value_10877);
} else {
}
}
} else {
}

var G__10878 = seq__10864_10871;
var G__10879 = chunk__10865_10872;
var G__10880 = count__10866_10873;
var G__10881 = (i__10867_10874 + (1));
seq__10864_10871 = G__10878;
chunk__10865_10872 = G__10879;
count__10866_10873 = G__10880;
i__10867_10874 = G__10881;
continue;
} else {
var temp__6753__auto___10882 = cljs.core.seq.call(null,seq__10864_10871);
if(temp__6753__auto___10882){
var seq__10864_10883__$1 = temp__6753__auto___10882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10864_10883__$1)){
var c__7833__auto___10884 = cljs.core.chunk_first.call(null,seq__10864_10883__$1);
var G__10885 = cljs.core.chunk_rest.call(null,seq__10864_10883__$1);
var G__10886 = c__7833__auto___10884;
var G__10887 = cljs.core.count.call(null,c__7833__auto___10884);
var G__10888 = (0);
seq__10864_10871 = G__10885;
chunk__10865_10872 = G__10886;
count__10866_10873 = G__10887;
i__10867_10874 = G__10888;
continue;
} else {
var child_10889 = cljs.core.first.call(null,seq__10864_10883__$1);
if(cljs.core.some_QMARK_.call(null,child_10889)){
if(cljs.core.coll_QMARK_.call(null,child_10889)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_10889))));
} else {
var temp__6751__auto___10890 = devtools.formatters.helpers.pref.call(null,child_10889);
if(cljs.core.truth_(temp__6751__auto___10890)){
var child_value_10891 = temp__6751__auto___10890;
template.push(child_value_10891);
} else {
}
}
} else {
}

var G__10892 = cljs.core.next.call(null,seq__10864_10883__$1);
var G__10893 = null;
var G__10894 = (0);
var G__10895 = (0);
seq__10864_10871 = G__10892;
chunk__10865_10872 = G__10893;
count__10866_10873 = G__10894;
i__10867_10874 = G__10895;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq10861){
var G__10862 = cljs.core.first.call(null,seq10861);
var seq10861__$1 = cljs.core.next.call(null,seq10861);
var G__10863 = cljs.core.first.call(null,seq10861__$1);
var seq10861__$2 = cljs.core.next.call(null,seq10861__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__10862,G__10863,seq10861__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8120__auto__ = [];
var len__8113__auto___10898 = arguments.length;
var i__8114__auto___10899 = (0);
while(true){
if((i__8114__auto___10899 < len__8113__auto___10898)){
args__8120__auto__.push((arguments[i__8114__auto___10899]));

var G__10900 = (i__8114__auto___10899 + (1));
i__8114__auto___10899 = G__10900;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((1) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8121__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq10896){
var G__10897 = cljs.core.first.call(null,seq10896);
var seq10896__$1 = cljs.core.next.call(null,seq10896);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10897,seq10896__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8120__auto__ = [];
var len__8113__auto___10903 = arguments.length;
var i__8114__auto___10904 = (0);
while(true){
if((i__8114__auto___10904 < len__8113__auto___10903)){
args__8120__auto__.push((arguments[i__8114__auto___10904]));

var G__10905 = (i__8114__auto___10904 + (1));
i__8114__auto___10904 = G__10905;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((1) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8121__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq10901){
var G__10902 = cljs.core.first.call(null,seq10901);
var seq10901__$1 = cljs.core.next.call(null,seq10901);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10902,seq10901__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args10906 = [];
var len__8113__auto___10911 = arguments.length;
var i__8114__auto___10912 = (0);
while(true){
if((i__8114__auto___10912 < len__8113__auto___10911)){
args10906.push((arguments[i__8114__auto___10912]));

var G__10913 = (i__8114__auto___10912 + (1));
i__8114__auto___10912 = G__10913;
continue;
} else {
}
break;
}

var G__10908 = args10906.length;
switch (G__10908) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10906.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj10910 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6930__auto__ = start_index;
if(cljs.core.truth_(or__6930__auto__)){
return or__6930__auto__;
} else {
return (0);
}
})()};
return obj10910;
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
var args__8120__auto__ = [];
var len__8113__auto___10921 = arguments.length;
var i__8114__auto___10922 = (0);
while(true){
if((i__8114__auto___10922 < len__8113__auto___10921)){
args__8120__auto__.push((arguments[i__8114__auto___10922]));

var G__10923 = (i__8114__auto___10922 + (1));
i__8114__auto___10922 = G__10923;
continue;
} else {
}
break;
}

var argseq__8121__auto__ = ((((1) < args__8120__auto__.length))?(new cljs.core.IndexedSeq(args__8120__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8121__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__10917){
var vec__10918 = p__10917;
var state_override_fn = cljs.core.nth.call(null,vec__10918,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq10915){
var G__10916 = cljs.core.first.call(null,seq10915);
var seq10915__$1 = cljs.core.next.call(null,seq10915);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__10916,seq10915__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8014__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10927_10930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10928_10931 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10927_10930,_STAR_print_fn_STAR_10928_10931,sb__8014__auto__){
return (function (x__8015__auto__){
return sb__8014__auto__.append(x__8015__auto__);
});})(_STAR_print_newline_STAR_10927_10930,_STAR_print_fn_STAR_10928_10931,sb__8014__auto__))
;

try{var _STAR_print_level_STAR_10929_10932 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_10929_10932;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10928_10931;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10927_10930;
}
return [cljs.core.str(sb__8014__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_10934 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_10934;
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
var G__10936 = name;
switch (G__10936) {
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
var vec__10941 = tag;
var html_tag = cljs.core.nth.call(null,vec__10941,(0),null);
var style = cljs.core.nth.call(null,vec__10941,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_10945 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_10945;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_10948 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_10949 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_10949;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_10948;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__10950 = initial_value;
var G__10951 = value.call(null);
initial_value = G__10950;
value = G__10951;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__10952 = initial_value;
var G__10953 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__10952;
value = G__10953;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__10954 = initial_value;
var G__10955 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__10954;
value = G__10955;
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

//# sourceMappingURL=templating.js.map?rel=1492242829289