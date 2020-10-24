// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__26546_SHARP_){
var k = f.call(null,p1__26546_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26547){
var vec__26548 = p__26547;
var k = cljs.core.nth.call(null,vec__26548,(0),null);
var v = cljs.core.nth.call(null,vec__26548,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26552 = arguments.length;
var i__4737__auto___26553 = (0);
while(true){
if((i__4737__auto___26553 < len__4736__auto___26552)){
args__4742__auto__.push((arguments[i__4737__auto___26553]));

var G__26554 = (i__4737__auto___26553 + (1));
i__4737__auto___26553 = G__26554;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq26551){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26551));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__26557){
var map__26558 = p__26557;
var map__26558__$1 = (((((!((map__26558 == null))))?(((((map__26558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26558):map__26558);
var message = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__26556_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26556_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__26555_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__26555_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__26561){
var map__26562 = p__26561;
var map__26562__$1 = (((((!((map__26562 == null))))?(((((map__26562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26562):map__26562);
var message_data = map__26562__$1;
var message = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__26564 = file_excerpt;
var map__26564__$1 = (((((!((map__26564 == null))))?(((((map__26564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26564):map__26564);
var start_line = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__26565 = cljs.core.split_with.call(null,(function (p1__26560_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__26560_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__26565,(0),null);
var end = cljs.core.nth.call(null,vec__26565,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__26569){
var map__26570 = p__26569;
var map__26570__$1 = (((((!((map__26570 == null))))?(((((map__26570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570):map__26570);
var file = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26572 = "";
var G__26572__$1 = (cljs.core.truth_(file)?[G__26572,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26572);
var G__26572__$2 = (cljs.core.truth_(line)?[G__26572__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26572__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__26572__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26572__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_26627 = (new goog.debug.Console());
var G__26579_26628 = c_26627.getFormatter();
goog.object.set(G__26579_26628,"showAbsoluteTime",false);

goog.object.set(G__26579_26628,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_26627);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__26580 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__26580,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__26580;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_26629 = cljs.core.atom.call(null,(0));
var promise_chain_26630 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_26629) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_26629,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_26630.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__26581 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__26582 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__26582);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__26583 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__26584 = null;
var count__26585 = (0);
var i__26586 = (0);
while(true){
if((i__26586 < count__26585)){
var w = cljs.core._nth.call(null,chunk__26584,i__26586);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26631 = seq__26583;
var G__26632 = chunk__26584;
var G__26633 = count__26585;
var G__26634 = (i__26586 + (1));
seq__26583 = G__26631;
chunk__26584 = G__26632;
count__26585 = G__26633;
i__26586 = G__26634;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26583);
if(temp__5735__auto__){
var seq__26583__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26583__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26583__$1);
var G__26635 = cljs.core.chunk_rest.call(null,seq__26583__$1);
var G__26636 = c__4556__auto__;
var G__26637 = cljs.core.count.call(null,c__4556__auto__);
var G__26638 = (0);
seq__26583 = G__26635;
chunk__26584 = G__26636;
count__26585 = G__26637;
i__26586 = G__26638;
continue;
} else {
var w = cljs.core.first.call(null,seq__26583__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26639 = cljs.core.next.call(null,seq__26583__$1);
var G__26640 = null;
var G__26641 = (0);
var G__26642 = (0);
seq__26583 = G__26639;
chunk__26584 = G__26640;
count__26585 = G__26641;
i__26586 = G__26642;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__26581);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_26630.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__26587 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__26588 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__26588);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__26587);
}}));
} else {
return promise_chain_26630.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26643 = arguments.length;
var i__4737__auto___26644 = (0);
while(true){
if((i__4737__auto___26644 < len__4736__auto___26643)){
args__4742__auto__.push((arguments[i__4737__auto___26644]));

var G__26645 = (i__4737__auto___26644 + (1));
i__4737__auto___26644 = G__26645;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__26591){
var vec__26592 = p__26591;
var n = cljs.core.nth.call(null,vec__26592,(0),null);
var mdata = cljs.core.nth.call(null,vec__26592,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__26595 = cljs.core.seq.call(null,hooks);
var chunk__26596 = null;
var count__26597 = (0);
var i__26598 = (0);
while(true){
if((i__26598 < count__26597)){
var vec__26605 = cljs.core._nth.call(null,chunk__26596,i__26598);
var n = cljs.core.nth.call(null,vec__26605,(0),null);
var f = cljs.core.nth.call(null,vec__26605,(1),null);
var temp__5733__auto___26646 = cljs.core.reduce.call(null,((function (seq__26595,chunk__26596,count__26597,i__26598,vec__26605,n,f,hooks){
return (function (p1__26573_SHARP_,p2__26574_SHARP_){
if(cljs.core.truth_(p1__26573_SHARP_)){
return goog.object.get(p1__26573_SHARP_,p2__26574_SHARP_);
} else {
return null;
}
});})(seq__26595,chunk__26596,count__26597,i__26598,vec__26605,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___26646)){
var hook_26647 = temp__5733__auto___26646;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26647,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26648 = seq__26595;
var G__26649 = chunk__26596;
var G__26650 = count__26597;
var G__26651 = (i__26598 + (1));
seq__26595 = G__26648;
chunk__26596 = G__26649;
count__26597 = G__26650;
i__26598 = G__26651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26595);
if(temp__5735__auto__){
var seq__26595__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26595__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26595__$1);
var G__26652 = cljs.core.chunk_rest.call(null,seq__26595__$1);
var G__26653 = c__4556__auto__;
var G__26654 = cljs.core.count.call(null,c__4556__auto__);
var G__26655 = (0);
seq__26595 = G__26652;
chunk__26596 = G__26653;
count__26597 = G__26654;
i__26598 = G__26655;
continue;
} else {
var vec__26608 = cljs.core.first.call(null,seq__26595__$1);
var n = cljs.core.nth.call(null,vec__26608,(0),null);
var f = cljs.core.nth.call(null,vec__26608,(1),null);
var temp__5733__auto___26656 = cljs.core.reduce.call(null,((function (seq__26595,chunk__26596,count__26597,i__26598,vec__26608,n,f,seq__26595__$1,temp__5735__auto__,hooks){
return (function (p1__26573_SHARP_,p2__26574_SHARP_){
if(cljs.core.truth_(p1__26573_SHARP_)){
return goog.object.get(p1__26573_SHARP_,p2__26574_SHARP_);
} else {
return null;
}
});})(seq__26595,chunk__26596,count__26597,i__26598,vec__26608,n,f,seq__26595__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___26656)){
var hook_26657 = temp__5733__auto___26656;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26657,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26658 = cljs.core.next.call(null,seq__26595__$1);
var G__26659 = null;
var G__26660 = (0);
var G__26661 = (0);
seq__26595 = G__26658;
chunk__26596 = G__26659;
count__26597 = G__26660;
i__26598 = G__26661;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq26589){
var G__26590 = cljs.core.first.call(null,seq26589);
var seq26589__$1 = cljs.core.next.call(null,seq26589);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26590,seq26589__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26611){
var vec__26612 = p__26611;
var k = cljs.core.nth.call(null,vec__26612,(0),null);
var v = cljs.core.nth.call(null,vec__26612,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__26575_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__26575_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__26575_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__26576_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__26576_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__26577_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__26577_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__26615_26662 = cljs.core.seq.call(null,to_reload);
var chunk__26616_26663 = null;
var count__26617_26664 = (0);
var i__26618_26665 = (0);
while(true){
if((i__26618_26665 < count__26617_26664)){
var ns_26666 = cljs.core._nth.call(null,chunk__26616_26663,i__26618_26665);
goog.require(cljs.core.name.call(null,ns_26666),true);


var G__26667 = seq__26615_26662;
var G__26668 = chunk__26616_26663;
var G__26669 = count__26617_26664;
var G__26670 = (i__26618_26665 + (1));
seq__26615_26662 = G__26667;
chunk__26616_26663 = G__26668;
count__26617_26664 = G__26669;
i__26618_26665 = G__26670;
continue;
} else {
var temp__5735__auto___26671 = cljs.core.seq.call(null,seq__26615_26662);
if(temp__5735__auto___26671){
var seq__26615_26672__$1 = temp__5735__auto___26671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26615_26672__$1)){
var c__4556__auto___26673 = cljs.core.chunk_first.call(null,seq__26615_26672__$1);
var G__26674 = cljs.core.chunk_rest.call(null,seq__26615_26672__$1);
var G__26675 = c__4556__auto___26673;
var G__26676 = cljs.core.count.call(null,c__4556__auto___26673);
var G__26677 = (0);
seq__26615_26662 = G__26674;
chunk__26616_26663 = G__26675;
count__26617_26664 = G__26676;
i__26618_26665 = G__26677;
continue;
} else {
var ns_26678 = cljs.core.first.call(null,seq__26615_26672__$1);
goog.require(cljs.core.name.call(null,ns_26678),true);


var G__26679 = cljs.core.next.call(null,seq__26615_26672__$1);
var G__26680 = null;
var G__26681 = (0);
var G__26682 = (0);
seq__26615_26662 = G__26679;
chunk__26616_26663 = G__26680;
count__26617_26664 = G__26681;
i__26618_26665 = G__26682;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_26683 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_26683);
} else {
setTimeout(after_reload_fn_26683,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__26619 = cljs.core.seq.call(null,warnings);
var chunk__26620 = null;
var count__26621 = (0);
var i__26622 = (0);
while(true){
if((i__26622 < count__26621)){
var warning = cljs.core._nth.call(null,chunk__26620,i__26622);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__26684 = seq__26619;
var G__26685 = chunk__26620;
var G__26686 = count__26621;
var G__26687 = (i__26622 + (1));
seq__26619 = G__26684;
chunk__26620 = G__26685;
count__26621 = G__26686;
i__26622 = G__26687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26619);
if(temp__5735__auto__){
var seq__26619__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26619__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26619__$1);
var G__26688 = cljs.core.chunk_rest.call(null,seq__26619__$1);
var G__26689 = c__4556__auto__;
var G__26690 = cljs.core.count.call(null,c__4556__auto__);
var G__26691 = (0);
seq__26619 = G__26688;
chunk__26620 = G__26689;
count__26621 = G__26690;
i__26622 = G__26691;
continue;
} else {
var warning = cljs.core.first.call(null,seq__26619__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__26692 = cljs.core.next.call(null,seq__26619__$1);
var G__26693 = null;
var G__26694 = (0);
var G__26695 = (0);
seq__26619 = G__26692;
chunk__26620 = G__26693;
count__26621 = G__26694;
i__26622 = G__26695;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__26623){
var map__26624 = p__26623;
var map__26624__$1 = (((((!((map__26624 == null))))?(((((map__26624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26624):map__26624);
var exception_data = map__26624__$1;
var file = cljs.core.get.call(null,map__26624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__26624__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26624__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__26578_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__26578_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return goog.log.warning(figwheel.core.logger,(function (){var G__26626 = "Compile Exception - ";
var G__26626__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__26626,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__26626);
if(cljs.core.truth_(file)){
return [G__26626__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__26626__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
