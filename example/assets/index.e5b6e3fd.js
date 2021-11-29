import{A as t,i as e}from"./animate.8ea3c80e.js";import{f as a}from"./index.f005cebb.js";import{n as r}from"./function.6b03fa63.js";import{d as n,m as o,B as i,q as s}from"./vendor.cf144a98.js";const l=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],u=["","拾","佰","仟"],p=["","万","亿","兆"],d=["角","分","厘","毫"];const f={value:{type:Number,default:void 0},precision:{type:Number,default:2},isRoundUp:{type:Boolean,default:!0},hasSeparator:{type:Boolean,default:!1},separator:{type:String,default:","},unit:{type:String,default:""},reverse:{type:Boolean,default:!1},transition:{type:Boolean,default:!1},isCapital:{type:Boolean,default:!1},duration:{type:Number,default:1e3}},m=e=>({doPrecision:t=>{const a=Number(`${t}e${e.precision}`),r=e.isRoundUp?Math.round(a):Math.floor(a);return Number(`${r}e-${e.precision}`).toFixed(e.precision)},doCapital:t=>function(t){let e,a,r,n,o="";if(""===t)return"";if("string"==typeof t&&(t=parseFloat(t)),t<0&&(e=!0,t=Math.abs(t)),t>=1e15)return"";if(0===t)return o=l[0]+"元整",o;if(-1===(t+="").indexOf(".")?(a=t,r=""):(n=t.split("."),a=n[0],r=n[1].substr(0,4)),parseInt(a,10)>0){let t=0;for(let e=0,r=a.length;e<r;e++){const n=a.substr(e,1),i=r-e-1,s=i/4,d=i%4;"0"===n?t++:(t>0&&(o+=l[0]),t=0,o+=l[parseInt(n)]+u[d]),0===d&&t<4&&(o+=p[s])}o+="元"}if(""!==r)for(let i=0,s=r.length;i<s;i++){const t=r.substr(i,1);"0"!==t&&(o+=l[Number(t)]+d[i])}return""===o?o+=l[0]+"元整":""===r&&(o+="整"),e&&(o=`负${o}`),o}(t),doFormat:t=>{if(!e.hasSeparator)return t;const r=t.split(".");return`${Number(r[0])<0?"-":""}${a(r[0].replace(/^\-/,""),e.separator)}.${r[1]}`},doAnimateDisplay:(a,n=0,o=0)=>{if(!e.transition)return a.value;return t.start((t=>{a.value=1!==t?n+(o-n)*t:o}),(t=>t),r,e.duration),a.value}});var c=n({name:"MdAmount",props:f,setup(t,{slots:a}){var r,n;const l=(null==(r=a.default)?void 0:r.call(a))||[],u=(null==(n=a.unit)?void 0:n.call(a))||[],{doFormat:p,doPrecision:d,doCapital:f,doAnimateDisplay:c}=m(t),v=()=>{var e,a;return t.value||(null==(a=null==(e=l[0])?void 0:e.children)?void 0:a.toString().trim())||0},b=o(0);t.transition&&i((()=>t.value),((t,e)=>{c(b,e,t)}),{immediate:!0});const y=()=>[t.unit||u,t.transition?null:t.isCapital?f(v()):e?p(d(v())):v(),t.transition?p(d(b.value+"")):null];return()=>s("span",{class:{"md-amount":!0,numerical:!t.isCapital}},t.reverse?y().reverse():y())}});c.install=t=>{t.component(c.name,c)};export{c as _};
