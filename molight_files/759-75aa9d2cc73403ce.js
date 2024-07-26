"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{88241:function(e,t,n){n.d(t,{M:function(){return v}});var r=n(2784),o=n(28723),a=n(58387),i=n(23617);function l(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=n(97967),s=n(3105);class c extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:l}=a.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),r.createElement(c,{isPresent:t,childRef:o,sizeRef:a},r.cloneElement(e,{ref:o}))}let d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:a,presenceAffectsLayout:i,mode:l})=>{let c=(0,s.h)(m),d=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;o&&o()},register:e=>(c.set(e,!1),()=>c.delete(e))}),i?void 0:[n]);return(0,r.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[n]),r.useEffect(()=>{n||c.size||!o||o()},[n]),"popLayout"===l&&(e=r.createElement(f,{isPresent:n},e)),r.createElement(u.O.Provider,{value:p},e)};function m(){return new Map}var p=n(3422),h=n(96073),g=n(74963);let y=e=>e.key||"",v=({children:e,custom:t,initial:n=!0,onExitComplete:u,exitBeforeEnter:s,presenceAffectsLayout:c=!0,mode:f="sync"})=>{s&&(f="wait",(0,g.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[m]=function(){let e=l(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),i=(0,r.useCallback)(()=>a.Z_.postRender(o),[o]);return[i,t]}(),v=(0,r.useContext)(p.p).forceRender;v&&(m=v);let E=l(),w=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),C=w,x=new Set,S=(0,r.useRef)(C),b=(0,r.useRef)(new Map).current,L=(0,r.useRef)(!0);if((0,i.L)(()=>{L.current=!1,function(e,t){e.forEach(e=>{let n=y(e);t.set(n,e)})}(w,b),S.current=C}),(0,h.z)(()=>{L.current=!0,b.clear(),x.clear()}),L.current)return r.createElement(r.Fragment,null,C.map(e=>r.createElement(d,{key:y(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:c,mode:f},e)));C=[...C];let P=S.current.map(y),A=w.map(y),R=P.length;for(let e=0;e<R;e++){let t=P[e];-1===A.indexOf(t)&&x.add(t)}return"wait"===f&&x.size&&(C=[]),x.forEach(e=>{if(-1!==A.indexOf(e))return;let n=b.get(e);if(!n)return;let o=P.indexOf(e),a=()=>{b.delete(e),x.delete(e);let t=S.current.findIndex(t=>t.key===e);if(S.current.splice(t,1),!x.size){if(S.current=w,!1===E.current)return;m(),u&&u()}};C.splice(o,0,r.createElement(d,{key:y(n),isPresent:!1,onExitComplete:a,custom:t,presenceAffectsLayout:c,mode:f},n))}),C=C.map(e=>{let t=e.key;return x.has(t)?e:r.createElement(d,{key:y(e),isPresent:!0,presenceAffectsLayout:c,mode:f},e)}),"production"!==o.O&&"wait"===f&&C.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,x.size?C:C.map(e=>(0,r.cloneElement)(e)))}},89372:function(e,t,n){n.d(t,{m:function(){return K}});var r,o=n(2784),a=n(60976);let i=(0,o.createContext)({});var l=n(97967),u=n(23617),s=n(3273),c=n(8350),f=n(20330),d=n(23293);function m(e){return Array.isArray(e)?e.join(" "):e}var p=n(7397),h=n(94293),g=n(33791),y=n(3105),v=n(63722);let E=1;var w=n(3422);class C extends o.Component{getSnapshotBeforeUpdate(){let{visualElement:e,props:t}=this.props;return e&&e.setProps(t),null}componentDidUpdate(){}render(){return this.props.children}}var x=n(64460);let S=Symbol.for("motionComponentSymbol");var b=n(75866),L=n(41980),P=n(15815),A=n(62411);let R=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function k(e,t,n){for(let r in t)(0,P.i)(t[r])||(0,L.j)(r,n)||(e[r]=t[r])}function M(e,t,n){let r={},a=function(e,t,n){let r=e.style||{},a={};return k(a,r,e),Object.assign(a,function({transformTemplate:e},t,n){return(0,o.useMemo)(()=>{let r=R();return(0,A.r)(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(a):a}(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),r.style=a,r}let T=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll","whileInView","onViewportEnter","onViewportLeave","viewport","whileTap","onTap","onTapStart","onTapCancel","animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView","onPan","onPanStart","onPanSessionStart","onPanEnd"]);function V(e){return T.has(e)}let D=e=>!V(e);try{(r=require("@emotion/is-prop-valid").default)&&(D=e=>e.startsWith("on")?!V(e):r(e))}catch(e){}var I=n(10658);let O=()=>({...R(),attrs:{}});var U=n(13336);function B(e,t,n,r){let a=(0,o.useMemo)(()=>{let n=O();return(0,I.i)(n,t,{enableHardwareAcceleration:!1},(0,U.a)(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};k(t,e.style,e),a.style={...t,...a.style}}return a}var _=n(13517),j=n(7587),H=n(12816),$=n(99764),z=n(69535);let F=e=>(t,n)=>{let r=(0,o.useContext)(i),a=(0,o.useContext)(l.O),u=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){let i={latestValues:function(e,t,n,r){let o={},a=r(e);for(let e in a)o[e]=(0,z.b)(a[e]);let{initial:i,animate:l}=e,u=(0,d.G)(e),s=(0,d.M)(e);t&&s&&!u&&!1!==e.inherit&&(void 0===i&&(i=t.initial),void 0===l&&(l=t.animate));let c=!!n&&!1===n.initial;c=c||!1===i;let f=c?l:i;if(f&&"boolean"!=typeof f&&!(0,H.H)(f)){let t=Array.isArray(f)?f:[f];t.forEach(t=>{let n=(0,$.o)(e,t);if(!n)return;let{transitionEnd:r,transition:a,...i}=n;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(o[e]=t)}for(let e in r)o[e]=r[e]})}return o}(r,o,a,e),renderState:t()};return n&&(i.mount=e=>n(r,e,i)),i})(e,t,r,a);return n?u():(0,y.h)(u)},W={useVisualState:F({scrapeMotionValuesFromProps:j.U,createRenderState:O,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){n.dimensions={x:0,y:0,width:0,height:0}}(0,I.i)(n,r,{enableHardwareAcceleration:!1},(0,U.a)(t.tagName),e.transformTemplate),(0,_.K)(t,n)}})};var N=n(53921);let q={useVisualState:F({scrapeMotionValuesFromProps:N.U,createRenderState:R})},K=function(e){function t(t,n={}){return function({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:b,Component:L}){e&&(0,h.K)(e);let P=(0,o.forwardRef)(function(h,S){var P,A;let R={...(0,o.useContext)(a._),...h,layoutId:function({layoutId:e}){let t=(0,o.useContext)(w.p).id;return t&&void 0!==e?t+"-"+e:e}(h)},{isStatic:k}=R,M=null,T=function(e){let{initial:t,animate:n}=function(e,t){if((0,d.G)(e)){let{initial:t,animate:n}=e;return{initial:!1===t||(0,f.$)(t)?t:void 0,animate:(0,f.$)(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,o.useContext)(i));return(0,o.useMemo)(()=>({initial:t,animate:n}),[m(t),m(n)])}(h),V=k?void 0:(0,y.h)(()=>{if(v.V.hasEverUpdated)return E++}),D=b(h,k);if(!k&&g.j){T.visualElement=function(e,t,n,r){let c=(0,o.useContext)(i).visualElement,f=(0,o.useContext)(s.u),d=(0,o.useContext)(l.O),m=(0,o.useContext)(a._).reducedMotion,p=(0,o.useRef)();r=r||f.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:c,props:n,presenceId:d?d.id:void 0,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:m}));let h=p.current;return(0,u.L)(()=>{h&&h.render()}),(0,u.L)(()=>{h&&h.animationState&&h.animationState.animateChanges()}),(0,u.L)(()=>()=>h&&h.notify("Unmount"),[]),h}(L,D,R,t);let r=(0,o.useContext)(s.u).strict,c=(0,o.useContext)(x.g);T.visualElement&&(M=T.visualElement.loadFeatures(R,r,e,V,n||p.A.projectionNodeConstructor,c))}return o.createElement(C,{visualElement:T.visualElement,props:R},M,o.createElement(i.Provider,{value:T},r(L,h,V,(P=T.visualElement,A=S,(0,o.useCallback)(e=>{e&&D.mount&&D.mount(e),P&&(e?P.mount(e):P.unmount()),A&&("function"==typeof A?A(e):(0,c.I)(A)&&(A.current=e))},[P])),D,k,T.visualElement)))});return P[S]=L,P}(e(t,n))}if("undefined"==typeof Proxy)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}(function(e,{forwardMotionProps:t=!1},n,r,a){let i=(0,b.q)(e)?W:q;return{...i,preloadedFeatures:n,useRender:function(e=!1){let t=(t,n,r,a,{latestValues:i},l)=>{let u=(0,b.q)(t)?B:M,s=u(n,i,l,t),c=function(e,t,n){let r={};for(let o in e)(D(o)||!0===n&&V(o)||!t&&!V(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(n,"string"==typeof t,e),f={...c,...s,ref:a};return r&&(f["data-projection-id"]=r),(0,o.createElement)(t,f)};return t}(t),createVisualElement:r,projectionNodeConstructor:a,Component:e}})},23617:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(2784),o=n(33791);let a=o.j?r.useLayoutEffect:r.useEffect}}]);