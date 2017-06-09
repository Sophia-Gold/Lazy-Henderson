// Compiled by ClojureScript 1.9.198 {}
goog.provide('Lazy_Henderson.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
Lazy_Henderson.core.make_vect = (function Lazy_Henderson$core$make_vect(x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,y],null));
});
Lazy_Henderson.core.xcor_vect = (function Lazy_Henderson$core$xcor_vect(vect){
return cljs.core.first.call(null,vect);
});
Lazy_Henderson.core.ycor_vect = (function Lazy_Henderson$core$ycor_vect(vect){
return cljs.core.peek.call(null,vect);
});
Lazy_Henderson.core.add_vect = (function Lazy_Henderson$core$add_vect(v1,v2){
return Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,v1) + Lazy_Henderson.core.xcor_vect.call(null,v2)),(Lazy_Henderson.core.ycor_vect.call(null,v1) + Lazy_Henderson.core.ycor_vect.call(null,v2)));
});
Lazy_Henderson.core.sub_vect = (function Lazy_Henderson$core$sub_vect(v1,v2){
return Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,v1) - Lazy_Henderson.core.xcor_vect.call(null,v2)),(Lazy_Henderson.core.ycor_vect.call(null,v1) - Lazy_Henderson.core.ycor_vect.call(null,v2)));
});
Lazy_Henderson.core.scale_vect = (function Lazy_Henderson$core$scale_vect(s,v){
return Lazy_Henderson.core.make_vect.call(null,(s * Lazy_Henderson.core.xcor_vect.call(null,v)),(s * Lazy_Henderson.core.ycor_vect.call(null,v)));
});
Lazy_Henderson.core.make_segment = (function Lazy_Henderson$core$make_segment(v1,v2){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[v1,v2],null));
});
Lazy_Henderson.core.start_segment = (function Lazy_Henderson$core$start_segment(segment){
return cljs.core.first.call(null,segment);
});
Lazy_Henderson.core.end_segment = (function Lazy_Henderson$core$end_segment(segment){
return cljs.core.peek.call(null,segment);
});
Lazy_Henderson.core.make_frame = (function Lazy_Henderson$core$make_frame(edge1,edge2,origin){
return (new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[Lazy_Henderson.core.xcor_vect.call(null,edge1),Lazy_Henderson.core.ycor_vect.call(null,edge1),Lazy_Henderson.core.xcor_vect.call(null,edge2),Lazy_Henderson.core.ycor_vect.call(null,edge2),Lazy_Henderson.core.xcor_vect.call(null,origin),Lazy_Henderson.core.ycor_vect.call(null,origin)],null));
});
Lazy_Henderson.core.edge1_frame = (function Lazy_Henderson$core$edge1_frame(frame){
return cljs.core.subvec.call(null,frame,(0),(2));
});
Lazy_Henderson.core.edge2_frame = (function Lazy_Henderson$core$edge2_frame(frame){
return cljs.core.subvec.call(null,frame,(2),(4));
});
Lazy_Henderson.core.origin_frame = (function Lazy_Henderson$core$origin_frame(frame){
return cljs.core.subvec.call(null,frame,(4),(6));
});
Lazy_Henderson.core.store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
Lazy_Henderson.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),Lazy_Henderson.core.store], null));
/**
 * @constructor
 */
Lazy_Henderson.core.slider = (function Lazy_Henderson$core$slider(){
var this__40071__auto__ = this;
React.Component.apply(this__40071__auto__,arguments);

if(!((this__40071__auto__.initLocalState == null))){
this__40071__auto__.state = this__40071__auto__.initLocalState();
} else {
this__40071__auto__.state = {};
}

return this__40071__auto__;
});

Lazy_Henderson.core.slider.prototype = goog.object.clone(React.Component.prototype);

var x41917_41929 = Lazy_Henderson.core.slider.prototype;
x41917_41929.componentWillUpdate = ((function (x41917_41929){
return (function (next_props__39932__auto__,next_state__39933__auto__){
var this__39931__auto__ = this;
if(((!((this__39931__auto__ == null)))?(((false) || (this__39931__auto__.om$next$Ident$))?true:false):false)){
var ident__39935__auto___41930 = om.next.ident.call(null,this__39931__auto__,om.next.props.call(null,this__39931__auto__));
var next_ident__39936__auto___41931 = om.next.ident.call(null,this__39931__auto__,om.next._next_props.call(null,next_props__39932__auto__,this__39931__auto__));
if(cljs.core.not_EQ_.call(null,ident__39935__auto___41930,next_ident__39936__auto___41931)){
var idxr__39937__auto___41932 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__39937__auto___41932 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__39937__auto___41932),((function (idxr__39937__auto___41932,ident__39935__auto___41930,next_ident__39936__auto___41931,this__39931__auto__,x41917_41929){
return (function (indexes__39938__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__39938__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__39935__auto___41930], null),cljs.core.disj,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__39936__auto___41931], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__39931__auto__);
});})(idxr__39937__auto___41932,ident__39935__auto___41930,next_ident__39936__auto___41931,this__39931__auto__,x41917_41929))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__39931__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__39931__auto__);
});})(x41917_41929))
;

