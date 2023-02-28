"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{7990:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(9236),a=n(4165),u=n(5861),c=n(8152),o="MoviesPage_searchbar__h5+Hv",s="MoviesPage_searchForm__MtlmP",i="MoviesPage_searchFormButton__wppho",f="MoviesPage_SearchFormInput__weghc",p=n(2791),l=n(1207),h=n(4880),v=n(1523),d=n(1686),m=n.n(d),g=n(184),x=function(){var e=(0,p.useState)(""),t=(0,c.Z)(e,2),n=t[0],d=t[1],x=(0,p.useState)([]),w=(0,c.Z)(x,2),Z=w[0],y=w[1],_=(0,h.TH)(),k=(0,h.k6)();(0,p.useEffect)((function(){var e=new URLSearchParams(_.search).get("query");if(e){var t=function(){var t=(0,u.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.z1)(e);case 2:n=t.sent,r=n.results,y(r),d(e),console.log(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[_.search]);var b=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.trim()){e.next=10;break}return e.next=4,(0,l.z1)(n);case 4:u=e.sent,c=u.results,y(c),d(""),0===c.length&&m().Notify.warning("No movies found! Please change your request and try again"),k.push((0,r.Z)((0,r.Z)({},_),{},{search:"query=".concat(n)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("header",{className:o,children:(0,g.jsxs)("form",{className:s,onSubmit:b,children:[(0,g.jsx)("input",{onChange:function(e){return d(e.target.value)},className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:n}),(0,g.jsx)("button",{type:"submit",className:i,children:"search"})]})}),Z.length>0&&Z.map((function(e){var t=e.id,n=e.title;return(0,g.jsx)("ul",{children:(0,g.jsx)("li",{children:(0,g.jsx)(v.rU,{to:{pathname:"/movies/".concat("".concat(t)),state:{from:{location:_}}},children:(0,g.jsx)("p",{children:n})})},t)},"ul-".concat(t))}))]})}},1207:function(e,t,n){n.d(t,{Jh:function(){return h},M1:function(){return l},TP:function(){return f},wr:function(){return p},yA:function(){return s},z1:function(){return i}});var r=n(4165),a=n(5861),u=n(4569),c=n.n(u);c().defaults.baseURL="https://api.themoviedb.org/3/";var o="9bca1f873478832455af25e449c4a86d",s="https://image.tmdb.org/t/p/w500",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,c().get(n);case 3:return a=e.sent,u=a.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"$?api_key=").concat(o,"&language=en-US"),e.next=3,c().get(n);case 3:return a=e.sent,u=a.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(o),e.next=3,c().get(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u,s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u="movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,c().get(u);case 3:return s=e.sent,i=null===s||void 0===s||null===(n=s.data)||void 0===n||null===(a=n.cast)||void 0===a?void 0:a.filter((function(e,t,n){return n.findIndex((function(t){return t.id===e.id}))===t})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),e.next=3,c().get(n);case 3:return a=e.sent,u=a.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=MoviesPage.42391f0b.chunk.js.map