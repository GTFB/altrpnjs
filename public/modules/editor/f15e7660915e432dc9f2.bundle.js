(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{397:function(e,t,a){"use strict";a.r(t);var r=a(8),l=a.n(r),n=a(393),c=a(395);t.default=function(e){var t=e.settings,a=e.query;if(!t.tables_columns)return React.createElement("div",{children:"Please add Column"});var r=Object(c.a)(a.modelName,(function(){return a.getResource().getQueried()})),s=r.data,o=r.error,u=r.isFetching,m=[];t.tables_columns.forEach((function(e){e.column_name&&e.accessor&&m.push(e)}));var d=Object(n.useTable)({columns:React.useMemo((function(){return m||[]}),[t.tables_columns]),data:React.useMemo((function(){return s||[]}),[s])}),p=d.getTableProps,i=d.getTableBodyProps,b=d.headerGroups,R=d.rows,f=d.prepareRow;return React.createElement("table",l()({className:"altrp-table"},p()),React.createElement("thead",{className:"altrp-table-head"},b.map((function(e){return React.createElement("tr",l()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return React.createElement("th",l()({},e.getHeaderProps(),{className:"altrp-table-th"}),e.render("column_name"))})))}))),React.createElement("tbody",l()({},i(),{className:"altrp-table-tbody"}),o?React.createElement("tr",null,React.createElement("td",null,"error")):u?React.createElement("tr",null,React.createElement("td",null,"Loading")):R.map((function(e,t){return f(e),React.createElement("tr",l()({},e.getRowProps(),{className:"altrp-table-tr"}),e.cells.map((function(e){return React.createElement("td",l()({},e.getCellProps(),{className:"altrp-table-td"}),e.render("Cell"))})))}))))}}}]);
//# sourceMappingURL=f15e7660915e432dc9f2.bundle.js.map