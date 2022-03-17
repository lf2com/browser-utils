(()=>{"use strict";var e={420:(e,o,n)=>{n.d(o,{Z:()=>r});class t{debug=console.debug;log=console.log;warn=console.warn;info=console.info;error=console.error;trace=console.trace;group=console.group;groupCollapsed=console.groupCollapsed;groupEnd=console.groupEnd;constructor(e=null){const o=[];null!==e&&o.push(e.toString()),this.debug=console.debug.bind(console,...o),this.log=console.log.bind(console,...o),this.warn=console.warn.bind(console,...o),this.info=console.info.bind(console,...o),this.error=console.error.bind(console,...o),this.trace=console.trace.bind(console,...o),this.group=console.group.bind(console,...o),this.groupCollapsed=console.groupCollapsed.bind(console,...o)}}globalThis.Logger=t;const r=t}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e=n(420);const o=async function(){"complete"!==document.readyState&&await new Promise((e=>{window.addEventListener("load",(()=>{e(void 0)}),{once:!0})}))},t=async function(e){return new Promise(((n,t)=>{const r=document.createElement("script");r.src=e,r.addEventListener("load",(async()=>{await o(),n()})),r.addEventListener("error",(()=>{t()})),document.head.append(r)}))},r=new e.Z("[RJ]");r.log("Loading React"),t("https://unpkg.com/react@17/umd/react.production.min.js").then((()=>Promise.all([t("https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"),t("https://unpkg.com/@babel/standalone/babel.min.js")]))).then(o).then((async()=>{const{Babel:e}=window;if(!e)throw new ReferenceError("Babel is not defined");const{transform:o}=e;if(!o)throw new ReferenceError("Babel.transform is not defined");r.info("Loaded React. Starting to transforming..."),await Array.from(document.querySelectorAll('script[type="text/babel"]')).reduce((async(e,n,t,s)=>{await e,r.log(`Transforming ${t+1} / ${s.length}`);try{const{src:e}=n,t=e.length>0?await async function(e){const o=await fetch(e,{method:"GET"});if(!o.ok)throw new ReferenceError(o.statusText);return o.text()}(e):n.innerHTML,s=o(t,{presets:["env","react","typescript"],filename:".tsx"}).code,c=document.createElement("script");c.innerText=s,n.replaceWith(c),r.info("Transpiled")}catch(e){const{message:o}=e;r.warn(`Transforming failed: ${o}`)}}),Promise.resolve()),r.info("Transformed all scripts")})).catch((e=>{const o=e?.message??"Not found";r.warn(`Loading React failed: ${o}`)})).finally((()=>{r.log("End of React")}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9DLEVBQWFDLFVBRTVELElBQ0UsTUFBTSxJQUFFdEIsR0FBUW1CLEVBQ1ZJLEVBQWF2QixFQUFJc0IsT0FBUyxRSHRDMUM5QixlQUE0QmdDLEdBQzFCLE1BQU1DLFFBQWlCQyxNQUFNRixFQUFLLENBQ2hDRyxPQUFRLFFBR1YsSUFBS0YsRUFBU0csR0FDWixNQUFNLElBQUloQixlQUFlYSxFQUFTSSxZQUdwQyxPQUFPSixFQUFTSyxPRzhCRUMsQ0FBYS9CLEdBQ25CbUIsRUFBWWEsVUFFVkMsRUFBU3BCLEVBQVVVLEVBQVcsQ0FDbENXLFFBQVMsQ0FBQyxNQUFPLFFBQVMsY0FDMUJDLFNBQVUsU0FDVEMsS0FDR0MsRUFBVzVDLFNBQVNVLGNBQWMsVUFFeENrQyxFQUFTQyxVQUFZTCxFQUNyQmQsRUFBWW9CLFlBQVlGLEdBQ3hCOUIsRUFBT2xELEtBQUssY0FDWixNQUFPQyxHQUNQLE1BQU0sUUFBRWtGLEdBQVlsRixFQUVwQmlELEVBQU9uRCxLQUFNLHdCQUF1Qm9GLFFBRXJDN0MsUUFBUUMsV0FDYlcsRUFBT2xELEtBQUssOEJBRWJvRixPQUFPbkYsSUFDTixNQUFNb0YsRUFBU3BGLEdBQU9rRixTQUFXLFlBRWpDakMsRUFBT25ELEtBQU0seUJBQXdCc0YsUUFFdENDLFNBQVEsS0FDUHBDLEVBQU9wRCxJQUFJLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxmMmNvbS9icm93c2VyLXV0aWxzLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9AbGYyY29tL2Jyb3dzZXItdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGxmMmNvbS9icm93c2VyLXV0aWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbGYyY29tL2Jyb3dzZXItdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbGYyY29tL2Jyb3dzZXItdXRpbHMvLi9zcmMvdXRpbHMvZmV0Y2hVcmxUZXh0LnRzIiwid2VicGFjazovL0BsZjJjb20vYnJvd3Nlci11dGlscy8uL3NyYy91dGlscy93YWl0Rm9yUGFnZUxvYWRlZC50cyIsIndlYnBhY2s6Ly9AbGYyY29tL2Jyb3dzZXItdXRpbHMvLi9zcmMvdXRpbHMvbG9hZFNjcmlwdC50cyIsIndlYnBhY2s6Ly9AbGYyY29tL2Jyb3dzZXItdXRpbHMvLi9zcmMvcmVhY3QvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuY2xhc3MgTG9nZ2VyIHtcbiAgcmVhZG9ubHkgZGVidWc6IHR5cGVvZiBjb25zb2xlWydkZWJ1ZyddID0gY29uc29sZS5kZWJ1ZztcblxuICByZWFkb25seSBsb2c6IHR5cGVvZiBjb25zb2xlWydsb2cnXSA9IGNvbnNvbGUubG9nO1xuXG4gIHJlYWRvbmx5IHdhcm46IHR5cGVvZiBjb25zb2xlWyd3YXJuJ10gPSBjb25zb2xlLndhcm47XG5cbiAgcmVhZG9ubHkgaW5mbzogdHlwZW9mIGNvbnNvbGVbJ2luZm8nXSA9IGNvbnNvbGUuaW5mbztcblxuICByZWFkb25seSBlcnJvcjogdHlwZW9mIGNvbnNvbGVbJ2Vycm9yJ10gPSBjb25zb2xlLmVycm9yO1xuXG4gIHJlYWRvbmx5IHRyYWNlOiB0eXBlb2YgY29uc29sZVsndHJhY2UnXSA9IGNvbnNvbGUudHJhY2U7XG5cbiAgcmVhZG9ubHkgZ3JvdXA6IHR5cGVvZiBjb25zb2xlWydncm91cCddID0gY29uc29sZS5ncm91cDtcblxuICByZWFkb25seSBncm91cENvbGxhcHNlZDogdHlwZW9mIGNvbnNvbGVbJ2dyb3VwQ29sbGFwc2VkJ10gPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuXG4gIHJlYWRvbmx5IGdyb3VwRW5kOiB0eXBlb2YgY29uc29sZVsnZ3JvdXBFbmQnXSA9IGNvbnNvbGUuZ3JvdXBFbmQ7XG5cbiAgY29uc3RydWN0b3IodGFnOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIGNvbnN0IGJpbmRlcjogYW55W10gPSBbXTtcblxuICAgIGlmICh0YWcgIT09IG51bGwpIHtcbiAgICAgIGJpbmRlci5wdXNoKHRhZy50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlYnVnID0gY29uc29sZS5kZWJ1Zy5iaW5kKGNvbnNvbGUsIC4uLmJpbmRlcik7XG4gICAgdGhpcy5sb2cgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsIC4uLmJpbmRlcik7XG4gICAgdGhpcy53YXJuID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSwgLi4uYmluZGVyKTtcbiAgICB0aGlzLmluZm8gPSBjb25zb2xlLmluZm8uYmluZChjb25zb2xlLCAuLi5iaW5kZXIpO1xuICAgIHRoaXMuZXJyb3IgPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgLi4uYmluZGVyKTtcbiAgICB0aGlzLnRyYWNlID0gY29uc29sZS50cmFjZS5iaW5kKGNvbnNvbGUsIC4uLmJpbmRlcik7XG4gICAgdGhpcy5ncm91cCA9IGNvbnNvbGUuZ3JvdXAuYmluZChjb25zb2xlLCAuLi5iaW5kZXIpO1xuICAgIHRoaXMuZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkLmJpbmQoY29uc29sZSwgLi4uYmluZGVyKTtcbiAgfVxufVxuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLkxvZ2dlciA9IExvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvKipcbiAqIFJldHVybnMgdGV4dCBvZiBVUkwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXJsVGV4dCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoVXJsVGV4dDtcbiIsIi8qKlxuICogV2FpdHMgdW50aWwgcGFnZSBpcyBsb2FkZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JQYWdlTG9hZGVkKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnbG9hZCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICApO1xuICB9KTtcbn1cbi8qKlxuICogV2FpdHMgdW50aWwgRE9NIGNvbnRlbnQgaXMgbG9hZGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvckRPTUNvbnRlbnRMb2FkZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3YWl0Rm9yUGFnZUxvYWRlZDtcbiIsImltcG9ydCB3YWl0Rm9yUGFnZUxvYWRlZCBmcm9tICcuL3dhaXRGb3JQYWdlTG9hZGVkJztcblxuLyoqXG4gKiBMb2FkcyBzY3JpcHQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB3YWl0Rm9yUGFnZUxvYWRlZCgpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2NyaXB0O1xuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IGZldGNoVXJsVGV4dCBmcm9tICcuLi91dGlscy9mZXRjaFVybFRleHQnO1xuaW1wb3J0IGxvYWRTY3JpcHQgZnJvbSAnLi4vdXRpbHMvbG9hZFNjcmlwdCc7XG5pbXBvcnQgd2FpdEZvclBhZ2VMb2FkZWQgZnJvbSAnLi4vdXRpbHMvd2FpdEZvclBhZ2VMb2FkZWQnO1xuXG5jb25zdCByZWFjdFBhdGggPSAnaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTcvdW1kL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJztcbmNvbnN0IHJlYWN0RG9tUGF0aCA9ICdodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTcvdW1kL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyc7XG5jb25zdCBiYWJlbFBhdGggPSAnaHR0cHM6Ly91bnBrZy5jb20vQGJhYmVsL3N0YW5kYWxvbmUvYmFiZWwubWluLmpzJztcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1tSSl0nKTtcblxubG9nZ2VyLmxvZygnTG9hZGluZyBSZWFjdCcpO1xubG9hZFNjcmlwdChyZWFjdFBhdGgpXG4gIC50aGVuKCgpID0+IFByb21pc2UuYWxsKFtcbiAgICBsb2FkU2NyaXB0KHJlYWN0RG9tUGF0aCksXG4gICAgbG9hZFNjcmlwdChiYWJlbFBhdGgpLFxuICBdKSlcbiAgLnRoZW4od2FpdEZvclBhZ2VMb2FkZWQpXG4gIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IEJhYmVsIH0gPSB3aW5kb3cgYXMgYW55O1xuXG4gICAgaWYgKCFCYWJlbCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdCYWJlbCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSBCYWJlbDtcblxuICAgIGlmICghdHJhbnNmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ0JhYmVsLnRyYW5zZm9ybSBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGxvZ2dlci5pbmZvKCdMb2FkZWQgUmVhY3QuIFN0YXJ0aW5nIHRvIHRyYW5zZm9ybWluZy4uLicpO1xuXG4gICAgYXdhaXQgKFxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cInRleHQvYmFiZWxcIl0nKSkgYXMgSFRNTFNjcmlwdEVsZW1lbnRbXVxuICAgIClcbiAgICAgIC5yZWR1Y2UoYXN5bmMgKHByZXZQcm9taXNlLCByZWFjdFNjcmlwdCwgcmVhY3RJbmRleCwgcmVhY3RTY3JpcHRzKSA9PiB7XG4gICAgICAgIGF3YWl0IHByZXZQcm9taXNlO1xuICAgICAgICBsb2dnZXIubG9nKGBUcmFuc2Zvcm1pbmcgJHtyZWFjdEluZGV4ICsgMX0gLyAke3JlYWN0U2NyaXB0cy5sZW5ndGh9YCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gcmVhY3RTY3JpcHQ7XG4gICAgICAgICAgY29uc3QgcmVhY3RUZXh0ID0gKHNyYy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGF3YWl0IGZldGNoVXJsVGV4dChzcmMpXG4gICAgICAgICAgICA6IHJlYWN0U2NyaXB0LmlubmVySFRNTFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QganNUZXh0ID0gdHJhbnNmb3JtKHJlYWN0VGV4dCwge1xuICAgICAgICAgICAgcHJlc2V0czogWydlbnYnLCAncmVhY3QnLCAndHlwZXNjcmlwdCddLFxuICAgICAgICAgICAgZmlsZW5hbWU6ICcudHN4JyxcbiAgICAgICAgICB9KS5jb2RlO1xuICAgICAgICAgIGNvbnN0IGpzU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgICBqc1NjcmlwdC5pbm5lclRleHQgPSBqc1RleHQ7XG4gICAgICAgICAgcmVhY3RTY3JpcHQucmVwbGFjZVdpdGgoanNTY3JpcHQpO1xuICAgICAgICAgIGxvZ2dlci5pbmZvKCdUcmFuc3BpbGVkJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnJvciBhcyBFcnJvcjtcblxuICAgICAgICAgIGxvZ2dlci53YXJuKGBUcmFuc2Zvcm1pbmcgZmFpbGVkOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICBsb2dnZXIuaW5mbygnVHJhbnNmb3JtZWQgYWxsIHNjcmlwdHMnKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnN0IGRldGFpbCA9IGVycm9yPy5tZXNzYWdlID8/ICdOb3QgZm91bmQnO1xuXG4gICAgbG9nZ2VyLndhcm4oYExvYWRpbmcgUmVhY3QgZmFpbGVkOiAke2RldGFpbH1gKTtcbiAgfSlcbiAgLmZpbmFsbHkoKCkgPT4ge1xuICAgIGxvZ2dlci5sb2coJ0VuZCBvZiBSZWFjdCcpO1xuICB9KTtcbiJdLCJuYW1lcyI6WyJMb2dnZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuIiwiaW5mbyIsImVycm9yIiwidHJhY2UiLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJjb25zdHJ1Y3RvciIsInRhZyIsImJpbmRlciIsInB1c2giLCJ0b1N0cmluZyIsInRoaXMiLCJiaW5kIiwiZ2xvYmFsVGhpcyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFzeW5jIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsInNyYyIsInJlamVjdCIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ3YWl0Rm9yUGFnZUxvYWRlZCIsImhlYWQiLCJhcHBlbmQiLCJsb2dnZXIiLCJsb2FkU2NyaXB0IiwidGhlbiIsImFsbCIsIkJhYmVsIiwiUmVmZXJlbmNlRXJyb3IiLCJ0cmFuc2Zvcm0iLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVkdWNlIiwicHJldlByb21pc2UiLCJyZWFjdFNjcmlwdCIsInJlYWN0SW5kZXgiLCJyZWFjdFNjcmlwdHMiLCJsZW5ndGgiLCJyZWFjdFRleHQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJzdGF0dXNUZXh0IiwidGV4dCIsImZldGNoVXJsVGV4dCIsImlubmVySFRNTCIsImpzVGV4dCIsInByZXNldHMiLCJmaWxlbmFtZSIsImNvZGUiLCJqc1NjcmlwdCIsImlubmVyVGV4dCIsInJlcGxhY2VXaXRoIiwibWVzc2FnZSIsImNhdGNoIiwiZGV0YWlsIiwiZmluYWxseSJdLCJzb3VyY2VSb290IjoiIn0=