(this.csbJsonP=this.csbJsonP||[]).push([[5],{"../../node_modules/@vue/compiler-sfc/dist sync recursive":function(e,r){function t(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="../../node_modules/@vue/compiler-sfc/dist sync recursive"},"../vue3-browser-compiler/lib/index.js":function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),t("../../node_modules/tslib/tslib.es6.js").__exportStar(t("../../node_modules/@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js"),r)},"../vue3-transpiler/lib/cssModules.js":function(e,r,t){"use strict";function s(e,r,t,s,n){const o="style"+r;let i=`\nimport ${o} from ${t}`;const a="string"==typeof s?s:"$style";return i+=`\ncssModules["${a}"] = ${o}`,n&&(i+=`\nif (module.hot) {\n  module.hot.accept(${t}, () => {\n    cssModules["${a}"] = ${o}\n    __VUE_HMR_RUNTIME__.rerender("${e}")\n  })\n}`),i}t.d(r,"a",(function(){return s}))},"../vue3-transpiler/lib/formatError.js":function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var s=t("../vue3-browser-compiler/lib/index.js");function n(e,r,t){const n=e.loc;if(!n)return;const o=`at ${t}${`:${n.start.line}:${n.start.column}`}`,i=Object(s.generateCodeFrame)(r,n.start.offset,n.end.offset);e.message=`\n${"VueCompilerError: "+e.message}\n${o}\n${i}\n`}},"../vue3-transpiler/lib/hotReload.js":function(e,r,t){"use strict";function s(e,r){return`\n/* hot reload */\nif (module.hot) {\n  script.__hmrId = "${e}"\n  const api = __VUE_HMR_RUNTIME__\n  module.hot.accept()\n  if (!api.createRecord('${e}', script)) {\n    api.reload('${e}', script)\n  }\n  ${r?function(e,r){return`\n  module.hot.accept(${r}, () => {\n    api.rerender('${e}', render)\n  })\n`}(e,r):""}\n}\n`}t.d(r,"a",(function(){return s}))},"../vue3-transpiler/lib/index.js":function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return $}));var s=t("../../node_modules/path-browserify/index.js"),n=t.n(s),o=t("../../node_modules/querystring-es3/index.js"),i=t.n(o),a=t("../vue3-transpiler/node_modules/hash-sum/hash-sum.js"),c=t.n(a),l=t("../sandpack-core/lib/transpiler/utils/loader-utils/index.js"),p=t("../vue3-browser-compiler/lib/index.js"),u=t("../vue3-transpiler/lib/select.js"),d=t("../vue3-transpiler/lib/hotReload.js"),m=t("../vue3-transpiler/lib/cssModules.js"),f=t("../vue3-transpiler/lib/formatError.js"),b=t("../vue3-transpiler/lib/transpilers/template-loader.js"),v=t("../vue3-transpiler/lib/transpilers/style-post-loader.js");function $(e,r){function t(e,t){return`${e?r.getLoaderQuery({path:"test."+e,code:""}):""}!vue-loader${t}`}const s=e=>l.a.stringifyRequest(r,e),{target:o,sourceMap:a,resourceQuery:$}=r,j=r.path,g=$.slice(1),h=i.a.parse(g),_=l.a.getOptions(r)||{},x="node"===o,{descriptor:O,errors:M}=Object(p.parse)(e,{filename:j,sourceMap:a});if(M.length)return M.forEach(t=>{Object(f.a)(t,e,j),r.emitError(t)}),{transpiledCode:""};if(h.type)return Object(u.a)(O,h);const C=n.a.relative("/",j).replace(/^(\.\.[/\\])+/,""),E=C.replace(/\\/g,"/")+$,w=c()(E),k=O.styles.some(e=>e.scoped),N=!(x||!O.script&&!O.template||!1===_.hotReload);let S,R="const script = {}";if(O.script||O.scriptSetup){try{S=O.scriptCompiled=Object(p.compileScript)(O,{babelParserPlugins:_.babelParserPlugins,id:w})}catch(e){r.emitError(e)}if(S){const e=S.src||j,r=`?vue&type=script${y(S.attrs,"js")}${$}`,n=t(S.lang||"js",r),o=s(n+"!"+e);R=`import script from ${o}\nexport * from `+o}}let U,P="";const T=x?"ssrRender":"render";if(O.template){const e=O.template.src||j,r=`?vue&type=template${"&id="+w}${k?"&scoped=true":""}${y(O.template.attrs)}${(null==S?void 0:S.bindings)?"&bindings="+JSON.stringify(S.bindings):""}${$}`,n=`!babel-loader!${b.a.name}${t(void 0,r)}`;U=s(n+"!"+e),P=`import { ${T} } from ${U};`}let B="",I=!1;O.styles.length&&O.styles.forEach((e,r)=>{const n=e.src||j,o=y(e.attrs,"css"),i=`?vue&type=style&index=${r}${e.scoped?"&id="+w:""}${o}${$}`,a=t(e.lang||"css",i),c=s(a.replace(/!style-loader(.*?)!/,`!style-loader$1!${v.a.name}!`)+"!"+n);e.module?(I||(B+="\nconst cssModules = script.__cssModules = {}",I=!0),B+=Object(m.a)(w,r,c,e.module,N)):B+="\nimport "+c});let J=[P,R,B,P?`script.${T} = ${T}`:""].filter(Boolean).join("\n");return k&&(J+=`\nscript.__scopeId = "data-v-${w}"`),N&&(J+=Object(d.a)(w,U)),J+="\nscript.__file = "+JSON.stringify(C.replace(/\\/g,"/")),O.customBlocks&&O.customBlocks.length&&(J+="\n/* custom blocks */\n",J+=O.customBlocks.map((e,r)=>{const t=e.attrs.src||j,n=y(e.attrs),o="&blockType="+i.a.escape(e.type),a=e.attrs.src?"&issuerPath="+i.a.escape(j):"";return`import block${r} from ${s(t+`?vue&type=custom&index=${r}${o}${a}${n}${$}`)}\nif (typeof block${r} === 'function') block${r}(script)`}).join("\n")+"\n"),J+="\n\nexport default script",{transpiledCode:J}}i.a.escape=encodeURIComponent;const j=["id","index","src","type"];function y(e,r){let t="";for(const r in e){const s=e[r];j.includes(r)||(t+=`&${i.a.escape(r)}=${s?i.a.escape(String(s)):""}`)}return r&&!("lang"in e)&&(t+="&lang="+r),t}}).call(this,t("../../node_modules/process/browser.js"))},"../vue3-transpiler/lib/select.js":function(e,r,t){"use strict";(function(e){function s(r,t="//#",s=""){return r?`\n${t} sourceMappingURL=data:application/json;charset=utf-8;base64,${e.from(JSON.stringify(r),"utf-8").toString("base64")}${s}`:""}function n(e,r){if("template"===r.type){const r=e.template;return r?{transpiledCode:r.content,sourceMap:r.map}:{transpiledCode:""}}if("script"===r.type){const r=e.scriptCompiled||e.script;return r?{transpiledCode:r.content+s(r.map),sourceMap:r.map}:{transpiledCode:""}}if("style"===r.type&&null!=r.index){const t=e.styles[Number(r.index)];return t?{transpiledCode:t.content+s(t.map,"/*#","*/"),sourceMap:t.map}:{transpiledCode:""}}if("custom"===r.type&&null!=r.index){const t=e.customBlocks[Number(r.index)];return{transpiledCode:t.content,sourceMap:t.map}}return{transpiledCode:""}}t.d(r,"a",(function(){return n}))}).call(this,t("../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)},"../vue3-transpiler/lib/transpilers/index.js":function(e,r,t){"use strict";t.r(r);var s=t("../vue3-transpiler/lib/transpilers/style-post-loader.js"),n=t("../vue3-transpiler/lib/transpilers/template-loader.js"),o=t("../sandpack-core/lib/index.js"),i=t("../vue3-transpiler/lib/index.js");class a extends o.c{constructor(){super("vue-loader")}doTranspilation(e,r){return Object(i.a)(e,r)}}var c=new a;t.d(r,"stylePostLoader",(function(){return s.a})),t.d(r,"vueLoader",(function(){return c})),t.d(r,"templateLoader",(function(){return n.a}))},"../vue3-transpiler/lib/transpilers/style-post-loader.js":function(e,r,t){"use strict";var s=t("../sandpack-core/lib/index.js"),n=t("../../node_modules/querystring-es3/index.js"),o=t.n(n),i=t("../vue3-browser-compiler/lib/index.js");var a=function(e,r){const t=o.a.parse(r.resourceQuery.slice(1)),{code:s,errors:n}=Object(i.compileStyle)({source:e,filename:r.path,id:"data-v-"+t.id,map:void 0,scoped:!!t.scoped,trim:!0});if(n.length)throw n[0];return{transpiledCode:s}};class c extends s.c{constructor(){super("vue-style-post-loader")}doTranspilation(e,r){return a(e,r)}}const l=new c;r.a=l},"../vue3-transpiler/lib/transpilers/template-loader.js":function(e,r,t){"use strict";var s=t("../sandpack-core/lib/index.js"),n=t("../../node_modules/querystring-es3/index.js"),o=t.n(n),i=t("../sandpack-core/lib/transpiler/utils/loader-utils/index.js"),a=t("../vue3-browser-compiler/lib/index.js"),c=t("../vue3-transpiler/lib/formatError.js");var l=function(e,r){e=String(e);const t=i.a.getOptions(r)||{},s=o.a.parse(r.resourceQuery.slice(1)),n=""+s.id,l=s.scoped?"data-v-"+n:null;let p;if("string"==typeof t.compiler)throw new Error("Setting compiler via string doesn't work in CodeSandbox");p=t.compiler;const u=Object(a.compileTemplate)({id:n,source:e,inMap:void 0,filename:r.path,ssr:"node"===r.target,compiler:p,compilerOptions:Object.assign(Object.assign({},t.compilerOptions),{scopeId:l,bindingMetadata:"string"==typeof s.bindings?JSON.parse(s.bindings):{}}),transformAssetUrls:t.transformAssetUrls||!0});u.tips.length&&u.tips.forEach(e=>{const t={message:e,fileName:r.path,source:"Vue Template Compiler",severity:"notice",lineNumber:0,columnNumber:0};r.emitWarning(t)}),u.errors&&u.errors.length&&u.errors.forEach(t=>{"string"==typeof t?r.emitError(new Error(t)):(Object(c.a)(t,e,r.path),r.emitError(t))});const{code:d,map:m}=u;return{transpiledCode:d,sourceMap:m}};class p extends s.c{constructor(){super("vue-template-loader")}doTranspilation(e,r){return l(e,r)}}const u=new p;r.a=u}}]);
//# sourceMappingURL=5.625c92baa.chunk.js.map