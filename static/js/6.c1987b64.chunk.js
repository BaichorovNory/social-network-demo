/*! For license information please see 6.c1987b64.chunk.js.LICENSE.txt */
(this.webpackJsonpreact_new=this.webpackJsonpreact_new||[]).push([[6],{227:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),o=n(33),s=n(34),a=n(36),i=n(35),u=n(0),c=n.n(u),l=n(7),p=n(2),f=function(e){return function(t){Object(a.a)(u,t);var n=Object(i.a)(u);function u(){return Object(o.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(r.a)({},this.props)):Object(p.jsx)(l.a,{to:"/login"})}}]),u}(c.a.Component)}},237:function(e,t,n){"use strict";t.a=n.p+"static/media/man.9b83f216.png"},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,s=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},294:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2chRT",text:"Users_text__1WN0g",button:"Users_button__OQVWh",selectPage:"Users_selectPage__lnQoN"}},295:function(e,t,n){e.exports={paginator:"Paginator_paginator__2dTLX",pageNumber:"Paginator_pageNumber__1Iqoz",selectPage:"Paginator_selectPage__1zDxl",button:"Paginator_button__3meaX"}},296:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},309:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n(33),s=n(34),a=n(36),i=n(35),u=n(0),c=n.n(u),l=n(294),p=n.n(l),f=n(15),g=n(237),h=n(68),b=n(238),j=n(295),d=n.n(j),O=n(296),P=n.n(O),m=n(2),v=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.portionSize,a=void 0===s?10:s,i=Math.ceil(t/n),c=[],l=1;l<=i;++l)c.push(l);var p=Math.ceil(i/a),f=Object(u.useState)(1),g=Object(b.a)(f,2),j=g[0],O=g[1],v=j*a,x=(j-1)*a+1;return Object(m.jsxs)("div",{className:d.a.paginator,children:[j>1&&Object(m.jsx)("button",{onClick:function(){O(j-1)},className:d.a.button,children:"\u041d\u0430\u0437\u0430\u0434"}),c.filter((function(e){return e>=x&&e<=v})).map((function(e){return Object(m.jsx)("span",{className:P()(Object(h.a)({},d.a.selectPage,r===e),d.a.pageNumber),onClick:function(t){o(e)},children:e},e)})),p>j&&Object(m.jsx)("button",{onClick:function(){O(j+1)},className:d.a.button,children:"\u0414\u0430\u043b\u0435\u0435"})]})},x=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(v,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize})}),e.users.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:Object(m.jsx)(f.b,{to:"/profile/"+t.id,children:Object(m.jsx)("img",{src:null!=t.photos.small?t.photos.small:g.a,alt:"",className:p.a.userPhoto})})}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("span",{className:p.a.text,children:[Object(m.jsxs)("div",{children:["\u0418\u043c\u044f: ",t.name]}),Object(m.jsx)("div",{children:t.status||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})]}),Object(m.jsx)("div",{children:t.followed?Object(m.jsx)("button",{className:p.a.button,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(m.jsx)("button",{className:p.a.button,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]})]},t.id)}))]})},w=n(67),_=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.isFetching?Object(m.jsx)(w.a,{}):null,Object(m.jsx)(x,{totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,users:this.props.users,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(c.a.Component),y=n(62),C=n(227),S=n(19),k=function(e){return e.usersPage.users},N=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.totalUsersCount},I=function(e){return e.usersPage.followingInProgress},A=function(e){return e.usersPage.isFetching};t.default=Object(S.d)(Object(r.b)((function(e){return{isAuth:e.auth.isAuth,users:k(e),pageSize:N(e),isFetching:A(e),currentPage:U(e),totalUsersCount:z(e),followingInProgress:I(e)}}),{setCurrentPage:y.d,getUsersThunkCreator:y.c,toggleFollowingProgress:y.e,follow:y.b,unfollow:y.f}),C.a)(_)}}]);
//# sourceMappingURL=6.c1987b64.chunk.js.map