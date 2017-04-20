// Compiled by ClojureScript 1.9.198 {}
goog.provide('Lazy_Henderson.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
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
var this__12847__auto__ = this;
React.Component.apply(this__12847__auto__,arguments);

if(!((this__12847__auto__.initLocalState == null))){
this__12847__auto__.state = this__12847__auto__.initLocalState();
} else {
this__12847__auto__.state = {};
}

return this__12847__auto__;
});

Lazy_Henderson.core.slider.prototype = goog.object.clone(React.Component.prototype);

var x14933_14945 = Lazy_Henderson.core.slider.prototype;
x14933_14945.componentWillUpdate = ((function (x14933_14945){
return (function (next_props__12708__auto__,next_state__12709__auto__){
var this__12707__auto__ = this;
if(((!((this__12707__auto__ == null)))?(((false) || (this__12707__auto__.om$next$Ident$))?true:false):false)){
var ident__12711__auto___14946 = om.next.ident.call(null,this__12707__auto__,om.next.props.call(null,this__12707__auto__));
var next_ident__12712__auto___14947 = om.next.ident.call(null,this__12707__auto__,om.next._next_props.call(null,next_props__12708__auto__,this__12707__auto__));
if(cljs.core.not_EQ_.call(null,ident__12711__auto___14946,next_ident__12712__auto___14947)){
var idxr__12713__auto___14948 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__12713__auto___14948 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__12713__auto___14948),((function (idxr__12713__auto___14948,ident__12711__auto___14946,next_ident__12712__auto___14947,this__12707__auto__,x14933_14945){
return (function (indexes__12714__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__12714__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__12711__auto___14946], null),cljs.core.disj,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__12712__auto___14947], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12707__auto__);
});})(idxr__12713__auto___14948,ident__12711__auto___14946,next_ident__12712__auto___14947,this__12707__auto__,x14933_14945))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__12707__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12707__auto__);
});})(x14933_14945))
;

x14933_14945.shouldComponentUpdate = ((function (x14933_14945){
return (function (next_props__12708__auto__,next_state__12709__auto__){
var this__12707__auto__ = this;
var next_children__12710__auto__ = next_props__12708__auto__.children;
var next_props__12708__auto____$1 = goog.object.get(next_props__12708__auto__,"omcljs$value");
var next_props__12708__auto____$2 = (function (){var G__14935 = next_props__12708__auto____$1;
if((next_props__12708__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__14935);
} else {
return G__14935;
}
})();
var or__6938__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12707__auto__),next_props__12708__auto____$2);
if(or__6938__auto__){
return or__6938__auto__;
} else {
var or__6938__auto____$1 = (function (){var and__6926__auto__ = this__12707__auto__.state;
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12707__auto__.state,"omcljs$state"),goog.object.get(next_state__12709__auto__,"omcljs$state"));
} else {
return and__6926__auto__;
}
})();
if(cljs.core.truth_(or__6938__auto____$1)){
return or__6938__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__12707__auto__.props.children,next_children__12710__auto__);
}
}
});})(x14933_14945))
;

x14933_14945.componentWillUnmount = ((function (x14933_14945){
return (function (){
var this__12707__auto__ = this;
var r__12718__auto__ = om.next.get_reconciler.call(null,this__12707__auto__);
var cfg__12719__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12718__auto__);
var st__12720__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12719__auto__);
var indexer__12717__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12719__auto__);
if(cljs.core.truth_((function (){var and__6926__auto__ = !((st__12720__auto__ == null));
if(and__6926__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__12720__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__12707__auto__], null));
} else {
return and__6926__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__12720__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12707__auto__);
} else {
}

if((indexer__12717__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12717__auto__,this__12707__auto__);
}
});})(x14933_14945))
;

x14933_14945.componentDidUpdate = ((function (x14933_14945){
return (function (prev_props__12715__auto__,prev_state__12716__auto__){
var this__12707__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12707__auto__);
});})(x14933_14945))
;

