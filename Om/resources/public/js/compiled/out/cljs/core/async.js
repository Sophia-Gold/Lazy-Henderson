// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29443 = [];
var len__27785__auto___29449 = arguments.length;
var i__27786__auto___29450 = (0);
while(true){
if((i__27786__auto___29450 < len__27785__auto___29449)){
args29443.push((arguments[i__27786__auto___29450]));

var G__29451 = (i__27786__auto___29450 + (1));
i__27786__auto___29450 = G__29451;
continue;
} else {
}
break;
}

var G__29445 = args29443.length;
switch (G__29445) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29443.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29446 = (function (f,blockable,meta29447){
this.f = f;
this.blockable = blockable;
this.meta29447 = meta29447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29448,meta29447__$1){
var self__ = this;
var _29448__$1 = this;
return (new cljs.core.async.t_cljs$core$async29446(self__.f,self__.blockable,meta29447__$1));
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29448){
var self__ = this;
var _29448__$1 = this;
return self__.meta29447;
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29447","meta29447",-1063470986,null)], null);
});

cljs.core.async.t_cljs$core$async29446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29446";

cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29446");
});

cljs.core.async.__GT_t_cljs$core$async29446 = (function cljs$core$async$__GT_t_cljs$core$async29446(f__$1,blockable__$1,meta29447){
return (new cljs.core.async.t_cljs$core$async29446(f__$1,blockable__$1,meta29447));
});

}

