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
var args29732 = [];
var len__27785__auto___29738 = arguments.length;
var i__27786__auto___29739 = (0);
while(true){
if((i__27786__auto___29739 < len__27785__auto___29738)){
args29732.push((arguments[i__27786__auto___29739]));

var G__29740 = (i__27786__auto___29739 + (1));
i__27786__auto___29739 = G__29740;
continue;
} else {
}
break;
}

var G__29734 = args29732.length;
switch (G__29734) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29732.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29735 = (function (f,blockable,meta29736){
this.f = f;
this.blockable = blockable;
this.meta29736 = meta29736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29737,meta29736__$1){
var self__ = this;
var _29737__$1 = this;
return (new cljs.core.async.t_cljs$core$async29735(self__.f,self__.blockable,meta29736__$1));
});

cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29737){
var self__ = this;
var _29737__$1 = this;
return self__.meta29736;
});

cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29736","meta29736",-1223646751,null)], null);
});

cljs.core.async.t_cljs$core$async29735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29735";

cljs.core.async.t_cljs$core$async29735.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29735");
});

cljs.core.async.__GT_t_cljs$core$async29735 = (function cljs$core$async$__GT_t_cljs$core$async29735(f__$1,blockable__$1,meta29736){
return (new cljs.core.async.t_cljs$core$async29735(f__$1,blockable__$1,meta29736));
});

}

return (new cljs.core.async.t_cljs$core$async29735(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29744 = [];
var len__27785__auto___29747 = arguments.length;
var i__27786__auto___29748 = (0);
while(true){
if((i__27786__auto___29748 < len__27785__auto___29747)){
args29744.push((arguments[i__27786__auto___29748]));

var G__29749 = (i__27786__auto___29748 + (1));
i__27786__auto___29748 = G__29749;
continue;
} else {
}
break;
}

var G__29746 = args29744.length;
switch (G__29746) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29744.length)].join('')));

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
var args29751 = [];
var len__27785__auto___29754 = arguments.length;
var i__27786__auto___29755 = (0);
while(true){
if((i__27786__auto___29755 < len__27785__auto___29754)){
args29751.push((arguments[i__27786__auto___29755]));

var G__29756 = (i__27786__auto___29755 + (1));
i__27786__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var G__29753 = args29751.length;
switch (G__29753) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29751.length)].join('')));

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
var args29758 = [];
var len__27785__auto___29761 = arguments.length;
var i__27786__auto___29762 = (0);
while(true){
if((i__27786__auto___29762 < len__27785__auto___29761)){
args29758.push((arguments[i__27786__auto___29762]));

var G__29763 = (i__27786__auto___29762 + (1));
i__27786__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var G__29760 = args29758.length;
switch (G__29760) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29758.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29765 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29765);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29765,ret){
return (function (){
return fn1.call(null,val_29765);
});})(val_29765,ret))
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
var args29766 = [];
var len__27785__auto___29769 = arguments.length;
var i__27786__auto___29770 = (0);
while(true){
if((i__27786__auto___29770 < len__27785__auto___29769)){
args29766.push((arguments[i__27786__auto___29770]));

var G__29771 = (i__27786__auto___29770 + (1));
i__27786__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var G__29768 = args29766.length;
switch (G__29768) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29766.length)].join('')));

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
var n__27615__auto___29773 = n;
var x_29774 = (0);
while(true){
if((x_29774 < n__27615__auto___29773)){
(a[x_29774] = (0));

var G__29775 = (x_29774 + (1));
x_29774 = G__29775;
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

var G__29776 = (i + (1));
i = G__29776;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29780 = (function (alt_flag,flag,meta29781){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29781 = meta29781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29782,meta29781__$1){
var self__ = this;
var _29782__$1 = this;
return (new cljs.core.async.t_cljs$core$async29780(self__.alt_flag,self__.flag,meta29781__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29782){
var self__ = this;
var _29782__$1 = this;
return self__.meta29781;
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29781","meta29781",2084964256,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29780";

cljs.core.async.t_cljs$core$async29780.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29780");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29780 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29780(alt_flag__$1,flag__$1,meta29781){
return (new cljs.core.async.t_cljs$core$async29780(alt_flag__$1,flag__$1,meta29781));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29780(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29786 = (function (alt_handler,flag,cb,meta29787){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29787 = meta29787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29788,meta29787__$1){
var self__ = this;
var _29788__$1 = this;
return (new cljs.core.async.t_cljs$core$async29786(self__.alt_handler,self__.flag,self__.cb,meta29787__$1));
});

cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29788){
var self__ = this;
var _29788__$1 = this;
return self__.meta29787;
});

cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29787","meta29787",-1239198652,null)], null);
});

cljs.core.async.t_cljs$core$async29786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29786";

cljs.core.async.t_cljs$core$async29786.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async29786");
});

cljs.core.async.__GT_t_cljs$core$async29786 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29786(alt_handler__$1,flag__$1,cb__$1,meta29787){
return (new cljs.core.async.t_cljs$core$async29786(alt_handler__$1,flag__$1,cb__$1,meta29787));
});

}

