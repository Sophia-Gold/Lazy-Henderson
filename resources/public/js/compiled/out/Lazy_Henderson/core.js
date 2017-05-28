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
Lazy_Henderson.core.store = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segment-list","segment-list",-581798026),(function (){var x__27528__auto__ = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.25,(0)),Lazy_Henderson.core.make_vect.call(null,.35,.5));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$1 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.5),Lazy_Henderson.core.make_vect.call(null,.3,.6));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$2 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.6),Lazy_Henderson.core.make_vect.call(null,.15,.4));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$3 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.4),Lazy_Henderson.core.make_vect.call(null,(0),.65));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$4 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.65),Lazy_Henderson.core.make_vect.call(null,(0),.85));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$5 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.85),Lazy_Henderson.core.make_vect.call(null,.15,.6));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$6 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.6),Lazy_Henderson.core.make_vect.call(null,.3,.65));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$7 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.65),Lazy_Henderson.core.make_vect.call(null,.4,.65));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$8 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,.65),Lazy_Henderson.core.make_vect.call(null,.35,.85));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$9 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.85),Lazy_Henderson.core.make_vect.call(null,.4,(1)));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$10 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(1)),Lazy_Henderson.core.make_vect.call(null,.6,(1)));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$11 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(1)),Lazy_Henderson.core.make_vect.call(null,.65,.85));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$12 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.65,.85),Lazy_Henderson.core.make_vect.call(null,.6,.65));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$13 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.65),Lazy_Henderson.core.make_vect.call(null,.75,.65));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$14 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,.65),Lazy_Henderson.core.make_vect.call(null,(1),.35));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$15 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.35),Lazy_Henderson.core.make_vect.call(null,(1),.15));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$16 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.15),Lazy_Henderson.core.make_vect.call(null,.6,.45));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$17 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.45),Lazy_Henderson.core.make_vect.call(null,.75,(0)));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$18 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,(0)),Lazy_Henderson.core.make_vect.call(null,.6,(0)));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$19 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(0)),Lazy_Henderson.core.make_vect.call(null,.5,.3));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$20 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.5,.3),Lazy_Henderson.core.make_vect.call(null,.4,(0)));
return cljs.core._conj.call(null,(function (){var x__27528__auto____$21 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(0)),Lazy_Henderson.core.make_vect.call(null,.25,(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27528__auto____$21);
})(),x__27528__auto____$20);
})(),x__27528__auto____$19);
})(),x__27528__auto____$18);
})(),x__27528__auto____$17);
})(),x__27528__auto____$16);
})(),x__27528__auto____$15);
})(),x__27528__auto____$14);
})(),x__27528__auto____$13);
})(),x__27528__auto____$12);
})(),x__27528__auto____$11);
})(),x__27528__auto____$10);
})(),x__27528__auto____$9);
})(),x__27528__auto____$8);
})(),x__27528__auto____$7);
})(),x__27528__auto____$6);
})(),x__27528__auto____$5);
})(),x__27528__auto____$4);
})(),x__27528__auto____$3);
})(),x__27528__auto____$2);
})(),x__27528__auto____$1);
})(),x__27528__auto__);
})()], null));
Lazy_Henderson.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),Lazy_Henderson.core.store], null));
/**
 * @constructor
 */
Lazy_Henderson.core.canvas = (function Lazy_Henderson$core$canvas(){
var this__40070__auto__ = this;
React.Component.apply(this__40070__auto__,arguments);

if(!((this__40070__auto__.initLocalState == null))){
this__40070__auto__.state = this__40070__auto__.initLocalState();
} else {
this__40070__auto__.state = {};
}

return this__40070__auto__;
});

Lazy_Henderson.core.canvas.prototype = goog.object.clone(React.Component.prototype);

var x42258_42270 = Lazy_Henderson.core.canvas.prototype;
x42258_42270.componentWillUpdate = ((function (x42258_42270){
return (function (next_props__39931__auto__,next_state__39932__auto__){
var this__39930__auto__ = this;
if(((!((this__39930__auto__ == null)))?(((false) || (this__39930__auto__.om$next$Ident$))?true:false):false)){
var ident__39934__auto___42271 = om.next.ident.call(null,this__39930__auto__,om.next.props.call(null,this__39930__auto__));
var next_ident__39935__auto___42272 = om.next.ident.call(null,this__39930__auto__,om.next._next_props.call(null,next_props__39931__auto__,this__39930__auto__));
if(cljs.core.not_EQ_.call(null,ident__39934__auto___42271,next_ident__39935__auto___42272)){
var idxr__39936__auto___42273 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__39936__auto___42273 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__39936__auto___42273),((function (idxr__39936__auto___42273,ident__39934__auto___42271,next_ident__39935__auto___42272,this__39930__auto__,x42258_42270){
return (function (indexes__39937__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__39937__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__39934__auto___42271], null),cljs.core.disj,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__39935__auto___42272], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__39930__auto__);
});})(idxr__39936__auto___42273,ident__39934__auto___42271,next_ident__39935__auto___42272,this__39930__auto__,x42258_42270))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__39930__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__39930__auto__);
});})(x42258_42270))
;