return (new cljs.core.async.t_cljs$core$async29446(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29455 = [];
var len__27785__auto___29458 = arguments.length;
var i__27786__auto___29459 = (0);
while(true){
if((i__27786__auto___29459 < len__27785__auto___29458)){
args29455.push((arguments[i__27786__auto___29459]));

var G__29460 = (i__27786__auto___29459 + (1));
i__27786__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29457 = args29455.length;
switch (G__29457) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29455.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29462 = [];
var len__27785__auto___29465 = arguments.length;
var i__27786__auto___29466 = (0);
while(true){
if((i__27786__auto___29466 < len__27785__auto___29465)){
args29462.push((arguments[i__27786__auto___29466]));

var G__29467 = (i__27786__auto___29466 + (1));
i__27786__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29464 = args29462.length;
switch (G__29464) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29462.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29469 = [];
var len__27785__auto___29472 = arguments.length;
var i__27786__auto___29473 = (0);
while(true){
if((i__27786__auto___29473 < len__27785__auto___29472)){
args29469.push((arguments[i__27786__auto___29473]));

var G__29474 = (i__27786__auto___29473 + (1));
i__27786__auto___29473 = G__29474;
continue;
} else {
}
break;
}

var G__29471 = args29469.length;
switch (G__29471) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29469.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29476 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29476);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29476,ret){
return (function (){
return fn1.call(null,val_29476);
});})(val_29476,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29477 = [];
var len__27785__auto___29480 = arguments.length;
var i__27786__auto___29481 = (0);
while(true){
if((i__27786__auto___29481 < len__27785__auto___29480)){
args29477.push((arguments[i__27786__auto___29481]));

var G__29482 = (i__27786__auto___29481 + (1));
i__27786__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29479 = args29477.length;
switch (G__29479) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29477.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27615__auto___29484 = n;
var x_29485 = (0);
while(true){
if((x_29485 < n__27615__auto___29484)){
(a[x_29485] = (0));

var G__29486 = (x_29485 + (1));
x_29485 = G__29486;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29487 = (i + (1));
i = G__29487;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29491 = (function (alt_flag,flag,meta29492){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29492 = meta29492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29493,meta29492__$1){
var self__ = this;
var _29493__$1 = this;
return (new cljs.core.async.t_cljs$core$async29491(self__.alt_flag,self__.flag,meta29492__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29493){
var self__ = this;
var _29493__$1 = this;
return self__.meta29492;
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29492","meta29492",1970580373,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29491";

cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29491");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29491 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29491(alt_flag__$1,flag__$1,meta29492){
return (new cljs.core.async.t_cljs$core$async29491(alt_flag__$1,flag__$1,meta29492));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29491(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29497 = (function (alt_handler,flag,cb,meta29498){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29498 = meta29498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29499,meta29498__$1){
var self__ = this;
var _29499__$1 = this;
return (new cljs.core.async.t_cljs$core$async29497(self__.alt_handler,self__.flag,self__.cb,meta29498__$1));
});

cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29499){
var self__ = this;
var _29499__$1 = this;
return self__.meta29498;
});

cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29498","meta29498",-602055371,null)], null);
});

cljs.core.async.t_cljs$core$async29497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29497";

cljs.core.async.t_cljs$core$async29497.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29497");
});

cljs.core.async.__GT_t_cljs$core$async29497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29497(alt_handler__$1,flag__$1,cb__$1,meta29498){
return (new cljs.core.async.t_cljs$core$async29497(alt_handler__$1,flag__$1,cb__$1,meta29498));
});

}

return (new cljs.core.async.t_cljs$core$async29497(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29500_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29501_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26602__auto__ = wport;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29502 = (i + (1));
i = G__29502;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26602__auto__ = ret;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__26590__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___29508 = arguments.length;
var i__27786__auto___29509 = (0);
while(true){
if((i__27786__auto___29509 < len__27785__auto___29508)){
args__27792__auto__.push((arguments[i__27786__auto___29509]));

var G__29510 = (i__27786__auto___29509 + (1));
i__27786__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29505){
var map__29506 = p__29505;
var map__29506__$1 = ((((!((map__29506 == null)))?((((map__29506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29506):map__29506);
var opts = map__29506__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29503){
var G__29504 = cljs.core.first.call(null,seq29503);
var seq29503__$1 = cljs.core.next.call(null,seq29503);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29504,seq29503__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29511 = [];
var len__27785__auto___29561 = arguments.length;
var i__27786__auto___29562 = (0);
while(true){
if((i__27786__auto___29562 < len__27785__auto___29561)){
args29511.push((arguments[i__27786__auto___29562]));

var G__29563 = (i__27786__auto___29562 + (1));
i__27786__auto___29562 = G__29563;
continue;
} else {
}
break;
}

var G__29513 = args29511.length;
switch (G__29513) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29511.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29384__auto___29565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___29565){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___29565){
return (function (state_29537){
var state_val_29538 = (state_29537[(1)]);
if((state_val_29538 === (7))){
var inst_29533 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
var statearr_29539_29566 = state_29537__$1;
(statearr_29539_29566[(2)] = inst_29533);

(statearr_29539_29566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (1))){
var state_29537__$1 = state_29537;
var statearr_29540_29567 = state_29537__$1;
(statearr_29540_29567[(2)] = null);

(statearr_29540_29567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (4))){
var inst_29516 = (state_29537[(7)]);
var inst_29516__$1 = (state_29537[(2)]);
var inst_29517 = (inst_29516__$1 == null);
var state_29537__$1 = (function (){var statearr_29541 = state_29537;
(statearr_29541[(7)] = inst_29516__$1);

return statearr_29541;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29542_29568 = state_29537__$1;
(statearr_29542_29568[(1)] = (5));

} else {
var statearr_29543_29569 = state_29537__$1;
(statearr_29543_29569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (13))){
var state_29537__$1 = state_29537;
var statearr_29544_29570 = state_29537__$1;
(statearr_29544_29570[(2)] = null);

(statearr_29544_29570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (6))){
var inst_29516 = (state_29537[(7)]);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29537__$1,(11),to,inst_29516);
} else {
if((state_val_29538 === (3))){
var inst_29535 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29537__$1,inst_29535);
} else {
if((state_val_29538 === (12))){
var state_29537__$1 = state_29537;
var statearr_29545_29571 = state_29537__$1;
(statearr_29545_29571[(2)] = null);

(statearr_29545_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (2))){
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29537__$1,(4),from);
} else {
if((state_val_29538 === (11))){
var inst_29526 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
if(cljs.core.truth_(inst_29526)){
var statearr_29546_29572 = state_29537__$1;
(statearr_29546_29572[(1)] = (12));

} else {
var statearr_29547_29573 = state_29537__$1;
(statearr_29547_29573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (9))){
var state_29537__$1 = state_29537;
var statearr_29548_29574 = state_29537__$1;
(statearr_29548_29574[(2)] = null);

(statearr_29548_29574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (5))){
var state_29537__$1 = state_29537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29549_29575 = state_29537__$1;
(statearr_29549_29575[(1)] = (8));

} else {
var statearr_29550_29576 = state_29537__$1;
(statearr_29550_29576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (14))){
var inst_29531 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
var statearr_29551_29577 = state_29537__$1;
(statearr_29551_29577[(2)] = inst_29531);

(statearr_29551_29577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (10))){
var inst_29523 = (state_29537[(2)]);
var state_29537__$1 = state_29537;
var statearr_29552_29578 = state_29537__$1;
(statearr_29552_29578[(2)] = inst_29523);

(statearr_29552_29578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29538 === (8))){
var inst_29520 = cljs.core.async.close_BANG_.call(null,to);
var state_29537__$1 = state_29537;
var statearr_29553_29579 = state_29537__$1;
(statearr_29553_29579[(2)] = inst_29520);

(statearr_29553_29579[(1)] = (10));


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
});})(c__29384__auto___29565))
;
return ((function (switch__29270__auto__,c__29384__auto___29565){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_29557 = [null,null,null,null,null,null,null,null];
(statearr_29557[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_29557[(1)] = (1));

return statearr_29557;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_29537){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29558){if((e29558 instanceof Object)){
var ex__29274__auto__ = e29558;
var statearr_29559_29580 = state_29537;
(statearr_29559_29580[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29581 = state_29537;
state_29537 = G__29581;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_29537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_29537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___29565))
})();
var state__29386__auto__ = (function (){var statearr_29560 = f__29385__auto__.call(null);
(statearr_29560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___29565);

return statearr_29560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___29565))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29769){
var vec__29770 = p__29769;
var v = cljs.core.nth.call(null,vec__29770,(0),null);
var p = cljs.core.nth.call(null,vec__29770,(1),null);
var job = vec__29770;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29384__auto___29956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results){
return (function (state_29777){
var state_val_29778 = (state_29777[(1)]);
if((state_val_29778 === (1))){
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29777__$1,(2),res,v);
} else {
if((state_val_29778 === (2))){
var inst_29774 = (state_29777[(2)]);
var inst_29775 = cljs.core.async.close_BANG_.call(null,res);
var state_29777__$1 = (function (){var statearr_29779 = state_29777;
(statearr_29779[(7)] = inst_29774);

return statearr_29779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29777__$1,inst_29775);
} else {
return null;
}
}
});})(c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results))
;
return ((function (switch__29270__auto__,c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29783 = [null,null,null,null,null,null,null,null];
(statearr_29783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29783[(1)] = (1));

return statearr_29783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29777){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29784){if((e29784 instanceof Object)){
var ex__29274__auto__ = e29784;
var statearr_29785_29957 = state_29777;
(statearr_29785_29957[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29777;
state_29777 = G__29958;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results))
})();
var state__29386__auto__ = (function (){var statearr_29786 = f__29385__auto__.call(null);
(statearr_29786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___29956);

return statearr_29786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___29956,res,vec__29770,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29787){
var vec__29788 = p__29787;
var v = cljs.core.nth.call(null,vec__29788,(0),null);
var p = cljs.core.nth.call(null,vec__29788,(1),null);
var job = vec__29788;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27615__auto___29959 = n;
var __29960 = (0);
while(true){
if((__29960 < n__27615__auto___29959)){
var G__29791_29961 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29791_29961) {
case "compute":
var c__29384__auto___29963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29960,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (__29960,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function (state_29804){
var state_val_29805 = (state_29804[(1)]);
if((state_val_29805 === (1))){
var state_29804__$1 = state_29804;
var statearr_29806_29964 = state_29804__$1;
(statearr_29806_29964[(2)] = null);

(statearr_29806_29964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (2))){
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29804__$1,(4),jobs);
} else {
if((state_val_29805 === (3))){
var inst_29802 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29804__$1,inst_29802);
} else {
if((state_val_29805 === (4))){
var inst_29794 = (state_29804[(2)]);
var inst_29795 = process.call(null,inst_29794);
var state_29804__$1 = state_29804;
if(cljs.core.truth_(inst_29795)){
var statearr_29807_29965 = state_29804__$1;
(statearr_29807_29965[(1)] = (5));

} else {
var statearr_29808_29966 = state_29804__$1;
(statearr_29808_29966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (5))){
var state_29804__$1 = state_29804;
var statearr_29809_29967 = state_29804__$1;
(statearr_29809_29967[(2)] = null);

(statearr_29809_29967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (6))){
var state_29804__$1 = state_29804;
var statearr_29810_29968 = state_29804__$1;
(statearr_29810_29968[(2)] = null);

(statearr_29810_29968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (7))){
var inst_29800 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
var statearr_29811_29969 = state_29804__$1;
(statearr_29811_29969[(2)] = inst_29800);

(statearr_29811_29969[(1)] = (3));


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
});})(__29960,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
;
return ((function (__29960,switch__29270__auto__,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29815 = [null,null,null,null,null,null,null];
(statearr_29815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29815[(1)] = (1));

return statearr_29815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29804){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29816){if((e29816 instanceof Object)){
var ex__29274__auto__ = e29816;
var statearr_29817_29970 = state_29804;
(statearr_29817_29970[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29971 = state_29804;
state_29804 = G__29971;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(__29960,switch__29270__auto__,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
})();
var state__29386__auto__ = (function (){var statearr_29818 = f__29385__auto__.call(null);
(statearr_29818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___29963);

return statearr_29818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(__29960,c__29384__auto___29963,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
);


break;
case "async":
var c__29384__auto___29972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29960,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (__29960,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function (state_29831){
var state_val_29832 = (state_29831[(1)]);
if((state_val_29832 === (1))){
var state_29831__$1 = state_29831;
var statearr_29833_29973 = state_29831__$1;
(statearr_29833_29973[(2)] = null);

(statearr_29833_29973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (2))){
var state_29831__$1 = state_29831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29831__$1,(4),jobs);
} else {
if((state_val_29832 === (3))){
var inst_29829 = (state_29831[(2)]);
var state_29831__$1 = state_29831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29831__$1,inst_29829);
} else {
if((state_val_29832 === (4))){
var inst_29821 = (state_29831[(2)]);
var inst_29822 = async.call(null,inst_29821);
var state_29831__$1 = state_29831;
if(cljs.core.truth_(inst_29822)){
var statearr_29834_29974 = state_29831__$1;
(statearr_29834_29974[(1)] = (5));

} else {
var statearr_29835_29975 = state_29831__$1;
(statearr_29835_29975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (5))){
var state_29831__$1 = state_29831;
var statearr_29836_29976 = state_29831__$1;
(statearr_29836_29976[(2)] = null);

(statearr_29836_29976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (6))){
var state_29831__$1 = state_29831;
var statearr_29837_29977 = state_29831__$1;
(statearr_29837_29977[(2)] = null);

(statearr_29837_29977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (7))){
var inst_29827 = (state_29831[(2)]);
var state_29831__$1 = state_29831;
var statearr_29838_29978 = state_29831__$1;
(statearr_29838_29978[(2)] = inst_29827);

(statearr_29838_29978[(1)] = (3));


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
});})(__29960,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
;
return ((function (__29960,switch__29270__auto__,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29842 = [null,null,null,null,null,null,null];
(statearr_29842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29842[(1)] = (1));

return statearr_29842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29831){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29843){if((e29843 instanceof Object)){
var ex__29274__auto__ = e29843;
var statearr_29844_29979 = state_29831;
(statearr_29844_29979[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29980 = state_29831;
state_29831 = G__29980;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(__29960,switch__29270__auto__,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
})();
var state__29386__auto__ = (function (){var statearr_29845 = f__29385__auto__.call(null);
(statearr_29845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___29972);

return statearr_29845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(__29960,c__29384__auto___29972,G__29791_29961,n__27615__auto___29959,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29981 = (__29960 + (1));
__29960 = G__29981;
continue;
} else {
}
break;
}

var c__29384__auto___29982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___29982,jobs,results,process,async){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___29982,jobs,results,process,async){
return (function (state_29867){
var state_val_29868 = (state_29867[(1)]);
if((state_val_29868 === (1))){
var state_29867__$1 = state_29867;
var statearr_29869_29983 = state_29867__$1;
(statearr_29869_29983[(2)] = null);

(statearr_29869_29983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (2))){
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29867__$1,(4),from);
} else {
if((state_val_29868 === (3))){
var inst_29865 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29867__$1,inst_29865);
} else {
if((state_val_29868 === (4))){
var inst_29848 = (state_29867[(7)]);
var inst_29848__$1 = (state_29867[(2)]);
var inst_29849 = (inst_29848__$1 == null);
var state_29867__$1 = (function (){var statearr_29870 = state_29867;
(statearr_29870[(7)] = inst_29848__$1);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29849)){
var statearr_29871_29984 = state_29867__$1;
(statearr_29871_29984[(1)] = (5));

} else {
var statearr_29872_29985 = state_29867__$1;
(statearr_29872_29985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (5))){
var inst_29851 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29867__$1 = state_29867;
var statearr_29873_29986 = state_29867__$1;
(statearr_29873_29986[(2)] = inst_29851);

(statearr_29873_29986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (6))){
var inst_29848 = (state_29867[(7)]);
var inst_29853 = (state_29867[(8)]);
var inst_29853__$1 = cljs.core.async.chan.call(null,(1));
var inst_29854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29855 = [inst_29848,inst_29853__$1];
var inst_29856 = (new cljs.core.PersistentVector(null,2,(5),inst_29854,inst_29855,null));
var state_29867__$1 = (function (){var statearr_29874 = state_29867;
(statearr_29874[(8)] = inst_29853__$1);

return statearr_29874;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29867__$1,(8),jobs,inst_29856);
} else {
if((state_val_29868 === (7))){
var inst_29863 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
var statearr_29875_29987 = state_29867__$1;
(statearr_29875_29987[(2)] = inst_29863);

(statearr_29875_29987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (8))){
var inst_29853 = (state_29867[(8)]);
var inst_29858 = (state_29867[(2)]);
var state_29867__$1 = (function (){var statearr_29876 = state_29867;
(statearr_29876[(9)] = inst_29858);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29867__$1,(9),results,inst_29853);
} else {
if((state_val_29868 === (9))){
var inst_29860 = (state_29867[(2)]);
var state_29867__$1 = (function (){var statearr_29877 = state_29867;
(statearr_29877[(10)] = inst_29860);

return statearr_29877;
})();
var statearr_29878_29988 = state_29867__$1;
(statearr_29878_29988[(2)] = null);

(statearr_29878_29988[(1)] = (2));


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
});})(c__29384__auto___29982,jobs,results,process,async))
;
return ((function (switch__29270__auto__,c__29384__auto___29982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29882[(1)] = (1));

return statearr_29882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29867){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29883){if((e29883 instanceof Object)){
var ex__29274__auto__ = e29883;
var statearr_29884_29989 = state_29867;
(statearr_29884_29989[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29990 = state_29867;
state_29867 = G__29990;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___29982,jobs,results,process,async))
})();
var state__29386__auto__ = (function (){var statearr_29885 = f__29385__auto__.call(null);
(statearr_29885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___29982);

return statearr_29885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___29982,jobs,results,process,async))
);


var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__,jobs,results,process,async){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__,jobs,results,process,async){
return (function (state_29923){
var state_val_29924 = (state_29923[(1)]);
if((state_val_29924 === (7))){
var inst_29919 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29925_29991 = state_29923__$1;
(statearr_29925_29991[(2)] = inst_29919);

(statearr_29925_29991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (20))){
var state_29923__$1 = state_29923;
var statearr_29926_29992 = state_29923__$1;
(statearr_29926_29992[(2)] = null);

(statearr_29926_29992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (1))){
var state_29923__$1 = state_29923;
var statearr_29927_29993 = state_29923__$1;
(statearr_29927_29993[(2)] = null);

(statearr_29927_29993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (4))){
var inst_29888 = (state_29923[(7)]);
var inst_29888__$1 = (state_29923[(2)]);
var inst_29889 = (inst_29888__$1 == null);
var state_29923__$1 = (function (){var statearr_29928 = state_29923;
(statearr_29928[(7)] = inst_29888__$1);

return statearr_29928;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29929_29994 = state_29923__$1;
(statearr_29929_29994[(1)] = (5));

} else {
var statearr_29930_29995 = state_29923__$1;
(statearr_29930_29995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (15))){
var inst_29901 = (state_29923[(8)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29923__$1,(18),to,inst_29901);
} else {
if((state_val_29924 === (21))){
var inst_29914 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29931_29996 = state_29923__$1;
(statearr_29931_29996[(2)] = inst_29914);

(statearr_29931_29996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (13))){
var inst_29916 = (state_29923[(2)]);
var state_29923__$1 = (function (){var statearr_29932 = state_29923;
(statearr_29932[(9)] = inst_29916);

return statearr_29932;
})();
var statearr_29933_29997 = state_29923__$1;
(statearr_29933_29997[(2)] = null);

(statearr_29933_29997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (6))){
var inst_29888 = (state_29923[(7)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29923__$1,(11),inst_29888);
} else {
if((state_val_29924 === (17))){
var inst_29909 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
if(cljs.core.truth_(inst_29909)){
var statearr_29934_29998 = state_29923__$1;
(statearr_29934_29998[(1)] = (19));

} else {
var statearr_29935_29999 = state_29923__$1;
(statearr_29935_29999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (3))){
var inst_29921 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29923__$1,inst_29921);
} else {
if((state_val_29924 === (12))){
var inst_29898 = (state_29923[(10)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29923__$1,(14),inst_29898);
} else {
if((state_val_29924 === (2))){
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29923__$1,(4),results);
} else {
if((state_val_29924 === (19))){
var state_29923__$1 = state_29923;
var statearr_29936_30000 = state_29923__$1;
(statearr_29936_30000[(2)] = null);

(statearr_29936_30000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (11))){
var inst_29898 = (state_29923[(2)]);
var state_29923__$1 = (function (){var statearr_29937 = state_29923;
(statearr_29937[(10)] = inst_29898);

return statearr_29937;
})();
var statearr_29938_30001 = state_29923__$1;
(statearr_29938_30001[(2)] = null);

(statearr_29938_30001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (9))){
var state_29923__$1 = state_29923;
var statearr_29939_30002 = state_29923__$1;
(statearr_29939_30002[(2)] = null);

(statearr_29939_30002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (5))){
var state_29923__$1 = state_29923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29940_30003 = state_29923__$1;
(statearr_29940_30003[(1)] = (8));

} else {
var statearr_29941_30004 = state_29923__$1;
(statearr_29941_30004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (14))){
var inst_29903 = (state_29923[(11)]);
var inst_29901 = (state_29923[(8)]);
var inst_29901__$1 = (state_29923[(2)]);
var inst_29902 = (inst_29901__$1 == null);
var inst_29903__$1 = cljs.core.not.call(null,inst_29902);
var state_29923__$1 = (function (){var statearr_29942 = state_29923;
(statearr_29942[(11)] = inst_29903__$1);

(statearr_29942[(8)] = inst_29901__$1);

return statearr_29942;
})();
if(inst_29903__$1){
var statearr_29943_30005 = state_29923__$1;
(statearr_29943_30005[(1)] = (15));

} else {
var statearr_29944_30006 = state_29923__$1;
(statearr_29944_30006[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (16))){
var inst_29903 = (state_29923[(11)]);
var state_29923__$1 = state_29923;
var statearr_29945_30007 = state_29923__$1;
(statearr_29945_30007[(2)] = inst_29903);

(statearr_29945_30007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (10))){
var inst_29895 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29946_30008 = state_29923__$1;
(statearr_29946_30008[(2)] = inst_29895);

(statearr_29946_30008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (18))){
var inst_29906 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29947_30009 = state_29923__$1;
(statearr_29947_30009[(2)] = inst_29906);

(statearr_29947_30009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (8))){
var inst_29892 = cljs.core.async.close_BANG_.call(null,to);
var state_29923__$1 = state_29923;
var statearr_29948_30010 = state_29923__$1;
(statearr_29948_30010[(2)] = inst_29892);

(statearr_29948_30010[(1)] = (10));


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
}
}
}
}
});})(c__29384__auto__,jobs,results,process,async))
;
return ((function (switch__29270__auto__,c__29384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29923){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_29923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__29274__auto__ = e29953;
var statearr_29954_30011 = state_29923;
(statearr_29954_30011[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30012 = state_29923;
state_29923 = G__30012;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__,jobs,results,process,async))
})();
var state__29386__auto__ = (function (){var statearr_29955 = f__29385__auto__.call(null);
(statearr_29955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__,jobs,results,process,async))
);

return c__29384__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30013 = [];
var len__27785__auto___30016 = arguments.length;
var i__27786__auto___30017 = (0);
while(true){
if((i__27786__auto___30017 < len__27785__auto___30016)){
args30013.push((arguments[i__27786__auto___30017]));

var G__30018 = (i__27786__auto___30017 + (1));
i__27786__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var G__30015 = args30013.length;
switch (G__30015) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30013.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30020 = [];
var len__27785__auto___30023 = arguments.length;
var i__27786__auto___30024 = (0);
while(true){
if((i__27786__auto___30024 < len__27785__auto___30023)){
args30020.push((arguments[i__27786__auto___30024]));

var G__30025 = (i__27786__auto___30024 + (1));
i__27786__auto___30024 = G__30025;
continue;
} else {
}
break;
}

var G__30022 = args30020.length;
switch (G__30022) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30020.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30027 = [];
var len__27785__auto___30080 = arguments.length;
var i__27786__auto___30081 = (0);
while(true){
if((i__27786__auto___30081 < len__27785__auto___30080)){
args30027.push((arguments[i__27786__auto___30081]));

var G__30082 = (i__27786__auto___30081 + (1));
i__27786__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30029 = args30027.length;
switch (G__30029) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30027.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29384__auto___30084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___30084,tc,fc){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___30084,tc,fc){
return (function (state_30055){
var state_val_30056 = (state_30055[(1)]);
if((state_val_30056 === (7))){
var inst_30051 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30057_30085 = state_30055__$1;
(statearr_30057_30085[(2)] = inst_30051);

(statearr_30057_30085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (1))){
var state_30055__$1 = state_30055;
var statearr_30058_30086 = state_30055__$1;
(statearr_30058_30086[(2)] = null);

(statearr_30058_30086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (4))){
var inst_30032 = (state_30055[(7)]);
var inst_30032__$1 = (state_30055[(2)]);
var inst_30033 = (inst_30032__$1 == null);
var state_30055__$1 = (function (){var statearr_30059 = state_30055;
(statearr_30059[(7)] = inst_30032__$1);

return statearr_30059;
})();
if(cljs.core.truth_(inst_30033)){
var statearr_30060_30087 = state_30055__$1;
(statearr_30060_30087[(1)] = (5));

} else {
var statearr_30061_30088 = state_30055__$1;
(statearr_30061_30088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (13))){
var state_30055__$1 = state_30055;
var statearr_30062_30089 = state_30055__$1;
(statearr_30062_30089[(2)] = null);

(statearr_30062_30089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (6))){
var inst_30032 = (state_30055[(7)]);
var inst_30038 = p.call(null,inst_30032);
var state_30055__$1 = state_30055;
if(cljs.core.truth_(inst_30038)){
var statearr_30063_30090 = state_30055__$1;
(statearr_30063_30090[(1)] = (9));

} else {
var statearr_30064_30091 = state_30055__$1;
(statearr_30064_30091[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (3))){
var inst_30053 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30055__$1,inst_30053);
} else {
if((state_val_30056 === (12))){
var state_30055__$1 = state_30055;
var statearr_30065_30092 = state_30055__$1;
(statearr_30065_30092[(2)] = null);

(statearr_30065_30092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (2))){
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30055__$1,(4),ch);
} else {
if((state_val_30056 === (11))){
var inst_30032 = (state_30055[(7)]);
var inst_30042 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30055__$1,(8),inst_30042,inst_30032);
} else {
if((state_val_30056 === (9))){
var state_30055__$1 = state_30055;
var statearr_30066_30093 = state_30055__$1;
(statearr_30066_30093[(2)] = tc);

(statearr_30066_30093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (5))){
var inst_30035 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30036 = cljs.core.async.close_BANG_.call(null,fc);
var state_30055__$1 = (function (){var statearr_30067 = state_30055;
(statearr_30067[(8)] = inst_30035);

return statearr_30067;
})();
var statearr_30068_30094 = state_30055__$1;
(statearr_30068_30094[(2)] = inst_30036);

(statearr_30068_30094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (14))){
var inst_30049 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30069_30095 = state_30055__$1;
(statearr_30069_30095[(2)] = inst_30049);

(statearr_30069_30095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (10))){
var state_30055__$1 = state_30055;
var statearr_30070_30096 = state_30055__$1;
(statearr_30070_30096[(2)] = fc);

(statearr_30070_30096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (8))){
var inst_30044 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
if(cljs.core.truth_(inst_30044)){
var statearr_30071_30097 = state_30055__$1;
(statearr_30071_30097[(1)] = (12));

} else {
var statearr_30072_30098 = state_30055__$1;
(statearr_30072_30098[(1)] = (13));

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
});})(c__29384__auto___30084,tc,fc))
;
return ((function (switch__29270__auto__,c__29384__auto___30084,tc,fc){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_30076 = [null,null,null,null,null,null,null,null,null];
(statearr_30076[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_30076[(1)] = (1));

return statearr_30076;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_30055){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_30055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30077){if((e30077 instanceof Object)){
var ex__29274__auto__ = e30077;
var statearr_30078_30099 = state_30055;
(statearr_30078_30099[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_30055;
state_30055 = G__30100;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_30055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_30055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___30084,tc,fc))
})();
var state__29386__auto__ = (function (){var statearr_30079 = f__29385__auto__.call(null);
(statearr_30079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___30084);

return statearr_30079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___30084,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__){
return (function (state_30164){
var state_val_30165 = (state_30164[(1)]);
if((state_val_30165 === (7))){
var inst_30160 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
var statearr_30166_30187 = state_30164__$1;
(statearr_30166_30187[(2)] = inst_30160);

(statearr_30166_30187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (1))){
var inst_30144 = init;
var state_30164__$1 = (function (){var statearr_30167 = state_30164;
(statearr_30167[(7)] = inst_30144);

return statearr_30167;
})();
var statearr_30168_30188 = state_30164__$1;
(statearr_30168_30188[(2)] = null);

(statearr_30168_30188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (4))){
var inst_30147 = (state_30164[(8)]);
var inst_30147__$1 = (state_30164[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var state_30164__$1 = (function (){var statearr_30169 = state_30164;
(statearr_30169[(8)] = inst_30147__$1);

return statearr_30169;
})();
if(cljs.core.truth_(inst_30148)){
var statearr_30170_30189 = state_30164__$1;
(statearr_30170_30189[(1)] = (5));

} else {
var statearr_30171_30190 = state_30164__$1;
(statearr_30171_30190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (6))){
var inst_30147 = (state_30164[(8)]);
var inst_30144 = (state_30164[(7)]);
var inst_30151 = (state_30164[(9)]);
var inst_30151__$1 = f.call(null,inst_30144,inst_30147);
var inst_30152 = cljs.core.reduced_QMARK_.call(null,inst_30151__$1);
var state_30164__$1 = (function (){var statearr_30172 = state_30164;
(statearr_30172[(9)] = inst_30151__$1);

return statearr_30172;
})();
if(inst_30152){
var statearr_30173_30191 = state_30164__$1;
(statearr_30173_30191[(1)] = (8));

} else {
var statearr_30174_30192 = state_30164__$1;
(statearr_30174_30192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (3))){
var inst_30162 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30164__$1,inst_30162);
} else {
if((state_val_30165 === (2))){
var state_30164__$1 = state_30164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30164__$1,(4),ch);
} else {
if((state_val_30165 === (9))){
var inst_30151 = (state_30164[(9)]);
var inst_30144 = inst_30151;
var state_30164__$1 = (function (){var statearr_30175 = state_30164;
(statearr_30175[(7)] = inst_30144);

return statearr_30175;
})();
var statearr_30176_30193 = state_30164__$1;
(statearr_30176_30193[(2)] = null);

(statearr_30176_30193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (5))){
var inst_30144 = (state_30164[(7)]);
var state_30164__$1 = state_30164;
var statearr_30177_30194 = state_30164__$1;
(statearr_30177_30194[(2)] = inst_30144);

(statearr_30177_30194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (10))){
var inst_30158 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
var statearr_30178_30195 = state_30164__$1;
(statearr_30178_30195[(2)] = inst_30158);

(statearr_30178_30195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (8))){
var inst_30151 = (state_30164[(9)]);
var inst_30154 = cljs.core.deref.call(null,inst_30151);
var state_30164__$1 = state_30164;
var statearr_30179_30196 = state_30164__$1;
(statearr_30179_30196[(2)] = inst_30154);

(statearr_30179_30196[(1)] = (10));


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
});})(c__29384__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29271__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = cljs$core$async$reduce_$_state_machine__29271__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var cljs$core$async$reduce_$_state_machine__29271__auto____1 = (function (state_30164){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_30164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30184){if((e30184 instanceof Object)){
var ex__29274__auto__ = e30184;
var statearr_30185_30197 = state_30164;
(statearr_30185_30197[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30198 = state_30164;
state_30164 = G__30198;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29271__auto__ = function(state_30164){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29271__auto____1.call(this,state_30164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29271__auto____0;
cljs$core$async$reduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29271__auto____1;
return cljs$core$async$reduce_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__))
})();
var state__29386__auto__ = (function (){var statearr_30186 = f__29385__auto__.call(null);
(statearr_30186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__))
);

return c__29384__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30199 = [];
var len__27785__auto___30251 = arguments.length;
var i__27786__auto___30252 = (0);
while(true){
if((i__27786__auto___30252 < len__27785__auto___30251)){
args30199.push((arguments[i__27786__auto___30252]));

var G__30253 = (i__27786__auto___30252 + (1));
i__27786__auto___30252 = G__30253;
continue;
} else {
}
break;
}

var G__30201 = args30199.length;
switch (G__30201) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30199.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__){
return (function (state_30226){
var state_val_30227 = (state_30226[(1)]);
if((state_val_30227 === (7))){
var inst_30208 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30228_30255 = state_30226__$1;
(statearr_30228_30255[(2)] = inst_30208);

(statearr_30228_30255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (1))){
var inst_30202 = cljs.core.seq.call(null,coll);
var inst_30203 = inst_30202;
var state_30226__$1 = (function (){var statearr_30229 = state_30226;
(statearr_30229[(7)] = inst_30203);

return statearr_30229;
})();
var statearr_30230_30256 = state_30226__$1;
(statearr_30230_30256[(2)] = null);

(statearr_30230_30256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (4))){
var inst_30203 = (state_30226[(7)]);
var inst_30206 = cljs.core.first.call(null,inst_30203);
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30226__$1,(7),ch,inst_30206);
} else {
if((state_val_30227 === (13))){
var inst_30220 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30231_30257 = state_30226__$1;
(statearr_30231_30257[(2)] = inst_30220);

(statearr_30231_30257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (6))){
var inst_30211 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
if(cljs.core.truth_(inst_30211)){
var statearr_30232_30258 = state_30226__$1;
(statearr_30232_30258[(1)] = (8));

} else {
var statearr_30233_30259 = state_30226__$1;
(statearr_30233_30259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (3))){
var inst_30224 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30226__$1,inst_30224);
} else {
if((state_val_30227 === (12))){
var state_30226__$1 = state_30226;
var statearr_30234_30260 = state_30226__$1;
(statearr_30234_30260[(2)] = null);

(statearr_30234_30260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (2))){
var inst_30203 = (state_30226[(7)]);
var state_30226__$1 = state_30226;
if(cljs.core.truth_(inst_30203)){
var statearr_30235_30261 = state_30226__$1;
(statearr_30235_30261[(1)] = (4));

} else {
var statearr_30236_30262 = state_30226__$1;
(statearr_30236_30262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (11))){
var inst_30217 = cljs.core.async.close_BANG_.call(null,ch);
var state_30226__$1 = state_30226;
var statearr_30237_30263 = state_30226__$1;
(statearr_30237_30263[(2)] = inst_30217);

(statearr_30237_30263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (9))){
var state_30226__$1 = state_30226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30238_30264 = state_30226__$1;
(statearr_30238_30264[(1)] = (11));

} else {
var statearr_30239_30265 = state_30226__$1;
(statearr_30239_30265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (5))){
var inst_30203 = (state_30226[(7)]);
var state_30226__$1 = state_30226;
var statearr_30240_30266 = state_30226__$1;
(statearr_30240_30266[(2)] = inst_30203);

(statearr_30240_30266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (10))){
var inst_30222 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30241_30267 = state_30226__$1;
(statearr_30241_30267[(2)] = inst_30222);

(statearr_30241_30267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (8))){
var inst_30203 = (state_30226[(7)]);
var inst_30213 = cljs.core.next.call(null,inst_30203);
var inst_30203__$1 = inst_30213;
var state_30226__$1 = (function (){var statearr_30242 = state_30226;
(statearr_30242[(7)] = inst_30203__$1);

return statearr_30242;
})();
var statearr_30243_30268 = state_30226__$1;
(statearr_30243_30268[(2)] = null);

(statearr_30243_30268[(1)] = (2));


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
});})(c__29384__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_30247 = [null,null,null,null,null,null,null,null];
(statearr_30247[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_30247[(1)] = (1));

return statearr_30247;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_30226){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_30226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30248){if((e30248 instanceof Object)){
var ex__29274__auto__ = e30248;
var statearr_30249_30269 = state_30226;
(statearr_30249_30269[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30270 = state_30226;
state_30226 = G__30270;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_30226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__))
})();
var state__29386__auto__ = (function (){var statearr_30250 = f__29385__auto__.call(null);
(statearr_30250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__))
);

return c__29384__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27315__auto__ = (((_ == null))?null:_);
var m__27316__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,_);
} else {
var m__27316__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27316__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,ch);
} else {
var m__27316__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m);
} else {
var m__27316__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30496 = (function (mult,ch,cs,meta30497){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30497 = meta30497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30498,meta30497__$1){
var self__ = this;
var _30498__$1 = this;
return (new cljs.core.async.t_cljs$core$async30496(self__.mult,self__.ch,self__.cs,meta30497__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30498){
var self__ = this;
var _30498__$1 = this;
return self__.meta30497;
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30497","meta30497",-495921033,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30496";

cljs.core.async.t_cljs$core$async30496.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async30496");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30496 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30496(mult__$1,ch__$1,cs__$1,meta30497){
return (new cljs.core.async.t_cljs$core$async30496(mult__$1,ch__$1,cs__$1,meta30497));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30496(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29384__auto___30721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___30721,cs,m,dchan,dctr,done){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___30721,cs,m,dchan,dctr,done){
return (function (state_30633){
var state_val_30634 = (state_30633[(1)]);
if((state_val_30634 === (7))){
var inst_30629 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30635_30722 = state_30633__$1;
(statearr_30635_30722[(2)] = inst_30629);

(statearr_30635_30722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (20))){
var inst_30532 = (state_30633[(7)]);
var inst_30544 = cljs.core.first.call(null,inst_30532);
var inst_30545 = cljs.core.nth.call(null,inst_30544,(0),null);
var inst_30546 = cljs.core.nth.call(null,inst_30544,(1),null);
var state_30633__$1 = (function (){var statearr_30636 = state_30633;
(statearr_30636[(8)] = inst_30545);

return statearr_30636;
})();
if(cljs.core.truth_(inst_30546)){
var statearr_30637_30723 = state_30633__$1;
(statearr_30637_30723[(1)] = (22));

} else {
var statearr_30638_30724 = state_30633__$1;
(statearr_30638_30724[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (27))){
var inst_30574 = (state_30633[(9)]);
var inst_30501 = (state_30633[(10)]);
var inst_30576 = (state_30633[(11)]);
var inst_30581 = (state_30633[(12)]);
var inst_30581__$1 = cljs.core._nth.call(null,inst_30574,inst_30576);
var inst_30582 = cljs.core.async.put_BANG_.call(null,inst_30581__$1,inst_30501,done);
var state_30633__$1 = (function (){var statearr_30639 = state_30633;
(statearr_30639[(12)] = inst_30581__$1);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30582)){
var statearr_30640_30725 = state_30633__$1;
(statearr_30640_30725[(1)] = (30));

} else {
var statearr_30641_30726 = state_30633__$1;
(statearr_30641_30726[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (1))){
var state_30633__$1 = state_30633;
var statearr_30642_30727 = state_30633__$1;
(statearr_30642_30727[(2)] = null);

(statearr_30642_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (24))){
var inst_30532 = (state_30633[(7)]);
var inst_30551 = (state_30633[(2)]);
var inst_30552 = cljs.core.next.call(null,inst_30532);
var inst_30510 = inst_30552;
var inst_30511 = null;
var inst_30512 = (0);
var inst_30513 = (0);
var state_30633__$1 = (function (){var statearr_30643 = state_30633;
(statearr_30643[(13)] = inst_30551);

(statearr_30643[(14)] = inst_30511);

(statearr_30643[(15)] = inst_30512);

(statearr_30643[(16)] = inst_30510);

(statearr_30643[(17)] = inst_30513);

return statearr_30643;
})();
var statearr_30644_30728 = state_30633__$1;
(statearr_30644_30728[(2)] = null);

(statearr_30644_30728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (39))){
var state_30633__$1 = state_30633;
var statearr_30648_30729 = state_30633__$1;
(statearr_30648_30729[(2)] = null);

(statearr_30648_30729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (4))){
var inst_30501 = (state_30633[(10)]);
var inst_30501__$1 = (state_30633[(2)]);
var inst_30502 = (inst_30501__$1 == null);
var state_30633__$1 = (function (){var statearr_30649 = state_30633;
(statearr_30649[(10)] = inst_30501__$1);

return statearr_30649;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30650_30730 = state_30633__$1;
(statearr_30650_30730[(1)] = (5));

} else {
var statearr_30651_30731 = state_30633__$1;
(statearr_30651_30731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (15))){
var inst_30511 = (state_30633[(14)]);
var inst_30512 = (state_30633[(15)]);
var inst_30510 = (state_30633[(16)]);
var inst_30513 = (state_30633[(17)]);
var inst_30528 = (state_30633[(2)]);
var inst_30529 = (inst_30513 + (1));
var tmp30645 = inst_30511;
var tmp30646 = inst_30512;
var tmp30647 = inst_30510;
var inst_30510__$1 = tmp30647;
var inst_30511__$1 = tmp30645;
var inst_30512__$1 = tmp30646;
var inst_30513__$1 = inst_30529;
var state_30633__$1 = (function (){var statearr_30652 = state_30633;
(statearr_30652[(18)] = inst_30528);

(statearr_30652[(14)] = inst_30511__$1);

(statearr_30652[(15)] = inst_30512__$1);

(statearr_30652[(16)] = inst_30510__$1);

(statearr_30652[(17)] = inst_30513__$1);

return statearr_30652;
})();
var statearr_30653_30732 = state_30633__$1;
(statearr_30653_30732[(2)] = null);

(statearr_30653_30732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (21))){
var inst_30555 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30657_30733 = state_30633__$1;
(statearr_30657_30733[(2)] = inst_30555);

(statearr_30657_30733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (31))){
var inst_30581 = (state_30633[(12)]);
var inst_30585 = done.call(null,null);
var inst_30586 = cljs.core.async.untap_STAR_.call(null,m,inst_30581);
var state_30633__$1 = (function (){var statearr_30658 = state_30633;
(statearr_30658[(19)] = inst_30585);

return statearr_30658;
})();
var statearr_30659_30734 = state_30633__$1;
(statearr_30659_30734[(2)] = inst_30586);

(statearr_30659_30734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (32))){
var inst_30574 = (state_30633[(9)]);
var inst_30573 = (state_30633[(20)]);
var inst_30575 = (state_30633[(21)]);
var inst_30576 = (state_30633[(11)]);
var inst_30588 = (state_30633[(2)]);
var inst_30589 = (inst_30576 + (1));
var tmp30654 = inst_30574;
var tmp30655 = inst_30573;
var tmp30656 = inst_30575;
var inst_30573__$1 = tmp30655;
var inst_30574__$1 = tmp30654;
var inst_30575__$1 = tmp30656;
var inst_30576__$1 = inst_30589;
var state_30633__$1 = (function (){var statearr_30660 = state_30633;
(statearr_30660[(22)] = inst_30588);

(statearr_30660[(9)] = inst_30574__$1);

(statearr_30660[(20)] = inst_30573__$1);

(statearr_30660[(21)] = inst_30575__$1);

(statearr_30660[(11)] = inst_30576__$1);

return statearr_30660;
})();
var statearr_30661_30735 = state_30633__$1;
(statearr_30661_30735[(2)] = null);

(statearr_30661_30735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (40))){
var inst_30601 = (state_30633[(23)]);
var inst_30605 = done.call(null,null);
var inst_30606 = cljs.core.async.untap_STAR_.call(null,m,inst_30601);
var state_30633__$1 = (function (){var statearr_30662 = state_30633;
(statearr_30662[(24)] = inst_30605);

return statearr_30662;
})();
var statearr_30663_30736 = state_30633__$1;
(statearr_30663_30736[(2)] = inst_30606);

(statearr_30663_30736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (33))){
var inst_30592 = (state_30633[(25)]);
var inst_30594 = cljs.core.chunked_seq_QMARK_.call(null,inst_30592);
var state_30633__$1 = state_30633;
if(inst_30594){
var statearr_30664_30737 = state_30633__$1;
(statearr_30664_30737[(1)] = (36));

} else {
var statearr_30665_30738 = state_30633__$1;
(statearr_30665_30738[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (13))){
var inst_30522 = (state_30633[(26)]);
var inst_30525 = cljs.core.async.close_BANG_.call(null,inst_30522);
var state_30633__$1 = state_30633;
var statearr_30666_30739 = state_30633__$1;
(statearr_30666_30739[(2)] = inst_30525);

(statearr_30666_30739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (22))){
var inst_30545 = (state_30633[(8)]);
var inst_30548 = cljs.core.async.close_BANG_.call(null,inst_30545);
var state_30633__$1 = state_30633;
var statearr_30667_30740 = state_30633__$1;
(statearr_30667_30740[(2)] = inst_30548);

(statearr_30667_30740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (36))){
var inst_30592 = (state_30633[(25)]);
var inst_30596 = cljs.core.chunk_first.call(null,inst_30592);
var inst_30597 = cljs.core.chunk_rest.call(null,inst_30592);
var inst_30598 = cljs.core.count.call(null,inst_30596);
var inst_30573 = inst_30597;
var inst_30574 = inst_30596;
var inst_30575 = inst_30598;
var inst_30576 = (0);
var state_30633__$1 = (function (){var statearr_30668 = state_30633;
(statearr_30668[(9)] = inst_30574);

(statearr_30668[(20)] = inst_30573);

(statearr_30668[(21)] = inst_30575);

(statearr_30668[(11)] = inst_30576);

return statearr_30668;
})();
var statearr_30669_30741 = state_30633__$1;
(statearr_30669_30741[(2)] = null);

(statearr_30669_30741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (41))){
var inst_30592 = (state_30633[(25)]);
var inst_30608 = (state_30633[(2)]);
var inst_30609 = cljs.core.next.call(null,inst_30592);
var inst_30573 = inst_30609;
var inst_30574 = null;
var inst_30575 = (0);
var inst_30576 = (0);
var state_30633__$1 = (function (){var statearr_30670 = state_30633;
(statearr_30670[(9)] = inst_30574);

(statearr_30670[(20)] = inst_30573);

(statearr_30670[(21)] = inst_30575);

(statearr_30670[(27)] = inst_30608);

(statearr_30670[(11)] = inst_30576);

return statearr_30670;
})();
var statearr_30671_30742 = state_30633__$1;
(statearr_30671_30742[(2)] = null);

(statearr_30671_30742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (43))){
var state_30633__$1 = state_30633;
var statearr_30672_30743 = state_30633__$1;
(statearr_30672_30743[(2)] = null);

(statearr_30672_30743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (29))){
var inst_30617 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30673_30744 = state_30633__$1;
(statearr_30673_30744[(2)] = inst_30617);

(statearr_30673_30744[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (44))){
var inst_30626 = (state_30633[(2)]);
var state_30633__$1 = (function (){var statearr_30674 = state_30633;
(statearr_30674[(28)] = inst_30626);

return statearr_30674;
})();
var statearr_30675_30745 = state_30633__$1;
(statearr_30675_30745[(2)] = null);

(statearr_30675_30745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (6))){
var inst_30565 = (state_30633[(29)]);
var inst_30564 = cljs.core.deref.call(null,cs);
var inst_30565__$1 = cljs.core.keys.call(null,inst_30564);
var inst_30566 = cljs.core.count.call(null,inst_30565__$1);
var inst_30567 = cljs.core.reset_BANG_.call(null,dctr,inst_30566);
var inst_30572 = cljs.core.seq.call(null,inst_30565__$1);
var inst_30573 = inst_30572;
var inst_30574 = null;
var inst_30575 = (0);
var inst_30576 = (0);
var state_30633__$1 = (function (){var statearr_30676 = state_30633;
(statearr_30676[(30)] = inst_30567);

(statearr_30676[(29)] = inst_30565__$1);

(statearr_30676[(9)] = inst_30574);

(statearr_30676[(20)] = inst_30573);

(statearr_30676[(21)] = inst_30575);

(statearr_30676[(11)] = inst_30576);

return statearr_30676;
})();
var statearr_30677_30746 = state_30633__$1;
(statearr_30677_30746[(2)] = null);

(statearr_30677_30746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (28))){
var inst_30592 = (state_30633[(25)]);
var inst_30573 = (state_30633[(20)]);
var inst_30592__$1 = cljs.core.seq.call(null,inst_30573);
var state_30633__$1 = (function (){var statearr_30678 = state_30633;
(statearr_30678[(25)] = inst_30592__$1);

return statearr_30678;
})();
if(inst_30592__$1){
var statearr_30679_30747 = state_30633__$1;
(statearr_30679_30747[(1)] = (33));

} else {
var statearr_30680_30748 = state_30633__$1;
(statearr_30680_30748[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (25))){
var inst_30575 = (state_30633[(21)]);
var inst_30576 = (state_30633[(11)]);
var inst_30578 = (inst_30576 < inst_30575);
var inst_30579 = inst_30578;
var state_30633__$1 = state_30633;
if(cljs.core.truth_(inst_30579)){
var statearr_30681_30749 = state_30633__$1;
(statearr_30681_30749[(1)] = (27));

} else {
var statearr_30682_30750 = state_30633__$1;
(statearr_30682_30750[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (34))){
var state_30633__$1 = state_30633;
var statearr_30683_30751 = state_30633__$1;
(statearr_30683_30751[(2)] = null);

(statearr_30683_30751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (17))){
var state_30633__$1 = state_30633;
var statearr_30684_30752 = state_30633__$1;
(statearr_30684_30752[(2)] = null);

(statearr_30684_30752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (3))){
var inst_30631 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30633__$1,inst_30631);
} else {
if((state_val_30634 === (12))){
var inst_30560 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30685_30753 = state_30633__$1;
(statearr_30685_30753[(2)] = inst_30560);

(statearr_30685_30753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (2))){
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(4),ch);
} else {
if((state_val_30634 === (23))){
var state_30633__$1 = state_30633;
var statearr_30686_30754 = state_30633__$1;
(statearr_30686_30754[(2)] = null);

(statearr_30686_30754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (35))){
var inst_30615 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30687_30755 = state_30633__$1;
(statearr_30687_30755[(2)] = inst_30615);

(statearr_30687_30755[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (19))){
var inst_30532 = (state_30633[(7)]);
var inst_30536 = cljs.core.chunk_first.call(null,inst_30532);
var inst_30537 = cljs.core.chunk_rest.call(null,inst_30532);
var inst_30538 = cljs.core.count.call(null,inst_30536);
var inst_30510 = inst_30537;
var inst_30511 = inst_30536;
var inst_30512 = inst_30538;
var inst_30513 = (0);
var state_30633__$1 = (function (){var statearr_30688 = state_30633;
(statearr_30688[(14)] = inst_30511);

(statearr_30688[(15)] = inst_30512);

(statearr_30688[(16)] = inst_30510);

(statearr_30688[(17)] = inst_30513);

return statearr_30688;
})();
var statearr_30689_30756 = state_30633__$1;
(statearr_30689_30756[(2)] = null);

(statearr_30689_30756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (11))){
var inst_30532 = (state_30633[(7)]);
var inst_30510 = (state_30633[(16)]);
var inst_30532__$1 = cljs.core.seq.call(null,inst_30510);
var state_30633__$1 = (function (){var statearr_30690 = state_30633;
(statearr_30690[(7)] = inst_30532__$1);

return statearr_30690;
})();
if(inst_30532__$1){
var statearr_30691_30757 = state_30633__$1;
(statearr_30691_30757[(1)] = (16));

} else {
var statearr_30692_30758 = state_30633__$1;
(statearr_30692_30758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (9))){
var inst_30562 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30693_30759 = state_30633__$1;
(statearr_30693_30759[(2)] = inst_30562);

(statearr_30693_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (5))){
var inst_30508 = cljs.core.deref.call(null,cs);
var inst_30509 = cljs.core.seq.call(null,inst_30508);
var inst_30510 = inst_30509;
var inst_30511 = null;
var inst_30512 = (0);
var inst_30513 = (0);
var state_30633__$1 = (function (){var statearr_30694 = state_30633;
(statearr_30694[(14)] = inst_30511);

(statearr_30694[(15)] = inst_30512);

(statearr_30694[(16)] = inst_30510);

(statearr_30694[(17)] = inst_30513);

return statearr_30694;
})();
var statearr_30695_30760 = state_30633__$1;
(statearr_30695_30760[(2)] = null);

(statearr_30695_30760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (14))){
var state_30633__$1 = state_30633;
var statearr_30696_30761 = state_30633__$1;
(statearr_30696_30761[(2)] = null);

(statearr_30696_30761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (45))){
var inst_30623 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30697_30762 = state_30633__$1;
(statearr_30697_30762[(2)] = inst_30623);

(statearr_30697_30762[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (26))){
var inst_30565 = (state_30633[(29)]);
var inst_30619 = (state_30633[(2)]);
var inst_30620 = cljs.core.seq.call(null,inst_30565);
var state_30633__$1 = (function (){var statearr_30698 = state_30633;
(statearr_30698[(31)] = inst_30619);

return statearr_30698;
})();
if(inst_30620){
var statearr_30699_30763 = state_30633__$1;
(statearr_30699_30763[(1)] = (42));

} else {
var statearr_30700_30764 = state_30633__$1;
(statearr_30700_30764[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (16))){
var inst_30532 = (state_30633[(7)]);
var inst_30534 = cljs.core.chunked_seq_QMARK_.call(null,inst_30532);
var state_30633__$1 = state_30633;
if(inst_30534){
var statearr_30701_30765 = state_30633__$1;
(statearr_30701_30765[(1)] = (19));

} else {
var statearr_30702_30766 = state_30633__$1;
(statearr_30702_30766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (38))){
var inst_30612 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30703_30767 = state_30633__$1;
(statearr_30703_30767[(2)] = inst_30612);

(statearr_30703_30767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (30))){
var state_30633__$1 = state_30633;
var statearr_30704_30768 = state_30633__$1;
(statearr_30704_30768[(2)] = null);

(statearr_30704_30768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (10))){
var inst_30511 = (state_30633[(14)]);
var inst_30513 = (state_30633[(17)]);
var inst_30521 = cljs.core._nth.call(null,inst_30511,inst_30513);
var inst_30522 = cljs.core.nth.call(null,inst_30521,(0),null);
var inst_30523 = cljs.core.nth.call(null,inst_30521,(1),null);
var state_30633__$1 = (function (){var statearr_30705 = state_30633;
(statearr_30705[(26)] = inst_30522);

return statearr_30705;
})();
if(cljs.core.truth_(inst_30523)){
var statearr_30706_30769 = state_30633__$1;
(statearr_30706_30769[(1)] = (13));

} else {
var statearr_30707_30770 = state_30633__$1;
(statearr_30707_30770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (18))){
var inst_30558 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30708_30771 = state_30633__$1;
(statearr_30708_30771[(2)] = inst_30558);

(statearr_30708_30771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (42))){
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(45),dchan);
} else {
if((state_val_30634 === (37))){
var inst_30592 = (state_30633[(25)]);
var inst_30601 = (state_30633[(23)]);
var inst_30501 = (state_30633[(10)]);
var inst_30601__$1 = cljs.core.first.call(null,inst_30592);
var inst_30602 = cljs.core.async.put_BANG_.call(null,inst_30601__$1,inst_30501,done);
var state_30633__$1 = (function (){var statearr_30709 = state_30633;
(statearr_30709[(23)] = inst_30601__$1);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30602)){
var statearr_30710_30772 = state_30633__$1;
(statearr_30710_30772[(1)] = (39));

} else {
var statearr_30711_30773 = state_30633__$1;
(statearr_30711_30773[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (8))){
var inst_30512 = (state_30633[(15)]);
var inst_30513 = (state_30633[(17)]);
var inst_30515 = (inst_30513 < inst_30512);
var inst_30516 = inst_30515;
var state_30633__$1 = state_30633;
if(cljs.core.truth_(inst_30516)){
var statearr_30712_30774 = state_30633__$1;
(statearr_30712_30774[(1)] = (10));

} else {
var statearr_30713_30775 = state_30633__$1;
(statearr_30713_30775[(1)] = (11));

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
});})(c__29384__auto___30721,cs,m,dchan,dctr,done))
;
return ((function (switch__29270__auto__,c__29384__auto___30721,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29271__auto__ = null;
var cljs$core$async$mult_$_state_machine__29271__auto____0 = (function (){
var statearr_30717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30717[(0)] = cljs$core$async$mult_$_state_machine__29271__auto__);

(statearr_30717[(1)] = (1));

return statearr_30717;
});
var cljs$core$async$mult_$_state_machine__29271__auto____1 = (function (state_30633){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_30633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30718){if((e30718 instanceof Object)){
var ex__29274__auto__ = e30718;
var statearr_30719_30776 = state_30633;
(statearr_30719_30776[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30777 = state_30633;
state_30633 = G__30777;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29271__auto__ = function(state_30633){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29271__auto____1.call(this,state_30633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29271__auto____0;
cljs$core$async$mult_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29271__auto____1;
return cljs$core$async$mult_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___30721,cs,m,dchan,dctr,done))
})();
var state__29386__auto__ = (function (){var statearr_30720 = f__29385__auto__.call(null);
(statearr_30720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___30721);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___30721,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30778 = [];
var len__27785__auto___30781 = arguments.length;
var i__27786__auto___30782 = (0);
while(true){
if((i__27786__auto___30782 < len__27785__auto___30781)){
args30778.push((arguments[i__27786__auto___30782]));

var G__30783 = (i__27786__auto___30782 + (1));
i__27786__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var G__30780 = args30778.length;
switch (G__30780) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30778.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,ch);
} else {
var m__27316__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,ch);
} else {
var m__27316__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m);
} else {
var m__27316__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,state_map);
} else {
var m__27316__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27315__auto__ = (((m == null))?null:m);
var m__27316__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,m,mode);
} else {
var m__27316__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27792__auto__ = [];
var len__27785__auto___30795 = arguments.length;
var i__27786__auto___30796 = (0);
while(true){
if((i__27786__auto___30796 < len__27785__auto___30795)){
args__27792__auto__.push((arguments[i__27786__auto___30796]));

var G__30797 = (i__27786__auto___30796 + (1));
i__27786__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((3) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27793__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30789){
var map__30790 = p__30789;
var map__30790__$1 = ((((!((map__30790 == null)))?((((map__30790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30790):map__30790);
var opts = map__30790__$1;
var statearr_30792_30798 = state;
(statearr_30792_30798[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__30790,map__30790__$1,opts){
return (function (val){
var statearr_30793_30799 = state;
(statearr_30793_30799[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30790,map__30790__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_30794_30800 = state;
(statearr_30794_30800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30785){
var G__30786 = cljs.core.first.call(null,seq30785);
var seq30785__$1 = cljs.core.next.call(null,seq30785);
var G__30787 = cljs.core.first.call(null,seq30785__$1);
var seq30785__$2 = cljs.core.next.call(null,seq30785__$1);
var G__30788 = cljs.core.first.call(null,seq30785__$2);
var seq30785__$3 = cljs.core.next.call(null,seq30785__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30786,G__30787,G__30788,seq30785__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30966 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30967){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30967 = meta30967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30968,meta30967__$1){
var self__ = this;
var _30968__$1 = this;
return (new cljs.core.async.t_cljs$core$async30966(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30967__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30968){
var self__ = this;
var _30968__$1 = this;
return self__.meta30967;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30967","meta30967",748891790,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30966";

cljs.core.async.t_cljs$core$async30966.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async30966");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30966 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30967){
return (new cljs.core.async.t_cljs$core$async30966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30967));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30966(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29384__auto___31131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31068){
var state_val_31069 = (state_31068[(1)]);
if((state_val_31069 === (7))){
var inst_30984 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
var statearr_31070_31132 = state_31068__$1;
(statearr_31070_31132[(2)] = inst_30984);

(statearr_31070_31132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (20))){
var inst_30996 = (state_31068[(7)]);
var state_31068__$1 = state_31068;
var statearr_31071_31133 = state_31068__$1;
(statearr_31071_31133[(2)] = inst_30996);

(statearr_31071_31133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (27))){
var state_31068__$1 = state_31068;
var statearr_31072_31134 = state_31068__$1;
(statearr_31072_31134[(2)] = null);

(statearr_31072_31134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (1))){
var inst_30972 = (state_31068[(8)]);
var inst_30972__$1 = calc_state.call(null);
var inst_30974 = (inst_30972__$1 == null);
var inst_30975 = cljs.core.not.call(null,inst_30974);
var state_31068__$1 = (function (){var statearr_31073 = state_31068;
(statearr_31073[(8)] = inst_30972__$1);

return statearr_31073;
})();
if(inst_30975){
var statearr_31074_31135 = state_31068__$1;
(statearr_31074_31135[(1)] = (2));

} else {
var statearr_31075_31136 = state_31068__$1;
(statearr_31075_31136[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (24))){
var inst_31028 = (state_31068[(9)]);
var inst_31042 = (state_31068[(10)]);
var inst_31019 = (state_31068[(11)]);
var inst_31042__$1 = inst_31019.call(null,inst_31028);
var state_31068__$1 = (function (){var statearr_31076 = state_31068;
(statearr_31076[(10)] = inst_31042__$1);

return statearr_31076;
})();
if(cljs.core.truth_(inst_31042__$1)){
var statearr_31077_31137 = state_31068__$1;
(statearr_31077_31137[(1)] = (29));

} else {
var statearr_31078_31138 = state_31068__$1;
(statearr_31078_31138[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (4))){
var inst_30987 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_30987)){
var statearr_31079_31139 = state_31068__$1;
(statearr_31079_31139[(1)] = (8));

} else {
var statearr_31080_31140 = state_31068__$1;
(statearr_31080_31140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (15))){
var inst_31013 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_31013)){
var statearr_31081_31141 = state_31068__$1;
(statearr_31081_31141[(1)] = (19));

} else {
var statearr_31082_31142 = state_31068__$1;
(statearr_31082_31142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (21))){
var inst_31018 = (state_31068[(12)]);
var inst_31018__$1 = (state_31068[(2)]);
var inst_31019 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31020 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31021 = cljs.core.get.call(null,inst_31018__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31068__$1 = (function (){var statearr_31083 = state_31068;
(statearr_31083[(12)] = inst_31018__$1);

(statearr_31083[(13)] = inst_31020);

(statearr_31083[(11)] = inst_31019);

return statearr_31083;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31068__$1,(22),inst_31021);
} else {
if((state_val_31069 === (31))){
var inst_31050 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_31050)){
var statearr_31084_31143 = state_31068__$1;
(statearr_31084_31143[(1)] = (32));

} else {
var statearr_31085_31144 = state_31068__$1;
(statearr_31085_31144[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (32))){
var inst_31027 = (state_31068[(14)]);
var state_31068__$1 = state_31068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31068__$1,(35),out,inst_31027);
} else {
if((state_val_31069 === (33))){
var inst_31018 = (state_31068[(12)]);
var inst_30996 = inst_31018;
var state_31068__$1 = (function (){var statearr_31086 = state_31068;
(statearr_31086[(7)] = inst_30996);

return statearr_31086;
})();
var statearr_31087_31145 = state_31068__$1;
(statearr_31087_31145[(2)] = null);

(statearr_31087_31145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (13))){
var inst_30996 = (state_31068[(7)]);
var inst_31003 = inst_30996.cljs$lang$protocol_mask$partition0$;
var inst_31004 = (inst_31003 & (64));
var inst_31005 = inst_30996.cljs$core$ISeq$;
var inst_31006 = (inst_31004) || (inst_31005);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_31006)){
var statearr_31088_31146 = state_31068__$1;
(statearr_31088_31146[(1)] = (16));

} else {
var statearr_31089_31147 = state_31068__$1;
(statearr_31089_31147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (22))){
var inst_31028 = (state_31068[(9)]);
var inst_31027 = (state_31068[(14)]);
var inst_31026 = (state_31068[(2)]);
var inst_31027__$1 = cljs.core.nth.call(null,inst_31026,(0),null);
var inst_31028__$1 = cljs.core.nth.call(null,inst_31026,(1),null);
var inst_31029 = (inst_31027__$1 == null);
var inst_31030 = cljs.core._EQ_.call(null,inst_31028__$1,change);
var inst_31031 = (inst_31029) || (inst_31030);
var state_31068__$1 = (function (){var statearr_31090 = state_31068;
(statearr_31090[(9)] = inst_31028__$1);

(statearr_31090[(14)] = inst_31027__$1);

return statearr_31090;
})();
if(cljs.core.truth_(inst_31031)){
var statearr_31091_31148 = state_31068__$1;
(statearr_31091_31148[(1)] = (23));

} else {
var statearr_31092_31149 = state_31068__$1;
(statearr_31092_31149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (36))){
var inst_31018 = (state_31068[(12)]);
var inst_30996 = inst_31018;
var state_31068__$1 = (function (){var statearr_31093 = state_31068;
(statearr_31093[(7)] = inst_30996);

return statearr_31093;
})();
var statearr_31094_31150 = state_31068__$1;
(statearr_31094_31150[(2)] = null);

(statearr_31094_31150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (29))){
var inst_31042 = (state_31068[(10)]);
var state_31068__$1 = state_31068;
var statearr_31095_31151 = state_31068__$1;
(statearr_31095_31151[(2)] = inst_31042);

(statearr_31095_31151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (6))){
var state_31068__$1 = state_31068;
var statearr_31096_31152 = state_31068__$1;
(statearr_31096_31152[(2)] = false);

(statearr_31096_31152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (28))){
var inst_31038 = (state_31068[(2)]);
var inst_31039 = calc_state.call(null);
var inst_30996 = inst_31039;
var state_31068__$1 = (function (){var statearr_31097 = state_31068;
(statearr_31097[(15)] = inst_31038);

(statearr_31097[(7)] = inst_30996);

return statearr_31097;
})();
var statearr_31098_31153 = state_31068__$1;
(statearr_31098_31153[(2)] = null);

(statearr_31098_31153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (25))){
var inst_31064 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
var statearr_31099_31154 = state_31068__$1;
(statearr_31099_31154[(2)] = inst_31064);

(statearr_31099_31154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (34))){
var inst_31062 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
var statearr_31100_31155 = state_31068__$1;
(statearr_31100_31155[(2)] = inst_31062);

(statearr_31100_31155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (17))){
var state_31068__$1 = state_31068;
var statearr_31101_31156 = state_31068__$1;
(statearr_31101_31156[(2)] = false);

(statearr_31101_31156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (3))){
var state_31068__$1 = state_31068;
var statearr_31102_31157 = state_31068__$1;
(statearr_31102_31157[(2)] = false);

(statearr_31102_31157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (12))){
var inst_31066 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31068__$1,inst_31066);
} else {
if((state_val_31069 === (2))){
var inst_30972 = (state_31068[(8)]);
var inst_30977 = inst_30972.cljs$lang$protocol_mask$partition0$;
var inst_30978 = (inst_30977 & (64));
var inst_30979 = inst_30972.cljs$core$ISeq$;
var inst_30980 = (inst_30978) || (inst_30979);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_30980)){
var statearr_31103_31158 = state_31068__$1;
(statearr_31103_31158[(1)] = (5));

} else {
var statearr_31104_31159 = state_31068__$1;
(statearr_31104_31159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (23))){
var inst_31027 = (state_31068[(14)]);
var inst_31033 = (inst_31027 == null);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_31033)){
var statearr_31105_31160 = state_31068__$1;
(statearr_31105_31160[(1)] = (26));

} else {
var statearr_31106_31161 = state_31068__$1;
(statearr_31106_31161[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (35))){
var inst_31053 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
if(cljs.core.truth_(inst_31053)){
var statearr_31107_31162 = state_31068__$1;
(statearr_31107_31162[(1)] = (36));

} else {
var statearr_31108_31163 = state_31068__$1;
(statearr_31108_31163[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (19))){
var inst_30996 = (state_31068[(7)]);
var inst_31015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30996);
var state_31068__$1 = state_31068;
var statearr_31109_31164 = state_31068__$1;
(statearr_31109_31164[(2)] = inst_31015);

(statearr_31109_31164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (11))){
var inst_30996 = (state_31068[(7)]);
var inst_31000 = (inst_30996 == null);
var inst_31001 = cljs.core.not.call(null,inst_31000);
var state_31068__$1 = state_31068;
if(inst_31001){
var statearr_31110_31165 = state_31068__$1;
(statearr_31110_31165[(1)] = (13));

} else {
var statearr_31111_31166 = state_31068__$1;
(statearr_31111_31166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (9))){
var inst_30972 = (state_31068[(8)]);
var state_31068__$1 = state_31068;
var statearr_31112_31167 = state_31068__$1;
(statearr_31112_31167[(2)] = inst_30972);

(statearr_31112_31167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (5))){
var state_31068__$1 = state_31068;
var statearr_31113_31168 = state_31068__$1;
(statearr_31113_31168[(2)] = true);

(statearr_31113_31168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (14))){
var state_31068__$1 = state_31068;
var statearr_31114_31169 = state_31068__$1;
(statearr_31114_31169[(2)] = false);

(statearr_31114_31169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (26))){
var inst_31028 = (state_31068[(9)]);
var inst_31035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31028);
var state_31068__$1 = state_31068;
var statearr_31115_31170 = state_31068__$1;
(statearr_31115_31170[(2)] = inst_31035);

(statearr_31115_31170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (16))){
var state_31068__$1 = state_31068;
var statearr_31116_31171 = state_31068__$1;
(statearr_31116_31171[(2)] = true);

(statearr_31116_31171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (38))){
var inst_31058 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
var statearr_31117_31172 = state_31068__$1;
(statearr_31117_31172[(2)] = inst_31058);

(statearr_31117_31172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (30))){
var inst_31028 = (state_31068[(9)]);
var inst_31020 = (state_31068[(13)]);
var inst_31019 = (state_31068[(11)]);
var inst_31045 = cljs.core.empty_QMARK_.call(null,inst_31019);
var inst_31046 = inst_31020.call(null,inst_31028);
var inst_31047 = cljs.core.not.call(null,inst_31046);
var inst_31048 = (inst_31045) && (inst_31047);
var state_31068__$1 = state_31068;
var statearr_31118_31173 = state_31068__$1;
(statearr_31118_31173[(2)] = inst_31048);

(statearr_31118_31173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (10))){
var inst_30972 = (state_31068[(8)]);
var inst_30992 = (state_31068[(2)]);
var inst_30993 = cljs.core.get.call(null,inst_30992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30994 = cljs.core.get.call(null,inst_30992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30995 = cljs.core.get.call(null,inst_30992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30996 = inst_30972;
var state_31068__$1 = (function (){var statearr_31119 = state_31068;
(statearr_31119[(7)] = inst_30996);

(statearr_31119[(16)] = inst_30994);

(statearr_31119[(17)] = inst_30995);

(statearr_31119[(18)] = inst_30993);

return statearr_31119;
})();
var statearr_31120_31174 = state_31068__$1;
(statearr_31120_31174[(2)] = null);

(statearr_31120_31174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (18))){
var inst_31010 = (state_31068[(2)]);
var state_31068__$1 = state_31068;
var statearr_31121_31175 = state_31068__$1;
(statearr_31121_31175[(2)] = inst_31010);

(statearr_31121_31175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (37))){
var state_31068__$1 = state_31068;
var statearr_31122_31176 = state_31068__$1;
(statearr_31122_31176[(2)] = null);

(statearr_31122_31176[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31069 === (8))){
var inst_30972 = (state_31068[(8)]);
var inst_30989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30972);
var state_31068__$1 = state_31068;
var statearr_31123_31177 = state_31068__$1;
(statearr_31123_31177[(2)] = inst_30989);

(statearr_31123_31177[(1)] = (10));


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
});})(c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29270__auto__,c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29271__auto__ = null;
var cljs$core$async$mix_$_state_machine__29271__auto____0 = (function (){
var statearr_31127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31127[(0)] = cljs$core$async$mix_$_state_machine__29271__auto__);

(statearr_31127[(1)] = (1));

return statearr_31127;
});
var cljs$core$async$mix_$_state_machine__29271__auto____1 = (function (state_31068){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31128){if((e31128 instanceof Object)){
var ex__29274__auto__ = e31128;
var statearr_31129_31178 = state_31068;
(statearr_31129_31178[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31179 = state_31068;
state_31068 = G__31179;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29271__auto__ = function(state_31068){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29271__auto____1.call(this,state_31068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29271__auto____0;
cljs$core$async$mix_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29271__auto____1;
return cljs$core$async$mix_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29386__auto__ = (function (){var statearr_31130 = f__29385__auto__.call(null);
(statearr_31130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31131);

return statearr_31130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27315__auto__ = (((p == null))?null:p);
var m__27316__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27316__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27315__auto__ = (((p == null))?null:p);
var m__27316__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,p,v,ch);
} else {
var m__27316__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31180 = [];
var len__27785__auto___31183 = arguments.length;
var i__27786__auto___31184 = (0);
while(true){
if((i__27786__auto___31184 < len__27785__auto___31183)){
args31180.push((arguments[i__27786__auto___31184]));

var G__31185 = (i__27786__auto___31184 + (1));
i__27786__auto___31184 = G__31185;
continue;
} else {
}
break;
}

var G__31182 = args31180.length;
switch (G__31182) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31180.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27315__auto__ = (((p == null))?null:p);
var m__27316__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,p);
} else {
var m__27316__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27315__auto__ = (((p == null))?null:p);
var m__27316__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,p,v);
} else {
var m__27316__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31188 = [];
var len__27785__auto___31313 = arguments.length;
var i__27786__auto___31314 = (0);
while(true){
if((i__27786__auto___31314 < len__27785__auto___31313)){
args31188.push((arguments[i__27786__auto___31314]));

var G__31315 = (i__27786__auto___31314 + (1));
i__27786__auto___31314 = G__31315;
continue;
} else {
}
break;
}

var G__31190 = args31188.length;
switch (G__31190) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31188.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26602__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26602__auto__,mults){
return (function (p1__31187_SHARP_){
if(cljs.core.truth_(p1__31187_SHARP_.call(null,topic))){
return p1__31187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26602__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31191 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31192){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31192 = meta31192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31193,meta31192__$1){
var self__ = this;
var _31193__$1 = this;
return (new cljs.core.async.t_cljs$core$async31191(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31192__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31193){
var self__ = this;
var _31193__$1 = this;
return self__.meta31192;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31192","meta31192",665551849,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31191";

cljs.core.async.t_cljs$core$async31191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31191");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31191 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31192){
return (new cljs.core.async.t_cljs$core$async31191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31192));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31191(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29384__auto___31317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31317,mults,ensure_mult,p){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31317,mults,ensure_mult,p){
return (function (state_31265){
var state_val_31266 = (state_31265[(1)]);
if((state_val_31266 === (7))){
var inst_31261 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31267_31318 = state_31265__$1;
(statearr_31267_31318[(2)] = inst_31261);

(statearr_31267_31318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (20))){
var state_31265__$1 = state_31265;
var statearr_31268_31319 = state_31265__$1;
(statearr_31268_31319[(2)] = null);

(statearr_31268_31319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (1))){
var state_31265__$1 = state_31265;
var statearr_31269_31320 = state_31265__$1;
(statearr_31269_31320[(2)] = null);

(statearr_31269_31320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (24))){
var inst_31244 = (state_31265[(7)]);
var inst_31253 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31244);
var state_31265__$1 = state_31265;
var statearr_31270_31321 = state_31265__$1;
(statearr_31270_31321[(2)] = inst_31253);

(statearr_31270_31321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (4))){
var inst_31196 = (state_31265[(8)]);
var inst_31196__$1 = (state_31265[(2)]);
var inst_31197 = (inst_31196__$1 == null);
var state_31265__$1 = (function (){var statearr_31271 = state_31265;
(statearr_31271[(8)] = inst_31196__$1);

return statearr_31271;
})();
if(cljs.core.truth_(inst_31197)){
var statearr_31272_31322 = state_31265__$1;
(statearr_31272_31322[(1)] = (5));

} else {
var statearr_31273_31323 = state_31265__$1;
(statearr_31273_31323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (15))){
var inst_31238 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31274_31324 = state_31265__$1;
(statearr_31274_31324[(2)] = inst_31238);

(statearr_31274_31324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (21))){
var inst_31258 = (state_31265[(2)]);
var state_31265__$1 = (function (){var statearr_31275 = state_31265;
(statearr_31275[(9)] = inst_31258);

return statearr_31275;
})();
var statearr_31276_31325 = state_31265__$1;
(statearr_31276_31325[(2)] = null);

(statearr_31276_31325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (13))){
var inst_31220 = (state_31265[(10)]);
var inst_31222 = cljs.core.chunked_seq_QMARK_.call(null,inst_31220);
var state_31265__$1 = state_31265;
if(inst_31222){
var statearr_31277_31326 = state_31265__$1;
(statearr_31277_31326[(1)] = (16));

} else {
var statearr_31278_31327 = state_31265__$1;
(statearr_31278_31327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (22))){
var inst_31250 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31250)){
var statearr_31279_31328 = state_31265__$1;
(statearr_31279_31328[(1)] = (23));

} else {
var statearr_31280_31329 = state_31265__$1;
(statearr_31280_31329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (6))){
var inst_31246 = (state_31265[(11)]);
var inst_31244 = (state_31265[(7)]);
var inst_31196 = (state_31265[(8)]);
var inst_31244__$1 = topic_fn.call(null,inst_31196);
var inst_31245 = cljs.core.deref.call(null,mults);
var inst_31246__$1 = cljs.core.get.call(null,inst_31245,inst_31244__$1);
var state_31265__$1 = (function (){var statearr_31281 = state_31265;
(statearr_31281[(11)] = inst_31246__$1);

(statearr_31281[(7)] = inst_31244__$1);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31246__$1)){
var statearr_31282_31330 = state_31265__$1;
(statearr_31282_31330[(1)] = (19));

} else {
var statearr_31283_31331 = state_31265__$1;
(statearr_31283_31331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (25))){
var inst_31255 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31284_31332 = state_31265__$1;
(statearr_31284_31332[(2)] = inst_31255);

(statearr_31284_31332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (17))){
var inst_31220 = (state_31265[(10)]);
var inst_31229 = cljs.core.first.call(null,inst_31220);
var inst_31230 = cljs.core.async.muxch_STAR_.call(null,inst_31229);
var inst_31231 = cljs.core.async.close_BANG_.call(null,inst_31230);
var inst_31232 = cljs.core.next.call(null,inst_31220);
var inst_31206 = inst_31232;
var inst_31207 = null;
var inst_31208 = (0);
var inst_31209 = (0);
var state_31265__$1 = (function (){var statearr_31285 = state_31265;
(statearr_31285[(12)] = inst_31231);

(statearr_31285[(13)] = inst_31207);

(statearr_31285[(14)] = inst_31208);

(statearr_31285[(15)] = inst_31206);

(statearr_31285[(16)] = inst_31209);

return statearr_31285;
})();
var statearr_31286_31333 = state_31265__$1;
(statearr_31286_31333[(2)] = null);

(statearr_31286_31333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (3))){
var inst_31263 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31265__$1,inst_31263);
} else {
if((state_val_31266 === (12))){
var inst_31240 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31287_31334 = state_31265__$1;
(statearr_31287_31334[(2)] = inst_31240);

(statearr_31287_31334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (2))){
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31265__$1,(4),ch);
} else {
if((state_val_31266 === (23))){
var state_31265__$1 = state_31265;
var statearr_31288_31335 = state_31265__$1;
(statearr_31288_31335[(2)] = null);

(statearr_31288_31335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (19))){
var inst_31246 = (state_31265[(11)]);
var inst_31196 = (state_31265[(8)]);
var inst_31248 = cljs.core.async.muxch_STAR_.call(null,inst_31246);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31265__$1,(22),inst_31248,inst_31196);
} else {
if((state_val_31266 === (11))){
var inst_31220 = (state_31265[(10)]);
var inst_31206 = (state_31265[(15)]);
var inst_31220__$1 = cljs.core.seq.call(null,inst_31206);
var state_31265__$1 = (function (){var statearr_31289 = state_31265;
(statearr_31289[(10)] = inst_31220__$1);

return statearr_31289;
})();
if(inst_31220__$1){
var statearr_31290_31336 = state_31265__$1;
(statearr_31290_31336[(1)] = (13));

} else {
var statearr_31291_31337 = state_31265__$1;
(statearr_31291_31337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (9))){
var inst_31242 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31292_31338 = state_31265__$1;
(statearr_31292_31338[(2)] = inst_31242);

(statearr_31292_31338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (5))){
var inst_31203 = cljs.core.deref.call(null,mults);
var inst_31204 = cljs.core.vals.call(null,inst_31203);
var inst_31205 = cljs.core.seq.call(null,inst_31204);
var inst_31206 = inst_31205;
var inst_31207 = null;
var inst_31208 = (0);
var inst_31209 = (0);
var state_31265__$1 = (function (){var statearr_31293 = state_31265;
(statearr_31293[(13)] = inst_31207);

(statearr_31293[(14)] = inst_31208);

(statearr_31293[(15)] = inst_31206);

(statearr_31293[(16)] = inst_31209);

return statearr_31293;
})();
var statearr_31294_31339 = state_31265__$1;
(statearr_31294_31339[(2)] = null);

(statearr_31294_31339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (14))){
var state_31265__$1 = state_31265;
var statearr_31298_31340 = state_31265__$1;
(statearr_31298_31340[(2)] = null);

(statearr_31298_31340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (16))){
var inst_31220 = (state_31265[(10)]);
var inst_31224 = cljs.core.chunk_first.call(null,inst_31220);
var inst_31225 = cljs.core.chunk_rest.call(null,inst_31220);
var inst_31226 = cljs.core.count.call(null,inst_31224);
var inst_31206 = inst_31225;
var inst_31207 = inst_31224;
var inst_31208 = inst_31226;
var inst_31209 = (0);
var state_31265__$1 = (function (){var statearr_31299 = state_31265;
(statearr_31299[(13)] = inst_31207);

(statearr_31299[(14)] = inst_31208);

(statearr_31299[(15)] = inst_31206);

(statearr_31299[(16)] = inst_31209);

return statearr_31299;
})();
var statearr_31300_31341 = state_31265__$1;
(statearr_31300_31341[(2)] = null);

(statearr_31300_31341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (10))){
var inst_31207 = (state_31265[(13)]);
var inst_31208 = (state_31265[(14)]);
var inst_31206 = (state_31265[(15)]);
var inst_31209 = (state_31265[(16)]);
var inst_31214 = cljs.core._nth.call(null,inst_31207,inst_31209);
var inst_31215 = cljs.core.async.muxch_STAR_.call(null,inst_31214);
var inst_31216 = cljs.core.async.close_BANG_.call(null,inst_31215);
var inst_31217 = (inst_31209 + (1));
var tmp31295 = inst_31207;
var tmp31296 = inst_31208;
var tmp31297 = inst_31206;
var inst_31206__$1 = tmp31297;
var inst_31207__$1 = tmp31295;
var inst_31208__$1 = tmp31296;
var inst_31209__$1 = inst_31217;
var state_31265__$1 = (function (){var statearr_31301 = state_31265;
(statearr_31301[(13)] = inst_31207__$1);

(statearr_31301[(14)] = inst_31208__$1);

(statearr_31301[(17)] = inst_31216);

(statearr_31301[(15)] = inst_31206__$1);

(statearr_31301[(16)] = inst_31209__$1);

return statearr_31301;
})();
var statearr_31302_31342 = state_31265__$1;
(statearr_31302_31342[(2)] = null);

(statearr_31302_31342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (18))){
var inst_31235 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31303_31343 = state_31265__$1;
(statearr_31303_31343[(2)] = inst_31235);

(statearr_31303_31343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (8))){
var inst_31208 = (state_31265[(14)]);
var inst_31209 = (state_31265[(16)]);
var inst_31211 = (inst_31209 < inst_31208);
var inst_31212 = inst_31211;
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31212)){
var statearr_31304_31344 = state_31265__$1;
(statearr_31304_31344[(1)] = (10));

} else {
var statearr_31305_31345 = state_31265__$1;
(statearr_31305_31345[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29384__auto___31317,mults,ensure_mult,p))
;
return ((function (switch__29270__auto__,c__29384__auto___31317,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31265){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31310){if((e31310 instanceof Object)){
var ex__29274__auto__ = e31310;
var statearr_31311_31346 = state_31265;
(statearr_31311_31346[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31347 = state_31265;
state_31265 = G__31347;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31317,mults,ensure_mult,p))
})();
var state__29386__auto__ = (function (){var statearr_31312 = f__29385__auto__.call(null);
(statearr_31312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31317);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31317,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31348 = [];
var len__27785__auto___31351 = arguments.length;
var i__27786__auto___31352 = (0);
while(true){
if((i__27786__auto___31352 < len__27785__auto___31351)){
args31348.push((arguments[i__27786__auto___31352]));

var G__31353 = (i__27786__auto___31352 + (1));
i__27786__auto___31352 = G__31353;
continue;
} else {
}
break;
}

var G__31350 = args31348.length;
switch (G__31350) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31348.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31355 = [];
var len__27785__auto___31358 = arguments.length;
var i__27786__auto___31359 = (0);
while(true){
if((i__27786__auto___31359 < len__27785__auto___31358)){
args31355.push((arguments[i__27786__auto___31359]));

var G__31360 = (i__27786__auto___31359 + (1));
i__27786__auto___31359 = G__31360;
continue;
} else {
}
break;
}

var G__31357 = args31355.length;
switch (G__31357) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31355.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31362 = [];
var len__27785__auto___31433 = arguments.length;
var i__27786__auto___31434 = (0);
while(true){
if((i__27786__auto___31434 < len__27785__auto___31433)){
args31362.push((arguments[i__27786__auto___31434]));

var G__31435 = (i__27786__auto___31434 + (1));
i__27786__auto___31434 = G__31435;
continue;
} else {
}
break;
}

var G__31364 = args31362.length;
switch (G__31364) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31362.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29384__auto___31437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31403){
var state_val_31404 = (state_31403[(1)]);
if((state_val_31404 === (7))){
var state_31403__$1 = state_31403;
var statearr_31405_31438 = state_31403__$1;
(statearr_31405_31438[(2)] = null);

(statearr_31405_31438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (1))){
var state_31403__$1 = state_31403;
var statearr_31406_31439 = state_31403__$1;
(statearr_31406_31439[(2)] = null);

(statearr_31406_31439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (4))){
var inst_31367 = (state_31403[(7)]);
var inst_31369 = (inst_31367 < cnt);
var state_31403__$1 = state_31403;
if(cljs.core.truth_(inst_31369)){
var statearr_31407_31440 = state_31403__$1;
(statearr_31407_31440[(1)] = (6));

} else {
var statearr_31408_31441 = state_31403__$1;
(statearr_31408_31441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (15))){
var inst_31399 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31409_31442 = state_31403__$1;
(statearr_31409_31442[(2)] = inst_31399);

(statearr_31409_31442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (13))){
var inst_31392 = cljs.core.async.close_BANG_.call(null,out);
var state_31403__$1 = state_31403;
var statearr_31410_31443 = state_31403__$1;
(statearr_31410_31443[(2)] = inst_31392);

(statearr_31410_31443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (6))){
var state_31403__$1 = state_31403;
var statearr_31411_31444 = state_31403__$1;
(statearr_31411_31444[(2)] = null);

(statearr_31411_31444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (3))){
var inst_31401 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31403__$1,inst_31401);
} else {
if((state_val_31404 === (12))){
var inst_31389 = (state_31403[(8)]);
var inst_31389__$1 = (state_31403[(2)]);
var inst_31390 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31389__$1);
var state_31403__$1 = (function (){var statearr_31412 = state_31403;
(statearr_31412[(8)] = inst_31389__$1);

return statearr_31412;
})();
if(cljs.core.truth_(inst_31390)){
var statearr_31413_31445 = state_31403__$1;
(statearr_31413_31445[(1)] = (13));

} else {
var statearr_31414_31446 = state_31403__$1;
(statearr_31414_31446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (2))){
var inst_31366 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31367 = (0);
var state_31403__$1 = (function (){var statearr_31415 = state_31403;
(statearr_31415[(7)] = inst_31367);

(statearr_31415[(9)] = inst_31366);

return statearr_31415;
})();
var statearr_31416_31447 = state_31403__$1;
(statearr_31416_31447[(2)] = null);

(statearr_31416_31447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (11))){
var inst_31367 = (state_31403[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31403,(10),Object,null,(9));
var inst_31376 = chs__$1.call(null,inst_31367);
var inst_31377 = done.call(null,inst_31367);
var inst_31378 = cljs.core.async.take_BANG_.call(null,inst_31376,inst_31377);
var state_31403__$1 = state_31403;
var statearr_31417_31448 = state_31403__$1;
(statearr_31417_31448[(2)] = inst_31378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (9))){
var inst_31367 = (state_31403[(7)]);
var inst_31380 = (state_31403[(2)]);
var inst_31381 = (inst_31367 + (1));
var inst_31367__$1 = inst_31381;
var state_31403__$1 = (function (){var statearr_31418 = state_31403;
(statearr_31418[(10)] = inst_31380);

(statearr_31418[(7)] = inst_31367__$1);

return statearr_31418;
})();
var statearr_31419_31449 = state_31403__$1;
(statearr_31419_31449[(2)] = null);

(statearr_31419_31449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (5))){
var inst_31387 = (state_31403[(2)]);
var state_31403__$1 = (function (){var statearr_31420 = state_31403;
(statearr_31420[(11)] = inst_31387);

return statearr_31420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31403__$1,(12),dchan);
} else {
if((state_val_31404 === (14))){
var inst_31389 = (state_31403[(8)]);
var inst_31394 = cljs.core.apply.call(null,f,inst_31389);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31403__$1,(16),out,inst_31394);
} else {
if((state_val_31404 === (16))){
var inst_31396 = (state_31403[(2)]);
var state_31403__$1 = (function (){var statearr_31421 = state_31403;
(statearr_31421[(12)] = inst_31396);

return statearr_31421;
})();
var statearr_31422_31450 = state_31403__$1;
(statearr_31422_31450[(2)] = null);

(statearr_31422_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (10))){
var inst_31371 = (state_31403[(2)]);
var inst_31372 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31403__$1 = (function (){var statearr_31423 = state_31403;
(statearr_31423[(13)] = inst_31371);

return statearr_31423;
})();
var statearr_31424_31451 = state_31403__$1;
(statearr_31424_31451[(2)] = inst_31372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (8))){
var inst_31385 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31425_31452 = state_31403__$1;
(statearr_31425_31452[(2)] = inst_31385);

(statearr_31425_31452[(1)] = (5));


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
});})(c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29270__auto__,c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31429[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31429[(1)] = (1));

return statearr_31429;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31403){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31430){if((e31430 instanceof Object)){
var ex__29274__auto__ = e31430;
var statearr_31431_31453 = state_31403;
(statearr_31431_31453[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_31403;
state_31403 = G__31454;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29386__auto__ = (function (){var statearr_31432 = f__29385__auto__.call(null);
(statearr_31432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31437);

return statearr_31432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31437,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31456 = [];
var len__27785__auto___31514 = arguments.length;
var i__27786__auto___31515 = (0);
while(true){
if((i__27786__auto___31515 < len__27785__auto___31514)){
args31456.push((arguments[i__27786__auto___31515]));

var G__31516 = (i__27786__auto___31515 + (1));
i__27786__auto___31515 = G__31516;
continue;
} else {
}
break;
}

var G__31458 = args31456.length;
switch (G__31458) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31456.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___31518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31518,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31518,out){
return (function (state_31490){
var state_val_31491 = (state_31490[(1)]);
if((state_val_31491 === (7))){
var inst_31469 = (state_31490[(7)]);
var inst_31470 = (state_31490[(8)]);
var inst_31469__$1 = (state_31490[(2)]);
var inst_31470__$1 = cljs.core.nth.call(null,inst_31469__$1,(0),null);
var inst_31471 = cljs.core.nth.call(null,inst_31469__$1,(1),null);
var inst_31472 = (inst_31470__$1 == null);
var state_31490__$1 = (function (){var statearr_31492 = state_31490;
(statearr_31492[(7)] = inst_31469__$1);

(statearr_31492[(9)] = inst_31471);

(statearr_31492[(8)] = inst_31470__$1);

return statearr_31492;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31493_31519 = state_31490__$1;
(statearr_31493_31519[(1)] = (8));

} else {
var statearr_31494_31520 = state_31490__$1;
(statearr_31494_31520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (1))){
var inst_31459 = cljs.core.vec.call(null,chs);
var inst_31460 = inst_31459;
var state_31490__$1 = (function (){var statearr_31495 = state_31490;
(statearr_31495[(10)] = inst_31460);

return statearr_31495;
})();
var statearr_31496_31521 = state_31490__$1;
(statearr_31496_31521[(2)] = null);

(statearr_31496_31521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (4))){
var inst_31460 = (state_31490[(10)]);
var state_31490__$1 = state_31490;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31490__$1,(7),inst_31460);
} else {
if((state_val_31491 === (6))){
var inst_31486 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31497_31522 = state_31490__$1;
(statearr_31497_31522[(2)] = inst_31486);

(statearr_31497_31522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (3))){
var inst_31488 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31490__$1,inst_31488);
} else {
if((state_val_31491 === (2))){
var inst_31460 = (state_31490[(10)]);
var inst_31462 = cljs.core.count.call(null,inst_31460);
var inst_31463 = (inst_31462 > (0));
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31463)){
var statearr_31499_31523 = state_31490__$1;
(statearr_31499_31523[(1)] = (4));

} else {
var statearr_31500_31524 = state_31490__$1;
(statearr_31500_31524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (11))){
var inst_31460 = (state_31490[(10)]);
var inst_31479 = (state_31490[(2)]);
var tmp31498 = inst_31460;
var inst_31460__$1 = tmp31498;
var state_31490__$1 = (function (){var statearr_31501 = state_31490;
(statearr_31501[(10)] = inst_31460__$1);

(statearr_31501[(11)] = inst_31479);

return statearr_31501;
})();
var statearr_31502_31525 = state_31490__$1;
(statearr_31502_31525[(2)] = null);

(statearr_31502_31525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (9))){
var inst_31470 = (state_31490[(8)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31490__$1,(11),out,inst_31470);
} else {
if((state_val_31491 === (5))){
var inst_31484 = cljs.core.async.close_BANG_.call(null,out);
var state_31490__$1 = state_31490;
var statearr_31503_31526 = state_31490__$1;
(statearr_31503_31526[(2)] = inst_31484);

(statearr_31503_31526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (10))){
var inst_31482 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31504_31527 = state_31490__$1;
(statearr_31504_31527[(2)] = inst_31482);

(statearr_31504_31527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (8))){
var inst_31469 = (state_31490[(7)]);
var inst_31471 = (state_31490[(9)]);
var inst_31460 = (state_31490[(10)]);
var inst_31470 = (state_31490[(8)]);
var inst_31474 = (function (){var cs = inst_31460;
var vec__31465 = inst_31469;
var v = inst_31470;
var c = inst_31471;
return ((function (cs,vec__31465,v,c,inst_31469,inst_31471,inst_31460,inst_31470,state_val_31491,c__29384__auto___31518,out){
return (function (p1__31455_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31455_SHARP_);
});
;})(cs,vec__31465,v,c,inst_31469,inst_31471,inst_31460,inst_31470,state_val_31491,c__29384__auto___31518,out))
})();
var inst_31475 = cljs.core.filterv.call(null,inst_31474,inst_31460);
var inst_31460__$1 = inst_31475;
var state_31490__$1 = (function (){var statearr_31505 = state_31490;
(statearr_31505[(10)] = inst_31460__$1);

return statearr_31505;
})();
var statearr_31506_31528 = state_31490__$1;
(statearr_31506_31528[(2)] = null);

(statearr_31506_31528[(1)] = (2));


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
});})(c__29384__auto___31518,out))
;
return ((function (switch__29270__auto__,c__29384__auto___31518,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31510[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31510[(1)] = (1));

return statearr_31510;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31490){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31511){if((e31511 instanceof Object)){
var ex__29274__auto__ = e31511;
var statearr_31512_31529 = state_31490;
(statearr_31512_31529[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31530 = state_31490;
state_31490 = G__31530;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31518,out))
})();
var state__29386__auto__ = (function (){var statearr_31513 = f__29385__auto__.call(null);
(statearr_31513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31518);

return statearr_31513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31518,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31531 = [];
var len__27785__auto___31580 = arguments.length;
var i__27786__auto___31581 = (0);
while(true){
if((i__27786__auto___31581 < len__27785__auto___31580)){
args31531.push((arguments[i__27786__auto___31581]));

var G__31582 = (i__27786__auto___31581 + (1));
i__27786__auto___31581 = G__31582;
continue;
} else {
}
break;
}

var G__31533 = args31531.length;
switch (G__31533) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31531.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___31584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31584,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31584,out){
return (function (state_31557){
var state_val_31558 = (state_31557[(1)]);
if((state_val_31558 === (7))){
var inst_31539 = (state_31557[(7)]);
var inst_31539__$1 = (state_31557[(2)]);
var inst_31540 = (inst_31539__$1 == null);
var inst_31541 = cljs.core.not.call(null,inst_31540);
var state_31557__$1 = (function (){var statearr_31559 = state_31557;
(statearr_31559[(7)] = inst_31539__$1);

return statearr_31559;
})();
if(inst_31541){
var statearr_31560_31585 = state_31557__$1;
(statearr_31560_31585[(1)] = (8));

} else {
var statearr_31561_31586 = state_31557__$1;
(statearr_31561_31586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (1))){
var inst_31534 = (0);
var state_31557__$1 = (function (){var statearr_31562 = state_31557;
(statearr_31562[(8)] = inst_31534);

return statearr_31562;
})();
var statearr_31563_31587 = state_31557__$1;
(statearr_31563_31587[(2)] = null);

(statearr_31563_31587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (4))){
var state_31557__$1 = state_31557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31557__$1,(7),ch);
} else {
if((state_val_31558 === (6))){
var inst_31552 = (state_31557[(2)]);
var state_31557__$1 = state_31557;
var statearr_31564_31588 = state_31557__$1;
(statearr_31564_31588[(2)] = inst_31552);

(statearr_31564_31588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (3))){
var inst_31554 = (state_31557[(2)]);
var inst_31555 = cljs.core.async.close_BANG_.call(null,out);
var state_31557__$1 = (function (){var statearr_31565 = state_31557;
(statearr_31565[(9)] = inst_31554);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31557__$1,inst_31555);
} else {
if((state_val_31558 === (2))){
var inst_31534 = (state_31557[(8)]);
var inst_31536 = (inst_31534 < n);
var state_31557__$1 = state_31557;
if(cljs.core.truth_(inst_31536)){
var statearr_31566_31589 = state_31557__$1;
(statearr_31566_31589[(1)] = (4));

} else {
var statearr_31567_31590 = state_31557__$1;
(statearr_31567_31590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (11))){
var inst_31534 = (state_31557[(8)]);
var inst_31544 = (state_31557[(2)]);
var inst_31545 = (inst_31534 + (1));
var inst_31534__$1 = inst_31545;
var state_31557__$1 = (function (){var statearr_31568 = state_31557;
(statearr_31568[(8)] = inst_31534__$1);

(statearr_31568[(10)] = inst_31544);

return statearr_31568;
})();
var statearr_31569_31591 = state_31557__$1;
(statearr_31569_31591[(2)] = null);

(statearr_31569_31591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (9))){
var state_31557__$1 = state_31557;
var statearr_31570_31592 = state_31557__$1;
(statearr_31570_31592[(2)] = null);

(statearr_31570_31592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (5))){
var state_31557__$1 = state_31557;
var statearr_31571_31593 = state_31557__$1;
(statearr_31571_31593[(2)] = null);

(statearr_31571_31593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (10))){
var inst_31549 = (state_31557[(2)]);
var state_31557__$1 = state_31557;
var statearr_31572_31594 = state_31557__$1;
(statearr_31572_31594[(2)] = inst_31549);

(statearr_31572_31594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31558 === (8))){
var inst_31539 = (state_31557[(7)]);
var state_31557__$1 = state_31557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31557__$1,(11),out,inst_31539);
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
});})(c__29384__auto___31584,out))
;
return ((function (switch__29270__auto__,c__29384__auto___31584,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31576[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31576[(1)] = (1));

return statearr_31576;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31557){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31577){if((e31577 instanceof Object)){
var ex__29274__auto__ = e31577;
var statearr_31578_31595 = state_31557;
(statearr_31578_31595[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31596 = state_31557;
state_31557 = G__31596;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31584,out))
})();
var state__29386__auto__ = (function (){var statearr_31579 = f__29385__auto__.call(null);
(statearr_31579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31584);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31584,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31604 = (function (map_LT_,f,ch,meta31605){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31605 = meta31605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31606,meta31605__$1){
var self__ = this;
var _31606__$1 = this;
return (new cljs.core.async.t_cljs$core$async31604(self__.map_LT_,self__.f,self__.ch,meta31605__$1));
});

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31606){
var self__ = this;
var _31606__$1 = this;
return self__.meta31605;
});

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31607 = (function (map_LT_,f,ch,meta31605,_,fn1,meta31608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31605 = meta31605;
this._ = _;
this.fn1 = fn1;
this.meta31608 = meta31608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31609,meta31608__$1){
var self__ = this;
var _31609__$1 = this;
return (new cljs.core.async.t_cljs$core$async31607(self__.map_LT_,self__.f,self__.ch,self__.meta31605,self__._,self__.fn1,meta31608__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31609){
var self__ = this;
var _31609__$1 = this;
return self__.meta31608;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31597_SHARP_){
return f1.call(null,(((p1__31597_SHARP_ == null))?null:self__.f.call(null,p1__31597_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31605","meta31605",-1331199561,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31604","cljs.core.async/t_cljs$core$async31604",233222687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31608","meta31608",-1216968277,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31607";

cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31607");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31607 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31607(map_LT___$1,f__$1,ch__$1,meta31605__$1,___$2,fn1__$1,meta31608){
return (new cljs.core.async.t_cljs$core$async31607(map_LT___$1,f__$1,ch__$1,meta31605__$1,___$2,fn1__$1,meta31608));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31607(self__.map_LT_,self__.f,self__.ch,self__.meta31605,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26590__auto__ = ret;
if(cljs.core.truth_(and__26590__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26590__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31605","meta31605",-1331199561,null)], null);
});

cljs.core.async.t_cljs$core$async31604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31604";

cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31604");
});

cljs.core.async.__GT_t_cljs$core$async31604 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31604(map_LT___$1,f__$1,ch__$1,meta31605){
return (new cljs.core.async.t_cljs$core$async31604(map_LT___$1,f__$1,ch__$1,meta31605));
});

}

return (new cljs.core.async.t_cljs$core$async31604(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31613 = (function (map_GT_,f,ch,meta31614){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31614 = meta31614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31615,meta31614__$1){
var self__ = this;
var _31615__$1 = this;
return (new cljs.core.async.t_cljs$core$async31613(self__.map_GT_,self__.f,self__.ch,meta31614__$1));
});

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31615){
var self__ = this;
var _31615__$1 = this;
return self__.meta31614;
});

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31614","meta31614",1827565874,null)], null);
});

cljs.core.async.t_cljs$core$async31613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31613";

cljs.core.async.t_cljs$core$async31613.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31613");
});

cljs.core.async.__GT_t_cljs$core$async31613 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31613(map_GT___$1,f__$1,ch__$1,meta31614){
return (new cljs.core.async.t_cljs$core$async31613(map_GT___$1,f__$1,ch__$1,meta31614));
});

}

return (new cljs.core.async.t_cljs$core$async31613(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31619 = (function (filter_GT_,p,ch,meta31620){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31620 = meta31620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31621,meta31620__$1){
var self__ = this;
var _31621__$1 = this;
return (new cljs.core.async.t_cljs$core$async31619(self__.filter_GT_,self__.p,self__.ch,meta31620__$1));
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31621){
var self__ = this;
var _31621__$1 = this;
return self__.meta31620;
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31620","meta31620",-1734361278,null)], null);
});

cljs.core.async.t_cljs$core$async31619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31619";

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31619");
});

cljs.core.async.__GT_t_cljs$core$async31619 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31619(filter_GT___$1,p__$1,ch__$1,meta31620){
return (new cljs.core.async.t_cljs$core$async31619(filter_GT___$1,p__$1,ch__$1,meta31620));
});

}

return (new cljs.core.async.t_cljs$core$async31619(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31622 = [];
var len__27785__auto___31666 = arguments.length;
var i__27786__auto___31667 = (0);
while(true){
if((i__27786__auto___31667 < len__27785__auto___31666)){
args31622.push((arguments[i__27786__auto___31667]));

var G__31668 = (i__27786__auto___31667 + (1));
i__27786__auto___31667 = G__31668;
continue;
} else {
}
break;
}

var G__31624 = args31622.length;
switch (G__31624) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31622.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___31670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31670,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31670,out){
return (function (state_31645){
var state_val_31646 = (state_31645[(1)]);
if((state_val_31646 === (7))){
var inst_31641 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31647_31671 = state_31645__$1;
(statearr_31647_31671[(2)] = inst_31641);

(statearr_31647_31671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (1))){
var state_31645__$1 = state_31645;
var statearr_31648_31672 = state_31645__$1;
(statearr_31648_31672[(2)] = null);

(statearr_31648_31672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (4))){
var inst_31627 = (state_31645[(7)]);
var inst_31627__$1 = (state_31645[(2)]);
var inst_31628 = (inst_31627__$1 == null);
var state_31645__$1 = (function (){var statearr_31649 = state_31645;
(statearr_31649[(7)] = inst_31627__$1);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31628)){
var statearr_31650_31673 = state_31645__$1;
(statearr_31650_31673[(1)] = (5));

} else {
var statearr_31651_31674 = state_31645__$1;
(statearr_31651_31674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (6))){
var inst_31627 = (state_31645[(7)]);
var inst_31632 = p.call(null,inst_31627);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31632)){
var statearr_31652_31675 = state_31645__$1;
(statearr_31652_31675[(1)] = (8));

} else {
var statearr_31653_31676 = state_31645__$1;
(statearr_31653_31676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (3))){
var inst_31643 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31645__$1,inst_31643);
} else {
if((state_val_31646 === (2))){
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31645__$1,(4),ch);
} else {
if((state_val_31646 === (11))){
var inst_31635 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31654_31677 = state_31645__$1;
(statearr_31654_31677[(2)] = inst_31635);

(statearr_31654_31677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (9))){
var state_31645__$1 = state_31645;
var statearr_31655_31678 = state_31645__$1;
(statearr_31655_31678[(2)] = null);

(statearr_31655_31678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (5))){
var inst_31630 = cljs.core.async.close_BANG_.call(null,out);
var state_31645__$1 = state_31645;
var statearr_31656_31679 = state_31645__$1;
(statearr_31656_31679[(2)] = inst_31630);

(statearr_31656_31679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (10))){
var inst_31638 = (state_31645[(2)]);
var state_31645__$1 = (function (){var statearr_31657 = state_31645;
(statearr_31657[(8)] = inst_31638);

return statearr_31657;
})();
var statearr_31658_31680 = state_31645__$1;
(statearr_31658_31680[(2)] = null);

(statearr_31658_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (8))){
var inst_31627 = (state_31645[(7)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31645__$1,(11),out,inst_31627);
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
});})(c__29384__auto___31670,out))
;
return ((function (switch__29270__auto__,c__29384__auto___31670,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null,null,null];
(statearr_31662[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31645){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__29274__auto__ = e31663;
var statearr_31664_31681 = state_31645;
(statearr_31664_31681[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31682 = state_31645;
state_31645 = G__31682;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31670,out))
})();
var state__29386__auto__ = (function (){var statearr_31665 = f__29385__auto__.call(null);
(statearr_31665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31670);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31670,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31683 = [];
var len__27785__auto___31686 = arguments.length;
var i__27786__auto___31687 = (0);
while(true){
if((i__27786__auto___31687 < len__27785__auto___31686)){
args31683.push((arguments[i__27786__auto___31687]));

var G__31688 = (i__27786__auto___31687 + (1));
i__27786__auto___31687 = G__31688;
continue;
} else {
}
break;
}

var G__31685 = args31683.length;
switch (G__31685) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31683.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__){
return (function (state_31855){
var state_val_31856 = (state_31855[(1)]);
if((state_val_31856 === (7))){
var inst_31851 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31857_31898 = state_31855__$1;
(statearr_31857_31898[(2)] = inst_31851);

(statearr_31857_31898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (20))){
var inst_31821 = (state_31855[(7)]);
var inst_31832 = (state_31855[(2)]);
var inst_31833 = cljs.core.next.call(null,inst_31821);
var inst_31807 = inst_31833;
var inst_31808 = null;
var inst_31809 = (0);
var inst_31810 = (0);
var state_31855__$1 = (function (){var statearr_31858 = state_31855;
(statearr_31858[(8)] = inst_31810);

(statearr_31858[(9)] = inst_31809);

(statearr_31858[(10)] = inst_31807);

(statearr_31858[(11)] = inst_31832);

(statearr_31858[(12)] = inst_31808);

return statearr_31858;
})();
var statearr_31859_31899 = state_31855__$1;
(statearr_31859_31899[(2)] = null);

(statearr_31859_31899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (1))){
var state_31855__$1 = state_31855;
var statearr_31860_31900 = state_31855__$1;
(statearr_31860_31900[(2)] = null);

(statearr_31860_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (4))){
var inst_31796 = (state_31855[(13)]);
var inst_31796__$1 = (state_31855[(2)]);
var inst_31797 = (inst_31796__$1 == null);
var state_31855__$1 = (function (){var statearr_31861 = state_31855;
(statearr_31861[(13)] = inst_31796__$1);

return statearr_31861;
})();
if(cljs.core.truth_(inst_31797)){
var statearr_31862_31901 = state_31855__$1;
(statearr_31862_31901[(1)] = (5));

} else {
var statearr_31863_31902 = state_31855__$1;
(statearr_31863_31902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (15))){
var state_31855__$1 = state_31855;
var statearr_31867_31903 = state_31855__$1;
(statearr_31867_31903[(2)] = null);

(statearr_31867_31903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (21))){
var state_31855__$1 = state_31855;
var statearr_31868_31904 = state_31855__$1;
(statearr_31868_31904[(2)] = null);

(statearr_31868_31904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (13))){
var inst_31810 = (state_31855[(8)]);
var inst_31809 = (state_31855[(9)]);
var inst_31807 = (state_31855[(10)]);
var inst_31808 = (state_31855[(12)]);
var inst_31817 = (state_31855[(2)]);
var inst_31818 = (inst_31810 + (1));
var tmp31864 = inst_31809;
var tmp31865 = inst_31807;
var tmp31866 = inst_31808;
var inst_31807__$1 = tmp31865;
var inst_31808__$1 = tmp31866;
var inst_31809__$1 = tmp31864;
var inst_31810__$1 = inst_31818;
var state_31855__$1 = (function (){var statearr_31869 = state_31855;
(statearr_31869[(8)] = inst_31810__$1);

(statearr_31869[(9)] = inst_31809__$1);

(statearr_31869[(10)] = inst_31807__$1);

(statearr_31869[(14)] = inst_31817);

(statearr_31869[(12)] = inst_31808__$1);

return statearr_31869;
})();
var statearr_31870_31905 = state_31855__$1;
(statearr_31870_31905[(2)] = null);

(statearr_31870_31905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (22))){
var state_31855__$1 = state_31855;
var statearr_31871_31906 = state_31855__$1;
(statearr_31871_31906[(2)] = null);

(statearr_31871_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (6))){
var inst_31796 = (state_31855[(13)]);
var inst_31805 = f.call(null,inst_31796);
var inst_31806 = cljs.core.seq.call(null,inst_31805);
var inst_31807 = inst_31806;
var inst_31808 = null;
var inst_31809 = (0);
var inst_31810 = (0);
var state_31855__$1 = (function (){var statearr_31872 = state_31855;
(statearr_31872[(8)] = inst_31810);

(statearr_31872[(9)] = inst_31809);

(statearr_31872[(10)] = inst_31807);

(statearr_31872[(12)] = inst_31808);

return statearr_31872;
})();
var statearr_31873_31907 = state_31855__$1;
(statearr_31873_31907[(2)] = null);

(statearr_31873_31907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (17))){
var inst_31821 = (state_31855[(7)]);
var inst_31825 = cljs.core.chunk_first.call(null,inst_31821);
var inst_31826 = cljs.core.chunk_rest.call(null,inst_31821);
var inst_31827 = cljs.core.count.call(null,inst_31825);
var inst_31807 = inst_31826;
var inst_31808 = inst_31825;
var inst_31809 = inst_31827;
var inst_31810 = (0);
var state_31855__$1 = (function (){var statearr_31874 = state_31855;
(statearr_31874[(8)] = inst_31810);

(statearr_31874[(9)] = inst_31809);

(statearr_31874[(10)] = inst_31807);

(statearr_31874[(12)] = inst_31808);

return statearr_31874;
})();
var statearr_31875_31908 = state_31855__$1;
(statearr_31875_31908[(2)] = null);

(statearr_31875_31908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (3))){
var inst_31853 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31855__$1,inst_31853);
} else {
if((state_val_31856 === (12))){
var inst_31841 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31876_31909 = state_31855__$1;
(statearr_31876_31909[(2)] = inst_31841);

(statearr_31876_31909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (2))){
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31855__$1,(4),in$);
} else {
if((state_val_31856 === (23))){
var inst_31849 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31877_31910 = state_31855__$1;
(statearr_31877_31910[(2)] = inst_31849);

(statearr_31877_31910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (19))){
var inst_31836 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31878_31911 = state_31855__$1;
(statearr_31878_31911[(2)] = inst_31836);

(statearr_31878_31911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (11))){
var inst_31807 = (state_31855[(10)]);
var inst_31821 = (state_31855[(7)]);
var inst_31821__$1 = cljs.core.seq.call(null,inst_31807);
var state_31855__$1 = (function (){var statearr_31879 = state_31855;
(statearr_31879[(7)] = inst_31821__$1);

return statearr_31879;
})();
if(inst_31821__$1){
var statearr_31880_31912 = state_31855__$1;
(statearr_31880_31912[(1)] = (14));

} else {
var statearr_31881_31913 = state_31855__$1;
(statearr_31881_31913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (9))){
var inst_31843 = (state_31855[(2)]);
var inst_31844 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31855__$1 = (function (){var statearr_31882 = state_31855;
(statearr_31882[(15)] = inst_31843);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31844)){
var statearr_31883_31914 = state_31855__$1;
(statearr_31883_31914[(1)] = (21));

} else {
var statearr_31884_31915 = state_31855__$1;
(statearr_31884_31915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (5))){
var inst_31799 = cljs.core.async.close_BANG_.call(null,out);
var state_31855__$1 = state_31855;
var statearr_31885_31916 = state_31855__$1;
(statearr_31885_31916[(2)] = inst_31799);

(statearr_31885_31916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (14))){
var inst_31821 = (state_31855[(7)]);
var inst_31823 = cljs.core.chunked_seq_QMARK_.call(null,inst_31821);
var state_31855__$1 = state_31855;
if(inst_31823){
var statearr_31886_31917 = state_31855__$1;
(statearr_31886_31917[(1)] = (17));

} else {
var statearr_31887_31918 = state_31855__$1;
(statearr_31887_31918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (16))){
var inst_31839 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31888_31919 = state_31855__$1;
(statearr_31888_31919[(2)] = inst_31839);

(statearr_31888_31919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (10))){
var inst_31810 = (state_31855[(8)]);
var inst_31808 = (state_31855[(12)]);
var inst_31815 = cljs.core._nth.call(null,inst_31808,inst_31810);
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31855__$1,(13),out,inst_31815);
} else {
if((state_val_31856 === (18))){
var inst_31821 = (state_31855[(7)]);
var inst_31830 = cljs.core.first.call(null,inst_31821);
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31855__$1,(20),out,inst_31830);
} else {
if((state_val_31856 === (8))){
var inst_31810 = (state_31855[(8)]);
var inst_31809 = (state_31855[(9)]);
var inst_31812 = (inst_31810 < inst_31809);
var inst_31813 = inst_31812;
var state_31855__$1 = state_31855;
if(cljs.core.truth_(inst_31813)){
var statearr_31889_31920 = state_31855__$1;
(statearr_31889_31920[(1)] = (10));

} else {
var statearr_31890_31921 = state_31855__$1;
(statearr_31890_31921[(1)] = (11));

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
}
}
}
}
}
}
});})(c__29384__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_31894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__);

(statearr_31894[(1)] = (1));

return statearr_31894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1 = (function (state_31855){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31895){if((e31895 instanceof Object)){
var ex__29274__auto__ = e31895;
var statearr_31896_31922 = state_31855;
(statearr_31896_31922[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31923 = state_31855;
state_31855 = G__31923;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__ = function(state_31855){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1.call(this,state_31855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__))
})();
var state__29386__auto__ = (function (){var statearr_31897 = f__29385__auto__.call(null);
(statearr_31897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_31897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__))
);

return c__29384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31924 = [];
var len__27785__auto___31927 = arguments.length;
var i__27786__auto___31928 = (0);
while(true){
if((i__27786__auto___31928 < len__27785__auto___31927)){
args31924.push((arguments[i__27786__auto___31928]));

var G__31929 = (i__27786__auto___31928 + (1));
i__27786__auto___31928 = G__31929;
continue;
} else {
}
break;
}

var G__31926 = args31924.length;
switch (G__31926) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31924.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31931 = [];
var len__27785__auto___31934 = arguments.length;
var i__27786__auto___31935 = (0);
while(true){
if((i__27786__auto___31935 < len__27785__auto___31934)){
args31931.push((arguments[i__27786__auto___31935]));

var G__31936 = (i__27786__auto___31935 + (1));
i__27786__auto___31935 = G__31936;
continue;
} else {
}
break;
}

var G__31933 = args31931.length;
switch (G__31933) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31931.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31938 = [];
var len__27785__auto___31989 = arguments.length;
var i__27786__auto___31990 = (0);
while(true){
if((i__27786__auto___31990 < len__27785__auto___31989)){
args31938.push((arguments[i__27786__auto___31990]));

var G__31991 = (i__27786__auto___31990 + (1));
i__27786__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var G__31940 = args31938.length;
switch (G__31940) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31938.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___31993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___31993,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___31993,out){
return (function (state_31964){
var state_val_31965 = (state_31964[(1)]);
if((state_val_31965 === (7))){
var inst_31959 = (state_31964[(2)]);
var state_31964__$1 = state_31964;
var statearr_31966_31994 = state_31964__$1;
(statearr_31966_31994[(2)] = inst_31959);

(statearr_31966_31994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (1))){
var inst_31941 = null;
var state_31964__$1 = (function (){var statearr_31967 = state_31964;
(statearr_31967[(7)] = inst_31941);

return statearr_31967;
})();
var statearr_31968_31995 = state_31964__$1;
(statearr_31968_31995[(2)] = null);

(statearr_31968_31995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (4))){
var inst_31944 = (state_31964[(8)]);
var inst_31944__$1 = (state_31964[(2)]);
var inst_31945 = (inst_31944__$1 == null);
var inst_31946 = cljs.core.not.call(null,inst_31945);
var state_31964__$1 = (function (){var statearr_31969 = state_31964;
(statearr_31969[(8)] = inst_31944__$1);

return statearr_31969;
})();
if(inst_31946){
var statearr_31970_31996 = state_31964__$1;
(statearr_31970_31996[(1)] = (5));

} else {
var statearr_31971_31997 = state_31964__$1;
(statearr_31971_31997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (6))){
var state_31964__$1 = state_31964;
var statearr_31972_31998 = state_31964__$1;
(statearr_31972_31998[(2)] = null);

(statearr_31972_31998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (3))){
var inst_31961 = (state_31964[(2)]);
var inst_31962 = cljs.core.async.close_BANG_.call(null,out);
var state_31964__$1 = (function (){var statearr_31973 = state_31964;
(statearr_31973[(9)] = inst_31961);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31964__$1,inst_31962);
} else {
if((state_val_31965 === (2))){
var state_31964__$1 = state_31964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31964__$1,(4),ch);
} else {
if((state_val_31965 === (11))){
var inst_31944 = (state_31964[(8)]);
var inst_31953 = (state_31964[(2)]);
var inst_31941 = inst_31944;
var state_31964__$1 = (function (){var statearr_31974 = state_31964;
(statearr_31974[(10)] = inst_31953);

(statearr_31974[(7)] = inst_31941);

return statearr_31974;
})();
var statearr_31975_31999 = state_31964__$1;
(statearr_31975_31999[(2)] = null);

(statearr_31975_31999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (9))){
var inst_31944 = (state_31964[(8)]);
var state_31964__$1 = state_31964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31964__$1,(11),out,inst_31944);
} else {
if((state_val_31965 === (5))){
var inst_31944 = (state_31964[(8)]);
var inst_31941 = (state_31964[(7)]);
var inst_31948 = cljs.core._EQ_.call(null,inst_31944,inst_31941);
var state_31964__$1 = state_31964;
if(inst_31948){
var statearr_31977_32000 = state_31964__$1;
(statearr_31977_32000[(1)] = (8));

} else {
var statearr_31978_32001 = state_31964__$1;
(statearr_31978_32001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (10))){
var inst_31956 = (state_31964[(2)]);
var state_31964__$1 = state_31964;
var statearr_31979_32002 = state_31964__$1;
(statearr_31979_32002[(2)] = inst_31956);

(statearr_31979_32002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (8))){
var inst_31941 = (state_31964[(7)]);
var tmp31976 = inst_31941;
var inst_31941__$1 = tmp31976;
var state_31964__$1 = (function (){var statearr_31980 = state_31964;
(statearr_31980[(7)] = inst_31941__$1);

return statearr_31980;
})();
var statearr_31981_32003 = state_31964__$1;
(statearr_31981_32003[(2)] = null);

(statearr_31981_32003[(1)] = (2));


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
});})(c__29384__auto___31993,out))
;
return ((function (switch__29270__auto__,c__29384__auto___31993,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31985[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31985[(1)] = (1));

return statearr_31985;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31964){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_31964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31986){if((e31986 instanceof Object)){
var ex__29274__auto__ = e31986;
var statearr_31987_32004 = state_31964;
(statearr_31987_32004[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32005 = state_31964;
state_31964 = G__32005;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___31993,out))
})();
var state__29386__auto__ = (function (){var statearr_31988 = f__29385__auto__.call(null);
(statearr_31988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___31993);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___31993,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32006 = [];
var len__27785__auto___32076 = arguments.length;
var i__27786__auto___32077 = (0);
while(true){
if((i__27786__auto___32077 < len__27785__auto___32076)){
args32006.push((arguments[i__27786__auto___32077]));

var G__32078 = (i__27786__auto___32077 + (1));
i__27786__auto___32077 = G__32078;
continue;
} else {
}
break;
}

var G__32008 = args32006.length;
switch (G__32008) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32006.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___32080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___32080,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___32080,out){
return (function (state_32046){
var state_val_32047 = (state_32046[(1)]);
if((state_val_32047 === (7))){
var inst_32042 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
var statearr_32048_32081 = state_32046__$1;
(statearr_32048_32081[(2)] = inst_32042);

(statearr_32048_32081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (1))){
var inst_32009 = (new Array(n));
var inst_32010 = inst_32009;
var inst_32011 = (0);
var state_32046__$1 = (function (){var statearr_32049 = state_32046;
(statearr_32049[(7)] = inst_32011);

(statearr_32049[(8)] = inst_32010);

return statearr_32049;
})();
var statearr_32050_32082 = state_32046__$1;
(statearr_32050_32082[(2)] = null);

(statearr_32050_32082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (4))){
var inst_32014 = (state_32046[(9)]);
var inst_32014__$1 = (state_32046[(2)]);
var inst_32015 = (inst_32014__$1 == null);
var inst_32016 = cljs.core.not.call(null,inst_32015);
var state_32046__$1 = (function (){var statearr_32051 = state_32046;
(statearr_32051[(9)] = inst_32014__$1);

return statearr_32051;
})();
if(inst_32016){
var statearr_32052_32083 = state_32046__$1;
(statearr_32052_32083[(1)] = (5));

} else {
var statearr_32053_32084 = state_32046__$1;
(statearr_32053_32084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (15))){
var inst_32036 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
var statearr_32054_32085 = state_32046__$1;
(statearr_32054_32085[(2)] = inst_32036);

(statearr_32054_32085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (13))){
var state_32046__$1 = state_32046;
var statearr_32055_32086 = state_32046__$1;
(statearr_32055_32086[(2)] = null);

(statearr_32055_32086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (6))){
var inst_32011 = (state_32046[(7)]);
var inst_32032 = (inst_32011 > (0));
var state_32046__$1 = state_32046;
if(cljs.core.truth_(inst_32032)){
var statearr_32056_32087 = state_32046__$1;
(statearr_32056_32087[(1)] = (12));

} else {
var statearr_32057_32088 = state_32046__$1;
(statearr_32057_32088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (3))){
var inst_32044 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32046__$1,inst_32044);
} else {
if((state_val_32047 === (12))){
var inst_32010 = (state_32046[(8)]);
var inst_32034 = cljs.core.vec.call(null,inst_32010);
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32046__$1,(15),out,inst_32034);
} else {
if((state_val_32047 === (2))){
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32046__$1,(4),ch);
} else {
if((state_val_32047 === (11))){
var inst_32026 = (state_32046[(2)]);
var inst_32027 = (new Array(n));
var inst_32010 = inst_32027;
var inst_32011 = (0);
var state_32046__$1 = (function (){var statearr_32058 = state_32046;
(statearr_32058[(7)] = inst_32011);

(statearr_32058[(10)] = inst_32026);

(statearr_32058[(8)] = inst_32010);

return statearr_32058;
})();
var statearr_32059_32089 = state_32046__$1;
(statearr_32059_32089[(2)] = null);

(statearr_32059_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (9))){
var inst_32010 = (state_32046[(8)]);
var inst_32024 = cljs.core.vec.call(null,inst_32010);
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32046__$1,(11),out,inst_32024);
} else {
if((state_val_32047 === (5))){
var inst_32014 = (state_32046[(9)]);
var inst_32011 = (state_32046[(7)]);
var inst_32019 = (state_32046[(11)]);
var inst_32010 = (state_32046[(8)]);
var inst_32018 = (inst_32010[inst_32011] = inst_32014);
var inst_32019__$1 = (inst_32011 + (1));
var inst_32020 = (inst_32019__$1 < n);
var state_32046__$1 = (function (){var statearr_32060 = state_32046;
(statearr_32060[(12)] = inst_32018);

(statearr_32060[(11)] = inst_32019__$1);

return statearr_32060;
})();
if(cljs.core.truth_(inst_32020)){
var statearr_32061_32090 = state_32046__$1;
(statearr_32061_32090[(1)] = (8));

} else {
var statearr_32062_32091 = state_32046__$1;
(statearr_32062_32091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (14))){
var inst_32039 = (state_32046[(2)]);
var inst_32040 = cljs.core.async.close_BANG_.call(null,out);
var state_32046__$1 = (function (){var statearr_32064 = state_32046;
(statearr_32064[(13)] = inst_32039);

return statearr_32064;
})();
var statearr_32065_32092 = state_32046__$1;
(statearr_32065_32092[(2)] = inst_32040);

(statearr_32065_32092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (10))){
var inst_32030 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
var statearr_32066_32093 = state_32046__$1;
(statearr_32066_32093[(2)] = inst_32030);

(statearr_32066_32093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (8))){
var inst_32019 = (state_32046[(11)]);
var inst_32010 = (state_32046[(8)]);
var tmp32063 = inst_32010;
var inst_32010__$1 = tmp32063;
var inst_32011 = inst_32019;
var state_32046__$1 = (function (){var statearr_32067 = state_32046;
(statearr_32067[(7)] = inst_32011);

(statearr_32067[(8)] = inst_32010__$1);

return statearr_32067;
})();
var statearr_32068_32094 = state_32046__$1;
(statearr_32068_32094[(2)] = null);

(statearr_32068_32094[(1)] = (2));


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
});})(c__29384__auto___32080,out))
;
return ((function (switch__29270__auto__,c__29384__auto___32080,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_32072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32072[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_32072[(1)] = (1));

return statearr_32072;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_32046){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_32046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e32073){if((e32073 instanceof Object)){
var ex__29274__auto__ = e32073;
var statearr_32074_32095 = state_32046;
(statearr_32074_32095[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32096 = state_32046;
state_32046 = G__32096;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_32046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_32046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___32080,out))
})();
var state__29386__auto__ = (function (){var statearr_32075 = f__29385__auto__.call(null);
(statearr_32075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___32080);

return statearr_32075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___32080,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32097 = [];
var len__27785__auto___32171 = arguments.length;
var i__27786__auto___32172 = (0);
while(true){
if((i__27786__auto___32172 < len__27785__auto___32171)){
args32097.push((arguments[i__27786__auto___32172]));

var G__32173 = (i__27786__auto___32172 + (1));
i__27786__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var G__32099 = args32097.length;
switch (G__32099) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32097.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29384__auto___32175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___32175,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___32175,out){
return (function (state_32141){
var state_val_32142 = (state_32141[(1)]);
if((state_val_32142 === (7))){
var inst_32137 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32143_32176 = state_32141__$1;
(statearr_32143_32176[(2)] = inst_32137);

(statearr_32143_32176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (1))){
var inst_32100 = [];
var inst_32101 = inst_32100;
var inst_32102 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32141__$1 = (function (){var statearr_32144 = state_32141;
(statearr_32144[(7)] = inst_32101);

(statearr_32144[(8)] = inst_32102);

return statearr_32144;
})();
var statearr_32145_32177 = state_32141__$1;
(statearr_32145_32177[(2)] = null);

(statearr_32145_32177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (4))){
var inst_32105 = (state_32141[(9)]);
var inst_32105__$1 = (state_32141[(2)]);
var inst_32106 = (inst_32105__$1 == null);
var inst_32107 = cljs.core.not.call(null,inst_32106);
var state_32141__$1 = (function (){var statearr_32146 = state_32141;
(statearr_32146[(9)] = inst_32105__$1);

return statearr_32146;
})();
if(inst_32107){
var statearr_32147_32178 = state_32141__$1;
(statearr_32147_32178[(1)] = (5));

} else {
var statearr_32148_32179 = state_32141__$1;
(statearr_32148_32179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (15))){
var inst_32131 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32149_32180 = state_32141__$1;
(statearr_32149_32180[(2)] = inst_32131);

(statearr_32149_32180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (13))){
var state_32141__$1 = state_32141;
var statearr_32150_32181 = state_32141__$1;
(statearr_32150_32181[(2)] = null);

(statearr_32150_32181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (6))){
var inst_32101 = (state_32141[(7)]);
var inst_32126 = inst_32101.length;
var inst_32127 = (inst_32126 > (0));
var state_32141__$1 = state_32141;
if(cljs.core.truth_(inst_32127)){
var statearr_32151_32182 = state_32141__$1;
(statearr_32151_32182[(1)] = (12));

} else {
var statearr_32152_32183 = state_32141__$1;
(statearr_32152_32183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (3))){
var inst_32139 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32141__$1,inst_32139);
} else {
if((state_val_32142 === (12))){
var inst_32101 = (state_32141[(7)]);
var inst_32129 = cljs.core.vec.call(null,inst_32101);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32141__$1,(15),out,inst_32129);
} else {
if((state_val_32142 === (2))){
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32141__$1,(4),ch);
} else {
if((state_val_32142 === (11))){
var inst_32105 = (state_32141[(9)]);
var inst_32109 = (state_32141[(10)]);
var inst_32119 = (state_32141[(2)]);
var inst_32120 = [];
var inst_32121 = inst_32120.push(inst_32105);
var inst_32101 = inst_32120;
var inst_32102 = inst_32109;
var state_32141__$1 = (function (){var statearr_32153 = state_32141;
(statearr_32153[(7)] = inst_32101);

(statearr_32153[(11)] = inst_32121);

(statearr_32153[(12)] = inst_32119);

(statearr_32153[(8)] = inst_32102);

return statearr_32153;
})();
var statearr_32154_32184 = state_32141__$1;
(statearr_32154_32184[(2)] = null);

(statearr_32154_32184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (9))){
var inst_32101 = (state_32141[(7)]);
var inst_32117 = cljs.core.vec.call(null,inst_32101);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32141__$1,(11),out,inst_32117);
} else {
if((state_val_32142 === (5))){
var inst_32105 = (state_32141[(9)]);
var inst_32109 = (state_32141[(10)]);
var inst_32102 = (state_32141[(8)]);
var inst_32109__$1 = f.call(null,inst_32105);
var inst_32110 = cljs.core._EQ_.call(null,inst_32109__$1,inst_32102);
var inst_32111 = cljs.core.keyword_identical_QMARK_.call(null,inst_32102,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32112 = (inst_32110) || (inst_32111);
var state_32141__$1 = (function (){var statearr_32155 = state_32141;
(statearr_32155[(10)] = inst_32109__$1);

return statearr_32155;
})();
if(cljs.core.truth_(inst_32112)){
var statearr_32156_32185 = state_32141__$1;
(statearr_32156_32185[(1)] = (8));

} else {
var statearr_32157_32186 = state_32141__$1;
(statearr_32157_32186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (14))){
var inst_32134 = (state_32141[(2)]);
var inst_32135 = cljs.core.async.close_BANG_.call(null,out);
var state_32141__$1 = (function (){var statearr_32159 = state_32141;
(statearr_32159[(13)] = inst_32134);

return statearr_32159;
})();
var statearr_32160_32187 = state_32141__$1;
(statearr_32160_32187[(2)] = inst_32135);

(statearr_32160_32187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (10))){
var inst_32124 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32161_32188 = state_32141__$1;
(statearr_32161_32188[(2)] = inst_32124);

(statearr_32161_32188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (8))){
var inst_32105 = (state_32141[(9)]);
var inst_32101 = (state_32141[(7)]);
var inst_32109 = (state_32141[(10)]);
var inst_32114 = inst_32101.push(inst_32105);
var tmp32158 = inst_32101;
var inst_32101__$1 = tmp32158;
var inst_32102 = inst_32109;
var state_32141__$1 = (function (){var statearr_32162 = state_32141;
(statearr_32162[(14)] = inst_32114);

(statearr_32162[(7)] = inst_32101__$1);

(statearr_32162[(8)] = inst_32102);

return statearr_32162;
})();
var statearr_32163_32189 = state_32141__$1;
(statearr_32163_32189[(2)] = null);

(statearr_32163_32189[(1)] = (2));


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
});})(c__29384__auto___32175,out))
;
return ((function (switch__29270__auto__,c__29384__auto___32175,out){
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_32141){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_32141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__29274__auto__ = e32168;
var statearr_32169_32190 = state_32141;
(statearr_32169_32190[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32191 = state_32141;
state_32141 = G__32191;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_32141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_32141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___32175,out))
})();
var state__29386__auto__ = (function (){var statearr_32170 = f__29385__auto__.call(null);
(statearr_32170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___32175);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___32175,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496994074367