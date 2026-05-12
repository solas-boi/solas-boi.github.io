import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as u}from"./index-CcKhGcwW.js";import{$ as h,a as g,h as m,f as b}from"./Dialog-CpjsrLqg.js";import{u as n,p as i,y as r}from"./index-SVU_pXp3.js";import{b as x}from"./index-CRAeHTmb.js";import{$ as v}from"./Button-rLog8i9z.js";import{C as y,D as C,a as B,A as T}from"./InlineTooltipIconButton-DpJWYOkZ.js";import{T as k}from"./Typography-Bg4pE1zg.js";import{u as j}from"./OverlayContext-BmgfW47V.js";const $="10px",E=r(h)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return i`
      z-index: ${o.zIndex} !important;
    `}}
`,w=r(g)`
  position: relative;
  z-index: 1;
  outline: none;
`,D=r(y)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return i`
      padding-right: calc(
        ${o.padding.right.large} - ${$}
      );
    `}}
`,P=r(k)`
  ${()=>{const{tokens:t}=n(),{scrollBar:o}=t;return i`
      overflow-y: auto;
      max-height: 45dvh;
      scrollbar-color: ${o.thumbColor} transparent;
      padding-right: ${$};
      outline: none;
    `}}
`,p=r(v)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return i`
      all: unset;
      position: absolute;
      top: 0;
      right: 0;
      display: grid;
      place-items: center;
      width: ${o.closeButton.width};
      height: ${o.closeButton.height};
      cursor: pointer;
    `}}
`,A=r.div`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return i`
      width: ${o.closeButton.icon.width};
      height: ${o.closeButton.icon.height};
      color: ${o.closeButton.icon.color.base};
      background: ${o.closeButton.icon.backgroundColor.base};
      border-radius: ${o.closeButton.icon.radius};

      ${p}[data-hovered] && {
        color: ${o.closeButton.icon.color.hover};
        background: ${o.closeButton.icon.backgroundColor.hover};
      }

      ${p}[data-pressed] && {
        color: ${o.closeButton.icon.color.active};
        background: ${o.closeButton.icon.backgroundColor.active};
      }

      ${p}[data-focus-visible] && {
        outline-width: ${o.closeButton.icon.focusRing.width};
        outline-style: ${o.closeButton.icon.focusRing.style};
        outline-color: ${o.closeButton.icon.focusRing.color};
      }
    `}}
`;function c({children:t}){return t}c.Trigger=m;c.Content=function(o){const{popoverProps:s,maxWidth:a,children:l,testID:f="tooltip-popover"}=o,{portalElement:d}=j();return e.jsx(b,{getContainer:d&&(()=>d),children:e.jsxs(E,{offset:B,placement:C,...s,"data-testid":f,children:[e.jsx(T,{}),e.jsx(w,{children:e.jsxs(D,{$maxWidth:a,children:[e.jsx(I,{children:l}),e.jsx(p,{slot:"close","aria-label":"Close tooltip",children:e.jsx(A,{children:e.jsx(x,{})})})]})})]})})};function I({children:t}){const{tokens:o}=n(),{tooltip:s}=o,a=u.useRef(null);return u.useLayoutEffect(()=>{var l;(l=a.current)==null||l.focus()},[]),e.jsx(P,{ref:a,tabIndex:0,color:s.color,variant:s.typography.variant,fontFamily:s.typography.fontFamily,children:t})}c.displayName="TooltipPopover";c.Content.displayName="TooltipPopover.Content";c.Trigger.displayName="TooltipPopover.Trigger";export{c as T};
