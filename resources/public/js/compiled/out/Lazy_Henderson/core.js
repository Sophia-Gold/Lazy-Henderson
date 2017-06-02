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
Lazy_Henderson.core.segment_list = (function (){var x__27528__auto__ = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.25,(0)),Lazy_Henderson.core.make_vect.call(null,.35,.5));
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
})();
Lazy_Henderson.core.store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
Lazy_Henderson.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),Lazy_Henderson.core.store], null));
/**
 * @constructor
 */
Lazy_Henderson.core.canvas = (function Lazy_Henderson$core$canvas(){
var this__41946__auto__ = this;
React.Component.apply(this__41946__auto__,arguments);

if(!((this__41946__auto__.initLocalState == null))){
this__41946__auto__.state = this__41946__auto__.initLocalState();
} else {
this__41946__auto__.state = {};
}

return this__41946__auto__;
});

Lazy_Henderson.core.canvas.prototype = goog.object.clone(React.Component.prototype);

var x47280_47292 = Lazy_Henderson.core.canvas.prototype;
x47280_47292.componentWillUpdate = ((function (x47280_47292){
return (function (next_props__41807__auto__,next_state__41808__auto__){
var this__41806__auto__ = this;
if(((!((this__41806__auto__ == null)))?(((false) || (this__41806__auto__.om$next$Ident$))?true:false):false)){
var ident__41810__auto___47293 = om.next.ident.call(null,this__41806__auto__,om.next.props.call(null,this__41806__auto__));
var next_ident__41811__auto___47294 = om.next.ident.call(null,this__41806__auto__,om.next._next_props.call(null,next_props__41807__auto__,this__41806__auto__));
if(cljs.core.not_EQ_.call(null,ident__41810__auto___47293,next_ident__41811__auto___47294)){
var idxr__41812__auto___47295 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41812__auto___47295 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41812__auto___47295),((function (idxr__41812__auto___47295,ident__41810__auto___47293,next_ident__41811__auto___47294,this__41806__auto__,x47280_47292){
return (function (indexes__41813__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41813__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41810__auto___47293], null),cljs.core.disj,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41811__auto___47294], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41806__auto__);
});})(idxr__41812__auto___47295,ident__41810__auto___47293,next_ident__41811__auto___47294,this__41806__auto__,x47280_47292))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41806__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41806__auto__);
});})(x47280_47292))
;

x47280_47292.shouldComponentUpdate = ((function (x47280_47292){
return (function (next_props__41807__auto__,next_state__41808__auto__){
var this__41806__auto__ = this;
var next_children__41809__auto__ = next_props__41807__auto__.children;
var next_props__41807__auto____$1 = goog.object.get(next_props__41807__auto__,"omcljs$value");
var next_props__41807__auto____$2 = (function (){var G__47282 = next_props__41807__auto____$1;
if((next_props__41807__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__47282);
} else {
return G__47282;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41806__auto__),next_props__41807__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__41806__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41806__auto__.state,"omcljs$state"),goog.object.get(next_state__41808__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41806__auto__.props.children,next_children__41809__auto__);
}
}
});})(x47280_47292))
;

x47280_47292.componentWillUnmount = ((function (x47280_47292){
return (function (){
var this__41806__auto__ = this;
var r__41817__auto__ = om.next.get_reconciler.call(null,this__41806__auto__);
var cfg__41818__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41817__auto__);
var st__41819__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41818__auto__);
var indexer__41816__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41818__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__41819__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41819__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41806__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41819__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41806__auto__);
} else {
}

if((indexer__41816__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41816__auto__,this__41806__auto__);
}
});})(x47280_47292))
;

x47280_47292.componentDidUpdate = ((function (x47280_47292){
return (function (prev_props__41814__auto__,prev_state__41815__auto__){
var this__41806__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41806__auto__);
});})(x47280_47292))
;

x47280_47292.isMounted = ((function (x47280_47292){
return (function (){
var this__41806__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41806__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47280_47292))
;

x47280_47292.componentWillMount = ((function (x47280_47292){
return (function (){
var this__41806__auto__ = this;
var indexer__41816__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41816__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41816__auto__,this__41806__auto__);
}
});})(x47280_47292))
;

x47280_47292.componentDidMount = ((function (x47280_47292){
return (function (){
var this$ = this;
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),document.getElementById(cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"id","id",-1388402092)], null))).getContext("2d")], null));
});})(x47280_47292))
;

