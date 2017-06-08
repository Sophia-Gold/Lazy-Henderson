// Compiled by ClojureScript 1.9.198 {}
goog.provide('Lazy_Henderson.core');
goog.require('cljs.core');
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
Lazy_Henderson.core.transform_painter = (function Lazy_Henderson$core$transform_painter(ctx,frame){
return cljs.core.apply.call(null,(function (p1__40384_SHARP_,p2__40385_SHARP_,p3__40386_SHARP_,p4__40387_SHARP_,p5__40388_SHARP_,p6__40389_SHARP_){
return ctx.setTransform(p1__40384_SHARP_,p2__40385_SHARP_,p3__40386_SHARP_,p4__40387_SHARP_,p5__40388_SHARP_,p6__40389_SHARP_);
}),frame);
});
Lazy_Henderson.core.draw_painter = (function Lazy_Henderson$core$draw_painter(ctx,image){
ctx.beginPath();

ctx.moveTo(cljs.core.first.call(null,image),cljs.core.fnext.call(null,image));

cljs.core.run_BANG_.call(null,(function (segment){
ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.start_segment.call(null,segment)));

return ctx.lineTo(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.end_segment.call(null,segment)));
}),image);

ctx.closePath();

ctx.lineWidth = 0.05;

return ctx.stroke();
});
Lazy_Henderson.core.draw = (function Lazy_Henderson$core$draw(store){
var ctx = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var image = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"image","image",-58725096));
var frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
Lazy_Henderson.core.transform_painter.call(null,ctx,frame);

return Lazy_Henderson.core.draw_painter.call(null,ctx,image);
});
Lazy_Henderson.core.flip_vert = (function Lazy_Henderson$core$flip_vert(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.flip_horiz = (function Lazy_Henderson$core$flip_horiz(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(- Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame))));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.rotate90 = (function Lazy_Henderson$core$rotate90(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.beside_left = (function Lazy_Henderson$core$beside_left(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.origin_frame.call(null,old_frame));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.beside_right = (function Lazy_Henderson$core$beside_right(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame))));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.beside = (function Lazy_Henderson$core$beside(store){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,store));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,store));
});
Lazy_Henderson.core.below_top = (function Lazy_Henderson$core$below_top(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame))));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.below_bottom = (function Lazy_Henderson$core$below_bottom(store){
var old_frame = cljs.core.get.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.origin_frame.call(null,old_frame));
return cljs.core.assoc.call(null,store,new cljs.core.Keyword(null,"frame","frame",-1711082588),new_frame);
});
Lazy_Henderson.core.below = (function Lazy_Henderson$core$below(store){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,store));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,store));
});
Lazy_Henderson.core.flipped_pairs = (function Lazy_Henderson$core$flipped_pairs(store){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,store)));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,store))));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,store)));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,store))));
});
Lazy_Henderson.core.right_split = (function Lazy_Henderson$core$right_split(store,n){
while(true){
if((n === (0))){
return store;
} else {
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,store));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,store)));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,store)));

var G__40390 = Lazy_Henderson.core.beside_right.call(null,store);
var G__40391 = (n - (1));
store = G__40390;
n = G__40391;
continue;
}
break;
}
});
Lazy_Henderson.core.up_split = (function Lazy_Henderson$core$up_split(store,n){
while(true){
if((n === (0))){
return store;
} else {
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,store));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,store)));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,store)));

var G__40392 = Lazy_Henderson.core.below_top.call(null,store);
var G__40393 = (n - (1));
store = G__40392;
n = G__40393;
continue;
}
break;
}
});
Lazy_Henderson.core.corner_split = (function Lazy_Henderson$core$corner_split(store,n){
while(true){
if((n === (0))){
return store;
} else {
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_bottom.call(null,store)));

Lazy_Henderson.core.right_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,store)),n);

Lazy_Henderson.core.up_split.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_top.call(null,store)),n);

var G__40394 = Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,store));
var G__40395 = (n - (1));
store = G__40394;
n = G__40395;
continue;
}
break;
}
});
Lazy_Henderson.core.square_limit = (function Lazy_Henderson$core$square_limit(store,n){
Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,store))),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,store)),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,store)))),n);

return Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,store))),n);
});
Lazy_Henderson.core.george = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),document.getElementById("canvas").getContext("2d"),new cljs.core.Keyword(null,"image","image",-58725096),(function (){var x__27520__auto__ = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.25,(0)),Lazy_Henderson.core.make_vect.call(null,.35,.5));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$1 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.5),Lazy_Henderson.core.make_vect.call(null,.3,.6));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$2 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.6),Lazy_Henderson.core.make_vect.call(null,.15,.4));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$3 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.4),Lazy_Henderson.core.make_vect.call(null,(0),.65));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$4 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.65),Lazy_Henderson.core.make_vect.call(null,(0),.85));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$5 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.85),Lazy_Henderson.core.make_vect.call(null,.15,.6));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$6 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.6),Lazy_Henderson.core.make_vect.call(null,.3,.65));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$7 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.65),Lazy_Henderson.core.make_vect.call(null,.4,.65));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$8 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,.65),Lazy_Henderson.core.make_vect.call(null,.35,.85));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$9 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.85),Lazy_Henderson.core.make_vect.call(null,.4,(1)));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$10 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(1)),Lazy_Henderson.core.make_vect.call(null,.6,(1)));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$11 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(1)),Lazy_Henderson.core.make_vect.call(null,.65,.85));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$12 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.65,.85),Lazy_Henderson.core.make_vect.call(null,.6,.65));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$13 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.65),Lazy_Henderson.core.make_vect.call(null,.75,.65));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$14 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,.65),Lazy_Henderson.core.make_vect.call(null,(1),.35));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$15 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.35),Lazy_Henderson.core.make_vect.call(null,(1),.15));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$16 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.15),Lazy_Henderson.core.make_vect.call(null,.6,.45));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$17 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.45),Lazy_Henderson.core.make_vect.call(null,.75,(0)));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$18 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,(0)),Lazy_Henderson.core.make_vect.call(null,.6,(0)));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$19 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(0)),Lazy_Henderson.core.make_vect.call(null,.5,.3));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$20 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.5,.3),Lazy_Henderson.core.make_vect.call(null,.4,(0)));
return cljs.core._conj.call(null,(function (){var x__27520__auto____$21 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(0)),Lazy_Henderson.core.make_vect.call(null,.25,(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27520__auto____$21);
})(),x__27520__auto____$20);
})(),x__27520__auto____$19);
})(),x__27520__auto____$18);
})(),x__27520__auto____$17);
})(),x__27520__auto____$16);
})(),x__27520__auto____$15);
})(),x__27520__auto____$14);
})(),x__27520__auto____$13);
})(),x__27520__auto____$12);
})(),x__27520__auto____$11);
})(),x__27520__auto____$10);
})(),x__27520__auto____$9);
})(),x__27520__auto____$8);
})(),x__27520__auto____$7);
})(),x__27520__auto____$6);
})(),x__27520__auto____$5);
})(),x__27520__auto____$4);
})(),x__27520__auto____$3);
})(),x__27520__auto____$2);
})(),x__27520__auto____$1);
})(),x__27520__auto__);
})(),new cljs.core.Keyword(null,"frame","frame",-1711082588),Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(400),(0)),Lazy_Henderson.core.make_vect.call(null,(0),(-400)),Lazy_Henderson.core.make_vect.call(null,(0),(400)))], null);
Lazy_Henderson.core.square_limit.call(null,Lazy_Henderson.core.george,(5));

//# sourceMappingURL=core.js.map?rel=1496888644114