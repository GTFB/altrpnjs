(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(t,e,n){"use strict";var r=n(3),a=n.n(r),o=n(4),i=n.n(o),u=function t(){a()(this,t)},l=function(){function t(){a()(this,t)}return i()(t,[{key:"getTemplates",value:function(){return this.templates=this.templates||[],this.templates}}],[{key:"areaFabric",value:function(e){var n=new t;return n.settings=e.settings,n.id=e.id,n.template=new u,n.template.data=e.template?JSON.parse(e.template.data):null,n.template.id=e.template?e.template.id:null,"popups"===e.area_name&&(n.templates=[],e.templates=e.templates||[],e.templates.forEach((function(t){var e=new u;e.data=t?JSON.parse(t.data):null,e.id=t?JSON.parse(t.id):null,e.template_settings=t?t.template_settings:[],n.templates.push(e)}))),n}}]),t}();e.a=l},96:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),o=n(4),i=n.n(o),u=n(17),l=n(155);function s(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=function(){function t(e){a()(this,t),this.id=e.id,this.path=e.path,this.model=e.model,this.models=e.models,this.models||(this.models=e.model?[e.model]:[]),this.model=e.model,this.title=e.title||"",this.allowed=e.allowed,this.redirect=e.redirect,this.lazy=e.lazy}return i()(t,null,[{key:"routeFabric",value:function(e){var n=new t(e);n.areas=[],e.areas=e.areas||[];var r,a=s(e.areas);try{for(a.s();!(r=a.n()).done;){var o=r.value;n.areas.push(l.a.areaFabric(o))}}catch(t){a.e(t)}finally{a.f()}return n}}]),t}(),p=n(20),m=n(57);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(){function t(){a()(this,t),this.resource=new u.a({route:"/ajax/routes"}),this.loadRoutes()}return i()(t,[{key:"loadRoutes",value:function(){this.resource.getAll().then((function(t){var e,n=[],r=d(t.pages);try{for(r.s();!(e=r.n()).done;){var a=e.value;n.push(f.routeFabric(a))}}catch(t){r.e(t)}finally{r.f()}p.a.dispatch(Object(m.b)(n))})).catch((function(t){console.error(t)}))}}]),t}();e.default=new y}}]);
//# sourceMappingURL=aafe61995391b0d1b9fb.bundle.js.map