import{j as c}from"./jsx-runtime-Blucd9Qg.js";import{r as s}from"./index-CcKhGcwW.js";import{a as v,d as I}from"./FocusScope-84k3iHyc.js";import{O as V}from"./OverlayContext-BmgfW47V.js";import{u as w,l as f,d as h}from"./index-C1QKVHyt.js";import{g as S,c as H,h as L}from"./useFocusRing-B474fW51.js";import{n as C}from"./utils-Clm8nLOM.js";import{a as W}from"./usePreventScroll-pejc0gr9.js";let a=typeof document<"u"&&window.visualViewport;function F(){let o=C(),[e,t]=s.useState(()=>o?{width:0,height:0}:g());return s.useEffect(()=>{let n=r=>{t(d=>r.width===d.width&&r.height===d.height?d:r)},i=()=>{a&&a.scale>1||n(g())},l,u=r=>{a&&a.scale>1||v(H(r))&&(l=requestAnimationFrame(()=>{let d=L();(!d||!v(d))&&n({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})}))};return n(g()),S()&&window.addEventListener("blur",u,!0),a?a.addEventListener("resize",i):window.addEventListener("resize",i),()=>{cancelAnimationFrame(l),S()&&window.removeEventListener("blur",u,!0),a?a.removeEventListener("resize",i):window.removeEventListener("resize",i)}},[]),e}function g(){return{width:a?a.width*a.scale:document.documentElement.clientWidth,height:a?a.height*a.scale:document.documentElement.clientHeight}}const D=h.dialog`
  ${()=>{const{tokens:o}=w(),{modal:e}=o;return f`
      display: none;
      align-items: end;
      justify-items: center;
      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;
      border: none;
      padding: 0;
      background: none;
      outline: none;

      &[open] {
        display: grid;
      }

      @media (min-width: ${e.breakpoints.tablet}) {
        align-items: center;
        max-width: calc(100vw - (${e.padding.tablet} * 2));
        max-height: calc(100vh - (${e.padding.tablet} * 2));
      }

      &::backdrop {
        background: ${e.backdrop.backgroundColor};
      }
    `}}
`,P=h.div`
  ${()=>{const{tokens:o}=w(),{modal:e}=o,t=parseInt(e.maxHeight.tablet)+parseInt(e.padding.tablet)*2+"px";return f`
      min-height: ${e.minHeight.mobile};
      max-height: ${e.maxHeight.mobile};
      overflow-wrap: anywhere;

      @media (min-width: ${e.breakpoints.tablet}) {
        min-height: ${e.minHeight.tablet};
        max-height: calc(100vh - (${e.padding.tablet} * 2));

        @media (min-height: ${t}) {
          max-height: ${e.maxHeight.tablet};
        }
      }
    `}}
`,z=h(P)`
  ${({$tabletWidth:o})=>{const{tokens:e}=w(),{modal:t}=e,{width:n}=F(),i=n-parseInt(t.padding.tablet,10)*2;return f`
      width: ${t.width.mobile};
      min-width: ${t.minWidth.mobile-parseInt(t.padding.mobile,10)*2};
      max-width: ${t.maxWidth.mobile};
      border-top-left-radius: ${t.radius};
      border-top-right-radius: ${t.radius};
      background: ${t.backgroundColor};
      overflow: hidden;

      @media (min-width: ${t.breakpoints.tablet}) {
        width: ${o&&o<i?`${o}px`:t.width.tablet};
        min-width: ${t.minWidth.tablet};
        max-width: ${t.maxWidth.tablet};
        border-bottom-left-radius: ${t.radius};
        border-bottom-right-radius: ${t.radius};
      }
    `}}
`;function A(o,e){s.useEffect(()=>{const t=o.current;t&&(e&&!t.open?(t.showModal(),t.focus()):!e&&t.open&&t.close())},[e])}function B(o,e){s.useEffect(()=>{const t=o.current;function n(i){i.key==="Escape"&&(i.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",n),()=>{t.removeEventListener("keydown",n)}},[e])}function E(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function ee(o){const{isOpen:e,onRequestClose:t,children:n,testID:i="modal",tabletWidth:l,...u}=o,r=s.useRef(null),d=s.useRef(null),[m,j]=s.useState();function y(p){p&&j(p)}A(r,e),B(r,t),s.useEffect(()=>{if(!e||E())return;const p=requestAnimationFrame(()=>{const b=r.current,x=d.current;b&&document.activeElement===b?(b.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??x??b).focus():x&&!(b!=null&&b.contains(document.activeElement))&&x.focus()});return()=>cancelAnimationFrame(p)},[e]);const R=p=>{p.stopPropagation()};W({isDisabled:!e});let $=c.jsx(D,{...u,ref:r,"aria-modal":!0,tabIndex:-1,"data-testid":i,onClick:t,children:c.jsxs(z,{ref:d,tabIndex:-1,onClick:R,$tabletWidth:l,children:[n,c.jsx("div",{ref:y})]})});return E()||($=c.jsx(I,{contain:e,restoreFocus:!0,children:$})),c.jsx(V,{portalElement:m,children:$})}const M=h.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,k=h.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,O=h(k)`
  ${({$visible:o})=>{const{tokens:e}=w(),{scrollShadowContainer:t}=e;return[f`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,o&&f`
          transform: translateY(0px);
        `]}}
`,T=h(k)`
  ${({$visible:o})=>{const{tokens:e}=w(),{scrollShadowContainer:t}=e;return[f`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,o&&f`
          transform: translateY(0px);
        `]}}
`,Y=h.div`
  ${()=>{const{tokens:{scrollShadowContainer:o,scrollBar:{thumbColor:e,trackColor:t}}}=w();return f`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${e} ${t};

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`;function K(o){const e=s.useRef(null),t=s.useRef(null),[n,i]=s.useState(!1),[l,u]=s.useState(!1);return s.useEffect(()=>{o==null||o({topShadowVisible:n,bottomShadowVisible:l})},[o,n,l]),s.useEffect(()=>{if(!e.current||!t.current)return;const r=new IntersectionObserver(([m])=>{m&&i(!m.isIntersecting)}),d=new IntersectionObserver(([m])=>{m&&u(!m.isIntersecting)});return r.observe(e.current),d.observe(t.current),()=>{r.disconnect(),d.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:n,bottomShadowVisible:l}}function te(o){const{tabIndex:e,onChange:t,children:n}=o,{topShadowRef:i,bottomShadowRef:l,topShadowVisible:u,bottomShadowVisible:r}=K(t);return c.jsxs(M,{children:[c.jsx(O,{$visible:u,"aria-hidden":!0}),c.jsxs(Y,{tabIndex:e,children:[c.jsx("div",{ref:i}),n,c.jsx("div",{ref:l})]}),c.jsx(T,{$visible:r,"aria-hidden":!0})]})}export{P as C,ee as M,te as S};
