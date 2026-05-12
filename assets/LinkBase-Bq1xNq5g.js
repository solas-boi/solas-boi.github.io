import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{f as l}from"./index-NgCCK6aN.js";import{u,p as n,y as f}from"./index-SVU_pXp3.js";const p=f.a`
  ${({$display:s,$hasFocusRing:e})=>{const{tokens:i}=u(),{link:o}=i;return n`
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

      ${e?n`
            &:focus-visible {
              outline-width: ${o.focusRing.width};
              outline-style: ${o.focusRing.style};
              outline-color: ${o.focusRing.color};
              outline-offset: ${o.focusRing.offset};
              border-radius: ${o.focusRing.radius};
            }
          `:n`
            &:focus-visible {
              outline: none;
            }
          `}
    `}}
`;function $(s,e){const{display:i="inline",component:o="a",testID:t="link",hasFocusRing:r=!0,...c}=s;return a.jsx(p,{...c,ref:e,as:o,"data-testid":t,$display:i,$hasFocusRing:r})}const m=l($);export{m as L};
