// Compiled by ClojureScript 1.9.198 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36740 = [];
var len__27777__auto___36743 = arguments.length;
var i__27778__auto___36744 = (0);
while(true){
if((i__27778__auto___36744 < len__27777__auto___36743)){
args36740.push((arguments[i__27778__auto___36744]));

var G__36745 = (i__27778__auto___36744 + (1));
i__27778__auto___36744 = G__36745;
continue;
} else {
}
break;
}

var G__36742 = args36740.length;
switch (G__36742) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36740.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27784__auto__ = [];
var len__27777__auto___36748 = arguments.length;
var i__27778__auto___36749 = (0);
while(true){
if((i__27778__auto___36749 < len__27777__auto___36748)){
args__27784__auto__.push((arguments[i__27778__auto___36749]));

var G__36750 = (i__27778__auto___36749 + (1));
i__27778__auto___36749 = G__36750;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36747){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36747));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27784__auto__ = [];
var len__27777__auto___36752 = arguments.length;
var i__27778__auto___36753 = (0);
while(true){
if((i__27778__auto___36753 < len__27777__auto___36752)){
args__27784__auto__.push((arguments[i__27778__auto___36753]));

var G__36754 = (i__27778__auto___36753 + (1));
i__27778__auto___36753 = G__36754;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36751){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36751));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36755 = cljs.core._EQ_;
var expr__36756 = (function (){var or__26594__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36759){if((e36759 instanceof Error)){
var e = e36759;
return false;
} else {
throw e36759;

}
}})();
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36755.call(null,"true",expr__36756))){
return true;
} else {
if(cljs.core.truth_(pred__36755.call(null,"false",expr__36756))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36756)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36761){if((e36761 instanceof Error)){
var e = e36761;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36761;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36762){
var map__36765 = p__36762;
var map__36765__$1 = ((((!((map__36765 == null)))?((((map__36765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36765):map__36765);
var message = cljs.core.get.call(null,map__36765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26594__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26582__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26582__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26582__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29260__auto___36927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___36927,ch){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___36927,ch){
return (function (state_36896){
var state_val_36897 = (state_36896[(1)]);
if((state_val_36897 === (7))){
var inst_36892 = (state_36896[(2)]);
var state_36896__$1 = state_36896;
var statearr_36898_36928 = state_36896__$1;
(statearr_36898_36928[(2)] = inst_36892);

(statearr_36898_36928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (1))){
var state_36896__$1 = state_36896;
var statearr_36899_36929 = state_36896__$1;
(statearr_36899_36929[(2)] = null);

(statearr_36899_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (4))){
var inst_36849 = (state_36896[(7)]);
var inst_36849__$1 = (state_36896[(2)]);
var state_36896__$1 = (function (){var statearr_36900 = state_36896;
(statearr_36900[(7)] = inst_36849__$1);

return statearr_36900;
})();
if(cljs.core.truth_(inst_36849__$1)){
var statearr_36901_36930 = state_36896__$1;
(statearr_36901_36930[(1)] = (5));

} else {
var statearr_36902_36931 = state_36896__$1;
(statearr_36902_36931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (15))){
var inst_36856 = (state_36896[(8)]);
var inst_36871 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36856);
var inst_36872 = cljs.core.first.call(null,inst_36871);
var inst_36873 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36872);
var inst_36874 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36873)].join('');
var inst_36875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36874);
var state_36896__$1 = state_36896;
var statearr_36903_36932 = state_36896__$1;
(statearr_36903_36932[(2)] = inst_36875);

(statearr_36903_36932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (13))){
var inst_36880 = (state_36896[(2)]);
var state_36896__$1 = state_36896;
var statearr_36904_36933 = state_36896__$1;
(statearr_36904_36933[(2)] = inst_36880);

(statearr_36904_36933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (6))){
var state_36896__$1 = state_36896;
var statearr_36905_36934 = state_36896__$1;
(statearr_36905_36934[(2)] = null);

(statearr_36905_36934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (17))){
var inst_36878 = (state_36896[(2)]);
var state_36896__$1 = state_36896;
var statearr_36906_36935 = state_36896__$1;
(statearr_36906_36935[(2)] = inst_36878);

(statearr_36906_36935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (3))){
var inst_36894 = (state_36896[(2)]);
var state_36896__$1 = state_36896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36896__$1,inst_36894);
} else {
if((state_val_36897 === (12))){
var inst_36855 = (state_36896[(9)]);
var inst_36869 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36855,opts);
var state_36896__$1 = state_36896;
if(cljs.core.truth_(inst_36869)){
var statearr_36907_36936 = state_36896__$1;
(statearr_36907_36936[(1)] = (15));

} else {
var statearr_36908_36937 = state_36896__$1;
(statearr_36908_36937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (2))){
var state_36896__$1 = state_36896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36896__$1,(4),ch);
} else {
if((state_val_36897 === (11))){
var inst_36856 = (state_36896[(8)]);
var inst_36861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36862 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36856);
var inst_36863 = cljs.core.async.timeout.call(null,(1000));
var inst_36864 = [inst_36862,inst_36863];
var inst_36865 = (new cljs.core.PersistentVector(null,2,(5),inst_36861,inst_36864,null));
var state_36896__$1 = state_36896;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36896__$1,(14),inst_36865);
} else {
if((state_val_36897 === (9))){
var inst_36856 = (state_36896[(8)]);
var inst_36882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36883 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36856);
var inst_36884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36883);
var inst_36885 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36884)].join('');
var inst_36886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36885);
var state_36896__$1 = (function (){var statearr_36909 = state_36896;
(statearr_36909[(10)] = inst_36882);

return statearr_36909;
})();
var statearr_36910_36938 = state_36896__$1;
(statearr_36910_36938[(2)] = inst_36886);

(statearr_36910_36938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (5))){
var inst_36849 = (state_36896[(7)]);
var inst_36851 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36852 = (new cljs.core.PersistentArrayMap(null,2,inst_36851,null));
var inst_36853 = (new cljs.core.PersistentHashSet(null,inst_36852,null));
var inst_36854 = figwheel.client.focus_msgs.call(null,inst_36853,inst_36849);
var inst_36855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36854);
var inst_36856 = cljs.core.first.call(null,inst_36854);
var inst_36857 = figwheel.client.autoload_QMARK_.call(null);
var state_36896__$1 = (function (){var statearr_36911 = state_36896;
(statearr_36911[(9)] = inst_36855);

(statearr_36911[(8)] = inst_36856);

return statearr_36911;
})();
if(cljs.core.truth_(inst_36857)){
var statearr_36912_36939 = state_36896__$1;
(statearr_36912_36939[(1)] = (8));

} else {
var statearr_36913_36940 = state_36896__$1;
(statearr_36913_36940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (14))){
var inst_36867 = (state_36896[(2)]);
var state_36896__$1 = state_36896;
var statearr_36914_36941 = state_36896__$1;
(statearr_36914_36941[(2)] = inst_36867);

(statearr_36914_36941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (16))){
var state_36896__$1 = state_36896;
var statearr_36915_36942 = state_36896__$1;
(statearr_36915_36942[(2)] = null);

(statearr_36915_36942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (10))){
var inst_36888 = (state_36896[(2)]);
var state_36896__$1 = (function (){var statearr_36916 = state_36896;
(statearr_36916[(11)] = inst_36888);

return statearr_36916;
})();
var statearr_36917_36943 = state_36896__$1;
(statearr_36917_36943[(2)] = null);

(statearr_36917_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36897 === (8))){
var inst_36855 = (state_36896[(9)]);
var inst_36859 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36855,opts);
var state_36896__$1 = state_36896;
if(cljs.core.truth_(inst_36859)){
var statearr_36918_36944 = state_36896__$1;
(statearr_36918_36944[(1)] = (11));

} else {
var statearr_36919_36945 = state_36896__$1;
(statearr_36919_36945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29260__auto___36927,ch))
;
return ((function (switch__29146__auto__,c__29260__auto___36927,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____0 = (function (){
var statearr_36923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36923[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__);

(statearr_36923[(1)] = (1));

return statearr_36923;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____1 = (function (state_36896){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_36896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e36924){if((e36924 instanceof Object)){
var ex__29150__auto__ = e36924;
var statearr_36925_36946 = state_36896;
(statearr_36925_36946[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36947 = state_36896;
state_36896 = G__36947;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__ = function(state_36896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____1.call(this,state_36896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29147__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___36927,ch))
})();
var state__29262__auto__ = (function (){var statearr_36926 = f__29261__auto__.call(null);
(statearr_36926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___36927);

return statearr_36926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___36927,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36948_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36948_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36951 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36951){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36950){if((e36950 instanceof Error)){
var e = e36950;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36951], null));
} else {
var e = e36950;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36951))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36952){
var map__36961 = p__36952;
var map__36961__$1 = ((((!((map__36961 == null)))?((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var opts = map__36961__$1;
var build_id = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36961,map__36961__$1,opts,build_id){
return (function (p__36963){
var vec__36964 = p__36963;
var seq__36965 = cljs.core.seq.call(null,vec__36964);
var first__36966 = cljs.core.first.call(null,seq__36965);
var seq__36965__$1 = cljs.core.next.call(null,seq__36965);
var map__36967 = first__36966;
var map__36967__$1 = ((((!((map__36967 == null)))?((((map__36967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36967):map__36967);
var msg = map__36967__$1;
var msg_name = cljs.core.get.call(null,map__36967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36965__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36964,seq__36965,first__36966,seq__36965__$1,map__36967,map__36967__$1,msg,msg_name,_,map__36961,map__36961__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36964,seq__36965,first__36966,seq__36965__$1,map__36967,map__36967__$1,msg,msg_name,_,map__36961,map__36961__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36961,map__36961__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36975){
var vec__36976 = p__36975;
var seq__36977 = cljs.core.seq.call(null,vec__36976);
var first__36978 = cljs.core.first.call(null,seq__36977);
var seq__36977__$1 = cljs.core.next.call(null,seq__36977);
var map__36979 = first__36978;
var map__36979__$1 = ((((!((map__36979 == null)))?((((map__36979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36979):map__36979);
var msg = map__36979__$1;
var msg_name = cljs.core.get.call(null,map__36979__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36977__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36981){
var map__36993 = p__36981;
var map__36993__$1 = ((((!((map__36993 == null)))?((((map__36993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36993):map__36993);
var on_compile_warning = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36993,map__36993__$1,on_compile_warning,on_compile_fail){
return (function (p__36995){
var vec__36996 = p__36995;
var seq__36997 = cljs.core.seq.call(null,vec__36996);
var first__36998 = cljs.core.first.call(null,seq__36997);
var seq__36997__$1 = cljs.core.next.call(null,seq__36997);
var map__36999 = first__36998;
var map__36999__$1 = ((((!((map__36999 == null)))?((((map__36999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36999):map__36999);
var msg = map__36999__$1;
var msg_name = cljs.core.get.call(null,map__36999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36997__$1;
var pred__37001 = cljs.core._EQ_;
var expr__37002 = msg_name;
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37002))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37002))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36993,map__36993__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__,msg_hist,msg_names,msg){
return (function (state_37230){
var state_val_37231 = (state_37230[(1)]);
if((state_val_37231 === (7))){
var inst_37150 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37150)){
var statearr_37232_37282 = state_37230__$1;
(statearr_37232_37282[(1)] = (8));

} else {
var statearr_37233_37283 = state_37230__$1;
(statearr_37233_37283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (20))){
var inst_37224 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37234_37284 = state_37230__$1;
(statearr_37234_37284[(2)] = inst_37224);

(statearr_37234_37284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (27))){
var inst_37220 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37235_37285 = state_37230__$1;
(statearr_37235_37285[(2)] = inst_37220);

(statearr_37235_37285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (1))){
var inst_37143 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37143)){
var statearr_37236_37286 = state_37230__$1;
(statearr_37236_37286[(1)] = (2));

} else {
var statearr_37237_37287 = state_37230__$1;
(statearr_37237_37287[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (24))){
var inst_37222 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37238_37288 = state_37230__$1;
(statearr_37238_37288[(2)] = inst_37222);

(statearr_37238_37288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (4))){
var inst_37228 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37230__$1,inst_37228);
} else {
if((state_val_37231 === (15))){
var inst_37226 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37239_37289 = state_37230__$1;
(statearr_37239_37289[(2)] = inst_37226);

(statearr_37239_37289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (21))){
var inst_37179 = (state_37230[(2)]);
var inst_37180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37181 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37180);
var state_37230__$1 = (function (){var statearr_37240 = state_37230;
(statearr_37240[(7)] = inst_37179);

return statearr_37240;
})();
var statearr_37241_37290 = state_37230__$1;
(statearr_37241_37290[(2)] = inst_37181);

(statearr_37241_37290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (31))){
var inst_37209 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37209)){
var statearr_37242_37291 = state_37230__$1;
(statearr_37242_37291[(1)] = (34));

} else {
var statearr_37243_37292 = state_37230__$1;
(statearr_37243_37292[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (32))){
var inst_37218 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37244_37293 = state_37230__$1;
(statearr_37244_37293[(2)] = inst_37218);

(statearr_37244_37293[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (33))){
var inst_37205 = (state_37230[(2)]);
var inst_37206 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37207 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37206);
var state_37230__$1 = (function (){var statearr_37245 = state_37230;
(statearr_37245[(8)] = inst_37205);

return statearr_37245;
})();
var statearr_37246_37294 = state_37230__$1;
(statearr_37246_37294[(2)] = inst_37207);

(statearr_37246_37294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (13))){
var inst_37164 = figwheel.client.heads_up.clear.call(null);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(16),inst_37164);
} else {
if((state_val_37231 === (22))){
var inst_37185 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37186 = figwheel.client.heads_up.append_warning_message.call(null,inst_37185);
var state_37230__$1 = state_37230;
var statearr_37247_37295 = state_37230__$1;
(statearr_37247_37295[(2)] = inst_37186);

(statearr_37247_37295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (36))){
var inst_37216 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37248_37296 = state_37230__$1;
(statearr_37248_37296[(2)] = inst_37216);

(statearr_37248_37296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (29))){
var inst_37196 = (state_37230[(2)]);
var inst_37197 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37198 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37197);
var state_37230__$1 = (function (){var statearr_37249 = state_37230;
(statearr_37249[(9)] = inst_37196);

return statearr_37249;
})();
var statearr_37250_37297 = state_37230__$1;
(statearr_37250_37297[(2)] = inst_37198);

(statearr_37250_37297[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (6))){
var inst_37145 = (state_37230[(10)]);
var state_37230__$1 = state_37230;
var statearr_37251_37298 = state_37230__$1;
(statearr_37251_37298[(2)] = inst_37145);

(statearr_37251_37298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (28))){
var inst_37192 = (state_37230[(2)]);
var inst_37193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37194 = figwheel.client.heads_up.display_warning.call(null,inst_37193);
var state_37230__$1 = (function (){var statearr_37252 = state_37230;
(statearr_37252[(11)] = inst_37192);

return statearr_37252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(29),inst_37194);
} else {
if((state_val_37231 === (25))){
var inst_37190 = figwheel.client.heads_up.clear.call(null);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(28),inst_37190);
} else {
if((state_val_37231 === (34))){
var inst_37211 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(37),inst_37211);
} else {
if((state_val_37231 === (17))){
var inst_37170 = (state_37230[(2)]);
var inst_37171 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37172 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37171);
var state_37230__$1 = (function (){var statearr_37253 = state_37230;
(statearr_37253[(12)] = inst_37170);

return statearr_37253;
})();
var statearr_37254_37299 = state_37230__$1;
(statearr_37254_37299[(2)] = inst_37172);

(statearr_37254_37299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (3))){
var inst_37162 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37162)){
var statearr_37255_37300 = state_37230__$1;
(statearr_37255_37300[(1)] = (13));

} else {
var statearr_37256_37301 = state_37230__$1;
(statearr_37256_37301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (12))){
var inst_37158 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37257_37302 = state_37230__$1;
(statearr_37257_37302[(2)] = inst_37158);

(statearr_37257_37302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (2))){
var inst_37145 = (state_37230[(10)]);
var inst_37145__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37230__$1 = (function (){var statearr_37258 = state_37230;
(statearr_37258[(10)] = inst_37145__$1);

return statearr_37258;
})();
if(cljs.core.truth_(inst_37145__$1)){
var statearr_37259_37303 = state_37230__$1;
(statearr_37259_37303[(1)] = (5));

} else {
var statearr_37260_37304 = state_37230__$1;
(statearr_37260_37304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (23))){
var inst_37188 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37188)){
var statearr_37261_37305 = state_37230__$1;
(statearr_37261_37305[(1)] = (25));

} else {
var statearr_37262_37306 = state_37230__$1;
(statearr_37262_37306[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (35))){
var state_37230__$1 = state_37230;
var statearr_37263_37307 = state_37230__$1;
(statearr_37263_37307[(2)] = null);

(statearr_37263_37307[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (19))){
var inst_37183 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37183)){
var statearr_37264_37308 = state_37230__$1;
(statearr_37264_37308[(1)] = (22));

} else {
var statearr_37265_37309 = state_37230__$1;
(statearr_37265_37309[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (11))){
var inst_37154 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37266_37310 = state_37230__$1;
(statearr_37266_37310[(2)] = inst_37154);

(statearr_37266_37310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (9))){
var inst_37156 = figwheel.client.heads_up.clear.call(null);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(12),inst_37156);
} else {
if((state_val_37231 === (5))){
var inst_37147 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37230__$1 = state_37230;
var statearr_37267_37311 = state_37230__$1;
(statearr_37267_37311[(2)] = inst_37147);

(statearr_37267_37311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (14))){
var inst_37174 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37174)){
var statearr_37268_37312 = state_37230__$1;
(statearr_37268_37312[(1)] = (18));

} else {
var statearr_37269_37313 = state_37230__$1;
(statearr_37269_37313[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (26))){
var inst_37200 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37200)){
var statearr_37270_37314 = state_37230__$1;
(statearr_37270_37314[(1)] = (30));

} else {
var statearr_37271_37315 = state_37230__$1;
(statearr_37271_37315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (16))){
var inst_37166 = (state_37230[(2)]);
var inst_37167 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37168 = figwheel.client.heads_up.display_exception.call(null,inst_37167);
var state_37230__$1 = (function (){var statearr_37272 = state_37230;
(statearr_37272[(13)] = inst_37166);

return statearr_37272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(17),inst_37168);
} else {
if((state_val_37231 === (30))){
var inst_37202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37203 = figwheel.client.heads_up.display_warning.call(null,inst_37202);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(33),inst_37203);
} else {
if((state_val_37231 === (10))){
var inst_37160 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37273_37316 = state_37230__$1;
(statearr_37273_37316[(2)] = inst_37160);

(statearr_37273_37316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (18))){
var inst_37176 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37177 = figwheel.client.heads_up.display_exception.call(null,inst_37176);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(21),inst_37177);
} else {
if((state_val_37231 === (37))){
var inst_37213 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37274_37317 = state_37230__$1;
(statearr_37274_37317[(2)] = inst_37213);

(statearr_37274_37317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (8))){
var inst_37152 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37230__$1,(11),inst_37152);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29260__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29146__auto__,c__29260__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____0 = (function (){
var statearr_37278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37278[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__);

(statearr_37278[(1)] = (1));

return statearr_37278;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____1 = (function (state_37230){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_37230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e37279){if((e37279 instanceof Object)){
var ex__29150__auto__ = e37279;
var statearr_37280_37318 = state_37230;
(statearr_37280_37318[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37319 = state_37230;
state_37230 = G__37319;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__ = function(state_37230){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____1.call(this,state_37230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__,msg_hist,msg_names,msg))
})();
var state__29262__auto__ = (function (){var statearr_37281 = f__29261__auto__.call(null);
(statearr_37281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__,msg_hist,msg_names,msg))
);

return c__29260__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29260__auto___37382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___37382,ch){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___37382,ch){
return (function (state_37365){
var state_val_37366 = (state_37365[(1)]);
if((state_val_37366 === (1))){
var state_37365__$1 = state_37365;
var statearr_37367_37383 = state_37365__$1;
(statearr_37367_37383[(2)] = null);

(statearr_37367_37383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (2))){
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37365__$1,(4),ch);
} else {
if((state_val_37366 === (3))){
var inst_37363 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37365__$1,inst_37363);
} else {
if((state_val_37366 === (4))){
var inst_37353 = (state_37365[(7)]);
var inst_37353__$1 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37368 = state_37365;
(statearr_37368[(7)] = inst_37353__$1);

return statearr_37368;
})();
if(cljs.core.truth_(inst_37353__$1)){
var statearr_37369_37384 = state_37365__$1;
(statearr_37369_37384[(1)] = (5));

} else {
var statearr_37370_37385 = state_37365__$1;
(statearr_37370_37385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (5))){
var inst_37353 = (state_37365[(7)]);
var inst_37355 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37353);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37365__$1,(8),inst_37355);
} else {
if((state_val_37366 === (6))){
var state_37365__$1 = state_37365;
var statearr_37371_37386 = state_37365__$1;
(statearr_37371_37386[(2)] = null);

(statearr_37371_37386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (7))){
var inst_37361 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37372_37387 = state_37365__$1;
(statearr_37372_37387[(2)] = inst_37361);

(statearr_37372_37387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (8))){
var inst_37357 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37373 = state_37365;
(statearr_37373[(8)] = inst_37357);

return statearr_37373;
})();
var statearr_37374_37388 = state_37365__$1;
(statearr_37374_37388[(2)] = null);

(statearr_37374_37388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29260__auto___37382,ch))
;
return ((function (switch__29146__auto__,c__29260__auto___37382,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29147__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29147__auto____0 = (function (){
var statearr_37378 = [null,null,null,null,null,null,null,null,null];
(statearr_37378[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29147__auto__);

(statearr_37378[(1)] = (1));

return statearr_37378;
});
var figwheel$client$heads_up_plugin_$_state_machine__29147__auto____1 = (function (state_37365){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_37365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e37379){if((e37379 instanceof Object)){
var ex__29150__auto__ = e37379;
var statearr_37380_37389 = state_37365;
(statearr_37380_37389[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37390 = state_37365;
state_37365 = G__37390;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29147__auto__ = function(state_37365){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29147__auto____1.call(this,state_37365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29147__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29147__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___37382,ch))
})();
var state__29262__auto__ = (function (){var statearr_37381 = f__29261__auto__.call(null);
(statearr_37381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___37382);

return statearr_37381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___37382,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__){
return (function (state_37411){
var state_val_37412 = (state_37411[(1)]);
if((state_val_37412 === (1))){
var inst_37406 = cljs.core.async.timeout.call(null,(3000));
var state_37411__$1 = state_37411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37411__$1,(2),inst_37406);
} else {
if((state_val_37412 === (2))){
var inst_37408 = (state_37411[(2)]);
var inst_37409 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37411__$1 = (function (){var statearr_37413 = state_37411;
(statearr_37413[(7)] = inst_37408);

return statearr_37413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37411__$1,inst_37409);
} else {
return null;
}
}
});})(c__29260__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____0 = (function (){
var statearr_37417 = [null,null,null,null,null,null,null,null];
(statearr_37417[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__);

(statearr_37417[(1)] = (1));

return statearr_37417;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____1 = (function (state_37411){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_37411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e37418){if((e37418 instanceof Object)){
var ex__29150__auto__ = e37418;
var statearr_37419_37421 = state_37411;
(statearr_37419_37421[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37422 = state_37411;
state_37411 = G__37422;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__ = function(state_37411){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____1.call(this,state_37411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29147__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__))
})();
var state__29262__auto__ = (function (){var statearr_37420 = f__29261__auto__.call(null);
(statearr_37420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_37420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__))
);

return c__29260__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__,figwheel_version,temp__6753__auto__){
return (function (state_37445){
var state_val_37446 = (state_37445[(1)]);
if((state_val_37446 === (1))){
var inst_37439 = cljs.core.async.timeout.call(null,(2000));
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37445__$1,(2),inst_37439);
} else {
if((state_val_37446 === (2))){
var inst_37441 = (state_37445[(2)]);
var inst_37442 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37443 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37442);
var state_37445__$1 = (function (){var statearr_37447 = state_37445;
(statearr_37447[(7)] = inst_37441);

return statearr_37447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37445__$1,inst_37443);
} else {
return null;
}
}
});})(c__29260__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____0 = (function (){
var statearr_37451 = [null,null,null,null,null,null,null,null];
(statearr_37451[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__);

(statearr_37451[(1)] = (1));

return statearr_37451;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____1 = (function (state_37445){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_37445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e37452){if((e37452 instanceof Object)){
var ex__29150__auto__ = e37452;
var statearr_37453_37455 = state_37445;
(statearr_37453_37455[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37456 = state_37445;
state_37445 = G__37456;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__ = function(state_37445){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____1.call(this,state_37445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__,figwheel_version,temp__6753__auto__))
})();
var state__29262__auto__ = (function (){var statearr_37454 = f__29261__auto__.call(null);
(statearr_37454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_37454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__,figwheel_version,temp__6753__auto__))
);

return c__29260__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37457){
var map__37461 = p__37457;
var map__37461__$1 = ((((!((map__37461 == null)))?((((map__37461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37461):map__37461);
var file = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37463 = "";
var G__37463__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37463),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37463);
var G__37463__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37463__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37463__$1);
if(cljs.core.truth_((function (){var and__26582__auto__ = line;
if(cljs.core.truth_(and__26582__auto__)){
return column;
} else {
return and__26582__auto__;
}
})())){
return [cljs.core.str(G__37463__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37463__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37464){
var map__37471 = p__37464;
var map__37471__$1 = ((((!((map__37471 == null)))?((((map__37471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471):map__37471);
var ed = map__37471__$1;
var formatted_exception = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37473_37477 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37474_37478 = null;
var count__37475_37479 = (0);
var i__37476_37480 = (0);
while(true){
if((i__37476_37480 < count__37475_37479)){
var msg_37481 = cljs.core._nth.call(null,chunk__37474_37478,i__37476_37480);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37481);

var G__37482 = seq__37473_37477;
var G__37483 = chunk__37474_37478;
var G__37484 = count__37475_37479;
var G__37485 = (i__37476_37480 + (1));
seq__37473_37477 = G__37482;
chunk__37474_37478 = G__37483;
count__37475_37479 = G__37484;
i__37476_37480 = G__37485;
continue;
} else {
var temp__6753__auto___37486 = cljs.core.seq.call(null,seq__37473_37477);
if(temp__6753__auto___37486){
var seq__37473_37487__$1 = temp__6753__auto___37486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37473_37487__$1)){
var c__27497__auto___37488 = cljs.core.chunk_first.call(null,seq__37473_37487__$1);
var G__37489 = cljs.core.chunk_rest.call(null,seq__37473_37487__$1);
var G__37490 = c__27497__auto___37488;
var G__37491 = cljs.core.count.call(null,c__27497__auto___37488);
var G__37492 = (0);
seq__37473_37477 = G__37489;
chunk__37474_37478 = G__37490;
count__37475_37479 = G__37491;
i__37476_37480 = G__37492;
continue;
} else {
var msg_37493 = cljs.core.first.call(null,seq__37473_37487__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37493);

var G__37494 = cljs.core.next.call(null,seq__37473_37487__$1);
var G__37495 = null;
var G__37496 = (0);
var G__37497 = (0);
seq__37473_37477 = G__37494;
chunk__37474_37478 = G__37495;
count__37475_37479 = G__37496;
i__37476_37480 = G__37497;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37498){
var map__37501 = p__37498;
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var w = map__37501__$1;
var message = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26582__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26582__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26582__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37513 = cljs.core.seq.call(null,plugins);
var chunk__37514 = null;
var count__37515 = (0);
var i__37516 = (0);
while(true){
if((i__37516 < count__37515)){
var vec__37517 = cljs.core._nth.call(null,chunk__37514,i__37516);
var k = cljs.core.nth.call(null,vec__37517,(0),null);
var plugin = cljs.core.nth.call(null,vec__37517,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37513,chunk__37514,count__37515,i__37516,pl_37523,vec__37517,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37523.call(null,msg_hist);
});})(seq__37513,chunk__37514,count__37515,i__37516,pl_37523,vec__37517,k,plugin))
);
} else {
}

var G__37524 = seq__37513;
var G__37525 = chunk__37514;
var G__37526 = count__37515;
var G__37527 = (i__37516 + (1));
seq__37513 = G__37524;
chunk__37514 = G__37525;
count__37515 = G__37526;
i__37516 = G__37527;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__37513);
if(temp__6753__auto__){
var seq__37513__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37513__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__37513__$1);
var G__37528 = cljs.core.chunk_rest.call(null,seq__37513__$1);
var G__37529 = c__27497__auto__;
var G__37530 = cljs.core.count.call(null,c__27497__auto__);
var G__37531 = (0);
seq__37513 = G__37528;
chunk__37514 = G__37529;
count__37515 = G__37530;
i__37516 = G__37531;
continue;
} else {
var vec__37520 = cljs.core.first.call(null,seq__37513__$1);
var k = cljs.core.nth.call(null,vec__37520,(0),null);
var plugin = cljs.core.nth.call(null,vec__37520,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37532 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37513,chunk__37514,count__37515,i__37516,pl_37532,vec__37520,k,plugin,seq__37513__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37532.call(null,msg_hist);
});})(seq__37513,chunk__37514,count__37515,i__37516,pl_37532,vec__37520,k,plugin,seq__37513__$1,temp__6753__auto__))
);
} else {
}

var G__37533 = cljs.core.next.call(null,seq__37513__$1);
var G__37534 = null;
var G__37535 = (0);
var G__37536 = (0);
seq__37513 = G__37533;
chunk__37514 = G__37534;
count__37515 = G__37535;
i__37516 = G__37536;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37537 = [];
var len__27777__auto___37544 = arguments.length;
var i__27778__auto___37545 = (0);
while(true){
if((i__27778__auto___37545 < len__27777__auto___37544)){
args37537.push((arguments[i__27778__auto___37545]));

var G__37546 = (i__27778__auto___37545 + (1));
i__27778__auto___37545 = G__37546;
continue;
} else {
}
break;
}

var G__37539 = args37537.length;
switch (G__37539) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37537.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37540_37548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37541_37549 = null;
var count__37542_37550 = (0);
var i__37543_37551 = (0);
while(true){
if((i__37543_37551 < count__37542_37550)){
var msg_37552 = cljs.core._nth.call(null,chunk__37541_37549,i__37543_37551);
figwheel.client.socket.handle_incoming_message.call(null,msg_37552);

var G__37553 = seq__37540_37548;
var G__37554 = chunk__37541_37549;
var G__37555 = count__37542_37550;
var G__37556 = (i__37543_37551 + (1));
seq__37540_37548 = G__37553;
chunk__37541_37549 = G__37554;
count__37542_37550 = G__37555;
i__37543_37551 = G__37556;
continue;
} else {
var temp__6753__auto___37557 = cljs.core.seq.call(null,seq__37540_37548);
if(temp__6753__auto___37557){
var seq__37540_37558__$1 = temp__6753__auto___37557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37540_37558__$1)){
var c__27497__auto___37559 = cljs.core.chunk_first.call(null,seq__37540_37558__$1);
var G__37560 = cljs.core.chunk_rest.call(null,seq__37540_37558__$1);
var G__37561 = c__27497__auto___37559;
var G__37562 = cljs.core.count.call(null,c__27497__auto___37559);
var G__37563 = (0);
seq__37540_37548 = G__37560;
chunk__37541_37549 = G__37561;
count__37542_37550 = G__37562;
i__37543_37551 = G__37563;
continue;
} else {
var msg_37564 = cljs.core.first.call(null,seq__37540_37558__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37564);

var G__37565 = cljs.core.next.call(null,seq__37540_37558__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37540_37548 = G__37565;
chunk__37541_37549 = G__37566;
count__37542_37550 = G__37567;
i__37543_37551 = G__37568;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27784__auto__ = [];
var len__27777__auto___37573 = arguments.length;
var i__27778__auto___37574 = (0);
while(true){
if((i__27778__auto___37574 < len__27777__auto___37573)){
args__27784__auto__.push((arguments[i__27778__auto___37574]));

var G__37575 = (i__27778__auto___37574 + (1));
i__27778__auto___37574 = G__37575;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37570){
var map__37571 = p__37570;
var map__37571__$1 = ((((!((map__37571 == null)))?((((map__37571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37571):map__37571);
var opts = map__37571__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37569){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37569));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37577){if((e37577 instanceof Error)){
var e = e37577;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37577;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37581){
var map__37582 = p__37581;
var map__37582__$1 = ((((!((map__37582 == null)))?((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37582):map__37582);
var msg_name = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496990004241