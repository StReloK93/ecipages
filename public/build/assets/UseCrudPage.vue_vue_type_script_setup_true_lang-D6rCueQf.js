import{h as T,B as q,e as z,A as G,g,f as c,w as v,c as h,i as C,m,k as b,T as H,C as J,l as w,F as A,a as L,n as M,t as E,j as I,D as Q,E as W,y as K,G as ee,s as Z,p as te,H as ae,I as ne,J as oe,Z as R,K as le,d as F,q as O,L as ie,u as D,r as N,v as re,M as se,o as de}from"./app-C4GmJSBZ.js";import{b as ce,s as pe,a as ue,c as fe}from"./index-B8-WGO63.js";import{e as me}from"./PrimeInputs-BpjKOdBv.js";import{u as be}from"./index-BGY1eZ2G.js";var he=T`
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
`,ve={mask:function(t){var a=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:a==="left"?"flex-start":a==="right"?"flex-end":"center",alignItems:a==="top"?"flex-start":a==="bottom"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{pointerEvents:"auto"}},ye={mask:function(t){var a=t.instance,o=t.props,s=["left","right","top","bottom"],n=s.find(function(u){return u===o.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal,"p-drawer-open":a.containerVisible,"p-drawer-full":a.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var a=t.instance;return["p-drawer p-component",{"p-drawer-full":a.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},we=q.extend({name:"drawer",style:he,classes:ye,inlineStyles:ve}),ke={name:"BaseDrawer",extends:Z,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:we,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function P(e,t,a){return(t=ge(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(e){var t=Ce(e,"string");return S(t)=="symbol"?t:t+""}function Ce(e,t){if(S(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t);if(S(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var U={name:"Drawer",extends:ke,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&R.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&R.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&le(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&R.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(s){return s&&s.querySelector("[autofocus]")},a=this.$slots.header&&t(this.headerContainer);a||(a=this.$slots.default&&t(this.container),a||(a=this.$slots.footer&&t(this.footerContainer),a||(a=this.closeButton))),a&&oe(a)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ne()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ae()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.isOutsideClicked(a)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return te(P(P(P({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:ee},components:{Button:K,Portal:W,TimesIcon:Q}},Le=["data-p"],$e=["aria-modal","data-p"];function Be(e,t,a,o,s,n){var u=z("Button"),d=z("Portal"),f=G("focustrap");return c(),g(d,null,{default:v(function(){return[s.containerVisible?(c(),h("div",m({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[b(H,m({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:v(function(){return[e.visible?J((c(),h("div",m({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?w(e.$slots,"container",{key:0,closeCallback:n.hide}):(c(),h(A,{key:1},[L("div",m({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[w(e.$slots,"header",{class:M(e.cx("title"))},function(){return[e.header?(c(),h("div",m({key:0,class:e.cx("title")},e.ptm("title")),E(e.header),17)):C("",!0)]}),e.showCloseIcon?w(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[b(u,m({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:v(function(k){return[w(e.$slots,"closeicon",{},function(){return[(c(),g(I(e.closeIcon?"span":"TimesIcon"),m({class:[e.closeIcon,k.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):C("",!0)],16),L("div",m({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16),e.$slots.footer?(c(),h("div",m({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[w(e.$slots,"footer")],16)):C("",!0)],64))],16,$e)),[[f]]):C("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Le)):C("",!0)]}),_:3})}U.render=Be;var xe=T`
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
`,Se={root:function(t){var a=t.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},De=q.extend({name:"floatlabel",style:xe,classes:Se}),Re={name:"BaseFloatLabel",extends:Z,props:{variant:{type:String,default:"over"}},style:De,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Y={name:"FloatLabel",extends:Re,inheritAttrs:!1};function Pe(e,t,a,o,s,n){return c(),h("span",m({class:e.cx("root")},e.ptmi("root")),[w(e.$slots,"default")],16)}Y.render=Pe;function Ee(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Ie(e){return!Ee(e)}function Oe(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}var V=(e,t)=>Oe(e)&&e.hasOwnProperty(t)?e:t?{[t]:e}:e,Ae=(e,t,a)=>async({values:o,name:s})=>{let{sync:n=!1,raw:u=!1}={};try{let d=await e[n?"validateSync":"validate"](o,{abortEarly:!1,...t});return{values:V(u?o:d,s),errors:{}}}catch(d){if(d!=null&&d.inner)return{values:V(u?o:void 0,s),errors:d.inner.reduce((f,k)=>{let l=Ie(k.path)?k.path:s;return l&&(f[l]||(f[l]=[]),f[l].push(k)),f},{})};throw d}};const Ke={class:"flex flex-col"},Fe=["for"],_e={class:"flex gap-3 pb-4 -mb-4"},je=F({__name:"BaseForm",props:{inputConfigs:{},submit:{type:Function},superRefine:{type:Function}},emits:["close"],setup(e,{expose:t,emit:a}){const o=O(),s=a,n=O(!1),u=e,d=async r=>{r.valid&&(n.value=!0,console.log(r),await u.submit(r.values).finally(()=>{n.value=!1}),s("close"))},f=ie(u.inputConfigs.reduce((r,i)=>(r[i.name]=i.value,r),{})),k=u.inputConfigs.reduce((r,i)=>(i.schema&&(r[i.name]=i.schema),r),{}),l=Ae(me().shape(k));return t({instance:o}),(r,i)=>{const y=Y,$=pe,x=K,B=ce;return c(),g(B,{ref_key:"instance",ref:o,"initial-values":f,resolver:D(l),onSubmit:d,class:"flex flex-col gap-4 w-full h-full pt-2"},{default:v(_=>[w(r.$slots,"default"),L("div",Ke,[(c(!0),h(A,null,N(r.inputConfigs,(p,X)=>{var j;return c(),h("main",{key:X,class:M(p.class)},[p.placeholder?(c(),g(y,{key:0,variant:"on"},{default:v(()=>[(c(),g(I(p.component),m({input:p,name:p.name,id:p.name,ref_for:!0},p.props),null,16,["input","name","id"])),L("label",{for:p.name},E(p.placeholder),9,Fe)]),_:2},1024)):(c(),g(I(p.component),m({key:1,input:p,name:p.name,ref_for:!0},p.props),null,16,["input","name"])),(j=_[p.name])!=null&&j.invalid?(c(),g($,{key:2,severity:"error",size:"small",variant:"simple"},{default:v(()=>[re(E(_[p.name].error.message),1)]),_:2},1024)):C("",!0)],2)}),128))]),i[1]||(i[1]=L("div",{class:"grow"},null,-1)),L("footer",_e,[b(x,{type:"button",size:"small",severity:"secondary",onClick:i[0]||(i[0]=p=>s("close")),label:"Bekor qilish",fluid:!0}),b(x,{type:"submit",size:"small",label:"Saqlash",fluid:!0,loading:n.value},null,8,["loading"])])]),_:3,__:[1]},8,["initial-values","resolver"])}}}),ze={class:"mb-1 text-end"},Ve=F({__name:"CrudTable",props:{columns:{},data:{}},setup(e){const t=e;return(a,o)=>{const s=K,n=ue,u=fe;return c(),h("div",null,[L("main",ze,[b(s,{icon:"pi pi-plus",label:"Qo'shish",size:"small",severity:"contrast",onClick:o[0]||(o[0]=d=>a.$emit("create"))})]),b(u,{size:"small",value:t.data,dataKey:"id"},{default:v(()=>[(c(!0),h(A,null,N(t.columns,d=>(c(),g(n,{key:d.field,field:d.field,header:d.header},null,8,["field","header"]))),128)),w(a.$slots,"column"),b(n,{style:{width:"50px"}},{body:v(({data:d})=>[b(s,{icon:"pi pi-pencil",type:"button",onClick:f=>a.$emit("update",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1}),b(n,{style:{width:"50px"}},{body:v(({data:d})=>[b(s,{icon:"pi pi-trash",type:"button",onClick:f=>a.$emit("delete",d),severity:"secondary",variant:"text",rounded:""},null,8,["onClick"])]),_:1})]),_:3},8,["value"])])}}});function Te(e,t){return{message:`(${e}) - Aniq o'chirmoqchimisiz?`,header:"O'chirish",rejectProps:{label:"Bekor qilish",severity:"secondary",outlined:!0},acceptProps:{label:"O'chirish",severity:"danger"},accept:t}}const Ue=F({__name:"UseCrudPage",props:{entityRepo:{}},setup(e){const t=se(),a=e,o=O(!1);var s;const{data:n,execute:u}=be(a.entityRepo.index);async function d(){s=async l=>{await a.entityRepo.store(l),await u(),o.value=!1},await Promise.all(a.entityRepo.inputs.map(async l=>(l.generateProps&&await l.generateProps(),l.value=void 0,l))).finally(()=>{o.value=!0})}const f=l=>{t.require(Te(l.name,async()=>{var i,y;await a.entityRepo.destroy(l.id);const r=(i=n.value)==null?void 0:i.findIndex($=>$.id==l.id);r>-1&&((y=n.value)==null||y.splice(r,1))}))};async function k(l){s=async i=>{var x;const{data:y}=await a.entityRepo.update(l.id,i),$=(x=n.value)==null?void 0:x.find(B=>B.id==l.id);if($)for(const B in y)$[B]=y[B];o.value=!1};const{data:r}=await a.entityRepo.show(l.id);await Promise.all(a.entityRepo.inputs.map(async i=>(i.generateProps&&await i.generateProps(),i.value=r?r[i.name]:void 0,i))).finally(()=>{o.value=!0})}return de(()=>{u()}),(l,r)=>{const i=U;return c(),h("div",null,[b(i,{header:"Bo'linma qo'shish","show-close-icon":!1,visible:o.value,"onUpdate:visible":r[1]||(r[1]=y=>o.value=y),position:"right"},{default:v(()=>[b(je,{submit:D(s),onClose:r[0]||(r[0]=y=>o.value=!1),"input-configs":a.entityRepo.inputs},null,8,["submit","input-configs"])]),_:1},8,["visible"]),D(n)?(c(),g(Ve,{key:0,columns:a.entityRepo.columns,data:D(n),onUpdate:k,onDelete:f,onCreate:d},{column:v(()=>[w(l.$slots,"column")]),_:3},8,["columns","data"])):C("",!0)])}}});export{Ue as _};