x14933_14945.isMounted = ((function (x14933_14945){
return (function (){
var this__12707__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12707__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14933_14945))
;

x14933_14945.componentWillMount = ((function (x14933_14945){
return (function (){
var this__12707__auto__ = this;
var indexer__12717__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12717__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12717__auto__,this__12707__auto__);
}
});})(x14933_14945))
;

x14933_14945.render = ((function (x14933_14945){
return (function (){
var this__12706__auto__ = this;
var this$ = this__12706__auto__;
var _STAR_reconciler_STAR_14936 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14937 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14938 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14939 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14940 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__12706__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__12706__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__12706__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__12706__auto__);

om.next._STAR_parent_STAR_ = this__12706__auto__;

try{var map__14941 = om.next.props.call(null,this$);
var map__14941__$1 = ((((!((map__14941 == null)))?((((map__14941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14941):map__14941);
var id = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword(null,"value","value",305978217));
var transform = cljs.core.get.call(null,map__14941__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
return om.dom.input.call(null,({"id": id, "type": "range", "min": (0), "max": (99), "step": (1), "style": ({"width": "360px", "position": "absolute", "transform": transform})}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14940;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14939;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14938;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14937;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14936;
}});})(x14933_14945))
;


Lazy_Henderson.core.slider.prototype.constructor = Lazy_Henderson.core.slider;

Lazy_Henderson.core.slider.prototype.constructor.displayName = "Lazy-Henderson.core/slider";

Lazy_Henderson.core.slider.prototype.om$isComponent = true;

var x14943_14949 = Lazy_Henderson.core.slider;


var x14944_14950 = Lazy_Henderson.core.slider.prototype;


Lazy_Henderson.core.slider.cljs$lang$type = true;

Lazy_Henderson.core.slider.cljs$lang$ctorStr = "Lazy-Henderson.core/slider";

Lazy_Henderson.core.slider.cljs$lang$ctorPrWriter = (function (this__12850__auto__,writer__12851__auto__,opt__12852__auto__){
return cljs.core._write.call(null,writer__12851__auto__,"Lazy-Henderson.core/slider");
});
Lazy_Henderson.core.slider_factory = om.next.factory.call(null,Lazy_Henderson.core.slider);
/**
 * @constructor
 */
Lazy_Henderson.core.slider_generator = (function Lazy_Henderson$core$slider_generator(){
var this__12847__auto__ = this;
React.Component.apply(this__12847__auto__,arguments);

if(!((this__12847__auto__.initLocalState == null))){
this__12847__auto__.state = this__12847__auto__.initLocalState();
} else {
this__12847__auto__.state = {};
}

return this__12847__auto__;
});

Lazy_Henderson.core.slider_generator.prototype = goog.object.clone(React.Component.prototype);

var x14956_14966 = Lazy_Henderson.core.slider_generator.prototype;
x14956_14966.componentWillUpdate = ((function (x14956_14966){
return (function (next_props__12708__auto__,next_state__12709__auto__){
var this__12707__auto__ = this;
if(((!((this__12707__auto__ == null)))?(((false) || (this__12707__auto__.om$next$Ident$))?true:false):false)){
var ident__12711__auto___14967 = om.next.ident.call(null,this__12707__auto__,om.next.props.call(null,this__12707__auto__));
var next_ident__12712__auto___14968 = om.next.ident.call(null,this__12707__auto__,om.next._next_props.call(null,next_props__12708__auto__,this__12707__auto__));
if(cljs.core.not_EQ_.call(null,ident__12711__auto___14967,next_ident__12712__auto___14968)){
var idxr__12713__auto___14969 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__12713__auto___14969 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__12713__auto___14969),((function (idxr__12713__auto___14969,ident__12711__auto___14967,next_ident__12712__auto___14968,this__12707__auto__,x14956_14966){
return (function (indexes__12714__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__12714__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__12711__auto___14967], null),cljs.core.disj,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__12712__auto___14968], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12707__auto__);
});})(idxr__12713__auto___14969,ident__12711__auto___14967,next_ident__12712__auto___14968,this__12707__auto__,x14956_14966))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__12707__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12707__auto__);
});})(x14956_14966))
;

x14956_14966.shouldComponentUpdate = ((function (x14956_14966){
return (function (next_props__12708__auto__,next_state__12709__auto__){
var this__12707__auto__ = this;
var next_children__12710__auto__ = next_props__12708__auto__.children;
var next_props__12708__auto____$1 = goog.object.get(next_props__12708__auto__,"omcljs$value");
var next_props__12708__auto____$2 = (function (){var G__14958 = next_props__12708__auto____$1;
if((next_props__12708__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__14958);
} else {
return G__14958;
}
})();
var or__6938__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12707__auto__),next_props__12708__auto____$2);
if(or__6938__auto__){
return or__6938__auto__;
} else {
var or__6938__auto____$1 = (function (){var and__6926__auto__ = this__12707__auto__.state;
if(cljs.core.truth_(and__6926__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12707__auto__.state,"omcljs$state"),goog.object.get(next_state__12709__auto__,"omcljs$state"));
} else {
return and__6926__auto__;
}
})();
if(cljs.core.truth_(or__6938__auto____$1)){
return or__6938__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__12707__auto__.props.children,next_children__12710__auto__);
}
}
});})(x14956_14966))
;

x14956_14966.componentWillUnmount = ((function (x14956_14966){
return (function (){
var this__12707__auto__ = this;
var r__12718__auto__ = om.next.get_reconciler.call(null,this__12707__auto__);
var cfg__12719__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12718__auto__);
var st__12720__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12719__auto__);
var indexer__12717__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12719__auto__);
if(cljs.core.truth_((function (){var and__6926__auto__ = !((st__12720__auto__ == null));
if(and__6926__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__12720__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__12707__auto__], null));
} else {
return and__6926__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__12720__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12707__auto__);
} else {
}

if((indexer__12717__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12717__auto__,this__12707__auto__);
}
});})(x14956_14966))
;

