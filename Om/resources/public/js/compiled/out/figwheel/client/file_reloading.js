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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32253_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32253_SHARP_));
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
var seq__32258 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32259 = null;
var count__32260 = (0);
var i__32261 = (0);
while(true){
if((i__32261 < count__32260)){
var n = cljs.core._nth.call(null,chunk__32259,i__32261);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32262 = seq__32258;
var G__32263 = chunk__32259;
var G__32264 = count__32260;
var G__32265 = (i__32261 + (1));
seq__32258 = G__32262;
chunk__32259 = G__32263;
count__32260 = G__32264;
i__32261 = G__32265;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32258);
if(temp__6753__auto__){
var seq__32258__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32258__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__32258__$1);
var G__32266 = cljs.core.chunk_rest.call(null,seq__32258__$1);
var G__32267 = c__27505__auto__;
var G__32268 = cljs.core.count.call(null,c__27505__auto__);
var G__32269 = (0);
seq__32258 = G__32266;
chunk__32259 = G__32267;
count__32260 = G__32268;
i__32261 = G__32269;
continue;
} else {
var n = cljs.core.first.call(null,seq__32258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32270 = cljs.core.next.call(null,seq__32258__$1);
var G__32271 = null;
var G__32272 = (0);
var G__32273 = (0);
seq__32258 = G__32270;
chunk__32259 = G__32271;
count__32260 = G__32272;
i__32261 = G__32273;
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

var seq__32324_32335 = cljs.core.seq.call(null,deps);
var chunk__32325_32336 = null;
var count__32326_32337 = (0);
var i__32327_32338 = (0);
while(true){
if((i__32327_32338 < count__32326_32337)){
var dep_32339 = cljs.core._nth.call(null,chunk__32325_32336,i__32327_32338);
topo_sort_helper_STAR_.call(null,dep_32339,(depth + (1)),state);

var G__32340 = seq__32324_32335;
var G__32341 = chunk__32325_32336;
var G__32342 = count__32326_32337;
var G__32343 = (i__32327_32338 + (1));
seq__32324_32335 = G__32340;
chunk__32325_32336 = G__32341;
count__32326_32337 = G__32342;
i__32327_32338 = G__32343;
continue;
} else {
var temp__6753__auto___32344 = cljs.core.seq.call(null,seq__32324_32335);
if(temp__6753__auto___32344){
var seq__32324_32345__$1 = temp__6753__auto___32344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32324_32345__$1)){
var c__27505__auto___32346 = cljs.core.chunk_first.call(null,seq__32324_32345__$1);
var G__32347 = cljs.core.chunk_rest.call(null,seq__32324_32345__$1);
var G__32348 = c__27505__auto___32346;
var G__32349 = cljs.core.count.call(null,c__27505__auto___32346);
var G__32350 = (0);
seq__32324_32335 = G__32347;
chunk__32325_32336 = G__32348;
count__32326_32337 = G__32349;
i__32327_32338 = G__32350;
continue;
} else {
var dep_32351 = cljs.core.first.call(null,seq__32324_32345__$1);
topo_sort_helper_STAR_.call(null,dep_32351,(depth + (1)),state);

var G__32352 = cljs.core.next.call(null,seq__32324_32345__$1);
var G__32353 = null;
var G__32354 = (0);
var G__32355 = (0);
seq__32324_32335 = G__32352;
chunk__32325_32336 = G__32353;
count__32326_32337 = G__32354;
i__32327_32338 = G__32355;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32328){
var vec__32332 = p__32328;
var seq__32333 = cljs.core.seq.call(null,vec__32332);
var first__32334 = cljs.core.first.call(null,seq__32333);
var seq__32333__$1 = cljs.core.next.call(null,seq__32333);
var x = first__32334;
var xs = seq__32333__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32332,seq__32333,first__32334,seq__32333__$1,x,xs,get_deps__$1){
return (function (p1__32274_SHARP_){
return clojure.set.difference.call(null,p1__32274_SHARP_,x);
});})(vec__32332,seq__32333,first__32334,seq__32333__$1,x,xs,get_deps__$1))
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
var seq__32368 = cljs.core.seq.call(null,provides);
var chunk__32369 = null;
var count__32370 = (0);
var i__32371 = (0);
while(true){
if((i__32371 < count__32370)){
var prov = cljs.core._nth.call(null,chunk__32369,i__32371);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32372_32380 = cljs.core.seq.call(null,requires);
var chunk__32373_32381 = null;
var count__32374_32382 = (0);
var i__32375_32383 = (0);
while(true){
if((i__32375_32383 < count__32374_32382)){
var req_32384 = cljs.core._nth.call(null,chunk__32373_32381,i__32375_32383);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32384,prov);

var G__32385 = seq__32372_32380;
var G__32386 = chunk__32373_32381;
var G__32387 = count__32374_32382;
var G__32388 = (i__32375_32383 + (1));
seq__32372_32380 = G__32385;
chunk__32373_32381 = G__32386;
count__32374_32382 = G__32387;
i__32375_32383 = G__32388;
continue;
} else {
var temp__6753__auto___32389 = cljs.core.seq.call(null,seq__32372_32380);
if(temp__6753__auto___32389){
var seq__32372_32390__$1 = temp__6753__auto___32389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32372_32390__$1)){
var c__27505__auto___32391 = cljs.core.chunk_first.call(null,seq__32372_32390__$1);
var G__32392 = cljs.core.chunk_rest.call(null,seq__32372_32390__$1);
var G__32393 = c__27505__auto___32391;
var G__32394 = cljs.core.count.call(null,c__27505__auto___32391);
var G__32395 = (0);
seq__32372_32380 = G__32392;
chunk__32373_32381 = G__32393;
count__32374_32382 = G__32394;
i__32375_32383 = G__32395;
continue;
} else {
var req_32396 = cljs.core.first.call(null,seq__32372_32390__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32396,prov);

var G__32397 = cljs.core.next.call(null,seq__32372_32390__$1);
var G__32398 = null;
var G__32399 = (0);
var G__32400 = (0);
seq__32372_32380 = G__32397;
chunk__32373_32381 = G__32398;
count__32374_32382 = G__32399;
i__32375_32383 = G__32400;
continue;
}
} else {
}
}
break;
}

