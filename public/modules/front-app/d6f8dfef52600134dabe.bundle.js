(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(t,e,n){"use strict";n.r(e);var r,c=n(1),o=n.n(c),u=n(2),a=n.n(u),i=n(4),s=n.n(i),l=n(6),f=n.n(l),p=n(7),y=n.n(p),d=n(3),h=n.n(d),m=n(0),v=n.n(m);function R(t){var e=document.title;r||(r=e.innerHTML),t||(t=r),document.title!==t&&(document.title=t)}var b=n(67),E=n(31),w=n(5),O=n(66),D=n(57),k=n.n(D),g=n(58),j=n.n(g);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var c=h()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y()(this,n)}}var S=function(t){f()(n,t);var e=P(n);function n(){return o()(this,n),e.apply(this,arguments)}return a()(n,[{key:"render",value:function(){var t=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.model),e=["app-area","app-area_".concat(this.props.id)];return v.a.createElement("div",{className:e.join(" ")},v.a.createElement(t.componentClass,{element:t,children:t.children}))}}]),n}(m.Component),x=n(71);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var c=h()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y()(this,n)}}var N=function(t){f()(n,t);var e=C(n);function n(t){var r;return o()(this,n),R((r=e.call(this,t)).props.title),r}return a()(n,[{key:"componentDidMount",value:function(){R(this.props.title)}},{key:"render",value:function(){var t=this;return v.a.createElement(x.Scrollbars,{style:{zIndex:99999},autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderTrackVertical:function(t){var e=t.style,n=j()(t,["style"]);return v.a.createElement("div",k()({className:"altrp-scroll__vertical-track",style:e},n))}},v.a.createElement("div",{className:"route-content"},this.props.areas.map((function(e){return v.a.createElement(S,k()({},e,{page:t.props.id,model:t.props.model,key:"appArea_"+e.id}))}))))}}]),n}(m.Component),_=n(9),H=n.n(_),I=n(88),M=n.n(I);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){H()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var c=h()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y()(this,n)}}var z=function(t){f()(n,t);var e=J(n);function n(t){var r;return o()(this,n),(r=e.call(this,t)).state={elementStyles:[]},window.stylesModule=s()(r),window.stylesModuleResolve(s()(r)),r}return a()(n,[{key:"addElementStyles",value:function(t,e){if(e){var n=!1,r=M()(this.state.elementStyles);r.forEach((function(r){r.elementId===t&&(n=!0,r.styles=e)})),n||r.push({elementId:t,styles:e}),this.setState(T(T({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return v.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),n}(m.Component);function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var c=h()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y()(this,n)}}var G=function(t){f()(n,t);var e=F(n);function n(t){return o()(this,n),e.call(this,t)}return a()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return v.a.createElement(E.a,null,v.a.createElement("div",{className:"front-app-content"},v.a.createElement(w.d,null,this.props.routes.map((function(t){return v.a.createElement(w.b,{key:t.id,children:v.a.createElement(N,t),path:t.path,exact:!0})})))),v.a.createElement(z,null))}}]),n}(m.Component);var L,U=Object(O.b)((function(t){return{routes:t.appRoutes.routes}}))(G);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var c=h()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y()(this,n)}}L=function(t){f()(r,t);var e=V(r);function r(t){var n;return o()(this,r),n=e.call(this,t),window.frontApp=s()(n),n.getRoutes(),n}return a()(r,[{key:"getRoutes",value:function(){var t=this;return n.e(7).then(n.bind(null,104)).then((function(e){t.routes=e.default}))}},{key:"render",value:function(){return v.a.createElement(O.a,{store:b.a},v.a.createElement(U,null))}}]),r}(m.Component);e.default=L},64:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r="CHANGE_APP_ROUTES";function c(t){return{type:r,routes:t}}},67:function(t,e,n){"use strict";var r=n(61),c=n(64),o={routes:[]};var u=Object(r.b)({appRoutes:function(t,e){switch(t=t||o,e.type){case c.a:t={routes:e.routes}}return t}}),a=Object(r.c)(u);e.a=a}}]);
//# sourceMappingURL=d6f8dfef52600134dabe.bundle.js.map