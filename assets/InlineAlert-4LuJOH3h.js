import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{f as p,g as h,W as u,E as g}from"./index-CRAeHTmb.js";import{i as n,u as a}from"./styled-components.browser.esm-hO7_nGqz.js";import{u as s,p as m}from"./index-CgLgilxD.js";import{T as f}from"./Typography-BYRdA7Ce.js";const y=a.div`
  ${({$severity:t})=>{const{tokens:e}=s(),{inlineAlert:r}=e;return n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r.gap};
      color: ${r.color[t]};

      svg {
        width: ${r.icon.width};
        height: ${r.icon.height};
      }
    `}}
`,I=a.div`
  ${({$severity:t})=>{const{tokens:e}=s(),{inlineAlert:r}=e,i=m(r.iconWrapper.height);return n`
      display: grid;
      place-content: center;
      height: ${i};

      & [data-primary-color] {
        color: ${r.icon.primaryColor[t]};
      }

      & [data-secondary-color] {
        color: ${r.icon.secondaryColor[t]};
      }
    `}}
`;function x(t){const{severity:e,children:r,id:i,withRole:c=!0,testID:l="inline-alert"}=t,d={error:o.jsx(g,{"aria-hidden":"true"}),warning:o.jsx(u,{"aria-hidden":"true"}),success:o.jsx(h,{"aria-hidden":"true"}),info:o.jsx(p,{"aria-hidden":"true"})};return o.jsxs(y,{id:i,role:c?"alert":void 0,$severity:e,"data-testid":l,children:[o.jsx(I,{$severity:e,children:d[e]}),o.jsx(f,{color:"inherit",children:r})]})}x.displayName="InlineAlert";export{x as I};
