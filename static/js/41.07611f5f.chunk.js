(this["webpackJsonpui-ngx"]=this["webpackJsonpui-ngx"]||[]).push([[41],{833:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(42),c=n(711),a=n(83),o=n(51),l=n(1);function s(e){var t=e.app,n=e.deleteApp;return Object(l.jsx)(i.a,{className:"with-border",sx:{mb:2,borderRadius:1,width:400},children:Object(l.jsxs)(i.a,{sx:{p:1.5,flexWrap:"nowrap"},className:"flex-start",children:[Object(l.jsx)(c.a,{src:t.iconPathHttps}),Object(l.jsxs)(i.a,{sx:{maxWidth:308,minWidth:308,width:308,pl:1.5},className:"border-box",children:[Object(l.jsx)(a.a,{className:"line-clamp",children:t.name}),Object(l.jsx)(a.a,{className:"line-clamp",variant:"subtitle1",children:t.versionName+" "+t.identifier})]}),n&&Object(l.jsx)(o.a,{onClick:function(){return n(t)},pointer:!0,color:"red",fontSize:20,icon:"ic_failed"})]})},t.identifier)}},956:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var i,c=n(5),a=n(6),o=n(249),l=n(42),s=n(995),u=n(83),r=n(354),d=n(550),b=n(968),j=n(997),O=n(0),p=n(171),f=n(26),v=n(729),x=n(104),m=n(78),h=n(721),g=n(138),N=n(24),S=n(45),R=n(174),T=n(258),C=n(671),I=n(679),k=n(176),w=n(51),E=n(833),A=n(886),P=n(1);!function(e){e[e.TARGETS=0]="TARGETS",e[e.OPERATIONS=1]="OPERATIONS"}(i||(i={}));var L=[{tab:i.TARGETS,label:"pipe.stageConfig.TARGETS"},{tab:i.OPERATIONS,label:"pipe.stageConfig.OPERATIONS"}];function M(){var e=Object(p.a)().t,t=Object(f.o)(),n=t.pipelineId,M=t.runId,G=Object(f.m)(),B=Object(O.useState)(i.TARGETS),D=Object(a.a)(B,2),y=D[0],_=D[1],z=Object(O.useState)(!0),W=Object(a.a)(z,2),J=W[0],Y=W[1],H=Object(O.useState)(!0),U=Object(a.a)(H,2),q=U[0],F=U[1],K=Object(O.useState)(!1),Q=Object(a.a)(K,2),V=Q[0],X=Q[1],Z=Object(O.useState)(!1),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=Object(O.useState)(!1),ie=Object(a.a)(ne,2),ce=ie[0],ae=ie[1],oe=Object(O.useState)(),le=Object(a.a)(oe,2),se=le[0],ue=le[1],re=Object(O.useState)(),de=Object(a.a)(re,2),be=de[0],je=de[1],Oe=Object(O.useState)(new g.d(0,10,void 0,C.a.BY_CREATED_TIME,"desc",{pipelineStageId:null,runNo:null})),pe=Object(a.a)(Oe,2),fe=pe[0],ve=pe[1],xe=Object(O.useState)(),me=Object(a.a)(xe,2),he=me[0],ge=me[1],Ne=Object(x.b)(),Se=Object(O.useMemo)((function(){return(null===be||void 0===be?void 0:be.pipelineStageRunLogList)||[]}),[null===be||void 0===be?void 0:be.pipelineStageRunLogList]),Re=Object(O.useMemo)((function(){return!Object(h.f)(null===be||void 0===be?void 0:be.status)}),[null===be||void 0===be?void 0:be.status]),Te=Object(O.useMemo)((function(){return(null===be||void 0===be?void 0:be.status)===h.b.AWAITING_PROMOTION}),[null===be||void 0===be?void 0:be.status]),Ce=Object(O.useCallback)((function(){he&&null!==be&&void 0!==be&&be.runNo&&(F(!0),fe.runNo=be.runNo,fe.pipelineStageRunLogId=he.id,v.a.getPipelineRunActions(fe).then((function(e){F(!1),ue(e)})).catch((function(e){F(!1)})))}),[null===be||void 0===be?void 0:be.runNo,fe,he]);Object(O.useEffect)((function(){Ce()}),[Ce]);var Ie=Object(O.useCallback)((function(){Y(!0),v.a.getPipelineRunDetailByRunId(M).then((function(e){Y(!1),je(e)})).catch((function(){Y(!1)}))}),[M]),ke=Object(O.useCallback)((function(){Ie()}),[Ie]);Object(O.useEffect)((function(){Ie()}),[Ie]),Object(O.useEffect)((function(){Se.length&&ge(he&&Se.find((function(e){return e.id===he.id}))||Se[0])}),[Se,he]);var we=Object(O.useMemo)((function(){return he?{currentLevel:he.serialNum,name:he.name}:{currentLevel:null,name:""}}),[he]),Ee=Object(O.useMemo)((function(){var e;return(null===he||void 0===he||null===(e=he.additionalInfo)||void 0===e?void 0:e.map((function(e){return e.taskParams})))||[]}),[he]),Ae=Object(O.useCallback)((function(e){ge(Se.find((function(t){return t.id===e})))}),[Se]),Pe=Object(O.useCallback)((function(){G("/pipelines/edit/"+n)}),[n,G]),Le=Object(O.useCallback)((function(){X(!0),v.a.cancelPipeRun({pipelineRunLogId:M}).then((function(){X(!1),ke()})).catch((function(e){X(!1),Object(N.p)(e)}))}),[ke,M]),Me=Object(O.useCallback)((function(e){G("/devices/"+e)}),[G]),Ge=Object(O.useMemo)((function(){return[new S.f("left","deviceName","device.labels.deviceName",null,(function(e){return Object(P.jsx)(k.a,{showUnderline:!1,onClick:function(){return Me(e.deviceId)},children:e.deviceName})})),new S.a("operationName","pipe.operationName",null,(function(e){var t;return null===(t=e.params)||void 0===t?void 0:t.name})),new S.a("version","app.version",void 0,(function(e){var t;return null===(t=e.params)||void 0===t?void 0:t.versionName})),new S.d("status","common.status",void 0,null,(function(t){var n=m.o.get(t.status);return Object(P.jsx)(l.a,{sx:{pl:1},children:Object(P.jsx)(s.a,{placement:"top",title:t.error||"",children:Object(P.jsx)(l.a,{children:Object(P.jsx)(I.a,{size:"small",color:m.n.get(n),sx:{ml:1,fontSize:14},label:e("device.taskStatus."+n)})})})})})),new S.b("createdTime","pipe.startTime",null),new S.b("finishedTime","pipe.endRunTime",null)]}),[Me,e]),Be=Object(O.useMemo)((function(){return Te?Se.find((function(e,t){return!(t<1)&&(Object(h.f)(Se[t-1].status)&&e.status===h.b.PENDDING)})):null}),[Se,Te]),De=Object(O.useCallback)((function(){Be&&(ae(!0),v.a.promoteToNextStage({pipelineStageRunLogId:Be.id,runNo:null===be||void 0===be?void 0:be.runNo}).then((function(e){ke(),ae(!1)})).catch((function(){ae(!1)})))}),[ke,Be,null===be||void 0===be?void 0:be.runNo]),ye=Object(O.useCallback)((function(){te(!0),v.a.cancelStageRun({pipelineStageRunLogId:null===he||void 0===he?void 0:he.id}).then((function(){ke(),Ce(),te(!1)})).catch((function(e){Object(N.p)(e),te(!1)}))}),[ke,null===he||void 0===he?void 0:he.id,Ce]),_e=Object(O.useMemo)((function(){return!!he&&(!Object(h.f)(null===he||void 0===he?void 0:he.status)&&he.status!==h.b.PENDDING)}),[he]);return Object(P.jsx)(l.a,{sx:{height:1},children:Object(P.jsxs)(l.a,{className:"border-box relative-position",sx:{px:3,mx:2,py:2,height:1,bgcolor:function(e){return e.custom.commonBg},overflowY:"auto"},children:[Object(P.jsx)(T.a,{loading:J}),Object(P.jsxs)(l.a,{className:"flex-between",sx:{height:40},children:[Object(P.jsxs)(l.a,{className:"flex-start",children:[Object(P.jsx)(u.a,{sx:{mr:2},children:null===be||void 0===be?void 0:be.runNo}),Object(P.jsx)(u.a,{variant:"subtitle1",children:null===be||void 0===be?void 0:be.name})]}),!J&&Object(P.jsxs)(l.a,{children:[Re&&Object(P.jsx)(o.a,{onClick:Le,loading:V,sx:{mr:1},variant:"contained",color:"error",children:Object(P.jsx)("span",{children:e("pipe.cancelRun")})}),!Be&&!Re&&!Ne&&Object(P.jsx)(o.a,{sx:{mr:1},onClick:Pe,variant:"contained",children:Object(P.jsx)("span",{children:e("pipe.configNewRun")})}),Be&&Object(P.jsx)(o.a,{sx:{mr:1},loading:ce,onClick:De,variant:"contained",children:Object(P.jsx)("span",{children:e("pipe.promoteToNextStage",{stage:Be.serialNum})})}),Object(P.jsx)(r.a,{onClick:ke,children:Object(P.jsx)(w.a,{primary:!0,icon:"ic_refresh",mr:0})})]})]}),Object(P.jsx)(d.a,{sx:{my:2,mb:1}}),Object(P.jsx)(A.a,{onClick:Ae,selectedStageId:null===he||void 0===he?void 0:he.id,stages:Se}),Object(P.jsx)(l.a,{className:"flex-between",sx:{mt:3},children:Object(P.jsx)(u.a,{children:e("pipe.stageIndex",{index:we.currentLevel})+": "+(null===we||void 0===we?void 0:we.name)})}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(b.a,{sx:{borderBottom:"1px solid",borderBottomColor:function(e){return e.custom.borderColor}},variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,value:y,onChange:function(e,t){_(t)},children:L.map((function(t){return Object(P.jsx)(j.a,{label:e(t.label)},t.tab)}))}),Object(P.jsxs)(l.a,{sx:{px:2,py:3},children:[y===i.OPERATIONS&&Object(P.jsxs)(l.a,{children:[Ee.length>0&&Ee.map((function(e){return Object(P.jsx)(E.a,{app:e},e.identifier)})),Ee.length<=0&&Object(P.jsx)(R.a,{})]}),y===i.TARGETS&&Object(P.jsxs)(l.a,{children:[!Ne&&Object(P.jsx)(l.a,{className:"flex-end",children:Object(P.jsx)(o.a,{disabled:!_e,variant:"contained",onClick:ye,loading:ee,children:Object(P.jsx)("span",{children:e("pipe.cancelStageRun")})})}),Object(P.jsx)(S.g,{hideBoxShadow:!0,loading:q,rows:null===se||void 0===se?void 0:se.content,columns:Ge,pageSize:10,page:fe.page,totalPages:null===se||void 0===se?void 0:se.totalPages,pageChange:function(e){ve(Object(c.a)(Object(c.a)({},fe),{},{page:e}))}})]})]})]})]})})}}}]);