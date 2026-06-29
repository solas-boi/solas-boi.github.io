import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{useMDXComponents as a}from"./index-BRkUXrbv.js";import{M as s,C as n,a as l}from"./index-BIdbN16q.js";import{D as d,B as r,W as c,a as h,b as p,c as m,d as x,I as j}from"./DatePicker.stories-b_kDn4sr.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BYjimmmc.js";import"./index-CbrIw9sE.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./Heading-D2HJh0aa.js";import"./Button-c0q88Mvj.js";import"./utils-Clm8nLOM.js";import"./ProgressBar-Dn7Gc5XP.js";import"./Label-DSRs3bn3.js";import"./useFocusRing-CED-D2Mp.js";import"./Text-DtQ0Coqa.js";import"./Dialog-Ccph-4LA.js";import"./SelectionIndicator-DUlSIlgy.js";import"./useEvent-B8NaxjNe.js";import"./FocusScope-6WBUvYzs.js";import"./index-CgLgilxD.js";import"./useControlledState-fS0KWGMw.js";import"./usePreventScroll-CZg5BU4p.js";import"./VisuallyHidden-DY6t22jW.js";import"./useFilter-B5WUJyQI.js";import"./Input-CEOHyBoj.js";import"./useFormReset-tFx4mhex.js";import"./Form-C2KJannS.js";import"./useSpinButton-DIzAGinQ.js";import"./index-CRAeHTmb.js";import"./index-NgCCK6aN.js";import"./styled-components.browser.esm-hO7_nGqz.js";import"./ReactAriaProviders-LKY0QchP.js";import"./InputLabelTop-Buf9eQWM.js";import"./InlineAlert-BE1k4WaS.js";import"./Typography-SwM_NNf7.js";import"./index-DfrVGm6s.js";import"./TooltipPopover-CgX8FweL.js";import"./InlineTooltipIconButton-DAmW6eBF.js";import"./Tooltip-BEBQ_rTE.js";import"./OverlayContext-BmgfW47V.js";import"./IconButton-guiyeaRn.js";function o(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
`,e.jsx("a",{href:"https://react-aria.adobe.com/I18nProvider.html",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"I18nProvider"})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx("a",{href:"https://react-aria.adobe.com/DatePicker.html#international-calendars",className:"boi-mdx-link",target:"_blank",children:e.jsx(i.p,{children:"DatePicker using I18nProvider"})}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(i.p,{children:["For a complete list of available props, please refer to the React Aria ",e.jsx("a",{href:"https://react-aria.adobe.com/DatePicker.html#api",className:"boi-mdx-link",target:"_blank",children:"documentation"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"with-label",children:"With label"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"with-hint",children:"With hint"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"with-calendar",children:"With calendar"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"with-disabled-input",children:"With Disabled Input"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"with-disabled-dates",children:"With Disabled Dates"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:j})]})}function oe(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o(t)}export{oe as default};