x42258_42270.shouldComponentUpdate = ((function (x42258_42270){
return (function (next_props__39931__auto__,next_state__39932__auto__){
var this__39930__auto__ = this;
var next_children__39933__auto__ = next_props__39931__auto__.children;
var next_props__39931__auto____$1 = goog.object.get(next_props__39931__auto__,"omcljs$value");
var next_props__39931__auto____$2 = (function (){var G__42260 = next_props__39931__auto____$1;
if((next_props__39931__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42260);
} else {
return G__42260;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__39930__auto__),next_props__39931__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__39930__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__39930__auto__.state,"omcljs$state"),goog.object.get(next_state__39932__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__39930__auto__.props.children,next_children__39933__auto__);
}
}
});})(x42258_42270))
;

x42258_42270.componentWillUnmount = ((function (x42258_42270){
return (function (){
var this__39930__auto__ = this;
var r__39941__auto__ = om.next.get_reconciler.call(null,this__39930__auto__);
var cfg__39942__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__39941__auto__);
var st__39943__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__39942__auto__);
var indexer__39940__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__39942__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__39943__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__39943__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__39930__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__39943__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__39930__auto__);
} else {
}

if((indexer__39940__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__39940__auto__,this__39930__auto__);
}
});})(x42258_42270))
;

x42258_42270.componentDidUpdate = ((function (x42258_42270){
return (function (prev_props__39938__auto__,prev_state__39939__auto__){
var this__39930__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__39930__auto__);
});})(x42258_42270))
;

x42258_42270.isMounted = ((function (x42258_42270){
return (function (){
var this__39930__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__39930__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42258_42270))
;

x42258_42270.componentWillMount = ((function (x42258_42270){
return (function (){
var this__39930__auto__ = this;
var indexer__39940__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__39940__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__39940__auto__,this__39930__auto__);
}
});})(x42258_42270))
;

x42258_42270.render = ((function (x42258_42270){
return (function (){
var this__39929__auto__ = this;
var this$ = this__39929__auto__;
var _STAR_reconciler_STAR_42261 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42262 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42263 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42264 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42265 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__39929__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__39929__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__39929__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__39929__auto__);

om.next._STAR_parent_STAR_ = this__39929__auto__;

try{var map__42266 = om.next.props.call(null,this$);
var map__42266__$1 = ((((!((map__42266 == null)))?((((map__42266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42266):map__42266);
var id = cljs.core.get.call(null,map__42266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width = cljs.core.get.call(null,map__42266__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__42266__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return om.dom.input.call(null,({"id": id, "width": width, "height": height}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42265;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42264;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42263;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42262;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42261;
}});})(x42258_42270))
;


Lazy_Henderson.core.canvas.prototype.constructor = Lazy_Henderson.core.canvas;

Lazy_Henderson.core.canvas.prototype.constructor.displayName = "Lazy-Henderson.core/canvas";

Lazy_Henderson.core.canvas.prototype.om$isComponent = true;

var x42268_42274 = Lazy_Henderson.core.canvas;


var x42269_42275 = Lazy_Henderson.core.canvas.prototype;


Lazy_Henderson.core.canvas.cljs$lang$type = true;

Lazy_Henderson.core.canvas.cljs$lang$ctorStr = "Lazy-Henderson.core/canvas";

Lazy_Henderson.core.canvas.cljs$lang$ctorPrWriter = (function (this__40073__auto__,writer__40074__auto__,opt__40075__auto__){
return cljs.core._write.call(null,writer__40074__auto__,"Lazy-Henderson.core/canvas");
});
Lazy_Henderson.core.canvas_factory = om.next.factory.call(null,Lazy_Henderson.core.canvas);
/**
 * @constructor
 */
Lazy_Henderson.core.canvas_generator = (function Lazy_Henderson$core$canvas_generator(){
var this__40070__auto__ = this;
React.Component.apply(this__40070__auto__,arguments);

if(!((this__40070__auto__.initLocalState == null))){
this__40070__auto__.state = this__40070__auto__.initLocalState();
} else {
this__40070__auto__.state = {};
}

return this__40070__auto__;
});

Lazy_Henderson.core.canvas_generator.prototype = goog.object.clone(React.Component.prototype);

var x42281_42291 = Lazy_Henderson.core.canvas_generator.prototype;
x42281_42291.componentWillUpdate = ((function (x42281_42291){
return (function (next_props__39931__auto__,next_state__39932__auto__){
var this__39930__auto__ = this;
if(((!((this__39930__auto__ == null)))?(((false) || (this__39930__auto__.om$next$Ident$))?true:false):false)){
var ident__39934__auto___42292 = om.next.ident.call(null,this__39930__auto__,om.next.props.call(null,this__39930__auto__));
var next_ident__39935__auto___42293 = om.next.ident.call(null,this__39930__auto__,om.next._next_props.call(null,next_props__39931__auto__,this__39930__auto__));
if(cljs.core.not_EQ_.call(null,ident__39934__auto___42292,next_ident__39935__auto___42293)){
var idxr__39936__auto___42294 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__39936__auto___42294 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__39936__auto___42294),((function (idxr__39936__auto___42294,ident__39934__auto___42292,next_ident__39935__auto___42293,this__39930__auto__,x42281_42291){
return (function (indexes__39937__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__39937__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__39934__auto___42292], null),cljs.core.disj,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__39935__auto___42293], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__39930__auto__);
});})(idxr__39936__auto___42294,ident__39934__auto___42292,next_ident__39935__auto___42293,this__39930__auto__,x42281_42291))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__39930__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__39930__auto__);
});})(x42281_42291))
;

x42281_42291.shouldComponentUpdate = ((function (x42281_42291){
return (function (next_props__39931__auto__,next_state__39932__auto__){
var this__39930__auto__ = this;
var next_children__39933__auto__ = next_props__39931__auto__.children;
var next_props__39931__auto____$1 = goog.object.get(next_props__39931__auto__,"omcljs$value");
var next_props__39931__auto____$2 = (function (){var G__42283 = next_props__39931__auto____$1;
if((next_props__39931__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42283);
} else {
return G__42283;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__39930__auto__),next_props__39931__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__39930__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__39930__auto__.state,"omcljs$state"),goog.object.get(next_state__39932__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__39930__auto__.props.children,next_children__39933__auto__);
}
}
});})(x42281_42291))
;

x42281_42291.componentWillUnmount = ((function (x42281_42291){
return (function (){
var this__39930__auto__ = this;
var r__39941__auto__ = om.next.get_reconciler.call(null,this__39930__auto__);
var cfg__39942__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__39941__auto__);
var st__39943__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__39942__auto__);
var indexer__39940__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__39942__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__39943__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__39943__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__39930__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__39943__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__39930__auto__);
} else {
}

if((indexer__39940__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__39940__auto__,this__39930__auto__);
}
});})(x42281_42291))
;

