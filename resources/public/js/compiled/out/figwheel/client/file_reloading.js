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
var or__26594__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26594__auto__){
return or__26594__auto__;
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
var or__26594__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32251_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32251_SHARP_));
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
var seq__32256 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32257 = null;
var count__32258 = (0);
var i__32259 = (0);
while(true){
if((i__32259 < count__32258)){
var n = cljs.core._nth.call(null,chunk__32257,i__32259);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32260 = seq__32256;
var G__32261 = chunk__32257;
var G__32262 = count__32258;
var G__32263 = (i__32259 + (1));
seq__32256 = G__32260;
chunk__32257 = G__32261;
count__32258 = G__32262;
i__32259 = G__32263;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32256);
if(temp__6753__auto__){
var seq__32256__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32256__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__32256__$1);
var G__32264 = cljs.core.chunk_rest.call(null,seq__32256__$1);
var G__32265 = c__27497__auto__;
var G__32266 = cljs.core.count.call(null,c__27497__auto__);
var G__32267 = (0);
seq__32256 = G__32264;
chunk__32257 = G__32265;
count__32258 = G__32266;
i__32259 = G__32267;
continue;
} else {
var n = cljs.core.first.call(null,seq__32256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32268 = cljs.core.next.call(null,seq__32256__$1);
var G__32269 = null;
var G__32270 = (0);
var G__32271 = (0);
seq__32256 = G__32268;
chunk__32257 = G__32269;
count__32258 = G__32270;
i__32259 = G__32271;
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

var seq__32322_32333 = cljs.core.seq.call(null,deps);
var chunk__32323_32334 = null;
var count__32324_32335 = (0);
var i__32325_32336 = (0);
while(true){
if((i__32325_32336 < count__32324_32335)){
var dep_32337 = cljs.core._nth.call(null,chunk__32323_32334,i__32325_32336);
topo_sort_helper_STAR_.call(null,dep_32337,(depth + (1)),state);

var G__32338 = seq__32322_32333;
var G__32339 = chunk__32323_32334;
var G__32340 = count__32324_32335;
var G__32341 = (i__32325_32336 + (1));
seq__32322_32333 = G__32338;
chunk__32323_32334 = G__32339;
count__32324_32335 = G__32340;
i__32325_32336 = G__32341;
continue;
} else {
var temp__6753__auto___32342 = cljs.core.seq.call(null,seq__32322_32333);
if(temp__6753__auto___32342){
var seq__32322_32343__$1 = temp__6753__auto___32342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32322_32343__$1)){
var c__27497__auto___32344 = cljs.core.chunk_first.call(null,seq__32322_32343__$1);
var G__32345 = cljs.core.chunk_rest.call(null,seq__32322_32343__$1);
var G__32346 = c__27497__auto___32344;
var G__32347 = cljs.core.count.call(null,c__27497__auto___32344);
var G__32348 = (0);
seq__32322_32333 = G__32345;
chunk__32323_32334 = G__32346;
count__32324_32335 = G__32347;
i__32325_32336 = G__32348;
continue;
} else {
var dep_32349 = cljs.core.first.call(null,seq__32322_32343__$1);
topo_sort_helper_STAR_.call(null,dep_32349,(depth + (1)),state);

var G__32350 = cljs.core.next.call(null,seq__32322_32343__$1);
var G__32351 = null;
var G__32352 = (0);
var G__32353 = (0);
seq__32322_32333 = G__32350;
chunk__32323_32334 = G__32351;
count__32324_32335 = G__32352;
i__32325_32336 = G__32353;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32326){
var vec__32330 = p__32326;
var seq__32331 = cljs.core.seq.call(null,vec__32330);
var first__32332 = cljs.core.first.call(null,seq__32331);
var seq__32331__$1 = cljs.core.next.call(null,seq__32331);
var x = first__32332;
var xs = seq__32331__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32330,seq__32331,first__32332,seq__32331__$1,x,xs,get_deps__$1){
return (function (p1__32272_SHARP_){
return clojure.set.difference.call(null,p1__32272_SHARP_,x);
});})(vec__32330,seq__32331,first__32332,seq__32331__$1,x,xs,get_deps__$1))
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
var seq__32366 = cljs.core.seq.call(null,provides);
var chunk__32367 = null;
var count__32368 = (0);
var i__32369 = (0);
while(true){
if((i__32369 < count__32368)){
var prov = cljs.core._nth.call(null,chunk__32367,i__32369);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32370_32378 = cljs.core.seq.call(null,requires);
var chunk__32371_32379 = null;
var count__32372_32380 = (0);
var i__32373_32381 = (0);
while(true){
if((i__32373_32381 < count__32372_32380)){
var req_32382 = cljs.core._nth.call(null,chunk__32371_32379,i__32373_32381);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32382,prov);

var G__32383 = seq__32370_32378;
var G__32384 = chunk__32371_32379;
var G__32385 = count__32372_32380;
var G__32386 = (i__32373_32381 + (1));
seq__32370_32378 = G__32383;
chunk__32371_32379 = G__32384;
count__32372_32380 = G__32385;
i__32373_32381 = G__32386;
continue;
} else {
var temp__6753__auto___32387 = cljs.core.seq.call(null,seq__32370_32378);
if(temp__6753__auto___32387){
var seq__32370_32388__$1 = temp__6753__auto___32387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32370_32388__$1)){
var c__27497__auto___32389 = cljs.core.chunk_first.call(null,seq__32370_32388__$1);
var G__32390 = cljs.core.chunk_rest.call(null,seq__32370_32388__$1);
var G__32391 = c__27497__auto___32389;
var G__32392 = cljs.core.count.call(null,c__27497__auto___32389);
var G__32393 = (0);
seq__32370_32378 = G__32390;
chunk__32371_32379 = G__32391;
count__32372_32380 = G__32392;
i__32373_32381 = G__32393;
continue;
} else {
var req_32394 = cljs.core.first.call(null,seq__32370_32388__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32394,prov);

var G__32395 = cljs.core.next.call(null,seq__32370_32388__$1);
var G__32396 = null;
var G__32397 = (0);
var G__32398 = (0);
seq__32370_32378 = G__32395;
chunk__32371_32379 = G__32396;
count__32372_32380 = G__32397;
i__32373_32381 = G__32398;
continue;
}
} else {
}
}
break;
}

