var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,n=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&o(e,a,t[a]);return e},c=(e,s)=>t(e,a(s));import{g as m,c as d,d as p,l as i,e as u,a as b,p as x,m as v,r as f,F as _,k as y,t as O,i as g,q as j}from"./app.49a262c4.js";import{w as k}from"./index.7b6c7a0a.js";import{c as w}from"./animate.c6da258d.js";const h={class:"md-example-child md-example-child-water-mark-0"},M=x("p",{class:"text"}," 每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。 ",-1),S=x("p",{class:"text"}," 希望你可以记住我，记住我这样活过，这样在你身边待过。 ",-1),z=x("p",{class:"text"}," 少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。 ",-1);var C=m(c(n({},{name:"WaterMarkDemo",title:"基本"}),{setup:e=>(e,t)=>(b(),d("div",h,[p(u(k),{class:"text-container",content:"MAND MOBILE",spacing:"10vw"},{default:i((()=>[M,S,z])),_:1})]))})),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const D={class:"md-example-child md-example-child-water-mark-0"},W=x("p",{class:"text"},[v(" 通过"),x("b",null,"作用域插槽"),v("的坐标属性(coord)可以对水印行列进行定制 ")],-1),T=x("p",{class:"text"},[v(" 通过"),x("b",null,"作用域插槽"),v("的坐标属性(coord)可以对水印行列进行定制 ")],-1),E=x("p",{class:"text"},[v(" 通过"),x("b",null,"作用域插槽"),v("的坐标属性(coord)可以对水印行列进行定制 ")],-1),I={key:0},q={key:1};var A=m(c(n({},{name:"WaterMarkDemo",title:"使用插槽"}),{setup:e=>(e,t)=>(b(),d("div",D,[p(u(k),{class:"text-container",spacing:"10vw"},{watermark:i((e=>[x("div",null,[e.coord.row%2?(b(),d("span",I," 奇数行")):(b(),d("span",q,"偶数行"))])])),default:i((()=>[W,T,E])),_:1})]))})),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const F={"./demo0.vue":P,"./demo1.vue":B};var L=w("WaterMark",Object.entries(F).map((e=>e[1].default)));const N={class:"md-nav"},$=x("p",{class:"name"},"WaterMark",-1),G=x("p",{class:"name-zh"},"水印",-1),H={class:"md-example water-mark"},J=["textContent"],K=["textContent"],Q={class:"md-example-content"};L.render=function(e,t,a,s,l,r){const o=f("md-icon");return b(),d(_,null,[x("div",N,[x("p",{class:"home",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[p(o,{name:"home",size:"lg"})]),$,G]),x("div",H,[(b(!0),d(_,null,y(e.demos,((e,t)=>(b(),d("section",{key:t,class:"md-example-section"},[x("div",{class:"md-example-title",textContent:O(e.title)},null,8,J),x("div",{class:"md-example-describe",textContent:O(e.describe)},null,8,K),x("div",Q,[(b(),g(j(e)))])])))),128))])],64)};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{P as _,B as a,R as b};
