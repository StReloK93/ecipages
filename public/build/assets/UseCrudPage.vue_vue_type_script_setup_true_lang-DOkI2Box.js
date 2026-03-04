import{s as J}from"./index-Bcum9pbt.js";import{D as O,E as T,g as N,J as W,h as y,e as r,w as b,c,y as C,I as p,l as m,T as ee,K as te,C as g,F as P,a as $,n as U,t as D,L as z,M as ae,N as ne,B as j,O as oe,G as V,H as Z,P as re,Q as ie,R as le,Z as K,S as se,d as q,i as F,v as de,r as A,q as Y,b as x,U as ce,u as ue,o as pe}from"./app-DEvC9bIn.js";import{s as fe}from"./index-C4hy_-20.js";import{s as me}from"./index-CgjzbSKX.js";import{m as be}from"./index-CltI6m3I.js";import{e as he}from"./index.esm-DBaFRLx_.js";import{a as ye,s as ve}from"./index-CZCaFx04.js";var ge=O`
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
`,we={mask:function(t){var a=t.position,i=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:i?"auto":"none"}},root:{pointerEvents:"auto"}},ke={mask:function(t){var a=t.instance,i=t.props,s=["left","right","top","bottom"],n=s.find(function(h){return h===i.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":i.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ce=T.extend({name:"drawer",style:ge,classes:ke,inlineStyles:we}),$e={name:"BaseDrawer",extends:V,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Ce,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function _(e,t,a){return(t=Le(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Le(e){var t=Se(e,"string");return R(t)=="symbol"?t:t+""}function Se(e,t){if(R(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(R(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Q={name:"Drawer",extends:$e,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&K.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&K.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&se(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&K.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&le(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ie()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&re()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return Z(_(_(_({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:oe},components:{Button:j,Portal:ne,TimesIcon:ae}},Be=["data-p"],xe=["aria-modal","data-p"];function Pe(e,t,a,i,s,n){var h=N("Button"),L=N("Portal"),d=W("focustrap");return r(),y(L,null,{default:b(function(){return[s.containerVisible?(r(),c("div",p({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[m(ee,p({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:b(function(){return[e.visible?te((r(),c("div",p({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?g(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),c(P,{key:1},[$("div",p({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header",{class:U(e.cx("title"))},function(){return[e.header?(r(),c("div",p({key:0,class:e.cx("title")},e.ptm("title")),D(e.header),17)):C("",!0)]}),e.showCloseIcon?g(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[m(h,p({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:b(function(v){return[g(e.$slots,"closeicon",{},function(){return[(r(),y(z(e.closeIcon?"span":"TimesIcon"),p({class:[e.closeIcon,v.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):C("",!0)],16),$("div",p({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16),e.$slots.footer?(r(),c("div",p({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):C("",!0)],64))],16,xe)),[[d]]):C("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Be)):C("",!0)]}),_:3})}Q.render=Pe;var De=O`
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
`,Re={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},Ee=T.extend({name:"floatlabel",style:De,classes:Re}),Ie={name:"BaseFloatLabel",extends:V,props:{variant:{type:String,default:"over"}},style:Ee,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},X={name:"FloatLabel",extends:Ie,inheritAttrs:!1};function ze(e,t,a,i,s,n){return r(),c("span",p({class:e.cx("root")},e.ptmi("root")),[g(e.$slots,"default")],16)}X.render=ze;var Ke=O`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,_e={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Fe=T.extend({name:"tag",style:Ke,classes:_e}),Ae={name:"BaseTag",extends:V,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Fe,provide:function(){return{$pcTag:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function Oe(e,t,a){return(t=Te(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Te(e){var t=je(e,"string");return E(t)=="symbol"?t:t+""}function je(e,t){if(E(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(E(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var G={name:"Tag",extends:Ae,inheritAttrs:!1,computed:{dataP:function(){return Z(Oe({rounded:this.rounded},this.severity,this.severity))}}},Ve=["data-p"];function qe(e,t,a,i,s,n){return r(),c("span",p({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[e.$slots.icon?(r(),y(z(e.$slots.icon),p({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),c("span",p({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):C("",!0),e.value!=null||e.$slots.default?g(e.$slots,"default",{key:2},function(){return[$("span",p({class:e.cx("label")},e.ptm("label")),D(e.value),17)]}):C("",!0)],16,Ve)}G.render=qe;const Me={class:"flex flex-col"},Ne=["for"],Ue={class:"flex gap-3 pb-4 -mb-4"},Ze=q({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const i=F(),s=a,n=F(!1),h=e,L=async o=>{o.valid&&(n.value=!0,console.log(o),await h.submit(o.values).finally(()=>{n.value=!1}),s("close"))},d=de(h.inputConfigs.reduce((o,l)=>(o[l.name]=l.value,o),{})),v=h.inputConfigs.reduce((o,l)=>(l.schema&&(o[l.name]=l.schema),o),{}),B=be(he().shape(v));return t({instance:i}),(o,l)=>{const f=X,k=me,w=j,I=fe;return r(),y(I,{ref_key:"instance",ref:i,"initial-values":d,resolver:x(B),onSubmit:L,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:b(S=>[g(o.$slots,"default"),$("div",Me,[(r(!0),c(P,null,A(o.inputConfigs,(u,H)=>{var M;return r(),c("main",{key:H,class:U(u.class)},[u.placeholder?(r(),y(f,{key:0,variant:"on"},{default:b(()=>[(r(),y(z(u.component),p({input:u,name:u.name,id:u.name,ref_for:!0},u.props),null,16,["input","name","id"])),$("label",{for:u.name},D(u.placeholder),9,Ne)]),_:2},1024)):(r(),y(z(u.component),p({key:1,input:u,name:u.name,ref_for:!0},u.props),null,16,["input","name"])),(M=S[u.name])!=null&&M.invalid?(r(),y(k,{key:2,severity:"error",size:"small",variant:"simple"},{default:b(()=>[Y(D(S[u.name].error.message),1)]),_:2},1024)):C("",!0)],2)}),128))]),l[1]||(l[1]=$("div",{class:"grow"},null,-1)),$("footer",Ue,[m(w,{type:"button",size:"small",severity:"secondary",onClick:l[0]||(l[0]=u=>s("close")),label:"Bekor qilish",fluid:!0}),m(w,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),Ye={class:"mb-1 text-end"},Qe={key:0,class:"flex gap-1 flex-wrap"},Xe=q({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,i)=>{const s=j,n=ve,h=G,L=ye;return r(),c("div",null,[$("main",Ye,[m(s,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:i[0]||(i[0]=d=>a.$emit("create"))})]),m(L,{size:"small",value:t.data,dataKey:"id"},{default:b(()=>[m(n,{style:{width:"50px"},header:"#"},{body:b(({data:d,index:v})=>[Y(D(v+1),1)]),_:1}),(r(!0),c(P,null,A(t.columns,d=>(r(),c(P,{key:d.field},[d.render?(r(),y(n,{key:0,header:d.header},{body:b(({data:v})=>[d.render?(r(),c("div",Qe,[(r(!0),c(P,null,A(d.render(v),B=>(r(),y(h,{key:B,value:B},null,8,["value"]))),128))])):C("",!0)]),_:2},1032,["header"])):(r(),y(n,{key:1,header:d.header,field:d.field},null,8,["header","field"]))],64))),128)),g(a.$slots,"column"),m(n,{style:{width:"50px"}},{body:b(({data:d})=>[m(s,{icon:"pi pi-pencil",type:"button",onClick:v=>a.$emit("update",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),m(n,{style:{width:"50px"}},{body:b(({data:d})=>[m(s,{icon:"pi pi-trash",type:"button",onClick:v=>a.$emit("delete",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Ge(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const He={key:1,class:"flex items-center justify-center h-full"},rt=q({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=ce(),a=e,i=F(!1);var s;const{data:n,execute:h,isLoading:L}=ue(a.entityRepo.index);async function d(){s=async o=>{await a.entityRepo.store(o),await h(),i.value=!1},await Promise.all(a.entityRepo.inputs.map(async o=>(o.generateProps&&await o.generateProps(),o.value=void 0,o))).finally(()=>{i.value=!0})}const v=o=>{t.require(Ge(o.name,async()=>{var f,k;await a.entityRepo.destroy(o.id);const l=(f=n.value)==null?void 0:f.findIndex(w=>w.id==o.id);l>-1&&((k=n.value)==null||k.splice(l,1))}))};async function B(o){s=async f=>{var I;const{data:k}=await a.entityRepo.update(o.id,f),w=(I=n.value)==null?void 0:I.find(S=>S.id==o.id);if(w)for(const S in k)w[S]=k[S];i.value=!1};const{data:l}=await a.entityRepo.show(o.id);await Promise.all(a.entityRepo.inputs.map(async f=>(f.generateProps&&await f.generateProps(),f.value=l?l[f.name]:void 0,f))).finally(()=>{i.value=!0})}return pe(()=>{h()}),(o,l)=>{const f=Q,k=J;return r(),c("div",null,[m(f,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:i.value,"onUpdate:visible":l[1]||(l[1]=w=>i.value=w),position:"right"},{default:b(()=>[m(Ze,{submit:x(s),onClose:l[0]||(l[0]=w=>i.value=!1),"input-configs":a.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),x(n)&&x(L)==!1?(r(),y(Xe,{key:0,columns:a.entityRepo.columns,data:x(n),onUpdate:B,onDelete:v,onCreate:d},{column:b(()=>[g(o.$slots,"column")]),_:3},8,["columns","data"])):(r(),c("main",He,[m(k)]))])}}});export{rt as _};
