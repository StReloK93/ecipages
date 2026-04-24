import{s as G}from"./index-DYzVD-am.js";import{c as M,B as j,e as Z,f as ee,i as y,o as r,w as f,a as c,g as B,m as p,h as u,T as te,p as ae,r as k,F as R,b as L,n as Q,t as I,a1 as T,a2 as ne,a3 as oe,Q as V,a4 as re,a0 as U,d as Y,a5 as le,a6 as ie,D as se,a7 as A,a8 as de,H as N,J as E,X as ue,l as O,q as H,O as D,a9 as P,aa as ce,$ as pe,K as fe,M as me}from"./app-H24Z715Y.js";import{s as be}from"./index-B47gJOPX.js";import{s as he}from"./index-DsMR33mG.js";import{m as ve}from"./index-CltI6m3I.js";import{c as ye}from"./index.esm-CT5ixYti.js";import{s as ge,a as we}from"./index-BIH_JncB.js";import{b as ke,c as $e}from"./index-CblhGCQn.js";import{a as Ce}from"./index-S44LOkFB.js";var Le=M`
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
`,Se={mask:function(t){var a=t.position,l=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:l?"auto":"none"}},root:{pointerEvents:"auto"}},Be={mask:function(t){var a=t.instance,l=t.props,s=["left","right","top","bottom"],n=s.find(function(v){return v===l.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":l.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},xe=j.extend({name:"drawer",style:Le,classes:Be,inlineStyles:Se}),Pe={name:"BaseDrawer",extends:U,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function K(e,t,a){return(t=De(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function De(e){var t=_e(e,"string");return z(t)=="symbol"?t:t+""}function _e(e,t){if(z(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t);if(z(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var X={name:"Drawer",extends:Pe,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&A.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&A.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&de(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&A.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&se(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ie()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&le()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return Y(K(K(K({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:re},components:{Button:V,Portal:oe,TimesIcon:ne}},Re=["data-p"],Ie=["aria-modal","data-p"];function ze(e,t,a,l,s,n){var v=Z("Button"),g=Z("Portal"),$=ee("focustrap");return r(),y(g,null,{default:f(function(){return[s.containerVisible?(r(),c("div",p({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[u(te,p({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:f(function(){return[e.visible?ae((r(),c("div",p({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?k(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),c(R,{key:1},[L("div",p({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[k(e.$slots,"header",{class:Q(e.cx("title"))},function(){return[e.header?(r(),c("div",p({key:0,class:e.cx("title")},e.ptm("title")),I(e.header),17)):B("",!0)]}),e.showCloseIcon?k(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[u(v,p({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:f(function(w){return[k(e.$slots,"closeicon",{},function(){return[(r(),y(T(e.closeIcon?"span":"TimesIcon"),p({class:[e.closeIcon,w.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):B("",!0)],16),L("div",p({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[k(e.$slots,"default")],16),e.$slots.footer?(r(),c("div",p({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[k(e.$slots,"footer")],16)):B("",!0)],64))],16,Ie)),[[$]]):B("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Re)):B("",!0)]}),_:3})}X.render=ze;var Fe=M`
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
`,Te={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},Ee=j.extend({name:"floatlabel",style:Fe,classes:Te}),Ae={name:"BaseFloatLabel",extends:U,props:{variant:{type:String,default:"over"}},style:Ee,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},W={name:"FloatLabel",extends:Ae,inheritAttrs:!1};function Ke(e,t,a,l,s,n){return r(),c("span",p({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default")],16)}W.render=Ke;var Oe=M`
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
`,Me={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},je=j.extend({name:"tag",style:Oe,classes:Me}),Ve={name:"BaseTag",extends:U,props:{value:null,severity:null,rounded:Boolean,icon:String},style:je,provide:function(){return{$pcTag:this,$parentInstance:this}}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function Ue(e,t,a){return(t=Ne(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ne(e){var t=qe(e,"string");return F(t)=="symbol"?t:t+""}function qe(e,t){if(F(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t);if(F(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var J={name:"Tag",extends:Ve,inheritAttrs:!1,computed:{dataP:function(){return Y(Ue({rounded:this.rounded},this.severity,this.severity))}}},Ze=["data-p"];function Qe(e,t,a,l,s,n){return r(),c("span",p({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[e.$slots.icon?(r(),y(T(e.$slots.icon),p({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),c("span",p({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):B("",!0),e.value!=null||e.$slots.default?k(e.$slots,"default",{key:2},function(){return[L("span",p({class:e.cx("label")},e.ptm("label")),I(e.value),17)]}):B("",!0)],16,Ze)}J.render=Qe;const Ye={class:"flex flex-col"},He=["for"],Xe={class:"flex gap-3 pb-4 -mb-4"},We=N({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const l=E(),s=a,n=E(!1),v=e,g=async m=>{m.valid&&(n.value=!0,await v.submit(m.values).finally(()=>{n.value=!1}),s("close"))},$=ue(v.inputConfigs.reduce((m,o)=>(m[o.name]=o.value,m),{})),w=v.inputConfigs.reduce((m,o)=>(o.schema&&(m[o.name]=o.schema),m),{}),_=ve(ye().shape(w));return t({instance:l}),(m,o)=>{const i=W,b=he,h=V,S=be;return r(),y(S,{ref_key:"instance",ref:l,"initial-values":$,resolver:D(_),onSubmit:g,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:f(C=>[k(m.$slots,"default"),L("div",Ye,[(r(!0),c(R,null,O(m.inputConfigs,(d,x)=>{var q;return r(),c("main",{key:x,class:Q(d.class)},[d.placeholder?(r(),y(i,{key:0,variant:"on"},{default:f(()=>[(r(),y(T(d.component),p({input:d,name:d.name,id:d.name,ref_for:!0},d.props),null,16,["input","name","id"])),L("label",{for:d.name},I(d.placeholder),9,He)]),_:2},1024)):(r(),y(T(d.component),p({key:1,input:d,name:d.name,ref_for:!0},d.props),null,16,["input","name"])),(q=C[d.name])!=null&&q.invalid?(r(),y(b,{key:2,severity:"error",size:"small",variant:"simple"},{default:f(()=>[H(I(C[d.name].error.message),1)]),_:2},1024)):B("",!0)],2)}),128))]),o[1]||(o[1]=L("div",{class:"grow"},null,-1)),L("footer",Xe,[u(h,{type:"button",size:"small",severity:"secondary",onClick:o[0]||(o[0]=d=>s("close")),label:"Bekor qilish",fluid:!0}),u(h,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),Je={class:"flex flex-col h-full relative"},Ge={class:"absolute inset-0"},et={class:"flex justify-between -mx-2 pb-2"},tt={key:0,class:"flex gap-1 flex-wrap"},at=N({__name:"CrudTable",props:{columns:{},data:{},filterFields:{}},setup(e){const t=e,a=E({global:{value:null,matchMode:P.CONTAINS},name:{value:null,matchMode:P.STARTS_WITH},"country.name":{value:null,matchMode:P.STARTS_WITH},representative:{value:null,matchMode:P.IN},status:{value:null,matchMode:P.EQUALS},verified:{value:null,matchMode:P.EQUALS}});return(l,s)=>{const n=$e,v=Ce,g=ke,$=V,w=we,_=J,m=ge;return r(),c("div",Je,[L("main",Ge,[u(m,{size:"small",scrollable:"",scrollHeight:"flex",filters:a.value,"onUpdate:filters":s[2]||(s[2]=o=>a.value=o),value:t.data,dataKey:"id",globalFilterFields:t.filterFields},{header:f(()=>[L("div",et,[u(g,{size:"small",class:"p-input-icon-left"},{default:f(()=>[u(n,null,{default:f(()=>s[3]||(s[3]=[L("i",{class:"pi pi-search"},null,-1)])),_:1,__:[3]}),u(v,{modelValue:a.value.global.value,"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.global.value=o),size:"small",placeholder:"Qidiruv"},null,8,["modelValue"])]),_:1}),u($,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:s[1]||(s[1]=o=>l.$emit("create"))})])]),default:f(()=>[u(w,{style:{width:"50px"},header:"#"},{body:f(({data:o,index:i})=>[H(I(i+1),1)]),_:1}),(r(!0),c(R,null,O(t.columns,o=>(r(),c(R,{key:o.field},[o.render?(r(),y(w,{key:0,header:o.header},{body:f(({data:i})=>[o.render?(r(),c("div",tt,[(r(!0),c(R,null,O(o.render(i),b=>(r(),y(_,{key:b,value:b},null,8,["value"]))),128))])):B("",!0)]),_:2},1032,["header"])):(r(),y(w,{key:1,header:o.header,field:o.field},null,8,["header","field"]))],64))),128)),k(l.$slots,"column"),u(w,{style:{width:"50px"}},{body:f(({data:o})=>[u($,{icon:"pi pi-pencil",type:"button",onClick:i=>l.$emit("update",o),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),u(w,{style:{width:"50px"}},{body:f(({data:o})=>[u($,{icon:"pi pi-trash",type:"button",onClick:i=>l.$emit("delete",o),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["filters","value","globalFilterFields"])])])}}});function nt(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const ot={key:1,class:"flex items-center justify-center h-full"},mt=N({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=ce(),a=e,l=pe(),s=a.entityRepo.inputs(l.params.organization_id),n=E(!1);var v;const{data:g,execute:$,isLoading:w}=fe(a.entityRepo.showByOrganization);async function _(){v=async i=>{await a.entityRepo.store(i,l.params.organization_id),await $(l.params.organization_id),n.value=!1},await Promise.all(s.map(async i=>(console.log(i),i.generateProps&&await i.generateProps(),i.value=void 0,i))).finally(()=>{n.value=!0})}const m=i=>{t.require(nt(i.name,async()=>{var h,S;await a.entityRepo.destroy(i.id);const b=(h=g.value)==null?void 0:h.findIndex(C=>C.id==i.id);b>-1&&((S=g.value)==null||S.splice(b,1))}))};async function o(i){v=async h=>{var d;const{data:S}=await a.entityRepo.update(i.id,h),C=(d=g.value)==null?void 0:d.find(x=>x.id==i.id);if(C)for(const x in S)C[x]=S[x];n.value=!1};const{data:b}=await a.entityRepo.show(i.id);await Promise.all(s.map(async h=>(h.generateProps&&await h.generateProps(),h.value=b?b[h.name]:void 0,h))).finally(()=>{n.value=!0})}return me(()=>{$(l.params.organization_id)}),(i,b)=>{const h=X,S=G;return r(),c("div",null,[u(h,{header:"Qo'shish","show-close-icon":!1,visible:n.value,"onUpdate:visible":b[1]||(b[1]=C=>n.value=C),position:"right"},{default:f(()=>[u(We,{submit:D(v),onClose:b[0]||(b[0]=C=>n.value=!1),"input-configs":D(s)},null,8,["submit","input-configs"])]),_:1},8,["visible"]),D(g)&&D(w)==!1?(r(),y(at,{key:0,columns:a.entityRepo.columns,"filter-fields":a.entityRepo.filterFields,data:D(g),onUpdate:o,onDelete:m,onCreate:_},{column:f(()=>[k(i.$slots,"column")]),_:3},8,["columns","filter-fields","data"])):(r(),c("main",ot,[u(S)]))])}}});export{mt as _};
