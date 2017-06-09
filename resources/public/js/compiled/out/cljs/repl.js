// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34583){
var map__34608 = p__34583;
var map__34608__$1 = ((((!((map__34608 == null)))?((((map__34608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34608):map__34608);
var m = map__34608__$1;
var n = cljs.core.get.call(null,map__34608__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34610_34632 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34611_34633 = null;
var count__34612_34634 = (0);
var i__34613_34635 = (0);
while(true){
if((i__34613_34635 < count__34612_34634)){
var f_34636 = cljs.core._nth.call(null,chunk__34611_34633,i__34613_34635);
cljs.core.println.call(null,"  ",f_34636);

var G__34637 = seq__34610_34632;
var G__34638 = chunk__34611_34633;
var G__34639 = count__34612_34634;
var G__34640 = (i__34613_34635 + (1));
seq__34610_34632 = G__34637;
chunk__34611_34633 = G__34638;
count__34612_34634 = G__34639;
i__34613_34635 = G__34640;
continue;
} else {
var temp__6753__auto___34641 = cljs.core.seq.call(null,seq__34610_34632);
if(temp__6753__auto___34641){
var seq__34610_34642__$1 = temp__6753__auto___34641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34610_34642__$1)){
var c__27497__auto___34643 = cljs.core.chunk_first.call(null,seq__34610_34642__$1);
var G__34644 = cljs.core.chunk_rest.call(null,seq__34610_34642__$1);
var G__34645 = c__27497__auto___34643;
var G__34646 = cljs.core.count.call(null,c__27497__auto___34643);
var G__34647 = (0);
seq__34610_34632 = G__34644;
chunk__34611_34633 = G__34645;
count__34612_34634 = G__34646;
i__34613_34635 = G__34647;
continue;
} else {
var f_34648 = cljs.core.first.call(null,seq__34610_34642__$1);
cljs.core.println.call(null,"  ",f_34648);

var G__34649 = cljs.core.next.call(null,seq__34610_34642__$1);
var G__34650 = null;
var G__34651 = (0);
var G__34652 = (0);
seq__34610_34632 = G__34649;
chunk__34611_34633 = G__34650;
count__34612_34634 = G__34651;
i__34613_34635 = G__34652;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34653 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26594__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34653);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34653)))?cljs.core.second.call(null,arglists_34653):arglists_34653));
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
var seq__34614_34654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34615_34655 = null;
var count__34616_34656 = (0);
var i__34617_34657 = (0);
while(true){
if((i__34617_34657 < count__34616_34656)){
var vec__34618_34658 = cljs.core._nth.call(null,chunk__34615_34655,i__34617_34657);
var name_34659 = cljs.core.nth.call(null,vec__34618_34658,(0),null);
var map__34621_34660 = cljs.core.nth.call(null,vec__34618_34658,(1),null);
var map__34621_34661__$1 = ((((!((map__34621_34660 == null)))?((((map__34621_34660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34621_34660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34621_34660):map__34621_34660);
var doc_34662 = cljs.core.get.call(null,map__34621_34661__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34663 = cljs.core.get.call(null,map__34621_34661__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34659);

cljs.core.println.call(null," ",arglists_34663);

if(cljs.core.truth_(doc_34662)){
cljs.core.println.call(null," ",doc_34662);
} else {
}

var G__34664 = seq__34614_34654;
var G__34665 = chunk__34615_34655;
var G__34666 = count__34616_34656;
var G__34667 = (i__34617_34657 + (1));
seq__34614_34654 = G__34664;
chunk__34615_34655 = G__34665;
count__34616_34656 = G__34666;
i__34617_34657 = G__34667;
continue;
} else {
var temp__6753__auto___34668 = cljs.core.seq.call(null,seq__34614_34654);
if(temp__6753__auto___34668){
var seq__34614_34669__$1 = temp__6753__auto___34668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34614_34669__$1)){
var c__27497__auto___34670 = cljs.core.chunk_first.call(null,seq__34614_34669__$1);
var G__34671 = cljs.core.chunk_rest.call(null,seq__34614_34669__$1);
var G__34672 = c__27497__auto___34670;
var G__34673 = cljs.core.count.call(null,c__27497__auto___34670);
var G__34674 = (0);
seq__34614_34654 = G__34671;
chunk__34615_34655 = G__34672;
count__34616_34656 = G__34673;
i__34617_34657 = G__34674;
continue;
} else {
var vec__34623_34675 = cljs.core.first.call(null,seq__34614_34669__$1);
var name_34676 = cljs.core.nth.call(null,vec__34623_34675,(0),null);
var map__34626_34677 = cljs.core.nth.call(null,vec__34623_34675,(1),null);
var map__34626_34678__$1 = ((((!((map__34626_34677 == null)))?((((map__34626_34677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34626_34677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34626_34677):map__34626_34677);
var doc_34679 = cljs.core.get.call(null,map__34626_34678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34680 = cljs.core.get.call(null,map__34626_34678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34676);

cljs.core.println.call(null," ",arglists_34680);

if(cljs.core.truth_(doc_34679)){
cljs.core.println.call(null," ",doc_34679);
} else {
}

var G__34681 = cljs.core.next.call(null,seq__34614_34669__$1);
var G__34682 = null;
var G__34683 = (0);
var G__34684 = (0);
seq__34614_34654 = G__34681;
chunk__34615_34655 = G__34682;
count__34616_34656 = G__34683;
i__34617_34657 = G__34684;
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

var seq__34628 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34629 = null;
var count__34630 = (0);
var i__34631 = (0);
while(true){
if((i__34631 < count__34630)){
var role = cljs.core._nth.call(null,chunk__34629,i__34631);
var temp__6753__auto___34685__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34685__$1)){
var spec_34686 = temp__6753__auto___34685__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34686));
} else {
}

var G__34687 = seq__34628;
var G__34688 = chunk__34629;
var G__34689 = count__34630;
var G__34690 = (i__34631 + (1));
seq__34628 = G__34687;
chunk__34629 = G__34688;
count__34630 = G__34689;
i__34631 = G__34690;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__34628);
if(temp__6753__auto____$1){
var seq__34628__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34628__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__34628__$1);
var G__34691 = cljs.core.chunk_rest.call(null,seq__34628__$1);
var G__34692 = c__27497__auto__;
var G__34693 = cljs.core.count.call(null,c__27497__auto__);
var G__34694 = (0);
seq__34628 = G__34691;
chunk__34629 = G__34692;
count__34630 = G__34693;
i__34631 = G__34694;
continue;
} else {
var role = cljs.core.first.call(null,seq__34628__$1);
var temp__6753__auto___34695__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___34695__$2)){
var spec_34696 = temp__6753__auto___34695__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34696));
} else {
}

var G__34697 = cljs.core.next.call(null,seq__34628__$1);
var G__34698 = null;
var G__34699 = (0);
var G__34700 = (0);
seq__34628 = G__34697;
chunk__34629 = G__34698;
count__34630 = G__34699;
i__34631 = G__34700;
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

//# sourceMappingURL=repl.js.map?rel=1496990001908