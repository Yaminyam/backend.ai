"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[6572],{56572:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var l,a=t(83468),o=t(16162),i=t(34103),c=t(59723),s=t(6932),r=t(22307),d=t(73277),u=t(48713),m=t(45901),p=t.n(m),b=(t(76998),t(77678)),g=t(3606),y=t(23446);const f=e=>{let{...n}=e;const{t:m}=(0,b.Bd)(),{value:f,dispatchEvent:h}=(0,c.useWebComponentInfo)();let v;try{v=JSON.parse(f||"")}catch(E){v={open:!1,userEmail:""}}const{open:S,userEmail:x}=v,j=(0,a.CX)(),O=null===j||void 0===j?void 0:j.supports("sudo-session-enabled"),{isTOTPSupported:k,isLoading:w}=(0,o.F4)(),{user:A}=(0,g.useLazyLoadQuery)(void 0!==l?l:l=t(61727),{email:x,isNotSupportSudoSessionEnabled:!O,isTOTPSupported:null!==k&&void 0!==k&&k}),C={xxl:1,xl:1,lg:1,md:1,sm:1,xs:1};return(0,y.jsxs)(i.A,{open:S,onCancel:()=>{h("cancel",null)},centered:!0,title:m("credential.UserDetail"),footer:[(0,y.jsx)(s.Ay,{type:"primary",onClick:()=>{h("cancel",null)},children:m("button.OK")},"ok")],...n,children:[(0,y.jsx)("br",{}),(0,y.jsxs)(r.A,{size:"small",column:C,title:m("credential.Information"),labelStyle:{width:"50%"},children:[(0,y.jsx)(r.A.Item,{label:m("credential.UserID"),children:null===A||void 0===A?void 0:A.email}),(0,y.jsx)(r.A.Item,{label:m("credential.UserName"),children:null===A||void 0===A?void 0:A.username}),(0,y.jsx)(r.A.Item,{label:m("credential.FullName"),children:null===A||void 0===A?void 0:A.full_name}),(0,y.jsx)(r.A.Item,{label:m("credential.MainAccessKey"),children:null===A||void 0===A?void 0:A.main_access_key}),(0,y.jsx)(r.A.Item,{label:m("credential.DescActiveUser"),children:"active"===(null===A||void 0===A?void 0:A.status)?m("button.Yes"):m("button.No")}),(0,y.jsx)(r.A.Item,{label:m("credential.DescRequirePasswordChange"),children:null!==A&&void 0!==A&&A.need_password_change?m("button.Yes"):m("button.No")}),O&&(0,y.jsx)(r.A.Item,{label:m("credential.EnableSudoSession"),children:null!==A&&void 0!==A&&A.sudo_session_enabled?m("button.Yes"):m("button.No")}),k&&(0,y.jsx)(r.A.Item,{label:m("webui.menu.TotpActivated"),children:(0,y.jsx)(d.A,{spinning:w,children:null!==A&&void 0!==A&&A.totp_activated?m("button.Yes"):m("button.No")})})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(r.A,{size:"small",column:C,title:m("credential.Association"),labelStyle:{width:"50%"},children:[(0,y.jsx)(r.A.Item,{label:m("credential.Domain"),children:null===A||void 0===A?void 0:A.domain_name}),(0,y.jsx)(r.A.Item,{label:m("credential.Role"),children:null===A||void 0===A?void 0:A.role})]}),(0,y.jsx)("br",{}),(0,y.jsx)(r.A,{title:m("credential.ProjectAndGroup"),labelStyle:{width:"50%"},children:(0,y.jsx)(r.A.Item,{children:p().map(null===A||void 0===A?void 0:A.groups,(e=>(0,y.jsx)(u.A,{children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)))})})]})}},61727:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const l=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"email"},{defaultValue:null,kind:"LocalArgument",name:"isNotSupportSudoSessionEnabled"},{defaultValue:null,kind:"LocalArgument",name:"isTOTPSupported"}],n=[{kind:"Variable",name:"email",variableName:"email"}],t={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},u={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"sudo_session_enabled",storageKey:null},p={condition:"isTOTPSupported",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null}]},b={alias:null,args:null,kind:"ScalarField",name:"main_access_key",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"UserInfoModalQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[t,l,a,o,i,c,s,r,u,m,p,b],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"UserInfoModalQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[t,l,a,o,i,c,s,r,u,m,p,b,d],storageKey:null}]},params:{cacheID:"129326e5b3fef57774f2f8359d108efb",id:null,metadata:{},name:"UserInfoModalQuery",operationKind:"query",text:'query UserInfoModalQuery(\n  $email: String\n  $isNotSupportSudoSessionEnabled: Boolean!\n  $isTOTPSupported: Boolean!\n) {\n  user(email: $email) {\n    email\n    username\n    need_password_change\n    full_name\n    description\n    status\n    domain_name\n    role\n    groups {\n      id\n      name\n    }\n    sudo_session_enabled @skipOnClient(if: $isNotSupportSudoSessionEnabled)\n    totp_activated @include(if: $isTOTPSupported)\n    main_access_key @since(version: "23.09.7")\n    id\n  }\n}\n'}}}();l.hash="e2f5a5bfd435e95cb128afc7a7fbcd46";const a=l},22307:(e,n,t)=>{t.d(n,{A:()=>_});var l=t(76998),a=t(34156),o=t.n(a),i=t(5463),c=t(28037),s=t(67295),r=t(9357);const d={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},u=l.createContext({});var m=t(30324),p=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t};function b(e,n,t){const a=l.useMemo((()=>{return n||(e=t,(0,m.A)(e).map((e=>Object.assign(Object.assign({},null===e||void 0===e?void 0:e.props),{key:e.key}))));var e}),[n,t]);return l.useMemo((()=>a.map((n=>{var{span:t}=n,l=p(n,["span"]);return Object.assign(Object.assign({},l),{span:"number"===typeof t?t:(0,i.ko)(e,t)})}))),[a,e])}function g(e,n,t){let l=e,a=!1;return(void 0===t||t>n)&&(l=Object.assign(Object.assign({},e),{span:n}),a=void 0!==t),[l,a]}const y=(e,n)=>{const[t,a]=(0,l.useMemo)((()=>function(e,n){const t=[];let l=[],a=n,o=!1;return e.filter((e=>e)).forEach(((i,c)=>{const s=null===i||void 0===i?void 0:i.span,r=s||1;if(c===e.length-1){const[e,n]=g(i,a,s);return o=o||n,l.push(e),void t.push(l)}if(r<a)a-=r,l.push(i);else{const[e,c]=g(i,a,r);o=o||c,l.push(e),t.push(l),a=n,l=[]}})),[t,o]}(n,e)),[n,e]);return t},f=e=>{let{children:n}=e;return n};function h(e){return void 0!==e&&null!==e}const v=e=>{const{itemPrefixCls:n,component:t,span:a,className:i,style:c,labelStyle:s,contentStyle:r,bordered:d,label:u,content:m,colon:p,type:b}=e,g=t;return d?l.createElement(g,{className:o()({["".concat(n,"-item-label")]:"label"===b,["".concat(n,"-item-content")]:"content"===b},i),style:c,colSpan:a},h(u)&&l.createElement("span",{style:s},u),h(m)&&l.createElement("span",{style:r},m)):l.createElement(g,{className:o()("".concat(n,"-item"),i),style:c,colSpan:a},l.createElement("div",{className:"".concat(n,"-item-container")},(u||0===u)&&l.createElement("span",{className:o()("".concat(n,"-item-label"),{["".concat(n,"-item-no-colon")]:!p}),style:s},u),(m||0===m)&&l.createElement("span",{className:o()("".concat(n,"-item-content")),style:r},m)))};function S(e,n,t){let{colon:a,prefixCls:o,bordered:i}=n,{component:c,type:s,showLabel:r,showContent:d,labelStyle:u,contentStyle:m}=t;return e.map(((e,n)=>{let{label:t,children:p,prefixCls:b=o,className:g,style:y,labelStyle:f,contentStyle:h,span:S=1,key:x}=e;return"string"===typeof c?l.createElement(v,{key:"".concat(s,"-").concat(x||n),className:g,style:y,labelStyle:Object.assign(Object.assign({},u),f),contentStyle:Object.assign(Object.assign({},m),h),span:S,colon:a,component:c,itemPrefixCls:b,bordered:i,label:r?t:null,content:d?p:null,type:s}):[l.createElement(v,{key:"label-".concat(x||n),className:g,style:Object.assign(Object.assign(Object.assign({},u),y),f),span:1,colon:a,component:c[0],itemPrefixCls:b,bordered:i,label:t,type:"label"}),l.createElement(v,{key:"content-".concat(x||n),className:g,style:Object.assign(Object.assign(Object.assign({},m),y),h),span:2*S-1,component:c[1],itemPrefixCls:b,bordered:i,content:p,type:"content"})]}))}const x=e=>{const n=l.useContext(u),{prefixCls:t,vertical:a,row:o,index:i,bordered:c}=e;return a?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(i),className:"".concat(t,"-row")},S(o,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:"content-".concat(i),className:"".concat(t,"-row")},S(o,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:i,className:"".concat(t,"-row")},S(o,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))};var j=t(17996),O=t(64663),k=t(55864),w=t(89514);const A=e=>{const{componentCls:n,labelBg:t}=e;return{["&".concat(n,"-bordered")]:{["> ".concat(n,"-view")]:{border:"".concat((0,j.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto"},["".concat(n,"-row")]:{borderBottom:"".concat((0,j.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"},["> ".concat(n,"-item-label, > ").concat(n,"-item-content")]:{padding:"".concat((0,j.zA)(e.padding)," ").concat((0,j.zA)(e.paddingLG)),borderInlineEnd:"".concat((0,j.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}},["> ".concat(n,"-item-label")]:{color:e.colorTextSecondary,backgroundColor:t,"&::after":{display:"none"}}}},["&".concat(n,"-middle")]:{["".concat(n,"-row")]:{["> ".concat(n,"-item-label, > ").concat(n,"-item-content")]:{padding:"".concat((0,j.zA)(e.paddingSM)," ").concat((0,j.zA)(e.paddingLG))}}},["&".concat(n,"-small")]:{["".concat(n,"-row")]:{["> ".concat(n,"-item-label, > ").concat(n,"-item-content")]:{padding:"".concat((0,j.zA)(e.paddingXS)," ").concat((0,j.zA)(e.padding))}}}}}},C=(0,k.OF)("Descriptions",(e=>(e=>{const{componentCls:n,extraColor:t,itemPaddingBottom:l,colonMarginRight:a,colonMarginLeft:o,titleMarginBottom:i}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,O.dF)(e)),A(e)),{"&-rtl":{direction:"rtl"},["".concat(n,"-header")]:{display:"flex",alignItems:"center",marginBottom:i},["".concat(n,"-title")]:Object.assign(Object.assign({},O.L9),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),["".concat(n,"-extra")]:{marginInlineStart:"auto",color:t,fontSize:e.fontSize},["".concat(n,"-view")]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},["".concat(n,"-row")]:{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}},["".concat(n,"-item-label")]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat((0,j.zA)(o)," ").concat((0,j.zA)(a))},["&".concat(n,"-item-no-colon::after")]:{content:'""'}},["".concat(n,"-item-no-label")]:{"&::after":{margin:0,content:'""'}},["".concat(n,"-item-content")]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},["".concat(n,"-item")]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",["".concat(n,"-item-label")]:{display:"inline-flex",alignItems:"baseline"},["".concat(n,"-item-content")]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{["".concat(n,"-row")]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{["".concat(n,"-row")]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}})((0,w.h1)(e,{}))),(e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText})));var E=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t};const N=e=>{const{prefixCls:n,title:t,extra:a,column:m,colon:p=!0,bordered:g,layout:f,children:h,className:v,rootClassName:S,style:j,size:O,labelStyle:k,contentStyle:w,items:A}=e,N=E(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:_,direction:I,descriptions:z}=l.useContext(c.QO),T=_("descriptions",n),F=(0,r.A)(),L=l.useMemo((()=>{var e;return"number"===typeof m?m:null!==(e=(0,i.ko)(F,Object.assign(Object.assign({},d),m)))&&void 0!==e?e:3}),[F,m]),P=b(F,A,h),K=(0,s.A)(O),M=y(L,P),[B,U,D]=C(T),W=l.useMemo((()=>({labelStyle:k,contentStyle:w})),[k,w]);return B(l.createElement(u.Provider,{value:W},l.createElement("div",Object.assign({className:o()(T,null===z||void 0===z?void 0:z.className,{["".concat(T,"-").concat(K)]:K&&"default"!==K,["".concat(T,"-bordered")]:!!g,["".concat(T,"-rtl")]:"rtl"===I},v,S,U,D),style:Object.assign(Object.assign({},null===z||void 0===z?void 0:z.style),j)},N),(t||a)&&l.createElement("div",{className:"".concat(T,"-header")},t&&l.createElement("div",{className:"".concat(T,"-title")},t),a&&l.createElement("div",{className:"".concat(T,"-extra")},a)),l.createElement("div",{className:"".concat(T,"-view")},l.createElement("table",null,l.createElement("tbody",null,M.map(((e,n)=>l.createElement(x,{key:n,index:n,colon:p,prefixCls:T,vertical:"vertical"===f,bordered:g,row:e})))))))))};N.Item=f;const _=N}}]);
//# sourceMappingURL=6572.ef5432ac.chunk.js.map