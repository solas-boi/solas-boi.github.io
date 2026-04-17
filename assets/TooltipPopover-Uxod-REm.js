import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{$ as f,a as m,h as b,f as x}from"./Dialog-DDvBM-Pk.js";import{u as n,l as s,d as r}from"./index-DO5xE0d-.js";import{b as v}from"./index-B_KGh3jf.js";import{$ as C}from"./Button-DoQgAJyY.js";import{C as B,D as y,a as T,A as k}from"./InlineTooltipIconButton-9BFuTZBQ.js";import{T as j}from"./Typography-Dcn0-GyB.js";import{u as w}from"./OverlayContext-BmgfW47V.js";const d="10px",D=r(f)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return s`
      z-index: ${o.zIndex} !important;
    `}}
`,P=r(m)`
  outline: none;
`,A=r(B)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return s`
      padding-right: calc(
        ${o.padding.right.large} - ${d}
      );
    `}}
`,E=r(j)`
  ${()=>{const{tokens:t}=n(),{scrollBar:o}=t;return s`
      overflow-y: auto;
      max-height: 45dvh;
      scrollbar-color: ${o.thumbColor} transparent;
      padding-right: ${d};
    `}}
`,c=r(C)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return s`
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
`,F=r.div`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return s`
      width: ${o.closeButton.icon.width};
      height: ${o.closeButton.icon.height};
      color: ${o.closeButton.icon.color.base};
      background: ${o.closeButton.icon.backgroundColor.base};
      border-radius: ${o.closeButton.icon.radius};

      ${c}[data-hovered] && {
        color: ${o.closeButton.icon.color.hover};
        background: ${o.closeButton.icon.backgroundColor.hover};
      }

      ${c}[data-pressed] && {
        color: ${o.closeButton.icon.color.active};
        background: ${o.closeButton.icon.backgroundColor.active};
      }

      ${c}[data-focus-visible] && {
        outline-width: ${o.closeButton.icon.focusRing.width};
        outline-style: ${o.closeButton.icon.focusRing.style};
        outline-color: ${o.closeButton.icon.focusRing.color};
      }
    `}}
`;function i({children:t}){return t}i.Trigger=b;i.Content=function(o){const{popoverProps:p,maxWidth:u,children:$,testID:h="tooltip-popover"}=o,{tokens:g}=n(),{tooltip:l}=g,{portalElement:a}=w();return e.jsx(x,{getContainer:a&&(()=>a),children:e.jsxs(D,{offset:T,placement:y,...p,"data-testid":h,children:[e.jsx(k,{}),e.jsx(P,{children:e.jsxs(A,{$maxWidth:u,children:[e.jsx(E,{color:l.color,variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:$}),e.jsx(c,{slot:"close","aria-label":"Close tooltip",children:e.jsx(F,{children:e.jsx(v,{})})})]})})]})})};i.displayName="TooltipPopover";i.Content.displayName="TooltipPopover.Content";i.Trigger.displayName="TooltipPopover.Trigger";export{i as T};
