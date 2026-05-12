import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as n}from"./index-CcKhGcwW.js";import{a as h}from"./ListBox-BaTnwSsv.js";import{$ as y,a as j}from"./Select-DBAGa2wC.js";import{B as $,L as I}from"./Select.styled-2yn0ek1p.js";import{O as L}from"./OuterField-CmnmIgDh.js";import{u as c,p as B,y as v}from"./index-SVU_pXp3.js";import{T as S}from"./Typography-Bg4pE1zg.js";import{C as D,P}from"./Popover-Bz70M0s-.js";import{L as R}from"./ListBoxItem-84i4X5kB.js";import{R as g}from"./ReactAriaProviders-LKY0QchP.js";import{I as k,a as C,b as T}from"./InputLabelTop-BdlKcETy.js";const F=v(y)`
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
`;function V(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(F,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:p,isRequired:i,testID:b="select",...x}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(g,{fieldID:l||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:f,describedBy:u})=>e.jsx(k,{alert:t&&e.jsx(T,{alerts:t}),children:e.jsx(C,{...o,children:e.jsxs(j,{...x,id:l||d,"aria-labelledby":f,"aria-describedby":u,"data-testid":b,isRequired:i,"aria-label":m,children:[e.jsx(L,{children:e.jsxs($,{ref:r,children:[e.jsx(V,{}),e.jsx(D,{})]})}),e.jsx(P,{children:e.jsx(I,{children:e.jsx(h,{items:p,children:s=>e.jsx(R,{id:s.id,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})})]})})})})});q.displayName="Select";export{q as S};
