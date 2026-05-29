import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{useMDXComponents as a}from"./index-BRkUXrbv.js";import{M as s,C as r,a as l}from"./index-CVmEDcF0.js";import{D as d,B as n,W as c,a as h,b as p,c as m,d as x,I as j}from"./DatePicker.stories-Bf3heaBh.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DzIaXO4V.js";import"./index-CbrIw9sE.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./Heading-BSeI2uNW.js";import"./Button-rLog8i9z.js";import"./utils-Clm8nLOM.js";import"./ProgressBar-Dn7Gc5XP.js";import"./Label-DSRs3bn3.js";import"./useFocusRing-C58TIrH0.js";import"./Text-DtQ0Coqa.js";import"./Dialog-B6YltjvA.js";import"./SelectionIndicator-CePpkZSc.js";import"./useEvent-B5MetaT2.js";import"./FocusScope-ozmm2sIM.js";import"./index-Z8nU1pHX.js";import"./useControlledState-fS0KWGMw.js";import"./usePreventScroll-CrCA2VL3.js";import"./VisuallyHidden-Smqc2hEy.js";import"./useFilter-BjEcUZ8V.js";import"./Input-CIzsr3jU.js";import"./useFormReset-DZzsBwMl.js";import"./Form-CPXdpJDm.js";import"./useSpinButton-CnBjkaOW.js";import"./index-CRAeHTmb.js";import"./index-NgCCK6aN.js";import"./ReactAriaProviders-LKY0QchP.js";import"./InputLabelTop-DyfifPlk.js";import"./InlineAlert-DYpJZZ_s.js";import"./Typography-DVnGbd4X.js";import"./index-eS8l-D1x.js";import"./TooltipPopover-B0YtttQt.js";import"./InlineTooltipIconButton-Dso8X5LQ.js";import"./Tooltip-B5VIayZH.js";import"./OverlayContext-BmgfW47V.js";import"./IconButton-BbCHtOvE.js";function o(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(i.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.p,{children:"To help development with this component, we recommend installing the following:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`npm i @internationalized/date
`})}),`
`,e.jsx(i.p,{children:"Then it can be used like this:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { parseDate } from "@internationalized/date";
import { DatePicker } from "@boi/react-components";

export default function DateOfBirth() {
  return (
    <DatePicker
      labelProps={{
        label: "Date of birth",
      }}
      value={parseDate("1980-01-01")}
    />
  );
}
`})}),`
`,e.jsx(i.h2,{id:"locale",children:"Locale"}),`
`,e.jsxs(i.p,{children:["By default this component will use your browser's ",e.jsx(i.code,{children:"locale"})," and render the date in the language of where you are located. So if you are located in Ireland, your locale will be ",e.jsx(i.code,{children:"en-IE"})," and you will see DD-MM-YYYY. If you are in USA, your locale will be ",e.jsx(i.code,{children:"en-US"})," and you will see MM-DD-YYYY."]}),`
`,e.jsxs(i.p,{children:["You can fix the locale in your app by using React Aria's ",e.jsx(i.code,{children:"I18nProvider"})," component. To understand how this works and how to use it yourself, refer to these React Aria pages:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/I18nProvider.html",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"I18nProvider"})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/DatePicker.html#international-calendars",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"DatePicker using I18nProvider"})}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(i.p,{children:["For a complete list of available props, please refer to the React Aria ",e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/DatePicker.html#props",className:"boi-mdx-link",target:"_blank",children:"documentation"}),"."]}),`
`,e.jsx(r,{of:n}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"with-label",children:"With label"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(i.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(i.h3,{id:"with-calendar",children:"With calendar"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i.h3,{id:"with-disabled-input",children:"With Disabled Input"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(i.h3,{id:"with-disabled-dates",children:"With Disabled Dates"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(i.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(r,{of:j})]})}function ne(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{ne as default};
