import{p as e,a as s,r as n,b as t,c as r,d as o,w as a,e as l,F as i,f as c,n as u,o as d,t as m,g as p,h as f,i as h,j as g}from"./vendor.c58ad888.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const v={setup:()=>({nav:["品質講究","飲品菜單","最新消息","品牌精神"],socials:["bxl-facebook-square","bxl-instagram-alt"],menu:n(!1)})};e("data-v-347ff5d4");const b={class:"header"},y=l("img",{src:"https://fakeimg.pl/100x45/",alt:"logo"},null,-1),k={href:"javascript:;",class:"link"},_={class:"social-group"},w=l("a",{href:"https://github.com/connectshark/swiido18-rwd-nav-bar",target:"_blank",class:"social-item"},[l("i",{class:"bxl-github bx"})],-1),L=[l("span",null,null,-1),l("span",null,null,-1),l("span",null,null,-1)];s(),v.render=function(e,s,n,p,f,h){const g=t("router-link");return d(),r("header",b,[o(g,{to:"/",class:"logo"},{default:a((()=>[y])),_:1}),l("ul",{class:u(["nav-group",{mobile:p.menu}])},[(d(!0),r(i,null,c(p.nav,(e=>(d(),r("li",{class:"nav-item",key:e},[l("a",k,m(e),1)])))),128))],2),l("div",_,[(d(!0),r(i,null,c(p.socials,(e=>(d(),r("a",{href:"javascript:;",class:"social-item",key:e},[l("i",{class:u(["bx",e])},null,2)])))),128)),w,l("div",{class:u(["menu",{"menu-close":p.menu}]),onClick:s[0]||(s[0]=e=>p.menu=!p.menu)},L,2)])])},v.__scopeId="data-v-347ff5d4";const x={components:{Head:v},setup:()=>({title:"Hello"})};x.render=function(e,s,n,a,l,c){const u=t("Head"),m=t("router-view");return d(),r(i,null,[o(u),o(m)],64)};const E=p({state:{},mutations:{},actions:{}}),j={},P=h({history:f(),routes:[{path:"/",name:"home",component:()=>{return e=()=>import("./home.18eb59b2.js"),(s=["assets/home.18eb59b2.js","assets/vendor.c58ad888.js"])&&0!==s.length?Promise.all(s.map((e=>{if((e=`/swiido18-rwd/${e}`)in j)return;j[e]=!0;const s=e.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const t=document.createElement("link");return t.rel=s?"stylesheet":"modulepreload",s||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),s?new Promise(((e,s)=>{t.addEventListener("load",e),t.addEventListener("error",s)})):void 0}))).then((()=>e())):e();var e,s}}]});g(x).use(P).use(E).mount("#app");
