import{i as n,u as s}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as d}from"./Input-CIzsr3jU.js";import{u as i,p as r}from"./index-CgLgilxD.js";const f=s(d)`
  ${()=>{const{tokens:t}=i(),{textInput:o,typography:a}=t,e=o.typography.variant,l=r(a.fontSize[e]),c=r(a.lineHeight[e]);return n`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${a.fontFamily[e]};
      font-size: ${l};
      line-height: ${c};

      &[data-readonly] {
        color: ${o.color.readOnly};
      }

      &[data-disabled] {
        color: ${o.color.disabled};
      }

      &::placeholder {
        color: ${o.color.placeholder};
      }

      &[data-disabled]::placeholder {
        color: ${o.color.disabled};
      }
    `}}
`,y=s.div`
  ${()=>{const{tokens:t}=i(),{spacing:o}=t;return n`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{y as C,f as I};
