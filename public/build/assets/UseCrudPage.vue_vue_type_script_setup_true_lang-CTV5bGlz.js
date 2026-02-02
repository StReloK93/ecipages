import{i as T,B as j,g as V,J as Q,h as y,e as r,w as h,c as b,l as g,n as f,y as m,T as X,K as J,m as w,F,a as C,z as q,t as I,p as E,L as G,M as H,I as _,N as W,j as M,k as ee,O as te,P as ae,Q as ne,Z as R,R as oe,d as A,v as K,S as le,r as U,C as ie,b as D,U as re,u as se,o as de}from"./app-Bugz-iNi.js";import{s as pe}from"./index-DEGCuByp.js";import{s as ue}from"./index-BGFKsGrr.js";import{m as ce}from"./index-CltI6m3I.js";import{d as fe}from"./index.esm-C88Gxk8I.js";import{a as me,s as be}from"./index-DvE1bJA_.js";var he=T`
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
`,ve={mask:function(t){var a=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{pointerEvents:"auto"}},we={mask:function(t){var a=t.instance,o=t.props,s=["left","right","top","bottom"],n=s.find(function(c){return c===o.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ye=j.extend({name:"drawer",style:he,classes:we,inlineStyles:ve}),ke={name:"BaseDrawer",extends:M,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:ye,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function P(e,t,a){return(t=ge(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(e){var t=Ce(e,"string");return S(t)=="symbol"?t:t+""}function Ce(e,t){if(S(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(S(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z={name:"Drawer",extends:ke,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&R.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&R.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&oe(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&R.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&ne(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ae()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&te()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ee(P(P(P({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:W},components:{Button:_,Portal:H,TimesIcon:G}},Le=["data-p"],$e=["aria-modal","data-p"];function Be(e,t,a,o,s,n){var c=V("Button"),u=V("Portal"),k=Q("focustrap");return r(),y(u,null,{default:h(function(){return[s.containerVisible?(r(),b("div",f({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[m(X,f({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:h(function(){return[e.visible?J((r(),b("div",f({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:n.hide}):(r(),b(F,{key:1},[C("div",f({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{class:q(e.cx("title"))},function(){return[e.header?(r(),b("div",f({key:0,class:e.cx("title")},e.ptm("title")),I(e.header),17)):g("",!0)]}),e.showCloseIcon?w(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[m(c,f({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:h(function(B){return[w(e.$slots,"closeicon",{},function(){return[(r(),y(E(e.closeIcon?"span":"TimesIcon"),f({class:[e.closeIcon,B.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):g("",!0)],16),C("div",f({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(r(),b("div",f({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):g("",!0)],64))],16,$e)),[[k]]):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Le)):g("",!0)]}),_:3})}Z.render=Be;var xe=T`
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
`,Se={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},De=j.extend({name:"floatlabel",style:xe,classes:Se}),Re={name:"BaseFloatLabel",extends:M,props:{variant:{type:String,default:"over"}},style:De,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},N={name:"FloatLabel",extends:Re,inheritAttrs:!1};function Pe(e,t,a,o,s,n){return r(),b("span",f({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}N.render=Pe;const Ie={class:"flex flex-col"},Ee=["for"],Ke={class:"flex gap-3 pb-4 -mb-4"},Fe=A({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const o=K(),s=a,n=K(!1),c=e,u=async i=>{i.valid&&(n.value=!0,console.log(i),await c.submit(i.values).finally(()=>{n.value=!1}),s("close"))},k=le(c.inputConfigs.reduce((i,l)=>(i[l.name]=l.value,i),{})),B=c.inputConfigs.reduce((i,l)=>(l.schema&&(i[l.name]=l.schema),i),{}),d=ce(fe().shape(B));return t({instance:o}),(i,l)=>{const v=N,L=ue,x=_,$=pe;return r(),y($,{ref_key:"instance",ref:o,"initial-values":k,resolver:D(d),onSubmit:u,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:h(z=>[w(i.$slots,"default"),C("div",Ie,[(r(!0),b(F,null,U(i.inputConfigs,(p,Y)=>{var O;return r(),b("main",{key:Y,class:q(p.class)},[p.placeholder?(r(),y(v,{key:0,variant:"on"},{default:h(()=>[(r(),y(E(p.component),f({input:p,name:p.name,id:p.name,ref_for:!0},p.props),null,16,["input","name","id"])),C("label",{for:p.name},I(p.placeholder),9,Ee)]),_:2},1024)):(r(),y(E(p.component),f({key:1,input:p,name:p.name,ref_for:!0},p.props),null,16,["input","name"])),(O=z[p.name])!=null&&O.invalid?(r(),y(L,{key:2,severity:"error",size:"small",variant:"simple"},{default:h(()=>[ie(I(z[p.name].error.message),1)]),_:2},1024)):g("",!0)],2)}),128))]),l[1]||(l[1]=C("div",{class:"grow"},null,-1)),C("footer",Ke,[m(x,{type:"button",size:"small",severity:"secondary",onClick:l[0]||(l[0]=p=>s("close")),label:"Bekor qilish",fluid:!0}),m(x,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),_e={class:"mb-1 text-end"},Ae=A({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,o)=>{const s=_,n=be,c=me;return r(),b("div",null,[C("main",_e,[m(s,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:o[0]||(o[0]=u=>a.$emit("create"))})]),m(c,{size:"small",value:t.data,dataKey:"id"},{default:h(()=>[(r(!0),b(F,null,U(t.columns,u=>(r(),y(n,{key:u.field,field:u.field,header:u.header},null,8,["field","header"]))),128)),w(a.$slots,"column"),m(n,{style:{width:"50px"}},{body:h(({data:u})=>[m(s,{icon:"pi pi-pencil",type:"button",onClick:k=>a.$emit("update",u),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),m(n,{style:{width:"50px"}},{body:h(({data:u})=>[m(s,{icon:"pi pi-trash",type:"button",onClick:k=>a.$emit("delete",u),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function ze(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ue=A({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=re(),a=e,o=K(!1);var s;const{data:n,execute:c}=se(a.entityRepo.index);async function u(){s=async d=>{await a.entityRepo.store(d),await c(),o.value=!1},await Promise.all(a.entityRepo.inputs.map(async d=>(d.generateProps&&await d.generateProps(),d.value=void 0,d))).finally(()=>{o.value=!0})}const k=d=>{t.require(ze(d.name,async()=>{var l,v;await a.entityRepo.destroy(d.id);const i=(l=n.value)==null?void 0:l.findIndex(L=>L.id==d.id);i>-1&&((v=n.value)==null||v.splice(i,1))}))};async function B(d){s=async l=>{var x;const{data:v}=await a.entityRepo.update(d.id,l),L=(x=n.value)==null?void 0:x.find($=>$.id==d.id);if(L)for(const $ in v)L[$]=v[$];o.value=!1};const{data:i}=await a.entityRepo.show(d.id);await Promise.all(a.entityRepo.inputs.map(async l=>(l.generateProps&&await l.generateProps(),l.value=i?i[l.name]:void 0,l))).finally(()=>{o.value=!0})}return de(()=>{c()}),(d,i)=>{const l=Z;return r(),b("div",null,[m(l,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:o.value,"onUpdate:visible":i[1]||(i[1]=v=>o.value=v),position:"right"},{default:h(()=>[m(Fe,{submit:D(s),onClose:i[0]||(i[0]=v=>o.value=!1),"input-configs":a.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),D(n)?(r(),y(Ae,{key:0,columns:a.entityRepo.columns,data:D(n),onUpdate:B,onDelete:k,onCreate:u},{column:h(()=>[w(d.$slots,"column")]),_:3},8,["columns","data"])):g("",!0)])}}});export{Ue as _};
