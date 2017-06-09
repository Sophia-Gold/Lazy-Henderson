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
var args35117 = [];
var len__27785__auto___35120 = arguments.length;
var i__27786__auto___35121 = (0);
while(true){
if((i__27786__auto___35121 < len__27785__auto___35120)){
args35117.push((arguments[i__27786__auto___35121]));

var G__35122 = (i__27786__auto___35121 + (1));
i__27786__auto___35121 = G__35122;
continue;
} else {
}
break;
}

var G__35119 = args35117.length;
switch (G__35119) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35117.length)].join('')));

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
var len__27785__auto___35125 = arguments.length;
var i__27786__auto___35126 = (0);
while(true){
if((i__27786__auto___35126 < len__27785__auto___35125)){
args__27792__auto__.push((arguments[i__27786__auto___35126]));

var G__35127 = (i__27786__auto___35126 + (1));
i__27786__auto___35126 = G__35127;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35124){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35124));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27792__auto__ = [];
var len__27785__auto___35129 = arguments.length;
var i__27786__auto___35130 = (0);
while(true){
if((i__27786__auto___35130 < len__27785__auto___35129)){
args__27792__auto__.push((arguments[i__27786__auto___35130]));

var G__35131 = (i__27786__auto___35130 + (1));
i__27786__auto___35130 = G__35131;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35128){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35128));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35132 = cljs.core._EQ_;
var expr__35133 = (function (){var or__26602__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35136){if((e35136 instanceof Error)){
var e = e35136;
return false;
} else {
throw e35136;

}
}})();
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35132.call(null,"true",expr__35133))){
return true;
} else {
if(cljs.core.truth_(pred__35132.call(null,"false",expr__35133))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35133)].join('')));
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
}catch (e35138){if((e35138 instanceof Error)){
var e = e35138;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35138;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35139){
var map__35142 = p__35139;
var map__35142__$1 = ((((!((map__35142 == null)))?((((map__35142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35142):map__35142);
var message = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29384__auto___35304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___35304,ch){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___35304,ch){
return (function (state_35273){
var state_val_35274 = (state_35273[(1)]);
if((state_val_35274 === (7))){
var inst_35269 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35275_35305 = state_35273__$1;
(statearr_35275_35305[(2)] = inst_35269);

(statearr_35275_35305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (1))){
var state_35273__$1 = state_35273;
var statearr_35276_35306 = state_35273__$1;
(statearr_35276_35306[(2)] = null);

(statearr_35276_35306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (4))){
var inst_35226 = (state_35273[(7)]);
var inst_35226__$1 = (state_35273[(2)]);
var state_35273__$1 = (function (){var statearr_35277 = state_35273;
(statearr_35277[(7)] = inst_35226__$1);

return statearr_35277;
})();
if(cljs.core.truth_(inst_35226__$1)){
var statearr_35278_35307 = state_35273__$1;
(statearr_35278_35307[(1)] = (5));

} else {
var statearr_35279_35308 = state_35273__$1;
(statearr_35279_35308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (15))){
var inst_35233 = (state_35273[(8)]);
var inst_35248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35233);
var inst_35249 = cljs.core.first.call(null,inst_35248);
var inst_35250 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35249);
var inst_35251 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35250)].join('');
var inst_35252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35251);
var state_35273__$1 = state_35273;
var statearr_35280_35309 = state_35273__$1;
(statearr_35280_35309[(2)] = inst_35252);

(statearr_35280_35309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (13))){
var inst_35257 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35281_35310 = state_35273__$1;
(statearr_35281_35310[(2)] = inst_35257);

(statearr_35281_35310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (6))){
var state_35273__$1 = state_35273;
var statearr_35282_35311 = state_35273__$1;
(statearr_35282_35311[(2)] = null);

(statearr_35282_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (17))){
var inst_35255 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35283_35312 = state_35273__$1;
(statearr_35283_35312[(2)] = inst_35255);

(statearr_35283_35312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (3))){
var inst_35271 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35273__$1,inst_35271);
} else {
if((state_val_35274 === (12))){
var inst_35232 = (state_35273[(9)]);
var inst_35246 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35232,opts);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35246)){
var statearr_35284_35313 = state_35273__$1;
(statearr_35284_35313[(1)] = (15));

} else {
var statearr_35285_35314 = state_35273__$1;
(statearr_35285_35314[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (2))){
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35273__$1,(4),ch);
} else {
if((state_val_35274 === (11))){
var inst_35233 = (state_35273[(8)]);
var inst_35238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35239 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35233);
var inst_35240 = cljs.core.async.timeout.call(null,(1000));
var inst_35241 = [inst_35239,inst_35240];
var inst_35242 = (new cljs.core.PersistentVector(null,2,(5),inst_35238,inst_35241,null));
var state_35273__$1 = state_35273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35273__$1,(14),inst_35242);
} else {
if((state_val_35274 === (9))){
var inst_35233 = (state_35273[(8)]);
var inst_35259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35260 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35233);
var inst_35261 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35260);
var inst_35262 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35261)].join('');
var inst_35263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35262);
var state_35273__$1 = (function (){var statearr_35286 = state_35273;
(statearr_35286[(10)] = inst_35259);

return statearr_35286;
})();
var statearr_35287_35315 = state_35273__$1;
(statearr_35287_35315[(2)] = inst_35263);

