(this.webpackJsonpreact_new=this.webpackJsonpreact_new||[]).push([[4],{227:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(3),s=n(33),o=n(34),i=n(36),a=n(35),c=n(0),u=n.n(c),d=n(7),l=n(2),j=function(t){return function(e){Object(i.a)(c,e);var n=Object(a.a)(c);function c(){return Object(s.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(t,Object(r.a)({},this.props)):Object(l.jsx)(d.a,{to:"/login"})}}]),c}(u.a.Component)}},228:function(t,e,n){t.exports={formControl:"FormControls_formControl__P_EJZ",error:"FormControls_error__1D48X",formAnyError:"FormControls_formAnyError__3-0vq"}},229:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));var r=n(3),s=n(239),o=(n(0),n(228)),i=n.n(o),a=n(2),c=function(t){var e=t.input,n=t.meta,o=Object(s.a)(t,["input","meta"]),c=n.touched&&n.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),o))}),c&&Object(a.jsx)("span",{children:n.error})]})},u=function(t){var e=t.input,n=t.meta,o=Object(s.a)(t,["input","meta"]),c=n.touched&&n.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),o))}),c&&Object(a.jsx)("span",{children:n.error})]})}},230:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){if(!t)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"},s=function(t){return function(e){if(e&&e.length>t)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u0430(\u043e\u0432)!")}}},237:function(t,e,n){"use strict";e.a=n.p+"static/media/man.9b83f216.png"},238:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(60);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,s=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){s=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(s)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},297:function(t,e,n){t.exports={description:"ProfileInfo_description__21Wgb",img:"ProfileInfo_img__189IB",text:"ProfileInfo_text__2Fgkr",photo:"ProfileInfo_photo__siJZu"}},298:function(t,e,n){t.exports={item:"Post_item__64m3H",likes:"Post_likes__29It4"}},299:function(t,e,n){t.exports={postsPadding:"MyPost_postsPadding__3VY_d",button:"MyPost_button__3aVfd",textarea:"MyPost_textarea__287dQ"}},308:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n(33),o=n(34),i=n(36),a=n(35),c=n(0),u=n.n(c),d=n(237),l=n(297),j=n.n(l),p=n(67),f=n(238),b=n(2),h=function(t){var e=Object(c.useState)(!1),n=Object(f.a)(e,2),r=n[0],s=n[1],o=Object(c.useState)(t.status),i=Object(f.a)(o,2),a=i[0],u=i[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!r&&Object(b.jsx)("div",{children:Object(b.jsxs)("span",{onDoubleClick:function(){s(!0)},children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",t.status||"No status"]})}),r&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(a)},onChange:function(t){u(t.currentTarget.value)},value:a})})]})},O=function(t){if(!t.profile)return Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{})});return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:j.a.description,children:[Object(b.jsx)("img",{className:j.a.photo,src:t.profile.photos.large||d.a,alt:""}),Object(b.jsx)("div",{children:t.isOwner&&Object(b.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.uploadPhoto(e.target.files[0])}})})]}),Object(b.jsxs)("div",{className:j.a.text,children:[Object(b.jsxs)("div",{children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",t.profile.fullName]}),Object(b.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]})]})},m=n.p+"static/media/react.51facde9.png",x=n(298),v=n.n(x),_=function(t){return Object(b.jsxs)("div",{className:v.a.item,children:[Object(b.jsx)("img",{src:m,alt:""}),Object(b.jsx)("div",{children:t.text}),Object(b.jsxs)("div",{className:v.a.likes,children:[t.likes," \u043b\u0430\u0439\u043a\u043e\u0432"]})]})},P=n(299),y=n.n(P),g=n(109),S=n(110),k=n(229),w=n(230),N=Object(w.a)(50),C=Object(S.a)({form:"addPostForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{className:y.a.textarea,children:Object(b.jsx)(g.a,{component:k.b,name:"newPostBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",validate:N})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:y.a.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(b.jsx)("button",{className:y.a.button,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})),I=function(t){var e=t.posts.map((function(t){return Object(b.jsx)(_,{text:t.text,likes:t.likes})}));return Object(b.jsxs)("div",{className:y.a.postsPadding,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(b.jsx)("div",{children:Object(b.jsx)(C,{onSubmit:function(e){t.addPost(e.newPostBody)}})})]}),Object(b.jsx)("div",{children:e})]})},A=n(24),F=n(61),E=Object(A.b)((function(t){return{posts:t.profilePage.posts,defaultPostText:t.profilePage.defaultPostText}}),(function(t){return{addPost:function(e){t(Object(F.a)(e))}}}))(I),B=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{uploadPhoto:t.uploadPhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(E,{})]})},D=n(19),J=n(7),M=n(227),T=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"updateProfile",value:function(){var t=this.props.match.params.id;t||(t=this.props.myId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.id!==t.match.params.id&&this.updateProfile()}},{key:"render",value:function(){return Object(b.jsx)(B,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.id,uploadPhoto:this.props.uploadPhoto}))}}]),n}(u.a.Component);e.default=Object(D.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,myId:t.auth.id}}),{getUserProfile:F.d,getStatus:F.c,updateStatus:F.e,uploadPhoto:F.f}),J.f,M.a)(T)}}]);
//# sourceMappingURL=4.0f50ec10.chunk.js.map