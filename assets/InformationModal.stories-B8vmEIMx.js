import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{a as l}from"./index-B-lxVbXh.js";import{h as p,H as O}from"./index-DfrVGm6s.js";import{A as P}from"./AlertModal-B12mv2A0.js";import{B as T}from"./Button-CRHj5aXt.js";import{T as f}from"./Typography-SwM_NNf7.js";function c(i){const{testID:n="information-modal",...e}=i;return o.jsx(P,{testID:n,...e,severity:"info"})}c.displayName="InformationModal";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Surfaces/InformationModal",component:c,render:function(n){const[{isOpen:e},u]=_();function B(){u({isOpen:!0}),l("openModal")()}function a(){u({isOpen:!1}),l("modalClosed")()}return o.jsxs(o.Fragment,{children:[o.jsx(T,{variant:"primary",onClick:B,children:"Open Modal"}),o.jsx(c,{...n,isOpen:e,onRequestClose:a,primaryButtonsProps:(n.primaryButtonsProps||[]).map(s=>({...s,onClick:a})),secondaryButtonsProps:(n.secondaryButtonsProps||[]).map(s=>({...s,onClick:a}))})]})},argTypes:{heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:O},primaryButtonsProps:{control:{disable:!0}},secondaryButtonsProps:{control:{disable:!0}},footerLayout:{control:{type:"select"},options:p.FOOTER_LAYOUTS},tabletWidth:{control:{type:"number"}},children:{control:{disable:!0}}},args:{isOpen:!1,footerLayout:p.DEFAULT_FOOTER_LAYOUT}},t={args:{heading:"We cannot complete your request just now",children:o.jsx(f,{variant:"bodyM",color:"inherit",children:"Sorry about that. You could try again later or you can access your account through 365 phone banking by contacting us."}),primaryButtonsProps:[{children:"Login"}],secondaryButtonsProps:[{children:"Contact us"}]}},r={args:{heading:"We cannot complete your request just now",children:o.jsx(f,{variant:"bodyM",color:"inherit",children:"Sorry about that. You could try again later or you can access your account through 365 phone banking by contacting us."}),primaryButtonsProps:[{buttonType:"linkButton",children:"Login",href:"#"}],secondaryButtonsProps:[{buttonType:"linkButton",children:"Contact us",href:"#"}]}};var d,y,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: "We cannot complete your request just now",
    children: <Typography variant="bodyM" color="inherit">
        Sorry about that. You could try again later or you can access your
        account through 365 phone banking by contacting us.
      </Typography>,
    primaryButtonsProps: [{
      children: "Login"
    }],
    secondaryButtonsProps: [{
      children: "Contact us"
    }]
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heading: "We cannot complete your request just now",
    children: <Typography variant="bodyM" color="inherit">
        Sorry about that. You could try again later or you can access your
        account through 365 phone banking by contacting us.
      </Typography>,
    primaryButtonsProps: [{
      buttonType: "linkButton",
      children: "Login",
      href: "#"
    }],
    secondaryButtonsProps: [{
      buttonType: "linkButton",
      children: "Contact us",
      href: "#"
    }]
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const M=["Basic","WithLinkButtons"],A=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,WithLinkButtons:r,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{t as B,A as I,r as W};