x47280_47292.render = ((function (x47280_47292){
return (function (){
var this__41805__auto__ = this;
var this$ = this__41805__auto__;
var _STAR_reconciler_STAR_47283 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47284 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47285 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47286 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47287 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41805__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41805__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41805__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41805__auto__);

om.next._STAR_parent_STAR_ = this__41805__auto__;

try{var map__47288 = om.next.props.call(null,this$);
var map__47288__$1 = ((((!((map__47288 == null)))?((((map__47288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47288):map__47288);
var id = cljs.core.get.call(null,map__47288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width = cljs.core.get.call(null,map__47288__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__47288__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return om.dom.input.call(null,({"id": id, "width": width, "height": height}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47287;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47286;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47285;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47284;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47283;
}});})(x47280_47292))
;


Lazy_Henderson.core.canvas.prototype.constructor = Lazy_Henderson.core.canvas;

Lazy_Henderson.core.canvas.prototype.constructor.displayName = "Lazy-Henderson.core/canvas";

Lazy_Henderson.core.canvas.prototype.om$isComponent = true;

var x47290_47296 = Lazy_Henderson.core.canvas;


var x47291_47297 = Lazy_Henderson.core.canvas.prototype;


Lazy_Henderson.core.canvas.cljs$lang$type = true;

Lazy_Henderson.core.canvas.cljs$lang$ctorStr = "Lazy-Henderson.core/canvas";

Lazy_Henderson.core.canvas.cljs$lang$ctorPrWriter = (function (this__41949__auto__,writer__41950__auto__,opt__41951__auto__){
return cljs.core._write.call(null,writer__41950__auto__,"Lazy-Henderson.core/canvas");
});
Lazy_Henderson.core.canvas_factory = om.next.factory.call(null,Lazy_Henderson.core.canvas);
/**
 * @constructor
 */
Lazy_Henderson.core.canvas_generator = (function Lazy_Henderson$core$canvas_generator(){
var this__41946__auto__ = this;
React.Component.apply(this__41946__auto__,arguments);

if(!((this__41946__auto__.initLocalState == null))){
this__41946__auto__.state = this__41946__auto__.initLocalState();
} else {
this__41946__auto__.state = {};
}

return this__41946__auto__;
});

Lazy_Henderson.core.canvas_generator.prototype = goog.object.clone(React.Component.prototype);

var x47303_47313 = Lazy_Henderson.core.canvas_generator.prototype;
x47303_47313.componentWillUpdate = ((function (x47303_47313){
return (function (next_props__41807__auto__,next_state__41808__auto__){
var this__41806__auto__ = this;
if(((!((this__41806__auto__ == null)))?(((false) || (this__41806__auto__.om$next$Ident$))?true:false):false)){
var ident__41810__auto___47314 = om.next.ident.call(null,this__41806__auto__,om.next.props.call(null,this__41806__auto__));
var next_ident__41811__auto___47315 = om.next.ident.call(null,this__41806__auto__,om.next._next_props.call(null,next_props__41807__auto__,this__41806__auto__));
if(cljs.core.not_EQ_.call(null,ident__41810__auto___47314,next_ident__41811__auto___47315)){
var idxr__41812__auto___47316 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41812__auto___47316 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41812__auto___47316),((function (idxr__41812__auto___47316,ident__41810__auto___47314,next_ident__41811__auto___47315,this__41806__auto__,x47303_47313){
return (function (indexes__41813__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41813__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41810__auto___47314], null),cljs.core.disj,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41811__auto___47315], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41806__auto__);
});})(idxr__41812__auto___47316,ident__41810__auto___47314,next_ident__41811__auto___47315,this__41806__auto__,x47303_47313))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41806__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41806__auto__);
});})(x47303_47313))
;

x47303_47313.shouldComponentUpdate = ((function (x47303_47313){
return (function (next_props__41807__auto__,next_state__41808__auto__){
var this__41806__auto__ = this;
var next_children__41809__auto__ = next_props__41807__auto__.children;
var next_props__41807__auto____$1 = goog.object.get(next_props__41807__auto__,"omcljs$value");
var next_props__41807__auto____$2 = (function (){var G__47305 = next_props__41807__auto____$1;
if((next_props__41807__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__47305);
} else {
return G__47305;
}
})();
var or__26602__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41806__auto__),next_props__41807__auto____$2);
if(or__26602__auto__){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = (function (){var and__26590__auto__ = this__41806__auto__.state;
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41806__auto__.state,"omcljs$state"),goog.object.get(next_state__41808__auto__,"omcljs$state"));
} else {
return and__26590__auto__;
}
})();
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41806__auto__.props.children,next_children__41809__auto__);
}
}
});})(x47303_47313))
;

x47303_47313.componentWillUnmount = ((function (x47303_47313){
return (function (){
var this__41806__auto__ = this;
var r__41817__auto__ = om.next.get_reconciler.call(null,this__41806__auto__);
var cfg__41818__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41817__auto__);
var st__41819__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41818__auto__);
var indexer__41816__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41818__auto__);
if(cljs.core.truth_((function (){var and__26590__auto__ = !((st__41819__auto__ == null));
if(and__26590__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41819__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41806__auto__], null));
} else {
return and__26590__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41819__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41806__auto__);
} else {
}

if((indexer__41816__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41816__auto__,this__41806__auto__);
}
});})(x47303_47313))
;

x47303_47313.componentDidUpdate = ((function (x47303_47313){
return (function (prev_props__41814__auto__,prev_state__41815__auto__){
var this__41806__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41806__auto__);
});})(x47303_47313))
;

