import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{f as u}from"./index-NgCCK6aN.js";import{i as e,u as l}from"./styled-components.browser.esm-hO7_nGqz.js";import{u as f}from"./index-CgLgilxD.js";const p=l.a`
  ${({$display:s,$hasFocusRing:i})=>{const{tokens:t}=f(),{link:o}=t;return e`
      all: unset;
      display: ${s};
      color: ${o.color.base};
      cursor: pointer;

      &:hover {
        color: ${o.color.hover};
      }

      &:active {
        color: ${o.color.active};
      }

      ${i?e`
            &:focus-visible {
              outline-width: ${o.focusRing.width};
              outline-style: ${o.focusRing.style};
              outline-color: ${o.focusRing.color};
              outline-offset: ${o.focusRing.offset};
              border-radius: ${o.focusRing.radius};
            }
          `:e`
            &:focus-visible {
              outline: none;
            }
          `}
    `}}
`;function $(s,i){const{display:t="inline",component:o="a",testID:n="link",hasFocusRing:r=!0,...c}=s;return a.jsx(p,{...c,ref:i,as:o,"data-testid":n,$display:t,$hasFocusRing:r})}const h=u($);export{h as L};
