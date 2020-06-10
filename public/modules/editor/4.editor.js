(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{374:function(e,t,n){"use strict";n.r(t);var a=n(12),s=n.n(a),r=n(3),i=n.n(r),c=n(4),o=n.n(c),l=n(5),u=n.n(l),m=n(6),h=n.n(m),p=n(2),d=n.n(p),f=n(7),v=n.n(f),b=n(0),g=n.n(b),E=n(11),y=function e(t){i()(this,e),this.modules=t},w=n(13),O=function(e){function t(){return i()(this,t),u()(this,h()(t).apply(this,arguments))}return v()(t,e),o()(t,[{key:"parseData",value:function(e,t){var n=[],a=new(window.elementsManager.getElementClass(e.name));if(e.children&&e.children.length){var s=!0,r=!1,i=void 0;try{for(var c,o=e.children[Symbol.iterator]();!(s=(c=o.next()).done);s=!0){var l=c.value;n.push(this.parseData(l,a))}}catch(e){r=!0,i=e}finally{try{s||null==o.return||o.return()}finally{if(r)throw i}}}return a.id=e.id,a.children=n,a.settings=0===e.settings.length?{}:e.settings,t&&(a.parent=t),a}},{key:"duplicateElement",value:function(e,t){var n=this._duplicateElement(e);t.insertNewChildAfter(e.getId(),n);var a=Object(w.b)().modules.templateDataStorage;return a.elementsIds=_.union(a.elementsIds,n.getIds()),n}},{key:"_duplicateElement",value:function(e){var t=this,n=new(elementsManager.getElementClass(e.getName())),a=[];return e.children.map((function(e){var s=t._duplicateElement(e);s.setParent(n),a.push(s)})),n.component=new n.setChildren(a),n.settings=_.cloneDeep(e.settings),n.children=a,n}}]),t}(y),j=function(){function e(t){if(i()(this,e),this.route=t.route,!this.route)throw"Нужен route"}return o()(e,[{key:"get",value:function(e){if(!e)throw'Get only by "id"';var t=this.route+"/"+e;return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"getAll",value:function(){var e=this.route;return fetch(e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"post",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;e._token=_token,t=t||{"Content-Type":"application/json"};var n={method:"POST",body:JSON.stringify(e),headers:t};return fetch(this.route,n).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"postFiles",value:function(e,t){String(Math.random()).slice(2);t=t||"image";var n={"X-CSRF-TOKEN":_token},a=new FormData;console.log(e);for(var s=0;s<e.length;s++)e[s].size>10485760||0!==e[s].type.indexOf(t)?console.log(e[s]):a.append("files[".concat(s,"]"),e[s]);var r={method:"POST",body:a,headers:n};return fetch(this.route,r).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"put",value:function(e,t){t._token=_token;var n={method:"put",body:JSON.stringify(t),headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},a=this.route+"/"+e;return fetch(a,n).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"delete",value:function(e){var t={method:"delete",headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},n=this.route+"/"+e;return fetch(n,t).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}},{key:"getOptions",value:function(){var e=this.route+"/options";return fetch(e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return!1===e.ok?Promise.reject(e.text(),e.status):e.json()}))}}]),e}(),k=n(54),P=n(19),T=n(33),N=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).resource=new j({route:"/admin/ajax/templates"}),n}return v()(t,e),o()(t,[{key:"load",value:function(){var e=this;if(this.template_id=Object(w.e)(),P.a.dispatch(Object(T.b)(w.a.TEMPLATE_SAVING)),this.template_id)this.resource.get(this.template_id).then((function(t){var n=JSON.parse(t.data),a=e.modules.elementsFactory.parseData(n),s=Object(w.b)().modules.templateDataStorage;s.replaceAll(a),s.setTitle(t.title),s.setName(t.name),Object(w.b)().endLoading(),P.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))})).catch((function(e){console.error(e),P.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))}))}},{key:"saveTemplate",value:function(){P.a.dispatch(Object(T.b)(w.a.TEMPLATE_SAVING));var e=Object(w.b)().modules.templateDataStorage.getTemplateDataForSave();this.resource.put(this.template_id,e).then((function(e){P.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))})).catch((function(e){console.error(e),P.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))}))}}]),t}(y),S=function e(){i()(this,e)},A=function e(){i()(this,e)},C=n(57),D=n(16),M=n(56),x=n(35),z=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).elementsIds=[],n}return v()(t,e),o()(t,[{key:"replaceAll",value:function(e){if(!e instanceof k.a)throw"Expect Root Element as root element;)";this.rootElement=e,this.elementsIds=e.getIds(),this.setCurrentRootElement()}},{key:"getTemplateData",value:function(){return this.rootElement.toObject()}},{key:"getTemplateDataForSave",value:function(){var e={};return e.data=this.getTemplateData(),e.title=this.title||"testtitle",e.name=this.name||"testname",console.log(this),e}},{key:"setTitle",value:function(e){this.title=e}},{key:"setName",value:function(e){this.name=e}},{key:"setCurrentRootElement",value:function(){return this.currentElement=this.rootElement,P.a.dispatch(Object(C.b)(this.currentElement)),this.currentElement}},{key:"setCurrentElement",value:function(e){if(!e instanceof D.a)throw"Only Base Element Can Be Set as Default";this.currentElement=e,P.a.dispatch(Object(C.b)(e))}},{key:"getCurrentElement",value:function(){return this.currentElement?this.currentElement:this.setCurrentRootElement()}},{key:"getRootElement",value:function(){return this.rootElement}},{key:"addWidgetInSection",value:function(e){var t=new M.a;this.elementsIds.push(t.getId());var n=new x.a;this.elementsIds.push(n.getId());var a=new(window.elementsManager.getElementClass(e));this.elementsIds.push(a.getId()),n.appendWidget(a),t.appendColumn(n),this.rootElement.appendNewSection(t),this.setCurrentElement(a),P.a.dispatch(Object(T.b)(w.a.TEMPLATE_NEED_UPDATE)),Object(w.b)().showSettingsPanel()}}]),t}(y),I=function(){function e(t){i()(this,e),this.elementsFactory=new O(this),this.saveImportModule=new N(this),this.settingsChangeModule=new S(this),this.templateSettingsChangeModule=new A(this),this.templateDataStorage=new z(this)}return o()(e,[{key:"loaded",value:function(){this.saveImportModule.load()}}]),e}(),R=n(26),L=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).state={element:n.props.element},n.onDragStart=n.onDragStart.bind(d()(n)),n}return v()(t,e),o()(t,[{key:"onDragStart",value:function(e){P.a.dispatch(Object(R.c)(null)),e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",this.state.element.getName())}},{key:"render",value:function(){if(!this.state.element instanceof D.a)throw"Widget Component must has Element in props";return g.a.createElement("div",{className:"widget-icon",draggable:"true",onDragStart:this.onDragStart},g.a.createElement(this.state.element.getIconComponent(),{height:35}),g.a.createElement("div",{className:"widget-icon__title"},this.state.element.getTitle()))}}]),t}(b.Component),H=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).state={widgets:window.elementsManager.getWidgetsList()},n}return v()(t,e),o()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"widget-panel"},this.state.widgets.map((function(e){return g.a.createElement(L,{element:e,key:e.getName()})})))}}]),t}(b.Component),B=n(125),V=n(8),W=n.n(V),F=n(9),U=n.n(F),J=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"20",height:"19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M5.6 15.883c0-1.136-.835-2.08-1.929-2.276V1.317A.419.419 0 003.25.9a.419.419 0 00-.421.417v12.29C1.735 13.803.9 14.747.9 15.883c0 1.279 1.055 2.317 2.35 2.317 1.295 0 2.35-1.038 2.35-2.317zm-2.35 1.484a1.497 1.497 0 01-1.507-1.484c0-.816.675-1.483 1.507-1.483.832 0 1.507.667 1.507 1.483 0 .817-.675 1.484-1.507 1.484zM11.9 9.484a2.376 2.376 0 00-1.873-2.33V1.317A.414.414 0 009.615.9a.414.414 0 00-.413.417v5.812A2.375 2.375 0 007.2 9.484c0 1.193.87 2.185 2.002 2.356v5.943c0 .23.184.417.413.417a.414.414 0 00.412-.417v-5.968a2.376 2.376 0 001.873-2.33zm-2.35 1.55a1.54 1.54 0 01-1.526-1.55A1.54 1.54 0 019.55 7.936c.84 0 1.526.693 1.526 1.548a1.54 1.54 0 01-1.526 1.55zM19.1 3.217C19.1 1.938 18.044.9 16.75.9S14.4 1.938 14.4 3.217c0 1.136.835 2.08 1.929 2.276v12.29c0 .232.19.417.421.417a.419.419 0 00.421-.417V5.493c1.094-.196 1.929-1.14 1.929-2.276zM16.75 4.7a1.497 1.497 0 01-1.507-1.483c0-.817.675-1.484 1.507-1.484.832 0 1.507.667 1.507 1.484 0 .816-.675 1.483-1.507 1.483z",fill:"#343B4C",stroke:"#343B4C",strokeWidth:".2"}))},G=n(126),K=n(1),X=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"10",height:"7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M1 6l3.5-4 4 4",stroke:"#343B4C",strokeWidth:"1.5"}))},q=n(137);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Y=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).state={open:e.open},n.toggle=n.toggle.bind(d()(n)),n}return v()(t,e),o()(t,[{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this.props.controls||[],t="settings-section "+(this.state.open?"open":"");return g.a.createElement("div",{className:t},g.a.createElement("div",{className:"settings-section__title d-flex ",onClick:this.toggle},g.a.createElement("div",{className:"settings-section__icon d-flex "},g.a.createElement(X,null)),g.a.createElement("div",{className:"settings-section__label"},this.props.label)),g.a.createElement("div",{className:"controllers-wrapper"},e.map((function(e){var t=window.controllersManager.getController(e.type);return g.a.createElement(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{key:e.controlId,controller:new q.a(e)}))}))))}}]),t}(b.Component),Z=n(330);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ee=function(e){function t(){return i()(this,t),u()(this,h()(t).apply(this,arguments))}return v()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.sections||[];return g.a.createElement("div",{className:"settings-controllers"},g.a.createElement(Z.Scrollbars,{autoHide:!0,autoHideTimeout:500,autoHideDuration:200},e.map((function(e,t){return g.a.createElement(Y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{key:e.sectionId,open:0===t}))}))))}}]),t}(b.Component);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ne=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).state={activeTab:"content"},n}return v()(t,e),o()(t,[{key:"setActiveTab",value:function(e){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{activeTab:e}))}},{key:"render",value:function(){var e=this,t=window.controllersManager,n=[];this.props.currentElement.getName&&(n=t.getControls(this.props.currentElement.getName())[this.state.activeTab]||[]);var a="panel-tab d-flex "+(this.state.activeTab===K.p?"active":""),s="panel-tab d-flex "+(this.state.activeTab===K.q?"active":""),r="panel-tab d-flex "+(this.state.activeTab===K.o?"active":"");return g.a.createElement("div",{className:"panel settings-panel d-flex"},g.a.createElement("div",{className:"panel-tabs d-flex"},g.a.createElement("button",{className:a,onClick:function(){return e.setActiveTab(K.p)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(B.a,null)),g.a.createElement("span",{className:"panel-tab__text"},"Content")),g.a.createElement("button",{className:s,onClick:function(){return e.setActiveTab(K.q)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(J,null)),g.a.createElement("span",{className:"panel-tab__text"},"Style")),g.a.createElement("button",{className:r,onClick:function(){return e.setActiveTab(K.o)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(G.a,null)),g.a.createElement("span",{className:"panel-tab__text"},"Advanced"))),g.a.createElement(ee,{sections:n}))}}]),t}(b.Component);var ae=Object(E.b)((function(e){return{currentElement:e.currentElement.currentElement}}))(ne),se=function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).state={},n}return v()(t,e),o()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"editor-window"},g.a.createElement("iframe",{src:"/admin/editor-content"}))}}]),t}(b.Component),re=(b.Component,function(e){function t(e){var n;return i()(this,t),(n=u()(this,h()(t).call(this,e))).saveTemplate=n.saveTemplate.bind(d()(n)),n}return v()(t,e),o()(t,[{key:"saveTemplate",value:function(e){Object(w.b)().modules.saveImportModule.saveTemplate()}},{key:"render",value:function(){var e="btn font_montserrat font_500 btn_grey";switch(this.props.templateStatus){case w.a.TEMPLATE_UPDATED:e+=" btn_disabled ";break;case w.a.TEMPLATE_NEED_UPDATE:e+=" btn_active "}return g.a.createElement("div",{className:"control-group d-flex"},g.a.createElement("button",{className:e,onClick:this.saveTemplate},"UPDATE"),g.a.createElement("button",{className:"btn btn_grey"},g.a.createElement(X,{className:"icon"})))}}]),t}(b.Component));var ie=Object(E.b)((function(e){return{templateStatus:e.templateStatus.status}}))(re),ce=n(347),oe=n.n(ce),le=n(349),ue=n.n(le),me=n(82),he=n(41);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){function t(){var e;return i()(this,t),(e=u()(this,h()(t).call(this))).tabClick=e.tabClick.bind(d()(e)),e.toggleBrowser=e.toggleBrowser.bind(d()(e)),e.selectAsset=e.selectAsset.bind(d()(e)),e.chooseAsset=e.chooseAsset.bind(d()(e)),e.state={activeTab:"media",tabs:[{name:"icons",title:"Icons Library"},{name:"media",title:"Media Library"}],assets:e.getAssets("media"),selectedAsset:null,mediaAssets:[]},e.mediaResource=new j({route:"/admin/ajax/media"}),e}var n;return v()(t,e),o()(t,[{key:"componentDidMount",value:(n=ue()(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mediaResource.getAll();case 2:t=e.sent,this.setState((function(e){return"media"===(e=de({},e,{mediaAssets:t})).activeTab&&(e.assets=t),e}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getAssets",value:function(e){switch(e||(e=this.state.activeTab),e){case"icons":return Object(w.f)().getIconsList();case"media":return this.state?this.state.mediaAssets:[]}return[]}},{key:"selectAsset",value:function(e){var t=e.currentTarget.dataset.assetname;this.setState((function(e){return de({},e,{selectedAsset:t})}))}},{key:"tabClick",value:function(e){this.setActiveTab(e.target.dataset.tab)}},{key:"setActiveTab",value:function(e){var t=this;this.setState((function(n){return de({},n,{activeTab:e,assets:t.getAssets(e)})}))}},{key:"toggleBrowser",value:function(){this.setState((function(e){return de({},e,{selectedAsset:null})})),this.props.dispatch(Object(he.d)())}},{key:"chooseAsset",value:function(){var e,t=this;if(this.state.assets.forEach((function(n){n.name===t.state.selectedAsset&&(e=n)})),!e)throw"Asset with name ".concat(this.state.selectedAsset," not found in Assets Browser (").concat(this.state.activeTab,")!");this.props.onChoose(e),this.setState((function(e){return de({},e,{selectedAsset:null})})),this.props.dispatch(Object(he.d)())}},{key:"render",value:function(){var e=this,t="assets-browser";this.props.active&&(t+=" assets-browser_active");var n="btn btn_success";return this.state.selectedAsset||(n+=" btn_disabled"),React.createElement("div",{className:t},React.createElement("div",{className:"assets-browser__bg",onClick:this.toggleBrowser}),React.createElement("div",{className:"assets-browser-content"},React.createElement("div",{className:"assets-browser-top"},React.createElement("div",{className:"caption"},"Append Media"),React.createElement("button",{className:"btn btn_bare assets-browser__close"},React.createElement(me.a,{className:"icon",onClick:this.toggleBrowser})),React.createElement("div",{className:"assets-browser-nav"},this.state.tabs.map((function(t){var n="assets-browser__tab";return e.state.activeTab===t.name&&(n+=" assets-browser__tab_active"),React.createElement("button",{className:n,onClick:e.tabClick,key:t.name,"data-tab":t.name},t.title)})))),this.state.assets.length?React.createElement("div",{className:"assets-browser-choose-frame"},this.state.assets.map((function(t){var n,a="asset-choose",s={className:"asset-choose__content"};return"icons"===e.state.activeTab&&(n=t.iconComponent,a+=" asset-choose_icon",s.width="20",s.height="20"),"media"===e.state.activeTab&&(n="img",s.src=t.url,a+=" asset-choose_media",t.name=t.filename,t.assetType="media"),e.state.selectedAsset===t.name&&(a+=" asset-choose_selected"),React.createElement("div",{className:a,"data-assetname":t.name,key:t.name,onClick:e.selectAsset},React.createElement(n,s))}))):"",React.createElement("div",{className:"assets-browser-bottom"},React.createElement("button",{className:n,onClick:this.chooseAsset},"Choose"))))}}]),t}(Component);var ve,be=Object(E.b)((function(e){return de({},e.assetsManagerSettings)}))(fe),ge=(n(136),function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"17",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M15 0H1.364C.612 0 0 .612 0 1.364v9.545c0 .752.612 1.364 1.364 1.364h4.774c-.014.544-.118 1.414-.508 1.824a.67.67 0 01-.516.221.34.34 0 100 .682h6.136a.34.34 0 100-.682.668.668 0 01-.515-.22c-.39-.409-.494-1.28-.509-1.825H15c.752 0 1.364-.612 1.364-1.364V1.364C16.364.612 15.752 0 15 0zM8.182 11.593a.685.685 0 010-1.368.685.685 0 010 1.368zM1.364 9.545V1.364H15v8.181H1.365z",fill:"#8E94AA"}))}),Ee=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"97",height:"35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M20.245 8.309l-3.747 9.57c0 2.31.476 4.088 1.443 5.31.318.41.808.796 1.483 1.154l-1.086 3.398c-.966-.358-1.8-.982-2.516-1.885a11.593 11.593 0 01-1.257-2.057c-.848 1.42-1.801 2.402-2.887 2.92-.82.411-1.827.61-3.032.61-2.423 0-4.449-.862-6.05-2.601C.86 22.883 0 20.388 0 17.228c0-1.101.066-2.097.199-2.96.132-.862.37-1.685.701-2.455.702-1.566 1.642-2.76 2.847-3.584 1.205-.823 2.595-1.234 4.184-1.234 1.47 0 2.74.292 3.813.863 1.51.796 2.622 2.097 3.31 3.902l2.212-4.858 2.979 1.407zm-7.163 9.53c.026-.093.04-.252.04-.464v-.293a.602.602 0 00-.04-.212c0-1.686-.477-3.185-1.417-4.5-.953-1.313-2-1.964-3.151-1.964-1.364 0-2.476.584-3.31 1.765-.914 1.275-1.364 3.053-1.364 5.35 0 2.097.463 3.703 1.403 4.804.834.983 1.894 1.487 3.165 1.487.887 0 1.615-.265 2.158-.796.9-.903 1.748-2.615 2.516-5.177zM38.874 27.05h-3.92l-4.077-11.162-.967-3.066-1.006 3.146-3.959 11.083h-4.184l7.203-19.14a72.897 72.897 0 01-.755-2.018c-.172-.451-.304-.756-.397-.902-.503-.797-1.31-1.195-2.41-1.195-.384 0-1.125.12-2.237.358l.437-3.69a13.272 13.272 0 011.35-.358A5.454 5.454 0 0124.985 0c2.065 0 3.68 1.075 4.833 3.212.437.743 1.032 2.177 1.8 4.3l7.256 19.539zM55.054 10.804h-5.587v10.579c0 .77.026 1.261.066 1.487.053.212.185.411.437.584.238.12.556.185.94.185.291 0 .847-.066 1.695-.185l.582 3.504c-.437.093-1.033.186-1.8.252-.769.066-1.298.106-1.59.106-1.204 0-2.144-.186-2.833-.557-.688-.372-1.178-.916-1.496-1.646-.146-.359-.252-.836-.318-1.447-.066-.597-.106-1.42-.106-2.456V10.804l-2.595-.04c-.556 0-1.072.253-1.55.757-.145.173-.33.438-.582.796l-2.515-2.561c.476-.65.887-1.128 1.231-1.447 1.06-.969 2.198-1.447 3.43-1.447l12.604.04v3.902h-.013zM73.578 11.56c.648 1.567.966 3.372.966 5.416 0 2.124-.344 3.956-1.046 5.495-.702 1.54-1.721 2.761-3.059 3.65-1.35.89-2.793 1.341-4.356 1.341-.94 0-1.681-.093-2.237-.292-.768-.265-1.55-.783-2.344-1.553v9.026h-4.356l.04-18.53c0-3.73 1.258-6.41 3.786-8.016 1.563-.983 3.337-1.487 5.336-1.487 1.655 0 3.112.425 4.383 1.288 1.245.849 2.211 2.07 2.886 3.663zm-4.357-.079c-.9-1.101-1.972-1.659-3.244-1.659-1.244 0-2.356.584-3.31 1.765-.45.585-.807 1.394-1.059 2.443a14.626 14.626 0 00-.384 3.41c0 2.31.45 4.01 1.364 5.098.913 1.088 2 1.62 3.244 1.62 1.297 0 2.41-.558 3.35-1.66.45-.584.807-1.354 1.059-2.35.251-.982.384-2.07.384-3.251 0-1.182-.12-2.23-.344-3.146-.226-.903-.583-1.66-1.06-2.27zM97 10.725l-2.158-.04-.04 16.366h-4.078V10.698h-6.7v16.366h-3.998V10.738c-.239 0-.53.093-.887.265-.345.186-.755.505-1.205.956l-2.662-2.668c.98-.969 1.854-1.593 2.596-1.898.74-.305 1.588-.451 2.515-.451H97v3.783z",fill:"#fff"}))},ye=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"15",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M14.437 4.1L7.218 0 0 4.1l7.218 4.124 7.219-4.125z",fill:"#fff"}),g.a.createElement("path",{d:"M7.218 8.933l-4.867-2.78L0 7.487l7.218 4.124 7.219-4.124-2.351-1.336-4.868 2.781z",fill:"#fff"}),g.a.createElement("path",{d:"M7.218 12.322L2.351 9.54 0 10.876 7.218 15l7.219-4.124-2.351-1.335-4.868 2.78z",fill:"#fff"}))},we=n(135),Oe=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"17",height:"10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{d:"M8.388 0C5.183 0 2.276 1.754.131 4.602a.664.664 0 000 .793C2.276 8.246 5.183 10 8.388 10s6.112-1.754 8.257-4.602a.664.664 0 000-.793C14.5 1.754 11.593 0 8.388 0zm.23 8.52a3.53 3.53 0 01-3.751-3.75 3.536 3.536 0 013.291-3.29 3.53 3.53 0 013.75 3.75 3.548 3.548 0 01-3.29 3.29zM8.51 6.895a1.897 1.897 0 01-2.017-2.018 1.908 1.908 0 011.774-1.774 1.897 1.897 0 012.018 2.018 1.908 1.908 0 01-1.774 1.774z",fill:"#8E94AA"}))},je=n(88),ke=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{fill:"#fff",d:"M0 10h3v3H0zM5 10h3v3H5zM10 10h3v3h-3zM0 0h3v3H0zM5 0h3v3H5zM10 0h3v3h-3zM0 5h3v3H0zM5 5h3v3H5zM10 5h3v3h-3z"}))},Pe=function(e){e.styles;var t=U()(e,["styles"]);return g.a.createElement("svg",W()({width:"19",height:"14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),g.a.createElement("path",{fill:"#fff",d:"M0 0h19v2H0zM0 6h19v2H0V6zM0 12h19v2H0z"}))};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}ve=function(e){function t(e){var n;return i()(this,t),n=u()(this,h()(t).call(this,e)),window.altrpEditor=d()(n),n.state={activePanel:"widgets",templateStatus:w.a.TEMPLATE_UPDATED},n.openPageSettings=n.openPageSettings.bind(d()(n)),n.showSettingsPanel=n.showSettingsPanel.bind(d()(n)),n.showWidgetsPanel=n.showWidgetsPanel.bind(d()(n)),n.onDragEnd=n.onDragEnd.bind(d()(n)),P.a.subscribe(n.templateStatus.bind(d()(n))),n}return v()(t,e),o()(t,[{key:"templateStatus",value:function(){var e=P.a.getState().templateStatus.status;e!==this.state.templateStatus&&this.setState(Ne({},this.state,{templateStatus:e}))}},{key:"initModules",value:function(){this.modules=new I(this),this.modules.loaded()}},{key:"showWidgetsPanel",value:function(){this.setState(Ne({},this.state,{activePanel:"widgets"}))}},{key:"showSettingsPanel",value:function(){this.setState(Ne({},this.state,{activePanel:"settings"}))}},{key:"onDragEnd",value:function(){var e=P.a.getState().elementDrag.element;e&&e.stopDrag&&e.stopDrag(),P.a.dispatch(Object(R.d)())}},{key:"endLoading",value:function(){console.log("editor loaded")}},{key:"componentDidMount",value:function(){this.initModules()}},{key:"openPageSettings",value:function(){this.modules.templateDataStorage.setCurrentRootElement(),this.showSettingsPanel()}},{key:"render",value:function(){var e="",t="editor ";return this.state.templateStatus===w.a.TEMPLATE_SAVING&&(t+=" editor_saving"),P.a.getState().currentElement.currentElement.getType&&"root-element"===P.a.getState().currentElement.currentElement.getType()&&"settings"===this.state.activePanel&&(e=" active"),g.a.createElement(E.a,{store:P.a},g.a.createElement("div",{className:t,onDragEnd:this.onDragEnd},g.a.createElement("div",{className:"left-panel"},g.a.createElement("div",{className:"editor-top-panel"},g.a.createElement("button",{className:"btn btn_hamburger"},g.a.createElement(Pe,{className:"icon"})),g.a.createElement("div",{className:"logo"},g.a.createElement(Ee,{viewBox:"0 0 97 35"})),g.a.createElement("button",{className:"btn btn_dots",onClick:this.showWidgetsPanel},g.a.createElement(ke,{className:"icon"}))),g.a.createElement("div",{className:"left-panel-main"},"widgets"===this.state.activePanel&&g.a.createElement(H,null),"settings"===this.state.activePanel&&g.a.createElement(ae,null)),g.a.createElement("div",{className:"editor-bottom-panel d-flex align-content-center justify-center"},g.a.createElement("button",{className:"btn btn_settings"+e,onClick:this.openPageSettings},g.a.createElement(je.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(ye,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(we.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(ge,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(Oe,{className:"icon"})),g.a.createElement(ie,null))),g.a.createElement("div",{className:"right-panel"},g.a.createElement(se,null))),g.a.createElement(be,null))}}]),t}(b.Component);t.default=ve}}]);
//# sourceMappingURL=4.editor.js.map