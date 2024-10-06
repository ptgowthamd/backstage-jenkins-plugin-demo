"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3684],{93684:(ot,T,t)=>{t.r(T),t.d(T,{CatalogGraphCard:()=>z});var y=t(78560),D=t(21332),H=t(72814),U=t(52262),$=t(16400),j=t(20987),M=t(53318),V=t(58837),Y=t(45810),L=t.n(Y),n=t(14041),Z=t(18690),b=t(15496),X=t(60332),J=t(54361),k=t(60241);const w=(0,V.A)({card:({height:G})=>({display:"flex",flexDirection:"column",maxHeight:G,minHeight:G}),graph:{flex:1,minHeight:0}},{name:"PluginCatalogGraphCatalogGraphCard"}),z=G=>{const{variant:q="gridItem",relationPairs:W=J.b,maxDepth:B=1,unidirectional:Q=!0,mergeRelations:F=!0,direction:K=k.O.LEFT_RIGHT,kinds:_,relations:tt,entityFilter:et,height:st,className:nt,rootEntityNames:at,onNodeClick:e,title:o="Relations",zoom:i="enable-on-click"}=G,{entity:p}=(0,$.tN)(),r=(0,y.sM)(p),f=(0,H.S)(j.s),N=(0,H.S)(b.c),S=(0,Z.Zp)(),v=w({height:st}),A=(0,U.s)(),h=(0,n.useCallback)((l,E)=>{const c=(0,y.KU)(l.id),R=f({kind:c.kind.toLocaleLowerCase("en-US"),namespace:c.namespace.toLocaleLowerCase("en-US"),name:c.name});A.captureEvent("click",l.entity.metadata.title??(0,M.S)(c),{attributes:{to:R}}),S(R)},[f,S,A]),a=L().stringify({rootEntityRefs:[(0,y.U2)(p)],maxDepth:B,unidirectional:Q,mergeRelations:F,selectedKinds:_,selectedRelations:tt,direction:K},{arrayFormat:"brackets",addQueryPrefix:!0}),m=`${N()}${a}`;return n.createElement(D.n,{title:o,cardClassName:v.card,variant:q,noPadding:!0,deepLink:{title:"View graph",link:m}},n.createElement(X.L,{...G,rootEntityNames:at||r,onNodeClick:e||h,className:nt||v.graph,maxDepth:B,unidirectional:Q,mergeRelations:F,direction:K,relationPairs:W,entityFilter:et,zoom:i}))}},60332:(ot,T,t)=>{t.d(T,{L:()=>at});var y=t(78560),D=t(80609),H=t(47090),U=t(18139),$=t(24453),j=t(78467),M=t(58837),V=t(54917),Y=t(53373),L=t.n(Y),n=t(14041),Z=t(22249);const b=(0,Z.A)(e=>({text:{fill:e.palette.textContrast},secondary:{fill:e.palette.textSubtle}}),{name:"PluginCatalogGraphCustomLabel"});function X({edge:{relations:e}}){const o=b();return n.createElement("text",{className:o.text,textAnchor:"middle"},e.map((i,p)=>n.createElement("tspan",{key:i,className:L()(p%2!==0&&o.secondary)},p>0&&n.createElement("tspan",null," / "),i)))}var J=t(46509),k=t(10437);function w({icon:e,...o}){const i=e??k.A;return n.createElement(i,{...o})}var z=t(55488);const G=(0,M.A)(e=>({node:{fill:e.palette.grey[300],stroke:e.palette.grey[300],"&.primary":{fill:e.palette.primary.light,stroke:e.palette.primary.light},"&.secondary":{fill:e.palette.secondary.light,stroke:e.palette.secondary.light}},text:{fill:e.palette.getContrastText(e.palette.grey[300]),"&.primary":{fill:e.palette.primary.contrastText},"&.secondary":{fill:e.palette.secondary.contrastText},"&.focused":{fontWeight:"bold"}},clickable:{cursor:"pointer"}}),{name:"PluginCatalogGraphCustomNode"});function q({node:{id:e,entity:o,color:i="default",focused:p,onClick:r}}){const f=G(),[N,S]=(0,n.useState)(0),[v,A]=(0,n.useState)(0),h=(0,n.useRef)(null),a=(0,J.f)(o,{defaultNamespace:z.oQ});(0,n.useLayoutEffect)(()=>{if(h.current){let{height:d,width:u}=h.current.getBBox();d=Math.round(d),u=Math.round(u),(d!==v||u!==N)&&(S(u),A(d))}},[N,v]);const m=!!a.Icon,l=10,E=v,c=m?E+l:0,R=c+N+l*2,x=v+l*2,I=a.primaryTitle??e;return n.createElement("g",{onClick:r,className:L()(r&&f.clickable)},n.createElement("rect",{className:L()(f.node,i==="primary"&&"primary",i==="secondary"&&"secondary"),width:R,height:x,rx:10}),m&&n.createElement(w,{icon:a.Icon,y:l,x:l,width:E,height:E,className:L()(f.text,p&&"focused",i==="primary"&&"primary",i==="secondary"&&"secondary")}),n.createElement("text",{ref:h,className:L()(f.text,p&&"focused",i==="primary"&&"primary",i==="secondary"&&"secondary"),y:x/2,x:c+(N+l*2)/2,textAnchor:"middle",alignmentBaseline:"middle"},I),n.createElement("title",null,a.entityRef))}var W=t(54361),B=t(60241),Q=t(22771),F=t(30043),K=t(87290);function _(){const e=(0,U.gf)(F.v),o=(0,n.useRef)({requestedEntities:new Set,outstandingEntities:new Map,cachedEntities:new Map}),[i,p]=(0,n.useState)({}),r=(0,n.useCallback)(()=>{const{cachedEntities:h,requestedEntities:a}=o.current,m={};a.forEach(l=>{const E=h.get(l);E&&(m[l]=E)}),p(m)},[o,p]),[f,N]=(0,K.A)(async()=>{const{requestedEntities:h,cachedEntities:a}=o.current,m=Array.from(h).filter(E=>!a.has(E));if(m.length===0){r();return}const{items:l}=await e.getEntitiesByRefs({entityRefs:m});l.forEach(E=>{if(E){const c=(0,y.U2)(E);a.set(c,E)}}),r()},[o,r]),{loading:S,error:v}=f,A=(0,n.useCallback)(h=>{const a=new Set(h),{requestedEntities:m}=o.current;(a.size!==m.size||Array.from(a).some(l=>!m.has(l)))&&(o.current.requestedEntities=a,N(),r())},[o,N,r]);return{entities:i,loading:S,error:v,requestEntities:A}}var tt=t(45250);function et({rootEntityRefs:e,filter:{maxDepth:o=Number.POSITIVE_INFINITY,relations:i,kinds:p,entityFilter:r}={}}){const{entities:f,loading:N,error:S,requestEntities:v}=_();return(0,n.useEffect)(()=>{const h=new Set([...e]),a=new Set;let m=[...e],l=0;for(;m.length>0&&(!isFinite(o)||l<o);){const E=m;for(m=[];E.length>0;){const c=E.shift(),R=f[c];if(a.add(c),R&&R.relations){if(r&&!r(R))continue;for(const x of R.relations)(!i||i.includes(x.type))&&(!p||p.some(I=>x.targetRef.startsWith(`${I.toLocaleLowerCase("en-US")}:`)))&&(a.has(x.targetRef)||(m.push(x.targetRef),h.add(x.targetRef)))}}++l}v([...h])},[f,e,o,i,p,r,v]),{entities:(0,n.useMemo)(()=>r?(0,tt.pickBy)(f,(h,a)=>r(h)):f,[f,r]),loading:N,error:S}}function st({rootEntityRefs:e,maxDepth:o=Number.POSITIVE_INFINITY,unidirectional:i=!0,mergeRelations:p=!0,kinds:r,relations:f,entityFilter:N,onNodeClick:S,relationPairs:v=W.b}){const[A,h]=(0,n.useState)({}),{entities:a,loading:m,error:l}=et({rootEntityRefs:e,filter:{maxDepth:o,kinds:r,relations:f,entityFilter:N}});return(0,Q.A)(()=>{if(!a||Object.keys(a).length===0){h({});return}const E=Object.entries(a).map(([d,u])=>{const s=e.includes(d),g={id:d,entity:u,focused:s,color:s?"secondary":"primary",kind:u.kind,name:u.metadata.name,namespace:u.metadata.namespace||z.oQ,title:u.metadata.title,spec:u.spec};return S&&(g.onClick=C=>S(g,C)),g}),c=[],R=new Set,x=[...e];for(;x.length>0;){const d=x.pop(),u=a[d];R.add(d),u&&u?.relations?.forEach(s=>{if(a[s.targetRef]&&!(f&&!f.includes(s.type))&&!(r&&!r.some(g=>s.targetRef.startsWith(`${g.toLocaleLowerCase("en-US")}:`)))){if(!i||!R.has(s.targetRef))if(p){const g=v.find(([P,O])=>P===s.type||O===s.type)??[s.type],[C]=g;c.push({from:C===s.type?d:s.targetRef,to:C===s.type?s.targetRef:d,relations:g,label:"visible"})}else c.push({from:d,to:s.targetRef,relations:[s.type],label:"visible"});if(R.has(s.targetRef)||(x.push(s.targetRef),R.add(s.targetRef)),i){const g=c.findIndex(C=>d===C.from&&s.targetRef===C.to&&!C.relations.includes(s.type));if(g>=0)if(p){const C=v.find(([P,O])=>P===s.type||O===s.type)??[s.type];c[g].relations=[...c[g].relations,...C]}else c[g].relations=[...c[g].relations,s.type]}}})}const I=c.reduce((d,u)=>{const s=d.findIndex(g=>g.from===u.from&&g.to===u.to);return s>=0?(d[s]={...d[s],relations:Array.from(new Set([...d[s].relations,...u.relations]))},d):[...d,u]},[]);h({nodes:E,edges:I})},100,[a,e,r,f,i,p,S,v]),{loading:m,error:l,...A}}const nt=(0,M.A)(e=>({progress:{position:"absolute",left:"50%",top:"50%",marginLeft:"-20px",marginTop:"-20px"},container:{position:"relative",width:"100%",display:"flex",flexDirection:"column"},graph:{width:"100%",flex:1,"& path[marker-end]":{transition:"filter 0.1s ease-in-out"},"& path[marker-end]:hover":{filter:`drop-shadow(2px 2px 4px ${e.palette.primary.dark});`},"& g[data-testid=label]":{transition:"transform 0s"}}}),{name:"PluginCatalogGraphEntityRelationsGraph"}),at=e=>{const{rootEntityNames:o,maxDepth:i=2,unidirectional:p=!0,mergeRelations:r=!0,kinds:f,relations:N,entityFilter:S,direction:v=B.O.LEFT_RIGHT,onNodeClick:A,relationPairs:h=W.b,className:a,zoom:m="enabled",renderNode:l,renderLabel:E,curve:c,showArrowHeads:R}=e,x=(0,V.A)(),I=nt(),d=(0,n.useMemo)(()=>(Array.isArray(o)?o:[o]).map(O=>(0,y.U2)(O)),[o]),u=(0,U.gf)($.m),{loading:s,error:g,nodes:C,edges:P}=st({rootEntityRefs:d,maxDepth:i,unidirectional:p,mergeRelations:r,kinds:f,relations:N,entityFilter:S,onNodeClick:A,relationPairs:h});return(0,n.useEffect)(()=>{g&&u.post(g)},[u,g]),n.createElement("div",{className:L()(I.container,a)},s&&n.createElement(j.A,{className:I.progress}),C&&P&&n.createElement(D.w,{nodes:C,edges:P,renderNode:l||q,renderLabel:E||X,direction:v,className:I.graph,paddingX:x.spacing(4),paddingY:x.spacing(4),labelPosition:H.D.LabelPosition.RIGHT,labelOffset:x.spacing(1),zoom:m,curve:c,showArrowHeads:R}))}},54361:(ot,T,t)=>{t.d(T,{b:()=>D});var y=t(97214);const D=[[y.L8,y.vv],[y.Ey,y.fO],[y.IB,y.ZD],[y.sA,y.jn],[y.Kx,y.Qz],[y.zj,y.u0],[y.nC,y.fT]]}}]);})();

//# sourceMappingURL=3684.74ad274f.chunk.js.map