x42281_42291.componentDidUpdate = ((function (x42281_42291){
return (function (prev_props__39938__auto__,prev_state__39939__auto__){
var this__39930__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__39930__auto__);
});})(x42281_42291))
;

x42281_42291.isMounted = ((function (x42281_42291){
return (function (){
var this__39930__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__39930__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42281_42291))
;

x42281_42291.componentWillMount = ((function (x42281_42291){
return (function (){
var this__39930__auto__ = this;
var indexer__39940__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__39930__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__39940__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__39940__auto__,this__39930__auto__);
}
});})(x42281_42291))
;

x42281_42291.render = ((function (x42281_42291){
return (function (){
var this__39929__auto__ = this;
var this$ = this__39929__auto__;
var _STAR_reconciler_STAR_42284 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42285 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42286 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42287 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42288 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__39929__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__39929__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__39929__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__39929__auto__);

om.next._STAR_parent_STAR_ = this__39929__auto__;

try{return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_42284,_STAR_depth_STAR_42285,_STAR_shared_STAR_42286,_STAR_instrument_STAR_42287,_STAR_parent_STAR_42288,this$,this__39929__auto__,x42281_42291){
return (function (p1__42276_SHARP_){
return Lazy_Henderson.core.canvas_factory.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),p1__42276_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__42276_SHARP_,new cljs.core.Keyword(null,"width","width",-384071477),p1__42276_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622),p1__42276_SHARP_], null));
});})(_STAR_reconciler_STAR_42284,_STAR_depth_STAR_42285,_STAR_shared_STAR_42286,_STAR_instrument_STAR_42287,_STAR_parent_STAR_42288,this$,this__39929__auto__,x42281_42291))
,cljs.core.next.call(null,cljs.core.keys.call(null,om.next.props.call(null,this$)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42288;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42287;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42286;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42285;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42284;
}});})(x42281_42291))
;


Lazy_Henderson.core.canvas_generator.prototype.constructor = Lazy_Henderson.core.canvas_generator;

