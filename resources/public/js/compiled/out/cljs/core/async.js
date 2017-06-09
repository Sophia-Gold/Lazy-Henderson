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
var args29319 = [];
var len__27777__auto___29325 = arguments.length;
var i__27778__auto___29326 = (0);
while(true){
if((i__27778__auto___29326 < len__27777__auto___29325)){
args29319.push((arguments[i__27778__auto___29326]));

var G__29327 = (i__27778__auto___29326 + (1));
i__27778__auto___29326 = G__29327;
continue;
} else {
}
break;
}

var G__29321 = args29319.length;
switch (G__29321) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29319.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29322 = (function (f,blockable,meta29323){
this.f = f;
this.blockable = blockable;
this.meta29323 = meta29323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29324,meta29323__$1){
var self__ = this;
var _29324__$1 = this;
return (new cljs.core.async.t_cljs$core$async29322(self__.f,self__.blockable,meta29323__$1));
});

cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29324){
var self__ = this;
var _29324__$1 = this;
return self__.meta29323;
});

cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29323","meta29323",-990407166,null)], null);
});

cljs.core.async.t_cljs$core$async29322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29322";

cljs.core.async.t_cljs$core$async29322.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29322");
});

cljs.core.async.__GT_t_cljs$core$async29322 = (function cljs$core$async$__GT_t_cljs$core$async29322(f__$1,blockable__$1,meta29323){
return (new cljs.core.async.t_cljs$core$async29322(f__$1,blockable__$1,meta29323));
});

}

return (new cljs.core.async.t_cljs$core$async29322(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29331 = [];
var len__27777__auto___29334 = arguments.length;
var i__27778__auto___29335 = (0);
while(true){
if((i__27778__auto___29335 < len__27777__auto___29334)){
args29331.push((arguments[i__27778__auto___29335]));

var G__29336 = (i__27778__auto___29335 + (1));
i__27778__auto___29335 = G__29336;
continue;
} else {
}
break;
}

var G__29333 = args29331.length;
switch (G__29333) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29331.length)].join('')));

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
var args29338 = [];
var len__27777__auto___29341 = arguments.length;
var i__27778__auto___29342 = (0);
while(true){
if((i__27778__auto___29342 < len__27777__auto___29341)){
args29338.push((arguments[i__27778__auto___29342]));

var G__29343 = (i__27778__auto___29342 + (1));
i__27778__auto___29342 = G__29343;
continue;
} else {
}
break;
}

var G__29340 = args29338.length;
switch (G__29340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29338.length)].join('')));

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
var args29345 = [];
var len__27777__auto___29348 = arguments.length;
var i__27778__auto___29349 = (0);
while(true){
if((i__27778__auto___29349 < len__27777__auto___29348)){
args29345.push((arguments[i__27778__auto___29349]));

var G__29350 = (i__27778__auto___29349 + (1));
i__27778__auto___29349 = G__29350;
continue;
} else {
}
break;
}

var G__29347 = args29345.length;
switch (G__29347) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29345.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29352 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29352);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29352,ret){
return (function (){
return fn1.call(null,val_29352);
});})(val_29352,ret))
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
var args29353 = [];
var len__27777__auto___29356 = arguments.length;
var i__27778__auto___29357 = (0);
while(true){
if((i__27778__auto___29357 < len__27777__auto___29356)){
args29353.push((arguments[i__27778__auto___29357]));

var G__29358 = (i__27778__auto___29357 + (1));
i__27778__auto___29357 = G__29358;
continue;
} else {
}
break;
}

var G__29355 = args29353.length;
switch (G__29355) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29353.length)].join('')));

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
var n__27607__auto___29360 = n;
var x_29361 = (0);
while(true){
if((x_29361 < n__27607__auto___29360)){
(a[x_29361] = (0));

var G__29362 = (x_29361 + (1));
x_29361 = G__29362;
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

var G__29363 = (i + (1));
i = G__29363;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29367 = (function (alt_flag,flag,meta29368){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29368 = meta29368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29369,meta29368__$1){
var self__ = this;
var _29369__$1 = this;
return (new cljs.core.async.t_cljs$core$async29367(self__.alt_flag,self__.flag,meta29368__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29369){
var self__ = this;
var _29369__$1 = this;
return self__.meta29368;
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29368","meta29368",-1456587865,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29367";

cljs.core.async.t_cljs$core$async29367.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29367");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29367 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29367(alt_flag__$1,flag__$1,meta29368){
return (new cljs.core.async.t_cljs$core$async29367(alt_flag__$1,flag__$1,meta29368));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29367(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29373 = (function (alt_handler,flag,cb,meta29374){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29374 = meta29374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29375,meta29374__$1){
var self__ = this;
var _29375__$1 = this;
return (new cljs.core.async.t_cljs$core$async29373(self__.alt_handler,self__.flag,self__.cb,meta29374__$1));
});

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29375){
var self__ = this;
var _29375__$1 = this;
return self__.meta29374;
});

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29374","meta29374",82112118,null)], null);
});

cljs.core.async.t_cljs$core$async29373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29373";

cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async29373");
});

cljs.core.async.__GT_t_cljs$core$async29373 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29373(alt_handler__$1,flag__$1,cb__$1,meta29374){
return (new cljs.core.async.t_cljs$core$async29373(alt_handler__$1,flag__$1,cb__$1,meta29374));
});

}

