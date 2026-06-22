import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{i as m,u as f}from"./styled-components.browser.esm-hO7_nGqz.js";import{b}from"./Disclosure-B2bfNjcf.js";import{u as g}from"./index-CgLgilxD.js";import{A as i}from"./Accordion-BF2rB5rP.js";import{T as r}from"./Typography-BYRdA7Ce.js";const x=f(b)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:e}=n;return[m`
        display: grid;
        gap: ${e.gap.default};
      `]}}
`,A=f(x)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:e}=n;return[m`
        gap: ${e.gap.nested};
      `]}}
`;function j(n){const{items:e,testID:c="accordion-group"}=n;return o.jsx(x,{allowsMultipleExpanded:!0,"data-testid":c,children:e.map(t=>Array.isArray(t.content)?o.jsx(i,{title:t.title,content:o.jsx(v,{items:t.content})},t.title):o.jsx(i,{...t,content:t.content},t.title))})}function v(n){const{items:e}=n;return o.jsx(A,{allowsMultipleExpanded:!0,children:e.map(c=>o.jsx(i,{...c,variant:"nested"},c.title))})}j.displayName="AccordionGroup";const I={title:"Components/Surfaces/AccordionGroup",component:j,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}},a={},s={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}]}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "What is the Bank of Ireland UK ISA?",
      content: [{
        title: "How does it work?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }, {
        title: "What does my holding account do?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }, {
        title: "Do I pay tax on my savings in an ISA?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }]
    }]
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const T=["Basic","Nested"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Nested:s,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{B as A,a as B,s as N};
