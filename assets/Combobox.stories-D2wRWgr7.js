import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as de}from"./ComboBox-DGaVBx9l.js";import{u as l,i as x}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as ue}from"./Button-c0q88Mvj.js";import{$ as be}from"./ListBox-B1bbQBa1.js";import{u as C}from"./index-CgLgilxD.js";import{I as me}from"./TextInput.styled-PRjx8JUW.js";import{u as pe}from"./ScrollShadow.hooks-yTS4ggiE.js";import{R as fe}from"./ReactAriaProviders-LKY0QchP.js";import{I as he,a as ge,b as $e}from"./InputLabelTop-Buf9eQWM.js";import{C as xe,P as Ie}from"./Popover-DPDiAt2N.js";import{L as Pe}from"./ListBoxItem-BKdnpBnx.js";import{$ as Ce}from"./useFilter-B5WUJyQI.js";import{n as ve,o as ye,p as we,q as ke,r as je,s as Se}from"./index-CRAeHTmb.js";const Be=l.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,$=l(me)`
  ${()=>{const{tokens:o}=C(),{select:e}=o;return x`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,Z=l(ue)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Re=l(Z)`
  ${()=>{const{tokens:o}=C(),{select:e}=o;return x`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,Ae=l(be)`
  ${()=>{const o=pe();return x`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`,De=l.div`
  ${()=>{const{tokens:o}=C(),{outerField:e}=o;return x`
      border-radius: ${e.radius};

      &:has(${$}[data-focused]),
      &:has(${$}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,_e=l.div`
  ${()=>{const{tokens:o}=C(),{outerField:e}=o;return x`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${e.gap};
      min-height: ${e.minHeight};
      border-radius: ${e.radius};
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style};
      outline-color: ${e.stroke.color.base};
      outline-offset: ${e.stroke.offset.base};
      background: ${e.backgroundColor};

      .react-aria-ComboBox[data-invalid] & {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has(${$}[data-hovered]),
      &:has(${Z}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has(${$}[aria-expanded="true"]) {
        outline-width: ${e.stroke.width.active};
        outline-color: ${e.stroke.color.active};
        outline-offset: ${e.stroke.offset.active};
      }

      .react-aria-ComboBox[data-disabled] & {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }
    `}}
`;function Te(o){const{children:e}=o;return t.jsx(De,{children:t.jsx(_e,{children:e})})}function He(o){const[e,r]=n.useState(""),{contains:s}=Ce({sensitivity:"base"}),I=n.useMemo(()=>o.filter(v=>s(v.title,e)),[e,o]);return{inputValue:e,setInputValue:r,filteredItems:I}}const ee=n.forwardRef((o,e)=>{const{labelProps:r,alerts:s,id:I,placeholder:v,items:P,testID:te="combobox",...re}=o,w=n.useId(),k=n.useMemo(()=>P.filter(c=>c.isPromoted),[P]),j=n.useMemo(()=>P.filter(c=>!c.isPromoted),[P]),se=n.useMemo(()=>[...k,...j],[k,j]),{inputValue:ae,setInputValue:ne,filteredItems:i}=He(se);return t.jsx(fe,{fieldID:I||w,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:r,alerts:s,children:({labelledBy:c,describedBy:le})=>t.jsx(he,{alert:s&&t.jsx($e,{alerts:s}),children:t.jsx(ge,{...r,children:t.jsxs(de,{...re,id:I||w,inputValue:ae,onInputChange:ne,"aria-labelledby":c,"aria-describedby":le,"data-testid":te,children:[t.jsx(Te,{children:t.jsxs(Be,{children:[t.jsx($,{ref:e,placeholder:v}),t.jsx(Re,{children:t.jsx(xe,{})})]})}),t.jsx(Ie,{children:t.jsx(Ae,{items:i,dependencies:[i],children:a=>{const ie=i.length,S=i.indexOf(a),ce=S+1,y=i.at(S+1);return t.jsx(Pe,{id:a.id,icon:a.icon,textValue:a.title,withDivider:a.isPromoted&&!(y!=null&&y.isPromoted),"aria-label":`${a.title}, menu item, group (${ce} of ${ie})`,children:a.title})}})})]})})})})});ee.displayName="Combobox";const Le=Array.from({length:20},(o,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),oe=Array.from({length:6},(o,e)=>{const r=`${e+1}`.padStart(2,"0"),s=[t.jsx(ve,{width:24,height:24}),t.jsx(ye,{width:24,height:24}),t.jsx(we,{width:24,height:24}),t.jsx(ke,{width:24,height:24}),t.jsx(je,{width:24,height:24}),t.jsx(Se,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:s[e]}}),Me=Array.from({length:20},(o,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Oe={title:"Components/Inputs/Combobox",component:ee,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:Le}},d={args:{"aria-label":"Combobox label"}},u={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={args:{items:oe,labelProps:{label:"Combobox label"}}},p={args:{items:Me,labelProps:{label:"Combobox label"}}},f={args:{items:oe,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},h={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},g={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var B,R,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,_,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Combobox label",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var H,L,M;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Combobox label",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,W,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,F,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var z,K,N;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["icon-item-02", "icon-item-04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(N=(K=f.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "Combobox label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const We=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],oo=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:h,DisabledItems:f,IconItems:m,Invalid:g,PromotedItems:p,WithHint:b,WithLabel:u,__namedExportsOrder:We,default:Oe},Symbol.toStringTag,{value:"Module"}));export{d as B,oo as C,f as D,m as I,p as P,u as W,b as a,h as b,g as c};
