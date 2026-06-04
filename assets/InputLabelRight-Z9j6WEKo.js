import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{u as n,p as c}from"./index-CgLgilxD.js";import{i,u as l}from"./styled-components.browser.esm-hO7_nGqz.js";import{T as p}from"./Typography-BYRdA7Ce.js";const u=l.div`
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return i`
      display: inline-grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      vertical-align: top;
      cursor: pointer;

      label[data-disabled] && {
        cursor: not-allowed;
      }

      label[data-focus-visible] && {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,d=l.div`
  ${({$label:t})=>{const{tokens:o}=n(),{inputLabelRight:a}=o;return[i`
        display: grid;
        place-items: center;
      `,t&&i`
          height: ${c(a.inputWrapper.height)};
        `]}}
`,g=l.div`
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return i`
      color: ${o.label.color.base};

      label[data-disabled] && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function $(t){const{label:o,children:a}=t,{tokens:s}=n(),{inputLabelRight:r}=s;return e.jsxs(u,{children:[e.jsx(d,{$label:o,children:a}),o&&e.jsx(g,{children:e.jsx(p,{component:"span",color:"inherit",variant:r.label.typography.variant,fontFamily:r.label.typography.fontFamily,children:o})})]})}export{$ as I};
