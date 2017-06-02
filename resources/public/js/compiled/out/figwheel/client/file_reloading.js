// Compiled by ClojureScript 1.9.198 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26602__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26602__auto__){
return or__26602__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26602__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32615_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32615_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32620 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32621 = null;
var count__32622 = (0);
var i__32623 = (0);
while(true){
if((i__32623 < count__32622)){
var n = cljs.core._nth.call(null,chunk__32621,i__32623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32624 = seq__32620;
var G__32625 = chunk__32621;
var G__32626 = count__32622;
var G__32627 = (i__32623 + (1));
seq__32620 = G__32624;
chunk__32621 = G__32625;
count__32622 = G__32626;
i__32623 = G__32627;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32620);
if(temp__6753__auto__){
var seq__32620__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32620__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__32620__$1);
var G__32628 = cljs.core.chunk_rest.call(null,seq__32620__$1);
var G__32629 = c__27505__auto__;
var G__32630 = cljs.core.count.call(null,c__27505__auto__);
var G__32631 = (0);
seq__32620 = G__32628;
chunk__32621 = G__32629;
count__32622 = G__32630;
i__32623 = G__32631;
continue;
} else {
var n = cljs.core.first.call(null,seq__32620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32632 = cljs.core.next.call(null,seq__32620__$1);
var G__32633 = null;
var G__32634 = (0);
var G__32635 = (0);
seq__32620 = G__32632;
chunk__32621 = G__32633;
count__32622 = G__32634;
i__32623 = G__32635;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32686_32697 = cljs.core.seq.call(null,deps);
var chunk__32687_32698 = null;
var count__32688_32699 = (0);
var i__32689_32700 = (0);
while(true){
if((i__32689_32700 < count__32688_32699)){
var dep_32701 = cljs.core._nth.call(null,chunk__32687_32698,i__32689_32700);
topo_sort_helper_STAR_.call(null,dep_32701,(depth + (1)),state);

var G__32702 = seq__32686_32697;
var G__32703 = chunk__32687_32698;
var G__32704 = count__32688_32699;
var G__32705 = (i__32689_32700 + (1));
seq__32686_32697 = G__32702;
chunk__32687_32698 = G__32703;
count__32688_32699 = G__32704;
i__32689_32700 = G__32705;
continue;
} else {
var temp__6753__auto___32706 = cljs.core.seq.call(null,seq__32686_32697);
if(temp__6753__auto___32706){
var seq__32686_32707__$1 = temp__6753__auto___32706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32686_32707__$1)){
var c__27505__auto___32708 = cljs.core.chunk_first.call(null,seq__32686_32707__$1);
var G__32709 = cljs.core.chunk_rest.call(null,seq__32686_32707__$1);
var G__32710 = c__27505__auto___32708;
var G__32711 = cljs.core.count.call(null,c__27505__auto___32708);
var G__32712 = (0);
seq__32686_32697 = G__32709;
chunk__32687_32698 = G__32710;
count__32688_32699 = G__32711;
i__32689_32700 = G__32712;
continue;
} else {
var dep_32713 = cljs.core.first.call(null,seq__32686_32707__$1);
topo_sort_helper_STAR_.call(null,dep_32713,(depth + (1)),state);

var G__32714 = cljs.core.next.call(null,seq__32686_32707__$1);
var G__32715 = null;
var G__32716 = (0);
var G__32717 = (0);
seq__32686_32697 = G__32714;
chunk__32687_32698 = G__32715;
count__32688_32699 = G__32716;
i__32689_32700 = G__32717;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32690){
var vec__32694 = p__32690;
var seq__32695 = cljs.core.seq.call(null,vec__32694);
var first__32696 = cljs.core.first.call(null,seq__32695);
var seq__32695__$1 = cljs.core.next.call(null,seq__32695);
var x = first__32696;
var xs = seq__32695__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32694,seq__32695,first__32696,seq__32695__$1,x,xs,get_deps__$1){
return (function (p1__32636_SHARP_){
return clojure.set.difference.call(null,p1__32636_SHARP_,x);
});})(vec__32694,seq__32695,first__32696,seq__32695__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32730 = cljs.core.seq.call(null,provides);
var chunk__32731 = null;
var count__32732 = (0);
var i__32733 = (0);
while(true){
if((i__32733 < count__32732)){
var prov = cljs.core._nth.call(null,chunk__32731,i__32733);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32734_32742 = cljs.core.seq.call(null,requires);
var chunk__32735_32743 = null;
var count__32736_32744 = (0);
var i__32737_32745 = (0);
while(true){
if((i__32737_32745 < count__32736_32744)){
var req_32746 = cljs.core._nth.call(null,chunk__32735_32743,i__32737_32745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32746,prov);

var G__32747 = seq__32734_32742;
var G__32748 = chunk__32735_32743;
var G__32749 = count__32736_32744;
var G__32750 = (i__32737_32745 + (1));
seq__32734_32742 = G__32747;
chunk__32735_32743 = G__32748;
count__32736_32744 = G__32749;
i__32737_32745 = G__32750;
continue;
} else {
var temp__6753__auto___32751 = cljs.core.seq.call(null,seq__32734_32742);
if(temp__6753__auto___32751){
var seq__32734_32752__$1 = temp__6753__auto___32751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32734_32752__$1)){
var c__27505__auto___32753 = cljs.core.chunk_first.call(null,seq__32734_32752__$1);
var G__32754 = cljs.core.chunk_rest.call(null,seq__32734_32752__$1);
var G__32755 = c__27505__auto___32753;
var G__32756 = cljs.core.count.call(null,c__27505__auto___32753);
var G__32757 = (0);
seq__32734_32742 = G__32754;
chunk__32735_32743 = G__32755;
count__32736_32744 = G__32756;
i__32737_32745 = G__32757;
continue;
} else {
var req_32758 = cljs.core.first.call(null,seq__32734_32752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32758,prov);

var G__32759 = cljs.core.next.call(null,seq__32734_32752__$1);
var G__32760 = null;
var G__32761 = (0);
var G__32762 = (0);
seq__32734_32742 = G__32759;
chunk__32735_32743 = G__32760;
count__32736_32744 = G__32761;
i__32737_32745 = G__32762;
continue;
}
} else {
}
}
break;
}

var G__32763 = seq__32730;
var G__32764 = chunk__32731;
var G__32765 = count__32732;
var G__32766 = (i__32733 + (1));
seq__32730 = G__32763;
chunk__32731 = G__32764;
count__32732 = G__32765;
i__32733 = G__32766;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32730);
if(temp__6753__auto__){
var seq__32730__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32730__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__32730__$1);
var G__32767 = cljs.core.chunk_rest.call(null,seq__32730__$1);
var G__32768 = c__27505__auto__;
var G__32769 = cljs.core.count.call(null,c__27505__auto__);
var G__32770 = (0);
seq__32730 = G__32767;
chunk__32731 = G__32768;
count__32732 = G__32769;
i__32733 = G__32770;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32730__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32738_32771 = cljs.core.seq.call(null,requires);
var chunk__32739_32772 = null;
var count__32740_32773 = (0);
var i__32741_32774 = (0);
while(true){
if((i__32741_32774 < count__32740_32773)){
var req_32775 = cljs.core._nth.call(null,chunk__32739_32772,i__32741_32774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32775,prov);

var G__32776 = seq__32738_32771;
var G__32777 = chunk__32739_32772;
var G__32778 = count__32740_32773;
var G__32779 = (i__32741_32774 + (1));
seq__32738_32771 = G__32776;
chunk__32739_32772 = G__32777;
count__32740_32773 = G__32778;
i__32741_32774 = G__32779;
continue;
} else {
var temp__6753__auto___32780__$1 = cljs.core.seq.call(null,seq__32738_32771);
if(temp__6753__auto___32780__$1){
var seq__32738_32781__$1 = temp__6753__auto___32780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32738_32781__$1)){
var c__27505__auto___32782 = cljs.core.chunk_first.call(null,seq__32738_32781__$1);
var G__32783 = cljs.core.chunk_rest.call(null,seq__32738_32781__$1);
var G__32784 = c__27505__auto___32782;
var G__32785 = cljs.core.count.call(null,c__27505__auto___32782);
var G__32786 = (0);
seq__32738_32771 = G__32783;
chunk__32739_32772 = G__32784;
count__32740_32773 = G__32785;
i__32741_32774 = G__32786;
continue;
} else {
var req_32787 = cljs.core.first.call(null,seq__32738_32781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32787,prov);

var G__32788 = cljs.core.next.call(null,seq__32738_32781__$1);
var G__32789 = null;
var G__32790 = (0);
var G__32791 = (0);
seq__32738_32771 = G__32788;
chunk__32739_32772 = G__32789;
count__32740_32773 = G__32790;
i__32741_32774 = G__32791;
continue;
}
} else {
}
}
break;
}

var G__32792 = cljs.core.next.call(null,seq__32730__$1);
var G__32793 = null;
var G__32794 = (0);
var G__32795 = (0);
seq__32730 = G__32792;
chunk__32731 = G__32793;
count__32732 = G__32794;
i__32733 = G__32795;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32800_32804 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32801_32805 = null;
var count__32802_32806 = (0);
var i__32803_32807 = (0);
while(true){
if((i__32803_32807 < count__32802_32806)){
var ns_32808 = cljs.core._nth.call(null,chunk__32801_32805,i__32803_32807);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32808);

var G__32809 = seq__32800_32804;
var G__32810 = chunk__32801_32805;
var G__32811 = count__32802_32806;
var G__32812 = (i__32803_32807 + (1));
seq__32800_32804 = G__32809;
chunk__32801_32805 = G__32810;
count__32802_32806 = G__32811;
i__32803_32807 = G__32812;
continue;
} else {
var temp__6753__auto___32813 = cljs.core.seq.call(null,seq__32800_32804);
if(temp__6753__auto___32813){
var seq__32800_32814__$1 = temp__6753__auto___32813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32800_32814__$1)){
var c__27505__auto___32815 = cljs.core.chunk_first.call(null,seq__32800_32814__$1);
var G__32816 = cljs.core.chunk_rest.call(null,seq__32800_32814__$1);
var G__32817 = c__27505__auto___32815;
var G__32818 = cljs.core.count.call(null,c__27505__auto___32815);
var G__32819 = (0);
seq__32800_32804 = G__32816;
chunk__32801_32805 = G__32817;
count__32802_32806 = G__32818;
i__32803_32807 = G__32819;
continue;
} else {
var ns_32820 = cljs.core.first.call(null,seq__32800_32814__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32820);

var G__32821 = cljs.core.next.call(null,seq__32800_32814__$1);
var G__32822 = null;
var G__32823 = (0);
var G__32824 = (0);
seq__32800_32804 = G__32821;
chunk__32801_32805 = G__32822;
count__32802_32806 = G__32823;
i__32803_32807 = G__32824;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26602__auto__ = goog.require__;
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32825__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32826__i = 0, G__32826__a = new Array(arguments.length -  0);
while (G__32826__i < G__32826__a.length) {G__32826__a[G__32826__i] = arguments[G__32826__i + 0]; ++G__32826__i;}
  args = new cljs.core.IndexedSeq(G__32826__a,0);
} 
return G__32825__delegate.call(this,args);};
G__32825.cljs$lang$maxFixedArity = 0;
G__32825.cljs$lang$applyTo = (function (arglist__32827){
var args = cljs.core.seq(arglist__32827);
return G__32825__delegate(args);
});
G__32825.cljs$core$IFn$_invoke$arity$variadic = G__32825__delegate;
return G__32825;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32829 = cljs.core._EQ_;
var expr__32830 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32829.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32830))){
var path_parts = ((function (pred__32829,expr__32830){
return (function (p1__32828_SHARP_){
return clojure.string.split.call(null,p1__32828_SHARP_,/[\/\\]/);
});})(pred__32829,expr__32830))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32829,expr__32830){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32832){if((e32832 instanceof Error)){
var e = e32832;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32832;

}
}})());
});
;})(path_parts,sep,root,pred__32829,expr__32830))
} else {
if(cljs.core.truth_(pred__32829.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32830))){
return ((function (pred__32829,expr__32830){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32829,expr__32830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32829,expr__32830))
);

return deferred.addErrback(((function (deferred,pred__32829,expr__32830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32829,expr__32830))
);
});
;})(pred__32829,expr__32830))
} else {
return ((function (pred__32829,expr__32830){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32829,expr__32830))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32833,callback){
var map__32836 = p__32833;
var map__32836__$1 = ((((!((map__32836 == null)))?((((map__32836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32836):map__32836);
var file_msg = map__32836__$1;
var request_url = cljs.core.get.call(null,map__32836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32836,map__32836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32836,map__32836__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__){
return (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32862_32882 = state_32860__$1;
(statearr_32862_32882[(2)] = inst_32856);

(statearr_32862_32882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var state_32860__$1 = state_32860;
var statearr_32863_32883 = state_32860__$1;
(statearr_32863_32883[(2)] = null);

(statearr_32863_32883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32840 = (state_32860[(7)]);
var inst_32840__$1 = (state_32860[(2)]);
var state_32860__$1 = (function (){var statearr_32864 = state_32860;
(statearr_32864[(7)] = inst_32840__$1);

return statearr_32864;
})();
if(cljs.core.truth_(inst_32840__$1)){
var statearr_32865_32884 = state_32860__$1;
(statearr_32865_32884[(1)] = (5));

} else {
var statearr_32866_32885 = state_32860__$1;
(statearr_32866_32885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var state_32860__$1 = state_32860;
var statearr_32867_32886 = state_32860__$1;
(statearr_32867_32886[(2)] = null);

(statearr_32867_32886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (2))){
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32861 === (11))){
var inst_32852 = (state_32860[(2)]);
var state_32860__$1 = (function (){var statearr_32868 = state_32860;
(statearr_32868[(8)] = inst_32852);

return statearr_32868;
})();
var statearr_32869_32887 = state_32860__$1;
(statearr_32869_32887[(2)] = null);

(statearr_32869_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var inst_32846 = (state_32860[(9)]);
var inst_32844 = (state_32860[(10)]);
var inst_32848 = inst_32846.call(null,inst_32844);
var state_32860__$1 = state_32860;
var statearr_32870_32888 = state_32860__$1;
(statearr_32870_32888[(2)] = inst_32848);

(statearr_32870_32888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (5))){
var inst_32840 = (state_32860[(7)]);
var inst_32842 = figwheel.client.file_reloading.blocking_load.call(null,inst_32840);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32860__$1,(8),inst_32842);
} else {
if((state_val_32861 === (10))){
var inst_32844 = (state_32860[(10)]);
var inst_32850 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32844);
var state_32860__$1 = state_32860;
var statearr_32871_32889 = state_32860__$1;
(statearr_32871_32889[(2)] = inst_32850);

(statearr_32871_32889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32846 = (state_32860[(9)]);
var inst_32840 = (state_32860[(7)]);
var inst_32844 = (state_32860[(2)]);
var inst_32845 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32846__$1 = cljs.core.get.call(null,inst_32845,inst_32840);
var state_32860__$1 = (function (){var statearr_32872 = state_32860;
(statearr_32872[(9)] = inst_32846__$1);

(statearr_32872[(10)] = inst_32844);

return statearr_32872;
})();
if(cljs.core.truth_(inst_32846__$1)){
var statearr_32873_32890 = state_32860__$1;
(statearr_32873_32890[(1)] = (9));

} else {
var statearr_32874_32891 = state_32860__$1;
(statearr_32874_32891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29673__auto__))
;
return ((function (switch__29559__auto__,c__29673__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29560__auto__ = null;
var figwheel$client$file_reloading$state_machine__29560__auto____0 = (function (){
var statearr_32878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32878[(0)] = figwheel$client$file_reloading$state_machine__29560__auto__);

(statearr_32878[(1)] = (1));

return statearr_32878;
});
var figwheel$client$file_reloading$state_machine__29560__auto____1 = (function (state_32860){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e32879){if((e32879 instanceof Object)){
var ex__29563__auto__ = e32879;
var statearr_32880_32892 = state_32860;
(statearr_32880_32892[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32893 = state_32860;
state_32860 = G__32893;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29560__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29560__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29560__auto____0;
figwheel$client$file_reloading$state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29560__auto____1;
return figwheel$client$file_reloading$state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__))
})();
var state__29675__auto__ = (function (){var statearr_32881 = f__29674__auto__.call(null);
(statearr_32881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_32881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__))
);

return c__29673__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32894,callback){
var map__32897 = p__32894;
var map__32897__$1 = ((((!((map__32897 == null)))?((((map__32897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32897):map__32897);
var file_msg = map__32897__$1;
var namespace = cljs.core.get.call(null,map__32897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32897,map__32897__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32897,map__32897__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32899){
var map__32902 = p__32899;
var map__32902__$1 = ((((!((map__32902 == null)))?((((map__32902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32902):map__32902);
var file_msg = map__32902__$1;
var namespace = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26590__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26590__auto__){
var or__26602__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26602__auto__)){
return or__26602__auto__;
} else {
var or__26602__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26602__auto____$1)){
return or__26602__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26590__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32904,callback){
var map__32907 = p__32904;
var map__32907__$1 = ((((!((map__32907 == null)))?((((map__32907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32907):map__32907);
var file_msg = map__32907__$1;
var request_url = cljs.core.get.call(null,map__32907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29673__auto___33011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto___33011,out){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto___33011,out){
return (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (1))){
var inst_32967 = cljs.core.seq.call(null,files);
var inst_32968 = cljs.core.first.call(null,inst_32967);
var inst_32969 = cljs.core.next.call(null,inst_32967);
var inst_32970 = files;
var state_32993__$1 = (function (){var statearr_32995 = state_32993;
(statearr_32995[(7)] = inst_32970);

(statearr_32995[(8)] = inst_32969);

(statearr_32995[(9)] = inst_32968);

return statearr_32995;
})();
var statearr_32996_33012 = state_32993__$1;
(statearr_32996_33012[(2)] = null);

(statearr_32996_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (2))){
var inst_32976 = (state_32993[(10)]);
var inst_32970 = (state_32993[(7)]);
var inst_32975 = cljs.core.seq.call(null,inst_32970);
var inst_32976__$1 = cljs.core.first.call(null,inst_32975);
var inst_32977 = cljs.core.next.call(null,inst_32975);
var inst_32978 = (inst_32976__$1 == null);
var inst_32979 = cljs.core.not.call(null,inst_32978);
var state_32993__$1 = (function (){var statearr_32997 = state_32993;
(statearr_32997[(10)] = inst_32976__$1);

(statearr_32997[(11)] = inst_32977);

return statearr_32997;
})();
if(inst_32979){
var statearr_32998_33013 = state_32993__$1;
(statearr_32998_33013[(1)] = (4));

} else {
var statearr_32999_33014 = state_32993__$1;
(statearr_32999_33014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (3))){
var inst_32991 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32993__$1,inst_32991);
} else {
if((state_val_32994 === (4))){
var inst_32976 = (state_32993[(10)]);
var inst_32981 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32976);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32993__$1,(7),inst_32981);
} else {
if((state_val_32994 === (5))){
var inst_32987 = cljs.core.async.close_BANG_.call(null,out);
var state_32993__$1 = state_32993;
var statearr_33000_33015 = state_32993__$1;
(statearr_33000_33015[(2)] = inst_32987);

(statearr_33000_33015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var inst_32989 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33001_33016 = state_32993__$1;
(statearr_33001_33016[(2)] = inst_32989);

(statearr_33001_33016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (7))){
var inst_32977 = (state_32993[(11)]);
var inst_32983 = (state_32993[(2)]);
var inst_32984 = cljs.core.async.put_BANG_.call(null,out,inst_32983);
var inst_32970 = inst_32977;
var state_32993__$1 = (function (){var statearr_33002 = state_32993;
(statearr_33002[(7)] = inst_32970);

(statearr_33002[(12)] = inst_32984);

return statearr_33002;
})();
var statearr_33003_33017 = state_32993__$1;
(statearr_33003_33017[(2)] = null);

(statearr_33003_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29673__auto___33011,out))
;
return ((function (switch__29559__auto__,c__29673__auto___33011,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____0 = (function (){
var statearr_33007 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33007[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__);

(statearr_33007[(1)] = (1));

return statearr_33007;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____1 = (function (state_32993){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_32993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e33008){if((e33008 instanceof Object)){
var ex__29563__auto__ = e33008;
var statearr_33009_33018 = state_32993;
(statearr_33009_33018[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33019 = state_32993;
state_32993 = G__33019;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto___33011,out))
})();
var state__29675__auto__ = (function (){var statearr_33010 = f__29674__auto__.call(null);
(statearr_33010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto___33011);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto___33011,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33020,opts){
var map__33024 = p__33020;
var map__33024__$1 = ((((!((map__33024 == null)))?((((map__33024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33024):map__33024);
var eval_body__$1 = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26590__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26590__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26590__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33026){var e = e33026;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33027_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33027_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33036){
var vec__33037 = p__33036;
var k = cljs.core.nth.call(null,vec__33037,(0),null);
var v = cljs.core.nth.call(null,vec__33037,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33040){
var vec__33041 = p__33040;
var k = cljs.core.nth.call(null,vec__33041,(0),null);
var v = cljs.core.nth.call(null,vec__33041,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33047,p__33048){
var map__33295 = p__33047;
var map__33295__$1 = ((((!((map__33295 == null)))?((((map__33295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33295):map__33295);
var opts = map__33295__$1;
var before_jsload = cljs.core.get.call(null,map__33295__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33295__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33295__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33296 = p__33048;
var map__33296__$1 = ((((!((map__33296 == null)))?((((map__33296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33296):map__33296);
var msg = map__33296__$1;
var files = cljs.core.get.call(null,map__33296__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33296__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33296__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29674__auto__ = (function (){var switch__29559__auto__ = ((function (c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33449){
var state_val_33450 = (state_33449[(1)]);
if((state_val_33450 === (7))){
var inst_33313 = (state_33449[(7)]);
var inst_33310 = (state_33449[(8)]);
var inst_33312 = (state_33449[(9)]);
var inst_33311 = (state_33449[(10)]);
var inst_33318 = cljs.core._nth.call(null,inst_33311,inst_33313);
var inst_33319 = figwheel.client.file_reloading.eval_body.call(null,inst_33318,opts);
var inst_33320 = (inst_33313 + (1));
var tmp33451 = inst_33310;
var tmp33452 = inst_33312;
var tmp33453 = inst_33311;
var inst_33310__$1 = tmp33451;
var inst_33311__$1 = tmp33453;
var inst_33312__$1 = tmp33452;
var inst_33313__$1 = inst_33320;
var state_33449__$1 = (function (){var statearr_33454 = state_33449;
(statearr_33454[(7)] = inst_33313__$1);

(statearr_33454[(8)] = inst_33310__$1);

(statearr_33454[(11)] = inst_33319);

(statearr_33454[(9)] = inst_33312__$1);

(statearr_33454[(10)] = inst_33311__$1);

return statearr_33454;
})();
var statearr_33455_33541 = state_33449__$1;
(statearr_33455_33541[(2)] = null);

(statearr_33455_33541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (20))){
var inst_33353 = (state_33449[(12)]);
var inst_33361 = figwheel.client.file_reloading.sort_files.call(null,inst_33353);
var state_33449__$1 = state_33449;
var statearr_33456_33542 = state_33449__$1;
(statearr_33456_33542[(2)] = inst_33361);

(statearr_33456_33542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (27))){
var state_33449__$1 = state_33449;
var statearr_33457_33543 = state_33449__$1;
(statearr_33457_33543[(2)] = null);

(statearr_33457_33543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (1))){
var inst_33302 = (state_33449[(13)]);
var inst_33299 = before_jsload.call(null,files);
var inst_33300 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33301 = (function (){return ((function (inst_33302,inst_33299,inst_33300,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33044_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33044_SHARP_);
});
;})(inst_33302,inst_33299,inst_33300,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33302__$1 = cljs.core.filter.call(null,inst_33301,files);
var inst_33303 = cljs.core.not_empty.call(null,inst_33302__$1);
var state_33449__$1 = (function (){var statearr_33458 = state_33449;
(statearr_33458[(13)] = inst_33302__$1);

(statearr_33458[(14)] = inst_33299);

(statearr_33458[(15)] = inst_33300);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33303)){
var statearr_33459_33544 = state_33449__$1;
(statearr_33459_33544[(1)] = (2));

} else {
var statearr_33460_33545 = state_33449__$1;
(statearr_33460_33545[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (24))){
var state_33449__$1 = state_33449;
var statearr_33461_33546 = state_33449__$1;
(statearr_33461_33546[(2)] = null);

(statearr_33461_33546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (39))){
var inst_33403 = (state_33449[(16)]);
var state_33449__$1 = state_33449;
var statearr_33462_33547 = state_33449__$1;
(statearr_33462_33547[(2)] = inst_33403);

(statearr_33462_33547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (46))){
var inst_33444 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33463_33548 = state_33449__$1;
(statearr_33463_33548[(2)] = inst_33444);

(statearr_33463_33548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (4))){
var inst_33347 = (state_33449[(2)]);
var inst_33348 = cljs.core.List.EMPTY;
var inst_33349 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33348);
var inst_33350 = (function (){return ((function (inst_33347,inst_33348,inst_33349,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33045_SHARP_){
var and__26590__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33045_SHARP_);
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33045_SHARP_));
} else {
return and__26590__auto__;
}
});
;})(inst_33347,inst_33348,inst_33349,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33351 = cljs.core.filter.call(null,inst_33350,files);
var inst_33352 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33353 = cljs.core.concat.call(null,inst_33351,inst_33352);
var state_33449__$1 = (function (){var statearr_33464 = state_33449;
(statearr_33464[(12)] = inst_33353);

(statearr_33464[(17)] = inst_33347);

(statearr_33464[(18)] = inst_33349);

return statearr_33464;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33465_33549 = state_33449__$1;
(statearr_33465_33549[(1)] = (16));

} else {
var statearr_33466_33550 = state_33449__$1;
(statearr_33466_33550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (15))){
var inst_33337 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33467_33551 = state_33449__$1;
(statearr_33467_33551[(2)] = inst_33337);

(statearr_33467_33551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (21))){
var inst_33363 = (state_33449[(19)]);
var inst_33363__$1 = (state_33449[(2)]);
var inst_33364 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33363__$1);
var state_33449__$1 = (function (){var statearr_33468 = state_33449;
(statearr_33468[(19)] = inst_33363__$1);

return statearr_33468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33449__$1,(22),inst_33364);
} else {
if((state_val_33450 === (31))){
var inst_33447 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33449__$1,inst_33447);
} else {
if((state_val_33450 === (32))){
var inst_33403 = (state_33449[(16)]);
var inst_33408 = inst_33403.cljs$lang$protocol_mask$partition0$;
var inst_33409 = (inst_33408 & (64));
var inst_33410 = inst_33403.cljs$core$ISeq$;
var inst_33411 = (inst_33409) || (inst_33410);
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33411)){
var statearr_33469_33552 = state_33449__$1;
(statearr_33469_33552[(1)] = (35));

} else {
var statearr_33470_33553 = state_33449__$1;
(statearr_33470_33553[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (40))){
var inst_33424 = (state_33449[(20)]);
var inst_33423 = (state_33449[(2)]);
var inst_33424__$1 = cljs.core.get.call(null,inst_33423,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33425 = cljs.core.get.call(null,inst_33423,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33426 = cljs.core.not_empty.call(null,inst_33424__$1);
var state_33449__$1 = (function (){var statearr_33471 = state_33449;
(statearr_33471[(21)] = inst_33425);

(statearr_33471[(20)] = inst_33424__$1);

return statearr_33471;
})();
if(cljs.core.truth_(inst_33426)){
var statearr_33472_33554 = state_33449__$1;
(statearr_33472_33554[(1)] = (41));

} else {
var statearr_33473_33555 = state_33449__$1;
(statearr_33473_33555[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (33))){
var state_33449__$1 = state_33449;
var statearr_33474_33556 = state_33449__$1;
(statearr_33474_33556[(2)] = false);

(statearr_33474_33556[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (13))){
var inst_33323 = (state_33449[(22)]);
var inst_33327 = cljs.core.chunk_first.call(null,inst_33323);
var inst_33328 = cljs.core.chunk_rest.call(null,inst_33323);
var inst_33329 = cljs.core.count.call(null,inst_33327);
var inst_33310 = inst_33328;
var inst_33311 = inst_33327;
var inst_33312 = inst_33329;
var inst_33313 = (0);
var state_33449__$1 = (function (){var statearr_33475 = state_33449;
(statearr_33475[(7)] = inst_33313);

(statearr_33475[(8)] = inst_33310);

(statearr_33475[(9)] = inst_33312);

(statearr_33475[(10)] = inst_33311);

return statearr_33475;
})();
var statearr_33476_33557 = state_33449__$1;
(statearr_33476_33557[(2)] = null);

(statearr_33476_33557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (22))){
var inst_33367 = (state_33449[(23)]);
var inst_33366 = (state_33449[(24)]);
var inst_33371 = (state_33449[(25)]);
var inst_33363 = (state_33449[(19)]);
var inst_33366__$1 = (state_33449[(2)]);
var inst_33367__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33366__$1);
var inst_33368 = (function (){var all_files = inst_33363;
var res_SINGLEQUOTE_ = inst_33366__$1;
var res = inst_33367__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33367,inst_33366,inst_33371,inst_33363,inst_33366__$1,inst_33367__$1,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33046_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33046_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33367,inst_33366,inst_33371,inst_33363,inst_33366__$1,inst_33367__$1,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33369 = cljs.core.filter.call(null,inst_33368,inst_33366__$1);
var inst_33370 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33370);
var inst_33372 = cljs.core.not_empty.call(null,inst_33371__$1);
var state_33449__$1 = (function (){var statearr_33477 = state_33449;
(statearr_33477[(23)] = inst_33367__$1);

(statearr_33477[(24)] = inst_33366__$1);

(statearr_33477[(25)] = inst_33371__$1);

(statearr_33477[(26)] = inst_33369);

return statearr_33477;
})();
if(cljs.core.truth_(inst_33372)){
var statearr_33478_33558 = state_33449__$1;
(statearr_33478_33558[(1)] = (23));

} else {
var statearr_33479_33559 = state_33449__$1;
(statearr_33479_33559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (36))){
var state_33449__$1 = state_33449;
var statearr_33480_33560 = state_33449__$1;
(statearr_33480_33560[(2)] = false);

(statearr_33480_33560[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (41))){
var inst_33424 = (state_33449[(20)]);
var inst_33428 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33429 = cljs.core.map.call(null,inst_33428,inst_33424);
var inst_33430 = cljs.core.pr_str.call(null,inst_33429);
var inst_33431 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33430)].join('');
var inst_33432 = figwheel.client.utils.log.call(null,inst_33431);
var state_33449__$1 = state_33449;
var statearr_33481_33561 = state_33449__$1;
(statearr_33481_33561[(2)] = inst_33432);

(statearr_33481_33561[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (43))){
var inst_33425 = (state_33449[(21)]);
var inst_33435 = (state_33449[(2)]);
var inst_33436 = cljs.core.not_empty.call(null,inst_33425);
var state_33449__$1 = (function (){var statearr_33482 = state_33449;
(statearr_33482[(27)] = inst_33435);

return statearr_33482;
})();
if(cljs.core.truth_(inst_33436)){
var statearr_33483_33562 = state_33449__$1;
(statearr_33483_33562[(1)] = (44));

} else {
var statearr_33484_33563 = state_33449__$1;
(statearr_33484_33563[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (29))){
var inst_33367 = (state_33449[(23)]);
var inst_33366 = (state_33449[(24)]);
var inst_33371 = (state_33449[(25)]);
var inst_33403 = (state_33449[(16)]);
var inst_33369 = (state_33449[(26)]);
var inst_33363 = (state_33449[(19)]);
var inst_33399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33402 = (function (){var all_files = inst_33363;
var res_SINGLEQUOTE_ = inst_33366;
var res = inst_33367;
var files_not_loaded = inst_33369;
var dependencies_that_loaded = inst_33371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33403,inst_33369,inst_33363,inst_33399,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33401){
var map__33485 = p__33401;
var map__33485__$1 = ((((!((map__33485 == null)))?((((map__33485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var namespace = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33403,inst_33369,inst_33363,inst_33399,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33403__$1 = cljs.core.group_by.call(null,inst_33402,inst_33369);
var inst_33405 = (inst_33403__$1 == null);
var inst_33406 = cljs.core.not.call(null,inst_33405);
var state_33449__$1 = (function (){var statearr_33487 = state_33449;
(statearr_33487[(28)] = inst_33399);

(statearr_33487[(16)] = inst_33403__$1);

return statearr_33487;
})();
if(inst_33406){
var statearr_33488_33564 = state_33449__$1;
(statearr_33488_33564[(1)] = (32));

} else {
var statearr_33489_33565 = state_33449__$1;
(statearr_33489_33565[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (44))){
var inst_33425 = (state_33449[(21)]);
var inst_33438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33425);
var inst_33439 = cljs.core.pr_str.call(null,inst_33438);
var inst_33440 = [cljs.core.str("not required: "),cljs.core.str(inst_33439)].join('');
var inst_33441 = figwheel.client.utils.log.call(null,inst_33440);
var state_33449__$1 = state_33449;
var statearr_33490_33566 = state_33449__$1;
(statearr_33490_33566[(2)] = inst_33441);

(statearr_33490_33566[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (6))){
var inst_33344 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33491_33567 = state_33449__$1;
(statearr_33491_33567[(2)] = inst_33344);

(statearr_33491_33567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (28))){
var inst_33369 = (state_33449[(26)]);
var inst_33396 = (state_33449[(2)]);
var inst_33397 = cljs.core.not_empty.call(null,inst_33369);
var state_33449__$1 = (function (){var statearr_33492 = state_33449;
(statearr_33492[(29)] = inst_33396);

return statearr_33492;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33493_33568 = state_33449__$1;
(statearr_33493_33568[(1)] = (29));

} else {
var statearr_33494_33569 = state_33449__$1;
(statearr_33494_33569[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (25))){
var inst_33367 = (state_33449[(23)]);
var inst_33383 = (state_33449[(2)]);
var inst_33384 = cljs.core.not_empty.call(null,inst_33367);
var state_33449__$1 = (function (){var statearr_33495 = state_33449;
(statearr_33495[(30)] = inst_33383);

return statearr_33495;
})();
if(cljs.core.truth_(inst_33384)){
var statearr_33496_33570 = state_33449__$1;
(statearr_33496_33570[(1)] = (26));

} else {
var statearr_33497_33571 = state_33449__$1;
(statearr_33497_33571[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (34))){
var inst_33418 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33418)){
var statearr_33498_33572 = state_33449__$1;
(statearr_33498_33572[(1)] = (38));

} else {
var statearr_33499_33573 = state_33449__$1;
(statearr_33499_33573[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (17))){
var state_33449__$1 = state_33449;
var statearr_33500_33574 = state_33449__$1;
(statearr_33500_33574[(2)] = recompile_dependents);

(statearr_33500_33574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (3))){
var state_33449__$1 = state_33449;
var statearr_33501_33575 = state_33449__$1;
(statearr_33501_33575[(2)] = null);

(statearr_33501_33575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (12))){
var inst_33340 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33502_33576 = state_33449__$1;
(statearr_33502_33576[(2)] = inst_33340);

(statearr_33502_33576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (2))){
var inst_33302 = (state_33449[(13)]);
var inst_33309 = cljs.core.seq.call(null,inst_33302);
var inst_33310 = inst_33309;
var inst_33311 = null;
var inst_33312 = (0);
var inst_33313 = (0);
var state_33449__$1 = (function (){var statearr_33503 = state_33449;
(statearr_33503[(7)] = inst_33313);

(statearr_33503[(8)] = inst_33310);

(statearr_33503[(9)] = inst_33312);

(statearr_33503[(10)] = inst_33311);

return statearr_33503;
})();
var statearr_33504_33577 = state_33449__$1;
(statearr_33504_33577[(2)] = null);

(statearr_33504_33577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (23))){
var inst_33367 = (state_33449[(23)]);
var inst_33366 = (state_33449[(24)]);
var inst_33371 = (state_33449[(25)]);
var inst_33369 = (state_33449[(26)]);
var inst_33363 = (state_33449[(19)]);
var inst_33374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33376 = (function (){var all_files = inst_33363;
var res_SINGLEQUOTE_ = inst_33366;
var res = inst_33367;
var files_not_loaded = inst_33369;
var dependencies_that_loaded = inst_33371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33374,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33375){
var map__33505 = p__33375;
var map__33505__$1 = ((((!((map__33505 == null)))?((((map__33505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33505):map__33505);
var request_url = cljs.core.get.call(null,map__33505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33374,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33377 = cljs.core.reverse.call(null,inst_33371);
var inst_33378 = cljs.core.map.call(null,inst_33376,inst_33377);
var inst_33379 = cljs.core.pr_str.call(null,inst_33378);
var inst_33380 = figwheel.client.utils.log.call(null,inst_33379);
var state_33449__$1 = (function (){var statearr_33507 = state_33449;
(statearr_33507[(31)] = inst_33374);

return statearr_33507;
})();
var statearr_33508_33578 = state_33449__$1;
(statearr_33508_33578[(2)] = inst_33380);

(statearr_33508_33578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (35))){
var state_33449__$1 = state_33449;
var statearr_33509_33579 = state_33449__$1;
(statearr_33509_33579[(2)] = true);

(statearr_33509_33579[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (19))){
var inst_33353 = (state_33449[(12)]);
var inst_33359 = figwheel.client.file_reloading.expand_files.call(null,inst_33353);
var state_33449__$1 = state_33449;
var statearr_33510_33580 = state_33449__$1;
(statearr_33510_33580[(2)] = inst_33359);

(statearr_33510_33580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (11))){
var state_33449__$1 = state_33449;
var statearr_33511_33581 = state_33449__$1;
(statearr_33511_33581[(2)] = null);

(statearr_33511_33581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (9))){
var inst_33342 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33512_33582 = state_33449__$1;
(statearr_33512_33582[(2)] = inst_33342);

(statearr_33512_33582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (5))){
var inst_33313 = (state_33449[(7)]);
var inst_33312 = (state_33449[(9)]);
var inst_33315 = (inst_33313 < inst_33312);
var inst_33316 = inst_33315;
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33316)){
var statearr_33513_33583 = state_33449__$1;
(statearr_33513_33583[(1)] = (7));

} else {
var statearr_33514_33584 = state_33449__$1;
(statearr_33514_33584[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (14))){
var inst_33323 = (state_33449[(22)]);
var inst_33332 = cljs.core.first.call(null,inst_33323);
var inst_33333 = figwheel.client.file_reloading.eval_body.call(null,inst_33332,opts);
var inst_33334 = cljs.core.next.call(null,inst_33323);
var inst_33310 = inst_33334;
var inst_33311 = null;
var inst_33312 = (0);
var inst_33313 = (0);
var state_33449__$1 = (function (){var statearr_33515 = state_33449;
(statearr_33515[(7)] = inst_33313);

(statearr_33515[(8)] = inst_33310);

(statearr_33515[(9)] = inst_33312);

(statearr_33515[(10)] = inst_33311);

(statearr_33515[(32)] = inst_33333);

return statearr_33515;
})();
var statearr_33516_33585 = state_33449__$1;
(statearr_33516_33585[(2)] = null);

(statearr_33516_33585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (45))){
var state_33449__$1 = state_33449;
var statearr_33517_33586 = state_33449__$1;
(statearr_33517_33586[(2)] = null);

(statearr_33517_33586[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (26))){
var inst_33367 = (state_33449[(23)]);
var inst_33366 = (state_33449[(24)]);
var inst_33371 = (state_33449[(25)]);
var inst_33369 = (state_33449[(26)]);
var inst_33363 = (state_33449[(19)]);
var inst_33386 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33388 = (function (){var all_files = inst_33363;
var res_SINGLEQUOTE_ = inst_33366;
var res = inst_33367;
var files_not_loaded = inst_33369;
var dependencies_that_loaded = inst_33371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33386,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33387){
var map__33518 = p__33387;
var map__33518__$1 = ((((!((map__33518 == null)))?((((map__33518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33518):map__33518);
var namespace = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33386,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33389 = cljs.core.map.call(null,inst_33388,inst_33367);
var inst_33390 = cljs.core.pr_str.call(null,inst_33389);
var inst_33391 = figwheel.client.utils.log.call(null,inst_33390);
var inst_33392 = (function (){var all_files = inst_33363;
var res_SINGLEQUOTE_ = inst_33366;
var res = inst_33367;
var files_not_loaded = inst_33369;
var dependencies_that_loaded = inst_33371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33386,inst_33388,inst_33389,inst_33390,inst_33391,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33367,inst_33366,inst_33371,inst_33369,inst_33363,inst_33386,inst_33388,inst_33389,inst_33390,inst_33391,state_val_33450,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33393 = setTimeout(inst_33392,(10));
var state_33449__$1 = (function (){var statearr_33520 = state_33449;
(statearr_33520[(33)] = inst_33386);

(statearr_33520[(34)] = inst_33391);

return statearr_33520;
})();
var statearr_33521_33587 = state_33449__$1;
(statearr_33521_33587[(2)] = inst_33393);

(statearr_33521_33587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (16))){
var state_33449__$1 = state_33449;
var statearr_33522_33588 = state_33449__$1;
(statearr_33522_33588[(2)] = reload_dependents);

(statearr_33522_33588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (38))){
var inst_33403 = (state_33449[(16)]);
var inst_33420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33403);
var state_33449__$1 = state_33449;
var statearr_33523_33589 = state_33449__$1;
(statearr_33523_33589[(2)] = inst_33420);

(statearr_33523_33589[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (30))){
var state_33449__$1 = state_33449;
var statearr_33524_33590 = state_33449__$1;
(statearr_33524_33590[(2)] = null);

(statearr_33524_33590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (10))){
var inst_33323 = (state_33449[(22)]);
var inst_33325 = cljs.core.chunked_seq_QMARK_.call(null,inst_33323);
var state_33449__$1 = state_33449;
if(inst_33325){
var statearr_33525_33591 = state_33449__$1;
(statearr_33525_33591[(1)] = (13));

} else {
var statearr_33526_33592 = state_33449__$1;
(statearr_33526_33592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (18))){
var inst_33357 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
if(cljs.core.truth_(inst_33357)){
var statearr_33527_33593 = state_33449__$1;
(statearr_33527_33593[(1)] = (19));

} else {
var statearr_33528_33594 = state_33449__$1;
(statearr_33528_33594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (42))){
var state_33449__$1 = state_33449;
var statearr_33529_33595 = state_33449__$1;
(statearr_33529_33595[(2)] = null);

(statearr_33529_33595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (37))){
var inst_33415 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
var statearr_33530_33596 = state_33449__$1;
(statearr_33530_33596[(2)] = inst_33415);

(statearr_33530_33596[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33450 === (8))){
var inst_33310 = (state_33449[(8)]);
var inst_33323 = (state_33449[(22)]);
var inst_33323__$1 = cljs.core.seq.call(null,inst_33310);
var state_33449__$1 = (function (){var statearr_33531 = state_33449;
(statearr_33531[(22)] = inst_33323__$1);

return statearr_33531;
})();
if(inst_33323__$1){
var statearr_33532_33597 = state_33449__$1;
(statearr_33532_33597[(1)] = (10));

} else {
var statearr_33533_33598 = state_33449__$1;
(statearr_33533_33598[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29559__auto__,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____0 = (function (){
var statearr_33537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33537[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__);

(statearr_33537[(1)] = (1));

return statearr_33537;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____1 = (function (state_33449){
while(true){
var ret_value__29561__auto__ = (function (){try{while(true){
var result__29562__auto__ = switch__29559__auto__.call(null,state_33449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29562__auto__;
}
break;
}
}catch (e33538){if((e33538 instanceof Object)){
var ex__29563__auto__ = e33538;
var statearr_33539_33599 = state_33449;
(statearr_33539_33599[(5)] = ex__29563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33600 = state_33449;
state_33449 = G__33600;
continue;
} else {
return ret_value__29561__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__ = function(state_33449){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____1.call(this,state_33449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29560__auto__;
})()
;})(switch__29559__auto__,c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29675__auto__ = (function (){var statearr_33540 = f__29674__auto__.call(null);
(statearr_33540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29673__auto__);

return statearr_33540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29675__auto__);
});})(c__29673__auto__,map__33295,map__33295__$1,opts,before_jsload,on_jsload,reload_dependents,map__33296,map__33296__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29673__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33603,link){
var map__33606 = p__33603;
var map__33606__$1 = ((((!((map__33606 == null)))?((((map__33606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33606):map__33606);
var file = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__33606,map__33606__$1,file){
return (function (p1__33601_SHARP_,p2__33602_SHARP_){
if(cljs.core._EQ_.call(null,p1__33601_SHARP_,p2__33602_SHARP_)){
return p1__33601_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__33606,map__33606__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33612){
var map__33613 = p__33612;
var map__33613__$1 = ((((!((map__33613 == null)))?((((map__33613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33613):map__33613);
var match_length = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33608_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33608_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33615 = [];
var len__27785__auto___33618 = arguments.length;
var i__27786__auto___33619 = (0);
while(true){
if((i__27786__auto___33619 < len__27785__auto___33618)){
args33615.push((arguments[i__27786__auto___33619]));

var G__33620 = (i__27786__auto___33619 + (1));
i__27786__auto___33619 = G__33620;
continue;
} else {
}
break;
}

var G__33617 = args33615.length;
switch (G__33617) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33615.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33622_SHARP_,p2__33623_SHARP_){
return cljs.core.assoc.call(null,p1__33622_SHARP_,cljs.core.get.call(null,p2__33623_SHARP_,key),p2__33623_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33624){
var map__33627 = p__33624;
var map__33627__$1 = ((((!((map__33627 == null)))?((((map__33627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627):map__33627);
var f_data = map__33627__$1;
var file = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33629,p__33630){
var map__33639 = p__33629;
var map__33639__$1 = ((((!((map__33639 == null)))?((((map__33639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33639):map__33639);
var opts = map__33639__$1;
var on_cssload = cljs.core.get.call(null,map__33639__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33640 = p__33630;
var map__33640__$1 = ((((!((map__33640 == null)))?((((map__33640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33640):map__33640);
var files_msg = map__33640__$1;
var files = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33643_33647 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33644_33648 = null;
var count__33645_33649 = (0);
var i__33646_33650 = (0);
while(true){
if((i__33646_33650 < count__33645_33649)){
var f_33651 = cljs.core._nth.call(null,chunk__33644_33648,i__33646_33650);
figwheel.client.file_reloading.reload_css_file.call(null,f_33651);

var G__33652 = seq__33643_33647;
var G__33653 = chunk__33644_33648;
var G__33654 = count__33645_33649;
var G__33655 = (i__33646_33650 + (1));
seq__33643_33647 = G__33652;
chunk__33644_33648 = G__33653;
count__33645_33649 = G__33654;
i__33646_33650 = G__33655;
continue;
} else {
var temp__6753__auto___33656 = cljs.core.seq.call(null,seq__33643_33647);
if(temp__6753__auto___33656){
var seq__33643_33657__$1 = temp__6753__auto___33656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33643_33657__$1)){
var c__27505__auto___33658 = cljs.core.chunk_first.call(null,seq__33643_33657__$1);
var G__33659 = cljs.core.chunk_rest.call(null,seq__33643_33657__$1);
var G__33660 = c__27505__auto___33658;
var G__33661 = cljs.core.count.call(null,c__27505__auto___33658);
var G__33662 = (0);
seq__33643_33647 = G__33659;
chunk__33644_33648 = G__33660;
count__33645_33649 = G__33661;
i__33646_33650 = G__33662;
continue;
} else {
var f_33663 = cljs.core.first.call(null,seq__33643_33657__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33663);

var G__33664 = cljs.core.next.call(null,seq__33643_33657__$1);
var G__33665 = null;
var G__33666 = (0);
var G__33667 = (0);
seq__33643_33647 = G__33664;
chunk__33644_33648 = G__33665;
count__33645_33649 = G__33666;
i__33646_33650 = G__33667;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33639,map__33639__$1,opts,on_cssload,map__33640,map__33640__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33639,map__33639__$1,opts,on_cssload,map__33640,map__33640__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496385392754