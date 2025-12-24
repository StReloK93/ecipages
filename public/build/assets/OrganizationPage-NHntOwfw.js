import{i as T,B,c as o,o as n,m as R,s as C,j as N,d as _,k as y,l as X,a as k,F as p,r as b,t as u,g as v,w as x,h as S,n as j,u as g,b as h,p as G}from"./app-Dqq4a65M.js";import{u as w}from"./useFetch-D45EbHv3.js";import{_ as $}from"./TabButton.vue_vue_type_script_setup_true_lang-BdTixBLv.js";import{O}from"./OrganizationRepo-SAoGxYYw.js";var V=T`
    .p-skeleton {
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,F={root:{position:"relative"}},I={root:function(t){var r=t.props;return["p-skeleton p-component",{"p-skeleton-circle":r.shape==="circle","p-skeleton-animation-none":r.animation==="none"}]}},L=B.extend({name:"skeleton",style:V,classes:I,inlineStyles:F}),A={name:"BaseSkeleton",extends:C,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:L,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function D(e,t,r){return(t=E(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=K(e,"string");return f(t)=="symbol"?t:t+""}function K(e,t){if(f(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(f(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var z={name:"Skeleton",extends:A,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return N(D({},this.shape,this.shape))}}},M=["data-p"];function U(e,t,r,a,c,s){return n(),o("div",R({class:e.cx("root"),style:[e.sx("root"),s.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":s.dataP}),null,16,M)}z.render=U;const P="groups";function q(){return w({url:`${P}`})}function H(e,t){return w({url:`${P}/by/${e}`,onLoad:t})}const J={index:q,getGroupsByTransportId:H},Q={class:"flex flex-grow"},W={class:"p-4 flex-grow bg-gray-50 dark:bg-zinc-900 border-l border-gray-300 dark:border-zinc-600"},Y={class:"flex flex-col gap-0.5 items-end py-4 border-l border-gray-300 dark:border-zinc-600 min-w-40"},Z=_({__name:"ActiveTransportTab",props:{transports:{}},setup(e){const t=e,r=y(t.transports.content[0]),a=y(null);function c(s){a.value=null,r.value=s,J.getGroupsByTransportId(r.value.id||0,({data:d})=>{a.value=d})}return X(()=>{c(r.value)}),(s,d)=>(n(),o("main",Q,[k("aside",W,[(n(!0),o(p,null,b(a.value,i=>(n(),o("main",null,u(i.tabel)+" "+u(i.change)+" "+u(i.active_from),1))),256))]),k("nav",Y,[(n(!0),o(p,null,b(t.transports.content,i=>(n(),v($,{class:"w-full text-left",direction:"left",onClick:m=>c(i),active:r.value.garage_number==i.garage_number},{default:x(()=>[S(u(i.transport_list.name)+" № - "+u(i.garage_number),1)]),_:2},1032,["onClick","active"]))),256))])]))}}),ee={key:0,name:"tabs",class:"flex flex-col"},te={class:"flex gap-0.5 border-b border-b-gray-300 dark:border-zinc-600"},re={key:1,class:"grid-rows-[28px_28px_1fr] grid gap-0.5"},le=_({__name:"OrganizationPage",props:["id"],setup(e){const t=e,r=y(1),{currentTransports:a,fetchData:c,isLoading:s}=O.transports({id:t.id});return j(()=>t.id,d=>c({id:d})),(d,i)=>{const m=z;return g(s)?(n(),o("main",re,[h(m,{"border-radius":"2px",width:"260px",height:"28px"}),h(m,{"border-radius":"2px",height:"28px"}),h(m,{"border-radius":"2px",height:"100%"})])):(n(),o("section",ee,[k("nav",te,[(n(!0),o(p,null,b(g(a),l=>(n(),v($,{active:r.value==l.key,onClick:ne=>r.value=l.key},{default:x(()=>[S(u(l.title),1)]),_:2},1032,["active","onClick"]))),256))]),(n(!0),o(p,null,b(g(a),l=>(n(),o(p,null,[l.key==r.value?(n(),v(Z,{key:0,transports:l},null,8,["transports"])):G("",!0)],64))),256))]))}}});export{le as default};
