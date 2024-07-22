"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[7386],{8469:(e,l,n)=>{n.d(l,{Ay:()=>h,s5:()=>g,uJ:()=>m});var a=n(30032),r=n(16162),i=n(96495),o=n(29871),d=n(50840),s=n(97080),t=n(20307),u=(n(76998),n(77678)),c=n(23446);const m={"cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","atom-plus.device":"ATOM+","warboy.device":"Warboy","hyperaccel-lpu.device":"Hyperaccel LPU"},v=e=>{let{size:l=16,children:n}=e;return(0,c.jsx)("mwc-icon",{style:{"--mdc-icon-size":"".concat(l+2,"px"),width:l,height:l},children:n})},g=e=>{var l,n,a;let{type:r,size:i=16,showIcon:d=!0,showUnit:s=!0,showTooltip:m=!0,...g}=e;const{t:h}=(0,u.Bd)(),p={cpu:[(0,c.jsx)(v,{size:i,children:"developer_board"}),h("session.core")],mem:[(0,c.jsx)(v,{size:i,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/rocm.svg","GPU"],"tpu.device":[(0,c.jsx)(v,{size:i,children:"view_module"}),"TPU"],"ipu.device":[(0,c.jsx)(v,{size:i,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"atom-plus.device":["/resources/icons/rebel.svg","ATOM"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"],"hyperaccel-lpu.device":["/resources/icons/npu_generic.svg","Hyperaccel LPU"]},y="string"===typeof(null===(l=p[r])||void 0===l?void 0:l[0])?(0,c.jsx)("img",{...g,style:{height:i,alignSelf:"center",...g.style||{}},src:(null===(n=p[r])||void 0===n?void 0:n[0])||"",alt:r}):(0,c.jsx)(o.A,{style:{width:16,height:16},children:(null===(a=p[r])||void 0===a?void 0:a[0])||r});return m?(0,c.jsx)(t.A,{title:r,children:y}):(0,c.jsx)(o.A,{style:{pointerEvents:"none"},children:y})},h=e=>{var l,n,t,u,m;let{type:v,value:h,extra:p,opts:y,hideTooltip:f=!1}=e;const{token:x}=d.A.useToken(),k=(0,i.Nw)(),[A]=(0,r.Hv)(k||void 0);return(0,c.jsxs)(o.A,{direction:"row",gap:"xxs",children:[null!==A&&void 0!==A&&A[v]?(0,c.jsx)(g,{type:v,showTooltip:!f}):v,(0,c.jsx)(s.A.Text,{children:null!==A&&void 0!==A&&null!==(l=A[v])&&void 0!==l&&l.number_format.binary?Number(null===(n=(0,a.Js)(h,"g",3,!0))||void 0===n?void 0:n.numberFixed).toString():((null===A||void 0===A||null===(t=A[v])||void 0===t?void 0:t.number_format.round_length)||0)>0?parseFloat(h).toFixed(2):h}),(0,c.jsx)(s.A.Text,{type:"secondary",children:(null===A||void 0===A||null===(u=A[v])||void 0===u?void 0:u.display_unit)||""}),"mem"===v&&null!==y&&void 0!==y&&y.shmem&&(null===y||void 0===y?void 0:y.shmem)>0?(0,c.jsxs)(s.A.Text,{type:"secondary",style:{fontSize:x.fontSizeSM},children:["(SHM: ",null===(m=(0,a.Js)(y.shmem+"b","g",2,!0))||void 0===m?void 0:m.numberFixed,"GiB)"]}):null,p]})}},90139:(e,l,n)=>{n.d(l,{A:()=>f});var a=n(30032),r=n(83468),i=n(60275),o=n(29871),d=n(81638),s=n(66464),t=n(78074),u=n(20307),c=n(89146),m=n(45901),v=n.n(m),g=n(76998),h=n(77678),p=n(91560),y=n(23446);const f=e=>{let{autoSelectType:l,showUsageStatus:n,value:m,onChange:f,defaultValue:x,searchValue:k,onSearch:A,...F}=e;const{t:b}=(0,h.Bd)(),S=(0,i.useShadowRoot)(),j=(0,r.CX)(),{data:w,isLoading:C}=(0,p.useQuery)("vhostInfo",(()=>j.vfolder.list_hosts())),[_,K]=(0,s.A)(v().omitBy({value:m,onChange:f,defaultValue:x},v().isUndefined)),[M,T]=(0,s.A)(v().omitBy({value:k,onChange:A},v().isUndefined));return(0,g.useEffect)((()=>{var e,n,a;if(!l)return;let r=null!==(e=null!==(n=null===w||void 0===w?void 0:w.default)&&void 0!==n?n:null===w||void 0===w?void 0:w.allowed[0])&&void 0!==e?e:"";if("usage"===l){var i;r=(null===(i=v().minBy(v().map(null===w||void 0===w?void 0:w.allowed,(e=>{var l;return{host:e,volume_info:null===w||void 0===w||null===(l=w.volume_info)||void 0===l?void 0:l[e]}})),"volume_info.usage.percentage"))||void 0===i?void 0:i.host)||r}K(r,{id:r,...(null===w||void 0===w||null===(a=w.volume_info)||void 0===a?void 0:a[r])||{}})}),[w]),(0,y.jsx)(t.A,{filterOption:!0,placeholder:b("data.SelectStorageHost"),loading:C,style:{minWidth:165},value:_,onChange:e=>{var l;K(e,{id:e,...(null===w||void 0===w||null===(l=w.volume_info)||void 0===l?void 0:l[e])||{}})},searchValue:M,onSearch:T,optionLabelProp:"value",options:v().map(null===w||void 0===w?void 0:w.allowed,(e=>{var l,r,i,s,t,m,v,g;return{label:n?(0,y.jsxs)(o.A,{align:"center",gap:"xs",children:[(null===w||void 0===w||null===(l=w.volume_info)||void 0===l||null===(r=l[e])||void 0===r?void 0:r.usage)&&(0,y.jsx)(u.A,{title:"".concat(b("data.Host")," ").concat(b("data.usage.Status"),":\n                ").concat((null===w||void 0===w||null===(i=w.volume_info[e])||void 0===i||null===(s=i.usage)||void 0===s?void 0:s.percentage)<70?b("data.usage.Adequate"):(null===w||void 0===w||null===(t=w.volume_info[e])||void 0===t||null===(m=t.usage)||void 0===m?void 0:m.percentage)<90?b("data.usage.Caution"):b("data.usage.Insufficient")),getPopupContainer:()=>S,children:(0,y.jsx)(c.A,{color:(0,a.yc)(null===w||void 0===w||null===(v=w.volume_info[e])||void 0===v||null===(g=v.usage)||void 0===g?void 0:g.percentage)})}),(0,y.jsx)(d.A,{keyword:M,children:e})]}):e,value:e}})),...F})}},6935:(e,l,n)=>{n.r(l),n.d(l,{default:()=>r});const a=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ModelCardModalFragment",selections:[e,l,{alias:null,args:null,kind:"ScalarField",name:"author",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"modified_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"task",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"framework",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"license",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"readme",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_resource",storageKey:null},{alias:null,args:null,concreteType:"VirtualFolder",kind:"LinkedField",name:"vfolder",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cloneable",storageKey:null},e,l,{alias:null,args:null,kind:"ScalarField",name:"host",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VirtualFolderNode",kind:"LinkedField",name:"vfolder_node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ModelCloneModalVFolderFragment"}],storageKey:null}],type:"ModelCard",abstractKey:null}}();a.hash="8c3572f1adf6875906d30969b5a901e6";const r=a},17184:(e,l,n)=>{n.r(l),n.d(l,{default:()=>r});const a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ModelCloneModalVFolderFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"host",storageKey:null}],type:"VirtualFolderNode",abstractKey:null,hash:"9e8196f7a6fe11fb62c373124ffc450a"},r=a},9016:(e,l,n)=>{n.d(l,{b:()=>o});var a=n(77678);const r={"Cannot read property 'map' of null":"error.APINotSupported","TypeError: NetworkError when attempting to fetch resource.":"error.NetworkConnectionFailed","Login failed. Check login information.":"error.LoginFailed","User credential mismatch.":"error.LoginFailed","Authentication failed. Check information and manager status.":"error.AuthenticationFailed","Too many failed login attempts":"error.TooManyLoginFailures","server responded failure: 400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","server responded failure: 400 Bad Request - One of your accessible vfolders already has the name you requested.":"error.VirtualFolderAlreadyExist","server responded failure: 400 Bad Request - You cannot create more vfolders.":"error.MaximumVfolderCreation","server responded failure: 400 Bad Request - Missing or invalid API parameters. (You cannot create more vfolders.)":"error.MaximumVfolderCreation","server responded failure: 400 Bad Request - Cannot change the options of a vfolder that is not owned by myself.":"error.CannotChangeVirtualFolderOption","server responded failure: 403 Forbidden - Cannot share private dot-prefixed vfolders.":"error.CannotSharePrivateAutomountFolder","server responded failure: 404 Not Found - No such vfolder invitation.":"error.FolderSharingNotAvailableToUser","server responded failure: 404 Not Found - No such user.":"error.FolderSharingNotAvailableToUser","server responded failure: 412 Precondition Failed - You have reached your resource limit.":"error.ReachedResourceLimit","Cannot read property 'split' of undefined":"error.UserHasNoGroup"},i={"\\w*not found matched token with email\\w*":"error.InvalidSignupToken","\\w*Access key not found\\w*":"error.LoginInformationMismatch","\\w*401 Unauthorized - Credential/signature mismatch\\w*":"error.LoginInformationMismatch",'integrity error: duplicate key value violates unique constraint "pk_resource_presets"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ResourcePolicyAlreadyExist",'integrity error: duplicate key value violates unique constraint "pk_scaling_groups"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ScalingGroupAlreadyExist",'integrity error: duplicate key value violates unique constraint "uq_users_username"[\\n]DETAIL:  Key \\(username\\)=\\([\\w]+\\) already exists.[\\n]':"error.UserNameAlreadyExist","server responded failure: 400 Bad Request - Missing or invalid API parameters. (Your resource quota is exceeded. (cpu=24 mem=512g cuda.shares=80))":"error.ResourceLimitExceed",'\\w*Key \\(name\\)=\\(.+\\) is still referenced from table "keypairs"\\.\\w*':"error.ResourcePolicyStillReferenced","Your resource request is smaller than the minimum required by the image. (\\w*)":"error.SmallerResourceThenImageRequires"},o=()=>{const{t:e}=(0,a.Bd)();return{relieve:l=>{if("undefined"===typeof l)return void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?"_DISCONNECTED":"Problem occurred.";if(!0===globalThis.backendaiwebui.debug)return l;if({}.hasOwnProperty.call(r,l))return e(r[l]);for(const n of Object.keys(i))if(RegExp(n).test(l))return e(i[n]);return l}}}},97386:(e,l,n)=>{n.r(l),n.d(l,{default:()=>$});var a,r=n(57528),i=n(29871),o=n(83468),d=n(34103),s=n(57857),t=n(21454),u=n(9016),c=n(90139),m=n(24717),v=n(41856),g=n(7121),h=n(63284),p=n(78074),y=n(82745),f=n(76998),x=n(77678),k=n(3606),A=n(23446);const F=e=>{let{vfolderNode:l,deprecatedVFolderInfo:r,...F}=e;const{t:b}=(0,x.Bd)(),S=(0,o.CX)(),j=(0,k.useFragment)(void 0!==a?a:a=n(17184),l)||r,w=(0,f.useRef)(null),C=(0,u.b)(),{upsertNotification:_}=(0,t.js)(),[K,M]=(0,f.useState)({}),T=(0,s.E)({mutationFn:e=>{let{input:l,name:n}=e;return S.vfolder.clone(l,n)}});return(0,A.jsx)(d.A,{destroyOnClose:!0,...F,okText:b("button.Clone"),confirmLoading:T.isLoading,onOk:e=>{var l;null===(l=w.current)||void 0===l||l.validateFields().then((l=>{null!==j&&void 0!==j&&j.name&&j.host&&T.mutate({input:l,name:j.name},{onSuccess(n){var a;_({key:"modelStore.clone."+j.id,open:!0,backgroundTask:{status:"pending",percent:0,taskId:n.bgtask_id,statusDescriptions:{pending:b("data.folders.FolderClonePending"),resolved:b("data.folders.FolderCloned"),rejected:b("data.folders.FolderCloneFailed")}},message:l.target_name,toText:b("data.folders.OpenAFolder"),to:"/data?tab=model&folder=".concat(n.id)}),null===(a=F.onOk)||void 0===a||a.call(F,e)},onError(e){var l;if(null!==(l=e.message)&&void 0!==l&&l.includes("The virtual folder already exists with the same name"))M({validateStatus:"error",help:b("modelStore.FolderAlreadyExists")});else{const l=C.relieve((null===e||void 0===e?void 0:e.message)||"");m.Ay.error({content:l})}}})})).catch((()=>{}))},children:(0,A.jsxs)(i.A,{direction:"column",align:"stretch",gap:"sm",children:[(0,A.jsx)(v.A,{showIcon:!0,type:"info",message:b("modelStore.CloneInfo")}),(0,A.jsxs)(g.A,{ref:w,layout:"vertical",requiredMark:"optional",initialValues:{permission:"rw",usage_mode:"model",target_name:(null===j||void 0===j?void 0:j.name)+"_1",target_host:null===j||void 0===j?void 0:j.host},scrollToFirstError:!0,children:[(0,A.jsx)(g.A.Item,{label:b("data.ExistingFolderName"),required:!0,children:(0,A.jsx)(h.A,{value:(null===j||void 0===j?void 0:j.name)||"",disabled:!0})}),(0,A.jsx)(g.A.Item,{name:"target_name",label:b("data.NewFolderName"),rules:[{required:!0},{pattern:/^[a-zA-Z0-9._-]*$/,message:b("data.Allowslettersnumbersand-_dot")}],...K,children:(0,A.jsx)(h.A,{autoComplete:"off",onChange:()=>{M({})}})}),(0,A.jsx)(g.A.Item,{name:"target_host",label:b("data.Host"),tooltip:b("data.CloningIsOnlyPossibleSameHost"),rules:[{required:!0}],children:(0,A.jsx)(c.A,{disabled:!0})}),S.isAPIVersionCompatibleWith("v4.20191215")&&(0,A.jsx)(g.A.Item,{name:"usage_mode",hidden:!0,children:(0,A.jsx)(h.A,{})}),(0,A.jsx)(g.A.Item,{label:b("data.Permission"),name:"permission",rules:[{required:!0}],children:(0,A.jsx)(p.A,{options:[{label:"Read-Write",value:"rw"},{label:"Read-Only",value:"ro"},{label:"Delete",value:"wd"}]})}),(0,A.jsx)(g.A.Item,{hidden:!0,name:"cloneable",valuePropName:"checked",children:(0,A.jsx)(y.A,{checked:!1})})]})]})})};var b,S=n(8469),j=n(36798),w=n(52399),C=n(57400),_=n(50840),K=n(33554),M=n(6932),T=n(48713),L=n(7518),P=n(9788),E=n(97080),I=n(29475),N=n(22307),R=n(14455),q=n.n(R),V=n(45901),U=n.n(V),B=n(95948),O=n(96235);const z=e=>{var l,a,r,s;let{modelCardModalFrgmt:t=null,onRequestClose:u,...c}=e;const{t:m}=(0,x.Bd)(),{token:v}=_.A.useToken(),[g,h]=(0,f.useState)(!1),[p]=(0,o.Gj)(),y=K.Ay.useBreakpoint(),R=(0,k.useFragment)(void 0!==b?b:b=n(6935),t),V={xs:{span:24},lg:{span:2===U().compact([null===R||void 0===R?void 0:R.description,null===R||void 0===R?void 0:R.readme]).length?12:24}};return(0,A.jsxs)(d.A,{...c,title:(null===R||void 0===R?void 0:R.title)||(null===R||void 0===R?void 0:R.name),centered:!0,onCancel:u,destroyOnClose:!0,width:U().isEmpty(null===R||void 0===R?void 0:R.readme)||U().isEmpty(null===R||void 0===R?void 0:R.description)?800:y.xxl?"75%":"90%",footer:[(0,A.jsx)(M.Ay,{onClick:()=>{u()},children:m("button.Close")},"close")],children:[(0,A.jsxs)(i.A,{direction:"row",align:"start",style:{marginBottom:v.marginSM},gap:"xs",wrap:"wrap",children:[(0,A.jsxs)(i.A,{justify:"start",align:"start",gap:"xs",style:{flex:1},wrap:"wrap",children:[(null===R||void 0===R?void 0:R.category)&&(0,A.jsx)(T.A,{bordered:!1,style:{marginRight:0},children:null===R||void 0===R?void 0:R.category}),(null===R||void 0===R?void 0:R.task)&&(0,A.jsx)(T.A,{bordered:!1,color:"success",style:{marginRight:0},children:null===R||void 0===R?void 0:R.task}),(null===R||void 0===R?void 0:R.label)&&U().map(null===R||void 0===R?void 0:R.label,(e=>(0,A.jsx)(T.A,{bordered:!1,color:"blue",style:{marginRight:0},children:e},e))),(null===R||void 0===R?void 0:R.license)&&(0,A.jsx)(T.A,{icon:(0,A.jsx)(j.A,{}),bordered:!1,color:"geekblue",style:{marginRight:0},children:null===R||void 0===R?void 0:R.license})]}),(0,A.jsxs)(i.A,{direction:"row",justify:"end",gap:"sm",children:[(0,A.jsx)(M.Ay,{disabled:!0,ghost:!0,size:"small",icon:(0,A.jsx)(B.A,{}),children:m("modelStore.FinetuneModel")}),(0,A.jsx)(M.Ay,{type:"primary",ghost:!0,icon:(0,A.jsx)(w.A,{}),size:"small",disabled:!(null!==R&&void 0!==R&&null!==(l=R.vfolder)&&void 0!==l&&l.cloneable),onClick:()=>{h(!0)},children:m("modelStore.CloneToFolder")})]})]}),(0,A.jsxs)(L.A,{gutter:[v.marginLG,v.marginLG],children:[(0,A.jsx)(P.A,{...V,children:(0,A.jsxs)(i.A,{direction:"column",align:"stretch",gap:"xs",children:[null!==R&&void 0!==R&&R.description?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(E.A.Title,{level:5,style:{marginTop:0},children:m("modelStore.Description")}),(0,A.jsx)(I.A,{size:"small",style:{whiteSpace:"pre-wrap",minHeight:y.lg?100:void 0,height:y.lg?"calc(100vh - 590px)":void 0,maxHeight:"calc(100vh - 590px)",overflow:"auto"},children:(0,A.jsx)(E.A.Paragraph,{ellipsis:{rows:y.lg?11:3,expandable:"collapsible",symbol:e=>(0,A.jsx)(M.Ay,{size:"small",type:"link",children:m(e?"button.Collapse":"button.Expand")})},children:null===R||void 0===R?void 0:R.description})})]}):null,(0,A.jsx)(N.A,{style:{marginTop:v.marginMD},column:1,size:"small",bordered:!0,items:[{key:"author",label:m("modelStore.Author"),children:null===R||void 0===R?void 0:R.author},{key:"version",label:m("modelStore.Version"),children:null===R||void 0===R?void 0:R.version},{key:"architecture",label:m("environment.Architecture"),children:null===R||void 0===R?void 0:R.architecture},{key:"frameworks",label:m("modelStore.Framework"),children:(0,A.jsx)(i.A,{direction:"row",gap:"xs",children:U().map(U().filter(U().castArray(null===R||void 0===R?void 0:R.framework),(e=>!U().isEmpty(e))),((e,l)=>{const n=null===e||void 0===e?void 0:e.replace(/\s*\d+\s*$/,""),a=U().find(null===p||void 0===p?void 0:p.imageInfo,(e=>(null===e||void 0===e?void 0:e.name)===n)),r="".concat(e,"-").concat(l);return null!==a&&void 0!==a&&a.icon?(0,A.jsxs)(i.A,{gap:"xxs",children:[(0,A.jsx)("img",{style:{width:"1em",height:"1em"},src:"resources/icons/"+(null===a||void 0===a?void 0:a.icon),alt:e||""}),e]},r):(0,A.jsx)(E.A.Text,{children:e},r)}))})},{key:"created",label:m("modelStore.Created"),children:q()(null===R||void 0===R?void 0:R.created_at).format("lll")},{key:"last_modified",label:m("modelStore.LastModified"),children:q()(null===R||void 0===R?void 0:R.modified_at).format("lll")},{key:"min_resource",label:m("modelStore.MinResource"),children:(0,A.jsx)(i.A,{gap:"xs",children:(null===R||void 0===R?void 0:R.min_resource)&&U().map(JSON.parse(null===R||void 0===R?void 0:R.min_resource),((e,l)=>(0,A.jsx)(S.Ay,{type:l,value:U().toString(e)},l)))})}]})]})}),null!==R&&void 0!==R&&R.readme?(0,A.jsx)(P.A,{...V,children:(0,A.jsx)(I.A,{size:"small",title:(0,A.jsxs)(i.A,{direction:"row",gap:"xs",children:[(0,A.jsx)(C.A,{}),"README.md"]}),styles:{body:{padding:v.paddingLG,overflow:"auto",height:y.lg?"calc(100vh - 287px)":void 0,minHeight:200}},children:(0,A.jsx)(O.Ay,{children:(null===R||void 0===R?void 0:R.readme)||""})})}):null]}),(0,A.jsx)(f.Suspense,{children:(0,A.jsx)(F,{vfolderNode:(null===R||void 0===R?void 0:R.vfolder_node)||null,deprecatedVFolderInfo:{id:(null===R||void 0===R||null===(a=R.vfolder)||void 0===a?void 0:a.id)||"",host:(null===R||void 0===R||null===(r=R.vfolder)||void 0===r?void 0:r.host)||"",name:(null===R||void 0===R||null===(s=R.vfolder)||void 0===s?void 0:s.name)||""},title:m("modelStore.CloneAsFolder"),open:g,onOk:()=>{h(!1)},onCancel:()=>{h(!1)}})})]})};var D,G,H=n(81638),W=n(83786),Q=n(94519),Y=n(76740);const J=(0,n(75215).rU)((e=>{let{css:l,token:n}=e;return{cardList:l(G||(G=(0,r.A)(["\n      .ant-col {\n        height: calc(100% - ","px);\n      }\n    "])),n.marginMD)}})),$=()=>{var e;const[l,a]=(0,o.Tw)("first"),{t:r}=(0,x.Bd)(),{token:d}=_.A.useToken(),[s,t]=(0,f.useState)(),[u,c]=(0,f.useState)([]),[m,v]=(0,f.useState)([]),[g,y]=(0,f.useState)([]),{styles:F}=J(),[b,S]=(0,f.useState)(),[j,w]=(0,f.useTransition)(),{model_cards:C}=(0,k.useLazyLoadQuery)(void 0!==D?D:D=n(55510),{filter:void 0},{fetchPolicy:"network-only",fetchKey:l}),K=(0,f.useMemo)((()=>{const e={task:[],category:[],label:[]},l=["task","category","label"];return l.forEach((l=>e[l]=[])),null===C||void 0===C||C.edges.forEach((n=>{l.forEach((l=>{var a;null!==n&&void 0!==n&&null!==(a=n.node)&&void 0!==a&&a[l]&&U().map(U().castArray(n.node[l]),(n=>{U().isString(n)&&!e[l].includes(n)&&e[l].push(n)}))}))})),e}),[null===C||void 0===C?void 0:C.edges]);return(0,A.jsxs)(i.A,{direction:"column",align:"stretch",justify:"center",gap:"lg",style:{padding:d.paddingLG},children:[(0,A.jsxs)(i.A,{direction:"column",align:"stretch",className:"filterWrap",gap:"xs",children:[(0,A.jsxs)(i.A,{direction:"row",gap:"md",children:[(0,A.jsx)(h.A,{prefix:(0,A.jsx)(W.A,{}),placeholder:r("modelStore.SearchModels"),allowClear:!0,onChange:e=>{t(e.target.value)},autoComplete:"off"}),(0,A.jsx)(M.Ay,{icon:(0,A.jsx)(Q.A,{}),onClick:()=>{w((()=>{a()}))},loading:j})]}),(0,A.jsxs)(i.A,{direction:"row",gap:"md",wrap:"wrap",children:[(0,A.jsx)(p.A,{style:{minWidth:150},placeholder:r("modelStore.Category"),options:U().map(K.category,(e=>({label:e,value:e}))),mode:"multiple",popupMatchSelectWidth:!1,value:u,onChange:e=>{c(e)},allowClear:!0}),(0,A.jsx)(p.A,{style:{minWidth:150},placeholder:r("modelStore.Task"),options:U().map(K.task,(e=>({label:e,value:e}))),mode:"multiple",popupMatchSelectWidth:!1,value:m,onChange:e=>{v(e)},allowClear:!0}),(0,A.jsx)(p.A,{style:{minWidth:150},placeholder:r("modelStore.Label"),options:U().map(K.label,(e=>({label:e,value:e}))),mode:"multiple",popupMatchSelectWidth:!1,value:g,onChange:e=>{y(e)},allowClear:!0})]})]}),(0,A.jsx)(Y.A,{className:F.cardList,grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:5},dataSource:null===C||void 0===C||null===(e=C.edges)||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e.node)).filter((e=>{let l=!0;if(s){var n,a,r,i,o;const d=s.toLowerCase();l=(null===e||void 0===e||null===(n=e.description)||void 0===n?void 0:n.toLowerCase().includes(d))||(null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.toLowerCase().includes(d))||(null===e||void 0===e||null===(r=e.task)||void 0===r?void 0:r.toLowerCase().includes(d))||(null===e||void 0===e||null===(i=e.category)||void 0===i?void 0:i.toLowerCase().includes(d))||(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o.some((e=>null===e||void 0===e?void 0:e.toLowerCase().includes(d))))||!1}return(U().isEmpty(u)||U().includes(u,null===e||void 0===e?void 0:e.category))&&(U().isEmpty(g)||U().intersection(g,null===e||void 0===e?void 0:e.label).length>0)&&(U().isEmpty(m)||U().includes(m,null===e||void 0===e?void 0:e.task))&&l})),renderItem:e=>(0,A.jsx)(Y.A.Item,{onClick:()=>{S(e)},style:{height:"100%"},children:(0,A.jsx)(I.A,{hoverable:!0,title:(0,A.jsx)(H.A,{keyword:s,children:null===e||void 0===e?void 0:e.title}),style:{height:"100%"},size:"small",children:(0,A.jsxs)(i.A,{direction:"row",wrap:"wrap",gap:"xs",children:[(null===e||void 0===e?void 0:e.description)&&(0,A.jsx)(E.A.Paragraph,{ellipsis:{rows:3,expandable:!1},children:(0,A.jsx)(H.A,{keyword:s,children:null===e||void 0===e?void 0:e.description})}),(null===e||void 0===e?void 0:e.category)&&(0,A.jsx)(T.A,{bordered:!1,children:(0,A.jsx)(H.A,{keyword:s,children:null===e||void 0===e?void 0:e.category})}),(null===e||void 0===e?void 0:e.task)&&(0,A.jsx)(T.A,{bordered:!1,color:"success",children:(0,A.jsx)(H.A,{keyword:s,children:null===e||void 0===e?void 0:e.task})}),(null===e||void 0===e?void 0:e.label)&&U().map(null===e||void 0===e?void 0:e.label,(e=>(0,A.jsx)(T.A,{bordered:!1,color:"blue",children:(0,A.jsx)(H.A,{keyword:s,children:e})},e)))]})})})}),(0,A.jsx)(z,{modelCardModalFrgmt:b,open:!!b,onRequestClose:()=>{S(null)}})]})}},55510:(e,l,n)=>{n.r(l),n.d(l,{default:()=>r});const a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"filter"}],l=[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Literal",name:"first",value:200}],n={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"author",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"task",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"category",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"license",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"min_resource",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},g={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null}],storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"host",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ModelStoreListPageQuery",selections:[{alias:null,args:l,concreteType:"ModelCardConnection",kind:"LinkedField",name:"model_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"ModelCardEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[n,{alias:null,args:null,concreteType:"ModelCard",kind:"LinkedField",name:"node",plural:!1,selections:[a,r,i,o,d,s,t,u,c,m,{args:null,kind:"FragmentSpread",name:"ModelCardModalFragment"}],storageKey:null}],storageKey:null},v,g],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ModelStoreListPageQuery",selections:[{alias:null,args:l,concreteType:"ModelCardConnection",kind:"LinkedField",name:"model_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"ModelCardEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[n,{alias:null,args:null,concreteType:"ModelCard",kind:"LinkedField",name:"node",plural:!1,selections:[a,r,i,o,d,s,t,u,c,m,{alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"modified_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"framework",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"readme",storageKey:null},{alias:null,args:null,concreteType:"VirtualFolder",kind:"LinkedField",name:"vfolder",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cloneable",storageKey:null},a,r,h],storageKey:null},{alias:null,args:null,concreteType:"VirtualFolderNode",kind:"LinkedField",name:"vfolder_node",plural:!1,selections:[a,r,h],storageKey:null}],storageKey:null}],storageKey:null},v,g],storageKey:null}]},params:{cacheID:"ad4b59b50935a0c58d3d0d526f7d3068",id:null,metadata:{},name:"ModelStoreListPageQuery",operationKind:"query",text:'query ModelStoreListPageQuery(\n  $filter: String\n) {\n  model_cards(filter: $filter, first: 200) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        author\n        title\n        description\n        task\n        category\n        label\n        license\n        min_resource\n        ...ModelCardModalFragment\n      }\n    }\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment ModelCardModalFragment on ModelCard {\n  id\n  name\n  author\n  title\n  version\n  created_at\n  modified_at\n  description\n  task\n  category\n  architecture\n  framework\n  label\n  license\n  readme\n  min_resource\n  vfolder {\n    cloneable\n    id\n    name\n    host\n  }\n  vfolder_node @since(version: "24.09.*") {\n    ...ModelCloneModalVFolderFragment\n    id\n  }\n}\n\nfragment ModelCloneModalVFolderFragment on VirtualFolderNode {\n  id\n  name\n  host\n}\n'}}}();a.hash="325caeedad31dff1df7e4d9bfa3c8855";const r=a}}]);
//# sourceMappingURL=7386.cb177538.chunk.js.map