x41917_41929.shouldComponentUpdate = ((function (x41917_41929){
return (function (next_props__39932__auto__,next_state__39933__auto__){
var this__39931__auto__ = this;
var next_children__39934__auto__ = next_props__39932__auto__.children;
var next_props__39932__auto____$1 = goog.object.get(next_props__39932__auto__,"omcljs$value");
var next_props__39932__auto____$2 = (function (){var G__41919 = next_props__39932__auto____$1;
if((next_props__39932__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41919);
} else {
return G__41919;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__39931__auto__),next_props__39932__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__39931__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__39931__auto__.state,"omcljs$state"),goog.object.get(next_state__39933__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__39931__auto__.props.children,next_children__39934__auto__);
}
}
});})(x41917_41929))
;

x41917_41929.componentWillUnmount = ((function (x41917_41929){
return (function (){
var this__39931__auto__ = this;
var r__39942__auto__ = om.next.get_reconciler.call(null,this__39931__auto__);
var cfg__39943__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__39942__auto__);
var st__39944__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__39943__auto__);
var indexer__39941__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__39943__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__39944__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__39944__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__39931__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__39944__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__39931__auto__);
} else {
}

if((indexer__39941__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__39941__auto__,this__39931__auto__);
}
});})(x41917_41929))
;

x41917_41929.componentDidUpdate = ((function (x41917_41929){
return (function (prev_props__39939__auto__,prev_state__39940__auto__){
var this__39931__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__39931__auto__);
});})(x41917_41929))
;

