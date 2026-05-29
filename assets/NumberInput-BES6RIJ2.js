import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as l}from"./index-CcKhGcwW.js";import{$ as h}from"./NumberField-DT6uVKWW.js";import{y as m,u as D,p as S}from"./index-Z8nU1pHX.js";import{$ as v}from"./Button-rLog8i9z.js";import{I as B}from"./TextInput.styled-B3xprNcQ.js";import{R as N}from"./ReactAriaProviders-LKY0QchP.js";import{I as R,a as k,b as E}from"./InputLabelTop-DyfifPlk.js";import{O as P}from"./OuterField-DanppliU.js";import{$ as A}from"./utils-Clm8nLOM.js";const L=m.div`
  ${({$isDisabled:t})=>{const{tokens:o}=D(),{textInput:r}=o;return S`
      display: contents;
      color: ${t?r.color.disabled:r.color.base};
    `}}
`,b=m(v)`
  display: none;
`,O=l.forwardRef((t,o)=>{const{labelProps:r,alerts:a,id:n,placeholder:f,startSlot:i,endSlot:u,testID:x="number-input",...I}=t,d=A(o),c=l.useId(),p=l.useId(),$=[t["aria-describedby"],i?p:void 0].filter(Boolean).join(" ")||void 0;function j(){var s;(s=d.current)==null||s.focus()}return e.jsx(N,{fieldID:n||c,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:$,labelProps:r,alerts:a,children:({labelledBy:s,describedBy:y})=>e.jsx(R,{alert:a&&e.jsx(E,{alerts:a}),children:e.jsx(k,{...r,children:e.jsx(h,{...I,id:n||c,"aria-labelledby":s,"aria-describedby":y,"data-testid":x,children:e.jsxs(P,{startSlot:i&&e.jsx(L,{id:p,$isDisabled:t.isDisabled,children:i}),endSlot:u,focusElement:j,children:[e.jsx(b,{slot:"increment"}),e.jsx(B,{ref:d,placeholder:f}),e.jsx(b,{slot:"decrement"})]})})})})})});O.displayName="NumberInput";export{O as N};
