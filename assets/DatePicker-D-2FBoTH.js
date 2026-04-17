import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{useMDXComponents as a}from"./index-BRkUXrbv.js";import{M as s,C as r,a as l}from"./index-v8_XDy0y.js";import{D as d,B as n,W as c,a as h,b as p,c as m,d as x,I as j}from"./DatePicker.stories-C_OFN9Fo.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-SVK48uwi.js";import"./index-CbrIw9sE.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";import"./Heading-Uy8UQirw.js";import"./Button-DoQgAJyY.js";import"./utils-Clm8nLOM.js";import"./ProgressBar-Dn7Gc5XP.js";import"./Label-DSRs3bn3.js";import"./useFocusRing-B474fW51.js";import"./Text-DtQ0Coqa.js";import"./Dialog-DDvBM-Pk.js";import"./SelectionIndicator-BRNKMi_r.js";import"./useEvent-SQYD04ie.js";import"./FocusScope-84k3iHyc.js";import"./index-DO5xE0d-.js";import"./useControlledState-fS0KWGMw.js";import"./usePreventScroll-pejc0gr9.js";import"./VisuallyHidden-DKhVLDyi.js";import"./useFilter-oKQaraN8.js";import"./Input-CXDu1t-Q.js";import"./useFormReset-DVta2n36.js";import"./Form-CBu97MAJ.js";import"./useSpinButton-DOHGtOCI.js";import"./index-B_KGh3jf.js";import"./index-NgCCK6aN.js";import"./ReactAriaProviders-LKY0QchP.js";import"./InputLabelTop-CX7-7O7V.js";import"./InlineAlert-Dyx-Xj0D.js";import"./Typography-Dcn0-GyB.js";import"./index-eS8l-D1x.js";import"./TooltipPopover-Uxod-REm.js";import"./InlineTooltipIconButton-9BFuTZBQ.js";import"./Tooltip-DEjGWxHc.js";import"./OverlayContext-BmgfW47V.js";import"./IconButton-kUtyk6Ni.js";function o(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
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
