import{s as L}from"./index-cTIk5Ev7.js";import{n as U,B as j,p as q,c as r,e as t,l as a,a as l,x as s,v as u,d as A,i as N,j as F,U as I,A as m,w as o,b as T,J as _,h as $,m as y,t as w}from"./app-FLo-CGDf.js";import{s as D}from"./index-CC5tYxej.js";import{s as J}from"./index-CtePozXX.js";import{m as M}from"./index-CltI6m3I.js";import{d as G,a as V}from"./index.esm-C88Gxk8I.js";var H=U`
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
`,O={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Q=j.extend({name:"card",style:H,classes:O}),R={name:"BaseCard",extends:q,style:Q,provide:function(){return{$pcCard:this,$parentInstance:this}}},K={name:"Card",extends:R,inheritAttrs:!1};function W(e,i,f,k,B,C){return t(),r("div",s({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(t(),r("div",s({key:0,class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header")],16)):a("",!0),l("div",s({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(t(),r("div",s({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(t(),r("div",s({key:0,class:e.cx("title")},e.ptm("title")),[u(e.$slots,"title")],16)):a("",!0),e.$slots.subtitle?(t(),r("div",s({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[u(e.$slots,"subtitle")],16)):a("",!0)],16)):a("",!0),l("div",s({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"content")],16),e.$slots.footer?(t(),r("div",s({key:1,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):a("",!0)],16)],16)}K.render=W;const X={class:"flex justify-center items-center bg-surface-50 dark:bg-surface-800 min-h-screen p-4"},Y={class:"flex flex-col gap-4"},Z={class:"flex"},le=A({__name:"LoginPage",setup(e){const i=N(""),f=N(!1),k=F(),B=I({login:"",password:""}),C=M(G().shape({login:V().required("Login bo'sh bo'lmasligi kerak."),password:V().required("Parol bo'sh bo'lmasligi kerak.")}));function S(){i.value=""}async function P(b){var n,d;if(b.valid){const c=b.values;f.value=!0;try{await k.login(c)}catch(h){const v=h;i.value=((d=(n=v.response)==null?void 0:n.data)==null?void 0:d.message)??v.message??"Noma'lum xatolik yuz berdi"}finally{f.value=!1}}}return(b,n)=>{const d=J,c=D,h=_,v=K,E=L;return t(),r("div",X,[m(E,{"initial-values":B,resolver:T(C),onSubmit:P,autocomplete:"off"},{default:o(g=>[m(v,{class:"w-96 max-w-md"},{title:o(()=>n[0]||(n[0]=[y(" Kirish ")])),content:o(()=>{var x,z;return[l("div",Y,[l("aside",null,[m(d,{onKeydown:S,name:"login",type:"text",placeholder:"Login",fluid:"",autocomplete:"new-login"}),(x=g.login)!=null&&x.invalid?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>{var p;return[y(w((p=g.login.error)==null?void 0:p.message),1)]}),_:2},1024)):a("",!0)]),l("aside",null,[m(d,{onKeydown:S,name:"password",type:"password",placeholder:"Parol",autocomplete:"new-password",fluid:""}),(z=g.password)!=null&&z.invalid?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>{var p;return[y(w((p=g.password.error)==null?void 0:p.message),1)]}),_:2},1024)):a("",!0)]),i.value.length?(t(),$(c,{key:0,severity:"error",size:"small",variant:"simple"},{default:o(()=>[y(w(i.value),1)]),_:1})):a("",!0)])]}),footer:o(()=>[l("div",Z,[m(h,{loading:f.value,type:"submit",label:"Kirish",class:"w-full"},null,8,["loading"])])]),_:2},1024)]),_:1},8,["initial-values","resolver"])])}}});export{le as default};