var G__32399 = seq__32366;
var G__32400 = chunk__32367;
var G__32401 = count__32368;
var G__32402 = (i__32369 + (1));
seq__32366 = G__32399;
chunk__32367 = G__32400;
count__32368 = G__32401;
i__32369 = G__32402;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32366);
if(temp__6753__auto__){
var seq__32366__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32366__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__32366__$1);
var G__32403 = cljs.core.chunk_rest.call(null,seq__32366__$1);
var G__32404 = c__27497__auto__;
var G__32405 = cljs.core.count.call(null,c__27497__auto__);
var G__32406 = (0);
seq__32366 = G__32403;
chunk__32367 = G__32404;
count__32368 = G__32405;
i__32369 = G__32406;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32366__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32374_32407 = cljs.core.seq.call(null,requires);
var chunk__32375_32408 = null;
var count__32376_32409 = (0);
var i__32377_32410 = (0);
while(true){
if((i__32377_32410 < count__32376_32409)){
var req_32411 = cljs.core._nth.call(null,chunk__32375_32408,i__32377_32410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32411,prov);

var G__32412 = seq__32374_32407;
var G__32413 = chunk__32375_32408;
var G__32414 = count__32376_32409;
var G__32415 = (i__32377_32410 + (1));
seq__32374_32407 = G__32412;
chunk__32375_32408 = G__32413;
count__32376_32409 = G__32414;
i__32377_32410 = G__32415;
continue;
} else {
var temp__6753__auto___32416__$1 = cljs.core.seq.call(null,seq__32374_32407);
if(temp__6753__auto___32416__$1){
var seq__32374_32417__$1 = temp__6753__auto___32416__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32374_32417__$1)){
var c__27497__auto___32418 = cljs.core.chunk_first.call(null,seq__32374_32417__$1);
var G__32419 = cljs.core.chunk_rest.call(null,seq__32374_32417__$1);
var G__32420 = c__27497__auto___32418;
var G__32421 = cljs.core.count.call(null,c__27497__auto___32418);
var G__32422 = (0);
seq__32374_32407 = G__32419;
chunk__32375_32408 = G__32420;
count__32376_32409 = G__32421;
i__32377_32410 = G__32422;
continue;
} else {
var req_32423 = cljs.core.first.call(null,seq__32374_32417__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32423,prov);

var G__32424 = cljs.core.next.call(null,seq__32374_32417__$1);
var G__32425 = null;
var G__32426 = (0);
var G__32427 = (0);
seq__32374_32407 = G__32424;
chunk__32375_32408 = G__32425;
count__32376_32409 = G__32426;
i__32377_32410 = G__32427;
continue;
}
} else {
}
}
break;
}

