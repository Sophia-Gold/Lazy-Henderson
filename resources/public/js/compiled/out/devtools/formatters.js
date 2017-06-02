// Compiled by ClojureScript 1.9.198 {}
goog.provide('devtools.formatters');
goog.require('cljs.core');
goog.require('goog.labs.userAgent.browser');
goog.require('devtools.prefs');
goog.require('devtools.util');
goog.require('devtools.formatters.core');
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var and__26590__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__26590__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__26590__auto__;
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
})

devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter";

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
});

devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e47182){var _ = e47182;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__6751__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__6751__auto__)){
var monitor_api_call = temp__6751__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__27792__auto__ = [];
var len__27785__auto___47184 = arguments.length;
var i__27786__auto___47185 = (0);
while(true){
if((i__27786__auto___47185 < len__27785__auto___47184)){
args__27792__auto__.push((arguments[i__27786__auto___47185]));

var G__47186 = (i__27786__auto___47185 + (1));
i__27786__auto___47185 = G__47186;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((0) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__27793__auto__);
});

devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__6751__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__6751__auto__)){
var log_exception = temp__6751__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq47183){
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47183));
});

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__47187__delegate = function (args){
if(cljs.core.not.call(null,devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__47187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47188__i = 0, G__47188__a = new Array(arguments.length -  0);
while (G__47188__i < G__47188__a.length) {G__47188__a[G__47188__i] = arguments[G__47188__i + 0]; ++G__47188__i;}
  args = new cljs.core.IndexedSeq(G__47188__a,0);
} 
return G__47187__delegate.call(this,args);};
G__47187.cljs$lang$maxFixedArity = 0;
G__47187.cljs$lang$applyTo = (function (arglist__47189){
var args = cljs.core.seq(arglist__47189);
return G__47187__delegate(args);
});
G__47187.cljs$core$IFn$_invoke$arity$variadic = G__47187__delegate;
return G__47187;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__47192__delegate = function (args){
if(cljs.core.not.call(null,devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e47191){var e = e47191;
devtools.formatters.log_exception_if_avail.call(null,[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join(''));

return null;
}}
};
var G__47192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47193__i = 0, G__47193__a = new Array(arguments.length -  0);
while (G__47193__i < G__47193__a.length) {G__47193__a[G__47193__i] = arguments[G__47193__i + 0]; ++G__47193__i;}
  args = new cljs.core.IndexedSeq(G__47193__a,0);
} 
return G__47192__delegate.call(this,args);};
G__47192.cljs$lang$maxFixedArity = 0;
G__47192.cljs$lang$applyTo = (function (arglist__47194){
var args = cljs.core.seq(arglist__47194);
return G__47192__delegate(args);
});
G__47192.cljs$core$IFn$_invoke$arity$variadic = G__47192__delegate;
return G__47192;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.formatters.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.formatters.core.header_api_call);

define_BANG_.call(null,"hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_.call(null,"body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.formatters.is_ours_QMARK_,formatters));
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe.call(null).slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_.call(null,formatters);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (window[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.formatters.is_ours_QMARK_,cljs.core.vec.call(null,devtools.util.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
return null;
} else {
devtools.formatters._STAR_installed_STAR_ = true;

devtools.formatters.install_our_formatter_BANG_.call(null,devtools.formatters.build_cljs_formatter.call(null));

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
devtools.formatters._STAR_installed_STAR_ = false;

return devtools.formatters.uninstall_our_formatters_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=formatters.js.map?rel=1496386708066