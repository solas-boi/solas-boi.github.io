import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{u as c,p as l}from"./index-CgLgilxD.js";import{i as t,u as a}from"./styled-components.browser.esm-hO7_nGqz.js";import{a as $}from"./ListBox-B1bbQBa1.js";import{T as g}from"./index-CRAeHTmb.js";import{T as b}from"./Typography-SwM_NNf7.js";const r=a($)`
  ${({$withDivider:n})=>{const{tokens:o}=c(),{select:e}=o;return[t`
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        border-bottom-width: ${e.menu.separator.width};
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
        cursor: pointer;
        outline: none;

        &[data-disabled] {
          cursor: not-allowed;
        }

        &:last-of-type {
          border-bottom-color: transparent;
        }
      `,n&&t`
          border-bottom-width: 3px;
          min-height: calc(${e.menu.option.minHeight} + 3px);
        `]}}
`,k=a.div`
  ${()=>{const{tokens:n}=c(),{select:o}=n;return t`
      display: grid;
      align-items: center;
      color: ${o.menu.option.inner.color.base};
      padding-top: ${o.menu.option.inner.padding.top};
      padding-left: ${o.menu.option.inner.padding.left};
      padding-right: ${o.menu.option.inner.padding.right};
      padding-bottom: ${o.menu.option.inner.padding.bottom};
      border-radius: ${o.menu.option.inner.radius};
      background: ${o.menu.option.inner.backgroundColor.base};
      outline-width: ${o.menu.option.inner.stroke.width};
      outline-style: ${o.menu.option.inner.stroke.style};
      outline-color: ${o.menu.option.inner.stroke.color.base};
      outline-offset: ${o.menu.option.inner.stroke.offset};
      overflow: hidden;

      ${r}[data-selected] & {
        background: ${o.menu.option.inner.backgroundColor.selected};
        outline-color: ${o.menu.option.inner.stroke.color.selected};
      }

      ${r}[data-hovered] &,
      ${r}[data-focus-visible] & {
        background: ${o.menu.option.inner.backgroundColor.hover};
        outline-color: ${o.menu.option.inner.stroke.color.hover};
      }

      ${r}[data-pressed] & {
        background: ${o.menu.option.inner.backgroundColor.active};
        outline-color: ${o.menu.option.inner.stroke.color.active};
      }

      ${r}[data-disabled] & {
        color: ${o.menu.option.inner.color.disabled};
      }
    `}}
`,f=a.div`
  ${({$withIcon:n})=>{const{tokens:o}=c(),{select:e}=o;return[t`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,n&&t`
          grid-template-columns: auto auto 1fr;
        `]}}
`,y=a.div`
  ${()=>{const{tokens:n}=c(),{select:o}=n;return[t`
        display: grid;
        place-items: center;
        width: ${o.menu.option.inner.tickIconWrapper.width};
        height: ${l(o.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,x=a(g)`
  ${()=>{const{tokens:n}=c(),{select:o}=n;return[t`
        width: ${o.menu.option.inner.tickIcon.width};
        height: ${o.menu.option.inner.tickIcon.height};
        color: ${o.menu.option.inner.tickIcon.color};
      `]}}
`,v=a.div`
  ${()=>{const{tokens:n}=c(),{select:o}=n;return[t`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${l(o.menu.option.inner.iconWrapper.height)};

        svg {
          width: ${o.menu.option.inner.icon.width};
          max-height: ${o.menu.option.inner.icon.maxHeight};
          color: ${o.menu.option.inner.icon.color};
          opacity  ${o.menu.option.inner.icon.opacity.base};

          ${r}[data-disabled] & {
            opacity: ${o.menu.option.inner.icon.opacity.disabled};
          }
        }
      `]}}
`;function D(n){const{icon:o,withDivider:e,children:s,...u}=n,{tokens:m}=c(),{select:d}=m;return i.jsx(r,{$withDivider:e,...u,children:p=>{const{isSelected:h}=p;return i.jsx(k,{children:i.jsxs(f,{$withIcon:o!==void 0,children:[i.jsx(y,{children:h&&i.jsx(x,{"aria-hidden":"true"})}),o&&i.jsx(v,{children:o}),i.jsx(b,{component:"div",color:"inherit",variant:d.menu.option.inner.text.typography.variant,fontFamily:d.menu.option.inner.text.typography.fontFamily,children:typeof s=="function"?s(p):s})]})})}})}export{D as L};
