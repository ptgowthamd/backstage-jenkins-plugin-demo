(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5051],{29868:c=>{const l=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],E=["true","false","null","undefined","NaN","Infinity"],u=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],d=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],g=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],S=["arguments","this","super","console","window","document","localStorage","module","global"],A=[].concat(g,S,u,d);function I(e){const b=["npm","print"],f=["yes","no","on","off"],p=["then","unless","until","loop","by","when","and","or","is","isnt","not"],_=["var","const","let","function","static"],y=R=>B=>!R.includes(B),r={keyword:l.concat(p).filter(y(_)),literal:E.concat(f),built_in:A.concat(b)},n="[A-Za-z$_][0-9A-Za-z$_]*",t={className:"subst",begin:/#\{/,end:/\}/,keywords:r},a=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,t]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[t,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+n},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];t.contains=a;const i=e.inherit(e.TITLE_MODE,{begin:n}),o="(\\(.*\\)\\s*)?\\B[-=]>",s={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(a)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:a.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+n+"\\s*=\\s*"+o,end:"[-=]>",returnBegin:!0,contains:[i,s]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:o,end:"[-=]>",returnBegin:!0,contains:[s]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[i]},i]},{begin:n+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}c.exports=I}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_coffeescript.1d38f15b.chunk.js.map