(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{466:function(t,e,r){"use strict";var n=r(3),a=r.n(n),o=r(4),c=r.n(o),s=function t(){a()(this,t)},i=function(){function t(){a()(this,t)}return c()(t,[{key:"getTemplates",value:function(){return this.templates=this.templates||[],this.templates}}],[{key:"areaFabric",value:function(e){var r=new t;return r.settings=e.settings,r.id=e.id,r.template=new s,r.template.data=e.template?JSON.parse(e.template.data):null,r.template.id=e.template?e.template.id:null,"popups"===e.area_name&&(r.templates=[],e.templates=e.templates||[],e.templates.forEach((function(t){var e=new s;e.data=t?JSON.parse(t.data):null,e.id=t?JSON.parse(t.id):null,e.template_settings=t?t.template_settings:[],r.templates.push(e)}))),r}}]),t}();e.a=i},503:function(t,e,r){var n=r(504);t.exports=function(t,e){if(null==t)return{};var r,a,o=n(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)r=c[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}},504:function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}},608:function(t,e,r){"use strict";r.r(e);var n=r(9),a=r.n(n),o=r(12),c=r.n(o),s=r(3),i=r.n(s),u=r(4),l=r.n(u),p=r(1),f=r.n(p),h=r(5),m=r.n(h),d=r(6),y=r.n(d),v=r(2),b=r.n(v),g=r(0),w=r.n(g),O=r(11),j=r(19),k=r(42),x=r(18),R=r(8),S=r(55),E=r.n(S),D=r(503),P=r.n(D),N=r(7),M=r.n(N);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var A=function(t){m()(r,t);var e=C(r);function r(){return i()(this,r),e.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var t=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return w.a.createElement("div",{className:["app-popup"].join(" ")},w.a.createElement(t.componentClass,{element:t,children:t.children}))}}]),r}(g.Component);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var U=function(t){m()(r,t);var e=I(r);function r(){return i()(this,r),e.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var t=["app-area","app-area_".concat(this.props.id)];if(this.props.area.getTemplates().length)return w.a.createElement("div",{className:t.join(" ")},this.props.area.getTemplates().map((function(t){return w.a.createElement(A,{key:t.id,template:t})})));if(!this.props.template.data)return w.a.createElement("div",{className:t.join(" ")});var e=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return w.a.createElement("div",{className:t.join(" ")},w.a.createElement(e.componentClass,{element:e,children:e.children}))}}]),r}(g.Component),T=r(113),J=r(16),F=new(function(){function t(){i()(this,t),this.resource=new J.a({route:"/ajax/pages"}),this.pagesStorage={}}var e;return l()(t,[{key:"loadPage",value:(e=c()(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_.isObject(this.pagesStorage[e])){t.next=2;break}return t.abrupt("return",this.pagesStorage[e]);case 2:return t.next=4,this.resource.get(e);case 4:return r=t.sent,this.pagesStorage[e]=r,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}()),W=r(466),H=r(109),q=r(469),z=r(99),B=r(20),Q=r(52);function V(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return $(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){M()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var X=function(t){m()(u,t);var e,r,n,o,s=L(u);function u(t){var e;return i()(this,u),e=s.call(this,t),Object(O.j)(e.props.title),e.state={areas:e.props.areas||[]},e}return l()(u,[{key:"componentDidMount",value:(o=c()(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.currentRouterMatch=new B.a(this.props.match),Object(O.j)(this.props.title),!this.props.lazy||!this.props.allowed){t.next=8;break}return t.next=5,F.loadPage(this.props.id);case 5:e=t.sent,r=e.areas.map((function(t){return W.a.areaFabric(t)})),this.setState((function(t){return K(K({},t),{},{areas:r})}));case 8:this.changeRouteCurrentModel(),j.a.dispatch(Object(z.d)()),this.updateDataStorage();case 11:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"updateDataStorage",value:(n=c()(a.a.mark((function t(){var e,r,n,o,c,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.data_sources,e=_.sortBy(e,(function(t){return t.priority})),r=V(e),t.prev=3,r.s();case 5:if((n=r.n()).done){t.next=31;break}if(!(o=n.value).getWebUrl()){t.next=29;break}if(c=o.getParams(this.props.match.params),s={},"show"!==o.getType()){t.next=18;break}if(!(i=_.get(c,"id",_.get(this.props,"match.params.id")))){t.next=16;break}return t.next=15,new J.a({route:o.getWebUrl()}).get(i);case 15:s=t.sent;case 16:t.next=27;break;case 18:if(!c){t.next=24;break}return t.next=21,new J.a({route:o.getWebUrl()}).getQueried(c);case 21:s=t.sent,t.next=27;break;case 24:return t.next=26,new J.a({route:o.getWebUrl()}).getAll();case 26:s=t.sent;case 27:s=_.get(s,"data",s),j.a.dispatch(Object(z.c)(o.getAlias(),s));case 29:t.next=5;break;case 31:t.next=36;break;case 33:t.prev=33,t.t0=t.catch(3),r.e(t.t0);case 36:return t.prev=36,r.f(),t.finish(36);case 39:case"end":return t.stop()}}),t,this,[[3,33,36,39]])}))),function(){return n.apply(this,arguments)})},{key:"changeRouteCurrentModel",value:(r=c()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_.get(this.props,"model.modelName")||!_.get(this.props,"match.params.id")){t.next=9;break}return j.a.dispatch(Object(H.b)({altrpModelUpdated:!1})),t.next=4,new J.a({route:"/ajax/models/".concat(this.props.model.modelName)}).get(this.props.match.params.id);case 4:(e=t.sent).altrpModelUpdated=!0,j.a.dispatch(Object(H.b)(e)),t.next=10;break;case 9:j.a.dispatch(Object(H.b)({altrpModelUpdated:!0}));case 10:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"componentDidUpdate",value:(e=c()(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.a.clear(),_.get(this.props,"model.modelName")===_.get(e,"model.modelName")&&_.get(this.props,"match.params.id")===_.get(e,"match.params.id")||this.changeRouteCurrentModel(),_.isEqual(_.get(this.props,"match.params"),_.get(e,"match.params"))||this.updateDataStorage(),_.isEqual(_.get(this.props,"match"),_.get(e,"match"))||(window.currentRouterMatch=new B.a(this.props.match),j.a.dispatch(Object(Q.d)()));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return this.props.allowed?w.a.createElement(T.Scrollbars,{style:{zIndex:99999},autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderTrackVertical:function(t){var e=t.style,r=P()(t,["style"]);return w.a.createElement("div",E()({className:"altrp-scroll__vertical-track",style:e},r))}},w.a.createElement("div",{className:"route-content"},this.state.areas.map((function(e){return w.a.createElement(U,E()({},e,{area:e,page:t.props.id,models:[t.props.model],key:"appArea_"+e.id}))})))):w.a.createElement(x.a,{to:this.props.redirect||"/"})}}]),u}(g.Component),Y=Object(x.g)(X),Z=r(33),tt=r.n(Z);function et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function rt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?et(Object(r),!0).forEach((function(e){M()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var at=function(t){m()(r,t);var e=nt(r);function r(t){var n;return i()(this,r),(n=e.call(this,t)).state={elementStyles:[]},window.stylesModule=f()(n),window.stylesModuleResolve(f()(n)),n}return l()(r,[{key:"addElementStyles",value:function(t,e){if(e){var r=!1,n=tt()(this.state.elementStyles);n.forEach((function(n){n.elementId===t&&(r=!0,n.styles=e)})),r||n.push({elementId:t,styles:e}),this.setState(rt(rt({},this.state),{},{elementStyles:n}))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return w.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),r}(g.Component);function ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}var ct=function(t){m()(r,t);var e=ot(r);function r(t){return i()(this,r),e.call(this,t)}return l()(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return w.a.createElement(k.a,null,w.a.createElement("div",{className:"front-app-content"},w.a.createElement(x.d,null,this.props.routes.map((function(t){return w.a.createElement(x.b,{key:t.id,children:w.a.createElement(Y,t),path:t.path,exact:!0})})))),w.a.createElement(at,null))}}]),r}(g.Component);var st,it=Object(R.b)((function(t){return{routes:t.appRoutes.routes}}))(ct),ut=r(110);function lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return y()(this,r)}}st=function(t){m()(n,t);var e,r=lt(n);function n(t){var e;return i()(this,n),e=r.call(this,t),window.frontApp=f()(e),e.getRoutes(),e}return l()(n,[{key:"getRoutes",value:function(){var t=this;return Object(O.c)().then((function(e){t.routes=e.default}))}},{key:"componentDidMount",value:(e=c()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new J.a({route:"/ajax/current-user"}).getAll();case 2:e=(e=t.sent).data,j.a.dispatch(Object(ut.b)(e));case 5:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return w.a.createElement(R.a,{store:j.a},w.a.createElement(it,null))}}]),n}(g.Component);e.default=st}}]);
//# sourceMappingURL=44c8ebc87c8e52f2e383.bundle.js.map