import{j as s}from"./jsx-runtime-Blucd9Qg.js";import{L as k}from"./index-eS8l-D1x.js";import{y as r,u as a,p as i}from"./index-Z8nU1pHX.js";import{f as $}from"./index-NgCCK6aN.js";import{L as h}from"./LinkBase-Cvny58qF.js";import{T as m}from"./Typography-DVnGbd4X.js";const c=r(h)``,x=r(m)`
  ${({$isUnderlined:e,$isDashed:t})=>{const{tokens:n}=a(),{link:o}=n;return[i`
        background: ${o.backgroundColor.base};

        text-decoration-thickness: ${o.decoration.thickness.base};
        text-underline-offset: ${o.decoration.offset};

        &:hover {
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-thickness: ${o.decoration.thickness.hover};
        }

        &:active {
          background: ${o.backgroundColor.active};
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-thickness: ${o.decoration.thickness.active};
        }

        ${c}:focus-visible && {
          text-decoration-line: ${o.decoration.line.focus};
          outline-width: ${o.focusRing.width};
          outline-style: ${o.focusRing.style};
          outline-color: ${o.focusRing.color};
          outline-offset: ${o.focusRing.offset};
          border-radius: ${o.focusRing.radius};
        }
      `,e&&i`
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-style: ${o.decoration.style.solid};
        `,e&&t&&i`
          text-decoration-style: ${o.decoration.style.dashed};
        `]}}
`,y=$((e,t)=>{const{isUnderlined:n=!0,isDashed:o=!1,variant:d=k.DEFAULT_VARIANT,children:l,...f}=e,{tokens:u}=a(),{link:p}=u;return s.jsx(c,{...f,ref:t,hasFocusRing:!1,children:s.jsx(x,{component:"span",color:"inherit",variant:d,fontFamily:p.typography.fontFamily,$isUnderlined:n,$isDashed:o,children:l})})});y.displayName="Link";export{y as L};
