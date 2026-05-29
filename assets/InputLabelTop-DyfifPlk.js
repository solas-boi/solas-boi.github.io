import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{y as p,u as l,p as f}from"./index-Z8nU1pHX.js";import{$ as m}from"./Text-DtQ0Coqa.js";import{I as g}from"./InlineAlert-DYpJZZ_s.js";import{r as b}from"./index-CcKhGcwW.js";import{$ as x}from"./Label-DSRs3bn3.js";import{T as d}from"./Typography-DVnGbd4X.js";import{T as s}from"./TooltipPopover-B0YtttQt.js";import{I as j}from"./InlineTooltipIconButton-Dso8X5LQ.js";const $=p.div`
  ${({$gap:o="8px"})=>`
    display: grid;
    justify-items: start;
    gap: ${o};
  `}
`;function A(o){const{alert:n,gap:r,children:a}=o;return t.jsxs($,{$gap:r,children:[a,n&&n]})}const T=p(m)`
  ${()=>{const{tokens:o}=l(),{spacing:n}=o;return f`
      display: grid;
      gap: ${n.s4};
    `}}
`;function E(o){const{slot:n="errorMessage",alerts:r}=o;return(r==null?void 0:r.length)===0?null:t.jsx(T,{elementType:"div",slot:n,children:r.map(a=>t.jsx(g,{withRole:!1,...a},a.children))})}const v=p.div`
  ${()=>{const{tokens:o}=l(),{inputLabelTop:n}=o;return f`
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`;function y(o){const{iconButtonProps:n,otherIconButtonProps:r,contentProps:a}=o;return t.jsx(s,{children:t.jsxs(s.Trigger,{children:[t.jsx(j,{...n,...r}),t.jsx(s.Content,{...a})]})})}const I=b.forwardRef((o,n)=>{const{label:r,labelTooltipProps:a,labelHint:i,labelHintTooltipProps:c,children:u}=o,{tokens:h}=l(),{inputLabelTop:e}=h;return t.jsxs(v,{ref:n,children:[(r||i)&&t.jsxs("div",{children:[r&&t.jsxs(d,{component:"div",color:e.label.color,variant:e.label.typography.variant,fontFamily:e.label.typography.fontFamily,children:[t.jsx(x,{children:r}),a&&t.jsx(y,{...a,otherIconButtonProps:{variant:"default",typographyVariant:e.label.typography.variant}})]}),i&&t.jsxs(d,{component:"div",color:e.labelHint.color,variant:e.labelHint.typography.variant,fontFamily:e.labelHint.typography.fontFamily,children:[t.jsx(m,{slot:"description",children:i}),c&&t.jsx(y,{...c,otherIconButtonProps:{variant:"default20",typographyVariant:e.labelHint.typography.variant}})]})]}),u]})});I.displayName="InputLabelTop";export{A as I,I as a,E as b};
