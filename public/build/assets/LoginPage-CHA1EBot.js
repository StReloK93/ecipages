import{s as E}from"./index-B-cTd_vU.js";import{i as L,B as j,j as D,c as r,e as t,l as a,a as l,n as s,m as u,d as F,q as K,v as I,G as T,y as m,w as o,b as U,K as _,h as $,D as g,t as w}from"./app-dH86ap2f.js";import{s as A}from"./index-3ogy8MAf.js";import{s as G}from"./index-BmilbAHz.js";import{m as M}from"./index-CltI6m3I.js";import{d as H,a as N}from"./index.esm-C88Gxk8I.js";var J=L`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,O={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Q=j.extend({name:"card",style:J,classes:O}),R={name:"BaseCard",extends:D,style:Q,provide:function(){return{$pcCard:this,$parentInstance:this}}},V={name:"Card",extends:R,inheritAttrs:!1};function W(e,i,f,k,B,C){return t(),r("div",s({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(t(),r("div",s({key:0,class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header")],16)):a("",!0),l("div",s({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(t(),r("div",s({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(t(),r("div",s({key:0,class:e.cx("title")},e.ptm("title")),[u(e.$slots,"title")],16)):a("",!0),e.$slots.subtitle?(t(),r("div",s({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[u(e.$slots,"subtitle")],16)):a("",!0)],16)):a("",!0),l("div",s({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"content")],16),e.$slots.footer?(t(),r("div",s({key:1,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):a("",!0)],16)],16)}V.render=W;const X={class:"flex justify-center items-center bg-surface-50 dark:bg-surface-800 min-h-screen p-4"},Y={class:"flex flex-col gap-4"},Z={class:"flex"},le=F({__name:"LoginPage",setup(e){const i=K(""),f=K(!1),k=I(),B=T({login:"",password:""}),C=M(H().shape({login:N().required("Login bo'sh bo'lmasligi kerak."),password:N().required("Parol bo'sh bo'lmasligi kerak.")}));function S(){i.value=""}async function P(b){var n,d;if(b.valid){const c=b.values;f.value=!0;try{await k.login(c)}catch(h){const v=h;i.value=((d=(n=v.response)==null?void 0:n.data)==null?void 0:d.message)??v.message??"Noma'lum xatolik yuz berdi"}finally{f.value=!1}}}return(b,n)=>{const d=G,c=A,h=_,v=V,q=E;return t(),r("div",X,[m(q,{"initial-values":B,resolver:U(C),onSubmit:P,autocomplete:"off"},{default:o(y=>[m(v,{class:"w-96 max-w-md"},{title:o(()=>n[0]||(n[0]=[g(" Kirish ")])),content:o(()=>{var z,x;return[l("div",Y,[l("aside",null,[m(d,{onKeydown:S,name:"login",type:"text",placeholder:"Login",fluid:"",autocomplete:"new-login"}),(z=y.login)!=null&&z.invalid?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>{var p;return[g(w((p=y.login.error)==null?void 0:p.message),1)]}),_:2},1024)):a("",!0)]),l("aside",null,[m(d,{onKeydown:S,name:"password",type:"password",placeholder:"Parol",autocomplete:"new-password",fluid:""}),(x=y.password)!=null&&x.invalid?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>{var p;return[g(w((p=y.password.error)==null?void 0:p.message),1)]}),_:2},1024)):a("",!0)]),i.value.length?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>[g(w(i.value),1)]),_:1})):a("",!0)])]}),footer:o(()=>[l("div",Z,[m(h,{loading:f.value,type:"submit",label:"Kirish",class:"w-full"},null,8,["loading"])])]),_:2},1024)]),_:1},8,["initial-values","resolver"])])}}});export{le as default};
