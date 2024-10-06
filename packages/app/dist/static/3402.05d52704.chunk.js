(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3402,1472],{33402:(_e,z,r)=>{"use strict";r.d(z,{b:()=>Je,W:()=>gt});var t=r(14041),I=r(18690),_=r(82326),b=r(11618),L=r(66839),se=r(74378),F=r(93285),G=r(42899),$=r(4387),ge=r(13660),M=r(15246),w=r(699),Q=r(37281),J=r(14158),me=r(97214),q=r(64398),le=r(16654),N=r(18139),k=r(54195),ve=r(72814),B=r(45250),ee=r(17749);const v=t.createElement($.A,{animation:"wave",variant:"text",height:40}),ue=fe=>{const{children:te}=fe,he=(0,b.YR)(),we=(0,N.gf)(k.U),{title:Y,setTitle:x,subtitle:ne,setSubtitle:ce,entityRef:Le,metadata:{value:p,loading:d},entityMetadata:{value:h,loading:g}}=(0,L.V)();(0,t.useEffect)(()=>{p&&(x(p.site_name),ce(()=>{let{site_description:xe}=p;return(!xe||xe==="None")&&(xe=""),xe}))},[p,x,ce]);const P=we.getOptional("app.title")||"Backstage",ye=[Y,ne,P].filter(Boolean).join(" | "),{locationMetadata:oe,spec:qe}=h||{},et=qe?.lifecycle,Me=h?(0,w.t)(h,me.vv):[],vt=(0,ve.S)(ee.rQ)(),Et=t.createElement(t.Fragment,null,t.createElement(q.S,{label:(0,B.capitalize)(h?.kind||"entity"),value:t.createElement(Q.z,{color:"inherit",entityRef:Le,title:h?.metadata.title,defaultKind:"Component"})}),Me.length>0&&t.createElement(q.S,{label:"Owner",value:t.createElement(J.i,{color:"inherit",entityRefs:Me,defaultKind:"group"})}),et?t.createElement(q.S,{label:"Lifecycle",value:String(et)}):null,oe&&oe.type!=="dir"&&oe.type!=="file"?t.createElement(q.S,{label:"",value:t.createElement(G.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(G.A,{style:{padding:0},item:!0},t.createElement(ge.A,{style:{marginTop:"-25px"}})),t.createElement(G.A,{style:{padding:0},item:!0},"Source")),url:oe.target}):null);return!g&&h===void 0||!d&&p===void 0?null:t.createElement(le.Y,{type:"Documentation",typeLink:vt,title:Y||v,subtitle:ne===""?void 0:ne||v},t.createElement(F.A,{titleTemplate:"%s"},t.createElement("title",null,ye)),Et,te,he.renderComponentsByLocation(M.e.Header))};var Ee=r(84893),ke=r(76888),Ge=r(85408),Ye=r(12554),Ne=r(95208),Pe=r(64947),Ke=r(95159),ht=r(61617),je=r(91042),it=r(76842),Xe=r(3399);const lt="/.backstage/auth/v1/cookie",Ue=365*24*36e5;function pt(fe){const{pluginId:te}=fe??{},he=(0,N.gf)(Ke.a),we=(0,N.gf)(ht.I),Y=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${te}-auth-cookie-expires-at`):null,[te]),[x,ne]=(0,je.Y)(async()=>{const d=`${await we.getBaseUrl(te)}${lt}`,h=await he.fetch(`${d}`,{credentials:"include"});if(!h.ok){if(h.status===404)return{expiresAt:new Date(Date.now()+Ue)};throw await Xe.o3.fromResponse(h)}const g=await h.json();if(!g.expiresAt)throw new Error("No expiration date found in response");return g});(0,it.u)(ne.execute);const ce=(0,t.useCallback)(()=>{ne.execute()},[ne]),Le=(0,t.useCallback)(p=>{const d=(1+3*Math.random())*6e4,h=Date.parse(p.expiresAt)-Date.now()-d,g=setTimeout(ce,h);return()=>clearTimeout(g)},[ce]);return(0,t.useEffect)(()=>{if(x.status!=="success"||!x.result)return()=>{};Y?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:x.result});let p=Le(x.result);const d=h=>{const{action:g,payload:P}=h.data;g==="COOKIE_REFRESH_SUCCESS"&&(p(),p=Le(P))};return Y?.addEventListener("message",d),()=>{p(),Y?.removeEventListener("message",d)}},[x,Le,Y]),x.status==="not-executed"?{status:"loading"}:x.status==="loading"&&!x.result?{status:"loading"}:x.status==="loading"&&x.error?{status:"loading"}:x.status==="error"&&x.error?{status:"error",error:x.error,retry:ce}:{status:"success",data:x.result}}function Be(fe){const{children:te,...he}=fe,we=(0,Ne.n)(),{Progress:Y}=we.getComponents(),x=pt(he);return x.status==="loading"?t.createElement(Y,null):x.status==="error"?t.createElement(Ye.b,{error:x.error},t.createElement(Pe.A,{variant:"outlined",onClick:x.retry},"Retry")):t.createElement(t.Fragment,null,te)}var De=r(54917),Ze=r(98392),Qe=r(50868);const Je=fe=>{const{withSearch:te,withHeader:he=!0}=fe;return t.createElement(_.Y,{themeId:"documentation"},he&&t.createElement(ue,null),t.createElement(Ee.Z,null),t.createElement(se.p,{withSearch:te}))},gt=fe=>{const te=(0,De.A)(),he=(0,Ze.A)({...te,...fe.overrideThemeOptions||{}}),{kind:we,name:Y,namespace:x}=(0,ke.K)(ee.Oc),{children:ne,entityRef:ce={kind:we,name:Y,namespace:x}}=fe,Le=(0,I.P1)();if(!ne){const h=(Le?t.Children.toArray(Le.props.children):[]).flatMap(g=>g?.props?.children??[]).find(g=>!(0,Ge.E)(g,b.AF)&&!(0,Ge.E)(g,b.Wm));return t.createElement(Qe.A,{theme:he},t.createElement(Be,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:ce},h||t.createElement(Je,null))))}return t.createElement(Qe.A,{theme:he},t.createElement(Be,{pluginId:"techdocs"},t.createElement(L.R,{entityRef:ce},({metadata:p,entityMetadata:d,onReady:h})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(_.Y,{themeId:"documentation"},ne instanceof Function?ne({entityRef:ce,techdocsMetadataValue:p.value,entityMetadataValue:d.value,onReady:h}):ne)))))}},74378:(_e,z,r)=>{"use strict";r.d(z,{p:()=>st});var t=r(14041),I=r(42899),_=r(58837),b=r(66839),L=r(9394),se=r(91360),F=r(22856),G=r(96872);const $="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",ge=e=>{(0,t.useEffect)(()=>{if(!e)return()=>{};const o=e.querySelectorAll('head > link[rel="stylesheet"]');let a=o?.length??0;const s=new CustomEvent($);if(!a)return e.dispatchEvent(s),()=>{};const i=()=>{--a===0&&e.dispatchEvent(s)};return o?.forEach(c=>{c.addEventListener("load",i)}),()=>{o?.forEach(c=>{c.removeEventListener("load",i)})}},[e])},M=e=>{const[o,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};a(!0);const s=e.style;s.setProperty("opacity","0");const i=()=>{a(!1),s.setProperty("opacity","1")};return e.addEventListener($,i),()=>{e.removeEventListener($,i)}},[e]),o},w=e=>{const{element:o,onAppend:a,children:s}=e,[i,c]=(0,t.useState)((0,L.vt)({...(0,F.A)(),insertionPoint:void 0}));ge(o);const m=M(o),A=(0,t.useCallback)(E=>{if(!o||!E)return;c((0,L.vt)({...(0,F.A)(),insertionPoint:o.querySelector("head")||void 0}));let S=E.shadowRoot;S||(S=E.attachShadow({mode:"open"})),S.replaceChildren(o),typeof a=="function"&&a(S)},[o,a]);return t.createElement(t.Fragment,null,m&&t.createElement(G.k,null),t.createElement(se.Ay,{jss:i,sheetsManager:new Map},t.createElement("div",{ref:A,"data-testid":"techdocs-native-shadowroot"}),s))};var Q=r(85639),J=r(41544),me=r(16454),q=r(87437),le=r(78467),N=r(61783),k=r(33986);const ve=(0,_.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),B=e=>o=>t.createElement(q.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...o})),ee=()=>{const e=ve();return t.createElement(le.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},v=B(function(o){const{loading:a,value:s,onChange:i=()=>{},options:c=[],getOptionLabel:m=C=>String(C),inputPlaceholder:A,inputDebounceTime:E,freeSolo:S=!0,fullWidth:y=!0,clearOnBlur:R=!1,"data-testid":T="search-autocomplete",...Te}=o,{setTerm:be}=(0,q.SQ)(),X=(0,t.useCallback)(C=>C?typeof C=="string"?C:m(C):"",[m]),Se=(0,t.useMemo)(()=>X(s),[s,X]),Z=(0,t.useCallback)((C,U,j,Ce)=>{be(X(U)),i(C,U,j,Ce)},[X,be,i]),H=(0,t.useCallback)(({InputProps:{ref:C,className:U,endAdornment:j},InputLabelProps:Ce,...Oe})=>t.createElement(k.I,{...Oe,ref:C,clearButton:!1,value:Se,placeholder:A,debounceTime:E,endAdornment:a?t.createElement(ee,null):j,InputProps:{className:U}}),[a,Se,A,E]);return t.createElement(N.Ay,{...Te,"data-testid":T,value:s,onChange:Z,options:c,getOptionLabel:m,renderInput:H,freeSolo:S,fullWidth:y,clearOnBlur:R})});var ue=r(18690),Ee=r(41472);const ke=e=>e?.document,Ge=e=>{const{entityId:o,entityTitle:a,debounceTime:s=150}=e,[i,c]=(0,t.useState)(!1),m=(0,ue.Zp)(),{setFilters:A,term:E,result:{loading:S,value:y}}=(0,q.SQ)(),[R,T]=(0,t.useState)([]);(0,t.useEffect)(()=>{let Z=!0;if(Z&&y){const H=y.results.slice(0,10);T(H)}return()=>{Z=!1}},[S,y]);const{kind:Te,name:be,namespace:X}=o;(0,t.useEffect)(()=>{A(Z=>({...Z,kind:Te,namespace:X,name:be}))},[Te,X,be,A]);const Se=(Z,H)=>{if(ke(H)){const{location:C}=H.document;m(C)}};return t.createElement(v,{"data-testid":"techdocs-search-bar",size:"small",open:i&&!!E,getOptionLabel:()=>"",filterOptions:Z=>Z,onClose:()=>{c(!1)},onOpen:()=>{c(!0)},onChange:Se,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:R,renderOption:({document:Z,highlight:H})=>t.createElement(Ee.TechDocsSearchResultListItem,{result:Z,lineClamp:3,asListItem:!1,asLink:!1,title:Z.title,highlight:H}),loading:S,inputDebounceTime:s,inputPlaceholder:`Search ${a||o.name} docs`,freeSolo:!1})},Ye=e=>{const o={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(q.Lt,{initialState:o},t.createElement(Ge,{...e}))};var Ne=r(64947),Pe=r(74219),Ke=r(67296),ht=r(73845),je=r(29365),it=r(72501),Xe=r(99703),lt=r(32881);const Ue=(0,_.A)(e=>(0,Xe.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),pt=({buildLog:e,onClose:o})=>{const a=Ue(),s=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(I.A,{container:!0,direction:"column",className:a.root,spacing:0,wrap:"nowrap"},t.createElement(I.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(it.A,{variant:"h5"},"Build Details"),t.createElement(je.A,{key:"dismiss",title:"Close the drawer",onClick:o,color:"inherit"},t.createElement(lt.A,null))),t.createElement(I.A,{item:!0,xs:!0},t.createElement(Ke.r,{text:s,classes:{root:a.logs}})))},Be=({buildLog:e})=>{const o=Ue(),[a,s]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(Ne.A,{color:"inherit",onClick:()=>s(!0)},"Show Build Logs"),t.createElement(ht.Ay,{classes:{paper:o.paper},anchor:"right",open:a,onClose:()=>s(!1)},t.createElement(pt,{buildLog:e,onClose:()=>s(!1)})))};var De=r(18139),Ze=r(54195),Qe=r(52262);const Je=({errorMessage:e})=>{const o=(0,De.gf)(Ze.U).getOptionalString("techdocs.builder"),a=(0,Qe.s)(),{entityRef:s}=(0,b.V)(),i=(0,ue.zy)();(0,t.useEffect)(()=>{const{pathname:m,search:A,hash:E}=i;a.captureEvent("not-found",`${m}${A}${E}`,{attributes:s})},[a,s,i]);let c="";return[void 0,"local"].includes(o)||(c="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(J.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:c})};var gt=r(73466),fe=r(28966),te=r(49707);function he({contentLoading:e,content:o,activeSyncState:a}){return e||a==="BUILD_READY_RELOAD"||!o&&a==="CHECKING"?"CHECKING":!o&&a==="BUILDING"?"INITIAL_BUILD":o?a==="BUILDING"?"CONTENT_STALE_REFRESHING":a==="BUILD_READY"?"CONTENT_STALE_READY":a==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function we(e,o){const a={...e};switch(o.type){case"sync":o.state==="CHECKING"&&(a.buildLog=[]),a.activeSyncState=o.state,a.syncError=o.syncError;break;case"contentLoading":a.contentLoading=!0,a.contentError=void 0;break;case"content":typeof o.path=="string"&&(a.path=o.path),a.contentLoading=!1,a.content=o.content,a.contentError=o.contentError;break;case"buildLog":a.buildLog=a.buildLog.concat(o.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(a.activeSyncState)&&["contentLoading","content"].includes(o.type)&&(a.activeSyncState="UP_TO_DATE",a.buildLog=[]),a}function Y(e,o,a,s){const[i,c]=(0,t.useReducer)(we,{activeSyncState:"CHECKING",path:s,contentLoading:!0,buildLog:[]}),m=(0,De.gf)(te.s),{retry:A}=(0,fe.A)(async()=>{c({type:"contentLoading"});try{const y=await m.getEntityDocs({kind:e,namespace:o,name:a},s);return c({type:"content",content:y,path:s}),y}catch(y){c({type:"content",contentError:y,path:s})}},[m,e,o,a,s]),E=(0,t.useRef)({content:void 0,reload:()=>{}});return E.current={content:i.content,reload:A},(0,gt.A)(async()=>{c({type:"sync",state:"CHECKING"});const y=setTimeout(()=>{c({type:"sync",state:"BUILDING"})},1e3);try{switch(await m.syncEntityDocs({kind:e,namespace:o,name:a},T=>{c({type:"buildLog",log:T})})){case"updated":E.current.content?c({type:"sync",state:"BUILD_READY"}):(E.current.reload(),c({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":c({type:"sync",state:"UP_TO_DATE"});break;default:c({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(R){c({type:"sync",state:"ERROR",syncError:R})}finally{clearTimeout(y)}},[e,a,o,m,c,E]),{state:(0,t.useMemo)(()=>he({activeSyncState:i.activeSyncState,contentLoading:i.contentLoading,content:i.content}),[i.activeSyncState,i.content,i.contentLoading]),contentReload:A,path:i.path,content:i.content,contentErrorMessage:i.contentError?.toString(),syncErrorMessage:i.syncError?.toString(),buildLog:i.buildLog}}const x=(0,t.createContext)({}),ne=()=>(0,t.useContext)(x),ce=e=>{const{children:o}=e,{"*":a=""}=(0,ue.g)(),{entityRef:s}=(0,b.V)(),{kind:i,namespace:c,name:m}=s,A=Y(i,c,m,a);return t.createElement(x.Provider,{value:A},o instanceof Function?o(A):o)},Le=e=>o=>t.createElement(ce,null,t.createElement(e,{...o})),p=(0,_.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),d=()=>{let e=null;const o=p(),{state:a,contentReload:s,contentErrorMessage:i,syncErrorMessage:c,buildLog:m}=ne();return a==="INITIAL_BUILD"&&(e=t.createElement(Pe.A,{classes:{root:o.root},variant:"outlined",severity:"info",icon:t.createElement(le.A,{size:"24px"}),action:t.createElement(Be,{buildLog:m})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),a==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(Pe.A,{variant:"outlined",severity:"info",icon:t.createElement(le.A,{size:"24px"}),action:t.createElement(Be,{buildLog:m}),classes:{root:o.root}},"A newer version of this documentation is being prepared and will be available shortly.")),a==="CONTENT_STALE_READY"&&(e=t.createElement(Pe.A,{variant:"outlined",severity:"success",action:t.createElement(Ne.A,{color:"inherit",onClick:()=>s()},"Refresh"),classes:{root:o.root}},"A newer version of this documentation is now available, please refresh to view.")),a==="CONTENT_STALE_ERROR"&&(e=t.createElement(Pe.A,{variant:"outlined",severity:"error",action:t.createElement(Be,{buildLog:m}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c)),a==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,c&&t.createElement(Pe.A,{variant:"outlined",severity:"error",action:t.createElement(Be,{buildLog:m}),classes:{root:o.root,message:o.message}},"Building a newer version of this documentation failed."," ",c),t.createElement(Je,{errorMessage:i}))),e};var h=r(5893),g=r(54917),P=r(54934),ye=r(96124),oe=r.n(ye);const qe=/main\.[A-Fa-f0-9]{8}\.min\.css$/,et=/^https:\/\/fonts\.googleapis\.com/,Me=/^https:\/\/fonts\.gstatic\.com/,vt=e=>e.nodeName==="LINK",Et=e=>{const o=e?.getAttribute("href")||"",a=o.match(qe),s=o.match(et),i=o.match(Me);return a||s||i},kt=e=>(vt(e)&&!Et(e)&&e.remove(),e),tt=e=>e.nodeName==="IFRAME",xe=(e,o)=>{const a=e.getAttribute("src")||"";try{const{host:s}=new URL(a);return o.includes(s)}catch{return!1}},Kt=e=>o=>(tt(o)&&!xe(o,e)&&o.remove(),o),jt=()=>{const e=(0,De.gf)(Ze.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},Xt=()=>{const e=jt();return(0,t.useCallback)(async o=>{const a=e?.getOptionalStringArray("allowedIframeHosts");oe().addHook("beforeSanitizeElements",kt);const s=["link","meta"];return a&&(s.push("iframe"),oe().addHook("beforeSanitizeElements",Kt(a))),oe().addHook("uponSanitizeElement",(i,c)=>{c.tagName==="meta"&&(i.getAttribute("http-equiv")==="refresh"&&i.getAttribute("content")?.includes("url=")||i.parentNode?.removeChild(i))}),oe().addHook("uponSanitizeAttribute",(i,c)=>{i.tagName!=="meta"&&(c.attrName==="http-equiv"||c.attrName==="content")&&i.removeAttribute(c.attrName)}),oe().sanitize(o.outerHTML,{ADD_TAGS:s,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0})},[e])};var Zt=r(65901),K=r(268),ae=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,K.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,K.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,K.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,K.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,K.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,K.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.background.paper};
  --md-code-hl-color: ${(0,K.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,K.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.error.dark,.5):(0,K.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.success.dark,.5):(0,K.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,K.X4)(e.palette.warning.dark,.5):(0,K.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,nt=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const yt="224px";var Qt=({theme:e,sidebar:o})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(12.1rem);
  overflow-y: hidden;
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 12.1rem !important;
    z-index: 200;
    left: ${o.isPinned?`calc(-12.1rem + ${yt})`:"calc(-12.1rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -12.1rem !important;
    width: 12.1rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const Jt=["h1","h2","h3","h4","h5","h6"],Nt=/(em)|(rem)/gi,Pt=/var\(|\)/gi;var Re=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${Jt.reduce((o,a)=>{const s=e.typography.htmlFontSize??16,i=e.typography[a],{lineHeight:c,fontFamily:m,fontWeight:A,fontSize:E}=i,S=y=>{if(typeof y=="number")return S(`${y/s*.6}rem`);if(typeof y=="string"){if(y.match(Pt)){const R=window.getComputedStyle(document.body).getPropertyValue(y.replaceAll(Pt,""));if(R!=="")return S(R)}else if(y.match(Nt))return`calc(${y.replace(Nt,"")} * var(--md-typeset-font-size))`}return y};return o.concat(`
    .md-typeset ${a} {
      color: var(--md-default-fg-color);
      line-height: ${c};
      font-family: ${m};
      font-weight: ${A};
      font-size: ${S(E)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,At=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,Tt=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const bt=[ae,nt,Qt,Re,At,Tt],qt=()=>(0,Zt.Ut)(),en=()=>{const e=qt(),o=(0,g.A)();return(0,t.useMemo)(()=>{const a={theme:o,sidebar:e};return bt.reduce((s,i)=>s+i(a),"")},[o,e])},tn=()=>{const e=en();return(0,t.useCallback)(o=>(o.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),o),[e])},Ut=(e,o,a)=>{const s=e==="src"&&o.endsWith(".svg"),i=!o.match(/^([a-z]*:)?\/\//i),c=o.startsWith(a);return s&&(i||c)},nn=({techdocsStorageApi:e,entityId:o,path:a})=>async s=>{const i=await e.getApiOrigin(),c=async(m,A)=>{for(const E of m)if(E.hasAttribute(A)){const S=E.getAttribute(A);if(!S)return;const y=await e.getBaseUrl(S,o,a);if(Ut(A,S,i))try{const T=await(await fetch(y,{credentials:"include"})).text();E.setAttribute(A,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(T)))}`)}catch{E.setAttribute("alt",`Error: ${S}`)}else E.setAttribute(A,y)}};return await Promise.all([c(s.querySelectorAll("img"),"src"),c(s.querySelectorAll("script"),"src"),c(s.querySelectorAll("source"),"src"),c(s.querySelectorAll("link"),"href"),c(s.querySelectorAll("a[download]"),"href")]),s};var Bt=r(78264),W=r(90292),Ht=r(52536),V=r.n(Ht);let St;St=Promise.resolve().then(r.t.bind(r,25873,19));function O(e,o){St.then(a=>{"createRoot"in a?a.createRoot(o).render(e):a.render(e,o)})}const ot=e=>o=>{const a=o.querySelector('[title="Edit this page"]');if(!a||!a.href)return o;const s=new URL(a.href),i=e.byUrl(s);if(i?.type!=="github"&&i?.type!=="gitlab")return o;const c=o.querySelector("article>h1")?.childNodes[0].textContent||"",m=encodeURIComponent(`Documentation Feedback: ${c}`),A=encodeURIComponent(`Page source:
${a.href}

Feedback:`),E=i?.type==="github"?(0,Bt.F)(s.href,"blob"):s.href,S=V()(E),y=`/${S.organization}/${S.name}`,R=a.cloneNode();switch(i?.type){case"gitlab":R.href=`${s.origin}${y}/issues/new?issue[title]=${m}&issue[description]=${A}`;break;case"github":R.href=`${s.origin}${y}/issues/new?title=${m}&body=${A}`;break;default:return o}return O(t.createElement(W.A),R),R.style.paddingLeft="5px",R.title="Leave feedback for this page",R.id="git-feedback-link",a?.insertAdjacentElement("beforebegin",R),o};var wt=r(27326);const zt=()=>e=>{const o=e.querySelector('.md-header label[for="__drawer"]'),a=e.querySelector("article");if(!o||!a)return e;const s=o.cloneNode();return O(t.createElement(wt.A),s),s.id="toggle-sidebar",s.title="Toggle Sidebar",s.classList.add("md-content__button"),s.style.setProperty("padding","0 0 0 5px"),s.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),a?.prepend(s),e},Lt=()=>e=>(((a,s)=>{Array.from(a).filter(i=>i.hasAttribute(s)).forEach(i=>{const c=i.getAttribute(s);if(c){c.match(/^https?:\/\//i)&&i.setAttribute("target","_blank");try{const m=xt(window.location.href);i.setAttribute(s,new URL(c,m).toString())}catch{i.replaceWith(i.textContent||c)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function xt(e){const o=new URL(e);return!o.pathname.endsWith("/")&&!o.pathname.endsWith(".html")&&(o.pathname+="/"),o.toString()}const _t=({baseUrl:e,onClick:o})=>a=>(Array.from(a.getElementsByTagName("a")).forEach(s=>{s.addEventListener("click",i=>{const m=s.getAttribute("href");m&&m.startsWith(e)&&!s.hasAttribute("download")&&(i.preventDefault(),o(i,m))})}),a);var Fe=r(7031),Rt=r(50868),He=r(10437),Ct=r(71677),Dt=r(36338);const $e=(0,Fe.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(Ct.Ay),ct=()=>t.createElement(He.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),dt=({text:e})=>{const[o,a]=(0,t.useState)(!1),[,s]=(0,Dt.A)(),i=(0,t.useCallback)(()=>{s(e),a(!0)},[e,s]),c=(0,t.useCallback)(()=>{a(!1)},[a]);return t.createElement($e,{title:"Copied to clipboard",placement:"left",open:o,onClose:c,leaveDelay:1e3},t.createElement(je.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:i},t.createElement(ct,null)))},Ft=e=>o=>{const a=o.querySelectorAll("pre > code");for(const s of a){const i=s.textContent||"",c=document.createElement("div");s?.parentElement?.prepend(c),O(t.createElement(Rt.A,{theme:e},t.createElement(dt,{text:i})),c)}return o},$t=()=>e=>(e.querySelector(".md-header")?.remove(),e),on=()=>e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),mt=({onLoading:e,onLoaded:o})=>a=>(e(),a.addEventListener($,function s(){o(),a.removeEventListener($,s)}),a),at=()=>e=>(setTimeout(()=>{const o=e?.querySelectorAll("li.md-nav__item--active");o.length!==0&&(o.forEach(s=>{const i=s?.querySelector("input");i?.checked||i?.click()}),o[o.length-1].scrollIntoView())},200),e),ze=async(e,o)=>{let a;if(typeof e=="string")a=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)a=e;else throw new Error("dom is not a recognized type");for(const s of o)a=await s(a);return a};var We=r(38097);const Wt=(0,_.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),Vt=({message:e,handleButtonClick:o,autoHideDuration:a})=>{const s=Wt(),[i,c]=(0,t.useState)(!0),m=()=>c(!1);return t.createElement(We.A,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:a,color:"primary",onClose:m,message:e,action:t.createElement(Ne.A,{classes:{root:s.button},size:"small",onClick:()=>{m(),o()}},"Redirect now")})},Gt=(e,o)=>{const s=i=>{const c=xt(window.location.href),m=new URL(i,c);if(m.hostname!==window.location.hostname){const E=window.location.pathname,S=E.indexOf(o),y=E.slice(0,S+o.length);return new URL(y,c).href}return m.href};return i=>{for(const c of Array.from(i.querySelectorAll("meta")))if(c.getAttribute("http-equiv")==="refresh"){const m=c.getAttribute("content")?.split("url=");if(!m||m.length<2)return i;const A=m[1],E=s(A);if(window.location.href===E)return i;const S=document.createElement("div");return O(t.createElement(Vt,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>e(E),autoHideDuration:3e3}),S),document.body.appendChild(S),setTimeout(()=>{e(E)},3e3),i}return i}};function Mt(e,o){const a=new URL(o),s=`${a.origin}${a.pathname.replace(/\/$/,"")}`,i=e.replace(s,"").replace(/^\/+/,""),c=new URL(`http://localhost/${i}`);return`${c.pathname}${c.search}${c.hash}`}function Yt(){const e=(0,t.useRef)((0,ue.Zp)()),a=(0,De.gf)(Ze.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(i=>{let c=i;if(a)try{c=Mt(i,a)}catch{}e.current(c)},[a])}const ut="screen and (max-width: 76.1875em)",ft=e=>{const o=Yt(),a=(0,g.A)(),s=(0,h.A)(ut),i=Xt(),c=tn(),m=(0,Qe.s)(),A=(0,De.gf)(te.s),E=(0,De.gf)(P.Y),{state:S,path:y,content:R}=ne(),[T,Te]=(0,t.useState)(null),be=M(T),X=(0,t.useCallback)(()=>{if(!T)return;T.querySelectorAll(".md-sidebar").forEach(U=>{if(s)U.style.top="0px";else{const Ce=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let Oe=T.getBoundingClientRect().top??0;const n=T.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;Oe<Ce&&(Oe=Ce);const l=Math.max(Oe,0)+n;U.style.top=`${l}px`;const D=T.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;U.style.height=`${D-l}px`}U.style.setProperty("opacity","1")})},[T,s]);(0,t.useEffect)(()=>(window.addEventListener("resize",X),window.addEventListener("scroll",X,!0),()=>{window.removeEventListener("resize",X),window.removeEventListener("scroll",X,!0)}),[T,X]);const Se=(0,t.useCallback)(()=>{if(!T)return;const C=T.querySelector(".md-footer");C&&(C.style.width=`${T.getBoundingClientRect().width}px`)},[T]);(0,t.useEffect)(()=>(window.addEventListener("resize",Se),()=>{window.removeEventListener("resize",Se)}),[T,Se]),(0,t.useEffect)(()=>{be||(Se(),X())},[S,be,Se,X]);const Z=(0,t.useCallback)((C,U)=>ze(C,[i,nn({techdocsStorageApi:A,entityId:e,path:U}),Lt(),zt(),$t(),on(),ot(E),c]),[e,E,A,i,c]),H=(0,t.useCallback)(async C=>ze(C,[Gt(o,e.name),at(),Ft(a),_t({baseUrl:window.location.origin,onClick:(U,j)=>{const Ce=U.ctrlKey||U.metaKey,Oe=new URL(j),f=U.target?.innerText||j,n=j.replace(window.location.origin,"");m.captureEvent("click",f,{attributes:{to:n}}),Oe.hash?Ce?window.open(j,"_blank"):(o(j),C?.querySelector(`[id="${Oe.hash.slice(1)}"]`)?.scrollIntoView()):Ce?window.open(j,"_blank"):o(j)}}),mt({onLoading:()=>{},onLoaded:()=>{C.querySelector(".md-nav__title")?.removeAttribute("for")}}),mt({onLoading:()=>{Array.from(C.querySelectorAll(".md-sidebar")).forEach(j=>{j.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[a,o,m,e.name]);return(0,t.useEffect)(()=>{if(!R)return()=>{};let C=!0;return Z(R,y).then(async U=>{if(!U?.innerHTML||!C)return;window.scroll({top:0});const j=await H(U);Te(j)}),()=>{C=!1}},[R,y,Z,H]),T};var Ae=r(41883),Ve=r(11618),rt=r(15246);const Ot=()=>{const e=(0,Ve.YR)(),{shadowRoot:o}=(0,b.V)(),a=o?.querySelector('[data-md-component="content"]'),s=o?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let i=s?.querySelector('[data-techdocs-addons-location="primary sidebar"]');i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","primary sidebar"),s?.prepend(i));const c=o?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let m=c?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return m||(m=document.createElement("div"),m.setAttribute("data-techdocs-addons-location","secondary sidebar"),c?.prepend(m)),t.createElement(t.Fragment,null,t.createElement(Ae.A,{container:i},e.renderComponentsByLocation(rt.e.PrimarySidebar)),t.createElement(Ae.A,{container:a},e.renderComponentsByLocation(rt.e.Content)),t.createElement(Ae.A,{container:m},e.renderComponentsByLocation(rt.e.SecondarySidebar)))},an=(0,_.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),st=Le(e=>{const{withSearch:o=!0,onReady:a}=e,s=an(),{entityMetadata:{value:i,loading:c},entityRef:m,setShadowRoot:A}=(0,b.V)(),E=ft(m),S=window.location.pathname,y=window.location.hash,R=M(E),[T]=(0,Q.$r)([`[id="${y.slice(1)}"]`]);(0,t.useEffect)(()=>{R||(y?T&&T.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[S,y,T,R]);const Te=(0,t.useCallback)(be=>{A(be),a instanceof Function&&a()},[A,a]);return c===!1&&!i?t.createElement(J.M,{status:"404",statusMessage:"PAGE NOT FOUND"}):E?t.createElement(me.U,null,t.createElement(I.A,{container:!0},t.createElement(I.A,{xs:12,item:!0},t.createElement(d,null)),o&&t.createElement(I.A,{className:s.search,xs:"auto",item:!0},t.createElement(Ye,{entityId:m,entityTitle:i?.metadata?.title})),t.createElement(I.A,{xs:12,item:!0},t.createElement(w,{element:E,onAppend:Te},t.createElement(Ot,null))))):t.createElement(me.U,null,t.createElement(I.A,{container:!0},t.createElement(I.A,{xs:12,item:!0},t.createElement(d,null))))}),rn=null},84893:(_e,z,r)=>{"use strict";r.d(z,{Z:()=>Q});var t=r(14041),I=r(58837),_=r(29365),b=r(75173),L=r(71677),se=r(37757),F=r(77125),G=r(9684),$=r(66839),ge=r(11618),M=r(15246);const w=(0,I.A)(J=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:J.spacing(3,3,0),"@media print":{display:"none"}}})),Q=J=>{const me=w(),[q,le]=(0,t.useState)(null),N=(0,t.useCallback)(Ee=>{le(Ee.currentTarget)},[]),k=(0,t.useCallback)(()=>{le(null)},[]),{entityMetadata:{value:ve,loading:B}}=(0,$.V)(),ee=(0,ge.YR)(),v=ee.renderComponentsByLocation(M.e.Subheader),ue=ee.renderComponentsByLocation(M.e.Settings);return!v&&!ue||B===!1&&!ve?null:t.createElement(b.A,{classes:me,...J.toolbarProps},t.createElement(F.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},v,ue?t.createElement(t.Fragment,null,t.createElement(L.Ay,{title:"Settings"},t.createElement(_.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:N},t.createElement(G.A,null))),t.createElement(se.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:q,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!q,onClose:k,keepMounted:!0},t.createElement("div",null,ue))):null))}},41472:(_e,z,r)=>{"use strict";r.r(z),r.d(z,{TechDocsSearchResultListItem:()=>$});var t=r(14041),I=r(46423),_=r(5951),b=r(58837),L=r(72501),se=r(75202),F=r(51470);const G=(0,b.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),$=ge=>{const{result:M,highlight:w,lineClamp:Q=5,asListItem:J=!0,asLink:me=!0,title:q,icon:le}=ge,N=G(),k=({children:ee})=>me?t.createElement(se.N_,{noTrack:!0,to:M.location},ee):t.createElement(t.Fragment,null,ee),ve=()=>{const ee=w?.fields.title?t.createElement(F.e,{text:w.fields.title,preTag:w.preTag,postTag:w.postTag}):M.title,v=w?.fields.entityTitle?t.createElement(F.e,{text:w.fields.entityTitle,preTag:w.preTag,postTag:w.postTag}):M.entityTitle,ue=w?.fields.name?t.createElement(F.e,{text:w.fields.name,preTag:w.preTag,postTag:w.postTag}):M.name;return M?t.createElement(_.A,{className:N.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(k,null,q||t.createElement(t.Fragment,null,ee," | ",v??ue," docs")),secondary:t.createElement(L.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:Q,overflow:"hidden"},color:"textSecondary",variant:"body2"},w?.fields.text?t.createElement(F.e,{text:w.fields.text,preTag:w.preTag,postTag:w.postTag}):M.text)}):null},B=({children:ee})=>J?t.createElement(t.Fragment,null,le&&t.createElement(I.A,null,typeof le=="function"?le(M):le),t.createElement("div",{className:N.flexContainer},ee)):t.createElement(t.Fragment,null,ee);return t.createElement(B,null,t.createElement(ve,null))}},96124:function(_e){/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */(function(z,r){_e.exports=r()})(this,function(){"use strict";const{entries:z,setPrototypeOf:r,isFrozen:t,getPrototypeOf:I,getOwnPropertyDescriptor:_}=Object;let{freeze:b,seal:L,create:se}=Object,{apply:F,construct:G}=typeof Reflect<"u"&&Reflect;b||(b=function(d){return d}),L||(L=function(d){return d}),F||(F=function(d,h,g){return d.apply(h,g)}),G||(G=function(d,h){return new d(...h)});const $=B(Array.prototype.forEach),ge=B(Array.prototype.pop),M=B(Array.prototype.push),w=B(String.prototype.toLowerCase),Q=B(String.prototype.toString),J=B(String.prototype.match),me=B(String.prototype.replace),q=B(String.prototype.indexOf),le=B(String.prototype.trim),N=B(Object.prototype.hasOwnProperty),k=B(RegExp.prototype.test),ve=ee(TypeError);function B(p){return function(d){for(var h=arguments.length,g=new Array(h>1?h-1:0),P=1;P<h;P++)g[P-1]=arguments[P];return F(p,d,g)}}function ee(p){return function(){for(var d=arguments.length,h=new Array(d),g=0;g<d;g++)h[g]=arguments[g];return G(p,h)}}function v(p,d){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w;r&&r(p,null);let g=d.length;for(;g--;){let P=d[g];if(typeof P=="string"){const ye=h(P);ye!==P&&(t(d)||(d[g]=ye),P=ye)}p[P]=!0}return p}function ue(p){for(let d=0;d<p.length;d++)N(p,d)||(p[d]=null);return p}function Ee(p){const d=se(null);for(const[h,g]of z(p))N(p,h)&&(Array.isArray(g)?d[h]=ue(g):g&&typeof g=="object"&&g.constructor===Object?d[h]=Ee(g):d[h]=g);return d}function ke(p,d){for(;p!==null;){const g=_(p,d);if(g){if(g.get)return B(g.get);if(typeof g.value=="function")return B(g.value)}p=I(p)}function h(){return null}return h}const Ge=b(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ye=b(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ne=b(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pe=b(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ke=b(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ht=b(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),je=b(["#text"]),it=b(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Xe=b(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lt=b(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ue=b(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Be=L(/<%[\w\W]*|[\w\W]*%>/gm),De=L(/\${[\w\W]*}/gm),Ze=L(/^data-[\-\w.\u00B7-\uFFFF]/),Qe=L(/^aria-[\-\w]+$/),Je=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),gt=L(/^(?:\w+script|data):/i),fe=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),te=L(/^html$/i),he=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var we=Object.freeze({__proto__:null,MUSTACHE_EXPR:pt,ERB_EXPR:Be,TMPLIT_EXPR:De,DATA_ATTR:Ze,ARIA_ATTR:Qe,IS_ALLOWED_URI:Je,IS_SCRIPT_OR_DATA:gt,ATTR_WHITESPACE:fe,DOCTYPE_NAME:te,CUSTOM_ELEMENT:he});const Y={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},x=function(){return typeof window>"u"?null:window},ne=function(d,h){if(typeof d!="object"||typeof d.createPolicy!="function")return null;let g=null;const P="data-tt-policy-suffix";h&&h.hasAttribute(P)&&(g=h.getAttribute(P));const ye="dompurify"+(g?"#"+g:"");try{return d.createPolicy(ye,{createHTML(oe){return oe},createScriptURL(oe){return oe}})}catch{return console.warn("TrustedTypes policy "+ye+" could not be created."),null}};function ce(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x();const d=f=>ce(f);if(d.version="3.1.7",d.removed=[],!p||!p.document||p.document.nodeType!==Y.document)return d.isSupported=!1,d;let{document:h}=p;const g=h,P=g.currentScript,{DocumentFragment:ye,HTMLTemplateElement:oe,Node:qe,Element:et,NodeFilter:Me,NamedNodeMap:vt=p.NamedNodeMap||p.MozNamedAttrMap,HTMLFormElement:Et,DOMParser:kt,trustedTypes:tt}=p,xe=et.prototype,Kt=ke(xe,"cloneNode"),jt=ke(xe,"remove"),Xt=ke(xe,"nextSibling"),Zt=ke(xe,"childNodes"),K=ke(xe,"parentNode");if(typeof oe=="function"){const f=h.createElement("template");f.content&&f.content.ownerDocument&&(h=f.content.ownerDocument)}let ae,nt="";const{implementation:yt,createNodeIterator:Qt,createDocumentFragment:Jt,getElementsByTagName:Nt}=h,{importNode:Pt}=g;let Re={};d.isSupported=typeof z=="function"&&typeof K=="function"&&yt&&yt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:Tt,TMPLIT_EXPR:bt,DATA_ATTR:qt,ARIA_ATTR:en,IS_SCRIPT_OR_DATA:tn,ATTR_WHITESPACE:Ut,CUSTOM_ELEMENT:nn}=we;let{IS_ALLOWED_URI:Bt}=we,W=null;const Ht=v({},[...Ge,...Ye,...Ne,...Ke,...je]);let V=null;const St=v({},[...it,...Xe,...lt,...Ue]);let O=Object.seal(se(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ot=null,wt=null,zt=!0,Lt=!0,xt=!1,_t=!0,Fe=!1,Rt=!0,He=!1,Ct=!1,Dt=!1,$e=!1,ct=!1,dt=!1,Ft=!0,$t=!1;const on="user-content-";let mt=!0,at=!1,ze={},We=null;const Wt=v({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Vt=null;const Gt=v({},["audio","video","img","source","image","track"]);let Mt=null;const Yt=v({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ut="http://www.w3.org/1998/Math/MathML",ft="http://www.w3.org/2000/svg",Ae="http://www.w3.org/1999/xhtml";let Ve=Ae,rt=!1,Ot=null;const an=v({},[ut,ft,Ae],Q);let st=null;const rn=["application/xhtml+xml","text/html"],e="text/html";let o=null,a=null;const s=h.createElement("form"),i=function(n){return n instanceof RegExp||n instanceof Function},c=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(a&&a===n)){if((!n||typeof n!="object")&&(n={}),n=Ee(n),st=rn.indexOf(n.PARSER_MEDIA_TYPE)===-1?e:n.PARSER_MEDIA_TYPE,o=st==="application/xhtml+xml"?Q:w,W=N(n,"ALLOWED_TAGS")?v({},n.ALLOWED_TAGS,o):Ht,V=N(n,"ALLOWED_ATTR")?v({},n.ALLOWED_ATTR,o):St,Ot=N(n,"ALLOWED_NAMESPACES")?v({},n.ALLOWED_NAMESPACES,Q):an,Mt=N(n,"ADD_URI_SAFE_ATTR")?v(Ee(Yt),n.ADD_URI_SAFE_ATTR,o):Yt,Vt=N(n,"ADD_DATA_URI_TAGS")?v(Ee(Gt),n.ADD_DATA_URI_TAGS,o):Gt,We=N(n,"FORBID_CONTENTS")?v({},n.FORBID_CONTENTS,o):Wt,ot=N(n,"FORBID_TAGS")?v({},n.FORBID_TAGS,o):{},wt=N(n,"FORBID_ATTR")?v({},n.FORBID_ATTR,o):{},ze=N(n,"USE_PROFILES")?n.USE_PROFILES:!1,zt=n.ALLOW_ARIA_ATTR!==!1,Lt=n.ALLOW_DATA_ATTR!==!1,xt=n.ALLOW_UNKNOWN_PROTOCOLS||!1,_t=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fe=n.SAFE_FOR_TEMPLATES||!1,Rt=n.SAFE_FOR_XML!==!1,He=n.WHOLE_DOCUMENT||!1,$e=n.RETURN_DOM||!1,ct=n.RETURN_DOM_FRAGMENT||!1,dt=n.RETURN_TRUSTED_TYPE||!1,Dt=n.FORCE_BODY||!1,Ft=n.SANITIZE_DOM!==!1,$t=n.SANITIZE_NAMED_PROPS||!1,mt=n.KEEP_CONTENT!==!1,at=n.IN_PLACE||!1,Bt=n.ALLOWED_URI_REGEXP||Je,Ve=n.NAMESPACE||Ae,O=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&i(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&i(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Lt=!1),ct&&($e=!0),ze&&(W=v({},je),V=[],ze.html===!0&&(v(W,Ge),v(V,it)),ze.svg===!0&&(v(W,Ye),v(V,Xe),v(V,Ue)),ze.svgFilters===!0&&(v(W,Ne),v(V,Xe),v(V,Ue)),ze.mathMl===!0&&(v(W,Ke),v(V,lt),v(V,Ue))),n.ADD_TAGS&&(W===Ht&&(W=Ee(W)),v(W,n.ADD_TAGS,o)),n.ADD_ATTR&&(V===St&&(V=Ee(V)),v(V,n.ADD_ATTR,o)),n.ADD_URI_SAFE_ATTR&&v(Mt,n.ADD_URI_SAFE_ATTR,o),n.FORBID_CONTENTS&&(We===Wt&&(We=Ee(We)),v(We,n.FORBID_CONTENTS,o)),mt&&(W["#text"]=!0),He&&v(W,["html","head","body"]),W.table&&(v(W,["tbody"]),delete ot.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw ve('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ve('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ae=n.TRUSTED_TYPES_POLICY,nt=ae.createHTML("")}else ae===void 0&&(ae=ne(tt,P)),ae!==null&&typeof nt=="string"&&(nt=ae.createHTML(""));b&&b(n),a=n}},m=v({},["mi","mo","mn","ms","mtext"]),A=v({},["annotation-xml"]),E=v({},["title","style","font","a","script"]),S=v({},[...Ye,...Ne,...Pe]),y=v({},[...Ke,...ht]),R=function(n){let l=K(n);(!l||!l.tagName)&&(l={namespaceURI:Ve,tagName:"template"});const u=w(n.tagName),D=w(l.tagName);return Ot[n.namespaceURI]?n.namespaceURI===ft?l.namespaceURI===Ae?u==="svg":l.namespaceURI===ut?u==="svg"&&(D==="annotation-xml"||m[D]):!!S[u]:n.namespaceURI===ut?l.namespaceURI===Ae?u==="math":l.namespaceURI===ft?u==="math"&&A[D]:!!y[u]:n.namespaceURI===Ae?l.namespaceURI===ft&&!A[D]||l.namespaceURI===ut&&!m[D]?!1:!y[u]&&(E[u]||!S[u]):!!(st==="application/xhtml+xml"&&Ot[n.namespaceURI]):!1},T=function(n){M(d.removed,{element:n});try{K(n).removeChild(n)}catch{jt(n)}},Te=function(n,l){try{M(d.removed,{attribute:l.getAttributeNode(n),from:l})}catch{M(d.removed,{attribute:null,from:l})}if(l.removeAttribute(n),n==="is"&&!V[n])if($e||ct)try{T(l)}catch{}else try{l.setAttribute(n,"")}catch{}},be=function(n){let l=null,u=null;if(Dt)n="<remove></remove>"+n;else{const re=J(n,/^[\r\n\t ]+/);u=re&&re[0]}st==="application/xhtml+xml"&&Ve===Ae&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const D=ae?ae.createHTML(n):n;if(Ve===Ae)try{l=new kt().parseFromString(D,st)}catch{}if(!l||!l.documentElement){l=yt.createDocument(Ve,"template",null);try{l.documentElement.innerHTML=rt?nt:D}catch{}}const ie=l.body||l.documentElement;return n&&u&&ie.insertBefore(h.createTextNode(u),ie.childNodes[0]||null),Ve===Ae?Nt.call(l,He?"html":"body")[0]:He?l.documentElement:ie},X=function(n){return Qt.call(n.ownerDocument||n,n,Me.SHOW_ELEMENT|Me.SHOW_COMMENT|Me.SHOW_TEXT|Me.SHOW_PROCESSING_INSTRUCTION|Me.SHOW_CDATA_SECTION,null)},Se=function(n){return n instanceof Et&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof vt)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},Z=function(n){return typeof qe=="function"&&n instanceof qe},H=function(n,l,u){Re[n]&&$(Re[n],D=>{D.call(d,l,u,a)})},C=function(n){let l=null;if(H("beforeSanitizeElements",n,null),Se(n))return T(n),!0;const u=o(n.nodeName);if(H("uponSanitizeElement",n,{tagName:u,allowedTags:W}),n.hasChildNodes()&&!Z(n.firstElementChild)&&k(/<[/\w]/g,n.innerHTML)&&k(/<[/\w]/g,n.textContent)||n.nodeType===Y.progressingInstruction||Rt&&n.nodeType===Y.comment&&k(/<[/\w]/g,n.data))return T(n),!0;if(!W[u]||ot[u]){if(!ot[u]&&j(u)&&(O.tagNameCheck instanceof RegExp&&k(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u)))return!1;if(mt&&!We[u]){const D=K(n)||n.parentNode,ie=Zt(n)||n.childNodes;if(ie&&D){const re=ie.length;for(let pe=re-1;pe>=0;--pe){const Ie=Kt(ie[pe],!0);Ie.__removalCount=(n.__removalCount||0)+1,D.insertBefore(Ie,Xt(n))}}}return T(n),!0}return n instanceof et&&!R(n)||(u==="noscript"||u==="noembed"||u==="noframes")&&k(/<\/no(script|embed|frames)/i,n.innerHTML)?(T(n),!0):(Fe&&n.nodeType===Y.text&&(l=n.textContent,$([At,Tt,bt],D=>{l=me(l,D," ")}),n.textContent!==l&&(M(d.removed,{element:n.cloneNode()}),n.textContent=l)),H("afterSanitizeElements",n,null),!1)},U=function(n,l,u){if(Ft&&(l==="id"||l==="name")&&(u in h||u in s))return!1;if(!(Lt&&!wt[l]&&k(qt,l))){if(!(zt&&k(en,l))){if(!V[l]||wt[l]){if(!(j(n)&&(O.tagNameCheck instanceof RegExp&&k(O.tagNameCheck,n)||O.tagNameCheck instanceof Function&&O.tagNameCheck(n))&&(O.attributeNameCheck instanceof RegExp&&k(O.attributeNameCheck,l)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(l))||l==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&k(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u))))return!1}else if(!Mt[l]){if(!k(Bt,me(u,Ut,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&n!=="script"&&q(u,"data:")===0&&Vt[n])){if(!(xt&&!k(tn,me(u,Ut,"")))){if(u)return!1}}}}}}return!0},j=function(n){return n!=="annotation-xml"&&J(n,nn)},Ce=function(n){H("beforeSanitizeAttributes",n,null);const{attributes:l}=n;if(!l)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:V};let D=l.length;for(;D--;){const ie=l[D],{name:re,namespaceURI:pe,value:Ie}=ie,It=o(re);let de=re==="value"?Ie:le(Ie);if(u.attrName=It,u.attrValue=de,u.keepAttr=!0,u.forceKeepAttr=void 0,H("uponSanitizeAttribute",n,u),de=u.attrValue,u.forceKeepAttr||(Te(re,n),!u.keepAttr))continue;if(!_t&&k(/\/>/i,de)){Te(re,n);continue}Fe&&$([At,Tt,bt],ln=>{de=me(de,ln," ")});const sn=o(n.nodeName);if(U(sn,It,de)){if($t&&(It==="id"||It==="name")&&(Te(re,n),de=on+de),Rt&&k(/((--!?|])>)|<\/(style|title)/i,de)){Te(re,n);continue}if(ae&&typeof tt=="object"&&typeof tt.getAttributeType=="function"&&!pe)switch(tt.getAttributeType(sn,It)){case"TrustedHTML":{de=ae.createHTML(de);break}case"TrustedScriptURL":{de=ae.createScriptURL(de);break}}try{pe?n.setAttributeNS(pe,re,de):n.setAttribute(re,de),Se(n)?T(n):ge(d.removed)}catch{}}}H("afterSanitizeAttributes",n,null)},Oe=function f(n){let l=null;const u=X(n);for(H("beforeSanitizeShadowDOM",n,null);l=u.nextNode();)H("uponSanitizeShadowNode",l,null),!C(l)&&(l.content instanceof ye&&f(l.content),Ce(l));H("afterSanitizeShadowDOM",n,null)};return d.sanitize=function(f){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,u=null,D=null,ie=null;if(rt=!f,rt&&(f="<!-->"),typeof f!="string"&&!Z(f))if(typeof f.toString=="function"){if(f=f.toString(),typeof f!="string")throw ve("dirty is not a string, aborting")}else throw ve("toString is not a function");if(!d.isSupported)return f;if(Ct||c(n),d.removed=[],typeof f=="string"&&(at=!1),at){if(f.nodeName){const Ie=o(f.nodeName);if(!W[Ie]||ot[Ie])throw ve("root node is forbidden and cannot be sanitized in-place")}}else if(f instanceof qe)l=be("<!---->"),u=l.ownerDocument.importNode(f,!0),u.nodeType===Y.element&&u.nodeName==="BODY"||u.nodeName==="HTML"?l=u:l.appendChild(u);else{if(!$e&&!Fe&&!He&&f.indexOf("<")===-1)return ae&&dt?ae.createHTML(f):f;if(l=be(f),!l)return $e?null:dt?nt:""}l&&Dt&&T(l.firstChild);const re=X(at?f:l);for(;D=re.nextNode();)C(D)||(D.content instanceof ye&&Oe(D.content),Ce(D));if(at)return f;if($e){if(ct)for(ie=Jt.call(l.ownerDocument);l.firstChild;)ie.appendChild(l.firstChild);else ie=l;return(V.shadowroot||V.shadowrootmode)&&(ie=Pt.call(g,ie,!0)),ie}let pe=He?l.outerHTML:l.innerHTML;return He&&W["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&k(te,l.ownerDocument.doctype.name)&&(pe="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+pe),Fe&&$([At,Tt,bt],Ie=>{pe=me(pe,Ie," ")}),ae&&dt?ae.createHTML(pe):pe},d.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};c(f),Ct=!0},d.clearConfig=function(){a=null,Ct=!1},d.isValidAttribute=function(f,n,l){a||c({});const u=o(f),D=o(n);return U(u,D,l)},d.addHook=function(f,n){typeof n=="function"&&(Re[f]=Re[f]||[],M(Re[f],n))},d.removeHook=function(f){if(Re[f])return ge(Re[f])},d.removeHooks=function(f){Re[f]&&(Re[f]=[])},d.removeAllHooks=function(){Re={}},d}var Le=ce();return Le})},13660:(_e,z,r)=>{"use strict";var t,I=r(4293),_=r(78920);t={value:!0},z.A=void 0;var b=_(r(14041)),L=I(r(74044)),se=(0,L.default)(b.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");z.A=se},90292:(_e,z,r)=>{"use strict";var t,I=r(4293),_=r(78920);t={value:!0},z.A=void 0;var b=_(r(14041)),L=I(r(74044)),se=(0,L.default)(b.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");z.A=se},91042:(_e,z,r)=>{"use strict";r.d(z,{Y:()=>_});var t=r(14041),I=r(16261);function _(b,L){const[se,F]=(0,t.useState)({status:"not-executed",error:void 0,result:L}),G=(0,t.useRef)(),$=(0,t.useRef)(),ge=(0,I.J)({execute(...M){$.current=M;const w=b(...M);return G.current=w,F(Q=>({...Q,status:"loading"})),w.then(Q=>{w===G.current&&F(J=>({...J,status:"success",error:void 0,result:Q}))},Q=>{w===G.current&&F(J=>({...J,status:"error",error:Q}))}),w},reset(){F({status:"not-executed",error:void 0,result:L}),G.current=void 0,$.current=void 0}});return[se,(0,t.useMemo)(()=>({reset(){ge.current.reset()},execute:(...M)=>ge.current.execute(...M)}),[]),{promise:G.current,lastArgs:$.current}]}}}]);})();

//# sourceMappingURL=3402.05d52704.chunk.js.map