import{d as h,o as l,c as d,t as w,a as b,b as a,r as k,n as $,e as _,w as v,p as S,f as C,g as A,h as m,m as j,i as E}from"./vendor.98eb3ac1.js";const I=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};I();var g=(t,i)=>{const s=t.__vccOpts||t;for(const[r,e]of i)s[r]=e;return s};const P=h({name:"MPanel",props:{title:{type:String,default:"\u9762\u677F\u6807\u9898"},isTitle:{type:Boolean,default:!0},cClass:{type:String,default:""}},setup(t,i){}}),T={class:"m-panel-wrapper"},N={key:0,class:"m-panel-title"};function O(t,i,s,r,e,o){return l(),d("div",T,[t.isTitle?(l(),d("div",N,w(t.title),1)):b("",!0),a("div",{class:$(["m-panel-content",t.cClass])},[k(t.$slots,"default",{},void 0,!0)],2)])}var y=g(P,[["render",O],["__scopeId","data-v-642dd11e"]]);const z=t=>(S("data-v-8cf7fb6c"),t=t(),C(),t),B={class:"page"},L=z(()=>a("h1",null,"v-touchshow",-1)),M={class:"block block1"},x={class:"block-top"},D={class:"block-btm"},V={class:"block block2"},F={class:"block-top"},Y={class:"block-btm"},q=h({setup(t){const i=(c,n)=>{n.style.transform="translateY(-100px)"},s=(c,n)=>{n.style.transform="translateY(0vw)"},r=(c,n)=>{n.style.transform="scale(1)"},e=(c,n)=>{n.style.transform="scale(0.5)"},o=c=>{alert(`image ${c} click!`)};return(c,n)=>{const u=A("touchshow");return l(),d("div",B,[L,_(y,{title:"\u4E0A\u4E0B\u6ED1\u52A8"},{default:v(()=>[m((l(),d("div",M,[a("div",x,[a("img",{onTap:n[0]||(n[0]=f=>o(1)),width:"100",height:"100",src:"https://img.yzcdn.cn/vant/cat.jpeg"},null,32)]),a("div",D,[a("img",{onTap:n[1]||(n[1]=f=>o(2)),width:"100",height:"100",src:"https://img.yzcdn.cn/vant/cat.jpeg"},null,32)])])),[[u,i,"swipeup"],[u,s,"swipedown"]])]),_:1}),_(y,{title:"\u53CC\u6307\u7F29\u653E\u548C\u653E\u5927"},{default:v(()=>[m((l(),d("div",V,[a("div",F,[a("img",{onTap:n[2]||(n[2]=f=>o(3)),width:"100",height:"100",src:"https://img.yzcdn.cn/vant/cat.jpeg"},null,32)]),a("div",Y,[a("img",{onTap:n[3]||(n[3]=f=>o(4)),width:"100",height:"100",src:"https://img.yzcdn.cn/vant/cat.jpeg"},null,32)])])),[[u,r,"pinchin"],[u,e,"pinchout"]])]),_:1})])}}});var K=g(q,[["__scopeId","data-v-8cf7fb6c"]]);const p=new WeakMap;function W(t,i){let s;const r=i.arg,e=i.value,o=p.get(t);if(o)s=o;else{const c=Object.assign({},typeof e=="object"?e:{});s=new j(t,c)}typeof e=="function"&&s.on(r,c=>{e(c,t)}),p.set(t,s)}function G(t,i){t.directive("touchshow",{mounted(s,r){W(s,r)},unmounted(s,r){const e=p.get(s);e&&(e.destroy(),p.delete(s)),e&&console.log(`[v-touchshow:${s}]:touchshow events destroyed`)}})}var H={install:G};E(K).use(H).mount("#app");