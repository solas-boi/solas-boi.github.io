import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{r as m}from"./index-CcKhGcwW.js";import{u as b}from"./index-CgLgilxD.js";import{$}from"./ProgressBar-Dn7Gc5XP.js";import{i as c,u as l,f as u}from"./styled-components.browser.esm-hO7_nGqz.js";const h=u`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,x=l($)`
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${({$size:r,$color:t})=>c`
    color: ${t};
    width: ${r};
    height: ${r};
  `}
`,p=l.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${({$borderWidth:r})=>{const{tokens:{spinner:t}}=b();return c`
      border: ${r} solid currentColor;
      opacity: ${t.backgroundOpacity};
    `}}
`,d=l.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  animation: ${h} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
  ${({$index:r,$borderWidth:t})=>c`
      border-width: ${t};
      border-style: solid;
      animation-delay: ${.15*(r+1)}s;
    `}
`,v=m.memo(r=>{const{testID:t="spinner",...f}=r,{tokens:{spinner:n}}=b();let e,i;if("variant"in r){const a=n.variants[r.variant];a&&([e,i]=[a.color,a.size])}"size"in r&&r.size?i=r.size:i||(i=n.variants.default.size),"color"in r&&r.color?e=r.color:e||(e=n.variants.default.color);const s={$borderWidth:`${Math.round(parseInt(i)/parseInt(n.borderRatio))}px`};return o.jsxs(x,{"aria-label":"Loading",...f,isIndeterminate:!0,$color:e,$size:i,"data-testid":t,children:[o.jsx(p,{...s}),o.jsx(d,{$index:0,...s}),o.jsx(d,{$index:1,...s}),o.jsx(d,{$index:2,...s})]})});v.displayName="Spinner";export{v as S};