var G__32428 = cljs.core.next.call(null,seq__32366__$1);
var G__32429 = null;
var G__32430 = (0);
var G__32431 = (0);
seq__32366 = G__32428;
chunk__32367 = G__32429;
count__32368 = G__32430;
i__32369 = G__32431;
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
var seq__32436_32440 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32437_32441 = null;
var count__32438_32442 = (0);
var i__32439_32443 = (0);
while(true){
if((i__32439_32443 < count__32438_32442)){
var ns_32444 = cljs.core._nth.call(null,chunk__32437_32441,i__32439_32443);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32444);

var G__32445 = seq__32436_32440;
var G__32446 = chunk__32437_32441;
var G__32447 = count__32438_32442;
var G__32448 = (i__32439_32443 + (1));
seq__32436_32440 = G__32445;
chunk__32437_32441 = G__32446;
count__32438_32442 = G__32447;
i__32439_32443 = G__32448;
continue;
} else {
var temp__6753__auto___32449 = cljs.core.seq.call(null,seq__32436_32440);
if(temp__6753__auto___32449){
var seq__32436_32450__$1 = temp__6753__auto___32449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32436_32450__$1)){
var c__27497__auto___32451 = cljs.core.chunk_first.call(null,seq__32436_32450__$1);
var G__32452 = cljs.core.chunk_rest.call(null,seq__32436_32450__$1);
var G__32453 = c__27497__auto___32451;
var G__32454 = cljs.core.count.call(null,c__27497__auto___32451);
var G__32455 = (0);
seq__32436_32440 = G__32452;
chunk__32437_32441 = G__32453;
count__32438_32442 = G__32454;
i__32439_32443 = G__32455;
continue;
} else {
var ns_32456 = cljs.core.first.call(null,seq__32436_32450__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32456);

var G__32457 = cljs.core.next.call(null,seq__32436_32450__$1);
var G__32458 = null;
var G__32459 = (0);
var G__32460 = (0);
seq__32436_32440 = G__32457;
chunk__32437_32441 = G__32458;
count__32438_32442 = G__32459;
i__32439_32443 = G__32460;
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
goog.require_figwheel_backup_ = (function (){var or__26594__auto__ = goog.require__;
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
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
var G__32461__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32462__i = 0, G__32462__a = new Array(arguments.length -  0);
while (G__32462__i < G__32462__a.length) {G__32462__a[G__32462__i] = arguments[G__32462__i + 0]; ++G__32462__i;}
  args = new cljs.core.IndexedSeq(G__32462__a,0);
} 
return G__32461__delegate.call(this,args);};
G__32461.cljs$lang$maxFixedArity = 0;
G__32461.cljs$lang$applyTo = (function (arglist__32463){
var args = cljs.core.seq(arglist__32463);
return G__32461__delegate(args);
});
G__32461.cljs$core$IFn$_invoke$arity$variadic = G__32461__delegate;
return G__32461;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32465 = cljs.core._EQ_;
var expr__32466 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32465.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32466))){
var path_parts = ((function (pred__32465,expr__32466){
return (function (p1__32464_SHARP_){
return clojure.string.split.call(null,p1__32464_SHARP_,/[\/\\]/);
});})(pred__32465,expr__32466))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32465,expr__32466){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32468){if((e32468 instanceof Error)){
var e = e32468;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32468;

}
}})());
});
;})(path_parts,sep,root,pred__32465,expr__32466))
} else {
if(cljs.core.truth_(pred__32465.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32466))){
return ((function (pred__32465,expr__32466){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32465,expr__32466){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32465,expr__32466))
);

return deferred.addErrback(((function (deferred,pred__32465,expr__32466){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32465,expr__32466))
);
});
;})(pred__32465,expr__32466))
} else {
return ((function (pred__32465,expr__32466){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32465,expr__32466))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32469,callback){
var map__32472 = p__32469;
var map__32472__$1 = ((((!((map__32472 == null)))?((((map__32472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32472):map__32472);
var file_msg = map__32472__$1;
var request_url = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32472,map__32472__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32472,map__32472__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__){
return (function (state_32496){
var state_val_32497 = (state_32496[(1)]);
if((state_val_32497 === (7))){
var inst_32492 = (state_32496[(2)]);
var state_32496__$1 = state_32496;
var statearr_32498_32518 = state_32496__$1;
(statearr_32498_32518[(2)] = inst_32492);

(statearr_32498_32518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (1))){
var state_32496__$1 = state_32496;
var statearr_32499_32519 = state_32496__$1;
(statearr_32499_32519[(2)] = null);

(statearr_32499_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (4))){
var inst_32476 = (state_32496[(7)]);
var inst_32476__$1 = (state_32496[(2)]);
var state_32496__$1 = (function (){var statearr_32500 = state_32496;
(statearr_32500[(7)] = inst_32476__$1);

return statearr_32500;
})();
if(cljs.core.truth_(inst_32476__$1)){
var statearr_32501_32520 = state_32496__$1;
(statearr_32501_32520[(1)] = (5));

} else {
var statearr_32502_32521 = state_32496__$1;
(statearr_32502_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (6))){
var state_32496__$1 = state_32496;
var statearr_32503_32522 = state_32496__$1;
(statearr_32503_32522[(2)] = null);

(statearr_32503_32522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (3))){
var inst_32494 = (state_32496[(2)]);
var state_32496__$1 = state_32496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32496__$1,inst_32494);
} else {
if((state_val_32497 === (2))){
var state_32496__$1 = state_32496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32496__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32497 === (11))){
var inst_32488 = (state_32496[(2)]);
var state_32496__$1 = (function (){var statearr_32504 = state_32496;
(statearr_32504[(8)] = inst_32488);

return statearr_32504;
})();
var statearr_32505_32523 = state_32496__$1;
(statearr_32505_32523[(2)] = null);

(statearr_32505_32523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (9))){
var inst_32482 = (state_32496[(9)]);
var inst_32480 = (state_32496[(10)]);
var inst_32484 = inst_32482.call(null,inst_32480);
var state_32496__$1 = state_32496;
var statearr_32506_32524 = state_32496__$1;
(statearr_32506_32524[(2)] = inst_32484);

(statearr_32506_32524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (5))){
var inst_32476 = (state_32496[(7)]);
var inst_32478 = figwheel.client.file_reloading.blocking_load.call(null,inst_32476);
var state_32496__$1 = state_32496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32496__$1,(8),inst_32478);
} else {
if((state_val_32497 === (10))){
var inst_32480 = (state_32496[(10)]);
var inst_32486 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32480);
var state_32496__$1 = state_32496;
var statearr_32507_32525 = state_32496__$1;
(statearr_32507_32525[(2)] = inst_32486);

(statearr_32507_32525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32497 === (8))){
var inst_32482 = (state_32496[(9)]);
var inst_32476 = (state_32496[(7)]);
var inst_32480 = (state_32496[(2)]);
var inst_32481 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32482__$1 = cljs.core.get.call(null,inst_32481,inst_32476);
var state_32496__$1 = (function (){var statearr_32508 = state_32496;
(statearr_32508[(9)] = inst_32482__$1);

(statearr_32508[(10)] = inst_32480);

return statearr_32508;
})();
if(cljs.core.truth_(inst_32482__$1)){
var statearr_32509_32526 = state_32496__$1;
(statearr_32509_32526[(1)] = (9));

} else {
var statearr_32510_32527 = state_32496__$1;
(statearr_32510_32527[(1)] = (10));

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
});})(c__29260__auto__))
;
return ((function (switch__29146__auto__,c__29260__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29147__auto__ = null;
var figwheel$client$file_reloading$state_machine__29147__auto____0 = (function (){
var statearr_32514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32514[(0)] = figwheel$client$file_reloading$state_machine__29147__auto__);

(statearr_32514[(1)] = (1));

return statearr_32514;
});
var figwheel$client$file_reloading$state_machine__29147__auto____1 = (function (state_32496){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_32496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e32515){if((e32515 instanceof Object)){
var ex__29150__auto__ = e32515;
var statearr_32516_32528 = state_32496;
(statearr_32516_32528[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32529 = state_32496;
state_32496 = G__32529;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29147__auto__ = function(state_32496){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29147__auto____1.call(this,state_32496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29147__auto____0;
figwheel$client$file_reloading$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29147__auto____1;
return figwheel$client$file_reloading$state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__))
})();
var state__29262__auto__ = (function (){var statearr_32517 = f__29261__auto__.call(null);
(statearr_32517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_32517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__))
);

return c__29260__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32530,callback){
var map__32533 = p__32530;
var map__32533__$1 = ((((!((map__32533 == null)))?((((map__32533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32533):map__32533);
var file_msg = map__32533__$1;
var namespace = cljs.core.get.call(null,map__32533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32533,map__32533__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32533,map__32533__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32535){
var map__32538 = p__32535;
var map__32538__$1 = ((((!((map__32538 == null)))?((((map__32538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32538):map__32538);
var file_msg = map__32538__$1;
var namespace = cljs.core.get.call(null,map__32538__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26582__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26582__auto__){
var or__26594__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26594__auto__)){
return or__26594__auto__;
} else {
var or__26594__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26594__auto____$1)){
return or__26594__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26582__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32540,callback){
var map__32543 = p__32540;
var map__32543__$1 = ((((!((map__32543 == null)))?((((map__32543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32543):map__32543);
var file_msg = map__32543__$1;
var request_url = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29260__auto___32647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto___32647,out){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto___32647,out){
return (function (state_32629){
var state_val_32630 = (state_32629[(1)]);
if((state_val_32630 === (1))){
var inst_32603 = cljs.core.seq.call(null,files);
var inst_32604 = cljs.core.first.call(null,inst_32603);
var inst_32605 = cljs.core.next.call(null,inst_32603);
var inst_32606 = files;
var state_32629__$1 = (function (){var statearr_32631 = state_32629;
(statearr_32631[(7)] = inst_32604);

(statearr_32631[(8)] = inst_32605);

(statearr_32631[(9)] = inst_32606);

return statearr_32631;
})();
var statearr_32632_32648 = state_32629__$1;
(statearr_32632_32648[(2)] = null);

(statearr_32632_32648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (2))){
var inst_32612 = (state_32629[(10)]);
var inst_32606 = (state_32629[(9)]);
var inst_32611 = cljs.core.seq.call(null,inst_32606);
var inst_32612__$1 = cljs.core.first.call(null,inst_32611);
var inst_32613 = cljs.core.next.call(null,inst_32611);
var inst_32614 = (inst_32612__$1 == null);
var inst_32615 = cljs.core.not.call(null,inst_32614);
var state_32629__$1 = (function (){var statearr_32633 = state_32629;
(statearr_32633[(11)] = inst_32613);

(statearr_32633[(10)] = inst_32612__$1);

return statearr_32633;
})();
if(inst_32615){
var statearr_32634_32649 = state_32629__$1;
(statearr_32634_32649[(1)] = (4));

} else {
var statearr_32635_32650 = state_32629__$1;
(statearr_32635_32650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (3))){
var inst_32627 = (state_32629[(2)]);
var state_32629__$1 = state_32629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32629__$1,inst_32627);
} else {
if((state_val_32630 === (4))){
var inst_32612 = (state_32629[(10)]);
var inst_32617 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32612);
var state_32629__$1 = state_32629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32629__$1,(7),inst_32617);
} else {
if((state_val_32630 === (5))){
var inst_32623 = cljs.core.async.close_BANG_.call(null,out);
var state_32629__$1 = state_32629;
var statearr_32636_32651 = state_32629__$1;
(statearr_32636_32651[(2)] = inst_32623);

(statearr_32636_32651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (6))){
var inst_32625 = (state_32629[(2)]);
var state_32629__$1 = state_32629;
var statearr_32637_32652 = state_32629__$1;
(statearr_32637_32652[(2)] = inst_32625);

(statearr_32637_32652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (7))){
var inst_32613 = (state_32629[(11)]);
var inst_32619 = (state_32629[(2)]);
var inst_32620 = cljs.core.async.put_BANG_.call(null,out,inst_32619);
var inst_32606 = inst_32613;
var state_32629__$1 = (function (){var statearr_32638 = state_32629;
(statearr_32638[(12)] = inst_32620);

(statearr_32638[(9)] = inst_32606);

return statearr_32638;
})();
var statearr_32639_32653 = state_32629__$1;
(statearr_32639_32653[(2)] = null);

(statearr_32639_32653[(1)] = (2));


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
});})(c__29260__auto___32647,out))
;
return ((function (switch__29146__auto__,c__29260__auto___32647,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____0 = (function (){
var statearr_32643 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32643[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__);

(statearr_32643[(1)] = (1));

return statearr_32643;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____1 = (function (state_32629){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_32629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e32644){if((e32644 instanceof Object)){
var ex__29150__auto__ = e32644;
var statearr_32645_32654 = state_32629;
(statearr_32645_32654[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_32629;
state_32629 = G__32655;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__ = function(state_32629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____1.call(this,state_32629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto___32647,out))
})();
var state__29262__auto__ = (function (){var statearr_32646 = f__29261__auto__.call(null);
(statearr_32646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto___32647);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto___32647,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32656,opts){
var map__32660 = p__32656;
var map__32660__$1 = ((((!((map__32660 == null)))?((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32660):map__32660);
var eval_body__$1 = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26582__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26582__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26582__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32662){var e = e32662;
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
return (function (p1__32663_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32663_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32672){
var vec__32673 = p__32672;
var k = cljs.core.nth.call(null,vec__32673,(0),null);
var v = cljs.core.nth.call(null,vec__32673,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32676){
var vec__32677 = p__32676;
var k = cljs.core.nth.call(null,vec__32677,(0),null);
var v = cljs.core.nth.call(null,vec__32677,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32683,p__32684){
var map__32931 = p__32683;
var map__32931__$1 = ((((!((map__32931 == null)))?((((map__32931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32931):map__32931);
var opts = map__32931__$1;
var before_jsload = cljs.core.get.call(null,map__32931__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32931__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32931__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32932 = p__32684;
var map__32932__$1 = ((((!((map__32932 == null)))?((((map__32932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32932):map__32932);
var msg = map__32932__$1;
var files = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29261__auto__ = (function (){var switch__29146__auto__ = ((function (c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33085){
var state_val_33086 = (state_33085[(1)]);
if((state_val_33086 === (7))){
var inst_32947 = (state_33085[(7)]);
var inst_32948 = (state_33085[(8)]);
var inst_32949 = (state_33085[(9)]);
var inst_32946 = (state_33085[(10)]);
var inst_32954 = cljs.core._nth.call(null,inst_32947,inst_32949);
var inst_32955 = figwheel.client.file_reloading.eval_body.call(null,inst_32954,opts);
var inst_32956 = (inst_32949 + (1));
var tmp33087 = inst_32947;
var tmp33088 = inst_32948;
var tmp33089 = inst_32946;
var inst_32946__$1 = tmp33089;
var inst_32947__$1 = tmp33087;
var inst_32948__$1 = tmp33088;
var inst_32949__$1 = inst_32956;
var state_33085__$1 = (function (){var statearr_33090 = state_33085;
(statearr_33090[(7)] = inst_32947__$1);

(statearr_33090[(8)] = inst_32948__$1);

(statearr_33090[(9)] = inst_32949__$1);

(statearr_33090[(10)] = inst_32946__$1);

(statearr_33090[(11)] = inst_32955);

return statearr_33090;
})();
var statearr_33091_33177 = state_33085__$1;
(statearr_33091_33177[(2)] = null);

(statearr_33091_33177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (20))){
var inst_32989 = (state_33085[(12)]);
var inst_32997 = figwheel.client.file_reloading.sort_files.call(null,inst_32989);
var state_33085__$1 = state_33085;
var statearr_33092_33178 = state_33085__$1;
(statearr_33092_33178[(2)] = inst_32997);

(statearr_33092_33178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (27))){
var state_33085__$1 = state_33085;
var statearr_33093_33179 = state_33085__$1;
(statearr_33093_33179[(2)] = null);

(statearr_33093_33179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (1))){
var inst_32938 = (state_33085[(13)]);
var inst_32935 = before_jsload.call(null,files);
var inst_32936 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32937 = (function (){return ((function (inst_32938,inst_32935,inst_32936,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32680_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32680_SHARP_);
});
;})(inst_32938,inst_32935,inst_32936,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32938__$1 = cljs.core.filter.call(null,inst_32937,files);
var inst_32939 = cljs.core.not_empty.call(null,inst_32938__$1);
var state_33085__$1 = (function (){var statearr_33094 = state_33085;
(statearr_33094[(13)] = inst_32938__$1);

(statearr_33094[(14)] = inst_32935);

(statearr_33094[(15)] = inst_32936);

return statearr_33094;
})();
if(cljs.core.truth_(inst_32939)){
var statearr_33095_33180 = state_33085__$1;
(statearr_33095_33180[(1)] = (2));

} else {
var statearr_33096_33181 = state_33085__$1;
(statearr_33096_33181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (24))){
var state_33085__$1 = state_33085;
var statearr_33097_33182 = state_33085__$1;
(statearr_33097_33182[(2)] = null);

(statearr_33097_33182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (39))){
var inst_33039 = (state_33085[(16)]);
var state_33085__$1 = state_33085;
var statearr_33098_33183 = state_33085__$1;
(statearr_33098_33183[(2)] = inst_33039);

(statearr_33098_33183[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (46))){
var inst_33080 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33099_33184 = state_33085__$1;
(statearr_33099_33184[(2)] = inst_33080);

(statearr_33099_33184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (4))){
var inst_32983 = (state_33085[(2)]);
var inst_32984 = cljs.core.List.EMPTY;
var inst_32985 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32984);
var inst_32986 = (function (){return ((function (inst_32983,inst_32984,inst_32985,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32681_SHARP_){
var and__26582__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32681_SHARP_);
if(cljs.core.truth_(and__26582__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32681_SHARP_));
} else {
return and__26582__auto__;
}
});
;})(inst_32983,inst_32984,inst_32985,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32987 = cljs.core.filter.call(null,inst_32986,files);
var inst_32988 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32989 = cljs.core.concat.call(null,inst_32987,inst_32988);
var state_33085__$1 = (function (){var statearr_33100 = state_33085;
(statearr_33100[(12)] = inst_32989);

(statearr_33100[(17)] = inst_32985);

(statearr_33100[(18)] = inst_32983);

return statearr_33100;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33101_33185 = state_33085__$1;
(statearr_33101_33185[(1)] = (16));

} else {
var statearr_33102_33186 = state_33085__$1;
(statearr_33102_33186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (15))){
var inst_32973 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33103_33187 = state_33085__$1;
(statearr_33103_33187[(2)] = inst_32973);

(statearr_33103_33187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (21))){
var inst_32999 = (state_33085[(19)]);
var inst_32999__$1 = (state_33085[(2)]);
var inst_33000 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32999__$1);
var state_33085__$1 = (function (){var statearr_33104 = state_33085;
(statearr_33104[(19)] = inst_32999__$1);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33085__$1,(22),inst_33000);
} else {
if((state_val_33086 === (31))){
var inst_33083 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33085__$1,inst_33083);
} else {
if((state_val_33086 === (32))){
var inst_33039 = (state_33085[(16)]);
var inst_33044 = inst_33039.cljs$lang$protocol_mask$partition0$;
var inst_33045 = (inst_33044 & (64));
var inst_33046 = inst_33039.cljs$core$ISeq$;
var inst_33047 = (inst_33045) || (inst_33046);
var state_33085__$1 = state_33085;
if(cljs.core.truth_(inst_33047)){
var statearr_33105_33188 = state_33085__$1;
(statearr_33105_33188[(1)] = (35));

} else {
var statearr_33106_33189 = state_33085__$1;
(statearr_33106_33189[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (40))){
var inst_33060 = (state_33085[(20)]);
var inst_33059 = (state_33085[(2)]);
var inst_33060__$1 = cljs.core.get.call(null,inst_33059,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33061 = cljs.core.get.call(null,inst_33059,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33062 = cljs.core.not_empty.call(null,inst_33060__$1);
var state_33085__$1 = (function (){var statearr_33107 = state_33085;
(statearr_33107[(21)] = inst_33061);

(statearr_33107[(20)] = inst_33060__$1);

return statearr_33107;
})();
if(cljs.core.truth_(inst_33062)){
var statearr_33108_33190 = state_33085__$1;
(statearr_33108_33190[(1)] = (41));

} else {
var statearr_33109_33191 = state_33085__$1;
(statearr_33109_33191[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (33))){
var state_33085__$1 = state_33085;
var statearr_33110_33192 = state_33085__$1;
(statearr_33110_33192[(2)] = false);

(statearr_33110_33192[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (13))){
var inst_32959 = (state_33085[(22)]);
var inst_32963 = cljs.core.chunk_first.call(null,inst_32959);
var inst_32964 = cljs.core.chunk_rest.call(null,inst_32959);
var inst_32965 = cljs.core.count.call(null,inst_32963);
var inst_32946 = inst_32964;
var inst_32947 = inst_32963;
var inst_32948 = inst_32965;
var inst_32949 = (0);
var state_33085__$1 = (function (){var statearr_33111 = state_33085;
(statearr_33111[(7)] = inst_32947);

(statearr_33111[(8)] = inst_32948);

(statearr_33111[(9)] = inst_32949);

(statearr_33111[(10)] = inst_32946);

return statearr_33111;
})();
var statearr_33112_33193 = state_33085__$1;
(statearr_33112_33193[(2)] = null);

(statearr_33112_33193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (22))){
var inst_33003 = (state_33085[(23)]);
var inst_33002 = (state_33085[(24)]);
var inst_32999 = (state_33085[(19)]);
var inst_33007 = (state_33085[(25)]);
var inst_33002__$1 = (state_33085[(2)]);
var inst_33003__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33002__$1);
var inst_33004 = (function (){var all_files = inst_32999;
var res_SINGLEQUOTE_ = inst_33002__$1;
var res = inst_33003__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33003,inst_33002,inst_32999,inst_33007,inst_33002__$1,inst_33003__$1,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32682_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32682_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33003,inst_33002,inst_32999,inst_33007,inst_33002__$1,inst_33003__$1,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33005 = cljs.core.filter.call(null,inst_33004,inst_33002__$1);
var inst_33006 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33007__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33006);
var inst_33008 = cljs.core.not_empty.call(null,inst_33007__$1);
var state_33085__$1 = (function (){var statearr_33113 = state_33085;
(statearr_33113[(23)] = inst_33003__$1);

(statearr_33113[(24)] = inst_33002__$1);

(statearr_33113[(26)] = inst_33005);

(statearr_33113[(25)] = inst_33007__$1);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33008)){
var statearr_33114_33194 = state_33085__$1;
(statearr_33114_33194[(1)] = (23));

} else {
var statearr_33115_33195 = state_33085__$1;
(statearr_33115_33195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (36))){
var state_33085__$1 = state_33085;
var statearr_33116_33196 = state_33085__$1;
(statearr_33116_33196[(2)] = false);

(statearr_33116_33196[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (41))){
var inst_33060 = (state_33085[(20)]);
var inst_33064 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33065 = cljs.core.map.call(null,inst_33064,inst_33060);
var inst_33066 = cljs.core.pr_str.call(null,inst_33065);
var inst_33067 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33066)].join('');
var inst_33068 = figwheel.client.utils.log.call(null,inst_33067);
var state_33085__$1 = state_33085;
var statearr_33117_33197 = state_33085__$1;
(statearr_33117_33197[(2)] = inst_33068);

(statearr_33117_33197[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (43))){
var inst_33061 = (state_33085[(21)]);
var inst_33071 = (state_33085[(2)]);
var inst_33072 = cljs.core.not_empty.call(null,inst_33061);
var state_33085__$1 = (function (){var statearr_33118 = state_33085;
(statearr_33118[(27)] = inst_33071);

return statearr_33118;
})();
if(cljs.core.truth_(inst_33072)){
var statearr_33119_33198 = state_33085__$1;
(statearr_33119_33198[(1)] = (44));

} else {
var statearr_33120_33199 = state_33085__$1;
(statearr_33120_33199[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (29))){
var inst_33003 = (state_33085[(23)]);
var inst_33039 = (state_33085[(16)]);
var inst_33002 = (state_33085[(24)]);
var inst_33005 = (state_33085[(26)]);
var inst_32999 = (state_33085[(19)]);
var inst_33007 = (state_33085[(25)]);
var inst_33035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33038 = (function (){var all_files = inst_32999;
var res_SINGLEQUOTE_ = inst_33002;
var res = inst_33003;
var files_not_loaded = inst_33005;
var dependencies_that_loaded = inst_33007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33039,inst_33002,inst_33005,inst_32999,inst_33007,inst_33035,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33037){
var map__33121 = p__33037;
var map__33121__$1 = ((((!((map__33121 == null)))?((((map__33121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33121):map__33121);
var namespace = cljs.core.get.call(null,map__33121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33039,inst_33002,inst_33005,inst_32999,inst_33007,inst_33035,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33039__$1 = cljs.core.group_by.call(null,inst_33038,inst_33005);
var inst_33041 = (inst_33039__$1 == null);
var inst_33042 = cljs.core.not.call(null,inst_33041);
var state_33085__$1 = (function (){var statearr_33123 = state_33085;
(statearr_33123[(28)] = inst_33035);

(statearr_33123[(16)] = inst_33039__$1);

return statearr_33123;
})();
if(inst_33042){
var statearr_33124_33200 = state_33085__$1;
(statearr_33124_33200[(1)] = (32));

} else {
var statearr_33125_33201 = state_33085__$1;
(statearr_33125_33201[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (44))){
var inst_33061 = (state_33085[(21)]);
var inst_33074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33061);
var inst_33075 = cljs.core.pr_str.call(null,inst_33074);
var inst_33076 = [cljs.core.str("not required: "),cljs.core.str(inst_33075)].join('');
var inst_33077 = figwheel.client.utils.log.call(null,inst_33076);
var state_33085__$1 = state_33085;
var statearr_33126_33202 = state_33085__$1;
(statearr_33126_33202[(2)] = inst_33077);

(statearr_33126_33202[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (6))){
var inst_32980 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33127_33203 = state_33085__$1;
(statearr_33127_33203[(2)] = inst_32980);

(statearr_33127_33203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (28))){
var inst_33005 = (state_33085[(26)]);
var inst_33032 = (state_33085[(2)]);
var inst_33033 = cljs.core.not_empty.call(null,inst_33005);
var state_33085__$1 = (function (){var statearr_33128 = state_33085;
(statearr_33128[(29)] = inst_33032);

return statearr_33128;
})();
if(cljs.core.truth_(inst_33033)){
var statearr_33129_33204 = state_33085__$1;
(statearr_33129_33204[(1)] = (29));

} else {
var statearr_33130_33205 = state_33085__$1;
(statearr_33130_33205[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (25))){
var inst_33003 = (state_33085[(23)]);
var inst_33019 = (state_33085[(2)]);
var inst_33020 = cljs.core.not_empty.call(null,inst_33003);
var state_33085__$1 = (function (){var statearr_33131 = state_33085;
(statearr_33131[(30)] = inst_33019);

return statearr_33131;
})();
if(cljs.core.truth_(inst_33020)){
var statearr_33132_33206 = state_33085__$1;
(statearr_33132_33206[(1)] = (26));

} else {
var statearr_33133_33207 = state_33085__$1;
(statearr_33133_33207[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (34))){
var inst_33054 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
if(cljs.core.truth_(inst_33054)){
var statearr_33134_33208 = state_33085__$1;
(statearr_33134_33208[(1)] = (38));

} else {
var statearr_33135_33209 = state_33085__$1;
(statearr_33135_33209[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (17))){
var state_33085__$1 = state_33085;
var statearr_33136_33210 = state_33085__$1;
(statearr_33136_33210[(2)] = recompile_dependents);

(statearr_33136_33210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (3))){
var state_33085__$1 = state_33085;
var statearr_33137_33211 = state_33085__$1;
(statearr_33137_33211[(2)] = null);

(statearr_33137_33211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (12))){
var inst_32976 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33138_33212 = state_33085__$1;
(statearr_33138_33212[(2)] = inst_32976);

(statearr_33138_33212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (2))){
var inst_32938 = (state_33085[(13)]);
var inst_32945 = cljs.core.seq.call(null,inst_32938);
var inst_32946 = inst_32945;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33085__$1 = (function (){var statearr_33139 = state_33085;
(statearr_33139[(7)] = inst_32947);

(statearr_33139[(8)] = inst_32948);

(statearr_33139[(9)] = inst_32949);

(statearr_33139[(10)] = inst_32946);

return statearr_33139;
})();
var statearr_33140_33213 = state_33085__$1;
(statearr_33140_33213[(2)] = null);

(statearr_33140_33213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (23))){
var inst_33003 = (state_33085[(23)]);
var inst_33002 = (state_33085[(24)]);
var inst_33005 = (state_33085[(26)]);
var inst_32999 = (state_33085[(19)]);
var inst_33007 = (state_33085[(25)]);
var inst_33010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33012 = (function (){var all_files = inst_32999;
var res_SINGLEQUOTE_ = inst_33002;
var res = inst_33003;
var files_not_loaded = inst_33005;
var dependencies_that_loaded = inst_33007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33010,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33011){
var map__33141 = p__33011;
var map__33141__$1 = ((((!((map__33141 == null)))?((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var request_url = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33010,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33013 = cljs.core.reverse.call(null,inst_33007);
var inst_33014 = cljs.core.map.call(null,inst_33012,inst_33013);
var inst_33015 = cljs.core.pr_str.call(null,inst_33014);
var inst_33016 = figwheel.client.utils.log.call(null,inst_33015);
var state_33085__$1 = (function (){var statearr_33143 = state_33085;
(statearr_33143[(31)] = inst_33010);

return statearr_33143;
})();
var statearr_33144_33214 = state_33085__$1;
(statearr_33144_33214[(2)] = inst_33016);

(statearr_33144_33214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (35))){
var state_33085__$1 = state_33085;
var statearr_33145_33215 = state_33085__$1;
(statearr_33145_33215[(2)] = true);

(statearr_33145_33215[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (19))){
var inst_32989 = (state_33085[(12)]);
var inst_32995 = figwheel.client.file_reloading.expand_files.call(null,inst_32989);
var state_33085__$1 = state_33085;
var statearr_33146_33216 = state_33085__$1;
(statearr_33146_33216[(2)] = inst_32995);

(statearr_33146_33216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (11))){
var state_33085__$1 = state_33085;
var statearr_33147_33217 = state_33085__$1;
(statearr_33147_33217[(2)] = null);

(statearr_33147_33217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (9))){
var inst_32978 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33148_33218 = state_33085__$1;
(statearr_33148_33218[(2)] = inst_32978);

(statearr_33148_33218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (5))){
var inst_32948 = (state_33085[(8)]);
var inst_32949 = (state_33085[(9)]);
var inst_32951 = (inst_32949 < inst_32948);
var inst_32952 = inst_32951;
var state_33085__$1 = state_33085;
if(cljs.core.truth_(inst_32952)){
var statearr_33149_33219 = state_33085__$1;
(statearr_33149_33219[(1)] = (7));

} else {
var statearr_33150_33220 = state_33085__$1;
(statearr_33150_33220[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (14))){
var inst_32959 = (state_33085[(22)]);
var inst_32968 = cljs.core.first.call(null,inst_32959);
var inst_32969 = figwheel.client.file_reloading.eval_body.call(null,inst_32968,opts);
var inst_32970 = cljs.core.next.call(null,inst_32959);
var inst_32946 = inst_32970;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33085__$1 = (function (){var statearr_33151 = state_33085;
(statearr_33151[(32)] = inst_32969);

(statearr_33151[(7)] = inst_32947);

(statearr_33151[(8)] = inst_32948);

(statearr_33151[(9)] = inst_32949);

(statearr_33151[(10)] = inst_32946);

return statearr_33151;
})();
var statearr_33152_33221 = state_33085__$1;
(statearr_33152_33221[(2)] = null);

(statearr_33152_33221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (45))){
var state_33085__$1 = state_33085;
var statearr_33153_33222 = state_33085__$1;
(statearr_33153_33222[(2)] = null);

(statearr_33153_33222[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (26))){
var inst_33003 = (state_33085[(23)]);
var inst_33002 = (state_33085[(24)]);
var inst_33005 = (state_33085[(26)]);
var inst_32999 = (state_33085[(19)]);
var inst_33007 = (state_33085[(25)]);
var inst_33022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33024 = (function (){var all_files = inst_32999;
var res_SINGLEQUOTE_ = inst_33002;
var res = inst_33003;
var files_not_loaded = inst_33005;
var dependencies_that_loaded = inst_33007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33022,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33023){
var map__33154 = p__33023;
var map__33154__$1 = ((((!((map__33154 == null)))?((((map__33154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33154):map__33154);
var namespace = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33022,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33025 = cljs.core.map.call(null,inst_33024,inst_33003);
var inst_33026 = cljs.core.pr_str.call(null,inst_33025);
var inst_33027 = figwheel.client.utils.log.call(null,inst_33026);
var inst_33028 = (function (){var all_files = inst_32999;
var res_SINGLEQUOTE_ = inst_33002;
var res = inst_33003;
var files_not_loaded = inst_33005;
var dependencies_that_loaded = inst_33007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33022,inst_33024,inst_33025,inst_33026,inst_33027,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33003,inst_33002,inst_33005,inst_32999,inst_33007,inst_33022,inst_33024,inst_33025,inst_33026,inst_33027,state_val_33086,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33029 = setTimeout(inst_33028,(10));
var state_33085__$1 = (function (){var statearr_33156 = state_33085;
(statearr_33156[(33)] = inst_33022);

(statearr_33156[(34)] = inst_33027);

return statearr_33156;
})();
var statearr_33157_33223 = state_33085__$1;
(statearr_33157_33223[(2)] = inst_33029);

(statearr_33157_33223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (16))){
var state_33085__$1 = state_33085;
var statearr_33158_33224 = state_33085__$1;
(statearr_33158_33224[(2)] = reload_dependents);

(statearr_33158_33224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (38))){
var inst_33039 = (state_33085[(16)]);
var inst_33056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33039);
var state_33085__$1 = state_33085;
var statearr_33159_33225 = state_33085__$1;
(statearr_33159_33225[(2)] = inst_33056);

(statearr_33159_33225[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (30))){
var state_33085__$1 = state_33085;
var statearr_33160_33226 = state_33085__$1;
(statearr_33160_33226[(2)] = null);

(statearr_33160_33226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (10))){
var inst_32959 = (state_33085[(22)]);
var inst_32961 = cljs.core.chunked_seq_QMARK_.call(null,inst_32959);
var state_33085__$1 = state_33085;
if(inst_32961){
var statearr_33161_33227 = state_33085__$1;
(statearr_33161_33227[(1)] = (13));

} else {
var statearr_33162_33228 = state_33085__$1;
(statearr_33162_33228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (18))){
var inst_32993 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
if(cljs.core.truth_(inst_32993)){
var statearr_33163_33229 = state_33085__$1;
(statearr_33163_33229[(1)] = (19));

} else {
var statearr_33164_33230 = state_33085__$1;
(statearr_33164_33230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (42))){
var state_33085__$1 = state_33085;
var statearr_33165_33231 = state_33085__$1;
(statearr_33165_33231[(2)] = null);

(statearr_33165_33231[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (37))){
var inst_33051 = (state_33085[(2)]);
var state_33085__$1 = state_33085;
var statearr_33166_33232 = state_33085__$1;
(statearr_33166_33232[(2)] = inst_33051);

(statearr_33166_33232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33086 === (8))){
var inst_32959 = (state_33085[(22)]);
var inst_32946 = (state_33085[(10)]);
var inst_32959__$1 = cljs.core.seq.call(null,inst_32946);
var state_33085__$1 = (function (){var statearr_33167 = state_33085;
(statearr_33167[(22)] = inst_32959__$1);

return statearr_33167;
})();
if(inst_32959__$1){
var statearr_33168_33233 = state_33085__$1;
(statearr_33168_33233[(1)] = (10));

} else {
var statearr_33169_33234 = state_33085__$1;
(statearr_33169_33234[(1)] = (11));

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
});})(c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29146__auto__,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____0 = (function (){
var statearr_33173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33173[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__);

(statearr_33173[(1)] = (1));

return statearr_33173;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____1 = (function (state_33085){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29149__auto__ = switch__29146__auto__.call(null,state_33085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29149__auto__;
}
break;
}
}catch (e33174){if((e33174 instanceof Object)){
var ex__29150__auto__ = e33174;
var statearr_33175_33235 = state_33085;
(statearr_33175_33235[(5)] = ex__29150__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_33085;
state_33085 = G__33236;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__ = function(state_33085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____1.call(this,state_33085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29147__auto__;
})()
;})(switch__29146__auto__,c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29262__auto__ = (function (){var statearr_33176 = f__29261__auto__.call(null);
(statearr_33176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29260__auto__);

return statearr_33176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29262__auto__);
});})(c__29260__auto__,map__32931,map__32931__$1,opts,before_jsload,on_jsload,reload_dependents,map__32932,map__32932__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29260__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33239,link){
var map__33242 = p__33239;
var map__33242__$1 = ((((!((map__33242 == null)))?((((map__33242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33242):map__33242);
var file = cljs.core.get.call(null,map__33242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__33242,map__33242__$1,file){
return (function (p1__33237_SHARP_,p2__33238_SHARP_){
if(cljs.core._EQ_.call(null,p1__33237_SHARP_,p2__33238_SHARP_)){
return p1__33237_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__33242,map__33242__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33248){
var map__33249 = p__33248;
var map__33249__$1 = ((((!((map__33249 == null)))?((((map__33249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33249):map__33249);
var match_length = cljs.core.get.call(null,map__33249__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33249__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33244_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33244_SHARP_);
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
var args33251 = [];
var len__27777__auto___33254 = arguments.length;
var i__27778__auto___33255 = (0);
while(true){
if((i__27778__auto___33255 < len__27777__auto___33254)){
args33251.push((arguments[i__27778__auto___33255]));

var G__33256 = (i__27778__auto___33255 + (1));
i__27778__auto___33255 = G__33256;
continue;
} else {
}
break;
}

var G__33253 = args33251.length;
switch (G__33253) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33251.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33258_SHARP_,p2__33259_SHARP_){
return cljs.core.assoc.call(null,p1__33258_SHARP_,cljs.core.get.call(null,p2__33259_SHARP_,key),p2__33259_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33260){
var map__33263 = p__33260;
var map__33263__$1 = ((((!((map__33263 == null)))?((((map__33263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33263):map__33263);
var f_data = map__33263__$1;
var file = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33265,p__33266){
var map__33275 = p__33265;
var map__33275__$1 = ((((!((map__33275 == null)))?((((map__33275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33275):map__33275);
var opts = map__33275__$1;
var on_cssload = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33276 = p__33266;
var map__33276__$1 = ((((!((map__33276 == null)))?((((map__33276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33276):map__33276);
var files_msg = map__33276__$1;
var files = cljs.core.get.call(null,map__33276__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33279_33283 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33280_33284 = null;
var count__33281_33285 = (0);
var i__33282_33286 = (0);
while(true){
if((i__33282_33286 < count__33281_33285)){
var f_33287 = cljs.core._nth.call(null,chunk__33280_33284,i__33282_33286);
figwheel.client.file_reloading.reload_css_file.call(null,f_33287);

var G__33288 = seq__33279_33283;
var G__33289 = chunk__33280_33284;
var G__33290 = count__33281_33285;
var G__33291 = (i__33282_33286 + (1));
seq__33279_33283 = G__33288;
chunk__33280_33284 = G__33289;
count__33281_33285 = G__33290;
i__33282_33286 = G__33291;
continue;
} else {
var temp__6753__auto___33292 = cljs.core.seq.call(null,seq__33279_33283);
if(temp__6753__auto___33292){
var seq__33279_33293__$1 = temp__6753__auto___33292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33279_33293__$1)){
var c__27497__auto___33294 = cljs.core.chunk_first.call(null,seq__33279_33293__$1);
var G__33295 = cljs.core.chunk_rest.call(null,seq__33279_33293__$1);
var G__33296 = c__27497__auto___33294;
var G__33297 = cljs.core.count.call(null,c__27497__auto___33294);
var G__33298 = (0);
seq__33279_33283 = G__33295;
chunk__33280_33284 = G__33296;
count__33281_33285 = G__33297;
i__33282_33286 = G__33298;
continue;
} else {
var f_33299 = cljs.core.first.call(null,seq__33279_33293__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33299);

var G__33300 = cljs.core.next.call(null,seq__33279_33293__$1);
var G__33301 = null;
var G__33302 = (0);
var G__33303 = (0);
seq__33279_33283 = G__33300;
chunk__33280_33284 = G__33301;
count__33281_33285 = G__33302;
i__33282_33286 = G__33303;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33275,map__33275__$1,opts,on_cssload,map__33276,map__33276__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33275,map__33275__$1,opts,on_cssload,map__33276,map__33276__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496990000603