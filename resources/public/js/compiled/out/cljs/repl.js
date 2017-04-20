// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34443){
var map__34468 = p__34443;
var map__34468__$1 = ((((!((map__34468 == null)))?((((map__34468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34468):map__34468);
var m = map__34468__$1;
var n = cljs.core.get.call(null,map__34468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34470_34492 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34471_34493 = null;
var count__34472_34494 = (0);
var i__34473_34495 = (0);
while(true){
if((i__34473_34495 < count__34472_34494)){
var f_34496 = cljs.core._nth.call(null,chunk__34471_34493,i__34473_34495);
cljs.core.println.call(null,"  ",f_34496);

var G__34497 = seq__34470_34492;
var G__34498 = chunk__34471_34493;
var G__34499 = count__34472_34494;
var G__34500 = (i__34473_34495 + (1));
seq__34470_34492 = G__34497;
chunk__34471_34493 = G__34498;
count__34472_34494 = G__34499;
i__34473_34495 = G__34500;
continue;
} else {
var temp__6753__auto___34501 = cljs.core.seq.call(null,seq__34470_34492);
if(temp__6753__auto___34501){
var seq__34470_34502__$1 = temp__6753__auto___34501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34470_34502__$1)){
var c__27497__auto___34503 = cljs.core.chunk_first.call(null,seq__34470_34502__$1);
var G__34504 = cljs.core.chunk_rest.call(null,seq__34470_34502__$1);
var G__34505 = c__27497__auto___34503;
var G__34506 = cljs.core.count.call(null,c__27497__auto___34503);
var G__34507 = (0);
seq__34470_34492 = G__34504;
chunk__34471_34493 = G__34505;
count__34472_34494 = G__34506;
i__34473_34495 = G__34507;
continue;
} else {
var f_34508 = cljs.core.first.call(null,seq__34470_34502__$1);
cljs.core.println.call(null,"  ",f_34508);

var G__34509 = cljs.core.next.call(null,seq__34470_34502__$1);
var G__34510 = null;
var G__34511 = (0);
var G__34512 = (0);
seq__34470_34492 = G__34509;
chunk__34471_34493 = G__34510;
count__34472_34494 = G__34511;
i__34473_34495 = G__34512;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34513 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26594__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34513);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34513)))?cljs.core.second.call(null,arglists_34513):arglists_34513));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34474_34514 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34475_34515 = null;
var count__34476_34516 = (0);
var i__34477_34517 = (0);
while(true){
if((i__34477_34517 < count__34476_34516)){
var vec__34478_34518 = cljs.core._nth.call(null,chunk__34475_34515,i__34477_34517);
var name_34519 = cljs.core.nth.call(null,vec__34478_34518,(0),null);
var map__34481_34520 = cljs.core.nth.call(null,vec__34478_34518,(1),null);
var map__34481_34521__$1 = ((((!((map__34481_34520 == null)))?((((map__34481_34520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34481_34520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34481_34520):map__34481_34520);
var doc_34522 = cljs.core.get.call(null,map__34481_34521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34523 = cljs.core.get.call(null,map__34481_34521__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34519);

cljs.core.println.call(null," ",arglists_34523);

if(cljs.core.truth_(doc_34522)){
cljs.core.println.call(null," ",doc_34522);
} else {
}

var G__34524 = seq__34474_34514;
var G__34525 = chunk__34475_34515;
var G__34526 = count__34476_34516;
var G__34527 = (i__34477_34517 + (1));
seq__34474_34514 = G__34524;
chunk__34475_34515 = G__34525;
count__34476_34516 = G__34526;
i__34477_34517 = G__34527;
continue;
} else {
var temp__6753__auto___34528 = cljs.core.seq.call(null,seq__34474_34514);
if(temp__6753__auto___34528){
var seq__34474_34529__$1 = temp__6753__auto___34528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34474_34529__$1)){
var c__27497__auto___34530 = cljs.core.chunk_first.call(null,seq__34474_34529__$1);
var G__34531 = cljs.core.chunk_rest.call(null,seq__34474_34529__$1);
var G__34532 = c__27497__auto___34530;
var G__34533 = cljs.core.count.call(null,c__27497__auto___34530);
var G__34534 = (0);
seq__34474_34514 = G__34531;
chunk__34475_34515 = G__34532;
count__34476_34516 = G__34533;
i__34477_34517 = G__34534;
continue;
} else {
var vec__34483_34535 = cljs.core.first.call(null,seq__34474_34529__$1);
var name_34536 = cljs.core.nth.call(null,vec__34483_34535,(0),null);
var map__34486_34537 = cljs.core.nth.call(null,vec__34483_34535,(1),null);
var map__34486_34538__$1 = ((((!((map__34486_34537 == null)))?((((map__34486_34537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34486_34537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34486_34537):map__34486_34537);
var doc_34539 = cljs.core.get.call(null,map__34486_34538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34540 = cljs.core.get.call(null,map__34486_34538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34536);

cljs.core.println.call(null," ",arglists_34540);

if(cljs.core.truth_(doc_34539)){
cljs.core.println.call(null," ",doc_34539);
} else {
}

var G__34541 = cljs.core.next.call(null,seq__34474_34529__$1);
var G__34542 = null;
var G__34543 = (0);
var G__34544 = (0);
seq__34474_34514 = G__34541;
chunk__34475_34515 = G__34542;
count__34476_34516 = G__34543;
i__34477_34517 = G__34544;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__34488 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34489 = null;
var count__34490 = (0);
var i__34491 = (0);
while(true){
if((i__34491 < count__34490)){
var role = cljs.core._nth.call(null,chunk__34489,i__34491);
var temp__6753__auto___34545__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34545__$1)){
var spec_34546 = temp__6753__auto___34545__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34546));
} else {
}

var G__34547 = seq__34488;
var G__34548 = chunk__34489;
var G__34549 = count__34490;
var G__34550 = (i__34491 + (1));
seq__34488 = G__34547;
chunk__34489 = G__34548;
count__34490 = G__34549;
i__34491 = G__34550;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__34488);
if(temp__6753__auto____$1){
var seq__34488__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34488__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__34488__$1);
var G__34551 = cljs.core.chunk_rest.call(null,seq__34488__$1);
var G__34552 = c__27497__auto__;
var G__34553 = cljs.core.count.call(null,c__27497__auto__);
var G__34554 = (0);
seq__34488 = G__34551;
chunk__34489 = G__34552;
count__34490 = G__34553;
i__34491 = G__34554;
continue;
} else {
var role = cljs.core.first.call(null,seq__34488__$1);
var temp__6753__auto___34555__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34555__$2)){
var spec_34556 = temp__6753__auto___34555__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34556));
} else {
}

var G__34557 = cljs.core.next.call(null,seq__34488__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__34488 = G__34557;
chunk__34489 = G__34558;
count__34490 = G__34559;
i__34491 = G__34560;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1492572234708