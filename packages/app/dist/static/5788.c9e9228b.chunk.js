"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5788],{45788:($,L,m)=>{m.r(L),m.d(L,{l:()=>F});var M=m(94403);function I(v,y){for(var s=0;s<y.length;s++){const f=y[s];if(typeof f!="string"&&!Array.isArray(f)){for(const d in f)if(d!=="default"&&!(d in v)){const h=Object.getOwnPropertyDescriptor(f,d);h&&Object.defineProperty(v,d,h.get?h:{enumerable:!0,get:()=>f[d]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(v,y){(function(s){s((0,M.r)())})(function(s){var f="CodeMirror-lint-markers",d="CodeMirror-lint-line-";function h(t,e,r){var n=document.createElement("div");n.className="CodeMirror-lint-tooltip cm-s-"+t.options.theme,n.appendChild(r.cloneNode(!0)),t.state.lint.options.selfContain?t.getWrapperElement().appendChild(n):document.body.appendChild(n);function i(o){if(!n.parentNode)return s.off(document,"mousemove",i);n.style.top=Math.max(0,o.clientY-n.offsetHeight-5)+"px",n.style.left=o.clientX+5+"px"}return s.on(document,"mousemove",i),i(e),n.style.opacity!=null&&(n.style.opacity=1),n}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function G(t){t.parentNode&&(t.style.opacity==null&&N(t),t.style.opacity=0,setTimeout(function(){N(t)},600))}function b(t,e,r,n){var i=h(t,e,r);function o(){s.off(n,"mouseout",o),i&&(G(i),i=null)}var a=setInterval(function(){if(i)for(var l=n;;l=l.parentNode){if(l&&l.nodeType==11&&(l=l.host),l==document.body)return;if(!l){o();break}}if(!i)return clearInterval(a)},400);s.on(n,"mouseout",o)}function P(t,e,r){this.marked=[],e instanceof Function&&(e={getAnnotations:e}),(!e||e===!0)&&(e={}),this.options={},this.linterOptions=e.options||{};for(var n in C)this.options[n]=C[n];for(var n in e)C.hasOwnProperty(n)?e[n]!=null&&(this.options[n]=e[n]):e.options||(this.linterOptions[n]=e[n]);this.timeout=null,this.hasGutter=r,this.onMouseOver=function(i){V(t,i)},this.waitingFor=0}var C={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function w(t){var e=t.state.lint;e.hasGutter&&t.clearGutter(f),e.options.highlightLines&&j(t);for(var r=0;r<e.marked.length;++r)e.marked[r].clear();e.marked.length=0}function j(t){t.eachLine(function(e){var r=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);r&&t.removeLineClass(e,"wrap",r[0])})}function H(t,e,r,n,i){var o=document.createElement("div"),a=o;return o.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+r,n&&(a=o.appendChild(document.createElement("div")),a.className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),i!=!1&&s.on(a,"mouseover",function(l){b(t,l,e,a)}),o}function U(t,e){return t=="error"?t:e}function W(t){for(var e=[],r=0;r<t.length;++r){var n=t[r],i=n.from.line;(e[i]||(e[i]=[])).push(n)}return e}function A(t){var e=t.severity;e||(e="error");var r=document.createElement("div");return r.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,typeof t.messageHTML<"u"?r.innerHTML=t.messageHTML:r.appendChild(document.createTextNode(t.message)),r}function B(t,e){var r=t.state.lint,n=++r.waitingFor;function i(){n=-1,t.off("change",i)}t.on("change",i),e(t.getValue(),function(o,a){t.off("change",i),r.waitingFor==n&&(a&&o instanceof s&&(o=a),t.operation(function(){O(t,o)}))},r.linterOptions,t)}function k(t){var e=t.state.lint;if(e){var r=e.options,n=r.getAnnotations||t.getHelper(s.Pos(0,0),"lint");if(n)if(r.async||n.async)B(t,n);else{var i=n(t.getValue(),e.linterOptions,t);if(!i)return;i.then?i.then(function(o){t.operation(function(){O(t,o)})}):t.operation(function(){O(t,i)})}}}function O(t,e){var r=t.state.lint;if(r){var n=r.options;w(t);for(var i=W(e),o=0;o<i.length;++o){var a=i[o];if(a){var l=[];a=a.filter(function(_){return l.indexOf(_.message)>-1?!1:l.push(_.message)});for(var u=null,g=r.hasGutter&&document.createDocumentFragment(),T=0;T<a.length;++T){var p=a[T],c=p.severity;c||(c="error"),u=U(u,c),n.formatAnnotation&&(p=n.formatAnnotation(p)),r.hasGutter&&g.appendChild(A(p)),p.to&&r.marked.push(t.markText(p.from,p.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+c,__annotation:p}))}r.hasGutter&&t.setGutterMarker(o,f,H(t,g,u,i[o].length>1,n.tooltips)),n.highlightLines&&t.addLineClass(o,"wrap",d+u)}}n.onUpdateLinting&&n.onUpdateLinting(e,i,t)}}function x(t){var e=t.state.lint;e&&(clearTimeout(e.timeout),e.timeout=setTimeout(function(){k(t)},e.options.delay))}function R(t,e,r){for(var n=r.target||r.srcElement,i=document.createDocumentFragment(),o=0;o<e.length;o++){var a=e[o];i.appendChild(A(a))}b(t,r,i,n)}function V(t,e){var r=e.target||e.srcElement;if(/\bCodeMirror-lint-mark-/.test(r.className)){for(var n=r.getBoundingClientRect(),i=(n.left+n.right)/2,o=(n.top+n.bottom)/2,a=t.findMarksAt(t.coordsChar({left:i,top:o},"client")),l=[],u=0;u<a.length;++u){var g=a[u].__annotation;g&&l.push(g)}l.length&&R(t,l,e)}}s.defineOption("lint",!1,function(t,e,r){if(r&&r!=s.Init&&(w(t),t.state.lint.options.lintOnChange!==!1&&t.off("change",x),s.off(t.getWrapperElement(),"mouseover",t.state.lint.onMouseOver),clearTimeout(t.state.lint.timeout),delete t.state.lint),e){for(var n=t.getOption("gutters"),i=!1,o=0;o<n.length;++o)n[o]==f&&(i=!0);var a=t.state.lint=new P(t,e,i);a.options.lintOnChange&&t.on("change",x),a.options.tooltips!=!1&&a.options.tooltips!="gutter"&&s.on(t.getWrapperElement(),"mouseover",a.onMouseOver),k(t)}}),s.defineExtension("performLint",function(){k(this)})})})();var E=D.exports;const F=I({__proto__:null,default:(0,M.g)(E)},[E])}}]);})();

//# sourceMappingURL=5788.c9e9228b.chunk.js.map