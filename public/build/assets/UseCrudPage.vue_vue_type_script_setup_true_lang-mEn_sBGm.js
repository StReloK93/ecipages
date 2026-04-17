import{s as G}from"./index-CgN6aZPP.js";import{c as T,B as j,e as U,f as W,i as g,o,w as v,a as c,g as S,m as u,h as f,T as ee,p as te,r as $,F as R,b as B,n as Z,t as z,a1 as I,a2 as ae,a3 as ne,Q as V,a4 as oe,a0 as q,d as Y,a5 as re,a6 as ie,D as le,a7 as K,a8 as se,H as M,J as A,X as de,l as O,q as Q,O as D,a9 as ce,$ as ue,K as pe,M as fe}from"./app-CGTStIgd.js";import{s as me}from"./index-D9rqvPeQ.js";import{s as be}from"./index-FYDlEtOh.js";import{m as he}from"./index-CltI6m3I.js";import{c as ve}from"./index.esm-CT5ixYti.js";import{s as ye,a as ge}from"./index-3kwU6IC-.js";var we=T`
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
`,ke={mask:function(t){var a=t.position,r=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{pointerEvents:"auto"}},$e={mask:function(t){var a=t.instance,r=t.props,l=["left","right","top","bottom"],n=l.find(function(m){return m===r.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":r.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ce=j.extend({name:"drawer",style:we,classes:$e,inlineStyles:ke}),Le={name:"BaseDrawer",extends:q,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Ce,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function F(e,t,a){return(t=Se(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Se(e){var t=Be(e,"string");return _(t)=="symbol"?t:t+""}function Be(e,t){if(_(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(_(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var X={name:"Drawer",extends:Le,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&K.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&K.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&se(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&K.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(l){return l&&l.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&le(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ie()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&re()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return Y(F(F(F({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:oe},components:{Button:V,Portal:ne,TimesIcon:ae}},xe=["data-p"],Pe=["aria-modal","data-p"];function De(e,t,a,r,l,n){var m=U("Button"),w=U("Portal"),i=W("focustrap");return o(),g(w,null,{default:v(function(){return[l.containerVisible?(o(),c("div",u({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[f(ee,u({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:v(function(){return[e.visible?te((o(),c("div",u({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?$(e.$slots,"container",{key:0,closeCallback:n.hide}):(o(),c(R,{key:1},[B("div",u({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[$(e.$slots,"header",{class:Z(e.cx("title"))},function(){return[e.header?(o(),c("div",u({key:0,class:e.cx("title")},e.ptm("title")),z(e.header),17)):S("",!0)]}),e.showCloseIcon?$(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[f(m,u({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:v(function(k){return[$(e.$slots,"closeicon",{},function(){return[(o(),g(I(e.closeIcon?"span":"TimesIcon"),u({class:[e.closeIcon,k.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):S("",!0)],16),B("div",u({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[$(e.$slots,"default")],16),e.$slots.footer?(o(),c("div",u({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[$(e.$slots,"footer")],16)):S("",!0)],64))],16,Pe)),[[i]]):S("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,xe)):S("",!0)]}),_:3})}X.render=De;var Re=T`
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
`,ze={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},_e=j.extend({name:"floatlabel",style:Re,classes:ze}),Ee={name:"BaseFloatLabel",extends:q,props:{variant:{type:String,default:"over"}},style:_e,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},H={name:"FloatLabel",extends:Ee,inheritAttrs:!1};function Ie(e,t,a,r,l,n){return o(),c("span",u({class:e.cx("root")},e.ptmi("root")),[$(e.$slots,"default")],16)}H.render=Ie;var Ke=T`
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
`,Fe={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ae=j.extend({name:"tag",style:Ke,classes:Fe}),Oe={name:"BaseTag",extends:q,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ae,provide:function(){return{$pcTag:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function Te(e,t,a){return(t=je(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function je(e){var t=Ve(e,"string");return E(t)=="symbol"?t:t+""}function Ve(e,t){if(E(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(E(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var J={name:"Tag",extends:Oe,inheritAttrs:!1,computed:{dataP:function(){return Y(Te({rounded:this.rounded},this.severity,this.severity))}}},qe=["data-p"];function Me(e,t,a,r,l,n){return o(),c("span",u({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[e.$slots.icon?(o(),g(I(e.$slots.icon),u({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),c("span",u({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):S("",!0),e.value!=null||e.$slots.default?$(e.$slots,"default",{key:2},function(){return[B("span",u({class:e.cx("label")},e.ptm("label")),z(e.value),17)]}):S("",!0)],16,qe)}J.render=Me;const Ne={class:"flex flex-col"},Ue=["for"],Ze={class:"flex gap-3 pb-4 -mb-4"},Ye=M({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const r=A(),l=a,n=A(!1),m=e,w=async b=>{b.valid&&(n.value=!0,await m.submit(b.values).finally(()=>{n.value=!1}),l("close"))},i=de(m.inputConfigs.reduce((b,h)=>(b[h.name]=h.value,b),{})),k=m.inputConfigs.reduce((b,h)=>(h.schema&&(b[h.name]=h.schema),b),{}),x=he(ve().shape(k));return t({instance:r}),(b,h)=>{const s=H,y=be,p=V,L=me;return o(),g(L,{ref_key:"instance",ref:r,"initial-values":i,resolver:D(x),onSubmit:w,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:v(C=>[$(b.$slots,"default"),B("div",Ne,[(o(!0),c(R,null,O(b.inputConfigs,(d,P)=>{var N;return o(),c("main",{key:P,class:Z(d.class)},[d.placeholder?(o(),g(s,{key:0,variant:"on"},{default:v(()=>[(o(),g(I(d.component),u({input:d,name:d.name,id:d.name,ref_for:!0},d.props),null,16,["input","name","id"])),B("label",{for:d.name},z(d.placeholder),9,Ue)]),_:2},1024)):(o(),g(I(d.component),u({key:1,input:d,name:d.name,ref_for:!0},d.props),null,16,["input","name"])),(N=C[d.name])!=null&&N.invalid?(o(),g(y,{key:2,severity:"error",size:"small",variant:"simple"},{default:v(()=>[Q(z(C[d.name].error.message),1)]),_:2},1024)):S("",!0)],2)}),128))]),h[1]||(h[1]=B("div",{class:"grow"},null,-1)),B("footer",Ze,[f(p,{type:"button",size:"small",severity:"secondary",onClick:h[0]||(h[0]=d=>l("close")),label:"Bekor qilish",fluid:!0}),f(p,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),Qe={class:"mb-1 text-end"},Xe={key:0,class:"flex gap-1 flex-wrap"},He=M({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,r)=>{const l=V,n=ge,m=J,w=ye;return o(),c("div",null,[B("main",Qe,[f(l,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:r[0]||(r[0]=i=>a.$emit("create"))})]),f(w,{size:"small",value:t.data,dataKey:"id"},{default:v(()=>[f(n,{style:{width:"50px"},header:"#"},{body:v(({data:i,index:k})=>[Q(z(k+1),1)]),_:1}),(o(!0),c(R,null,O(t.columns,i=>(o(),c(R,{key:i.field},[i.render?(o(),g(n,{key:0,header:i.header},{body:v(({data:k})=>[i.render?(o(),c("div",Xe,[(o(!0),c(R,null,O(i.render(k),x=>(o(),g(m,{key:x,value:x},null,8,["value"]))),128))])):S("",!0)]),_:2},1032,["header"])):(o(),g(n,{key:1,header:i.header,field:i.field},null,8,["header","field"]))],64))),128)),$(a.$slots,"column"),f(n,{style:{width:"50px"}},{body:v(({data:i})=>[f(l,{icon:"pi pi-pencil",type:"button",onClick:k=>a.$emit("update",i),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),f(n,{style:{width:"50px"}},{body:v(({data:i})=>[f(l,{icon:"pi pi-trash",type:"button",onClick:k=>a.$emit("delete",i),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Je(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ge={key:1,class:"flex items-center justify-center h-full"},it=M({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=ce(),a=e,r=ue(),l=a.entityRepo.inputs(r.params.organization_id),n=A(!1);var m;const{data:w,execute:i,isLoading:k}=pe(a.entityRepo.showByOrganization);async function x(){m=async s=>{await a.entityRepo.store(s,r.params.organization_id),await i(r.params.organization_id),n.value=!1},await Promise.all(l.map(async s=>(console.log(s),s.generateProps&&await s.generateProps(),s.value=void 0,s))).finally(()=>{n.value=!0})}const b=s=>{t.require(Je(s.name,async()=>{var p,L;await a.entityRepo.destroy(s.id);const y=(p=w.value)==null?void 0:p.findIndex(C=>C.id==s.id);y>-1&&((L=w.value)==null||L.splice(y,1))}))};async function h(s){m=async p=>{var d;const{data:L}=await a.entityRepo.update(s.id,p),C=(d=w.value)==null?void 0:d.find(P=>P.id==s.id);if(C)for(const P in L)C[P]=L[P];n.value=!1};const{data:y}=await a.entityRepo.show(s.id);await Promise.all(l.map(async p=>(p.generateProps&&await p.generateProps(),p.value=y?y[p.name]:void 0,p))).finally(()=>{n.value=!0})}return fe(()=>{i(r.params.organization_id)}),(s,y)=>{const p=X,L=G;return o(),c("div",null,[f(p,{header:"Qo'shish","show-close-icon":!1,visible:n.value,"onUpdate:visible":y[1]||(y[1]=C=>n.value=C),position:"right"},{default:v(()=>[f(Ye,{submit:D(m),onClose:y[0]||(y[0]=C=>n.value=!1),"input-configs":D(l)},null,8,["submit","input-configs"])]),_:1},8,["visible"]),D(w)&&D(k)==!1?(o(),g(He,{key:0,columns:a.entityRepo.columns,data:D(w),onUpdate:h,onDelete:b,onCreate:x},{column:v(()=>[$(s.$slots,"column")]),_:3},8,["columns","data"])):(o(),c("main",Ge,[f(L)]))])}}});export{it as _};
