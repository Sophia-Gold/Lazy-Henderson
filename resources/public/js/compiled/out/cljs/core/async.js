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
var args29301 = [];
var len__27777__auto___29307 = arguments.length;
var i__27778__auto___29308 = (0);
while(true){
if((i__27778__auto___29308 < len__27777__auto___29307)){
args29301.push((arguments[i__27778__auto___29308]));

var G__29309 = (i__27778__auto___29308 + (1));
i__27778__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var G__29303 = args29301.length;
switch (G__29303) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29301.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29304 = (function (f,blockable,meta29305){
this.f = f;
this.blockable = blockable;
this.meta29305 = meta29305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29306,meta29305__$1){
var self__ = this;
var _29306__$1 = this;
return (new cljs.core.async.t_cljs$core$async29304(self__.f,self__.blockable,meta29305__$1));
});

cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29306){
var self__ = this;
var _29306__$1 = this;
return self__.meta29305;
});

cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29305","meta29305",-268623104,null)], null);
});

cljs.core.async.t_cljs$core$async29304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29304";

cljs.core.async.t_cljs$core$async29304.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29304");
});

cljs.core.async.__GT_t_cljs$core$async29304 = (function cljs$core$async$__GT_t_cljs$core$async29304(f__$1,blockable__$1,meta29305){
return (new cljs.core.async.t_cljs$core$async29304(f__$1,blockable__$1,meta29305));
});

}

return (new cljs.core.async.t_cljs$core$async29304(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29313 = [];
var len__27777__auto___29316 = arguments.length;
var i__27778__auto___29317 = (0);
while(true){
if((i__27778__auto___29317 < len__27777__auto___29316)){
args29313.push((arguments[i__27778__auto___29317]));

var G__29318 = (i__27778__auto___29317 + (1));
i__27778__auto___29317 = G__29318;
continue;
} else {
}
break;
}

var G__29315 = args29313.length;
switch (G__29315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29313.length)].join('')));

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
var args29320 = [];
var len__27777__auto___29323 = arguments.length;
var i__27778__auto___29324 = (0);
while(true){
if((i__27778__auto___29324 < len__27777__auto___29323)){
args29320.push((arguments[i__27778__auto___29324]));

var G__29325 = (i__27778__auto___29324 + (1));
i__27778__auto___29324 = G__29325;
continue;
} else {
}
break;
}

var G__29322 = args29320.length;
switch (G__29322) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29320.length)].join('')));

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
var args29327 = [];
var len__27777__auto___29330 = arguments.length;
var i__27778__auto___29331 = (0);
while(true){
if((i__27778__auto___29331 < len__27777__auto___29330)){
args29327.push((arguments[i__27778__auto___29331]));

var G__29332 = (i__27778__auto___29331 + (1));
i__27778__auto___29331 = G__29332;
continue;
} else {
}
break;
}

var G__29329 = args29327.length;
switch (G__29329) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29327.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29334 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29334);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29334,ret){
return (function (){
return fn1.call(null,val_29334);
});})(val_29334,ret))
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
var args29335 = [];
var len__27777__auto___29338 = arguments.length;
var i__27778__auto___29339 = (0);
while(true){
if((i__27778__auto___29339 < len__27777__auto___29338)){
args29335.push((arguments[i__27778__auto___29339]));

var G__29340 = (i__27778__auto___29339 + (1));
i__27778__auto___29339 = G__29340;
continue;
} else {
}
break;
}

var G__29337 = args29335.length;
switch (G__29337) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29335.length)].join('')));

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
var n__27607__auto___29342 = n;
var x_29343 = (0);
while(true){
if((x_29343 < n__27607__auto___29342)){
(a[x_29343] = (0));

var G__29344 = (x_29343 + (1));
x_29343 = G__29344;
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

var G__29345 = (i + (1));
i = G__29345;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29349 = (function (alt_flag,flag,meta29350){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29350 = meta29350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29351,meta29350__$1){
var self__ = this;
var _29351__$1 = this;
return (new cljs.core.async.t_cljs$core$async29349(self__.alt_flag,self__.flag,meta29350__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29351){
var self__ = this;
var _29351__$1 = this;
return self__.meta29350;
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29350","meta29350",-675354350,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29349";

cljs.core.async.t_cljs$core$async29349.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29349");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29349 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29349(alt_flag__$1,flag__$1,meta29350){
return (new cljs.core.async.t_cljs$core$async29349(alt_flag__$1,flag__$1,meta29350));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29349(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29355 = (function (alt_handler,flag,cb,meta29356){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29356 = meta29356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29357,meta29356__$1){
var self__ = this;
var _29357__$1 = this;
return (new cljs.core.async.t_cljs$core$async29355(self__.alt_handler,self__.flag,self__.cb,meta29356__$1));
});

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29357){
var self__ = this;
var _29357__$1 = this;
return self__.meta29356;
});

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29356","meta29356",-110622906,null)], null);
});

cljs.core.async.t_cljs$core$async29355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29355";

cljs.core.async.t_cljs$core$async29355.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29355");
});

cljs.core.async.__GT_t_cljs$core$async29355 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29355(alt_handler__$1,flag__$1,cb__$1,meta29356){
return (new cljs.core.async.t_cljs$core$async29355(alt_handler__$1,flag__$1,cb__$1,meta29356));
});

}

