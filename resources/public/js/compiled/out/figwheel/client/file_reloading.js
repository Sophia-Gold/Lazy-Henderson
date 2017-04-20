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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32111_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32111_SHARP_));
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
var seq__32116 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32117 = null;
var count__32118 = (0);
var i__32119 = (0);
while(true){
if((i__32119 < count__32118)){
var n = cljs.core._nth.call(null,chunk__32117,i__32119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32120 = seq__32116;
var G__32121 = chunk__32117;
var G__32122 = count__32118;
var G__32123 = (i__32119 + (1));
seq__32116 = G__32120;
chunk__32117 = G__32121;
count__32118 = G__32122;
i__32119 = G__32123;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32116);
if(temp__6753__auto__){
var seq__32116__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32116__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__32116__$1);
var G__32124 = cljs.core.chunk_rest.call(null,seq__32116__$1);
var G__32125 = c__27497__auto__;
var G__32126 = cljs.core.count.call(null,c__27497__auto__);
var G__32127 = (0);
seq__32116 = G__32124;
chunk__32117 = G__32125;
count__32118 = G__32126;
i__32119 = G__32127;
continue;
} else {
var n = cljs.core.first.call(null,seq__32116__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32128 = cljs.core.next.call(null,seq__32116__$1);
var G__32129 = null;
var G__32130 = (0);
var G__32131 = (0);
seq__32116 = G__32128;
chunk__32117 = G__32129;
count__32118 = G__32130;
i__32119 = G__32131;
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

var seq__32182_32193 = cljs.core.seq.call(null,deps);
var chunk__32183_32194 = null;
var count__32184_32195 = (0);
var i__32185_32196 = (0);
while(true){
if((i__32185_32196 < count__32184_32195)){
var dep_32197 = cljs.core._nth.call(null,chunk__32183_32194,i__32185_32196);
topo_sort_helper_STAR_.call(null,dep_32197,(depth + (1)),state);

var G__32198 = seq__32182_32193;
var G__32199 = chunk__32183_32194;
var G__32200 = count__32184_32195;
var G__32201 = (i__32185_32196 + (1));
seq__32182_32193 = G__32198;
chunk__32183_32194 = G__32199;
count__32184_32195 = G__32200;
i__32185_32196 = G__32201;
continue;
} else {
var temp__6753__auto___32202 = cljs.core.seq.call(null,seq__32182_32193);
if(temp__6753__auto___32202){
var seq__32182_32203__$1 = temp__6753__auto___32202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32182_32203__$1)){
var c__27497__auto___32204 = cljs.core.chunk_first.call(null,seq__32182_32203__$1);
var G__32205 = cljs.core.chunk_rest.call(null,seq__32182_32203__$1);
var G__32206 = c__27497__auto___32204;
var G__32207 = cljs.core.count.call(null,c__27497__auto___32204);
var G__32208 = (0);
seq__32182_32193 = G__32205;
chunk__32183_32194 = G__32206;
count__32184_32195 = G__32207;
i__32185_32196 = G__32208;
continue;
} else {
var dep_32209 = cljs.core.first.call(null,seq__32182_32203__$1);
topo_sort_helper_STAR_.call(null,dep_32209,(depth + (1)),state);

var G__32210 = cljs.core.next.call(null,seq__32182_32203__$1);
var G__32211 = null;
var G__32212 = (0);
var G__32213 = (0);
seq__32182_32193 = G__32210;
chunk__32183_32194 = G__32211;
count__32184_32195 = G__32212;
i__32185_32196 = G__32213;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32186){
var vec__32190 = p__32186;
var seq__32191 = cljs.core.seq.call(null,vec__32190);
var first__32192 = cljs.core.first.call(null,seq__32191);
var seq__32191__$1 = cljs.core.next.call(null,seq__32191);
var x = first__32192;
var xs = seq__32191__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32190,seq__32191,first__32192,seq__32191__$1,x,xs,get_deps__$1){
return (function (p1__32132_SHARP_){
return clojure.set.difference.call(null,p1__32132_SHARP_,x);
});})(vec__32190,seq__32191,first__32192,seq__32191__$1,x,xs,get_deps__$1))
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
var seq__32226 = cljs.core.seq.call(null,provides);
var chunk__32227 = null;
var count__32228 = (0);
var i__32229 = (0);
while(true){
if((i__32229 < count__32228)){
var prov = cljs.core._nth.call(null,chunk__32227,i__32229);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32230_32238 = cljs.core.seq.call(null,requires);
var chunk__32231_32239 = null;
var count__32232_32240 = (0);
var i__32233_32241 = (0);
while(true){
if((i__32233_32241 < count__32232_32240)){
var req_32242 = cljs.core._nth.call(null,chunk__32231_32239,i__32233_32241);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32242,prov);

var G__32243 = seq__32230_32238;
var G__32244 = chunk__32231_32239;
var G__32245 = count__32232_32240;
var G__32246 = (i__32233_32241 + (1));
seq__32230_32238 = G__32243;
chunk__32231_32239 = G__32244;
count__32232_32240 = G__32245;
i__32233_32241 = G__32246;
continue;
} else {
var temp__6753__auto___32247 = cljs.core.seq.call(null,seq__32230_32238);
if(temp__6753__auto___32247){
var seq__32230_32248__$1 = temp__6753__auto___32247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32230_32248__$1)){
var c__27497__auto___32249 = cljs.core.chunk_first.call(null,seq__32230_32248__$1);
var G__32250 = cljs.core.chunk_rest.call(null,seq__32230_32248__$1);
var G__32251 = c__27497__auto___32249;
var G__32252 = cljs.core.count.call(null,c__27497__auto___32249);
var G__32253 = (0);
seq__32230_32238 = G__32250;
chunk__32231_32239 = G__32251;
count__32232_32240 = G__32252;
i__32233_32241 = G__32253;
continue;
} else {
var req_32254 = cljs.core.first.call(null,seq__32230_32248__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32254,prov);

var G__32255 = cljs.core.next.call(null,seq__32230_32248__$1);
var G__32256 = null;
var G__32257 = (0);
var G__32258 = (0);
seq__32230_32238 = G__32255;
chunk__32231_32239 = G__32256;
count__32232_32240 = G__32257;
i__32233_32241 = G__32258;
continue;
}
} else {
}
}
break;
}

var G__32259 = seq__32226;
var G__32260 = chunk__32227;
var G__32261 = count__32228;
var G__32262 = (i__32229 + (1));
seq__32226 = G__32259;
chunk__32227 = G__32260;
count__32228 = G__32261;
i__32229 = G__32262;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__32226);
if(temp__6753__auto__){
var seq__32226__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32226__$1)){
var c__27497__auto__ = cljs.core.chunk_first.call(null,seq__32226__$1);
var G__32263 = cljs.core.chunk_rest.call(null,seq__32226__$1);
var G__32264 = c__27497__auto__;
var G__32265 = cljs.core.count.call(null,c__27497__auto__);
var G__32266 = (0);
seq__32226 = G__32263;
chunk__32227 = G__32264;
count__32228 = G__32265;
i__32229 = G__32266;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32226__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32234_32267 = cljs.core.seq.call(null,requires);
var chunk__32235_32268 = null;
var count__32236_32269 = (0);
var i__32237_32270 = (0);
while(true){
if((i__32237_32270 < count__32236_32269)){
var req_32271 = cljs.core._nth.call(null,chunk__32235_32268,i__32237_32270);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32271,prov);

var G__32272 = seq__32234_32267;
var G__32273 = chunk__32235_32268;
var G__32274 = count__32236_32269;
var G__32275 = (i__32237_32270 + (1));
seq__32234_32267 = G__32272;
chunk__32235_32268 = G__32273;
count__32236_32269 = G__32274;
i__32237_32270 = G__32275;
continue;
} else {
var temp__6753__auto___32276__$1 = cljs.core.seq.call(null,seq__32234_32267);
if(temp__6753__auto___32276__$1){
var seq__32234_32277__$1 = temp__6753__auto___32276__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32234_32277__$1)){
var c__27497__auto___32278 = cljs.core.chunk_first.call(null,seq__32234_32277__$1);
var G__32279 = cljs.core.chunk_rest.call(null,seq__32234_32277__$1);
var G__32280 = c__27497__auto___32278;
var G__32281 = cljs.core.count.call(null,c__27497__auto___32278);
var G__32282 = (0);
seq__32234_32267 = G__32279;
chunk__32235_32268 = G__32280;
count__32236_32269 = G__32281;
i__32237_32270 = G__32282;
continue;
} else {
var req_32283 = cljs.core.first.call(null,seq__32234_32277__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32283,prov);

var G__32284 = cljs.core.next.call(null,seq__32234_32277__$1);
var G__32285 = null;
var G__32286 = (0);
var G__32287 = (0);
seq__32234_32267 = G__32284;
chunk__32235_32268 = G__32285;
count__32236_32269 = G__32286;
i__32237_32270 = G__32287;
continue;
}
} else {
}
}
break;
}

