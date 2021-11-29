import{g as e,y as o,h as t,a as n,i as r,j as i,r as d,d as a,F as s,k as u,l,m as p,t as m,f as c}from"./app.49a262c4.js";import{t as f}from"./index.02bb6ec7.js";import{p as y}from"./index.b8050ceb.js";var b=e({name:"MdNumberKeyboardItem",props:{noTouch:{type:Boolean,default:!0}},emits:["press"],setup(e,{emit:t}){const n=o(!1);return{onTouchStart:function(o){e.noTouch&&(n.value=!0)},onTouchMove:function(){n.value&&(n.value=!1)},onTouchEnd:function(){n.value&&(n.value=!1,t("press"))},active:n}}});b.render=function(e,o){return n(),r("div",{class:["md-number-key-item",{active:e.active}],onTouchstart:o[1]||(o[1]=(...o)=>e.onTouchStart&&e.onTouchStart(...o)),onTouchmove:o[2]||(o[2]=(...o)=>e.onTouchMove&&e.onTouchMove(...o)),onTouchend:o[3]||(o[3]=(...o)=>e.onTouchEnd&&e.onTouchEnd(...o)),onTouchcancel:o[4]||(o[4]=(...o)=>e.onTouchEnd&&e.onTouchEnd(...o))},[i(e.$slots,"default")],34)};var h=e({name:"MdNumberKeyboardContainer",components:{MdNumberKeyboardItem:b},props:{type:{type:String,default:"professional"},disorder:{type:Boolean,default:!1},okText:{type:String,default:f("md.number_keyboard.confirm")},hideDot:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},textRender:{type:Function,default:null}},emits:["enter","confirm","hide","delete"],setup(e,{emit:o}){const n="delete",r="slidedown",i="confirm",d=t((()=>{let o=[1,2,3,4,5,6,7,8,9,0];return e.disorder&&function(e){let o,t,n;for(n=e.length;n;n--)o=Math.floor(Math.random()*n),t=e[n-1],e[n-1]=e[o],e[o]=t}(o),"professional"===e.type?(e.hideDot||o.splice(9,0,"."),e.isView?o.push(r):o.push("")):"simple"===e.type&&(o.splice(9,0,""),o.push(n)),e.textRender&&(o=o.map((o=>e.textRender(o)||o))),o}));return{DELETE_KEY:n,SLIDEDOWN_KEY:r,EMPTY_KEY:"",keyNumberList:d,CONFIRM_KEY:i,onNumberKeyClick:function(e){e===n?o("delete"):e===r?o("hide"):e===i?o("confirm"):o("enter",e)}}}}),E={class:"md-number-keyboard-container"},k={class:"keyboard-key"},v={key:0,class:"keyboard-operate"};h.render=function(e,o){const t=d("md-number-keyboard-item");return n(),r("div",E,[a("div",k,[(n(!0),r(s,null,u(e.keyNumberList,((o,i)=>(n(),r(t,{key:o,"no-touch":o!==e.EMPTY_KEY,class:["keyboard-key-item",{"large-item":11===e.keyNumberList.length&&9===i,"no-bg":o===e.EMPTY_KEY,slidedown:o===e.SLIDEDOWN_KEY,delete:o===e.DELETE_KEY}],onPress:t=>e.onNumberKeyClick(o)},{default:l((()=>[-1===[e.DELETE_KEY,e.SLIDEDOWN_KEY].indexOf(`${o}`)?(n(),r(s,{key:0},[p(m(o),1)],2112)):c("v-if",!0)])),_:2},1032,["no-touch","class","onPress"])))),128))]),"professional"===e.type?(n(),r("div",v,[a(t,{class:"keyboard-operate-item delete",onPress:o[1]||(o[1]=o=>e.onNumberKeyClick(e.DELETE_KEY))}),a(t,{class:"keyboard-operate-item confirm",onPress:o[2]||(o[2]=o=>e.onNumberKeyClick(e.CONFIRM_KEY))},{default:l((()=>[p(m(e.okText),1)])),_:1})])):c("v-if",!0)])};var T=e({name:"MdNumberKeyboard",components:{MdNumberKeyboardContainer:h,MdPopup:y},props:{visible:{type:Boolean,default:!1},type:{type:String,default:"professional"},isView:{type:Boolean,default:!1},disorder:{type:Boolean,default:!1},okText:{type:String,default:f("md.number_keyboard.confirm")},hideDot:{type:Boolean,default:!1},isHideConfirm:{type:Boolean,default:!0},textRender:{type:Function,default:null}},emits:["enter","confirm","hide","delete","update:visible"],setup:(e,{emit:o})=>({popupShow:t({get:()=>e.visible,set:e=>{o("update:visible",e)}}),onConfirm:function(){o("confirm"),e.isHideConfirm&&o("update:visible",!1)},onDelete:function(){o("delete")},onEnter:function(e){o("enter",e)},onHide:function(){o("update:visible",!1)}})});T.render=function(e,o){const t=d("md-number-keyboard-container"),s=d("md-popup");return e.isView?(n(),r(t,{key:0,type:e.type,disorder:e.disorder,"hide-dot":e.hideDot,"text-render":e.textRender,"ok-text":e.okText,onConfirm:e.onConfirm,onDelete:e.onDelete,onEnter:e.onEnter,onHide:e.onHide},null,8,["type","disorder","hide-dot","text-render","ok-text","onConfirm","onDelete","onEnter","onHide"])):(n(),r(s,{key:1,ref:"popup",modelValue:e.popupShow,"onUpdate:modelValue":o[1]||(o[1]=o=>e.popupShow=o),position:"bottom","has-mask":!1},{default:l((()=>[i(e.$slots,"default"),a(t,{type:e.type,disorder:e.disorder,"hide-dot":e.hideDot,"is-view":!0,"text-render":e.textRender,"ok-text":e.okText,onConfirm:e.onConfirm,onDelete:e.onDelete,onEnter:e.onEnter,onHide:e.onHide},null,8,["type","disorder","hide-dot","text-render","ok-text","onConfirm","onDelete","onEnter","onHide"])])),_:3},8,["modelValue"]))};var x=T;x.install=e=>{e.component(x.name,x)};var D=x;export{D as n};
