// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34585){
var map__34610 = p__34585;
var map__34610__$1 = ((((!((map__34610 == null)))?((((map__34610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34610):map__34610);
var m = map__34610__$1;
var n = cljs.core.get.call(null,map__34610__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34612_34634 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34613_34635 = null;
var count__34614_34636 = (0);
var i__34615_34637 = (0);
while(true){
if((i__34615_34637 < count__34614_34636)){
var f_34638 = cljs.core._nth.call(null,chunk__34613_34635,i__34615_34637);
cljs.core.println.call(null,"  ",f_34638);

var G__34639 = seq__34612_34634;
var G__34640 = chunk__34613_34635;
var G__34641 = count__34614_34636;
var G__34642 = (i__34615_34637 + (1));
seq__34612_34634 = G__34639;
chunk__34613_34635 = G__34640;
count__34614_34636 = G__34641;
i__34615_34637 = G__34642;
continue;
} else {
var temp__6753__auto___34643 = cljs.core.seq.call(null,seq__34612_34634);
if(temp__6753__auto___34643){
var seq__34612_34644__$1 = temp__6753__auto___34643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34612_34644__$1)){
var c__27505__auto___34645 = cljs.core.chunk_first.call(null,seq__34612_34644__$1);
var G__34646 = cljs.core.chunk_rest.call(null,seq__34612_34644__$1);
var G__34647 = c__27505__auto___34645;
var G__34648 = cljs.core.count.call(null,c__27505__auto___34645);
var G__34649 = (0);
seq__34612_34634 = G__34646;
chunk__34613_34635 = G__34647;
count__34614_34636 = G__34648;
i__34615_34637 = G__34649;
continue;
} else {
var f_34650 = cljs.core.first.call(null,seq__34612_34644__$1);
cljs.core.println.call(null,"  ",f_34650);

var G__34651 = cljs.core.next.call(null,seq__34612_34644__$1);
var G__34652 = null;
var G__34653 = (0);
var G__34654 = (0);
seq__34612_34634 = G__34651;
chunk__34613_34635 = G__34652;
count__34614_34636 = G__34653;
i__34615_34637 = G__34654;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34655 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26602__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34655);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34655)))?cljs.core.second.call(null,arglists_34655):arglists_34655));
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
var seq__34616_34656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34617_34657 = null;
var count__34618_34658 = (0);
var i__34619_34659 = (0);
while(true){
if((i__34619_34659 < count__34618_34658)){
var vec__34620_34660 = cljs.core._nth.call(null,chunk__34617_34657,i__34619_34659);
var name_34661 = cljs.core.nth.call(null,vec__34620_34660,(0),null);
var map__34623_34662 = cljs.core.nth.call(null,vec__34620_34660,(1),null);
var map__34623_34663__$1 = ((((!((map__34623_34662 == null)))?((((map__34623_34662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34623_34662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34623_34662):map__34623_34662);
var doc_34664 = cljs.core.get.call(null,map__34623_34663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34665 = cljs.core.get.call(null,map__34623_34663__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34661);

cljs.core.println.call(null," ",arglists_34665);

if(cljs.core.truth_(doc_34664)){
cljs.core.println.call(null," ",doc_34664);
} else {
}

var G__34666 = seq__34616_34656;
var G__34667 = chunk__34617_34657;
var G__34668 = count__34618_34658;
var G__34669 = (i__34619_34659 + (1));
seq__34616_34656 = G__34666;
chunk__34617_34657 = G__34667;
count__34618_34658 = G__34668;
i__34619_34659 = G__34669;
continue;
} else {
var temp__6753__auto___34670 = cljs.core.seq.call(null,seq__34616_34656);
if(temp__6753__auto___34670){
var seq__34616_34671__$1 = temp__6753__auto___34670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34616_34671__$1)){
var c__27505__auto___34672 = cljs.core.chunk_first.call(null,seq__34616_34671__$1);
var G__34673 = cljs.core.chunk_rest.call(null,seq__34616_34671__$1);
var G__34674 = c__27505__auto___34672;
var G__34675 = cljs.core.count.call(null,c__27505__auto___34672);
var G__34676 = (0);
seq__34616_34656 = G__34673;
chunk__34617_34657 = G__34674;
count__34618_34658 = G__34675;
i__34619_34659 = G__34676;
continue;
} else {
var vec__34625_34677 = cljs.core.first.call(null,seq__34616_34671__$1);
var name_34678 = cljs.core.nth.call(null,vec__34625_34677,(0),null);
var map__34628_34679 = cljs.core.nth.call(null,vec__34625_34677,(1),null);
var map__34628_34680__$1 = ((((!((map__34628_34679 == null)))?((((map__34628_34679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34628_34679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34628_34679):map__34628_34679);
var doc_34681 = cljs.core.get.call(null,map__34628_34680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34682 = cljs.core.get.call(null,map__34628_34680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34678);

cljs.core.println.call(null," ",arglists_34682);

if(cljs.core.truth_(doc_34681)){
cljs.core.println.call(null," ",doc_34681);
} else {
}

var G__34683 = cljs.core.next.call(null,seq__34616_34671__$1);
var G__34684 = null;
var G__34685 = (0);
var G__34686 = (0);
seq__34616_34656 = G__34683;
chunk__34617_34657 = G__34684;
count__34618_34658 = G__34685;
i__34619_34659 = G__34686;
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

var seq__34630 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34631 = null;
var count__34632 = (0);
var i__34633 = (0);
while(true){
if((i__34633 < count__34632)){
var role = cljs.core._nth.call(null,chunk__34631,i__34633);
var temp__6753__auto___34687__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34687__$1)){
var spec_34688 = temp__6753__auto___34687__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34688));
} else {
}

var G__34689 = seq__34630;
var G__34690 = chunk__34631;
var G__34691 = count__34632;
var G__34692 = (i__34633 + (1));
seq__34630 = G__34689;
chunk__34631 = G__34690;
count__34632 = G__34691;
i__34633 = G__34692;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__34630);
if(temp__6753__auto____$1){
var seq__34630__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34630__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__34630__$1);
var G__34693 = cljs.core.chunk_rest.call(null,seq__34630__$1);
var G__34694 = c__27505__auto__;
var G__34695 = cljs.core.count.call(null,c__27505__auto__);
var G__34696 = (0);
seq__34630 = G__34693;
chunk__34631 = G__34694;
count__34632 = G__34695;
i__34633 = G__34696;
continue;
} else {
var role = cljs.core.first.call(null,seq__34630__$1);
var temp__6753__auto___34697__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34697__$2)){
var spec_34698 = temp__6753__auto___34697__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34698));
} else {
}

var G__34699 = cljs.core.next.call(null,seq__34630__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34630 = G__34699;
chunk__34631 = G__34700;
count__34632 = G__34701;
i__34633 = G__34702;
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

//# sourceMappingURL=repl.js.map?rel=1496994076695