x14956_14966.componentDidUpdate = ((function (x14956_14966){
return (function (prev_props__12715__auto__,prev_state__12716__auto__){
var this__12707__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12707__auto__);
});})(x14956_14966))
;

x14956_14966.isMounted = ((function (x14956_14966){
return (function (){
var this__12707__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12707__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14956_14966))
;

x14956_14966.componentWillMount = ((function (x14956_14966){
return (function (){
var this__12707__auto__ = this;
var indexer__12717__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12707__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12717__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12717__auto__,this__12707__auto__);
}
});})(x14956_14966))
;

x14956_14966.render = ((function (x14956_14966){
return (function (){
var this__12706__auto__ = this;
var this$ = this__12706__auto__;
var _STAR_reconciler_STAR_14959 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14960 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14961 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14962 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14963 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__12706__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__12706__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__12706__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__12706__auto__);

om.next._STAR_parent_STAR_ = this__12706__auto__;

try{return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_14959,_STAR_depth_STAR_14960,_STAR_shared_STAR_14961,_STAR_instrument_STAR_14962,_STAR_parent_STAR_14963,this$,this__12706__auto__,x14956_14966){
return (function (p1__14951_SHARP_){
return Lazy_Henderson.core.slider_factory.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),p1__14951_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__14951_SHARP_,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("matrix("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",p1__14951_SHARP_.call(null,om.next.props.call(null,this$))))),cljs.core.str(")")].join('')], null));
});})(_STAR_reconciler_STAR_14959,_STAR_depth_STAR_14960,_STAR_shared_STAR_14961,_STAR_instrument_STAR_14962,_STAR_parent_STAR_14963,this$,this__12706__auto__,x14956_14966))
,cljs.core.next.call(null,cljs.core.keys.call(null,om.next.props.call(null,this$)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14963;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14962;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14961;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14960;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14959;
}});})(x14956_14966))
;


Lazy_Henderson.core.slider_generator.prototype.constructor = Lazy_Henderson.core.slider_generator;

Lazy_Henderson.core.slider_generator.prototype.constructor.displayName = "Lazy-Henderson.core/slider-generator";

Lazy_Henderson.core.slider_generator.prototype.om$isComponent = true;

var x14964_14970 = Lazy_Henderson.core.slider_generator;


var x14965_14971 = Lazy_Henderson.core.slider_generator.prototype;


Lazy_Henderson.core.slider_generator.cljs$lang$type = true;

Lazy_Henderson.core.slider_generator.cljs$lang$ctorStr = "Lazy-Henderson.core/slider-generator";

Lazy_Henderson.core.slider_generator.cljs$lang$ctorPrWriter = (function (this__12850__auto__,writer__12851__auto__,opt__12852__auto__){
return cljs.core._write.call(null,writer__12851__auto__,"Lazy-Henderson.core/slider-generator");
});
om.next.add_root_BANG_.call(null,Lazy_Henderson.core.reconciler,Lazy_Henderson.core.slider_generator,goog.dom.getElement("app"));
Lazy_Henderson.core.component = (function Lazy_Henderson$core$component(component__$1){
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,cljs.core.keyword.call(null,component__$1),Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(1),(0)),Lazy_Henderson.core.make_vect.call(null,(0),(1)),Lazy_Henderson.core.make_vect.call(null,(0),(0))));

return component__$1;
});
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
if(cljs.core._EQ_.call(null,n,(0))){
return component;
} else {
var smaller = Lazy_Henderson$core$right_split.call(null,Lazy_Henderson.core.beside_right.call(null,component),(n - (1)));
Lazy_Henderson.core.beside_left.call(null,component);

Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,component));

return Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,component));
}
});
Lazy_Henderson.core.up_split = (function Lazy_Henderson$core$up_split(component,n){
if(cljs.core._EQ_.call(null,n,(0))){
return component;
} else {
var smaller = Lazy_Henderson$core$up_split.call(null,Lazy_Henderson.core.below_top.call(null,component),(n - (1)));
Lazy_Henderson.core.below_bottom.call(null,component);

Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,component));

return Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,component));
}
});
Lazy_Henderson.core.corner_split = (function Lazy_Henderson$core$corner_split(component,n){
Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_bottom.call(null,component));

Lazy_Henderson.core.right_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,component)),n);

Lazy_Henderson.core.up_split.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_top.call(null,component)),n);

return Lazy_Henderson$core$corner_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,component)),(n - (1)));
});
Lazy_Henderson.core.square_limit = (function Lazy_Henderson$core$square_limit(component,n){
Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,component))),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,component)),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,component)))),n);

return Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,component))),n);
});
Lazy_Henderson.core.up_split.call(null,Lazy_Henderson.core.component.call(null,"slider"),(5));

//# sourceMappingURL=core.js.map?rel=1492673030210