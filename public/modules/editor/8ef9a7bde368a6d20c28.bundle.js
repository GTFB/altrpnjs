(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{393:function(e,t,a){(e.exports=a(85)(!1)).push([e.i,"",""])},418:function(e,t,a){var r=a(393);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},l=a(86)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(393,(function(){var t=a(393);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},421:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),l=a(18),o=a.n(l),s=a(24),c=a.n(s),u=a(166),i=a.n(u),m=a(0),p=a.n(m),d=a(416),f=a(419);a(418);t.default=function(e){var t=e.settings,a=e.query;if(!t.tables_columns||!t.tables_columns.length)return p.a.createElement("div",{children:"Please Add Column"});if(!a.modelName)return p.a.createElement("div",{children:"Please Choose Model"});var r,l,s,u=[],b=Object(m.useState)(1),g=i()(b,2),h=g[0],v=g[1],E=Object(m.useCallback)(function(){var e=c()(o.a.mark((function e(t){var r,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:1,e.abrupt("return",a.getQueried({page:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());if(a.pageSize){var N=Object(f.b)([a.modelName,h],E,{}),_=N.status,w=N.resolvedData,P=N.latestData,x=N.error;u=w?w[a.modelName]:u,r=_,l=x,s=P,Object(m.useEffect)((function(){(null==P?void 0:P.hasMore)&&f.a.prefetchQuery([a.modelName,h+1],E)}),[P,E,h])}else{var y=Object(f.c)(a.modelName,(function(){return a.getResource().getQueried()}),[a.modelName]),C=y.status,M=y.data,j=y.error;u=M,r=C,l=j}var k=[];t.tables_columns.forEach((function(e){e.column_name&&e.accessor&&k.push(e)}));var O=Object(d.useTable)({columns:p.a.useMemo((function(){return k||[]}),[t.tables_columns]),data:p.a.useMemo((function(){return u||[]}),[u])}),S=O.getTableProps,R=O.getTableBodyProps,T=O.headerGroups,H=O.rows,Q=O.prepareRow;return p.a.createElement(p.a.Fragment,null,p.a.createElement("table",n()({className:"altrp-table"},S()),p.a.createElement("thead",{className:"altrp-table-head"},T.map((function(e){return p.a.createElement("tr",n()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return p.a.createElement("th",n()({},e.getHeaderProps(),{className:"altrp-table-th"}),e.render("column_name"))})))}))),p.a.createElement("tbody",n()({},R(),{className:"altrp-table-tbody"}),"error"===r?p.a.createElement("tr",null,p.a.createElement("td",null,l.message)):"loading"===r?p.a.createElement("tr",null,p.a.createElement("td",null,"Loading")):H.map((function(e,t){return Q(e),p.a.createElement("tr",n()({},e.getRowProps(),{className:"altrp-table-tr"}),e.cells.map((function(e){return p.a.createElement("td",n()({},e.getCellProps(),{className:"altrp-table-td"}),e.render("Cell"))})))})))),"prev-next"===a.paginationType&&a.pageSize?p.a.createElement("div",{className:"altrp-pagination"},p.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){return v((function(e){return Math.max(e-1,0)}))},disabled:1===h},t.prev_text||"Previous Page"),p.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",h),p.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){return v((function(e){return s&&s.hasMore?e+1:e}))},disabled:!s||!s.hasMore},t.next_text||"Next Page")):"")}}}]);
//# sourceMappingURL=8ef9a7bde368a6d20c28.bundle.js.map