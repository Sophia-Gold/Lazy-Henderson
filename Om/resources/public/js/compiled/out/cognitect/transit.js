// Compiled by ClojureScript 1.9.198 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12189_12193 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12190_12194 = null;
var count__12191_12195 = (0);
var i__12192_12196 = (0);
while(true){
if((i__12192_12196 < count__12191_12195)){
var k_12197 = cljs.core._nth.call(null,chunk__12190_12194,i__12192_12196);
var v_12198 = (b[k_12197]);
(a[k_12197] = v_12198);

var G__12199 = seq__12189_12193;
var G__12200 = chunk__12190_12194;
var G__12201 = count__12191_12195;
var G__12202 = (i__12192_12196 + (1));
seq__12189_12193 = G__12199;
chunk__12190_12194 = G__12200;
count__12191_12195 = G__12201;
i__12192_12196 = G__12202;
continue;
} else {
var temp__6753__auto___12203 = cljs.core.seq.call(null,seq__12189_12193);
if(temp__6753__auto___12203){
var seq__12189_12204__$1 = temp__6753__auto___12203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12189_12204__$1)){
var c__7841__auto___12205 = cljs.core.chunk_first.call(null,seq__12189_12204__$1);
var G__12206 = cljs.core.chunk_rest.call(null,seq__12189_12204__$1);
var G__12207 = c__7841__auto___12205;
var G__12208 = cljs.core.count.call(null,c__7841__auto___12205);
var G__12209 = (0);
seq__12189_12193 = G__12206;
chunk__12190_12194 = G__12207;
count__12191_12195 = G__12208;
i__12192_12196 = G__12209;
continue;
} else {
var k_12210 = cljs.core.first.call(null,seq__12189_12204__$1);
var v_12211 = (b[k_12210]);
(a[k_12210] = v_12211);

var G__12212 = cljs.core.next.call(null,seq__12189_12204__$1);
var G__12213 = null;
var G__12214 = (0);
var G__12215 = (0);
seq__12189_12193 = G__12212;
chunk__12190_12194 = G__12213;
count__12191_12195 = G__12214;
i__12192_12196 = G__12215;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args12216 = [];
var len__8121__auto___12219 = arguments.length;
var i__8122__auto___12220 = (0);
while(true){
if((i__8122__auto___12220 < len__8121__auto___12219)){
args12216.push((arguments[i__8122__auto___12220]));

var G__12221 = (i__8122__auto___12220 + (1));
i__8122__auto___12220 = G__12221;
continue;
} else {
}
break;
}

var G__12218 = args12216.length;
switch (G__12218) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12216.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12223 = (i + (2));
var G__12224 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12223;
ret = G__12224;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12225_12229 = cljs.core.seq.call(null,v);
var chunk__12226_12230 = null;
var count__12227_12231 = (0);
var i__12228_12232 = (0);
while(true){
if((i__12228_12232 < count__12227_12231)){
var x_12233 = cljs.core._nth.call(null,chunk__12226_12230,i__12228_12232);
ret.push(x_12233);

var G__12234 = seq__12225_12229;
var G__12235 = chunk__12226_12230;
var G__12236 = count__12227_12231;
var G__12237 = (i__12228_12232 + (1));
seq__12225_12229 = G__12234;
chunk__12226_12230 = G__12235;
count__12227_12231 = G__12236;
i__12228_12232 = G__12237;
continue;
} else {
var temp__6753__auto___12238 = cljs.core.seq.call(null,seq__12225_12229);
if(temp__6753__auto___12238){
var seq__12225_12239__$1 = temp__6753__auto___12238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12225_12239__$1)){
var c__7841__auto___12240 = cljs.core.chunk_first.call(null,seq__12225_12239__$1);
var G__12241 = cljs.core.chunk_rest.call(null,seq__12225_12239__$1);
var G__12242 = c__7841__auto___12240;
var G__12243 = cljs.core.count.call(null,c__7841__auto___12240);
var G__12244 = (0);
seq__12225_12229 = G__12241;
chunk__12226_12230 = G__12242;
count__12227_12231 = G__12243;
i__12228_12232 = G__12244;
continue;
} else {
var x_12245 = cljs.core.first.call(null,seq__12225_12239__$1);
ret.push(x_12245);

var G__12246 = cljs.core.next.call(null,seq__12225_12239__$1);
var G__12247 = null;
var G__12248 = (0);
var G__12249 = (0);
seq__12225_12229 = G__12246;
chunk__12226_12230 = G__12247;
count__12227_12231 = G__12248;
i__12228_12232 = G__12249;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12250_12254 = cljs.core.seq.call(null,v);
var chunk__12251_12255 = null;
var count__12252_12256 = (0);
var i__12253_12257 = (0);
while(true){
if((i__12253_12257 < count__12252_12256)){
var x_12258 = cljs.core._nth.call(null,chunk__12251_12255,i__12253_12257);
ret.push(x_12258);

var G__12259 = seq__12250_12254;
var G__12260 = chunk__12251_12255;
var G__12261 = count__12252_12256;
var G__12262 = (i__12253_12257 + (1));
seq__12250_12254 = G__12259;
chunk__12251_12255 = G__12260;
count__12252_12256 = G__12261;
i__12253_12257 = G__12262;
continue;
} else {
var temp__6753__auto___12263 = cljs.core.seq.call(null,seq__12250_12254);
if(temp__6753__auto___12263){
var seq__12250_12264__$1 = temp__6753__auto___12263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12250_12264__$1)){
var c__7841__auto___12265 = cljs.core.chunk_first.call(null,seq__12250_12264__$1);
var G__12266 = cljs.core.chunk_rest.call(null,seq__12250_12264__$1);
var G__12267 = c__7841__auto___12265;
var G__12268 = cljs.core.count.call(null,c__7841__auto___12265);
var G__12269 = (0);
seq__12250_12254 = G__12266;
chunk__12251_12255 = G__12267;
count__12252_12256 = G__12268;
i__12253_12257 = G__12269;
continue;
} else {
var x_12270 = cljs.core.first.call(null,seq__12250_12264__$1);
ret.push(x_12270);

var G__12271 = cljs.core.next.call(null,seq__12250_12264__$1);
var G__12272 = null;
var G__12273 = (0);
var G__12274 = (0);
seq__12250_12254 = G__12271;
chunk__12251_12255 = G__12272;
count__12252_12256 = G__12273;
i__12253_12257 = G__12274;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12275_12279 = cljs.core.seq.call(null,v);
var chunk__12276_12280 = null;
var count__12277_12281 = (0);
var i__12278_12282 = (0);
while(true){
if((i__12278_12282 < count__12277_12281)){
var x_12283 = cljs.core._nth.call(null,chunk__12276_12280,i__12278_12282);
ret.push(x_12283);

var G__12284 = seq__12275_12279;
var G__12285 = chunk__12276_12280;
var G__12286 = count__12277_12281;
var G__12287 = (i__12278_12282 + (1));
seq__12275_12279 = G__12284;
chunk__12276_12280 = G__12285;
count__12277_12281 = G__12286;
i__12278_12282 = G__12287;
continue;
} else {
var temp__6753__auto___12288 = cljs.core.seq.call(null,seq__12275_12279);
if(temp__6753__auto___12288){
var seq__12275_12289__$1 = temp__6753__auto___12288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12275_12289__$1)){
var c__7841__auto___12290 = cljs.core.chunk_first.call(null,seq__12275_12289__$1);
var G__12291 = cljs.core.chunk_rest.call(null,seq__12275_12289__$1);
var G__12292 = c__7841__auto___12290;
var G__12293 = cljs.core.count.call(null,c__7841__auto___12290);
var G__12294 = (0);
seq__12275_12279 = G__12291;
chunk__12276_12280 = G__12292;
count__12277_12281 = G__12293;
i__12278_12282 = G__12294;
continue;
} else {
var x_12295 = cljs.core.first.call(null,seq__12275_12289__$1);
ret.push(x_12295);

var G__12296 = cljs.core.next.call(null,seq__12275_12289__$1);
var G__12297 = null;
var G__12298 = (0);
var G__12299 = (0);
seq__12275_12279 = G__12296;
chunk__12276_12280 = G__12297;
count__12277_12281 = G__12298;
i__12278_12282 = G__12299;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args12300 = [];
var len__8121__auto___12315 = arguments.length;
var i__8122__auto___12316 = (0);
while(true){
if((i__8122__auto___12316 < len__8121__auto___12315)){
args12300.push((arguments[i__8122__auto___12316]));

var G__12317 = (i__8122__auto___12316 + (1));
i__8122__auto___12316 = G__12317;
continue;
} else {
}
break;
}

var G__12302 = args12300.length;
switch (G__12302) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12300.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12303 = obj;
G__12303.push(kfn.call(null,k),vfn.call(null,v));

return G__12303;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12304 = cljs.core.clone.call(null,handlers);
x12304.forEach = ((function (x12304,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12305 = cljs.core.seq.call(null,coll);
var chunk__12306 = null;
var count__12307 = (0);
var i__12308 = (0);
while(true){
if((i__12308 < count__12307)){
var vec__12309 = cljs.core._nth.call(null,chunk__12306,i__12308);
var k = cljs.core.nth.call(null,vec__12309,(0),null);
var v = cljs.core.nth.call(null,vec__12309,(1),null);
f.call(null,v,k);

var G__12319 = seq__12305;
var G__12320 = chunk__12306;
var G__12321 = count__12307;
var G__12322 = (i__12308 + (1));
seq__12305 = G__12319;
chunk__12306 = G__12320;
count__12307 = G__12321;
i__12308 = G__12322;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__12305);
if(temp__6753__auto__){
var seq__12305__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305__$1)){
var c__7841__auto__ = cljs.core.chunk_first.call(null,seq__12305__$1);
var G__12323 = cljs.core.chunk_rest.call(null,seq__12305__$1);
var G__12324 = c__7841__auto__;
var G__12325 = cljs.core.count.call(null,c__7841__auto__);
var G__12326 = (0);
seq__12305 = G__12323;
chunk__12306 = G__12324;
count__12307 = G__12325;
i__12308 = G__12326;
continue;
} else {
var vec__12312 = cljs.core.first.call(null,seq__12305__$1);
var k = cljs.core.nth.call(null,vec__12312,(0),null);
var v = cljs.core.nth.call(null,vec__12312,(1),null);
f.call(null,v,k);

var G__12327 = cljs.core.next.call(null,seq__12305__$1);
var G__12328 = null;
var G__12329 = (0);
var G__12330 = (0);
seq__12305 = G__12327;
chunk__12306 = G__12328;
count__12307 = G__12329;
i__12308 = G__12330;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12304,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12304;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args12331 = [];
var len__8121__auto___12337 = arguments.length;
var i__8122__auto___12338 = (0);
while(true){
if((i__8122__auto___12338 < len__8121__auto___12337)){
args12331.push((arguments[i__8122__auto___12338]));

var G__12339 = (i__8122__auto___12338 + (1));
i__8122__auto___12338 = G__12339;
continue;
} else {
}
break;
}

var G__12333 = args12331.length;
switch (G__12333) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12331.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12334 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12335){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12335 = meta12335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12336,meta12335__$1){
var self__ = this;
var _12336__$1 = this;
return (new cognitect.transit.t_cognitect$transit12334(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12335__$1));
});

cognitect.transit.t_cognitect$transit12334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12336){
var self__ = this;
var _12336__$1 = this;
return self__.meta12335;
});

cognitect.transit.t_cognitect$transit12334.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12334.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12334.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12334.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12335","meta12335",-1475813667,null)], null);
});

cognitect.transit.t_cognitect$transit12334.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12334.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12334";

cognitect.transit.t_cognitect$transit12334.cljs$lang$ctorPrWriter = (function (this__7590__auto__,writer__7591__auto__,opt__7592__auto__){
return cljs.core._write.call(null,writer__7591__auto__,"cognitect.transit/t_cognitect$transit12334");
});

cognitect.transit.__GT_t_cognitect$transit12334 = (function cognitect$transit$__GT_t_cognitect$transit12334(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12335){
return (new cognitect.transit.t_cognitect$transit12334(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12335));
});

}

return (new cognitect.transit.t_cognitect$transit12334(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6938__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1492673020728