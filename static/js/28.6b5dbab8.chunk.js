(this["webpackJsonpui-ngx"]=this["webpackJsonpui-ngx"]||[]).push([[28],{1001:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(6),o=n(42),i=n(83),l=n(43),r=n(45),s=n(36),d=n(138),u=n(0),b=n(37),j=n(26),m=n(24),O=n(105),p=n(821),f=n(153),h=n(135),v=n(253),x=n(1);function g(e){var t=Object(u.useState)(e.name),n=Object(a.a)(t,2),i=n[0],l=n[1];Object(u.useEffect)((function(){l(e.name)}),[e.name,e.open]);return Object(x.jsx)(h.b,Object(c.a)(Object(c.a)({},e),{},{onOk:function(){if(i){if(i!==e.name)return e.onOk(i);m.c.error("settingsTemp.nameNotSame")}else m.c.error("regTemp.nameRequired")},title:"regTemp.copyTemplate",children:Object(x.jsxs)(o.a,{sx:{px:2},children:[Object(x.jsx)(f.a,{value:i,width:400,label:"regTemp.tempName",name:"value",onChange:function(e){l(e.target.value)},inputProps:{maxLength:12}}),Object(x.jsx)(o.a,{sx:{height:16}}),Object(x.jsx)(v.a,{content:"regTemp.max12Chars"})]})}))}var T,C=n(710),S=n(671),w=n(176),k=n(174),E=n(104);!function(e){e.EDIT="actions.edit",e.COPY="actions.copy",e.DELETE="actions.delete"}(T||(T={}));t.default=function(){var e=Object(l.c)((function(e){return e.config})),t=Object(u.useState)(!0),n=Object(a.a)(t,2),f=n[0],h=n[1],v=Object(u.useState)(new d.d(0,10,void 0,S.a.BY_CREATED_TIME,"desc")),y=Object(a.a)(v,2),M=y[0],D=y[1],A=Object(u.useState)(S.a.BY_CREATED_TIME),_=Object(a.a)(A,2),B=_[0],I=_[1],N=Object(u.useState)([]),P=Object(a.a)(N,2),R=P[0],z=P[1],L=Object(u.useState)(!1),Y=Object(a.a)(L,2),V=Y[0],H=Y[1],F=Object(u.useState)(!1),G=Object(a.a)(F,2),J=G[0],q=G[1],X=Object(u.useState)(null),K=Object(a.a)(X,2),Q=K[0],U=K[1],W=Object(u.useState)(),Z=Object(a.a)(W,2),$=Z[0],ee=Z[1],te=Object(E.b)(),ne=e.height,ce=Object(j.m)(),ae=Object(u.useCallback)((function(){h(!0),C.a.getTemplates(M).then((function(e){ee(e),h(!1)}))}),[M]);Object(u.useEffect)((function(){ae()}),[ae]);var oe=Object(u.useCallback)((function(e){var t=e.name,n=e.id;Object(m.a)({title:Object(b.b)("settingsTemp.deleteSingleTitle",{name:t}),content:Object(b.b)("common.deleteContent"),okText:"common.delete",okBtnColor:"error",onOk:function(){var e=C.a.deleteTemplate(n);return e.then((function(e){null!==e&&void 0!==e&&e.success?(m.c.success("common.deleteSuccessed"),z(R.filter((function(e){return e.id!==n}))),D(Object(c.a)(Object(c.a)({},M),{},{page:0}))):null!==e&&void 0!==e&&e.errMsg&&m.c.error(Object(b.b)("settingsTemp.deleteError",{message:e.errMsg}))})),e}})}),[M,R]),ie=Object(u.useCallback)((function(e,t){switch(U(t),e){case T.COPY:q(!0);break;case T.EDIT:ce("/settings-template/"+t.id);break;case T.DELETE:oe(t)}}),[ce,oe]),le=Object(u.useCallback)((function(e){var t=C.a.updateTemplate(e.id,e);return t.then((function(){D(Object(c.a)({},M))})),t}),[M]),re=Object(u.useMemo)((function(){var e=function(e){var t=e.deviceCount>0;return[new s.e(T.EDIT,"common.edit","ic_edit",!1,t),new s.e(T.COPY,"common.copy","ic_copy"),new s.e(T.DELETE,"common.delete","ic_delete",!1,t)]},t=[new r.d("name","settingsTemp.confName","left",void 0,(function(e){return Object(x.jsx)(w.a,{sx:{px:2},onClick:function(){return function(e){U(e),H(!0)}(e)},children:null===e||void 0===e?void 0:e.name})})),new r.a("deviceCount","settingsTemp.deviceNum",150),new r.c(le,450),new r.b("createdTime","common.createdTime",null),new r.b("updatedTime","common.updatedTime",null)];return te||t.push(new r.d("operation",void 0,"right",72,(function(t){return Object(x.jsx)(O.a,{menus:e(t),onMenuClick:function(e){return ie(e,t)}})}),!0)),t}),[le,ie,te]),se=R.length<=0;return Object(x.jsxs)(o.a,{sx:{height:1},className:"content-container",children:[Object(x.jsx)(S.b,{sortProp:B,onSortChange:function(e){I(e),e!==M.sortProperty&&D(Object(c.a)(Object(c.a)({},M),{},{sortProperty:e}))},textSearch:M.textSearch,onSearchChange:function(e){D(Object(c.a)(Object(c.a)({},M),{},{page:0,textSearch:e}))},deleteDisabled:se,authControl:"OBSERVE",onAdd:function(){ce("/settings-template/create")},onDelete:function(){var e=R.filter((function(e){return!(e.devciceNum>0)}));Object(m.a)({title:Object(b.b)("settingsTemp.deleteTitle",{count:R.length}),okBtnDisabled:e.length<=0,content:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(i.a,{color:function(e){return e.palette.text.secondary},fontSize:15,children:Object(b.b)("settingsTemp.multiDeleteContentTip")}),Object(x.jsx)(i.a,{color:function(e){return e.palette.text.secondary},fontSize:15,children:Object(b.b)("settingsTemp.multiDeleteContentTipContent",{count:e.length})})]}),customContent:!0,okText:"common.delete",okBtnColor:"error",onOk:function(){var e=R.filter((function(e){return!(e.devciceNum>0)})).map((function(e){return e.id})),t=C.a.deleteTemplates(e);return t.then((function(t){var n=t.find((function(e){return!e.success}));n?null!==n&&void 0!==n&&n.errMsg&&m.c.error(n.errMsg):m.c.success("common.deleteSuccessed"),D(Object(c.a)(Object(c.a)({},M),{},{page:0})),z(R.filter((function(t){return!e.includes(t.id)})))})),t}})},deleteTitle:"settingsTemp.deleteSettingsTemp",addTitle:"settingsTemp.addSettingsTemp"}),Object(x.jsx)(o.a,{sx:{height:"calc(100% - 56px)"},children:Object(x.jsx)(r.g,{loading:f,rows:null===$||void 0===$?void 0:$.content,totalPages:null===$||void 0===$?void 0:$.totalPages,pageSize:10,page:M.page,pageChange:function(e){D(Object(c.a)(Object(c.a)({},M),{},{page:e}))},columns:re,showSelect:!0,selected:R,onSelectChange:z,height:ne-245,children:Object(x.jsx)(k.a,{emptyTitle:"regTemp.emptyTitle",type:"template"})})}),Object(x.jsx)(p.a,{detail:Q,open:V,onClose:function(){H(!1)},onOk:function(){}}),Object(x.jsx)(g,{name:null===Q||void 0===Q?void 0:Q.name,onOk:function(e){var t={name:e,description:Q.description,contentInfo:Q.contentInfo};C.a.createTemplate(t).then((function(e){null!==e&&void 0!==e&&e.success&&(m.c.success("settingsTemp.copyTempSuccessed"),D(Object(c.a)(Object(c.a)({},M),{},{page:0})),q(!1))}))},open:J,onClose:function(){return q(!1)}})]})}},671:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return w}));var c,a=n(42),o=n(83),i=n(134),l=n(354),r=n(674),s=n.n(r),d=n(673),u=n.n(d),b=n(43),j=n(36),m=n(47),O=n(173),p=n(155),f=n(37),h=n(672),v=n(106),x=n(251),g=n(104),T=n(0),C=n(1);!function(e){e.BY_TITLE="name",e.BY_CREATED_TIME="createdTime"}(c||(c={}));var S=[new j.e(c.BY_TITLE,"regTemp.sortBy.name"),new j.e(c.BY_CREATED_TIME,"regTemp.sortBy.createdTime")];function w(e){var t=e.sortProp,n=e.onSortChange,c=e.textSearch,r=e.onSearchChange,d=e.deleteDisabled,j=e.deleteTitle,w=e.addTitle,k=e.selectTitle,E=e.showSelectBtn,y=void 0!==E&&E,M=e.selectMode,D=void 0!==M&&M,A=e.authControl,_=void 0===A?"GENERAL":A,B=e.menus||S,I=Object(g.b)(),N=Object(g.a)(),P="GENERAL"===_?N:!I,R=Object(b.c)(m.a),z={add:!y||!D,delete:(!y||D)&&e.onDelete,select:y&&!D,selectAll:y&&D&&e.viewMode===h.a.CARD,cancel:y&&D};return Object(C.jsxs)(a.a,{sx:{mb:2,display:"flex",justifyContent:"space-between",height:36},children:[D&&Object(C.jsxs)(a.a,{className:"flex-start",children:[Object(C.jsx)(o.a,{fontSize:16,color:x.c,children:e.selectedCount}),Object(C.jsx)(o.a,{sx:{ml:1},children:Object(f.b)("common.selected")})]}),!D&&Object(C.jsxs)(a.a,{className:"flex-start",children:[void 0!==e.viewMode&&Object(C.jsx)(h.b,{items:h.c,mode:e.viewMode,onChange:e.onViewModeChange}),R?null:Object(C.jsx)(p.a,{title:"regTemp.sortBy."+t,selected:t,menus:B,onMenuClick:n}),Object(C.jsx)(O.a,{sx:{ml:R?0:2,bgcolor:"#fff"},value:c,onChange:r})]}),P&&Object(C.jsx)(T.Fragment,{children:R?Object(C.jsxs)(a.a,{children:[Object(C.jsx)(l.a,{onClick:e.onAdd,size:"medium",edge:"start",color:"primary","aria-label":"open drawer",sx:{mr:1},children:Object(C.jsx)(u.a,{})}),Object(C.jsx)(l.a,{onClick:e.onDelete,disabled:d,size:"medium",edge:"start",color:"error","aria-label":"open drawer",children:Object(C.jsx)(s.a,{})})]}):Object(C.jsxs)(a.a,{children:[z.add&&Object(C.jsx)(i.a,{onClick:e.onAdd,variant:"contained",children:Object(f.b)(w)}),z.cancel&&Object(C.jsx)(i.a,{onClick:function(){e.selectAll(!1),e.setSelectMode(!1)},variant:"outlined",children:Object(f.b)("common.cancel")}),z.selectAll&&Object(C.jsx)(v.a,{sx:{ml:2},onClick:function(){e.selectAll&&e.selectAll(!0)},children:Object(f.b)("common.selectAll")}),z.select&&Object(C.jsx)(v.a,{sx:{ml:2},onClick:function(){var t;void 0!==t?e.setSelectMode(t):e.setSelectMode(!D)},children:Object(f.b)(k)}),z.delete&&Object(C.jsx)(i.a,{onClick:e.onDelete,disabled:d,sx:{ml:2},variant:void 0!==e.viewMode?"contained":"outlined",children:Object(f.b)(j)})]})})]})}},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return O}));var c,a=n(5),o=n(7),i=n(134),l=n(64),r=n(689),s=n(995),d=n(171),u=n(51),b=n(1),j=Object(o.a)(i.a)((function(e){var t=e.theme;return{height:36,borderColor:t.palette.action.disabled,"&:hover":{borderColor:t.palette.action.disabled},"&.checked":{backgroundColor:Object(l.a)(t.palette.primary.main,.32)},"&.checked:hover":{backgroundColor:Object(l.a)(t.palette.primary.main,.32)}}}));!function(e){e[e.LIST=0]="LIST",e[e.CARD=1]="CARD"}(c||(c={}));var m=[{icon:"ic_viewmodule",value:c.CARD,label:"common.cardView"},{icon:"ic_viewheadline",value:c.LIST,label:"common.listView"}];function O(e){var t=e.mode,n=e.onChange,c=e.items,o=void 0===c?[]:c,i=e.sx,l=void 0===i?{}:i,m=Object(d.a)().t;return Object(b.jsx)(r.a,{sx:Object(a.a)({mr:2},l),children:o.map((function(e){return Object(b.jsx)(s.a,{title:m(e.label),children:Object(b.jsx)(j,{size:"small",onClick:function(){var c;(c=e.value)!==t&&n(c)},className:t===e.value?"checked":"",sx:{px:1},children:Object(b.jsx)(u.a,{color:"rgba(0, 0, 0, 0.54)",mr:0,icon:e.icon})})},e.label)}))})}},673:function(e,t,n){"use strict";var c=n(254);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(255)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.default=i},674:function(e,t,n){"use strict";var c=n(254);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(255)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},710:function(e,t,n){"use strict";var c=n(13),a=n(14),o=n(18),i=n(30),l=n(31),r=n(17),s=n(12),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e,c,i,l,d,u;Object(a.a)(this,n);for(var b=arguments.length,j=new Array(b),m=0;m<b;m++)j[m]=arguments[m];return(u=t.call.apply(t,[this].concat(j))).createTemplate=function(t){return Object(r.a)((e=Object(o.a)(u),Object(s.a)(n.prototype)),"post",e).call(e,"/api/deviceSettingTemplate/create",t)},u.updateTemplate=function(e,t){return Object(r.a)((c=Object(o.a)(u),Object(s.a)(n.prototype)),"put",c).call(c,"/api/deviceSettingTemplate/".concat(e),t)},u.getTemplates=function(e){return Object(r.a)((i=Object(o.a)(u),Object(s.a)(n.prototype)),"get",i).call(i,"/api/deviceSettingTemplates",{params:e})},u.deleteTemplate=function(e){return Object(r.a)((l=Object(o.a)(u),Object(s.a)(n.prototype)),"delete",l).call(l,"/api/deviceSettingTemplate/".concat(e))},u.deleteTemplates=function(e){return Promise.all(e.map((function(e){return u.deleteTemplate(e)})))},u.getTemplateById=function(e){return Object(r.a)((d=Object(o.a)(u),Object(s.a)(n.prototype)),"get",d).call(d,"/api/deviceSettingTemplate/".concat(e))},u}return Object(c.a)(n)}(n(107).a),u=new d;t.a=u},821:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(42),a=n(550),o=n(153),i=n(135),l=n(722),r=n(1);function s(e){var t,n,s,d;return Object(r.jsxs)(i.b,{transparentTitleBg:!0,title:null===(t=e.detail)||void 0===t?void 0:t.name,hideFooter:!0,open:e.open,onClose:function(){e.onClose()},onOk:function(){},size:"lg",children:[Object(r.jsxs)("form",{action:"",children:[Object(r.jsxs)(c.a,{className:"flex-start",sx:{mt:2,pt:0,pb:2},children:[Object(r.jsx)(o.a,{disabled:!0,width:300,label:"common.name",name:"name",value:null===(n=e.detail)||void 0===n?void 0:n.name}),Object(r.jsx)(c.a,{sx:{width:12}})]}),Object(r.jsx)(c.a,{className:"flex-start",sx:{mt:3,mb:3},children:Object(r.jsx)(o.a,{disabled:!0,name:"description",value:null===(s=e.detail)||void 0===s?void 0:s.description,rows:2,multiline:!0,width:450,maxRows:5,label:"common.description"})})]}),Object(r.jsx)(a.a,{sx:{m:4,marginX:0}}),Object(r.jsx)(l.a,{disabled:!0,initialValues:null===(d=e.detail)||void 0===d?void 0:d.contentInfo})]})}}}]);