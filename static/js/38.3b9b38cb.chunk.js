(this["webpackJsonpui-ngx"]=this["webpackJsonpui-ngx"]||[]).push([[38],{793:function(e,t,a){"use strict";var n=a(3),c=a(4),r=a(2),i=a(0),o=a(8),s=a(152),l=a(7),u=a(16),b=a(652),j=a(972),O=a(143),x=a(720),d=a(726),m=a(92),p=a(103);function h(e){return Object(m.a)("MuiStepButton",e)}var f=Object(p.a)("MuiStepButton",["root","horizontal","vertical","touchRipple"]),E=a(1),A=["children","className","icon","optional"],R=Object(l.a)(b.a,{name:"MuiStepButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(n.a)({},"& .".concat(f.touchRipple),t.touchRipple),t.root,t[a.orientation]]}})((function(e){var t=e.ownerState;return Object(r.a)({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},"vertical"===t.orientation&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},Object(n.a)({},"& .".concat(f.touchRipple),{color:"rgba(0, 0, 0, 0.3)"}))})),g=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiStepButton"}),n=a.children,l=a.className,b=a.icon,m=a.optional,p=Object(c.a)(a,A),f=i.useContext(d.a).disabled,g=i.useContext(x.a).orientation,v=Object(r.a)({},a,{orientation:g}),N=function(e){var t=e.classes,a={root:["root",e.orientation],touchRipple:["touchRipple"]};return Object(s.a)(a,h,t)}(v),C={icon:b,optional:m},_=Object(O.a)(n,["StepLabel"])?i.cloneElement(n,C):Object(E.jsx)(j.a,Object(r.a)({},C,{children:n}));return Object(E.jsx)(R,Object(r.a)({focusRipple:!0,disabled:f,TouchRippleProps:{className:N.touchRipple},className:Object(o.a)(N.root,l),ref:t,ownerState:v},p,{children:_}))}));t.a=g},977:function(e,t,a){"use strict";a.r(t),a.d(t,"EditAlarmSteps",(function(){return n})),a.d(t,"default",(function(){return G}));var n,c=a(6),r=a(249),i=a(64),o=a(42),s=a(980),l=a(1e3),u=a(793),b=a(550),j=a(134),O=a(217),x=a(0),d=a(171),m=a(43),p=a(26),h=a(222),f=a(36),E=a(29),A=a(139),R=a(3),g=a(5),v=a(83),N=function(e){return e.alarm.alarmDetail},C=function(e){var t=e.alarm.alarmDetail;return{name:t.name,type:t.type}},_=a(24),T=a(153),w=a(127),L=a(51),S=a(253),I=a(1),k=Object(x.forwardRef)((function(e,t){var a=Object(d.a)().t,n=Object(m.b)(),r=Object(m.c)(N),i=r.type,s=r.contentInfo.alarmCondition,l=Object(x.useState)(Object(_.j)(s)),u=Object(c.a)(l,2),b=u[0],j=u[1],O=Object(x.useState)(Object(h.h)(s.networkTriggerValue)),p=Object(c.a)(O,2),f=p[0],A=p[1],C=Object(x.useCallback)((function(e,t){var a=parseInt(e.target.value)||0;"hours"===t&&a>23&&(a=23),"minutes"===t&&a>59&&(a=59);var n=Object(g.a)(Object(g.a)({},f),{},Object(R.a)({},t,a));A(n),j((function(e){return Object(g.a)(Object(g.a)({},e),{},{networkTriggerValue:Object(h.d)(n)})}))}),[f]),k=Object(x.useMemo)((function(){return h.f.find((function(e){return e.value===i}))}),[i]),M=Object(x.useCallback)((function(e){console.log(e.target.value),j((function(t){return Object(g.a)(Object(g.a)({},t),{},{bluetoothTriggerValue:e.target.value})}))}),[]),y=Object(x.useCallback)((function(){var e,t=!1;switch(i){case h.c.BLUETOOTH:t=!0;break;case h.c.NETWORK:var a=Object(h.d)(f);if(console.log(a),a>=10){t=!0,j((function(e){return Object(g.a)(Object(g.a)({},e),{},{networkTriggerValue:a})}));break}_.c.error("alarm.networkConditionTip"),t=!1;break;default:t=!0}return t&&(console.log(b),n((e=b,{type:E.a.SET_ALARM_CONDITION,data:e}))),t}),[i,f,n,b]);return Object(x.useImperativeHandle)(t,(function(){return{validateForm:y}})),Object(I.jsxs)(o.a,{children:[Object(I.jsx)(v.a,{variant:"subtitle1",sx:{mb:1},children:a("alarm.alarmType")}),Object(I.jsxs)(o.a,{sx:{mb:5},className:"flex-start",children:[Object(I.jsx)(L.a,{icon:null===k||void 0===k?void 0:k.icon,primary:!0}),Object(I.jsx)(v.a,{children:a(null===k||void 0===k?void 0:k.desc)})]}),i===h.c.BLUETOOTH&&Object(I.jsx)(o.a,{children:Object(I.jsx)(w.b,{width:300,options:h.g,onChange:M,value:b.bluetoothTriggerValue,label:"alarm.setCondition"})}),i===h.c.NETWORK&&Object(I.jsxs)(o.a,{children:[Object(I.jsxs)(o.a,{className:"flex-start flex-wrap",children:[Object(I.jsxs)(o.a,{sx:{mb:2},className:"flex-start flex-nowrap",children:[Object(I.jsx)(T.a,{inputProps:{min:0},width:80,type:"number",onChange:function(e){return C(e,"days")},value:f.days}),Object(I.jsx)(v.a,{sx:{ml:1,mr:4},children:a("alarm.day")})]}),Object(I.jsxs)(o.a,{sx:{mb:2},className:"flex-start flex-nowrap",children:[Object(I.jsx)(T.a,{inputProps:{min:0,max:23},width:80,type:"number",onChange:function(e){return C(e,"hours")},value:f.hours}),Object(I.jsx)(v.a,{sx:{ml:1,mr:4},children:a("alarm.hour")})]}),Object(I.jsxs)(o.a,{sx:{mb:2},className:"flex-start flex-nowrap",children:[Object(I.jsx)(T.a,{inputProps:{min:0,max:59},width:80,type:"number",onChange:function(e){return C(e,"minutes")},value:f.minutes}),Object(I.jsx)(v.a,{sx:{ml:1},children:a("alarm.minutes")})]})]}),Object(I.jsx)(S.a,{content:"alarm.networkConditionTip"})]})]})})),M=a(555),y=Object(x.forwardRef)((function(e,t){var a=Object(m.c)(C),n=Object(x.useState)(Object(_.j)(a)),r=Object(c.a)(n,2),i=r[0],s=r[1],l=Object(d.a)().t,u=e.isEdit,b=Object(x.useState)(!1),j=Object(c.a)(b,2),O=j[0],p=j[1],f=Object(m.b)(),A=Object(x.useCallback)((function(e){s((function(t){return Object(g.a)(Object(g.a)({},t),{},{name:e.target.value})}))}),[]),R=Object(x.useCallback)((function(){return p(!0),!!i.name&&(f((e=i,{type:E.a.SET_BASIC_INFO,data:e})),!0);var e}),[i,f]);Object(x.useImperativeHandle)(t,(function(){return{validateForm:R}}));var N=Object(x.useCallback)((function(e){u||s((function(t){return Object(g.a)(Object(g.a)({},t),{},{type:e})}))}),[u]);return Object(I.jsxs)(o.a,{children:[Object(I.jsx)(T.a,{onBlur:function(){return p(!0)},width:300,value:i.name,label:"alarm.alarmName",error:O&&!i.name,onChange:A}),Object(I.jsxs)(o.a,{sx:{mt:6},children:[Object(I.jsx)(v.a,{variant:"subtitle1",children:l("alarm.basicAlarms")}),Object(I.jsx)(o.a,{sx:{mt:1},className:"flex-start flex-wrap",children:h.f.map((function(e){var t=i.type===e.value,a=t?function(e){return e.palette.primary.main}:function(e){return e.palette.grey[400]};return Object(I.jsxs)(o.a,{onClick:function(){return N(e.value)},sx:{mr:3,p:2,mb:3,width:186,height:144,borderRadius:1,borderColor:a,"&:hover":{borderColor:!u&&function(e){return e.palette.primary.light}}},className:"border-box with-border pointer",children:[Object(I.jsx)(o.a,{children:Object(I.jsx)(M.a,{disabled:u,checked:t})}),Object(I.jsxs)(o.a,{sx:{mt:-1},className:"flex flex-column",children:[Object(I.jsx)(L.a,{mr:0,primary:!u,icon:e.icon,fontSize:38}),Object(I.jsx)(v.a,{children:l(e.title)})]})]},e.value)}))})]})]})})),V=Object(O.a)((function(e){return{contentContainer:{height:"calc(100% - 72px)",margin:"auto"},container:{padding:e.custom.templateConfigCardPadding,boxSizing:"border-box",boxShadow:"0px 2px 2px 0 "+Object(i.a)(Object(i.b)(e.palette.primary.main,.3),.08)},dot:{height:18,width:4,background:e.palette.primary.main,marginRight:8},title:{fontSize:16},content:{height:"calc(100% - 166px)",boxSizing:"border-box",overflowY:"auto"}}}));!function(e){e[e.ALARM_TYPE=0]="ALARM_TYPE",e[e.ALARM_TRIGGER=1]="ALARM_TRIGGER",e[e.ALARM_CHANNEL=2]="ALARM_CHANNEL",e[e.LINKED_DEVICES=3]="LINKED_DEVICES",e[e.PREVIEW_AND_SAVE=4]="PREVIEW_AND_SAVE"}(n||(n={}));var D=new Map([[n.ALARM_TYPE,"alarm.stepTitles.ALARM_TYPE"],[n.ALARM_TRIGGER,"alarm.stepTitles.ALARM_TRIGGER"],[n.ALARM_CHANNEL,"alarm.stepTitles.ALARM_CHANNEL"],[n.LINKED_DEVICES,"alarm.stepTitles.LINKED_DEVICES"],[n.PREVIEW_AND_SAVE,"alarm.stepTitles.PREVIEW_AND_SAVE"]]),P=[new f.f(D.get(n.ALARM_TYPE),"create",n.ALARM_TYPE),new f.f(D.get(n.ALARM_TRIGGER),"create",n.ALARM_TRIGGER),new f.f(D.get(n.ALARM_CHANNEL),"create",n.ALARM_CHANNEL),new f.f(D.get(n.LINKED_DEVICES),"create",n.LINKED_DEVICES),new f.f(D.get(n.PREVIEW_AND_SAVE),"create",n.PREVIEW_AND_SAVE)];function G(){var e=Object(d.a)().t,t=Object(x.useState)(n.ALARM_TYPE),a=Object(c.a)(t,2),i=a[0],O=a[1],f=V(),R=Object(x.useState)(!1),g=Object(c.a)(R,1)[0],v=Object(p.m)(),N=Object(x.useState)(!0),C=Object(c.a)(N,2),_=C[0],T=C[1],w=Object(p.o)().id,L=Object(m.b)(),S=Object(x.useMemo)((function(){return!!w}),[w]),M=Object(x.useMemo)((function(){return D.get(i)}),[i]),G=Object(x.useRef)(),H=Object(x.useRef)();Object(x.useEffect)((function(){w?setTimeout((function(){var e;L((e=new h.a("hanshufei"),{type:E.a.INIT_ALARM_DETAIL,data:e})),T(!1)}),200):(T(!1),L({type:E.a.RESET_CONFIG}))}),[w,L]);var Y=Object(x.useCallback)((function(e){var t=!1;switch(i){case n.ALARM_TYPE:t=G.current.validateForm();break;case n.ALARM_TRIGGER:t=H.current.validateForm();break;default:t=!0}t&&O(e)}),[i]),W=Object(x.useCallback)((function(){v("/alarms")}),[v]),B=Object(x.useCallback)((function(){return Y(i+1)}),[Y,i]),K=Object(x.useCallback)((function(){return Y(i-1)}),[Y,i]),z=Object(x.useCallback)((function(){}),[]);return _?Object(I.jsx)(o.a,{sx:{height:1},children:Object(I.jsx)(A.a,{})}):Object(I.jsxs)(o.a,{sx:{height:1},children:[Object(I.jsx)(o.a,{sx:{width:.8,m:"8px auto 18px"},children:Object(I.jsx)(s.a,{activeStep:i,children:P.map((function(t,a){return Object(I.jsx)(l.a,{onClick:function(){return Y(a)},sx:{cursor:"pointer"},children:Object(I.jsx)(u.a,{sx:{cursor:"pointer"},children:e(t.label)})},t.key)}))})}),Object(I.jsx)(o.a,{sx:{width:{lg:960,sm:.9,xs:1}},className:f.contentContainer,children:Object(I.jsxs)(o.a,{className:"config-temp-card",sx:{margin:"auto",mt:3,height:1},children:[Object(I.jsx)(o.a,{className:f.container+" flex-between",sx:{height:80},children:Object(I.jsxs)(o.a,{className:"flex",children:[Object(I.jsx)("div",{className:f.dot}),Object(I.jsx)("span",{className:f.title,children:e(M)})]})}),Object(I.jsx)(o.a,{sx:{p:{xs:2,lg:4,xl:5}},className:f.content,children:function(){switch(i){case n.ALARM_TYPE:return Object(I.jsx)(y,{ref:G,isEdit:S});case n.ALARM_TRIGGER:return Object(I.jsx)(k,{ref:H});default:return Object(I.jsx)(o.a,{children:i})}}()}),Object(I.jsx)(b.a,{}),Object(I.jsxs)(o.a,{sx:{height:80,pr:5},className:"border-box flex-end",children:[Object(I.jsx)(j.a,{onClick:W,sx:{ml:2},children:e("common.cancel")}),0===i?null:Object(I.jsx)(j.a,{onClick:K,sx:{ml:2},variant:"outlined",children:e("common.back")}),i===n.PREVIEW_AND_SAVE?Object(I.jsx)(r.a,{loading:g,onClick:z,sx:{ml:2},variant:"contained",children:Object(I.jsx)("span",{children:e("common.save")})}):Object(I.jsx)(j.a,{onClick:B,sx:{ml:2},variant:"contained",children:e("common.nextStep")})]})]})})]})}}}]);