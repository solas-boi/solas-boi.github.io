import{u as n,p as s,y as l,a as r}from"./index-Z8nU1pHX.js";import{$ as d}from"./Input-CIzsr3jU.js";const h=l(d)`
  ${()=>{const{tokens:t}=n(),{textInput:o,typography:a}=t,e=o.typography.variant,i=r(a.fontSize[e]),c=r(a.lineHeight[e]);return s`
      all: unset;
      width: 100%;
      color: ${o.color.base};
      font-family: ${a.fontFamily[e]};
      font-size: ${i};
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
`,y=l.div`
  ${()=>{const{tokens:t}=n(),{spacing:o}=t;return s`
      width: 100%;
      display: grid;
      gap: ${o.s4};
    `}}
`;export{y as C,h as I};
