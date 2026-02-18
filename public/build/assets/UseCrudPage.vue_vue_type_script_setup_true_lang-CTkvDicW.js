import{s as X}from"./index-DiiFTuEz.js";import{i as j,B as T,g as V,K as G,h as g,e as r,w as h,c as b,l as $,n as m,y as c,T as H,L as J,m as y,F,a as L,z as q,t as R,p as E,M as W,N as ee,I as A,O as te,j as M,k as ae,P as ne,Q as oe,R as le,Z as _,S as ie,d as z,q as K,U as re,r as U,D as Z,b as B,V as se,u as de,o as pe}from"./app-2Osvv3AR.js";import{s as ue}from"./index-D7SXmvpF.js";import{s as ce}from"./index-BXqGvRMY.js";import{m as fe}from"./index-CltI6m3I.js";import{d as me}from"./index.esm-C88Gxk8I.js";import{a as be,s as he}from"./index-1ZFrtC1P.js";var ve=j`
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
`,ye={mask:function(t){var a=t.position,l=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:l?"auto":"none"}},root:{pointerEvents:"auto"}},we={mask:function(t){var a=t.instance,l=t.props,s=["left","right","top","bottom"],n=s.find(function(f){return f===l.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":l.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ke=T.extend({name:"drawer",style:ve,classes:we,inlineStyles:ye}),ge={name:"BaseDrawer",extends:M,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ke,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function I(e,t,a){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ce(e){var t=Le(e,"string");return S(t)=="symbol"?t:t+""}function Le(e,t){if(S(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t);if(S(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N={name:"Drawer",extends:ge,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&_.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&_.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ie(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&_.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&le(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&oe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ne()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ae(I(I(I({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:te},components:{Button:A,Portal:ee,TimesIcon:W}},$e=["data-p"],xe=["aria-modal","data-p"];function Be(e,t,a,l,s,n){var f=V("Button"),p=V("Portal"),w=G("focustrap");return r(),g(p,null,{default:h(function(){return[s.containerVisible?(r(),b("div",m({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[c(H,m({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:h(function(){return[e.visible?J((r(),b("div",m({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?y(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),b(F,{key:1},[L("div",m({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[y(e.$slots,"header",{class:q(e.cx("title"))},function(){return[e.header?(r(),b("div",m({key:0,class:e.cx("title")},e.ptm("title")),R(e.header),17)):$("",!0)]}),e.showCloseIcon?y(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[c(f,m({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:h(function(x){return[y(e.$slots,"closeicon",{},function(){return[(r(),g(E(e.closeIcon?"span":"TimesIcon"),m({class:[e.closeIcon,x.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):$("",!0)],16),L("div",m({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[y(e.$slots,"default")],16),e.$slots.footer?(r(),b("div",m({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[y(e.$slots,"footer")],16)):$("",!0)],64))],16,xe)),[[w]]):$("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,$e)):$("",!0)]}),_:3})}N.render=Be;var Se=j`
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
`,De={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},Re=T.extend({name:"floatlabel",style:Se,classes:De}),Pe={name:"BaseFloatLabel",extends:M,props:{variant:{type:String,default:"over"}},style:Re,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Y={name:"FloatLabel",extends:Pe,inheritAttrs:!1};function _e(e,t,a,l,s,n){return r(),b("span",m({class:e.cx("root")},e.ptmi("root")),[y(e.$slots,"default")],16)}Y.render=_e;const Ie={class:"flex flex-col"},Ee=["for"],Ke={class:"flex gap-3 pb-4 -mb-4"},Fe=z({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const l=K(),s=a,n=K(!1),f=e,p=async o=>{o.valid&&(n.value=!0,console.log(o),await f.submit(o.values).finally(()=>{n.value=!1}),s("close"))},w=re(f.inputConfigs.reduce((o,i)=>(o[i.name]=i.value,o),{})),x=f.inputConfigs.reduce((o,i)=>(i.schema&&(o[i.name]=i.schema),o),{}),P=fe(me().shape(x));return t({instance:l}),(o,i)=>{const u=Y,k=ce,v=A,D=ue;return r(),g(D,{ref_key:"instance",ref:l,"initial-values":w,resolver:B(P),onSubmit:p,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:h(C=>[y(o.$slots,"default"),L("div",Ie,[(r(!0),b(F,null,U(o.inputConfigs,(d,Q)=>{var O;return r(),b("main",{key:Q,class:q(d.class)},[d.placeholder?(r(),g(u,{key:0,variant:"on"},{default:h(()=>[(r(),g(E(d.component),m({input:d,name:d.name,id:d.name,ref_for:!0},d.props),null,16,["input","name","id"])),L("label",{for:d.name},R(d.placeholder),9,Ee)]),_:2},1024)):(r(),g(E(d.component),m({key:1,input:d,name:d.name,ref_for:!0},d.props),null,16,["input","name"])),(O=C[d.name])!=null&&O.invalid?(r(),g(k,{key:2,severity:"error",size:"small",variant:"simple"},{default:h(()=>[Z(R(C[d.name].error.message),1)]),_:2},1024)):$("",!0)],2)}),128))]),i[1]||(i[1]=L("div",{class:"grow"},null,-1)),L("footer",Ke,[c(v,{type:"button",size:"small",severity:"secondary",onClick:i[0]||(i[0]=d=>s("close")),label:"Bekor qilish",fluid:!0}),c(v,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),Ae={class:"mb-1 text-end"},ze=z({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,l)=>{const s=A,n=he,f=be;return r(),b("div",null,[L("main",Ae,[c(s,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:l[0]||(l[0]=p=>a.$emit("create"))})]),c(f,{size:"small",value:t.data,dataKey:"id"},{default:h(()=>[c(n,{style:{width:"50px"},header:"#"},{body:h(({data:p,index:w})=>[Z(R(w+1),1)]),_:1}),(r(!0),b(F,null,U(t.columns,p=>(r(),g(n,{key:p.field,field:p.field,header:p.header},null,8,["field","header"]))),128)),y(a.$slots,"column"),c(n,{style:{width:"50px"}},{body:h(({data:p})=>[c(s,{icon:"pi pi-pencil",type:"button",onClick:w=>a.$emit("update",p),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),c(n,{style:{width:"50px"}},{body:h(({data:p})=>[c(s,{icon:"pi pi-trash",type:"button",onClick:w=>a.$emit("delete",p),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Oe(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ve={key:1,class:"flex items-center justify-center h-full"},Ye=z({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=se(),a=e,l=K(!1);var s;const{data:n,execute:f,isLoading:p}=de(a.entityRepo.index);async function w(){s=async o=>{await a.entityRepo.store(o),await f(),l.value=!1},await Promise.all(a.entityRepo.inputs.map(async o=>(o.generateProps&&await o.generateProps(),o.value=void 0,o))).finally(()=>{l.value=!0})}const x=o=>{t.require(Oe(o.name,async()=>{var u,k;await a.entityRepo.destroy(o.id);const i=(u=n.value)==null?void 0:u.findIndex(v=>v.id==o.id);i>-1&&((k=n.value)==null||k.splice(i,1))}))};async function P(o){s=async u=>{var D;const{data:k}=await a.entityRepo.update(o.id,u),v=(D=n.value)==null?void 0:D.find(C=>C.id==o.id);if(v)for(const C in k)v[C]=k[C];l.value=!1};const{data:i}=await a.entityRepo.show(o.id);await Promise.all(a.entityRepo.inputs.map(async u=>(u.generateProps&&await u.generateProps(),u.value=i?i[u.name]:void 0,u))).finally(()=>{l.value=!0})}return pe(()=>{f()}),(o,i)=>{const u=N,k=X;return r(),b("div",null,[c(u,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:l.value,"onUpdate:visible":i[1]||(i[1]=v=>l.value=v),position:"right"},{default:h(()=>[c(Fe,{submit:B(s),onClose:i[0]||(i[0]=v=>l.value=!1),"input-configs":a.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),B(n)&&B(p)==!1?(r(),g(ze,{key:0,columns:a.entityRepo.columns,data:B(n),onUpdate:P,onDelete:x,onCreate:w},{column:h(()=>[y(o.$slots,"column")]),_:3},8,["columns","data"])):(r(),b("main",Ve,[c(k)]))])}}});export{Ye as _};
