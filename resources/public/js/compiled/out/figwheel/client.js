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
var args35108 = [];
var len__27777__auto___35111 = arguments.length;
var i__27778__auto___35112 = (0);
while(true){
if((i__27778__auto___35112 < len__27777__auto___35111)){
args35108.push((arguments[i__27778__auto___35112]));

var G__35113 = (i__27778__auto___35112 + (1));
i__27778__auto___35112 = G__35113;
continue;
} else {
}
break;
}

var G__35110 = args35108.length;
switch (G__35110) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35108.length)].join('')));

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
var len__27777__auto___35116 = arguments.length;
var i__27778__auto___35117 = (0);
while(true){
if((i__27778__auto___35117 < len__27777__auto___35116)){
args__27784__auto__.push((arguments[i__27778__auto___35117]));

var G__35118 = (i__27778__auto___35117 + (1));
i__27778__auto___35117 = G__35118;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35115){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35115));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27784__auto__ = [];
var len__27777__auto___35120 = arguments.length;
var i__27778__auto___35121 = (0);
while(true){
if((i__27778__auto___35121 < len__27777__auto___35120)){
args__27784__auto__.push((arguments[i__27778__auto___35121]));

var G__35122 = (i__27778__auto___35121 + (1));
i__27778__auto___35121 = G__35122;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35119){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35119));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35123 = cljs.core._EQ_;
var expr__35124 = (function (){var or__26594__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35127){if((e35127 instanceof Error)){
var e = e35127;
return false;
} else {
throw e35127;

}
}})();
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35123.call(null,"true",expr__35124))){
return true;
} else {
if(cljs.core.truth_(pred__35123.call(null,"false",expr__35124))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35124)].join('')));
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
}catch (e35129){if((e35129 instanceof Error)){
var e = e35129;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35129;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35130){
var map__35133 = p__35130;
var map__35133__$1 = ((((!((map__35133 == null)))?((((map__35133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35133):map__35133);
var message = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29242__auto___35295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___35295,ch){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___35295,ch){
return (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (7))){
var inst_35260 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35266_35296 = state_35264__$1;
(statearr_35266_35296[(2)] = inst_35260);

(statearr_35266_35296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (1))){
var state_35264__$1 = state_35264;
var statearr_35267_35297 = state_35264__$1;
(statearr_35267_35297[(2)] = null);

(statearr_35267_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (4))){
var inst_35217 = (state_35264[(7)]);
var inst_35217__$1 = (state_35264[(2)]);
var state_35264__$1 = (function (){var statearr_35268 = state_35264;
(statearr_35268[(7)] = inst_35217__$1);

return statearr_35268;
})();
if(cljs.core.truth_(inst_35217__$1)){
var statearr_35269_35298 = state_35264__$1;
(statearr_35269_35298[(1)] = (5));

} else {
var statearr_35270_35299 = state_35264__$1;
(statearr_35270_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (15))){
var inst_35224 = (state_35264[(8)]);
var inst_35239 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35224);
var inst_35240 = cljs.core.first.call(null,inst_35239);
var inst_35241 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35240);
var inst_35242 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35241)].join('');
var inst_35243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35242);
var state_35264__$1 = state_35264;
var statearr_35271_35300 = state_35264__$1;
(statearr_35271_35300[(2)] = inst_35243);

(statearr_35271_35300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (13))){
var inst_35248 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35272_35301 = state_35264__$1;
(statearr_35272_35301[(2)] = inst_35248);

(statearr_35272_35301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var state_35264__$1 = state_35264;
var statearr_35273_35302 = state_35264__$1;
(statearr_35273_35302[(2)] = null);

(statearr_35273_35302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (17))){
var inst_35246 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35274_35303 = state_35264__$1;
(statearr_35274_35303[(2)] = inst_35246);

(statearr_35274_35303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (3))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (12))){
var inst_35223 = (state_35264[(9)]);
var inst_35237 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35223,opts);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35237)){
var statearr_35275_35304 = state_35264__$1;
(statearr_35275_35304[(1)] = (15));

} else {
var statearr_35276_35305 = state_35264__$1;
(statearr_35276_35305[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (2))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35264__$1,(4),ch);
} else {
if((state_val_35265 === (11))){
var inst_35224 = (state_35264[(8)]);
var inst_35229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35230 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35224);
var inst_35231 = cljs.core.async.timeout.call(null,(1000));
var inst_35232 = [inst_35230,inst_35231];
var inst_35233 = (new cljs.core.PersistentVector(null,2,(5),inst_35229,inst_35232,null));
var state_35264__$1 = state_35264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35264__$1,(14),inst_35233);
} else {
if((state_val_35265 === (9))){
var inst_35224 = (state_35264[(8)]);
var inst_35250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35251 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35224);
var inst_35252 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35251);
var inst_35253 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35252)].join('');
var inst_35254 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35253);
var state_35264__$1 = (function (){var statearr_35277 = state_35264;
(statearr_35277[(10)] = inst_35250);

return statearr_35277;
})();
var statearr_35278_35306 = state_35264__$1;
(statearr_35278_35306[(2)] = inst_35254);

