(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{360:function(e,t,n){(e.exports=n(65)(!1)).push([e.i,"",""])},383:function(e,t,n){var r=n(384),o=n(385),a=n(158),l=n(386);e.exports=function(e){return r(e)||o(e)||a(e)||l()}},384:function(e,t,n){var r=n(159);e.exports=function(e){if(Array.isArray(e))return r(e)}},385:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},386:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},387:function(e,t,n){var r=n(360);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(66)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(360,(function(){var t=n(360);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},391:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(5),l=n.n(a),c=n(2),i=n.n(c),s=n(6),u=n.n(s),f=n(7),m=n.n(f),p=n(3),d=n.n(p),h=n(0),y=n.n(h),v=n(149),E=n(145),b=n(14),w=n(18);n(34);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var S=function(e){u()(n,e);var t=g(n);function n(){return o()(this,n),t.apply(this,arguments)}return l()(n,[{key:"onDragOver",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDragEnter",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDrop",value:function(e){var t=e.dataTransfer.getData("text/plain");return e.preventDefault(),e.stopPropagation(),Object(b.b)().modules.templateDataStorage.addWidgetInSection(t),!1}},{key:"render",value:function(){return y.a.createElement("div",{className:"new-section",onDragOver:this.onDragOver,onDragEnter:this.onDragEnter,onDrop:this.onDrop,"data-element-type":"new-section"},y.a.createElement("div",{className:"new-section-buttons d-flex"},y.a.createElement("button",{draggable:"true",className:"new-section__button new-section__button_add d-flex "},y.a.createElement(v.a,null)),y.a.createElement("button",{className:"new-section__button new-section__button_library d-flex"},y.a.createElement(E.a,null))),y.a.createElement("div",{className:"new-section__text"},"Drag widget here"))}}]),n}(h.Component),k=n(11),D=n(57),I=n(12),C=n.n(I),R=n(383),O=n.n(R);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var N=function(e){u()(n,e);var t=P(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={elementStyles:[]},window.stylesModule=i()(r),window.stylesModuleResolve(i()(r)),r}return l()(n,[{key:"addElementStyles",value:function(e,t){if(t){var n=!1,r=O()(this.state.elementStyles);r.forEach((function(r){r.elementId===e&&(n=!0,r.styles=t)})),n||r.push({elementId:e,styles:t}),this.setState(j(j({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(e){return y.a.createElement("style",{"data-styles-id":e.elementId,key:e.elementId},e.styles)})))}}]),n}(h.Component),_=n(101),A=(n(387),n(38));function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var M=function(e){u()(n,e);var t=T(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).onSelectItem=r.onSelectItem.bind(i()(r)),r.deleteElement=r.deleteElement.bind(i()(r)),r.duplicateElement=r.duplicateElement.bind(i()(r)),r.addNewColumn=r.addNewColumn.bind(i()(r)),r}return l()(n,[{key:"onSelectItem",value:function(e){console.log(e)}},{key:"deleteElement",value:function(){this.props.element.deleteThisElement()}},{key:"addNewColumn",value:function(){this.props.element.insertSiblingAfter(new A.a)}},{key:"duplicateElement",value:function(){this.props.element.duplicate()}},{key:"showDeleteItem",value:function(){return!this.props.element.getType||"column"!==this.props.element.getType()||this.props.element.canDeleteThis()}},{key:"showAddNewColumnItem",value:function(){return!this.props.element.getType||"column"===this.props.element.getType()}},{key:"render",value:function(){var e=this.props.element.getTitle?this.props.element.getTitle():"";return y.a.createElement(_.Menu,{id:"element-menu"},y.a.createElement(_.Item,{onClick:this.onSelectItem},"Edit ",e),y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Copy"),y.a.createElement(_.Item,{onClick:this.duplicateElement},"Duplicate ",e),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Paste"),y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Reset Styles"),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Copy Styles"),y.a.createElement(_.Item,{disabled:!0,onClick:this.onSelectItem},"Paste Styles"),this.showAddNewColumnItem()?y.a.createElement(_.Separator,null):"",this.showAddNewColumnItem()?y.a.createElement(_.Item,{onClick:this.addNewColumn},"Add New Column"):"",y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Navigator"),this.showDeleteItem()?y.a.createElement(_.Item,{onClick:this.deleteElement},"Delete ",e):"")}}]),n}(h.Component);var W=Object(k.b)((function(e){return{element:e.currentContextElement.currentElement}}))(M);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var L=function(e){u()(n,e);var t=J(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={},r.editorWindow=y.a.createRef(),w.a.subscribe(r.currentElementListener.bind(i()(r))),window.altrpEditorContent=i()(r),r}return l()(n,[{key:"currentElementListener",value:function(e){var t=w.a.getState().currentElement.currentElement;t instanceof D.a&&t!==this.state.rootElement&&this.setState({rootElement:t})}},{key:"componentDidMount",value:function(){var e=Object(b.b)().modules.templateDataStorage.getRootElement();this.setState({rootElement:e})}},{key:"onClick",value:function(){_.contextMenu.hideAll()}},{key:"render",value:function(){return y.a.createElement(k.a,{store:w.a},y.a.createElement("div",{className:"editor-content d-flex flex-column justify-center align-content-center",onClick:this.onClick,ref:this.editorWindow},this.state.rootElement?y.a.createElement(this.state.rootElement.componentClass,{children:this.state.rootElement.children,element:this.state.rootElement}):"",y.a.createElement(S,null)),y.a.createElement(N,null),y.a.createElement(W,null))}}]),n}(h.Component);t.default=L}}]);
//# sourceMappingURL=2.editor.js.map