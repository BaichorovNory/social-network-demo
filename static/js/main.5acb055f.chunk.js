(this.webpackJsonpreact_new=this.webpackJsonpreact_new||[]).push([[0],{100:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return O})),n.d(e,"g",(function(){return x})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return g})),n.d(e,"f",(function(){return w}));var r=n(9),a=n.n(r),s=n(15),c=n(37),i=n(5),o=n(20),u="SET_USERS",l="TOGGLE_FOLLOW",d="SET_CURRENT_PAGE",j="TOGGLE_IS_FETCHING",f="SET_USERS_TOTAL_COUNT",p="TOGGLE_IS_FOLLOWING_PROGRESS",b={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(t)),r(_(!0)),n.next=4,o.c.getUsers(t,e);case 4:s=n.sent,r(_(!1)),r(m(s.items)),r(y(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w(!0,t)),e.next=3,o.c.follow(t);case 3:0===e.sent.data.resultCode&&n(v(t)),n(w(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w(!0,t)),e.next=3,o.c.unfollow(t);case 3:0===e.sent.data.resultCode&&n(v(t)),n(w(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return{type:u,users:t}},v=function(t){return{type:l,userId:t}},g=function(t){return{type:d,currentPage:t}},_=function(t){return{type:j,isFetching:t}},y=function(t){return{type:f,totalCount:t}},w=function(t,e){return{type:p,isFetching:t,userId:e}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!t.followed}):t}))});case u:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case f:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalCount});case j:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case p:return Object(i.a)(Object(i.a)({},t),{},{followingInProgress:e.userId?[].concat(Object(c.a)(t.followingInProgress),[e.userId]):[t.followingInProgress.filter((function(t){return t!==e.userId}))]});default:return t}}},111:function(t,e,n){"use strict";e.a=n.p+"static/media/man.9b83f216.png"},13:function(t,e,n){t.exports={nav:"Navbar_nav__1wu3z",item:"Navbar_item__LgpA0",activeLink:"Navbar_activeLink__2D2rt"}},132:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(37),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"\u0418\u0432\u0430\u043d"},{id:2,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439"},{id:3,name:"\u041f\u0435\u0442\u0440"},{id:4,name:"\u0410\u043d\u0434\u0440\u0435\u0439"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u0417\u0434\u0430\u0440\u043e\u0432"},{id:3,message:"\u041e\u043a\u0435\u0439"},{id:4,message:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e"}]},i=function(t){return{type:s,newMessageBody:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:var n=Object(a.a)(Object(a.a)({},t),{},{messages:Object(r.a)(t.messages),dialogs:Object(r.a)(t.dialogs)}),i=e.newMessageBody,o="\u0411\u0435\u0437 \u0438\u043c\u0435\u043d\u0438";return n.messages.push({id:5,message:i}),n.dialogs.push({id:5,name:o}),n;default:return t}}},138:function(t,e,n){t.exports={img:"Preloader_img__bnwNy"}},166:function(t,e,n){},167:function(t,e,n){},20:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n(137),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"df8f2239-0b7c-4065-ad2f-ebb355ed1016"}}),s={getUsers:function(t,e){return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t))},unfollow:function(t){return a.delete("follow/".concat(t))}},c={getProfile:function(t){return a.get("profile/".concat(t))},getStatus:function(t){return a.get("profile/status/".concat(t))},updateStatus:function(t){return a.put("profile/status",{status:t})},uploadPhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})}},i={me:function(){return a.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},294:function(t,e,n){"use strict";n.r(e);n(166);var r=n(28),a=n(29),s=n(31),c=n(30),i=(n(167),n(0)),o=n.n(i),u=n(16),l=n(11),d=n(13),j=n.n(d),f=n(14),p=n(1),b=function(){return Object(p.jsxs)("nav",{className:j.a.nav,children:[Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/profile",activeClassName:j.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/messages",activeClassName:j.a.activeLink,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/news",activeClassName:j.a.activeLink,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/friends",activeClassName:j.a.activeLink,children:"\u0414\u0440\u0443\u0437\u044c\u044f"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/music",activeClassName:j.a.activeLink,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/users",activeClassName:j.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/settings",activeClassName:j.a.activeLink,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})},h=n(9),O=n.n(h),x=n(15),m=n(5),v=n(40),g="INITIALIZED_SUCCESS",_={initialized:!1},y=function(){return{type:g}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(m.a)(Object(m.a)({},t),{},{initialized:!0});default:return t}},P=n(66),S=n(92),k=n.n(S),C=function(t){return Object(p.jsx)("header",{className:k.a.header,children:Object(p.jsx)("div",{className:k.a.loginBlock,children:t.isAuth?Object(p.jsxs)("div",{children:[t.login," ",Object(p.jsx)("button",{onClick:t.logout,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(p.jsx)(f.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})})},N=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsx)(C,Object(m.a)({},this.props))}}]),n}(o.a.Component),E=Object(u.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:v.d})(N),L=n(111),I=n(69),T=n.n(I),A=n(88),F=function(t){var e=Object(i.useState)(!1),n=Object(A.a)(e,2),r=n[0],a=n[1],s=Object(i.useState)(t.status),c=Object(A.a)(s,2),o=c[0],u=c[1];Object(i.useEffect)((function(){u(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!r&&Object(p.jsx)("div",{children:Object(p.jsxs)("span",{onDoubleClick:function(){a(!0)},children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",t.status||"No status"]})}),r&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(o)},onChange:function(t){u(t.currentTarget.value)},value:o})})]})},U=function(t){if(!t.profile)return Object(p.jsx)(P.a,{});return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:T.a.description,children:[Object(p.jsx)("img",{className:T.a.photo,src:t.profile.photos.large||L.a,alt:""}),Object(p.jsx)("div",{children:t.isOwner&&Object(p.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.uploadPhoto(e.target.files[0])}})})]}),Object(p.jsxs)("div",{className:T.a.text,children:[Object(p.jsxs)("div",{children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",t.profile.fullName]}),Object(p.jsx)(F,{status:t.status,updateStatus:t.updateStatus})]})]})},D=n.p+"static/media/react.51facde9.png",z=n(93),B=n.n(z),G=function(t){return Object(p.jsxs)("div",{className:B.a.item,children:[Object(p.jsx)("img",{src:D,alt:""}),Object(p.jsx)("div",{children:t.text}),Object(p.jsxs)("div",{className:B.a.likes,children:[t.likes," \u043b\u0430\u0439\u043a\u043e\u0432"]})]})},R=n(54),M=n.n(R),H=n(133),Z=n(134),J=n(97),V=n(98),W=Object(V.a)(50),X=Object(Z.a)({form:"addPostForm"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{className:M.a.textarea,children:Object(p.jsx)(H.a,{component:J.b,name:"newPostBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",validate:W})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:M.a.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(p.jsx)("button",{className:M.a.button,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})),K=function(t){var e=t.posts.map((function(t){return Object(p.jsx)(G,{text:t.text,likes:t.likes})}));return Object(p.jsxs)("div",{className:M.a.postsPadding,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(p.jsx)("div",{children:Object(p.jsx)(X,{onSubmit:function(e){t.addPost(e.newPostBody)}})})]}),Object(p.jsx)("div",{children:e})]})},Q=n(37),Y=n(20),q="ADD-POST",$="SET_STATUS",tt="UPLOAD_PHOTO",et="SET_USER_PROFILE",nt={posts:[{id:1,text:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likes:10},{id:2,text:"\u0412\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442",likes:12},{id:3,text:"\u0422\u0440\u0435\u0442\u0438\u0439 \u043f\u043e\u0441\u0442",likes:100},{id:4,text:"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439 \u043f\u043e\u0441\u0442",likes:777}],profile:null},rt=function(t){return{type:$,status:t}},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:var n=Object(m.a)(Object(m.a)({},t),{},{posts:Object(Q.a)(t.posts)});return n.posts.push({id:5,text:e.newPostBody,likes:0}),n;case et:return Object(m.a)(Object(m.a)({},t),{},{profile:e.profile});case $:return Object(m.a)(Object(m.a)({},t),{},{status:e.status});case tt:return Object(m.a)(Object(m.a)({},t),{},{profile:Object(m.a)(Object(m.a)({},t.profile),{},{photos:e.photos})});default:return t}},st=Object(u.b)((function(t){return{posts:t.profilePage.posts,defaultPostText:t.profilePage.defaultPostText}}),(function(t){return{addPost:function(e){t(function(t){return{type:q,newPostBody:t}}(e))}}}))(K),ct=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(U,{uploadPhoto:t.uploadPhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(p.jsx)(st,{})]})},it=n(10),ot=n(99),ut=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"updateProfile",value:function(){var t=this.props.match.params.id;t||(t=this.props.myId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.id!==t.match.params.id&&this.updateProfile()}},{key:"render",value:function(){return Object(p.jsx)(ct,Object(m.a)(Object(m.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.id,uploadPhoto:this.props.uploadPhoto}))}}]),n}(o.a.Component),lt=Object(it.d)(Object(u.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,myId:t.auth.id}}),{getUserProfile:function(t){return function(){var e=Object(x.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.b.getProfile(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data,{type:et,profile:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},getStatus:function(t){return function(){var e=Object(x.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.b.getStatus(t);case 2:r=e.sent,n(rt(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatus:function(t){return function(){var e=Object(x.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(rt(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},uploadPhoto:function(t){return function(){var e=Object(x.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.b.uploadPhoto(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data.data.photos,{type:tt,photos:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()}}),l.f,ot.a)(ut),dt=o.a.lazy((function(){return n.e(8).then(n.bind(null,303))})),jt=o.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),ft=o.a.lazy((function(){return n.e(7).then(n.bind(null,305))})),pt=o.a.lazy((function(){return n.e(5).then(n.bind(null,310))})),bt=o.a.lazy((function(){return n.e(9).then(n.bind(null,306))})),ht=o.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),Ot=o.a.lazy((function(){return n.e(3).then(n.bind(null,309))})),xt=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(E,{}),Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(l.b,{path:"/login",render:function(){return Object(p.jsx)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)(jt,{})})}}),Object(p.jsx)(l.b,{path:"/news",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(dt,{})," "]})}}),Object(p.jsx)(l.b,{path:"/music",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(ft,{})," "]})}}),Object(p.jsx)(l.b,{path:"/friends",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(pt,{})," "]})}}),Object(p.jsx)(l.b,{path:"/settings",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(bt,{})," "]})}}),Object(p.jsx)(l.b,{path:"/users",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(ht,{})," "]})}}),Object(p.jsx)(l.b,{path:"/messages",render:function(){return Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[" ",Object(p.jsx)(Ot,{})," "]})}}),Object(p.jsx)(l.b,{path:"/profile/:id?",render:function(){return Object(p.jsx)(lt,{})}})]})]}):Object(p.jsx)(P.a,{})}}]),n}(o.a.Component),mt=Object(u.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e(Object(v.a)()),t.next=3,Promise.all([n]);case 3:e(y());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(xt),vt=n(64),gt=n.n(vt),_t=n(132),yt={},wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt;return t},Pt=n(135),St=n(100),kt=n(140),Ct=Object(it.c)({profilePage:at,dialogsPage:_t.a,friendsPage:wt,usersPage:St.a,auth:v.b,form:Pt.a,app:w}),Nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.d,Et=Object(it.e)(Ct,Nt(Object(it.a)(kt.a)));window.store=Et;var Lt=Et,It=function(t){t&&t instanceof Function&&n.e(10).then(n.bind(null,307)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))};gt.a.render(Object(p.jsx)(f.a,{children:Object(p.jsx)(u.a,{store:Lt,children:Object(p.jsx)(mt,{})})}),document.getElementById("root")),It()},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return f}));var r=n(9),a=n.n(r),s=n(15),c=n(5),i=n(55),o=n(20),u="SET_USERS_DATA",l={id:null,email:null,login:null,isAuth:!1},d=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){var n,r,s,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.email,i=r.login,e(p(s,c,i,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t,e,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(t,e,n);case 2:0===(c=r.sent).data.resultCode?s(d()):(u=c.data.messages.length>0?c.data.messages[0]:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0435\u043f\u043e\u043b\u0430\u0434\u043a\u0438!",s(Object(i.a)("login",{email:u})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},f=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:0===t.sent.data.resultCode&&e(p(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(t,e,n,r){return{type:u,payload:{id:t,email:e,login:n,isAuth:r}}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(c.a)(Object(c.a)({},t),e.payload);default:return t}}},51:function(t,e,n){t.exports={formControl:"FormControls_formControl__P_EJZ",error:"FormControls_error__1D48X",formAnyError:"FormControls_formAnyError__3-0vq"}},54:function(t,e,n){t.exports={postsPadding:"MyPost_postsPadding__3VY_d",button:"MyPost_button__3aVfd",textarea:"MyPost_textarea__287dQ"}},66:function(t,e,n){"use strict";n(0);var r=n.p+"static/media/ZKZx.4ace5f17.gif",a=n(138),s=n.n(a),c=n(1);e.a=function(){return Object(c.jsx)("img",{src:r,alt:"",className:s.a.img})}},69:function(t,e,n){t.exports={description:"ProfileInfo_description__21Wgb",img:"ProfileInfo_img__189IB",text:"ProfileInfo_text__2Fgkr",photo:"ProfileInfo_photo__siJZu"}},92:function(t,e,n){t.exports={header:"Header_header__2Orl1",loginBlock:"Header_loginBlock__3D-Qh"}},93:function(t,e,n){t.exports={item:"Post_item__64m3H",likes:"Post_likes__29It4"}},97:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(5),a=n(96),s=(n(0),n(51)),c=n.n(s),i=n(1),o=function(t){var e=t.input,n=t.meta,s=Object(a.a)(t,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(o?c.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},e),s))}),o&&Object(i.jsx)("span",{children:n.error})]})},u=function(t){var e=t.input,n=t.meta,s=Object(a.a)(t,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(o?c.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},e),s))}),o&&Object(i.jsx)("span",{children:n.error})]})}},98:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(t){if(!t)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"},a=function(t){return function(e){if(e&&e.length>t)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u0430(\u043e\u0432)!")}}},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(5),a=n(28),s=n(29),c=n(31),i=n(30),o=n(0),u=n.n(o),l=n(11),d=n(1),j=function(t){return function(e){Object(c.a)(o,e);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component)}}},[[294,1,2]]]);
//# sourceMappingURL=main.5acb055f.chunk.js.map