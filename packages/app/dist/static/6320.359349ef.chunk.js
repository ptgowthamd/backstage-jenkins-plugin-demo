"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6320],{76320:(ot,u,t)=>{t.r(u),t.d(u,{BaseCatalogPage:()=>S,CatalogPage:()=>st,DefaultCatalogPage:()=>p});var e=t(14041),A=t(18690),B=t(92303),I=t(16454),F=t(17138),N=t(90150),x=t(56420),O=t(18139),T=t(54195),z=t(72814),y=t(18453),v=t(77509),L=t(99409),G=t(75925),C=t(58837),E=t(49724),K=t(24999),f=t(80084),g=t(10265);const R=(0,C.A)({input:{}},{name:"CatalogReactEntityNamespacePicker"}),D=a=>{const{initiallySelectedNamespaces:l}=a,s=R(),{t:o}=(0,g.i)(f.j);return e.createElement(K.y,{label:o("entityNamespacePicker.title"),name:"namespace",path:"metadata.namespace",Filter:E.z,InputProps:{className:s.input},initialSelectedOptions:l})};var H=t(40941),M=t(77125),U=t(69076),W=t(86901),j=t(16249),J=t(72501),Q=t(44148),Y=t(41260),V=t(6924),it=t(46343),mt=t(40074),ct=t(46123),rt=t(96403),X=t(61783);const Z=(0,C.A)({root:{},input:{},label:{}},{name:"CatalogReactEntityProcessingStatusPickerPicker"}),$=e.createElement(Y.A,{fontSize:"small"}),k=e.createElement(Q.A,{fontSize:"small"}),b=()=>{const a=Z(),{updateFilters:l}=(0,y.nK)(),{t:s}=(0,g.i)(f.j),[o,i]=(0,e.useState)([]);function r(n){l({orphan:n?new E.Kf(n):void 0})}function m(n){l({error:n?new E.mT(n):void 0})}const d=["Is Orphan","Has Error"];return e.createElement(M.A,{className:a.root,pb:1,pt:1},e.createElement(J.A,{className:a.label,variant:"button",component:"label"},s("entityProcessingStatusPicker.title"),e.createElement(X.Ay,{PopperComponent:n=>e.createElement("div",{...n},n.children),multiple:!0,disableCloseOnSelect:!0,options:d,value:o,onChange:(n,c)=>{i(c),r(c.includes("Is Orphan")),m(c.includes("Has Error"))},renderOption:(n,{selected:c})=>e.createElement(W.A,{control:e.createElement(U.A,{icon:$,checkedIcon:k,checked:c}),onClick:P=>P.preventDefault(),label:n}),size:"small",popupIcon:e.createElement(V.A,{"data-testid":"processing-status-picker-expand"}),renderInput:n=>e.createElement(j.A,{...n,className:a.input,variant:"outlined"})})))};var w=t(56829),q=t(15897),_=t(30117);const tt=a=>{const{initialKind:l,initiallySelectedFilter:s,ownerPickerMode:o,initiallySelectedNamespaces:i}=a;return e.createElement(e.Fragment,null,e.createElement(L.m,{initialFilter:l}),e.createElement(q.Q,null),e.createElement(_.y,{initialFilter:s}),e.createElement(H.t,{mode:o}),e.createElement(G.W,null),e.createElement(w.m,null),e.createElement(b,null),e.createElement(D,{initiallySelectedNamespaces:i}))};var et=t(88549),h=t(58474),nt=t(58045),at=t(71913),lt=t(90712);function S(a){const{filters:l,content:s=e.createElement(h.G,null),pagination:o}=a,i=(0,O.gf)(T.U).getOptionalString("organization.name")??"Backstage",r=(0,z.S)(et.qP),{t:m}=(0,g.i)(nt.W),{allowed:d}=(0,lt.J)({permission:at.C4});return e.createElement(B.d,{title:m("indexPage.title",{orgName:i}),themeId:"home"},e.createElement(I.U,null,e.createElement(F.d,{title:""},d&&e.createElement(N.l,{title:m("indexPage.createButtonTitle"),to:r&&r()}),e.createElement(x.Y,null,m("indexPage.supportButtonContent"))),e.createElement(y.B9,{pagination:o},e.createElement(v.GI,null,e.createElement(v.GI.Filters,null,l),e.createElement(v.GI.Content,null,s)))))}function p(a){const{columns:l,actions:s,initiallySelectedFilter:o="owned",initialKind:i="component",tableOptions:r={},emptyContent:m,pagination:d,ownerPickerMode:n,filters:c,initiallySelectedNamespaces:P}=a;return e.createElement(S,{filters:c??e.createElement(tt,{initialKind:i,initiallySelectedFilter:o,ownerPickerMode:n,initiallySelectedNamespaces:P}),content:e.createElement(h.G,{columns:l,actions:s,tableOptions:r,emptyContent:m}),pagination:d})}function st(a){return(0,A.P1)()||e.createElement(p,{...a})}}}]);})();

//# sourceMappingURL=6320.359349ef.chunk.js.map