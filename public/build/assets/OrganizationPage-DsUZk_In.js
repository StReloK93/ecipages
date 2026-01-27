import{h as F,B as q,s as Z,i as M,j as U,c as a,k,f as r,l as L,g as w,m as S,n as X,t as _,d as O,p as ee,q as C,o as N,a as f,F as g,r as x,u as R,v as G,x as te,w as J,y as H,z as re,A as oe,C as E}from"./app-Fni99Aas.js";import{a as D,u as A}from"./index-DI2rPmbe.js";import{_ as ne}from"./SmenaViewer.vue_vue_type_script_setup_true_lang-CDzP4CSq.js";import{T as ae}from"./TransportListRepo-CZVgFRlV.js";import{C as ie}from"./ChangeRepo-BONP7Fl7.js";import{O as se}from"./OrganizationRepo-Iz6WsHXN.js";import"./index-B8t7bGv7.js";import"./PrimeInputs-DmhZj6qO.js";var le=F`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,ce={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},de=q.extend({name:"chip",style:le,classes:ce}),pe={name:"BaseChip",extends:M,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:de,provide:function(){return{$pcChip:this,$parentInstance:this}}},Q={name:"Chip",extends:pe,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return U({removable:this.removable})}},components:{TimesCircleIcon:Z}},ue=["aria-label","data-p"],me=["src"];function fe(e,t,o,n,u,c){return u.visible?(r(),a("div",S({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":c.dataP}),[L(e.$slots,"default",{},function(){return[e.image?(r(),a("img",S({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,me)):e.$slots.icon?(r(),w(X(e.$slots.icon),S({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),a("span",S({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):k("",!0),e.label?(r(),a("div",S({key:3,class:e.cx("label")},e.ptm("label")),_(e.label),17)):k("",!0)]}),e.removable?L(e.$slots,"removeicon",{key:0,removeCallback:c.close,keydownCallback:c.onKeydown},function(){return[(r(),w(X(e.removeIcon?"span":"TimesCircleIcon"),S({class:[e.cx("removeIcon"),e.removeIcon],onClick:c.close,onKeydown:c.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):k("",!0)],16,ue)):k("",!0)}Q.render=fe;var he=F`
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
`,ge={root:{position:"relative"}},be={root:function(t){var o=t.props;return["p-skeleton p-component",{"p-skeleton-circle":o.shape==="circle","p-skeleton-animation-none":o.animation==="none"}]}},ve=q.extend({name:"skeleton",style:he,classes:be,inlineStyles:ge}),ye={name:"BaseSkeleton",extends:M,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:ve,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function ke(e,t,o){return(t=_e(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _e(e){var t=xe(e,"string");return j(t)=="symbol"?t:t+""}function xe(e,t){if(j(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t);if(j(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var W={name:"Skeleton",extends:ye,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return U(ke({},this.shape,this.shape))}}},we=["data-p"];function $e(e,t,o,n,u,c){return r(),a("div",S({class:e.cx("root"),style:[e.sx("root"),c.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":c.dataP}),null,16,we)}W.render=$e;const P="groups",K={index(){return D.get(`${P}`)},byTransport(e){return D.get(`${P}/transport/${e}`)},show(e){return D.get(`${P}/${e}`)},async store(e){return await D.post(`${P}`,e)},update(e,t){return D.put(`${P}/${e}`,t)},destroy(e){return D.delete(`${P}/${e}`)}},Se={class:"font-sans"},Ce={class:"flex gap-5"},Te={class:"w-1/3 rounded-xl h-fit"},ze={class:"flex flex-col gap-2"},Be=["onDragstart"],De={class:"font-medium text-gray-700"},Pe={class:"w-2/3 grid grid-cols-1 gap-4"},Re={class:"flex justify-between items-center border-b border-gray-100 py-3 px-4"},Ie={class:"font-semibold text-gray-600 text-sm"},je={class:"flex flex-grow"},Oe=["onDragover","onDrop"],Ee={class:"w-6 h-6 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center text-sm absolute top-2 right-2"},Ke={key:0,class:"flex flex-wrap gap-2 p-3 items-start"},Le=O({__name:"DragBlock",props:{list:{},lavozims:{},transport:{},changes:{}},setup(e){const t=ee(),o=C(),n=e,{execute:u,data:c}=A(K.byTransport);function $(p){const i=n.changes.find(m=>m.id==p);return i?i.name:null}const T=new Set(Object.values(n.transport.smena.formula.first)),s=C(null),v=C(),y=(p,i)=>{s.value=i,p.dataTransfer&&(p.dataTransfer.effectAllowed="copy",p.dataTransfer.setData("text/plain",JSON.stringify(i)))},h=(p,i)=>{o.value!=i&&(o.value=i)},I=async(p,i,m)=>{var d;o.value=null;const l={transport_id:n.transport.id,change_id:m,employe_id:(d=s.value)==null?void 0:d.id,lavozim_id:i.id};if(s.value){if(i[m].some(z=>{var B;return z.id===((B=s.value)==null?void 0:B.id)}))return;console.log(s.value.name),await K.store(l).then(z=>{i[m].push(z.data)}).catch(z=>{var B;t.add({severity:"error",summary:`${(B=s.value)==null?void 0:B.name} bu smenada  mavjud.`,detail:"Bir kishi bir smenada ikki lavozimda ishlay olmaydi!",life:5e3})}),s.value=null}},V=(p,i,m)=>{K.destroy(p).then(l=>{i[m].splice(m,1)})};return N(async()=>{await u(n.transport.id),v.value=n.lavozims.map(p=>(T.forEach(i=>{var l;const m=(l=c.value)==null?void 0:l.filter(d=>d.change_id==i&&d.lavozim_id==p.id&&d.transport_id==n.transport.id);p[i]=[],m==null||m.forEach(d=>{p[i].push(d)})}),p))}),(p,i)=>{const m=Q;return r(),a("div",Se,[f("div",Ce,[f("div",Te,[f("div",ze,[(r(!0),a(g,null,x(n.list.employes,l=>(r(),a("div",{key:l.id,draggable:"true",onDragstart:d=>y(d,l),class:"rounded-3xl py-2 px-4 bg-white border border-surface-100 cursor-grab active:cursor-grabbing hover:bg-blue-50 hover:border-blue-300 transition-all flex items-center gap-3"},[f("span",De,_(l.name)+" "+_(l.razryad),1),i[1]||(i[1]=f("i",{class:"pi pi-clone ml-auto text-sky-600 text-sm mr-2"},null,-1))],40,Be))),128))])]),f("div",Pe,[(r(!0),a(g,null,x(v.value,l=>(r(),a("div",{key:l.id,class:"min-h-[150px] border border-surface-100 rounded-xl flex flex-col bg-white"},[f("div",Re,[f("span",Ie,_(l.name),1)]),f("main",je,[(r(!0),a(g,null,x(R(T),d=>(r(),a("div",{onDragover:te(b=>h(b,l[d]),["prevent"]),onDragleave:i[0]||(i[0]=b=>o.value=null),onDrop:b=>I(b,l,d),class:G([{"bg-surface-50":o.value==l[d]},"basis-0 flex-grow border-l first:border-0 border-surface-100 h-full relative transition-all"])},[f("span",Ee,_($(d)),1),l[d].length>0?(r(),a("div",Ke,[(r(!0),a(g,null,x(l[d],(b,z)=>(r(),w(m,{onRemove:B=>V(b.id,l[d],z),key:b,label:b.employe.name,class:"text-xs!",removable:""},null,8,["onRemove","label"]))),128))])):k("",!0)],42,Oe))),256))])]))),128))])])])}}}),Ne=(e,t)=>{const o=e.__vccOpts||e;for(const[n,u]of t)o[n]=u;return o},Ae=Ne(Le,[["__scopeId","data-v-fae28853"]]),Y=O({__name:"TabButton",props:{active:{type:Boolean},direction:{default:"bottom"}},setup(e){const t=e,o={left:{border:"border-l hover:border-l-gray-500 dark:hover:border-l-gray-300",active:"!border-l-gray-500 dark:!border-l-gray-300",different:"right-px"},right:{border:"border-r hover:border-r-gray-500 dark:hover:border-r-gray-300",active:"!border-r-gray-500 dark:!border-r-gray-300",different:"left-px"},top:{border:"border-t hover:border-t-gray-500 dark:hover:border-t-gray-300",active:"!border-t-gray-500 dark:!border-t-gray-300",different:"bottom-px"},bottom:{border:"border-b hover:border-b-gray-500 dark:hover:border-b-gray-300",active:"!border-b-gray-500 dark:!border-b-gray-300",different:"top-px"}};return(n,u)=>(r(),a("button",{class:G(["py-1 text-sm px-3 border-transparent cursor-pointer relative",[{"font-semibold":t.active},{[o[t.direction].active]:t.active},o[t.direction].border,o[t.direction].different]])},[L(n.$slots,"default")],2))}}),Ve={class:"flex flex-grow"},Xe={class:"flex flex-col gap-0.5 items-end py-8 min-w-40"},Fe={class:"p-8 flex-grow bg-gray-50/80 dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-600 rounded-4xl"},qe=O({__name:"ActiveTransportTab",props:{transport_type:{}},setup(e){const t=e,o=C([]),n=C(null),u=C(null),{execute:c,data:$}=A(ie.index);async function T(s,v){u.value=null,n.value=null,await re(),n.value=s,u.value=v}return N(async()=>{const{data:s}=await ae.byTransportType(t.transport_type.id);await c(),o.value=s,s.length>0&&s[0].transports[0]&&T(s[0].transports[0],s[0])}),(s,v)=>(r(),a("main",Ve,[f("nav",Xe,[(r(!0),a(g,null,x(o.value,y=>(r(),a(g,null,[(r(!0),a(g,null,x(y.transports,h=>{var I;return r(),w(Y,{class:"w-full text-left",direction:"right",onClick:V=>T(h,y),active:((I=n.value)==null?void 0:I.id)==h.id},{default:J(()=>[H(_(h.garage_number)+" "+_(y.name),1)]),_:2},1032,["onClick","active"])}),256))],64))),256))]),f("aside",Fe,[u.value&&n.value&&R($)?(r(),w(Ae,{key:0,class:"mb-4",changes:R($),list:u.value,lavozims:t.transport_type.lavozims,transport:n.value},null,8,["changes","list","lavozims","transport"])):k("",!0),f("main",null,[n.value?(r(),w(ne,{key:0,transport:n.value},null,8,["transport"])):k("",!0)])])]))}}),Me={key:0,name:"tabs",class:"flex flex-col p-5"},Ue={class:"flex gap-0.5 dark:border-zinc-600 pl-48"},Ge={key:1,class:"grid-rows-[28px_28px_1fr] grid gap-0.5 p-8"},rt=O({__name:"OrganizationPage",props:["id"],setup(e){const t=e,o=C(null),{execute:n,isLoading:u,data:c}=A(se.transports);return oe(()=>t.id,$=>n({id:$})),N(async()=>{await n({id:t.id}),c.value&&c.value.transport_types[0]&&(o.value=c.value.transport_types[0].id)}),($,T)=>{var v,y;const s=W;return R(u)?(r(),a("main",Ge,[E(s,{"border-radius":"2px",width:"260px",height:"28px"}),E(s,{"border-radius":"2px",height:"28px"}),E(s,{"border-radius":"2px",height:"100%"})])):(r(),a("section",Me,[f("nav",Ue,[(r(!0),a(g,null,x((v=R(c))==null?void 0:v.transport_types,h=>(r(),w(Y,{class:"text-xl!",active:o.value==h.id,onClick:I=>o.value=h.id},{default:J(()=>[H(_(h.name),1)]),_:2},1032,["active","onClick"]))),256))]),(r(!0),a(g,null,x((y=R(c))==null?void 0:y.transport_types,h=>(r(),a(g,null,[h.id==o.value?(r(),w(qe,{key:0,transport_type:h},null,8,["transport_type"])):k("",!0)],64))),256))]))}}});export{rt as default};
