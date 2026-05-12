import{j as u}from"./jsx-runtime-Blucd9Qg.js";import{r as e}from"./index-CcKhGcwW.js";import{u as s,p,y as h}from"./index-SVU_pXp3.js";import{T as f}from"./Typography-Bg4pE1zg.js";const l=h(f)`
  ${()=>{const{tokens:r}=s(),{charactersCounter:t}=r;return p`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function g(r){const{length:t,maxLength:c,testID:i}=r,{tokens:m}=s(),{charactersCounter:o}=m,n=Math.max(0,c-t),a=e.useRef(!0);return e.useEffect(()=>{a.current=!1},[]),u.jsx(l,{variant:o.typography.variant,fontFamily:o.typography.fontFamily,testID:i,"aria-live":a.current?"off":"polite",children:`${n} character${n!==1?"s":""} remaining`})}const d=e.memo(g);export{d as C};
