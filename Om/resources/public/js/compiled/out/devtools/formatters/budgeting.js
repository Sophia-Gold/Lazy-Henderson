// Compiled by ClojureScript 1.9.198 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15002__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__15002__auto__,"add").call(o__15002__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__15002__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__15002__auto__,"delete").call(o__15002__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__15002__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__15002__auto__,"has").call(o__15002__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools$formatters$budgeting$determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools$formatters$budgeting$has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__17964 = data;
var target__15021__auto__ = G__17964;
if(cljs.core.truth_(target__15021__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__17964)].join('')),cljs.core.str("\n"),cljs.core.str("target__15021__auto__")].join('')));
}

goog.object.set(target__15021__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__17964;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_17973 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_17973);
} else {
var seq__17969_17974 = cljs.core.seq.call(null,json_ml);
var chunk__17970_17975 = null;
var count__17971_17976 = (0);
var i__17972_17977 = (0);
while(true){
if((i__17972_17977 < count__17971_17976)){
var item_17978 = cljs.core._nth.call(null,chunk__17970_17975,i__17972_17977);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_17978,new_depth_budget_17973);

var G__17979 = seq__17969_17974;
var G__17980 = chunk__17970_17975;
var G__17981 = count__17971_17976;
var G__17982 = (i__17972_17977 + (1));
seq__17969_17974 = G__17979;
chunk__17970_17975 = G__17980;
count__17971_17976 = G__17981;
i__17972_17977 = G__17982;
continue;
} else {
var temp__6753__auto___17983 = cljs.core.seq.call(null,seq__17969_17974);
if(temp__6753__auto___17983){
var seq__17969_17984__$1 = temp__6753__auto___17983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17969_17984__$1)){
var c__7841__auto___17985 = cljs.core.chunk_first.call(null,seq__17969_17984__$1);
var G__17986 = cljs.core.chunk_rest.call(null,seq__17969_17984__$1);
var G__17987 = c__7841__auto___17985;
var G__17988 = cljs.core.count.call(null,c__7841__auto___17985);
var G__17989 = (0);
seq__17969_17974 = G__17986;
chunk__17970_17975 = G__17987;
count__17971_17976 = G__17988;
i__17972_17977 = G__17989;
continue;
} else {
var item_17990 = cljs.core.first.call(null,seq__17969_17984__$1);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_17990,new_depth_budget_17973);

var G__17991 = cljs.core.next.call(null,seq__17969_17984__$1);
var G__17992 = null;
var G__17993 = (0);
var G__17994 = (0);
seq__17969_17974 = G__17991;
chunk__17970_17975 = G__17992;
count__17971_17976 = G__17993;
i__17972_17977 = G__17994;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__6751__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__6751__auto__)){
var initial_hierarchy_depth_budget = temp__6751__auto__;
var remaining_depth_budget = (function (){var or__6938__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__6938__auto__)){
return or__6938__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1492673033453