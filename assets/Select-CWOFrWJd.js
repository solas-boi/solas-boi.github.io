import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as h}from"./ListBox-DukHjE5h.js";import{$ as j,a as $}from"./Select-BD509vbF.js";import{B as y,L as I}from"./Select.styled-Uq-jmZNm.js";import{O as L}from"./OuterField-C4zPe_EA.js";import{u as c,l as B,d as v}from"./index-DO5xE0d-.js";import{T as S}from"./Typography-Dcn0-GyB.js";import{C as D,P}from"./Popover-CP-qfnTm.js";import{L as R}from"./ListBoxItem-DpPeg4o_.js";import{R as g}from"./ReactAriaProviders-LKY0QchP.js";import{I as k,a as C,b as T}from"./InputLabelTop-CX7-7O7V.js";const F=v(j)`
  ${()=>{const{tokens:a}=c(),{select:r}=a;return B`
      color: ${r.button.text.color.base};

      &[data-placeholder] {
        color: ${r.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${r.button.text.color.disabled};
      }
    `}}
`;function V(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(F,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:s,items:b,isRequired:i,testID:x="select",...p}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(g,{fieldID:s||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:f,describedBy:u})=>e.jsx(k,{alert:t&&e.jsx(T,{alerts:t}),children:e.jsx(C,{...o,children:e.jsxs($,{...p,id:s||d,"aria-labelledby":f,"aria-describedby":u,"data-testid":x,isRequired:i,"aria-label":m,children:[e.jsx(L,{children:e.jsxs(y,{ref:r,children:[e.jsx(V,{}),e.jsx(D,{})]})}),e.jsx(P,{children:e.jsx(I,{children:e.jsx(h,{items:b,children:l=>e.jsx(R,{id:l.id,textValue:l.title,"aria-label":l.ariaLabel,children:l.title})})})})]})})})})});q.displayName="Select";export{q as S};