var G__32401 = seq__32368;
var G__32402 = chunk__32369;
var G__32403 = count__32370;
var G__32404 = (i__32371 + (1));
seq__32368 = G__32401;
chunk__32369 = G__32402;
count__32370 = G__32403;
i__32371 = G__32404;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32368);
if(temp__6753__auto__){
var seq__32368__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32368__$1)){
var c__27505__auto__ = cljs.core.chunk_first.call(null,seq__32368__$1);
var G__32405 = cljs.core.chunk_rest.call(null,seq__32368__$1);
var G__32406 = c__27505__auto__;
var G__32407 = cljs.core.count.call(null,c__27505__auto__);
var G__32408 = (0);
seq__32368 = G__32405;
chunk__32369 = G__32406;
count__32370 = G__32407;
i__32371 = G__32408;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32368__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32376_32409 = cljs.core.seq.call(null,requires);
var chunk__32377_32410 = null;
var count__32378_32411 = (0);
var i__32379_32412 = (0);
while(true){
if((i__32379_32412 < count__32378_32411)){
var req_32413 = cljs.core._nth.call(null,chunk__32377_32410,i__32379_32412);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32413,prov);

var G__32414 = seq__32376_32409;
var G__32415 = chunk__32377_32410;
var G__32416 = count__32378_32411;
var G__32417 = (i__32379_32412 + (1));
seq__32376_32409 = G__32414;
chunk__32377_32410 = G__32415;
count__32378_32411 = G__32416;
i__32379_32412 = G__32417;
continue;
} else {
var temp__6753__auto___32418__$1 = cljs.core.seq.call(null,seq__32376_32409);
if(temp__6753__auto___32418__$1){
var seq__32376_32419__$1 = temp__6753__auto___32418__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32376_32419__$1)){
var c__27505__auto___32420 = cljs.core.chunk_first.call(null,seq__32376_32419__$1);
var G__32421 = cljs.core.chunk_rest.call(null,seq__32376_32419__$1);
var G__32422 = c__27505__auto___32420;
var G__32423 = cljs.core.count.call(null,c__27505__auto___32420);
var G__32424 = (0);
seq__32376_32409 = G__32421;
chunk__32377_32410 = G__32422;
count__32378_32411 = G__32423;
i__32379_32412 = G__32424;
continue;
} else {
var req_32425 = cljs.core.first.call(null,seq__32376_32419__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32425,prov);

var G__32426 = cljs.core.next.call(null,seq__32376_32419__$1);
var G__32427 = null;
var G__32428 = (0);
var G__32429 = (0);
seq__32376_32409 = G__32426;
chunk__32377_32410 = G__32427;
count__32378_32411 = G__32428;
i__32379_32412 = G__32429;
continue;
}
} else {
}
}
break;
}

