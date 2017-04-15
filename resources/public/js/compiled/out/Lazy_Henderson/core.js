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
Lazy_Henderson.core.store = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),document.getElementById("canvas").getContext("2d"),new cljs.core.Keyword(null,"segment-list","segment-list",-581798026),(function (){var x__7856__auto__ = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.25,(0)),Lazy_Henderson.core.make_vect.call(null,.35,.5));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$1 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.5),Lazy_Henderson.core.make_vect.call(null,.3,.6));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$2 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.6),Lazy_Henderson.core.make_vect.call(null,.15,.4));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$3 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.4),Lazy_Henderson.core.make_vect.call(null,(0),.65));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$4 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.65),Lazy_Henderson.core.make_vect.call(null,(0),.85));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$5 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(0),.85),Lazy_Henderson.core.make_vect.call(null,.15,.6));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$6 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.15,.6),Lazy_Henderson.core.make_vect.call(null,.3,.65));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$7 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.3,.65),Lazy_Henderson.core.make_vect.call(null,.4,.65));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$8 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,.65),Lazy_Henderson.core.make_vect.call(null,.35,.85));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$9 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.35,.85),Lazy_Henderson.core.make_vect.call(null,.4,(1)));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$10 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(1)),Lazy_Henderson.core.make_vect.call(null,.6,(1)));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$11 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(1)),Lazy_Henderson.core.make_vect.call(null,.65,.85));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$12 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.65,.85),Lazy_Henderson.core.make_vect.call(null,.6,.65));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$13 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.65),Lazy_Henderson.core.make_vect.call(null,.75,.65));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$14 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,.65),Lazy_Henderson.core.make_vect.call(null,(1),.35));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$15 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.35),Lazy_Henderson.core.make_vect.call(null,(1),.15));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$16 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,(1),.15),Lazy_Henderson.core.make_vect.call(null,.6,.45));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$17 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,.45),Lazy_Henderson.core.make_vect.call(null,.75,(0)));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$18 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.75,(0)),Lazy_Henderson.core.make_vect.call(null,.6,(0)));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$19 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.6,(0)),Lazy_Henderson.core.make_vect.call(null,.5,.3));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$20 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.5,.3),Lazy_Henderson.core.make_vect.call(null,.4,(0)));
return cljs.core._conj.call(null,(function (){var x__7856__auto____$21 = Lazy_Henderson.core.make_segment.call(null,Lazy_Henderson.core.make_vect.call(null,.4,(0)),Lazy_Henderson.core.make_vect.call(null,.25,(0)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7856__auto____$21);
})(),x__7856__auto____$20);
})(),x__7856__auto____$19);
})(),x__7856__auto____$18);
})(),x__7856__auto____$17);
})(),x__7856__auto____$16);
})(),x__7856__auto____$15);
})(),x__7856__auto____$14);
})(),x__7856__auto____$13);
})(),x__7856__auto____$12);
})(),x__7856__auto____$11);
})(),x__7856__auto____$10);
})(),x__7856__auto____$9);
})(),x__7856__auto____$8);
})(),x__7856__auto____$7);
})(),x__7856__auto____$6);
})(),x__7856__auto____$5);
})(),x__7856__auto____$4);
})(),x__7856__auto____$3);
})(),x__7856__auto____$2);
})(),x__7856__auto____$1);
})(),x__7856__auto__);
})()], null));
Lazy_Henderson.core.transform_painter = (function Lazy_Henderson$core$transform_painter(frame,ctx){
return cljs.core.apply.call(null,(function (p1__8173_SHARP_,p2__8174_SHARP_,p3__8175_SHARP_,p4__8176_SHARP_,p5__8177_SHARP_,p6__8178_SHARP_){
return ctx.setTransform(p1__8173_SHARP_,p2__8174_SHARP_,p3__8175_SHARP_,p4__8176_SHARP_,p5__8177_SHARP_,p6__8178_SHARP_);
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
Lazy_Henderson.core.draw = (function Lazy_Henderson$core$draw(image){
var ctx = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var segment_list = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,new cljs.core.Keyword(null,"segment-list","segment-list",-581798026));
var frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,cljs.core.keyword.call(null,image));
Lazy_Henderson.core.transform_painter.call(null,frame,ctx);

return Lazy_Henderson.core.draw_painter.call(null,segment_list,ctx);
});
Lazy_Henderson.core.flip_vert = (function Lazy_Henderson$core$flip_vert(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.flip_horiz = (function Lazy_Henderson$core$flip_horiz(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,(- Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.make_vect.call(null,(Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.rotate90 = (function Lazy_Henderson$core$rotate90(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame))),Lazy_Henderson.core.make_vect.call(null,(- Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame))),Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame))),Lazy_Henderson.core.make_vect.call(null,Lazy_Henderson.core.xcor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)),(Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame)) + Lazy_Henderson.core.ycor_vect.call(null,Lazy_Henderson.core.edge2_frame.call(null,old_frame)))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside_left = (function Lazy_Henderson$core$beside_left(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside_right = (function Lazy_Henderson$core$beside_right(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame)),Lazy_Henderson.core.edge2_frame.call(null,old_frame),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge1_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.beside = (function Lazy_Henderson$core$beside(left_image,right_image){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,left_image));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,right_image));
});
Lazy_Henderson.core.below_top = (function Lazy_Henderson$core$below_top(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.add_vect.call(null,Lazy_Henderson.core.origin_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame))));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.below_bottom = (function Lazy_Henderson$core$below_bottom(image){
var old_image = cljs.core.keyword.call(null,image);
var new_image = cljs.core.keyword.call(null,cljs.core.gensym.call(null,[cljs.core.str(image)].join('')));
var old_frame = cljs.core.deref.call(null,Lazy_Henderson.core.store).call(null,old_image);
var new_frame = Lazy_Henderson.core.make_frame.call(null,Lazy_Henderson.core.edge1_frame.call(null,old_frame),Lazy_Henderson.core.scale_vect.call(null,0.5,Lazy_Henderson.core.edge2_frame.call(null,old_frame)),Lazy_Henderson.core.origin_frame.call(null,old_frame));
cljs.core.swap_BANG_.call(null,Lazy_Henderson.core.store,cljs.core.assoc,new_image,new_frame);

return new_image;
});
Lazy_Henderson.core.below = (function Lazy_Henderson$core$below(top_image,bottom_image){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,top_image));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,bottom_image));
});
Lazy_Henderson.core.flipped_pairs = (function Lazy_Henderson$core$flipped_pairs(image){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,image)));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,image))));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,image)));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.flip_vert.call(null,image))));
});
Lazy_Henderson.core.right_split = (function Lazy_Henderson$core$right_split(image,n){
if(cljs.core._EQ_.call(null,n,(0))){
return image;
} else {
var smaller = Lazy_Henderson$core$right_split.call(null,Lazy_Henderson.core.beside_right.call(null,image),(n - (1)));
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,image));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,image)));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,image)));
}
});
Lazy_Henderson.core.up_split = (function Lazy_Henderson$core$up_split(image,n){
if(cljs.core._EQ_.call(null,n,(0))){
return image;
} else {
var smaller = Lazy_Henderson$core$up_split.call(null,Lazy_Henderson.core.below_top.call(null,image),(n - (1)));
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_bottom.call(null,image));

Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,image)));

return Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,image)));
}
});
Lazy_Henderson.core.corner_split = (function Lazy_Henderson$core$corner_split(image,n){
Lazy_Henderson.core.draw.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_bottom.call(null,image)));

Lazy_Henderson.core.right_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_bottom.call(null,image)),n);

Lazy_Henderson.core.up_split.call(null,Lazy_Henderson.core.beside_left.call(null,Lazy_Henderson.core.below_top.call(null,image)),n);

return Lazy_Henderson$core$corner_split.call(null,Lazy_Henderson.core.beside_right.call(null,Lazy_Henderson.core.below_top.call(null,image)),(n - (1)));
});
Lazy_Henderson.core.square_limit = (function Lazy_Henderson$core$square_limit(image,n){
Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_left.call(null,image))),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.below_top.call(null,Lazy_Henderson.core.beside_right.call(null,image)),n);

Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.flip_horiz.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_left.call(null,image)))),n);

return Lazy_Henderson.core.corner_split.call(null,Lazy_Henderson.core.flip_vert.call(null,Lazy_Henderson.core.below_bottom.call(null,Lazy_Henderson.core.beside_right.call(null,image))),n);
});
Lazy_Henderson.core.square_limit.call(null,Lazy_Henderson.core.painter.call(null,"george"),(5));

//# sourceMappingURL=core.js.map?rel=1492242825991