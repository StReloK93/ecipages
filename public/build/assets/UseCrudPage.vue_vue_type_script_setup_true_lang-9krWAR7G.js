import{i as T,B as j,g as V,K as X,h as k,e as r,w as b,c as h,l as g,n as m,x as c,T as J,L as G,m as w,F,a as C,A as q,t as R,p as I,M as H,N as W,J as _,O as ee,j as M,k as te,P as ae,Q as ne,R as oe,Z as P,S as le,d as A,q as K,U as ie,r as U,D as Z,b as D,V as re,u as se,o as de}from"./app-Ca4-ZskA.js";import{s as pe}from"./index-iy7iGWJO.js";import{s as ue}from"./index-C0PRBhdl.js";import{m as ce}from"./index-CltI6m3I.js";import{d as fe}from"./index.esm-C88Gxk8I.js";import{a as me,s as be}from"./index-DC8FuyuU.js";var he=T`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`,ve={mask:function(t){var a=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{pointerEvents:"auto"}},we={mask:function(t){var a=t.instance,o=t.props,s=["left","right","top","bottom"],n=s.find(function(f){return f===o.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ye=j.extend({name:"drawer",style:he,classes:we,inlineStyles:ve}),ke={name:"BaseDrawer",extends:M,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ye,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function E(e,t,a){return(t=ge(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(e){var t=Ce(e,"string");return S(t)=="symbol"?t:t+""}function Ce(e,t){if(S(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(S(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N={name:"Drawer",extends:ke,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&P.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&P.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&le(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&P.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&oe(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ne()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ae()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return te(E(E(E({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:ee},components:{Button:_,Portal:W,TimesIcon:H}},Le=["data-p"],$e=["aria-modal","data-p"];function xe(e,t,a,o,s,n){var f=V("Button"),u=V("Portal"),y=X("focustrap");return r(),k(u,null,{default:b(function(){return[s.containerVisible?(r(),h("div",m({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[c(J,m({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:b(function(){return[e.visible?G((r(),h("div",m({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),h(F,{key:1},[C("div",m({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{class:q(e.cx("title"))},function(){return[e.header?(r(),h("div",m({key:0,class:e.cx("title")},e.ptm("title")),R(e.header),17)):g("",!0)]}),e.showCloseIcon?w(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[c(f,m({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:b(function(x){return[w(e.$slots,"closeicon",{},function(){return[(r(),k(I(e.closeIcon?"span":"TimesIcon"),m({class:[e.closeIcon,x.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):g("",!0)],16),C("div",m({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(r(),h("div",m({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):g("",!0)],64))],16,$e)),[[y]]):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Le)):g("",!0)]}),_:3})}N.render=xe;var Be=T`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }
`,Se={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},De=j.extend({name:"floatlabel",style:Be,classes:Se}),Re={name:"BaseFloatLabel",extends:M,props:{variant:{type:String,default:"over"}},style:De,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Y={name:"FloatLabel",extends:Re,inheritAttrs:!1};function Pe(e,t,a,o,s,n){return r(),h("span",m({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}Y.render=Pe;const Ee={class:"flex flex-col"},Ie=["for"],Ke={class:"flex gap-3 pb-4 -mb-4"},Fe=A({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const o=K(),s=a,n=K(!1),f=e,u=async i=>{i.valid&&(n.value=!0,console.log(i),await f.submit(i.values).finally(()=>{n.value=!1}),s("close"))},y=ie(f.inputConfigs.reduce((i,l)=>(i[l.name]=l.value,i),{})),x=f.inputConfigs.reduce((i,l)=>(l.schema&&(i[l.name]=l.schema),i),{}),d=ce(fe().shape(x));return t({instance:o}),(i,l)=>{const v=Y,L=ue,B=_,$=pe;return r(),k($,{ref_key:"instance",ref:o,"initial-values":y,resolver:D(d),onSubmit:u,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:b(O=>[w(i.$slots,"default"),C("div",Ee,[(r(!0),h(F,null,U(i.inputConfigs,(p,Q)=>{var z;return r(),h("main",{key:Q,class:q(p.class)},[p.placeholder?(r(),k(v,{key:0,variant:"on"},{default:b(()=>[(r(),k(I(p.component),m({input:p,name:p.name,id:p.name,ref_for:!0},p.props),null,16,["input","name","id"])),C("label",{for:p.name},R(p.placeholder),9,Ie)]),_:2},1024)):(r(),k(I(p.component),m({key:1,input:p,name:p.name,ref_for:!0},p.props),null,16,["input","name"])),(z=O[p.name])!=null&&z.invalid?(r(),k(L,{key:2,severity:"error",size:"small",variant:"simple"},{default:b(()=>[Z(R(O[p.name].error.message),1)]),_:2},1024)):g("",!0)],2)}),128))]),l[1]||(l[1]=C("div",{class:"grow"},null,-1)),C("footer",Ke,[c(B,{type:"button",size:"small",severity:"secondary",onClick:l[0]||(l[0]=p=>s("close")),label:"Bekor qilish",fluid:!0}),c(B,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),_e={class:"mb-1 text-end"},Ae=A({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,o)=>{const s=_,n=be,f=me;return r(),h("div",null,[C("main",_e,[c(s,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:o[0]||(o[0]=u=>a.$emit("create"))})]),c(f,{size:"small",value:t.data,dataKey:"id"},{default:b(()=>[c(n,{style:{width:"50px"},header:"#"},{body:b(({data:u,index:y})=>[Z(R(y+1),1)]),_:1}),(r(!0),h(F,null,U(t.columns,u=>(r(),k(n,{key:u.field,field:u.field,header:u.header},null,8,["field","header"]))),128)),w(a.$slots,"column"),c(n,{style:{width:"50px"}},{body:b(({data:u})=>[c(s,{icon:"pi pi-pencil",type:"button",onClick:y=>a.$emit("update",u),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),c(n,{style:{width:"50px"}},{body:b(({data:u})=>[c(s,{icon:"pi pi-trash",type:"button",onClick:y=>a.$emit("delete",u),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Oe(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ue=A({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=re(),a=e,o=K(!1);var s;const{data:n,execute:f}=se(a.entityRepo.index);async function u(){s=async d=>{await a.entityRepo.store(d),await f(),o.value=!1},await Promise.all(a.entityRepo.inputs.map(async d=>(d.generateProps&&await d.generateProps(),d.value=void 0,d))).finally(()=>{o.value=!0})}const y=d=>{t.require(Oe(d.name,async()=>{var l,v;await a.entityRepo.destroy(d.id);const i=(l=n.value)==null?void 0:l.findIndex(L=>L.id==d.id);i>-1&&((v=n.value)==null||v.splice(i,1))}))};async function x(d){s=async l=>{var B;const{data:v}=await a.entityRepo.update(d.id,l),L=(B=n.value)==null?void 0:B.find($=>$.id==d.id);if(L)for(const $ in v)L[$]=v[$];o.value=!1};const{data:i}=await a.entityRepo.show(d.id);await Promise.all(a.entityRepo.inputs.map(async l=>(l.generateProps&&await l.generateProps(),l.value=i?i[l.name]:void 0,l))).finally(()=>{o.value=!0})}return de(()=>{f()}),(d,i)=>{const l=N;return r(),h("div",null,[c(l,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:o.value,"onUpdate:visible":i[1]||(i[1]=v=>o.value=v),position:"right"},{default:b(()=>[c(Fe,{submit:D(s),onClose:i[0]||(i[0]=v=>o.value=!1),"input-configs":a.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),D(n)?(r(),k(Ae,{key:0,columns:a.entityRepo.columns,data:D(n),onUpdate:x,onDelete:y,onCreate:u},{column:b(()=>[w(d.$slots,"column")]),_:3},8,["columns","data"])):g("",!0)])}}});export{Ue as _};