var G__32430 = cljs.core.next.call(null,seq__32368__$1);
var G__32431 = null;
var G__32432 = (0);
var G__32433 = (0);
seq__32368 = G__32430;
chunk__32369 = G__32431;
count__32370 = G__32432;
i__32371 = G__32433;
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
var seq__32438_32442 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32439_32443 = null;
var count__32440_32444 = (0);
var i__32441_32445 = (0);
while(true){
if((i__32441_32445 < count__32440_32444)){
var ns_32446 = cljs.core._nth.call(null,chunk__32439_32443,i__32441_32445);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32446);

var G__32447 = seq__32438_32442;
var G__32448 = chunk__32439_32443;
var G__32449 = count__32440_32444;
var G__32450 = (i__32441_32445 + (1));
seq__32438_32442 = G__32447;
chunk__32439_32443 = G__32448;
count__32440_32444 = G__32449;
i__32441_32445 = G__32450;
continue;
} else {
var temp__6753__auto___32451 = cljs.core.seq.call(null,seq__32438_32442);
if(temp__6753__auto___32451){
var seq__32438_32452__$1 = temp__6753__auto___32451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32438_32452__$1)){
var c__27505__auto___32453 = cljs.core.chunk_first.call(null,seq__32438_32452__$1);
var G__32454 = cljs.core.chunk_rest.call(null,seq__32438_32452__$1);
var G__32455 = c__27505__auto___32453;
var G__32456 = cljs.core.count.call(null,c__27505__auto___32453);
var G__32457 = (0);
seq__32438_32442 = G__32454;
chunk__32439_32443 = G__32455;
count__32440_32444 = G__32456;
i__32441_32445 = G__32457;
continue;
} else {
var ns_32458 = cljs.core.first.call(null,seq__32438_32452__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32458);

var G__32459 = cljs.core.next.call(null,seq__32438_32452__$1);
var G__32460 = null;
var G__32461 = (0);
var G__32462 = (0);
seq__32438_32442 = G__32459;
chunk__32439_32443 = G__32460;
count__32440_32444 = G__32461;
i__32441_32445 = G__32462;
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
var G__32463__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32464__i = 0, G__32464__a = new Array(arguments.length -  0);
while (G__32464__i < G__32464__a.length) {G__32464__a[G__32464__i] = arguments[G__32464__i + 0]; ++G__32464__i;}
  args = new cljs.core.IndexedSeq(G__32464__a,0);
} 
return G__32463__delegate.call(this,args);};
G__32463.cljs$lang$maxFixedArity = 0;
G__32463.cljs$lang$applyTo = (function (arglist__32465){
var args = cljs.core.seq(arglist__32465);
return G__32463__delegate(args);
});
G__32463.cljs$core$IFn$_invoke$arity$variadic = G__32463__delegate;
return G__32463;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32467 = cljs.core._EQ_;
var expr__32468 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32467.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32468))){
var path_parts = ((function (pred__32467,expr__32468){
return (function (p1__32466_SHARP_){
return clojure.string.split.call(null,p1__32466_SHARP_,/[\/\\]/);
});})(pred__32467,expr__32468))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32467,expr__32468){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32470){if((e32470 instanceof Error)){
var e = e32470;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32470;

}
}})());
});
;})(path_parts,sep,root,pred__32467,expr__32468))
} else {
if(cljs.core.truth_(pred__32467.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32468))){
return ((function (pred__32467,expr__32468){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32467,expr__32468){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32467,expr__32468))
);

return deferred.addErrback(((function (deferred,pred__32467,expr__32468){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32467,expr__32468))
);
});
;})(pred__32467,expr__32468))
} else {
return ((function (pred__32467,expr__32468){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32467,expr__32468))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32471,callback){
var map__32474 = p__32471;
var map__32474__$1 = ((((!((map__32474 == null)))?((((map__32474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);
var file_msg = map__32474__$1;
var request_url = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32474,map__32474__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32474,map__32474__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__){
return (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (7))){
var inst_32494 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32500_32520 = state_32498__$1;
(statearr_32500_32520[(2)] = inst_32494);

(statearr_32500_32520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (1))){
var state_32498__$1 = state_32498;
var statearr_32501_32521 = state_32498__$1;
(statearr_32501_32521[(2)] = null);

(statearr_32501_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (4))){
var inst_32478 = (state_32498[(7)]);
var inst_32478__$1 = (state_32498[(2)]);
var state_32498__$1 = (function (){var statearr_32502 = state_32498;
(statearr_32502[(7)] = inst_32478__$1);

return statearr_32502;
})();
if(cljs.core.truth_(inst_32478__$1)){
var statearr_32503_32522 = state_32498__$1;
(statearr_32503_32522[(1)] = (5));

} else {
var statearr_32504_32523 = state_32498__$1;
(statearr_32504_32523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (6))){
var state_32498__$1 = state_32498;
var statearr_32505_32524 = state_32498__$1;
(statearr_32505_32524[(2)] = null);

(statearr_32505_32524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (3))){
var inst_32496 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32498__$1,inst_32496);
} else {
if((state_val_32499 === (2))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32498__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32499 === (11))){
var inst_32490 = (state_32498[(2)]);
var state_32498__$1 = (function (){var statearr_32506 = state_32498;
(statearr_32506[(8)] = inst_32490);

return statearr_32506;
})();
var statearr_32507_32525 = state_32498__$1;
(statearr_32507_32525[(2)] = null);

(statearr_32507_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (9))){
var inst_32482 = (state_32498[(9)]);
var inst_32484 = (state_32498[(10)]);
var inst_32486 = inst_32484.call(null,inst_32482);
var state_32498__$1 = state_32498;
var statearr_32508_32526 = state_32498__$1;
(statearr_32508_32526[(2)] = inst_32486);

(statearr_32508_32526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (5))){
var inst_32478 = (state_32498[(7)]);
var inst_32480 = figwheel.client.file_reloading.blocking_load.call(null,inst_32478);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32498__$1,(8),inst_32480);
} else {
if((state_val_32499 === (10))){
var inst_32482 = (state_32498[(9)]);
var inst_32488 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32482);
var state_32498__$1 = state_32498;
var statearr_32509_32527 = state_32498__$1;
(statearr_32509_32527[(2)] = inst_32488);

(statearr_32509_32527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (8))){
var inst_32478 = (state_32498[(7)]);
var inst_32484 = (state_32498[(10)]);
var inst_32482 = (state_32498[(2)]);
var inst_32483 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32484__$1 = cljs.core.get.call(null,inst_32483,inst_32478);
var state_32498__$1 = (function (){var statearr_32510 = state_32498;
(statearr_32510[(9)] = inst_32482);

(statearr_32510[(10)] = inst_32484__$1);

return statearr_32510;
})();
if(cljs.core.truth_(inst_32484__$1)){
var statearr_32511_32528 = state_32498__$1;
(statearr_32511_32528[(1)] = (9));

} else {
var statearr_32512_32529 = state_32498__$1;
(statearr_32512_32529[(1)] = (10));

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
});})(c__29384__auto__))
;
return ((function (switch__29270__auto__,c__29384__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29271__auto__ = null;
var figwheel$client$file_reloading$state_machine__29271__auto____0 = (function (){
var statearr_32516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32516[(0)] = figwheel$client$file_reloading$state_machine__29271__auto__);

(statearr_32516[(1)] = (1));

return statearr_32516;
});
var figwheel$client$file_reloading$state_machine__29271__auto____1 = (function (state_32498){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_32498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e32517){if((e32517 instanceof Object)){
var ex__29274__auto__ = e32517;
var statearr_32518_32530 = state_32498;
(statearr_32518_32530[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32531 = state_32498;
state_32498 = G__32531;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29271__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29271__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29271__auto____0;
figwheel$client$file_reloading$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29271__auto____1;
return figwheel$client$file_reloading$state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__))
})();
var state__29386__auto__ = (function (){var statearr_32519 = f__29385__auto__.call(null);
(statearr_32519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_32519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__))
);

return c__29384__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32532,callback){
var map__32535 = p__32532;
var map__32535__$1 = ((((!((map__32535 == null)))?((((map__32535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32535):map__32535);
var file_msg = map__32535__$1;
var namespace = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32535,map__32535__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32535,map__32535__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32537){
var map__32540 = p__32537;
var map__32540__$1 = ((((!((map__32540 == null)))?((((map__32540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32540):map__32540);
var file_msg = map__32540__$1;
var namespace = cljs.core.get.call(null,map__32540__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32542,callback){
var map__32545 = p__32542;
var map__32545__$1 = ((((!((map__32545 == null)))?((((map__32545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32545):map__32545);
var file_msg = map__32545__$1;
var request_url = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29384__auto___32649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto___32649,out){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto___32649,out){
return (function (state_32631){
var state_val_32632 = (state_32631[(1)]);
if((state_val_32632 === (1))){
var inst_32605 = cljs.core.seq.call(null,files);
var inst_32606 = cljs.core.first.call(null,inst_32605);
var inst_32607 = cljs.core.next.call(null,inst_32605);
var inst_32608 = files;
var state_32631__$1 = (function (){var statearr_32633 = state_32631;
(statearr_32633[(7)] = inst_32608);

(statearr_32633[(8)] = inst_32607);

(statearr_32633[(9)] = inst_32606);

return statearr_32633;
})();
var statearr_32634_32650 = state_32631__$1;
(statearr_32634_32650[(2)] = null);

(statearr_32634_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (2))){
var inst_32608 = (state_32631[(7)]);
var inst_32614 = (state_32631[(10)]);
var inst_32613 = cljs.core.seq.call(null,inst_32608);
var inst_32614__$1 = cljs.core.first.call(null,inst_32613);
var inst_32615 = cljs.core.next.call(null,inst_32613);
var inst_32616 = (inst_32614__$1 == null);
var inst_32617 = cljs.core.not.call(null,inst_32616);
var state_32631__$1 = (function (){var statearr_32635 = state_32631;
(statearr_32635[(11)] = inst_32615);

(statearr_32635[(10)] = inst_32614__$1);

return statearr_32635;
})();
if(inst_32617){
var statearr_32636_32651 = state_32631__$1;
(statearr_32636_32651[(1)] = (4));

} else {
var statearr_32637_32652 = state_32631__$1;
(statearr_32637_32652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (3))){
var inst_32629 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32631__$1,inst_32629);
} else {
if((state_val_32632 === (4))){
var inst_32614 = (state_32631[(10)]);
var inst_32619 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32614);
var state_32631__$1 = state_32631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32631__$1,(7),inst_32619);
} else {
if((state_val_32632 === (5))){
var inst_32625 = cljs.core.async.close_BANG_.call(null,out);
var state_32631__$1 = state_32631;
var statearr_32638_32653 = state_32631__$1;
(statearr_32638_32653[(2)] = inst_32625);

(statearr_32638_32653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (6))){
var inst_32627 = (state_32631[(2)]);
var state_32631__$1 = state_32631;
var statearr_32639_32654 = state_32631__$1;
(statearr_32639_32654[(2)] = inst_32627);

(statearr_32639_32654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32632 === (7))){
var inst_32615 = (state_32631[(11)]);
var inst_32621 = (state_32631[(2)]);
var inst_32622 = cljs.core.async.put_BANG_.call(null,out,inst_32621);
var inst_32608 = inst_32615;
var state_32631__$1 = (function (){var statearr_32640 = state_32631;
(statearr_32640[(7)] = inst_32608);

(statearr_32640[(12)] = inst_32622);

return statearr_32640;
})();
var statearr_32641_32655 = state_32631__$1;
(statearr_32641_32655[(2)] = null);

(statearr_32641_32655[(1)] = (2));


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
});})(c__29384__auto___32649,out))
;
return ((function (switch__29270__auto__,c__29384__auto___32649,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____0 = (function (){
var statearr_32645 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32645[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__);

(statearr_32645[(1)] = (1));

return statearr_32645;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____1 = (function (state_32631){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_32631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e32646){if((e32646 instanceof Object)){
var ex__29274__auto__ = e32646;
var statearr_32647_32656 = state_32631;
(statearr_32647_32656[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_32631;
state_32631 = G__32657;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__ = function(state_32631){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____1.call(this,state_32631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto___32649,out))
})();
var state__29386__auto__ = (function (){var statearr_32648 = f__29385__auto__.call(null);
(statearr_32648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto___32649);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto___32649,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32658,opts){
var map__32662 = p__32658;
var map__32662__$1 = ((((!((map__32662 == null)))?((((map__32662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32662):map__32662);
var eval_body__$1 = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32664){var e = e32664;
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
return (function (p1__32665_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32665_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32674){
var vec__32675 = p__32674;
var k = cljs.core.nth.call(null,vec__32675,(0),null);
var v = cljs.core.nth.call(null,vec__32675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32678){
var vec__32679 = p__32678;
var k = cljs.core.nth.call(null,vec__32679,(0),null);
var v = cljs.core.nth.call(null,vec__32679,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32685,p__32686){
var map__32933 = p__32685;
var map__32933__$1 = ((((!((map__32933 == null)))?((((map__32933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32933):map__32933);
var opts = map__32933__$1;
var before_jsload = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32934 = p__32686;
var map__32934__$1 = ((((!((map__32934 == null)))?((((map__32934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32934):map__32934);
var msg = map__32934__$1;
var files = cljs.core.get.call(null,map__32934__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32934__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32934__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29385__auto__ = (function (){var switch__29270__auto__ = ((function (c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33087){
var state_val_33088 = (state_33087[(1)]);
if((state_val_33088 === (7))){
var inst_32948 = (state_33087[(7)]);
var inst_32949 = (state_33087[(8)]);
var inst_32951 = (state_33087[(9)]);
var inst_32950 = (state_33087[(10)]);
var inst_32956 = cljs.core._nth.call(null,inst_32949,inst_32951);
var inst_32957 = figwheel.client.file_reloading.eval_body.call(null,inst_32956,opts);
var inst_32958 = (inst_32951 + (1));
var tmp33089 = inst_32948;
var tmp33090 = inst_32949;
var tmp33091 = inst_32950;
var inst_32948__$1 = tmp33089;
var inst_32949__$1 = tmp33090;
var inst_32950__$1 = tmp33091;
var inst_32951__$1 = inst_32958;
var state_33087__$1 = (function (){var statearr_33092 = state_33087;
(statearr_33092[(11)] = inst_32957);

(statearr_33092[(7)] = inst_32948__$1);

(statearr_33092[(8)] = inst_32949__$1);

(statearr_33092[(9)] = inst_32951__$1);

(statearr_33092[(10)] = inst_32950__$1);

return statearr_33092;
})();
var statearr_33093_33179 = state_33087__$1;
(statearr_33093_33179[(2)] = null);

(statearr_33093_33179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (20))){
var inst_32991 = (state_33087[(12)]);
var inst_32999 = figwheel.client.file_reloading.sort_files.call(null,inst_32991);
var state_33087__$1 = state_33087;
var statearr_33094_33180 = state_33087__$1;
(statearr_33094_33180[(2)] = inst_32999);

(statearr_33094_33180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (27))){
var state_33087__$1 = state_33087;
var statearr_33095_33181 = state_33087__$1;
(statearr_33095_33181[(2)] = null);

(statearr_33095_33181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (1))){
var inst_32940 = (state_33087[(13)]);
var inst_32937 = before_jsload.call(null,files);
var inst_32938 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32939 = (function (){return ((function (inst_32940,inst_32937,inst_32938,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32682_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32682_SHARP_);
});
;})(inst_32940,inst_32937,inst_32938,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32940__$1 = cljs.core.filter.call(null,inst_32939,files);
var inst_32941 = cljs.core.not_empty.call(null,inst_32940__$1);
var state_33087__$1 = (function (){var statearr_33096 = state_33087;
(statearr_33096[(14)] = inst_32938);

(statearr_33096[(15)] = inst_32937);

(statearr_33096[(13)] = inst_32940__$1);

return statearr_33096;
})();
if(cljs.core.truth_(inst_32941)){
var statearr_33097_33182 = state_33087__$1;
(statearr_33097_33182[(1)] = (2));

} else {
var statearr_33098_33183 = state_33087__$1;
(statearr_33098_33183[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (24))){
var state_33087__$1 = state_33087;
var statearr_33099_33184 = state_33087__$1;
(statearr_33099_33184[(2)] = null);

(statearr_33099_33184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (39))){
var inst_33041 = (state_33087[(16)]);
var state_33087__$1 = state_33087;
var statearr_33100_33185 = state_33087__$1;
(statearr_33100_33185[(2)] = inst_33041);

(statearr_33100_33185[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (46))){
var inst_33082 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33101_33186 = state_33087__$1;
(statearr_33101_33186[(2)] = inst_33082);

(statearr_33101_33186[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (4))){
var inst_32985 = (state_33087[(2)]);
var inst_32986 = cljs.core.List.EMPTY;
var inst_32987 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32986);
var inst_32988 = (function (){return ((function (inst_32985,inst_32986,inst_32987,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32683_SHARP_){
var and__26590__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32683_SHARP_);
if(cljs.core.truth_(and__26590__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32683_SHARP_));
} else {
return and__26590__auto__;
}
});
;})(inst_32985,inst_32986,inst_32987,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32989 = cljs.core.filter.call(null,inst_32988,files);
var inst_32990 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32991 = cljs.core.concat.call(null,inst_32989,inst_32990);
var state_33087__$1 = (function (){var statearr_33102 = state_33087;
(statearr_33102[(17)] = inst_32987);

(statearr_33102[(12)] = inst_32991);

(statearr_33102[(18)] = inst_32985);

return statearr_33102;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33103_33187 = state_33087__$1;
(statearr_33103_33187[(1)] = (16));

} else {
var statearr_33104_33188 = state_33087__$1;
(statearr_33104_33188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (15))){
var inst_32975 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33105_33189 = state_33087__$1;
(statearr_33105_33189[(2)] = inst_32975);

(statearr_33105_33189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (21))){
var inst_33001 = (state_33087[(19)]);
var inst_33001__$1 = (state_33087[(2)]);
var inst_33002 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33001__$1);
var state_33087__$1 = (function (){var statearr_33106 = state_33087;
(statearr_33106[(19)] = inst_33001__$1);

return statearr_33106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33087__$1,(22),inst_33002);
} else {
if((state_val_33088 === (31))){
var inst_33085 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33087__$1,inst_33085);
} else {
if((state_val_33088 === (32))){
var inst_33041 = (state_33087[(16)]);
var inst_33046 = inst_33041.cljs$lang$protocol_mask$partition0$;
var inst_33047 = (inst_33046 & (64));
var inst_33048 = inst_33041.cljs$core$ISeq$;
var inst_33049 = (inst_33047) || (inst_33048);
var state_33087__$1 = state_33087;
if(cljs.core.truth_(inst_33049)){
var statearr_33107_33190 = state_33087__$1;
(statearr_33107_33190[(1)] = (35));

} else {
var statearr_33108_33191 = state_33087__$1;
(statearr_33108_33191[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (40))){
var inst_33062 = (state_33087[(20)]);
var inst_33061 = (state_33087[(2)]);
var inst_33062__$1 = cljs.core.get.call(null,inst_33061,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33063 = cljs.core.get.call(null,inst_33061,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33064 = cljs.core.not_empty.call(null,inst_33062__$1);
var state_33087__$1 = (function (){var statearr_33109 = state_33087;
(statearr_33109[(21)] = inst_33063);

(statearr_33109[(20)] = inst_33062__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33110_33192 = state_33087__$1;
(statearr_33110_33192[(1)] = (41));

} else {
var statearr_33111_33193 = state_33087__$1;
(statearr_33111_33193[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (33))){
var state_33087__$1 = state_33087;
var statearr_33112_33194 = state_33087__$1;
(statearr_33112_33194[(2)] = false);

(statearr_33112_33194[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (13))){
var inst_32961 = (state_33087[(22)]);
var inst_32965 = cljs.core.chunk_first.call(null,inst_32961);
var inst_32966 = cljs.core.chunk_rest.call(null,inst_32961);
var inst_32967 = cljs.core.count.call(null,inst_32965);
var inst_32948 = inst_32966;
var inst_32949 = inst_32965;
var inst_32950 = inst_32967;
var inst_32951 = (0);
var state_33087__$1 = (function (){var statearr_33113 = state_33087;
(statearr_33113[(7)] = inst_32948);

(statearr_33113[(8)] = inst_32949);

(statearr_33113[(9)] = inst_32951);

(statearr_33113[(10)] = inst_32950);

return statearr_33113;
})();
var statearr_33114_33195 = state_33087__$1;
(statearr_33114_33195[(2)] = null);

(statearr_33114_33195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (22))){
var inst_33009 = (state_33087[(23)]);
var inst_33004 = (state_33087[(24)]);
var inst_33005 = (state_33087[(25)]);
var inst_33001 = (state_33087[(19)]);
var inst_33004__$1 = (state_33087[(2)]);
var inst_33005__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33004__$1);
var inst_33006 = (function (){var all_files = inst_33001;
var res_SINGLEQUOTE_ = inst_33004__$1;
var res = inst_33005__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33009,inst_33004,inst_33005,inst_33001,inst_33004__$1,inst_33005__$1,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32684_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32684_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33009,inst_33004,inst_33005,inst_33001,inst_33004__$1,inst_33005__$1,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33007 = cljs.core.filter.call(null,inst_33006,inst_33004__$1);
var inst_33008 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33009__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33008);
var inst_33010 = cljs.core.not_empty.call(null,inst_33009__$1);
var state_33087__$1 = (function (){var statearr_33115 = state_33087;
(statearr_33115[(23)] = inst_33009__$1);

(statearr_33115[(24)] = inst_33004__$1);

(statearr_33115[(25)] = inst_33005__$1);

(statearr_33115[(26)] = inst_33007);

return statearr_33115;
})();
if(cljs.core.truth_(inst_33010)){
var statearr_33116_33196 = state_33087__$1;
(statearr_33116_33196[(1)] = (23));

} else {
var statearr_33117_33197 = state_33087__$1;
(statearr_33117_33197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (36))){
var state_33087__$1 = state_33087;
var statearr_33118_33198 = state_33087__$1;
(statearr_33118_33198[(2)] = false);

(statearr_33118_33198[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (41))){
var inst_33062 = (state_33087[(20)]);
var inst_33066 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33067 = cljs.core.map.call(null,inst_33066,inst_33062);
var inst_33068 = cljs.core.pr_str.call(null,inst_33067);
var inst_33069 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33068)].join('');
var inst_33070 = figwheel.client.utils.log.call(null,inst_33069);
var state_33087__$1 = state_33087;
var statearr_33119_33199 = state_33087__$1;
(statearr_33119_33199[(2)] = inst_33070);

(statearr_33119_33199[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (43))){
var inst_33063 = (state_33087[(21)]);
var inst_33073 = (state_33087[(2)]);
var inst_33074 = cljs.core.not_empty.call(null,inst_33063);
var state_33087__$1 = (function (){var statearr_33120 = state_33087;
(statearr_33120[(27)] = inst_33073);

return statearr_33120;
})();
if(cljs.core.truth_(inst_33074)){
var statearr_33121_33200 = state_33087__$1;
(statearr_33121_33200[(1)] = (44));

} else {
var statearr_33122_33201 = state_33087__$1;
(statearr_33122_33201[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (29))){
var inst_33009 = (state_33087[(23)]);
var inst_33041 = (state_33087[(16)]);
var inst_33004 = (state_33087[(24)]);
var inst_33005 = (state_33087[(25)]);
var inst_33001 = (state_33087[(19)]);
var inst_33007 = (state_33087[(26)]);
var inst_33037 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33040 = (function (){var all_files = inst_33001;
var res_SINGLEQUOTE_ = inst_33004;
var res = inst_33005;
var files_not_loaded = inst_33007;
var dependencies_that_loaded = inst_33009;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33041,inst_33004,inst_33005,inst_33001,inst_33007,inst_33037,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33039){
var map__33123 = p__33039;
var map__33123__$1 = ((((!((map__33123 == null)))?((((map__33123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33123):map__33123);
var namespace = cljs.core.get.call(null,map__33123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33041,inst_33004,inst_33005,inst_33001,inst_33007,inst_33037,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33041__$1 = cljs.core.group_by.call(null,inst_33040,inst_33007);
var inst_33043 = (inst_33041__$1 == null);
var inst_33044 = cljs.core.not.call(null,inst_33043);
var state_33087__$1 = (function (){var statearr_33125 = state_33087;
(statearr_33125[(16)] = inst_33041__$1);

(statearr_33125[(28)] = inst_33037);

return statearr_33125;
})();
if(inst_33044){
var statearr_33126_33202 = state_33087__$1;
(statearr_33126_33202[(1)] = (32));

} else {
var statearr_33127_33203 = state_33087__$1;
(statearr_33127_33203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (44))){
var inst_33063 = (state_33087[(21)]);
var inst_33076 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33063);
var inst_33077 = cljs.core.pr_str.call(null,inst_33076);
var inst_33078 = [cljs.core.str("not required: "),cljs.core.str(inst_33077)].join('');
var inst_33079 = figwheel.client.utils.log.call(null,inst_33078);
var state_33087__$1 = state_33087;
var statearr_33128_33204 = state_33087__$1;
(statearr_33128_33204[(2)] = inst_33079);

(statearr_33128_33204[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (6))){
var inst_32982 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33129_33205 = state_33087__$1;
(statearr_33129_33205[(2)] = inst_32982);

(statearr_33129_33205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (28))){
var inst_33007 = (state_33087[(26)]);
var inst_33034 = (state_33087[(2)]);
var inst_33035 = cljs.core.not_empty.call(null,inst_33007);
var state_33087__$1 = (function (){var statearr_33130 = state_33087;
(statearr_33130[(29)] = inst_33034);

return statearr_33130;
})();
if(cljs.core.truth_(inst_33035)){
var statearr_33131_33206 = state_33087__$1;
(statearr_33131_33206[(1)] = (29));

} else {
var statearr_33132_33207 = state_33087__$1;
(statearr_33132_33207[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (25))){
var inst_33005 = (state_33087[(25)]);
var inst_33021 = (state_33087[(2)]);
var inst_33022 = cljs.core.not_empty.call(null,inst_33005);
var state_33087__$1 = (function (){var statearr_33133 = state_33087;
(statearr_33133[(30)] = inst_33021);

return statearr_33133;
})();
if(cljs.core.truth_(inst_33022)){
var statearr_33134_33208 = state_33087__$1;
(statearr_33134_33208[(1)] = (26));

} else {
var statearr_33135_33209 = state_33087__$1;
(statearr_33135_33209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (34))){
var inst_33056 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
if(cljs.core.truth_(inst_33056)){
var statearr_33136_33210 = state_33087__$1;
(statearr_33136_33210[(1)] = (38));

} else {
var statearr_33137_33211 = state_33087__$1;
(statearr_33137_33211[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (17))){
var state_33087__$1 = state_33087;
var statearr_33138_33212 = state_33087__$1;
(statearr_33138_33212[(2)] = recompile_dependents);

(statearr_33138_33212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (3))){
var state_33087__$1 = state_33087;
var statearr_33139_33213 = state_33087__$1;
(statearr_33139_33213[(2)] = null);

(statearr_33139_33213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (12))){
var inst_32978 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33140_33214 = state_33087__$1;
(statearr_33140_33214[(2)] = inst_32978);

(statearr_33140_33214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (2))){
var inst_32940 = (state_33087[(13)]);
var inst_32947 = cljs.core.seq.call(null,inst_32940);
var inst_32948 = inst_32947;
var inst_32949 = null;
var inst_32950 = (0);
var inst_32951 = (0);
var state_33087__$1 = (function (){var statearr_33141 = state_33087;
(statearr_33141[(7)] = inst_32948);

(statearr_33141[(8)] = inst_32949);

(statearr_33141[(9)] = inst_32951);

(statearr_33141[(10)] = inst_32950);

return statearr_33141;
})();
var statearr_33142_33215 = state_33087__$1;
(statearr_33142_33215[(2)] = null);

(statearr_33142_33215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (23))){
var inst_33009 = (state_33087[(23)]);
var inst_33004 = (state_33087[(24)]);
var inst_33005 = (state_33087[(25)]);
var inst_33001 = (state_33087[(19)]);
var inst_33007 = (state_33087[(26)]);
var inst_33012 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33014 = (function (){var all_files = inst_33001;
var res_SINGLEQUOTE_ = inst_33004;
var res = inst_33005;
var files_not_loaded = inst_33007;
var dependencies_that_loaded = inst_33009;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33012,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33013){
var map__33143 = p__33013;
var map__33143__$1 = ((((!((map__33143 == null)))?((((map__33143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33143):map__33143);
var request_url = cljs.core.get.call(null,map__33143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33012,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33015 = cljs.core.reverse.call(null,inst_33009);
var inst_33016 = cljs.core.map.call(null,inst_33014,inst_33015);
var inst_33017 = cljs.core.pr_str.call(null,inst_33016);
var inst_33018 = figwheel.client.utils.log.call(null,inst_33017);
var state_33087__$1 = (function (){var statearr_33145 = state_33087;
(statearr_33145[(31)] = inst_33012);

return statearr_33145;
})();
var statearr_33146_33216 = state_33087__$1;
(statearr_33146_33216[(2)] = inst_33018);

(statearr_33146_33216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (35))){
var state_33087__$1 = state_33087;
var statearr_33147_33217 = state_33087__$1;
(statearr_33147_33217[(2)] = true);

(statearr_33147_33217[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (19))){
var inst_32991 = (state_33087[(12)]);
var inst_32997 = figwheel.client.file_reloading.expand_files.call(null,inst_32991);
var state_33087__$1 = state_33087;
var statearr_33148_33218 = state_33087__$1;
(statearr_33148_33218[(2)] = inst_32997);

(statearr_33148_33218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (11))){
var state_33087__$1 = state_33087;
var statearr_33149_33219 = state_33087__$1;
(statearr_33149_33219[(2)] = null);

(statearr_33149_33219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (9))){
var inst_32980 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33150_33220 = state_33087__$1;
(statearr_33150_33220[(2)] = inst_32980);

(statearr_33150_33220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (5))){
var inst_32951 = (state_33087[(9)]);
var inst_32950 = (state_33087[(10)]);
var inst_32953 = (inst_32951 < inst_32950);
var inst_32954 = inst_32953;
var state_33087__$1 = state_33087;
if(cljs.core.truth_(inst_32954)){
var statearr_33151_33221 = state_33087__$1;
(statearr_33151_33221[(1)] = (7));

} else {
var statearr_33152_33222 = state_33087__$1;
(statearr_33152_33222[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (14))){
var inst_32961 = (state_33087[(22)]);
var inst_32970 = cljs.core.first.call(null,inst_32961);
var inst_32971 = figwheel.client.file_reloading.eval_body.call(null,inst_32970,opts);
var inst_32972 = cljs.core.next.call(null,inst_32961);
var inst_32948 = inst_32972;
var inst_32949 = null;
var inst_32950 = (0);
var inst_32951 = (0);
var state_33087__$1 = (function (){var statearr_33153 = state_33087;
(statearr_33153[(7)] = inst_32948);

(statearr_33153[(8)] = inst_32949);

(statearr_33153[(9)] = inst_32951);

(statearr_33153[(32)] = inst_32971);

(statearr_33153[(10)] = inst_32950);

return statearr_33153;
})();
var statearr_33154_33223 = state_33087__$1;
(statearr_33154_33223[(2)] = null);

(statearr_33154_33223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (45))){
var state_33087__$1 = state_33087;
var statearr_33155_33224 = state_33087__$1;
(statearr_33155_33224[(2)] = null);

(statearr_33155_33224[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (26))){
var inst_33009 = (state_33087[(23)]);
var inst_33004 = (state_33087[(24)]);
var inst_33005 = (state_33087[(25)]);
var inst_33001 = (state_33087[(19)]);
var inst_33007 = (state_33087[(26)]);
var inst_33024 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33026 = (function (){var all_files = inst_33001;
var res_SINGLEQUOTE_ = inst_33004;
var res = inst_33005;
var files_not_loaded = inst_33007;
var dependencies_that_loaded = inst_33009;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33024,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33025){
var map__33156 = p__33025;
var map__33156__$1 = ((((!((map__33156 == null)))?((((map__33156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33156):map__33156);
var namespace = cljs.core.get.call(null,map__33156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33024,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33027 = cljs.core.map.call(null,inst_33026,inst_33005);
var inst_33028 = cljs.core.pr_str.call(null,inst_33027);
var inst_33029 = figwheel.client.utils.log.call(null,inst_33028);
var inst_33030 = (function (){var all_files = inst_33001;
var res_SINGLEQUOTE_ = inst_33004;
var res = inst_33005;
var files_not_loaded = inst_33007;
var dependencies_that_loaded = inst_33009;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33024,inst_33026,inst_33027,inst_33028,inst_33029,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33009,inst_33004,inst_33005,inst_33001,inst_33007,inst_33024,inst_33026,inst_33027,inst_33028,inst_33029,state_val_33088,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33031 = setTimeout(inst_33030,(10));
var state_33087__$1 = (function (){var statearr_33158 = state_33087;
(statearr_33158[(33)] = inst_33024);

(statearr_33158[(34)] = inst_33029);

return statearr_33158;
})();
var statearr_33159_33225 = state_33087__$1;
(statearr_33159_33225[(2)] = inst_33031);

(statearr_33159_33225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (16))){
var state_33087__$1 = state_33087;
var statearr_33160_33226 = state_33087__$1;
(statearr_33160_33226[(2)] = reload_dependents);

(statearr_33160_33226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (38))){
var inst_33041 = (state_33087[(16)]);
var inst_33058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33041);
var state_33087__$1 = state_33087;
var statearr_33161_33227 = state_33087__$1;
(statearr_33161_33227[(2)] = inst_33058);

(statearr_33161_33227[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (30))){
var state_33087__$1 = state_33087;
var statearr_33162_33228 = state_33087__$1;
(statearr_33162_33228[(2)] = null);

(statearr_33162_33228[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (10))){
var inst_32961 = (state_33087[(22)]);
var inst_32963 = cljs.core.chunked_seq_QMARK_.call(null,inst_32961);
var state_33087__$1 = state_33087;
if(inst_32963){
var statearr_33163_33229 = state_33087__$1;
(statearr_33163_33229[(1)] = (13));

} else {
var statearr_33164_33230 = state_33087__$1;
(statearr_33164_33230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (18))){
var inst_32995 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
if(cljs.core.truth_(inst_32995)){
var statearr_33165_33231 = state_33087__$1;
(statearr_33165_33231[(1)] = (19));

} else {
var statearr_33166_33232 = state_33087__$1;
(statearr_33166_33232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (42))){
var state_33087__$1 = state_33087;
var statearr_33167_33233 = state_33087__$1;
(statearr_33167_33233[(2)] = null);

(statearr_33167_33233[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (37))){
var inst_33053 = (state_33087[(2)]);
var state_33087__$1 = state_33087;
var statearr_33168_33234 = state_33087__$1;
(statearr_33168_33234[(2)] = inst_33053);

(statearr_33168_33234[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33088 === (8))){
var inst_32948 = (state_33087[(7)]);
var inst_32961 = (state_33087[(22)]);
var inst_32961__$1 = cljs.core.seq.call(null,inst_32948);
var state_33087__$1 = (function (){var statearr_33169 = state_33087;
(statearr_33169[(22)] = inst_32961__$1);

return statearr_33169;
})();
if(inst_32961__$1){
var statearr_33170_33235 = state_33087__$1;
(statearr_33170_33235[(1)] = (10));

} else {
var statearr_33171_33236 = state_33087__$1;
(statearr_33171_33236[(1)] = (11));

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
});})(c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29270__auto__,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____0 = (function (){
var statearr_33175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33175[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__);

(statearr_33175[(1)] = (1));

return statearr_33175;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____1 = (function (state_33087){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__.call(null,state_33087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e33176){if((e33176 instanceof Object)){
var ex__29274__auto__ = e33176;
var statearr_33177_33237 = state_33087;
(statearr_33177_33237[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33238 = state_33087;
state_33087 = G__33238;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__ = function(state_33087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____1.call(this,state_33087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29271__auto__;
})()
;})(switch__29270__auto__,c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29386__auto__ = (function (){var statearr_33178 = f__29385__auto__.call(null);
(statearr_33178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29384__auto__);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29386__auto__);
});})(c__29384__auto__,map__32933,map__32933__$1,opts,before_jsload,on_jsload,reload_dependents,map__32934,map__32934__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29384__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33241,link){
var map__33244 = p__33241;
var map__33244__$1 = ((((!((map__33244 == null)))?((((map__33244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);
var file = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__33244,map__33244__$1,file){
return (function (p1__33239_SHARP_,p2__33240_SHARP_){
if(cljs.core._EQ_.call(null,p1__33239_SHARP_,p2__33240_SHARP_)){
return p1__33239_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__33244,map__33244__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33250){
var map__33251 = p__33250;
var map__33251__$1 = ((((!((map__33251 == null)))?((((map__33251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33251):map__33251);
var match_length = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33246_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33246_SHARP_);
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
var args33253 = [];
var len__27785__auto___33256 = arguments.length;
var i__27786__auto___33257 = (0);
while(true){
if((i__27786__auto___33257 < len__27785__auto___33256)){
args33253.push((arguments[i__27786__auto___33257]));

var G__33258 = (i__27786__auto___33257 + (1));
i__27786__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var G__33255 = args33253.length;
switch (G__33255) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33253.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33260_SHARP_,p2__33261_SHARP_){
return cljs.core.assoc.call(null,p1__33260_SHARP_,cljs.core.get.call(null,p2__33261_SHARP_,key),p2__33261_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33262){
var map__33265 = p__33262;
var map__33265__$1 = ((((!((map__33265 == null)))?((((map__33265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33265):map__33265);
var f_data = map__33265__$1;
var file = cljs.core.get.call(null,map__33265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33267,p__33268){
var map__33277 = p__33267;
var map__33277__$1 = ((((!((map__33277 == null)))?((((map__33277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33277):map__33277);
var opts = map__33277__$1;
var on_cssload = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33278 = p__33268;
var map__33278__$1 = ((((!((map__33278 == null)))?((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
var files_msg = map__33278__$1;
var files = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33281_33285 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33282_33286 = null;
var count__33283_33287 = (0);
var i__33284_33288 = (0);
while(true){
if((i__33284_33288 < count__33283_33287)){
var f_33289 = cljs.core._nth.call(null,chunk__33282_33286,i__33284_33288);
figwheel.client.file_reloading.reload_css_file.call(null,f_33289);

var G__33290 = seq__33281_33285;
var G__33291 = chunk__33282_33286;
var G__33292 = count__33283_33287;
var G__33293 = (i__33284_33288 + (1));
seq__33281_33285 = G__33290;
chunk__33282_33286 = G__33291;
count__33283_33287 = G__33292;
i__33284_33288 = G__33293;
continue;
} else {
var temp__6753__auto___33294 = cljs.core.seq.call(null,seq__33281_33285);
if(temp__6753__auto___33294){
var seq__33281_33295__$1 = temp__6753__auto___33294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33281_33295__$1)){
var c__27505__auto___33296 = cljs.core.chunk_first.call(null,seq__33281_33295__$1);
var G__33297 = cljs.core.chunk_rest.call(null,seq__33281_33295__$1);
var G__33298 = c__27505__auto___33296;
var G__33299 = cljs.core.count.call(null,c__27505__auto___33296);
var G__33300 = (0);
seq__33281_33285 = G__33297;
chunk__33282_33286 = G__33298;
count__33283_33287 = G__33299;
i__33284_33288 = G__33300;
continue;
} else {
var f_33301 = cljs.core.first.call(null,seq__33281_33295__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33301);

var G__33302 = cljs.core.next.call(null,seq__33281_33295__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__33281_33285 = G__33302;
chunk__33282_33286 = G__33303;
count__33283_33287 = G__33304;
i__33284_33288 = G__33305;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33277,map__33277__$1,opts,on_cssload,map__33278,map__33278__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33277,map__33277__$1,opts,on_cssload,map__33278,map__33278__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496994075027