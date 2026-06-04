import{j as s}from"./jsx-runtime-Blucd9Qg.js";import{L as p}from"./index-eS8l-D1x.js";import{u as r}from"./index-CgLgilxD.js";import{f as $}from"./index-NgCCK6aN.js";import{u as a,i as n}from"./styled-components.browser.esm-hO7_nGqz.js";import{L as h}from"./LinkBase-W-sdDtvK.js";import{T as m}from"./Typography-BYRdA7Ce.js";const c=a(h)``,x=a(m)`
  ${({$isUnderlined:e,$isDashed:t})=>{const{tokens:i}=r(),{link:o}=i;return[n`
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
      `,e&&n`
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-style: ${o.decoration.style.solid};
        `,e&&t&&n`
          text-decoration-style: ${o.decoration.style.dashed};
        `]}}
`,g=$((e,t)=>{const{isUnderlined:i=!0,isDashed:o=!1,variant:d=p.DEFAULT_VARIANT,children:l,...f}=e,{tokens:u}=r(),{link:k}=u;return s.jsx(c,{...f,ref:t,hasFocusRing:!1,children:s.jsx(x,{component:"span",color:"inherit",variant:d,fontFamily:k.typography.fontFamily,$isUnderlined:i,$isDashed:o,children:l})})});g.displayName="Link";export{g as L};