x41917_41929.isMounted = ((function (x41917_41929){
return (function (){
var this__39931__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__39931__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41917_41929))
;

x41917_41929.componentWillMount = ((function (x41917_41929){
return (function (){
var this__39931__auto__ = this;
var indexer__39941__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__39941__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__39941__auto__,this__39931__auto__);
}
});})(x41917_41929))
;

x41917_41929.render = ((function (x41917_41929){
return (function (){
var this__39930__auto__ = this;
var this$ = this__39930__auto__;
var _STAR_reconciler_STAR_41920 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41921 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41922 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41923 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41924 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__39930__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__39930__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__39930__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__39930__auto__);

om.next._STAR_parent_STAR_ = this__39930__auto__;

try{var map__41925 = om.next.props.call(null,this$);
var map__41925__$1 = ((((!((map__41925 == null)))?((((map__41925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41925):map__41925);
var id = cljs.core.get.call(null,map__41925__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__41925__$1,new cljs.core.Keyword(null,"value","value",305978217));
var transform = cljs.core.get.call(null,map__41925__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
return om.dom.input.call(null,({"id": id, "type": "range", "min": (0), "max": (99), "step": (1), "style": ({"width": "360px", "position": "absolute", "transform": transform})}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41924;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41923;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41922;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41921;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41920;
}});})(x41917_41929))
;


Lazy_Henderson.core.slider.prototype.constructor = Lazy_Henderson.core.slider;

Lazy_Henderson.core.slider.prototype.constructor.displayName = "Lazy-Henderson.core/slider";

Lazy_Henderson.core.slider.prototype.om$isComponent = true;

var x41927_41933 = Lazy_Henderson.core.slider;


var x41928_41934 = Lazy_Henderson.core.slider.prototype;


Lazy_Henderson.core.slider.cljs$lang$type = true;

Lazy_Henderson.core.slider.cljs$lang$ctorStr = "Lazy-Henderson.core/slider";

Lazy_Henderson.core.slider.cljs$lang$ctorPrWriter = (function (this__40074__auto__,writer__40075__auto__,opt__40076__auto__){
return cljs.core._write.call(null,writer__40075__auto__,"Lazy-Henderson.core/slider");
});
Lazy_Henderson.core.slider_factory = om.next.factory.call(null,Lazy_Henderson.core.slider);
/**
 * @constructor
 */
Lazy_Henderson.core.slider_generator = (function Lazy_Henderson$core$slider_generator(){
var this__40071__auto__ = this;
React.Component.apply(this__40071__auto__,arguments);

if(!((this__40071__auto__.initLocalState == null))){
this__40071__auto__.state = this__40071__auto__.initLocalState();
} else {
this__40071__auto__.state = {};
}

return this__40071__auto__;
});

Lazy_Henderson.core.slider_generator.prototype = goog.object.clone(React.Component.prototype);

var x41940_41950 = Lazy_Henderson.core.slider_generator.prototype;
x41940_41950.componentWillUpdate = ((function (x41940_41950){
return (function (next_props__39932__auto__,next_state__39933__auto__){
var this__39931__auto__ = this;
if(((!((this__39931__auto__ == null)))?(((false) || (this__39931__auto__.om$next$Ident$))?true:false):false)){
var ident__39935__auto___41951 = om.next.ident.call(null,this__39931__auto__,om.next.props.call(null,this__39931__auto__));
var next_ident__39936__auto___41952 = om.next.ident.call(null,this__39931__auto__,om.next._next_props.call(null,next_props__39932__auto__,this__39931__auto__));
if(cljs.core.not_EQ_.call(null,ident__39935__auto___41951,next_ident__39936__auto___41952)){
var idxr__39937__auto___41953 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__39937__auto___41953 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__39937__auto___41953),((function (idxr__39937__auto___41953,ident__39935__auto___41951,next_ident__39936__auto___41952,this__39931__auto__,x41940_41950){
return (function (indexes__39938__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__39938__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__39935__auto___41951], null),cljs.core.disj,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__39936__auto___41952], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__39931__auto__);
});})(idxr__39937__auto___41953,ident__39935__auto___41951,next_ident__39936__auto___41952,this__39931__auto__,x41940_41950))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__39931__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__39931__auto__);
});})(x41940_41950))
;

x41940_41950.shouldComponentUpdate = ((function (x41940_41950){
return (function (next_props__39932__auto__,next_state__39933__auto__){
var this__39931__auto__ = this;
var next_children__39934__auto__ = next_props__39932__auto__.children;
var next_props__39932__auto____$1 = goog.object.get(next_props__39932__auto__,"omcljs$value");
var next_props__39932__auto____$2 = (function (){var G__41942 = next_props__39932__auto____$1;
if((next_props__39932__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41942);
} else {
return G__41942;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__39931__auto__),next_props__39932__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__39931__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__39931__auto__.state,"omcljs$state"),goog.object.get(next_state__39933__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__39931__auto__.props.children,next_children__39934__auto__);
}
}
});})(x41940_41950))
;

x41940_41950.componentWillUnmount = ((function (x41940_41950){
return (function (){
var this__39931__auto__ = this;
var r__39942__auto__ = om.next.get_reconciler.call(null,this__39931__auto__);
var cfg__39943__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__39942__auto__);
var st__39944__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__39943__auto__);
var indexer__39941__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__39943__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__39944__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__39944__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__39931__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__39944__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__39931__auto__);
} else {
}

if((indexer__39941__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__39941__auto__,this__39931__auto__);
}
});})(x41940_41950))
;

x41940_41950.componentDidUpdate = ((function (x41940_41950){
return (function (prev_props__39939__auto__,prev_state__39940__auto__){
var this__39931__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__39931__auto__);
});})(x41940_41950))
;

x41940_41950.isMounted = ((function (x41940_41950){
return (function (){
var this__39931__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__39931__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41940_41950))
;

x41940_41950.componentWillMount = ((function (x41940_41950){
return (function (){
var this__39931__auto__ = this;
var indexer__39941__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39931__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__39941__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__39941__auto__,this__39931__auto__);
}
});})(x41940_41950))
;

x41940_41950.render = ((function (x41940_41950){
return (function (){
var this__39930__auto__ = this;
var this$ = this__39930__auto__;
var _STAR_reconciler_STAR_41943 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41944 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41945 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41946 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41947 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__39930__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__39930__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__39930__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__39930__auto__);

om.next._STAR_parent_STAR_ = this__39930__auto__;

try{return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_41943,_STAR_depth_STAR_41944,_STAR_shared_STAR_41945,_STAR_instrument_STAR_41946,_STAR_parent_STAR_41947,this$,this__39930__auto__,x41940_41950){
return (function (p1__41935_SHARP_){
return Lazy_Henderson.core.slider_factory.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),p1__41935_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__41935_SHARP_,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("matrix("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",p1__41935_SHARP_.call(null,om.next.props.call(null,this$))))),cljs.core.str(")")].join('')], null));
});})(_STAR_reconciler_STAR_41943,_STAR_depth_STAR_41944,_STAR_shared_STAR_41945,_STAR_instrument_STAR_41946,_STAR_parent_STAR_41947,this$,this__39930__auto__,x41940_41950))
,cljs.core.next.call(null,cljs.core.keys.call(null,om.next.props.call(null,this$)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41947;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41946;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41945;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41944;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41943;
}});})(x41940_41950))
;


