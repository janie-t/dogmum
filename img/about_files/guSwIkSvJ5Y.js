if (self.CavalryLogger) { CavalryLogger.start_js(["E4pwf"]); }

__d("OGCollectionAddObject",["csx","cx","AsyncRequest","CSS","DOM","DOMQuery","Form","JSLogger","Parent","ProfileOverviewSection","TidyArbiterMixin","TimelineAppCollection","ge"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=c("JSLogger").create("og_collection_add_object"),k=babelHelpers["extends"]({ADD_PLACEHOLDER:"OGCollectionAddObject/addPlaceholder",NEW_ITEM:"OGCollectionAddObject/newItem",PLACEHOLDER:"OGCollectionAddObject/placeholder",REMOVE_PLACEHOLDER:"OGCollectionAddObject/removePlaceholder",init:function l(m,n,o,p){c("ProfileOverviewSection").callWithSection(p,function(q){this.initImpl(m,n,o,q.getNode(),p,q.id)}.bind(this))},initInReport:function l(m,n,o){var p=c("Parent").bySelector(o,"._w8_");this.initImpl(m,n,o,p,null,null)},initImpl:function l(m,n,o,p,q,r){__p&&__p();var s=c("DOMQuery").scry(p,"._620")[0];if(!s){j.error("grid_not_found",{collection_id:q,section:r,csx:".public/fbTimelineCollectionGrid/root"});return}n.subscribe("select",function(t,u){__p&&__p();if(!u.selected.uid||u.selected.type.indexOf("disabled")!=-1)return;k.inform(k.ADD_PLACEHOLDER,q);var v=s.nextSibling,w=null;if(v&&c("CSS").matchesSelector(v,"._3t3")){c("CSS").hide(s.lastChild);w=s.lastChild}c("TimelineAppCollection").addGenericPlaceholderToCollection(c("Form").serialize(o).collection_token,{entityID:u.selected.uid});k.inform(k.PLACEHOLDER,{grid:s});var x=babelHelpers["extends"]({action:"add",mechanism:"typeahead"},c("Form").serialize(o));new(c("AsyncRequest"))().setURI(m).setData(x).setRelativeTo(s).setErrorHandler(function(y){var z=c("DOM").scry(s,'[data-item="'+u.selected.uid+'"]')[0];if(z)c("DOM").remove(z);k.inform(k.REMOVE_PLACEHOLDER,q);w&&c("CSS").show(w)}).setHandler(function(y){w&&c("DOM").remove(w)}).setFinallyHandler(function(y){k.inform(k.PLACEHOLDER,{grid:s})}).send()})},replaceItem:function l(m,n,o){__p&&__p();var p=c("DOM").scry(m,'div[data-obj="'+n+'"]')[0];if(p){var q=c("Parent").bySelector(p,"._30f");if(q)k.inform(k.REMOVE_PLACEHOLDER,q.id);c("DOM").remove(p.parentNode)}var r=c("DOM").find(m,'[data-item="'+n+'"]._2804');c("DOM").replace(r,o);this.inform(k.NEW_ITEM,{grid:m,newItem:o})},prependItem:function l(m,n){var o=c("DOMQuery").scry(c("ge")(m),"._620")[0];c("DOM").prependContent(o,n);this.inform(k.NEW_ITEM,{grid:o,newItem:n})}},c("TidyArbiterMixin"));f.exports=k}),null);
__d("CollectionsRecommendationViewportTracking",["csx","DOM","ViewportTracking","viewportTrackingBuilder"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=55,l=200;function m(p){return{getDataFromConfig:function q(r,s){s.useBanzai=false},getAllStories:function q(){var r=[].concat(c("DOM").scry(p.control,"._3owb")).concat(c("DOM").scry(p.control,"._5jvf")).concat(c("DOM").scry(p.control,"._3cxw"));return r},getStoryID:function q(r){var s=JSON.parse(r.getAttribute("data-gt"));return s&&s.token},getDataToLog:function q(r){var s=r.getAttribute("data-gt"),t=Object.assign(s?JSON.parse(s):{},{evt:k});return{gt:t}}}}i=babelHelpers.inherits(n,c("ViewportTracking"));j=i&&i.prototype;n.prototype.cleanup=function(){o.clearSingleton();j.cleanup.call(this)};function n(){i.apply(this,arguments)}var o=c("viewportTrackingBuilder")(function(p){p.record_delay=l;var q=new n(m(p));q.init(p);return q});f.exports=o}),null);
__d("TimelineCollectionAddRecommendation",["csx","cx","AppSectionCurationState","AsyncRequest","AsyncResponse","CollectionsRecommendationViewportTracking","CSS","DataStore","DOM","Event","OGCollectionAddObject","OnVisible","Parent","ProfileOverviewSection","ProfileTabUtils","TimelineAppCollection","TimelineAppSection","TimelineAppSectionCuration","TriggerablePageletLoader","$","tidyEvent"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j={},k="_5737",l=250;c("OGCollectionAddObject").subscribe(c("OGCollectionAddObject").ADD_PLACEHOLDER,function(u,v){c("TimelineAppCollection").incrementCount(v)});c("OGCollectionAddObject").subscribe(c("OGCollectionAddObject").REMOVE_PLACEHOLDER,function(u,v){c("TimelineAppCollection").decrementCount(v)});function m(u){var v=c("DOM").scry(u,"._3owb")[0];if(v)return v.getAttribute("data-obj")}function n(u,v){if(v){var w=v.nextSibling;w&&r(w);j[u].carousel.removeItem(v)}j[u].carousel.refresh()}function o(u,v){var w=[],x=j[u].carousel.getVisibleNodes(),y=m(v);for(var z=0;z<x.length;++z){var A=m(x[z]);if(y===A)break;if(A)w.push(A)}return w}function p(u){var v=[],w=j[u].carousel.getVisibleNodes(),x=j[u].carousel.getVisibleNodesMax();for(var y=1;y<x-1;y++){if(y===w.lentgh)break;var z=m(w[y]);if(z)v.push(z)}return v}function q(u,v){var w=o(u,v);n(u,v);return w}function r(u){c("CSS").addClass(u,"_42fn");var v=c("Event").listen(u,"mouseover",function(){c("CSS").removeClass(u,"_42fn");v.remove()})}function s(u){__p&&__p();var v=j[u];if(v.filled)return;var w=c("ProfileTabUtils").getIDForSectionKey(v.data.sk);c("ProfileOverviewSection").callWithSection(w,function(x){var y=x.getActiveCollection().getToken(),z=c("TimelineAppSectionCuration").getSectionState(w);if(y==v.collectionToken&&z===c("AppSectionCurationState").showItems&&v.items.length>0){v.filled=true;v.carousel.addItems(v.items)}})}var t={addTriggerLoader:function u(v,w,x){new(c("TriggerablePageletLoader"))({controller:"TimelineAppCollectionRecommendationPagelet",data:x,node:v,options:{crossPage:1,jsNonblock:1}},[{node:w,type:c("TriggerablePageletLoader").TRIGGER_ONVISIBLE}])},removeItemsByObjectIDs:function u(v,w){__p&&__p();var x=j[w];if(!x)return;var y=j[w].carousel.getNode();v.forEach(function(z){var A=c("DOM").scry(y,'[data-obj="'+z+'"]')[0];if(A){var B=c("Parent").bySelector(A,"._58rc");q(w,B)}})},getPreviousItemIDs:function u(v,w){return o(v,w)},getPageletID:function u(v){return"pagelet_recommendation_"+v.split(":")[2]},init:function u(v,w,x,y){__p&&__p();var z=j[v]={carousel:w,collectionToken:x.collection_token,data:x,isFirst:true,showPlusButtonItem:y.items[0],items:y.items,postUri:y.post_uri,removeUri:y.remove_uri,nextLinkData:y.next_link_data,filled:y.filled,headerPageletID:y.header_pagelet_id,viewportTracking:c("CollectionsRecommendationViewportTracking").factory({control:w.getNode()})};new(c("OnVisible"))(z.carousel.getNode(),function(){var B=function B(){s(v)};c("TimelineAppSection").subscribe("changeCollection",B);c("TimelineAppSectionCuration").register(c("ProfileTabUtils").getIDForSectionKey(x.sk),B);B()},true,0);var A=c("Event").listen(z.carousel.getNode(),"mouseenter",function(B){A.remove();if(z.showPlusButtonItem)c("CSS").removeClass(z.showPlusButtonItem,k)});c("tidyEvent")([z.carousel.subscribe("needsitems",t.reloadRecommendation.bind(null,z)),z.carousel.subscribe("refreshed",z.viewportTracking.fireTimer.bind(z.viewportTracking)),z.carousel.subscribe("lastelementremoved",function(B){c("TimelineAppSectionCuration").informState(c("AppSectionCurationState").hide,x.header_pagelet_id);setTimeout(function(){c("TimelineAppCollection").switchToNullStateCurationContent(x.collection_token)},l)})]);c("tidyEvent")(c("Event").listen(z.carousel.getNextLink(),"mousedown",function(B){z.nextLinkData.rec_list_items=p(v);z.carousel.getNextLink().setAttribute("data-gt",JSON.stringify(z.nextLinkData))}));c("tidyEvent")(c("Event").listen(z.carousel.getNode(),"click",function(B){__p&&__p();var C,D=c("Parent").byTag(B.getTarget(),"a");if(!D)return;var E="_gx8",F="_vfm",G="_4-k4",H=c("CSS").hasClass(D,E)||c("CSS").hasClass(D,F),I=!H&&c("CSS").hasClass(D,G);if(H||I)(function(){__p&&__p();var J=c("Parent").bySelector(D,"._58rc"),K=c("DOM").find(J,"._3owb"),L=K.getAttribute("data-obj"),M=JSON.parse(c("DataStore").get(K,"post",null)),N=q(v,J);if(H){c("TimelineAppCollection").addGenericPlaceholderToCollection(z.collectionToken,{entityID:L});var O=z.isFirst||0;delete z.isFirst;new(c("AsyncRequest"))(z.postUri).setData(babelHelpers["extends"]({action:"add",item_id:L,ignored_item_ids:N,is_first:O,underlying_entity_id:L,log_feedback:Number(Object.prototype.hasOwnProperty.call(x.taste_items_ids,L))},M)).setErrorHandler(function(P){c("AsyncResponse").defaultErrorHandler(P);c("TimelineAppCollection").removePlaceholderFromCollection(z.collectionToken,L)}).send();B.prevent()}else new(c("AsyncRequest"))(z.removeUri).setData(babelHelpers["extends"]({objectid:L,ignored_item_ids:N},M)).send()})()}))},reloadRecommendation:function u(v){if(!v.asyncing&&v.filled)v.asyncing=new(c("AsyncRequest"))("/ajax/open_graph/recommendation_reload/").setData(v.data).send()},requestSuggestions:function u(v,w){if(!(v in j))return;var x=j[v].data;new(c("AsyncRequest"))("/ajax/open_graph/similar_suggestions/").setData({pagelet_id:v,ogobjectid:w,session_id:x.session_id,collection_token:x.collection_token}).setRelativeTo(c("$")(c("ProfileTabUtils").getIDForSectionKey(x.sk))).setHandler(this.onRequestSuggestionsComplete.bind(this,v)).send()},onRequestSuggestionsComplete:function u(v){c("TimelineAppSectionCuration").refreshState(c("AppSectionCurationState").showItems,c("ProfileTabUtils").getIDForSectionKey(j[v].data.sk))},removeItemFromRecommendations:function u(v,w){return q(v,w)},plusRecommendation:function u(v,w,x,y,z,A){__p&&__p();var B=j[v];c("TimelineAppCollection").addPlaceholderToCollection(z,x);var C=j[w];if(v!=w&&C){var D=c("DOM").scry(C.carousel.getNode(),'[data-obj="'+y+'"]');if(D&&D.length>0){var E=c("Parent").bySelector(D[0],"._58rc");n(w,E)}}var F=null;if(A)F=q(v,x);else F=o(v,x);var G=B.isFirst||0;delete B.isFirst;return{ignored_item_ids:F,is_first:G,session_id:B.sessionID}},populateSuggestionsList:function u(v,w,x,y,z){var A=j[v];A.asyncing=false;if(w.length===0)A.carousel.endCarousel();else{A.data.exclude_ids=x;Object.assign(A.data.taste_items_ids||{},y);A.carousel.addItems(w);A.data.cursor=z}}};f.exports=t}),null);
__d("TimelineCollectionAddTagSuggestItem",["cx","csx","Arbiter","Ease","Parent","DOM","CSS","Animation","TimelineCollectionAddRecommendation"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(k,l,m,n,o){"use strict";__p&&__p();this.$TimelineCollectionAddTagSuggestItem1=l;this.$TimelineCollectionAddTagSuggestItem2=m;this.$TimelineCollectionAddTagSuggestItem3=o;this.$TimelineCollectionAddTagSuggestItem4=c("Parent").byAttribute(l,k);this.$TimelineCollectionAddTagSuggestItem5=c("DOM").scry(l,"._2ca6")[0];this.$TimelineCollectionAddTagSuggestItem6=c("DOM").find(l,"._5epd");this.$TimelineCollectionAddTagSuggestItem7=c("DOM").find(l,"._2ca7");this.$TimelineCollectionAddTagSuggestItem8=c("DOM").find(l,"._2ca8");this.$TimelineCollectionAddTagSuggestItem9=c("DOM").find(l,"._5ep9");n.subscribe("confirm",this.$TimelineCollectionAddTagSuggestItem10.bind(this));n.subscribe("reject",this.$TimelineCollectionAddTagSuggestItem11.bind(this));c("Arbiter").subscribe("PhotoTagger.TAG_SUGGESTION_CONFIRMED/"+this.$TimelineCollectionAddTagSuggestItem3,this.$TimelineCollectionAddTagSuggestItem10.bind(this));c("Arbiter").subscribe("PhotoTagger.TAG_SUGGESTION_REJECTED/"+this.$TimelineCollectionAddTagSuggestItem3,this.$TimelineCollectionAddTagSuggestItem11.bind(this))}j.prototype.$TimelineCollectionAddTagSuggestItem10=function(){"use strict";this.$TimelineCollectionAddTagSuggestItem12();this.$TimelineCollectionAddTagSuggestItem13(this.$TimelineCollectionAddTagSuggestItem6,1,.4,400).go();this.$TimelineCollectionAddTagSuggestItem13(this.$TimelineCollectionAddTagSuggestItem7,0,1,400).go();setTimeout(function(){this.$TimelineCollectionAddTagSuggestItem13(this.$TimelineCollectionAddTagSuggestItem1,1,0,400).checkpoint(1,this.$TimelineCollectionAddTagSuggestItem14.bind(this)).go()}.bind(this),750)};j.prototype.$TimelineCollectionAddTagSuggestItem11=function(){"use strict";this.$TimelineCollectionAddTagSuggestItem12();this.$TimelineCollectionAddTagSuggestItem13(this.$TimelineCollectionAddTagSuggestItem6,1,.4,600).go();this.$TimelineCollectionAddTagSuggestItem13(this.$TimelineCollectionAddTagSuggestItem1,1,0,600).checkpoint(1,this.$TimelineCollectionAddTagSuggestItem14.bind(this)).go()};j.prototype.$TimelineCollectionAddTagSuggestItem12=function(){"use strict";c("CSS").hide(this.$TimelineCollectionAddTagSuggestItem5);c("CSS").hide(this.$TimelineCollectionAddTagSuggestItem8);c("CSS").hide(this.$TimelineCollectionAddTagSuggestItem9);c("CSS").addClass(this.$TimelineCollectionAddTagSuggestItem1,"_2ca5")};j.prototype.$TimelineCollectionAddTagSuggestItem13=function(k,l,m,n){"use strict";return new(c("Animation"))(k).from("opacity",l).to("opacity",m).ease(c("Ease").makePowerInOut(2)).duration(n)};j.prototype.$TimelineCollectionAddTagSuggestItem14=function(){"use strict";c("TimelineCollectionAddRecommendation").removeItemFromRecommendations(this.$TimelineCollectionAddTagSuggestItem2,this.$TimelineCollectionAddTagSuggestItem4)};f.exports=j}),null);
__d("TimelineCollectionAddTagSuggestSelector",["AsyncRequest","ArbiterMixin","tidyEvent","mixin","Event"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function j(k,l,m,n,o,p){"use strict";i.constructor.call(this);this.$TimelineCollectionAddTagSuggestSelector1=k;this.$TimelineCollectionAddTagSuggestSelector2=o;this.$TimelineCollectionAddTagSuggestSelector3=p;c("tidyEvent")(c("Event").listen(k,"click",this.$TimelineCollectionAddTagSuggestSelector4.bind(this,m,"confirm")),c("Event").listen(l,"click",this.$TimelineCollectionAddTagSuggestSelector4.bind(this,n,"reject")))}j.prototype.$TimelineCollectionAddTagSuggestSelector4=function(k,event){"use strict";this.inform(event);new(c("AsyncRequest"))(k).setData(this.$TimelineCollectionAddTagSuggestSelector5(event)).send()};j.prototype.$TimelineCollectionAddTagSuggestSelector5=function(event){"use strict";return event=="confirm"?this.$TimelineCollectionAddTagSuggestSelector2:this.$TimelineCollectionAddTagSuggestSelector3};f.exports=j}),null);
__d("TimelineCollectionUnlikeHandler",["Arbiter","AsyncRequest","CSS","PageLikeConstants","ProfileTabUtils","TimelineAppCollection"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={init:function j(k,l,m){h[k]={buttons:m,collectionToken:l};c("Arbiter").subscribe(c("PageLikeConstants").UNLIKED,this._showUndo);c("Arbiter").subscribe("Collection/removeProfileConnection",this._showUndo)},_showUndo:function j(k,l){var m=h[l.profile_id];if(m){c("CSS").hide(m.buttons);c("TimelineAppCollection").decrementCount(c("ProfileTabUtils").getIDForCollectionToken(m.collectionToken));new(c("AsyncRequest"))("/ajax/timeline/app_collection_item/unlike/fbpage/").setData({collection_token:m.collectionToken,profile_id:l.profile_id}).send();h[l.profile_id]=null}}};f.exports=i}),null);