return (new cljs.core.async.t_cljs$core$async29355(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29358_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29358_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29359_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26594__auto__ = wport;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29360 = (i + (1));
i = G__29360;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26594__auto__ = ret;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__26582__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26582__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26582__auto__;
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
var args__27784__auto__ = [];
var len__27777__auto___29366 = arguments.length;
var i__27778__auto___29367 = (0);
while(true){
if((i__27778__auto___29367 < len__27777__auto___29366)){
args__27784__auto__.push((arguments[i__27778__auto___29367]));

var G__29368 = (i__27778__auto___29367 + (1));
i__27778__auto___29367 = G__29368;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29363){
var map__29364 = p__29363;
var map__29364__$1 = ((((!((map__29364 == null)))?((((map__29364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);
var opts = map__29364__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29361){
var G__29362 = cljs.core.first.call(null,seq29361);
var seq29361__$1 = cljs.core.next.call(null,seq29361);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29362,seq29361__$1);
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
var args29369 = [];
var len__27777__auto___29419 = arguments.length;
var i__27778__auto___29420 = (0);
while(true){
if((i__27778__auto___29420 < len__27777__auto___29419)){
args29369.push((arguments[i__27778__auto___29420]));

var G__29421 = (i__27778__auto___29420 + (1));
i__27778__auto___29420 = G__29421;
continue;
} else {
}
break;
}

var G__29371 = args29369.length;
switch (G__29371) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29369.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29242__auto___29423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___29423){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___29423){
return (function (state_29395){
var state_val_29396 = (state_29395[(1)]);
if((state_val_29396 === (7))){
var inst_29391 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
var statearr_29397_29424 = state_29395__$1;
(statearr_29397_29424[(2)] = inst_29391);

(statearr_29397_29424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (1))){
var state_29395__$1 = state_29395;
var statearr_29398_29425 = state_29395__$1;
(statearr_29398_29425[(2)] = null);

(statearr_29398_29425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (4))){
var inst_29374 = (state_29395[(7)]);
var inst_29374__$1 = (state_29395[(2)]);
var inst_29375 = (inst_29374__$1 == null);
var state_29395__$1 = (function (){var statearr_29399 = state_29395;
(statearr_29399[(7)] = inst_29374__$1);

return statearr_29399;
})();
if(cljs.core.truth_(inst_29375)){
var statearr_29400_29426 = state_29395__$1;
(statearr_29400_29426[(1)] = (5));

} else {
var statearr_29401_29427 = state_29395__$1;
(statearr_29401_29427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (13))){
var state_29395__$1 = state_29395;
var statearr_29402_29428 = state_29395__$1;
(statearr_29402_29428[(2)] = null);

(statearr_29402_29428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (6))){
var inst_29374 = (state_29395[(7)]);
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29395__$1,(11),to,inst_29374);
} else {
if((state_val_29396 === (3))){
var inst_29393 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29395__$1,inst_29393);
} else {
if((state_val_29396 === (12))){
var state_29395__$1 = state_29395;
var statearr_29403_29429 = state_29395__$1;
(statearr_29403_29429[(2)] = null);

(statearr_29403_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (2))){
var state_29395__$1 = state_29395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29395__$1,(4),from);
} else {
if((state_val_29396 === (11))){
var inst_29384 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
if(cljs.core.truth_(inst_29384)){
var statearr_29404_29430 = state_29395__$1;
(statearr_29404_29430[(1)] = (12));

} else {
var statearr_29405_29431 = state_29395__$1;
(statearr_29405_29431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (9))){
var state_29395__$1 = state_29395;
var statearr_29406_29432 = state_29395__$1;
(statearr_29406_29432[(2)] = null);

(statearr_29406_29432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (5))){
var state_29395__$1 = state_29395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29407_29433 = state_29395__$1;
(statearr_29407_29433[(1)] = (8));

} else {
var statearr_29408_29434 = state_29395__$1;
(statearr_29408_29434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (14))){
var inst_29389 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
var statearr_29409_29435 = state_29395__$1;
(statearr_29409_29435[(2)] = inst_29389);

(statearr_29409_29435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (10))){
var inst_29381 = (state_29395[(2)]);
var state_29395__$1 = state_29395;
var statearr_29410_29436 = state_29395__$1;
(statearr_29410_29436[(2)] = inst_29381);

(statearr_29410_29436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29396 === (8))){
var inst_29378 = cljs.core.async.close_BANG_.call(null,to);
var state_29395__$1 = state_29395;
var statearr_29411_29437 = state_29395__$1;
(statearr_29411_29437[(2)] = inst_29378);

(statearr_29411_29437[(1)] = (10));


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
});})(c__29242__auto___29423))
;
return ((function (switch__29128__auto__,c__29242__auto___29423){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_29415 = [null,null,null,null,null,null,null,null];
(statearr_29415[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_29415[(1)] = (1));

return statearr_29415;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_29395){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29416){if((e29416 instanceof Object)){
var ex__29132__auto__ = e29416;
var statearr_29417_29438 = state_29395;
(statearr_29417_29438[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29439 = state_29395;
state_29395 = G__29439;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_29395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_29395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___29423))
})();
var state__29244__auto__ = (function (){var statearr_29418 = f__29243__auto__.call(null);
(statearr_29418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29423);

return statearr_29418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___29423))
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
return (function (p__29627){
var vec__29628 = p__29627;
var v = cljs.core.nth.call(null,vec__29628,(0),null);
var p = cljs.core.nth.call(null,vec__29628,(1),null);
var job = vec__29628;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29242__auto___29814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results){
return (function (state_29635){
var state_val_29636 = (state_29635[(1)]);
if((state_val_29636 === (1))){
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29635__$1,(2),res,v);
} else {
if((state_val_29636 === (2))){
var inst_29632 = (state_29635[(2)]);
var inst_29633 = cljs.core.async.close_BANG_.call(null,res);
var state_29635__$1 = (function (){var statearr_29637 = state_29635;
(statearr_29637[(7)] = inst_29632);

return statearr_29637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29635__$1,inst_29633);
} else {
return null;
}
}
});})(c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results))
;
return ((function (switch__29128__auto__,c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_29641 = [null,null,null,null,null,null,null,null];
(statearr_29641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_29641[(1)] = (1));

return statearr_29641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_29635){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29642){if((e29642 instanceof Object)){
var ex__29132__auto__ = e29642;
var statearr_29643_29815 = state_29635;
(statearr_29643_29815[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29816 = state_29635;
state_29635 = G__29816;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_29635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_29635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results))
})();
var state__29244__auto__ = (function (){var statearr_29644 = f__29243__auto__.call(null);
(statearr_29644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29814);

return statearr_29644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___29814,res,vec__29628,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29645){
var vec__29646 = p__29645;
var v = cljs.core.nth.call(null,vec__29646,(0),null);
var p = cljs.core.nth.call(null,vec__29646,(1),null);
var job = vec__29646;
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
var n__27607__auto___29817 = n;
var __29818 = (0);
while(true){
if((__29818 < n__27607__auto___29817)){
var G__29649_29819 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29649_29819) {
case "compute":
var c__29242__auto___29821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29818,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (__29818,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function (state_29662){
var state_val_29663 = (state_29662[(1)]);
if((state_val_29663 === (1))){
var state_29662__$1 = state_29662;
var statearr_29664_29822 = state_29662__$1;
(statearr_29664_29822[(2)] = null);

(statearr_29664_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (2))){
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29662__$1,(4),jobs);
} else {
if((state_val_29663 === (3))){
var inst_29660 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29662__$1,inst_29660);
} else {
if((state_val_29663 === (4))){
var inst_29652 = (state_29662[(2)]);
var inst_29653 = process.call(null,inst_29652);
var state_29662__$1 = state_29662;
if(cljs.core.truth_(inst_29653)){
var statearr_29665_29823 = state_29662__$1;
(statearr_29665_29823[(1)] = (5));

} else {
var statearr_29666_29824 = state_29662__$1;
(statearr_29666_29824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (5))){
var state_29662__$1 = state_29662;
var statearr_29667_29825 = state_29662__$1;
(statearr_29667_29825[(2)] = null);

(statearr_29667_29825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (6))){
var state_29662__$1 = state_29662;
var statearr_29668_29826 = state_29662__$1;
(statearr_29668_29826[(2)] = null);

(statearr_29668_29826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (7))){
var inst_29658 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29669_29827 = state_29662__$1;
(statearr_29669_29827[(2)] = inst_29658);

(statearr_29669_29827[(1)] = (3));


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
});})(__29818,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
;
return ((function (__29818,switch__29128__auto__,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_29673 = [null,null,null,null,null,null,null];
(statearr_29673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_29673[(1)] = (1));

return statearr_29673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_29662){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29674){if((e29674 instanceof Object)){
var ex__29132__auto__ = e29674;
var statearr_29675_29828 = state_29662;
(statearr_29675_29828[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29829 = state_29662;
state_29662 = G__29829;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_29662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_29662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(__29818,switch__29128__auto__,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
})();
var state__29244__auto__ = (function (){var statearr_29676 = f__29243__auto__.call(null);
(statearr_29676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29821);

return statearr_29676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(__29818,c__29242__auto___29821,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
);


break;
case "async":
var c__29242__auto___29830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29818,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (__29818,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function (state_29689){
var state_val_29690 = (state_29689[(1)]);
if((state_val_29690 === (1))){
var state_29689__$1 = state_29689;
var statearr_29691_29831 = state_29689__$1;
(statearr_29691_29831[(2)] = null);

(statearr_29691_29831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (2))){
var state_29689__$1 = state_29689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29689__$1,(4),jobs);
} else {
if((state_val_29690 === (3))){
var inst_29687 = (state_29689[(2)]);
var state_29689__$1 = state_29689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29689__$1,inst_29687);
} else {
if((state_val_29690 === (4))){
var inst_29679 = (state_29689[(2)]);
var inst_29680 = async.call(null,inst_29679);
var state_29689__$1 = state_29689;
if(cljs.core.truth_(inst_29680)){
var statearr_29692_29832 = state_29689__$1;
(statearr_29692_29832[(1)] = (5));

} else {
var statearr_29693_29833 = state_29689__$1;
(statearr_29693_29833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (5))){
var state_29689__$1 = state_29689;
var statearr_29694_29834 = state_29689__$1;
(statearr_29694_29834[(2)] = null);

(statearr_29694_29834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (6))){
var state_29689__$1 = state_29689;
var statearr_29695_29835 = state_29689__$1;
(statearr_29695_29835[(2)] = null);

(statearr_29695_29835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29690 === (7))){
var inst_29685 = (state_29689[(2)]);
var state_29689__$1 = state_29689;
var statearr_29696_29836 = state_29689__$1;
(statearr_29696_29836[(2)] = inst_29685);

(statearr_29696_29836[(1)] = (3));


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
});})(__29818,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
;
return ((function (__29818,switch__29128__auto__,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_29700 = [null,null,null,null,null,null,null];
(statearr_29700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_29700[(1)] = (1));

return statearr_29700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_29689){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29701){if((e29701 instanceof Object)){
var ex__29132__auto__ = e29701;
var statearr_29702_29837 = state_29689;
(statearr_29702_29837[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29838 = state_29689;
state_29689 = G__29838;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_29689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_29689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(__29818,switch__29128__auto__,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
})();
var state__29244__auto__ = (function (){var statearr_29703 = f__29243__auto__.call(null);
(statearr_29703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29830);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(__29818,c__29242__auto___29830,G__29649_29819,n__27607__auto___29817,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29839 = (__29818 + (1));
__29818 = G__29839;
continue;
} else {
}
break;
}

var c__29242__auto___29840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___29840,jobs,results,process,async){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___29840,jobs,results,process,async){
return (function (state_29725){
var state_val_29726 = (state_29725[(1)]);
if((state_val_29726 === (1))){
var state_29725__$1 = state_29725;
var statearr_29727_29841 = state_29725__$1;
(statearr_29727_29841[(2)] = null);

(statearr_29727_29841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (2))){
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29725__$1,(4),from);
} else {
if((state_val_29726 === (3))){
var inst_29723 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29725__$1,inst_29723);
} else {
if((state_val_29726 === (4))){
var inst_29706 = (state_29725[(7)]);
var inst_29706__$1 = (state_29725[(2)]);
var inst_29707 = (inst_29706__$1 == null);
var state_29725__$1 = (function (){var statearr_29728 = state_29725;
(statearr_29728[(7)] = inst_29706__$1);

return statearr_29728;
})();
if(cljs.core.truth_(inst_29707)){
var statearr_29729_29842 = state_29725__$1;
(statearr_29729_29842[(1)] = (5));

} else {
var statearr_29730_29843 = state_29725__$1;
(statearr_29730_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (5))){
var inst_29709 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29725__$1 = state_29725;
var statearr_29731_29844 = state_29725__$1;
(statearr_29731_29844[(2)] = inst_29709);

(statearr_29731_29844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (6))){
var inst_29706 = (state_29725[(7)]);
var inst_29711 = (state_29725[(8)]);
var inst_29711__$1 = cljs.core.async.chan.call(null,(1));
var inst_29712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29713 = [inst_29706,inst_29711__$1];
var inst_29714 = (new cljs.core.PersistentVector(null,2,(5),inst_29712,inst_29713,null));
var state_29725__$1 = (function (){var statearr_29732 = state_29725;
(statearr_29732[(8)] = inst_29711__$1);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(8),jobs,inst_29714);
} else {
if((state_val_29726 === (7))){
var inst_29721 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29733_29845 = state_29725__$1;
(statearr_29733_29845[(2)] = inst_29721);

(statearr_29733_29845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (8))){
var inst_29711 = (state_29725[(8)]);
var inst_29716 = (state_29725[(2)]);
var state_29725__$1 = (function (){var statearr_29734 = state_29725;
(statearr_29734[(9)] = inst_29716);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(9),results,inst_29711);
} else {
if((state_val_29726 === (9))){
var inst_29718 = (state_29725[(2)]);
var state_29725__$1 = (function (){var statearr_29735 = state_29725;
(statearr_29735[(10)] = inst_29718);

return statearr_29735;
})();
var statearr_29736_29846 = state_29725__$1;
(statearr_29736_29846[(2)] = null);

(statearr_29736_29846[(1)] = (2));


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
});})(c__29242__auto___29840,jobs,results,process,async))
;
return ((function (switch__29128__auto__,c__29242__auto___29840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_29740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_29740[(1)] = (1));

return statearr_29740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_29725){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object)){
var ex__29132__auto__ = e29741;
var statearr_29742_29847 = state_29725;
(statearr_29742_29847[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29848 = state_29725;
state_29725 = G__29848;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_29725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_29725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___29840,jobs,results,process,async))
})();
var state__29244__auto__ = (function (){var statearr_29743 = f__29243__auto__.call(null);
(statearr_29743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29840);

return statearr_29743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___29840,jobs,results,process,async))
);


var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__,jobs,results,process,async){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__,jobs,results,process,async){
return (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (7))){
var inst_29777 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29783_29849 = state_29781__$1;
(statearr_29783_29849[(2)] = inst_29777);

(statearr_29783_29849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (20))){
var state_29781__$1 = state_29781;
var statearr_29784_29850 = state_29781__$1;
(statearr_29784_29850[(2)] = null);

(statearr_29784_29850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
var statearr_29785_29851 = state_29781__$1;
(statearr_29785_29851[(2)] = null);

(statearr_29785_29851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (4))){
var inst_29746 = (state_29781[(7)]);
var inst_29746__$1 = (state_29781[(2)]);
var inst_29747 = (inst_29746__$1 == null);
var state_29781__$1 = (function (){var statearr_29786 = state_29781;
(statearr_29786[(7)] = inst_29746__$1);

return statearr_29786;
})();
if(cljs.core.truth_(inst_29747)){
var statearr_29787_29852 = state_29781__$1;
(statearr_29787_29852[(1)] = (5));

} else {
var statearr_29788_29853 = state_29781__$1;
(statearr_29788_29853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (15))){
var inst_29759 = (state_29781[(8)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29781__$1,(18),to,inst_29759);
} else {
if((state_val_29782 === (21))){
var inst_29772 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29789_29854 = state_29781__$1;
(statearr_29789_29854[(2)] = inst_29772);

(statearr_29789_29854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (13))){
var inst_29774 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29790 = state_29781;
(statearr_29790[(9)] = inst_29774);

return statearr_29790;
})();
var statearr_29791_29855 = state_29781__$1;
(statearr_29791_29855[(2)] = null);

(statearr_29791_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (6))){
var inst_29746 = (state_29781[(7)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29781__$1,(11),inst_29746);
} else {
if((state_val_29782 === (17))){
var inst_29767 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
if(cljs.core.truth_(inst_29767)){
var statearr_29792_29856 = state_29781__$1;
(statearr_29792_29856[(1)] = (19));

} else {
var statearr_29793_29857 = state_29781__$1;
(statearr_29793_29857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (3))){
var inst_29779 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29781__$1,inst_29779);
} else {
if((state_val_29782 === (12))){
var inst_29756 = (state_29781[(10)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29781__$1,(14),inst_29756);
} else {
if((state_val_29782 === (2))){
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29781__$1,(4),results);
} else {
if((state_val_29782 === (19))){
var state_29781__$1 = state_29781;
var statearr_29794_29858 = state_29781__$1;
(statearr_29794_29858[(2)] = null);

(statearr_29794_29858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (11))){
var inst_29756 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29795 = state_29781;
(statearr_29795[(10)] = inst_29756);

return statearr_29795;
})();
var statearr_29796_29859 = state_29781__$1;
(statearr_29796_29859[(2)] = null);

(statearr_29796_29859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (9))){
var state_29781__$1 = state_29781;
var statearr_29797_29860 = state_29781__$1;
(statearr_29797_29860[(2)] = null);

(statearr_29797_29860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (5))){
var state_29781__$1 = state_29781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29798_29861 = state_29781__$1;
(statearr_29798_29861[(1)] = (8));

} else {
var statearr_29799_29862 = state_29781__$1;
(statearr_29799_29862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (14))){
var inst_29759 = (state_29781[(8)]);
var inst_29761 = (state_29781[(11)]);
var inst_29759__$1 = (state_29781[(2)]);
var inst_29760 = (inst_29759__$1 == null);
var inst_29761__$1 = cljs.core.not.call(null,inst_29760);
var state_29781__$1 = (function (){var statearr_29800 = state_29781;
(statearr_29800[(8)] = inst_29759__$1);

(statearr_29800[(11)] = inst_29761__$1);

return statearr_29800;
})();
if(inst_29761__$1){
var statearr_29801_29863 = state_29781__$1;
(statearr_29801_29863[(1)] = (15));

} else {
var statearr_29802_29864 = state_29781__$1;
(statearr_29802_29864[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (16))){
var inst_29761 = (state_29781[(11)]);
var state_29781__$1 = state_29781;
var statearr_29803_29865 = state_29781__$1;
(statearr_29803_29865[(2)] = inst_29761);

(statearr_29803_29865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (10))){
var inst_29753 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29804_29866 = state_29781__$1;
(statearr_29804_29866[(2)] = inst_29753);

(statearr_29804_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (18))){
var inst_29764 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29805_29867 = state_29781__$1;
(statearr_29805_29867[(2)] = inst_29764);

(statearr_29805_29867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (8))){
var inst_29750 = cljs.core.async.close_BANG_.call(null,to);
var state_29781__$1 = state_29781;
var statearr_29806_29868 = state_29781__$1;
(statearr_29806_29868[(2)] = inst_29750);

(statearr_29806_29868[(1)] = (10));


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
});})(c__29242__auto__,jobs,results,process,async))
;
return ((function (switch__29128__auto__,c__29242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_29810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_29810[(1)] = (1));

return statearr_29810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_29781){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29811){if((e29811 instanceof Object)){
var ex__29132__auto__ = e29811;
var statearr_29812_29869 = state_29781;
(statearr_29812_29869[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29781;
state_29781 = G__29870;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__,jobs,results,process,async))
})();
var state__29244__auto__ = (function (){var statearr_29813 = f__29243__auto__.call(null);
(statearr_29813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_29813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__,jobs,results,process,async))
);

return c__29242__auto__;
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
var args29871 = [];
var len__27777__auto___29874 = arguments.length;
var i__27778__auto___29875 = (0);
while(true){
if((i__27778__auto___29875 < len__27777__auto___29874)){
args29871.push((arguments[i__27778__auto___29875]));

var G__29876 = (i__27778__auto___29875 + (1));
i__27778__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29871.length)].join('')));

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
var args29878 = [];
var len__27777__auto___29881 = arguments.length;
var i__27778__auto___29882 = (0);
while(true){
if((i__27778__auto___29882 < len__27777__auto___29881)){
args29878.push((arguments[i__27778__auto___29882]));

var G__29883 = (i__27778__auto___29882 + (1));
i__27778__auto___29882 = G__29883;
continue;
} else {
}
break;
}

var G__29880 = args29878.length;
switch (G__29880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29878.length)].join('')));

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
var args29885 = [];
var len__27777__auto___29938 = arguments.length;
var i__27778__auto___29939 = (0);
while(true){
if((i__27778__auto___29939 < len__27777__auto___29938)){
args29885.push((arguments[i__27778__auto___29939]));

var G__29940 = (i__27778__auto___29939 + (1));
i__27778__auto___29939 = G__29940;
continue;
} else {
}
break;
}

var G__29887 = args29885.length;
switch (G__29887) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29885.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29242__auto___29942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___29942,tc,fc){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___29942,tc,fc){
return (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (7))){
var inst_29909 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29915_29943 = state_29913__$1;
(statearr_29915_29943[(2)] = inst_29909);

(statearr_29915_29943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var state_29913__$1 = state_29913;
var statearr_29916_29944 = state_29913__$1;
(statearr_29916_29944[(2)] = null);

(statearr_29916_29944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29890 = (state_29913[(7)]);
var inst_29890__$1 = (state_29913[(2)]);
var inst_29891 = (inst_29890__$1 == null);
var state_29913__$1 = (function (){var statearr_29917 = state_29913;
(statearr_29917[(7)] = inst_29890__$1);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29891)){
var statearr_29918_29945 = state_29913__$1;
(statearr_29918_29945[(1)] = (5));

} else {
var statearr_29919_29946 = state_29913__$1;
(statearr_29919_29946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (13))){
var state_29913__$1 = state_29913;
var statearr_29920_29947 = state_29913__$1;
(statearr_29920_29947[(2)] = null);

(statearr_29920_29947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29890 = (state_29913[(7)]);
var inst_29896 = p.call(null,inst_29890);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29896)){
var statearr_29921_29948 = state_29913__$1;
(statearr_29921_29948[(1)] = (9));

} else {
var statearr_29922_29949 = state_29913__$1;
(statearr_29922_29949[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (3))){
var inst_29911 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29913__$1,inst_29911);
} else {
if((state_val_29914 === (12))){
var state_29913__$1 = state_29913;
var statearr_29923_29950 = state_29913__$1;
(statearr_29923_29950[(2)] = null);

(statearr_29923_29950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(4),ch);
} else {
if((state_val_29914 === (11))){
var inst_29890 = (state_29913[(7)]);
var inst_29900 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29913__$1,(8),inst_29900,inst_29890);
} else {
if((state_val_29914 === (9))){
var state_29913__$1 = state_29913;
var statearr_29924_29951 = state_29913__$1;
(statearr_29924_29951[(2)] = tc);

(statearr_29924_29951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (5))){
var inst_29893 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29894 = cljs.core.async.close_BANG_.call(null,fc);
var state_29913__$1 = (function (){var statearr_29925 = state_29913;
(statearr_29925[(8)] = inst_29893);

return statearr_29925;
})();
var statearr_29926_29952 = state_29913__$1;
(statearr_29926_29952[(2)] = inst_29894);

(statearr_29926_29952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (14))){
var inst_29907 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29927_29953 = state_29913__$1;
(statearr_29927_29953[(2)] = inst_29907);

(statearr_29927_29953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (10))){
var state_29913__$1 = state_29913;
var statearr_29928_29954 = state_29913__$1;
(statearr_29928_29954[(2)] = fc);

(statearr_29928_29954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29902 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29902)){
var statearr_29929_29955 = state_29913__$1;
(statearr_29929_29955[(1)] = (12));

} else {
var statearr_29930_29956 = state_29913__$1;
(statearr_29930_29956[(1)] = (13));

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
});})(c__29242__auto___29942,tc,fc))
;
return ((function (switch__29128__auto__,c__29242__auto___29942,tc,fc){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_29934 = [null,null,null,null,null,null,null,null,null];
(statearr_29934[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_29934[(1)] = (1));

return statearr_29934;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_29913){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_29913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e29935){if((e29935 instanceof Object)){
var ex__29132__auto__ = e29935;
var statearr_29936_29957 = state_29913;
(statearr_29936_29957[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29913;
state_29913 = G__29958;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___29942,tc,fc))
})();
var state__29244__auto__ = (function (){var statearr_29937 = f__29243__auto__.call(null);
(statearr_29937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___29942);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___29942,tc,fc))
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
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__){
return (function (state_30022){
var state_val_30023 = (state_30022[(1)]);
if((state_val_30023 === (7))){
var inst_30018 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30024_30045 = state_30022__$1;
(statearr_30024_30045[(2)] = inst_30018);

(statearr_30024_30045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (1))){
var inst_30002 = init;
var state_30022__$1 = (function (){var statearr_30025 = state_30022;
(statearr_30025[(7)] = inst_30002);

return statearr_30025;
})();
var statearr_30026_30046 = state_30022__$1;
(statearr_30026_30046[(2)] = null);

(statearr_30026_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (4))){
var inst_30005 = (state_30022[(8)]);
var inst_30005__$1 = (state_30022[(2)]);
var inst_30006 = (inst_30005__$1 == null);
var state_30022__$1 = (function (){var statearr_30027 = state_30022;
(statearr_30027[(8)] = inst_30005__$1);

return statearr_30027;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30028_30047 = state_30022__$1;
(statearr_30028_30047[(1)] = (5));

} else {
var statearr_30029_30048 = state_30022__$1;
(statearr_30029_30048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (6))){
var inst_30002 = (state_30022[(7)]);
var inst_30005 = (state_30022[(8)]);
var inst_30009 = (state_30022[(9)]);
var inst_30009__$1 = f.call(null,inst_30002,inst_30005);
var inst_30010 = cljs.core.reduced_QMARK_.call(null,inst_30009__$1);
var state_30022__$1 = (function (){var statearr_30030 = state_30022;
(statearr_30030[(9)] = inst_30009__$1);

return statearr_30030;
})();
if(inst_30010){
var statearr_30031_30049 = state_30022__$1;
(statearr_30031_30049[(1)] = (8));

} else {
var statearr_30032_30050 = state_30022__$1;
(statearr_30032_30050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (3))){
var inst_30020 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30022__$1,inst_30020);
} else {
if((state_val_30023 === (2))){
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30022__$1,(4),ch);
} else {
if((state_val_30023 === (9))){
var inst_30009 = (state_30022[(9)]);
var inst_30002 = inst_30009;
var state_30022__$1 = (function (){var statearr_30033 = state_30022;
(statearr_30033[(7)] = inst_30002);

return statearr_30033;
})();
var statearr_30034_30051 = state_30022__$1;
(statearr_30034_30051[(2)] = null);

(statearr_30034_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (5))){
var inst_30002 = (state_30022[(7)]);
var state_30022__$1 = state_30022;
var statearr_30035_30052 = state_30022__$1;
(statearr_30035_30052[(2)] = inst_30002);

(statearr_30035_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (10))){
var inst_30016 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30036_30053 = state_30022__$1;
(statearr_30036_30053[(2)] = inst_30016);

(statearr_30036_30053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (8))){
var inst_30009 = (state_30022[(9)]);
var inst_30012 = cljs.core.deref.call(null,inst_30009);
var state_30022__$1 = state_30022;
var statearr_30037_30054 = state_30022__$1;
(statearr_30037_30054[(2)] = inst_30012);

(statearr_30037_30054[(1)] = (10));


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
});})(c__29242__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29129__auto____0 = (function (){
var statearr_30041 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30041[(0)] = cljs$core$async$reduce_$_state_machine__29129__auto__);

(statearr_30041[(1)] = (1));

return statearr_30041;
});
var cljs$core$async$reduce_$_state_machine__29129__auto____1 = (function (state_30022){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_30022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e30042){if((e30042 instanceof Object)){
var ex__29132__auto__ = e30042;
var statearr_30043_30055 = state_30022;
(statearr_30043_30055[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30056 = state_30022;
state_30022 = G__30056;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29129__auto__ = function(state_30022){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29129__auto____1.call(this,state_30022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29129__auto____0;
cljs$core$async$reduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29129__auto____1;
return cljs$core$async$reduce_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__))
})();
var state__29244__auto__ = (function (){var statearr_30044 = f__29243__auto__.call(null);
(statearr_30044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__))
);

return c__29242__auto__;
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
var args30057 = [];
var len__27777__auto___30109 = arguments.length;
var i__27778__auto___30110 = (0);
while(true){
if((i__27778__auto___30110 < len__27777__auto___30109)){
args30057.push((arguments[i__27778__auto___30110]));

var G__30111 = (i__27778__auto___30110 + (1));
i__27778__auto___30110 = G__30111;
continue;
} else {
}
break;
}

var G__30059 = args30057.length;
switch (G__30059) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30057.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__){
return (function (state_30084){
var state_val_30085 = (state_30084[(1)]);
if((state_val_30085 === (7))){
var inst_30066 = (state_30084[(2)]);
var state_30084__$1 = state_30084;
var statearr_30086_30113 = state_30084__$1;
(statearr_30086_30113[(2)] = inst_30066);

(statearr_30086_30113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (1))){
var inst_30060 = cljs.core.seq.call(null,coll);
var inst_30061 = inst_30060;
var state_30084__$1 = (function (){var statearr_30087 = state_30084;
(statearr_30087[(7)] = inst_30061);

return statearr_30087;
})();
var statearr_30088_30114 = state_30084__$1;
(statearr_30088_30114[(2)] = null);

(statearr_30088_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (4))){
var inst_30061 = (state_30084[(7)]);
var inst_30064 = cljs.core.first.call(null,inst_30061);
var state_30084__$1 = state_30084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30084__$1,(7),ch,inst_30064);
} else {
if((state_val_30085 === (13))){
var inst_30078 = (state_30084[(2)]);
var state_30084__$1 = state_30084;
var statearr_30089_30115 = state_30084__$1;
(statearr_30089_30115[(2)] = inst_30078);

(statearr_30089_30115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (6))){
var inst_30069 = (state_30084[(2)]);
var state_30084__$1 = state_30084;
if(cljs.core.truth_(inst_30069)){
var statearr_30090_30116 = state_30084__$1;
(statearr_30090_30116[(1)] = (8));

} else {
var statearr_30091_30117 = state_30084__$1;
(statearr_30091_30117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (3))){
var inst_30082 = (state_30084[(2)]);
var state_30084__$1 = state_30084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30084__$1,inst_30082);
} else {
if((state_val_30085 === (12))){
var state_30084__$1 = state_30084;
var statearr_30092_30118 = state_30084__$1;
(statearr_30092_30118[(2)] = null);

(statearr_30092_30118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (2))){
var inst_30061 = (state_30084[(7)]);
var state_30084__$1 = state_30084;
if(cljs.core.truth_(inst_30061)){
var statearr_30093_30119 = state_30084__$1;
(statearr_30093_30119[(1)] = (4));

} else {
var statearr_30094_30120 = state_30084__$1;
(statearr_30094_30120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (11))){
var inst_30075 = cljs.core.async.close_BANG_.call(null,ch);
var state_30084__$1 = state_30084;
var statearr_30095_30121 = state_30084__$1;
(statearr_30095_30121[(2)] = inst_30075);

(statearr_30095_30121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (9))){
var state_30084__$1 = state_30084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30096_30122 = state_30084__$1;
(statearr_30096_30122[(1)] = (11));

} else {
var statearr_30097_30123 = state_30084__$1;
(statearr_30097_30123[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (5))){
var inst_30061 = (state_30084[(7)]);
var state_30084__$1 = state_30084;
var statearr_30098_30124 = state_30084__$1;
(statearr_30098_30124[(2)] = inst_30061);

(statearr_30098_30124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (10))){
var inst_30080 = (state_30084[(2)]);
var state_30084__$1 = state_30084;
var statearr_30099_30125 = state_30084__$1;
(statearr_30099_30125[(2)] = inst_30080);

(statearr_30099_30125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30085 === (8))){
var inst_30061 = (state_30084[(7)]);
var inst_30071 = cljs.core.next.call(null,inst_30061);
var inst_30061__$1 = inst_30071;
var state_30084__$1 = (function (){var statearr_30100 = state_30084;
(statearr_30100[(7)] = inst_30061__$1);

return statearr_30100;
})();
var statearr_30101_30126 = state_30084__$1;
(statearr_30101_30126[(2)] = null);

(statearr_30101_30126[(1)] = (2));


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
});})(c__29242__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_30105 = [null,null,null,null,null,null,null,null];
(statearr_30105[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_30105[(1)] = (1));

return statearr_30105;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_30084){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_30084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e30106){if((e30106 instanceof Object)){
var ex__29132__auto__ = e30106;
var statearr_30107_30127 = state_30084;
(statearr_30107_30127[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30128 = state_30084;
state_30084 = G__30128;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_30084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_30084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__))
})();
var state__29244__auto__ = (function (){var statearr_30108 = f__29243__auto__.call(null);
(statearr_30108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__))
);

return c__29242__auto__;
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
var x__27307__auto__ = (((_ == null))?null:_);
var m__27308__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,_);
} else {
var m__27308__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,_);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27308__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,ch);
} else {
var m__27308__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,ch);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m);
} else {
var m__27308__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30354 = (function (mult,ch,cs,meta30355){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30355 = meta30355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30356,meta30355__$1){
var self__ = this;
var _30356__$1 = this;
return (new cljs.core.async.t_cljs$core$async30354(self__.mult,self__.ch,self__.cs,meta30355__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30356){
var self__ = this;
var _30356__$1 = this;
return self__.meta30355;
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30355","meta30355",2012759973,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30354";

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async30354");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30354 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30354(mult__$1,ch__$1,cs__$1,meta30355){
return (new cljs.core.async.t_cljs$core$async30354(mult__$1,ch__$1,cs__$1,meta30355));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30354(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29242__auto___30579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___30579,cs,m,dchan,dctr,done){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___30579,cs,m,dchan,dctr,done){
return (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (7))){
var inst_30487 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30493_30580 = state_30491__$1;
(statearr_30493_30580[(2)] = inst_30487);

(statearr_30493_30580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (20))){
var inst_30390 = (state_30491[(7)]);
var inst_30402 = cljs.core.first.call(null,inst_30390);
var inst_30403 = cljs.core.nth.call(null,inst_30402,(0),null);
var inst_30404 = cljs.core.nth.call(null,inst_30402,(1),null);
var state_30491__$1 = (function (){var statearr_30494 = state_30491;
(statearr_30494[(8)] = inst_30403);

return statearr_30494;
})();
if(cljs.core.truth_(inst_30404)){
var statearr_30495_30581 = state_30491__$1;
(statearr_30495_30581[(1)] = (22));

} else {
var statearr_30496_30582 = state_30491__$1;
(statearr_30496_30582[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (27))){
var inst_30359 = (state_30491[(9)]);
var inst_30434 = (state_30491[(10)]);
var inst_30432 = (state_30491[(11)]);
var inst_30439 = (state_30491[(12)]);
var inst_30439__$1 = cljs.core._nth.call(null,inst_30432,inst_30434);
var inst_30440 = cljs.core.async.put_BANG_.call(null,inst_30439__$1,inst_30359,done);
var state_30491__$1 = (function (){var statearr_30497 = state_30491;
(statearr_30497[(12)] = inst_30439__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30440)){
var statearr_30498_30583 = state_30491__$1;
(statearr_30498_30583[(1)] = (30));

} else {
var statearr_30499_30584 = state_30491__$1;
(statearr_30499_30584[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (1))){
var state_30491__$1 = state_30491;
var statearr_30500_30585 = state_30491__$1;
(statearr_30500_30585[(2)] = null);

(statearr_30500_30585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (24))){
var inst_30390 = (state_30491[(7)]);
var inst_30409 = (state_30491[(2)]);
var inst_30410 = cljs.core.next.call(null,inst_30390);
var inst_30368 = inst_30410;
var inst_30369 = null;
var inst_30370 = (0);
var inst_30371 = (0);
var state_30491__$1 = (function (){var statearr_30501 = state_30491;
(statearr_30501[(13)] = inst_30409);

(statearr_30501[(14)] = inst_30368);

(statearr_30501[(15)] = inst_30370);

(statearr_30501[(16)] = inst_30369);

(statearr_30501[(17)] = inst_30371);

return statearr_30501;
})();
var statearr_30502_30586 = state_30491__$1;
(statearr_30502_30586[(2)] = null);

(statearr_30502_30586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (39))){
var state_30491__$1 = state_30491;
var statearr_30506_30587 = state_30491__$1;
(statearr_30506_30587[(2)] = null);

(statearr_30506_30587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (4))){
var inst_30359 = (state_30491[(9)]);
var inst_30359__$1 = (state_30491[(2)]);
var inst_30360 = (inst_30359__$1 == null);
var state_30491__$1 = (function (){var statearr_30507 = state_30491;
(statearr_30507[(9)] = inst_30359__$1);

return statearr_30507;
})();
if(cljs.core.truth_(inst_30360)){
var statearr_30508_30588 = state_30491__$1;
(statearr_30508_30588[(1)] = (5));

} else {
var statearr_30509_30589 = state_30491__$1;
(statearr_30509_30589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (15))){
var inst_30368 = (state_30491[(14)]);
var inst_30370 = (state_30491[(15)]);
var inst_30369 = (state_30491[(16)]);
var inst_30371 = (state_30491[(17)]);
var inst_30386 = (state_30491[(2)]);
var inst_30387 = (inst_30371 + (1));
var tmp30503 = inst_30368;
var tmp30504 = inst_30370;
var tmp30505 = inst_30369;
var inst_30368__$1 = tmp30503;
var inst_30369__$1 = tmp30505;
var inst_30370__$1 = tmp30504;
var inst_30371__$1 = inst_30387;
var state_30491__$1 = (function (){var statearr_30510 = state_30491;
(statearr_30510[(14)] = inst_30368__$1);

(statearr_30510[(15)] = inst_30370__$1);

(statearr_30510[(16)] = inst_30369__$1);

(statearr_30510[(18)] = inst_30386);

(statearr_30510[(17)] = inst_30371__$1);

return statearr_30510;
})();
var statearr_30511_30590 = state_30491__$1;
(statearr_30511_30590[(2)] = null);

(statearr_30511_30590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (21))){
var inst_30413 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30515_30591 = state_30491__$1;
(statearr_30515_30591[(2)] = inst_30413);

(statearr_30515_30591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (31))){
var inst_30439 = (state_30491[(12)]);
var inst_30443 = done.call(null,null);
var inst_30444 = cljs.core.async.untap_STAR_.call(null,m,inst_30439);
var state_30491__$1 = (function (){var statearr_30516 = state_30491;
(statearr_30516[(19)] = inst_30443);

return statearr_30516;
})();
var statearr_30517_30592 = state_30491__$1;
(statearr_30517_30592[(2)] = inst_30444);

(statearr_30517_30592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (32))){
var inst_30434 = (state_30491[(10)]);
var inst_30431 = (state_30491[(20)]);
var inst_30432 = (state_30491[(11)]);
var inst_30433 = (state_30491[(21)]);
var inst_30446 = (state_30491[(2)]);
var inst_30447 = (inst_30434 + (1));
var tmp30512 = inst_30431;
var tmp30513 = inst_30432;
var tmp30514 = inst_30433;
var inst_30431__$1 = tmp30512;
var inst_30432__$1 = tmp30513;
var inst_30433__$1 = tmp30514;
var inst_30434__$1 = inst_30447;
var state_30491__$1 = (function (){var statearr_30518 = state_30491;
(statearr_30518[(10)] = inst_30434__$1);

(statearr_30518[(22)] = inst_30446);

(statearr_30518[(20)] = inst_30431__$1);

(statearr_30518[(11)] = inst_30432__$1);

(statearr_30518[(21)] = inst_30433__$1);

return statearr_30518;
})();
var statearr_30519_30593 = state_30491__$1;
(statearr_30519_30593[(2)] = null);

(statearr_30519_30593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (40))){
var inst_30459 = (state_30491[(23)]);
var inst_30463 = done.call(null,null);
var inst_30464 = cljs.core.async.untap_STAR_.call(null,m,inst_30459);
var state_30491__$1 = (function (){var statearr_30520 = state_30491;
(statearr_30520[(24)] = inst_30463);

return statearr_30520;
})();
var statearr_30521_30594 = state_30491__$1;
(statearr_30521_30594[(2)] = inst_30464);

(statearr_30521_30594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (33))){
var inst_30450 = (state_30491[(25)]);
var inst_30452 = cljs.core.chunked_seq_QMARK_.call(null,inst_30450);
var state_30491__$1 = state_30491;
if(inst_30452){
var statearr_30522_30595 = state_30491__$1;
(statearr_30522_30595[(1)] = (36));

} else {
var statearr_30523_30596 = state_30491__$1;
(statearr_30523_30596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (13))){
var inst_30380 = (state_30491[(26)]);
var inst_30383 = cljs.core.async.close_BANG_.call(null,inst_30380);
var state_30491__$1 = state_30491;
var statearr_30524_30597 = state_30491__$1;
(statearr_30524_30597[(2)] = inst_30383);

(statearr_30524_30597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (22))){
var inst_30403 = (state_30491[(8)]);
var inst_30406 = cljs.core.async.close_BANG_.call(null,inst_30403);
var state_30491__$1 = state_30491;
var statearr_30525_30598 = state_30491__$1;
(statearr_30525_30598[(2)] = inst_30406);

(statearr_30525_30598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (36))){
var inst_30450 = (state_30491[(25)]);
var inst_30454 = cljs.core.chunk_first.call(null,inst_30450);
var inst_30455 = cljs.core.chunk_rest.call(null,inst_30450);
var inst_30456 = cljs.core.count.call(null,inst_30454);
var inst_30431 = inst_30455;
var inst_30432 = inst_30454;
var inst_30433 = inst_30456;
var inst_30434 = (0);
var state_30491__$1 = (function (){var statearr_30526 = state_30491;
(statearr_30526[(10)] = inst_30434);

(statearr_30526[(20)] = inst_30431);

(statearr_30526[(11)] = inst_30432);

(statearr_30526[(21)] = inst_30433);

return statearr_30526;
})();
var statearr_30527_30599 = state_30491__$1;
(statearr_30527_30599[(2)] = null);

(statearr_30527_30599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (41))){
var inst_30450 = (state_30491[(25)]);
var inst_30466 = (state_30491[(2)]);
var inst_30467 = cljs.core.next.call(null,inst_30450);
var inst_30431 = inst_30467;
var inst_30432 = null;
var inst_30433 = (0);
var inst_30434 = (0);
var state_30491__$1 = (function (){var statearr_30528 = state_30491;
(statearr_30528[(10)] = inst_30434);

(statearr_30528[(27)] = inst_30466);

(statearr_30528[(20)] = inst_30431);

(statearr_30528[(11)] = inst_30432);

(statearr_30528[(21)] = inst_30433);

return statearr_30528;
})();
var statearr_30529_30600 = state_30491__$1;
(statearr_30529_30600[(2)] = null);

(statearr_30529_30600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (43))){
var state_30491__$1 = state_30491;
var statearr_30530_30601 = state_30491__$1;
(statearr_30530_30601[(2)] = null);

(statearr_30530_30601[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (29))){
var inst_30475 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30531_30602 = state_30491__$1;
(statearr_30531_30602[(2)] = inst_30475);

(statearr_30531_30602[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (44))){
var inst_30484 = (state_30491[(2)]);
var state_30491__$1 = (function (){var statearr_30532 = state_30491;
(statearr_30532[(28)] = inst_30484);

return statearr_30532;
})();
var statearr_30533_30603 = state_30491__$1;
(statearr_30533_30603[(2)] = null);

(statearr_30533_30603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (6))){
var inst_30423 = (state_30491[(29)]);
var inst_30422 = cljs.core.deref.call(null,cs);
var inst_30423__$1 = cljs.core.keys.call(null,inst_30422);
var inst_30424 = cljs.core.count.call(null,inst_30423__$1);
var inst_30425 = cljs.core.reset_BANG_.call(null,dctr,inst_30424);
var inst_30430 = cljs.core.seq.call(null,inst_30423__$1);
var inst_30431 = inst_30430;
var inst_30432 = null;
var inst_30433 = (0);
var inst_30434 = (0);
var state_30491__$1 = (function (){var statearr_30534 = state_30491;
(statearr_30534[(29)] = inst_30423__$1);

(statearr_30534[(10)] = inst_30434);

(statearr_30534[(20)] = inst_30431);

(statearr_30534[(11)] = inst_30432);

(statearr_30534[(30)] = inst_30425);

(statearr_30534[(21)] = inst_30433);

return statearr_30534;
})();
var statearr_30535_30604 = state_30491__$1;
(statearr_30535_30604[(2)] = null);

(statearr_30535_30604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (28))){
var inst_30431 = (state_30491[(20)]);
var inst_30450 = (state_30491[(25)]);
var inst_30450__$1 = cljs.core.seq.call(null,inst_30431);
var state_30491__$1 = (function (){var statearr_30536 = state_30491;
(statearr_30536[(25)] = inst_30450__$1);

return statearr_30536;
})();
if(inst_30450__$1){
var statearr_30537_30605 = state_30491__$1;
(statearr_30537_30605[(1)] = (33));

} else {
var statearr_30538_30606 = state_30491__$1;
(statearr_30538_30606[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (25))){
var inst_30434 = (state_30491[(10)]);
var inst_30433 = (state_30491[(21)]);
var inst_30436 = (inst_30434 < inst_30433);
var inst_30437 = inst_30436;
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30437)){
var statearr_30539_30607 = state_30491__$1;
(statearr_30539_30607[(1)] = (27));

} else {
var statearr_30540_30608 = state_30491__$1;
(statearr_30540_30608[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (34))){
var state_30491__$1 = state_30491;
var statearr_30541_30609 = state_30491__$1;
(statearr_30541_30609[(2)] = null);

(statearr_30541_30609[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (17))){
var state_30491__$1 = state_30491;
var statearr_30542_30610 = state_30491__$1;
(statearr_30542_30610[(2)] = null);

(statearr_30542_30610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (3))){
var inst_30489 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30491__$1,inst_30489);
} else {
if((state_val_30492 === (12))){
var inst_30418 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30543_30611 = state_30491__$1;
(statearr_30543_30611[(2)] = inst_30418);

(statearr_30543_30611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (2))){
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(4),ch);
} else {
if((state_val_30492 === (23))){
var state_30491__$1 = state_30491;
var statearr_30544_30612 = state_30491__$1;
(statearr_30544_30612[(2)] = null);

(statearr_30544_30612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (35))){
var inst_30473 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30545_30613 = state_30491__$1;
(statearr_30545_30613[(2)] = inst_30473);

(statearr_30545_30613[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (19))){
var inst_30390 = (state_30491[(7)]);
var inst_30394 = cljs.core.chunk_first.call(null,inst_30390);
var inst_30395 = cljs.core.chunk_rest.call(null,inst_30390);
var inst_30396 = cljs.core.count.call(null,inst_30394);
var inst_30368 = inst_30395;
var inst_30369 = inst_30394;
var inst_30370 = inst_30396;
var inst_30371 = (0);
var state_30491__$1 = (function (){var statearr_30546 = state_30491;
(statearr_30546[(14)] = inst_30368);

(statearr_30546[(15)] = inst_30370);

(statearr_30546[(16)] = inst_30369);

(statearr_30546[(17)] = inst_30371);

return statearr_30546;
})();
var statearr_30547_30614 = state_30491__$1;
(statearr_30547_30614[(2)] = null);

(statearr_30547_30614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (11))){
var inst_30368 = (state_30491[(14)]);
var inst_30390 = (state_30491[(7)]);
var inst_30390__$1 = cljs.core.seq.call(null,inst_30368);
var state_30491__$1 = (function (){var statearr_30548 = state_30491;
(statearr_30548[(7)] = inst_30390__$1);

return statearr_30548;
})();
if(inst_30390__$1){
var statearr_30549_30615 = state_30491__$1;
(statearr_30549_30615[(1)] = (16));

} else {
var statearr_30550_30616 = state_30491__$1;
(statearr_30550_30616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (9))){
var inst_30420 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30551_30617 = state_30491__$1;
(statearr_30551_30617[(2)] = inst_30420);

(statearr_30551_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (5))){
var inst_30366 = cljs.core.deref.call(null,cs);
var inst_30367 = cljs.core.seq.call(null,inst_30366);
var inst_30368 = inst_30367;
var inst_30369 = null;
var inst_30370 = (0);
var inst_30371 = (0);
var state_30491__$1 = (function (){var statearr_30552 = state_30491;
(statearr_30552[(14)] = inst_30368);

(statearr_30552[(15)] = inst_30370);

(statearr_30552[(16)] = inst_30369);

(statearr_30552[(17)] = inst_30371);

return statearr_30552;
})();
var statearr_30553_30618 = state_30491__$1;
(statearr_30553_30618[(2)] = null);

(statearr_30553_30618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (14))){
var state_30491__$1 = state_30491;
var statearr_30554_30619 = state_30491__$1;
(statearr_30554_30619[(2)] = null);

(statearr_30554_30619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (45))){
var inst_30481 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30555_30620 = state_30491__$1;
(statearr_30555_30620[(2)] = inst_30481);

(statearr_30555_30620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (26))){
var inst_30423 = (state_30491[(29)]);
var inst_30477 = (state_30491[(2)]);
var inst_30478 = cljs.core.seq.call(null,inst_30423);
var state_30491__$1 = (function (){var statearr_30556 = state_30491;
(statearr_30556[(31)] = inst_30477);

return statearr_30556;
})();
if(inst_30478){
var statearr_30557_30621 = state_30491__$1;
(statearr_30557_30621[(1)] = (42));

} else {
var statearr_30558_30622 = state_30491__$1;
(statearr_30558_30622[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (16))){
var inst_30390 = (state_30491[(7)]);
var inst_30392 = cljs.core.chunked_seq_QMARK_.call(null,inst_30390);
var state_30491__$1 = state_30491;
if(inst_30392){
var statearr_30559_30623 = state_30491__$1;
(statearr_30559_30623[(1)] = (19));

} else {
var statearr_30560_30624 = state_30491__$1;
(statearr_30560_30624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (38))){
var inst_30470 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30561_30625 = state_30491__$1;
(statearr_30561_30625[(2)] = inst_30470);

(statearr_30561_30625[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (30))){
var state_30491__$1 = state_30491;
var statearr_30562_30626 = state_30491__$1;
(statearr_30562_30626[(2)] = null);

(statearr_30562_30626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (10))){
var inst_30369 = (state_30491[(16)]);
var inst_30371 = (state_30491[(17)]);
var inst_30379 = cljs.core._nth.call(null,inst_30369,inst_30371);
var inst_30380 = cljs.core.nth.call(null,inst_30379,(0),null);
var inst_30381 = cljs.core.nth.call(null,inst_30379,(1),null);
var state_30491__$1 = (function (){var statearr_30563 = state_30491;
(statearr_30563[(26)] = inst_30380);

return statearr_30563;
})();
if(cljs.core.truth_(inst_30381)){
var statearr_30564_30627 = state_30491__$1;
(statearr_30564_30627[(1)] = (13));

} else {
var statearr_30565_30628 = state_30491__$1;
(statearr_30565_30628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (18))){
var inst_30416 = (state_30491[(2)]);
var state_30491__$1 = state_30491;
var statearr_30566_30629 = state_30491__$1;
(statearr_30566_30629[(2)] = inst_30416);

(statearr_30566_30629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (42))){
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(45),dchan);
} else {
if((state_val_30492 === (37))){
var inst_30359 = (state_30491[(9)]);
var inst_30459 = (state_30491[(23)]);
var inst_30450 = (state_30491[(25)]);
var inst_30459__$1 = cljs.core.first.call(null,inst_30450);
var inst_30460 = cljs.core.async.put_BANG_.call(null,inst_30459__$1,inst_30359,done);
var state_30491__$1 = (function (){var statearr_30567 = state_30491;
(statearr_30567[(23)] = inst_30459__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30460)){
var statearr_30568_30630 = state_30491__$1;
(statearr_30568_30630[(1)] = (39));

} else {
var statearr_30569_30631 = state_30491__$1;
(statearr_30569_30631[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30492 === (8))){
var inst_30370 = (state_30491[(15)]);
var inst_30371 = (state_30491[(17)]);
var inst_30373 = (inst_30371 < inst_30370);
var inst_30374 = inst_30373;
var state_30491__$1 = state_30491;
if(cljs.core.truth_(inst_30374)){
var statearr_30570_30632 = state_30491__$1;
(statearr_30570_30632[(1)] = (10));

} else {
var statearr_30571_30633 = state_30491__$1;
(statearr_30571_30633[(1)] = (11));

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
});})(c__29242__auto___30579,cs,m,dchan,dctr,done))
;
return ((function (switch__29128__auto__,c__29242__auto___30579,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29129__auto__ = null;
var cljs$core$async$mult_$_state_machine__29129__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = cljs$core$async$mult_$_state_machine__29129__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var cljs$core$async$mult_$_state_machine__29129__auto____1 = (function (state_30491){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_30491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__29132__auto__ = e30576;
var statearr_30577_30634 = state_30491;
(statearr_30577_30634[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30635 = state_30491;
state_30491 = G__30635;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29129__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29129__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29129__auto____0;
cljs$core$async$mult_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29129__auto____1;
return cljs$core$async$mult_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___30579,cs,m,dchan,dctr,done))
})();
var state__29244__auto__ = (function (){var statearr_30578 = f__29243__auto__.call(null);
(statearr_30578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___30579);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___30579,cs,m,dchan,dctr,done))
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
var args30636 = [];
var len__27777__auto___30639 = arguments.length;
var i__27778__auto___30640 = (0);
while(true){
if((i__27778__auto___30640 < len__27777__auto___30639)){
args30636.push((arguments[i__27778__auto___30640]));

var G__30641 = (i__27778__auto___30640 + (1));
i__27778__auto___30640 = G__30641;
continue;
} else {
}
break;
}

var G__30638 = args30636.length;
switch (G__30638) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30636.length)].join('')));

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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,ch);
} else {
var m__27308__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,ch);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,ch);
} else {
var m__27308__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,ch);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m);
} else {
var m__27308__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,state_map);
} else {
var m__27308__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,state_map);
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
var x__27307__auto__ = (((m == null))?null:m);
var m__27308__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,m,mode);
} else {
var m__27308__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27784__auto__ = [];
var len__27777__auto___30653 = arguments.length;
var i__27778__auto___30654 = (0);
while(true){
if((i__27778__auto___30654 < len__27777__auto___30653)){
args__27784__auto__.push((arguments[i__27778__auto___30654]));

var G__30655 = (i__27778__auto___30654 + (1));
i__27778__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((3) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30647){
var map__30648 = p__30647;
var map__30648__$1 = ((((!((map__30648 == null)))?((((map__30648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30648):map__30648);
var opts = map__30648__$1;
var statearr_30650_30656 = state;
(statearr_30650_30656[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__30648,map__30648__$1,opts){
return (function (val){
var statearr_30651_30657 = state;
(statearr_30651_30657[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30648,map__30648__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_30652_30658 = state;
(statearr_30652_30658[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30643){
var G__30644 = cljs.core.first.call(null,seq30643);
var seq30643__$1 = cljs.core.next.call(null,seq30643);
var G__30645 = cljs.core.first.call(null,seq30643__$1);
var seq30643__$2 = cljs.core.next.call(null,seq30643__$1);
var G__30646 = cljs.core.first.call(null,seq30643__$2);
var seq30643__$3 = cljs.core.next.call(null,seq30643__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30644,G__30645,G__30646,seq30643__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30824 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30825){
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
this.meta30825 = meta30825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30826,meta30825__$1){
var self__ = this;
var _30826__$1 = this;
return (new cljs.core.async.t_cljs$core$async30824(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30826){
var self__ = this;
var _30826__$1 = this;
return self__.meta30825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30824.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30825","meta30825",-434612067,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30824";

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async30824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30825){
return (new cljs.core.async.t_cljs$core$async30824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30824(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29242__auto___30989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30926){
var state_val_30927 = (state_30926[(1)]);
if((state_val_30927 === (7))){
var inst_30842 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30928_30990 = state_30926__$1;
(statearr_30928_30990[(2)] = inst_30842);

(statearr_30928_30990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (20))){
var inst_30854 = (state_30926[(7)]);
var state_30926__$1 = state_30926;
var statearr_30929_30991 = state_30926__$1;
(statearr_30929_30991[(2)] = inst_30854);

(statearr_30929_30991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (27))){
var state_30926__$1 = state_30926;
var statearr_30930_30992 = state_30926__$1;
(statearr_30930_30992[(2)] = null);

(statearr_30930_30992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (1))){
var inst_30830 = (state_30926[(8)]);
var inst_30830__$1 = calc_state.call(null);
var inst_30832 = (inst_30830__$1 == null);
var inst_30833 = cljs.core.not.call(null,inst_30832);
var state_30926__$1 = (function (){var statearr_30931 = state_30926;
(statearr_30931[(8)] = inst_30830__$1);

return statearr_30931;
})();
if(inst_30833){
var statearr_30932_30993 = state_30926__$1;
(statearr_30932_30993[(1)] = (2));

} else {
var statearr_30933_30994 = state_30926__$1;
(statearr_30933_30994[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (24))){
var inst_30900 = (state_30926[(9)]);
var inst_30886 = (state_30926[(10)]);
var inst_30877 = (state_30926[(11)]);
var inst_30900__$1 = inst_30877.call(null,inst_30886);
var state_30926__$1 = (function (){var statearr_30934 = state_30926;
(statearr_30934[(9)] = inst_30900__$1);

return statearr_30934;
})();
if(cljs.core.truth_(inst_30900__$1)){
var statearr_30935_30995 = state_30926__$1;
(statearr_30935_30995[(1)] = (29));

} else {
var statearr_30936_30996 = state_30926__$1;
(statearr_30936_30996[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (4))){
var inst_30845 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30845)){
var statearr_30937_30997 = state_30926__$1;
(statearr_30937_30997[(1)] = (8));

} else {
var statearr_30938_30998 = state_30926__$1;
(statearr_30938_30998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (15))){
var inst_30871 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30871)){
var statearr_30939_30999 = state_30926__$1;
(statearr_30939_30999[(1)] = (19));

} else {
var statearr_30940_31000 = state_30926__$1;
(statearr_30940_31000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (21))){
var inst_30876 = (state_30926[(12)]);
var inst_30876__$1 = (state_30926[(2)]);
var inst_30877 = cljs.core.get.call(null,inst_30876__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30878 = cljs.core.get.call(null,inst_30876__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30879 = cljs.core.get.call(null,inst_30876__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30926__$1 = (function (){var statearr_30941 = state_30926;
(statearr_30941[(12)] = inst_30876__$1);

(statearr_30941[(13)] = inst_30878);

(statearr_30941[(11)] = inst_30877);

return statearr_30941;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30926__$1,(22),inst_30879);
} else {
if((state_val_30927 === (31))){
var inst_30908 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30908)){
var statearr_30942_31001 = state_30926__$1;
(statearr_30942_31001[(1)] = (32));

} else {
var statearr_30943_31002 = state_30926__$1;
(statearr_30943_31002[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (32))){
var inst_30885 = (state_30926[(14)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30926__$1,(35),out,inst_30885);
} else {
if((state_val_30927 === (33))){
var inst_30876 = (state_30926[(12)]);
var inst_30854 = inst_30876;
var state_30926__$1 = (function (){var statearr_30944 = state_30926;
(statearr_30944[(7)] = inst_30854);

return statearr_30944;
})();
var statearr_30945_31003 = state_30926__$1;
(statearr_30945_31003[(2)] = null);

(statearr_30945_31003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (13))){
var inst_30854 = (state_30926[(7)]);
var inst_30861 = inst_30854.cljs$lang$protocol_mask$partition0$;
var inst_30862 = (inst_30861 & (64));
var inst_30863 = inst_30854.cljs$core$ISeq$;
var inst_30864 = (inst_30862) || (inst_30863);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30864)){
var statearr_30946_31004 = state_30926__$1;
(statearr_30946_31004[(1)] = (16));

} else {
var statearr_30947_31005 = state_30926__$1;
(statearr_30947_31005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (22))){
var inst_30885 = (state_30926[(14)]);
var inst_30886 = (state_30926[(10)]);
var inst_30884 = (state_30926[(2)]);
var inst_30885__$1 = cljs.core.nth.call(null,inst_30884,(0),null);
var inst_30886__$1 = cljs.core.nth.call(null,inst_30884,(1),null);
var inst_30887 = (inst_30885__$1 == null);
var inst_30888 = cljs.core._EQ_.call(null,inst_30886__$1,change);
var inst_30889 = (inst_30887) || (inst_30888);
var state_30926__$1 = (function (){var statearr_30948 = state_30926;
(statearr_30948[(14)] = inst_30885__$1);

(statearr_30948[(10)] = inst_30886__$1);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_30949_31006 = state_30926__$1;
(statearr_30949_31006[(1)] = (23));

} else {
var statearr_30950_31007 = state_30926__$1;
(statearr_30950_31007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (36))){
var inst_30876 = (state_30926[(12)]);
var inst_30854 = inst_30876;
var state_30926__$1 = (function (){var statearr_30951 = state_30926;
(statearr_30951[(7)] = inst_30854);

return statearr_30951;
})();
var statearr_30952_31008 = state_30926__$1;
(statearr_30952_31008[(2)] = null);

(statearr_30952_31008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (29))){
var inst_30900 = (state_30926[(9)]);
var state_30926__$1 = state_30926;
var statearr_30953_31009 = state_30926__$1;
(statearr_30953_31009[(2)] = inst_30900);

(statearr_30953_31009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (6))){
var state_30926__$1 = state_30926;
var statearr_30954_31010 = state_30926__$1;
(statearr_30954_31010[(2)] = false);

(statearr_30954_31010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (28))){
var inst_30896 = (state_30926[(2)]);
var inst_30897 = calc_state.call(null);
var inst_30854 = inst_30897;
var state_30926__$1 = (function (){var statearr_30955 = state_30926;
(statearr_30955[(15)] = inst_30896);

(statearr_30955[(7)] = inst_30854);

return statearr_30955;
})();
var statearr_30956_31011 = state_30926__$1;
(statearr_30956_31011[(2)] = null);

(statearr_30956_31011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (25))){
var inst_30922 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30957_31012 = state_30926__$1;
(statearr_30957_31012[(2)] = inst_30922);

(statearr_30957_31012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (34))){
var inst_30920 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30958_31013 = state_30926__$1;
(statearr_30958_31013[(2)] = inst_30920);

(statearr_30958_31013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (17))){
var state_30926__$1 = state_30926;
var statearr_30959_31014 = state_30926__$1;
(statearr_30959_31014[(2)] = false);

(statearr_30959_31014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (3))){
var state_30926__$1 = state_30926;
var statearr_30960_31015 = state_30926__$1;
(statearr_30960_31015[(2)] = false);

(statearr_30960_31015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (12))){
var inst_30924 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30926__$1,inst_30924);
} else {
if((state_val_30927 === (2))){
var inst_30830 = (state_30926[(8)]);
var inst_30835 = inst_30830.cljs$lang$protocol_mask$partition0$;
var inst_30836 = (inst_30835 & (64));
var inst_30837 = inst_30830.cljs$core$ISeq$;
var inst_30838 = (inst_30836) || (inst_30837);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30838)){
var statearr_30961_31016 = state_30926__$1;
(statearr_30961_31016[(1)] = (5));

} else {
var statearr_30962_31017 = state_30926__$1;
(statearr_30962_31017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (23))){
var inst_30885 = (state_30926[(14)]);
var inst_30891 = (inst_30885 == null);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30891)){
var statearr_30963_31018 = state_30926__$1;
(statearr_30963_31018[(1)] = (26));

} else {
var statearr_30964_31019 = state_30926__$1;
(statearr_30964_31019[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (35))){
var inst_30911 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30911)){
var statearr_30965_31020 = state_30926__$1;
(statearr_30965_31020[(1)] = (36));

} else {
var statearr_30966_31021 = state_30926__$1;
(statearr_30966_31021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (19))){
var inst_30854 = (state_30926[(7)]);
var inst_30873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30854);
var state_30926__$1 = state_30926;
var statearr_30967_31022 = state_30926__$1;
(statearr_30967_31022[(2)] = inst_30873);

(statearr_30967_31022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (11))){
var inst_30854 = (state_30926[(7)]);
var inst_30858 = (inst_30854 == null);
var inst_30859 = cljs.core.not.call(null,inst_30858);
var state_30926__$1 = state_30926;
if(inst_30859){
var statearr_30968_31023 = state_30926__$1;
(statearr_30968_31023[(1)] = (13));

} else {
var statearr_30969_31024 = state_30926__$1;
(statearr_30969_31024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (9))){
var inst_30830 = (state_30926[(8)]);
var state_30926__$1 = state_30926;
var statearr_30970_31025 = state_30926__$1;
(statearr_30970_31025[(2)] = inst_30830);

(statearr_30970_31025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (5))){
var state_30926__$1 = state_30926;
var statearr_30971_31026 = state_30926__$1;
(statearr_30971_31026[(2)] = true);

(statearr_30971_31026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (14))){
var state_30926__$1 = state_30926;
var statearr_30972_31027 = state_30926__$1;
(statearr_30972_31027[(2)] = false);

(statearr_30972_31027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (26))){
var inst_30886 = (state_30926[(10)]);
var inst_30893 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30886);
var state_30926__$1 = state_30926;
var statearr_30973_31028 = state_30926__$1;
(statearr_30973_31028[(2)] = inst_30893);

(statearr_30973_31028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (16))){
var state_30926__$1 = state_30926;
var statearr_30974_31029 = state_30926__$1;
(statearr_30974_31029[(2)] = true);

(statearr_30974_31029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (38))){
var inst_30916 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30975_31030 = state_30926__$1;
(statearr_30975_31030[(2)] = inst_30916);

(statearr_30975_31030[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (30))){
var inst_30878 = (state_30926[(13)]);
var inst_30886 = (state_30926[(10)]);
var inst_30877 = (state_30926[(11)]);
var inst_30903 = cljs.core.empty_QMARK_.call(null,inst_30877);
var inst_30904 = inst_30878.call(null,inst_30886);
var inst_30905 = cljs.core.not.call(null,inst_30904);
var inst_30906 = (inst_30903) && (inst_30905);
var state_30926__$1 = state_30926;
var statearr_30976_31031 = state_30926__$1;
(statearr_30976_31031[(2)] = inst_30906);

(statearr_30976_31031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (10))){
var inst_30830 = (state_30926[(8)]);
var inst_30850 = (state_30926[(2)]);
var inst_30851 = cljs.core.get.call(null,inst_30850,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30852 = cljs.core.get.call(null,inst_30850,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30853 = cljs.core.get.call(null,inst_30850,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30854 = inst_30830;
var state_30926__$1 = (function (){var statearr_30977 = state_30926;
(statearr_30977[(16)] = inst_30851);

(statearr_30977[(17)] = inst_30853);

(statearr_30977[(18)] = inst_30852);

(statearr_30977[(7)] = inst_30854);

return statearr_30977;
})();
var statearr_30978_31032 = state_30926__$1;
(statearr_30978_31032[(2)] = null);

(statearr_30978_31032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (18))){
var inst_30868 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30979_31033 = state_30926__$1;
(statearr_30979_31033[(2)] = inst_30868);

(statearr_30979_31033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (37))){
var state_30926__$1 = state_30926;
var statearr_30980_31034 = state_30926__$1;
(statearr_30980_31034[(2)] = null);

(statearr_30980_31034[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (8))){
var inst_30830 = (state_30926[(8)]);
var inst_30847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30830);
var state_30926__$1 = state_30926;
var statearr_30981_31035 = state_30926__$1;
(statearr_30981_31035[(2)] = inst_30847);

(statearr_30981_31035[(1)] = (10));


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
});})(c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29128__auto__,c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29129__auto__ = null;
var cljs$core$async$mix_$_state_machine__29129__auto____0 = (function (){
var statearr_30985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30985[(0)] = cljs$core$async$mix_$_state_machine__29129__auto__);

(statearr_30985[(1)] = (1));

return statearr_30985;
});
var cljs$core$async$mix_$_state_machine__29129__auto____1 = (function (state_30926){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_30926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e30986){if((e30986 instanceof Object)){
var ex__29132__auto__ = e30986;
var statearr_30987_31036 = state_30926;
(statearr_30987_31036[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_30926;
state_30926 = G__31037;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29129__auto__ = function(state_30926){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29129__auto____1.call(this,state_30926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29129__auto____0;
cljs$core$async$mix_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29129__auto____1;
return cljs$core$async$mix_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29244__auto__ = (function (){var statearr_30988 = f__29243__auto__.call(null);
(statearr_30988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___30989);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___30989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27307__auto__ = (((p == null))?null:p);
var m__27308__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27308__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27307__auto__ = (((p == null))?null:p);
var m__27308__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,p,v,ch);
} else {
var m__27308__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31038 = [];
var len__27777__auto___31041 = arguments.length;
var i__27778__auto___31042 = (0);
while(true){
if((i__27778__auto___31042 < len__27777__auto___31041)){
args31038.push((arguments[i__27778__auto___31042]));

var G__31043 = (i__27778__auto___31042 + (1));
i__27778__auto___31042 = G__31043;
continue;
} else {
}
break;
}

var G__31040 = args31038.length;
switch (G__31040) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31038.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27307__auto__ = (((p == null))?null:p);
var m__27308__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,p);
} else {
var m__27308__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,p);
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
var x__27307__auto__ = (((p == null))?null:p);
var m__27308__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27307__auto__)]);
if(!((m__27308__auto__ == null))){
return m__27308__auto__.call(null,p,v);
} else {
var m__27308__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27308__auto____$1 == null))){
return m__27308__auto____$1.call(null,p,v);
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
var args31046 = [];
var len__27777__auto___31171 = arguments.length;
var i__27778__auto___31172 = (0);
while(true){
if((i__27778__auto___31172 < len__27777__auto___31171)){
args31046.push((arguments[i__27778__auto___31172]));

var G__31173 = (i__27778__auto___31172 + (1));
i__27778__auto___31172 = G__31173;
continue;
} else {
}
break;
}

var G__31048 = args31046.length;
switch (G__31048) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31046.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26594__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26594__auto__,mults){
return (function (p1__31045_SHARP_){
if(cljs.core.truth_(p1__31045_SHARP_.call(null,topic))){
return p1__31045_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26594__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31049 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31050){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31050 = meta31050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31051,meta31050__$1){
var self__ = this;
var _31051__$1 = this;
return (new cljs.core.async.t_cljs$core$async31049(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31050__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31051){
var self__ = this;
var _31051__$1 = this;
return self__.meta31050;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31050","meta31050",-1746288704,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31049";

cljs.core.async.t_cljs$core$async31049.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31049");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31049 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31050){
return (new cljs.core.async.t_cljs$core$async31049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31050));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31049(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29242__auto___31175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31175,mults,ensure_mult,p){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31175,mults,ensure_mult,p){
return (function (state_31123){
var state_val_31124 = (state_31123[(1)]);
if((state_val_31124 === (7))){
var inst_31119 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31125_31176 = state_31123__$1;
(statearr_31125_31176[(2)] = inst_31119);

(statearr_31125_31176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (20))){
var state_31123__$1 = state_31123;
var statearr_31126_31177 = state_31123__$1;
(statearr_31126_31177[(2)] = null);

(statearr_31126_31177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (1))){
var state_31123__$1 = state_31123;
var statearr_31127_31178 = state_31123__$1;
(statearr_31127_31178[(2)] = null);

(statearr_31127_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (24))){
var inst_31102 = (state_31123[(7)]);
var inst_31111 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31102);
var state_31123__$1 = state_31123;
var statearr_31128_31179 = state_31123__$1;
(statearr_31128_31179[(2)] = inst_31111);

(statearr_31128_31179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (4))){
var inst_31054 = (state_31123[(8)]);
var inst_31054__$1 = (state_31123[(2)]);
var inst_31055 = (inst_31054__$1 == null);
var state_31123__$1 = (function (){var statearr_31129 = state_31123;
(statearr_31129[(8)] = inst_31054__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_31055)){
var statearr_31130_31180 = state_31123__$1;
(statearr_31130_31180[(1)] = (5));

} else {
var statearr_31131_31181 = state_31123__$1;
(statearr_31131_31181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (15))){
var inst_31096 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31132_31182 = state_31123__$1;
(statearr_31132_31182[(2)] = inst_31096);

(statearr_31132_31182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (21))){
var inst_31116 = (state_31123[(2)]);
var state_31123__$1 = (function (){var statearr_31133 = state_31123;
(statearr_31133[(9)] = inst_31116);

return statearr_31133;
})();
var statearr_31134_31183 = state_31123__$1;
(statearr_31134_31183[(2)] = null);

(statearr_31134_31183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (13))){
var inst_31078 = (state_31123[(10)]);
var inst_31080 = cljs.core.chunked_seq_QMARK_.call(null,inst_31078);
var state_31123__$1 = state_31123;
if(inst_31080){
var statearr_31135_31184 = state_31123__$1;
(statearr_31135_31184[(1)] = (16));

} else {
var statearr_31136_31185 = state_31123__$1;
(statearr_31136_31185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (22))){
var inst_31108 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31108)){
var statearr_31137_31186 = state_31123__$1;
(statearr_31137_31186[(1)] = (23));

} else {
var statearr_31138_31187 = state_31123__$1;
(statearr_31138_31187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (6))){
var inst_31102 = (state_31123[(7)]);
var inst_31104 = (state_31123[(11)]);
var inst_31054 = (state_31123[(8)]);
var inst_31102__$1 = topic_fn.call(null,inst_31054);
var inst_31103 = cljs.core.deref.call(null,mults);
var inst_31104__$1 = cljs.core.get.call(null,inst_31103,inst_31102__$1);
var state_31123__$1 = (function (){var statearr_31139 = state_31123;
(statearr_31139[(7)] = inst_31102__$1);

(statearr_31139[(11)] = inst_31104__$1);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31104__$1)){
var statearr_31140_31188 = state_31123__$1;
(statearr_31140_31188[(1)] = (19));

} else {
var statearr_31141_31189 = state_31123__$1;
(statearr_31141_31189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (25))){
var inst_31113 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31142_31190 = state_31123__$1;
(statearr_31142_31190[(2)] = inst_31113);

(statearr_31142_31190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (17))){
var inst_31078 = (state_31123[(10)]);
var inst_31087 = cljs.core.first.call(null,inst_31078);
var inst_31088 = cljs.core.async.muxch_STAR_.call(null,inst_31087);
var inst_31089 = cljs.core.async.close_BANG_.call(null,inst_31088);
var inst_31090 = cljs.core.next.call(null,inst_31078);
var inst_31064 = inst_31090;
var inst_31065 = null;
var inst_31066 = (0);
var inst_31067 = (0);
var state_31123__$1 = (function (){var statearr_31143 = state_31123;
(statearr_31143[(12)] = inst_31066);

(statearr_31143[(13)] = inst_31089);

(statearr_31143[(14)] = inst_31064);

(statearr_31143[(15)] = inst_31067);

(statearr_31143[(16)] = inst_31065);

return statearr_31143;
})();
var statearr_31144_31191 = state_31123__$1;
(statearr_31144_31191[(2)] = null);

(statearr_31144_31191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (3))){
var inst_31121 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31123__$1,inst_31121);
} else {
if((state_val_31124 === (12))){
var inst_31098 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31145_31192 = state_31123__$1;
(statearr_31145_31192[(2)] = inst_31098);

(statearr_31145_31192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (2))){
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(4),ch);
} else {
if((state_val_31124 === (23))){
var state_31123__$1 = state_31123;
var statearr_31146_31193 = state_31123__$1;
(statearr_31146_31193[(2)] = null);

(statearr_31146_31193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (19))){
var inst_31104 = (state_31123[(11)]);
var inst_31054 = (state_31123[(8)]);
var inst_31106 = cljs.core.async.muxch_STAR_.call(null,inst_31104);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31123__$1,(22),inst_31106,inst_31054);
} else {
if((state_val_31124 === (11))){
var inst_31078 = (state_31123[(10)]);
var inst_31064 = (state_31123[(14)]);
var inst_31078__$1 = cljs.core.seq.call(null,inst_31064);
var state_31123__$1 = (function (){var statearr_31147 = state_31123;
(statearr_31147[(10)] = inst_31078__$1);

return statearr_31147;
})();
if(inst_31078__$1){
var statearr_31148_31194 = state_31123__$1;
(statearr_31148_31194[(1)] = (13));

} else {
var statearr_31149_31195 = state_31123__$1;
(statearr_31149_31195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (9))){
var inst_31100 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31150_31196 = state_31123__$1;
(statearr_31150_31196[(2)] = inst_31100);

(statearr_31150_31196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (5))){
var inst_31061 = cljs.core.deref.call(null,mults);
var inst_31062 = cljs.core.vals.call(null,inst_31061);
var inst_31063 = cljs.core.seq.call(null,inst_31062);
var inst_31064 = inst_31063;
var inst_31065 = null;
var inst_31066 = (0);
var inst_31067 = (0);
var state_31123__$1 = (function (){var statearr_31151 = state_31123;
(statearr_31151[(12)] = inst_31066);

(statearr_31151[(14)] = inst_31064);

(statearr_31151[(15)] = inst_31067);

(statearr_31151[(16)] = inst_31065);

return statearr_31151;
})();
var statearr_31152_31197 = state_31123__$1;
(statearr_31152_31197[(2)] = null);

(statearr_31152_31197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (14))){
var state_31123__$1 = state_31123;
var statearr_31156_31198 = state_31123__$1;
(statearr_31156_31198[(2)] = null);

(statearr_31156_31198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (16))){
var inst_31078 = (state_31123[(10)]);
var inst_31082 = cljs.core.chunk_first.call(null,inst_31078);
var inst_31083 = cljs.core.chunk_rest.call(null,inst_31078);
var inst_31084 = cljs.core.count.call(null,inst_31082);
var inst_31064 = inst_31083;
var inst_31065 = inst_31082;
var inst_31066 = inst_31084;
var inst_31067 = (0);
var state_31123__$1 = (function (){var statearr_31157 = state_31123;
(statearr_31157[(12)] = inst_31066);

(statearr_31157[(14)] = inst_31064);

(statearr_31157[(15)] = inst_31067);

(statearr_31157[(16)] = inst_31065);

return statearr_31157;
})();
var statearr_31158_31199 = state_31123__$1;
(statearr_31158_31199[(2)] = null);

(statearr_31158_31199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (10))){
var inst_31066 = (state_31123[(12)]);
var inst_31064 = (state_31123[(14)]);
var inst_31067 = (state_31123[(15)]);
var inst_31065 = (state_31123[(16)]);
var inst_31072 = cljs.core._nth.call(null,inst_31065,inst_31067);
var inst_31073 = cljs.core.async.muxch_STAR_.call(null,inst_31072);
var inst_31074 = cljs.core.async.close_BANG_.call(null,inst_31073);
var inst_31075 = (inst_31067 + (1));
var tmp31153 = inst_31066;
var tmp31154 = inst_31064;
var tmp31155 = inst_31065;
var inst_31064__$1 = tmp31154;
var inst_31065__$1 = tmp31155;
var inst_31066__$1 = tmp31153;
var inst_31067__$1 = inst_31075;
var state_31123__$1 = (function (){var statearr_31159 = state_31123;
(statearr_31159[(12)] = inst_31066__$1);

(statearr_31159[(14)] = inst_31064__$1);

(statearr_31159[(17)] = inst_31074);

(statearr_31159[(15)] = inst_31067__$1);

(statearr_31159[(16)] = inst_31065__$1);

return statearr_31159;
})();
var statearr_31160_31200 = state_31123__$1;
(statearr_31160_31200[(2)] = null);

(statearr_31160_31200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (18))){
var inst_31093 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31161_31201 = state_31123__$1;
(statearr_31161_31201[(2)] = inst_31093);

(statearr_31161_31201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (8))){
var inst_31066 = (state_31123[(12)]);
var inst_31067 = (state_31123[(15)]);
var inst_31069 = (inst_31067 < inst_31066);
var inst_31070 = inst_31069;
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31070)){
var statearr_31162_31202 = state_31123__$1;
(statearr_31162_31202[(1)] = (10));

} else {
var statearr_31163_31203 = state_31123__$1;
(statearr_31163_31203[(1)] = (11));

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
});})(c__29242__auto___31175,mults,ensure_mult,p))
;
return ((function (switch__29128__auto__,c__29242__auto___31175,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31167[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31167[(1)] = (1));

return statearr_31167;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31123){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31168){if((e31168 instanceof Object)){
var ex__29132__auto__ = e31168;
var statearr_31169_31204 = state_31123;
(statearr_31169_31204[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31205 = state_31123;
state_31123 = G__31205;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31175,mults,ensure_mult,p))
})();
var state__29244__auto__ = (function (){var statearr_31170 = f__29243__auto__.call(null);
(statearr_31170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31175);

return statearr_31170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31175,mults,ensure_mult,p))
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
var args31206 = [];
var len__27777__auto___31209 = arguments.length;
var i__27778__auto___31210 = (0);
while(true){
if((i__27778__auto___31210 < len__27777__auto___31209)){
args31206.push((arguments[i__27778__auto___31210]));

var G__31211 = (i__27778__auto___31210 + (1));
i__27778__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var G__31208 = args31206.length;
switch (G__31208) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31206.length)].join('')));

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
var args31213 = [];
var len__27777__auto___31216 = arguments.length;
var i__27778__auto___31217 = (0);
while(true){
if((i__27778__auto___31217 < len__27777__auto___31216)){
args31213.push((arguments[i__27778__auto___31217]));

var G__31218 = (i__27778__auto___31217 + (1));
i__27778__auto___31217 = G__31218;
continue;
} else {
}
break;
}

var G__31215 = args31213.length;
switch (G__31215) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31213.length)].join('')));

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
var args31220 = [];
var len__27777__auto___31291 = arguments.length;
var i__27778__auto___31292 = (0);
while(true){
if((i__27778__auto___31292 < len__27777__auto___31291)){
args31220.push((arguments[i__27778__auto___31292]));

var G__31293 = (i__27778__auto___31292 + (1));
i__27778__auto___31292 = G__31293;
continue;
} else {
}
break;
}

var G__31222 = args31220.length;
switch (G__31222) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31220.length)].join('')));

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
var c__29242__auto___31295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31261){
var state_val_31262 = (state_31261[(1)]);
if((state_val_31262 === (7))){
var state_31261__$1 = state_31261;
var statearr_31263_31296 = state_31261__$1;
(statearr_31263_31296[(2)] = null);

(statearr_31263_31296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (1))){
var state_31261__$1 = state_31261;
var statearr_31264_31297 = state_31261__$1;
(statearr_31264_31297[(2)] = null);

(statearr_31264_31297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (4))){
var inst_31225 = (state_31261[(7)]);
var inst_31227 = (inst_31225 < cnt);
var state_31261__$1 = state_31261;
if(cljs.core.truth_(inst_31227)){
var statearr_31265_31298 = state_31261__$1;
(statearr_31265_31298[(1)] = (6));

} else {
var statearr_31266_31299 = state_31261__$1;
(statearr_31266_31299[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (15))){
var inst_31257 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31267_31300 = state_31261__$1;
(statearr_31267_31300[(2)] = inst_31257);

(statearr_31267_31300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (13))){
var inst_31250 = cljs.core.async.close_BANG_.call(null,out);
var state_31261__$1 = state_31261;
var statearr_31268_31301 = state_31261__$1;
(statearr_31268_31301[(2)] = inst_31250);

(statearr_31268_31301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (6))){
var state_31261__$1 = state_31261;
var statearr_31269_31302 = state_31261__$1;
(statearr_31269_31302[(2)] = null);

(statearr_31269_31302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (3))){
var inst_31259 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31261__$1,inst_31259);
} else {
if((state_val_31262 === (12))){
var inst_31247 = (state_31261[(8)]);
var inst_31247__$1 = (state_31261[(2)]);
var inst_31248 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31247__$1);
var state_31261__$1 = (function (){var statearr_31270 = state_31261;
(statearr_31270[(8)] = inst_31247__$1);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31248)){
var statearr_31271_31303 = state_31261__$1;
(statearr_31271_31303[(1)] = (13));

} else {
var statearr_31272_31304 = state_31261__$1;
(statearr_31272_31304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (2))){
var inst_31224 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31225 = (0);
var state_31261__$1 = (function (){var statearr_31273 = state_31261;
(statearr_31273[(7)] = inst_31225);

(statearr_31273[(9)] = inst_31224);

return statearr_31273;
})();
var statearr_31274_31305 = state_31261__$1;
(statearr_31274_31305[(2)] = null);

(statearr_31274_31305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (11))){
var inst_31225 = (state_31261[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31261,(10),Object,null,(9));
var inst_31234 = chs__$1.call(null,inst_31225);
var inst_31235 = done.call(null,inst_31225);
var inst_31236 = cljs.core.async.take_BANG_.call(null,inst_31234,inst_31235);
var state_31261__$1 = state_31261;
var statearr_31275_31306 = state_31261__$1;
(statearr_31275_31306[(2)] = inst_31236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (9))){
var inst_31225 = (state_31261[(7)]);
var inst_31238 = (state_31261[(2)]);
var inst_31239 = (inst_31225 + (1));
var inst_31225__$1 = inst_31239;
var state_31261__$1 = (function (){var statearr_31276 = state_31261;
(statearr_31276[(7)] = inst_31225__$1);

(statearr_31276[(10)] = inst_31238);

return statearr_31276;
})();
var statearr_31277_31307 = state_31261__$1;
(statearr_31277_31307[(2)] = null);

(statearr_31277_31307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (5))){
var inst_31245 = (state_31261[(2)]);
var state_31261__$1 = (function (){var statearr_31278 = state_31261;
(statearr_31278[(11)] = inst_31245);

return statearr_31278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31261__$1,(12),dchan);
} else {
if((state_val_31262 === (14))){
var inst_31247 = (state_31261[(8)]);
var inst_31252 = cljs.core.apply.call(null,f,inst_31247);
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31261__$1,(16),out,inst_31252);
} else {
if((state_val_31262 === (16))){
var inst_31254 = (state_31261[(2)]);
var state_31261__$1 = (function (){var statearr_31279 = state_31261;
(statearr_31279[(12)] = inst_31254);

return statearr_31279;
})();
var statearr_31280_31308 = state_31261__$1;
(statearr_31280_31308[(2)] = null);

(statearr_31280_31308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (10))){
var inst_31229 = (state_31261[(2)]);
var inst_31230 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31261__$1 = (function (){var statearr_31281 = state_31261;
(statearr_31281[(13)] = inst_31229);

return statearr_31281;
})();
var statearr_31282_31309 = state_31261__$1;
(statearr_31282_31309[(2)] = inst_31230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31262 === (8))){
var inst_31243 = (state_31261[(2)]);
var state_31261__$1 = state_31261;
var statearr_31283_31310 = state_31261__$1;
(statearr_31283_31310[(2)] = inst_31243);

(statearr_31283_31310[(1)] = (5));


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
});})(c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29128__auto__,c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31287[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31287[(1)] = (1));

return statearr_31287;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31261){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31288){if((e31288 instanceof Object)){
var ex__29132__auto__ = e31288;
var statearr_31289_31311 = state_31261;
(statearr_31289_31311[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31312 = state_31261;
state_31261 = G__31312;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29244__auto__ = (function (){var statearr_31290 = f__29243__auto__.call(null);
(statearr_31290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31295);

return statearr_31290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31295,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31314 = [];
var len__27777__auto___31372 = arguments.length;
var i__27778__auto___31373 = (0);
while(true){
if((i__27778__auto___31373 < len__27777__auto___31372)){
args31314.push((arguments[i__27778__auto___31373]));

var G__31374 = (i__27778__auto___31373 + (1));
i__27778__auto___31373 = G__31374;
continue;
} else {
}
break;
}

var G__31316 = args31314.length;
switch (G__31316) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31314.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___31376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31376,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31376,out){
return (function (state_31348){
var state_val_31349 = (state_31348[(1)]);
if((state_val_31349 === (7))){
var inst_31328 = (state_31348[(7)]);
var inst_31327 = (state_31348[(8)]);
var inst_31327__$1 = (state_31348[(2)]);
var inst_31328__$1 = cljs.core.nth.call(null,inst_31327__$1,(0),null);
var inst_31329 = cljs.core.nth.call(null,inst_31327__$1,(1),null);
var inst_31330 = (inst_31328__$1 == null);
var state_31348__$1 = (function (){var statearr_31350 = state_31348;
(statearr_31350[(7)] = inst_31328__$1);

(statearr_31350[(8)] = inst_31327__$1);

(statearr_31350[(9)] = inst_31329);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31330)){
var statearr_31351_31377 = state_31348__$1;
(statearr_31351_31377[(1)] = (8));

} else {
var statearr_31352_31378 = state_31348__$1;
(statearr_31352_31378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (1))){
var inst_31317 = cljs.core.vec.call(null,chs);
var inst_31318 = inst_31317;
var state_31348__$1 = (function (){var statearr_31353 = state_31348;
(statearr_31353[(10)] = inst_31318);

return statearr_31353;
})();
var statearr_31354_31379 = state_31348__$1;
(statearr_31354_31379[(2)] = null);

(statearr_31354_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (4))){
var inst_31318 = (state_31348[(10)]);
var state_31348__$1 = state_31348;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31348__$1,(7),inst_31318);
} else {
if((state_val_31349 === (6))){
var inst_31344 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31355_31380 = state_31348__$1;
(statearr_31355_31380[(2)] = inst_31344);

(statearr_31355_31380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (3))){
var inst_31346 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31348__$1,inst_31346);
} else {
if((state_val_31349 === (2))){
var inst_31318 = (state_31348[(10)]);
var inst_31320 = cljs.core.count.call(null,inst_31318);
var inst_31321 = (inst_31320 > (0));
var state_31348__$1 = state_31348;
if(cljs.core.truth_(inst_31321)){
var statearr_31357_31381 = state_31348__$1;
(statearr_31357_31381[(1)] = (4));

} else {
var statearr_31358_31382 = state_31348__$1;
(statearr_31358_31382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (11))){
var inst_31318 = (state_31348[(10)]);
var inst_31337 = (state_31348[(2)]);
var tmp31356 = inst_31318;
var inst_31318__$1 = tmp31356;
var state_31348__$1 = (function (){var statearr_31359 = state_31348;
(statearr_31359[(10)] = inst_31318__$1);

(statearr_31359[(11)] = inst_31337);

return statearr_31359;
})();
var statearr_31360_31383 = state_31348__$1;
(statearr_31360_31383[(2)] = null);

(statearr_31360_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (9))){
var inst_31328 = (state_31348[(7)]);
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31348__$1,(11),out,inst_31328);
} else {
if((state_val_31349 === (5))){
var inst_31342 = cljs.core.async.close_BANG_.call(null,out);
var state_31348__$1 = state_31348;
var statearr_31361_31384 = state_31348__$1;
(statearr_31361_31384[(2)] = inst_31342);

(statearr_31361_31384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (10))){
var inst_31340 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31362_31385 = state_31348__$1;
(statearr_31362_31385[(2)] = inst_31340);

(statearr_31362_31385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (8))){
var inst_31318 = (state_31348[(10)]);
var inst_31328 = (state_31348[(7)]);
var inst_31327 = (state_31348[(8)]);
var inst_31329 = (state_31348[(9)]);
var inst_31332 = (function (){var cs = inst_31318;
var vec__31323 = inst_31327;
var v = inst_31328;
var c = inst_31329;
return ((function (cs,vec__31323,v,c,inst_31318,inst_31328,inst_31327,inst_31329,state_val_31349,c__29242__auto___31376,out){
return (function (p1__31313_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31313_SHARP_);
});
;})(cs,vec__31323,v,c,inst_31318,inst_31328,inst_31327,inst_31329,state_val_31349,c__29242__auto___31376,out))
})();
var inst_31333 = cljs.core.filterv.call(null,inst_31332,inst_31318);
var inst_31318__$1 = inst_31333;
var state_31348__$1 = (function (){var statearr_31363 = state_31348;
(statearr_31363[(10)] = inst_31318__$1);

return statearr_31363;
})();
var statearr_31364_31386 = state_31348__$1;
(statearr_31364_31386[(2)] = null);

(statearr_31364_31386[(1)] = (2));


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
});})(c__29242__auto___31376,out))
;
return ((function (switch__29128__auto__,c__29242__auto___31376,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31348){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31369){if((e31369 instanceof Object)){
var ex__29132__auto__ = e31369;
var statearr_31370_31387 = state_31348;
(statearr_31370_31387[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31348;
state_31348 = G__31388;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31376,out))
})();
var state__29244__auto__ = (function (){var statearr_31371 = f__29243__auto__.call(null);
(statearr_31371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31376);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31376,out))
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
var args31389 = [];
var len__27777__auto___31438 = arguments.length;
var i__27778__auto___31439 = (0);
while(true){
if((i__27778__auto___31439 < len__27777__auto___31438)){
args31389.push((arguments[i__27778__auto___31439]));

var G__31440 = (i__27778__auto___31439 + (1));
i__27778__auto___31439 = G__31440;
continue;
} else {
}
break;
}

var G__31391 = args31389.length;
switch (G__31391) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31389.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___31442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31442,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31442,out){
return (function (state_31415){
var state_val_31416 = (state_31415[(1)]);
if((state_val_31416 === (7))){
var inst_31397 = (state_31415[(7)]);
var inst_31397__$1 = (state_31415[(2)]);
var inst_31398 = (inst_31397__$1 == null);
var inst_31399 = cljs.core.not.call(null,inst_31398);
var state_31415__$1 = (function (){var statearr_31417 = state_31415;
(statearr_31417[(7)] = inst_31397__$1);

return statearr_31417;
})();
if(inst_31399){
var statearr_31418_31443 = state_31415__$1;
(statearr_31418_31443[(1)] = (8));

} else {
var statearr_31419_31444 = state_31415__$1;
(statearr_31419_31444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (1))){
var inst_31392 = (0);
var state_31415__$1 = (function (){var statearr_31420 = state_31415;
(statearr_31420[(8)] = inst_31392);

return statearr_31420;
})();
var statearr_31421_31445 = state_31415__$1;
(statearr_31421_31445[(2)] = null);

(statearr_31421_31445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (4))){
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31415__$1,(7),ch);
} else {
if((state_val_31416 === (6))){
var inst_31410 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31422_31446 = state_31415__$1;
(statearr_31422_31446[(2)] = inst_31410);

(statearr_31422_31446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (3))){
var inst_31412 = (state_31415[(2)]);
var inst_31413 = cljs.core.async.close_BANG_.call(null,out);
var state_31415__$1 = (function (){var statearr_31423 = state_31415;
(statearr_31423[(9)] = inst_31412);

return statearr_31423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31415__$1,inst_31413);
} else {
if((state_val_31416 === (2))){
var inst_31392 = (state_31415[(8)]);
var inst_31394 = (inst_31392 < n);
var state_31415__$1 = state_31415;
if(cljs.core.truth_(inst_31394)){
var statearr_31424_31447 = state_31415__$1;
(statearr_31424_31447[(1)] = (4));

} else {
var statearr_31425_31448 = state_31415__$1;
(statearr_31425_31448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (11))){
var inst_31392 = (state_31415[(8)]);
var inst_31402 = (state_31415[(2)]);
var inst_31403 = (inst_31392 + (1));
var inst_31392__$1 = inst_31403;
var state_31415__$1 = (function (){var statearr_31426 = state_31415;
(statearr_31426[(8)] = inst_31392__$1);

(statearr_31426[(10)] = inst_31402);

return statearr_31426;
})();
var statearr_31427_31449 = state_31415__$1;
(statearr_31427_31449[(2)] = null);

(statearr_31427_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (9))){
var state_31415__$1 = state_31415;
var statearr_31428_31450 = state_31415__$1;
(statearr_31428_31450[(2)] = null);

(statearr_31428_31450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (5))){
var state_31415__$1 = state_31415;
var statearr_31429_31451 = state_31415__$1;
(statearr_31429_31451[(2)] = null);

(statearr_31429_31451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (10))){
var inst_31407 = (state_31415[(2)]);
var state_31415__$1 = state_31415;
var statearr_31430_31452 = state_31415__$1;
(statearr_31430_31452[(2)] = inst_31407);

(statearr_31430_31452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (8))){
var inst_31397 = (state_31415[(7)]);
var state_31415__$1 = state_31415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31415__$1,(11),out,inst_31397);
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
});})(c__29242__auto___31442,out))
;
return ((function (switch__29128__auto__,c__29242__auto___31442,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31415){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__29132__auto__ = e31435;
var statearr_31436_31453 = state_31415;
(statearr_31436_31453[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_31415;
state_31415 = G__31454;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31442,out))
})();
var state__29244__auto__ = (function (){var statearr_31437 = f__29243__auto__.call(null);
(statearr_31437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31442);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31442,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31462 = (function (map_LT_,f,ch,meta31463){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31463 = meta31463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31464,meta31463__$1){
var self__ = this;
var _31464__$1 = this;
return (new cljs.core.async.t_cljs$core$async31462(self__.map_LT_,self__.f,self__.ch,meta31463__$1));
});

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31464){
var self__ = this;
var _31464__$1 = this;
return self__.meta31463;
});

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31465 = (function (map_LT_,f,ch,meta31463,_,fn1,meta31466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31463 = meta31463;
this._ = _;
this.fn1 = fn1;
this.meta31466 = meta31466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31467,meta31466__$1){
var self__ = this;
var _31467__$1 = this;
return (new cljs.core.async.t_cljs$core$async31465(self__.map_LT_,self__.f,self__.ch,self__.meta31463,self__._,self__.fn1,meta31466__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31467){
var self__ = this;
var _31467__$1 = this;
return self__.meta31466;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31455_SHARP_){
return f1.call(null,(((p1__31455_SHARP_ == null))?null:self__.f.call(null,p1__31455_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31463","meta31463",295206272,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31462","cljs.core.async/t_cljs$core$async31462",-50988444,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31466","meta31466",1487694571,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31465";

cljs.core.async.t_cljs$core$async31465.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31465");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31465 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31465(map_LT___$1,f__$1,ch__$1,meta31463__$1,___$2,fn1__$1,meta31466){
return (new cljs.core.async.t_cljs$core$async31465(map_LT___$1,f__$1,ch__$1,meta31463__$1,___$2,fn1__$1,meta31466));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31465(self__.map_LT_,self__.f,self__.ch,self__.meta31463,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26582__auto__ = ret;
if(cljs.core.truth_(and__26582__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26582__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31463","meta31463",295206272,null)], null);
});

cljs.core.async.t_cljs$core$async31462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31462";

cljs.core.async.t_cljs$core$async31462.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31462");
});

cljs.core.async.__GT_t_cljs$core$async31462 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31462(map_LT___$1,f__$1,ch__$1,meta31463){
return (new cljs.core.async.t_cljs$core$async31462(map_LT___$1,f__$1,ch__$1,meta31463));
});

}

return (new cljs.core.async.t_cljs$core$async31462(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31471 = (function (map_GT_,f,ch,meta31472){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31472 = meta31472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31473,meta31472__$1){
var self__ = this;
var _31473__$1 = this;
return (new cljs.core.async.t_cljs$core$async31471(self__.map_GT_,self__.f,self__.ch,meta31472__$1));
});

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31473){
var self__ = this;
var _31473__$1 = this;
return self__.meta31472;
});

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31472","meta31472",321494357,null)], null);
});

cljs.core.async.t_cljs$core$async31471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31471";

cljs.core.async.t_cljs$core$async31471.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31471");
});

cljs.core.async.__GT_t_cljs$core$async31471 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31471(map_GT___$1,f__$1,ch__$1,meta31472){
return (new cljs.core.async.t_cljs$core$async31471(map_GT___$1,f__$1,ch__$1,meta31472));
});

}

return (new cljs.core.async.t_cljs$core$async31471(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31477 = (function (filter_GT_,p,ch,meta31478){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31478 = meta31478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31479,meta31478__$1){
var self__ = this;
var _31479__$1 = this;
return (new cljs.core.async.t_cljs$core$async31477(self__.filter_GT_,self__.p,self__.ch,meta31478__$1));
});

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31479){
var self__ = this;
var _31479__$1 = this;
return self__.meta31478;
});

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31478","meta31478",-783811586,null)], null);
});

cljs.core.async.t_cljs$core$async31477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31477";

cljs.core.async.t_cljs$core$async31477.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31477");
});

cljs.core.async.__GT_t_cljs$core$async31477 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31477(filter_GT___$1,p__$1,ch__$1,meta31478){
return (new cljs.core.async.t_cljs$core$async31477(filter_GT___$1,p__$1,ch__$1,meta31478));
});

}

return (new cljs.core.async.t_cljs$core$async31477(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31480 = [];
var len__27777__auto___31524 = arguments.length;
var i__27778__auto___31525 = (0);
while(true){
if((i__27778__auto___31525 < len__27777__auto___31524)){
args31480.push((arguments[i__27778__auto___31525]));

var G__31526 = (i__27778__auto___31525 + (1));
i__27778__auto___31525 = G__31526;
continue;
} else {
}
break;
}

var G__31482 = args31480.length;
switch (G__31482) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31480.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___31528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31528,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31528,out){
return (function (state_31503){
var state_val_31504 = (state_31503[(1)]);
if((state_val_31504 === (7))){
var inst_31499 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31505_31529 = state_31503__$1;
(statearr_31505_31529[(2)] = inst_31499);

(statearr_31505_31529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (1))){
var state_31503__$1 = state_31503;
var statearr_31506_31530 = state_31503__$1;
(statearr_31506_31530[(2)] = null);

(statearr_31506_31530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (4))){
var inst_31485 = (state_31503[(7)]);
var inst_31485__$1 = (state_31503[(2)]);
var inst_31486 = (inst_31485__$1 == null);
var state_31503__$1 = (function (){var statearr_31507 = state_31503;
(statearr_31507[(7)] = inst_31485__$1);

return statearr_31507;
})();
if(cljs.core.truth_(inst_31486)){
var statearr_31508_31531 = state_31503__$1;
(statearr_31508_31531[(1)] = (5));

} else {
var statearr_31509_31532 = state_31503__$1;
(statearr_31509_31532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (6))){
var inst_31485 = (state_31503[(7)]);
var inst_31490 = p.call(null,inst_31485);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31490)){
var statearr_31510_31533 = state_31503__$1;
(statearr_31510_31533[(1)] = (8));

} else {
var statearr_31511_31534 = state_31503__$1;
(statearr_31511_31534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (3))){
var inst_31501 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31503__$1,inst_31501);
} else {
if((state_val_31504 === (2))){
var state_31503__$1 = state_31503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31503__$1,(4),ch);
} else {
if((state_val_31504 === (11))){
var inst_31493 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31512_31535 = state_31503__$1;
(statearr_31512_31535[(2)] = inst_31493);

(statearr_31512_31535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (9))){
var state_31503__$1 = state_31503;
var statearr_31513_31536 = state_31503__$1;
(statearr_31513_31536[(2)] = null);

(statearr_31513_31536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (5))){
var inst_31488 = cljs.core.async.close_BANG_.call(null,out);
var state_31503__$1 = state_31503;
var statearr_31514_31537 = state_31503__$1;
(statearr_31514_31537[(2)] = inst_31488);

(statearr_31514_31537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (10))){
var inst_31496 = (state_31503[(2)]);
var state_31503__$1 = (function (){var statearr_31515 = state_31503;
(statearr_31515[(8)] = inst_31496);

return statearr_31515;
})();
var statearr_31516_31538 = state_31503__$1;
(statearr_31516_31538[(2)] = null);

(statearr_31516_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (8))){
var inst_31485 = (state_31503[(7)]);
var state_31503__$1 = state_31503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31503__$1,(11),out,inst_31485);
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
});})(c__29242__auto___31528,out))
;
return ((function (switch__29128__auto__,c__29242__auto___31528,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31520 = [null,null,null,null,null,null,null,null,null];
(statearr_31520[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31520[(1)] = (1));

return statearr_31520;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31503){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31521){if((e31521 instanceof Object)){
var ex__29132__auto__ = e31521;
var statearr_31522_31539 = state_31503;
(statearr_31522_31539[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31540 = state_31503;
state_31503 = G__31540;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31528,out))
})();
var state__29244__auto__ = (function (){var statearr_31523 = f__29243__auto__.call(null);
(statearr_31523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31528);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31528,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31541 = [];
var len__27777__auto___31544 = arguments.length;
var i__27778__auto___31545 = (0);
while(true){
if((i__27778__auto___31545 < len__27777__auto___31544)){
args31541.push((arguments[i__27778__auto___31545]));

var G__31546 = (i__27778__auto___31545 + (1));
i__27778__auto___31545 = G__31546;
continue;
} else {
}
break;
}

var G__31543 = args31541.length;
switch (G__31543) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31541.length)].join('')));

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
var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__){
return (function (state_31713){
var state_val_31714 = (state_31713[(1)]);
if((state_val_31714 === (7))){
var inst_31709 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31715_31756 = state_31713__$1;
(statearr_31715_31756[(2)] = inst_31709);

(statearr_31715_31756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (20))){
var inst_31679 = (state_31713[(7)]);
var inst_31690 = (state_31713[(2)]);
var inst_31691 = cljs.core.next.call(null,inst_31679);
var inst_31665 = inst_31691;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31713__$1 = (function (){var statearr_31716 = state_31713;
(statearr_31716[(8)] = inst_31668);

(statearr_31716[(9)] = inst_31690);

(statearr_31716[(10)] = inst_31665);

(statearr_31716[(11)] = inst_31667);

(statearr_31716[(12)] = inst_31666);

return statearr_31716;
})();
var statearr_31717_31757 = state_31713__$1;
(statearr_31717_31757[(2)] = null);

(statearr_31717_31757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (1))){
var state_31713__$1 = state_31713;
var statearr_31718_31758 = state_31713__$1;
(statearr_31718_31758[(2)] = null);

(statearr_31718_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (4))){
var inst_31654 = (state_31713[(13)]);
var inst_31654__$1 = (state_31713[(2)]);
var inst_31655 = (inst_31654__$1 == null);
var state_31713__$1 = (function (){var statearr_31719 = state_31713;
(statearr_31719[(13)] = inst_31654__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31655)){
var statearr_31720_31759 = state_31713__$1;
(statearr_31720_31759[(1)] = (5));

} else {
var statearr_31721_31760 = state_31713__$1;
(statearr_31721_31760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (15))){
var state_31713__$1 = state_31713;
var statearr_31725_31761 = state_31713__$1;
(statearr_31725_31761[(2)] = null);

(statearr_31725_31761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (21))){
var state_31713__$1 = state_31713;
var statearr_31726_31762 = state_31713__$1;
(statearr_31726_31762[(2)] = null);

(statearr_31726_31762[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (13))){
var inst_31668 = (state_31713[(8)]);
var inst_31665 = (state_31713[(10)]);
var inst_31667 = (state_31713[(11)]);
var inst_31666 = (state_31713[(12)]);
var inst_31675 = (state_31713[(2)]);
var inst_31676 = (inst_31668 + (1));
var tmp31722 = inst_31665;
var tmp31723 = inst_31667;
var tmp31724 = inst_31666;
var inst_31665__$1 = tmp31722;
var inst_31666__$1 = tmp31724;
var inst_31667__$1 = tmp31723;
var inst_31668__$1 = inst_31676;
var state_31713__$1 = (function (){var statearr_31727 = state_31713;
(statearr_31727[(8)] = inst_31668__$1);

(statearr_31727[(10)] = inst_31665__$1);

(statearr_31727[(11)] = inst_31667__$1);

(statearr_31727[(12)] = inst_31666__$1);

(statearr_31727[(14)] = inst_31675);

return statearr_31727;
})();
var statearr_31728_31763 = state_31713__$1;
(statearr_31728_31763[(2)] = null);

(statearr_31728_31763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (22))){
var state_31713__$1 = state_31713;
var statearr_31729_31764 = state_31713__$1;
(statearr_31729_31764[(2)] = null);

(statearr_31729_31764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (6))){
var inst_31654 = (state_31713[(13)]);
var inst_31663 = f.call(null,inst_31654);
var inst_31664 = cljs.core.seq.call(null,inst_31663);
var inst_31665 = inst_31664;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31713__$1 = (function (){var statearr_31730 = state_31713;
(statearr_31730[(8)] = inst_31668);

(statearr_31730[(10)] = inst_31665);

(statearr_31730[(11)] = inst_31667);

(statearr_31730[(12)] = inst_31666);

return statearr_31730;
})();
var statearr_31731_31765 = state_31713__$1;
(statearr_31731_31765[(2)] = null);

(statearr_31731_31765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (17))){
var inst_31679 = (state_31713[(7)]);
var inst_31683 = cljs.core.chunk_first.call(null,inst_31679);
var inst_31684 = cljs.core.chunk_rest.call(null,inst_31679);
var inst_31685 = cljs.core.count.call(null,inst_31683);
var inst_31665 = inst_31684;
var inst_31666 = inst_31683;
var inst_31667 = inst_31685;
var inst_31668 = (0);
var state_31713__$1 = (function (){var statearr_31732 = state_31713;
(statearr_31732[(8)] = inst_31668);

(statearr_31732[(10)] = inst_31665);

(statearr_31732[(11)] = inst_31667);

(statearr_31732[(12)] = inst_31666);

return statearr_31732;
})();
var statearr_31733_31766 = state_31713__$1;
(statearr_31733_31766[(2)] = null);

(statearr_31733_31766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (3))){
var inst_31711 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31713__$1,inst_31711);
} else {
if((state_val_31714 === (12))){
var inst_31699 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31734_31767 = state_31713__$1;
(statearr_31734_31767[(2)] = inst_31699);

(statearr_31734_31767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (2))){
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31713__$1,(4),in$);
} else {
if((state_val_31714 === (23))){
var inst_31707 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31735_31768 = state_31713__$1;
(statearr_31735_31768[(2)] = inst_31707);

(statearr_31735_31768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (19))){
var inst_31694 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31736_31769 = state_31713__$1;
(statearr_31736_31769[(2)] = inst_31694);

(statearr_31736_31769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (11))){
var inst_31679 = (state_31713[(7)]);
var inst_31665 = (state_31713[(10)]);
var inst_31679__$1 = cljs.core.seq.call(null,inst_31665);
var state_31713__$1 = (function (){var statearr_31737 = state_31713;
(statearr_31737[(7)] = inst_31679__$1);

return statearr_31737;
})();
if(inst_31679__$1){
var statearr_31738_31770 = state_31713__$1;
(statearr_31738_31770[(1)] = (14));

} else {
var statearr_31739_31771 = state_31713__$1;
(statearr_31739_31771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (9))){
var inst_31701 = (state_31713[(2)]);
var inst_31702 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31713__$1 = (function (){var statearr_31740 = state_31713;
(statearr_31740[(15)] = inst_31701);

return statearr_31740;
})();
if(cljs.core.truth_(inst_31702)){
var statearr_31741_31772 = state_31713__$1;
(statearr_31741_31772[(1)] = (21));

} else {
var statearr_31742_31773 = state_31713__$1;
(statearr_31742_31773[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (5))){
var inst_31657 = cljs.core.async.close_BANG_.call(null,out);
var state_31713__$1 = state_31713;
var statearr_31743_31774 = state_31713__$1;
(statearr_31743_31774[(2)] = inst_31657);

(statearr_31743_31774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (14))){
var inst_31679 = (state_31713[(7)]);
var inst_31681 = cljs.core.chunked_seq_QMARK_.call(null,inst_31679);
var state_31713__$1 = state_31713;
if(inst_31681){
var statearr_31744_31775 = state_31713__$1;
(statearr_31744_31775[(1)] = (17));

} else {
var statearr_31745_31776 = state_31713__$1;
(statearr_31745_31776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (16))){
var inst_31697 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31746_31777 = state_31713__$1;
(statearr_31746_31777[(2)] = inst_31697);

(statearr_31746_31777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (10))){
var inst_31668 = (state_31713[(8)]);
var inst_31666 = (state_31713[(12)]);
var inst_31673 = cljs.core._nth.call(null,inst_31666,inst_31668);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31713__$1,(13),out,inst_31673);
} else {
if((state_val_31714 === (18))){
var inst_31679 = (state_31713[(7)]);
var inst_31688 = cljs.core.first.call(null,inst_31679);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31713__$1,(20),out,inst_31688);
} else {
if((state_val_31714 === (8))){
var inst_31668 = (state_31713[(8)]);
var inst_31667 = (state_31713[(11)]);
var inst_31670 = (inst_31668 < inst_31667);
var inst_31671 = inst_31670;
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31671)){
var statearr_31747_31778 = state_31713__$1;
(statearr_31747_31778[(1)] = (10));

} else {
var statearr_31748_31779 = state_31713__$1;
(statearr_31748_31779[(1)] = (11));

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
});})(c__29242__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_31752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31752[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__);

(statearr_31752[(1)] = (1));

return statearr_31752;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1 = (function (state_31713){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31753){if((e31753 instanceof Object)){
var ex__29132__auto__ = e31753;
var statearr_31754_31780 = state_31713;
(statearr_31754_31780[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31781 = state_31713;
state_31713 = G__31781;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__ = function(state_31713){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1.call(this,state_31713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__))
})();
var state__29244__auto__ = (function (){var statearr_31755 = f__29243__auto__.call(null);
(statearr_31755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__))
);

return c__29242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31782 = [];
var len__27777__auto___31785 = arguments.length;
var i__27778__auto___31786 = (0);
while(true){
if((i__27778__auto___31786 < len__27777__auto___31785)){
args31782.push((arguments[i__27778__auto___31786]));

var G__31787 = (i__27778__auto___31786 + (1));
i__27778__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var G__31784 = args31782.length;
switch (G__31784) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31782.length)].join('')));

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
var args31789 = [];
var len__27777__auto___31792 = arguments.length;
var i__27778__auto___31793 = (0);
while(true){
if((i__27778__auto___31793 < len__27777__auto___31792)){
args31789.push((arguments[i__27778__auto___31793]));

var G__31794 = (i__27778__auto___31793 + (1));
i__27778__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31791 = args31789.length;
switch (G__31791) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31789.length)].join('')));

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
var args31796 = [];
var len__27777__auto___31847 = arguments.length;
var i__27778__auto___31848 = (0);
while(true){
if((i__27778__auto___31848 < len__27777__auto___31847)){
args31796.push((arguments[i__27778__auto___31848]));

var G__31849 = (i__27778__auto___31848 + (1));
i__27778__auto___31848 = G__31849;
continue;
} else {
}
break;
}

var G__31798 = args31796.length;
switch (G__31798) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31796.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___31851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31851,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31851,out){
return (function (state_31822){
var state_val_31823 = (state_31822[(1)]);
if((state_val_31823 === (7))){
var inst_31817 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
var statearr_31824_31852 = state_31822__$1;
(statearr_31824_31852[(2)] = inst_31817);

(statearr_31824_31852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (1))){
var inst_31799 = null;
var state_31822__$1 = (function (){var statearr_31825 = state_31822;
(statearr_31825[(7)] = inst_31799);

return statearr_31825;
})();
var statearr_31826_31853 = state_31822__$1;
(statearr_31826_31853[(2)] = null);

(statearr_31826_31853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (4))){
var inst_31802 = (state_31822[(8)]);
var inst_31802__$1 = (state_31822[(2)]);
var inst_31803 = (inst_31802__$1 == null);
var inst_31804 = cljs.core.not.call(null,inst_31803);
var state_31822__$1 = (function (){var statearr_31827 = state_31822;
(statearr_31827[(8)] = inst_31802__$1);

return statearr_31827;
})();
if(inst_31804){
var statearr_31828_31854 = state_31822__$1;
(statearr_31828_31854[(1)] = (5));

} else {
var statearr_31829_31855 = state_31822__$1;
(statearr_31829_31855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (6))){
var state_31822__$1 = state_31822;
var statearr_31830_31856 = state_31822__$1;
(statearr_31830_31856[(2)] = null);

(statearr_31830_31856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (3))){
var inst_31819 = (state_31822[(2)]);
var inst_31820 = cljs.core.async.close_BANG_.call(null,out);
var state_31822__$1 = (function (){var statearr_31831 = state_31822;
(statearr_31831[(9)] = inst_31819);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31822__$1,inst_31820);
} else {
if((state_val_31823 === (2))){
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31822__$1,(4),ch);
} else {
if((state_val_31823 === (11))){
var inst_31802 = (state_31822[(8)]);
var inst_31811 = (state_31822[(2)]);
var inst_31799 = inst_31802;
var state_31822__$1 = (function (){var statearr_31832 = state_31822;
(statearr_31832[(10)] = inst_31811);

(statearr_31832[(7)] = inst_31799);

return statearr_31832;
})();
var statearr_31833_31857 = state_31822__$1;
(statearr_31833_31857[(2)] = null);

(statearr_31833_31857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (9))){
var inst_31802 = (state_31822[(8)]);
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31822__$1,(11),out,inst_31802);
} else {
if((state_val_31823 === (5))){
var inst_31802 = (state_31822[(8)]);
var inst_31799 = (state_31822[(7)]);
var inst_31806 = cljs.core._EQ_.call(null,inst_31802,inst_31799);
var state_31822__$1 = state_31822;
if(inst_31806){
var statearr_31835_31858 = state_31822__$1;
(statearr_31835_31858[(1)] = (8));

} else {
var statearr_31836_31859 = state_31822__$1;
(statearr_31836_31859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (10))){
var inst_31814 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
var statearr_31837_31860 = state_31822__$1;
(statearr_31837_31860[(2)] = inst_31814);

(statearr_31837_31860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (8))){
var inst_31799 = (state_31822[(7)]);
var tmp31834 = inst_31799;
var inst_31799__$1 = tmp31834;
var state_31822__$1 = (function (){var statearr_31838 = state_31822;
(statearr_31838[(7)] = inst_31799__$1);

return statearr_31838;
})();
var statearr_31839_31861 = state_31822__$1;
(statearr_31839_31861[(2)] = null);

(statearr_31839_31861[(1)] = (2));


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
});})(c__29242__auto___31851,out))
;
return ((function (switch__29128__auto__,c__29242__auto___31851,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31843[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31843[(1)] = (1));

return statearr_31843;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31822){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31844){if((e31844 instanceof Object)){
var ex__29132__auto__ = e31844;
var statearr_31845_31862 = state_31822;
(statearr_31845_31862[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31863 = state_31822;
state_31822 = G__31863;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31851,out))
})();
var state__29244__auto__ = (function (){var statearr_31846 = f__29243__auto__.call(null);
(statearr_31846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31851);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31851,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31864 = [];
var len__27777__auto___31934 = arguments.length;
var i__27778__auto___31935 = (0);
while(true){
if((i__27778__auto___31935 < len__27777__auto___31934)){
args31864.push((arguments[i__27778__auto___31935]));

var G__31936 = (i__27778__auto___31935 + (1));
i__27778__auto___31935 = G__31936;
continue;
} else {
}
break;
}

var G__31866 = args31864.length;
switch (G__31866) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31864.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___31938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___31938,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___31938,out){
return (function (state_31904){
var state_val_31905 = (state_31904[(1)]);
if((state_val_31905 === (7))){
var inst_31900 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
var statearr_31906_31939 = state_31904__$1;
(statearr_31906_31939[(2)] = inst_31900);

(statearr_31906_31939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (1))){
var inst_31867 = (new Array(n));
var inst_31868 = inst_31867;
var inst_31869 = (0);
var state_31904__$1 = (function (){var statearr_31907 = state_31904;
(statearr_31907[(7)] = inst_31869);

(statearr_31907[(8)] = inst_31868);

return statearr_31907;
})();
var statearr_31908_31940 = state_31904__$1;
(statearr_31908_31940[(2)] = null);

(statearr_31908_31940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (4))){
var inst_31872 = (state_31904[(9)]);
var inst_31872__$1 = (state_31904[(2)]);
var inst_31873 = (inst_31872__$1 == null);
var inst_31874 = cljs.core.not.call(null,inst_31873);
var state_31904__$1 = (function (){var statearr_31909 = state_31904;
(statearr_31909[(9)] = inst_31872__$1);

return statearr_31909;
})();
if(inst_31874){
var statearr_31910_31941 = state_31904__$1;
(statearr_31910_31941[(1)] = (5));

} else {
var statearr_31911_31942 = state_31904__$1;
(statearr_31911_31942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (15))){
var inst_31894 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
var statearr_31912_31943 = state_31904__$1;
(statearr_31912_31943[(2)] = inst_31894);

(statearr_31912_31943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (13))){
var state_31904__$1 = state_31904;
var statearr_31913_31944 = state_31904__$1;
(statearr_31913_31944[(2)] = null);

(statearr_31913_31944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (6))){
var inst_31869 = (state_31904[(7)]);
var inst_31890 = (inst_31869 > (0));
var state_31904__$1 = state_31904;
if(cljs.core.truth_(inst_31890)){
var statearr_31914_31945 = state_31904__$1;
(statearr_31914_31945[(1)] = (12));

} else {
var statearr_31915_31946 = state_31904__$1;
(statearr_31915_31946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (3))){
var inst_31902 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31904__$1,inst_31902);
} else {
if((state_val_31905 === (12))){
var inst_31868 = (state_31904[(8)]);
var inst_31892 = cljs.core.vec.call(null,inst_31868);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31904__$1,(15),out,inst_31892);
} else {
if((state_val_31905 === (2))){
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31904__$1,(4),ch);
} else {
if((state_val_31905 === (11))){
var inst_31884 = (state_31904[(2)]);
var inst_31885 = (new Array(n));
var inst_31868 = inst_31885;
var inst_31869 = (0);
var state_31904__$1 = (function (){var statearr_31916 = state_31904;
(statearr_31916[(7)] = inst_31869);

(statearr_31916[(10)] = inst_31884);

(statearr_31916[(8)] = inst_31868);

return statearr_31916;
})();
var statearr_31917_31947 = state_31904__$1;
(statearr_31917_31947[(2)] = null);

(statearr_31917_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (9))){
var inst_31868 = (state_31904[(8)]);
var inst_31882 = cljs.core.vec.call(null,inst_31868);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31904__$1,(11),out,inst_31882);
} else {
if((state_val_31905 === (5))){
var inst_31869 = (state_31904[(7)]);
var inst_31877 = (state_31904[(11)]);
var inst_31872 = (state_31904[(9)]);
var inst_31868 = (state_31904[(8)]);
var inst_31876 = (inst_31868[inst_31869] = inst_31872);
var inst_31877__$1 = (inst_31869 + (1));
var inst_31878 = (inst_31877__$1 < n);
var state_31904__$1 = (function (){var statearr_31918 = state_31904;
(statearr_31918[(11)] = inst_31877__$1);

(statearr_31918[(12)] = inst_31876);

return statearr_31918;
})();
if(cljs.core.truth_(inst_31878)){
var statearr_31919_31948 = state_31904__$1;
(statearr_31919_31948[(1)] = (8));

} else {
var statearr_31920_31949 = state_31904__$1;
(statearr_31920_31949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (14))){
var inst_31897 = (state_31904[(2)]);
var inst_31898 = cljs.core.async.close_BANG_.call(null,out);
var state_31904__$1 = (function (){var statearr_31922 = state_31904;
(statearr_31922[(13)] = inst_31897);

return statearr_31922;
})();
var statearr_31923_31950 = state_31904__$1;
(statearr_31923_31950[(2)] = inst_31898);

(statearr_31923_31950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (10))){
var inst_31888 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
var statearr_31924_31951 = state_31904__$1;
(statearr_31924_31951[(2)] = inst_31888);

(statearr_31924_31951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (8))){
var inst_31877 = (state_31904[(11)]);
var inst_31868 = (state_31904[(8)]);
var tmp31921 = inst_31868;
var inst_31868__$1 = tmp31921;
var inst_31869 = inst_31877;
var state_31904__$1 = (function (){var statearr_31925 = state_31904;
(statearr_31925[(7)] = inst_31869);

(statearr_31925[(8)] = inst_31868__$1);

return statearr_31925;
})();
var statearr_31926_31952 = state_31904__$1;
(statearr_31926_31952[(2)] = null);

(statearr_31926_31952[(1)] = (2));


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
});})(c__29242__auto___31938,out))
;
return ((function (switch__29128__auto__,c__29242__auto___31938,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_31930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31930[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_31930[(1)] = (1));

return statearr_31930;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31904){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e31931){if((e31931 instanceof Object)){
var ex__29132__auto__ = e31931;
var statearr_31932_31953 = state_31904;
(statearr_31932_31953[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31954 = state_31904;
state_31904 = G__31954;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___31938,out))
})();
var state__29244__auto__ = (function (){var statearr_31933 = f__29243__auto__.call(null);
(statearr_31933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___31938);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___31938,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31955 = [];
var len__27777__auto___32029 = arguments.length;
var i__27778__auto___32030 = (0);
while(true){
if((i__27778__auto___32030 < len__27777__auto___32029)){
args31955.push((arguments[i__27778__auto___32030]));

var G__32031 = (i__27778__auto___32030 + (1));
i__27778__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var G__31957 = args31955.length;
switch (G__31957) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31955.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29242__auto___32033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___32033,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___32033,out){
return (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (7))){
var inst_31995 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32001_32034 = state_31999__$1;
(statearr_32001_32034[(2)] = inst_31995);

(statearr_32001_32034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (1))){
var inst_31958 = [];
var inst_31959 = inst_31958;
var inst_31960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31999__$1 = (function (){var statearr_32002 = state_31999;
(statearr_32002[(7)] = inst_31960);

(statearr_32002[(8)] = inst_31959);

return statearr_32002;
})();
var statearr_32003_32035 = state_31999__$1;
(statearr_32003_32035[(2)] = null);

(statearr_32003_32035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (4))){
var inst_31963 = (state_31999[(9)]);
var inst_31963__$1 = (state_31999[(2)]);
var inst_31964 = (inst_31963__$1 == null);
var inst_31965 = cljs.core.not.call(null,inst_31964);
var state_31999__$1 = (function (){var statearr_32004 = state_31999;
(statearr_32004[(9)] = inst_31963__$1);

return statearr_32004;
})();
if(inst_31965){
var statearr_32005_32036 = state_31999__$1;
(statearr_32005_32036[(1)] = (5));

} else {
var statearr_32006_32037 = state_31999__$1;
(statearr_32006_32037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (15))){
var inst_31989 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32007_32038 = state_31999__$1;
(statearr_32007_32038[(2)] = inst_31989);

(statearr_32007_32038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (13))){
var state_31999__$1 = state_31999;
var statearr_32008_32039 = state_31999__$1;
(statearr_32008_32039[(2)] = null);

(statearr_32008_32039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (6))){
var inst_31959 = (state_31999[(8)]);
var inst_31984 = inst_31959.length;
var inst_31985 = (inst_31984 > (0));
var state_31999__$1 = state_31999;
if(cljs.core.truth_(inst_31985)){
var statearr_32009_32040 = state_31999__$1;
(statearr_32009_32040[(1)] = (12));

} else {
var statearr_32010_32041 = state_31999__$1;
(statearr_32010_32041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31997 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31999__$1,inst_31997);
} else {
if((state_val_32000 === (12))){
var inst_31959 = (state_31999[(8)]);
var inst_31987 = cljs.core.vec.call(null,inst_31959);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31999__$1,(15),out,inst_31987);
} else {
if((state_val_32000 === (2))){
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31999__$1,(4),ch);
} else {
if((state_val_32000 === (11))){
var inst_31967 = (state_31999[(10)]);
var inst_31963 = (state_31999[(9)]);
var inst_31977 = (state_31999[(2)]);
var inst_31978 = [];
var inst_31979 = inst_31978.push(inst_31963);
var inst_31959 = inst_31978;
var inst_31960 = inst_31967;
var state_31999__$1 = (function (){var statearr_32011 = state_31999;
(statearr_32011[(7)] = inst_31960);

(statearr_32011[(11)] = inst_31977);

(statearr_32011[(12)] = inst_31979);

(statearr_32011[(8)] = inst_31959);

return statearr_32011;
})();
var statearr_32012_32042 = state_31999__$1;
(statearr_32012_32042[(2)] = null);

(statearr_32012_32042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (9))){
var inst_31959 = (state_31999[(8)]);
var inst_31975 = cljs.core.vec.call(null,inst_31959);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31999__$1,(11),out,inst_31975);
} else {
if((state_val_32000 === (5))){
var inst_31967 = (state_31999[(10)]);
var inst_31963 = (state_31999[(9)]);
var inst_31960 = (state_31999[(7)]);
var inst_31967__$1 = f.call(null,inst_31963);
var inst_31968 = cljs.core._EQ_.call(null,inst_31967__$1,inst_31960);
var inst_31969 = cljs.core.keyword_identical_QMARK_.call(null,inst_31960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31970 = (inst_31968) || (inst_31969);
var state_31999__$1 = (function (){var statearr_32013 = state_31999;
(statearr_32013[(10)] = inst_31967__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31970)){
var statearr_32014_32043 = state_31999__$1;
(statearr_32014_32043[(1)] = (8));

} else {
var statearr_32015_32044 = state_31999__$1;
(statearr_32015_32044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (14))){
var inst_31992 = (state_31999[(2)]);
var inst_31993 = cljs.core.async.close_BANG_.call(null,out);
var state_31999__$1 = (function (){var statearr_32017 = state_31999;
(statearr_32017[(13)] = inst_31992);

return statearr_32017;
})();
var statearr_32018_32045 = state_31999__$1;
(statearr_32018_32045[(2)] = inst_31993);

(statearr_32018_32045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (10))){
var inst_31982 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32019_32046 = state_31999__$1;
(statearr_32019_32046[(2)] = inst_31982);

(statearr_32019_32046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (8))){
var inst_31967 = (state_31999[(10)]);
var inst_31963 = (state_31999[(9)]);
var inst_31959 = (state_31999[(8)]);
var inst_31972 = inst_31959.push(inst_31963);
var tmp32016 = inst_31959;
var inst_31959__$1 = tmp32016;
var inst_31960 = inst_31967;
var state_31999__$1 = (function (){var statearr_32020 = state_31999;
(statearr_32020[(7)] = inst_31960);

(statearr_32020[(8)] = inst_31959__$1);

(statearr_32020[(14)] = inst_31972);

return statearr_32020;
})();
var statearr_32021_32047 = state_31999__$1;
(statearr_32021_32047[(2)] = null);

(statearr_32021_32047[(1)] = (2));


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
});})(c__29242__auto___32033,out))
;
return ((function (switch__29128__auto__,c__29242__auto___32033,out){
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_31999){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_31999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e32026){if((e32026 instanceof Object)){
var ex__29132__auto__ = e32026;
var statearr_32027_32048 = state_31999;
(statearr_32027_32048[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32049 = state_31999;
state_31999 = G__32049;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___32033,out))
})();
var state__29244__auto__ = (function (){var statearr_32028 = f__29243__auto__.call(null);
(statearr_32028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___32033);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___32033,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1492572232820