(statearr_35278_35306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (5))){
var inst_35217 = (state_35264[(7)]);
var inst_35219 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35220 = (new cljs.core.PersistentArrayMap(null,2,inst_35219,null));
var inst_35221 = (new cljs.core.PersistentHashSet(null,inst_35220,null));
var inst_35222 = figwheel.client.focus_msgs.call(null,inst_35221,inst_35217);
var inst_35223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35222);
var inst_35224 = cljs.core.first.call(null,inst_35222);
var inst_35225 = figwheel.client.autoload_QMARK_.call(null);
var state_35264__$1 = (function (){var statearr_35279 = state_35264;
(statearr_35279[(8)] = inst_35224);

(statearr_35279[(9)] = inst_35223);

return statearr_35279;
})();
if(cljs.core.truth_(inst_35225)){
var statearr_35280_35307 = state_35264__$1;
(statearr_35280_35307[(1)] = (8));

} else {
var statearr_35281_35308 = state_35264__$1;
(statearr_35281_35308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (14))){
var inst_35235 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35282_35309 = state_35264__$1;
(statearr_35282_35309[(2)] = inst_35235);

(statearr_35282_35309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (16))){
var state_35264__$1 = state_35264;
var statearr_35283_35310 = state_35264__$1;
(statearr_35283_35310[(2)] = null);

(statearr_35283_35310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (10))){
var inst_35256 = (state_35264[(2)]);
var state_35264__$1 = (function (){var statearr_35284 = state_35264;
(statearr_35284[(11)] = inst_35256);

return statearr_35284;
})();
var statearr_35285_35311 = state_35264__$1;
(statearr_35285_35311[(2)] = null);

(statearr_35285_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (8))){
var inst_35223 = (state_35264[(9)]);
var inst_35227 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35223,opts);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35227)){
var statearr_35286_35312 = state_35264__$1;
(statearr_35286_35312[(1)] = (11));

} else {
var statearr_35287_35313 = state_35264__$1;
(statearr_35287_35313[(1)] = (12));

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
});})(c__29242__auto___35295,ch))
;
return ((function (switch__29128__auto__,c__29242__auto___35295,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_35291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35291[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__);

(statearr_35291[(1)] = (1));

return statearr_35291;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1 = (function (state_35264){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_35264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e35292){if((e35292 instanceof Object)){
var ex__29132__auto__ = e35292;
var statearr_35293_35314 = state_35264;
(statearr_35293_35314[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35315 = state_35264;
state_35264 = G__35315;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___35295,ch))
})();
var state__29244__auto__ = (function (){var statearr_35294 = f__29243__auto__.call(null);
(statearr_35294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___35295);

return statearr_35294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___35295,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35316_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35316_SHARP_));
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
var base_path_35319 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35319){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35318){if((e35318 instanceof Error)){
var e = e35318;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35319], null));
} else {
var e = e35318;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35319))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35320){
var map__35329 = p__35320;
var map__35329__$1 = ((((!((map__35329 == null)))?((((map__35329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35329):map__35329);
var opts = map__35329__$1;
var build_id = cljs.core.get.call(null,map__35329__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35329,map__35329__$1,opts,build_id){
return (function (p__35331){
var vec__35332 = p__35331;
var seq__35333 = cljs.core.seq.call(null,vec__35332);
var first__35334 = cljs.core.first.call(null,seq__35333);
var seq__35333__$1 = cljs.core.next.call(null,seq__35333);
var map__35335 = first__35334;
var map__35335__$1 = ((((!((map__35335 == null)))?((((map__35335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35335):map__35335);
var msg = map__35335__$1;
var msg_name = cljs.core.get.call(null,map__35335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35333__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35332,seq__35333,first__35334,seq__35333__$1,map__35335,map__35335__$1,msg,msg_name,_,map__35329,map__35329__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35332,seq__35333,first__35334,seq__35333__$1,map__35335,map__35335__$1,msg,msg_name,_,map__35329,map__35329__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35329,map__35329__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35343){
var vec__35344 = p__35343;
var seq__35345 = cljs.core.seq.call(null,vec__35344);
var first__35346 = cljs.core.first.call(null,seq__35345);
var seq__35345__$1 = cljs.core.next.call(null,seq__35345);
var map__35347 = first__35346;
var map__35347__$1 = ((((!((map__35347 == null)))?((((map__35347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35347):map__35347);
var msg = map__35347__$1;
var msg_name = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35345__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35349){
var map__35361 = p__35349;
var map__35361__$1 = ((((!((map__35361 == null)))?((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35361):map__35361);
var on_compile_warning = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35361,map__35361__$1,on_compile_warning,on_compile_fail){
return (function (p__35363){
var vec__35364 = p__35363;
var seq__35365 = cljs.core.seq.call(null,vec__35364);
var first__35366 = cljs.core.first.call(null,seq__35365);
var seq__35365__$1 = cljs.core.next.call(null,seq__35365);
var map__35367 = first__35366;
var map__35367__$1 = ((((!((map__35367 == null)))?((((map__35367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35367):map__35367);
var msg = map__35367__$1;
var msg_name = cljs.core.get.call(null,map__35367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35365__$1;
var pred__35369 = cljs.core._EQ_;
var expr__35370 = msg_name;
if(cljs.core.truth_(pred__35369.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35370))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35369.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35370))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35361,map__35361__$1,on_compile_warning,on_compile_fail))
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
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__,msg_hist,msg_names,msg){
return (function (state_35598){
var state_val_35599 = (state_35598[(1)]);
if((state_val_35599 === (7))){
var inst_35518 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35518)){
var statearr_35600_35650 = state_35598__$1;
(statearr_35600_35650[(1)] = (8));

} else {
var statearr_35601_35651 = state_35598__$1;
(statearr_35601_35651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (20))){
var inst_35592 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35602_35652 = state_35598__$1;
(statearr_35602_35652[(2)] = inst_35592);

(statearr_35602_35652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (27))){
var inst_35588 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35603_35653 = state_35598__$1;
(statearr_35603_35653[(2)] = inst_35588);

(statearr_35603_35653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (1))){
var inst_35511 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35511)){
var statearr_35604_35654 = state_35598__$1;
(statearr_35604_35654[(1)] = (2));

} else {
var statearr_35605_35655 = state_35598__$1;
(statearr_35605_35655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (24))){
var inst_35590 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35606_35656 = state_35598__$1;
(statearr_35606_35656[(2)] = inst_35590);

(statearr_35606_35656[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (4))){
var inst_35596 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35598__$1,inst_35596);
} else {
if((state_val_35599 === (15))){
var inst_35594 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35607_35657 = state_35598__$1;
(statearr_35607_35657[(2)] = inst_35594);

(statearr_35607_35657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (21))){
var inst_35547 = (state_35598[(2)]);
var inst_35548 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35549 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35548);
var state_35598__$1 = (function (){var statearr_35608 = state_35598;
(statearr_35608[(7)] = inst_35547);

return statearr_35608;
})();
var statearr_35609_35658 = state_35598__$1;
(statearr_35609_35658[(2)] = inst_35549);

(statearr_35609_35658[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (31))){
var inst_35577 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35577)){
var statearr_35610_35659 = state_35598__$1;
(statearr_35610_35659[(1)] = (34));

} else {
var statearr_35611_35660 = state_35598__$1;
(statearr_35611_35660[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (32))){
var inst_35586 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35612_35661 = state_35598__$1;
(statearr_35612_35661[(2)] = inst_35586);

(statearr_35612_35661[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (33))){
var inst_35573 = (state_35598[(2)]);
var inst_35574 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35575 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35574);
var state_35598__$1 = (function (){var statearr_35613 = state_35598;
(statearr_35613[(8)] = inst_35573);

return statearr_35613;
})();
var statearr_35614_35662 = state_35598__$1;
(statearr_35614_35662[(2)] = inst_35575);

(statearr_35614_35662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (13))){
var inst_35532 = figwheel.client.heads_up.clear.call(null);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(16),inst_35532);
} else {
if((state_val_35599 === (22))){
var inst_35553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35554 = figwheel.client.heads_up.append_warning_message.call(null,inst_35553);
var state_35598__$1 = state_35598;
var statearr_35615_35663 = state_35598__$1;
(statearr_35615_35663[(2)] = inst_35554);

(statearr_35615_35663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (36))){
var inst_35584 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35616_35664 = state_35598__$1;
(statearr_35616_35664[(2)] = inst_35584);

(statearr_35616_35664[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (29))){
var inst_35564 = (state_35598[(2)]);
var inst_35565 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35566 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35565);
var state_35598__$1 = (function (){var statearr_35617 = state_35598;
(statearr_35617[(9)] = inst_35564);

return statearr_35617;
})();
var statearr_35618_35665 = state_35598__$1;
(statearr_35618_35665[(2)] = inst_35566);

(statearr_35618_35665[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (6))){
var inst_35513 = (state_35598[(10)]);
var state_35598__$1 = state_35598;
var statearr_35619_35666 = state_35598__$1;
(statearr_35619_35666[(2)] = inst_35513);

(statearr_35619_35666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (28))){
var inst_35560 = (state_35598[(2)]);
var inst_35561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35562 = figwheel.client.heads_up.display_warning.call(null,inst_35561);
var state_35598__$1 = (function (){var statearr_35620 = state_35598;
(statearr_35620[(11)] = inst_35560);

return statearr_35620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(29),inst_35562);
} else {
if((state_val_35599 === (25))){
var inst_35558 = figwheel.client.heads_up.clear.call(null);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(28),inst_35558);
} else {
if((state_val_35599 === (34))){
var inst_35579 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(37),inst_35579);
} else {
if((state_val_35599 === (17))){
var inst_35538 = (state_35598[(2)]);
var inst_35539 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35540 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35539);
var state_35598__$1 = (function (){var statearr_35621 = state_35598;
(statearr_35621[(12)] = inst_35538);

return statearr_35621;
})();
var statearr_35622_35667 = state_35598__$1;
(statearr_35622_35667[(2)] = inst_35540);

(statearr_35622_35667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (3))){
var inst_35530 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35530)){
var statearr_35623_35668 = state_35598__$1;
(statearr_35623_35668[(1)] = (13));

} else {
var statearr_35624_35669 = state_35598__$1;
(statearr_35624_35669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (12))){
var inst_35526 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35625_35670 = state_35598__$1;
(statearr_35625_35670[(2)] = inst_35526);

(statearr_35625_35670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (2))){
var inst_35513 = (state_35598[(10)]);
var inst_35513__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35598__$1 = (function (){var statearr_35626 = state_35598;
(statearr_35626[(10)] = inst_35513__$1);

return statearr_35626;
})();
if(cljs.core.truth_(inst_35513__$1)){
var statearr_35627_35671 = state_35598__$1;
(statearr_35627_35671[(1)] = (5));

} else {
var statearr_35628_35672 = state_35598__$1;
(statearr_35628_35672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (23))){
var inst_35556 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35556)){
var statearr_35629_35673 = state_35598__$1;
(statearr_35629_35673[(1)] = (25));

} else {
var statearr_35630_35674 = state_35598__$1;
(statearr_35630_35674[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (35))){
var state_35598__$1 = state_35598;
var statearr_35631_35675 = state_35598__$1;
(statearr_35631_35675[(2)] = null);

(statearr_35631_35675[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (19))){
var inst_35551 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35551)){
var statearr_35632_35676 = state_35598__$1;
(statearr_35632_35676[(1)] = (22));

} else {
var statearr_35633_35677 = state_35598__$1;
(statearr_35633_35677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (11))){
var inst_35522 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35634_35678 = state_35598__$1;
(statearr_35634_35678[(2)] = inst_35522);

(statearr_35634_35678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (9))){
var inst_35524 = figwheel.client.heads_up.clear.call(null);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(12),inst_35524);
} else {
if((state_val_35599 === (5))){
var inst_35515 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35598__$1 = state_35598;
var statearr_35635_35679 = state_35598__$1;
(statearr_35635_35679[(2)] = inst_35515);

(statearr_35635_35679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (14))){
var inst_35542 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35542)){
var statearr_35636_35680 = state_35598__$1;
(statearr_35636_35680[(1)] = (18));

} else {
var statearr_35637_35681 = state_35598__$1;
(statearr_35637_35681[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (26))){
var inst_35568 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35568)){
var statearr_35638_35682 = state_35598__$1;
(statearr_35638_35682[(1)] = (30));

} else {
var statearr_35639_35683 = state_35598__$1;
(statearr_35639_35683[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (16))){
var inst_35534 = (state_35598[(2)]);
var inst_35535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35536 = figwheel.client.heads_up.display_exception.call(null,inst_35535);
var state_35598__$1 = (function (){var statearr_35640 = state_35598;
(statearr_35640[(13)] = inst_35534);

return statearr_35640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(17),inst_35536);
} else {
if((state_val_35599 === (30))){
var inst_35570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35571 = figwheel.client.heads_up.display_warning.call(null,inst_35570);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(33),inst_35571);
} else {
if((state_val_35599 === (10))){
var inst_35528 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35641_35684 = state_35598__$1;
(statearr_35641_35684[(2)] = inst_35528);

(statearr_35641_35684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (18))){
var inst_35544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35545 = figwheel.client.heads_up.display_exception.call(null,inst_35544);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(21),inst_35545);
} else {
if((state_val_35599 === (37))){
var inst_35581 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35642_35685 = state_35598__$1;
(statearr_35642_35685[(2)] = inst_35581);

(statearr_35642_35685[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (8))){
var inst_35520 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35598__$1,(11),inst_35520);
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
});})(c__29242__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29128__auto__,c__29242__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0 = (function (){
var statearr_35646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35646[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__);

(statearr_35646[(1)] = (1));

return statearr_35646;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1 = (function (state_35598){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_35598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e35647){if((e35647 instanceof Object)){
var ex__29132__auto__ = e35647;
var statearr_35648_35686 = state_35598;
(statearr_35648_35686[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35687 = state_35598;
state_35598 = G__35687;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__,msg_hist,msg_names,msg))
})();
var state__29244__auto__ = (function (){var statearr_35649 = f__29243__auto__.call(null);
(statearr_35649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_35649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__,msg_hist,msg_names,msg))
);

return c__29242__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29242__auto___35750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___35750,ch){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___35750,ch){
return (function (state_35733){
var state_val_35734 = (state_35733[(1)]);
if((state_val_35734 === (1))){
var state_35733__$1 = state_35733;
var statearr_35735_35751 = state_35733__$1;
(statearr_35735_35751[(2)] = null);

(statearr_35735_35751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (2))){
var state_35733__$1 = state_35733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35733__$1,(4),ch);
} else {
if((state_val_35734 === (3))){
var inst_35731 = (state_35733[(2)]);
var state_35733__$1 = state_35733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35733__$1,inst_35731);
} else {
if((state_val_35734 === (4))){
var inst_35721 = (state_35733[(7)]);
var inst_35721__$1 = (state_35733[(2)]);
var state_35733__$1 = (function (){var statearr_35736 = state_35733;
(statearr_35736[(7)] = inst_35721__$1);

return statearr_35736;
})();
if(cljs.core.truth_(inst_35721__$1)){
var statearr_35737_35752 = state_35733__$1;
(statearr_35737_35752[(1)] = (5));

} else {
var statearr_35738_35753 = state_35733__$1;
(statearr_35738_35753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (5))){
var inst_35721 = (state_35733[(7)]);
var inst_35723 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35721);
var state_35733__$1 = state_35733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35733__$1,(8),inst_35723);
} else {
if((state_val_35734 === (6))){
var state_35733__$1 = state_35733;
var statearr_35739_35754 = state_35733__$1;
(statearr_35739_35754[(2)] = null);

(statearr_35739_35754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (7))){
var inst_35729 = (state_35733[(2)]);
var state_35733__$1 = state_35733;
var statearr_35740_35755 = state_35733__$1;
(statearr_35740_35755[(2)] = inst_35729);

(statearr_35740_35755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35734 === (8))){
var inst_35725 = (state_35733[(2)]);
var state_35733__$1 = (function (){var statearr_35741 = state_35733;
(statearr_35741[(8)] = inst_35725);

return statearr_35741;
})();
var statearr_35742_35756 = state_35733__$1;
(statearr_35742_35756[(2)] = null);

(statearr_35742_35756[(1)] = (2));


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
});})(c__29242__auto___35750,ch))
;
return ((function (switch__29128__auto__,c__29242__auto___35750,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_35746 = [null,null,null,null,null,null,null,null,null];
(statearr_35746[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29129__auto__);

(statearr_35746[(1)] = (1));

return statearr_35746;
});
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1 = (function (state_35733){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_35733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e35747){if((e35747 instanceof Object)){
var ex__29132__auto__ = e35747;
var statearr_35748_35757 = state_35733;
(statearr_35748_35757[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35758 = state_35733;
state_35733 = G__35758;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__ = function(state_35733){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1.call(this,state_35733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___35750,ch))
})();
var state__29244__auto__ = (function (){var statearr_35749 = f__29243__auto__.call(null);
(statearr_35749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___35750);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___35750,ch))
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
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__){
return (function (state_35779){
var state_val_35780 = (state_35779[(1)]);
if((state_val_35780 === (1))){
var inst_35774 = cljs.core.async.timeout.call(null,(3000));
var state_35779__$1 = state_35779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35779__$1,(2),inst_35774);
} else {
if((state_val_35780 === (2))){
var inst_35776 = (state_35779[(2)]);
var inst_35777 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35779__$1 = (function (){var statearr_35781 = state_35779;
(statearr_35781[(7)] = inst_35776);

return statearr_35781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35779__$1,inst_35777);
} else {
return null;
}
}
});})(c__29242__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_35785 = [null,null,null,null,null,null,null,null];
(statearr_35785[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__);

(statearr_35785[(1)] = (1));

return statearr_35785;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1 = (function (state_35779){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_35779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e35786){if((e35786 instanceof Object)){
var ex__29132__auto__ = e35786;
var statearr_35787_35789 = state_35779;
(statearr_35787_35789[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35790 = state_35779;
state_35779 = G__35790;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__ = function(state_35779){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1.call(this,state_35779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__))
})();
var state__29244__auto__ = (function (){var statearr_35788 = f__29243__auto__.call(null);
(statearr_35788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_35788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__))
);

return c__29242__auto__;
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
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__,figwheel_version,temp__6753__auto__){
return (function (state_35813){
var state_val_35814 = (state_35813[(1)]);
if((state_val_35814 === (1))){
var inst_35807 = cljs.core.async.timeout.call(null,(2000));
var state_35813__$1 = state_35813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35813__$1,(2),inst_35807);
} else {
if((state_val_35814 === (2))){
var inst_35809 = (state_35813[(2)]);
var inst_35810 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35811 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35810);
var state_35813__$1 = (function (){var statearr_35815 = state_35813;
(statearr_35815[(7)] = inst_35809);

return statearr_35815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35813__$1,inst_35811);
} else {
return null;
}
}
});})(c__29242__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_35819 = [null,null,null,null,null,null,null,null];
(statearr_35819[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__);

(statearr_35819[(1)] = (1));

return statearr_35819;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1 = (function (state_35813){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_35813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e35820){if((e35820 instanceof Object)){
var ex__29132__auto__ = e35820;
var statearr_35821_35823 = state_35813;
(statearr_35821_35823[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35824 = state_35813;
state_35813 = G__35824;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__ = function(state_35813){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1.call(this,state_35813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__,figwheel_version,temp__6753__auto__))
})();
var state__29244__auto__ = (function (){var statearr_35822 = f__29243__auto__.call(null);
(statearr_35822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_35822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__,figwheel_version,temp__6753__auto__))
);

return c__29242__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35825){
var map__35829 = p__35825;
var map__35829__$1 = ((((!((map__35829 == null)))?((((map__35829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35829):map__35829);
var file = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35831 = "";
var G__35831__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35831),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35831);
var G__35831__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35831__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35831__$1);
if(cljs.core.truth_((function (){var and__26582__auto__ = line;
if(cljs.core.truth_(and__26582__auto__)){
return column;
} else {
return and__26582__auto__;
}
})())){
return [cljs.core.str(G__35831__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35831__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35832){
var map__35839 = p__35832;
var map__35839__$1 = ((((!((map__35839 == null)))?((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35839):map__35839);
var ed = map__35839__$1;
var formatted_exception = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35841_35845 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35842_35846 = null;
var count__35843_35847 = (0);
var i__35844_35848 = (0);
while(true){
if((i__35844_35848 < count__35843_35847)){
var msg_35849 = cljs.core._nth.call(null,chunk__35842_35846,i__35844_35848);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35849);

var G__35850 = seq__35841_35845;
var G__35851 = chunk__35842_35846;
var G__35852 = count__35843_35847;
var G__35853 = (i__35844_35848 + (1));
seq__35841_35845 = G__35850;
chunk__35842_35846 = G__35851;
count__35843_35847 = G__35852;
i__35844_35848 = G__35853;
continue;
} else {
var temp__6753__auto___35854 = cljs.core.seq.call(null,seq__35841_35845);
if(temp__6753__auto___35854){
var seq__35841_35855__$1 = temp__6753__auto___35854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35841_35855__$1)){
var c__27497__auto___35856 = cljs.core.chunk_first.call(null,seq__35841_35855__$1);
var G__35857 = cljs.core.chunk_rest.call(null,seq__35841_35855__$1);
var G__35858 = c__27497__auto___35856;
var G__35859 = cljs.core.count.call(null,c__27497__auto___35856);
var G__35860 = (0);
seq__35841_35845 = G__35857;
chunk__35842_35846 = G__35858;
count__35843_35847 = G__35859;
i__35844_35848 = G__35860;
continue;
} else {
var msg_35861 = cljs.core.first.call(null,seq__35841_35855__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35861);

var G__35862 = cljs.core.next.call(null,seq__35841_35855__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35841_35845 = G__35862;
chunk__35842_35846 = G__35863;
count__35843_35847 = G__35864;
i__35844_35848 = G__35865;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35866){
var map__35869 = p__35866;
var map__35869__$1 = ((((!((map__35869 == null)))?((((map__35869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35869):map__35869);
var w = map__35869__$1;
var message = cljs.core.get.call(null,map__35869__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35881 = cljs.core.seq.call(null,plugins);
var chunk__35882 = null;
var count__35883 = (0);
var i__35884 = (0);
while(true){
if((i__35884 < count__35883)){
var vec__35885 = cljs.core._nth.call(null,chunk__35882,i__35884);
var k = cljs.core.nth.call(null,vec__35885,(0),null);
var plugin = cljs.core.nth.call(null,vec__35885,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35891 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35881,chunk__35882,count__35883,i__35884,pl_35891,vec__35885,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35891.call(null,msg_hist);
});})(seq__35881,chunk__35882,count__35883,i__35884,pl_35891,vec__35885,k,plugin))
);
} else {
}

var G__35892 = seq__35881;
var G__35893 = chunk__35882;
var G__35894 = count__35883;
var G__35895 = (i__35884 + (1));
seq__35881 = G__35892;
chunk__35882 = G__35893;
count__35883 = G__35894;
i__35884 = G__35895;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__35881);
if(temp__6753__auto__){
var seq__35881__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35881__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__35881__$1);
var G__35896 = cljs.core.chunk_rest.call(null,seq__35881__$1);
var G__35897 = c__27497__auto__;
var G__35898 = cljs.core.count.call(null,c__27497__auto__);
var G__35899 = (0);
seq__35881 = G__35896;
chunk__35882 = G__35897;
count__35883 = G__35898;
i__35884 = G__35899;
continue;
} else {
var vec__35888 = cljs.core.first.call(null,seq__35881__$1);
var k = cljs.core.nth.call(null,vec__35888,(0),null);
var plugin = cljs.core.nth.call(null,vec__35888,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35900 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35881,chunk__35882,count__35883,i__35884,pl_35900,vec__35888,k,plugin,seq__35881__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35900.call(null,msg_hist);
});})(seq__35881,chunk__35882,count__35883,i__35884,pl_35900,vec__35888,k,plugin,seq__35881__$1,temp__6753__auto__))
);
} else {
}

var G__35901 = cljs.core.next.call(null,seq__35881__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35881 = G__35901;
chunk__35882 = G__35902;
count__35883 = G__35903;
i__35884 = G__35904;
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
var args35905 = [];
var len__27777__auto___35912 = arguments.length;
var i__27778__auto___35913 = (0);
while(true){
if((i__27778__auto___35913 < len__27777__auto___35912)){
args35905.push((arguments[i__27778__auto___35913]));

var G__35914 = (i__27778__auto___35913 + (1));
i__27778__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var G__35907 = args35905.length;
switch (G__35907) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35905.length)].join('')));

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

var seq__35908_35916 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35909_35917 = null;
var count__35910_35918 = (0);
var i__35911_35919 = (0);
while(true){
if((i__35911_35919 < count__35910_35918)){
var msg_35920 = cljs.core._nth.call(null,chunk__35909_35917,i__35911_35919);
figwheel.client.socket.handle_incoming_message.call(null,msg_35920);

var G__35921 = seq__35908_35916;
var G__35922 = chunk__35909_35917;
var G__35923 = count__35910_35918;
var G__35924 = (i__35911_35919 + (1));
seq__35908_35916 = G__35921;
chunk__35909_35917 = G__35922;
count__35910_35918 = G__35923;
i__35911_35919 = G__35924;
continue;
} else {
var temp__6753__auto___35925 = cljs.core.seq.call(null,seq__35908_35916);
if(temp__6753__auto___35925){
var seq__35908_35926__$1 = temp__6753__auto___35925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35908_35926__$1)){
var c__27497__auto___35927 = cljs.core.chunk_first.call(null,seq__35908_35926__$1);
var G__35928 = cljs.core.chunk_rest.call(null,seq__35908_35926__$1);
var G__35929 = c__27497__auto___35927;
var G__35930 = cljs.core.count.call(null,c__27497__auto___35927);
var G__35931 = (0);
seq__35908_35916 = G__35928;
chunk__35909_35917 = G__35929;
count__35910_35918 = G__35930;
i__35911_35919 = G__35931;
continue;
} else {
var msg_35932 = cljs.core.first.call(null,seq__35908_35926__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35932);

var G__35933 = cljs.core.next.call(null,seq__35908_35926__$1);
var G__35934 = null;
var G__35935 = (0);
var G__35936 = (0);
seq__35908_35916 = G__35933;
chunk__35909_35917 = G__35934;
count__35910_35918 = G__35935;
i__35911_35919 = G__35936;
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
var len__27777__auto___35941 = arguments.length;
var i__27778__auto___35942 = (0);
while(true){
if((i__27778__auto___35942 < len__27777__auto___35941)){
args__27784__auto__.push((arguments[i__27778__auto___35942]));

var G__35943 = (i__27778__auto___35942 + (1));
i__27778__auto___35942 = G__35943;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((0) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27785__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35938){
var map__35939 = p__35938;
var map__35939__$1 = ((((!((map__35939 == null)))?((((map__35939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35939):map__35939);
var opts = map__35939__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35937){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35937));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35945){if((e35945 instanceof Error)){
var e = e35945;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35945;

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
return (function (p__35949){
var map__35950 = p__35949;
var map__35950__$1 = ((((!((map__35950 == null)))?((((map__35950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35950):map__35950);
var msg_name = cljs.core.get.call(null,map__35950__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1492572235527