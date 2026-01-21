import{h as L,B as T,c as o,i as f,f as n,g,m as s,n as R,j as O,t as x,e as $,a as h,F as y,r as _,k as b,l as N,s as C,p as D,d as I,q as w,o as X,w as S,v as j,x as E,u as k}from"./app-C4GmJSBZ.js";import{s as F,u as q}from"./index-BGY1eZ2G.js";import{T as K}from"./TransportListRepo-CIY4awZL.js";import{O as G}from"./OrganizationRepo-Co_rM9b_.js";import"./PrimeInputs-BpjKOdBv.js";var H=L`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,J={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var r=t.instance;return["p-breadcrumb-item",{"p-disabled":r.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Q=T.extend({name:"breadcrumb",style:H,classes:J}),W={name:"BaseBreadcrumb",extends:C,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Q,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},A={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:C,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,r=t.to,i=t.url,l=typeof window<"u"?window.location.pathname:"";return r===l||i===l?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:s({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(i){return t.onClick(i)}},this.ptm("itemLink",this.ptmOptions)),icon:s({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:s({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Y=["href","target","aria-current"];function Z(e,t,r,i,l,a){return a.visible()?(n(),o("li",s({key:0,class:[e.cx("item"),r.item.class]},e.ptm("item",a.ptmOptions)),[r.templates.item?(n(),g(O(r.templates.item),{key:1,item:r.item,label:a.label(),props:a.getMenuItemProps},null,8,["item","label","props"])):(n(),o("a",s({key:0,href:r.item.url||"#",class:e.cx("itemLink"),target:r.item.target,"aria-current":a.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},e.ptm("itemLink",a.ptmOptions)),[r.templates&&r.templates.itemicon?(n(),g(O(r.templates.itemicon),{key:0,item:r.item,class:R(e.cx("itemIcon",a.ptmOptions))},null,8,["item","class"])):r.item.icon?(n(),o("span",s({key:1,class:[e.cx("itemIcon"),r.item.icon]},e.ptm("itemIcon",a.ptmOptions)),null,16)):f("",!0),r.item.label?(n(),o("span",s({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",a.ptmOptions)),x(a.label()),17)):f("",!0)],16,Y))],16)):f("",!0)}A.render=Z;var M={name:"Breadcrumb",extends:W,inheritAttrs:!1,components:{BreadcrumbItem:A,ChevronRightIcon:F}};function ee(e,t,r,i,l,a){var c=$("BreadcrumbItem"),d=$("ChevronRightIcon");return n(),o("nav",s({class:e.cx("root")},e.ptmi("root")),[h("ol",s({class:e.cx("list")},e.ptm("list")),[e.home?(n(),g(c,s({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):f("",!0),(n(!0),o(y,null,_(e.model,function(u,m){return n(),o(y,{key:u.label+"_"+m},[e.home||m!==0?(n(),o("li",s({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[N(e.$slots,"separator",{},function(){return[b(d,s({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):f("",!0),b(c,{item:u,index:m,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}M.render=ee;var te=L`
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
`,re={root:{position:"relative"}},ae={root:function(t){var r=t.props;return["p-skeleton p-component",{"p-skeleton-circle":r.shape==="circle","p-skeleton-animation-none":r.animation==="none"}]}},ne=T.extend({name:"skeleton",style:te,classes:ae,inlineStyles:re}),ie={name:"BaseSkeleton",extends:C,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ne,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function oe(e,t,r){return(t=se(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e){var t=le(e,"string");return v(t)=="symbol"?t:t+""}function le(e,t){if(v(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(v(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var U={name:"Skeleton",extends:ie,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return D(oe({},this.shape,this.shape))}}},de=["data-p"];function me(e,t,r,i,l,a){return n(),o("div",s({class:e.cx("root"),style:[e.sx("root"),a.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":a.dataP}),null,16,de)}U.render=me;const V=I({__name:"TabButton",props:{active:{type:Boolean},direction:{default:"bottom"}},setup(e){const t=e,r={left:{border:"border-l hover:border-l-gray-800 dark:hover:border-l-gray-300",active:"!border-l-gray-800 dark:!border-l-gray-300",different:"right-px"},right:{border:"border-r hover:border-r-gray-800 dark:hover:border-r-gray-300",active:"!border-r-gray-800 dark:!border-r-gray-300",different:"left-px"},top:{border:"border-t hover:border-t-gray-800 dark:hover:border-t-gray-300",active:"!border-t-gray-800 dark:!border-t-gray-300",different:"bottom-px"},bottom:{border:"border-b hover:border-b-gray-800 dark:hover:border-b-gray-300",active:"!border-b-gray-800 dark:!border-b-gray-300",different:"top-px"}};return(i,l)=>(n(),o("button",{class:R(["py-1 text-sm px-3 border-transparent cursor-pointer relative",[{"font-semibold":t.active},{[r[t.direction].active]:t.active},r[t.direction].border,r[t.direction].different]])},[N(i.$slots,"default")],2))}}),ce={class:"flex flex-grow"},ue={class:"p-4 flex-grow bg-gray-50 dark:bg-zinc-900 border-l border-gray-300 dark:border-zinc-600"},pe={class:"flex flex-col gap-0.5 items-end py-4 border-l border-gray-300 dark:border-zinc-600 min-w-40"},be=I({__name:"ActiveTransportTab",props:{transport_type:{}},setup(e){const t=e,r=w([]),i=w(null);async function l(a){i.value=a}return X(async()=>{const{data:a}=await K.byTransportType(t.transport_type.id,t.transport_type.organization_id);r.value=a}),(a,c)=>(n(),o("main",ce,[h("aside",ue,[h("main",null,x(a.transport_type),1)]),h("nav",pe,[(n(!0),o(y,null,_(r.value,d=>{var u;return n(),g(V,{class:"w-full text-left",direction:"left",onClick:m=>l(d),active:((u=i.value)==null?void 0:u.id)==d.id},{default:S(()=>[j(x(d.name),1)]),_:2},1032,["onClick","active"])}),256))])]))}}),fe={key:0,name:"tabs",class:"flex flex-col p-8"},he={class:"flex gap-0.5 border-b border-b-gray-300 dark:border-zinc-600"},ye={key:1,class:"grid-rows-[28px_28px_1fr] grid gap-0.5 p-8"},Se=I({__name:"OrganizationPage",props:["id"],setup(e){const t=e,r=w(null),{execute:i,isLoading:l,data:a}=q(G.transports);return E(()=>t.id,c=>i({id:c})),X(async()=>{await i({id:t.id}),a.value&&a.value.transport_types[0]&&(r.value=a.value.transport_types[0].id)}),(c,d)=>{var B,P,z;const u=M,m=U;return k(l)?(n(),o("main",ye,[b(m,{"border-radius":"2px",width:"260px",height:"28px"}),b(m,{"border-radius":"2px",height:"28px"}),b(m,{"border-radius":"2px",height:"100%"})])):(n(),o("section",fe,[b(u,{model:[{label:"Bosh sahifa",command:()=>c.$router.push({name:"home"})},{label:(B=k(a))==null?void 0:B.short_name}],class:"bg-transparent! p-0! mb-2"},{separator:S(()=>d[0]||(d[0]=[h("i",{class:"pi pi-angle-right text-sm!"},null,-1)])),_:1},8,["model"]),h("nav",he,[(n(!0),o(y,null,_((P=k(a))==null?void 0:P.transport_types,p=>(n(),g(V,{active:r.value==p.id,onClick:ge=>r.value=p.id},{default:S(()=>[j(x(p.name),1)]),_:2},1032,["active","onClick"]))),256))]),(n(!0),o(y,null,_((z=k(a))==null?void 0:z.transport_types,p=>(n(),o(y,null,[p.id==r.value?(n(),g(be,{key:0,transport_type:p},null,8,["transport_type"])):f("",!0)],64))),256))]))}}});export{Se as default};
