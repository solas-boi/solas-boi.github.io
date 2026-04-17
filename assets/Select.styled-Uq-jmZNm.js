import{u as s,l as e,d as n}from"./index-DO5xE0d-.js";import{$ as a}from"./Button-DoQgAJyY.js";import{u as r}from"./ScrollShadow.hooks-BneRXakm.js";const i=n(a)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,c=n(i)`
  ${()=>{const{tokens:t}=s(),{select:o}=t;return e`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${o.button.gap};
      padding-left: ${o.button.padding.left};
      padding-right: ${o.button.padding.right};
    `}}
`,p=n.div`
  ${()=>{const t=r();return e`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;export{c as B,p as L,i as a};
