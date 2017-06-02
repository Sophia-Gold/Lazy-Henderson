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
var args37104 = [];
var len__27785__auto___37107 = arguments.length;
var i__27786__auto___37108 = (0);
while(true){
if((i__27786__auto___37108 < len__27785__auto___37107)){
args37104.push((arguments[i__27786__auto___37108]));

var G__37109 = (i__27786__auto___37108 + (1));
i__27786__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var G__37106 = args37104.length;
switch (G__37106) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37104.length)].join('')));

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
var args__27792__auto__ = [];
var len__27785__auto___37112 = arguments.length;
var i__27786__auto___37113 = (0);
while(true){
if((i__27786__auto___37113 < len__27785__auto___37112)){
args__27792__auto__.push((arguments[i__27786__auto___37113]));

var G__37114 = (i__27786__auto___37113 + (1));
i__27786__auto___37113 = G__37114;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37111){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37111));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27792__auto__ = [];
var len__27785__auto___37116 = arguments.length;
var i__27786__auto___37117 = (0);
while(true){
if((i__27786__auto___37117 < len__27785__auto___37116)){
args__27792__auto__.push((arguments[i__27786__auto___37117]));

var G__37118 = (i__27786__auto___37117 + (1));
i__27786__auto___37117 = G__37118;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37115){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37115));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37119 = cljs.core._EQ_;
var expr__37120 = (function (){var or__26602__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37123){if((e37123 instanceof Error)){
var e = e37123;
return false;
} else {
throw e37123;

}
}})();
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37119.call(null,"true",expr__37120))){
return true;
} else {
if(cljs.core.truth_(pred__37119.call(null,"false",expr__37120))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37120)].join('')));
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
}catch (e37125){if((e37125 instanceof Error)){
var e = e37125;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37125;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37126){
var map__37129 = p__37126;
var map__37129__$1 = ((((!((map__37129 == null)))?((((map__37129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37129):map__37129);
var message = cljs.core.get.call(null,map__37129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26602__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26590__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26590__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26590__auto__;
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
var c__29673__auto___37291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___37291,ch){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___37291,ch){
return (function (state_37260){
var state_val_37261 = (state_37260[(1)]);
if((state_val_37261 === (7))){
var inst_37256 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37262_37292 = state_37260__$1;
(statearr_37262_37292[(2)] = inst_37256);

(statearr_37262_37292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (1))){
var state_37260__$1 = state_37260;
var statearr_37263_37293 = state_37260__$1;
(statearr_37263_37293[(2)] = null);

(statearr_37263_37293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (4))){
var inst_37213 = (state_37260[(7)]);
var inst_37213__$1 = (state_37260[(2)]);
var state_37260__$1 = (function (){var statearr_37264 = state_37260;
(statearr_37264[(7)] = inst_37213__$1);

return statearr_37264;
})();
if(cljs.core.truth_(inst_37213__$1)){
var statearr_37265_37294 = state_37260__$1;
(statearr_37265_37294[(1)] = (5));

} else {
var statearr_37266_37295 = state_37260__$1;
(statearr_37266_37295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (15))){
var inst_37220 = (state_37260[(8)]);
var inst_37235 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37220);
var inst_37236 = cljs.core.first.call(null,inst_37235);
var inst_37237 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37236);
var inst_37238 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37237)].join('');
var inst_37239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37238);
var state_37260__$1 = state_37260;
var statearr_37267_37296 = state_37260__$1;
(statearr_37267_37296[(2)] = inst_37239);

(statearr_37267_37296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (13))){
var inst_37244 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37268_37297 = state_37260__$1;
(statearr_37268_37297[(2)] = inst_37244);

(statearr_37268_37297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (6))){
var state_37260__$1 = state_37260;
var statearr_37269_37298 = state_37260__$1;
(statearr_37269_37298[(2)] = null);

(statearr_37269_37298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (17))){
var inst_37242 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37270_37299 = state_37260__$1;
(statearr_37270_37299[(2)] = inst_37242);

(statearr_37270_37299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (3))){
var inst_37258 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37260__$1,inst_37258);
} else {
if((state_val_37261 === (12))){
var inst_37219 = (state_37260[(9)]);
var inst_37233 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37219,opts);
var state_37260__$1 = state_37260;
if(cljs.core.truth_(inst_37233)){
var statearr_37271_37300 = state_37260__$1;
(statearr_37271_37300[(1)] = (15));

} else {
var statearr_37272_37301 = state_37260__$1;
(statearr_37272_37301[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (2))){
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(4),ch);
} else {
if((state_val_37261 === (11))){
var inst_37220 = (state_37260[(8)]);
var inst_37225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37226 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37220);
var inst_37227 = cljs.core.async.timeout.call(null,(1000));
var inst_37228 = [inst_37226,inst_37227];
var inst_37229 = (new cljs.core.PersistentVector(null,2,(5),inst_37225,inst_37228,null));
var state_37260__$1 = state_37260;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37260__$1,(14),inst_37229);
} else {
if((state_val_37261 === (9))){
var inst_37220 = (state_37260[(8)]);
var inst_37246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37247 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37220);
var inst_37248 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37247);
var inst_37249 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37248)].join('');
var inst_37250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37249);
var state_37260__$1 = (function (){var statearr_37273 = state_37260;
(statearr_37273[(10)] = inst_37246);

return statearr_37273;
})();
var statearr_37274_37302 = state_37260__$1;
(statearr_37274_37302[(2)] = inst_37250);

(statearr_37274_37302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (5))){
var inst_37213 = (state_37260[(7)]);
var inst_37215 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37216 = (new cljs.core.PersistentArrayMap(null,2,inst_37215,null));
var inst_37217 = (new cljs.core.PersistentHashSet(null,inst_37216,null));
var inst_37218 = figwheel.client.focus_msgs.call(null,inst_37217,inst_37213);
var inst_37219 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37218);
var inst_37220 = cljs.core.first.call(null,inst_37218);
var inst_37221 = figwheel.client.autoload_QMARK_.call(null);
var state_37260__$1 = (function (){var statearr_37275 = state_37260;
(statearr_37275[(9)] = inst_37219);

(statearr_37275[(8)] = inst_37220);

return statearr_37275;
})();
if(cljs.core.truth_(inst_37221)){
var statearr_37276_37303 = state_37260__$1;
(statearr_37276_37303[(1)] = (8));

} else {
var statearr_37277_37304 = state_37260__$1;
(statearr_37277_37304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (14))){
var inst_37231 = (state_37260[(2)]);
var state_37260__$1 = state_37260;
var statearr_37278_37305 = state_37260__$1;
(statearr_37278_37305[(2)] = inst_37231);

(statearr_37278_37305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (16))){
var state_37260__$1 = state_37260;
var statearr_37279_37306 = state_37260__$1;
(statearr_37279_37306[(2)] = null);

(statearr_37279_37306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (10))){
var inst_37252 = (state_37260[(2)]);
var state_37260__$1 = (function (){var statearr_37280 = state_37260;
(statearr_37280[(11)] = inst_37252);

return statearr_37280;
})();
var statearr_37281_37307 = state_37260__$1;
(statearr_37281_37307[(2)] = null);

(statearr_37281_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37261 === (8))){
var inst_37219 = (state_37260[(9)]);
var inst_37223 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37219,opts);
var state_37260__$1 = state_37260;
if(cljs.core.truth_(inst_37223)){
var statearr_37282_37308 = state_37260__$1;
(statearr_37282_37308[(1)] = (11));

} else {
var statearr_37283_37309 = state_37260__$1;
(statearr_37283_37309[(1)] = (12));

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
});})(c__29673__auto___37291,ch))
;
return ((function (switch__29559__auto__,c__29673__auto___37291,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____0 = (function (){
var statearr_37287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37287[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__);

(statearr_37287[(1)] = (1));

return statearr_37287;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____1 = (function (state_37260){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_37260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e37288){if((e37288 instanceof Object)){
var ex__29563__auto__ = e37288;
var statearr_37289_37310 = state_37260;
(statearr_37289_37310[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37311 = state_37260;
state_37260 = G__37311;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__ = function(state_37260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____1.call(this,state_37260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29560__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___37291,ch))
})();
var state__29675__auto__ = (function (){var statearr_37290 = f__29674__auto__.call(null);
(statearr_37290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___37291);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___37291,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37312_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37312_SHARP_));
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
var base_path_37315 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37315){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37314){if((e37314 instanceof Error)){
var e = e37314;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37315], null));
} else {
var e = e37314;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37315))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37316){
var map__37325 = p__37316;
var map__37325__$1 = ((((!((map__37325 == null)))?((((map__37325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37325):map__37325);
var opts = map__37325__$1;
var build_id = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37325,map__37325__$1,opts,build_id){
return (function (p__37327){
var vec__37328 = p__37327;
var seq__37329 = cljs.core.seq.call(null,vec__37328);
var first__37330 = cljs.core.first.call(null,seq__37329);
var seq__37329__$1 = cljs.core.next.call(null,seq__37329);
var map__37331 = first__37330;
var map__37331__$1 = ((((!((map__37331 == null)))?((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37331):map__37331);
var msg = map__37331__$1;
var msg_name = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37329__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37328,seq__37329,first__37330,seq__37329__$1,map__37331,map__37331__$1,msg,msg_name,_,map__37325,map__37325__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37328,seq__37329,first__37330,seq__37329__$1,map__37331,map__37331__$1,msg,msg_name,_,map__37325,map__37325__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37325,map__37325__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37339){
var vec__37340 = p__37339;
var seq__37341 = cljs.core.seq.call(null,vec__37340);
var first__37342 = cljs.core.first.call(null,seq__37341);
var seq__37341__$1 = cljs.core.next.call(null,seq__37341);
var map__37343 = first__37342;
var map__37343__$1 = ((((!((map__37343 == null)))?((((map__37343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37343):map__37343);
var msg = map__37343__$1;
var msg_name = cljs.core.get.call(null,map__37343__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37341__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37345){
var map__37357 = p__37345;
var map__37357__$1 = ((((!((map__37357 == null)))?((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37357):map__37357);
var on_compile_warning = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37357,map__37357__$1,on_compile_warning,on_compile_fail){
return (function (p__37359){
var vec__37360 = p__37359;
var seq__37361 = cljs.core.seq.call(null,vec__37360);
var first__37362 = cljs.core.first.call(null,seq__37361);
var seq__37361__$1 = cljs.core.next.call(null,seq__37361);
var map__37363 = first__37362;
var map__37363__$1 = ((((!((map__37363 == null)))?((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37363):map__37363);
var msg = map__37363__$1;
var msg_name = cljs.core.get.call(null,map__37363__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37361__$1;
var pred__37365 = cljs.core._EQ_;
var expr__37366 = msg_name;
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37366))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37366))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37357,map__37357__$1,on_compile_warning,on_compile_fail))
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
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__,msg_hist,msg_names,msg){
return (function (state_37594){
var state_val_37595 = (state_37594[(1)]);
if((state_val_37595 === (7))){
var inst_37514 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37514)){
var statearr_37596_37646 = state_37594__$1;
(statearr_37596_37646[(1)] = (8));

} else {
var statearr_37597_37647 = state_37594__$1;
(statearr_37597_37647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (20))){
var inst_37588 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37598_37648 = state_37594__$1;
(statearr_37598_37648[(2)] = inst_37588);

(statearr_37598_37648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (27))){
var inst_37584 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37599_37649 = state_37594__$1;
(statearr_37599_37649[(2)] = inst_37584);

(statearr_37599_37649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (1))){
var inst_37507 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37507)){
var statearr_37600_37650 = state_37594__$1;
(statearr_37600_37650[(1)] = (2));

} else {
var statearr_37601_37651 = state_37594__$1;
(statearr_37601_37651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (24))){
var inst_37586 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37602_37652 = state_37594__$1;
(statearr_37602_37652[(2)] = inst_37586);

(statearr_37602_37652[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (4))){
var inst_37592 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37594__$1,inst_37592);
} else {
if((state_val_37595 === (15))){
var inst_37590 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37603_37653 = state_37594__$1;
(statearr_37603_37653[(2)] = inst_37590);

(statearr_37603_37653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (21))){
var inst_37543 = (state_37594[(2)]);
var inst_37544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37545 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37544);
var state_37594__$1 = (function (){var statearr_37604 = state_37594;
(statearr_37604[(7)] = inst_37543);

return statearr_37604;
})();
var statearr_37605_37654 = state_37594__$1;
(statearr_37605_37654[(2)] = inst_37545);

(statearr_37605_37654[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (31))){
var inst_37573 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37573)){
var statearr_37606_37655 = state_37594__$1;
(statearr_37606_37655[(1)] = (34));

} else {
var statearr_37607_37656 = state_37594__$1;
(statearr_37607_37656[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (32))){
var inst_37582 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37608_37657 = state_37594__$1;
(statearr_37608_37657[(2)] = inst_37582);

(statearr_37608_37657[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (33))){
var inst_37569 = (state_37594[(2)]);
var inst_37570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37571 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37570);
var state_37594__$1 = (function (){var statearr_37609 = state_37594;
(statearr_37609[(8)] = inst_37569);

return statearr_37609;
})();
var statearr_37610_37658 = state_37594__$1;
(statearr_37610_37658[(2)] = inst_37571);

(statearr_37610_37658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (13))){
var inst_37528 = figwheel.client.heads_up.clear.call(null);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(16),inst_37528);
} else {
if((state_val_37595 === (22))){
var inst_37549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37550 = figwheel.client.heads_up.append_warning_message.call(null,inst_37549);
var state_37594__$1 = state_37594;
var statearr_37611_37659 = state_37594__$1;
(statearr_37611_37659[(2)] = inst_37550);

(statearr_37611_37659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (36))){
var inst_37580 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37612_37660 = state_37594__$1;
(statearr_37612_37660[(2)] = inst_37580);

(statearr_37612_37660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (29))){
var inst_37560 = (state_37594[(2)]);
var inst_37561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37562 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37561);
var state_37594__$1 = (function (){var statearr_37613 = state_37594;
(statearr_37613[(9)] = inst_37560);

return statearr_37613;
})();
var statearr_37614_37661 = state_37594__$1;
(statearr_37614_37661[(2)] = inst_37562);

(statearr_37614_37661[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (6))){
var inst_37509 = (state_37594[(10)]);
var state_37594__$1 = state_37594;
var statearr_37615_37662 = state_37594__$1;
(statearr_37615_37662[(2)] = inst_37509);

(statearr_37615_37662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (28))){
var inst_37556 = (state_37594[(2)]);
var inst_37557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37558 = figwheel.client.heads_up.display_warning.call(null,inst_37557);
var state_37594__$1 = (function (){var statearr_37616 = state_37594;
(statearr_37616[(11)] = inst_37556);

return statearr_37616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(29),inst_37558);
} else {
if((state_val_37595 === (25))){
var inst_37554 = figwheel.client.heads_up.clear.call(null);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(28),inst_37554);
} else {
if((state_val_37595 === (34))){
var inst_37575 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(37),inst_37575);
} else {
if((state_val_37595 === (17))){
var inst_37534 = (state_37594[(2)]);
var inst_37535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37536 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37535);
var state_37594__$1 = (function (){var statearr_37617 = state_37594;
(statearr_37617[(12)] = inst_37534);

return statearr_37617;
})();
var statearr_37618_37663 = state_37594__$1;
(statearr_37618_37663[(2)] = inst_37536);

(statearr_37618_37663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (3))){
var inst_37526 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37526)){
var statearr_37619_37664 = state_37594__$1;
(statearr_37619_37664[(1)] = (13));

} else {
var statearr_37620_37665 = state_37594__$1;
(statearr_37620_37665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (12))){
var inst_37522 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37621_37666 = state_37594__$1;
(statearr_37621_37666[(2)] = inst_37522);

(statearr_37621_37666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (2))){
var inst_37509 = (state_37594[(10)]);
var inst_37509__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37594__$1 = (function (){var statearr_37622 = state_37594;
(statearr_37622[(10)] = inst_37509__$1);

return statearr_37622;
})();
if(cljs.core.truth_(inst_37509__$1)){
var statearr_37623_37667 = state_37594__$1;
(statearr_37623_37667[(1)] = (5));

} else {
var statearr_37624_37668 = state_37594__$1;
(statearr_37624_37668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (23))){
var inst_37552 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37552)){
var statearr_37625_37669 = state_37594__$1;
(statearr_37625_37669[(1)] = (25));

} else {
var statearr_37626_37670 = state_37594__$1;
(statearr_37626_37670[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (35))){
var state_37594__$1 = state_37594;
var statearr_37627_37671 = state_37594__$1;
(statearr_37627_37671[(2)] = null);

(statearr_37627_37671[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (19))){
var inst_37547 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37547)){
var statearr_37628_37672 = state_37594__$1;
(statearr_37628_37672[(1)] = (22));

} else {
var statearr_37629_37673 = state_37594__$1;
(statearr_37629_37673[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (11))){
var inst_37518 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37630_37674 = state_37594__$1;
(statearr_37630_37674[(2)] = inst_37518);

(statearr_37630_37674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (9))){
var inst_37520 = figwheel.client.heads_up.clear.call(null);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(12),inst_37520);
} else {
if((state_val_37595 === (5))){
var inst_37511 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37594__$1 = state_37594;
var statearr_37631_37675 = state_37594__$1;
(statearr_37631_37675[(2)] = inst_37511);

(statearr_37631_37675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (14))){
var inst_37538 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37538)){
var statearr_37632_37676 = state_37594__$1;
(statearr_37632_37676[(1)] = (18));

} else {
var statearr_37633_37677 = state_37594__$1;
(statearr_37633_37677[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (26))){
var inst_37564 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37564)){
var statearr_37634_37678 = state_37594__$1;
(statearr_37634_37678[(1)] = (30));

} else {
var statearr_37635_37679 = state_37594__$1;
(statearr_37635_37679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (16))){
var inst_37530 = (state_37594[(2)]);
var inst_37531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37532 = figwheel.client.heads_up.display_exception.call(null,inst_37531);
var state_37594__$1 = (function (){var statearr_37636 = state_37594;
(statearr_37636[(13)] = inst_37530);

return statearr_37636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(17),inst_37532);
} else {
if((state_val_37595 === (30))){
var inst_37566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37567 = figwheel.client.heads_up.display_warning.call(null,inst_37566);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(33),inst_37567);
} else {
if((state_val_37595 === (10))){
var inst_37524 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37637_37680 = state_37594__$1;
(statearr_37637_37680[(2)] = inst_37524);

(statearr_37637_37680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (18))){
var inst_37540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37541 = figwheel.client.heads_up.display_exception.call(null,inst_37540);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(21),inst_37541);
} else {
if((state_val_37595 === (37))){
var inst_37577 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37638_37681 = state_37594__$1;
(statearr_37638_37681[(2)] = inst_37577);

(statearr_37638_37681[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (8))){
var inst_37516 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(11),inst_37516);
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
});})(c__29673__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29559__auto__,c__29673__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____0 = (function (){
var statearr_37642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37642[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__);

(statearr_37642[(1)] = (1));

return statearr_37642;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____1 = (function (state_37594){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_37594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e37643){if((e37643 instanceof Object)){
var ex__29563__auto__ = e37643;
var statearr_37644_37682 = state_37594;
(statearr_37644_37682[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37683 = state_37594;
state_37594 = G__37683;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__ = function(state_37594){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____1.call(this,state_37594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__,msg_hist,msg_names,msg))
})();
var state__29675__auto__ = (function (){var statearr_37645 = f__29674__auto__.call(null);
(statearr_37645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_37645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__,msg_hist,msg_names,msg))
);

return c__29673__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29673__auto___37746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___37746,ch){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___37746,ch){
return (function (state_37729){
var state_val_37730 = (state_37729[(1)]);
if((state_val_37730 === (1))){
var state_37729__$1 = state_37729;
var statearr_37731_37747 = state_37729__$1;
(statearr_37731_37747[(2)] = null);

(statearr_37731_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (2))){
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37729__$1,(4),ch);
} else {
if((state_val_37730 === (3))){
var inst_37727 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37729__$1,inst_37727);
} else {
if((state_val_37730 === (4))){
var inst_37717 = (state_37729[(7)]);
var inst_37717__$1 = (state_37729[(2)]);
var state_37729__$1 = (function (){var statearr_37732 = state_37729;
(statearr_37732[(7)] = inst_37717__$1);

return statearr_37732;
})();
if(cljs.core.truth_(inst_37717__$1)){
var statearr_37733_37748 = state_37729__$1;
(statearr_37733_37748[(1)] = (5));

} else {
var statearr_37734_37749 = state_37729__$1;
(statearr_37734_37749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (5))){
var inst_37717 = (state_37729[(7)]);
var inst_37719 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37717);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37729__$1,(8),inst_37719);
} else {
if((state_val_37730 === (6))){
var state_37729__$1 = state_37729;
var statearr_37735_37750 = state_37729__$1;
(statearr_37735_37750[(2)] = null);

(statearr_37735_37750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (7))){
var inst_37725 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37736_37751 = state_37729__$1;
(statearr_37736_37751[(2)] = inst_37725);

(statearr_37736_37751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (8))){
var inst_37721 = (state_37729[(2)]);
var state_37729__$1 = (function (){var statearr_37737 = state_37729;
(statearr_37737[(8)] = inst_37721);

return statearr_37737;
})();
var statearr_37738_37752 = state_37729__$1;
(statearr_37738_37752[(2)] = null);

(statearr_37738_37752[(1)] = (2));


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
});})(c__29673__auto___37746,ch))
;
return ((function (switch__29559__auto__,c__29673__auto___37746,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29560__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29560__auto____0 = (function (){
var statearr_37742 = [null,null,null,null,null,null,null,null,null];
(statearr_37742[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29560__auto__);

(statearr_37742[(1)] = (1));

return statearr_37742;
});
var figwheel$client$heads_up_plugin_$_state_machine__29560__auto____1 = (function (state_37729){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_37729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e37743){if((e37743 instanceof Object)){
var ex__29563__auto__ = e37743;
var statearr_37744_37753 = state_37729;
(statearr_37744_37753[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37754 = state_37729;
state_37729 = G__37754;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29560__auto__ = function(state_37729){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29560__auto____1.call(this,state_37729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29560__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29560__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___37746,ch))
})();
var state__29675__auto__ = (function (){var statearr_37745 = f__29674__auto__.call(null);
(statearr_37745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___37746);

return statearr_37745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___37746,ch))
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
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__){
return (function (state_37775){
var state_val_37776 = (state_37775[(1)]);
if((state_val_37776 === (1))){
var inst_37770 = cljs.core.async.timeout.call(null,(3000));
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37775__$1,(2),inst_37770);
} else {
if((state_val_37776 === (2))){
var inst_37772 = (state_37775[(2)]);
var inst_37773 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37775__$1 = (function (){var statearr_37777 = state_37775;
(statearr_37777[(7)] = inst_37772);

return statearr_37777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37775__$1,inst_37773);
} else {
return null;
}
}
});})(c__29673__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____0 = (function (){
var statearr_37781 = [null,null,null,null,null,null,null,null];
(statearr_37781[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__);

(statearr_37781[(1)] = (1));

return statearr_37781;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____1 = (function (state_37775){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_37775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e37782){if((e37782 instanceof Object)){
var ex__29563__auto__ = e37782;
var statearr_37783_37785 = state_37775;
(statearr_37783_37785[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37786 = state_37775;
state_37775 = G__37786;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__ = function(state_37775){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____1.call(this,state_37775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29560__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__))
})();
var state__29675__auto__ = (function (){var statearr_37784 = f__29674__auto__.call(null);
(statearr_37784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_37784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__))
);

return c__29673__auto__;
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
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__,figwheel_version,temp__6753__auto__){
return (function (state_37809){
var state_val_37810 = (state_37809[(1)]);
if((state_val_37810 === (1))){
var inst_37803 = cljs.core.async.timeout.call(null,(2000));
var state_37809__$1 = state_37809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37809__$1,(2),inst_37803);
} else {
if((state_val_37810 === (2))){
var inst_37805 = (state_37809[(2)]);
var inst_37806 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37807 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37806);
var state_37809__$1 = (function (){var statearr_37811 = state_37809;
(statearr_37811[(7)] = inst_37805);

return statearr_37811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37809__$1,inst_37807);
} else {
return null;
}
}
});})(c__29673__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____0 = (function (){
var statearr_37815 = [null,null,null,null,null,null,null,null];
(statearr_37815[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__);

(statearr_37815[(1)] = (1));

return statearr_37815;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____1 = (function (state_37809){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_37809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e37816){if((e37816 instanceof Object)){
var ex__29563__auto__ = e37816;
var statearr_37817_37819 = state_37809;
(statearr_37817_37819[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37820 = state_37809;
state_37809 = G__37820;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__ = function(state_37809){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____1.call(this,state_37809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__,figwheel_version,temp__6753__auto__))
})();
var state__29675__auto__ = (function (){var statearr_37818 = f__29674__auto__.call(null);
(statearr_37818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_37818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__,figwheel_version,temp__6753__auto__))
);

return c__29673__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37821){
var map__37825 = p__37821;
var map__37825__$1 = ((((!((map__37825 == null)))?((((map__37825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37825):map__37825);
var file = cljs.core.get.call(null,map__37825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37825__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37825__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37827 = "";
var G__37827__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37827),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37827);
var G__37827__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37827__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37827__$1);
if(cljs.core.truth_((function (){var and__26590__auto__ = line;
if(cljs.core.truth_(and__26590__auto__)){
return column;
} else {
return and__26590__auto__;
}
})())){
return [cljs.core.str(G__37827__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37827__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37828){
var map__37835 = p__37828;
var map__37835__$1 = ((((!((map__37835 == null)))?((((map__37835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37835):map__37835);
var ed = map__37835__$1;
var formatted_exception = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37837_37841 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37838_37842 = null;
var count__37839_37843 = (0);
var i__37840_37844 = (0);
while(true){
if((i__37840_37844 < count__37839_37843)){
var msg_37845 = cljs.core._nth.call(null,chunk__37838_37842,i__37840_37844);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37845);

var G__37846 = seq__37837_37841;
var G__37847 = chunk__37838_37842;
var G__37848 = count__37839_37843;
var G__37849 = (i__37840_37844 + (1));
seq__37837_37841 = G__37846;
chunk__37838_37842 = G__37847;
count__37839_37843 = G__37848;
i__37840_37844 = G__37849;
continue;
} else {
var temp__6753__auto___37850 = cljs.core.seq.call(null,seq__37837_37841);
if(temp__6753__auto___37850){
var seq__37837_37851__$1 = temp__6753__auto___37850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37837_37851__$1)){
var c__27505__auto___37852 = cljs.core.chunk_first.call(null,seq__37837_37851__$1);
var G__37853 = cljs.core.chunk_rest.call(null,seq__37837_37851__$1);
var G__37854 = c__27505__auto___37852;
var G__37855 = cljs.core.count.call(null,c__27505__auto___37852);
var G__37856 = (0);
seq__37837_37841 = G__37853;
chunk__37838_37842 = G__37854;
count__37839_37843 = G__37855;
i__37840_37844 = G__37856;
continue;
} else {
var msg_37857 = cljs.core.first.call(null,seq__37837_37851__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37857);

var G__37858 = cljs.core.next.call(null,seq__37837_37851__$1);
var G__37859 = null;
var G__37860 = (0);
var G__37861 = (0);
seq__37837_37841 = G__37858;
chunk__37838_37842 = G__37859;
count__37839_37843 = G__37860;
i__37840_37844 = G__37861;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37862){
var map__37865 = p__37862;
var map__37865__$1 = ((((!((map__37865 == null)))?((((map__37865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37865):map__37865);
var w = map__37865__$1;
var message = cljs.core.get.call(null,map__37865__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__26590__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26590__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26590__auto__;
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
var seq__37877 = cljs.core.seq.call(null,plugins);
var chunk__37878 = null;
var count__37879 = (0);
var i__37880 = (0);
while(true){
if((i__37880 < count__37879)){
var vec__37881 = cljs.core._nth.call(null,chunk__37878,i__37880);
var k = cljs.core.nth.call(null,vec__37881,(0),null);
var plugin = cljs.core.nth.call(null,vec__37881,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37887 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37887.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37887,vec__37881,k,plugin))
);
} else {
}

var G__37888 = seq__37877;
var G__37889 = chunk__37878;
var G__37890 = count__37879;
var G__37891 = (i__37880 + (1));
seq__37877 = G__37888;
chunk__37878 = G__37889;
count__37879 = G__37890;
i__37880 = G__37891;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__37877);
if(temp__6753__auto__){
var seq__37877__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37877__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__37877__$1);
var G__37892 = cljs.core.chunk_rest.call(null,seq__37877__$1);
var G__37893 = c__27505__auto__;
var G__37894 = cljs.core.count.call(null,c__27505__auto__);
var G__37895 = (0);
seq__37877 = G__37892;
chunk__37878 = G__37893;
count__37879 = G__37894;
i__37880 = G__37895;
continue;
} else {
var vec__37884 = cljs.core.first.call(null,seq__37877__$1);
var k = cljs.core.nth.call(null,vec__37884,(0),null);
var plugin = cljs.core.nth.call(null,vec__37884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37896 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37896.call(null,msg_hist);
});})(seq__37877,chunk__37878,count__37879,i__37880,pl_37896,vec__37884,k,plugin,seq__37877__$1,temp__6753__auto__))
);
} else {
}

var G__37897 = cljs.core.next.call(null,seq__37877__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37877 = G__37897;
chunk__37878 = G__37898;
count__37879 = G__37899;
i__37880 = G__37900;
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
var args37901 = [];
var len__27785__auto___37908 = arguments.length;
var i__27786__auto___37909 = (0);
while(true){
if((i__27786__auto___37909 < len__27785__auto___37908)){
args37901.push((arguments[i__27786__auto___37909]));

var G__37910 = (i__27786__auto___37909 + (1));
i__27786__auto___37909 = G__37910;
continue;
} else {
}
break;
}

var G__37903 = args37901.length;
switch (G__37903) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37901.length)].join('')));

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

var seq__37904_37912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37905_37913 = null;
var count__37906_37914 = (0);
var i__37907_37915 = (0);
while(true){
if((i__37907_37915 < count__37906_37914)){
var msg_37916 = cljs.core._nth.call(null,chunk__37905_37913,i__37907_37915);
figwheel.client.socket.handle_incoming_message.call(null,msg_37916);

var G__37917 = seq__37904_37912;
var G__37918 = chunk__37905_37913;
var G__37919 = count__37906_37914;
var G__37920 = (i__37907_37915 + (1));
seq__37904_37912 = G__37917;
chunk__37905_37913 = G__37918;
count__37906_37914 = G__37919;
i__37907_37915 = G__37920;
continue;
} else {
var temp__6753__auto___37921 = cljs.core.seq.call(null,seq__37904_37912);
if(temp__6753__auto___37921){
var seq__37904_37922__$1 = temp__6753__auto___37921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37904_37922__$1)){
var c__27505__auto___37923 = cljs.core.chunk_first.call(null,seq__37904_37922__$1);
var G__37924 = cljs.core.chunk_rest.call(null,seq__37904_37922__$1);
var G__37925 = c__27505__auto___37923;
var G__37926 = cljs.core.count.call(null,c__27505__auto___37923);
var G__37927 = (0);
seq__37904_37912 = G__37924;
chunk__37905_37913 = G__37925;
count__37906_37914 = G__37926;
i__37907_37915 = G__37927;
continue;
} else {
var msg_37928 = cljs.core.first.call(null,seq__37904_37922__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37928);

var G__37929 = cljs.core.next.call(null,seq__37904_37922__$1);
var G__37930 = null;
var G__37931 = (0);
var G__37932 = (0);
seq__37904_37912 = G__37929;
chunk__37905_37913 = G__37930;
count__37906_37914 = G__37931;
i__37907_37915 = G__37932;
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
var args__27792__auto__ = [];
var len__27785__auto___37937 = arguments.length;
var i__27786__auto___37938 = (0);
while(true){
if((i__27786__auto___37938 < len__27785__auto___37937)){
args__27792__auto__.push((arguments[i__27786__auto___37938]));

var G__37939 = (i__27786__auto___37938 + (1));
i__27786__auto___37938 = G__37939;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37934){
var map__37935 = p__37934;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var opts = map__37935__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37933){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37933));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37941){if((e37941 instanceof Error)){
var e = e37941;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37941;

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
return (function (p__37945){
var map__37946 = p__37945;
var map__37946__$1 = ((((!((map__37946 == null)))?((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37946):map__37946);
var msg_name = cljs.core.get.call(null,map__37946__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496385396789