import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{f as u}from"./index-BP3DsMOr.js";import{u as l,i as n,a as f}from"./index-KUtr2Lc-.js";const p=f.a`
  ${({$display:s,$hasFocusRing:i})=>{const{tokens:e}=l(),{link:o}=e;return n`
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

      ${i?n`
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
`;function $(s,i){const{display:e="inline",component:o="a",testID:t="link",hasFocusRing:r=!0,...a}=s;return c.jsx(p,{...a,ref:i,as:o,"data-testid":t,$display:e,$hasFocusRing:r})}const m=u($);export{m as L};
