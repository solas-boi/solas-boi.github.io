import{j as c}from"./jsx-runtime-Blucd9Qg.js";import{r as a}from"./index-CcKhGcwW.js";import{a as v,d as I}from"./FocusScope-ozmm2sIM.js";import{O as V}from"./OverlayContext-BmgfW47V.js";import{u as w,p as f,y as h}from"./index-SVU_pXp3.js";import{j as S,c as W,k as C}from"./useFocusRing-C58TIrH0.js";import{n as H}from"./utils-Clm8nLOM.js";import{a as L}from"./usePreventScroll-CrCA2VL3.js";let s=typeof document<"u"&&window.visualViewport;function F(){let o=H(),[e,t]=a.useState(()=>o?{width:0,height:0}:g());return a.useEffect(()=>{let n=r=>{t(d=>r.width===d.width&&r.height===d.height?d:r)},i=()=>{s&&s.scale>1||n(g())},l,u=r=>{s&&s.scale>1||v(W(r))&&(l=requestAnimationFrame(()=>{let d=C();(!d||!v(d))&&n({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})}))};return n(g()),S()&&window.addEventListener("blur",u,!0),s?s.addEventListener("resize",i):window.addEventListener("resize",i),()=>{cancelAnimationFrame(l),S()&&window.removeEventListener("blur",u,!0),s?s.removeEventListener("resize",i):window.removeEventListener("resize",i)}},[]),e}function g(){return{width:s?s.width*s.scale:document.documentElement.clientWidth,height:s?s.height*s.scale:document.documentElement.clientHeight}}const D=h.dialog`
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
  ${({$viewportWidth:o,$tabletWidth:e})=>{const{tokens:t}=w(),{modal:n}=t,i=o-parseInt(n.padding.tablet,10)*2;return f`
      width: ${n.width.mobile};
      min-width: ${n.minWidth.mobile-parseInt(n.padding.mobile,10)*2};
      max-width: ${n.maxWidth.mobile};
      border-top-left-radius: ${n.radius};
      border-top-right-radius: ${n.radius};
      background: ${n.backgroundColor};
      overflow: hidden;

      @media (min-width: ${n.breakpoints.tablet}) {
        width: ${e&&e<i?`${e}px`:n.width.tablet};
        min-width: ${n.minWidth.tablet};
        max-width: ${n.maxWidth.tablet};
        border-bottom-left-radius: ${n.radius};
        border-bottom-right-radius: ${n.radius};
      }
    `}}
`,A=a.forwardRef((o,e)=>{const{width:t}=F();return c.jsx(z,{...o,ref:e,$viewportWidth:t})});function B(o,e){a.useEffect(()=>{const t=o.current;t&&(e&&!t.open?(t.showModal(),t.focus()):!e&&t.open&&t.close())},[e])}function M(o,e){a.useEffect(()=>{const t=o.current;function n(i){i.key==="Escape"&&(i.preventDefault(),e==null||e())}if(t)return t.addEventListener("keydown",n),()=>{t.removeEventListener("keydown",n)}},[e])}function E(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function te(o){const{isOpen:e,onRequestClose:t,children:n,testID:i="modal",tabletWidth:l,...u}=o,r=a.useRef(null),d=a.useRef(null),[m,y]=a.useState();function j(p){p&&y(p)}B(r,e),M(r,t),a.useEffect(()=>{if(!e||E())return;const p=requestAnimationFrame(()=>{const b=r.current,x=d.current;b&&document.activeElement===b?(b.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??x??b).focus():x&&!(b!=null&&b.contains(document.activeElement))&&x.focus()});return()=>cancelAnimationFrame(p)},[e]);const R=p=>{p.stopPropagation()};L({isDisabled:!e});let $=c.jsx(D,{...u,ref:r,"aria-modal":!0,tabIndex:-1,"data-testid":i,onClick:t,children:c.jsxs(A,{ref:d,tabIndex:-1,onClick:R,$tabletWidth:l,children:[n,c.jsx("div",{ref:j})]})});return E()||($=c.jsx(I,{contain:e,restoreFocus:!0,children:$})),c.jsx(V,{portalElement:m,children:$})}const O=h.div`
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
`,T=h(k)`
  ${({$visible:o})=>{const{tokens:e}=w(),{scrollShadowContainer:t}=e;return[f`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,o&&f`
          transform: translateY(0px);
        `]}}
`,Y=h(k)`
  ${({$visible:o})=>{const{tokens:e}=w(),{scrollShadowContainer:t}=e;return[f`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,o&&f`
          transform: translateY(0px);
        `]}}
`,K=h.div`
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
`;function G(o){const e=a.useRef(null),t=a.useRef(null),[n,i]=a.useState(!1),[l,u]=a.useState(!1);return a.useEffect(()=>{o==null||o({topShadowVisible:n,bottomShadowVisible:l})},[o,n,l]),a.useEffect(()=>{if(!e.current||!t.current)return;const r=new IntersectionObserver(([m])=>{m&&i(!m.isIntersecting)}),d=new IntersectionObserver(([m])=>{m&&u(!m.isIntersecting)});return r.observe(e.current),d.observe(t.current),()=>{r.disconnect(),d.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:n,bottomShadowVisible:l}}function oe(o){const{tabIndex:e,onChange:t,children:n}=o,{topShadowRef:i,bottomShadowRef:l,topShadowVisible:u,bottomShadowVisible:r}=G(t);return c.jsxs(O,{children:[c.jsx(T,{$visible:u,"aria-hidden":!0}),c.jsxs(K,{tabIndex:e,children:[c.jsx("div",{ref:i}),n,c.jsx("div",{ref:l})]}),c.jsx(Y,{$visible:r,"aria-hidden":!0})]})}export{P as C,te as M,oe as S};
