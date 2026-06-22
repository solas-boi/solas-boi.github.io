import{j as n}from"./jsx-runtime-Blucd9Qg.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as i,h as a}from"./index-DL3fjVeR.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B_xRu_T_.js";import"./index-CbrIw9sE.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";const s=`# React Native components

Shared React Native component library.

## Installation

\`\`\`console
npm i @react-native-async-storage/async-storage
npm i @react-native-community/datetimepicker
npm i react-native-modal-datetime-picker
npm i @boi/react-native-design-tokens
npm i @boi/react-native-components
\`\`\`

## Usage

Render the \`DesignTokensProvider\` at the root of your application:

\`\`\`jsx
import {
  DesignTokensProvider,
  BOI_THEME_TOKENS,
} from "@boi/react-native-design-tokens";
import { Button } from "@boi/react-native-components";

export default function App() {
  return (
    <DesignTokensProvider themeTokens={BOI_THEME_TOKENS}>
      <Button />
    </DesignTokensProvider>
  );
}
\`\`\`

## Component Specific Docs

[Toggle component](src/Toggle/README.md)

[Typography component](src/Typography/README.md)

[TextArea component](src/TextArea/README.md)
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"About Solas/Developer docs/react-native-components"}),`
`,n.jsx(a,{children:s})]})}function x(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{x as default};
