(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{86:function(t,e,r){"use strict";r.r(e);var s=r(2),i=r.n(s),n=r(3),a=r.n(n),u=r(7),o=r.n(u),h=r(12),f=r.n(h),c=r(29),l=function(){function t(e,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";i()(this,t),this.formId=e,this.fields=[],this.method=s,this.route=r,this.resource=new c.a({route:r})}var e;return a()(t,[{key:"setFields",value:function(t){this.fields=t}},{key:"addField",value:function(t){return this.fields.push(t),!0}},{key:"submit",value:(e=f()(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=!0,this.fields.forEach((function(t){t.fieldValidate()||(e=!1)})),!e){t.next=14;break}t.t0=this.method,t.next="POST"===t.t0?6:"PUT"===t.t0?9:12;break;case 6:return t.next=8,this.resource.post(this.getData());case 8:return t.abrupt("return",t.sent);case 9:return t.next=11,this.resource.put(this.getData());case 11:return t.abrupt("return",t.sent);case 12:t.next=17;break;case 14:return t.next=16,alert("Валидация не прошла");case 16:return t.abrupt("return",t.sent);case 17:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"getData",value:function(){var t={};return this.fields.forEach((function(e){e.getValue()&&(t[e.getSettings("field_id")]=e.getValue())})),t}}]),t}(),d=new(function(){function t(){i()(this,t),this.forms=[],this.formIds=[],this.fieldsStorage={}}return a()(t,[{key:"registerForm",value:function(t,e,r){var s=this.getForm(t),i="/ajax/models/".concat(e);return s||(s=new l(t,i,r),this.fieldsStorage[t]&&this.fieldsStorage[t].length&&(s.setFields(this.fieldsStorage[t]),delete this.fieldsStorage[t]),this.forms.push(s)),s}},{key:"addField",value:function(t,e){var r=this.getForm(t);return r?r.addField(e):(this.fieldsStorage[t]=this.fieldsStorage[t]||[],this.fieldsStorage[t].push(e),!0)}},{key:"submitForm",value:function(t){return this.getForm(t)?this.getForm(t).submit():(console.error("Форма не найдена"),!1)}},{key:"getForm",value:function(t){var e=null;return this.forms.forEach((function(r){r.formId===t&&(e=r)})),e}}]),t}());e.default=d}}]);
//# sourceMappingURL=07187a68deabb50e4f4e.bundle.js.map