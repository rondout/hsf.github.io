(this["webpackJsonpui-ngx"]=this["webpackJsonpui-ngx"]||[]).push([[44],{711:function(e,t,r){"use strict";var a=r(6),n=r(4),c=r(2),o=r(0),i=r(8),s=r(152),l=r(7),u=r(16),b=r(32),d=r(1),f=Object(b.a)(Object(d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(92),j=r(103);function m(e){return Object(h.a)("MuiAvatar",e)}Object(j.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var O=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(l.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return Object(c.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&Object(c.a)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),v=Object(l.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),p=Object(l.a)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var x=o.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiAvatar"}),l=r.alt,b=r.children,f=r.className,h=r.component,j=void 0===h?"div":h,x=r.imgProps,S=r.sizes,w=r.src,R=r.srcSet,N=r.variant,k=void 0===N?"circular":N,y=Object(n.a)(r,O),M=null,A=function(e){var t=e.crossOrigin,r=e.referrerPolicy,n=e.src,c=e.srcSet,i=o.useState(!1),s=Object(a.a)(i,2),l=s[0],u=s[1];return o.useEffect((function(){if(n||c){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=t,a.referrerPolicy=r,a.src=n,c&&(a.srcset=c),function(){e=!1}}}),[t,r,n,c]),l}(Object(c.a)({},x,{src:w,srcSet:R})),E=w||R,I=E&&"error"!==A,z=Object(c.a)({},r,{colorDefault:!I,component:j,variant:k}),C=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(s.a)(r,m,t)}(z);return M=I?Object(d.jsx)(v,Object(c.a)({alt:l,src:w,srcSet:R,sizes:S,ownerState:z,className:C.img},x)):null!=b?b:E&&l?l[0]:Object(d.jsx)(p,{className:C.fallback}),Object(d.jsx)(g,Object(c.a)({as:j,ownerState:z,className:Object(i.a)(C.root,f),ref:t},y,{children:M}))}));t.a=x},952:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return w}));var a,n=r(6),c=r(42),o=r(711),i=r(83),s=r(664),l=r(217),u=r(0),b=r(171),d=r(43),f=r(26),h=r(318),j=r(51),m=r(104),O=r(47),g=r(24),v=r(251),p=r(1),x=Object(l.a)((function(e){return{leftMenu:{height:"100%",backgroundColor:"#fff",width:320,marginRight:16,boxShadow:g.g,borderRadius:8},menuHeader:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)",height:104,boxSizing:"border-box"},rightContent:{height:"100%",backgroundColor:"#fff",minWidth:600,flex:1,borderRadius:8}}})),S=[{icon:"ic_personal2",title:"PROFILE",path:"/user/profile"},{icon:"ic_admin2",title:"ADMIN_MANAGEMENT",path:"/user/admin-management"},{icon:"ic_team2",title:"ORG_SETTINGS",path:"/user/orgnization"},{icon:"ic_license_contained",title:"LICENSE",path:"/user/subscription"}];function w(){var e=x(),t=Object(b.a)().t,r=Object(f.j)().pathname,a=Object(f.m)(),l=Object(m.c)(),g=Object(u.useState)(r),w=Object(n.a)(g,2),R=w[0],N=w[1];Object(u.useEffect)((function(){N(r)}),[r]);var k=Object(d.c)(O.n),y=Object(d.c)(O.m),M=y.name,A=y.avatar,E=Object(u.useCallback)((function(e){return!!R.match(e)}),[R]);return Object(p.jsx)(c.a,{sx:{width:.95,py:1,margin:"0 auto"},children:Object(p.jsxs)(c.a,{sx:{height:1,overflow:"auto",p:.5,boxSizing:"border-box",flexWrap:"nowrap"},className:"flex-start",children:[l&&Object(p.jsxs)(c.a,{className:e.leftMenu,children:[Object(p.jsxs)(c.a,{sx:{px:2,py:3},className:e.menuHeader+" flex-start",children:[Object(p.jsx)(o.a,{src:A,sx:{color:"#fff",bgcolor:function(e){return e.palette.primary.main},mr:2,height:56,width:56},children:M&&M[0]}),Object(p.jsxs)(c.a,{sx:{},children:[Object(p.jsx)(i.a,{children:M}),Object(p.jsx)(i.a,{color:v.b,children:null===k||void 0===k?void 0:k.email})]})]}),Object(p.jsx)(c.a,{sx:{height:"calc(100% - 104px)",minWidth:320,overflow:"auto"},children:Object(p.jsx)(h.a,{children:S.map((function(e){return Object(p.jsxs)(s.a,{sx:{height:64},onClick:function(){return t=e.path,void a(t);var t},selected:E(e.path),children:[Object(p.jsx)(j.a,{mr:3,icon:e.icon}),Object(p.jsx)(i.a,{children:t("user.userMenus."+e.title)})]},e.path)}))})})]}),Object(p.jsx)(c.a,{className:e.rightContent,children:Object(p.jsx)(f.b,{})})]})})}!function(e){e.USER="/user",e.PROFILE="/user/profile",e.ADMIN_MANAGE="/user/admin-management",e.ORG_SETTING="/user/orgnization"}(a||(a={}))}}]);