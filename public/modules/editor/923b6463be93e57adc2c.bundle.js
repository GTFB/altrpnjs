(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{537:function(e,t,r){(e.exports=r(98)(!1)).push([e.i,"",""])},588:function(e,t,r){var n=r(537);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(99)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(537,(function(){var t=r(537);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},629:function(e,t,r){"use strict";r.r(t);var n=r(34),a=r.n(n),o=r(8),c=r.n(o),l=r(13),i=r.n(l),s=r(21),u=r.n(s),p=r(27),d=r.n(p),f=r(0),m=r.n(f),b=r(586),h=r(589),v=(r(588),r(88)),g=r(42),y=r(114),O=r(4),w=r.n(O),j=r(5),E=r.n(j),S=r(3),P=r.n(S),N=r(6),k=r.n(N),C=r(7),D=r.n(C),x=r(2),R=r.n(x),I=r(39);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R()(e);if(t){var a=R()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return D()(this,r)}}var K=function(e){k()(o,e);var t,r,n=A(o);function o(e){var t;return w()(this,o),(t=n.call(this,e)).resource=new I.a({route:t.props.route}),t.state={value:t.props.value||"",disabled:!t.props.value},t.changeValue=t.changeValue.bind(P()(t)),t.onChange=t.onChange.bind(P()(t)),t.onKeyDown=t.onKeyDown.bind(P()(t)),t}return E()(o,[{key:"componentDidMount",value:(r=u()(i.a.mark((function e(){var t,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.props.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.resource.get(this.props.resourceid);case 4:t=e.sent,this.setState((function(e){return H(H({},e),{},{value:t[r.props.resourceid]||"",disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.changeValue(e)}},{key:"onChange",value:function(e){var t=e.target.value;this.setState((function(e){return H(H({},e),{},{value:t})})),_.isFunction(this.props.changevalue)&&this.props.changevalue(t)}},{key:"changeValue",value:(t=u()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,this.setState((function(e){return H(H({},e),{},{disabled:!0})})),e.next=4,this.resource.put(this.props.resourceid,{value:r,column_value:r});case 4:e.sent,this.setState((function(e){return H(H({},e),{},{disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.className;this.state.disabled&&(e+=" pointer-event-none");var t=H({},this.props);return delete t.changevalue,m.a.createElement("input",a()({},t,{className:e,onBlur:this.changeValue,onKeyDown:this.onKeyDown,onChange:this.onChange,value:this.state.value}))}}]),o}(f.Component),V=r(18);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.settings,r=e.query,n=e.data;if(!t.tables_columns||!t.tables_columns.length)return m.a.createElement("div",{children:"Please Add Column"});var o,c,l,s=[],p=Object(f.useState)(1),O=d()(p,2),w=O[0],j=O[1],E=Object(f.useState)({}),S=d()(E,2),P=S[0],N=S[1],k=Object(f.useState)({}),C=d()(k,2),D=C[0],x=C[1],R=Object(f.useState)({}),I=d()(R,2),M=I[0],H=I[1],A=Object(f.useState)({}),J=d()(A,2),Q=J[0],z=J[1],B=JSON.stringify(M),F=Object(f.useCallback)(function(){var e=u()(i.a.mark((function e(t){var n,a,o,c,l,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,c={page:n},l=JSON.stringify(o),a&&(c=_.assign(a,c)),l.length>2&&(c.filters=l),e.abrupt("return",r.getQueried(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());if(r.pageSize){var G=Object(h.b)([r.dataSourceName,w,D,M],F),q=G.status,L=G.resolvedData,U=G.latestData,W=G.error;s=L||s,o=q,c=W,l=U,Object(f.useEffect)((function(){(null==U?void 0:U.hasMore)&&h.a.prefetchQuery([r.dataSourceName,w+1],F)}),[U,F,w,D,M])}else{var X=Object(h.c)(r.dataSourceName,(function(){return r.getResource().getQueried(T(T({},D),{},{filters:B}))}),[r.dataSourceName]),Y=X.status,Z=X.data,$=X.error;s=Z,o=Y,c=$}var ee;ee=function(e){var t=[],r=e.tables_columns;return(r=r||[]).forEach((function(e){e.column_name&&e.accessor&&(e._accessor=e.accessor,t.push(e))})),t}(t),s.length||(s=n),_.isArray(s)||(s=[s]),s=s.map((function(e){return e.id===P.rowId?(e[P.column]=P.value,T({},e)):e}));var te=Object(b.useTable)({columns:m.a.useMemo((function(){return ee||[]}),[t.tables_columns]),data:m.a.useMemo((function(){return s||[]}),[s])}),re=te.getTableProps,ne=te.getTableBodyProps,ae=te.headerGroups,oe=te.rows,ce=te.prepareRow,le=function(e){x({order_by:e,order:D&&D.order_by===e?"DESC"===D.order?"ASC":"DESC":"ASC"})},ie=function(e,t){j(1);var r=T({},M);t?r[e]=t:delete r[e],H(r)};return m.a.createElement(m.a.Fragment,null,m.a.createElement("table",a()({className:"altrp-table"},re()),m.a.createElement("thead",{className:"altrp-table-head"},function(e){var t=e.additional_rows;if(!_.isArray(t))return"";return t.map((function(e){return e.additional_cells=e.additional_cells||[],m.a.createElement("tr",{key:"additional-row-".concat(e.id)},e.additional_cells.map((function(t){return t.rowspan=t.rowspan||1,t.colspan=t.colspan||1,m.a.createElement("th",{key:"additional-cell-".concat(e.id,"-").concat(t.id),role:"columnheader",className:"altrp-table-th",colSpan:t.colspan,rowSpan:t.rowspan},t.title)})))}))}(t),ae.map((function(e){return m.a.createElement("tr",a()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return function(e){var t=e.column,r=e.sortSetting,n=e.sortingHandler,a=e.filterSetting,o=e.filterHandler,c=T({},t.getHeaderProps());c.className="altrp-table-th",t.column_is_sorted&&(c.onClick=function(){return n(t._accessor)},c.className+=" clickable");t.column_width&&(c.width=t.column_width+"%");var l=t.render("column_name");return m.a.createElement("th",c,l,r&&r.order_by===t._accessor&&("DESC"===r.order?Object(y.a)().renderIcon("chevron",{className:"rotate-180"}):Object(y.a)().renderIcon("chevron")),t.column_is_filtered&&m.a.createElement("label",{className:"altrp-label"},m.a.createElement("input",{type:"text",onClick:function(e){e.stopPropagation()},onChange:function(e){e.stopPropagation();var r=e.target.value;o(t._accessor,r)},value:a[t._accessor]||"",className:"altrp-field"})))}({column:e,sortSetting:D,sortingHandler:le,filterSetting:M,filterHandler:ie})})))}))),m.a.createElement("tbody",a()({},ne(),{className:"altrp-table-tbody"}),"error"===o?m.a.createElement("tr",null,m.a.createElement("td",null,c.message)):"loading"===o?m.a.createElement("tr",null,m.a.createElement("td",null,"Loading")):oe.map((function(e,t){return ce(e),m.a.createElement("tr",a()({},e.getRowProps(),{className:"altrp-table-tr"}),e.cells.map((function(t,r){var n=t.render("Cell"),o=Object(g.b)()?"a":v.b,c=T({},t.getCellProps()),l=t.value,i="";if(ee[r].column_is_editable&&ee[r].column_edit_url){var s=Object(V.i)(ee[r].column_edit_url,e.original);i=m.a.createElement(K,{className:"altrp-inherit altrp-table-td__double-click-content",route:s,resourceid:"",changevalue:function(t){N({value:t,rowId:e.original.id,column:ee[r]._accessor})},value:l}),c.onDoubleClick=function(){Q.column===ee[r]._accessor&&Q.rowId===e.original.id?z({}):z({column:ee[r]._accessor,rowId:e.original.id})}}var u="altrp-table-td";return Q.column===ee[r]._accessor&&e.original.id===Q.rowId&&(u+=" altrp-table-td_double-clicked"),_.isObject(t.value)&&(n=""),n=ee[r].column_link&&e.original.id?m.a.createElement(o,{to:Object(V.i)(ee[r].column_link,e.original),className:"altrp-inherit altrp-table-td__default-content"},n):m.a.createElement("span",{className:"altrp-inherit altrp-table-td__default-content"},n),m.a.createElement("td",a()({},c,{className:u}),n,i)})))})))),"prev-next"===r.paginationType&&r.pageSize?m.a.createElement("div",{className:"altrp-pagination"},m.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){j((function(e){return Math.max(e-1,0)})),z({}),N({})},disabled:1===w},t.prev_text||"Previous Page"),m.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",w),m.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){N({}),z({}),j((function(e){return l&&l.hasMore?e+1:e}))},disabled:!l||!l.hasMore},t.next_text||"Next Page")):"")}}}]);
//# sourceMappingURL=923b6463be93e57adc2c.bundle.js.map