var G__32288 = cljs.core.next.call(null,seq__32226__$1);
var G__32289 = null;
var G__32290 = (0);
var G__32291 = (0);
seq__32226 = G__32288;
chunk__32227 = G__32289;
count__32228 = G__32290;
i__32229 = G__32291;
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
var seq__32296_32300 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32297_32301 = null;
var count__32298_32302 = (0);
var i__32299_32303 = (0);
while(true){
if((i__32299_32303 < count__32298_32302)){
var ns_32304 = cljs.core._nth.call(null,chunk__32297_32301,i__32299_32303);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32304);

var G__32305 = seq__32296_32300;
var G__32306 = chunk__32297_32301;
var G__32307 = count__32298_32302;
var G__32308 = (i__32299_32303 + (1));
seq__32296_32300 = G__32305;
chunk__32297_32301 = G__32306;
count__32298_32302 = G__32307;
i__32299_32303 = G__32308;
continue;
} else {
var temp__6753__auto___32309 = cljs.core.seq.call(null,seq__32296_32300);
if(temp__6753__auto___32309){
var seq__32296_32310__$1 = temp__6753__auto___32309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32296_32310__$1)){
var c__27497__auto___32311 = cljs.core.chunk_first.call(null,seq__32296_32310__$1);
var G__32312 = cljs.core.chunk_rest.call(null,seq__32296_32310__$1);
var G__32313 = c__27497__auto___32311;
var G__32314 = cljs.core.count.call(null,c__27497__auto___32311);
var G__32315 = (0);
seq__32296_32300 = G__32312;
chunk__32297_32301 = G__32313;
count__32298_32302 = G__32314;
i__32299_32303 = G__32315;
continue;
} else {
var ns_32316 = cljs.core.first.call(null,seq__32296_32310__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32316);

var G__32317 = cljs.core.next.call(null,seq__32296_32310__$1);
var G__32318 = null;
var G__32319 = (0);
var G__32320 = (0);
seq__32296_32300 = G__32317;
chunk__32297_32301 = G__32318;
count__32298_32302 = G__32319;
i__32299_32303 = G__32320;
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
var G__32321__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32322__i = 0, G__32322__a = new Array(arguments.length -  0);
while (G__32322__i < G__32322__a.length) {G__32322__a[G__32322__i] = arguments[G__32322__i + 0]; ++G__32322__i;}
  args = new cljs.core.IndexedSeq(G__32322__a,0);
} 
return G__32321__delegate.call(this,args);};
G__32321.cljs$lang$maxFixedArity = 0;
G__32321.cljs$lang$applyTo = (function (arglist__32323){
var args = cljs.core.seq(arglist__32323);
return G__32321__delegate(args);
});
G__32321.cljs$core$IFn$_invoke$arity$variadic = G__32321__delegate;
return G__32321;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32325 = cljs.core._EQ_;
var expr__32326 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32325.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32326))){
var path_parts = ((function (pred__32325,expr__32326){
return (function (p1__32324_SHARP_){
return clojure.string.split.call(null,p1__32324_SHARP_,/[\/\\]/);
});})(pred__32325,expr__32326))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32325,expr__32326){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32328){if((e32328 instanceof Error)){
var e = e32328;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32328;

}
}})());
});
;})(path_parts,sep,root,pred__32325,expr__32326))
} else {
if(cljs.core.truth_(pred__32325.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32326))){
return ((function (pred__32325,expr__32326){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32325,expr__32326){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32325,expr__32326))
);

return deferred.addErrback(((function (deferred,pred__32325,expr__32326){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32325,expr__32326))
);
});
;})(pred__32325,expr__32326))
} else {
return ((function (pred__32325,expr__32326){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32325,expr__32326))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32329,callback){
var map__32332 = p__32329;
var map__32332__$1 = ((((!((map__32332 == null)))?((((map__32332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32332):map__32332);
var file_msg = map__32332__$1;
var request_url = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32332,map__32332__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32332,map__32332__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__){
return (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (7))){
var inst_32352 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32358_32378 = state_32356__$1;
(statearr_32358_32378[(2)] = inst_32352);

(statearr_32358_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (1))){
var state_32356__$1 = state_32356;
var statearr_32359_32379 = state_32356__$1;
(statearr_32359_32379[(2)] = null);

(statearr_32359_32379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (4))){
var inst_32336 = (state_32356[(7)]);
var inst_32336__$1 = (state_32356[(2)]);
var state_32356__$1 = (function (){var statearr_32360 = state_32356;
(statearr_32360[(7)] = inst_32336__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32336__$1)){
var statearr_32361_32380 = state_32356__$1;
(statearr_32361_32380[(1)] = (5));

} else {
var statearr_32362_32381 = state_32356__$1;
(statearr_32362_32381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (6))){
var state_32356__$1 = state_32356;
var statearr_32363_32382 = state_32356__$1;
(statearr_32363_32382[(2)] = null);

(statearr_32363_32382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (3))){
var inst_32354 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32356__$1,inst_32354);
} else {
if((state_val_32357 === (2))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32357 === (11))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = (function (){var statearr_32364 = state_32356;
(statearr_32364[(8)] = inst_32348);

return statearr_32364;
})();
var statearr_32365_32383 = state_32356__$1;
(statearr_32365_32383[(2)] = null);

(statearr_32365_32383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (9))){
var inst_32340 = (state_32356[(9)]);
var inst_32342 = (state_32356[(10)]);
var inst_32344 = inst_32342.call(null,inst_32340);
var state_32356__$1 = state_32356;
var statearr_32366_32384 = state_32356__$1;
(statearr_32366_32384[(2)] = inst_32344);

(statearr_32366_32384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (5))){
var inst_32336 = (state_32356[(7)]);
var inst_32338 = figwheel.client.file_reloading.blocking_load.call(null,inst_32336);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32356__$1,(8),inst_32338);
} else {
if((state_val_32357 === (10))){
var inst_32340 = (state_32356[(9)]);
var inst_32346 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32340);
var state_32356__$1 = state_32356;
var statearr_32367_32385 = state_32356__$1;
(statearr_32367_32385[(2)] = inst_32346);

(statearr_32367_32385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (8))){
var inst_32336 = (state_32356[(7)]);
var inst_32342 = (state_32356[(10)]);
var inst_32340 = (state_32356[(2)]);
var inst_32341 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32342__$1 = cljs.core.get.call(null,inst_32341,inst_32336);
var state_32356__$1 = (function (){var statearr_32368 = state_32356;
(statearr_32368[(9)] = inst_32340);

(statearr_32368[(10)] = inst_32342__$1);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32342__$1)){
var statearr_32369_32386 = state_32356__$1;
(statearr_32369_32386[(1)] = (9));

} else {
var statearr_32370_32387 = state_32356__$1;
(statearr_32370_32387[(1)] = (10));

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
});})(c__29242__auto__))
;
return ((function (switch__29128__auto__,c__29242__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$state_machine__29129__auto____0 = (function (){
var statearr_32374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32374[(0)] = figwheel$client$file_reloading$state_machine__29129__auto__);

(statearr_32374[(1)] = (1));

return statearr_32374;
});
var figwheel$client$file_reloading$state_machine__29129__auto____1 = (function (state_32356){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_32356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e32375){if((e32375 instanceof Object)){
var ex__29132__auto__ = e32375;
var statearr_32376_32388 = state_32356;
(statearr_32376_32388[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32389 = state_32356;
state_32356 = G__32389;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29129__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29129__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29129__auto____0;
figwheel$client$file_reloading$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29129__auto____1;
return figwheel$client$file_reloading$state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__))
})();
var state__29244__auto__ = (function (){var statearr_32377 = f__29243__auto__.call(null);
(statearr_32377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__))
);

return c__29242__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32390,callback){
var map__32393 = p__32390;
var map__32393__$1 = ((((!((map__32393 == null)))?((((map__32393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);
var file_msg = map__32393__$1;
var namespace = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32393,map__32393__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32393,map__32393__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32395){
var map__32398 = p__32395;
var map__32398__$1 = ((((!((map__32398 == null)))?((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var file_msg = map__32398__$1;
var namespace = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32400,callback){
var map__32403 = p__32400;
var map__32403__$1 = ((((!((map__32403 == null)))?((((map__32403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);
var file_msg = map__32403__$1;
var request_url = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29242__auto___32507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto___32507,out){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto___32507,out){
return (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (1))){
var inst_32463 = cljs.core.seq.call(null,files);
var inst_32464 = cljs.core.first.call(null,inst_32463);
var inst_32465 = cljs.core.next.call(null,inst_32463);
var inst_32466 = files;
var state_32489__$1 = (function (){var statearr_32491 = state_32489;
(statearr_32491[(7)] = inst_32465);

(statearr_32491[(8)] = inst_32464);

(statearr_32491[(9)] = inst_32466);

return statearr_32491;
})();
var statearr_32492_32508 = state_32489__$1;
(statearr_32492_32508[(2)] = null);

(statearr_32492_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (2))){
var inst_32466 = (state_32489[(9)]);
var inst_32472 = (state_32489[(10)]);
var inst_32471 = cljs.core.seq.call(null,inst_32466);
var inst_32472__$1 = cljs.core.first.call(null,inst_32471);
var inst_32473 = cljs.core.next.call(null,inst_32471);
var inst_32474 = (inst_32472__$1 == null);
var inst_32475 = cljs.core.not.call(null,inst_32474);
var state_32489__$1 = (function (){var statearr_32493 = state_32489;
(statearr_32493[(11)] = inst_32473);

(statearr_32493[(10)] = inst_32472__$1);

return statearr_32493;
})();
if(inst_32475){
var statearr_32494_32509 = state_32489__$1;
(statearr_32494_32509[(1)] = (4));

} else {
var statearr_32495_32510 = state_32489__$1;
(statearr_32495_32510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (3))){
var inst_32487 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else {
if((state_val_32490 === (4))){
var inst_32472 = (state_32489[(10)]);
var inst_32477 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32472);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(7),inst_32477);
} else {
if((state_val_32490 === (5))){
var inst_32483 = cljs.core.async.close_BANG_.call(null,out);
var state_32489__$1 = state_32489;
var statearr_32496_32511 = state_32489__$1;
(statearr_32496_32511[(2)] = inst_32483);

(statearr_32496_32511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (6))){
var inst_32485 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32497_32512 = state_32489__$1;
(statearr_32497_32512[(2)] = inst_32485);

(statearr_32497_32512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (7))){
var inst_32473 = (state_32489[(11)]);
var inst_32479 = (state_32489[(2)]);
var inst_32480 = cljs.core.async.put_BANG_.call(null,out,inst_32479);
var inst_32466 = inst_32473;
var state_32489__$1 = (function (){var statearr_32498 = state_32489;
(statearr_32498[(9)] = inst_32466);

(statearr_32498[(12)] = inst_32480);

return statearr_32498;
})();
var statearr_32499_32513 = state_32489__$1;
(statearr_32499_32513[(2)] = null);

(statearr_32499_32513[(1)] = (2));


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
});})(c__29242__auto___32507,out))
;
return ((function (switch__29128__auto__,c__29242__auto___32507,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0 = (function (){
var statearr_32503 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32503[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__);

(statearr_32503[(1)] = (1));

return statearr_32503;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1 = (function (state_32489){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_32489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e32504){if((e32504 instanceof Object)){
var ex__29132__auto__ = e32504;
var statearr_32505_32514 = state_32489;
(statearr_32505_32514[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32515 = state_32489;
state_32489 = G__32515;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto___32507,out))
})();
var state__29244__auto__ = (function (){var statearr_32506 = f__29243__auto__.call(null);
(statearr_32506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto___32507);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto___32507,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32516,opts){
var map__32520 = p__32516;
var map__32520__$1 = ((((!((map__32520 == null)))?((((map__32520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32520):map__32520);
var eval_body__$1 = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32522){var e = e32522;
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
return (function (p1__32523_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32523_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32532){
var vec__32533 = p__32532;
var k = cljs.core.nth.call(null,vec__32533,(0),null);
var v = cljs.core.nth.call(null,vec__32533,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32536){
var vec__32537 = p__32536;
var k = cljs.core.nth.call(null,vec__32537,(0),null);
var v = cljs.core.nth.call(null,vec__32537,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32543,p__32544){
var map__32791 = p__32543;
var map__32791__$1 = ((((!((map__32791 == null)))?((((map__32791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);
var opts = map__32791__$1;
var before_jsload = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32792 = p__32544;
var map__32792__$1 = ((((!((map__32792 == null)))?((((map__32792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);
var msg = map__32792__$1;
var files = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29243__auto__ = (function (){var switch__29128__auto__ = ((function (c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32945){
var state_val_32946 = (state_32945[(1)]);
if((state_val_32946 === (7))){
var inst_32806 = (state_32945[(7)]);
var inst_32807 = (state_32945[(8)]);
var inst_32809 = (state_32945[(9)]);
var inst_32808 = (state_32945[(10)]);
var inst_32814 = cljs.core._nth.call(null,inst_32807,inst_32809);
var inst_32815 = figwheel.client.file_reloading.eval_body.call(null,inst_32814,opts);
var inst_32816 = (inst_32809 + (1));
var tmp32947 = inst_32806;
var tmp32948 = inst_32807;
var tmp32949 = inst_32808;
var inst_32806__$1 = tmp32947;
var inst_32807__$1 = tmp32948;
var inst_32808__$1 = tmp32949;
var inst_32809__$1 = inst_32816;
var state_32945__$1 = (function (){var statearr_32950 = state_32945;
(statearr_32950[(7)] = inst_32806__$1);

(statearr_32950[(8)] = inst_32807__$1);

(statearr_32950[(11)] = inst_32815);

(statearr_32950[(9)] = inst_32809__$1);

(statearr_32950[(10)] = inst_32808__$1);

return statearr_32950;
})();
var statearr_32951_33037 = state_32945__$1;
(statearr_32951_33037[(2)] = null);

(statearr_32951_33037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (20))){
var inst_32849 = (state_32945[(12)]);
var inst_32857 = figwheel.client.file_reloading.sort_files.call(null,inst_32849);
var state_32945__$1 = state_32945;
var statearr_32952_33038 = state_32945__$1;
(statearr_32952_33038[(2)] = inst_32857);

(statearr_32952_33038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (27))){
var state_32945__$1 = state_32945;
var statearr_32953_33039 = state_32945__$1;
(statearr_32953_33039[(2)] = null);

(statearr_32953_33039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (1))){
var inst_32798 = (state_32945[(13)]);
var inst_32795 = before_jsload.call(null,files);
var inst_32796 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32797 = (function (){return ((function (inst_32798,inst_32795,inst_32796,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32540_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32540_SHARP_);
});
;})(inst_32798,inst_32795,inst_32796,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32798__$1 = cljs.core.filter.call(null,inst_32797,files);
var inst_32799 = cljs.core.not_empty.call(null,inst_32798__$1);
var state_32945__$1 = (function (){var statearr_32954 = state_32945;
(statearr_32954[(13)] = inst_32798__$1);

(statearr_32954[(14)] = inst_32795);

(statearr_32954[(15)] = inst_32796);

return statearr_32954;
})();
if(cljs.core.truth_(inst_32799)){
var statearr_32955_33040 = state_32945__$1;
(statearr_32955_33040[(1)] = (2));

} else {
var statearr_32956_33041 = state_32945__$1;
(statearr_32956_33041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (24))){
var state_32945__$1 = state_32945;
var statearr_32957_33042 = state_32945__$1;
(statearr_32957_33042[(2)] = null);

(statearr_32957_33042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (39))){
var inst_32899 = (state_32945[(16)]);
var state_32945__$1 = state_32945;
var statearr_32958_33043 = state_32945__$1;
(statearr_32958_33043[(2)] = inst_32899);

(statearr_32958_33043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (46))){
var inst_32940 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32959_33044 = state_32945__$1;
(statearr_32959_33044[(2)] = inst_32940);

(statearr_32959_33044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (4))){
var inst_32843 = (state_32945[(2)]);
var inst_32844 = cljs.core.List.EMPTY;
var inst_32845 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32844);
var inst_32846 = (function (){return ((function (inst_32843,inst_32844,inst_32845,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32541_SHARP_){
var and__26582__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32541_SHARP_);
if(cljs.core.truth_(and__26582__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32541_SHARP_));
} else {
return and__26582__auto__;
}
});
;})(inst_32843,inst_32844,inst_32845,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32847 = cljs.core.filter.call(null,inst_32846,files);
var inst_32848 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32849 = cljs.core.concat.call(null,inst_32847,inst_32848);
var state_32945__$1 = (function (){var statearr_32960 = state_32945;
(statearr_32960[(12)] = inst_32849);

(statearr_32960[(17)] = inst_32843);

(statearr_32960[(18)] = inst_32845);

return statearr_32960;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32961_33045 = state_32945__$1;
(statearr_32961_33045[(1)] = (16));

} else {
var statearr_32962_33046 = state_32945__$1;
(statearr_32962_33046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (15))){
var inst_32833 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32963_33047 = state_32945__$1;
(statearr_32963_33047[(2)] = inst_32833);

(statearr_32963_33047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (21))){
var inst_32859 = (state_32945[(19)]);
var inst_32859__$1 = (state_32945[(2)]);
var inst_32860 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32859__$1);
var state_32945__$1 = (function (){var statearr_32964 = state_32945;
(statearr_32964[(19)] = inst_32859__$1);

return statearr_32964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32945__$1,(22),inst_32860);
} else {
if((state_val_32946 === (31))){
var inst_32943 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32945__$1,inst_32943);
} else {
if((state_val_32946 === (32))){
var inst_32899 = (state_32945[(16)]);
var inst_32904 = inst_32899.cljs$lang$protocol_mask$partition0$;
var inst_32905 = (inst_32904 & (64));
var inst_32906 = inst_32899.cljs$core$ISeq$;
var inst_32907 = (inst_32905) || (inst_32906);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32907)){
var statearr_32965_33048 = state_32945__$1;
(statearr_32965_33048[(1)] = (35));

} else {
var statearr_32966_33049 = state_32945__$1;
(statearr_32966_33049[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (40))){
var inst_32920 = (state_32945[(20)]);
var inst_32919 = (state_32945[(2)]);
var inst_32920__$1 = cljs.core.get.call(null,inst_32919,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32921 = cljs.core.get.call(null,inst_32919,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32922 = cljs.core.not_empty.call(null,inst_32920__$1);
var state_32945__$1 = (function (){var statearr_32967 = state_32945;
(statearr_32967[(21)] = inst_32921);

(statearr_32967[(20)] = inst_32920__$1);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32922)){
var statearr_32968_33050 = state_32945__$1;
(statearr_32968_33050[(1)] = (41));

} else {
var statearr_32969_33051 = state_32945__$1;
(statearr_32969_33051[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (33))){
var state_32945__$1 = state_32945;
var statearr_32970_33052 = state_32945__$1;
(statearr_32970_33052[(2)] = false);

(statearr_32970_33052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (13))){
var inst_32819 = (state_32945[(22)]);
var inst_32823 = cljs.core.chunk_first.call(null,inst_32819);
var inst_32824 = cljs.core.chunk_rest.call(null,inst_32819);
var inst_32825 = cljs.core.count.call(null,inst_32823);
var inst_32806 = inst_32824;
var inst_32807 = inst_32823;
var inst_32808 = inst_32825;
var inst_32809 = (0);
var state_32945__$1 = (function (){var statearr_32971 = state_32945;
(statearr_32971[(7)] = inst_32806);

(statearr_32971[(8)] = inst_32807);

(statearr_32971[(9)] = inst_32809);

(statearr_32971[(10)] = inst_32808);

return statearr_32971;
})();
var statearr_32972_33053 = state_32945__$1;
(statearr_32972_33053[(2)] = null);

(statearr_32972_33053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (22))){
var inst_32859 = (state_32945[(19)]);
var inst_32867 = (state_32945[(23)]);
var inst_32863 = (state_32945[(24)]);
var inst_32862 = (state_32945[(25)]);
var inst_32862__$1 = (state_32945[(2)]);
var inst_32863__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32862__$1);
var inst_32864 = (function (){var all_files = inst_32859;
var res_SINGLEQUOTE_ = inst_32862__$1;
var res = inst_32863__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32859,inst_32867,inst_32863,inst_32862,inst_32862__$1,inst_32863__$1,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32542_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32542_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32859,inst_32867,inst_32863,inst_32862,inst_32862__$1,inst_32863__$1,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32865 = cljs.core.filter.call(null,inst_32864,inst_32862__$1);
var inst_32866 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32867__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32866);
var inst_32868 = cljs.core.not_empty.call(null,inst_32867__$1);
var state_32945__$1 = (function (){var statearr_32973 = state_32945;
(statearr_32973[(23)] = inst_32867__$1);

(statearr_32973[(24)] = inst_32863__$1);

(statearr_32973[(25)] = inst_32862__$1);

(statearr_32973[(26)] = inst_32865);

return statearr_32973;
})();
if(cljs.core.truth_(inst_32868)){
var statearr_32974_33054 = state_32945__$1;
(statearr_32974_33054[(1)] = (23));

} else {
var statearr_32975_33055 = state_32945__$1;
(statearr_32975_33055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (36))){
var state_32945__$1 = state_32945;
var statearr_32976_33056 = state_32945__$1;
(statearr_32976_33056[(2)] = false);

(statearr_32976_33056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (41))){
var inst_32920 = (state_32945[(20)]);
var inst_32924 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32925 = cljs.core.map.call(null,inst_32924,inst_32920);
var inst_32926 = cljs.core.pr_str.call(null,inst_32925);
var inst_32927 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32926)].join('');
var inst_32928 = figwheel.client.utils.log.call(null,inst_32927);
var state_32945__$1 = state_32945;
var statearr_32977_33057 = state_32945__$1;
(statearr_32977_33057[(2)] = inst_32928);

(statearr_32977_33057[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (43))){
var inst_32921 = (state_32945[(21)]);
var inst_32931 = (state_32945[(2)]);
var inst_32932 = cljs.core.not_empty.call(null,inst_32921);
var state_32945__$1 = (function (){var statearr_32978 = state_32945;
(statearr_32978[(27)] = inst_32931);

return statearr_32978;
})();
if(cljs.core.truth_(inst_32932)){
var statearr_32979_33058 = state_32945__$1;
(statearr_32979_33058[(1)] = (44));

} else {
var statearr_32980_33059 = state_32945__$1;
(statearr_32980_33059[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (29))){
var inst_32899 = (state_32945[(16)]);
var inst_32859 = (state_32945[(19)]);
var inst_32867 = (state_32945[(23)]);
var inst_32863 = (state_32945[(24)]);
var inst_32862 = (state_32945[(25)]);
var inst_32865 = (state_32945[(26)]);
var inst_32895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32898 = (function (){var all_files = inst_32859;
var res_SINGLEQUOTE_ = inst_32862;
var res = inst_32863;
var files_not_loaded = inst_32865;
var dependencies_that_loaded = inst_32867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32899,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32895,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32897){
var map__32981 = p__32897;
var map__32981__$1 = ((((!((map__32981 == null)))?((((map__32981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32981):map__32981);
var namespace = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32899,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32895,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32899__$1 = cljs.core.group_by.call(null,inst_32898,inst_32865);
var inst_32901 = (inst_32899__$1 == null);
var inst_32902 = cljs.core.not.call(null,inst_32901);
var state_32945__$1 = (function (){var statearr_32983 = state_32945;
(statearr_32983[(16)] = inst_32899__$1);

(statearr_32983[(28)] = inst_32895);

return statearr_32983;
})();
if(inst_32902){
var statearr_32984_33060 = state_32945__$1;
(statearr_32984_33060[(1)] = (32));

} else {
var statearr_32985_33061 = state_32945__$1;
(statearr_32985_33061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (44))){
var inst_32921 = (state_32945[(21)]);
var inst_32934 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32921);
var inst_32935 = cljs.core.pr_str.call(null,inst_32934);
var inst_32936 = [cljs.core.str("not required: "),cljs.core.str(inst_32935)].join('');
var inst_32937 = figwheel.client.utils.log.call(null,inst_32936);
var state_32945__$1 = state_32945;
var statearr_32986_33062 = state_32945__$1;
(statearr_32986_33062[(2)] = inst_32937);

(statearr_32986_33062[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (6))){
var inst_32840 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32987_33063 = state_32945__$1;
(statearr_32987_33063[(2)] = inst_32840);

(statearr_32987_33063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (28))){
var inst_32865 = (state_32945[(26)]);
var inst_32892 = (state_32945[(2)]);
var inst_32893 = cljs.core.not_empty.call(null,inst_32865);
var state_32945__$1 = (function (){var statearr_32988 = state_32945;
(statearr_32988[(29)] = inst_32892);

return statearr_32988;
})();
if(cljs.core.truth_(inst_32893)){
var statearr_32989_33064 = state_32945__$1;
(statearr_32989_33064[(1)] = (29));

} else {
var statearr_32990_33065 = state_32945__$1;
(statearr_32990_33065[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (25))){
var inst_32863 = (state_32945[(24)]);
var inst_32879 = (state_32945[(2)]);
var inst_32880 = cljs.core.not_empty.call(null,inst_32863);
var state_32945__$1 = (function (){var statearr_32991 = state_32945;
(statearr_32991[(30)] = inst_32879);

return statearr_32991;
})();
if(cljs.core.truth_(inst_32880)){
var statearr_32992_33066 = state_32945__$1;
(statearr_32992_33066[(1)] = (26));

} else {
var statearr_32993_33067 = state_32945__$1;
(statearr_32993_33067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (34))){
var inst_32914 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32914)){
var statearr_32994_33068 = state_32945__$1;
(statearr_32994_33068[(1)] = (38));

} else {
var statearr_32995_33069 = state_32945__$1;
(statearr_32995_33069[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (17))){
var state_32945__$1 = state_32945;
var statearr_32996_33070 = state_32945__$1;
(statearr_32996_33070[(2)] = recompile_dependents);

(statearr_32996_33070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (3))){
var state_32945__$1 = state_32945;
var statearr_32997_33071 = state_32945__$1;
(statearr_32997_33071[(2)] = null);

(statearr_32997_33071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (12))){
var inst_32836 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32998_33072 = state_32945__$1;
(statearr_32998_33072[(2)] = inst_32836);

(statearr_32998_33072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (2))){
var inst_32798 = (state_32945[(13)]);
var inst_32805 = cljs.core.seq.call(null,inst_32798);
var inst_32806 = inst_32805;
var inst_32807 = null;
var inst_32808 = (0);
var inst_32809 = (0);
var state_32945__$1 = (function (){var statearr_32999 = state_32945;
(statearr_32999[(7)] = inst_32806);

(statearr_32999[(8)] = inst_32807);

(statearr_32999[(9)] = inst_32809);

(statearr_32999[(10)] = inst_32808);

return statearr_32999;
})();
var statearr_33000_33073 = state_32945__$1;
(statearr_33000_33073[(2)] = null);

(statearr_33000_33073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (23))){
var inst_32859 = (state_32945[(19)]);
var inst_32867 = (state_32945[(23)]);
var inst_32863 = (state_32945[(24)]);
var inst_32862 = (state_32945[(25)]);
var inst_32865 = (state_32945[(26)]);
var inst_32870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32872 = (function (){var all_files = inst_32859;
var res_SINGLEQUOTE_ = inst_32862;
var res = inst_32863;
var files_not_loaded = inst_32865;
var dependencies_that_loaded = inst_32867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32870,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32871){
var map__33001 = p__32871;
var map__33001__$1 = ((((!((map__33001 == null)))?((((map__33001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001):map__33001);
var request_url = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32870,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32873 = cljs.core.reverse.call(null,inst_32867);
var inst_32874 = cljs.core.map.call(null,inst_32872,inst_32873);
var inst_32875 = cljs.core.pr_str.call(null,inst_32874);
var inst_32876 = figwheel.client.utils.log.call(null,inst_32875);
var state_32945__$1 = (function (){var statearr_33003 = state_32945;
(statearr_33003[(31)] = inst_32870);

return statearr_33003;
})();
var statearr_33004_33074 = state_32945__$1;
(statearr_33004_33074[(2)] = inst_32876);

(statearr_33004_33074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (35))){
var state_32945__$1 = state_32945;
var statearr_33005_33075 = state_32945__$1;
(statearr_33005_33075[(2)] = true);

(statearr_33005_33075[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (19))){
var inst_32849 = (state_32945[(12)]);
var inst_32855 = figwheel.client.file_reloading.expand_files.call(null,inst_32849);
var state_32945__$1 = state_32945;
var statearr_33006_33076 = state_32945__$1;
(statearr_33006_33076[(2)] = inst_32855);

(statearr_33006_33076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (11))){
var state_32945__$1 = state_32945;
var statearr_33007_33077 = state_32945__$1;
(statearr_33007_33077[(2)] = null);

(statearr_33007_33077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (9))){
var inst_32838 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_33008_33078 = state_32945__$1;
(statearr_33008_33078[(2)] = inst_32838);

(statearr_33008_33078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (5))){
var inst_32809 = (state_32945[(9)]);
var inst_32808 = (state_32945[(10)]);
var inst_32811 = (inst_32809 < inst_32808);
var inst_32812 = inst_32811;
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32812)){
var statearr_33009_33079 = state_32945__$1;
(statearr_33009_33079[(1)] = (7));

} else {
var statearr_33010_33080 = state_32945__$1;
(statearr_33010_33080[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (14))){
var inst_32819 = (state_32945[(22)]);
var inst_32828 = cljs.core.first.call(null,inst_32819);
var inst_32829 = figwheel.client.file_reloading.eval_body.call(null,inst_32828,opts);
var inst_32830 = cljs.core.next.call(null,inst_32819);
var inst_32806 = inst_32830;
var inst_32807 = null;
var inst_32808 = (0);
var inst_32809 = (0);
var state_32945__$1 = (function (){var statearr_33011 = state_32945;
(statearr_33011[(7)] = inst_32806);

(statearr_33011[(8)] = inst_32807);

(statearr_33011[(9)] = inst_32809);

(statearr_33011[(10)] = inst_32808);

(statearr_33011[(32)] = inst_32829);

return statearr_33011;
})();
var statearr_33012_33081 = state_32945__$1;
(statearr_33012_33081[(2)] = null);

(statearr_33012_33081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (45))){
var state_32945__$1 = state_32945;
var statearr_33013_33082 = state_32945__$1;
(statearr_33013_33082[(2)] = null);

(statearr_33013_33082[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (26))){
var inst_32859 = (state_32945[(19)]);
var inst_32867 = (state_32945[(23)]);
var inst_32863 = (state_32945[(24)]);
var inst_32862 = (state_32945[(25)]);
var inst_32865 = (state_32945[(26)]);
var inst_32882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32884 = (function (){var all_files = inst_32859;
var res_SINGLEQUOTE_ = inst_32862;
var res = inst_32863;
var files_not_loaded = inst_32865;
var dependencies_that_loaded = inst_32867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32882,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32883){
var map__33014 = p__32883;
var map__33014__$1 = ((((!((map__33014 == null)))?((((map__33014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33014):map__33014);
var namespace = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32882,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32885 = cljs.core.map.call(null,inst_32884,inst_32863);
var inst_32886 = cljs.core.pr_str.call(null,inst_32885);
var inst_32887 = figwheel.client.utils.log.call(null,inst_32886);
var inst_32888 = (function (){var all_files = inst_32859;
var res_SINGLEQUOTE_ = inst_32862;
var res = inst_32863;
var files_not_loaded = inst_32865;
var dependencies_that_loaded = inst_32867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32882,inst_32884,inst_32885,inst_32886,inst_32887,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32859,inst_32867,inst_32863,inst_32862,inst_32865,inst_32882,inst_32884,inst_32885,inst_32886,inst_32887,state_val_32946,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32889 = setTimeout(inst_32888,(10));
var state_32945__$1 = (function (){var statearr_33016 = state_32945;
(statearr_33016[(33)] = inst_32882);

(statearr_33016[(34)] = inst_32887);

return statearr_33016;
})();
var statearr_33017_33083 = state_32945__$1;
(statearr_33017_33083[(2)] = inst_32889);

(statearr_33017_33083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (16))){
var state_32945__$1 = state_32945;
var statearr_33018_33084 = state_32945__$1;
(statearr_33018_33084[(2)] = reload_dependents);

(statearr_33018_33084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (38))){
var inst_32899 = (state_32945[(16)]);
var inst_32916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32899);
var state_32945__$1 = state_32945;
var statearr_33019_33085 = state_32945__$1;
(statearr_33019_33085[(2)] = inst_32916);

(statearr_33019_33085[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (30))){
var state_32945__$1 = state_32945;
var statearr_33020_33086 = state_32945__$1;
(statearr_33020_33086[(2)] = null);

(statearr_33020_33086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (10))){
var inst_32819 = (state_32945[(22)]);
var inst_32821 = cljs.core.chunked_seq_QMARK_.call(null,inst_32819);
var state_32945__$1 = state_32945;
if(inst_32821){
var statearr_33021_33087 = state_32945__$1;
(statearr_33021_33087[(1)] = (13));

} else {
var statearr_33022_33088 = state_32945__$1;
(statearr_33022_33088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (18))){
var inst_32853 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32853)){
var statearr_33023_33089 = state_32945__$1;
(statearr_33023_33089[(1)] = (19));

} else {
var statearr_33024_33090 = state_32945__$1;
(statearr_33024_33090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (42))){
var state_32945__$1 = state_32945;
var statearr_33025_33091 = state_32945__$1;
(statearr_33025_33091[(2)] = null);

(statearr_33025_33091[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (37))){
var inst_32911 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_33026_33092 = state_32945__$1;
(statearr_33026_33092[(2)] = inst_32911);

(statearr_33026_33092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (8))){
var inst_32806 = (state_32945[(7)]);
var inst_32819 = (state_32945[(22)]);
var inst_32819__$1 = cljs.core.seq.call(null,inst_32806);
var state_32945__$1 = (function (){var statearr_33027 = state_32945;
(statearr_33027[(22)] = inst_32819__$1);

return statearr_33027;
})();
if(inst_32819__$1){
var statearr_33028_33093 = state_32945__$1;
(statearr_33028_33093[(1)] = (10));

} else {
var statearr_33029_33094 = state_32945__$1;
(statearr_33029_33094[(1)] = (11));

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
});})(c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29128__auto__,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0 = (function (){
var statearr_33033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33033[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__);

(statearr_33033[(1)] = (1));

return statearr_33033;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1 = (function (state_32945){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_32945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e33034){if((e33034 instanceof Object)){
var ex__29132__auto__ = e33034;
var statearr_33035_33095 = state_32945;
(statearr_33035_33095[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_32945;
state_32945 = G__33096;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__ = function(state_32945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1.call(this,state_32945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__;
})()
;})(switch__29128__auto__,c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29244__auto__ = (function (){var statearr_33036 = f__29243__auto__.call(null);
(statearr_33036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29242__auto__);

return statearr_33036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29244__auto__);
});})(c__29242__auto__,map__32791,map__32791__$1,opts,before_jsload,on_jsload,reload_dependents,map__32792,map__32792__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29242__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33099,link){
var map__33102 = p__33099;
var map__33102__$1 = ((((!((map__33102 == null)))?((((map__33102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);
var file = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__33102,map__33102__$1,file){
return (function (p1__33097_SHARP_,p2__33098_SHARP_){
if(cljs.core._EQ_.call(null,p1__33097_SHARP_,p2__33098_SHARP_)){
return p1__33097_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__33102,map__33102__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33108){
var map__33109 = p__33108;
var map__33109__$1 = ((((!((map__33109 == null)))?((((map__33109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33109):map__33109);
var match_length = cljs.core.get.call(null,map__33109__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33109__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33104_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33104_SHARP_);
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
var args33111 = [];
var len__27777__auto___33114 = arguments.length;
var i__27778__auto___33115 = (0);
while(true){
if((i__27778__auto___33115 < len__27777__auto___33114)){
args33111.push((arguments[i__27778__auto___33115]));

var G__33116 = (i__27778__auto___33115 + (1));
i__27778__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var G__33113 = args33111.length;
switch (G__33113) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33111.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33118_SHARP_,p2__33119_SHARP_){
return cljs.core.assoc.call(null,p1__33118_SHARP_,cljs.core.get.call(null,p2__33119_SHARP_,key),p2__33119_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33120){
var map__33123 = p__33120;
var map__33123__$1 = ((((!((map__33123 == null)))?((((map__33123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33123):map__33123);
var f_data = map__33123__$1;
var file = cljs.core.get.call(null,map__33123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33125,p__33126){
var map__33135 = p__33125;
var map__33135__$1 = ((((!((map__33135 == null)))?((((map__33135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33135):map__33135);
var opts = map__33135__$1;
var on_cssload = cljs.core.get.call(null,map__33135__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33136 = p__33126;
var map__33136__$1 = ((((!((map__33136 == null)))?((((map__33136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33136):map__33136);
var files_msg = map__33136__$1;
var files = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33139_33143 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33140_33144 = null;
var count__33141_33145 = (0);
var i__33142_33146 = (0);
while(true){
if((i__33142_33146 < count__33141_33145)){
var f_33147 = cljs.core._nth.call(null,chunk__33140_33144,i__33142_33146);
figwheel.client.file_reloading.reload_css_file.call(null,f_33147);

var G__33148 = seq__33139_33143;
var G__33149 = chunk__33140_33144;
var G__33150 = count__33141_33145;
var G__33151 = (i__33142_33146 + (1));
seq__33139_33143 = G__33148;
chunk__33140_33144 = G__33149;
count__33141_33145 = G__33150;
i__33142_33146 = G__33151;
continue;
} else {
var temp__6753__auto___33152 = cljs.core.seq.call(null,seq__33139_33143);
if(temp__6753__auto___33152){
var seq__33139_33153__$1 = temp__6753__auto___33152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33139_33153__$1)){
var c__27497__auto___33154 = cljs.core.chunk_first.call(null,seq__33139_33153__$1);
var G__33155 = cljs.core.chunk_rest.call(null,seq__33139_33153__$1);
var G__33156 = c__27497__auto___33154;
var G__33157 = cljs.core.count.call(null,c__27497__auto___33154);
var G__33158 = (0);
seq__33139_33143 = G__33155;
chunk__33140_33144 = G__33156;
count__33141_33145 = G__33157;
i__33142_33146 = G__33158;
continue;
} else {
var f_33159 = cljs.core.first.call(null,seq__33139_33153__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33159);

var G__33160 = cljs.core.next.call(null,seq__33139_33153__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__33139_33143 = G__33160;
chunk__33140_33144 = G__33161;
count__33141_33145 = G__33162;
i__33142_33146 = G__33163;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33135,map__33135__$1,opts,on_cssload,map__33136,map__33136__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33135,map__33135__$1,opts,on_cssload,map__33136,map__33136__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1492572233381