return (new cljs.core.async.t_cljs$core$async29373(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29376_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29376_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29377_SHARP_,port], null));
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
var G__29378 = (i + (1));
i = G__29378;
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
var len__27777__auto___29384 = arguments.length;
var i__27778__auto___29385 = (0);
while(true){
if((i__27778__auto___29385 < len__27777__auto___29384)){
args__27784__auto__.push((arguments[i__27778__auto___29385]));

var G__29386 = (i__27778__auto___29385 + (1));
i__27778__auto___29385 = G__29386;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((1) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29381){
var map__29382 = p__29381;
var map__29382__$1 = ((((!((map__29382 == null)))?((((map__29382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29382):map__29382);
var opts = map__29382__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29379){
var G__29380 = cljs.core.first.call(null,seq29379);
var seq29379__$1 = cljs.core.next.call(null,seq29379);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29380,seq29379__$1);
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
var args29387 = [];
var len__27777__auto___29437 = arguments.length;
var i__27778__auto___29438 = (0);
while(true){
if((i__27778__auto___29438 < len__27777__auto___29437)){
args29387.push((arguments[i__27778__auto___29438]));

var G__29439 = (i__27778__auto___29438 + (1));
i__27778__auto___29438 = G__29439;
continue;
} else {
}
break;
}

var G__29389 = args29387.length;
switch (G__29389) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29387.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29260__auto___29441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___29441){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___29441){
return (function (state_29413){
var state_val_29414 = (state_29413[(1)]);
if((state_val_29414 === (7))){
var inst_29409 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29415_29442 = state_29413__$1;
(statearr_29415_29442[(2)] = inst_29409);

(statearr_29415_29442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (1))){
var state_29413__$1 = state_29413;
var statearr_29416_29443 = state_29413__$1;
(statearr_29416_29443[(2)] = null);

(statearr_29416_29443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (4))){
var inst_29392 = (state_29413[(7)]);
var inst_29392__$1 = (state_29413[(2)]);
var inst_29393 = (inst_29392__$1 == null);
var state_29413__$1 = (function (){var statearr_29417 = state_29413;
(statearr_29417[(7)] = inst_29392__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29393)){
var statearr_29418_29444 = state_29413__$1;
(statearr_29418_29444[(1)] = (5));

} else {
var statearr_29419_29445 = state_29413__$1;
(statearr_29419_29445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (13))){
var state_29413__$1 = state_29413;
var statearr_29420_29446 = state_29413__$1;
(statearr_29420_29446[(2)] = null);

(statearr_29420_29446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (6))){
var inst_29392 = (state_29413[(7)]);
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29413__$1,(11),to,inst_29392);
} else {
if((state_val_29414 === (3))){
var inst_29411 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29413__$1,inst_29411);
} else {
if((state_val_29414 === (12))){
var state_29413__$1 = state_29413;
var statearr_29421_29447 = state_29413__$1;
(statearr_29421_29447[(2)] = null);

(statearr_29421_29447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (2))){
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29413__$1,(4),from);
} else {
if((state_val_29414 === (11))){
var inst_29402 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
if(cljs.core.truth_(inst_29402)){
var statearr_29422_29448 = state_29413__$1;
(statearr_29422_29448[(1)] = (12));

} else {
var statearr_29423_29449 = state_29413__$1;
(statearr_29423_29449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (9))){
var state_29413__$1 = state_29413;
var statearr_29424_29450 = state_29413__$1;
(statearr_29424_29450[(2)] = null);

(statearr_29424_29450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (5))){
var state_29413__$1 = state_29413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29425_29451 = state_29413__$1;
(statearr_29425_29451[(1)] = (8));

} else {
var statearr_29426_29452 = state_29413__$1;
(statearr_29426_29452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (14))){
var inst_29407 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29427_29453 = state_29413__$1;
(statearr_29427_29453[(2)] = inst_29407);

(statearr_29427_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (10))){
var inst_29399 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29428_29454 = state_29413__$1;
(statearr_29428_29454[(2)] = inst_29399);

(statearr_29428_29454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (8))){
var inst_29396 = cljs.core.async.close_BANG_.call(null,to);
var state_29413__$1 = state_29413;
var statearr_29429_29455 = state_29413__$1;
(statearr_29429_29455[(2)] = inst_29396);

(statearr_29429_29455[(1)] = (10));


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
});})(c__29260__auto___29441))
;
return ((function (switch__29146__auto__,c__29260__auto___29441){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_29433 = [null,null,null,null,null,null,null,null];
(statearr_29433[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_29433[(1)] = (1));

return statearr_29433;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_29413){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29434){if((e29434 instanceof Object)){
var ex__29150__auto__ = e29434;
var statearr_29435_29456 = state_29413;
(statearr_29435_29456[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29457 = state_29413;
state_29413 = G__29457;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_29413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_29413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___29441))
})();
var state__29262__auto__ = (function (){var statearr_29436 = f__29261__auto__.call(null);
(statearr_29436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29441);

return statearr_29436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___29441))
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
return (function (p__29645){
var vec__29646 = p__29645;
var v = cljs.core.nth.call(null,vec__29646,(0),null);
var p = cljs.core.nth.call(null,vec__29646,(1),null);
var job = vec__29646;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29260__auto___29832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results){
return (function (state_29653){
var state_val_29654 = (state_29653[(1)]);
if((state_val_29654 === (1))){
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29653__$1,(2),res,v);
} else {
if((state_val_29654 === (2))){
var inst_29650 = (state_29653[(2)]);
var inst_29651 = cljs.core.async.close_BANG_.call(null,res);
var state_29653__$1 = (function (){var statearr_29655 = state_29653;
(statearr_29655[(7)] = inst_29650);

return statearr_29655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29653__$1,inst_29651);
} else {
return null;
}
}
});})(c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results))
;
return ((function (switch__29146__auto__,c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29659 = [null,null,null,null,null,null,null,null];
(statearr_29659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29659[(1)] = (1));

return statearr_29659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29653){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29660){if((e29660 instanceof Object)){
var ex__29150__auto__ = e29660;
var statearr_29661_29833 = state_29653;
(statearr_29661_29833[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29834 = state_29653;
state_29653 = G__29834;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results))
})();
var state__29262__auto__ = (function (){var statearr_29662 = f__29261__auto__.call(null);
(statearr_29662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29832);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___29832,res,vec__29646,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29663){
var vec__29664 = p__29663;
var v = cljs.core.nth.call(null,vec__29664,(0),null);
var p = cljs.core.nth.call(null,vec__29664,(1),null);
var job = vec__29664;
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
var n__27607__auto___29835 = n;
var __29836 = (0);
while(true){
if((__29836 < n__27607__auto___29835)){
var G__29667_29837 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29667_29837) {
case "compute":
var c__29260__auto___29839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29836,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (__29836,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function (state_29680){
var state_val_29681 = (state_29680[(1)]);
if((state_val_29681 === (1))){
var state_29680__$1 = state_29680;
var statearr_29682_29840 = state_29680__$1;
(statearr_29682_29840[(2)] = null);

(statearr_29682_29840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (2))){
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(4),jobs);
} else {
if((state_val_29681 === (3))){
var inst_29678 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29680__$1,inst_29678);
} else {
if((state_val_29681 === (4))){
var inst_29670 = (state_29680[(2)]);
var inst_29671 = process.call(null,inst_29670);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29671)){
var statearr_29683_29841 = state_29680__$1;
(statearr_29683_29841[(1)] = (5));

} else {
var statearr_29684_29842 = state_29680__$1;
(statearr_29684_29842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (5))){
var state_29680__$1 = state_29680;
var statearr_29685_29843 = state_29680__$1;
(statearr_29685_29843[(2)] = null);

(statearr_29685_29843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (6))){
var state_29680__$1 = state_29680;
var statearr_29686_29844 = state_29680__$1;
(statearr_29686_29844[(2)] = null);

(statearr_29686_29844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (7))){
var inst_29676 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29687_29845 = state_29680__$1;
(statearr_29687_29845[(2)] = inst_29676);

(statearr_29687_29845[(1)] = (3));


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
});})(__29836,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
;
return ((function (__29836,switch__29146__auto__,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29691 = [null,null,null,null,null,null,null];
(statearr_29691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29680){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object)){
var ex__29150__auto__ = e29692;
var statearr_29693_29846 = state_29680;
(statearr_29693_29846[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29847 = state_29680;
state_29680 = G__29847;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(__29836,switch__29146__auto__,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
})();
var state__29262__auto__ = (function (){var statearr_29694 = f__29261__auto__.call(null);
(statearr_29694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29839);

return statearr_29694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(__29836,c__29260__auto___29839,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
);


break;
case "async":
var c__29260__auto___29848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29836,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (__29836,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function (state_29707){
var state_val_29708 = (state_29707[(1)]);
if((state_val_29708 === (1))){
var state_29707__$1 = state_29707;
var statearr_29709_29849 = state_29707__$1;
(statearr_29709_29849[(2)] = null);

(statearr_29709_29849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (2))){
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29707__$1,(4),jobs);
} else {
if((state_val_29708 === (3))){
var inst_29705 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29707__$1,inst_29705);
} else {
if((state_val_29708 === (4))){
var inst_29697 = (state_29707[(2)]);
var inst_29698 = async.call(null,inst_29697);
var state_29707__$1 = state_29707;
if(cljs.core.truth_(inst_29698)){
var statearr_29710_29850 = state_29707__$1;
(statearr_29710_29850[(1)] = (5));

} else {
var statearr_29711_29851 = state_29707__$1;
(statearr_29711_29851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (5))){
var state_29707__$1 = state_29707;
var statearr_29712_29852 = state_29707__$1;
(statearr_29712_29852[(2)] = null);

(statearr_29712_29852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (6))){
var state_29707__$1 = state_29707;
var statearr_29713_29853 = state_29707__$1;
(statearr_29713_29853[(2)] = null);

(statearr_29713_29853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (7))){
var inst_29703 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29714_29854 = state_29707__$1;
(statearr_29714_29854[(2)] = inst_29703);

(statearr_29714_29854[(1)] = (3));


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
});})(__29836,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
;
return ((function (__29836,switch__29146__auto__,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29718 = [null,null,null,null,null,null,null];
(statearr_29718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29718[(1)] = (1));

return statearr_29718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29707){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29719){if((e29719 instanceof Object)){
var ex__29150__auto__ = e29719;
var statearr_29720_29855 = state_29707;
(statearr_29720_29855[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29856 = state_29707;
state_29707 = G__29856;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(__29836,switch__29146__auto__,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
})();
var state__29262__auto__ = (function (){var statearr_29721 = f__29261__auto__.call(null);
(statearr_29721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29848);

return statearr_29721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(__29836,c__29260__auto___29848,G__29667_29837,n__27607__auto___29835,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29857 = (__29836 + (1));
__29836 = G__29857;
continue;
} else {
}
break;
}

var c__29260__auto___29858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___29858,jobs,results,process,async){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___29858,jobs,results,process,async){
return (function (state_29743){
var state_val_29744 = (state_29743[(1)]);
if((state_val_29744 === (1))){
var state_29743__$1 = state_29743;
var statearr_29745_29859 = state_29743__$1;
(statearr_29745_29859[(2)] = null);

(statearr_29745_29859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (2))){
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29743__$1,(4),from);
} else {
if((state_val_29744 === (3))){
var inst_29741 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29743__$1,inst_29741);
} else {
if((state_val_29744 === (4))){
var inst_29724 = (state_29743[(7)]);
var inst_29724__$1 = (state_29743[(2)]);
var inst_29725 = (inst_29724__$1 == null);
var state_29743__$1 = (function (){var statearr_29746 = state_29743;
(statearr_29746[(7)] = inst_29724__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29747_29860 = state_29743__$1;
(statearr_29747_29860[(1)] = (5));

} else {
var statearr_29748_29861 = state_29743__$1;
(statearr_29748_29861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (5))){
var inst_29727 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29743__$1 = state_29743;
var statearr_29749_29862 = state_29743__$1;
(statearr_29749_29862[(2)] = inst_29727);

(statearr_29749_29862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (6))){
var inst_29729 = (state_29743[(8)]);
var inst_29724 = (state_29743[(7)]);
var inst_29729__$1 = cljs.core.async.chan.call(null,(1));
var inst_29730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29731 = [inst_29724,inst_29729__$1];
var inst_29732 = (new cljs.core.PersistentVector(null,2,(5),inst_29730,inst_29731,null));
var state_29743__$1 = (function (){var statearr_29750 = state_29743;
(statearr_29750[(8)] = inst_29729__$1);

return statearr_29750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29743__$1,(8),jobs,inst_29732);
} else {
if((state_val_29744 === (7))){
var inst_29739 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29751_29863 = state_29743__$1;
(statearr_29751_29863[(2)] = inst_29739);

(statearr_29751_29863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (8))){
var inst_29729 = (state_29743[(8)]);
var inst_29734 = (state_29743[(2)]);
var state_29743__$1 = (function (){var statearr_29752 = state_29743;
(statearr_29752[(9)] = inst_29734);

return statearr_29752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29743__$1,(9),results,inst_29729);
} else {
if((state_val_29744 === (9))){
var inst_29736 = (state_29743[(2)]);
var state_29743__$1 = (function (){var statearr_29753 = state_29743;
(statearr_29753[(10)] = inst_29736);

return statearr_29753;
})();
var statearr_29754_29864 = state_29743__$1;
(statearr_29754_29864[(2)] = null);

(statearr_29754_29864[(1)] = (2));


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
});})(c__29260__auto___29858,jobs,results,process,async))
;
return ((function (switch__29146__auto__,c__29260__auto___29858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29758[(1)] = (1));

return statearr_29758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29743){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29759){if((e29759 instanceof Object)){
var ex__29150__auto__ = e29759;
var statearr_29760_29865 = state_29743;
(statearr_29760_29865[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29866 = state_29743;
state_29743 = G__29866;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___29858,jobs,results,process,async))
})();
var state__29262__auto__ = (function (){var statearr_29761 = f__29261__auto__.call(null);
(statearr_29761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29858);

return statearr_29761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___29858,jobs,results,process,async))
);


var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__,jobs,results,process,async){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__,jobs,results,process,async){
return (function (state_29799){
var state_val_29800 = (state_29799[(1)]);
if((state_val_29800 === (7))){
var inst_29795 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29801_29867 = state_29799__$1;
(statearr_29801_29867[(2)] = inst_29795);

(statearr_29801_29867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (20))){
var state_29799__$1 = state_29799;
var statearr_29802_29868 = state_29799__$1;
(statearr_29802_29868[(2)] = null);

(statearr_29802_29868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (1))){
var state_29799__$1 = state_29799;
var statearr_29803_29869 = state_29799__$1;
(statearr_29803_29869[(2)] = null);

(statearr_29803_29869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (4))){
var inst_29764 = (state_29799[(7)]);
var inst_29764__$1 = (state_29799[(2)]);
var inst_29765 = (inst_29764__$1 == null);
var state_29799__$1 = (function (){var statearr_29804 = state_29799;
(statearr_29804[(7)] = inst_29764__$1);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29765)){
var statearr_29805_29870 = state_29799__$1;
(statearr_29805_29870[(1)] = (5));

} else {
var statearr_29806_29871 = state_29799__$1;
(statearr_29806_29871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (15))){
var inst_29777 = (state_29799[(8)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29799__$1,(18),to,inst_29777);
} else {
if((state_val_29800 === (21))){
var inst_29790 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29807_29872 = state_29799__$1;
(statearr_29807_29872[(2)] = inst_29790);

(statearr_29807_29872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (13))){
var inst_29792 = (state_29799[(2)]);
var state_29799__$1 = (function (){var statearr_29808 = state_29799;
(statearr_29808[(9)] = inst_29792);

return statearr_29808;
})();
var statearr_29809_29873 = state_29799__$1;
(statearr_29809_29873[(2)] = null);

(statearr_29809_29873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (6))){
var inst_29764 = (state_29799[(7)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,(11),inst_29764);
} else {
if((state_val_29800 === (17))){
var inst_29785 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
if(cljs.core.truth_(inst_29785)){
var statearr_29810_29874 = state_29799__$1;
(statearr_29810_29874[(1)] = (19));

} else {
var statearr_29811_29875 = state_29799__$1;
(statearr_29811_29875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (3))){
var inst_29797 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29799__$1,inst_29797);
} else {
if((state_val_29800 === (12))){
var inst_29774 = (state_29799[(10)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,(14),inst_29774);
} else {
if((state_val_29800 === (2))){
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,(4),results);
} else {
if((state_val_29800 === (19))){
var state_29799__$1 = state_29799;
var statearr_29812_29876 = state_29799__$1;
(statearr_29812_29876[(2)] = null);

(statearr_29812_29876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (11))){
var inst_29774 = (state_29799[(2)]);
var state_29799__$1 = (function (){var statearr_29813 = state_29799;
(statearr_29813[(10)] = inst_29774);

return statearr_29813;
})();
var statearr_29814_29877 = state_29799__$1;
(statearr_29814_29877[(2)] = null);

(statearr_29814_29877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (9))){
var state_29799__$1 = state_29799;
var statearr_29815_29878 = state_29799__$1;
(statearr_29815_29878[(2)] = null);

(statearr_29815_29878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (5))){
var state_29799__$1 = state_29799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29816_29879 = state_29799__$1;
(statearr_29816_29879[(1)] = (8));

} else {
var statearr_29817_29880 = state_29799__$1;
(statearr_29817_29880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (14))){
var inst_29779 = (state_29799[(11)]);
var inst_29777 = (state_29799[(8)]);
var inst_29777__$1 = (state_29799[(2)]);
var inst_29778 = (inst_29777__$1 == null);
var inst_29779__$1 = cljs.core.not.call(null,inst_29778);
var state_29799__$1 = (function (){var statearr_29818 = state_29799;
(statearr_29818[(11)] = inst_29779__$1);

(statearr_29818[(8)] = inst_29777__$1);

return statearr_29818;
})();
if(inst_29779__$1){
var statearr_29819_29881 = state_29799__$1;
(statearr_29819_29881[(1)] = (15));

} else {
var statearr_29820_29882 = state_29799__$1;
(statearr_29820_29882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (16))){
var inst_29779 = (state_29799[(11)]);
var state_29799__$1 = state_29799;
var statearr_29821_29883 = state_29799__$1;
(statearr_29821_29883[(2)] = inst_29779);

(statearr_29821_29883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (10))){
var inst_29771 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29822_29884 = state_29799__$1;
(statearr_29822_29884[(2)] = inst_29771);

(statearr_29822_29884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (18))){
var inst_29782 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29823_29885 = state_29799__$1;
(statearr_29823_29885[(2)] = inst_29782);

(statearr_29823_29885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (8))){
var inst_29768 = cljs.core.async.close_BANG_.call(null,to);
var state_29799__$1 = state_29799;
var statearr_29824_29886 = state_29799__$1;
(statearr_29824_29886[(2)] = inst_29768);

(statearr_29824_29886[(1)] = (10));


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
});})(c__29260__auto__,jobs,results,process,async))
;
return ((function (switch__29146__auto__,c__29260__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29828[(1)] = (1));

return statearr_29828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29799){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object)){
var ex__29150__auto__ = e29829;
var statearr_29830_29887 = state_29799;
(statearr_29830_29887[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29888 = state_29799;
state_29799 = G__29888;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__,jobs,results,process,async))
})();
var state__29262__auto__ = (function (){var statearr_29831 = f__29261__auto__.call(null);
(statearr_29831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__,jobs,results,process,async))
);

return c__29260__auto__;
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
var args29889 = [];
var len__27777__auto___29892 = arguments.length;
var i__27778__auto___29893 = (0);
while(true){
if((i__27778__auto___29893 < len__27777__auto___29892)){
args29889.push((arguments[i__27778__auto___29893]));

var G__29894 = (i__27778__auto___29893 + (1));
i__27778__auto___29893 = G__29894;
continue;
} else {
}
break;
}

var G__29891 = args29889.length;
switch (G__29891) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29889.length)].join('')));

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
var args29896 = [];
var len__27777__auto___29899 = arguments.length;
var i__27778__auto___29900 = (0);
while(true){
if((i__27778__auto___29900 < len__27777__auto___29899)){
args29896.push((arguments[i__27778__auto___29900]));

var G__29901 = (i__27778__auto___29900 + (1));
i__27778__auto___29900 = G__29901;
continue;
} else {
}
break;
}

var G__29898 = args29896.length;
switch (G__29898) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29896.length)].join('')));

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
var args29903 = [];
var len__27777__auto___29956 = arguments.length;
var i__27778__auto___29957 = (0);
while(true){
if((i__27778__auto___29957 < len__27777__auto___29956)){
args29903.push((arguments[i__27778__auto___29957]));

var G__29958 = (i__27778__auto___29957 + (1));
i__27778__auto___29957 = G__29958;
continue;
} else {
}
break;
}

var G__29905 = args29903.length;
switch (G__29905) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29903.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29260__auto___29960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___29960,tc,fc){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___29960,tc,fc){
return (function (state_29931){
var state_val_29932 = (state_29931[(1)]);
if((state_val_29932 === (7))){
var inst_29927 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29933_29961 = state_29931__$1;
(statearr_29933_29961[(2)] = inst_29927);

(statearr_29933_29961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (1))){
var state_29931__$1 = state_29931;
var statearr_29934_29962 = state_29931__$1;
(statearr_29934_29962[(2)] = null);

(statearr_29934_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (4))){
var inst_29908 = (state_29931[(7)]);
var inst_29908__$1 = (state_29931[(2)]);
var inst_29909 = (inst_29908__$1 == null);
var state_29931__$1 = (function (){var statearr_29935 = state_29931;
(statearr_29935[(7)] = inst_29908__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29936_29963 = state_29931__$1;
(statearr_29936_29963[(1)] = (5));

} else {
var statearr_29937_29964 = state_29931__$1;
(statearr_29937_29964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (13))){
var state_29931__$1 = state_29931;
var statearr_29938_29965 = state_29931__$1;
(statearr_29938_29965[(2)] = null);

(statearr_29938_29965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (6))){
var inst_29908 = (state_29931[(7)]);
var inst_29914 = p.call(null,inst_29908);
var state_29931__$1 = state_29931;
if(cljs.core.truth_(inst_29914)){
var statearr_29939_29966 = state_29931__$1;
(statearr_29939_29966[(1)] = (9));

} else {
var statearr_29940_29967 = state_29931__$1;
(statearr_29940_29967[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (3))){
var inst_29929 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29931__$1,inst_29929);
} else {
if((state_val_29932 === (12))){
var state_29931__$1 = state_29931;
var statearr_29941_29968 = state_29931__$1;
(statearr_29941_29968[(2)] = null);

(statearr_29941_29968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (2))){
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29931__$1,(4),ch);
} else {
if((state_val_29932 === (11))){
var inst_29908 = (state_29931[(7)]);
var inst_29918 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29931__$1,(8),inst_29918,inst_29908);
} else {
if((state_val_29932 === (9))){
var state_29931__$1 = state_29931;
var statearr_29942_29969 = state_29931__$1;
(statearr_29942_29969[(2)] = tc);

(statearr_29942_29969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (5))){
var inst_29911 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29912 = cljs.core.async.close_BANG_.call(null,fc);
var state_29931__$1 = (function (){var statearr_29943 = state_29931;
(statearr_29943[(8)] = inst_29911);

return statearr_29943;
})();
var statearr_29944_29970 = state_29931__$1;
(statearr_29944_29970[(2)] = inst_29912);

(statearr_29944_29970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (14))){
var inst_29925 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29945_29971 = state_29931__$1;
(statearr_29945_29971[(2)] = inst_29925);

(statearr_29945_29971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (10))){
var state_29931__$1 = state_29931;
var statearr_29946_29972 = state_29931__$1;
(statearr_29946_29972[(2)] = fc);

(statearr_29946_29972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (8))){
var inst_29920 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
if(cljs.core.truth_(inst_29920)){
var statearr_29947_29973 = state_29931__$1;
(statearr_29947_29973[(1)] = (12));

} else {
var statearr_29948_29974 = state_29931__$1;
(statearr_29948_29974[(1)] = (13));

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
});})(c__29260__auto___29960,tc,fc))
;
return ((function (switch__29146__auto__,c__29260__auto___29960,tc,fc){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_29931){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_29931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__29150__auto__ = e29953;
var statearr_29954_29975 = state_29931;
(statearr_29954_29975[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29976 = state_29931;
state_29931 = G__29976;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_29931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_29931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___29960,tc,fc))
})();
var state__29262__auto__ = (function (){var statearr_29955 = f__29261__auto__.call(null);
(statearr_29955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___29960);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___29960,tc,fc))
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
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__){
return (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (7))){
var inst_30036 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30042_30063 = state_30040__$1;
(statearr_30042_30063[(2)] = inst_30036);

(statearr_30042_30063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (1))){
var inst_30020 = init;
var state_30040__$1 = (function (){var statearr_30043 = state_30040;
(statearr_30043[(7)] = inst_30020);

return statearr_30043;
})();
var statearr_30044_30064 = state_30040__$1;
(statearr_30044_30064[(2)] = null);

(statearr_30044_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (4))){
var inst_30023 = (state_30040[(8)]);
var inst_30023__$1 = (state_30040[(2)]);
var inst_30024 = (inst_30023__$1 == null);
var state_30040__$1 = (function (){var statearr_30045 = state_30040;
(statearr_30045[(8)] = inst_30023__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30024)){
var statearr_30046_30065 = state_30040__$1;
(statearr_30046_30065[(1)] = (5));

} else {
var statearr_30047_30066 = state_30040__$1;
(statearr_30047_30066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (6))){
var inst_30020 = (state_30040[(7)]);
var inst_30027 = (state_30040[(9)]);
var inst_30023 = (state_30040[(8)]);
var inst_30027__$1 = f.call(null,inst_30020,inst_30023);
var inst_30028 = cljs.core.reduced_QMARK_.call(null,inst_30027__$1);
var state_30040__$1 = (function (){var statearr_30048 = state_30040;
(statearr_30048[(9)] = inst_30027__$1);

return statearr_30048;
})();
if(inst_30028){
var statearr_30049_30067 = state_30040__$1;
(statearr_30049_30067[(1)] = (8));

} else {
var statearr_30050_30068 = state_30040__$1;
(statearr_30050_30068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (3))){
var inst_30038 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30040__$1,inst_30038);
} else {
if((state_val_30041 === (2))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(4),ch);
} else {
if((state_val_30041 === (9))){
var inst_30027 = (state_30040[(9)]);
var inst_30020 = inst_30027;
var state_30040__$1 = (function (){var statearr_30051 = state_30040;
(statearr_30051[(7)] = inst_30020);

return statearr_30051;
})();
var statearr_30052_30069 = state_30040__$1;
(statearr_30052_30069[(2)] = null);

(statearr_30052_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (5))){
var inst_30020 = (state_30040[(7)]);
var state_30040__$1 = state_30040;
var statearr_30053_30070 = state_30040__$1;
(statearr_30053_30070[(2)] = inst_30020);

(statearr_30053_30070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (10))){
var inst_30034 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30054_30071 = state_30040__$1;
(statearr_30054_30071[(2)] = inst_30034);

(statearr_30054_30071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (8))){
var inst_30027 = (state_30040[(9)]);
var inst_30030 = cljs.core.deref.call(null,inst_30027);
var state_30040__$1 = state_30040;
var statearr_30055_30072 = state_30040__$1;
(statearr_30055_30072[(2)] = inst_30030);

(statearr_30055_30072[(1)] = (10));


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
});})(c__29260__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29147__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29147__auto____0 = (function (){
var statearr_30059 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30059[(0)] = cljs$core$async$reduce_$_state_machine__29147__auto__);

(statearr_30059[(1)] = (1));

return statearr_30059;
});
var cljs$core$async$reduce_$_state_machine__29147__auto____1 = (function (state_30040){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_30040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e30060){if((e30060 instanceof Object)){
var ex__29150__auto__ = e30060;
var statearr_30061_30073 = state_30040;
(statearr_30061_30073[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30074 = state_30040;
state_30040 = G__30074;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29147__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29147__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29147__auto____0;
cljs$core$async$reduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29147__auto____1;
return cljs$core$async$reduce_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__))
})();
var state__29262__auto__ = (function (){var statearr_30062 = f__29261__auto__.call(null);
(statearr_30062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__))
);

return c__29260__auto__;
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
var args30075 = [];
var len__27777__auto___30127 = arguments.length;
var i__27778__auto___30128 = (0);
while(true){
if((i__27778__auto___30128 < len__27777__auto___30127)){
args30075.push((arguments[i__27778__auto___30128]));

var G__30129 = (i__27778__auto___30128 + (1));
i__27778__auto___30128 = G__30129;
continue;
} else {
}
break;
}

var G__30077 = args30075.length;
switch (G__30077) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30075.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__){
return (function (state_30102){
var state_val_30103 = (state_30102[(1)]);
if((state_val_30103 === (7))){
var inst_30084 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30104_30131 = state_30102__$1;
(statearr_30104_30131[(2)] = inst_30084);

(statearr_30104_30131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (1))){
var inst_30078 = cljs.core.seq.call(null,coll);
var inst_30079 = inst_30078;
var state_30102__$1 = (function (){var statearr_30105 = state_30102;
(statearr_30105[(7)] = inst_30079);

return statearr_30105;
})();
var statearr_30106_30132 = state_30102__$1;
(statearr_30106_30132[(2)] = null);

(statearr_30106_30132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (4))){
var inst_30079 = (state_30102[(7)]);
var inst_30082 = cljs.core.first.call(null,inst_30079);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30102__$1,(7),ch,inst_30082);
} else {
if((state_val_30103 === (13))){
var inst_30096 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30107_30133 = state_30102__$1;
(statearr_30107_30133[(2)] = inst_30096);

(statearr_30107_30133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (6))){
var inst_30087 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30087)){
var statearr_30108_30134 = state_30102__$1;
(statearr_30108_30134[(1)] = (8));

} else {
var statearr_30109_30135 = state_30102__$1;
(statearr_30109_30135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (3))){
var inst_30100 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else {
if((state_val_30103 === (12))){
var state_30102__$1 = state_30102;
var statearr_30110_30136 = state_30102__$1;
(statearr_30110_30136[(2)] = null);

(statearr_30110_30136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (2))){
var inst_30079 = (state_30102[(7)]);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30079)){
var statearr_30111_30137 = state_30102__$1;
(statearr_30111_30137[(1)] = (4));

} else {
var statearr_30112_30138 = state_30102__$1;
(statearr_30112_30138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (11))){
var inst_30093 = cljs.core.async.close_BANG_.call(null,ch);
var state_30102__$1 = state_30102;
var statearr_30113_30139 = state_30102__$1;
(statearr_30113_30139[(2)] = inst_30093);

(statearr_30113_30139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (9))){
var state_30102__$1 = state_30102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30114_30140 = state_30102__$1;
(statearr_30114_30140[(1)] = (11));

} else {
var statearr_30115_30141 = state_30102__$1;
(statearr_30115_30141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (5))){
var inst_30079 = (state_30102[(7)]);
var state_30102__$1 = state_30102;
var statearr_30116_30142 = state_30102__$1;
(statearr_30116_30142[(2)] = inst_30079);

(statearr_30116_30142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (10))){
var inst_30098 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30117_30143 = state_30102__$1;
(statearr_30117_30143[(2)] = inst_30098);

(statearr_30117_30143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (8))){
var inst_30079 = (state_30102[(7)]);
var inst_30089 = cljs.core.next.call(null,inst_30079);
var inst_30079__$1 = inst_30089;
var state_30102__$1 = (function (){var statearr_30118 = state_30102;
(statearr_30118[(7)] = inst_30079__$1);

return statearr_30118;
})();
var statearr_30119_30144 = state_30102__$1;
(statearr_30119_30144[(2)] = null);

(statearr_30119_30144[(1)] = (2));


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
});})(c__29260__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_30123 = [null,null,null,null,null,null,null,null];
(statearr_30123[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_30123[(1)] = (1));

return statearr_30123;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_30102){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_30102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e30124){if((e30124 instanceof Object)){
var ex__29150__auto__ = e30124;
var statearr_30125_30145 = state_30102;
(statearr_30125_30145[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30146 = state_30102;
state_30102 = G__30146;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__))
})();
var state__29262__auto__ = (function (){var statearr_30126 = f__29261__auto__.call(null);
(statearr_30126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_30126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__))
);

return c__29260__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30372 = (function (mult,ch,cs,meta30373){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30373 = meta30373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30374,meta30373__$1){
var self__ = this;
var _30374__$1 = this;
return (new cljs.core.async.t_cljs$core$async30372(self__.mult,self__.ch,self__.cs,meta30373__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30374){
var self__ = this;
var _30374__$1 = this;
return self__.meta30373;
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30373","meta30373",1310447754,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30372";

cljs.core.async.t_cljs$core$async30372.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async30372");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30372 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30372(mult__$1,ch__$1,cs__$1,meta30373){
return (new cljs.core.async.t_cljs$core$async30372(mult__$1,ch__$1,cs__$1,meta30373));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30372(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29260__auto___30597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___30597,cs,m,dchan,dctr,done){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___30597,cs,m,dchan,dctr,done){
return (function (state_30509){
var state_val_30510 = (state_30509[(1)]);
if((state_val_30510 === (7))){
var inst_30505 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30511_30598 = state_30509__$1;
(statearr_30511_30598[(2)] = inst_30505);

(statearr_30511_30598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (20))){
var inst_30408 = (state_30509[(7)]);
var inst_30420 = cljs.core.first.call(null,inst_30408);
var inst_30421 = cljs.core.nth.call(null,inst_30420,(0),null);
var inst_30422 = cljs.core.nth.call(null,inst_30420,(1),null);
var state_30509__$1 = (function (){var statearr_30512 = state_30509;
(statearr_30512[(8)] = inst_30421);

return statearr_30512;
})();
if(cljs.core.truth_(inst_30422)){
var statearr_30513_30599 = state_30509__$1;
(statearr_30513_30599[(1)] = (22));

} else {
var statearr_30514_30600 = state_30509__$1;
(statearr_30514_30600[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (27))){
var inst_30452 = (state_30509[(9)]);
var inst_30377 = (state_30509[(10)]);
var inst_30450 = (state_30509[(11)]);
var inst_30457 = (state_30509[(12)]);
var inst_30457__$1 = cljs.core._nth.call(null,inst_30450,inst_30452);
var inst_30458 = cljs.core.async.put_BANG_.call(null,inst_30457__$1,inst_30377,done);
var state_30509__$1 = (function (){var statearr_30515 = state_30509;
(statearr_30515[(12)] = inst_30457__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30458)){
var statearr_30516_30601 = state_30509__$1;
(statearr_30516_30601[(1)] = (30));

} else {
var statearr_30517_30602 = state_30509__$1;
(statearr_30517_30602[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (1))){
var state_30509__$1 = state_30509;
var statearr_30518_30603 = state_30509__$1;
(statearr_30518_30603[(2)] = null);

(statearr_30518_30603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (24))){
var inst_30408 = (state_30509[(7)]);
var inst_30427 = (state_30509[(2)]);
var inst_30428 = cljs.core.next.call(null,inst_30408);
var inst_30386 = inst_30428;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30509__$1 = (function (){var statearr_30519 = state_30509;
(statearr_30519[(13)] = inst_30387);

(statearr_30519[(14)] = inst_30389);

(statearr_30519[(15)] = inst_30388);

(statearr_30519[(16)] = inst_30427);

(statearr_30519[(17)] = inst_30386);

return statearr_30519;
})();
var statearr_30520_30604 = state_30509__$1;
(statearr_30520_30604[(2)] = null);

(statearr_30520_30604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (39))){
var state_30509__$1 = state_30509;
var statearr_30524_30605 = state_30509__$1;
(statearr_30524_30605[(2)] = null);

(statearr_30524_30605[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (4))){
var inst_30377 = (state_30509[(10)]);
var inst_30377__$1 = (state_30509[(2)]);
var inst_30378 = (inst_30377__$1 == null);
var state_30509__$1 = (function (){var statearr_30525 = state_30509;
(statearr_30525[(10)] = inst_30377__$1);

return statearr_30525;
})();
if(cljs.core.truth_(inst_30378)){
var statearr_30526_30606 = state_30509__$1;
(statearr_30526_30606[(1)] = (5));

} else {
var statearr_30527_30607 = state_30509__$1;
(statearr_30527_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (15))){
var inst_30387 = (state_30509[(13)]);
var inst_30389 = (state_30509[(14)]);
var inst_30388 = (state_30509[(15)]);
var inst_30386 = (state_30509[(17)]);
var inst_30404 = (state_30509[(2)]);
var inst_30405 = (inst_30389 + (1));
var tmp30521 = inst_30387;
var tmp30522 = inst_30388;
var tmp30523 = inst_30386;
var inst_30386__$1 = tmp30523;
var inst_30387__$1 = tmp30521;
var inst_30388__$1 = tmp30522;
var inst_30389__$1 = inst_30405;
var state_30509__$1 = (function (){var statearr_30528 = state_30509;
(statearr_30528[(18)] = inst_30404);

(statearr_30528[(13)] = inst_30387__$1);

(statearr_30528[(14)] = inst_30389__$1);

(statearr_30528[(15)] = inst_30388__$1);

(statearr_30528[(17)] = inst_30386__$1);

return statearr_30528;
})();
var statearr_30529_30608 = state_30509__$1;
(statearr_30529_30608[(2)] = null);

(statearr_30529_30608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (21))){
var inst_30431 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30533_30609 = state_30509__$1;
(statearr_30533_30609[(2)] = inst_30431);

(statearr_30533_30609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (31))){
var inst_30457 = (state_30509[(12)]);
var inst_30461 = done.call(null,null);
var inst_30462 = cljs.core.async.untap_STAR_.call(null,m,inst_30457);
var state_30509__$1 = (function (){var statearr_30534 = state_30509;
(statearr_30534[(19)] = inst_30461);

return statearr_30534;
})();
var statearr_30535_30610 = state_30509__$1;
(statearr_30535_30610[(2)] = inst_30462);

(statearr_30535_30610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (32))){
var inst_30449 = (state_30509[(20)]);
var inst_30452 = (state_30509[(9)]);
var inst_30451 = (state_30509[(21)]);
var inst_30450 = (state_30509[(11)]);
var inst_30464 = (state_30509[(2)]);
var inst_30465 = (inst_30452 + (1));
var tmp30530 = inst_30449;
var tmp30531 = inst_30451;
var tmp30532 = inst_30450;
var inst_30449__$1 = tmp30530;
var inst_30450__$1 = tmp30532;
var inst_30451__$1 = tmp30531;
var inst_30452__$1 = inst_30465;
var state_30509__$1 = (function (){var statearr_30536 = state_30509;
(statearr_30536[(20)] = inst_30449__$1);

(statearr_30536[(9)] = inst_30452__$1);

(statearr_30536[(21)] = inst_30451__$1);

(statearr_30536[(11)] = inst_30450__$1);

(statearr_30536[(22)] = inst_30464);

return statearr_30536;
})();
var statearr_30537_30611 = state_30509__$1;
(statearr_30537_30611[(2)] = null);

(statearr_30537_30611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (40))){
var inst_30477 = (state_30509[(23)]);
var inst_30481 = done.call(null,null);
var inst_30482 = cljs.core.async.untap_STAR_.call(null,m,inst_30477);
var state_30509__$1 = (function (){var statearr_30538 = state_30509;
(statearr_30538[(24)] = inst_30481);

return statearr_30538;
})();
var statearr_30539_30612 = state_30509__$1;
(statearr_30539_30612[(2)] = inst_30482);

(statearr_30539_30612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (33))){
var inst_30468 = (state_30509[(25)]);
var inst_30470 = cljs.core.chunked_seq_QMARK_.call(null,inst_30468);
var state_30509__$1 = state_30509;
if(inst_30470){
var statearr_30540_30613 = state_30509__$1;
(statearr_30540_30613[(1)] = (36));

} else {
var statearr_30541_30614 = state_30509__$1;
(statearr_30541_30614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (13))){
var inst_30398 = (state_30509[(26)]);
var inst_30401 = cljs.core.async.close_BANG_.call(null,inst_30398);
var state_30509__$1 = state_30509;
var statearr_30542_30615 = state_30509__$1;
(statearr_30542_30615[(2)] = inst_30401);

(statearr_30542_30615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (22))){
var inst_30421 = (state_30509[(8)]);
var inst_30424 = cljs.core.async.close_BANG_.call(null,inst_30421);
var state_30509__$1 = state_30509;
var statearr_30543_30616 = state_30509__$1;
(statearr_30543_30616[(2)] = inst_30424);

(statearr_30543_30616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (36))){
var inst_30468 = (state_30509[(25)]);
var inst_30472 = cljs.core.chunk_first.call(null,inst_30468);
var inst_30473 = cljs.core.chunk_rest.call(null,inst_30468);
var inst_30474 = cljs.core.count.call(null,inst_30472);
var inst_30449 = inst_30473;
var inst_30450 = inst_30472;
var inst_30451 = inst_30474;
var inst_30452 = (0);
var state_30509__$1 = (function (){var statearr_30544 = state_30509;
(statearr_30544[(20)] = inst_30449);

(statearr_30544[(9)] = inst_30452);

(statearr_30544[(21)] = inst_30451);

(statearr_30544[(11)] = inst_30450);

return statearr_30544;
})();
var statearr_30545_30617 = state_30509__$1;
(statearr_30545_30617[(2)] = null);

(statearr_30545_30617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (41))){
var inst_30468 = (state_30509[(25)]);
var inst_30484 = (state_30509[(2)]);
var inst_30485 = cljs.core.next.call(null,inst_30468);
var inst_30449 = inst_30485;
var inst_30450 = null;
var inst_30451 = (0);
var inst_30452 = (0);
var state_30509__$1 = (function (){var statearr_30546 = state_30509;
(statearr_30546[(20)] = inst_30449);

(statearr_30546[(9)] = inst_30452);

(statearr_30546[(21)] = inst_30451);

(statearr_30546[(27)] = inst_30484);

(statearr_30546[(11)] = inst_30450);

return statearr_30546;
})();
var statearr_30547_30618 = state_30509__$1;
(statearr_30547_30618[(2)] = null);

(statearr_30547_30618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (43))){
var state_30509__$1 = state_30509;
var statearr_30548_30619 = state_30509__$1;
(statearr_30548_30619[(2)] = null);

(statearr_30548_30619[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (29))){
var inst_30493 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30549_30620 = state_30509__$1;
(statearr_30549_30620[(2)] = inst_30493);

(statearr_30549_30620[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (44))){
var inst_30502 = (state_30509[(2)]);
var state_30509__$1 = (function (){var statearr_30550 = state_30509;
(statearr_30550[(28)] = inst_30502);

return statearr_30550;
})();
var statearr_30551_30621 = state_30509__$1;
(statearr_30551_30621[(2)] = null);

(statearr_30551_30621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (6))){
var inst_30441 = (state_30509[(29)]);
var inst_30440 = cljs.core.deref.call(null,cs);
var inst_30441__$1 = cljs.core.keys.call(null,inst_30440);
var inst_30442 = cljs.core.count.call(null,inst_30441__$1);
var inst_30443 = cljs.core.reset_BANG_.call(null,dctr,inst_30442);
var inst_30448 = cljs.core.seq.call(null,inst_30441__$1);
var inst_30449 = inst_30448;
var inst_30450 = null;
var inst_30451 = (0);
var inst_30452 = (0);
var state_30509__$1 = (function (){var statearr_30552 = state_30509;
(statearr_30552[(20)] = inst_30449);

(statearr_30552[(9)] = inst_30452);

(statearr_30552[(21)] = inst_30451);

(statearr_30552[(29)] = inst_30441__$1);

(statearr_30552[(30)] = inst_30443);

(statearr_30552[(11)] = inst_30450);

return statearr_30552;
})();
var statearr_30553_30622 = state_30509__$1;
(statearr_30553_30622[(2)] = null);

(statearr_30553_30622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (28))){
var inst_30449 = (state_30509[(20)]);
var inst_30468 = (state_30509[(25)]);
var inst_30468__$1 = cljs.core.seq.call(null,inst_30449);
var state_30509__$1 = (function (){var statearr_30554 = state_30509;
(statearr_30554[(25)] = inst_30468__$1);

return statearr_30554;
})();
if(inst_30468__$1){
var statearr_30555_30623 = state_30509__$1;
(statearr_30555_30623[(1)] = (33));

} else {
var statearr_30556_30624 = state_30509__$1;
(statearr_30556_30624[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (25))){
var inst_30452 = (state_30509[(9)]);
var inst_30451 = (state_30509[(21)]);
var inst_30454 = (inst_30452 < inst_30451);
var inst_30455 = inst_30454;
var state_30509__$1 = state_30509;
if(cljs.core.truth_(inst_30455)){
var statearr_30557_30625 = state_30509__$1;
(statearr_30557_30625[(1)] = (27));

} else {
var statearr_30558_30626 = state_30509__$1;
(statearr_30558_30626[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (34))){
var state_30509__$1 = state_30509;
var statearr_30559_30627 = state_30509__$1;
(statearr_30559_30627[(2)] = null);

(statearr_30559_30627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (17))){
var state_30509__$1 = state_30509;
var statearr_30560_30628 = state_30509__$1;
(statearr_30560_30628[(2)] = null);

(statearr_30560_30628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (3))){
var inst_30507 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30509__$1,inst_30507);
} else {
if((state_val_30510 === (12))){
var inst_30436 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30561_30629 = state_30509__$1;
(statearr_30561_30629[(2)] = inst_30436);

(statearr_30561_30629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (2))){
var state_30509__$1 = state_30509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30509__$1,(4),ch);
} else {
if((state_val_30510 === (23))){
var state_30509__$1 = state_30509;
var statearr_30562_30630 = state_30509__$1;
(statearr_30562_30630[(2)] = null);

(statearr_30562_30630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (35))){
var inst_30491 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30563_30631 = state_30509__$1;
(statearr_30563_30631[(2)] = inst_30491);

(statearr_30563_30631[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (19))){
var inst_30408 = (state_30509[(7)]);
var inst_30412 = cljs.core.chunk_first.call(null,inst_30408);
var inst_30413 = cljs.core.chunk_rest.call(null,inst_30408);
var inst_30414 = cljs.core.count.call(null,inst_30412);
var inst_30386 = inst_30413;
var inst_30387 = inst_30412;
var inst_30388 = inst_30414;
var inst_30389 = (0);
var state_30509__$1 = (function (){var statearr_30564 = state_30509;
(statearr_30564[(13)] = inst_30387);

(statearr_30564[(14)] = inst_30389);

(statearr_30564[(15)] = inst_30388);

(statearr_30564[(17)] = inst_30386);

return statearr_30564;
})();
var statearr_30565_30632 = state_30509__$1;
(statearr_30565_30632[(2)] = null);

(statearr_30565_30632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (11))){
var inst_30408 = (state_30509[(7)]);
var inst_30386 = (state_30509[(17)]);
var inst_30408__$1 = cljs.core.seq.call(null,inst_30386);
var state_30509__$1 = (function (){var statearr_30566 = state_30509;
(statearr_30566[(7)] = inst_30408__$1);

return statearr_30566;
})();
if(inst_30408__$1){
var statearr_30567_30633 = state_30509__$1;
(statearr_30567_30633[(1)] = (16));

} else {
var statearr_30568_30634 = state_30509__$1;
(statearr_30568_30634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (9))){
var inst_30438 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30569_30635 = state_30509__$1;
(statearr_30569_30635[(2)] = inst_30438);

(statearr_30569_30635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (5))){
var inst_30384 = cljs.core.deref.call(null,cs);
var inst_30385 = cljs.core.seq.call(null,inst_30384);
var inst_30386 = inst_30385;
var inst_30387 = null;
var inst_30388 = (0);
var inst_30389 = (0);
var state_30509__$1 = (function (){var statearr_30570 = state_30509;
(statearr_30570[(13)] = inst_30387);

(statearr_30570[(14)] = inst_30389);

(statearr_30570[(15)] = inst_30388);

(statearr_30570[(17)] = inst_30386);

return statearr_30570;
})();
var statearr_30571_30636 = state_30509__$1;
(statearr_30571_30636[(2)] = null);

(statearr_30571_30636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (14))){
var state_30509__$1 = state_30509;
var statearr_30572_30637 = state_30509__$1;
(statearr_30572_30637[(2)] = null);

(statearr_30572_30637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (45))){
var inst_30499 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30573_30638 = state_30509__$1;
(statearr_30573_30638[(2)] = inst_30499);

(statearr_30573_30638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (26))){
var inst_30441 = (state_30509[(29)]);
var inst_30495 = (state_30509[(2)]);
var inst_30496 = cljs.core.seq.call(null,inst_30441);
var state_30509__$1 = (function (){var statearr_30574 = state_30509;
(statearr_30574[(31)] = inst_30495);

return statearr_30574;
})();
if(inst_30496){
var statearr_30575_30639 = state_30509__$1;
(statearr_30575_30639[(1)] = (42));

} else {
var statearr_30576_30640 = state_30509__$1;
(statearr_30576_30640[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (16))){
var inst_30408 = (state_30509[(7)]);
var inst_30410 = cljs.core.chunked_seq_QMARK_.call(null,inst_30408);
var state_30509__$1 = state_30509;
if(inst_30410){
var statearr_30577_30641 = state_30509__$1;
(statearr_30577_30641[(1)] = (19));

} else {
var statearr_30578_30642 = state_30509__$1;
(statearr_30578_30642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (38))){
var inst_30488 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30579_30643 = state_30509__$1;
(statearr_30579_30643[(2)] = inst_30488);

(statearr_30579_30643[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (30))){
var state_30509__$1 = state_30509;
var statearr_30580_30644 = state_30509__$1;
(statearr_30580_30644[(2)] = null);

(statearr_30580_30644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (10))){
var inst_30387 = (state_30509[(13)]);
var inst_30389 = (state_30509[(14)]);
var inst_30397 = cljs.core._nth.call(null,inst_30387,inst_30389);
var inst_30398 = cljs.core.nth.call(null,inst_30397,(0),null);
var inst_30399 = cljs.core.nth.call(null,inst_30397,(1),null);
var state_30509__$1 = (function (){var statearr_30581 = state_30509;
(statearr_30581[(26)] = inst_30398);

return statearr_30581;
})();
if(cljs.core.truth_(inst_30399)){
var statearr_30582_30645 = state_30509__$1;
(statearr_30582_30645[(1)] = (13));

} else {
var statearr_30583_30646 = state_30509__$1;
(statearr_30583_30646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (18))){
var inst_30434 = (state_30509[(2)]);
var state_30509__$1 = state_30509;
var statearr_30584_30647 = state_30509__$1;
(statearr_30584_30647[(2)] = inst_30434);

(statearr_30584_30647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (42))){
var state_30509__$1 = state_30509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30509__$1,(45),dchan);
} else {
if((state_val_30510 === (37))){
var inst_30377 = (state_30509[(10)]);
var inst_30477 = (state_30509[(23)]);
var inst_30468 = (state_30509[(25)]);
var inst_30477__$1 = cljs.core.first.call(null,inst_30468);
var inst_30478 = cljs.core.async.put_BANG_.call(null,inst_30477__$1,inst_30377,done);
var state_30509__$1 = (function (){var statearr_30585 = state_30509;
(statearr_30585[(23)] = inst_30477__$1);

return statearr_30585;
})();
if(cljs.core.truth_(inst_30478)){
var statearr_30586_30648 = state_30509__$1;
(statearr_30586_30648[(1)] = (39));

} else {
var statearr_30587_30649 = state_30509__$1;
(statearr_30587_30649[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30510 === (8))){
var inst_30389 = (state_30509[(14)]);
var inst_30388 = (state_30509[(15)]);
var inst_30391 = (inst_30389 < inst_30388);
var inst_30392 = inst_30391;
var state_30509__$1 = state_30509;
if(cljs.core.truth_(inst_30392)){
var statearr_30588_30650 = state_30509__$1;
(statearr_30588_30650[(1)] = (10));

} else {
var statearr_30589_30651 = state_30509__$1;
(statearr_30589_30651[(1)] = (11));

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
});})(c__29260__auto___30597,cs,m,dchan,dctr,done))
;
return ((function (switch__29146__auto__,c__29260__auto___30597,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29147__auto__ = null;
var cljs$core$async$mult_$_state_machine__29147__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$mult_$_state_machine__29147__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$mult_$_state_machine__29147__auto____1 = (function (state_30509){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_30509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__29150__auto__ = e30594;
var statearr_30595_30652 = state_30509;
(statearr_30595_30652[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30653 = state_30509;
state_30509 = G__30653;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29147__auto__ = function(state_30509){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29147__auto____1.call(this,state_30509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29147__auto____0;
cljs$core$async$mult_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29147__auto____1;
return cljs$core$async$mult_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___30597,cs,m,dchan,dctr,done))
})();
var state__29262__auto__ = (function (){var statearr_30596 = f__29261__auto__.call(null);
(statearr_30596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___30597);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___30597,cs,m,dchan,dctr,done))
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
var args30654 = [];
var len__27777__auto___30657 = arguments.length;
var i__27778__auto___30658 = (0);
while(true){
if((i__27778__auto___30658 < len__27777__auto___30657)){
args30654.push((arguments[i__27778__auto___30658]));

var G__30659 = (i__27778__auto___30658 + (1));
i__27778__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30656 = args30654.length;
switch (G__30656) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30654.length)].join('')));

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
var len__27777__auto___30671 = arguments.length;
var i__27778__auto___30672 = (0);
while(true){
if((i__27778__auto___30672 < len__27777__auto___30671)){
args__27784__auto__.push((arguments[i__27778__auto___30672]));

var G__30673 = (i__27778__auto___30672 + (1));
i__27778__auto___30672 = G__30673;
continue;
} else {
}
break;
}

var argseq__27785__auto__ = ((((3) < args__27784__auto__.length))?(new cljs.core.IndexedSeq(args__27784__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30665){
var map__30666 = p__30665;
var map__30666__$1 = ((((!((map__30666 == null)))?((((map__30666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30666):map__30666);
var opts = map__30666__$1;
var statearr_30668_30674 = state;
(statearr_30668_30674[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__30666,map__30666__$1,opts){
return (function (val){
var statearr_30669_30675 = state;
(statearr_30669_30675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30666,map__30666__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_30670_30676 = state;
(statearr_30670_30676[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30661){
var G__30662 = cljs.core.first.call(null,seq30661);
var seq30661__$1 = cljs.core.next.call(null,seq30661);
var G__30663 = cljs.core.first.call(null,seq30661__$1);
var seq30661__$2 = cljs.core.next.call(null,seq30661__$1);
var G__30664 = cljs.core.first.call(null,seq30661__$2);
var seq30661__$3 = cljs.core.next.call(null,seq30661__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30662,G__30663,G__30664,seq30661__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30842 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30843){
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
this.meta30843 = meta30843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30844,meta30843__$1){
var self__ = this;
var _30844__$1 = this;
return (new cljs.core.async.t_cljs$core$async30842(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30843__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30844){
var self__ = this;
var _30844__$1 = this;
return self__.meta30843;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30842.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30843","meta30843",-72794757,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30842";

cljs.core.async.t_cljs$core$async30842.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async30842");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30842 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30843){
return (new cljs.core.async.t_cljs$core$async30842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30843));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30842(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29260__auto___31007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30944){
var state_val_30945 = (state_30944[(1)]);
if((state_val_30945 === (7))){
var inst_30860 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30946_31008 = state_30944__$1;
(statearr_30946_31008[(2)] = inst_30860);

(statearr_30946_31008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (20))){
var inst_30872 = (state_30944[(7)]);
var state_30944__$1 = state_30944;
var statearr_30947_31009 = state_30944__$1;
(statearr_30947_31009[(2)] = inst_30872);

(statearr_30947_31009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (27))){
var state_30944__$1 = state_30944;
var statearr_30948_31010 = state_30944__$1;
(statearr_30948_31010[(2)] = null);

(statearr_30948_31010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (1))){
var inst_30848 = (state_30944[(8)]);
var inst_30848__$1 = calc_state.call(null);
var inst_30850 = (inst_30848__$1 == null);
var inst_30851 = cljs.core.not.call(null,inst_30850);
var state_30944__$1 = (function (){var statearr_30949 = state_30944;
(statearr_30949[(8)] = inst_30848__$1);

return statearr_30949;
})();
if(inst_30851){
var statearr_30950_31011 = state_30944__$1;
(statearr_30950_31011[(1)] = (2));

} else {
var statearr_30951_31012 = state_30944__$1;
(statearr_30951_31012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (24))){
var inst_30895 = (state_30944[(9)]);
var inst_30918 = (state_30944[(10)]);
var inst_30904 = (state_30944[(11)]);
var inst_30918__$1 = inst_30895.call(null,inst_30904);
var state_30944__$1 = (function (){var statearr_30952 = state_30944;
(statearr_30952[(10)] = inst_30918__$1);

return statearr_30952;
})();
if(cljs.core.truth_(inst_30918__$1)){
var statearr_30953_31013 = state_30944__$1;
(statearr_30953_31013[(1)] = (29));

} else {
var statearr_30954_31014 = state_30944__$1;
(statearr_30954_31014[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (4))){
var inst_30863 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30863)){
var statearr_30955_31015 = state_30944__$1;
(statearr_30955_31015[(1)] = (8));

} else {
var statearr_30956_31016 = state_30944__$1;
(statearr_30956_31016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (15))){
var inst_30889 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30889)){
var statearr_30957_31017 = state_30944__$1;
(statearr_30957_31017[(1)] = (19));

} else {
var statearr_30958_31018 = state_30944__$1;
(statearr_30958_31018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (21))){
var inst_30894 = (state_30944[(12)]);
var inst_30894__$1 = (state_30944[(2)]);
var inst_30895 = cljs.core.get.call(null,inst_30894__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30896 = cljs.core.get.call(null,inst_30894__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30897 = cljs.core.get.call(null,inst_30894__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30944__$1 = (function (){var statearr_30959 = state_30944;
(statearr_30959[(9)] = inst_30895);

(statearr_30959[(13)] = inst_30896);

(statearr_30959[(12)] = inst_30894__$1);

return statearr_30959;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30944__$1,(22),inst_30897);
} else {
if((state_val_30945 === (31))){
var inst_30926 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30926)){
var statearr_30960_31019 = state_30944__$1;
(statearr_30960_31019[(1)] = (32));

} else {
var statearr_30961_31020 = state_30944__$1;
(statearr_30961_31020[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (32))){
var inst_30903 = (state_30944[(14)]);
var state_30944__$1 = state_30944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30944__$1,(35),out,inst_30903);
} else {
if((state_val_30945 === (33))){
var inst_30894 = (state_30944[(12)]);
var inst_30872 = inst_30894;
var state_30944__$1 = (function (){var statearr_30962 = state_30944;
(statearr_30962[(7)] = inst_30872);

return statearr_30962;
})();
var statearr_30963_31021 = state_30944__$1;
(statearr_30963_31021[(2)] = null);

(statearr_30963_31021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (13))){
var inst_30872 = (state_30944[(7)]);
var inst_30879 = inst_30872.cljs$lang$protocol_mask$partition0$;
var inst_30880 = (inst_30879 & (64));
var inst_30881 = inst_30872.cljs$core$ISeq$;
var inst_30882 = (inst_30880) || (inst_30881);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30882)){
var statearr_30964_31022 = state_30944__$1;
(statearr_30964_31022[(1)] = (16));

} else {
var statearr_30965_31023 = state_30944__$1;
(statearr_30965_31023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (22))){
var inst_30904 = (state_30944[(11)]);
var inst_30903 = (state_30944[(14)]);
var inst_30902 = (state_30944[(2)]);
var inst_30903__$1 = cljs.core.nth.call(null,inst_30902,(0),null);
var inst_30904__$1 = cljs.core.nth.call(null,inst_30902,(1),null);
var inst_30905 = (inst_30903__$1 == null);
var inst_30906 = cljs.core._EQ_.call(null,inst_30904__$1,change);
var inst_30907 = (inst_30905) || (inst_30906);
var state_30944__$1 = (function (){var statearr_30966 = state_30944;
(statearr_30966[(11)] = inst_30904__$1);

(statearr_30966[(14)] = inst_30903__$1);

return statearr_30966;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_30967_31024 = state_30944__$1;
(statearr_30967_31024[(1)] = (23));

} else {
var statearr_30968_31025 = state_30944__$1;
(statearr_30968_31025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (36))){
var inst_30894 = (state_30944[(12)]);
var inst_30872 = inst_30894;
var state_30944__$1 = (function (){var statearr_30969 = state_30944;
(statearr_30969[(7)] = inst_30872);

return statearr_30969;
})();
var statearr_30970_31026 = state_30944__$1;
(statearr_30970_31026[(2)] = null);

(statearr_30970_31026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (29))){
var inst_30918 = (state_30944[(10)]);
var state_30944__$1 = state_30944;
var statearr_30971_31027 = state_30944__$1;
(statearr_30971_31027[(2)] = inst_30918);

(statearr_30971_31027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (6))){
var state_30944__$1 = state_30944;
var statearr_30972_31028 = state_30944__$1;
(statearr_30972_31028[(2)] = false);

(statearr_30972_31028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (28))){
var inst_30914 = (state_30944[(2)]);
var inst_30915 = calc_state.call(null);
var inst_30872 = inst_30915;
var state_30944__$1 = (function (){var statearr_30973 = state_30944;
(statearr_30973[(15)] = inst_30914);

(statearr_30973[(7)] = inst_30872);

return statearr_30973;
})();
var statearr_30974_31029 = state_30944__$1;
(statearr_30974_31029[(2)] = null);

(statearr_30974_31029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (25))){
var inst_30940 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30975_31030 = state_30944__$1;
(statearr_30975_31030[(2)] = inst_30940);

(statearr_30975_31030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (34))){
var inst_30938 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30976_31031 = state_30944__$1;
(statearr_30976_31031[(2)] = inst_30938);

(statearr_30976_31031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (17))){
var state_30944__$1 = state_30944;
var statearr_30977_31032 = state_30944__$1;
(statearr_30977_31032[(2)] = false);

(statearr_30977_31032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (3))){
var state_30944__$1 = state_30944;
var statearr_30978_31033 = state_30944__$1;
(statearr_30978_31033[(2)] = false);

(statearr_30978_31033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (12))){
var inst_30942 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30944__$1,inst_30942);
} else {
if((state_val_30945 === (2))){
var inst_30848 = (state_30944[(8)]);
var inst_30853 = inst_30848.cljs$lang$protocol_mask$partition0$;
var inst_30854 = (inst_30853 & (64));
var inst_30855 = inst_30848.cljs$core$ISeq$;
var inst_30856 = (inst_30854) || (inst_30855);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30856)){
var statearr_30979_31034 = state_30944__$1;
(statearr_30979_31034[(1)] = (5));

} else {
var statearr_30980_31035 = state_30944__$1;
(statearr_30980_31035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (23))){
var inst_30903 = (state_30944[(14)]);
var inst_30909 = (inst_30903 == null);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30909)){
var statearr_30981_31036 = state_30944__$1;
(statearr_30981_31036[(1)] = (26));

} else {
var statearr_30982_31037 = state_30944__$1;
(statearr_30982_31037[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (35))){
var inst_30929 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30929)){
var statearr_30983_31038 = state_30944__$1;
(statearr_30983_31038[(1)] = (36));

} else {
var statearr_30984_31039 = state_30944__$1;
(statearr_30984_31039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (19))){
var inst_30872 = (state_30944[(7)]);
var inst_30891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30872);
var state_30944__$1 = state_30944;
var statearr_30985_31040 = state_30944__$1;
(statearr_30985_31040[(2)] = inst_30891);

(statearr_30985_31040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (11))){
var inst_30872 = (state_30944[(7)]);
var inst_30876 = (inst_30872 == null);
var inst_30877 = cljs.core.not.call(null,inst_30876);
var state_30944__$1 = state_30944;
if(inst_30877){
var statearr_30986_31041 = state_30944__$1;
(statearr_30986_31041[(1)] = (13));

} else {
var statearr_30987_31042 = state_30944__$1;
(statearr_30987_31042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (9))){
var inst_30848 = (state_30944[(8)]);
var state_30944__$1 = state_30944;
var statearr_30988_31043 = state_30944__$1;
(statearr_30988_31043[(2)] = inst_30848);

(statearr_30988_31043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (5))){
var state_30944__$1 = state_30944;
var statearr_30989_31044 = state_30944__$1;
(statearr_30989_31044[(2)] = true);

(statearr_30989_31044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (14))){
var state_30944__$1 = state_30944;
var statearr_30990_31045 = state_30944__$1;
(statearr_30990_31045[(2)] = false);

(statearr_30990_31045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (26))){
var inst_30904 = (state_30944[(11)]);
var inst_30911 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30904);
var state_30944__$1 = state_30944;
var statearr_30991_31046 = state_30944__$1;
(statearr_30991_31046[(2)] = inst_30911);

(statearr_30991_31046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (16))){
var state_30944__$1 = state_30944;
var statearr_30992_31047 = state_30944__$1;
(statearr_30992_31047[(2)] = true);

(statearr_30992_31047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (38))){
var inst_30934 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30993_31048 = state_30944__$1;
(statearr_30993_31048[(2)] = inst_30934);

(statearr_30993_31048[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (30))){
var inst_30895 = (state_30944[(9)]);
var inst_30896 = (state_30944[(13)]);
var inst_30904 = (state_30944[(11)]);
var inst_30921 = cljs.core.empty_QMARK_.call(null,inst_30895);
var inst_30922 = inst_30896.call(null,inst_30904);
var inst_30923 = cljs.core.not.call(null,inst_30922);
var inst_30924 = (inst_30921) && (inst_30923);
var state_30944__$1 = state_30944;
var statearr_30994_31049 = state_30944__$1;
(statearr_30994_31049[(2)] = inst_30924);

(statearr_30994_31049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (10))){
var inst_30848 = (state_30944[(8)]);
var inst_30868 = (state_30944[(2)]);
var inst_30869 = cljs.core.get.call(null,inst_30868,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30870 = cljs.core.get.call(null,inst_30868,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30871 = cljs.core.get.call(null,inst_30868,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30872 = inst_30848;
var state_30944__$1 = (function (){var statearr_30995 = state_30944;
(statearr_30995[(7)] = inst_30872);

(statearr_30995[(16)] = inst_30871);

(statearr_30995[(17)] = inst_30870);

(statearr_30995[(18)] = inst_30869);

return statearr_30995;
})();
var statearr_30996_31050 = state_30944__$1;
(statearr_30996_31050[(2)] = null);

(statearr_30996_31050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (18))){
var inst_30886 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30997_31051 = state_30944__$1;
(statearr_30997_31051[(2)] = inst_30886);

(statearr_30997_31051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (37))){
var state_30944__$1 = state_30944;
var statearr_30998_31052 = state_30944__$1;
(statearr_30998_31052[(2)] = null);

(statearr_30998_31052[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (8))){
var inst_30848 = (state_30944[(8)]);
var inst_30865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30848);
var state_30944__$1 = state_30944;
var statearr_30999_31053 = state_30944__$1;
(statearr_30999_31053[(2)] = inst_30865);

(statearr_30999_31053[(1)] = (10));


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
});})(c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29146__auto__,c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29147__auto__ = null;
var cljs$core$async$mix_$_state_machine__29147__auto____0 = (function (){
var statearr_31003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31003[(0)] = cljs$core$async$mix_$_state_machine__29147__auto__);

(statearr_31003[(1)] = (1));

return statearr_31003;
});
var cljs$core$async$mix_$_state_machine__29147__auto____1 = (function (state_30944){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_30944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31004){if((e31004 instanceof Object)){
var ex__29150__auto__ = e31004;
var statearr_31005_31054 = state_30944;
(statearr_31005_31054[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31055 = state_30944;
state_30944 = G__31055;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29147__auto__ = function(state_30944){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29147__auto____1.call(this,state_30944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29147__auto____0;
cljs$core$async$mix_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29147__auto____1;
return cljs$core$async$mix_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29262__auto__ = (function (){var statearr_31006 = f__29261__auto__.call(null);
(statearr_31006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31007);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31007,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31056 = [];
var len__27777__auto___31059 = arguments.length;
var i__27778__auto___31060 = (0);
while(true){
if((i__27778__auto___31060 < len__27777__auto___31059)){
args31056.push((arguments[i__27778__auto___31060]));

var G__31061 = (i__27778__auto___31060 + (1));
i__27778__auto___31060 = G__31061;
continue;
} else {
}
break;
}

var G__31058 = args31056.length;
switch (G__31058) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31056.length)].join('')));

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
var args31064 = [];
var len__27777__auto___31189 = arguments.length;
var i__27778__auto___31190 = (0);
while(true){
if((i__27778__auto___31190 < len__27777__auto___31189)){
args31064.push((arguments[i__27778__auto___31190]));

var G__31191 = (i__27778__auto___31190 + (1));
i__27778__auto___31190 = G__31191;
continue;
} else {
}
break;
}

var G__31066 = args31064.length;
switch (G__31066) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31064.length)].join('')));

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
return (function (p1__31063_SHARP_){
if(cljs.core.truth_(p1__31063_SHARP_.call(null,topic))){
return p1__31063_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31063_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26594__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31067 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31068){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31068 = meta31068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31069,meta31068__$1){
var self__ = this;
var _31069__$1 = this;
return (new cljs.core.async.t_cljs$core$async31067(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31068__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31069){
var self__ = this;
var _31069__$1 = this;
return self__.meta31068;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31068","meta31068",-796904386,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31067";

cljs.core.async.t_cljs$core$async31067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31067");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31067 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31068){
return (new cljs.core.async.t_cljs$core$async31067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31068));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31067(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29260__auto___31193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31193,mults,ensure_mult,p){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31193,mults,ensure_mult,p){
return (function (state_31141){
var state_val_31142 = (state_31141[(1)]);
if((state_val_31142 === (7))){
var inst_31137 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31143_31194 = state_31141__$1;
(statearr_31143_31194[(2)] = inst_31137);

(statearr_31143_31194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (20))){
var state_31141__$1 = state_31141;
var statearr_31144_31195 = state_31141__$1;
(statearr_31144_31195[(2)] = null);

(statearr_31144_31195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (1))){
var state_31141__$1 = state_31141;
var statearr_31145_31196 = state_31141__$1;
(statearr_31145_31196[(2)] = null);

(statearr_31145_31196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (24))){
var inst_31120 = (state_31141[(7)]);
var inst_31129 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31120);
var state_31141__$1 = state_31141;
var statearr_31146_31197 = state_31141__$1;
(statearr_31146_31197[(2)] = inst_31129);

(statearr_31146_31197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (4))){
var inst_31072 = (state_31141[(8)]);
var inst_31072__$1 = (state_31141[(2)]);
var inst_31073 = (inst_31072__$1 == null);
var state_31141__$1 = (function (){var statearr_31147 = state_31141;
(statearr_31147[(8)] = inst_31072__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31148_31198 = state_31141__$1;
(statearr_31148_31198[(1)] = (5));

} else {
var statearr_31149_31199 = state_31141__$1;
(statearr_31149_31199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (15))){
var inst_31114 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31150_31200 = state_31141__$1;
(statearr_31150_31200[(2)] = inst_31114);

(statearr_31150_31200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (21))){
var inst_31134 = (state_31141[(2)]);
var state_31141__$1 = (function (){var statearr_31151 = state_31141;
(statearr_31151[(9)] = inst_31134);

return statearr_31151;
})();
var statearr_31152_31201 = state_31141__$1;
(statearr_31152_31201[(2)] = null);

(statearr_31152_31201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (13))){
var inst_31096 = (state_31141[(10)]);
var inst_31098 = cljs.core.chunked_seq_QMARK_.call(null,inst_31096);
var state_31141__$1 = state_31141;
if(inst_31098){
var statearr_31153_31202 = state_31141__$1;
(statearr_31153_31202[(1)] = (16));

} else {
var statearr_31154_31203 = state_31141__$1;
(statearr_31154_31203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (22))){
var inst_31126 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31126)){
var statearr_31155_31204 = state_31141__$1;
(statearr_31155_31204[(1)] = (23));

} else {
var statearr_31156_31205 = state_31141__$1;
(statearr_31156_31205[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (6))){
var inst_31122 = (state_31141[(11)]);
var inst_31072 = (state_31141[(8)]);
var inst_31120 = (state_31141[(7)]);
var inst_31120__$1 = topic_fn.call(null,inst_31072);
var inst_31121 = cljs.core.deref.call(null,mults);
var inst_31122__$1 = cljs.core.get.call(null,inst_31121,inst_31120__$1);
var state_31141__$1 = (function (){var statearr_31157 = state_31141;
(statearr_31157[(11)] = inst_31122__$1);

(statearr_31157[(7)] = inst_31120__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31122__$1)){
var statearr_31158_31206 = state_31141__$1;
(statearr_31158_31206[(1)] = (19));

} else {
var statearr_31159_31207 = state_31141__$1;
(statearr_31159_31207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (25))){
var inst_31131 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31160_31208 = state_31141__$1;
(statearr_31160_31208[(2)] = inst_31131);

(statearr_31160_31208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (17))){
var inst_31096 = (state_31141[(10)]);
var inst_31105 = cljs.core.first.call(null,inst_31096);
var inst_31106 = cljs.core.async.muxch_STAR_.call(null,inst_31105);
var inst_31107 = cljs.core.async.close_BANG_.call(null,inst_31106);
var inst_31108 = cljs.core.next.call(null,inst_31096);
var inst_31082 = inst_31108;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31141__$1 = (function (){var statearr_31161 = state_31141;
(statearr_31161[(12)] = inst_31107);

(statearr_31161[(13)] = inst_31083);

(statearr_31161[(14)] = inst_31084);

(statearr_31161[(15)] = inst_31085);

(statearr_31161[(16)] = inst_31082);

return statearr_31161;
})();
var statearr_31162_31209 = state_31141__$1;
(statearr_31162_31209[(2)] = null);

(statearr_31162_31209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (3))){
var inst_31139 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31141__$1,inst_31139);
} else {
if((state_val_31142 === (12))){
var inst_31116 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31163_31210 = state_31141__$1;
(statearr_31163_31210[(2)] = inst_31116);

(statearr_31163_31210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (2))){
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31141__$1,(4),ch);
} else {
if((state_val_31142 === (23))){
var state_31141__$1 = state_31141;
var statearr_31164_31211 = state_31141__$1;
(statearr_31164_31211[(2)] = null);

(statearr_31164_31211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (19))){
var inst_31122 = (state_31141[(11)]);
var inst_31072 = (state_31141[(8)]);
var inst_31124 = cljs.core.async.muxch_STAR_.call(null,inst_31122);
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31141__$1,(22),inst_31124,inst_31072);
} else {
if((state_val_31142 === (11))){
var inst_31096 = (state_31141[(10)]);
var inst_31082 = (state_31141[(16)]);
var inst_31096__$1 = cljs.core.seq.call(null,inst_31082);
var state_31141__$1 = (function (){var statearr_31165 = state_31141;
(statearr_31165[(10)] = inst_31096__$1);

return statearr_31165;
})();
if(inst_31096__$1){
var statearr_31166_31212 = state_31141__$1;
(statearr_31166_31212[(1)] = (13));

} else {
var statearr_31167_31213 = state_31141__$1;
(statearr_31167_31213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (9))){
var inst_31118 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31168_31214 = state_31141__$1;
(statearr_31168_31214[(2)] = inst_31118);

(statearr_31168_31214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (5))){
var inst_31079 = cljs.core.deref.call(null,mults);
var inst_31080 = cljs.core.vals.call(null,inst_31079);
var inst_31081 = cljs.core.seq.call(null,inst_31080);
var inst_31082 = inst_31081;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31141__$1 = (function (){var statearr_31169 = state_31141;
(statearr_31169[(13)] = inst_31083);

(statearr_31169[(14)] = inst_31084);

(statearr_31169[(15)] = inst_31085);

(statearr_31169[(16)] = inst_31082);

return statearr_31169;
})();
var statearr_31170_31215 = state_31141__$1;
(statearr_31170_31215[(2)] = null);

(statearr_31170_31215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (14))){
var state_31141__$1 = state_31141;
var statearr_31174_31216 = state_31141__$1;
(statearr_31174_31216[(2)] = null);

(statearr_31174_31216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (16))){
var inst_31096 = (state_31141[(10)]);
var inst_31100 = cljs.core.chunk_first.call(null,inst_31096);
var inst_31101 = cljs.core.chunk_rest.call(null,inst_31096);
var inst_31102 = cljs.core.count.call(null,inst_31100);
var inst_31082 = inst_31101;
var inst_31083 = inst_31100;
var inst_31084 = inst_31102;
var inst_31085 = (0);
var state_31141__$1 = (function (){var statearr_31175 = state_31141;
(statearr_31175[(13)] = inst_31083);

(statearr_31175[(14)] = inst_31084);

(statearr_31175[(15)] = inst_31085);

(statearr_31175[(16)] = inst_31082);

return statearr_31175;
})();
var statearr_31176_31217 = state_31141__$1;
(statearr_31176_31217[(2)] = null);

(statearr_31176_31217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (10))){
var inst_31083 = (state_31141[(13)]);
var inst_31084 = (state_31141[(14)]);
var inst_31085 = (state_31141[(15)]);
var inst_31082 = (state_31141[(16)]);
var inst_31090 = cljs.core._nth.call(null,inst_31083,inst_31085);
var inst_31091 = cljs.core.async.muxch_STAR_.call(null,inst_31090);
var inst_31092 = cljs.core.async.close_BANG_.call(null,inst_31091);
var inst_31093 = (inst_31085 + (1));
var tmp31171 = inst_31083;
var tmp31172 = inst_31084;
var tmp31173 = inst_31082;
var inst_31082__$1 = tmp31173;
var inst_31083__$1 = tmp31171;
var inst_31084__$1 = tmp31172;
var inst_31085__$1 = inst_31093;
var state_31141__$1 = (function (){var statearr_31177 = state_31141;
(statearr_31177[(17)] = inst_31092);

(statearr_31177[(13)] = inst_31083__$1);

(statearr_31177[(14)] = inst_31084__$1);

(statearr_31177[(15)] = inst_31085__$1);

(statearr_31177[(16)] = inst_31082__$1);

return statearr_31177;
})();
var statearr_31178_31218 = state_31141__$1;
(statearr_31178_31218[(2)] = null);

(statearr_31178_31218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (18))){
var inst_31111 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31179_31219 = state_31141__$1;
(statearr_31179_31219[(2)] = inst_31111);

(statearr_31179_31219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (8))){
var inst_31084 = (state_31141[(14)]);
var inst_31085 = (state_31141[(15)]);
var inst_31087 = (inst_31085 < inst_31084);
var inst_31088 = inst_31087;
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31088)){
var statearr_31180_31220 = state_31141__$1;
(statearr_31180_31220[(1)] = (10));

} else {
var statearr_31181_31221 = state_31141__$1;
(statearr_31181_31221[(1)] = (11));

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
});})(c__29260__auto___31193,mults,ensure_mult,p))
;
return ((function (switch__29146__auto__,c__29260__auto___31193,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31185[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31185[(1)] = (1));

return statearr_31185;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31141){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31186){if((e31186 instanceof Object)){
var ex__29150__auto__ = e31186;
var statearr_31187_31222 = state_31141;
(statearr_31187_31222[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31223 = state_31141;
state_31141 = G__31223;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31193,mults,ensure_mult,p))
})();
var state__29262__auto__ = (function (){var statearr_31188 = f__29261__auto__.call(null);
(statearr_31188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31193);

return statearr_31188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31193,mults,ensure_mult,p))
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
var args31224 = [];
var len__27777__auto___31227 = arguments.length;
var i__27778__auto___31228 = (0);
while(true){
if((i__27778__auto___31228 < len__27777__auto___31227)){
args31224.push((arguments[i__27778__auto___31228]));

var G__31229 = (i__27778__auto___31228 + (1));
i__27778__auto___31228 = G__31229;
continue;
} else {
}
break;
}

var G__31226 = args31224.length;
switch (G__31226) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31224.length)].join('')));

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
var args31231 = [];
var len__27777__auto___31234 = arguments.length;
var i__27778__auto___31235 = (0);
while(true){
if((i__27778__auto___31235 < len__27777__auto___31234)){
args31231.push((arguments[i__27778__auto___31235]));

var G__31236 = (i__27778__auto___31235 + (1));
i__27778__auto___31235 = G__31236;
continue;
} else {
}
break;
}

var G__31233 = args31231.length;
switch (G__31233) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31231.length)].join('')));

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
var args31238 = [];
var len__27777__auto___31309 = arguments.length;
var i__27778__auto___31310 = (0);
while(true){
if((i__27778__auto___31310 < len__27777__auto___31309)){
args31238.push((arguments[i__27778__auto___31310]));

var G__31311 = (i__27778__auto___31310 + (1));
i__27778__auto___31310 = G__31311;
continue;
} else {
}
break;
}

var G__31240 = args31238.length;
switch (G__31240) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31238.length)].join('')));

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
var c__29260__auto___31313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31279){
var state_val_31280 = (state_31279[(1)]);
if((state_val_31280 === (7))){
var state_31279__$1 = state_31279;
var statearr_31281_31314 = state_31279__$1;
(statearr_31281_31314[(2)] = null);

(statearr_31281_31314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (1))){
var state_31279__$1 = state_31279;
var statearr_31282_31315 = state_31279__$1;
(statearr_31282_31315[(2)] = null);

(statearr_31282_31315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (4))){
var inst_31243 = (state_31279[(7)]);
var inst_31245 = (inst_31243 < cnt);
var state_31279__$1 = state_31279;
if(cljs.core.truth_(inst_31245)){
var statearr_31283_31316 = state_31279__$1;
(statearr_31283_31316[(1)] = (6));

} else {
var statearr_31284_31317 = state_31279__$1;
(statearr_31284_31317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (15))){
var inst_31275 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31285_31318 = state_31279__$1;
(statearr_31285_31318[(2)] = inst_31275);

(statearr_31285_31318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (13))){
var inst_31268 = cljs.core.async.close_BANG_.call(null,out);
var state_31279__$1 = state_31279;
var statearr_31286_31319 = state_31279__$1;
(statearr_31286_31319[(2)] = inst_31268);

(statearr_31286_31319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (6))){
var state_31279__$1 = state_31279;
var statearr_31287_31320 = state_31279__$1;
(statearr_31287_31320[(2)] = null);

(statearr_31287_31320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (3))){
var inst_31277 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31279__$1,inst_31277);
} else {
if((state_val_31280 === (12))){
var inst_31265 = (state_31279[(8)]);
var inst_31265__$1 = (state_31279[(2)]);
var inst_31266 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31265__$1);
var state_31279__$1 = (function (){var statearr_31288 = state_31279;
(statearr_31288[(8)] = inst_31265__$1);

return statearr_31288;
})();
if(cljs.core.truth_(inst_31266)){
var statearr_31289_31321 = state_31279__$1;
(statearr_31289_31321[(1)] = (13));

} else {
var statearr_31290_31322 = state_31279__$1;
(statearr_31290_31322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (2))){
var inst_31242 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31243 = (0);
var state_31279__$1 = (function (){var statearr_31291 = state_31279;
(statearr_31291[(7)] = inst_31243);

(statearr_31291[(9)] = inst_31242);

return statearr_31291;
})();
var statearr_31292_31323 = state_31279__$1;
(statearr_31292_31323[(2)] = null);

(statearr_31292_31323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (11))){
var inst_31243 = (state_31279[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31279,(10),Object,null,(9));
var inst_31252 = chs__$1.call(null,inst_31243);
var inst_31253 = done.call(null,inst_31243);
var inst_31254 = cljs.core.async.take_BANG_.call(null,inst_31252,inst_31253);
var state_31279__$1 = state_31279;
var statearr_31293_31324 = state_31279__$1;
(statearr_31293_31324[(2)] = inst_31254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (9))){
var inst_31243 = (state_31279[(7)]);
var inst_31256 = (state_31279[(2)]);
var inst_31257 = (inst_31243 + (1));
var inst_31243__$1 = inst_31257;
var state_31279__$1 = (function (){var statearr_31294 = state_31279;
(statearr_31294[(7)] = inst_31243__$1);

(statearr_31294[(10)] = inst_31256);

return statearr_31294;
})();
var statearr_31295_31325 = state_31279__$1;
(statearr_31295_31325[(2)] = null);

(statearr_31295_31325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (5))){
var inst_31263 = (state_31279[(2)]);
var state_31279__$1 = (function (){var statearr_31296 = state_31279;
(statearr_31296[(11)] = inst_31263);

return statearr_31296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31279__$1,(12),dchan);
} else {
if((state_val_31280 === (14))){
var inst_31265 = (state_31279[(8)]);
var inst_31270 = cljs.core.apply.call(null,f,inst_31265);
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31279__$1,(16),out,inst_31270);
} else {
if((state_val_31280 === (16))){
var inst_31272 = (state_31279[(2)]);
var state_31279__$1 = (function (){var statearr_31297 = state_31279;
(statearr_31297[(12)] = inst_31272);

return statearr_31297;
})();
var statearr_31298_31326 = state_31279__$1;
(statearr_31298_31326[(2)] = null);

(statearr_31298_31326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (10))){
var inst_31247 = (state_31279[(2)]);
var inst_31248 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31279__$1 = (function (){var statearr_31299 = state_31279;
(statearr_31299[(13)] = inst_31247);

return statearr_31299;
})();
var statearr_31300_31327 = state_31279__$1;
(statearr_31300_31327[(2)] = inst_31248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31279__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (8))){
var inst_31261 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31301_31328 = state_31279__$1;
(statearr_31301_31328[(2)] = inst_31261);

(statearr_31301_31328[(1)] = (5));


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
});})(c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29146__auto__,c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31305[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31305[(1)] = (1));

return statearr_31305;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31279){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31306){if((e31306 instanceof Object)){
var ex__29150__auto__ = e31306;
var statearr_31307_31329 = state_31279;
(statearr_31307_31329[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31330 = state_31279;
state_31279 = G__31330;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29262__auto__ = (function (){var statearr_31308 = f__29261__auto__.call(null);
(statearr_31308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31313);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31313,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31332 = [];
var len__27777__auto___31390 = arguments.length;
var i__27778__auto___31391 = (0);
while(true){
if((i__27778__auto___31391 < len__27777__auto___31390)){
args31332.push((arguments[i__27778__auto___31391]));

var G__31392 = (i__27778__auto___31391 + (1));
i__27778__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var G__31334 = args31332.length;
switch (G__31334) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31332.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___31394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31394,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31394,out){
return (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31345 = (state_31366[(7)]);
var inst_31346 = (state_31366[(8)]);
var inst_31345__$1 = (state_31366[(2)]);
var inst_31346__$1 = cljs.core.nth.call(null,inst_31345__$1,(0),null);
var inst_31347 = cljs.core.nth.call(null,inst_31345__$1,(1),null);
var inst_31348 = (inst_31346__$1 == null);
var state_31366__$1 = (function (){var statearr_31368 = state_31366;
(statearr_31368[(7)] = inst_31345__$1);

(statearr_31368[(9)] = inst_31347);

(statearr_31368[(8)] = inst_31346__$1);

return statearr_31368;
})();
if(cljs.core.truth_(inst_31348)){
var statearr_31369_31395 = state_31366__$1;
(statearr_31369_31395[(1)] = (8));

} else {
var statearr_31370_31396 = state_31366__$1;
(statearr_31370_31396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var inst_31335 = cljs.core.vec.call(null,chs);
var inst_31336 = inst_31335;
var state_31366__$1 = (function (){var statearr_31371 = state_31366;
(statearr_31371[(10)] = inst_31336);

return statearr_31371;
})();
var statearr_31372_31397 = state_31366__$1;
(statearr_31372_31397[(2)] = null);

(statearr_31372_31397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31336 = (state_31366[(10)]);
var state_31366__$1 = state_31366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31366__$1,(7),inst_31336);
} else {
if((state_val_31367 === (6))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31373_31398 = state_31366__$1;
(statearr_31373_31398[(2)] = inst_31362);

(statearr_31373_31398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (2))){
var inst_31336 = (state_31366[(10)]);
var inst_31338 = cljs.core.count.call(null,inst_31336);
var inst_31339 = (inst_31338 > (0));
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31339)){
var statearr_31375_31399 = state_31366__$1;
(statearr_31375_31399[(1)] = (4));

} else {
var statearr_31376_31400 = state_31366__$1;
(statearr_31376_31400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (11))){
var inst_31336 = (state_31366[(10)]);
var inst_31355 = (state_31366[(2)]);
var tmp31374 = inst_31336;
var inst_31336__$1 = tmp31374;
var state_31366__$1 = (function (){var statearr_31377 = state_31366;
(statearr_31377[(11)] = inst_31355);

(statearr_31377[(10)] = inst_31336__$1);

return statearr_31377;
})();
var statearr_31378_31401 = state_31366__$1;
(statearr_31378_31401[(2)] = null);

(statearr_31378_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (9))){
var inst_31346 = (state_31366[(8)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31366__$1,(11),out,inst_31346);
} else {
if((state_val_31367 === (5))){
var inst_31360 = cljs.core.async.close_BANG_.call(null,out);
var state_31366__$1 = state_31366;
var statearr_31379_31402 = state_31366__$1;
(statearr_31379_31402[(2)] = inst_31360);

(statearr_31379_31402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (10))){
var inst_31358 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31380_31403 = state_31366__$1;
(statearr_31380_31403[(2)] = inst_31358);

(statearr_31380_31403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31345 = (state_31366[(7)]);
var inst_31347 = (state_31366[(9)]);
var inst_31336 = (state_31366[(10)]);
var inst_31346 = (state_31366[(8)]);
var inst_31350 = (function (){var cs = inst_31336;
var vec__31341 = inst_31345;
var v = inst_31346;
var c = inst_31347;
return ((function (cs,vec__31341,v,c,inst_31345,inst_31347,inst_31336,inst_31346,state_val_31367,c__29260__auto___31394,out){
return (function (p1__31331_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31331_SHARP_);
});
;})(cs,vec__31341,v,c,inst_31345,inst_31347,inst_31336,inst_31346,state_val_31367,c__29260__auto___31394,out))
})();
var inst_31351 = cljs.core.filterv.call(null,inst_31350,inst_31336);
var inst_31336__$1 = inst_31351;
var state_31366__$1 = (function (){var statearr_31381 = state_31366;
(statearr_31381[(10)] = inst_31336__$1);

return statearr_31381;
})();
var statearr_31382_31404 = state_31366__$1;
(statearr_31382_31404[(2)] = null);

(statearr_31382_31404[(1)] = (2));


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
});})(c__29260__auto___31394,out))
;
return ((function (switch__29146__auto__,c__29260__auto___31394,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31386[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31386[(1)] = (1));

return statearr_31386;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31366){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31387){if((e31387 instanceof Object)){
var ex__29150__auto__ = e31387;
var statearr_31388_31405 = state_31366;
(statearr_31388_31405[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31406 = state_31366;
state_31366 = G__31406;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31394,out))
})();
var state__29262__auto__ = (function (){var statearr_31389 = f__29261__auto__.call(null);
(statearr_31389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31394);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31394,out))
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
var args31407 = [];
var len__27777__auto___31456 = arguments.length;
var i__27778__auto___31457 = (0);
while(true){
if((i__27778__auto___31457 < len__27777__auto___31456)){
args31407.push((arguments[i__27778__auto___31457]));

var G__31458 = (i__27778__auto___31457 + (1));
i__27778__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__31409 = args31407.length;
switch (G__31409) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31407.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___31460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31460,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31460,out){
return (function (state_31433){
var state_val_31434 = (state_31433[(1)]);
if((state_val_31434 === (7))){
var inst_31415 = (state_31433[(7)]);
var inst_31415__$1 = (state_31433[(2)]);
var inst_31416 = (inst_31415__$1 == null);
var inst_31417 = cljs.core.not.call(null,inst_31416);
var state_31433__$1 = (function (){var statearr_31435 = state_31433;
(statearr_31435[(7)] = inst_31415__$1);

return statearr_31435;
})();
if(inst_31417){
var statearr_31436_31461 = state_31433__$1;
(statearr_31436_31461[(1)] = (8));

} else {
var statearr_31437_31462 = state_31433__$1;
(statearr_31437_31462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (1))){
var inst_31410 = (0);
var state_31433__$1 = (function (){var statearr_31438 = state_31433;
(statearr_31438[(8)] = inst_31410);

return statearr_31438;
})();
var statearr_31439_31463 = state_31433__$1;
(statearr_31439_31463[(2)] = null);

(statearr_31439_31463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (4))){
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31433__$1,(7),ch);
} else {
if((state_val_31434 === (6))){
var inst_31428 = (state_31433[(2)]);
var state_31433__$1 = state_31433;
var statearr_31440_31464 = state_31433__$1;
(statearr_31440_31464[(2)] = inst_31428);

(statearr_31440_31464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (3))){
var inst_31430 = (state_31433[(2)]);
var inst_31431 = cljs.core.async.close_BANG_.call(null,out);
var state_31433__$1 = (function (){var statearr_31441 = state_31433;
(statearr_31441[(9)] = inst_31430);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31433__$1,inst_31431);
} else {
if((state_val_31434 === (2))){
var inst_31410 = (state_31433[(8)]);
var inst_31412 = (inst_31410 < n);
var state_31433__$1 = state_31433;
if(cljs.core.truth_(inst_31412)){
var statearr_31442_31465 = state_31433__$1;
(statearr_31442_31465[(1)] = (4));

} else {
var statearr_31443_31466 = state_31433__$1;
(statearr_31443_31466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (11))){
var inst_31410 = (state_31433[(8)]);
var inst_31420 = (state_31433[(2)]);
var inst_31421 = (inst_31410 + (1));
var inst_31410__$1 = inst_31421;
var state_31433__$1 = (function (){var statearr_31444 = state_31433;
(statearr_31444[(8)] = inst_31410__$1);

(statearr_31444[(10)] = inst_31420);

return statearr_31444;
})();
var statearr_31445_31467 = state_31433__$1;
(statearr_31445_31467[(2)] = null);

(statearr_31445_31467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (9))){
var state_31433__$1 = state_31433;
var statearr_31446_31468 = state_31433__$1;
(statearr_31446_31468[(2)] = null);

(statearr_31446_31468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (5))){
var state_31433__$1 = state_31433;
var statearr_31447_31469 = state_31433__$1;
(statearr_31447_31469[(2)] = null);

(statearr_31447_31469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (10))){
var inst_31425 = (state_31433[(2)]);
var state_31433__$1 = state_31433;
var statearr_31448_31470 = state_31433__$1;
(statearr_31448_31470[(2)] = inst_31425);

(statearr_31448_31470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31434 === (8))){
var inst_31415 = (state_31433[(7)]);
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31433__$1,(11),out,inst_31415);
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
});})(c__29260__auto___31460,out))
;
return ((function (switch__29146__auto__,c__29260__auto___31460,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31452[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31452[(1)] = (1));

return statearr_31452;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31433){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31453){if((e31453 instanceof Object)){
var ex__29150__auto__ = e31453;
var statearr_31454_31471 = state_31433;
(statearr_31454_31471[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31472 = state_31433;
state_31433 = G__31472;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31460,out))
})();
var state__29262__auto__ = (function (){var statearr_31455 = f__29261__auto__.call(null);
(statearr_31455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31460);

return statearr_31455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31460,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31480 = (function (map_LT_,f,ch,meta31481){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31481 = meta31481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31482,meta31481__$1){
var self__ = this;
var _31482__$1 = this;
return (new cljs.core.async.t_cljs$core$async31480(self__.map_LT_,self__.f,self__.ch,meta31481__$1));
});

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31482){
var self__ = this;
var _31482__$1 = this;
return self__.meta31481;
});

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31483 = (function (map_LT_,f,ch,meta31481,_,fn1,meta31484){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31481 = meta31481;
this._ = _;
this.fn1 = fn1;
this.meta31484 = meta31484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31485,meta31484__$1){
var self__ = this;
var _31485__$1 = this;
return (new cljs.core.async.t_cljs$core$async31483(self__.map_LT_,self__.f,self__.ch,self__.meta31481,self__._,self__.fn1,meta31484__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31485){
var self__ = this;
var _31485__$1 = this;
return self__.meta31484;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31473_SHARP_){
return f1.call(null,(((p1__31473_SHARP_ == null))?null:self__.f.call(null,p1__31473_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31481","meta31481",1894165197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31480","cljs.core.async/t_cljs$core$async31480",-1036124124,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31484","meta31484",1391890421,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31483";

cljs.core.async.t_cljs$core$async31483.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31483");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31483 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31483(map_LT___$1,f__$1,ch__$1,meta31481__$1,___$2,fn1__$1,meta31484){
return (new cljs.core.async.t_cljs$core$async31483(map_LT___$1,f__$1,ch__$1,meta31481__$1,___$2,fn1__$1,meta31484));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31483(self__.map_LT_,self__.f,self__.ch,self__.meta31481,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31481","meta31481",1894165197,null)], null);
});

cljs.core.async.t_cljs$core$async31480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31480";

cljs.core.async.t_cljs$core$async31480.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31480");
});

cljs.core.async.__GT_t_cljs$core$async31480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31480(map_LT___$1,f__$1,ch__$1,meta31481){
return (new cljs.core.async.t_cljs$core$async31480(map_LT___$1,f__$1,ch__$1,meta31481));
});

}

return (new cljs.core.async.t_cljs$core$async31480(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31489 = (function (map_GT_,f,ch,meta31490){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31490 = meta31490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31491,meta31490__$1){
var self__ = this;
var _31491__$1 = this;
return (new cljs.core.async.t_cljs$core$async31489(self__.map_GT_,self__.f,self__.ch,meta31490__$1));
});

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31491){
var self__ = this;
var _31491__$1 = this;
return self__.meta31490;
});

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31490","meta31490",-872481605,null)], null);
});

cljs.core.async.t_cljs$core$async31489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31489";

cljs.core.async.t_cljs$core$async31489.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31489");
});

cljs.core.async.__GT_t_cljs$core$async31489 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31489(map_GT___$1,f__$1,ch__$1,meta31490){
return (new cljs.core.async.t_cljs$core$async31489(map_GT___$1,f__$1,ch__$1,meta31490));
});

}

return (new cljs.core.async.t_cljs$core$async31489(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31495 = (function (filter_GT_,p,ch,meta31496){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31496 = meta31496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31497,meta31496__$1){
var self__ = this;
var _31497__$1 = this;
return (new cljs.core.async.t_cljs$core$async31495(self__.filter_GT_,self__.p,self__.ch,meta31496__$1));
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31497){
var self__ = this;
var _31497__$1 = this;
return self__.meta31496;
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31496","meta31496",892431758,null)], null);
});

cljs.core.async.t_cljs$core$async31495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31495";

cljs.core.async.t_cljs$core$async31495.cljs$lang$ctorPrWriter = (function (this__27246__auto__,writer__27247__auto__,opt__27248__auto__){
return cljs.core._write.call(null,writer__27247__auto__,"cljs.core.async/t_cljs$core$async31495");
});

cljs.core.async.__GT_t_cljs$core$async31495 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31495(filter_GT___$1,p__$1,ch__$1,meta31496){
return (new cljs.core.async.t_cljs$core$async31495(filter_GT___$1,p__$1,ch__$1,meta31496));
});

}

return (new cljs.core.async.t_cljs$core$async31495(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31498 = [];
var len__27777__auto___31542 = arguments.length;
var i__27778__auto___31543 = (0);
while(true){
if((i__27778__auto___31543 < len__27777__auto___31542)){
args31498.push((arguments[i__27778__auto___31543]));

var G__31544 = (i__27778__auto___31543 + (1));
i__27778__auto___31543 = G__31544;
continue;
} else {
}
break;
}

var G__31500 = args31498.length;
switch (G__31500) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31498.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___31546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31546,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31546,out){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31523_31547 = state_31521__$1;
(statearr_31523_31547[(2)] = inst_31517);

(statearr_31523_31547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var state_31521__$1 = state_31521;
var statearr_31524_31548 = state_31521__$1;
(statearr_31524_31548[(2)] = null);

(statearr_31524_31548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31503 = (state_31521[(7)]);
var inst_31503__$1 = (state_31521[(2)]);
var inst_31504 = (inst_31503__$1 == null);
var state_31521__$1 = (function (){var statearr_31525 = state_31521;
(statearr_31525[(7)] = inst_31503__$1);

return statearr_31525;
})();
if(cljs.core.truth_(inst_31504)){
var statearr_31526_31549 = state_31521__$1;
(statearr_31526_31549[(1)] = (5));

} else {
var statearr_31527_31550 = state_31521__$1;
(statearr_31527_31550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var inst_31503 = (state_31521[(7)]);
var inst_31508 = p.call(null,inst_31503);
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31508)){
var statearr_31528_31551 = state_31521__$1;
(statearr_31528_31551[(1)] = (8));

} else {
var statearr_31529_31552 = state_31521__$1;
(statearr_31529_31552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(4),ch);
} else {
if((state_val_31522 === (11))){
var inst_31511 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31530_31553 = state_31521__$1;
(statearr_31530_31553[(2)] = inst_31511);

(statearr_31530_31553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var state_31521__$1 = state_31521;
var statearr_31531_31554 = state_31521__$1;
(statearr_31531_31554[(2)] = null);

(statearr_31531_31554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var inst_31506 = cljs.core.async.close_BANG_.call(null,out);
var state_31521__$1 = state_31521;
var statearr_31532_31555 = state_31521__$1;
(statearr_31532_31555[(2)] = inst_31506);

(statearr_31532_31555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31514 = (state_31521[(2)]);
var state_31521__$1 = (function (){var statearr_31533 = state_31521;
(statearr_31533[(8)] = inst_31514);

return statearr_31533;
})();
var statearr_31534_31556 = state_31521__$1;
(statearr_31534_31556[(2)] = null);

(statearr_31534_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31503 = (state_31521[(7)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31521__$1,(11),out,inst_31503);
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
});})(c__29260__auto___31546,out))
;
return ((function (switch__29146__auto__,c__29260__auto___31546,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31538 = [null,null,null,null,null,null,null,null,null];
(statearr_31538[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31538[(1)] = (1));

return statearr_31538;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31521){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31539){if((e31539 instanceof Object)){
var ex__29150__auto__ = e31539;
var statearr_31540_31557 = state_31521;
(statearr_31540_31557[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31558 = state_31521;
state_31521 = G__31558;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31546,out))
})();
var state__29262__auto__ = (function (){var statearr_31541 = f__29261__auto__.call(null);
(statearr_31541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31546);

return statearr_31541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31546,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31559 = [];
var len__27777__auto___31562 = arguments.length;
var i__27778__auto___31563 = (0);
while(true){
if((i__27778__auto___31563 < len__27777__auto___31562)){
args31559.push((arguments[i__27778__auto___31563]));

var G__31564 = (i__27778__auto___31563 + (1));
i__27778__auto___31563 = G__31564;
continue;
} else {
}
break;
}

var G__31561 = args31559.length;
switch (G__31561) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31559.length)].join('')));

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
var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__){
return (function (state_31731){
var state_val_31732 = (state_31731[(1)]);
if((state_val_31732 === (7))){
var inst_31727 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31733_31774 = state_31731__$1;
(statearr_31733_31774[(2)] = inst_31727);

(statearr_31733_31774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (20))){
var inst_31697 = (state_31731[(7)]);
var inst_31708 = (state_31731[(2)]);
var inst_31709 = cljs.core.next.call(null,inst_31697);
var inst_31683 = inst_31709;
var inst_31684 = null;
var inst_31685 = (0);
var inst_31686 = (0);
var state_31731__$1 = (function (){var statearr_31734 = state_31731;
(statearr_31734[(8)] = inst_31708);

(statearr_31734[(9)] = inst_31685);

(statearr_31734[(10)] = inst_31684);

(statearr_31734[(11)] = inst_31686);

(statearr_31734[(12)] = inst_31683);

return statearr_31734;
})();
var statearr_31735_31775 = state_31731__$1;
(statearr_31735_31775[(2)] = null);

(statearr_31735_31775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (1))){
var state_31731__$1 = state_31731;
var statearr_31736_31776 = state_31731__$1;
(statearr_31736_31776[(2)] = null);

(statearr_31736_31776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (4))){
var inst_31672 = (state_31731[(13)]);
var inst_31672__$1 = (state_31731[(2)]);
var inst_31673 = (inst_31672__$1 == null);
var state_31731__$1 = (function (){var statearr_31737 = state_31731;
(statearr_31737[(13)] = inst_31672__$1);

return statearr_31737;
})();
if(cljs.core.truth_(inst_31673)){
var statearr_31738_31777 = state_31731__$1;
(statearr_31738_31777[(1)] = (5));

} else {
var statearr_31739_31778 = state_31731__$1;
(statearr_31739_31778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (15))){
var state_31731__$1 = state_31731;
var statearr_31743_31779 = state_31731__$1;
(statearr_31743_31779[(2)] = null);

(statearr_31743_31779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (21))){
var state_31731__$1 = state_31731;
var statearr_31744_31780 = state_31731__$1;
(statearr_31744_31780[(2)] = null);

(statearr_31744_31780[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (13))){
var inst_31685 = (state_31731[(9)]);
var inst_31684 = (state_31731[(10)]);
var inst_31686 = (state_31731[(11)]);
var inst_31683 = (state_31731[(12)]);
var inst_31693 = (state_31731[(2)]);
var inst_31694 = (inst_31686 + (1));
var tmp31740 = inst_31685;
var tmp31741 = inst_31684;
var tmp31742 = inst_31683;
var inst_31683__$1 = tmp31742;
var inst_31684__$1 = tmp31741;
var inst_31685__$1 = tmp31740;
var inst_31686__$1 = inst_31694;
var state_31731__$1 = (function (){var statearr_31745 = state_31731;
(statearr_31745[(9)] = inst_31685__$1);

(statearr_31745[(10)] = inst_31684__$1);

(statearr_31745[(11)] = inst_31686__$1);

(statearr_31745[(12)] = inst_31683__$1);

(statearr_31745[(14)] = inst_31693);

return statearr_31745;
})();
var statearr_31746_31781 = state_31731__$1;
(statearr_31746_31781[(2)] = null);

(statearr_31746_31781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (22))){
var state_31731__$1 = state_31731;
var statearr_31747_31782 = state_31731__$1;
(statearr_31747_31782[(2)] = null);

(statearr_31747_31782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (6))){
var inst_31672 = (state_31731[(13)]);
var inst_31681 = f.call(null,inst_31672);
var inst_31682 = cljs.core.seq.call(null,inst_31681);
var inst_31683 = inst_31682;
var inst_31684 = null;
var inst_31685 = (0);
var inst_31686 = (0);
var state_31731__$1 = (function (){var statearr_31748 = state_31731;
(statearr_31748[(9)] = inst_31685);

(statearr_31748[(10)] = inst_31684);

(statearr_31748[(11)] = inst_31686);

(statearr_31748[(12)] = inst_31683);

return statearr_31748;
})();
var statearr_31749_31783 = state_31731__$1;
(statearr_31749_31783[(2)] = null);

(statearr_31749_31783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (17))){
var inst_31697 = (state_31731[(7)]);
var inst_31701 = cljs.core.chunk_first.call(null,inst_31697);
var inst_31702 = cljs.core.chunk_rest.call(null,inst_31697);
var inst_31703 = cljs.core.count.call(null,inst_31701);
var inst_31683 = inst_31702;
var inst_31684 = inst_31701;
var inst_31685 = inst_31703;
var inst_31686 = (0);
var state_31731__$1 = (function (){var statearr_31750 = state_31731;
(statearr_31750[(9)] = inst_31685);

(statearr_31750[(10)] = inst_31684);

(statearr_31750[(11)] = inst_31686);

(statearr_31750[(12)] = inst_31683);

return statearr_31750;
})();
var statearr_31751_31784 = state_31731__$1;
(statearr_31751_31784[(2)] = null);

(statearr_31751_31784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (3))){
var inst_31729 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31731__$1,inst_31729);
} else {
if((state_val_31732 === (12))){
var inst_31717 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31752_31785 = state_31731__$1;
(statearr_31752_31785[(2)] = inst_31717);

(statearr_31752_31785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (2))){
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31731__$1,(4),in$);
} else {
if((state_val_31732 === (23))){
var inst_31725 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31753_31786 = state_31731__$1;
(statearr_31753_31786[(2)] = inst_31725);

(statearr_31753_31786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (19))){
var inst_31712 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31754_31787 = state_31731__$1;
(statearr_31754_31787[(2)] = inst_31712);

(statearr_31754_31787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (11))){
var inst_31697 = (state_31731[(7)]);
var inst_31683 = (state_31731[(12)]);
var inst_31697__$1 = cljs.core.seq.call(null,inst_31683);
var state_31731__$1 = (function (){var statearr_31755 = state_31731;
(statearr_31755[(7)] = inst_31697__$1);

return statearr_31755;
})();
if(inst_31697__$1){
var statearr_31756_31788 = state_31731__$1;
(statearr_31756_31788[(1)] = (14));

} else {
var statearr_31757_31789 = state_31731__$1;
(statearr_31757_31789[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (9))){
var inst_31719 = (state_31731[(2)]);
var inst_31720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31731__$1 = (function (){var statearr_31758 = state_31731;
(statearr_31758[(15)] = inst_31719);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31720)){
var statearr_31759_31790 = state_31731__$1;
(statearr_31759_31790[(1)] = (21));

} else {
var statearr_31760_31791 = state_31731__$1;
(statearr_31760_31791[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (5))){
var inst_31675 = cljs.core.async.close_BANG_.call(null,out);
var state_31731__$1 = state_31731;
var statearr_31761_31792 = state_31731__$1;
(statearr_31761_31792[(2)] = inst_31675);

(statearr_31761_31792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (14))){
var inst_31697 = (state_31731[(7)]);
var inst_31699 = cljs.core.chunked_seq_QMARK_.call(null,inst_31697);
var state_31731__$1 = state_31731;
if(inst_31699){
var statearr_31762_31793 = state_31731__$1;
(statearr_31762_31793[(1)] = (17));

} else {
var statearr_31763_31794 = state_31731__$1;
(statearr_31763_31794[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (16))){
var inst_31715 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31764_31795 = state_31731__$1;
(statearr_31764_31795[(2)] = inst_31715);

(statearr_31764_31795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (10))){
var inst_31684 = (state_31731[(10)]);
var inst_31686 = (state_31731[(11)]);
var inst_31691 = cljs.core._nth.call(null,inst_31684,inst_31686);
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31731__$1,(13),out,inst_31691);
} else {
if((state_val_31732 === (18))){
var inst_31697 = (state_31731[(7)]);
var inst_31706 = cljs.core.first.call(null,inst_31697);
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31731__$1,(20),out,inst_31706);
} else {
if((state_val_31732 === (8))){
var inst_31685 = (state_31731[(9)]);
var inst_31686 = (state_31731[(11)]);
var inst_31688 = (inst_31686 < inst_31685);
var inst_31689 = inst_31688;
var state_31731__$1 = state_31731;
if(cljs.core.truth_(inst_31689)){
var statearr_31765_31796 = state_31731__$1;
(statearr_31765_31796[(1)] = (10));

} else {
var statearr_31766_31797 = state_31731__$1;
(statearr_31766_31797[(1)] = (11));

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
});})(c__29260__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1 = (function (state_31731){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object)){
var ex__29150__auto__ = e31771;
var statearr_31772_31798 = state_31731;
(statearr_31772_31798[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31799 = state_31731;
state_31731 = G__31799;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__ = function(state_31731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1.call(this,state_31731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__))
})();
var state__29262__auto__ = (function (){var statearr_31773 = f__29261__auto__.call(null);
(statearr_31773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__))
);

return c__29260__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31800 = [];
var len__27777__auto___31803 = arguments.length;
var i__27778__auto___31804 = (0);
while(true){
if((i__27778__auto___31804 < len__27777__auto___31803)){
args31800.push((arguments[i__27778__auto___31804]));

var G__31805 = (i__27778__auto___31804 + (1));
i__27778__auto___31804 = G__31805;
continue;
} else {
}
break;
}

var G__31802 = args31800.length;
switch (G__31802) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31800.length)].join('')));

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
var args31807 = [];
var len__27777__auto___31810 = arguments.length;
var i__27778__auto___31811 = (0);
while(true){
if((i__27778__auto___31811 < len__27777__auto___31810)){
args31807.push((arguments[i__27778__auto___31811]));

var G__31812 = (i__27778__auto___31811 + (1));
i__27778__auto___31811 = G__31812;
continue;
} else {
}
break;
}

var G__31809 = args31807.length;
switch (G__31809) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31807.length)].join('')));

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
var args31814 = [];
var len__27777__auto___31865 = arguments.length;
var i__27778__auto___31866 = (0);
while(true){
if((i__27778__auto___31866 < len__27777__auto___31865)){
args31814.push((arguments[i__27778__auto___31866]));

var G__31867 = (i__27778__auto___31866 + (1));
i__27778__auto___31866 = G__31867;
continue;
} else {
}
break;
}

var G__31816 = args31814.length;
switch (G__31816) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31814.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___31869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31869,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31869,out){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (7))){
var inst_31835 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31842_31870 = state_31840__$1;
(statearr_31842_31870[(2)] = inst_31835);

(statearr_31842_31870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (1))){
var inst_31817 = null;
var state_31840__$1 = (function (){var statearr_31843 = state_31840;
(statearr_31843[(7)] = inst_31817);

return statearr_31843;
})();
var statearr_31844_31871 = state_31840__$1;
(statearr_31844_31871[(2)] = null);

(statearr_31844_31871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (4))){
var inst_31820 = (state_31840[(8)]);
var inst_31820__$1 = (state_31840[(2)]);
var inst_31821 = (inst_31820__$1 == null);
var inst_31822 = cljs.core.not.call(null,inst_31821);
var state_31840__$1 = (function (){var statearr_31845 = state_31840;
(statearr_31845[(8)] = inst_31820__$1);

return statearr_31845;
})();
if(inst_31822){
var statearr_31846_31872 = state_31840__$1;
(statearr_31846_31872[(1)] = (5));

} else {
var statearr_31847_31873 = state_31840__$1;
(statearr_31847_31873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (6))){
var state_31840__$1 = state_31840;
var statearr_31848_31874 = state_31840__$1;
(statearr_31848_31874[(2)] = null);

(statearr_31848_31874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (3))){
var inst_31837 = (state_31840[(2)]);
var inst_31838 = cljs.core.async.close_BANG_.call(null,out);
var state_31840__$1 = (function (){var statearr_31849 = state_31840;
(statearr_31849[(9)] = inst_31837);

return statearr_31849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
if((state_val_31841 === (2))){
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31840__$1,(4),ch);
} else {
if((state_val_31841 === (11))){
var inst_31820 = (state_31840[(8)]);
var inst_31829 = (state_31840[(2)]);
var inst_31817 = inst_31820;
var state_31840__$1 = (function (){var statearr_31850 = state_31840;
(statearr_31850[(10)] = inst_31829);

(statearr_31850[(7)] = inst_31817);

return statearr_31850;
})();
var statearr_31851_31875 = state_31840__$1;
(statearr_31851_31875[(2)] = null);

(statearr_31851_31875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (9))){
var inst_31820 = (state_31840[(8)]);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31840__$1,(11),out,inst_31820);
} else {
if((state_val_31841 === (5))){
var inst_31820 = (state_31840[(8)]);
var inst_31817 = (state_31840[(7)]);
var inst_31824 = cljs.core._EQ_.call(null,inst_31820,inst_31817);
var state_31840__$1 = state_31840;
if(inst_31824){
var statearr_31853_31876 = state_31840__$1;
(statearr_31853_31876[(1)] = (8));

} else {
var statearr_31854_31877 = state_31840__$1;
(statearr_31854_31877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (10))){
var inst_31832 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31855_31878 = state_31840__$1;
(statearr_31855_31878[(2)] = inst_31832);

(statearr_31855_31878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (8))){
var inst_31817 = (state_31840[(7)]);
var tmp31852 = inst_31817;
var inst_31817__$1 = tmp31852;
var state_31840__$1 = (function (){var statearr_31856 = state_31840;
(statearr_31856[(7)] = inst_31817__$1);

return statearr_31856;
})();
var statearr_31857_31879 = state_31840__$1;
(statearr_31857_31879[(2)] = null);

(statearr_31857_31879[(1)] = (2));


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
});})(c__29260__auto___31869,out))
;
return ((function (switch__29146__auto__,c__29260__auto___31869,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31861[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31861[(1)] = (1));

return statearr_31861;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31840){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31862){if((e31862 instanceof Object)){
var ex__29150__auto__ = e31862;
var statearr_31863_31880 = state_31840;
(statearr_31863_31880[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31881 = state_31840;
state_31840 = G__31881;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31869,out))
})();
var state__29262__auto__ = (function (){var statearr_31864 = f__29261__auto__.call(null);
(statearr_31864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31869);

return statearr_31864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31869,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31882 = [];
var len__27777__auto___31952 = arguments.length;
var i__27778__auto___31953 = (0);
while(true){
if((i__27778__auto___31953 < len__27777__auto___31952)){
args31882.push((arguments[i__27778__auto___31953]));

var G__31954 = (i__27778__auto___31953 + (1));
i__27778__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var G__31884 = args31882.length;
switch (G__31884) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31882.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___31956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___31956,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___31956,out){
return (function (state_31922){
var state_val_31923 = (state_31922[(1)]);
if((state_val_31923 === (7))){
var inst_31918 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31924_31957 = state_31922__$1;
(statearr_31924_31957[(2)] = inst_31918);

(statearr_31924_31957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (1))){
var inst_31885 = (new Array(n));
var inst_31886 = inst_31885;
var inst_31887 = (0);
var state_31922__$1 = (function (){var statearr_31925 = state_31922;
(statearr_31925[(7)] = inst_31886);

(statearr_31925[(8)] = inst_31887);

return statearr_31925;
})();
var statearr_31926_31958 = state_31922__$1;
(statearr_31926_31958[(2)] = null);

(statearr_31926_31958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (4))){
var inst_31890 = (state_31922[(9)]);
var inst_31890__$1 = (state_31922[(2)]);
var inst_31891 = (inst_31890__$1 == null);
var inst_31892 = cljs.core.not.call(null,inst_31891);
var state_31922__$1 = (function (){var statearr_31927 = state_31922;
(statearr_31927[(9)] = inst_31890__$1);

return statearr_31927;
})();
if(inst_31892){
var statearr_31928_31959 = state_31922__$1;
(statearr_31928_31959[(1)] = (5));

} else {
var statearr_31929_31960 = state_31922__$1;
(statearr_31929_31960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (15))){
var inst_31912 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31930_31961 = state_31922__$1;
(statearr_31930_31961[(2)] = inst_31912);

(statearr_31930_31961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (13))){
var state_31922__$1 = state_31922;
var statearr_31931_31962 = state_31922__$1;
(statearr_31931_31962[(2)] = null);

(statearr_31931_31962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (6))){
var inst_31887 = (state_31922[(8)]);
var inst_31908 = (inst_31887 > (0));
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31908)){
var statearr_31932_31963 = state_31922__$1;
(statearr_31932_31963[(1)] = (12));

} else {
var statearr_31933_31964 = state_31922__$1;
(statearr_31933_31964[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (3))){
var inst_31920 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31922__$1,inst_31920);
} else {
if((state_val_31923 === (12))){
var inst_31886 = (state_31922[(7)]);
var inst_31910 = cljs.core.vec.call(null,inst_31886);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31922__$1,(15),out,inst_31910);
} else {
if((state_val_31923 === (2))){
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31922__$1,(4),ch);
} else {
if((state_val_31923 === (11))){
var inst_31902 = (state_31922[(2)]);
var inst_31903 = (new Array(n));
var inst_31886 = inst_31903;
var inst_31887 = (0);
var state_31922__$1 = (function (){var statearr_31934 = state_31922;
(statearr_31934[(7)] = inst_31886);

(statearr_31934[(10)] = inst_31902);

(statearr_31934[(8)] = inst_31887);

return statearr_31934;
})();
var statearr_31935_31965 = state_31922__$1;
(statearr_31935_31965[(2)] = null);

(statearr_31935_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (9))){
var inst_31886 = (state_31922[(7)]);
var inst_31900 = cljs.core.vec.call(null,inst_31886);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31922__$1,(11),out,inst_31900);
} else {
if((state_val_31923 === (5))){
var inst_31886 = (state_31922[(7)]);
var inst_31887 = (state_31922[(8)]);
var inst_31890 = (state_31922[(9)]);
var inst_31895 = (state_31922[(11)]);
var inst_31894 = (inst_31886[inst_31887] = inst_31890);
var inst_31895__$1 = (inst_31887 + (1));
var inst_31896 = (inst_31895__$1 < n);
var state_31922__$1 = (function (){var statearr_31936 = state_31922;
(statearr_31936[(12)] = inst_31894);

(statearr_31936[(11)] = inst_31895__$1);

return statearr_31936;
})();
if(cljs.core.truth_(inst_31896)){
var statearr_31937_31966 = state_31922__$1;
(statearr_31937_31966[(1)] = (8));

} else {
var statearr_31938_31967 = state_31922__$1;
(statearr_31938_31967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (14))){
var inst_31915 = (state_31922[(2)]);
var inst_31916 = cljs.core.async.close_BANG_.call(null,out);
var state_31922__$1 = (function (){var statearr_31940 = state_31922;
(statearr_31940[(13)] = inst_31915);

return statearr_31940;
})();
var statearr_31941_31968 = state_31922__$1;
(statearr_31941_31968[(2)] = inst_31916);

(statearr_31941_31968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (10))){
var inst_31906 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31942_31969 = state_31922__$1;
(statearr_31942_31969[(2)] = inst_31906);

(statearr_31942_31969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (8))){
var inst_31886 = (state_31922[(7)]);
var inst_31895 = (state_31922[(11)]);
var tmp31939 = inst_31886;
var inst_31886__$1 = tmp31939;
var inst_31887 = inst_31895;
var state_31922__$1 = (function (){var statearr_31943 = state_31922;
(statearr_31943[(7)] = inst_31886__$1);

(statearr_31943[(8)] = inst_31887);

return statearr_31943;
})();
var statearr_31944_31970 = state_31922__$1;
(statearr_31944_31970[(2)] = null);

(statearr_31944_31970[(1)] = (2));


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
});})(c__29260__auto___31956,out))
;
return ((function (switch__29146__auto__,c__29260__auto___31956,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31948[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31948[(1)] = (1));

return statearr_31948;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31922){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_31922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e31949){if((e31949 instanceof Object)){
var ex__29150__auto__ = e31949;
var statearr_31950_31971 = state_31922;
(statearr_31950_31971[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31972 = state_31922;
state_31922 = G__31972;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___31956,out))
})();
var state__29262__auto__ = (function (){var statearr_31951 = f__29261__auto__.call(null);
(statearr_31951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___31956);

return statearr_31951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___31956,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31973 = [];
var len__27777__auto___32047 = arguments.length;
var i__27778__auto___32048 = (0);
while(true){
if((i__27778__auto___32048 < len__27777__auto___32047)){
args31973.push((arguments[i__27778__auto___32048]));

var G__32049 = (i__27778__auto___32048 + (1));
i__27778__auto___32048 = G__32049;
continue;
} else {
}
break;
}

var G__31975 = args31973.length;
switch (G__31975) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31973.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29260__auto___32051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___32051,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___32051,out){
return (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_32013 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32019_32052 = state_32017__$1;
(statearr_32019_32052[(2)] = inst_32013);

(statearr_32019_32052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31976 = [];
var inst_31977 = inst_31976;
var inst_31978 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32017__$1 = (function (){var statearr_32020 = state_32017;
(statearr_32020[(7)] = inst_31977);

(statearr_32020[(8)] = inst_31978);

return statearr_32020;
})();
var statearr_32021_32053 = state_32017__$1;
(statearr_32021_32053[(2)] = null);

(statearr_32021_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31981 = (state_32017[(9)]);
var inst_31981__$1 = (state_32017[(2)]);
var inst_31982 = (inst_31981__$1 == null);
var inst_31983 = cljs.core.not.call(null,inst_31982);
var state_32017__$1 = (function (){var statearr_32022 = state_32017;
(statearr_32022[(9)] = inst_31981__$1);

return statearr_32022;
})();
if(inst_31983){
var statearr_32023_32054 = state_32017__$1;
(statearr_32023_32054[(1)] = (5));

} else {
var statearr_32024_32055 = state_32017__$1;
(statearr_32024_32055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (15))){
var inst_32007 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32025_32056 = state_32017__$1;
(statearr_32025_32056[(2)] = inst_32007);

(statearr_32025_32056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (13))){
var state_32017__$1 = state_32017;
var statearr_32026_32057 = state_32017__$1;
(statearr_32026_32057[(2)] = null);

(statearr_32026_32057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var inst_31977 = (state_32017[(7)]);
var inst_32002 = inst_31977.length;
var inst_32003 = (inst_32002 > (0));
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_32003)){
var statearr_32027_32058 = state_32017__$1;
(statearr_32027_32058[(1)] = (12));

} else {
var statearr_32028_32059 = state_32017__$1;
(statearr_32028_32059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32015 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (12))){
var inst_31977 = (state_32017[(7)]);
var inst_32005 = cljs.core.vec.call(null,inst_31977);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(15),out,inst_32005);
} else {
if((state_val_32018 === (2))){
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32017__$1,(4),ch);
} else {
if((state_val_32018 === (11))){
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31995 = (state_32017[(2)]);
var inst_31996 = [];
var inst_31997 = inst_31996.push(inst_31981);
var inst_31977 = inst_31996;
var inst_31978 = inst_31985;
var state_32017__$1 = (function (){var statearr_32029 = state_32017;
(statearr_32029[(11)] = inst_31997);

(statearr_32029[(7)] = inst_31977);

(statearr_32029[(12)] = inst_31995);

(statearr_32029[(8)] = inst_31978);

return statearr_32029;
})();
var statearr_32030_32060 = state_32017__$1;
(statearr_32030_32060[(2)] = null);

(statearr_32030_32060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31977 = (state_32017[(7)]);
var inst_31993 = cljs.core.vec.call(null,inst_31977);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(11),out,inst_31993);
} else {
if((state_val_32018 === (5))){
var inst_31978 = (state_32017[(8)]);
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31985__$1 = f.call(null,inst_31981);
var inst_31986 = cljs.core._EQ_.call(null,inst_31985__$1,inst_31978);
var inst_31987 = cljs.core.keyword_identical_QMARK_.call(null,inst_31978,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31988 = (inst_31986) || (inst_31987);
var state_32017__$1 = (function (){var statearr_32031 = state_32017;
(statearr_32031[(10)] = inst_31985__$1);

return statearr_32031;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32032_32061 = state_32017__$1;
(statearr_32032_32061[(1)] = (8));

} else {
var statearr_32033_32062 = state_32017__$1;
(statearr_32033_32062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (14))){
var inst_32010 = (state_32017[(2)]);
var inst_32011 = cljs.core.async.close_BANG_.call(null,out);
var state_32017__$1 = (function (){var statearr_32035 = state_32017;
(statearr_32035[(13)] = inst_32010);

return statearr_32035;
})();
var statearr_32036_32063 = state_32017__$1;
(statearr_32036_32063[(2)] = inst_32011);

(statearr_32036_32063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_32000 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32037_32064 = state_32017__$1;
(statearr_32037_32064[(2)] = inst_32000);

(statearr_32037_32064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31977 = (state_32017[(7)]);
var inst_31985 = (state_32017[(10)]);
var inst_31981 = (state_32017[(9)]);
var inst_31990 = inst_31977.push(inst_31981);
var tmp32034 = inst_31977;
var inst_31977__$1 = tmp32034;
var inst_31978 = inst_31985;
var state_32017__$1 = (function (){var statearr_32038 = state_32017;
(statearr_32038[(7)] = inst_31977__$1);

(statearr_32038[(8)] = inst_31978);

(statearr_32038[(14)] = inst_31990);

return statearr_32038;
})();
var statearr_32039_32065 = state_32017__$1;
(statearr_32039_32065[(2)] = null);

(statearr_32039_32065[(1)] = (2));


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
});})(c__29260__auto___32051,out))
;
return ((function (switch__29146__auto__,c__29260__auto___32051,out){
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32043[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32043[(1)] = (1));

return statearr_32043;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32017){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e32044){if((e32044 instanceof Object)){
var ex__29150__auto__ = e32044;
var statearr_32045_32066 = state_32017;
(statearr_32045_32066[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32067 = state_32017;
state_32017 = G__32067;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___32051,out))
})();
var state__29262__auto__ = (function (){var statearr_32046 = f__29261__auto__.call(null);
(statearr_32046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___32051);

return statearr_32046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___32051,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496989999936