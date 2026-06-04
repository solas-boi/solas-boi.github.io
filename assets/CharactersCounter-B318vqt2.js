import{j as u}from"./jsx-runtime-Blucd9Qg.js";import{r as o}from"./index-CcKhGcwW.js";import{u as s}from"./index-CgLgilxD.js";import{i as p,u as f}from"./styled-components.browser.esm-hO7_nGqz.js";import{T as h}from"./Typography-BYRdA7Ce.js";const l=f(h)`
  ${()=>{const{tokens:r}=s(),{charactersCounter:t}=r;return p`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function g(r){const{length:t,maxLength:i,testID:c}=r,{tokens:m}=s(),{charactersCounter:e}=m,n=Math.max(0,i-t),a=o.useRef(!0);return o.useEffect(()=>{a.current=!1},[]),u.jsx(l,{variant:e.typography.variant,fontFamily:e.typography.fontFamily,testID:c,"aria-live":a.current?"off":"polite",children:`${n} character${n!==1?"s":""} remaining`})}const j=o.memo(g);export{j as C};