Lazy_Henderson.core.slider_generator.prototype.constructor = Lazy_Henderson.core.slider_generator;

Lazy_Henderson.core.slider_generator.prototype.constructor.displayName = "Lazy-Henderson.core/slider-generator";

Lazy_Henderson.core.slider_generator.prototype.om$isComponent = true;

var x41948_41954 = Lazy_Henderson.core.slider_generator;


var x41949_41955 = Lazy_Henderson.core.slider_generator.prototype;


Lazy_Henderson.core.slider_generator.cljs$lang$type = true;

Lazy_Henderson.core.slider_generator.cljs$lang$ctorStr = "Lazy-Henderson.core/slider-generator";

Lazy_Henderson.core.slider_generator.cljs$lang$ctorPrWriter = (function (this__40074__auto__,writer__40075__auto__,opt__40076__auto__){
return cljs.core._write.call(null,writer__40075__auto__,"Lazy-Henderson.core/slider-generator");
});
om.next.add_root_BANG_.call(null,Lazy_Henderson.core.reconciler,Lazy_Henderson.core.slider_generator,goog.dom.getElement("app"));
Lazy_Henderson.core.flip_vert = (function Lazy_Henderson$core$flip_vert(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.flip_horiz = (function Lazy_Henderson$core$flip_horiz(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(- Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.rotate45 = (function Lazy_Henderson$core$rotate45(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),((1) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame))),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.beside_left = (function Lazy_Henderson$core$beside_left(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(0.5 * Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) - (90)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.beside_right = (function Lazy_Henderson$core$beside_right(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(0.5 * Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + (90)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.beside = (function Lazy_Henderson$core$beside(left_component,right_component){
Lazy_Henderson.core.beside_left.call(null,left_component);

return Lazy_Henderson.core.beside_right.call(null,right_component);
});
Lazy_Henderson.core.below_top = (function Lazy_Henderson$core$below_top(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(0.5 * Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + (90))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.below_bottom = (function Lazy_Henderson$core$below_bottom(component){
var old_component = cljs.core.keyword.call(null,component);
var new_component = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(component)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_component);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(0.5 * Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) - (90))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_component,new_frame);

return new_component;
});
Lazy_Henderson.core.below = (function Lazy_Henderson$core$below(top_component,bottom_component){
Lazy_Henderson.core.below_top.call(null,top_component);

return Lazy_Henderson.core.below_bottom.call(null,bottom_component);
});
Lazy_Henderson.core.flipped_pairs = (function Lazy_Henderson$core$flipped_pairs(component){
Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,component));

Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,component)));

Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,component));

return Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,component)));
});
Lazy_Henderson.core.right_split = (function Lazy_Henderson$core$right_split(component,n){
while(true){
if((n === (0))){
return component;
} else {
Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.flip_vert.call(null,component));

var G__41956 = Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,component));
var G__41957 = (n - (1));
component = G__41956;
n = G__41957;
continue;
}
break;
}
});
Lazy_Henderson.core.up_split = (function Lazy_Henderson$core$up_split(component,n){
while(true){
if((n === (0))){
return component;
} else {
Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.flip_horiz.call(null,component));

var G__41958 = Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.flip_horiz.call(null,component));
var G__41959 = (n - (1));
component = G__41958;
n = G__41959;
continue;
}
break;
}
});
Lazy_Henderson.core.corner_split = (function Lazy_Henderson$core$corner_split(component,n){
while(true){
if((n === (0))){
return component;
} else {
Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_bottom.call(null,component));

Lazy_Henderson.core.right_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,component)),n);

Lazy_Henderson.core.up_split.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_top.call(null,component)),n);

var G__41960 = Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,component));
var G__41961 = (n - (1));
component = G__41960;
n = G__41961;
continue;
}
break;
}
});
Lazy_Henderson.core.square_limit = (function Lazy_Henderson$core$square_limit(component,n){
Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,component))),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,component)),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,component)))),n);

return Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,component))),n);
});
Lazy_Henderson.core.component = (function Lazy_Henderson$core$component(component__$1){
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,cljs.core.keyword.call(null,component__$1),Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(1),(0)),Lazy_Henderson.core.make_vect.call(null,(0),(1)),Lazy_Henderson.core.make_vect.call(null,(0),(1))));

return component__$1;
});
Lazy_Henderson.core.square_limit.call(null,Lazy_Henderson.core.component.call(null,"slider"),(5));

//# sourceMappingURL=core.js.map?rel=1496995049793