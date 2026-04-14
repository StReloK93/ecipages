import{s as G}from"./index-Dwvqg3qn.js";import{c as O,B as T,e as N,f as W,i as v,o as r,w as h,a as c,g as C,m as u,h as m,T as ee,p as te,r as w,F as D,b as S,n as U,t as R,a1 as _,a2 as ae,a3 as ne,Q as j,a4 as oe,a0 as V,d as Z,a5 as re,a6 as ie,D as le,a7 as I,a8 as se,H as q,J as F,X as de,l as A,q as Y,O as P,a9 as ce,K as ue,M as pe,$ as fe}from"./app-D0KvTLDu.js";import{s as me}from"./index-bOvkD1xO.js";import{s as be}from"./index-DlpqB7EC.js";import{m as he}from"./index-CltI6m3I.js";import{c as ye}from"./index.esm-CT5ixYti.js";import{s as ve,a as ge}from"./index-D9_aVYpx.js";var we=O`
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
`,ke={mask:function(t){var a=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{pointerEvents:"auto"}},$e={mask:function(t){var a=t.instance,o=t.props,l=["left","right","top","bottom"],n=l.find(function(p){return p===o.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ce=T.extend({name:"drawer",style:we,classes:$e,inlineStyles:ke}),Le={name:"BaseDrawer",extends:V,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Ce,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function K(e,t,a){return(t=Se(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Se(e){var t=Be(e,"string");return z(t)=="symbol"?t:t+""}function Be(e,t){if(z(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(z(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var X={name:"Drawer",extends:Le,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&I.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&I.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&se(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&I.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(l){return l&&l.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&le(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ie()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&re()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return Z(K(K(K({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:oe},components:{Button:j,Portal:ne,TimesIcon:ae}},xe=["data-p"],Pe=["aria-modal","data-p"];function De(e,t,a,o,l,n){var p=N("Button"),L=N("Portal"),d=W("focustrap");return r(),v(L,null,{default:h(function(){return[l.containerVisible?(r(),c("div",u({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[m(ee,u({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:h(function(){return[e.visible?te((r(),c("div",u({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),c(D,{key:1},[S("div",u({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{class:U(e.cx("title"))},function(){return[e.header?(r(),c("div",u({key:0,class:e.cx("title")},e.ptm("title")),R(e.header),17)):C("",!0)]}),e.showCloseIcon?w(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[m(p,u({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:h(function(g){return[w(e.$slots,"closeicon",{},function(){return[(r(),v(_(e.closeIcon?"span":"TimesIcon"),u({class:[e.closeIcon,g.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):C("",!0)],16),S("div",u({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(r(),c("div",u({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):C("",!0)],64))],16,Pe)),[[d]]):C("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,xe)):C("",!0)]}),_:3})}X.render=De;var Re=O`
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
`,ze={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},Ee=T.extend({name:"floatlabel",style:Re,classes:ze}),_e={name:"BaseFloatLabel",extends:V,props:{variant:{type:String,default:"over"}},style:Ee,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Q={name:"FloatLabel",extends:_e,inheritAttrs:!1};function Ie(e,t,a,o,l,n){return r(),c("span",u({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}Q.render=Ie;var Ke=O`
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
`,Fe={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ae=T.extend({name:"tag",style:Ke,classes:Fe}),Oe={name:"BaseTag",extends:V,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ae,provide:function(){return{$pcTag:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function Te(e,t,a){return(t=je(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function je(e){var t=Ve(e,"string");return E(t)=="symbol"?t:t+""}function Ve(e,t){if(E(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(E(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var H={name:"Tag",extends:Oe,inheritAttrs:!1,computed:{dataP:function(){return Z(Te({rounded:this.rounded},this.severity,this.severity))}}},qe=["data-p"];function Me(e,t,a,o,l,n){return r(),c("span",u({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[e.$slots.icon?(r(),v(_(e.$slots.icon),u({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),c("span",u({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):C("",!0),e.value!=null||e.$slots.default?w(e.$slots,"default",{key:2},function(){return[S("span",u({class:e.cx("label")},e.ptm("label")),R(e.value),17)]}):C("",!0)],16,qe)}H.render=Me;const Ne={class:"flex flex-col"},Ue=["for"],Ze={class:"flex gap-3 pb-4 -mb-4"},Ye=q({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const o=F(),l=a,n=F(!1),p=e,L=async b=>{b.valid&&(n.value=!0,await p.submit(b.values).finally(()=>{n.value=!1}),l("close"))},d=de(p.inputConfigs.reduce((b,i)=>(b[i.name]=i.value,b),{})),g=p.inputConfigs.reduce((b,i)=>(i.schema&&(b[i.name]=i.schema),b),{}),B=he(ye().shape(g));return t({instance:o}),(b,i)=>{const y=Q,f=be,k=j,$=me;return r(),v($,{ref_key:"instance",ref:o,"initial-values":d,resolver:P(B),onSubmit:L,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:h(x=>[w(b.$slots,"default"),S("div",Ne,[(r(!0),c(D,null,A(b.inputConfigs,(s,J)=>{var M;return r(),c("main",{key:J,class:U(s.class)},[s.placeholder?(r(),v(y,{key:0,variant:"on"},{default:h(()=>[(r(),v(_(s.component),u({input:s,name:s.name,id:s.name,ref_for:!0},s.props),null,16,["input","name","id"])),S("label",{for:s.name},R(s.placeholder),9,Ue)]),_:2},1024)):(r(),v(_(s.component),u({key:1,input:s,name:s.name,ref_for:!0},s.props),null,16,["input","name"])),(M=x[s.name])!=null&&M.invalid?(r(),v(f,{key:2,severity:"error",size:"small",variant:"simple"},{default:h(()=>[Y(R(x[s.name].error.message),1)]),_:2},1024)):C("",!0)],2)}),128))]),i[1]||(i[1]=S("div",{class:"grow"},null,-1)),S("footer",Ze,[m(k,{type:"button",size:"small",severity:"secondary",onClick:i[0]||(i[0]=s=>l("close")),label:"Bekor qilish",fluid:!0}),m(k,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),Xe={class:"mb-1 text-end"},Qe={key:0,class:"flex gap-1 flex-wrap"},He=q({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,o)=>{const l=j,n=ge,p=H,L=ve;return r(),c("div",null,[S("main",Xe,[m(l,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:o[0]||(o[0]=d=>a.$emit("create"))})]),m(L,{size:"small",value:t.data,dataKey:"id"},{default:h(()=>[m(n,{style:{width:"50px"},header:"#"},{body:h(({data:d,index:g})=>[Y(R(g+1),1)]),_:1}),(r(!0),c(D,null,A(t.columns,d=>(r(),c(D,{key:d.field},[d.render?(r(),v(n,{key:0,header:d.header},{body:h(({data:g})=>[d.render?(r(),c("div",Qe,[(r(!0),c(D,null,A(d.render(g),B=>(r(),v(p,{key:B,value:B},null,8,["value"]))),128))])):C("",!0)]),_:2},1032,["header"])):(r(),v(n,{key:1,header:d.header,field:d.field},null,8,["header","field"]))],64))),128)),w(a.$slots,"column"),m(n,{style:{width:"50px"}},{body:h(({data:d})=>[m(l,{icon:"pi pi-pencil",type:"button",onClick:g=>a.$emit("update",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),m(n,{style:{width:"50px"}},{body:h(({data:d})=>[m(l,{icon:"pi pi-trash",type:"button",onClick:g=>a.$emit("delete",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Je(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ge={key:1,class:"flex items-center justify-center h-full"},it=q({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=ce(),a=fe(),o=e,l=F(!1);var n;const{data:p,execute:L,isLoading:d}=ue(o.entityRepo.showByOrganization);async function g(){n=async i=>{await o.entityRepo.store(i),await L(a.params.organization_id),l.value=!1},await Promise.all(o.entityRepo.inputs.map(async i=>(i.generateProps&&await i.generateProps(),i.value=void 0,i))).finally(()=>{l.value=!0})}const B=i=>{t.require(Je(i.name,async()=>{var f,k;await o.entityRepo.destroy(i.id);const y=(f=p.value)==null?void 0:f.findIndex($=>$.id==i.id);y>-1&&((k=p.value)==null||k.splice(y,1))}))};async function b(i){n=async f=>{var x;const{data:k}=await o.entityRepo.update(i.id,f),$=(x=p.value)==null?void 0:x.find(s=>s.id==i.id);if($)for(const s in k)$[s]=k[s];l.value=!1};const{data:y}=await o.entityRepo.show(i.id);await Promise.all(o.entityRepo.inputs.map(async f=>(f.generateProps&&await f.generateProps(),f.value=y?y[f.name]:void 0,f))).finally(()=>{l.value=!0})}return pe(()=>{L(a.params.organization_id)}),(i,y)=>{const f=X,k=G;return r(),c("div",null,[m(f,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:l.value,"onUpdate:visible":y[1]||(y[1]=$=>l.value=$),position:"right"},{default:h(()=>[m(Ye,{submit:P(n),onClose:y[0]||(y[0]=$=>l.value=!1),"input-configs":o.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),P(p)&&P(d)==!1?(r(),v(He,{key:0,columns:o.entityRepo.columns,data:P(p),onUpdate:b,onDelete:B,onCreate:g},{column:h(()=>[w(i.$slots,"column")]),_:3},8,["columns","data"])):(r(),c("main",Ge,[m(k)]))])}}});export{it as _};