(statearr_35287_35315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (5))){
var inst_35226 = (state_35273[(7)]);
var inst_35228 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35229 = (new cljs.core.PersistentArrayMap(null,2,inst_35228,null));
var inst_35230 = (new cljs.core.PersistentHashSet(null,inst_35229,null));
var inst_35231 = figwheel.client.focus_msgs.call(null,inst_35230,inst_35226);
var inst_35232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35231);
var inst_35233 = cljs.core.first.call(null,inst_35231);
var inst_35234 = figwheel.client.autoload_QMARK_.call(null);
var state_35273__$1 = (function (){var statearr_35288 = state_35273;
(statearr_35288[(9)] = inst_35232);

(statearr_35288[(8)] = inst_35233);

return statearr_35288;
})();
if(cljs.core.truth_(inst_35234)){
var statearr_35289_35316 = state_35273__$1;
(statearr_35289_35316[(1)] = (8));

} else {
var statearr_35290_35317 = state_35273__$1;
(statearr_35290_35317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (14))){
var inst_35244 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35291_35318 = state_35273__$1;
(statearr_35291_35318[(2)] = inst_35244);

(statearr_35291_35318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (16))){
var state_35273__$1 = state_35273;
var statearr_35292_35319 = state_35273__$1;
(statearr_35292_35319[(2)] = null);

(statearr_35292_35319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (10))){
var inst_35265 = (state_35273[(2)]);
var state_35273__$1 = (function (){var statearr_35293 = state_35273;
(statearr_35293[(11)] = inst_35265);

return statearr_35293;
})();
var statearr_35294_35320 = state_35273__$1;
(statearr_35294_35320[(2)] = null);

(statearr_35294_35320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (8))){
var inst_35232 = (state_35273[(9)]);
var inst_35236 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35232,opts);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35236)){
var statearr_35295_35321 = state_35273__$1;
(statearr_35295_35321[(1)] = (11));

} else {
var statearr_35296_35322 = state_35273__$1;
(statearr_35296_35322[(1)] = (12));

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
});})(c__29384__auto___35304,ch))
;
return ((function (switch__29270__auto__,c__29384__auto___35304,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____0 = (function (){
var statearr_35300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35300[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__);

(statearr_35300[(1)] = (1));

return statearr_35300;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____1 = (function (state_35273){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_35273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e35301){if((e35301 instanceof Object)){
var ex__29274__auto__ = e35301;
var statearr_35302_35323 = state_35273;
(statearr_35302_35323[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35324 = state_35273;
state_35273 = G__35324;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__ = function(state_35273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____1.call(this,state_35273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29271__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___35304,ch))
})();
var state__29386__auto__ = (function (){var statearr_35303 = f__29385__auto__.call(null);
(statearr_35303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___35304);

return statearr_35303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___35304,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35325_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35325_SHARP_));
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
var base_path_35328 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35328){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35327){if((e35327 instanceof Error)){
var e = e35327;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35328], null));
} else {
var e = e35327;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35328))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35329){
var map__35338 = p__35329;
var map__35338__$1 = ((((!((map__35338 == null)))?((((map__35338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35338):map__35338);
var opts = map__35338__$1;
var build_id = cljs.core.get.call(null,map__35338__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35338,map__35338__$1,opts,build_id){
return (function (p__35340){
var vec__35341 = p__35340;
var seq__35342 = cljs.core.seq.call(null,vec__35341);
var first__35343 = cljs.core.first.call(null,seq__35342);
var seq__35342__$1 = cljs.core.next.call(null,seq__35342);
var map__35344 = first__35343;
var map__35344__$1 = ((((!((map__35344 == null)))?((((map__35344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35344):map__35344);
var msg = map__35344__$1;
var msg_name = cljs.core.get.call(null,map__35344__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35342__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35341,seq__35342,first__35343,seq__35342__$1,map__35344,map__35344__$1,msg,msg_name,_,map__35338,map__35338__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35341,seq__35342,first__35343,seq__35342__$1,map__35344,map__35344__$1,msg,msg_name,_,map__35338,map__35338__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35338,map__35338__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35352){
var vec__35353 = p__35352;
var seq__35354 = cljs.core.seq.call(null,vec__35353);
var first__35355 = cljs.core.first.call(null,seq__35354);
var seq__35354__$1 = cljs.core.next.call(null,seq__35354);
var map__35356 = first__35355;
var map__35356__$1 = ((((!((map__35356 == null)))?((((map__35356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35356):map__35356);
var msg = map__35356__$1;
var msg_name = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35354__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35358){
var map__35370 = p__35358;
var map__35370__$1 = ((((!((map__35370 == null)))?((((map__35370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35370):map__35370);
var on_compile_warning = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35370,map__35370__$1,on_compile_warning,on_compile_fail){
return (function (p__35372){
var vec__35373 = p__35372;
var seq__35374 = cljs.core.seq.call(null,vec__35373);
var first__35375 = cljs.core.first.call(null,seq__35374);
var seq__35374__$1 = cljs.core.next.call(null,seq__35374);
var map__35376 = first__35375;
var map__35376__$1 = ((((!((map__35376 == null)))?((((map__35376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35376):map__35376);
var msg = map__35376__$1;
var msg_name = cljs.core.get.call(null,map__35376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35374__$1;
var pred__35378 = cljs.core._EQ_;
var expr__35379 = msg_name;
if(cljs.core.truth_(pred__35378.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35379))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35378.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35379))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35370,map__35370__$1,on_compile_warning,on_compile_fail))
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
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__,msg_hist,msg_names,msg){
return (function (state_35607){
var state_val_35608 = (state_35607[(1)]);
if((state_val_35608 === (7))){
var inst_35527 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35527)){
var statearr_35609_35659 = state_35607__$1;
(statearr_35609_35659[(1)] = (8));

} else {
var statearr_35610_35660 = state_35607__$1;
(statearr_35610_35660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (20))){
var inst_35601 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35611_35661 = state_35607__$1;
(statearr_35611_35661[(2)] = inst_35601);

(statearr_35611_35661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (27))){
var inst_35597 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35612_35662 = state_35607__$1;
(statearr_35612_35662[(2)] = inst_35597);

(statearr_35612_35662[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (1))){
var inst_35520 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35520)){
var statearr_35613_35663 = state_35607__$1;
(statearr_35613_35663[(1)] = (2));

} else {
var statearr_35614_35664 = state_35607__$1;
(statearr_35614_35664[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (24))){
var inst_35599 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35615_35665 = state_35607__$1;
(statearr_35615_35665[(2)] = inst_35599);

(statearr_35615_35665[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (4))){
var inst_35605 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35607__$1,inst_35605);
} else {
if((state_val_35608 === (15))){
var inst_35603 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35616_35666 = state_35607__$1;
(statearr_35616_35666[(2)] = inst_35603);

(statearr_35616_35666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (21))){
var inst_35556 = (state_35607[(2)]);
var inst_35557 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35557);
var state_35607__$1 = (function (){var statearr_35617 = state_35607;
(statearr_35617[(7)] = inst_35556);

return statearr_35617;
})();
var statearr_35618_35667 = state_35607__$1;
(statearr_35618_35667[(2)] = inst_35558);

(statearr_35618_35667[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (31))){
var inst_35586 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35586)){
var statearr_35619_35668 = state_35607__$1;
(statearr_35619_35668[(1)] = (34));

} else {
var statearr_35620_35669 = state_35607__$1;
(statearr_35620_35669[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (32))){
var inst_35595 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35621_35670 = state_35607__$1;
(statearr_35621_35670[(2)] = inst_35595);

(statearr_35621_35670[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (33))){
var inst_35582 = (state_35607[(2)]);
var inst_35583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35583);
var state_35607__$1 = (function (){var statearr_35622 = state_35607;
(statearr_35622[(8)] = inst_35582);

return statearr_35622;
})();
var statearr_35623_35671 = state_35607__$1;
(statearr_35623_35671[(2)] = inst_35584);

(statearr_35623_35671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (13))){
var inst_35541 = figwheel.client.heads_up.clear.call(null);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(16),inst_35541);
} else {
if((state_val_35608 === (22))){
var inst_35562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35563 = figwheel.client.heads_up.append_warning_message.call(null,inst_35562);
var state_35607__$1 = state_35607;
var statearr_35624_35672 = state_35607__$1;
(statearr_35624_35672[(2)] = inst_35563);

(statearr_35624_35672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (36))){
var inst_35593 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35625_35673 = state_35607__$1;
(statearr_35625_35673[(2)] = inst_35593);

(statearr_35625_35673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (29))){
var inst_35573 = (state_35607[(2)]);
var inst_35574 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35575 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35574);
var state_35607__$1 = (function (){var statearr_35626 = state_35607;
(statearr_35626[(9)] = inst_35573);

return statearr_35626;
})();
var statearr_35627_35674 = state_35607__$1;
(statearr_35627_35674[(2)] = inst_35575);

(statearr_35627_35674[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (6))){
var inst_35522 = (state_35607[(10)]);
var state_35607__$1 = state_35607;
var statearr_35628_35675 = state_35607__$1;
(statearr_35628_35675[(2)] = inst_35522);

(statearr_35628_35675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (28))){
var inst_35569 = (state_35607[(2)]);
var inst_35570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35571 = figwheel.client.heads_up.display_warning.call(null,inst_35570);
var state_35607__$1 = (function (){var statearr_35629 = state_35607;
(statearr_35629[(11)] = inst_35569);

return statearr_35629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(29),inst_35571);
} else {
if((state_val_35608 === (25))){
var inst_35567 = figwheel.client.heads_up.clear.call(null);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(28),inst_35567);
} else {
if((state_val_35608 === (34))){
var inst_35588 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(37),inst_35588);
} else {
if((state_val_35608 === (17))){
var inst_35547 = (state_35607[(2)]);
var inst_35548 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35549 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35548);
var state_35607__$1 = (function (){var statearr_35630 = state_35607;
(statearr_35630[(12)] = inst_35547);

return statearr_35630;
})();
var statearr_35631_35676 = state_35607__$1;
(statearr_35631_35676[(2)] = inst_35549);

(statearr_35631_35676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (3))){
var inst_35539 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35539)){
var statearr_35632_35677 = state_35607__$1;
(statearr_35632_35677[(1)] = (13));

} else {
var statearr_35633_35678 = state_35607__$1;
(statearr_35633_35678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (12))){
var inst_35535 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35634_35679 = state_35607__$1;
(statearr_35634_35679[(2)] = inst_35535);

(statearr_35634_35679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (2))){
var inst_35522 = (state_35607[(10)]);
var inst_35522__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35607__$1 = (function (){var statearr_35635 = state_35607;
(statearr_35635[(10)] = inst_35522__$1);

return statearr_35635;
})();
if(cljs.core.truth_(inst_35522__$1)){
var statearr_35636_35680 = state_35607__$1;
(statearr_35636_35680[(1)] = (5));

} else {
var statearr_35637_35681 = state_35607__$1;
(statearr_35637_35681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (23))){
var inst_35565 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35565)){
var statearr_35638_35682 = state_35607__$1;
(statearr_35638_35682[(1)] = (25));

} else {
var statearr_35639_35683 = state_35607__$1;
(statearr_35639_35683[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (35))){
var state_35607__$1 = state_35607;
var statearr_35640_35684 = state_35607__$1;
(statearr_35640_35684[(2)] = null);

(statearr_35640_35684[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (19))){
var inst_35560 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35560)){
var statearr_35641_35685 = state_35607__$1;
(statearr_35641_35685[(1)] = (22));

} else {
var statearr_35642_35686 = state_35607__$1;
(statearr_35642_35686[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (11))){
var inst_35531 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35643_35687 = state_35607__$1;
(statearr_35643_35687[(2)] = inst_35531);

(statearr_35643_35687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (9))){
var inst_35533 = figwheel.client.heads_up.clear.call(null);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(12),inst_35533);
} else {
if((state_val_35608 === (5))){
var inst_35524 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35607__$1 = state_35607;
var statearr_35644_35688 = state_35607__$1;
(statearr_35644_35688[(2)] = inst_35524);

(statearr_35644_35688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (14))){
var inst_35551 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35551)){
var statearr_35645_35689 = state_35607__$1;
(statearr_35645_35689[(1)] = (18));

} else {
var statearr_35646_35690 = state_35607__$1;
(statearr_35646_35690[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (26))){
var inst_35577 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35577)){
var statearr_35647_35691 = state_35607__$1;
(statearr_35647_35691[(1)] = (30));

} else {
var statearr_35648_35692 = state_35607__$1;
(statearr_35648_35692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (16))){
var inst_35543 = (state_35607[(2)]);
var inst_35544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35545 = figwheel.client.heads_up.display_exception.call(null,inst_35544);
var state_35607__$1 = (function (){var statearr_35649 = state_35607;
(statearr_35649[(13)] = inst_35543);

return statearr_35649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(17),inst_35545);
} else {
if((state_val_35608 === (30))){
var inst_35579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35580 = figwheel.client.heads_up.display_warning.call(null,inst_35579);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(33),inst_35580);
} else {
if((state_val_35608 === (10))){
var inst_35537 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35650_35693 = state_35607__$1;
(statearr_35650_35693[(2)] = inst_35537);

(statearr_35650_35693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (18))){
var inst_35553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35554 = figwheel.client.heads_up.display_exception.call(null,inst_35553);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(21),inst_35554);
} else {
if((state_val_35608 === (37))){
var inst_35590 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35651_35694 = state_35607__$1;
(statearr_35651_35694[(2)] = inst_35590);

(statearr_35651_35694[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (8))){
var inst_35529 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(11),inst_35529);
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
});})(c__29384__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29270__auto__,c__29384__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____0 = (function (){
var statearr_35655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35655[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__);

(statearr_35655[(1)] = (1));

return statearr_35655;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____1 = (function (state_35607){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_35607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e35656){if((e35656 instanceof Object)){
var ex__29274__auto__ = e35656;
var statearr_35657_35695 = state_35607;
(statearr_35657_35695[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35696 = state_35607;
state_35607 = G__35696;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__ = function(state_35607){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____1.call(this,state_35607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__,msg_hist,msg_names,msg))
})();
var state__29386__auto__ = (function (){var statearr_35658 = f__29385__auto__.call(null);
(statearr_35658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_35658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__,msg_hist,msg_names,msg))
);

return c__29384__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29384__auto___35759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___35759,ch){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___35759,ch){
return (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (1))){
var state_35742__$1 = state_35742;
var statearr_35744_35760 = state_35742__$1;
(statearr_35744_35760[(2)] = null);

(statearr_35744_35760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (2))){
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(4),ch);
} else {
if((state_val_35743 === (3))){
var inst_35740 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (4))){
var inst_35730 = (state_35742[(7)]);
var inst_35730__$1 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35745 = state_35742;
(statearr_35745[(7)] = inst_35730__$1);

return statearr_35745;
})();
if(cljs.core.truth_(inst_35730__$1)){
var statearr_35746_35761 = state_35742__$1;
(statearr_35746_35761[(1)] = (5));

} else {
var statearr_35747_35762 = state_35742__$1;
(statearr_35747_35762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (5))){
var inst_35730 = (state_35742[(7)]);
var inst_35732 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35730);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(8),inst_35732);
} else {
if((state_val_35743 === (6))){
var state_35742__$1 = state_35742;
var statearr_35748_35763 = state_35742__$1;
(statearr_35748_35763[(2)] = null);

(statearr_35748_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (7))){
var inst_35738 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35749_35764 = state_35742__$1;
(statearr_35749_35764[(2)] = inst_35738);

(statearr_35749_35764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (8))){
var inst_35734 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35750 = state_35742;
(statearr_35750[(8)] = inst_35734);

return statearr_35750;
})();
var statearr_35751_35765 = state_35742__$1;
(statearr_35751_35765[(2)] = null);

(statearr_35751_35765[(1)] = (2));


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
});})(c__29384__auto___35759,ch))
;
return ((function (switch__29270__auto__,c__29384__auto___35759,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29271__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29271__auto____0 = (function (){
var statearr_35755 = [null,null,null,null,null,null,null,null,null];
(statearr_35755[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29271__auto__);

(statearr_35755[(1)] = (1));

return statearr_35755;
});
var figwheel$client$heads_up_plugin_$_state_machine__29271__auto____1 = (function (state_35742){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_35742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e35756){if((e35756 instanceof Object)){
var ex__29274__auto__ = e35756;
var statearr_35757_35766 = state_35742;
(statearr_35757_35766[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35767 = state_35742;
state_35742 = G__35767;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29271__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29271__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29271__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29271__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___35759,ch))
})();
var state__29386__auto__ = (function (){var statearr_35758 = f__29385__auto__.call(null);
(statearr_35758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___35759);

return statearr_35758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___35759,ch))
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
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__){
return (function (state_35788){
var state_val_35789 = (state_35788[(1)]);
if((state_val_35789 === (1))){
var inst_35783 = cljs.core.async.timeout.call(null,(3000));
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35788__$1,(2),inst_35783);
} else {
if((state_val_35789 === (2))){
var inst_35785 = (state_35788[(2)]);
var inst_35786 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35788__$1 = (function (){var statearr_35790 = state_35788;
(statearr_35790[(7)] = inst_35785);

return statearr_35790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35788__$1,inst_35786);
} else {
return null;
}
}
});})(c__29384__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____0 = (function (){
var statearr_35794 = [null,null,null,null,null,null,null,null];
(statearr_35794[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__);

(statearr_35794[(1)] = (1));

return statearr_35794;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____1 = (function (state_35788){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_35788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e35795){if((e35795 instanceof Object)){
var ex__29274__auto__ = e35795;
var statearr_35796_35798 = state_35788;
(statearr_35796_35798[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35799 = state_35788;
state_35788 = G__35799;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__ = function(state_35788){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____1.call(this,state_35788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29271__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__))
})();
var state__29386__auto__ = (function (){var statearr_35797 = f__29385__auto__.call(null);
(statearr_35797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__))
);

return c__29384__auto__;
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
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__,figwheel_version,temp__6753__auto__){
return (function (state_35822){
var state_val_35823 = (state_35822[(1)]);
if((state_val_35823 === (1))){
var inst_35816 = cljs.core.async.timeout.call(null,(2000));
var state_35822__$1 = state_35822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35822__$1,(2),inst_35816);
} else {
if((state_val_35823 === (2))){
var inst_35818 = (state_35822[(2)]);
var inst_35819 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35820 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35819);
var state_35822__$1 = (function (){var statearr_35824 = state_35822;
(statearr_35824[(7)] = inst_35818);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35822__$1,inst_35820);
} else {
return null;
}
}
});})(c__29384__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____0 = (function (){
var statearr_35828 = [null,null,null,null,null,null,null,null];
(statearr_35828[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__);

(statearr_35828[(1)] = (1));

return statearr_35828;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____1 = (function (state_35822){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_35822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e35829){if((e35829 instanceof Object)){
var ex__29274__auto__ = e35829;
var statearr_35830_35832 = state_35822;
(statearr_35830_35832[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35833 = state_35822;
state_35822 = G__35833;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__ = function(state_35822){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____1.call(this,state_35822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__,figwheel_version,temp__6753__auto__))
})();
var state__29386__auto__ = (function (){var statearr_35831 = f__29385__auto__.call(null);
(statearr_35831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_35831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__,figwheel_version,temp__6753__auto__))
);

return c__29384__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35834){
var map__35838 = p__35834;
var map__35838__$1 = ((((!((map__35838 == null)))?((((map__35838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35838):map__35838);
var file = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35838__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35840 = "";
var G__35840__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35840),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35840);
var G__35840__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35840__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35840__$1);
if(cljs.core.truth_((function (){var and__26590__auto__ = line;
if(cljs.core.truth_(and__26590__auto__)){
return column;
} else {
return and__26590__auto__;
}
})())){
return [cljs.core.str(G__35840__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35840__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35841){
var map__35848 = p__35841;
var map__35848__$1 = ((((!((map__35848 == null)))?((((map__35848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35848):map__35848);
var ed = map__35848__$1;
var formatted_exception = cljs.core.get.call(null,map__35848__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35848__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35848__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35850_35854 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35851_35855 = null;
var count__35852_35856 = (0);
var i__35853_35857 = (0);
while(true){
if((i__35853_35857 < count__35852_35856)){
var msg_35858 = cljs.core._nth.call(null,chunk__35851_35855,i__35853_35857);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35858);

var G__35859 = seq__35850_35854;
var G__35860 = chunk__35851_35855;
var G__35861 = count__35852_35856;
var G__35862 = (i__35853_35857 + (1));
seq__35850_35854 = G__35859;
chunk__35851_35855 = G__35860;
count__35852_35856 = G__35861;
i__35853_35857 = G__35862;
continue;
} else {
var temp__6753__auto___35863 = cljs.core.seq.call(null,seq__35850_35854);
if(temp__6753__auto___35863){
var seq__35850_35864__$1 = temp__6753__auto___35863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35850_35864__$1)){
var c__27505__auto___35865 = cljs.core.chunk_first.call(null,seq__35850_35864__$1);
var G__35866 = cljs.core.chunk_rest.call(null,seq__35850_35864__$1);
var G__35867 = c__27505__auto___35865;
var G__35868 = cljs.core.count.call(null,c__27505__auto___35865);
var G__35869 = (0);
seq__35850_35854 = G__35866;
chunk__35851_35855 = G__35867;
count__35852_35856 = G__35868;
i__35853_35857 = G__35869;
continue;
} else {
var msg_35870 = cljs.core.first.call(null,seq__35850_35864__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35870);

var G__35871 = cljs.core.next.call(null,seq__35850_35864__$1);
var G__35872 = null;
var G__35873 = (0);
var G__35874 = (0);
seq__35850_35854 = G__35871;
chunk__35851_35855 = G__35872;
count__35852_35856 = G__35873;
i__35853_35857 = G__35874;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35875){
var map__35878 = p__35875;
var map__35878__$1 = ((((!((map__35878 == null)))?((((map__35878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35878):map__35878);
var w = map__35878__$1;
var message = cljs.core.get.call(null,map__35878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35890 = cljs.core.seq.call(null,plugins);
var chunk__35891 = null;
var count__35892 = (0);
var i__35893 = (0);
while(true){
if((i__35893 < count__35892)){
var vec__35894 = cljs.core._nth.call(null,chunk__35891,i__35893);
var k = cljs.core.nth.call(null,vec__35894,(0),null);
var plugin = cljs.core.nth.call(null,vec__35894,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35900 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35890,chunk__35891,count__35892,i__35893,pl_35900,vec__35894,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35900.call(null,msg_hist);
});})(seq__35890,chunk__35891,count__35892,i__35893,pl_35900,vec__35894,k,plugin))
);
} else {
}

var G__35901 = seq__35890;
var G__35902 = chunk__35891;
var G__35903 = count__35892;
var G__35904 = (i__35893 + (1));
seq__35890 = G__35901;
chunk__35891 = G__35902;
count__35892 = G__35903;
i__35893 = G__35904;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__35890);
if(temp__6753__auto__){
var seq__35890__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35890__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__35890__$1);
var G__35905 = cljs.core.chunk_rest.call(null,seq__35890__$1);
var G__35906 = c__27505__auto__;
var G__35907 = cljs.core.count.call(null,c__27505__auto__);
var G__35908 = (0);
seq__35890 = G__35905;
chunk__35891 = G__35906;
count__35892 = G__35907;
i__35893 = G__35908;
continue;
} else {
var vec__35897 = cljs.core.first.call(null,seq__35890__$1);
var k = cljs.core.nth.call(null,vec__35897,(0),null);
var plugin = cljs.core.nth.call(null,vec__35897,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35909 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35890,chunk__35891,count__35892,i__35893,pl_35909,vec__35897,k,plugin,seq__35890__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35909.call(null,msg_hist);
});})(seq__35890,chunk__35891,count__35892,i__35893,pl_35909,vec__35897,k,plugin,seq__35890__$1,temp__6753__auto__))
);
} else {
}

var G__35910 = cljs.core.next.call(null,seq__35890__$1);
var G__35911 = null;
var G__35912 = (0);
var G__35913 = (0);
seq__35890 = G__35910;
chunk__35891 = G__35911;
count__35892 = G__35912;
i__35893 = G__35913;
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
var args35914 = [];
var len__27785__auto___35921 = arguments.length;
var i__27786__auto___35922 = (0);
while(true){
if((i__27786__auto___35922 < len__27785__auto___35921)){
args35914.push((arguments[i__27786__auto___35922]));

var G__35923 = (i__27786__auto___35922 + (1));
i__27786__auto___35922 = G__35923;
continue;
} else {
}
break;
}

var G__35916 = args35914.length;
switch (G__35916) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35914.length)].join('')));

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

var seq__35917_35925 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35918_35926 = null;
var count__35919_35927 = (0);
var i__35920_35928 = (0);
while(true){
if((i__35920_35928 < count__35919_35927)){
var msg_35929 = cljs.core._nth.call(null,chunk__35918_35926,i__35920_35928);
figwheel.client.socket.handle_incoming_message.call(null,msg_35929);

var G__35930 = seq__35917_35925;
var G__35931 = chunk__35918_35926;
var G__35932 = count__35919_35927;
var G__35933 = (i__35920_35928 + (1));
seq__35917_35925 = G__35930;
chunk__35918_35926 = G__35931;
count__35919_35927 = G__35932;
i__35920_35928 = G__35933;
continue;
} else {
var temp__6753__auto___35934 = cljs.core.seq.call(null,seq__35917_35925);
if(temp__6753__auto___35934){
var seq__35917_35935__$1 = temp__6753__auto___35934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35917_35935__$1)){
var c__27505__auto___35936 = cljs.core.chunk_first.call(null,seq__35917_35935__$1);
var G__35937 = cljs.core.chunk_rest.call(null,seq__35917_35935__$1);
var G__35938 = c__27505__auto___35936;
var G__35939 = cljs.core.count.call(null,c__27505__auto___35936);
var G__35940 = (0);
seq__35917_35925 = G__35937;
chunk__35918_35926 = G__35938;
count__35919_35927 = G__35939;
i__35920_35928 = G__35940;
continue;
} else {
var msg_35941 = cljs.core.first.call(null,seq__35917_35935__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35941);

var G__35942 = cljs.core.next.call(null,seq__35917_35935__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__35917_35925 = G__35942;
chunk__35918_35926 = G__35943;
count__35919_35927 = G__35944;
i__35920_35928 = G__35945;
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
var len__27785__auto___35950 = arguments.length;
var i__27786__auto___35951 = (0);
while(true){
if((i__27786__auto___35951 < len__27785__auto___35950)){
args__27792__auto__.push((arguments[i__27786__auto___35951]));

var G__35952 = (i__27786__auto___35951 + (1));
i__27786__auto___35951 = G__35952;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35947){
var map__35948 = p__35947;
var map__35948__$1 = ((((!((map__35948 == null)))?((((map__35948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35948):map__35948);
var opts = map__35948__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35946){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35946));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35954){if((e35954 instanceof Error)){
var e = e35954;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35954;

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
return (function (p__35958){
var map__35959 = p__35958;
var map__35959__$1 = ((((!((map__35959 == null)))?((((map__35959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35959):map__35959);
var msg_name = cljs.core.get.call(null,map__35959__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496994077427