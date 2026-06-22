import{i as r,u as e}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as n}from"./Button-c0q88Mvj.js";import{$ as s}from"./ListBox-B1bbQBa1.js";import{u as a}from"./index-CgLgilxD.js";import{u as i}from"./ScrollShadow.hooks-yTS4ggiE.js";const d=e(n)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,f=e(d)`
  ${()=>{const{tokens:o}=a(),{select:t}=o;return r`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${t.button.gap};
      padding-left: ${t.button.padding.left};
      padding-right: ${t.button.padding.right};
    `}}
`,g=e(s)`
  ${()=>{const o=i();return r`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`;export{f as B,g as L,d as a};
