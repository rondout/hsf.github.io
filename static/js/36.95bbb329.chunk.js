(this["webpackJsonpui-ngx"]=this["webpackJsonpui-ngx"]||[]).push([[36],{1003:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var r=a(5),s=a(6),i=a(42),c=a(83),n=a(711),o=a(134),l=a(550),d=a(0),u=a(171),j=a(43),b=a(361),h=a(47),O=a(153),m=a(127),f=a(93),x=a(154),g=a(36),v=a(24),w=a(51),p=a(110),N=a(79),S=a(249),P=a(256),C=a(175),y=a(655),k=a(217),R=a(135),z=a(34),F=a(1),q=Object(k.a)((function(e){return{avatarContainer:{width:96,height:96,cursor:"pointer",position:"relative"},avatar:{width:96,height:96},avatarBorder:{height:"100%",width:"100%",position:"absolute",borderRadius:"50%",top:0,left:0,border:"3px solid "+e.palette.success.main,boxSizing:"border-box"}}}));function A(e){var t=Object(j.c)(h.n),a=Object(u.a)().t,o=Object(d.useState)(null===t||void 0===t?void 0:t.avatar),l=Object(s.a)(o,2),b=l[0],O=l[1],m=Object(j.b)(),f=q();return Object(F.jsx)(R.b,Object(r.a)(Object(r.a)({},e),{},{title:"user.editAvatar",size:"md",onOk:function(){var a=Object(r.a)(Object(r.a)({},t),{},{avatar:b});p.a.updateUser(a).then((function(t){m(Object(N.f)(t)),v.c.success("user.setAvatarSuccessed"),e.onClose()}))},onClose:function(){O(null===t||void 0===t?void 0:t.avatar),e.onClose()},children:Object(F.jsxs)(i.a,{className:"flex",children:[Object(F.jsxs)("figure",{style:{marginRight:80},children:[Object(F.jsx)(n.a,{sx:{width:150,height:150},src:z.n.get(b),alt:""}),Object(F.jsx)("figcaption",{children:Object(F.jsx)(c.a,{sx:{mt:3},textAlign:"center",variant:"subtitle1",children:a("user.currentAvatar")})})]}),Object(F.jsx)(y.a,{container:!0,spacing:5,children:z.o.map((function(e){return Object(F.jsx)(y.a,{item:!0,children:Object(F.jsxs)(i.a,{onClick:function(){return function(e){O(e)}(e)},className:f.avatarContainer,children:[Object(F.jsx)(n.a,{sx:{width:96,height:96},src:z.n.get(e)}),e===b&&Object(F.jsx)(i.a,{className:f.avatarBorder,children:Object(F.jsx)(w.a,{style:{position:"absolute",right:-16},icon:"ic_success",color:"#4CAF50"})})]})},e)}))})]})}))}var M=[new m.a(g.c.zh,b.a.get(g.c.zh)),new m.a(g.c.en,b.a.get(g.c.en))],I={currentPassword:"",newPassword:"",passwordConfirm:""};function D(){var e=Object(u.a)().t,t=Object(j.c)(h.n),a=t.avatar,g=t.firstName,y=t.lastName,k=t.email,R=t.additionalInfo,q=Object(d.useState)(),D=Object(s.a)(q,2),E=D[0],J=D[1],V=Object(d.useState)(),B=Object(s.a)(V,2),H=B[0],U=B[1],_=Object(d.useState)(!1),L=Object(s.a)(_,2),T=L[0],G=L[1],K=Object(d.useState)(!1),Q=Object(s.a)(K,2),W=Q[0],X=Q[1],Y=Object(j.b)(),Z=Object(d.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(d.useMemo)((function(){return{firstName:g,lastName:y,language:null===R||void 0===R?void 0:R.language,email:k}}),[R,g,k,y]),re=Object(x.a)({initialValues:ae,validateOnMount:!0,validationSchema:f.b({firstName:f.c().required("user.firstNameRequired"),lastName:f.c().required("user.lastNameRequired"),email:f.c().email("createAdminErrors.emailNotValid").required("createAdminErrors.email"),language:f.c().required("user.languageRequired")}),onSubmit:function(){}}),se=Object(x.a)({initialValues:I,validateOnMount:!0,validationSchema:f.b({currentPassword:f.c().required("user.pwdRequired").min(8,"user.pwdMin8"),newPassword:f.c().required("user.pwdRequired").min(8,"user.pwdMin8"),passwordConfirm:f.c().required("user.pwdRequired").min(8,"user.pwdMin8")}),onSubmit:function(){}}),ie=function(){se.resetForm(),U(!1)};return Object(F.jsx)(C.a,{containerFullHeight:!0,containerMargin:!1,fullHeight:!0,title:e("user.userMenus.PROFILE"),children:Object(F.jsxs)(i.a,{sx:{px:{xs:1,lg:2},pb:2},children:[Object(F.jsxs)(i.a,{children:[Object(F.jsx)(c.a,{children:e("user.userInfo")}),Object(F.jsxs)(i.a,{sx:{my:2},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.avatar")}),Object(F.jsxs)(i.a,{sx:{height:80,width:80,position:"relative","&:hover .flex":{display:"flex"}},children:[Object(F.jsx)(n.a,{sx:{height:80,width:80},src:z.n.get(a)}),Object(F.jsx)(i.a,{onClick:function(){te(!0)},className:"flex",sx:{position:"absolute",top:0,left:0,height:80,width:80,borderRadius:"50%",display:"none","&:hover":{bgcolor:"#0000002b",cursor:"pointer"}},children:Object(F.jsx)(w.a,{icon:"ic_edit",fontSize:40,mr:0,color:"#fff"})})]})]}),Object(F.jsxs)(i.a,{sx:{height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.firstName")}),E&&Object(F.jsx)(O.a,Object(r.a)(Object(r.a)({error:re.errors.firstName&&re.touched.firstName},re.getFieldProps("firstName")),{},{size:"small",width:260})),!E&&Object(F.jsx)(c.a,{children:g})]}),Object(F.jsxs)(i.a,{sx:{height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.lastName")}),E&&Object(F.jsx)(O.a,Object(r.a)(Object(r.a)({error:re.errors.lastName&&re.touched.lastName},re.getFieldProps("lastName")),{},{size:"small",width:260})),!E&&Object(F.jsx)(c.a,{children:y})]}),Object(F.jsxs)(i.a,{sx:{height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.email")}),E&&Object(F.jsx)(O.a,Object(r.a)(Object(r.a)({error:re.errors.email&&re.touched.email},re.getFieldProps("email")),{},{size:"small",width:260})),!E&&Object(F.jsx)(c.a,{children:k})]}),Object(F.jsxs)(i.a,{sx:{height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.language")}),!E&&Object(F.jsx)(c.a,{children:b.a.get(null===R||void 0===R?void 0:R.language)}),E&&Object(F.jsx)(m.b,Object(r.a)(Object(r.a)({error:re.errors.language&&re.touched.language},re.getFieldProps("language")),{},{size:"small",width:260,options:M}))]}),!E&&Object(F.jsx)(o.a,{variant:"contained",sx:{my:2},onClick:function(){return J(!0)},children:e("user.editInfo")}),E&&Object(F.jsxs)(i.a,{sx:{my:2},children:[Object(F.jsx)(o.a,{variant:"outlined",sx:{mr:2},onClick:function(){re.setValues(ae),J(!1)},children:e("common.cancel")}),Object(F.jsx)(S.a,{loading:T,onClick:function(){var a=re.errors.firstName||re.errors.language||re.errors.lastName;if(a)v.c.error(e(a));else{var r=JSON.parse(JSON.stringify(t));r.firstName=re.values.firstName,r.lastName=re.values.lastName,r.additionalInfo||(r.additionalInfo={}),G(!0),r.additionalInfo.language=re.values.language,p.a.updateUser(r).then((function(e){v.c.success("common.editSuccessed"),localStorage.setItem("language",re.values.language),G(!1),Y(Object(N.f)(e)),J(!1)})).catch((function(){G(!1)}))}},variant:"contained",children:Object(F.jsx)("span",{children:e("common.confirm")})})]})]}),Object(F.jsx)(l.a,{}),Object(F.jsxs)(i.a,{children:[Object(F.jsx)(c.a,{sx:{my:2},children:e("user.accountSecurity")}),H&&Object(F.jsxs)(i.a,{sx:{pb:2},children:[Object(F.jsxs)(i.a,{sx:{height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.currentPassword")}),Object(F.jsx)(P.a,Object(r.a)(Object(r.a)({error:se.errors.currentPassword&&se.touched.currentPassword},se.getFieldProps("currentPassword")),{},{size:"small",width:260}))]}),Object(F.jsxs)(i.a,{className:"flex-start",children:[Object(F.jsxs)(i.a,{sx:{width:440,mr:6,height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.newPassword")}),Object(F.jsx)(P.a,Object(r.a)(Object(r.a)({error:se.errors.newPassword&&se.touched.newPassword},se.getFieldProps("newPassword")),{},{size:"small",width:260}))]}),Object(F.jsxs)(i.a,{sx:{width:440,height:56},className:"flex-start",children:[Object(F.jsx)(c.a,{variant:"subtitle1",sx:{width:150},children:e("user.passwordConfirm")}),Object(F.jsx)(P.a,Object(r.a)(Object(r.a)({error:se.errors.passwordConfirm&&se.touched.passwordConfirm},se.getFieldProps("passwordConfirm")),{},{size:"small",width:260}))]})]})]}),!H&&Object(F.jsx)(o.a,{variant:"contained",onClick:function(){return U(!0)},children:e("user.changePwd")}),H&&Object(F.jsxs)(i.a,{sx:{},children:[Object(F.jsx)(o.a,{variant:"outlined",sx:{mr:2},onClick:ie,children:e("common.cancel")}),Object(F.jsx)(S.a,{loading:W,onClick:function(){se.handleSubmit(),se.validateForm().then((function(t){var a=Object.values(t||{});if(a.length)v.c.error(e(a[0]));else{var r=se.values,s=r.currentPassword,i=r.newPassword;i===r.passwordConfirm?(X(!0),p.a.changePassword({currentPassword:s,newPassword:i}).then((function(){X(!1),v.c.success("user.changePwdSuccessed"),ie()})).catch((function(e){var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.message&&v.c.error(null===e||void 0===e?void 0:e.data.message),X(!1)}))):v.c.error(e("user.passwordNotSame"))}}))},variant:"contained",children:Object(F.jsx)("span",{children:e("common.confirm")})})]})]}),Object(F.jsx)(A,{avatar:a,open:ee,onClose:function(){te(!1)}})]})})}},711:function(e,t,a){"use strict";var r=a(6),s=a(4),i=a(2),c=a(0),n=a(8),o=a(152),l=a(7),d=a(16),u=a(32),j=a(1),b=Object(u.a)(Object(j.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=a(92),O=a(103);function m(e){return Object(h.a)("MuiAvatar",e)}Object(O.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=Object(l.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&Object(i.a)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),g=Object(l.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=Object(l.a)(b,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var w=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAvatar"}),l=a.alt,u=a.children,b=a.className,h=a.component,O=void 0===h?"div":h,w=a.imgProps,p=a.sizes,N=a.src,S=a.srcSet,P=a.variant,C=void 0===P?"circular":P,y=Object(s.a)(a,f),k=null,R=function(e){var t=e.crossOrigin,a=e.referrerPolicy,s=e.src,i=e.srcSet,n=c.useState(!1),o=Object(r.a)(n,2),l=o[0],d=o[1];return c.useEffect((function(){if(s||i){d(!1);var e=!0,r=new Image;return r.onload=function(){e&&d("loaded")},r.onerror=function(){e&&d("error")},r.crossOrigin=t,r.referrerPolicy=a,r.src=s,i&&(r.srcset=i),function(){e=!1}}}),[t,a,s,i]),l}(Object(i.a)({},w,{src:N,srcSet:S})),z=N||S,F=z&&"error"!==R,q=Object(i.a)({},a,{colorDefault:!F,component:O,variant:C}),A=function(e){var t=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(o.a)(a,m,t)}(q);return k=F?Object(j.jsx)(g,Object(i.a)({alt:l,src:N,srcSet:S,sizes:p,ownerState:q,className:A.img},w)):null!=u?u:z&&l?l[0]:Object(j.jsx)(v,{className:A.fallback}),Object(j.jsx)(x,Object(i.a)({as:O,ownerState:q,className:Object(n.a)(A.root,b),ref:t},y,{children:k}))}));t.a=w}}]);