x47303_47313.isMounted = ((function (x47303_47313){
return (function (){
var this__41806__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41806__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47303_47313))
;

x47303_47313.componentWillMount = ((function (x47303_47313){
return (function (){
var this__41806__auto__ = this;
var indexer__41816__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41806__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41816__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41816__auto__,this__41806__auto__);
}
});})(x47303_47313))
;

x47303_47313.render = ((function (x47303_47313){
return (function (){
var this__41805__auto__ = this;
var this$ = this__41805__auto__;
var _STAR_reconciler_STAR_47306 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47307 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47308 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47309 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47310 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41805__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41805__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41805__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41805__auto__);

om.next._STAR_parent_STAR_ = this__41805__auto__;

try{return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_47306,_STAR_depth_STAR_47307,_STAR_shared_STAR_47308,_STAR_instrument_STAR_47309,_STAR_parent_STAR_47310,this$,this__41805__auto__,x47303_47313){
return (function (p1__47298_SHARP_){
return Lazy_Henderson.core.canvas_factory.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),p1__47298_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__47298_SHARP_,new cljs.core.Keyword(null,"width","width",-384071477),p1__47298_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622),p1__47298_SHARP_], null));
});})(_STAR_reconciler_STAR_47306,_STAR_depth_STAR_47307,_STAR_shared_STAR_47308,_STAR_instrument_STAR_47309,_STAR_parent_STAR_47310,this$,this__41805__auto__,x47303_47313))
,cljs.core.next.call(null,cljs.core.keys.call(null,om.next.props.call(null,this$)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47310;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47309;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47308;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47307;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47306;
}});})(x47303_47313))
;


Lazy_Henderson.core.canvas_generator.prototype.constructor = Lazy_Henderson.core.canvas_generator;

Lazy_Henderson.core.canvas_generator.prototype.constructor.displayName = "Lazy-Henderson.core/canvas-generator";

Lazy_Henderson.core.canvas_generator.prototype.om$isComponent = true;

var x47311_47317 = Lazy_Henderson.core.canvas_generator;


var x47312_47318 = Lazy_Henderson.core.canvas_generator.prototype;


Lazy_Henderson.core.canvas_generator.cljs$lang$type = true;

Lazy_Henderson.core.canvas_generator.cljs$lang$ctorStr = "Lazy-Henderson.core/canvas-generator";

Lazy_Henderson.core.canvas_generator.cljs$lang$ctorPrWriter = (function (this__41949__auto__,writer__41950__auto__,opt__41951__auto__){
return cljs.core._write.call(null,writer__41950__auto__,"Lazy-Henderson.core/canvas-generator");
});
om.next.add_root_BANG_.call(null,Lazy_Henderson.core.reconciler,Lazy_Henderson.core.canvas_generator,goog.dom.getElement("app"));
Lazy_Henderson.core.new_canvas = (function Lazy_Henderson$core$new_canvas(id,width,height){
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,cljs.core.keyword.call(null,id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));

return id;
});
Lazy_Henderson.core.transform_painter = (function Lazy_Henderson$core$transform_painter(frame,ctx){
return cljs.core.apply.call(null,(function (p1__47319_SHARP_,p2__47320_SHARP_,p3__47321_SHARP_,p4__47322_SHARP_,p5__47323_SHARP_,p6__47324_SHARP_){
return ctx.setTransform(p1__47319_SHARP_,p2__47320_SHARP_,p3__47321_SHARP_,p4__47322_SHARP_,p5__47323_SHARP_,p6__47324_SHARP_);
}),frame);
});
Lazy_Henderson.core.draw_painter = (function Lazy_Henderson$core$draw_painter(segment_list,ctx){
ctx.beginPath();

ctx.moveTo(cljs.core.first.call(null,segment_list),cljs.core.fnext.call(null,segment_list));

cljs.core.run_BANG_.call(null,(function (segment){
ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)));

return ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)));
}),segment_list);

ctx.closePath();

ctx.lineWidth = .05;

return ctx.stroke();
});
Lazy_Henderson.core.painter = (function Lazy_Henderson$core$painter(image){
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,cljs.core.keyword.call(null,image),Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(400),(0)),Lazy_Henderson.core.make_vect.call(null,(0),(-400)),Lazy_Henderson.core.make_vect.call(null,(0),(400))));

return image;
});
Lazy_Henderson.core.draw = (function Lazy_Henderson$core$draw(image,canvas){
var ctx = cljs.core.get_in.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,canvas),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null));
var frame = cljs.core.get.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store),cljs.core.keyword.call(null,image));
Lazy_Henderson.core.transform_painter.call(null,frame,ctx);

return Lazy_Henderson.core.draw_painter.call(null,Lazy_Henderson.core.segment_list,ctx);
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
Lazy_Henderson.core.new_canvas.call(null,new cljs.core.Symbol(null,"foo","foo",-1385541733,null),"400px","400px");
cljs.core.print.call(null,cljs.core.deref.call(null,Lazy_Henderson.core.store));

//# sourceMappingURL=core.js.map?rel=1496386740907