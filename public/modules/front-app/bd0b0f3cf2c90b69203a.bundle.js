(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(2),a=n.n(o),u=n(5),i=n.n(u),s=n(6),l=n.n(s),f=n(7),p=n.n(f),y=n(3),d=n.n(y),h=n(0),m=n.n(h),v=n(15),R=n(70),b=n(19),E=n(8),O=n(72),w=n(63),j=n.n(w),D=n(64),k=n.n(D);function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var c=d()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var S=function(t){l()(n,t);var e=g(n);function n(){return c()(this,n),e.apply(this,arguments)}return a()(n,[{key:"render",value:function(){var t=["app-area","app-area_".concat(this.props.id)];if(!this.props.template.data)return m.a.createElement("div",{className:t.join(" ")});var e=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return m.a.createElement("div",{className:t.join(" ")},m.a.createElement(e.componentClass,{element:e,children:e.children}))}}]),n}(h.Component),P=n(73);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var c=d()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var C=function(t){l()(n,t);var e=x(n);function n(t){var r;return c()(this,n),r=e.call(this,t),Object(v.d)(r.props.title),r}return a()(n,[{key:"componentDidMount",value:function(){Object(v.d)(this.props.title)}},{key:"render",value:function(){var t=this;return this.props.allowed?m.a.createElement(P.Scrollbars,{style:{zIndex:99999},autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderTrackVertical:function(t){var e=t.style,n=k()(t,["style"]);return m.a.createElement("div",j()({className:"altrp-scroll__vertical-track",style:e},n))}},m.a.createElement("div",{className:"route-content"},this.props.areas.map((function(e){return m.a.createElement(S,j()({},e,{page:t.props.id,models:t.props.models,key:"appArea_"+e.id}))})))):m.a.createElement(E.a,{to:this.props.redirect||"/"})}}]),n}(h.Component),N=n(4),_=n.n(N),I=n(90),A=n.n(I);function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){_()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var c=d()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var J=function(t){l()(n,t);var e=T(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={elementStyles:[]},window.stylesModule=i()(r),window.stylesModuleResolve(i()(r)),r}return a()(n,[{key:"addElementStyles",value:function(t,e){if(e){var n=!1,r=A()(this.state.elementStyles);r.forEach((function(r){r.elementId===t&&(n=!0,r.styles=e)})),n||r.push({elementId:t,styles:e}),this.setState(M(M({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return m.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return m.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),n}(h.Component);function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var c=d()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}var F=function(t){l()(n,t);var e=z(n);function n(t){return c()(this,n),e.call(this,t)}return a()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(b.a,null,m.a.createElement("div",{className:"front-app-content"},m.a.createElement(E.d,null,this.props.routes.map((function(t){return m.a.createElement(E.b,{key:t.id,children:m.a.createElement(C,t),path:t.path,exact:!0})})))),m.a.createElement(J,null))}}]),n}(h.Component);var G,U=Object(O.b)((function(t){return{routes:t.appRoutes.routes}}))(F);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var c=d()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}G=function(t){l()(n,t);var e=V(n);function n(t){var r;return c()(this,n),r=e.call(this,t),window.frontApp=i()(r),r.getRoutes(),r}return a()(n,[{key:"getRoutes",value:function(){var t=this;return Object(v.a)().then((function(e){t.routes=e.default}))}},{key:"render",value:function(){return m.a.createElement(O.a,{store:R.a},m.a.createElement(U,null))}}]),n}(h.Component);e.default=G},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r="CHANGE_APP_ROUTES";function c(t){return{type:r,routes:t}}},70:function(t,e,n){"use strict";var r=n(17),c=n(65),o={routes:[]};var a=Object(r.combineReducers)({appRoutes:function(t,e){switch(t=t||o,e.type){case c.a:t={routes:e.routes}}return t}}),u=Object(r.createStore)(a);e.a=u}}]);
//# sourceMappingURL=bd0b0f3cf2c90b69203a.bundle.js.map