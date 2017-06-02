// Compiled by ClojureScript 1.9.198 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__42797 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__42797,(0),null);
var vec__42800 = cljs.core.nth.call(null,vec__42797,(1),null);
var seq__42801 = cljs.core.seq.call(null,vec__42800);
var first__42802 = cljs.core.first.call(null,seq__42801);
var seq__42801__$1 = cljs.core.next.call(null,seq__42801);
var _ = first__42802;
var first__42802__$1 = cljs.core.first.call(null,seq__42801__$1);
var seq__42801__$2 = cljs.core.next.call(null,seq__42801__$1);
var sym = first__42802__$1;
var remaining = seq__42801__$2;
var post = vec__42800;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__42803 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__42803,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__42803,(1),null);
var G__42809 = cljs.core.seq.call(null,dt__$2);
var G__42810 = dt_SINGLEQUOTE___$1;
var G__42811 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__42809;
dt_SINGLEQUOTE_ = G__42810;
statics = G__42811;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__42806 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__42806,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__42806,(1),null);
var G__42812 = cljs.core.seq.call(null,dt__$2);
var G__42813 = dt_SINGLEQUOTE___$1;
var G__42814 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__42812;
dt_SINGLEQUOTE_ = G__42813;
statics = G__42814;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__42815 = null;
var G__42816 = dt_SINGLEQUOTE___$1;
var G__42817 = statics;
dt__$1 = G__42815;
dt_SINGLEQUOTE_ = G__42816;
statics = G__42817;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6753__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__42818_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(p1__42818_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6753__auto__)){
var invalid = temp__6753__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__42819){
var vec__42823 = p__42819;
var name = cljs.core.nth.call(null,vec__42823,(0),null);
var sig = cljs.core.nth.call(null,vec__42823,(1),null);
var method = vec__42823;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__42869){
var vec__42870 = p__42869;
var seq__42871 = cljs.core.seq.call(null,vec__42870);
var first__42872 = cljs.core.first.call(null,seq__42871);
var seq__42871__$1 = cljs.core.next.call(null,seq__42871);
var name = first__42872;
var first__42872__$1 = cljs.core.first.call(null,seq__42871__$1);
var seq__42871__$2 = cljs.core.next.call(null,seq__42871__$1);
var vec__42873 = first__42872__$1;
var this$ = cljs.core.nth.call(null,vec__42873,(0),null);
var args = vec__42873;
var body = seq__42871__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42833__auto__","ret__42833__auto__",113224821,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42833__auto__","ret__42833__auto__",113224821,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__42876){
var vec__42877 = p__42876;
var seq__42878 = cljs.core.seq.call(null,vec__42877);
var first__42879 = cljs.core.first.call(null,seq__42878);
var seq__42878__$1 = cljs.core.next.call(null,seq__42878);
var name = first__42879;
var first__42879__$1 = cljs.core.first.call(null,seq__42878__$1);
var seq__42878__$2 = cljs.core.next.call(null,seq__42878__$1);
var vec__42880 = first__42879__$1;
var this$ = cljs.core.nth.call(null,vec__42880,(0),null);
var next_props = cljs.core.nth.call(null,vec__42880,(1),null);
var args = vec__42880;
var body = seq__42878__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42834__auto__","this__42834__auto__",-884055172,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42835__auto__","next-props__42835__auto__",2002965298,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42834__auto__","this__42834__auto__",-884055172,null)),(function (){var x__27528__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42835__auto__","next-props__42835__auto__",2002965298,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42834__auto__","this__42834__auto__",-884055172,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__42883){
var vec__42884 = p__42883;
var seq__42885 = cljs.core.seq.call(null,vec__42884);
var first__42886 = cljs.core.first.call(null,seq__42885);
var seq__42885__$1 = cljs.core.next.call(null,seq__42885);
var name = first__42886;
var first__42886__$1 = cljs.core.first.call(null,seq__42885__$1);
var seq__42885__$2 = cljs.core.next.call(null,seq__42885__$1);
var vec__42887 = first__42886__$1;
var this$ = cljs.core.nth.call(null,vec__42887,(0),null);
var next_props = cljs.core.nth.call(null,vec__42887,(1),null);
var next_state = cljs.core.nth.call(null,vec__42887,(2),null);
var args = vec__42887;
var body = seq__42885__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42837__auto__","next-props__42837__auto__",959738496,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42838__auto__","next-state__42838__auto__",-1441290332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)),(function (){var x__27528__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42837__auto__","next-props__42837__auto__",959738496,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42838__auto__","next-state__42838__auto__",-1441290332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42838__auto__","next-state__42838__auto__",-1441290332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42839__auto__","ret__42839__auto__",-1175475379,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42840__auto__","ident__42840__auto__",-1945408270,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42841__auto__","next-ident__42841__auto__",1835053512,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)),(function (){var x__27528__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42840__auto__","ident__42840__auto__",-1945408270,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42841__auto__","next-ident__42841__auto__",1835053512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42842__auto__","idxr__42842__auto__",-1462550587,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42842__auto__","idxr__42842__auto__",-1462550587,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42842__auto__","idxr__42842__auto__",-1462550587,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__42843__auto__","indexes__42843__auto__",-1509573373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__42843__auto__","indexes__42843__auto__",-1509573373,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42840__auto__","ident__42840__auto__",-1945408270,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42841__auto__","next-ident__42841__auto__",1835053512,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__27528__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42836__auto__","this__42836__auto__",-1953954195,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__42839__auto__","ret__42839__auto__",-1175475379,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__42890){
var vec__42891 = p__42890;
var seq__42892 = cljs.core.seq.call(null,vec__42891);
var first__42893 = cljs.core.first.call(null,seq__42892);
var seq__42892__$1 = cljs.core.next.call(null,seq__42892);
var name = first__42893;
var first__42893__$1 = cljs.core.first.call(null,seq__42892__$1);
var seq__42892__$2 = cljs.core.next.call(null,seq__42892__$1);
var vec__42894 = first__42893__$1;
var this$ = cljs.core.nth.call(null,vec__42894,(0),null);
var prev_props = cljs.core.nth.call(null,vec__42894,(1),null);
var prev_state = cljs.core.nth.call(null,vec__42894,(2),null);
var args = vec__42894;
var body = seq__42892__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42844__auto__","this__42844__auto__",338967484,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__42845__auto__","prev-props__42845__auto__",1438491238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__42846__auto__","prev-state__42846__auto__",1848604664,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42844__auto__","this__42844__auto__",338967484,null)),(function (){var x__27528__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__42845__auto__","prev-props__42845__auto__",1438491238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42844__auto__","this__42844__auto__",338967484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__42846__auto__","prev-state__42846__auto__",1848604664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),body,(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42844__auto__","this__42844__auto__",338967484,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__42897){
var vec__42898 = p__42897;
var seq__42899 = cljs.core.seq.call(null,vec__42898);
var first__42900 = cljs.core.first.call(null,seq__42899);
var seq__42899__$1 = cljs.core.next.call(null,seq__42899);
var name = first__42900;
var first__42900__$1 = cljs.core.first.call(null,seq__42899__$1);
var seq__42899__$2 = cljs.core.next.call(null,seq__42899__$1);
var vec__42901 = first__42900__$1;
var this$ = cljs.core.nth.call(null,vec__42901,(0),null);
var args = vec__42901;
var body = seq__42899__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42847__auto__","this__42847__auto__",-726421837,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42847__auto__","this__42847__auto__",-726421837,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42848__auto__","indexer__42848__auto__",-1589236219,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42847__auto__","this__42847__auto__",-726421837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42848__auto__","indexer__42848__auto__",-1589236219,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42848__auto__","indexer__42848__auto__",-1589236219,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42847__auto__","this__42847__auto__",-726421837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__42904){
var vec__42905 = p__42904;
var seq__42906 = cljs.core.seq.call(null,vec__42905);
var first__42907 = cljs.core.first.call(null,seq__42906);
var seq__42906__$1 = cljs.core.next.call(null,seq__42906);
var name = first__42907;
var first__42907__$1 = cljs.core.first.call(null,seq__42906__$1);
var seq__42906__$2 = cljs.core.next.call(null,seq__42906__$1);
var vec__42908 = first__42907__$1;
var this$ = cljs.core.nth.call(null,vec__42908,(0),null);
var args = vec__42908;
var body = seq__42906__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__42850__auto__","r__42850__auto__",507026689,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42851__auto__","cfg__42851__auto__",620277398,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__42850__auto__","r__42850__auto__",507026689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42852__auto__","st__42852__auto__",-1933900809,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42851__auto__","cfg__42851__auto__",620277398,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42853__auto__","indexer__42853__auto__",1433986170,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42851__auto__","cfg__42851__auto__",620277398,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42852__auto__","st__42852__auto__",-1933900809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42852__auto__","st__42852__auto__",-1933900809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42852__auto__","st__42852__auto__",-1933900809,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42853__auto__","indexer__42853__auto__",1433986170,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42853__auto__","indexer__42853__auto__",1433986170,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42849__auto__","this__42849__auto__",180543689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__42911){
var vec__42912 = p__42911;
var seq__42913 = cljs.core.seq.call(null,vec__42912);
var first__42914 = cljs.core.first.call(null,seq__42913);
var seq__42913__$1 = cljs.core.next.call(null,seq__42913);
var name = first__42914;
var first__42914__$1 = cljs.core.first.call(null,seq__42913__$1);
var seq__42913__$2 = cljs.core.next.call(null,seq__42913__$1);
var vec__42915 = first__42914__$1;
var this$ = cljs.core.nth.call(null,vec__42915,(0),null);
var args = vec__42915;
var body = seq__42913__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42854__auto__","this__42854__auto__",210587419,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42857__auto__","next-state__42857__auto__",-434208702,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__42858__auto__","next-children__42858__auto__",1537496421,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42857__auto__","next-state__42857__auto__",-434208702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__42858__auto__","next-children__42858__auto__",1537496421,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__42857__auto__","next-state__42857__auto__",-434208702,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42859__auto__","ident__42859__auto__",1499698700,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42860__auto__","next-ident__42860__auto__",594307623,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__42856__auto__","next-props__42856__auto__",2109934723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42859__auto__","ident__42859__auto__",1499698700,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42860__auto__","next-ident__42860__auto__",594307623,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42861__auto__","idxr__42861__auto__",-340063408,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42861__auto__","idxr__42861__auto__",-340063408,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__42861__auto__","idxr__42861__auto__",-340063408,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__42862__auto__","indexes__42862__auto__",-714549940,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__42862__auto__","indexes__42862__auto__",-714549940,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__42859__auto__","ident__42859__auto__",1499698700,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__42860__auto__","next-ident__42860__auto__",594307623,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__27528__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__42863__auto__","prev-props__42863__auto__",-551033802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__42864__auto__","prev-state__42864__auto__",-203572036,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__42866__auto__","r__42866__auto__",1415104824,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42867__auto__","cfg__42867__auto__",1561673211,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__42866__auto__","r__42866__auto__",1415104824,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42868__auto__","st__42868__auto__",1001841997,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42867__auto__","cfg__42867__auto__",1561673211,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__42867__auto__","cfg__42867__auto__",1561673211,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42868__auto__","st__42868__auto__",1001841997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42868__auto__","st__42868__auto__",1001841997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__42868__auto__","st__42868__auto__",1001841997,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__42865__auto__","indexer__42865__auto__",-1222002422,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__42855__auto__","this__42855__auto__",470514689,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__42918){
var map__42959 = p__42918;
var map__42959__$1 = ((((!((map__42959 == null)))?((((map__42959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42959):map__42959);
var reshape__$1 = cljs.core.get.call(null,map__42959__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__42959__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__42959,map__42959__$1,reshape__$1,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape__$1,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape__$1,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__42959,map__42959__$1,reshape__$1,defaults))
;
var add_defaults_step = ((function (map__42959,map__42959__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__42980){
var vec__42990 = p__42980;
var name = cljs.core.nth.call(null,vec__42990,(0),null);
var impl = cljs.core.nth.call(null,vec__42990,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__42993 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__42993,(0),null);
var vec__42996 = cljs.core.nth.call(null,vec__42993,(1),null);
var seq__42997 = cljs.core.seq.call(null,vec__42996);
var first__42998 = cljs.core.first.call(null,seq__42997);
var seq__42997__$1 = cljs.core.next.call(null,seq__42997);
var p = first__42998;
var after = seq__42997__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__42959,map__42959__$1,reshape__$1,defaults))
;
var add_defaults = ((function (map__42959,map__42959__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__42959,map__42959__$1,reshape__$1,defaults))
;
var add_object_protocol = ((function (map__42959,map__42959__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__42959,map__42959__$1,reshape__$1,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args43011 = [];
var len__27785__auto___43033 = arguments.length;
var i__27786__auto___43034 = (0);
while(true){
if((i__27786__auto___43034 < len__27785__auto___43033)){
args43011.push((arguments[i__27786__auto___43034]));

var G__43035 = (i__27786__auto___43034 + (1));
i__27786__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var G__43013 = args43011.length;
switch (G__43013) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43011.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__43021){
var vec__43025 = p__43021;
var field = cljs.core.nth.call(null,vec__43025,(0),null);
var value = cljs.core.nth.call(null,vec__43025,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__27528__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__43029 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__43029);
} else {
return G__43029;
}
})();
var map__43028 = om.next.collect_statics.call(null,forms__$1);
var map__43028__$1 = ((((!((map__43028 == null)))?((((map__43028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43028):map__43028);
var dt = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__27528__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43005__auto__","this__43005__auto__",1838219055,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__27528__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__27528__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__43028,map__43028__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__43006_SHARP_){
return field_set_BANG_.call(null,name,p1__43006_SHARP_);
});})(docstring,forms__$1,map__43028,map__43028__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__43028,map__43028__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__43007_SHARP_){
var G__43032 = p1__43007_SHARP_;
if((p1__43007_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__43032,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__43032;
}
});})(docstring,forms__$1,map__43028,map__43028__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__27528__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__27528__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__27528__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__27528__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43008__auto__","this__43008__auto__",692219521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43009__auto__","writer__43009__auto__",1515092907,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__43010__auto__","opt__43010__auto__",1292541098,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43009__auto__","writer__43009__auto__",1515092907,null)),(function (){var x__27528__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__27792__auto__ = [];
var len__27785__auto___43041 = arguments.length;
var i__27786__auto___43042 = (0);
while(true){
if((i__27786__auto___43042 < len__27785__auto___43041)){
args__27792__auto__.push((arguments[i__27786__auto___43042]));

var G__43043 = (i__27786__auto___43042 + (1));
i__27786__auto___43042 = G__43043;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((3) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27793__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq43037){
var G__43038 = cljs.core.first.call(null,seq43037);
var seq43037__$1 = cljs.core.next.call(null,seq43037);
var G__43039 = cljs.core.first.call(null,seq43037__$1);
var seq43037__$2 = cljs.core.next.call(null,seq43037__$1);
var G__43040 = cljs.core.first.call(null,seq43037__$2);
var seq43037__$3 = cljs.core.next.call(null,seq43037__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__43038,G__43039,G__43040,seq43037__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__27792__auto__ = [];
var len__27785__auto___43047 = arguments.length;
var i__27786__auto___43048 = (0);
while(true){
if((i__27786__auto___43048 < len__27785__auto___43047)){
args__27792__auto__.push((arguments[i__27786__auto___43048]));

var G__43049 = (i__27786__auto___43048 + (1));
i__27786__auto___43048 = G__43049;
continue;
} else {
}
break;
}

var argseq__27793__auto__ = ((((2) < args__27792__auto__.length))?(new cljs.core.IndexedSeq(args__27792__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27793__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__27528__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq43044){
var G__43045 = cljs.core.first.call(null,seq43044);
var seq43044__$1 = cljs.core.next.call(null,seq43044);
var G__43046 = cljs.core.first.call(null,seq43044__$1);
var seq43044__$2 = cljs.core.next.call(null,seq43044__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__43045,G__43046,seq43044__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__43052 = fn_scope;
var G__43052__$1 = (((G__43052 == null))?null:cljs.core.first.call(null,G__43052));
var G__43052__$2 = (((G__43052__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__43052__$1));
if((G__43052__$2 == null)){
return null;
} else {
return [cljs.core.str(G__43052__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27528__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43050__auto__","l__43050__auto__",1394256626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__43050__auto__","l__43050__auto__",1394256626,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__27528__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),(function (){var x__27528__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__27528__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__27528__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})())));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__43054 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__43054);
} else {
return G__43054;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__43055_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__43055_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__43055_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__43055_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__43056 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__43056;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__43089 = clojure.zip.down.call(null,loc);
var G__43090 = path__$1;
loc = G__43089;
path__$1 = G__43090;
continue;
} else {
var vec__43085 = path__$1;
var seq__43086 = cljs.core.seq.call(null,vec__43085);
var first__43087 = cljs.core.first.call(null,seq__43086);
var seq__43086__$1 = cljs.core.next.call(null,seq__43086);
var k = first__43087;
var ks = seq__43086__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__43088 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__43088);
} else {
return G__43088;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__43091 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__43092 = cljs.core.next.call(null,ks);
loc = G__43091;
path__$1 = G__43092;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__43093 = loc_SINGLEQUOTE_;
var G__43094 = ks;
loc = G__43093;
path__$1 = G__43094;
continue;
}
} else {
var G__43095 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__43096 = ks;
loc = G__43095;
path__$1 = G__43096;
continue;
}
} else {
var G__43097 = clojure.zip.right.call(null,loc);
var G__43098 = path__$1;
loc = G__43097;
path__$1 = G__43098;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__27528__auto__ = om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__27528__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto____$1);
})(),x__27528__auto__);
})():expr
));
var G__43100 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_.call(null,expr_meta)){
return cljs.core.with_meta.call(null,G__43100,expr_meta);
} else {
return G__43100;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__43104 = path;
var seq__43105 = cljs.core.seq.call(null,vec__43104);
var first__43106 = cljs.core.first.call(null,seq__43105);
var seq__43105__$1 = cljs.core.next.call(null,seq__43105);
var k = first__43106;
var ks = seq__43105__$1;
var match = ((function (vec__43104,seq__43105,first__43106,seq__43105__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__43104,seq__43105,first__43106,seq__43105__$1,k,ks))
;
var value = ((function (vec__43104,seq__43105,first__43106,seq__43105__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__43104,seq__43105,first__43106,seq__43105__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args43107 = [];
var len__27785__auto___43113 = arguments.length;
var i__27786__auto___43114 = (0);
while(true){
if((i__27786__auto___43114 < len__27785__auto___43113)){
args43107.push((arguments[i__27786__auto___43114]));

var G__43115 = (i__27786__auto___43114 + (1));
i__27786__auto___43114 = G__43115;
continue;
} else {
}
break;
}

var G__43109 = args43107.length;
switch (G__43109) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43107.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__26590__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__26590__auto__){
var and__26590__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__26590__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})())){
var vec__43110 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__43110,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43110,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__43117 = focus_SINGLEQUOTE___$1;
var G__43118 = bound;
var G__43119 = cljs.core.conj.call(null,path,k);
focus = G__43117;
bound = G__43118;
path = G__43119;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next.ident[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$,props);
} else {
var m__27316__auto____$1 = (om.next.ident["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next.params[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$);
} else {
var m__27316__auto____$1 = (om.next.params["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next.query[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$);
} else {
var m__27316__auto____$1 = (om.next.query["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$,new_state);
} else {
var m__27316__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next._get_state[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$);
} else {
var m__27316__auto____$1 = (om.next._get_state["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next._get_rendered_state[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$);
} else {
var m__27316__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__27315__auto__ = (((this$ == null))?null:this$);
var m__27316__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,this$);
} else {
var m__27316__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__26590__auto__ = (x instanceof cljs.core.Symbol);
if(and__26590__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__26590__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__43120_SHARP_){
return om$next$bind_query.call(null,p1__43120_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__43123 = ret;
if(cljs.core.truth_((function (){var and__26590__auto__ = qm;
if(cljs.core.truth_(and__26590__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__26590__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__43123,qm);
} else {
return G__43123;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__43126 = om.next.get_reconciler.call(null,component);
var G__43126__$1 = (((G__43126 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__43126));
var G__43126__$2 = (((G__43126__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__43126__$1));
var G__43126__$3 = (((G__43126__$2 == null))?null:cljs.core.deref.call(null,G__43126__$2));
var G__43126__$4 = (((G__43126__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__43126__$3));
if((G__43126__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__43126__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args43127 = [];
var len__27785__auto___43130 = arguments.length;
var i__27786__auto___43131 = (0);
while(true){
if((i__27786__auto___43131 < len__27785__auto___43130)){
args43127.push((arguments[i__27786__auto___43131]));

var G__43132 = (i__27786__auto___43131 + (1));
i__27786__auto___43131 = G__43132;
continue;
} else {
}
break;
}

var G__43129 = args43127.length;
switch (G__43129) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43127.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__43136_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__43136_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__43137 = component;
var G__43138 = class_path_query_data;
var G__43139 = cljs.core.pop.call(null,data_path);
component = G__43137;
class_path_query_data = G__43138;
data_path = G__43139;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__6751__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var query_data = temp__6751__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__27254__auto__,writer__27255__auto__,opt__27256__auto__){
return cljs.core._write.call(null,writer__27255__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6751__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6751__auto__)){
var rk = temp__6751__auto__;
return rk;
} else {
var temp__6751__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args43142 = [];
var len__27785__auto___43150 = arguments.length;
var i__27786__auto___43151 = (0);
while(true){
if((i__27786__auto___43151 < len__27785__auto___43150)){
args43142.push((arguments[i__27786__auto___43151]));

var G__43152 = (i__27786__auto___43151 + (1));
i__27786__auto___43151 = G__43152;
continue;
} else {
}
break;
}

var G__43144 = args43142.length;
switch (G__43144) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43142.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__43145){
var map__43146 = p__43145;
var map__43146__$1 = ((((!((map__43146 == null)))?((((map__43146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43146):map__43146);
var opts = map__43146__$1;
var validator = cljs.core.get.call(null,map__43146__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__43146__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__43146__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__43146,map__43146__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__26590__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__26590__auto__)){
return instrument_QMARK_;
} else {
return and__26590__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__43149 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__43149)].join('');
} else {
return G__43149;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__43154__i = 0, G__43154__a = new Array(arguments.length -  1);
while (G__43154__i < G__43154__a.length) {G__43154__a[G__43154__i] = arguments[G__43154__i + 1]; ++G__43154__i;}
  children = new cljs.core.IndexedSeq(G__43154__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__43155){
var props = cljs.core.first(arglist__43155);
var children = cljs.core.rest(arglist__43155);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__43146,map__43146__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args43156 = [];
var len__27785__auto___43159 = arguments.length;
var i__27786__auto___43160 = (0);
while(true){
if((i__27786__auto___43160 < len__27785__auto___43159)){
args43156.push((arguments[i__27786__auto___43160]));

var G__43161 = (i__27786__auto___43160 + (1));
i__27786__auto___43160 = G__43161;
continue;
} else {
}
break;
}

var G__43158 = args43156.length;
switch (G__43158) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43156.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args43163 = [];
var len__27785__auto___43166 = arguments.length;
var i__27786__auto___43167 = (0);
while(true){
if((i__27786__auto___43167 < len__27785__auto___43166)){
args43163.push((arguments[i__27786__auto___43167]));

var G__43168 = (i__27786__auto___43167 + (1));
i__27786__auto___43167 = G__43168;
continue;
} else {
}
break;
}

var G__43165 = args43163.length;
switch (G__43165) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43163.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__26602__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args43170 = [];
var len__27785__auto___43175 = arguments.length;
var i__27786__auto___43176 = (0);
while(true){
if((i__27786__auto___43176 < len__27785__auto___43175)){
args43170.push((arguments[i__27786__auto___43176]));

var G__43177 = (i__27786__auto___43176 + (1));
i__27786__auto___43176 = G__43177;
continue;
} else {
}
break;
}

var G__43172 = args43170.length;
switch (G__43172) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43170.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__43173 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__43173],null));
} else {
return G__43173;
}
})();
var G__43174 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__43174,ks);
} else {
return G__43174;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__43180 = c.state;
goog.object.set(G__43180,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__43180;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__43183 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__43183,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__43183;
}
} else {
var G__43184 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__43184,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__43184;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args43185 = [];
var len__27785__auto___43190 = arguments.length;
var i__27786__auto___43191 = (0);
while(true){
if((i__27786__auto___43191 < len__27785__auto___43190)){
args43185.push((arguments[i__27786__auto___43191]));

var G__43192 = (i__27786__auto___43191 + (1));
i__27786__auto___43191 = G__43192;
continue;
} else {
}
break;
}

var G__43187 = args43185.length;
switch (G__43187) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43185.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__43188 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__43188);
} else {
return G__43188;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__43189 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__43189],null));
} else {
return G__43189;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__6751__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__6751__auto__)){
var r = temp__6751__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args43196 = [];
var len__27785__auto___43200 = arguments.length;
var i__27786__auto___43201 = (0);
while(true){
if((i__27786__auto___43201 < len__27785__auto___43200)){
args43196.push((arguments[i__27786__auto___43201]));

var G__43202 = (i__27786__auto___43201 + (1));
i__27786__auto___43201 = G__43202;
continue;
} else {
}
break;
}

var G__43198 = args43196.length;
switch (G__43198) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43196.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__6753__auto__ = component.state;
if(cljs.core.truth_(temp__6753__auto__)){
var state = temp__6753__auto__;
var or__26602__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args43204 = [];
var len__27785__auto___43214 = arguments.length;
var i__27786__auto___43215 = (0);
while(true){
if((i__27786__auto___43215 < len__27785__auto___43214)){
args43204.push((arguments[i__27786__auto___43215]));

var G__43216 = (i__27786__auto___43215 + (1));
i__27786__auto___43215 = G__43216;
continue;
} else {
}
break;
}

var G__43213 = args43204.length;
switch (G__43213) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__27808__auto__ = (new cljs.core.IndexedSeq(args43204.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__27808__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq43205){
var G__43206 = cljs.core.first.call(null,seq43205);
var seq43205__$1 = cljs.core.next.call(null,seq43205);
var G__43207 = cljs.core.first.call(null,seq43205__$1);
var seq43205__$2 = cljs.core.next.call(null,seq43205__$1);
var G__43208 = cljs.core.first.call(null,seq43205__$2);
var seq43205__$3 = cljs.core.next.call(null,seq43205__$2);
var G__43209 = cljs.core.first.call(null,seq43205__$3);
var seq43205__$4 = cljs.core.next.call(null,seq43205__$3);
var G__43210 = cljs.core.first.call(null,seq43205__$4);
var seq43205__$5 = cljs.core.next.call(null,seq43205__$4);
var G__43211 = cljs.core.first.call(null,seq43205__$5);
var seq43205__$6 = cljs.core.next.call(null,seq43205__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43206,G__43207,G__43208,G__43209,G__43210,G__43211,seq43205__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args43218 = [];
var len__27785__auto___43223 = arguments.length;
var i__27786__auto___43224 = (0);
while(true){
if((i__27786__auto___43224 < len__27785__auto___43223)){
args43218.push((arguments[i__27786__auto___43224]));

var G__43225 = (i__27786__auto___43224 + (1));
i__27786__auto___43224 = G__43225;
continue;
} else {
}
break;
}

var G__43220 = args43218.length;
switch (G__43220) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43218.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__43222 = component;
var G__43222__$1 = (((G__43222 == null))?null:G__43222.state);
if((G__43222__$1 == null)){
return null;
} else {
return goog.object.get(G__43222__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__6753__auto__ = (function (){var G__43230 = c;
var G__43230__$1 = (((G__43230 == null))?null:G__43230.state);
if((G__43230__$1 == null)){
return null;
} else {
return goog.object.get(G__43230__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var pending = temp__6753__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args43231 = [];
var len__27785__auto___43234 = arguments.length;
var i__27786__auto___43235 = (0);
while(true){
if((i__27786__auto___43235 < len__27785__auto___43234)){
args43231.push((arguments[i__27786__auto___43235]));

var G__43236 = (i__27786__auto___43235 + (1));
i__27786__auto___43235 = G__43236;
continue;
} else {
}
break;
}

var G__43233 = args43231.length;
switch (G__43233) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43231.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






om.next.gather_sends = (function om$next$gather_sends(p__43239,q,remotes){
var map__43246 = p__43239;
var map__43246__$1 = ((((!((map__43246 == null)))?((((map__43246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43246):map__43246);
var env = map__43246__$1;
var parser = cljs.core.get.call(null,map__43246__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__43246,map__43246__$1,env,parser){
return (function (p1__43238_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__43238_SHARP_,parser.call(null,env,q,p1__43238_SHARP_)],null));
});})(map__43246,map__43246__$1,env,parser))
),cljs.core.filter.call(null,((function (map__43246,map__43246__$1,env,parser){
return (function (p__43248){
var vec__43249 = p__43248;
var _ = cljs.core.nth.call(null,vec__43249,(0),null);
var v = cljs.core.nth.call(null,vec__43249,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__43246,map__43246__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__43256 = cljs.core.next.call(null,exprs);
var G__43257 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__43252_SHARP_,p2__43253_SHARP_){
return add_focused_query.call(null,key,tgt,p1__43252_SHARP_,p2__43253_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__43255 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__43255,expr);
} else {
return G__43255;
}
})(),cs);
exprs = G__43256;
tx_SINGLEQUOTE_ = G__43257;
continue;
} else {
var G__43258 = cljs.core.next.call(null,exprs);
var G__43259 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__43258;
tx_SINGLEQUOTE_ = G__43259;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args43260 = [];
var len__27785__auto___43267 = arguments.length;
var i__27786__auto___43268 = (0);
while(true){
if((i__27786__auto___43268 < len__27785__auto___43267)){
args43260.push((arguments[i__27786__auto___43268]));

var G__43269 = (i__27786__auto___43268 + (1));
i__27786__auto___43268 = G__43269;
continue;
} else {
}
break;
}

var G__43262 = args43260.length;
switch (G__43262) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43260.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__43263,reads){
var map__43264 = p__43263;
var map__43264__$1 = ((((!((map__43264 == null)))?((((map__43264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43264):map__43264);
var params = cljs.core.get.call(null,map__43264__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__43264__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__26602__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__6753__auto___43271 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___43271)){
var l_43272 = temp__6753__auto___43271;
goog.log.info(l_43272,[cljs.core.str((function (){var temp__6753__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__6753__auto____$1)){
var ident = temp__6753__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__26602__auto__ = c;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_43273 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_43274 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__26602__auto__ = rootq_43273;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_43274)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_43274);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args43275 = [];
var len__27785__auto___43285 = arguments.length;
var i__27786__auto___43286 = (0);
while(true){
if((i__27786__auto___43286 < len__27785__auto___43285)){
args43275.push((arguments[i__27786__auto___43286]));

var G__43287 = (i__27786__auto___43286 + (1));
i__27786__auto___43286 = G__43287;
continue;
} else {
}
break;
}

var G__43284 = args43275.length;
switch (G__43284) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__27808__auto__ = (new cljs.core.IndexedSeq(args43275.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__27808__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq43276){
var G__43277 = cljs.core.first.call(null,seq43276);
var seq43276__$1 = cljs.core.next.call(null,seq43276);
var G__43278 = cljs.core.first.call(null,seq43276__$1);
var seq43276__$2 = cljs.core.next.call(null,seq43276__$1);
var G__43279 = cljs.core.first.call(null,seq43276__$2);
var seq43276__$3 = cljs.core.next.call(null,seq43276__$2);
var G__43280 = cljs.core.first.call(null,seq43276__$3);
var seq43276__$4 = cljs.core.next.call(null,seq43276__$3);
var G__43281 = cljs.core.first.call(null,seq43276__$4);
var seq43276__$5 = cljs.core.next.call(null,seq43276__$4);
var G__43282 = cljs.core.first.call(null,seq43276__$5);
var seq43276__$6 = cljs.core.next.call(null,seq43276__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43277,G__43278,G__43279,G__43280,G__43281,G__43282,seq43276__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__43290 = component.refs;
if((G__43290 == null)){
return null;
} else {
return goog.object.get(G__43290,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args43291 = [];
var len__27785__auto___43294 = arguments.length;
var i__27786__auto___43295 = (0);
while(true){
if((i__27786__auto___43295 < len__27785__auto___43294)){
args43291.push((arguments[i__27786__auto___43295]));

var G__43296 = (i__27786__auto___43295 + (1));
i__27786__auto___43295 = G__43296;
continue;
} else {
}
break;
}

var G__43293 = args43291.length;
switch (G__43293) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43291.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__27528__auto__ = cljs.core.type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})();
while(true){
var temp__6751__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var p = temp__6751__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__43298 = p;
var G__43299 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__43298;
ret = G__43299;
continue;
} else {
var G__43300 = p;
var G__43301 = ret;
c__$1 = G__43300;
ret = G__43301;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__43302 = cljs.core.next.call(null,cp);
var G__43303 = ret;
var G__43304 = seen;
cp = G__43302;
ret = G__43303;
seen = G__43304;
continue;
} else {
var G__43305 = cljs.core.next.call(null,cp);
var G__43306 = cljs.core.conj.call(null,ret,c__$1);
var G__43307 = cljs.core.conj.call(null,seen,c__$1);
cp = G__43305;
ret = G__43306;
seen = G__43307;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__43309 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__43309)].join('');
} else {
return G__43309;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args43310 = [];
var len__27785__auto___43313 = arguments.length;
var i__27786__auto___43314 = (0);
while(true){
if((i__27786__auto___43314 < len__27785__auto___43313)){
args43310.push((arguments[i__27786__auto___43314]));

var G__43315 = (i__27786__auto___43314 + (1));
i__27786__auto___43314 = G__43315;
continue;
} else {
}
break;
}

var G__43312 = args43310.length;
switch (G__43312) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43310.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__6753__auto___43317 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__6753__auto___43317)){
var old_reconciler_43318 = temp__6753__auto___43317;
om.next.remove_root_BANG_.call(null,old_reconciler_43318,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__27315__auto__ = (((c == null))?null:c);
var m__27316__auto__ = (om.next.tx_intercept[goog.typeOf(x__27315__auto__)]);
if(!((m__27316__auto__ == null))){
return m__27316__auto__.call(null,c,tx);
} else {
var m__27316__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__27316__auto____$1 == null))){
return m__27316__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__26590__auto__ = c;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__26590__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto__)){
var l = temp__6753__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__43324 = cljs.core.PersistentVector.EMPTY;
var G__43324__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__43324,c):G__43324);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__43324__$1,ref__$1);
} else {
return G__43324__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__43333 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__43333,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__43333;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__43325_SHARP_){
return annotate.call(null,p1__43325_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__43334 = om.next.parent.call(null,c__$1);
c__$1 = G__43334;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args43335 = [];
var len__27785__auto___43345 = arguments.length;
var i__27786__auto___43346 = (0);
while(true){
if((i__27786__auto___43346 < len__27785__auto___43345)){
args43335.push((arguments[i__27786__auto___43346]));

var G__43347 = (i__27786__auto___43346 + (1));
i__27786__auto___43346 = G__43347;
continue;
} else {
}
break;
}

var G__43337 = args43335.length;
switch (G__43337) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43335.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__26602__auto__ = om.next.component_QMARK_.call(null,x);
if(or__26602__auto__){
return or__26602__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__43338 = tx;
if((function (){var and__26590__auto__ = om.next.component_QMARK_.call(null,x);
if(and__26590__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__26590__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__43338,om.next.get_ident.call(null,x));
} else {
return G__43338;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__41976__auto___43349 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__41976__auto___43349,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__43341 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43341,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__43341,(1),null);
var G__43350 = om.next.parent.call(null,p);
var G__43351 = x_SINGLEQUOTE_;
var G__43352 = tx__$3;
p = G__43350;
x__$1 = G__43351;
tx__$2 = G__43352;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__43353){
var map__43356 = p__43353;
var map__43356__$1 = ((((!((map__43356 == null)))?((((map__43356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43356):map__43356);
var opts = map__43356__$1;
var read = cljs.core.get.call(null,map__43356__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__43356__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__43359 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__43359);
} else {
return G__43359;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__43362 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__43362);
} else {
return G__43362;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__43360_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__43360_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__26602__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__26602__auto__){
return or__26602__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__43363 = cljs.core.pop.call(null,cp);
var G__43364 = cljs.core.pop.call(null,data_path__$1);
var G__43365 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__43366 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__43363;
data_path__$1 = G__43364;
new_query__$1 = G__43365;
ret = G__43366;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__43374 = x;
if(om.next.component_QMARK_.call(null,x)){
return cljs.core.type.call(null,G__43374);
} else {
return G__43374;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__41976__auto___43491 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__41976__auto___43491,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__43456 = classpath;
if((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__43456,class$);
} else {
return G__43456;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$)){
var root_query_43492 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_43492,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__26590__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = cljs.core.some.call(null,((function (and__26590__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__26590__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__26590__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__26590__auto____$1;
}
});})(and__26590__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__26590__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__26590__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = union_expr;
if(cljs.core.truth_(and__26590__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_((function (){var or__26602__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__43457 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__43457__$1 = ((((!((map__43457 == null)))?((((map__43457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43457):map__43457);
var props = cljs.core.get.call(null,map__43457__$1,false);
var joins = cljs.core.get.call(null,map__43457__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__43367_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__43367_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$], true))));
});})(map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__43459 = cljs.core.seq.call(null,joins);
var chunk__43460 = null;
var count__43461 = (0);
var i__43462 = (0);
while(true){
if((i__43462 < count__43461)){
var join = cljs.core._nth.call(null,chunk__43460,i__43462);
var vec__43463_43493 = om.util.join_entry.call(null,join);
var prop_43494 = cljs.core.nth.call(null,vec__43463_43493,(0),null);
var query_SINGLEQUOTE__43495 = cljs.core.nth.call(null,vec__43463_43493,(1),null);
var prop_dispatch_key_43496 = om.next.get_dispatch_key.call(null,prop_43494);
var recursion_QMARK__43497 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__43495);
var union_recursion_QMARK__43498 = (function (){var and__26590__auto__ = recursion_QMARK__43497;
if(and__26590__auto__){
return union_expr;
} else {
return and__26590__auto__;
}
})();
var query_SINGLEQUOTE__43499__$1 = ((recursion_QMARK__43497)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__43495);
var path_SINGLEQUOTE__43500 = cljs.core.conj.call(null,path,prop_43494);
var rendered_path_SINGLEQUOTE__43501 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__43500));
var cs_43502 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__43501);
var cascade_query_QMARK__43503 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_43502),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__43499__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_43502)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__43499__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__43504 = ((cascade_query_QMARK__43503)?om.next.get_query.call(null,cljs.core.first.call(null,cs_43502)):query_SINGLEQUOTE__43499__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__43459,chunk__43460,count__43461,i__43462,vec__43463_43493,prop_43494,query_SINGLEQUOTE__43495,prop_dispatch_key_43496,recursion_QMARK__43497,union_recursion_QMARK__43498,query_SINGLEQUOTE__43499__$1,path_SINGLEQUOTE__43500,rendered_path_SINGLEQUOTE__43501,cs_43502,cascade_query_QMARK__43503,query_SINGLEQUOTE__SINGLEQUOTE__43504,join,map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__43368_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__43368_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_43496,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__43459,chunk__43460,count__43461,i__43462,vec__43463_43493,prop_43494,query_SINGLEQUOTE__43495,prop_dispatch_key_43496,recursion_QMARK__43497,union_recursion_QMARK__43498,query_SINGLEQUOTE__43499__$1,path_SINGLEQUOTE__43500,rendered_path_SINGLEQUOTE__43501,cs_43502,cascade_query_QMARK__43503,query_SINGLEQUOTE__SINGLEQUOTE__43504,join,map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__43503) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__43499__$1,query_SINGLEQUOTE__SINGLEQUOTE__43504))){
var cp__GT_q_SINGLEQUOTE__43505 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__43500,query_SINGLEQUOTE__SINGLEQUOTE__43504,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__43505);
} else {
}

var class_SINGLEQUOTE__43506 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__43504));
if((recursion_QMARK__43497) && ((class_SINGLEQUOTE__43506 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__43506,query_SINGLEQUOTE__SINGLEQUOTE__43504,path_SINGLEQUOTE__43500,classpath__$1,((recursion_QMARK__43497)?union_expr:null),union_keys);
}

var G__43507 = seq__43459;
var G__43508 = chunk__43460;
var G__43509 = count__43461;
var G__43510 = (i__43462 + (1));
seq__43459 = G__43507;
chunk__43460 = G__43508;
count__43461 = G__43509;
i__43462 = G__43510;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__43459);
if(temp__6753__auto__){
var seq__43459__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43459__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__43459__$1);
var G__43511 = cljs.core.chunk_rest.call(null,seq__43459__$1);
var G__43512 = c__27505__auto__;
var G__43513 = cljs.core.count.call(null,c__27505__auto__);
var G__43514 = (0);
seq__43459 = G__43511;
chunk__43460 = G__43512;
count__43461 = G__43513;
i__43462 = G__43514;
continue;
} else {
var join = cljs.core.first.call(null,seq__43459__$1);
var vec__43466_43515 = om.util.join_entry.call(null,join);
var prop_43516 = cljs.core.nth.call(null,vec__43466_43515,(0),null);
var query_SINGLEQUOTE__43517 = cljs.core.nth.call(null,vec__43466_43515,(1),null);
var prop_dispatch_key_43518 = om.next.get_dispatch_key.call(null,prop_43516);
var recursion_QMARK__43519 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__43517);
var union_recursion_QMARK__43520 = (function (){var and__26590__auto__ = recursion_QMARK__43519;
if(and__26590__auto__){
return union_expr;
} else {
return and__26590__auto__;
}
})();
var query_SINGLEQUOTE__43521__$1 = ((recursion_QMARK__43519)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__43517);
var path_SINGLEQUOTE__43522 = cljs.core.conj.call(null,path,prop_43516);
var rendered_path_SINGLEQUOTE__43523 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__43522));
var cs_43524 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__43523);
var cascade_query_QMARK__43525 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_43524),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__43521__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_43524)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__43521__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__43526 = ((cascade_query_QMARK__43525)?om.next.get_query.call(null,cljs.core.first.call(null,cs_43524)):query_SINGLEQUOTE__43521__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__43459,chunk__43460,count__43461,i__43462,vec__43466_43515,prop_43516,query_SINGLEQUOTE__43517,prop_dispatch_key_43518,recursion_QMARK__43519,union_recursion_QMARK__43520,query_SINGLEQUOTE__43521__$1,path_SINGLEQUOTE__43522,rendered_path_SINGLEQUOTE__43523,cs_43524,cascade_query_QMARK__43525,query_SINGLEQUOTE__SINGLEQUOTE__43526,join,seq__43459__$1,temp__6753__auto__,map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__43368_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__43368_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_43518,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__43459,chunk__43460,count__43461,i__43462,vec__43466_43515,prop_43516,query_SINGLEQUOTE__43517,prop_dispatch_key_43518,recursion_QMARK__43519,union_recursion_QMARK__43520,query_SINGLEQUOTE__43521__$1,path_SINGLEQUOTE__43522,rendered_path_SINGLEQUOTE__43523,cs_43524,cascade_query_QMARK__43525,query_SINGLEQUOTE__SINGLEQUOTE__43526,join,seq__43459__$1,temp__6753__auto__,map__43457,map__43457__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__43525) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__43521__$1,query_SINGLEQUOTE__SINGLEQUOTE__43526))){
var cp__GT_q_SINGLEQUOTE__43527 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__43522,query_SINGLEQUOTE__SINGLEQUOTE__43526,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__43527);
} else {
}

var class_SINGLEQUOTE__43528 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__43526));
if((recursion_QMARK__43519) && ((class_SINGLEQUOTE__43528 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__43528,query_SINGLEQUOTE__SINGLEQUOTE__43526,path_SINGLEQUOTE__43522,classpath__$1,((recursion_QMARK__43519)?union_expr:null),union_keys);
}

var G__43529 = cljs.core.next.call(null,seq__43459__$1);
var G__43530 = null;
var G__43531 = (0);
var G__43532 = (0);
seq__43459 = G__43529;
chunk__43460 = G__43530;
count__43461 = G__43531;
i__43462 = G__43532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__43469 = cljs.core.seq.call(null,query);
var chunk__43470 = null;
var count__43471 = (0);
var i__43472 = (0);
while(true){
if((i__43472 < count__43471)){
var vec__43473 = cljs.core._nth.call(null,chunk__43470,i__43472);
var prop = cljs.core.nth.call(null,vec__43473,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43473,(1),null);
var path_SINGLEQUOTE__43533 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__43534 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_43535 = cljs.core.filter.call(null,((function (seq__43469,chunk__43470,count__43471,i__43472,path_SINGLEQUOTE__43533,class_SINGLEQUOTE__43534,vec__43473,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__43369_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__43534,cljs.core.type.call(null,p1__43369_SHARP_));
});})(seq__43469,chunk__43470,count__43471,i__43472,path_SINGLEQUOTE__43533,class_SINGLEQUOTE__43534,vec__43473,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__43536 = (function (){var and__26590__auto__ = class_SINGLEQUOTE__43534;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_43535),(1));
} else {
return and__26590__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__43537 = (cljs.core.truth_(cascade_query_QMARK__43536)?om.next.get_query.call(null,cljs.core.first.call(null,cs_43535)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__26590__auto__ = cascade_query_QMARK__43536;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__43537);
} else {
return and__26590__auto__;
}
})())){
var qs_43538 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_43539 = cljs.core.first.call(null,qs_43538);
var qnode_43540 = clojure.zip.node.call(null,(function (){var G__43476 = q_43539;
if((class$ == null)){
return om.next.query_template.call(null,G__43476,path);
} else {
return G__43476;
}
})());
var new_query_43541 = cljs.core.assoc.call(null,qnode_43540,prop,query_SINGLEQUOTE__SINGLEQUOTE__43537);
var q_SINGLEQUOTE__43542 = (function (){var G__43477 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_43539),path),new_query_43541);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__43477),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__43477;
}
})();
var qs_SINGLEQUOTE__43543 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__43542], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_43539], true)),qs_43538);
var cp__GT_q_SINGLEQUOTE__43544 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__43543], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__43542),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__43544);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__43534,query_SINGLEQUOTE__SINGLEQUOTE__43537,path_SINGLEQUOTE__43533,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__43545 = seq__43469;
var G__43546 = chunk__43470;
var G__43547 = count__43471;
var G__43548 = (i__43472 + (1));
seq__43469 = G__43545;
chunk__43470 = G__43546;
count__43471 = G__43547;
i__43472 = G__43548;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__43469);
if(temp__6753__auto__){
var seq__43469__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43469__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__43469__$1);
var G__43549 = cljs.core.chunk_rest.call(null,seq__43469__$1);
var G__43550 = c__27505__auto__;
var G__43551 = cljs.core.count.call(null,c__27505__auto__);
var G__43552 = (0);
seq__43469 = G__43549;
chunk__43470 = G__43550;
count__43471 = G__43551;
i__43472 = G__43552;
continue;
} else {
var vec__43478 = cljs.core.first.call(null,seq__43469__$1);
var prop = cljs.core.nth.call(null,vec__43478,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43478,(1),null);
var path_SINGLEQUOTE__43553 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__43554 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_43555 = cljs.core.filter.call(null,((function (seq__43469,chunk__43470,count__43471,i__43472,path_SINGLEQUOTE__43553,class_SINGLEQUOTE__43554,vec__43478,prop,query_SINGLEQUOTE_,seq__43469__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__43369_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__43554,cljs.core.type.call(null,p1__43369_SHARP_));
});})(seq__43469,chunk__43470,count__43471,i__43472,path_SINGLEQUOTE__43553,class_SINGLEQUOTE__43554,vec__43478,prop,query_SINGLEQUOTE_,seq__43469__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__43556 = (function (){var and__26590__auto__ = class_SINGLEQUOTE__43554;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_43555),(1));
} else {
return and__26590__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__43557 = (cljs.core.truth_(cascade_query_QMARK__43556)?om.next.get_query.call(null,cljs.core.first.call(null,cs_43555)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__26590__auto__ = cascade_query_QMARK__43556;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__43557);
} else {
return and__26590__auto__;
}
})())){
var qs_43558 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_43559 = cljs.core.first.call(null,qs_43558);
var qnode_43560 = clojure.zip.node.call(null,(function (){var G__43481 = q_43559;
if((class$ == null)){
return om.next.query_template.call(null,G__43481,path);
} else {
return G__43481;
}
})());
var new_query_43561 = cljs.core.assoc.call(null,qnode_43560,prop,query_SINGLEQUOTE__SINGLEQUOTE__43557);
var q_SINGLEQUOTE__43562 = (function (){var G__43482 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_43559),path),new_query_43561);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__43482),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__43482;
}
})();
var qs_SINGLEQUOTE__43563 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__43562], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_43559], true)),qs_43558);
var cp__GT_q_SINGLEQUOTE__43564 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__43563], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__43562),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__43564);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__43554,query_SINGLEQUOTE__SINGLEQUOTE__43557,path_SINGLEQUOTE__43553,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__43565 = cljs.core.next.call(null,seq__43469__$1);
var G__43566 = null;
var G__43567 = (0);
var G__43568 = (0);
seq__43469 = G__43565;
chunk__43470 = G__43566;
count__43471 = G__43567;
i__43472 = G__43568;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_.call(null,root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__41976__auto___43569 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__41976__auto___43569,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__43484 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__43484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__43484;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__43486 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__43486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__43486;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__6751__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6751__auto__)){
var cs = temp__6751__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__6751__auto__,indexes__$1,___$1){
return (function (p1__43370_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__43370_SHARP_], null));
});})(temp__6751__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27272__auto__,k__27273__auto__){
var self__ = this;
var this__27272__auto____$1 = this;
return cljs.core._lookup.call(null,this__27272__auto____$1,k__27273__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27274__auto__,k43372,else__27275__auto__){
var self__ = this;
var this__27274__auto____$1 = this;
var G__43487 = (((k43372 instanceof cljs.core.Keyword))?k43372.fqn:null);
switch (G__43487) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43372,else__27275__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27286__auto__,writer__27287__auto__,opts__27288__auto__){
var self__ = this;
var this__27286__auto____$1 = this;
var pr_pair__27289__auto__ = ((function (this__27286__auto____$1){
return (function (keyval__27290__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27287__auto__,cljs.core.pr_writer,""," ","",opts__27288__auto__,keyval__27290__auto__);
});})(this__27286__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27287__auto__,pr_pair__27289__auto__,"#om.next.Indexer{",", ","}",opts__27288__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = true;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43371){
var self__ = this;
var G__43371__$1 = this;
return (new cljs.core.RecordIter((0),G__43371__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27270__auto__){
var self__ = this;
var this__27270__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27266__auto__){
var self__ = this;
var this__27266__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27276__auto__){
var self__ = this;
var this__27276__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27267__auto__){
var self__ = this;
var this__27267__auto____$1 = this;
var h__27039__auto__ = self__.__hash;
if(!((h__27039__auto__ == null))){
return h__27039__auto__;
} else {
var h__27039__auto____$1 = cljs.core.hash_imap.call(null,this__27267__auto____$1);
self__.__hash = h__27039__auto____$1;

return h__27039__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27268__auto__,other__27269__auto__){
var self__ = this;
var this__27268__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26590__auto__ = other__27269__auto__;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = (this__27268__auto____$1.constructor === other__27269__auto__.constructor);
if(and__26590__auto____$1){
return cljs.core.equiv_map.call(null,this__27268__auto____$1,other__27269__auto__);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27281__auto__,k__27282__auto__){
var self__ = this;
var this__27281__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__27282__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27281__auto____$1),self__.__meta),k__27282__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27282__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27279__auto__,k__27280__auto__,G__43371){
var self__ = this;
var this__27279__auto____$1 = this;
var pred__43488 = cljs.core.keyword_identical_QMARK_;
var expr__43489 = k__27280__auto__;
if(cljs.core.truth_(pred__43488.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__43489))){
return (new om.next.Indexer(G__43371,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43488.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__43489))){
return (new om.next.Indexer(self__.indexes,G__43371,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27280__auto__,G__43371),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27284__auto__){
var self__ = this;
var this__27284__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27271__auto__,G__43371){
var self__ = this;
var this__27271__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__43371,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27277__auto__,entry__27278__auto__){
var self__ = this;
var this__27277__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27278__auto__)){
return cljs.core._assoc.call(null,this__27277__auto____$1,cljs.core._nth.call(null,entry__27278__auto__,(0)),cljs.core._nth.call(null,entry__27278__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27277__auto____$1,entry__27278__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__27308__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__27308__auto__,writer__27309__auto__){
return cljs.core._write.call(null,writer__27309__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__43373){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__43373),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__43373),null,cljs.core.dissoc.call(null,G__43373,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args43571 = [];
var len__27785__auto___43574 = arguments.length;
var i__27786__auto___43575 = (0);
while(true){
if((i__27786__auto___43575 < len__27785__auto___43574)){
args43571.push((arguments[i__27786__auto___43575]));

var G__43576 = (i__27786__auto___43575 + (1));
i__27786__auto___43575 = G__43576;
continue;
} else {
}
break;
}

var G__43573 = args43571.length;
switch (G__43573) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43571.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args43579 = [];
var len__27785__auto___43583 = arguments.length;
var i__27786__auto___43584 = (0);
while(true){
if((i__27786__auto___43584 < len__27785__auto___43583)){
args43579.push((arguments[i__27786__auto___43584]));

var G__43585 = (i__27786__auto___43584 + (1));
i__27786__auto___43584 = G__43585;
continue;
} else {
}
break;
}

var G__43581 = args43579.length;
switch (G__43581) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43579.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__43582 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__43582);
} else {
return G__43582;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__43578_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__43578_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__43603 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__43603,(0),null);
var sel = cljs.core.nth.call(null,vec__43603,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__43614 = cljs.core.next.call(null,q);
var G__43615 = ret;
q = G__43614;
ret = G__43615;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__43616 = cljs.core.next.call(null,q);
var G__43617 = cljs.core.assoc.call(null,ret,k,i);
q = G__43616;
ret = G__43617;
continue;
} else {
var G__43618 = cljs.core.next.call(null,q);
var G__43619 = cljs.core.assoc.call(null,ret,k,x);
q = G__43618;
ret = G__43619;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__43587_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__43587_SHARP_,refs,union_entry);
});})(q,ret,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__43589_SHARP_){
return om.next.ident.call(null,class$,p1__43589_SHARP_);
});})(q,ret,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__43610){
var vec__43611 = p__43610;
var i = cljs.core.nth.call(null,vec__43611,(0),null);
var x = cljs.core.nth.call(null,vec__43611,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__43603,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__43620 = cljs.core.next.call(null,q);
var G__43621 = cljs.core.assoc.call(null,ret,k,is);
q = G__43620;
ret = G__43621;
continue;
} else {
var G__43622 = cljs.core.next.call(null,q);
var G__43623 = cljs.core.assoc.call(null,ret,k,xs);
q = G__43622;
ret = G__43623;
continue;
}
} else {
if((v == null)){
var G__43624 = cljs.core.next.call(null,q);
var G__43625 = ret;
q = G__43624;
ret = G__43625;
continue;
} else {
var G__43626 = cljs.core.next.call(null,q);
var G__43627 = cljs.core.assoc.call(null,ret,k,v);
q = G__43626;
ret = G__43627;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__43628 = cljs.core.next.call(null,q);
var G__43629 = ret;
q = G__43628;
ret = G__43629;
continue;
} else {
var G__43630 = cljs.core.next.call(null,q);
var G__43631 = cljs.core.assoc.call(null,ret,k,v);
q = G__43630;
ret = G__43631;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args43632 = [];
var len__27785__auto___43635 = arguments.length;
var i__27786__auto___43636 = (0);
while(true){
if((i__27786__auto___43636 < len__27785__auto___43635)){
args43632.push((arguments[i__27786__auto___43636]));

var G__43637 = (i__27786__auto___43636 + (1));
i__27786__auto___43636 = G__43637;
continue;
} else {
}
break;
}

var G__43634 = args43632.length;
switch (G__43634) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43632.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__43642 = cljs.core.group_by.call(null,(function (p1__43639_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__43639_SHARP_));
}),res);
var map__43642__$1 = ((((!((map__43642 == null)))?((((map__43642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43642):map__43642);
var idents = cljs.core.get.call(null,map__43642__$1,true);
var rest = cljs.core.get.call(null,map__43642__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__43645 = node;
if(typeof node === 'number'){
return (G__43645 - (1));
} else {
return G__43645;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43650){
var vec__43651 = p__43650;
var k = cljs.core.nth.call(null,vec__43651,(0),null);
var q = cljs.core.nth.call(null,vec__43651,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__26590__auto__ = union_expr;
if(cljs.core.truth_(and__26590__auto__)){
return recurse_key;
} else {
return and__26590__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__43701 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__43701;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__43679 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__43679__$1 = ((((!((map__43679 == null)))?((((map__43679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43679):map__43679);
var props = cljs.core.get.call(null,map__43679__$1,false);
var joins = cljs.core.get.call(null,map__43679__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__43679,map__43679__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__43654_SHARP_){
var G__43681 = p1__43654_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__43654_SHARP_)){
return cljs.core.first.call(null,G__43681);
} else {
return G__43681;
}
});})(map__43679,map__43679__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__43682 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__43682,(0),null);
var sel = cljs.core.nth.call(null,vec__43682,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__43702 = cljs.core.next.call(null,joins__$1);
var G__43703 = cljs.core.assoc.call(null,ret,key,om$next$denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__43702;
ret = G__43703;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__43685 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__43685,recurse_key);
} else {
return G__43685;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__43686 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__43686,recurse_key);
} else {
return G__43686;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__43687 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__43687,cljs.core.first.call(null,ident));
} else {
return G__43687;
}
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__26590__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__26590__auto__){
return union_recur_QMARK_;
} else {
return and__26590__auto__;
}
})())){
return om$next$denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__43688 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__43655_SHARP_){
var or__26602__auto__ = om.util.join_QMARK_.call(null,p1__43655_SHARP_);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__43655_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__43655_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__43655_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__43688__$1 = ((((!((map__43688 == null)))?((((map__43688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43688):map__43688);
var props = cljs.core.get.call(null,map__43688__$1,false);
var joins = cljs.core.get.call(null,map__43688__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__43688,map__43688__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__43656_SHARP_){
var G__43690 = p1__43656_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__43656_SHARP_)){
return cljs.core.first.call(null,G__43690);
} else {
return G__43690;
}
});})(map__43688,map__43688__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__43694 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__43694);
} else {
return G__43694;
}
})();
var join__$2 = (function (){var G__43695 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__43695],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__43695;
}
})();
var vec__43691 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__43691,(0),null);
var sel = cljs.core.nth.call(null,vec__43691,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__43696 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__43696);
} else {
return G__43696;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__43704 = next;
v__$1 = G__43704;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__26590__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__26590__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__26590__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__26590__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__26590__auto__)){
return recurse_QMARK_;
} else {
return and__26590__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__43705 = cljs.core.next.call(null,joins__$1);
var G__43706 = ret;
joins__$1 = G__43705;
ret = G__43706;
continue;
} else {
if(graph_loop_QMARK_){
var G__43707 = cljs.core.next.call(null,joins__$1);
var G__43708 = ret;
joins__$1 = G__43707;
ret = G__43708;
continue;
} else {
if((v__$1 == null)){
var G__43709 = cljs.core.next.call(null,joins__$1);
var G__43710 = ret;
joins__$1 = G__43709;
ret = G__43710;
continue;
} else {
var G__43711 = cljs.core.next.call(null,joins__$1);
var G__43712 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__43711;
ret = G__43712;
continue;

}
}
}
} else {
var temp__6751__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__43688,map__43688__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__43697){
var vec__43698 = p__43697;
var k = cljs.core.nth.call(null,vec__43698,(0),null);
var identset = cljs.core.nth.call(null,vec__43698,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__43688,map__43688__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__6751__auto__)){
var looped_key = temp__6751__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args43713 = [];
var len__27785__auto___43716 = arguments.length;
var i__27786__auto___43717 = (0);
while(true){
if((i__27786__auto___43717 < len__27785__auto___43716)){
args43713.push((arguments[i__27786__auto___43717]));

var G__43718 = (i__27786__auto___43717 + (1));
i__27786__auto___43717 = G__43718;
continue;
} else {
}
break;
}

var G__43715 = args43713.length;
switch (G__43715) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43713.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__43743){
var vec__43747 = p__43743;
var k = cljs.core.nth.call(null,vec__43747,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__43747,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__43747,k,orig_paths){
return (function (p1__43720_SHARP_,p2__43721_SHARP_){
return cljs.core.assoc_in.call(null,p1__43720_SHARP_,cljs.core.conj.call(null,p2__43721_SHARP_,k),to_move);
});})(to_move,vec__43747,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__43750_SHARP_){
return om$next$move_roots.call(null,p1__43750_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__26590__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__26590__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__26590__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__26602__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__43755){
var vec__43756 = p__43755;
var jkey = cljs.core.nth.call(null,vec__43756,(0),null);
var jsel = cljs.core.nth.call(null,vec__43756,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__43780){
var vec__43784 = p__43780;
var expr = cljs.core.nth.call(null,vec__43784,(0),null);
var path = cljs.core.nth.call(null,vec__43784,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__43804 = config;
var map__43804__$1 = ((((!((map__43804 == null)))?((((map__43804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43804):map__43804);
var merge_ident = cljs.core.get.call(null,map__43804__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__43804__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__43804,map__43804__$1,merge_ident,indexer){
return (function (p1__43787_SHARP_){
var and__26590__auto__ = om.util.join_QMARK_.call(null,p1__43787_SHARP_);
if(cljs.core.truth_(and__26590__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__43787_SHARP_));
} else {
return and__26590__auto__;
}
});})(map__43804,map__43804__$1,merge_ident,indexer))
,query));
var step = ((function (map__43804,map__43804__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__43813){
var vec__43817 = p__43813;
var ident = cljs.core.nth.call(null,vec__43817,(0),null);
var props = cljs.core.nth.call(null,vec__43817,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__26602__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__43804,map__43804__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__43823 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__43823,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__43823,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__26602__auto__ = query;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args43826 = [];
var len__27785__auto___43831 = arguments.length;
var i__27786__auto___43832 = (0);
while(true){
if((i__27786__auto___43832 < len__27785__auto___43831)){
args43826.push((arguments[i__27786__auto___43832]));

var G__43833 = (i__27786__auto___43832 + (1));
i__27786__auto___43832 = G__43833;
continue;
} else {
}
break;
}

var G__43828 = args43826.length;
switch (G__43828) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43826.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__43829 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__43829__$1 = ((((!((map__43829 == null)))?((((map__43829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43829):map__43829);
var keys = cljs.core.get.call(null,map__43829__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__43829__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__43829__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__6751__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6751__auto__)){
var migrate = temp__6751__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__26602__auto__ = query;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27272__auto__,k__27273__auto__){
var self__ = this;
var this__27272__auto____$1 = this;
return cljs.core._lookup.call(null,this__27272__auto____$1,k__27273__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27274__auto__,k43840,else__27275__auto__){
var self__ = this;
var this__27274__auto____$1 = this;
var G__43842 = (((k43840 instanceof cljs.core.Keyword))?k43840.fqn:null);
switch (G__43842) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43840,else__27275__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
return om.next.merge_BANG_.call(null,this$__$1,res,null);
});
var om$next$send_cb__2 = (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__43836_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__43836_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__43837_SHARP_,p2__43838_SHARP_){
return cljs.core.into.call(null,p1__43837_SHARP_,p2__43838_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__43843 = self__.config;
var map__43843__$1 = ((((!((map__43843 == null)))?((((map__43843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43843):map__43843);
var ui__GT_props = cljs.core.get.call(null,map__43843__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__43845 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__43846 = null;
var count__43847 = (0);
var i__43848 = (0);
while(true){
if((i__43848 < count__43847)){
var c = cljs.core._nth.call(null,chunk__43846,i__43848);
var props_change_QMARK__43856 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_43857 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_43858 = ui__GT_props.call(null,env,c);
var next_props_43859 = om.next.computed.call(null,next_raw_props_43858,computed_43857);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__43856)){
var next_props_43860__$1 = (((next_props_43859 == null))?(function (){var temp__6753__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto__)){
var props = temp__6753__auto__;
return props;
} else {
return null;
}
})():next_props_43859);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_43860__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_43859,om.next.get_state.call(null,c)))){
if(!((next_props_43859 == null))){
om.next.update_component_BANG_.call(null,c,next_props_43859);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__43856)){
var temp__6753__auto___43861 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___43861)){
var update_path_43862 = temp__6753__auto___43861;
var p_43863 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_43863)){
var update_path_SINGLEQUOTE__43864 = cljs.core.subvec.call(null,update_path_43862,cljs.core.count.call(null,om.next.path.call(null,p_43863)));
om.next.update_props_BANG_.call(null,p_43863,cljs.core.assoc_in.call(null,om.next.props.call(null,p_43863),update_path_SINGLEQUOTE__43864,next_raw_props_43858));

om.next.merge_pending_props_BANG_.call(null,p_43863);

var G__43865 = om.next.parent.call(null,p_43863);
p_43863 = G__43865;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__43866 = seq__43845;
var G__43867 = chunk__43846;
var G__43868 = count__43847;
var G__43869 = (i__43848 + (1));
seq__43845 = G__43866;
chunk__43846 = G__43867;
count__43847 = G__43868;
i__43848 = G__43869;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__43845);
if(temp__6753__auto__){
var seq__43845__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43845__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__43845__$1);
var G__43870 = cljs.core.chunk_rest.call(null,seq__43845__$1);
var G__43871 = c__27505__auto__;
var G__43872 = cljs.core.count.call(null,c__27505__auto__);
var G__43873 = (0);
seq__43845 = G__43870;
chunk__43846 = G__43871;
count__43847 = G__43872;
i__43848 = G__43873;
continue;
} else {
var c = cljs.core.first.call(null,seq__43845__$1);
var props_change_QMARK__43874 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_43875 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_43876 = ui__GT_props.call(null,env,c);
var next_props_43877 = om.next.computed.call(null,next_raw_props_43876,computed_43875);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__43874)){
var next_props_43878__$1 = (((next_props_43877 == null))?(function (){var temp__6753__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto____$1)){
var props = temp__6753__auto____$1;
return props;
} else {
return null;
}
})():next_props_43877);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_43878__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_43877,om.next.get_state.call(null,c)))){
if(!((next_props_43877 == null))){
om.next.update_component_BANG_.call(null,c,next_props_43877);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__43874)){
var temp__6753__auto___43879__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___43879__$1)){
var update_path_43880 = temp__6753__auto___43879__$1;
var p_43881 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_43881)){
var update_path_SINGLEQUOTE__43882 = cljs.core.subvec.call(null,update_path_43880,cljs.core.count.call(null,om.next.path.call(null,p_43881)));
om.next.update_props_BANG_.call(null,p_43881,cljs.core.assoc_in.call(null,om.next.props.call(null,p_43881),update_path_SINGLEQUOTE__43882,next_raw_props_43876));

om.next.merge_pending_props_BANG_.call(null,p_43881);

var G__43883 = om.next.parent.call(null,p_43881);
p_43881 = G__43883;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__43884 = cljs.core.next.call(null,seq__43845__$1);
var G__43885 = null;
var G__43886 = (0);
var G__43887 = (0);
seq__43845 = G__43884;
chunk__43846 = G__43885;
count__43847 = G__43886;
i__43848 = G__43887;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__26590__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__26590__auto__;
}
})())){
var new_state_43888 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_43889 = cljs.core.meta.call(null,new_state_43888);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_43888,refs_43889));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_43849 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_43850 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43851 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__6753__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__6753__auto__)){
var c_SINGLEQUOTE_ = temp__6753__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43851;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43850;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43849;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__26602__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__26602__auto__ = target;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__43835_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__43835_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__26602__auto__ = target;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__6753__auto___43890 = om.next.get_query.call(null,(function (){var or__26602__auto__ = (function (){var and__26590__auto__ = target;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6753__auto___43890)){
var sel_43891 = temp__6753__auto___43890;
var env_43892 = om.next.to_env.call(null,self__.config);
var snds_43893 = om.next.gather_sends.call(null,env_43892,sel_43891,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_43893)){
} else {
var temp__6753__auto___43894__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6753__auto___43894__$1)){
var send_43895 = temp__6753__auto___43894__$1;
send_43895.call(null,snds_43893,((function (send_43895,temp__6753__auto___43894__$1,env_43892,snds_43893,sel_43891,temp__6753__auto___43890,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
om.next.merge_BANG_.call(null,this$__$1,res,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_43892,sel_43891));
});
var om$next$send_cb__2 = (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_43892,sel_43891));
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(send_43895,temp__6753__auto___43894__$1,env_43892,snds_43893,sel_43891,temp__6753__auto___43890,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__26602__auto__ = c;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__6753__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__6753__auto__)){
var remove = temp__6753__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27286__auto__,writer__27287__auto__,opts__27288__auto__){
var self__ = this;
var this__27286__auto____$1 = this;
var pr_pair__27289__auto__ = ((function (this__27286__auto____$1){
return (function (keyval__27290__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27287__auto__,cljs.core.pr_writer,""," ","",opts__27288__auto__,keyval__27290__auto__);
});})(this__27286__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27287__auto__,pr_pair__27289__auto__,"#om.next.Reconciler{",", ","}",opts__27288__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = true;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43839){
var self__ = this;
var G__43839__$1 = this;
return (new cljs.core.RecordIter((0),G__43839__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27270__auto__){
var self__ = this;
var this__27270__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27266__auto__){
var self__ = this;
var this__27266__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27276__auto__){
var self__ = this;
var this__27276__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27267__auto__){
var self__ = this;
var this__27267__auto____$1 = this;
var h__27039__auto__ = self__.__hash;
if(!((h__27039__auto__ == null))){
return h__27039__auto__;
} else {
var h__27039__auto____$1 = cljs.core.hash_imap.call(null,this__27267__auto____$1);
self__.__hash = h__27039__auto____$1;

return h__27039__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27268__auto__,other__27269__auto__){
var self__ = this;
var this__27268__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26590__auto__ = other__27269__auto__;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = (this__27268__auto____$1.constructor === other__27269__auto__.constructor);
if(and__26590__auto____$1){
return cljs.core.equiv_map.call(null,this__27268__auto____$1,other__27269__auto__);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27281__auto__,k__27282__auto__){
var self__ = this;
var this__27281__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__27282__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27281__auto____$1),self__.__meta),k__27282__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27282__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27279__auto__,k__27280__auto__,G__43839){
var self__ = this;
var this__27279__auto____$1 = this;
var pred__43852 = cljs.core.keyword_identical_QMARK_;
var expr__43853 = k__27280__auto__;
if(cljs.core.truth_(pred__43852.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__43853))){
return (new om.next.Reconciler(G__43839,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43852.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__43853))){
return (new om.next.Reconciler(self__.config,G__43839,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27280__auto__,G__43839),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27284__auto__){
var self__ = this;
var this__27284__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27271__auto__,G__43839){
var self__ = this;
var this__27271__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__43839,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27277__auto__,entry__27278__auto__){
var self__ = this;
var this__27277__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27278__auto__)){
return cljs.core._assoc.call(null,this__27277__auto____$1,cljs.core._nth.call(null,entry__27278__auto__,(0)),cljs.core._nth.call(null,entry__27278__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27277__auto____$1,entry__27278__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__27308__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__27308__auto__,writer__27309__auto__){
return cljs.core._write.call(null,writer__27309__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__43841){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__43841),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__43841),null,cljs.core.dissoc.call(null,G__43841,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__43896,c){
var map__43901 = p__43896;
var map__43901__$1 = ((((!((map__43901 == null)))?((((map__43901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43901):map__43901);
var env = map__43901__$1;
var parser = cljs.core.get.call(null,map__43901__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__43901__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (cljs.core.truth_((function (){var and__26590__auto__ = pathopt;
if(cljs.core.truth_(and__26590__auto__)){
var and__26590__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__26590__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__26590__auto____$1;
}
} else {
return and__26590__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__6753__auto___43905 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6753__auto___43905)){
var l_43906 = temp__6753__auto___43905;
var dt_43907 = (e - s);
if(((16) < dt_43907)){
goog.log.warning(l_43906,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_43907),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args43908 = [];
var len__27785__auto___43955 = arguments.length;
var i__27786__auto___43956 = (0);
while(true){
if((i__27786__auto___43956 < len__27785__auto___43955)){
args43908.push((arguments[i__27786__auto___43956]));

var G__43957 = (i__27786__auto___43956 + (1));
i__27786__auto___43956 = G__43957;
continue;
} else {
}
break;
}

var G__43910 = args43908.length;
switch (G__43910) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43908.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__43933){
var vec__43937 = p__43933;
var table = cljs.core.nth.call(null,vec__43937,(0),null);
var id = cljs.core.nth.call(null,vec__43937,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__43940){
var vec__43948 = p__43940;
var old = cljs.core.nth.call(null,vec__43948,(0),null);
var vec__43951 = cljs.core.nth.call(null,vec__43948,(1),null);
var _ = cljs.core.nth.call(null,vec__43951,(0),null);
var id = cljs.core.nth.call(null,vec__43951,(1),null);
var new$ = vec__43951;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__43954 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__43954,id_key,id);
} else {
return G__43954;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__43959_SHARP_){
return cljs.core.update_in.call(null,p1__43959_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__43960_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__43960_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__43971 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__43971);
} else {
return G__43971;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__43961_SHARP_){
return cljs.core.update_in.call(null,p1__43961_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__43972 = cljs.core.next.call(null,exprs);
var G__43973 = ret__$1;
exprs = G__43972;
ret__$1 = G__43973;
continue;
} else {
var G__43974 = cljs.core.next.call(null,exprs);
var G__43975 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__43974;
ret__$1 = G__43975;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__43976 = cljs.core.next.call(null,exprs);
var G__43977 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__43976;
ret__$1 = G__43977;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__43962_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__43962_SHARP_))),p1__43962_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__43978 = cljs.core.next.call(null,exprs);
var G__43979 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__43978;
ret__$1 = G__43979;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__43980 = cljs.core.next.call(null,exprs);
var G__43981 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__43980;
ret__$1 = G__43981;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__43963_SHARP_){
return cljs.core.update_in.call(null,p1__43963_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__26602__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__43982 = cljs.core.next.call(null,exprs);
var G__43983 = null;
exprs = G__43982;
ret__$1 = G__43983;
continue;
} else {
var G__43984 = cljs.core.next.call(null,exprs);
var G__43985 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__43984;
ret__$1 = G__43985;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__43991){
var map__43995 = p__43991;
var map__43995__$1 = ((((!((map__43995 == null)))?((((map__43995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43995):map__43995);
var config = map__43995__$1;
var root_render = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__43995,map__43995__$1,config){
return (function (p1__43988_SHARP_,p2__43989_SHARP_){
return ReactDOM.render(p1__43988_SHARP_,p2__43989_SHARP_);
});})(map__43995,map__43995__$1,config))
);
var normalize = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__43986_SHARP_,p2__43987_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__43986_SHARP_,p2__43987_SHARP_);
});})(map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__43990_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__43990_SHARP_);
});})(map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__43995__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__43995,map__43995__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__26602__auto__ = !(norm_QMARK_);
if(or__26602__auto__){
return or__26602__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args43998 = [];
var len__27785__auto___44001 = arguments.length;
var i__27786__auto___44002 = (0);
while(true){
if((i__27786__auto___44002 < len__27785__auto___44001)){
args43998.push((arguments[i__27786__auto___44002]));

var G__44003 = (i__27786__auto___44002 + (1));
i__27786__auto___44002 = G__44003;
continue;
} else {
}
break;
}

var G__44000 = args43998.length;
switch (G__44000) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43998.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args44005 = [];
var len__27785__auto___44008 = arguments.length;
var i__27786__auto___44009 = (0);
while(true){
if((i__27786__auto___44009 < len__27785__auto___44008)){
args44005.push((arguments[i__27786__auto___44009]));

var G__44010 = (i__27786__auto___44009 + (1));
i__27786__auto___44009 = G__44010;
continue;
} else {
}
break;
}

var G__44007 = args44005.length;
switch (G__44007) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44005.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args44012 = [];
var len__27785__auto___44015 = arguments.length;
var i__27786__auto___44016 = (0);
while(true){
if((i__27786__auto___44016 < len__27785__auto___44015)){
args44012.push((arguments[i__27786__auto___44016]));

var G__44017 = (i__27786__auto___44016 + (1));
i__27786__auto___44016 = G__44017;
continue;
} else {
}
break;
}

var G__44014 = args44012.length;
switch (G__44014) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44012.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args44019 = [];
var len__27785__auto___44022 = arguments.length;
var i__27786__auto___44023 = (0);
while(true){
if((i__27786__auto___44023 < len__27785__auto___44022)){
args44019.push((arguments[i__27786__auto___44023]));

var G__44024 = (i__27786__auto___44023 + (1));
i__27786__auto___44023 = G__44024;
continue;
} else {
}
break;
}

var G__44021 = args44019.length;
switch (G__44021) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44019.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__27528__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map?rel=1496386703555