return (new cljs.core.async.t_cljs$core$async29786(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29789_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29789_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29790_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29790_SHARP_,port], null));
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
var G__29791 = (i + (1));
i = G__29791;
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
var len__27785__auto___29797 = arguments.length;
var i__27786__auto___29798 = (0);
while(true){
if((i__27786__auto___29798 < len__27785__auto___29797)){
args__27792__auto__.push((arguments[i__27786__auto___29798]));

var G__29799 = (i__27786__auto___29798 + (1));
i__27786__auto___29798 = G__29799;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((1) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27793__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29794){
var map__29795 = p__29794;
var map__29795__$1 = ((((!((map__29795 == null)))?((((map__29795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29795):map__29795);
var opts = map__29795__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29792){
var G__29793 = cljs.core.first.call(null,seq29792);
var seq29792__$1 = cljs.core.next.call(null,seq29792);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29793,seq29792__$1);
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
var args29800 = [];
var len__27785__auto___29850 = arguments.length;
var i__27786__auto___29851 = (0);
while(true){
if((i__27786__auto___29851 < len__27785__auto___29850)){
args29800.push((arguments[i__27786__auto___29851]));

var G__29852 = (i__27786__auto___29851 + (1));
i__27786__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var G__29802 = args29800.length;
switch (G__29802) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29800.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29673__auto___29854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___29854){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___29854){
return (function (state_29826){
var state_val_29827 = (state_29826[(1)]);
if((state_val_29827 === (7))){
var inst_29822 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29828_29855 = state_29826__$1;
(statearr_29828_29855[(2)] = inst_29822);

(statearr_29828_29855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (1))){
var state_29826__$1 = state_29826;
var statearr_29829_29856 = state_29826__$1;
(statearr_29829_29856[(2)] = null);

(statearr_29829_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (4))){
var inst_29805 = (state_29826[(7)]);
var inst_29805__$1 = (state_29826[(2)]);
var inst_29806 = (inst_29805__$1 == null);
var state_29826__$1 = (function (){var statearr_29830 = state_29826;
(statearr_29830[(7)] = inst_29805__$1);

return statearr_29830;
})();
if(cljs.core.truth_(inst_29806)){
var statearr_29831_29857 = state_29826__$1;
(statearr_29831_29857[(1)] = (5));

} else {
var statearr_29832_29858 = state_29826__$1;
(statearr_29832_29858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (13))){
var state_29826__$1 = state_29826;
var statearr_29833_29859 = state_29826__$1;
(statearr_29833_29859[(2)] = null);

(statearr_29833_29859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (6))){
var inst_29805 = (state_29826[(7)]);
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29826__$1,(11),to,inst_29805);
} else {
if((state_val_29827 === (3))){
var inst_29824 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29826__$1,inst_29824);
} else {
if((state_val_29827 === (12))){
var state_29826__$1 = state_29826;
var statearr_29834_29860 = state_29826__$1;
(statearr_29834_29860[(2)] = null);

(statearr_29834_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (2))){
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29826__$1,(4),from);
} else {
if((state_val_29827 === (11))){
var inst_29815 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
if(cljs.core.truth_(inst_29815)){
var statearr_29835_29861 = state_29826__$1;
(statearr_29835_29861[(1)] = (12));

} else {
var statearr_29836_29862 = state_29826__$1;
(statearr_29836_29862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (9))){
var state_29826__$1 = state_29826;
var statearr_29837_29863 = state_29826__$1;
(statearr_29837_29863[(2)] = null);

(statearr_29837_29863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (5))){
var state_29826__$1 = state_29826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29838_29864 = state_29826__$1;
(statearr_29838_29864[(1)] = (8));

} else {
var statearr_29839_29865 = state_29826__$1;
(statearr_29839_29865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (14))){
var inst_29820 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29840_29866 = state_29826__$1;
(statearr_29840_29866[(2)] = inst_29820);

(statearr_29840_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (10))){
var inst_29812 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29841_29867 = state_29826__$1;
(statearr_29841_29867[(2)] = inst_29812);

(statearr_29841_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (8))){
var inst_29809 = cljs.core.async.close_BANG_.call(null,to);
var state_29826__$1 = state_29826;
var statearr_29842_29868 = state_29826__$1;
(statearr_29842_29868[(2)] = inst_29809);

(statearr_29842_29868[(1)] = (10));


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
});})(c__29673__auto___29854))
;
return ((function (switch__29559__auto__,c__29673__auto___29854){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_29826){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_29826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__29563__auto__ = e29847;
var statearr_29848_29869 = state_29826;
(statearr_29848_29869[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29826;
state_29826 = G__29870;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_29826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_29826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___29854))
})();
var state__29675__auto__ = (function (){var statearr_29849 = f__29674__auto__.call(null);
(statearr_29849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___29854);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___29854))
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
return (function (p__30058){
var vec__30059 = p__30058;
var v = cljs.core.nth.call(null,vec__30059,(0),null);
var p = cljs.core.nth.call(null,vec__30059,(1),null);
var job = vec__30059;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29673__auto___30245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results){
return (function (state_30066){
var state_val_30067 = (state_30066[(1)]);
if((state_val_30067 === (1))){
var state_30066__$1 = state_30066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30066__$1,(2),res,v);
} else {
if((state_val_30067 === (2))){
var inst_30063 = (state_30066[(2)]);
var inst_30064 = cljs.core.async.close_BANG_.call(null,res);
var state_30066__$1 = (function (){var statearr_30068 = state_30066;
(statearr_30068[(7)] = inst_30063);

return statearr_30068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30066__$1,inst_30064);
} else {
return null;
}
}
});})(c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results))
;
return ((function (switch__29559__auto__,c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_30072 = [null,null,null,null,null,null,null,null];
(statearr_30072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__);

(statearr_30072[(1)] = (1));

return statearr_30072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1 = (function (state_30066){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30073){if((e30073 instanceof Object)){
var ex__29563__auto__ = e30073;
var statearr_30074_30246 = state_30066;
(statearr_30074_30246[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30247 = state_30066;
state_30066 = G__30247;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = function(state_30066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1.call(this,state_30066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results))
})();
var state__29675__auto__ = (function (){var statearr_30075 = f__29674__auto__.call(null);
(statearr_30075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___30245);

return statearr_30075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___30245,res,vec__30059,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30076){
var vec__30077 = p__30076;
var v = cljs.core.nth.call(null,vec__30077,(0),null);
var p = cljs.core.nth.call(null,vec__30077,(1),null);
var job = vec__30077;
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
var n__27615__auto___30248 = n;
var __30249 = (0);
while(true){
if((__30249 < n__27615__auto___30248)){
var G__30080_30250 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30080_30250) {
case "compute":
var c__29673__auto___30252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30249,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (__30249,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (1))){
var state_30093__$1 = state_30093;
var statearr_30095_30253 = state_30093__$1;
(statearr_30095_30253[(2)] = null);

(statearr_30095_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (2))){
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30093__$1,(4),jobs);
} else {
if((state_val_30094 === (3))){
var inst_30091 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (4))){
var inst_30083 = (state_30093[(2)]);
var inst_30084 = process.call(null,inst_30083);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30084)){
var statearr_30096_30254 = state_30093__$1;
(statearr_30096_30254[(1)] = (5));

} else {
var statearr_30097_30255 = state_30093__$1;
(statearr_30097_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (5))){
var state_30093__$1 = state_30093;
var statearr_30098_30256 = state_30093__$1;
(statearr_30098_30256[(2)] = null);

(statearr_30098_30256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var state_30093__$1 = state_30093;
var statearr_30099_30257 = state_30093__$1;
(statearr_30099_30257[(2)] = null);

(statearr_30099_30257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (7))){
var inst_30089 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30100_30258 = state_30093__$1;
(statearr_30100_30258[(2)] = inst_30089);

(statearr_30100_30258[(1)] = (3));


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
});})(__30249,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
;
return ((function (__30249,switch__29559__auto__,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_30104 = [null,null,null,null,null,null,null];
(statearr_30104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__);

(statearr_30104[(1)] = (1));

return statearr_30104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1 = (function (state_30093){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30105){if((e30105 instanceof Object)){
var ex__29563__auto__ = e30105;
var statearr_30106_30259 = state_30093;
(statearr_30106_30259[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30260 = state_30093;
state_30093 = G__30260;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__;
})()
;})(__30249,switch__29559__auto__,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
})();
var state__29675__auto__ = (function (){var statearr_30107 = f__29674__auto__.call(null);
(statearr_30107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___30252);

return statearr_30107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(__30249,c__29673__auto___30252,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
);


break;
case "async":
var c__29673__auto___30261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30249,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (__30249,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function (state_30120){
var state_val_30121 = (state_30120[(1)]);
if((state_val_30121 === (1))){
var state_30120__$1 = state_30120;
var statearr_30122_30262 = state_30120__$1;
(statearr_30122_30262[(2)] = null);

(statearr_30122_30262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (2))){
var state_30120__$1 = state_30120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30120__$1,(4),jobs);
} else {
if((state_val_30121 === (3))){
var inst_30118 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30120__$1,inst_30118);
} else {
if((state_val_30121 === (4))){
var inst_30110 = (state_30120[(2)]);
var inst_30111 = async.call(null,inst_30110);
var state_30120__$1 = state_30120;
if(cljs.core.truth_(inst_30111)){
var statearr_30123_30263 = state_30120__$1;
(statearr_30123_30263[(1)] = (5));

} else {
var statearr_30124_30264 = state_30120__$1;
(statearr_30124_30264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (5))){
var state_30120__$1 = state_30120;
var statearr_30125_30265 = state_30120__$1;
(statearr_30125_30265[(2)] = null);

(statearr_30125_30265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (6))){
var state_30120__$1 = state_30120;
var statearr_30126_30266 = state_30120__$1;
(statearr_30126_30266[(2)] = null);

(statearr_30126_30266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30121 === (7))){
var inst_30116 = (state_30120[(2)]);
var state_30120__$1 = state_30120;
var statearr_30127_30267 = state_30120__$1;
(statearr_30127_30267[(2)] = inst_30116);

(statearr_30127_30267[(1)] = (3));


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
});})(__30249,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
;
return ((function (__30249,switch__29559__auto__,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_30131 = [null,null,null,null,null,null,null];
(statearr_30131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__);

(statearr_30131[(1)] = (1));

return statearr_30131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1 = (function (state_30120){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30132){if((e30132 instanceof Object)){
var ex__29563__auto__ = e30132;
var statearr_30133_30268 = state_30120;
(statearr_30133_30268[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30269 = state_30120;
state_30120 = G__30269;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = function(state_30120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1.call(this,state_30120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__;
})()
;})(__30249,switch__29559__auto__,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
})();
var state__29675__auto__ = (function (){var statearr_30134 = f__29674__auto__.call(null);
(statearr_30134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___30261);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(__30249,c__29673__auto___30261,G__30080_30250,n__27615__auto___30248,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30270 = (__30249 + (1));
__30249 = G__30270;
continue;
} else {
}
break;
}

var c__29673__auto___30271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___30271,jobs,results,process,async){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___30271,jobs,results,process,async){
return (function (state_30156){
var state_val_30157 = (state_30156[(1)]);
if((state_val_30157 === (1))){
var state_30156__$1 = state_30156;
var statearr_30158_30272 = state_30156__$1;
(statearr_30158_30272[(2)] = null);

(statearr_30158_30272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (2))){
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,(4),from);
} else {
if((state_val_30157 === (3))){
var inst_30154 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30156__$1,inst_30154);
} else {
if((state_val_30157 === (4))){
var inst_30137 = (state_30156[(7)]);
var inst_30137__$1 = (state_30156[(2)]);
var inst_30138 = (inst_30137__$1 == null);
var state_30156__$1 = (function (){var statearr_30159 = state_30156;
(statearr_30159[(7)] = inst_30137__$1);

return statearr_30159;
})();
if(cljs.core.truth_(inst_30138)){
var statearr_30160_30273 = state_30156__$1;
(statearr_30160_30273[(1)] = (5));

} else {
var statearr_30161_30274 = state_30156__$1;
(statearr_30161_30274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (5))){
var inst_30140 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30156__$1 = state_30156;
var statearr_30162_30275 = state_30156__$1;
(statearr_30162_30275[(2)] = inst_30140);

(statearr_30162_30275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (6))){
var inst_30142 = (state_30156[(8)]);
var inst_30137 = (state_30156[(7)]);
var inst_30142__$1 = cljs.core.async.chan.call(null,(1));
var inst_30143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30144 = [inst_30137,inst_30142__$1];
var inst_30145 = (new cljs.core.PersistentVector(null,2,(5),inst_30143,inst_30144,null));
var state_30156__$1 = (function (){var statearr_30163 = state_30156;
(statearr_30163[(8)] = inst_30142__$1);

return statearr_30163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30156__$1,(8),jobs,inst_30145);
} else {
if((state_val_30157 === (7))){
var inst_30152 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30164_30276 = state_30156__$1;
(statearr_30164_30276[(2)] = inst_30152);

(statearr_30164_30276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (8))){
var inst_30142 = (state_30156[(8)]);
var inst_30147 = (state_30156[(2)]);
var state_30156__$1 = (function (){var statearr_30165 = state_30156;
(statearr_30165[(9)] = inst_30147);

return statearr_30165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30156__$1,(9),results,inst_30142);
} else {
if((state_val_30157 === (9))){
var inst_30149 = (state_30156[(2)]);
var state_30156__$1 = (function (){var statearr_30166 = state_30156;
(statearr_30166[(10)] = inst_30149);

return statearr_30166;
})();
var statearr_30167_30277 = state_30156__$1;
(statearr_30167_30277[(2)] = null);

(statearr_30167_30277[(1)] = (2));


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
});})(c__29673__auto___30271,jobs,results,process,async))
;
return ((function (switch__29559__auto__,c__29673__auto___30271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_30171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__);

(statearr_30171[(1)] = (1));

return statearr_30171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1 = (function (state_30156){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30172){if((e30172 instanceof Object)){
var ex__29563__auto__ = e30172;
var statearr_30173_30278 = state_30156;
(statearr_30173_30278[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30279 = state_30156;
state_30156 = G__30279;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___30271,jobs,results,process,async))
})();
var state__29675__auto__ = (function (){var statearr_30174 = f__29674__auto__.call(null);
(statearr_30174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___30271);

return statearr_30174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___30271,jobs,results,process,async))
);


var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__,jobs,results,process,async){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__,jobs,results,process,async){
return (function (state_30212){
var state_val_30213 = (state_30212[(1)]);
if((state_val_30213 === (7))){
var inst_30208 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30214_30280 = state_30212__$1;
(statearr_30214_30280[(2)] = inst_30208);

(statearr_30214_30280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (20))){
var state_30212__$1 = state_30212;
var statearr_30215_30281 = state_30212__$1;
(statearr_30215_30281[(2)] = null);

(statearr_30215_30281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (1))){
var state_30212__$1 = state_30212;
var statearr_30216_30282 = state_30212__$1;
(statearr_30216_30282[(2)] = null);

(statearr_30216_30282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (4))){
var inst_30177 = (state_30212[(7)]);
var inst_30177__$1 = (state_30212[(2)]);
var inst_30178 = (inst_30177__$1 == null);
var state_30212__$1 = (function (){var statearr_30217 = state_30212;
(statearr_30217[(7)] = inst_30177__$1);

return statearr_30217;
})();
if(cljs.core.truth_(inst_30178)){
var statearr_30218_30283 = state_30212__$1;
(statearr_30218_30283[(1)] = (5));

} else {
var statearr_30219_30284 = state_30212__$1;
(statearr_30219_30284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (15))){
var inst_30190 = (state_30212[(8)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30212__$1,(18),to,inst_30190);
} else {
if((state_val_30213 === (21))){
var inst_30203 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30220_30285 = state_30212__$1;
(statearr_30220_30285[(2)] = inst_30203);

(statearr_30220_30285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (13))){
var inst_30205 = (state_30212[(2)]);
var state_30212__$1 = (function (){var statearr_30221 = state_30212;
(statearr_30221[(9)] = inst_30205);

return statearr_30221;
})();
var statearr_30222_30286 = state_30212__$1;
(statearr_30222_30286[(2)] = null);

(statearr_30222_30286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (6))){
var inst_30177 = (state_30212[(7)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(11),inst_30177);
} else {
if((state_val_30213 === (17))){
var inst_30198 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
if(cljs.core.truth_(inst_30198)){
var statearr_30223_30287 = state_30212__$1;
(statearr_30223_30287[(1)] = (19));

} else {
var statearr_30224_30288 = state_30212__$1;
(statearr_30224_30288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (3))){
var inst_30210 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30212__$1,inst_30210);
} else {
if((state_val_30213 === (12))){
var inst_30187 = (state_30212[(10)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(14),inst_30187);
} else {
if((state_val_30213 === (2))){
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(4),results);
} else {
if((state_val_30213 === (19))){
var state_30212__$1 = state_30212;
var statearr_30225_30289 = state_30212__$1;
(statearr_30225_30289[(2)] = null);

(statearr_30225_30289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (11))){
var inst_30187 = (state_30212[(2)]);
var state_30212__$1 = (function (){var statearr_30226 = state_30212;
(statearr_30226[(10)] = inst_30187);

return statearr_30226;
})();
var statearr_30227_30290 = state_30212__$1;
(statearr_30227_30290[(2)] = null);

(statearr_30227_30290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (9))){
var state_30212__$1 = state_30212;
var statearr_30228_30291 = state_30212__$1;
(statearr_30228_30291[(2)] = null);

(statearr_30228_30291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (5))){
var state_30212__$1 = state_30212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30229_30292 = state_30212__$1;
(statearr_30229_30292[(1)] = (8));

} else {
var statearr_30230_30293 = state_30212__$1;
(statearr_30230_30293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (14))){
var inst_30192 = (state_30212[(11)]);
var inst_30190 = (state_30212[(8)]);
var inst_30190__$1 = (state_30212[(2)]);
var inst_30191 = (inst_30190__$1 == null);
var inst_30192__$1 = cljs.core.not.call(null,inst_30191);
var state_30212__$1 = (function (){var statearr_30231 = state_30212;
(statearr_30231[(11)] = inst_30192__$1);

(statearr_30231[(8)] = inst_30190__$1);

return statearr_30231;
})();
if(inst_30192__$1){
var statearr_30232_30294 = state_30212__$1;
(statearr_30232_30294[(1)] = (15));

} else {
var statearr_30233_30295 = state_30212__$1;
(statearr_30233_30295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (16))){
var inst_30192 = (state_30212[(11)]);
var state_30212__$1 = state_30212;
var statearr_30234_30296 = state_30212__$1;
(statearr_30234_30296[(2)] = inst_30192);

(statearr_30234_30296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (10))){
var inst_30184 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30235_30297 = state_30212__$1;
(statearr_30235_30297[(2)] = inst_30184);

(statearr_30235_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (18))){
var inst_30195 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30236_30298 = state_30212__$1;
(statearr_30236_30298[(2)] = inst_30195);

(statearr_30236_30298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (8))){
var inst_30181 = cljs.core.async.close_BANG_.call(null,to);
var state_30212__$1 = state_30212;
var statearr_30237_30299 = state_30212__$1;
(statearr_30237_30299[(2)] = inst_30181);

(statearr_30237_30299[(1)] = (10));


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
});})(c__29673__auto__,jobs,results,process,async))
;
return ((function (switch__29559__auto__,c__29673__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_30241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__);

(statearr_30241[(1)] = (1));

return statearr_30241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1 = (function (state_30212){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30242){if((e30242 instanceof Object)){
var ex__29563__auto__ = e30242;
var statearr_30243_30300 = state_30212;
(statearr_30243_30300[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30212;
state_30212 = G__30301;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__ = function(state_30212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1.call(this,state_30212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__,jobs,results,process,async))
})();
var state__29675__auto__ = (function (){var statearr_30244 = f__29674__auto__.call(null);
(statearr_30244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__,jobs,results,process,async))
);

return c__29673__auto__;
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
var args30302 = [];
var len__27785__auto___30305 = arguments.length;
var i__27786__auto___30306 = (0);
while(true){
if((i__27786__auto___30306 < len__27785__auto___30305)){
args30302.push((arguments[i__27786__auto___30306]));

var G__30307 = (i__27786__auto___30306 + (1));
i__27786__auto___30306 = G__30307;
continue;
} else {
}
break;
}

var G__30304 = args30302.length;
switch (G__30304) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30302.length)].join('')));

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
var args30309 = [];
var len__27785__auto___30312 = arguments.length;
var i__27786__auto___30313 = (0);
while(true){
if((i__27786__auto___30313 < len__27785__auto___30312)){
args30309.push((arguments[i__27786__auto___30313]));

var G__30314 = (i__27786__auto___30313 + (1));
i__27786__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var G__30311 = args30309.length;
switch (G__30311) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30309.length)].join('')));

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
var args30316 = [];
var len__27785__auto___30369 = arguments.length;
var i__27786__auto___30370 = (0);
while(true){
if((i__27786__auto___30370 < len__27785__auto___30369)){
args30316.push((arguments[i__27786__auto___30370]));

var G__30371 = (i__27786__auto___30370 + (1));
i__27786__auto___30370 = G__30371;
continue;
} else {
}
break;
}

var G__30318 = args30316.length;
switch (G__30318) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30316.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29673__auto___30373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___30373,tc,fc){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___30373,tc,fc){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (7))){
var inst_30340 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30346_30374 = state_30344__$1;
(statearr_30346_30374[(2)] = inst_30340);

(statearr_30346_30374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
var statearr_30347_30375 = state_30344__$1;
(statearr_30347_30375[(2)] = null);

(statearr_30347_30375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (4))){
var inst_30321 = (state_30344[(7)]);
var inst_30321__$1 = (state_30344[(2)]);
var inst_30322 = (inst_30321__$1 == null);
var state_30344__$1 = (function (){var statearr_30348 = state_30344;
(statearr_30348[(7)] = inst_30321__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30322)){
var statearr_30349_30376 = state_30344__$1;
(statearr_30349_30376[(1)] = (5));

} else {
var statearr_30350_30377 = state_30344__$1;
(statearr_30350_30377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (13))){
var state_30344__$1 = state_30344;
var statearr_30351_30378 = state_30344__$1;
(statearr_30351_30378[(2)] = null);

(statearr_30351_30378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (6))){
var inst_30321 = (state_30344[(7)]);
var inst_30327 = p.call(null,inst_30321);
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30327)){
var statearr_30352_30379 = state_30344__$1;
(statearr_30352_30379[(1)] = (9));

} else {
var statearr_30353_30380 = state_30344__$1;
(statearr_30353_30380[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (3))){
var inst_30342 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
if((state_val_30345 === (12))){
var state_30344__$1 = state_30344;
var statearr_30354_30381 = state_30344__$1;
(statearr_30354_30381[(2)] = null);

(statearr_30354_30381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (2))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),ch);
} else {
if((state_val_30345 === (11))){
var inst_30321 = (state_30344[(7)]);
var inst_30331 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(8),inst_30331,inst_30321);
} else {
if((state_val_30345 === (9))){
var state_30344__$1 = state_30344;
var statearr_30355_30382 = state_30344__$1;
(statearr_30355_30382[(2)] = tc);

(statearr_30355_30382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (5))){
var inst_30324 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30325 = cljs.core.async.close_BANG_.call(null,fc);
var state_30344__$1 = (function (){var statearr_30356 = state_30344;
(statearr_30356[(8)] = inst_30324);

return statearr_30356;
})();
var statearr_30357_30383 = state_30344__$1;
(statearr_30357_30383[(2)] = inst_30325);

(statearr_30357_30383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (14))){
var inst_30338 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30358_30384 = state_30344__$1;
(statearr_30358_30384[(2)] = inst_30338);

(statearr_30358_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (10))){
var state_30344__$1 = state_30344;
var statearr_30359_30385 = state_30344__$1;
(statearr_30359_30385[(2)] = fc);

(statearr_30359_30385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (8))){
var inst_30333 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30333)){
var statearr_30360_30386 = state_30344__$1;
(statearr_30360_30386[(1)] = (12));

} else {
var statearr_30361_30387 = state_30344__$1;
(statearr_30361_30387[(1)] = (13));

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
});})(c__29673__auto___30373,tc,fc))
;
return ((function (switch__29559__auto__,c__29673__auto___30373,tc,fc){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_30365 = [null,null,null,null,null,null,null,null,null];
(statearr_30365[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_30365[(1)] = (1));

return statearr_30365;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_30344){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30366){if((e30366 instanceof Object)){
var ex__29563__auto__ = e30366;
var statearr_30367_30388 = state_30344;
(statearr_30367_30388[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30389 = state_30344;
state_30344 = G__30389;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___30373,tc,fc))
})();
var state__29675__auto__ = (function (){var statearr_30368 = f__29674__auto__.call(null);
(statearr_30368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___30373);

return statearr_30368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___30373,tc,fc))
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
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__){
return (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (7))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30455_30476 = state_30453__$1;
(statearr_30455_30476[(2)] = inst_30449);

(statearr_30455_30476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (1))){
var inst_30433 = init;
var state_30453__$1 = (function (){var statearr_30456 = state_30453;
(statearr_30456[(7)] = inst_30433);

return statearr_30456;
})();
var statearr_30457_30477 = state_30453__$1;
(statearr_30457_30477[(2)] = null);

(statearr_30457_30477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (4))){
var inst_30436 = (state_30453[(8)]);
var inst_30436__$1 = (state_30453[(2)]);
var inst_30437 = (inst_30436__$1 == null);
var state_30453__$1 = (function (){var statearr_30458 = state_30453;
(statearr_30458[(8)] = inst_30436__$1);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30459_30478 = state_30453__$1;
(statearr_30459_30478[(1)] = (5));

} else {
var statearr_30460_30479 = state_30453__$1;
(statearr_30460_30479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var inst_30436 = (state_30453[(8)]);
var inst_30440 = (state_30453[(9)]);
var inst_30433 = (state_30453[(7)]);
var inst_30440__$1 = f.call(null,inst_30433,inst_30436);
var inst_30441 = cljs.core.reduced_QMARK_.call(null,inst_30440__$1);
var state_30453__$1 = (function (){var statearr_30461 = state_30453;
(statearr_30461[(9)] = inst_30440__$1);

return statearr_30461;
})();
if(inst_30441){
var statearr_30462_30480 = state_30453__$1;
(statearr_30462_30480[(1)] = (8));

} else {
var statearr_30463_30481 = state_30453__$1;
(statearr_30463_30481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (3))){
var inst_30451 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(4),ch);
} else {
if((state_val_30454 === (9))){
var inst_30440 = (state_30453[(9)]);
var inst_30433 = inst_30440;
var state_30453__$1 = (function (){var statearr_30464 = state_30453;
(statearr_30464[(7)] = inst_30433);

return statearr_30464;
})();
var statearr_30465_30482 = state_30453__$1;
(statearr_30465_30482[(2)] = null);

(statearr_30465_30482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (5))){
var inst_30433 = (state_30453[(7)]);
var state_30453__$1 = state_30453;
var statearr_30466_30483 = state_30453__$1;
(statearr_30466_30483[(2)] = inst_30433);

(statearr_30466_30483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (10))){
var inst_30447 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30467_30484 = state_30453__$1;
(statearr_30467_30484[(2)] = inst_30447);

(statearr_30467_30484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (8))){
var inst_30440 = (state_30453[(9)]);
var inst_30443 = cljs.core.deref.call(null,inst_30440);
var state_30453__$1 = state_30453;
var statearr_30468_30485 = state_30453__$1;
(statearr_30468_30485[(2)] = inst_30443);

(statearr_30468_30485[(1)] = (10));


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
});})(c__29673__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29560__auto____0 = (function (){
var statearr_30472 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30472[(0)] = cljs$core$async$reduce_$_state_machine__29560__auto__);

(statearr_30472[(1)] = (1));

return statearr_30472;
});
var cljs$core$async$reduce_$_state_machine__29560__auto____1 = (function (state_30453){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30473){if((e30473 instanceof Object)){
var ex__29563__auto__ = e30473;
var statearr_30474_30486 = state_30453;
(statearr_30474_30486[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30487 = state_30453;
state_30453 = G__30487;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29560__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29560__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29560__auto____0;
cljs$core$async$reduce_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29560__auto____1;
return cljs$core$async$reduce_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__))
})();
var state__29675__auto__ = (function (){var statearr_30475 = f__29674__auto__.call(null);
(statearr_30475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_30475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__))
);

return c__29673__auto__;
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
var args30488 = [];
var len__27785__auto___30540 = arguments.length;
var i__27786__auto___30541 = (0);
while(true){
if((i__27786__auto___30541 < len__27785__auto___30540)){
args30488.push((arguments[i__27786__auto___30541]));

var G__30542 = (i__27786__auto___30541 + (1));
i__27786__auto___30541 = G__30542;
continue;
} else {
}
break;
}

var G__30490 = args30488.length;
switch (G__30490) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30488.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__){
return (function (state_30515){
var state_val_30516 = (state_30515[(1)]);
if((state_val_30516 === (7))){
var inst_30497 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
var statearr_30517_30544 = state_30515__$1;
(statearr_30517_30544[(2)] = inst_30497);

(statearr_30517_30544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (1))){
var inst_30491 = cljs.core.seq.call(null,coll);
var inst_30492 = inst_30491;
var state_30515__$1 = (function (){var statearr_30518 = state_30515;
(statearr_30518[(7)] = inst_30492);

return statearr_30518;
})();
var statearr_30519_30545 = state_30515__$1;
(statearr_30519_30545[(2)] = null);

(statearr_30519_30545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (4))){
var inst_30492 = (state_30515[(7)]);
var inst_30495 = cljs.core.first.call(null,inst_30492);
var state_30515__$1 = state_30515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30515__$1,(7),ch,inst_30495);
} else {
if((state_val_30516 === (13))){
var inst_30509 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
var statearr_30520_30546 = state_30515__$1;
(statearr_30520_30546[(2)] = inst_30509);

(statearr_30520_30546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (6))){
var inst_30500 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
if(cljs.core.truth_(inst_30500)){
var statearr_30521_30547 = state_30515__$1;
(statearr_30521_30547[(1)] = (8));

} else {
var statearr_30522_30548 = state_30515__$1;
(statearr_30522_30548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (3))){
var inst_30513 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30515__$1,inst_30513);
} else {
if((state_val_30516 === (12))){
var state_30515__$1 = state_30515;
var statearr_30523_30549 = state_30515__$1;
(statearr_30523_30549[(2)] = null);

(statearr_30523_30549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (2))){
var inst_30492 = (state_30515[(7)]);
var state_30515__$1 = state_30515;
if(cljs.core.truth_(inst_30492)){
var statearr_30524_30550 = state_30515__$1;
(statearr_30524_30550[(1)] = (4));

} else {
var statearr_30525_30551 = state_30515__$1;
(statearr_30525_30551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (11))){
var inst_30506 = cljs.core.async.close_BANG_.call(null,ch);
var state_30515__$1 = state_30515;
var statearr_30526_30552 = state_30515__$1;
(statearr_30526_30552[(2)] = inst_30506);

(statearr_30526_30552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (9))){
var state_30515__$1 = state_30515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30527_30553 = state_30515__$1;
(statearr_30527_30553[(1)] = (11));

} else {
var statearr_30528_30554 = state_30515__$1;
(statearr_30528_30554[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (5))){
var inst_30492 = (state_30515[(7)]);
var state_30515__$1 = state_30515;
var statearr_30529_30555 = state_30515__$1;
(statearr_30529_30555[(2)] = inst_30492);

(statearr_30529_30555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (10))){
var inst_30511 = (state_30515[(2)]);
var state_30515__$1 = state_30515;
var statearr_30530_30556 = state_30515__$1;
(statearr_30530_30556[(2)] = inst_30511);

(statearr_30530_30556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30516 === (8))){
var inst_30492 = (state_30515[(7)]);
var inst_30502 = cljs.core.next.call(null,inst_30492);
var inst_30492__$1 = inst_30502;
var state_30515__$1 = (function (){var statearr_30531 = state_30515;
(statearr_30531[(7)] = inst_30492__$1);

return statearr_30531;
})();
var statearr_30532_30557 = state_30515__$1;
(statearr_30532_30557[(2)] = null);

(statearr_30532_30557[(1)] = (2));


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
});})(c__29673__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_30536 = [null,null,null,null,null,null,null,null];
(statearr_30536[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_30536[(1)] = (1));

return statearr_30536;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_30515){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object)){
var ex__29563__auto__ = e30537;
var statearr_30538_30558 = state_30515;
(statearr_30538_30558[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30559 = state_30515;
state_30515 = G__30559;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_30515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_30515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__))
})();
var state__29675__auto__ = (function (){var statearr_30539 = f__29674__auto__.call(null);
(statearr_30539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__))
);

return c__29673__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30785 = (function (mult,ch,cs,meta30786){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30786 = meta30786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30787,meta30786__$1){
var self__ = this;
var _30787__$1 = this;
return (new cljs.core.async.t_cljs$core$async30785(self__.mult,self__.ch,self__.cs,meta30786__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30787){
var self__ = this;
var _30787__$1 = this;
return self__.meta30786;
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30786","meta30786",-1953710771,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30785";

cljs.core.async.t_cljs$core$async30785.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async30785");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30785 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30785(mult__$1,ch__$1,cs__$1,meta30786){
return (new cljs.core.async.t_cljs$core$async30785(mult__$1,ch__$1,cs__$1,meta30786));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30785(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29673__auto___31010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31010,cs,m,dchan,dctr,done){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31010,cs,m,dchan,dctr,done){
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30918 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30924_31011 = state_30922__$1;
(statearr_30924_31011[(2)] = inst_30918);

(statearr_30924_31011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (20))){
var inst_30821 = (state_30922[(7)]);
var inst_30833 = cljs.core.first.call(null,inst_30821);
var inst_30834 = cljs.core.nth.call(null,inst_30833,(0),null);
var inst_30835 = cljs.core.nth.call(null,inst_30833,(1),null);
var state_30922__$1 = (function (){var statearr_30925 = state_30922;
(statearr_30925[(8)] = inst_30834);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30835)){
var statearr_30926_31012 = state_30922__$1;
(statearr_30926_31012[(1)] = (22));

} else {
var statearr_30927_31013 = state_30922__$1;
(statearr_30927_31013[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (27))){
var inst_30790 = (state_30922[(9)]);
var inst_30865 = (state_30922[(10)]);
var inst_30870 = (state_30922[(11)]);
var inst_30863 = (state_30922[(12)]);
var inst_30870__$1 = cljs.core._nth.call(null,inst_30863,inst_30865);
var inst_30871 = cljs.core.async.put_BANG_.call(null,inst_30870__$1,inst_30790,done);
var state_30922__$1 = (function (){var statearr_30928 = state_30922;
(statearr_30928[(11)] = inst_30870__$1);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30871)){
var statearr_30929_31014 = state_30922__$1;
(statearr_30929_31014[(1)] = (30));

} else {
var statearr_30930_31015 = state_30922__$1;
(statearr_30930_31015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30931_31016 = state_30922__$1;
(statearr_30931_31016[(2)] = null);

(statearr_30931_31016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (24))){
var inst_30821 = (state_30922[(7)]);
var inst_30840 = (state_30922[(2)]);
var inst_30841 = cljs.core.next.call(null,inst_30821);
var inst_30799 = inst_30841;
var inst_30800 = null;
var inst_30801 = (0);
var inst_30802 = (0);
var state_30922__$1 = (function (){var statearr_30932 = state_30922;
(statearr_30932[(13)] = inst_30799);

(statearr_30932[(14)] = inst_30802);

(statearr_30932[(15)] = inst_30800);

(statearr_30932[(16)] = inst_30840);

(statearr_30932[(17)] = inst_30801);

return statearr_30932;
})();
var statearr_30933_31017 = state_30922__$1;
(statearr_30933_31017[(2)] = null);

(statearr_30933_31017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (39))){
var state_30922__$1 = state_30922;
var statearr_30937_31018 = state_30922__$1;
(statearr_30937_31018[(2)] = null);

(statearr_30937_31018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30790 = (state_30922[(9)]);
var inst_30790__$1 = (state_30922[(2)]);
var inst_30791 = (inst_30790__$1 == null);
var state_30922__$1 = (function (){var statearr_30938 = state_30922;
(statearr_30938[(9)] = inst_30790__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30791)){
var statearr_30939_31019 = state_30922__$1;
(statearr_30939_31019[(1)] = (5));

} else {
var statearr_30940_31020 = state_30922__$1;
(statearr_30940_31020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (15))){
var inst_30799 = (state_30922[(13)]);
var inst_30802 = (state_30922[(14)]);
var inst_30800 = (state_30922[(15)]);
var inst_30801 = (state_30922[(17)]);
var inst_30817 = (state_30922[(2)]);
var inst_30818 = (inst_30802 + (1));
var tmp30934 = inst_30799;
var tmp30935 = inst_30800;
var tmp30936 = inst_30801;
var inst_30799__$1 = tmp30934;
var inst_30800__$1 = tmp30935;
var inst_30801__$1 = tmp30936;
var inst_30802__$1 = inst_30818;
var state_30922__$1 = (function (){var statearr_30941 = state_30922;
(statearr_30941[(13)] = inst_30799__$1);

(statearr_30941[(14)] = inst_30802__$1);

(statearr_30941[(15)] = inst_30800__$1);

(statearr_30941[(18)] = inst_30817);

(statearr_30941[(17)] = inst_30801__$1);

return statearr_30941;
})();
var statearr_30942_31021 = state_30922__$1;
(statearr_30942_31021[(2)] = null);

(statearr_30942_31021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (21))){
var inst_30844 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30946_31022 = state_30922__$1;
(statearr_30946_31022[(2)] = inst_30844);

(statearr_30946_31022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (31))){
var inst_30870 = (state_30922[(11)]);
var inst_30874 = done.call(null,null);
var inst_30875 = cljs.core.async.untap_STAR_.call(null,m,inst_30870);
var state_30922__$1 = (function (){var statearr_30947 = state_30922;
(statearr_30947[(19)] = inst_30874);

return statearr_30947;
})();
var statearr_30948_31023 = state_30922__$1;
(statearr_30948_31023[(2)] = inst_30875);

(statearr_30948_31023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (32))){
var inst_30864 = (state_30922[(20)]);
var inst_30862 = (state_30922[(21)]);
var inst_30865 = (state_30922[(10)]);
var inst_30863 = (state_30922[(12)]);
var inst_30877 = (state_30922[(2)]);
var inst_30878 = (inst_30865 + (1));
var tmp30943 = inst_30864;
var tmp30944 = inst_30862;
var tmp30945 = inst_30863;
var inst_30862__$1 = tmp30944;
var inst_30863__$1 = tmp30945;
var inst_30864__$1 = tmp30943;
var inst_30865__$1 = inst_30878;
var state_30922__$1 = (function (){var statearr_30949 = state_30922;
(statearr_30949[(20)] = inst_30864__$1);

(statearr_30949[(21)] = inst_30862__$1);

(statearr_30949[(10)] = inst_30865__$1);

(statearr_30949[(12)] = inst_30863__$1);

(statearr_30949[(22)] = inst_30877);

return statearr_30949;
})();
var statearr_30950_31024 = state_30922__$1;
(statearr_30950_31024[(2)] = null);

(statearr_30950_31024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (40))){
var inst_30890 = (state_30922[(23)]);
var inst_30894 = done.call(null,null);
var inst_30895 = cljs.core.async.untap_STAR_.call(null,m,inst_30890);
var state_30922__$1 = (function (){var statearr_30951 = state_30922;
(statearr_30951[(24)] = inst_30894);

return statearr_30951;
})();
var statearr_30952_31025 = state_30922__$1;
(statearr_30952_31025[(2)] = inst_30895);

(statearr_30952_31025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (33))){
var inst_30881 = (state_30922[(25)]);
var inst_30883 = cljs.core.chunked_seq_QMARK_.call(null,inst_30881);
var state_30922__$1 = state_30922;
if(inst_30883){
var statearr_30953_31026 = state_30922__$1;
(statearr_30953_31026[(1)] = (36));

} else {
var statearr_30954_31027 = state_30922__$1;
(statearr_30954_31027[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var inst_30811 = (state_30922[(26)]);
var inst_30814 = cljs.core.async.close_BANG_.call(null,inst_30811);
var state_30922__$1 = state_30922;
var statearr_30955_31028 = state_30922__$1;
(statearr_30955_31028[(2)] = inst_30814);

(statearr_30955_31028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (22))){
var inst_30834 = (state_30922[(8)]);
var inst_30837 = cljs.core.async.close_BANG_.call(null,inst_30834);
var state_30922__$1 = state_30922;
var statearr_30956_31029 = state_30922__$1;
(statearr_30956_31029[(2)] = inst_30837);

(statearr_30956_31029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (36))){
var inst_30881 = (state_30922[(25)]);
var inst_30885 = cljs.core.chunk_first.call(null,inst_30881);
var inst_30886 = cljs.core.chunk_rest.call(null,inst_30881);
var inst_30887 = cljs.core.count.call(null,inst_30885);
var inst_30862 = inst_30886;
var inst_30863 = inst_30885;
var inst_30864 = inst_30887;
var inst_30865 = (0);
var state_30922__$1 = (function (){var statearr_30957 = state_30922;
(statearr_30957[(20)] = inst_30864);

(statearr_30957[(21)] = inst_30862);

(statearr_30957[(10)] = inst_30865);

(statearr_30957[(12)] = inst_30863);

return statearr_30957;
})();
var statearr_30958_31030 = state_30922__$1;
(statearr_30958_31030[(2)] = null);

(statearr_30958_31030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (41))){
var inst_30881 = (state_30922[(25)]);
var inst_30897 = (state_30922[(2)]);
var inst_30898 = cljs.core.next.call(null,inst_30881);
var inst_30862 = inst_30898;
var inst_30863 = null;
var inst_30864 = (0);
var inst_30865 = (0);
var state_30922__$1 = (function (){var statearr_30959 = state_30922;
(statearr_30959[(27)] = inst_30897);

(statearr_30959[(20)] = inst_30864);

(statearr_30959[(21)] = inst_30862);

(statearr_30959[(10)] = inst_30865);

(statearr_30959[(12)] = inst_30863);

return statearr_30959;
})();
var statearr_30960_31031 = state_30922__$1;
(statearr_30960_31031[(2)] = null);

(statearr_30960_31031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (43))){
var state_30922__$1 = state_30922;
var statearr_30961_31032 = state_30922__$1;
(statearr_30961_31032[(2)] = null);

(statearr_30961_31032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (29))){
var inst_30906 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30962_31033 = state_30922__$1;
(statearr_30962_31033[(2)] = inst_30906);

(statearr_30962_31033[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (44))){
var inst_30915 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30963 = state_30922;
(statearr_30963[(28)] = inst_30915);

return statearr_30963;
})();
var statearr_30964_31034 = state_30922__$1;
(statearr_30964_31034[(2)] = null);

(statearr_30964_31034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var inst_30854 = (state_30922[(29)]);
var inst_30853 = cljs.core.deref.call(null,cs);
var inst_30854__$1 = cljs.core.keys.call(null,inst_30853);
var inst_30855 = cljs.core.count.call(null,inst_30854__$1);
var inst_30856 = cljs.core.reset_BANG_.call(null,dctr,inst_30855);
var inst_30861 = cljs.core.seq.call(null,inst_30854__$1);
var inst_30862 = inst_30861;
var inst_30863 = null;
var inst_30864 = (0);
var inst_30865 = (0);
var state_30922__$1 = (function (){var statearr_30965 = state_30922;
(statearr_30965[(20)] = inst_30864);

(statearr_30965[(21)] = inst_30862);

(statearr_30965[(10)] = inst_30865);

(statearr_30965[(12)] = inst_30863);

(statearr_30965[(30)] = inst_30856);

(statearr_30965[(29)] = inst_30854__$1);

return statearr_30965;
})();
var statearr_30966_31035 = state_30922__$1;
(statearr_30966_31035[(2)] = null);

(statearr_30966_31035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (28))){
var inst_30862 = (state_30922[(21)]);
var inst_30881 = (state_30922[(25)]);
var inst_30881__$1 = cljs.core.seq.call(null,inst_30862);
var state_30922__$1 = (function (){var statearr_30967 = state_30922;
(statearr_30967[(25)] = inst_30881__$1);

return statearr_30967;
})();
if(inst_30881__$1){
var statearr_30968_31036 = state_30922__$1;
(statearr_30968_31036[(1)] = (33));

} else {
var statearr_30969_31037 = state_30922__$1;
(statearr_30969_31037[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (25))){
var inst_30864 = (state_30922[(20)]);
var inst_30865 = (state_30922[(10)]);
var inst_30867 = (inst_30865 < inst_30864);
var inst_30868 = inst_30867;
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30868)){
var statearr_30970_31038 = state_30922__$1;
(statearr_30970_31038[(1)] = (27));

} else {
var statearr_30971_31039 = state_30922__$1;
(statearr_30971_31039[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (34))){
var state_30922__$1 = state_30922;
var statearr_30972_31040 = state_30922__$1;
(statearr_30972_31040[(2)] = null);

(statearr_30972_31040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (17))){
var state_30922__$1 = state_30922;
var statearr_30973_31041 = state_30922__$1;
(statearr_30973_31041[(2)] = null);

(statearr_30973_31041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (3))){
var inst_30920 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
if((state_val_30923 === (12))){
var inst_30849 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30974_31042 = state_30922__$1;
(statearr_30974_31042[(2)] = inst_30849);

(statearr_30974_31042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(4),ch);
} else {
if((state_val_30923 === (23))){
var state_30922__$1 = state_30922;
var statearr_30975_31043 = state_30922__$1;
(statearr_30975_31043[(2)] = null);

(statearr_30975_31043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (35))){
var inst_30904 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30976_31044 = state_30922__$1;
(statearr_30976_31044[(2)] = inst_30904);

(statearr_30976_31044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (19))){
var inst_30821 = (state_30922[(7)]);
var inst_30825 = cljs.core.chunk_first.call(null,inst_30821);
var inst_30826 = cljs.core.chunk_rest.call(null,inst_30821);
var inst_30827 = cljs.core.count.call(null,inst_30825);
var inst_30799 = inst_30826;
var inst_30800 = inst_30825;
var inst_30801 = inst_30827;
var inst_30802 = (0);
var state_30922__$1 = (function (){var statearr_30977 = state_30922;
(statearr_30977[(13)] = inst_30799);

(statearr_30977[(14)] = inst_30802);

(statearr_30977[(15)] = inst_30800);

(statearr_30977[(17)] = inst_30801);

return statearr_30977;
})();
var statearr_30978_31045 = state_30922__$1;
(statearr_30978_31045[(2)] = null);

(statearr_30978_31045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (11))){
var inst_30799 = (state_30922[(13)]);
var inst_30821 = (state_30922[(7)]);
var inst_30821__$1 = cljs.core.seq.call(null,inst_30799);
var state_30922__$1 = (function (){var statearr_30979 = state_30922;
(statearr_30979[(7)] = inst_30821__$1);

return statearr_30979;
})();
if(inst_30821__$1){
var statearr_30980_31046 = state_30922__$1;
(statearr_30980_31046[(1)] = (16));

} else {
var statearr_30981_31047 = state_30922__$1;
(statearr_30981_31047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (9))){
var inst_30851 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30982_31048 = state_30922__$1;
(statearr_30982_31048[(2)] = inst_30851);

(statearr_30982_31048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var inst_30797 = cljs.core.deref.call(null,cs);
var inst_30798 = cljs.core.seq.call(null,inst_30797);
var inst_30799 = inst_30798;
var inst_30800 = null;
var inst_30801 = (0);
var inst_30802 = (0);
var state_30922__$1 = (function (){var statearr_30983 = state_30922;
(statearr_30983[(13)] = inst_30799);

(statearr_30983[(14)] = inst_30802);

(statearr_30983[(15)] = inst_30800);

(statearr_30983[(17)] = inst_30801);

return statearr_30983;
})();
var statearr_30984_31049 = state_30922__$1;
(statearr_30984_31049[(2)] = null);

(statearr_30984_31049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var state_30922__$1 = state_30922;
var statearr_30985_31050 = state_30922__$1;
(statearr_30985_31050[(2)] = null);

(statearr_30985_31050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (45))){
var inst_30912 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30986_31051 = state_30922__$1;
(statearr_30986_31051[(2)] = inst_30912);

(statearr_30986_31051[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (26))){
var inst_30854 = (state_30922[(29)]);
var inst_30908 = (state_30922[(2)]);
var inst_30909 = cljs.core.seq.call(null,inst_30854);
var state_30922__$1 = (function (){var statearr_30987 = state_30922;
(statearr_30987[(31)] = inst_30908);

return statearr_30987;
})();
if(inst_30909){
var statearr_30988_31052 = state_30922__$1;
(statearr_30988_31052[(1)] = (42));

} else {
var statearr_30989_31053 = state_30922__$1;
(statearr_30989_31053[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (16))){
var inst_30821 = (state_30922[(7)]);
var inst_30823 = cljs.core.chunked_seq_QMARK_.call(null,inst_30821);
var state_30922__$1 = state_30922;
if(inst_30823){
var statearr_30990_31054 = state_30922__$1;
(statearr_30990_31054[(1)] = (19));

} else {
var statearr_30991_31055 = state_30922__$1;
(statearr_30991_31055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (38))){
var inst_30901 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30992_31056 = state_30922__$1;
(statearr_30992_31056[(2)] = inst_30901);

(statearr_30992_31056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (30))){
var state_30922__$1 = state_30922;
var statearr_30993_31057 = state_30922__$1;
(statearr_30993_31057[(2)] = null);

(statearr_30993_31057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30802 = (state_30922[(14)]);
var inst_30800 = (state_30922[(15)]);
var inst_30810 = cljs.core._nth.call(null,inst_30800,inst_30802);
var inst_30811 = cljs.core.nth.call(null,inst_30810,(0),null);
var inst_30812 = cljs.core.nth.call(null,inst_30810,(1),null);
var state_30922__$1 = (function (){var statearr_30994 = state_30922;
(statearr_30994[(26)] = inst_30811);

return statearr_30994;
})();
if(cljs.core.truth_(inst_30812)){
var statearr_30995_31058 = state_30922__$1;
(statearr_30995_31058[(1)] = (13));

} else {
var statearr_30996_31059 = state_30922__$1;
(statearr_30996_31059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (18))){
var inst_30847 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30997_31060 = state_30922__$1;
(statearr_30997_31060[(2)] = inst_30847);

(statearr_30997_31060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (42))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(45),dchan);
} else {
if((state_val_30923 === (37))){
var inst_30890 = (state_30922[(23)]);
var inst_30881 = (state_30922[(25)]);
var inst_30790 = (state_30922[(9)]);
var inst_30890__$1 = cljs.core.first.call(null,inst_30881);
var inst_30891 = cljs.core.async.put_BANG_.call(null,inst_30890__$1,inst_30790,done);
var state_30922__$1 = (function (){var statearr_30998 = state_30922;
(statearr_30998[(23)] = inst_30890__$1);

return statearr_30998;
})();
if(cljs.core.truth_(inst_30891)){
var statearr_30999_31061 = state_30922__$1;
(statearr_30999_31061[(1)] = (39));

} else {
var statearr_31000_31062 = state_30922__$1;
(statearr_31000_31062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (8))){
var inst_30802 = (state_30922[(14)]);
var inst_30801 = (state_30922[(17)]);
var inst_30804 = (inst_30802 < inst_30801);
var inst_30805 = inst_30804;
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30805)){
var statearr_31001_31063 = state_30922__$1;
(statearr_31001_31063[(1)] = (10));

} else {
var statearr_31002_31064 = state_30922__$1;
(statearr_31002_31064[(1)] = (11));

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
});})(c__29673__auto___31010,cs,m,dchan,dctr,done))
;
return ((function (switch__29559__auto__,c__29673__auto___31010,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29560__auto__ = null;
var cljs$core$async$mult_$_state_machine__29560__auto____0 = (function (){
var statearr_31006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31006[(0)] = cljs$core$async$mult_$_state_machine__29560__auto__);

(statearr_31006[(1)] = (1));

return statearr_31006;
});
var cljs$core$async$mult_$_state_machine__29560__auto____1 = (function (state_30922){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31007){if((e31007 instanceof Object)){
var ex__29563__auto__ = e31007;
var statearr_31008_31065 = state_30922;
(statearr_31008_31065[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31066 = state_30922;
state_30922 = G__31066;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29560__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29560__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29560__auto____0;
cljs$core$async$mult_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29560__auto____1;
return cljs$core$async$mult_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31010,cs,m,dchan,dctr,done))
})();
var state__29675__auto__ = (function (){var statearr_31009 = f__29674__auto__.call(null);
(statearr_31009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31010);

return statearr_31009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31010,cs,m,dchan,dctr,done))
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
var args31067 = [];
var len__27785__auto___31070 = arguments.length;
var i__27786__auto___31071 = (0);
while(true){
if((i__27786__auto___31071 < len__27785__auto___31070)){
args31067.push((arguments[i__27786__auto___31071]));

var G__31072 = (i__27786__auto___31071 + (1));
i__27786__auto___31071 = G__31072;
continue;
} else {
}
break;
}

var G__31069 = args31067.length;
switch (G__31069) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31067.length)].join('')));

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
var len__27785__auto___31084 = arguments.length;
var i__27786__auto___31085 = (0);
while(true){
if((i__27786__auto___31085 < len__27785__auto___31084)){
args__27792__auto__.push((arguments[i__27786__auto___31085]));

var G__31086 = (i__27786__auto___31085 + (1));
i__27786__auto___31085 = G__31086;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((3) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27793__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31078){
var map__31079 = p__31078;
var map__31079__$1 = ((((!((map__31079 == null)))?((((map__31079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31079):map__31079);
var opts = map__31079__$1;
var statearr_31081_31087 = state;
(statearr_31081_31087[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__31079,map__31079__$1,opts){
return (function (val){
var statearr_31082_31088 = state;
(statearr_31082_31088[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31079,map__31079__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_31083_31089 = state;
(statearr_31083_31089[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31074){
var G__31075 = cljs.core.first.call(null,seq31074);
var seq31074__$1 = cljs.core.next.call(null,seq31074);
var G__31076 = cljs.core.first.call(null,seq31074__$1);
var seq31074__$2 = cljs.core.next.call(null,seq31074__$1);
var G__31077 = cljs.core.first.call(null,seq31074__$2);
var seq31074__$3 = cljs.core.next.call(null,seq31074__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31075,G__31076,G__31077,seq31074__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31256){
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
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31256__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31255.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31256","meta31256",-38736745,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255";

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31255");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31255 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31255(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31256));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31255(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29673__auto___31420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (7))){
var inst_31273 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31359_31421 = state_31357__$1;
(statearr_31359_31421[(2)] = inst_31273);

(statearr_31359_31421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (20))){
var inst_31285 = (state_31357[(7)]);
var state_31357__$1 = state_31357;
var statearr_31360_31422 = state_31357__$1;
(statearr_31360_31422[(2)] = inst_31285);

(statearr_31360_31422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (27))){
var state_31357__$1 = state_31357;
var statearr_31361_31423 = state_31357__$1;
(statearr_31361_31423[(2)] = null);

(statearr_31361_31423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (1))){
var inst_31261 = (state_31357[(8)]);
var inst_31261__$1 = calc_state.call(null);
var inst_31263 = (inst_31261__$1 == null);
var inst_31264 = cljs.core.not.call(null,inst_31263);
var state_31357__$1 = (function (){var statearr_31362 = state_31357;
(statearr_31362[(8)] = inst_31261__$1);

return statearr_31362;
})();
if(inst_31264){
var statearr_31363_31424 = state_31357__$1;
(statearr_31363_31424[(1)] = (2));

} else {
var statearr_31364_31425 = state_31357__$1;
(statearr_31364_31425[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (24))){
var inst_31308 = (state_31357[(9)]);
var inst_31331 = (state_31357[(10)]);
var inst_31317 = (state_31357[(11)]);
var inst_31331__$1 = inst_31308.call(null,inst_31317);
var state_31357__$1 = (function (){var statearr_31365 = state_31357;
(statearr_31365[(10)] = inst_31331__$1);

return statearr_31365;
})();
if(cljs.core.truth_(inst_31331__$1)){
var statearr_31366_31426 = state_31357__$1;
(statearr_31366_31426[(1)] = (29));

} else {
var statearr_31367_31427 = state_31357__$1;
(statearr_31367_31427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (4))){
var inst_31276 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31276)){
var statearr_31368_31428 = state_31357__$1;
(statearr_31368_31428[(1)] = (8));

} else {
var statearr_31369_31429 = state_31357__$1;
(statearr_31369_31429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (15))){
var inst_31302 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31302)){
var statearr_31370_31430 = state_31357__$1;
(statearr_31370_31430[(1)] = (19));

} else {
var statearr_31371_31431 = state_31357__$1;
(statearr_31371_31431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (21))){
var inst_31307 = (state_31357[(12)]);
var inst_31307__$1 = (state_31357[(2)]);
var inst_31308 = cljs.core.get.call(null,inst_31307__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31309 = cljs.core.get.call(null,inst_31307__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31310 = cljs.core.get.call(null,inst_31307__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31357__$1 = (function (){var statearr_31372 = state_31357;
(statearr_31372[(9)] = inst_31308);

(statearr_31372[(13)] = inst_31309);

(statearr_31372[(12)] = inst_31307__$1);

return statearr_31372;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31357__$1,(22),inst_31310);
} else {
if((state_val_31358 === (31))){
var inst_31339 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31339)){
var statearr_31373_31432 = state_31357__$1;
(statearr_31373_31432[(1)] = (32));

} else {
var statearr_31374_31433 = state_31357__$1;
(statearr_31374_31433[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (32))){
var inst_31316 = (state_31357[(14)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31357__$1,(35),out,inst_31316);
} else {
if((state_val_31358 === (33))){
var inst_31307 = (state_31357[(12)]);
var inst_31285 = inst_31307;
var state_31357__$1 = (function (){var statearr_31375 = state_31357;
(statearr_31375[(7)] = inst_31285);

return statearr_31375;
})();
var statearr_31376_31434 = state_31357__$1;
(statearr_31376_31434[(2)] = null);

(statearr_31376_31434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (13))){
var inst_31285 = (state_31357[(7)]);
var inst_31292 = inst_31285.cljs$lang$protocol_mask$partition0$;
var inst_31293 = (inst_31292 & (64));
var inst_31294 = inst_31285.cljs$core$ISeq$;
var inst_31295 = (inst_31293) || (inst_31294);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31295)){
var statearr_31377_31435 = state_31357__$1;
(statearr_31377_31435[(1)] = (16));

} else {
var statearr_31378_31436 = state_31357__$1;
(statearr_31378_31436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (22))){
var inst_31316 = (state_31357[(14)]);
var inst_31317 = (state_31357[(11)]);
var inst_31315 = (state_31357[(2)]);
var inst_31316__$1 = cljs.core.nth.call(null,inst_31315,(0),null);
var inst_31317__$1 = cljs.core.nth.call(null,inst_31315,(1),null);
var inst_31318 = (inst_31316__$1 == null);
var inst_31319 = cljs.core._EQ_.call(null,inst_31317__$1,change);
var inst_31320 = (inst_31318) || (inst_31319);
var state_31357__$1 = (function (){var statearr_31379 = state_31357;
(statearr_31379[(14)] = inst_31316__$1);

(statearr_31379[(11)] = inst_31317__$1);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31320)){
var statearr_31380_31437 = state_31357__$1;
(statearr_31380_31437[(1)] = (23));

} else {
var statearr_31381_31438 = state_31357__$1;
(statearr_31381_31438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (36))){
var inst_31307 = (state_31357[(12)]);
var inst_31285 = inst_31307;
var state_31357__$1 = (function (){var statearr_31382 = state_31357;
(statearr_31382[(7)] = inst_31285);

return statearr_31382;
})();
var statearr_31383_31439 = state_31357__$1;
(statearr_31383_31439[(2)] = null);

(statearr_31383_31439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (29))){
var inst_31331 = (state_31357[(10)]);
var state_31357__$1 = state_31357;
var statearr_31384_31440 = state_31357__$1;
(statearr_31384_31440[(2)] = inst_31331);

(statearr_31384_31440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (6))){
var state_31357__$1 = state_31357;
var statearr_31385_31441 = state_31357__$1;
(statearr_31385_31441[(2)] = false);

(statearr_31385_31441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (28))){
var inst_31327 = (state_31357[(2)]);
var inst_31328 = calc_state.call(null);
var inst_31285 = inst_31328;
var state_31357__$1 = (function (){var statearr_31386 = state_31357;
(statearr_31386[(7)] = inst_31285);

(statearr_31386[(15)] = inst_31327);

return statearr_31386;
})();
var statearr_31387_31442 = state_31357__$1;
(statearr_31387_31442[(2)] = null);

(statearr_31387_31442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (25))){
var inst_31353 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31388_31443 = state_31357__$1;
(statearr_31388_31443[(2)] = inst_31353);

(statearr_31388_31443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (34))){
var inst_31351 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31389_31444 = state_31357__$1;
(statearr_31389_31444[(2)] = inst_31351);

(statearr_31389_31444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (17))){
var state_31357__$1 = state_31357;
var statearr_31390_31445 = state_31357__$1;
(statearr_31390_31445[(2)] = false);

(statearr_31390_31445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (3))){
var state_31357__$1 = state_31357;
var statearr_31391_31446 = state_31357__$1;
(statearr_31391_31446[(2)] = false);

(statearr_31391_31446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (12))){
var inst_31355 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (2))){
var inst_31261 = (state_31357[(8)]);
var inst_31266 = inst_31261.cljs$lang$protocol_mask$partition0$;
var inst_31267 = (inst_31266 & (64));
var inst_31268 = inst_31261.cljs$core$ISeq$;
var inst_31269 = (inst_31267) || (inst_31268);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31269)){
var statearr_31392_31447 = state_31357__$1;
(statearr_31392_31447[(1)] = (5));

} else {
var statearr_31393_31448 = state_31357__$1;
(statearr_31393_31448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (23))){
var inst_31316 = (state_31357[(14)]);
var inst_31322 = (inst_31316 == null);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31322)){
var statearr_31394_31449 = state_31357__$1;
(statearr_31394_31449[(1)] = (26));

} else {
var statearr_31395_31450 = state_31357__$1;
(statearr_31395_31450[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (35))){
var inst_31342 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31342)){
var statearr_31396_31451 = state_31357__$1;
(statearr_31396_31451[(1)] = (36));

} else {
var statearr_31397_31452 = state_31357__$1;
(statearr_31397_31452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (19))){
var inst_31285 = (state_31357[(7)]);
var inst_31304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31285);
var state_31357__$1 = state_31357;
var statearr_31398_31453 = state_31357__$1;
(statearr_31398_31453[(2)] = inst_31304);

(statearr_31398_31453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (11))){
var inst_31285 = (state_31357[(7)]);
var inst_31289 = (inst_31285 == null);
var inst_31290 = cljs.core.not.call(null,inst_31289);
var state_31357__$1 = state_31357;
if(inst_31290){
var statearr_31399_31454 = state_31357__$1;
(statearr_31399_31454[(1)] = (13));

} else {
var statearr_31400_31455 = state_31357__$1;
(statearr_31400_31455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (9))){
var inst_31261 = (state_31357[(8)]);
var state_31357__$1 = state_31357;
var statearr_31401_31456 = state_31357__$1;
(statearr_31401_31456[(2)] = inst_31261);

(statearr_31401_31456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var state_31357__$1 = state_31357;
var statearr_31402_31457 = state_31357__$1;
(statearr_31402_31457[(2)] = true);

(statearr_31402_31457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (14))){
var state_31357__$1 = state_31357;
var statearr_31403_31458 = state_31357__$1;
(statearr_31403_31458[(2)] = false);

(statearr_31403_31458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (26))){
var inst_31317 = (state_31357[(11)]);
var inst_31324 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31317);
var state_31357__$1 = state_31357;
var statearr_31404_31459 = state_31357__$1;
(statearr_31404_31459[(2)] = inst_31324);

(statearr_31404_31459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (16))){
var state_31357__$1 = state_31357;
var statearr_31405_31460 = state_31357__$1;
(statearr_31405_31460[(2)] = true);

(statearr_31405_31460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (38))){
var inst_31347 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31406_31461 = state_31357__$1;
(statearr_31406_31461[(2)] = inst_31347);

(statearr_31406_31461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (30))){
var inst_31308 = (state_31357[(9)]);
var inst_31309 = (state_31357[(13)]);
var inst_31317 = (state_31357[(11)]);
var inst_31334 = cljs.core.empty_QMARK_.call(null,inst_31308);
var inst_31335 = inst_31309.call(null,inst_31317);
var inst_31336 = cljs.core.not.call(null,inst_31335);
var inst_31337 = (inst_31334) && (inst_31336);
var state_31357__$1 = state_31357;
var statearr_31407_31462 = state_31357__$1;
(statearr_31407_31462[(2)] = inst_31337);

(statearr_31407_31462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (10))){
var inst_31261 = (state_31357[(8)]);
var inst_31281 = (state_31357[(2)]);
var inst_31282 = cljs.core.get.call(null,inst_31281,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31283 = cljs.core.get.call(null,inst_31281,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31284 = cljs.core.get.call(null,inst_31281,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31285 = inst_31261;
var state_31357__$1 = (function (){var statearr_31408 = state_31357;
(statearr_31408[(7)] = inst_31285);

(statearr_31408[(16)] = inst_31284);

(statearr_31408[(17)] = inst_31282);

(statearr_31408[(18)] = inst_31283);

return statearr_31408;
})();
var statearr_31409_31463 = state_31357__$1;
(statearr_31409_31463[(2)] = null);

(statearr_31409_31463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (18))){
var inst_31299 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31410_31464 = state_31357__$1;
(statearr_31410_31464[(2)] = inst_31299);

(statearr_31410_31464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (37))){
var state_31357__$1 = state_31357;
var statearr_31411_31465 = state_31357__$1;
(statearr_31411_31465[(2)] = null);

(statearr_31411_31465[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31261 = (state_31357[(8)]);
var inst_31278 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31261);
var state_31357__$1 = state_31357;
var statearr_31412_31466 = state_31357__$1;
(statearr_31412_31466[(2)] = inst_31278);

(statearr_31412_31466[(1)] = (10));


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
});})(c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29559__auto__,c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29560__auto__ = null;
var cljs$core$async$mix_$_state_machine__29560__auto____0 = (function (){
var statearr_31416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31416[(0)] = cljs$core$async$mix_$_state_machine__29560__auto__);

(statearr_31416[(1)] = (1));

return statearr_31416;
});
var cljs$core$async$mix_$_state_machine__29560__auto____1 = (function (state_31357){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31417){if((e31417 instanceof Object)){
var ex__29563__auto__ = e31417;
var statearr_31418_31467 = state_31357;
(statearr_31418_31467[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31468 = state_31357;
state_31357 = G__31468;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29560__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29560__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29560__auto____0;
cljs$core$async$mix_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29560__auto____1;
return cljs$core$async$mix_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29675__auto__ = (function (){var statearr_31419 = f__29674__auto__.call(null);
(statearr_31419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31420);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31469 = [];
var len__27785__auto___31472 = arguments.length;
var i__27786__auto___31473 = (0);
while(true){
if((i__27786__auto___31473 < len__27785__auto___31472)){
args31469.push((arguments[i__27786__auto___31473]));

var G__31474 = (i__27786__auto___31473 + (1));
i__27786__auto___31473 = G__31474;
continue;
} else {
}
break;
}

var G__31471 = args31469.length;
switch (G__31471) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31469.length)].join('')));

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
var args31477 = [];
var len__27785__auto___31602 = arguments.length;
var i__27786__auto___31603 = (0);
while(true){
if((i__27786__auto___31603 < len__27785__auto___31602)){
args31477.push((arguments[i__27786__auto___31603]));

var G__31604 = (i__27786__auto___31603 + (1));
i__27786__auto___31603 = G__31604;
continue;
} else {
}
break;
}

var G__31479 = args31477.length;
switch (G__31479) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31477.length)].join('')));

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
return (function (p1__31476_SHARP_){
if(cljs.core.truth_(p1__31476_SHARP_.call(null,topic))){
return p1__31476_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31476_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26602__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31480 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31481){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31481 = meta31481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31482,meta31481__$1){
var self__ = this;
var _31482__$1 = this;
return (new cljs.core.async.t_cljs$core$async31480(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31481__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31482){
var self__ = this;
var _31482__$1 = this;
return self__.meta31481;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31481","meta31481",1894165197,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31480";

cljs.core.async.t_cljs$core$async31480.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31480");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31480 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31480(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31481){
return (new cljs.core.async.t_cljs$core$async31480(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31481));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31480(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29673__auto___31606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31606,mults,ensure_mult,p){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31606,mults,ensure_mult,p){
return (function (state_31554){
var state_val_31555 = (state_31554[(1)]);
if((state_val_31555 === (7))){
var inst_31550 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31556_31607 = state_31554__$1;
(statearr_31556_31607[(2)] = inst_31550);

(statearr_31556_31607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (20))){
var state_31554__$1 = state_31554;
var statearr_31557_31608 = state_31554__$1;
(statearr_31557_31608[(2)] = null);

(statearr_31557_31608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (1))){
var state_31554__$1 = state_31554;
var statearr_31558_31609 = state_31554__$1;
(statearr_31558_31609[(2)] = null);

(statearr_31558_31609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (24))){
var inst_31533 = (state_31554[(7)]);
var inst_31542 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31533);
var state_31554__$1 = state_31554;
var statearr_31559_31610 = state_31554__$1;
(statearr_31559_31610[(2)] = inst_31542);

(statearr_31559_31610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (4))){
var inst_31485 = (state_31554[(8)]);
var inst_31485__$1 = (state_31554[(2)]);
var inst_31486 = (inst_31485__$1 == null);
var state_31554__$1 = (function (){var statearr_31560 = state_31554;
(statearr_31560[(8)] = inst_31485__$1);

return statearr_31560;
})();
if(cljs.core.truth_(inst_31486)){
var statearr_31561_31611 = state_31554__$1;
(statearr_31561_31611[(1)] = (5));

} else {
var statearr_31562_31612 = state_31554__$1;
(statearr_31562_31612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (15))){
var inst_31527 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31563_31613 = state_31554__$1;
(statearr_31563_31613[(2)] = inst_31527);

(statearr_31563_31613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (21))){
var inst_31547 = (state_31554[(2)]);
var state_31554__$1 = (function (){var statearr_31564 = state_31554;
(statearr_31564[(9)] = inst_31547);

return statearr_31564;
})();
var statearr_31565_31614 = state_31554__$1;
(statearr_31565_31614[(2)] = null);

(statearr_31565_31614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (13))){
var inst_31509 = (state_31554[(10)]);
var inst_31511 = cljs.core.chunked_seq_QMARK_.call(null,inst_31509);
var state_31554__$1 = state_31554;
if(inst_31511){
var statearr_31566_31615 = state_31554__$1;
(statearr_31566_31615[(1)] = (16));

} else {
var statearr_31567_31616 = state_31554__$1;
(statearr_31567_31616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (22))){
var inst_31539 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31539)){
var statearr_31568_31617 = state_31554__$1;
(statearr_31568_31617[(1)] = (23));

} else {
var statearr_31569_31618 = state_31554__$1;
(statearr_31569_31618[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (6))){
var inst_31533 = (state_31554[(7)]);
var inst_31485 = (state_31554[(8)]);
var inst_31535 = (state_31554[(11)]);
var inst_31533__$1 = topic_fn.call(null,inst_31485);
var inst_31534 = cljs.core.deref.call(null,mults);
var inst_31535__$1 = cljs.core.get.call(null,inst_31534,inst_31533__$1);
var state_31554__$1 = (function (){var statearr_31570 = state_31554;
(statearr_31570[(7)] = inst_31533__$1);

(statearr_31570[(11)] = inst_31535__$1);

return statearr_31570;
})();
if(cljs.core.truth_(inst_31535__$1)){
var statearr_31571_31619 = state_31554__$1;
(statearr_31571_31619[(1)] = (19));

} else {
var statearr_31572_31620 = state_31554__$1;
(statearr_31572_31620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (25))){
var inst_31544 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31573_31621 = state_31554__$1;
(statearr_31573_31621[(2)] = inst_31544);

(statearr_31573_31621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (17))){
var inst_31509 = (state_31554[(10)]);
var inst_31518 = cljs.core.first.call(null,inst_31509);
var inst_31519 = cljs.core.async.muxch_STAR_.call(null,inst_31518);
var inst_31520 = cljs.core.async.close_BANG_.call(null,inst_31519);
var inst_31521 = cljs.core.next.call(null,inst_31509);
var inst_31495 = inst_31521;
var inst_31496 = null;
var inst_31497 = (0);
var inst_31498 = (0);
var state_31554__$1 = (function (){var statearr_31574 = state_31554;
(statearr_31574[(12)] = inst_31520);

(statearr_31574[(13)] = inst_31496);

(statearr_31574[(14)] = inst_31495);

(statearr_31574[(15)] = inst_31497);

(statearr_31574[(16)] = inst_31498);

return statearr_31574;
})();
var statearr_31575_31622 = state_31554__$1;
(statearr_31575_31622[(2)] = null);

(statearr_31575_31622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (3))){
var inst_31552 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31554__$1,inst_31552);
} else {
if((state_val_31555 === (12))){
var inst_31529 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31576_31623 = state_31554__$1;
(statearr_31576_31623[(2)] = inst_31529);

(statearr_31576_31623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (2))){
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31554__$1,(4),ch);
} else {
if((state_val_31555 === (23))){
var state_31554__$1 = state_31554;
var statearr_31577_31624 = state_31554__$1;
(statearr_31577_31624[(2)] = null);

(statearr_31577_31624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (19))){
var inst_31485 = (state_31554[(8)]);
var inst_31535 = (state_31554[(11)]);
var inst_31537 = cljs.core.async.muxch_STAR_.call(null,inst_31535);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31554__$1,(22),inst_31537,inst_31485);
} else {
if((state_val_31555 === (11))){
var inst_31495 = (state_31554[(14)]);
var inst_31509 = (state_31554[(10)]);
var inst_31509__$1 = cljs.core.seq.call(null,inst_31495);
var state_31554__$1 = (function (){var statearr_31578 = state_31554;
(statearr_31578[(10)] = inst_31509__$1);

return statearr_31578;
})();
if(inst_31509__$1){
var statearr_31579_31625 = state_31554__$1;
(statearr_31579_31625[(1)] = (13));

} else {
var statearr_31580_31626 = state_31554__$1;
(statearr_31580_31626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (9))){
var inst_31531 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31581_31627 = state_31554__$1;
(statearr_31581_31627[(2)] = inst_31531);

(statearr_31581_31627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (5))){
var inst_31492 = cljs.core.deref.call(null,mults);
var inst_31493 = cljs.core.vals.call(null,inst_31492);
var inst_31494 = cljs.core.seq.call(null,inst_31493);
var inst_31495 = inst_31494;
var inst_31496 = null;
var inst_31497 = (0);
var inst_31498 = (0);
var state_31554__$1 = (function (){var statearr_31582 = state_31554;
(statearr_31582[(13)] = inst_31496);

(statearr_31582[(14)] = inst_31495);

(statearr_31582[(15)] = inst_31497);

(statearr_31582[(16)] = inst_31498);

return statearr_31582;
})();
var statearr_31583_31628 = state_31554__$1;
(statearr_31583_31628[(2)] = null);

(statearr_31583_31628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (14))){
var state_31554__$1 = state_31554;
var statearr_31587_31629 = state_31554__$1;
(statearr_31587_31629[(2)] = null);

(statearr_31587_31629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (16))){
var inst_31509 = (state_31554[(10)]);
var inst_31513 = cljs.core.chunk_first.call(null,inst_31509);
var inst_31514 = cljs.core.chunk_rest.call(null,inst_31509);
var inst_31515 = cljs.core.count.call(null,inst_31513);
var inst_31495 = inst_31514;
var inst_31496 = inst_31513;
var inst_31497 = inst_31515;
var inst_31498 = (0);
var state_31554__$1 = (function (){var statearr_31588 = state_31554;
(statearr_31588[(13)] = inst_31496);

(statearr_31588[(14)] = inst_31495);

(statearr_31588[(15)] = inst_31497);

(statearr_31588[(16)] = inst_31498);

return statearr_31588;
})();
var statearr_31589_31630 = state_31554__$1;
(statearr_31589_31630[(2)] = null);

(statearr_31589_31630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (10))){
var inst_31496 = (state_31554[(13)]);
var inst_31495 = (state_31554[(14)]);
var inst_31497 = (state_31554[(15)]);
var inst_31498 = (state_31554[(16)]);
var inst_31503 = cljs.core._nth.call(null,inst_31496,inst_31498);
var inst_31504 = cljs.core.async.muxch_STAR_.call(null,inst_31503);
var inst_31505 = cljs.core.async.close_BANG_.call(null,inst_31504);
var inst_31506 = (inst_31498 + (1));
var tmp31584 = inst_31496;
var tmp31585 = inst_31495;
var tmp31586 = inst_31497;
var inst_31495__$1 = tmp31585;
var inst_31496__$1 = tmp31584;
var inst_31497__$1 = tmp31586;
var inst_31498__$1 = inst_31506;
var state_31554__$1 = (function (){var statearr_31590 = state_31554;
(statearr_31590[(17)] = inst_31505);

(statearr_31590[(13)] = inst_31496__$1);

(statearr_31590[(14)] = inst_31495__$1);

(statearr_31590[(15)] = inst_31497__$1);

(statearr_31590[(16)] = inst_31498__$1);

return statearr_31590;
})();
var statearr_31591_31631 = state_31554__$1;
(statearr_31591_31631[(2)] = null);

(statearr_31591_31631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (18))){
var inst_31524 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31592_31632 = state_31554__$1;
(statearr_31592_31632[(2)] = inst_31524);

(statearr_31592_31632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (8))){
var inst_31497 = (state_31554[(15)]);
var inst_31498 = (state_31554[(16)]);
var inst_31500 = (inst_31498 < inst_31497);
var inst_31501 = inst_31500;
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31501)){
var statearr_31593_31633 = state_31554__$1;
(statearr_31593_31633[(1)] = (10));

} else {
var statearr_31594_31634 = state_31554__$1;
(statearr_31594_31634[(1)] = (11));

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
});})(c__29673__auto___31606,mults,ensure_mult,p))
;
return ((function (switch__29559__auto__,c__29673__auto___31606,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_31598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31598[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_31598[(1)] = (1));

return statearr_31598;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_31554){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31599){if((e31599 instanceof Object)){
var ex__29563__auto__ = e31599;
var statearr_31600_31635 = state_31554;
(statearr_31600_31635[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31636 = state_31554;
state_31554 = G__31636;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_31554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_31554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31606,mults,ensure_mult,p))
})();
var state__29675__auto__ = (function (){var statearr_31601 = f__29674__auto__.call(null);
(statearr_31601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31606);

return statearr_31601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31606,mults,ensure_mult,p))
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
var args31637 = [];
var len__27785__auto___31640 = arguments.length;
var i__27786__auto___31641 = (0);
while(true){
if((i__27786__auto___31641 < len__27785__auto___31640)){
args31637.push((arguments[i__27786__auto___31641]));

var G__31642 = (i__27786__auto___31641 + (1));
i__27786__auto___31641 = G__31642;
continue;
} else {
}
break;
}

var G__31639 = args31637.length;
switch (G__31639) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31637.length)].join('')));

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
var args31644 = [];
var len__27785__auto___31647 = arguments.length;
var i__27786__auto___31648 = (0);
while(true){
if((i__27786__auto___31648 < len__27785__auto___31647)){
args31644.push((arguments[i__27786__auto___31648]));

var G__31649 = (i__27786__auto___31648 + (1));
i__27786__auto___31648 = G__31649;
continue;
} else {
}
break;
}

var G__31646 = args31644.length;
switch (G__31646) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31644.length)].join('')));

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
var args31651 = [];
var len__27785__auto___31722 = arguments.length;
var i__27786__auto___31723 = (0);
while(true){
if((i__27786__auto___31723 < len__27785__auto___31722)){
args31651.push((arguments[i__27786__auto___31723]));

var G__31724 = (i__27786__auto___31723 + (1));
i__27786__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var G__31653 = args31651.length;
switch (G__31653) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31651.length)].join('')));

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
var c__29673__auto___31726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31692){
var state_val_31693 = (state_31692[(1)]);
if((state_val_31693 === (7))){
var state_31692__$1 = state_31692;
var statearr_31694_31727 = state_31692__$1;
(statearr_31694_31727[(2)] = null);

(statearr_31694_31727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (1))){
var state_31692__$1 = state_31692;
var statearr_31695_31728 = state_31692__$1;
(statearr_31695_31728[(2)] = null);

(statearr_31695_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (4))){
var inst_31656 = (state_31692[(7)]);
var inst_31658 = (inst_31656 < cnt);
var state_31692__$1 = state_31692;
if(cljs.core.truth_(inst_31658)){
var statearr_31696_31729 = state_31692__$1;
(statearr_31696_31729[(1)] = (6));

} else {
var statearr_31697_31730 = state_31692__$1;
(statearr_31697_31730[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (15))){
var inst_31688 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
var statearr_31698_31731 = state_31692__$1;
(statearr_31698_31731[(2)] = inst_31688);

(statearr_31698_31731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (13))){
var inst_31681 = cljs.core.async.close_BANG_.call(null,out);
var state_31692__$1 = state_31692;
var statearr_31699_31732 = state_31692__$1;
(statearr_31699_31732[(2)] = inst_31681);

(statearr_31699_31732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (6))){
var state_31692__$1 = state_31692;
var statearr_31700_31733 = state_31692__$1;
(statearr_31700_31733[(2)] = null);

(statearr_31700_31733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (3))){
var inst_31690 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31692__$1,inst_31690);
} else {
if((state_val_31693 === (12))){
var inst_31678 = (state_31692[(8)]);
var inst_31678__$1 = (state_31692[(2)]);
var inst_31679 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31678__$1);
var state_31692__$1 = (function (){var statearr_31701 = state_31692;
(statearr_31701[(8)] = inst_31678__$1);

return statearr_31701;
})();
if(cljs.core.truth_(inst_31679)){
var statearr_31702_31734 = state_31692__$1;
(statearr_31702_31734[(1)] = (13));

} else {
var statearr_31703_31735 = state_31692__$1;
(statearr_31703_31735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (2))){
var inst_31655 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31656 = (0);
var state_31692__$1 = (function (){var statearr_31704 = state_31692;
(statearr_31704[(7)] = inst_31656);

(statearr_31704[(9)] = inst_31655);

return statearr_31704;
})();
var statearr_31705_31736 = state_31692__$1;
(statearr_31705_31736[(2)] = null);

(statearr_31705_31736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (11))){
var inst_31656 = (state_31692[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31692,(10),Object,null,(9));
var inst_31665 = chs__$1.call(null,inst_31656);
var inst_31666 = done.call(null,inst_31656);
var inst_31667 = cljs.core.async.take_BANG_.call(null,inst_31665,inst_31666);
var state_31692__$1 = state_31692;
var statearr_31706_31737 = state_31692__$1;
(statearr_31706_31737[(2)] = inst_31667);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (9))){
var inst_31656 = (state_31692[(7)]);
var inst_31669 = (state_31692[(2)]);
var inst_31670 = (inst_31656 + (1));
var inst_31656__$1 = inst_31670;
var state_31692__$1 = (function (){var statearr_31707 = state_31692;
(statearr_31707[(10)] = inst_31669);

(statearr_31707[(7)] = inst_31656__$1);

return statearr_31707;
})();
var statearr_31708_31738 = state_31692__$1;
(statearr_31708_31738[(2)] = null);

(statearr_31708_31738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (5))){
var inst_31676 = (state_31692[(2)]);
var state_31692__$1 = (function (){var statearr_31709 = state_31692;
(statearr_31709[(11)] = inst_31676);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31692__$1,(12),dchan);
} else {
if((state_val_31693 === (14))){
var inst_31678 = (state_31692[(8)]);
var inst_31683 = cljs.core.apply.call(null,f,inst_31678);
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31692__$1,(16),out,inst_31683);
} else {
if((state_val_31693 === (16))){
var inst_31685 = (state_31692[(2)]);
var state_31692__$1 = (function (){var statearr_31710 = state_31692;
(statearr_31710[(12)] = inst_31685);

return statearr_31710;
})();
var statearr_31711_31739 = state_31692__$1;
(statearr_31711_31739[(2)] = null);

(statearr_31711_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (10))){
var inst_31660 = (state_31692[(2)]);
var inst_31661 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31692__$1 = (function (){var statearr_31712 = state_31692;
(statearr_31712[(13)] = inst_31660);

return statearr_31712;
})();
var statearr_31713_31740 = state_31692__$1;
(statearr_31713_31740[(2)] = inst_31661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (8))){
var inst_31674 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
var statearr_31714_31741 = state_31692__$1;
(statearr_31714_31741[(2)] = inst_31674);

(statearr_31714_31741[(1)] = (5));


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
});})(c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29559__auto__,c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_31718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31718[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_31718[(1)] = (1));

return statearr_31718;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_31692){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31719){if((e31719 instanceof Object)){
var ex__29563__auto__ = e31719;
var statearr_31720_31742 = state_31692;
(statearr_31720_31742[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31692;
state_31692 = G__31743;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_31692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_31692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29675__auto__ = (function (){var statearr_31721 = f__29674__auto__.call(null);
(statearr_31721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31726);

return statearr_31721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31726,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31745 = [];
var len__27785__auto___31803 = arguments.length;
var i__27786__auto___31804 = (0);
while(true){
if((i__27786__auto___31804 < len__27785__auto___31803)){
args31745.push((arguments[i__27786__auto___31804]));

var G__31805 = (i__27786__auto___31804 + (1));
i__27786__auto___31804 = G__31805;
continue;
} else {
}
break;
}

var G__31747 = args31745.length;
switch (G__31747) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31745.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___31807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31807,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31807,out){
return (function (state_31779){
var state_val_31780 = (state_31779[(1)]);
if((state_val_31780 === (7))){
var inst_31758 = (state_31779[(7)]);
var inst_31759 = (state_31779[(8)]);
var inst_31758__$1 = (state_31779[(2)]);
var inst_31759__$1 = cljs.core.nth.call(null,inst_31758__$1,(0),null);
var inst_31760 = cljs.core.nth.call(null,inst_31758__$1,(1),null);
var inst_31761 = (inst_31759__$1 == null);
var state_31779__$1 = (function (){var statearr_31781 = state_31779;
(statearr_31781[(9)] = inst_31760);

(statearr_31781[(7)] = inst_31758__$1);

(statearr_31781[(8)] = inst_31759__$1);

return statearr_31781;
})();
if(cljs.core.truth_(inst_31761)){
var statearr_31782_31808 = state_31779__$1;
(statearr_31782_31808[(1)] = (8));

} else {
var statearr_31783_31809 = state_31779__$1;
(statearr_31783_31809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (1))){
var inst_31748 = cljs.core.vec.call(null,chs);
var inst_31749 = inst_31748;
var state_31779__$1 = (function (){var statearr_31784 = state_31779;
(statearr_31784[(10)] = inst_31749);

return statearr_31784;
})();
var statearr_31785_31810 = state_31779__$1;
(statearr_31785_31810[(2)] = null);

(statearr_31785_31810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (4))){
var inst_31749 = (state_31779[(10)]);
var state_31779__$1 = state_31779;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31779__$1,(7),inst_31749);
} else {
if((state_val_31780 === (6))){
var inst_31775 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31786_31811 = state_31779__$1;
(statearr_31786_31811[(2)] = inst_31775);

(statearr_31786_31811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (3))){
var inst_31777 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31779__$1,inst_31777);
} else {
if((state_val_31780 === (2))){
var inst_31749 = (state_31779[(10)]);
var inst_31751 = cljs.core.count.call(null,inst_31749);
var inst_31752 = (inst_31751 > (0));
var state_31779__$1 = state_31779;
if(cljs.core.truth_(inst_31752)){
var statearr_31788_31812 = state_31779__$1;
(statearr_31788_31812[(1)] = (4));

} else {
var statearr_31789_31813 = state_31779__$1;
(statearr_31789_31813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (11))){
var inst_31749 = (state_31779[(10)]);
var inst_31768 = (state_31779[(2)]);
var tmp31787 = inst_31749;
var inst_31749__$1 = tmp31787;
var state_31779__$1 = (function (){var statearr_31790 = state_31779;
(statearr_31790[(10)] = inst_31749__$1);

(statearr_31790[(11)] = inst_31768);

return statearr_31790;
})();
var statearr_31791_31814 = state_31779__$1;
(statearr_31791_31814[(2)] = null);

(statearr_31791_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (9))){
var inst_31759 = (state_31779[(8)]);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31779__$1,(11),out,inst_31759);
} else {
if((state_val_31780 === (5))){
var inst_31773 = cljs.core.async.close_BANG_.call(null,out);
var state_31779__$1 = state_31779;
var statearr_31792_31815 = state_31779__$1;
(statearr_31792_31815[(2)] = inst_31773);

(statearr_31792_31815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (10))){
var inst_31771 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31793_31816 = state_31779__$1;
(statearr_31793_31816[(2)] = inst_31771);

(statearr_31793_31816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (8))){
var inst_31760 = (state_31779[(9)]);
var inst_31758 = (state_31779[(7)]);
var inst_31749 = (state_31779[(10)]);
var inst_31759 = (state_31779[(8)]);
var inst_31763 = (function (){var cs = inst_31749;
var vec__31754 = inst_31758;
var v = inst_31759;
var c = inst_31760;
return ((function (cs,vec__31754,v,c,inst_31760,inst_31758,inst_31749,inst_31759,state_val_31780,c__29673__auto___31807,out){
return (function (p1__31744_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31744_SHARP_);
});
;})(cs,vec__31754,v,c,inst_31760,inst_31758,inst_31749,inst_31759,state_val_31780,c__29673__auto___31807,out))
})();
var inst_31764 = cljs.core.filterv.call(null,inst_31763,inst_31749);
var inst_31749__$1 = inst_31764;
var state_31779__$1 = (function (){var statearr_31794 = state_31779;
(statearr_31794[(10)] = inst_31749__$1);

return statearr_31794;
})();
var statearr_31795_31817 = state_31779__$1;
(statearr_31795_31817[(2)] = null);

(statearr_31795_31817[(1)] = (2));


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
});})(c__29673__auto___31807,out))
;
return ((function (switch__29559__auto__,c__29673__auto___31807,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_31799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31799[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_31799[(1)] = (1));

return statearr_31799;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_31779){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31800){if((e31800 instanceof Object)){
var ex__29563__auto__ = e31800;
var statearr_31801_31818 = state_31779;
(statearr_31801_31818[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31779;
state_31779 = G__31819;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_31779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_31779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31807,out))
})();
var state__29675__auto__ = (function (){var statearr_31802 = f__29674__auto__.call(null);
(statearr_31802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31807);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31807,out))
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
var args31820 = [];
var len__27785__auto___31869 = arguments.length;
var i__27786__auto___31870 = (0);
while(true){
if((i__27786__auto___31870 < len__27785__auto___31869)){
args31820.push((arguments[i__27786__auto___31870]));

var G__31871 = (i__27786__auto___31870 + (1));
i__27786__auto___31870 = G__31871;
continue;
} else {
}
break;
}

var G__31822 = args31820.length;
switch (G__31822) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31820.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___31873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31873,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31873,out){
return (function (state_31846){
var state_val_31847 = (state_31846[(1)]);
if((state_val_31847 === (7))){
var inst_31828 = (state_31846[(7)]);
var inst_31828__$1 = (state_31846[(2)]);
var inst_31829 = (inst_31828__$1 == null);
var inst_31830 = cljs.core.not.call(null,inst_31829);
var state_31846__$1 = (function (){var statearr_31848 = state_31846;
(statearr_31848[(7)] = inst_31828__$1);

return statearr_31848;
})();
if(inst_31830){
var statearr_31849_31874 = state_31846__$1;
(statearr_31849_31874[(1)] = (8));

} else {
var statearr_31850_31875 = state_31846__$1;
(statearr_31850_31875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (1))){
var inst_31823 = (0);
var state_31846__$1 = (function (){var statearr_31851 = state_31846;
(statearr_31851[(8)] = inst_31823);

return statearr_31851;
})();
var statearr_31852_31876 = state_31846__$1;
(statearr_31852_31876[(2)] = null);

(statearr_31852_31876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (4))){
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31846__$1,(7),ch);
} else {
if((state_val_31847 === (6))){
var inst_31841 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31853_31877 = state_31846__$1;
(statearr_31853_31877[(2)] = inst_31841);

(statearr_31853_31877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (3))){
var inst_31843 = (state_31846[(2)]);
var inst_31844 = cljs.core.async.close_BANG_.call(null,out);
var state_31846__$1 = (function (){var statearr_31854 = state_31846;
(statearr_31854[(9)] = inst_31843);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31846__$1,inst_31844);
} else {
if((state_val_31847 === (2))){
var inst_31823 = (state_31846[(8)]);
var inst_31825 = (inst_31823 < n);
var state_31846__$1 = state_31846;
if(cljs.core.truth_(inst_31825)){
var statearr_31855_31878 = state_31846__$1;
(statearr_31855_31878[(1)] = (4));

} else {
var statearr_31856_31879 = state_31846__$1;
(statearr_31856_31879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (11))){
var inst_31823 = (state_31846[(8)]);
var inst_31833 = (state_31846[(2)]);
var inst_31834 = (inst_31823 + (1));
var inst_31823__$1 = inst_31834;
var state_31846__$1 = (function (){var statearr_31857 = state_31846;
(statearr_31857[(8)] = inst_31823__$1);

(statearr_31857[(10)] = inst_31833);

return statearr_31857;
})();
var statearr_31858_31880 = state_31846__$1;
(statearr_31858_31880[(2)] = null);

(statearr_31858_31880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (9))){
var state_31846__$1 = state_31846;
var statearr_31859_31881 = state_31846__$1;
(statearr_31859_31881[(2)] = null);

(statearr_31859_31881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (5))){
var state_31846__$1 = state_31846;
var statearr_31860_31882 = state_31846__$1;
(statearr_31860_31882[(2)] = null);

(statearr_31860_31882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (10))){
var inst_31838 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31861_31883 = state_31846__$1;
(statearr_31861_31883[(2)] = inst_31838);

(statearr_31861_31883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (8))){
var inst_31828 = (state_31846[(7)]);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31846__$1,(11),out,inst_31828);
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
});})(c__29673__auto___31873,out))
;
return ((function (switch__29559__auto__,c__29673__auto___31873,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_31865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31865[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_31865[(1)] = (1));

return statearr_31865;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_31846){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31866){if((e31866 instanceof Object)){
var ex__29563__auto__ = e31866;
var statearr_31867_31884 = state_31846;
(statearr_31867_31884[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31885 = state_31846;
state_31846 = G__31885;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_31846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_31846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31873,out))
})();
var state__29675__auto__ = (function (){var statearr_31868 = f__29674__auto__.call(null);
(statearr_31868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31873);

return statearr_31868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31873,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31893 = (function (map_LT_,f,ch,meta31894){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31894 = meta31894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31895,meta31894__$1){
var self__ = this;
var _31895__$1 = this;
return (new cljs.core.async.t_cljs$core$async31893(self__.map_LT_,self__.f,self__.ch,meta31894__$1));
});

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31895){
var self__ = this;
var _31895__$1 = this;
return self__.meta31894;
});

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31896 = (function (map_LT_,f,ch,meta31894,_,fn1,meta31897){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31894 = meta31894;
this._ = _;
this.fn1 = fn1;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31898,meta31897__$1){
var self__ = this;
var _31898__$1 = this;
return (new cljs.core.async.t_cljs$core$async31896(self__.map_LT_,self__.f,self__.ch,self__.meta31894,self__._,self__.fn1,meta31897__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31898){
var self__ = this;
var _31898__$1 = this;
return self__.meta31897;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31886_SHARP_){
return f1.call(null,(((p1__31886_SHARP_ == null))?null:self__.f.call(null,p1__31886_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31894","meta31894",959096662,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31893","cljs.core.async/t_cljs$core$async31893",1667685090,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31897","meta31897",737140872,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31896";

cljs.core.async.t_cljs$core$async31896.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31896");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31896 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31896(map_LT___$1,f__$1,ch__$1,meta31894__$1,___$2,fn1__$1,meta31897){
return (new cljs.core.async.t_cljs$core$async31896(map_LT___$1,f__$1,ch__$1,meta31894__$1,___$2,fn1__$1,meta31897));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31896(self__.map_LT_,self__.f,self__.ch,self__.meta31894,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31894","meta31894",959096662,null)], null);
});

cljs.core.async.t_cljs$core$async31893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31893";

cljs.core.async.t_cljs$core$async31893.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31893");
});

cljs.core.async.__GT_t_cljs$core$async31893 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31893(map_LT___$1,f__$1,ch__$1,meta31894){
return (new cljs.core.async.t_cljs$core$async31893(map_LT___$1,f__$1,ch__$1,meta31894));
});

}

return (new cljs.core.async.t_cljs$core$async31893(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31902 = (function (map_GT_,f,ch,meta31903){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31903 = meta31903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31904,meta31903__$1){
var self__ = this;
var _31904__$1 = this;
return (new cljs.core.async.t_cljs$core$async31902(self__.map_GT_,self__.f,self__.ch,meta31903__$1));
});

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31904){
var self__ = this;
var _31904__$1 = this;
return self__.meta31903;
});

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31903","meta31903",-411513191,null)], null);
});

cljs.core.async.t_cljs$core$async31902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31902";

cljs.core.async.t_cljs$core$async31902.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31902");
});

cljs.core.async.__GT_t_cljs$core$async31902 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31902(map_GT___$1,f__$1,ch__$1,meta31903){
return (new cljs.core.async.t_cljs$core$async31902(map_GT___$1,f__$1,ch__$1,meta31903));
});

}

return (new cljs.core.async.t_cljs$core$async31902(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31908 = (function (filter_GT_,p,ch,meta31909){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31910,meta31909__$1){
var self__ = this;
var _31910__$1 = this;
return (new cljs.core.async.t_cljs$core$async31908(self__.filter_GT_,self__.p,self__.ch,meta31909__$1));
});

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31910){
var self__ = this;
var _31910__$1 = this;
return self__.meta31909;
});

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31909","meta31909",-1359203051,null)], null);
});

cljs.core.async.t_cljs$core$async31908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31908";

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async/t_cljs$core$async31908");
});

cljs.core.async.__GT_t_cljs$core$async31908 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31908(filter_GT___$1,p__$1,ch__$1,meta31909){
return (new cljs.core.async.t_cljs$core$async31908(filter_GT___$1,p__$1,ch__$1,meta31909));
});

}

return (new cljs.core.async.t_cljs$core$async31908(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31911 = [];
var len__27785__auto___31955 = arguments.length;
var i__27786__auto___31956 = (0);
while(true){
if((i__27786__auto___31956 < len__27785__auto___31955)){
args31911.push((arguments[i__27786__auto___31956]));

var G__31957 = (i__27786__auto___31956 + (1));
i__27786__auto___31956 = G__31957;
continue;
} else {
}
break;
}

var G__31913 = args31911.length;
switch (G__31913) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31911.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___31959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___31959,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___31959,out){
return (function (state_31934){
var state_val_31935 = (state_31934[(1)]);
if((state_val_31935 === (7))){
var inst_31930 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31936_31960 = state_31934__$1;
(statearr_31936_31960[(2)] = inst_31930);

(statearr_31936_31960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (1))){
var state_31934__$1 = state_31934;
var statearr_31937_31961 = state_31934__$1;
(statearr_31937_31961[(2)] = null);

(statearr_31937_31961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (4))){
var inst_31916 = (state_31934[(7)]);
var inst_31916__$1 = (state_31934[(2)]);
var inst_31917 = (inst_31916__$1 == null);
var state_31934__$1 = (function (){var statearr_31938 = state_31934;
(statearr_31938[(7)] = inst_31916__$1);

return statearr_31938;
})();
if(cljs.core.truth_(inst_31917)){
var statearr_31939_31962 = state_31934__$1;
(statearr_31939_31962[(1)] = (5));

} else {
var statearr_31940_31963 = state_31934__$1;
(statearr_31940_31963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (6))){
var inst_31916 = (state_31934[(7)]);
var inst_31921 = p.call(null,inst_31916);
var state_31934__$1 = state_31934;
if(cljs.core.truth_(inst_31921)){
var statearr_31941_31964 = state_31934__$1;
(statearr_31941_31964[(1)] = (8));

} else {
var statearr_31942_31965 = state_31934__$1;
(statearr_31942_31965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (3))){
var inst_31932 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31934__$1,inst_31932);
} else {
if((state_val_31935 === (2))){
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31934__$1,(4),ch);
} else {
if((state_val_31935 === (11))){
var inst_31924 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31943_31966 = state_31934__$1;
(statearr_31943_31966[(2)] = inst_31924);

(statearr_31943_31966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (9))){
var state_31934__$1 = state_31934;
var statearr_31944_31967 = state_31934__$1;
(statearr_31944_31967[(2)] = null);

(statearr_31944_31967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (5))){
var inst_31919 = cljs.core.async.close_BANG_.call(null,out);
var state_31934__$1 = state_31934;
var statearr_31945_31968 = state_31934__$1;
(statearr_31945_31968[(2)] = inst_31919);

(statearr_31945_31968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (10))){
var inst_31927 = (state_31934[(2)]);
var state_31934__$1 = (function (){var statearr_31946 = state_31934;
(statearr_31946[(8)] = inst_31927);

return statearr_31946;
})();
var statearr_31947_31969 = state_31934__$1;
(statearr_31947_31969[(2)] = null);

(statearr_31947_31969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (8))){
var inst_31916 = (state_31934[(7)]);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31934__$1,(11),out,inst_31916);
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
});})(c__29673__auto___31959,out))
;
return ((function (switch__29559__auto__,c__29673__auto___31959,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_31951 = [null,null,null,null,null,null,null,null,null];
(statearr_31951[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_31951[(1)] = (1));

return statearr_31951;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_31934){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_31934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e31952){if((e31952 instanceof Object)){
var ex__29563__auto__ = e31952;
var statearr_31953_31970 = state_31934;
(statearr_31953_31970[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31971 = state_31934;
state_31934 = G__31971;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_31934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_31934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___31959,out))
})();
var state__29675__auto__ = (function (){var statearr_31954 = f__29674__auto__.call(null);
(statearr_31954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___31959);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___31959,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31972 = [];
var len__27785__auto___31975 = arguments.length;
var i__27786__auto___31976 = (0);
while(true){
if((i__27786__auto___31976 < len__27785__auto___31975)){
args31972.push((arguments[i__27786__auto___31976]));

var G__31977 = (i__27786__auto___31976 + (1));
i__27786__auto___31976 = G__31977;
continue;
} else {
}
break;
}

var G__31974 = args31972.length;
switch (G__31974) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31972.length)].join('')));

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
var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__){
return (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var inst_32140 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32146_32187 = state_32144__$1;
(statearr_32146_32187[(2)] = inst_32140);

(statearr_32146_32187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (20))){
var inst_32110 = (state_32144[(7)]);
var inst_32121 = (state_32144[(2)]);
var inst_32122 = cljs.core.next.call(null,inst_32110);
var inst_32096 = inst_32122;
var inst_32097 = null;
var inst_32098 = (0);
var inst_32099 = (0);
var state_32144__$1 = (function (){var statearr_32147 = state_32144;
(statearr_32147[(8)] = inst_32098);

(statearr_32147[(9)] = inst_32097);

(statearr_32147[(10)] = inst_32121);

(statearr_32147[(11)] = inst_32099);

(statearr_32147[(12)] = inst_32096);

return statearr_32147;
})();
var statearr_32148_32188 = state_32144__$1;
(statearr_32148_32188[(2)] = null);

(statearr_32148_32188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var state_32144__$1 = state_32144;
var statearr_32149_32189 = state_32144__$1;
(statearr_32149_32189[(2)] = null);

(statearr_32149_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32085 = (state_32144[(13)]);
var inst_32085__$1 = (state_32144[(2)]);
var inst_32086 = (inst_32085__$1 == null);
var state_32144__$1 = (function (){var statearr_32150 = state_32144;
(statearr_32150[(13)] = inst_32085__$1);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32086)){
var statearr_32151_32190 = state_32144__$1;
(statearr_32151_32190[(1)] = (5));

} else {
var statearr_32152_32191 = state_32144__$1;
(statearr_32152_32191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (15))){
var state_32144__$1 = state_32144;
var statearr_32156_32192 = state_32144__$1;
(statearr_32156_32192[(2)] = null);

(statearr_32156_32192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (21))){
var state_32144__$1 = state_32144;
var statearr_32157_32193 = state_32144__$1;
(statearr_32157_32193[(2)] = null);

(statearr_32157_32193[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (13))){
var inst_32098 = (state_32144[(8)]);
var inst_32097 = (state_32144[(9)]);
var inst_32099 = (state_32144[(11)]);
var inst_32096 = (state_32144[(12)]);
var inst_32106 = (state_32144[(2)]);
var inst_32107 = (inst_32099 + (1));
var tmp32153 = inst_32098;
var tmp32154 = inst_32097;
var tmp32155 = inst_32096;
var inst_32096__$1 = tmp32155;
var inst_32097__$1 = tmp32154;
var inst_32098__$1 = tmp32153;
var inst_32099__$1 = inst_32107;
var state_32144__$1 = (function (){var statearr_32158 = state_32144;
(statearr_32158[(8)] = inst_32098__$1);

(statearr_32158[(9)] = inst_32097__$1);

(statearr_32158[(14)] = inst_32106);

(statearr_32158[(11)] = inst_32099__$1);

(statearr_32158[(12)] = inst_32096__$1);

return statearr_32158;
})();
var statearr_32159_32194 = state_32144__$1;
(statearr_32159_32194[(2)] = null);

(statearr_32159_32194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (22))){
var state_32144__$1 = state_32144;
var statearr_32160_32195 = state_32144__$1;
(statearr_32160_32195[(2)] = null);

(statearr_32160_32195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var inst_32085 = (state_32144[(13)]);
var inst_32094 = f.call(null,inst_32085);
var inst_32095 = cljs.core.seq.call(null,inst_32094);
var inst_32096 = inst_32095;
var inst_32097 = null;
var inst_32098 = (0);
var inst_32099 = (0);
var state_32144__$1 = (function (){var statearr_32161 = state_32144;
(statearr_32161[(8)] = inst_32098);

(statearr_32161[(9)] = inst_32097);

(statearr_32161[(11)] = inst_32099);

(statearr_32161[(12)] = inst_32096);

return statearr_32161;
})();
var statearr_32162_32196 = state_32144__$1;
(statearr_32162_32196[(2)] = null);

(statearr_32162_32196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (17))){
var inst_32110 = (state_32144[(7)]);
var inst_32114 = cljs.core.chunk_first.call(null,inst_32110);
var inst_32115 = cljs.core.chunk_rest.call(null,inst_32110);
var inst_32116 = cljs.core.count.call(null,inst_32114);
var inst_32096 = inst_32115;
var inst_32097 = inst_32114;
var inst_32098 = inst_32116;
var inst_32099 = (0);
var state_32144__$1 = (function (){var statearr_32163 = state_32144;
(statearr_32163[(8)] = inst_32098);

(statearr_32163[(9)] = inst_32097);

(statearr_32163[(11)] = inst_32099);

(statearr_32163[(12)] = inst_32096);

return statearr_32163;
})();
var statearr_32164_32197 = state_32144__$1;
(statearr_32164_32197[(2)] = null);

(statearr_32164_32197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var inst_32142 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32144__$1,inst_32142);
} else {
if((state_val_32145 === (12))){
var inst_32130 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32165_32198 = state_32144__$1;
(statearr_32165_32198[(2)] = inst_32130);

(statearr_32165_32198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (2))){
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,(4),in$);
} else {
if((state_val_32145 === (23))){
var inst_32138 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32166_32199 = state_32144__$1;
(statearr_32166_32199[(2)] = inst_32138);

(statearr_32166_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (19))){
var inst_32125 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32167_32200 = state_32144__$1;
(statearr_32167_32200[(2)] = inst_32125);

(statearr_32167_32200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (11))){
var inst_32096 = (state_32144[(12)]);
var inst_32110 = (state_32144[(7)]);
var inst_32110__$1 = cljs.core.seq.call(null,inst_32096);
var state_32144__$1 = (function (){var statearr_32168 = state_32144;
(statearr_32168[(7)] = inst_32110__$1);

return statearr_32168;
})();
if(inst_32110__$1){
var statearr_32169_32201 = state_32144__$1;
(statearr_32169_32201[(1)] = (14));

} else {
var statearr_32170_32202 = state_32144__$1;
(statearr_32170_32202[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var inst_32132 = (state_32144[(2)]);
var inst_32133 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32144__$1 = (function (){var statearr_32171 = state_32144;
(statearr_32171[(15)] = inst_32132);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32133)){
var statearr_32172_32203 = state_32144__$1;
(statearr_32172_32203[(1)] = (21));

} else {
var statearr_32173_32204 = state_32144__$1;
(statearr_32173_32204[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (5))){
var inst_32088 = cljs.core.async.close_BANG_.call(null,out);
var state_32144__$1 = state_32144;
var statearr_32174_32205 = state_32144__$1;
(statearr_32174_32205[(2)] = inst_32088);

(statearr_32174_32205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (14))){
var inst_32110 = (state_32144[(7)]);
var inst_32112 = cljs.core.chunked_seq_QMARK_.call(null,inst_32110);
var state_32144__$1 = state_32144;
if(inst_32112){
var statearr_32175_32206 = state_32144__$1;
(statearr_32175_32206[(1)] = (17));

} else {
var statearr_32176_32207 = state_32144__$1;
(statearr_32176_32207[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (16))){
var inst_32128 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32177_32208 = state_32144__$1;
(statearr_32177_32208[(2)] = inst_32128);

(statearr_32177_32208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (10))){
var inst_32097 = (state_32144[(9)]);
var inst_32099 = (state_32144[(11)]);
var inst_32104 = cljs.core._nth.call(null,inst_32097,inst_32099);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32144__$1,(13),out,inst_32104);
} else {
if((state_val_32145 === (18))){
var inst_32110 = (state_32144[(7)]);
var inst_32119 = cljs.core.first.call(null,inst_32110);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32144__$1,(20),out,inst_32119);
} else {
if((state_val_32145 === (8))){
var inst_32098 = (state_32144[(8)]);
var inst_32099 = (state_32144[(11)]);
var inst_32101 = (inst_32099 < inst_32098);
var inst_32102 = inst_32101;
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32102)){
var statearr_32178_32209 = state_32144__$1;
(statearr_32178_32209[(1)] = (10));

} else {
var statearr_32179_32210 = state_32144__$1;
(statearr_32179_32210[(1)] = (11));

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
});})(c__29673__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____0 = (function (){
var statearr_32183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32183[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__);

(statearr_32183[(1)] = (1));

return statearr_32183;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____1 = (function (state_32144){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e32184){if((e32184 instanceof Object)){
var ex__29563__auto__ = e32184;
var statearr_32185_32211 = state_32144;
(statearr_32185_32211[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32212 = state_32144;
state_32144 = G__32212;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__))
})();
var state__29675__auto__ = (function (){var statearr_32186 = f__29674__auto__.call(null);
(statearr_32186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_32186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__))
);

return c__29673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32213 = [];
var len__27785__auto___32216 = arguments.length;
var i__27786__auto___32217 = (0);
while(true){
if((i__27786__auto___32217 < len__27785__auto___32216)){
args32213.push((arguments[i__27786__auto___32217]));

var G__32218 = (i__27786__auto___32217 + (1));
i__27786__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var G__32215 = args32213.length;
switch (G__32215) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32213.length)].join('')));

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
var args32220 = [];
var len__27785__auto___32223 = arguments.length;
var i__27786__auto___32224 = (0);
while(true){
if((i__27786__auto___32224 < len__27785__auto___32223)){
args32220.push((arguments[i__27786__auto___32224]));

var G__32225 = (i__27786__auto___32224 + (1));
i__27786__auto___32224 = G__32225;
continue;
} else {
}
break;
}

var G__32222 = args32220.length;
switch (G__32222) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32220.length)].join('')));

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
var args32227 = [];
var len__27785__auto___32278 = arguments.length;
var i__27786__auto___32279 = (0);
while(true){
if((i__27786__auto___32279 < len__27785__auto___32278)){
args32227.push((arguments[i__27786__auto___32279]));

var G__32280 = (i__27786__auto___32279 + (1));
i__27786__auto___32279 = G__32280;
continue;
} else {
}
break;
}

var G__32229 = args32227.length;
switch (G__32229) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32227.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___32282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___32282,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___32282,out){
return (function (state_32253){
var state_val_32254 = (state_32253[(1)]);
if((state_val_32254 === (7))){
var inst_32248 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32255_32283 = state_32253__$1;
(statearr_32255_32283[(2)] = inst_32248);

(statearr_32255_32283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (1))){
var inst_32230 = null;
var state_32253__$1 = (function (){var statearr_32256 = state_32253;
(statearr_32256[(7)] = inst_32230);

return statearr_32256;
})();
var statearr_32257_32284 = state_32253__$1;
(statearr_32257_32284[(2)] = null);

(statearr_32257_32284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (4))){
var inst_32233 = (state_32253[(8)]);
var inst_32233__$1 = (state_32253[(2)]);
var inst_32234 = (inst_32233__$1 == null);
var inst_32235 = cljs.core.not.call(null,inst_32234);
var state_32253__$1 = (function (){var statearr_32258 = state_32253;
(statearr_32258[(8)] = inst_32233__$1);

return statearr_32258;
})();
if(inst_32235){
var statearr_32259_32285 = state_32253__$1;
(statearr_32259_32285[(1)] = (5));

} else {
var statearr_32260_32286 = state_32253__$1;
(statearr_32260_32286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (6))){
var state_32253__$1 = state_32253;
var statearr_32261_32287 = state_32253__$1;
(statearr_32261_32287[(2)] = null);

(statearr_32261_32287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (3))){
var inst_32250 = (state_32253[(2)]);
var inst_32251 = cljs.core.async.close_BANG_.call(null,out);
var state_32253__$1 = (function (){var statearr_32262 = state_32253;
(statearr_32262[(9)] = inst_32250);

return statearr_32262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32253__$1,inst_32251);
} else {
if((state_val_32254 === (2))){
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32253__$1,(4),ch);
} else {
if((state_val_32254 === (11))){
var inst_32233 = (state_32253[(8)]);
var inst_32242 = (state_32253[(2)]);
var inst_32230 = inst_32233;
var state_32253__$1 = (function (){var statearr_32263 = state_32253;
(statearr_32263[(10)] = inst_32242);

(statearr_32263[(7)] = inst_32230);

return statearr_32263;
})();
var statearr_32264_32288 = state_32253__$1;
(statearr_32264_32288[(2)] = null);

(statearr_32264_32288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (9))){
var inst_32233 = (state_32253[(8)]);
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32253__$1,(11),out,inst_32233);
} else {
if((state_val_32254 === (5))){
var inst_32233 = (state_32253[(8)]);
var inst_32230 = (state_32253[(7)]);
var inst_32237 = cljs.core._EQ_.call(null,inst_32233,inst_32230);
var state_32253__$1 = state_32253;
if(inst_32237){
var statearr_32266_32289 = state_32253__$1;
(statearr_32266_32289[(1)] = (8));

} else {
var statearr_32267_32290 = state_32253__$1;
(statearr_32267_32290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (10))){
var inst_32245 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32268_32291 = state_32253__$1;
(statearr_32268_32291[(2)] = inst_32245);

(statearr_32268_32291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (8))){
var inst_32230 = (state_32253[(7)]);
var tmp32265 = inst_32230;
var inst_32230__$1 = tmp32265;
var state_32253__$1 = (function (){var statearr_32269 = state_32253;
(statearr_32269[(7)] = inst_32230__$1);

return statearr_32269;
})();
var statearr_32270_32292 = state_32253__$1;
(statearr_32270_32292[(2)] = null);

(statearr_32270_32292[(1)] = (2));


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
});})(c__29673__auto___32282,out))
;
return ((function (switch__29559__auto__,c__29673__auto___32282,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_32274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32274[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_32274[(1)] = (1));

return statearr_32274;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_32253){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e32275){if((e32275 instanceof Object)){
var ex__29563__auto__ = e32275;
var statearr_32276_32293 = state_32253;
(statearr_32276_32293[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32294 = state_32253;
state_32253 = G__32294;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_32253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_32253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___32282,out))
})();
var state__29675__auto__ = (function (){var statearr_32277 = f__29674__auto__.call(null);
(statearr_32277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___32282);

return statearr_32277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___32282,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32295 = [];
var len__27785__auto___32365 = arguments.length;
var i__27786__auto___32366 = (0);
while(true){
if((i__27786__auto___32366 < len__27785__auto___32365)){
args32295.push((arguments[i__27786__auto___32366]));

var G__32367 = (i__27786__auto___32366 + (1));
i__27786__auto___32366 = G__32367;
continue;
} else {
}
break;
}

var G__32297 = args32295.length;
switch (G__32297) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32295.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___32369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___32369,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___32369,out){
return (function (state_32335){
var state_val_32336 = (state_32335[(1)]);
if((state_val_32336 === (7))){
var inst_32331 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32337_32370 = state_32335__$1;
(statearr_32337_32370[(2)] = inst_32331);

(statearr_32337_32370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (1))){
var inst_32298 = (new Array(n));
var inst_32299 = inst_32298;
var inst_32300 = (0);
var state_32335__$1 = (function (){var statearr_32338 = state_32335;
(statearr_32338[(7)] = inst_32300);

(statearr_32338[(8)] = inst_32299);

return statearr_32338;
})();
var statearr_32339_32371 = state_32335__$1;
(statearr_32339_32371[(2)] = null);

(statearr_32339_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (4))){
var inst_32303 = (state_32335[(9)]);
var inst_32303__$1 = (state_32335[(2)]);
var inst_32304 = (inst_32303__$1 == null);
var inst_32305 = cljs.core.not.call(null,inst_32304);
var state_32335__$1 = (function (){var statearr_32340 = state_32335;
(statearr_32340[(9)] = inst_32303__$1);

return statearr_32340;
})();
if(inst_32305){
var statearr_32341_32372 = state_32335__$1;
(statearr_32341_32372[(1)] = (5));

} else {
var statearr_32342_32373 = state_32335__$1;
(statearr_32342_32373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (15))){
var inst_32325 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32343_32374 = state_32335__$1;
(statearr_32343_32374[(2)] = inst_32325);

(statearr_32343_32374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (13))){
var state_32335__$1 = state_32335;
var statearr_32344_32375 = state_32335__$1;
(statearr_32344_32375[(2)] = null);

(statearr_32344_32375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (6))){
var inst_32300 = (state_32335[(7)]);
var inst_32321 = (inst_32300 > (0));
var state_32335__$1 = state_32335;
if(cljs.core.truth_(inst_32321)){
var statearr_32345_32376 = state_32335__$1;
(statearr_32345_32376[(1)] = (12));

} else {
var statearr_32346_32377 = state_32335__$1;
(statearr_32346_32377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (3))){
var inst_32333 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32335__$1,inst_32333);
} else {
if((state_val_32336 === (12))){
var inst_32299 = (state_32335[(8)]);
var inst_32323 = cljs.core.vec.call(null,inst_32299);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32335__$1,(15),out,inst_32323);
} else {
if((state_val_32336 === (2))){
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32335__$1,(4),ch);
} else {
if((state_val_32336 === (11))){
var inst_32315 = (state_32335[(2)]);
var inst_32316 = (new Array(n));
var inst_32299 = inst_32316;
var inst_32300 = (0);
var state_32335__$1 = (function (){var statearr_32347 = state_32335;
(statearr_32347[(7)] = inst_32300);

(statearr_32347[(8)] = inst_32299);

(statearr_32347[(10)] = inst_32315);

return statearr_32347;
})();
var statearr_32348_32378 = state_32335__$1;
(statearr_32348_32378[(2)] = null);

(statearr_32348_32378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (9))){
var inst_32299 = (state_32335[(8)]);
var inst_32313 = cljs.core.vec.call(null,inst_32299);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32335__$1,(11),out,inst_32313);
} else {
if((state_val_32336 === (5))){
var inst_32300 = (state_32335[(7)]);
var inst_32299 = (state_32335[(8)]);
var inst_32308 = (state_32335[(11)]);
var inst_32303 = (state_32335[(9)]);
var inst_32307 = (inst_32299[inst_32300] = inst_32303);
var inst_32308__$1 = (inst_32300 + (1));
var inst_32309 = (inst_32308__$1 < n);
var state_32335__$1 = (function (){var statearr_32349 = state_32335;
(statearr_32349[(11)] = inst_32308__$1);

(statearr_32349[(12)] = inst_32307);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32309)){
var statearr_32350_32379 = state_32335__$1;
(statearr_32350_32379[(1)] = (8));

} else {
var statearr_32351_32380 = state_32335__$1;
(statearr_32351_32380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (14))){
var inst_32328 = (state_32335[(2)]);
var inst_32329 = cljs.core.async.close_BANG_.call(null,out);
var state_32335__$1 = (function (){var statearr_32353 = state_32335;
(statearr_32353[(13)] = inst_32328);

return statearr_32353;
})();
var statearr_32354_32381 = state_32335__$1;
(statearr_32354_32381[(2)] = inst_32329);

(statearr_32354_32381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (10))){
var inst_32319 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32355_32382 = state_32335__$1;
(statearr_32355_32382[(2)] = inst_32319);

(statearr_32355_32382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (8))){
var inst_32299 = (state_32335[(8)]);
var inst_32308 = (state_32335[(11)]);
var tmp32352 = inst_32299;
var inst_32299__$1 = tmp32352;
var inst_32300 = inst_32308;
var state_32335__$1 = (function (){var statearr_32356 = state_32335;
(statearr_32356[(7)] = inst_32300);

(statearr_32356[(8)] = inst_32299__$1);

return statearr_32356;
})();
var statearr_32357_32383 = state_32335__$1;
(statearr_32357_32383[(2)] = null);

(statearr_32357_32383[(1)] = (2));


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
});})(c__29673__auto___32369,out))
;
return ((function (switch__29559__auto__,c__29673__auto___32369,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_32361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32361[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_32361[(1)] = (1));

return statearr_32361;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_32335){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e32362){if((e32362 instanceof Object)){
var ex__29563__auto__ = e32362;
var statearr_32363_32384 = state_32335;
(statearr_32363_32384[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_32335;
state_32335 = G__32385;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_32335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_32335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___32369,out))
})();
var state__29675__auto__ = (function (){var statearr_32364 = f__29674__auto__.call(null);
(statearr_32364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___32369);

return statearr_32364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___32369,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32386 = [];
var len__27785__auto___32460 = arguments.length;
var i__27786__auto___32461 = (0);
while(true){
if((i__27786__auto___32461 < len__27785__auto___32460)){
args32386.push((arguments[i__27786__auto___32461]));

var G__32462 = (i__27786__auto___32461 + (1));
i__27786__auto___32461 = G__32462;
continue;
} else {
}
break;
}

var G__32388 = args32386.length;
switch (G__32388) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32386.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29673__auto___32464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___32464,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___32464,out){
return (function (state_32430){
var state_val_32431 = (state_32430[(1)]);
if((state_val_32431 === (7))){
var inst_32426 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32432_32465 = state_32430__$1;
(statearr_32432_32465[(2)] = inst_32426);

(statearr_32432_32465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (1))){
var inst_32389 = [];
var inst_32390 = inst_32389;
var inst_32391 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32430__$1 = (function (){var statearr_32433 = state_32430;
(statearr_32433[(7)] = inst_32391);

(statearr_32433[(8)] = inst_32390);

return statearr_32433;
})();
var statearr_32434_32466 = state_32430__$1;
(statearr_32434_32466[(2)] = null);

(statearr_32434_32466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (4))){
var inst_32394 = (state_32430[(9)]);
var inst_32394__$1 = (state_32430[(2)]);
var inst_32395 = (inst_32394__$1 == null);
var inst_32396 = cljs.core.not.call(null,inst_32395);
var state_32430__$1 = (function (){var statearr_32435 = state_32430;
(statearr_32435[(9)] = inst_32394__$1);

return statearr_32435;
})();
if(inst_32396){
var statearr_32436_32467 = state_32430__$1;
(statearr_32436_32467[(1)] = (5));

} else {
var statearr_32437_32468 = state_32430__$1;
(statearr_32437_32468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (15))){
var inst_32420 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32438_32469 = state_32430__$1;
(statearr_32438_32469[(2)] = inst_32420);

(statearr_32438_32469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (13))){
var state_32430__$1 = state_32430;
var statearr_32439_32470 = state_32430__$1;
(statearr_32439_32470[(2)] = null);

(statearr_32439_32470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (6))){
var inst_32390 = (state_32430[(8)]);
var inst_32415 = inst_32390.length;
var inst_32416 = (inst_32415 > (0));
var state_32430__$1 = state_32430;
if(cljs.core.truth_(inst_32416)){
var statearr_32440_32471 = state_32430__$1;
(statearr_32440_32471[(1)] = (12));

} else {
var statearr_32441_32472 = state_32430__$1;
(statearr_32441_32472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (3))){
var inst_32428 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32430__$1,inst_32428);
} else {
if((state_val_32431 === (12))){
var inst_32390 = (state_32430[(8)]);
var inst_32418 = cljs.core.vec.call(null,inst_32390);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32430__$1,(15),out,inst_32418);
} else {
if((state_val_32431 === (2))){
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32430__$1,(4),ch);
} else {
if((state_val_32431 === (11))){
var inst_32394 = (state_32430[(9)]);
var inst_32398 = (state_32430[(10)]);
var inst_32408 = (state_32430[(2)]);
var inst_32409 = [];
var inst_32410 = inst_32409.push(inst_32394);
var inst_32390 = inst_32409;
var inst_32391 = inst_32398;
var state_32430__$1 = (function (){var statearr_32442 = state_32430;
(statearr_32442[(7)] = inst_32391);

(statearr_32442[(8)] = inst_32390);

(statearr_32442[(11)] = inst_32410);

(statearr_32442[(12)] = inst_32408);

return statearr_32442;
})();
var statearr_32443_32473 = state_32430__$1;
(statearr_32443_32473[(2)] = null);

(statearr_32443_32473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (9))){
var inst_32390 = (state_32430[(8)]);
var inst_32406 = cljs.core.vec.call(null,inst_32390);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32430__$1,(11),out,inst_32406);
} else {
if((state_val_32431 === (5))){
var inst_32394 = (state_32430[(9)]);
var inst_32391 = (state_32430[(7)]);
var inst_32398 = (state_32430[(10)]);
var inst_32398__$1 = f.call(null,inst_32394);
var inst_32399 = cljs.core._EQ_.call(null,inst_32398__$1,inst_32391);
var inst_32400 = cljs.core.keyword_identical_QMARK_.call(null,inst_32391,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32401 = (inst_32399) || (inst_32400);
var state_32430__$1 = (function (){var statearr_32444 = state_32430;
(statearr_32444[(10)] = inst_32398__$1);

return statearr_32444;
})();
if(cljs.core.truth_(inst_32401)){
var statearr_32445_32474 = state_32430__$1;
(statearr_32445_32474[(1)] = (8));

} else {
var statearr_32446_32475 = state_32430__$1;
(statearr_32446_32475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (14))){
var inst_32423 = (state_32430[(2)]);
var inst_32424 = cljs.core.async.close_BANG_.call(null,out);
var state_32430__$1 = (function (){var statearr_32448 = state_32430;
(statearr_32448[(13)] = inst_32423);

return statearr_32448;
})();
var statearr_32449_32476 = state_32430__$1;
(statearr_32449_32476[(2)] = inst_32424);

(statearr_32449_32476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (10))){
var inst_32413 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32450_32477 = state_32430__$1;
(statearr_32450_32477[(2)] = inst_32413);

(statearr_32450_32477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (8))){
var inst_32394 = (state_32430[(9)]);
var inst_32390 = (state_32430[(8)]);
var inst_32398 = (state_32430[(10)]);
var inst_32403 = inst_32390.push(inst_32394);
var tmp32447 = inst_32390;
var inst_32390__$1 = tmp32447;
var inst_32391 = inst_32398;
var state_32430__$1 = (function (){var statearr_32451 = state_32430;
(statearr_32451[(7)] = inst_32391);

(statearr_32451[(8)] = inst_32390__$1);

(statearr_32451[(14)] = inst_32403);

return statearr_32451;
})();
var statearr_32452_32478 = state_32430__$1;
(statearr_32452_32478[(2)] = null);

(statearr_32452_32478[(1)] = (2));


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
});})(c__29673__auto___32464,out))
;
return ((function (switch__29559__auto__,c__29673__auto___32464,out){
return (function() {
var cljs$core$async$state_machine__29560__auto__ = null;
var cljs$core$async$state_machine__29560__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = cljs$core$async$state_machine__29560__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var cljs$core$async$state_machine__29560__auto____1 = (function (state_32430){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e32457){if((e32457 instanceof Object)){
var ex__29563__auto__ = e32457;
var statearr_32458_32479 = state_32430;
(statearr_32458_32479[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32480 = state_32430;
state_32430 = G__32480;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
cljs$core$async$state_machine__29560__auto__ = function(state_32430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29560__auto____1.call(this,state_32430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29560__auto____0;
cljs$core$async$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29560__auto____1;
return cljs$core$async$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___32464,out))
})();
var state__29675__auto__ = (function (){var statearr_32459 = f__29674__auto__.call(null);
(statearr_32459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___32464);

return statearr_32459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___32464,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1495936599716