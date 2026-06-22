import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as h,a as j}from"./Select-B1g0JL31.js";import{B as y,L as $}from"./Select.styled-DGy4-d_f.js";import{O as I}from"./OuterField-BDPbjITq.js";import{u as c}from"./index-CgLgilxD.js";import{i as L,u as B}from"./styled-components.browser.esm-hO7_nGqz.js";import{T as v}from"./Typography-SwM_NNf7.js";import{C as S,P as D}from"./Popover-DPDiAt2N.js";import{L as P}from"./ListBoxItem-BKdnpBnx.js";import{R}from"./ReactAriaProviders-LKY0QchP.js";import{I as g,a as k,b as T}from"./InputLabelTop-Buf9eQWM.js";const C=B(h)`
  ${()=>{const{tokens:a}=c(),{select:r}=a;return L`
      color: ${r.button.text.color.base};

      &[data-placeholder] {
        color: ${r.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${r.button.text.color.disabled};
      }
    `}}
`;function F(){const{tokens:a}=c(),{select:r}=a;return e.jsx(v,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(C,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const V=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:b,isRequired:i,testID:p="select",...x}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(R,{fieldID:l||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:u,describedBy:f})=>e.jsx(g,{alert:t&&e.jsx(T,{alerts:t}),children:e.jsx(k,{...o,children:e.jsxs(j,{...x,id:l||d,"aria-labelledby":u,"aria-describedby":f,"data-testid":p,isRequired:i,"aria-label":m,children:[e.jsx(I,{children:e.jsxs(y,{ref:r,children:[e.jsx(F,{}),e.jsx(S,{})]})}),e.jsx(D,{children:e.jsx($,{items:b,children:s=>e.jsx(P,{id:s.id,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})]})})})})});V.displayName="Select";export{V as S};
