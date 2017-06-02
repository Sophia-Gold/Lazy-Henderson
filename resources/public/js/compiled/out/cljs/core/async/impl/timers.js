// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var args29618 = [];
var len__27785__auto___29621 = arguments.length;
var i__27786__auto___29622 = (0);
while(true){
if((i__27786__auto___29622 < len__27785__auto___29621)){
args29618.push((arguments[i__27786__auto___29622]));

var G__29623 = (i__27786__auto___29622 + (1));
i__27786__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var G__29620 = args29618.length;
switch (G__29620) {
case 0:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29618.length)].join('')));

}
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL))){
var G__29625 = (level + (1));
level = G__29625;
continue;
} else {
return level;
}
break;
}
});

cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = 1;


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var x__27528__auto__ = self__.key;
return cljs.core._conj.call(null,(function (){var x__27528__auto____$1 = self__.val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto____$1);
})(),x__27528__auto__);
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"forward","forward",1083186224,null)], null);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var args29626 = [];
var len__27785__auto___29629 = arguments.length;
var i__27786__auto___29630 = (0);
while(true){
if((i__27786__auto___29630 < len__27785__auto___29629)){
args29626.push((arguments[i__27786__auto___29630]));

var G__29631 = (i__27786__auto___29630 + (1));
i__27786__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var G__29628 = args29626.length;
switch (G__29628) {
case 1:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29626.length)].join('')));

}
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_29633 = (0);
while(true){
if((i_29633 < arr.length)){
(arr[i_29633] = null);

var G__29634 = (i_29633 + (1));
i_29633 = G__29634;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});

cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = 3;

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var args29635 = [];
var len__27785__auto___29638 = arguments.length;
var i__27786__auto___29639 = (0);
while(true){
if((i__27786__auto___29639 < len__27785__auto___29638)){
args29635.push((arguments[i__27786__auto___29639]));

var G__29640 = (i__27786__auto___29639 + (1));
i__27786__auto___29639 = G__29640;
continue;
} else {
}
break;
}

var G__29637 = args29635.length;
switch (G__29637) {
case 3:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29635.length)].join('')));

}
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__6751__auto__ = (x__$1.forward[level]);
if(cljs.core.truth_(temp__6751__auto__)){
var x_SINGLEQUOTE_ = temp__6751__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__29642 = x_SINGLEQUOTE_;
x__$1 = G__29642;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__29643 = x__$1;
var G__29644 = k;
var G__29645 = (level - (1));
var G__29646 = update;
x = G__29643;
k = G__29644;
level = G__29645;
update = G__29646;
continue;
} else {
return x;
}
break;
}
});

cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
var i_29647 = (self__.level + (1));
while(true){
if((i_29647 <= (new_level + (1)))){
(update[i_29647] = self__.header);

var G__29648 = (i_29647 + (1));
i_29647 = G__29648;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
var i_29649 = (0);
while(true){
if((i_29649 <= self__.level)){
var links_29650 = (update[i_29649]).forward;
if(((links_29650[i_29649]) === x__$1)){
(links_29650[i_29649] = (x__$1.forward[i_29649]));

var G__29651 = (i_29649 + (1));
i_29649 = G__29651;
continue;
} else {
var G__29652 = (i_29649 + (1));
i_29649 = G__29652;
continue;
}
} else {
}
break;
}

while(true){
if(((self__.level > (0))) && (((self__.header.forward[self__.level]) == null))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__29653 = x_SINGLEQUOTE_;
x__$1 = G__29653;
continue;
}
}
break;
}
})();
if(!((nx == null))){
var G__29654 = nx;
var G__29655 = (level__$1 - (1));
x = G__29654;
level__$1 = G__29655;
continue;
} else {
var G__29656 = x;
var G__29657 = (level__$1 - (1));
x = G__29656;
level__$1 = G__29657;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__29658 = x_SINGLEQUOTE_;
x__$1 = G__29658;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__29659 = nx;
var G__29660 = (level__$1 - (1));
x = G__29659;
level__$1 = G__29660;
continue;
} else {
var G__29661 = x;
var G__29662 = (level__$1 - (1));
x = G__29661;
level__$1 = G__29662;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"cljs.core.async.impl.timers/SkipList");
});

cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout__$1 = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);
var or__26602__auto__ = (cljs.core.truth_((function (){var and__26590__auto__ = me;
if(cljs.core.truth_(and__26590__auto__)){
return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__26590__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__26602__auto__,timeout__$1,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__26602__auto__,timeout__$1,me))
,msecs);

return timeout_channel;
}
});

//# sourceMappingURL=timers.js.map?rel=1496386683698