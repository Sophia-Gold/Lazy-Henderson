// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34947){
var map__34972 = p__34947;
var map__34972__$1 = ((((!((map__34972 == null)))?((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var m = map__34972__$1;
var n = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34974_34996 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34975_34997 = null;
var count__34976_34998 = (0);
var i__34977_34999 = (0);
while(true){
if((i__34977_34999 < count__34976_34998)){
var f_35000 = cljs.core._nth.call(null,chunk__34975_34997,i__34977_34999);
cljs.core.println.call(null,"  ",f_35000);

var G__35001 = seq__34974_34996;
var G__35002 = chunk__34975_34997;
var G__35003 = count__34976_34998;
var G__35004 = (i__34977_34999 + (1));
seq__34974_34996 = G__35001;
chunk__34975_34997 = G__35002;
count__34976_34998 = G__35003;
i__34977_34999 = G__35004;
continue;
} else {
var temp__6753__auto___35005 = cljs.core.seq.call(null,seq__34974_34996);
if(temp__6753__auto___35005){
var seq__34974_35006__$1 = temp__6753__auto___35005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34974_35006__$1)){
var c__27505__auto___35007 = cljs.core.chunk_first.call(null,seq__34974_35006__$1);
var G__35008 = cljs.core.chunk_rest.call(null,seq__34974_35006__$1);
var G__35009 = c__27505__auto___35007;
var G__35010 = cljs.core.count.call(null,c__27505__auto___35007);
var G__35011 = (0);
seq__34974_34996 = G__35008;
chunk__34975_34997 = G__35009;
count__34976_34998 = G__35010;
i__34977_34999 = G__35011;
continue;
} else {
var f_35012 = cljs.core.first.call(null,seq__34974_35006__$1);
cljs.core.println.call(null,"  ",f_35012);

var G__35013 = cljs.core.next.call(null,seq__34974_35006__$1);
var G__35014 = null;
var G__35015 = (0);
var G__35016 = (0);
seq__34974_34996 = G__35013;
chunk__34975_34997 = G__35014;
count__34976_34998 = G__35015;
i__34977_34999 = G__35016;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35017 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26602__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35017);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35017)))?cljs.core.second.call(null,arglists_35017):arglists_35017));
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
var seq__34978_35018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34979_35019 = null;
var count__34980_35020 = (0);
var i__34981_35021 = (0);
while(true){
if((i__34981_35021 < count__34980_35020)){
var vec__34982_35022 = cljs.core._nth.call(null,chunk__34979_35019,i__34981_35021);
var name_35023 = cljs.core.nth.call(null,vec__34982_35022,(0),null);
var map__34985_35024 = cljs.core.nth.call(null,vec__34982_35022,(1),null);
var map__34985_35025__$1 = ((((!((map__34985_35024 == null)))?((((map__34985_35024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34985_35024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34985_35024):map__34985_35024);
var doc_35026 = cljs.core.get.call(null,map__34985_35025__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35027 = cljs.core.get.call(null,map__34985_35025__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35023);

cljs.core.println.call(null," ",arglists_35027);

if(cljs.core.truth_(doc_35026)){
cljs.core.println.call(null," ",doc_35026);
} else {
}

var G__35028 = seq__34978_35018;
var G__35029 = chunk__34979_35019;
var G__35030 = count__34980_35020;
var G__35031 = (i__34981_35021 + (1));
seq__34978_35018 = G__35028;
chunk__34979_35019 = G__35029;
count__34980_35020 = G__35030;
i__34981_35021 = G__35031;
continue;
} else {
var temp__6753__auto___35032 = cljs.core.seq.call(null,seq__34978_35018);
if(temp__6753__auto___35032){
var seq__34978_35033__$1 = temp__6753__auto___35032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34978_35033__$1)){
var c__27505__auto___35034 = cljs.core.chunk_first.call(null,seq__34978_35033__$1);
var G__35035 = cljs.core.chunk_rest.call(null,seq__34978_35033__$1);
var G__35036 = c__27505__auto___35034;
var G__35037 = cljs.core.count.call(null,c__27505__auto___35034);
var G__35038 = (0);
seq__34978_35018 = G__35035;
chunk__34979_35019 = G__35036;
count__34980_35020 = G__35037;
i__34981_35021 = G__35038;
continue;
} else {
var vec__34987_35039 = cljs.core.first.call(null,seq__34978_35033__$1);
var name_35040 = cljs.core.nth.call(null,vec__34987_35039,(0),null);
var map__34990_35041 = cljs.core.nth.call(null,vec__34987_35039,(1),null);
var map__34990_35042__$1 = ((((!((map__34990_35041 == null)))?((((map__34990_35041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34990_35041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34990_35041):map__34990_35041);
var doc_35043 = cljs.core.get.call(null,map__34990_35042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35044 = cljs.core.get.call(null,map__34990_35042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35040);

cljs.core.println.call(null," ",arglists_35044);

if(cljs.core.truth_(doc_35043)){
cljs.core.println.call(null," ",doc_35043);
} else {
}

var G__35045 = cljs.core.next.call(null,seq__34978_35033__$1);
var G__35046 = null;
var G__35047 = (0);
var G__35048 = (0);
seq__34978_35018 = G__35045;
chunk__34979_35019 = G__35046;
count__34980_35020 = G__35047;
i__34981_35021 = G__35048;
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

var seq__34992 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34993 = null;
var count__34994 = (0);
var i__34995 = (0);
while(true){
if((i__34995 < count__34994)){
var role = cljs.core._nth.call(null,chunk__34993,i__34995);
var temp__6753__auto___35049__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___35049__$1)){
var spec_35050 = temp__6753__auto___35049__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35050));
} else {
}

var G__35051 = seq__34992;
var G__35052 = chunk__34993;
var G__35053 = count__34994;
var G__35054 = (i__34995 + (1));
seq__34992 = G__35051;
chunk__34993 = G__35052;
count__34994 = G__35053;
i__34995 = G__35054;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__34992);
if(temp__6753__auto____$1){
var seq__34992__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34992__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__34992__$1);
var G__35055 = cljs.core.chunk_rest.call(null,seq__34992__$1);
var G__35056 = c__27505__auto__;
var G__35057 = cljs.core.count.call(null,c__27505__auto__);
var G__35058 = (0);
seq__34992 = G__35055;
chunk__34993 = G__35056;
count__34994 = G__35057;
i__34995 = G__35058;
continue;
} else {
var role = cljs.core.first.call(null,seq__34992__$1);
var temp__6753__auto___35059__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___35059__$2)){
var spec_35060 = temp__6753__auto___35059__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35060));
} else {
}

var G__35061 = cljs.core.next.call(null,seq__34992__$1);
var G__35062 = null;
var G__35063 = (0);
var G__35064 = (0);
seq__34992 = G__35061;
chunk__34993 = G__35062;
count__34994 = G__35063;
i__34995 = G__35064;
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

//# sourceMappingURL=repl.js.map?rel=1496385394183