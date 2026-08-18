import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-C77b8QXo.js";import{M as a,e as s}from"./index-BM1ZbZXz.js";import"./index-BlWTxUPR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-eFyCDjoQ.js";import"./index-BPhdHRfG.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";const c=`# React country assets

The \`@boi/country-assets\` packaged for React applications.

## Installation

\`\`\`console
npm i @boi/react-country-assets
\`\`\`

## Usage

\`\`\`jsx
import { countriesData } from "@boi/react-country-assets";

{
  countriesData.map(
    ({ code, label, callingCode, component: FlagComponent }) => {
      return (
        <>
          Country code: {code}
          Country name: {label}
          Country calling code: {callingCode}
          Country flag: <FlagComponent />
        </>
      );
    }
  );
}
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"About Solas/Developer docs/react-country-assets"}),`
`,n.jsx(s,{children:c})]})}function f(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{f as default};
