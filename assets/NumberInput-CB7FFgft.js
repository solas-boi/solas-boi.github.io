import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as l}from"./index-CcKhGcwW.js";import{$ as h}from"./NumberField-LN2nmKeU.js";import{u as b,i as D}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as S}from"./Button-rLog8i9z.js";import{u as v}from"./index-CgLgilxD.js";import{I as B}from"./TextInput.styled-CKEH5_RK.js";import{R as N}from"./ReactAriaProviders-LKY0QchP.js";import{I as R,a as k,b as E}from"./InputLabelTop-B8nTWzvR.js";import{O as P}from"./OuterField-BxhKGuCk.js";import{$ as A}from"./utils-Clm8nLOM.js";const L=b.div`
  ${({$isDisabled:t})=>{const{tokens:o}=v(),{textInput:r}=o;return D`
      display: contents;
      color: ${t?r.color.disabled:r.color.base};
    `}}
`,p=b(S)`
  display: none;
`,O=l.forwardRef((t,o)=>{const{labelProps:r,alerts:a,id:n,placeholder:f,startSlot:i,endSlot:u,testID:x="number-input",...I}=t,d=A(o),c=l.useId(),m=l.useId(),$=[t["aria-describedby"],i?m:void 0].filter(Boolean).join(" ")||void 0;function j(){var s;(s=d.current)==null||s.focus()}return e.jsx(N,{fieldID:n||c,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:$,labelProps:r,alerts:a,children:({labelledBy:s,describedBy:y})=>e.jsx(R,{alert:a&&e.jsx(E,{alerts:a}),children:e.jsx(k,{...r,children:e.jsx(h,{...I,id:n||c,"aria-labelledby":s,"aria-describedby":y,"data-testid":x,children:e.jsxs(P,{startSlot:i&&e.jsx(L,{id:m,$isDisabled:t.isDisabled,children:i}),endSlot:u,focusElement:j,children:[e.jsx(p,{slot:"increment"}),e.jsx(B,{ref:d,placeholder:f}),e.jsx(p,{slot:"decrement"})]})})})})})});O.displayName="NumberInput";export{O as N};