Lazy_Henderson.core.canvas_generator.prototype.constructor.displayName = "Lazy-Henderson.core/canvas-generator";

Lazy_Henderson.core.canvas_generator.prototype.om$isComponent = true;

var x42289_42295 = Lazy_Henderson.core.canvas_generator;


var x42290_42296 = Lazy_Henderson.core.canvas_generator.prototype;


Lazy_Henderson.core.canvas_generator.cljs$lang$type = true;

Lazy_Henderson.core.canvas_generator.cljs$lang$ctorStr = "Lazy-Henderson.core/canvas-generator";

Lazy_Henderson.core.canvas_generator.cljs$lang$ctorPrWriter = (function (this__40073__auto__,writer__40074__auto__,opt__40075__auto__){
return cljs.core._write.call(null,writer__40074__auto__,"Lazy-Henderson.core/canvas-generator");
});
om.next.add_root_BANG_.call(null,Lazy_Henderson.core.reconciler,Lazy_Henderson.core.canvas_generator,goog.dom.getElement("app"));
Lazy_Henderson.core.new_canvas = (function Lazy_Henderson$core$new_canvas(id,width,height){
var str_id = [cljs.core.str(id)].join('');
var key_id = cljs.core.keyword.call(null,id);
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,key_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),str_id,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));

cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_id,new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),document.getElementById([cljs.core.str(id)].join('')).getContext("2d"));

return id;
});
Lazy_Henderson.core.transform_painter = (function Lazy_Henderson$core$transform_painter(frame,ctx){
return cljs.core.apply.call(null,(function (p1__42297_SHARP_,p2__42298_SHARP_,p3__42299_SHARP_,p4__42300_SHARP_,p5__42301_SHARP_,p6__42302_SHARP_){
return ctx.setTransform(p1__42297_SHARP_,p2__42298_SHARP_,p3__42299_SHARP_,p4__42300_SHARP_,p5__42301_SHARP_,p6__42302_SHARP_);
}),frame);
});
Lazy_Henderson.core.draw_painter = (function Lazy_Henderson$core$draw_painter(segment_list,ctx){
cljs.core.run_BANG_.call(null,(function (segment){
ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)));

return ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)));
}),segment_list);

ctx.lineWidth = .01;

return ctx.stroke();
});
Lazy_Henderson.core.painter = (function Lazy_Henderson$core$painter(image){
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,cljs.core.keyword.call(null,image),Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(400),(0)),Lazy_Henderson.core.make_vect.call(null,(0),(-400)),Lazy_Henderson.core.make_vect.call(null,(0),(400))));

return image;
});
Lazy_Henderson.core.draw = (function Lazy_Henderson$core$draw(image,canvas){
var ctx = cljs.core.get_in.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,canvas),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null));
var segment_list = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),new cljs.core.Keyword(null,"segment-list","segment-list",-581798026));
var frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),cljs.core.keyword.call(null,image));
Lazy_Henderson.core.transform_painter.call(null,frame,ctx);

return Lazy_Henderson.core.draw_painter.call(null,segment_list,ctx);
});
Lazy_Henderson.core.draw_new = (function Lazy_Henderson$core$draw_new(image){
var id = cljs.core.gensym.call(null);
Lazy_Henderson.core.new_canvas.call(null,id,"400px","400px");

return Lazy_Henderson.core.draw.call(null,image,id);
});
Lazy_Henderson.core.flip_vert = (function Lazy_Henderson$core$flip_vert(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.flip_horiz = (function Lazy_Henderson$core$flip_horiz(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(- Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.rotate90 = (function Lazy_Henderson$core$rotate90(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside_left = (function Lazy_Henderson$core$beside_left(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside_right = (function Lazy_Henderson$core$beside_right(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside = (function Lazy_Henderson$core$beside(left_image,right_image){
var id = cljs.core.gensym.call(null);
Lazy_Henderson.core.new_canvas.call(null,id,"400px","400px");

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,left_image),id);

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,right_image),id);
});
Lazy_Henderson.core.below_top = (function Lazy_Henderson$core$below_top(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.below_bottom = (function Lazy_Henderson$core$below_bottom(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.below = (function Lazy_Henderson$core$below(top_image,bottom_image){
var id = cljs.core.gensym.call(null);
Lazy_Henderson.core.new_canvas.call(null,id,"400px","400px");

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,top_image),id);

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,bottom_image),id);
});
Lazy_Henderson.core.flipped_pairs = (function Lazy_Henderson$core$flipped_pairs(image){
var id = cljs.core.gensym.call(null);
Lazy_Henderson.core.new_canvas.call(null,id,"400px","400px");

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,image)),id);

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,image))),id);

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,image)),id);

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,image))),id);
});

//# sourceMappingURL=core.js.map?rel=1495940601243