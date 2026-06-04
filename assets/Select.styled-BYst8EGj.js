import{i as e,u as n}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as r}from"./Button-rLog8i9z.js";import{u as s}from"./index-CgLgilxD.js";import{u as i}from"./ScrollShadow.hooks-yTS4ggiE.js";const a=n(r)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,p=n(a)`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return e`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,g=n.div`
  ${()=>{const t=i();return e`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;export{p as B,g as L,a};
