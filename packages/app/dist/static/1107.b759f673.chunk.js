"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1107],{51107:(P,u,s)=>{s.r(u),s.d(u,{HomePageSearchBar:()=>g});var t=s(14041),c=s(58837),h=s(33986),d=s(45810),v=s.n(d),S=s(18690),i=s(87162),m=s(72814);const f=()=>{const e=(0,m.S)(i.rQ),a=(0,S.Zp)();return(0,t.useCallback)(({query:n})=>{const r=v().stringify({query:n},{addQueryPrefix:!0});a(`${e()}${r}`)},[a,e])},y=(0,c.A)({searchBarRoot:{fontSize:"1.5em"},searchBarOutline:{border:"1px solid #555",borderRadius:"6px"}}),g=e=>{const a=y(e),[n,r]=(0,t.useState)(""),o=(0,t.useRef)(null),l=f(),B=(0,t.useCallback)(()=>{l({query:o.current?.value??""})},[l]);return t.createElement(h.Z,{value:n,onSubmit:B,onChange:r,inputProps:{ref:o},InputProps:{...e.InputProps,classes:{root:a.searchBarRoot,notchedOutline:a.searchBarOutline,...e.InputProps?.classes}},...e})}}}]);})();

//# sourceMappingURL=1107.b759f673.chunk.js.map