"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7555],{27555:(R,m,E)=>{E.r(m),E.d(m,{f:()=>j});var G=E(94403);function L(k,y){for(var i=0;i<y.length;i++){const d=y[i];if(typeof d!="string"&&!Array.isArray(d)){for(const c in d)if(c!=="default"&&!(c in k)){const O=Object.getOwnPropertyDescriptor(d,c);O&&Object.defineProperty(k,c,O.get?O:{enumerable:!0,get:()=>d[c]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}},T={exports:{}},P;function D(){return P||(P=1,function(k,y){(function(i){i((0,G.r)())})(function(i){function d(e,r,f,a){if(f&&f.call){var s=f;f=null}else var s=p(e,f,"rangeFinder");typeof r=="number"&&(r=i.Pos(r,0));var F=p(e,f,"minFoldSize");function w(l){var o=s(e,r);if(!o||o.to.line-o.from.line<F)return null;if(a==="fold")return o;for(var g=e.findMarksAt(o.from),v=0;v<g.length;++v)if(g[v].__isFold){if(!l)return null;o.cleared=!0,g[v].clear()}return o}var u=w(!0);if(p(e,f,"scanUp"))for(;!u&&r.line>e.firstLine();)r=i.Pos(r.line-1,0),u=w(!1);if(!(!u||u.cleared||a==="unfold")){var t=c(e,f,u);i.on(t,"mousedown",function(l){n.clear(),i.e_preventDefault(l)});var n=e.markText(u.from,u.to,{replacedWith:t,clearOnEnter:p(e,f,"clearOnEnter"),__isFold:!0});n.on("clear",function(l,o){i.signal(e,"unfold",e,l,o)}),i.signal(e,"fold",e,u.from,u.to)}}function c(e,r,f){var a=p(e,r,"widget");if(typeof a=="function"&&(a=a(f.from,f.to)),typeof a=="string"){var s=document.createTextNode(a);a=document.createElement("span"),a.appendChild(s),a.className="CodeMirror-foldmarker"}else a&&(a=a.cloneNode(!0));return a}i.newFoldFunction=function(e,r){return function(f,a){d(f,a,{rangeFinder:e,widget:r})}},i.defineExtension("foldCode",function(e,r,f){d(this,e,r,f)}),i.defineExtension("isFolded",function(e){for(var r=this.findMarksAt(e),f=0;f<r.length;++f)if(r[f].__isFold)return!0}),i.commands.toggleFold=function(e){e.foldCode(e.getCursor())},i.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},i.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold")},i.commands.foldAll=function(e){e.operation(function(){for(var r=e.firstLine(),f=e.lastLine();r<=f;r++)e.foldCode(i.Pos(r,0),{scanUp:!1},"fold")})},i.commands.unfoldAll=function(e){e.operation(function(){for(var r=e.firstLine(),f=e.lastLine();r<=f;r++)e.foldCode(i.Pos(r,0),{scanUp:!1},"unfold")})},i.registerHelper("fold","combine",function(){var e=Array.prototype.slice.call(arguments,0);return function(r,f){for(var a=0;a<e.length;++a){var s=e[a](r,f);if(s)return s}}}),i.registerHelper("fold","auto",function(e,r){for(var f=e.getHelpers(r,"fold"),a=0;a<f.length;a++){var s=f[a](e,r);if(s)return s}});var O={rangeFinder:i.fold.auto,widget:"\u2194",minFoldSize:0,scanUp:!1,clearOnEnter:!0};i.defineOption("foldOptions",null);function p(e,r,f){if(r&&r[f]!==void 0)return r[f];var a=e.options.foldOptions;return a&&a[f]!==void 0?a[f]:O[f]}i.defineExtension("foldOption",function(e,r){return p(this,e,r)})})}()),T.exports}(function(k,y){(function(i){i((0,G.r)(),D())})(function(i){i.defineOption("foldGutter",!1,function(t,n,l){l&&l!=i.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",s),t.off("changes",F),t.off("viewportChange",w),t.off("fold",u),t.off("unfold",u),t.off("swapDoc",F)),n&&(t.state.foldGutter=new c(O(n)),a(t),t.on("gutterClick",s),t.on("changes",F),t.on("viewportChange",w),t.on("fold",u),t.on("unfold",u),t.on("swapDoc",F))});var d=i.Pos;function c(t){this.options=t,this.from=this.to=0}function O(t){return t===!0&&(t={}),t.gutter==null&&(t.gutter="CodeMirror-foldgutter"),t.indicatorOpen==null&&(t.indicatorOpen="CodeMirror-foldgutter-open"),t.indicatorFolded==null&&(t.indicatorFolded="CodeMirror-foldgutter-folded"),t}function p(t,n){for(var l=t.findMarks(d(n,0),d(n+1,0)),o=0;o<l.length;++o)if(l[o].__isFold){var g=l[o].find(-1);if(g&&g.line===n)return l[o]}}function e(t){if(typeof t=="string"){var n=document.createElement("div");return n.className=t+" CodeMirror-guttermarker-subtle",n}else return t.cloneNode(!0)}function r(t,n,l){var o=t.state.foldGutter.options,g=n-1,v=t.foldOption(o,"minFoldSize"),U=t.foldOption(o,"rangeFinder"),b=typeof o.indicatorFolded=="string"&&f(o.indicatorFolded),A=typeof o.indicatorOpen=="string"&&f(o.indicatorOpen);t.eachLine(n,l,function(N){++g;var x=null,h=N.gutterMarkers;if(h&&(h=h[o.gutter]),p(t,g)){if(b&&h&&b.test(h.className))return;x=e(o.indicatorFolded)}else{var C=d(g,0),_=U&&U(t,C);if(_&&_.to.line-_.from.line>=v){if(A&&h&&A.test(h.className))return;x=e(o.indicatorOpen)}}!x&&!h||t.setGutterMarker(N,o.gutter,x)})}function f(t){return new RegExp("(^|\\s)"+t+"(?:$|\\s)\\s*")}function a(t){var n=t.getViewport(),l=t.state.foldGutter;l&&(t.operation(function(){r(t,n.from,n.to)}),l.from=n.from,l.to=n.to)}function s(t,n,l){var o=t.state.foldGutter;if(o){var g=o.options;if(l==g.gutter){var v=p(t,n);v?v.clear():t.foldCode(d(n,0),g)}}}function F(t){var n=t.state.foldGutter;if(n){var l=n.options;n.from=n.to=0,clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){a(t)},l.foldOnChangeTimeSpan||600)}}function w(t){var n=t.state.foldGutter;if(n){var l=n.options;clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){var o=t.getViewport();n.from==n.to||o.from-n.to>20||n.from-o.to>20?a(t):t.operation(function(){o.from<n.from&&(r(t,o.from,n.from),n.from=o.from),o.to>n.to&&(r(t,n.to,o.to),n.to=o.to)})},l.updateViewportTimeSpan||400)}}function u(t,n){var l=t.state.foldGutter;if(l){var o=n.line;o>=l.from&&o<l.to&&r(t,o,o+1)}}})})();var S=z.exports;const j=L({__proto__:null,default:(0,G.g)(S)},[S])}}]);})();

//# sourceMappingURL=7555.2722a4ad.chunk.js.map