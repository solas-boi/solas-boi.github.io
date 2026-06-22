import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{u as p,i as u}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as f}from"./Text-DtQ0Coqa.js";import{u as l}from"./index-CgLgilxD.js";import{I as g}from"./InlineAlert-4LuJOH3h.js";import{r as b}from"./index-CcKhGcwW.js";import{$ as x}from"./Label-DSRs3bn3.js";import{T as d}from"./Typography-BYRdA7Ce.js";import{T as s}from"./TooltipPopover-CtEPaHq9.js";import{I as j}from"./InlineTooltipIconButton-Bv-YOaOJ.js";const $=p.div`
  ${({$gap:o="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${o};
  `}
`;function E(o){const{alert:n,gap:r,children:a}=o;return t.jsxs($,{$gap:r,children:[a,n&&n]})}const T=p(f)`
  ${()=>{const{tokens:o}=l(),{spacing:n}=o;return u`
      display: grid;
      gap: ${n.s4};
    `}}
`;function V(o){const{slot:n="errorMessage",alerts:r}=o;return(r==null?void 0:r.length)===0?null:t.jsx(T,{elementType:"div",slot:n,children:r.map(a=>t.jsx(g,{withRole:!1,...a},a.children))})}const v=p.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:n}=o;return u`
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`;function m(o){const{iconButtonProps:n,otherIconButtonProps:r,contentProps:a}=o;return t.jsx(s,{children:t.jsxs(s.Trigger,{children:[t.jsx(j,{...n,...r}),t.jsx(s.Content,{...a})]})})}const I=b.forwardRef((o,n)=>{const{label:r,labelTooltipProps:a,labelHint:e,labelHintTooltipProps:c,children:h}=o,{tokens:y}=l(),{inputLabelTop:i}=y;return t.jsxs(v,{ref:n,children:[(r||e)&&t.jsxs("div",{children:[r&&t.jsxs(d,{component:"div",color:i.label.color,variant:i.label.typography.variant,fontFamily:i.label.typography.fontFamily,children:[t.jsx(x,{children:r}),a&&t.jsx(m,{...a,otherIconButtonProps:{variant:"default",typographyVariant:i.label.typography.variant}})]}),e&&t.jsxs(d,{component:"div",color:i.labelHint.color,variant:i.labelHint.typography.variant,fontFamily:i.labelHint.typography.fontFamily,children:[t.jsx(f,{slot:"description",children:e}),c&&t.jsx(m,{...c,otherIconButtonProps:{variant:"default20",typographyVariant:i.labelHint.typography.variant}})]})]}),h]})});I.displayName="InputLabelTop";export{E as I,I as a,V as b};
