import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{r as i}from"./index-CcKhGcwW.js";import{$ as de}from"./ComboBox-DGaVBx9l.js";import{$ as ue}from"./useControlledState-fS0KWGMw.js";import{u as n,i as I}from"./styled-components.browser.esm-hO7_nGqz.js";import{$ as be}from"./Button-c0q88Mvj.js";import{$ as me}from"./ListBox-B1bbQBa1.js";import{u as C}from"./index-CgLgilxD.js";import{I as pe}from"./TextInput.styled-PRjx8JUW.js";import{u as fe}from"./ScrollShadow.hooks-yTS4ggiE.js";import{R as he}from"./ReactAriaProviders-LKY0QchP.js";import{I as ge,a as $e,b as xe}from"./InputLabelTop-Buf9eQWM.js";import{C as Ie,P as Pe}from"./Popover-DPDiAt2N.js";import{L as Ce}from"./ListBoxItem-BKdnpBnx.js";import{a as ve}from"./utils-Clm8nLOM.js";import{$ as ye}from"./useFilter-B5WUJyQI.js";import{n as we,o as ke,p as je,q as Se,r as Be,s as Re}from"./index-CRAeHTmb.js";const Ae=n.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,x=n(pe)`
  ${()=>{const{tokens:o}=C(),{select:e}=o;return I`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,ee=n(be)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,De=n(ee)`
  ${()=>{const{tokens:o}=C(),{select:e}=o;return I`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,_e=n(me)`
  ${()=>{const o=fe();return I`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`,Te=n.div`
  ${()=>{const{tokens:o}=C(),{outerField:e}=o;return I`
      border-radius: ${e.radius};

      &:has(${x}[data-focused]),
      &:has(${x}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,He=n.div`
  ${()=>{const{tokens:o}=C(),{outerField:e}=o;return I`
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

      &:has(${x}[data-hovered]),
      &:has(${ee}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has(${x}[aria-expanded="true"]) {
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
`;function Le(o){const{children:e}=o;return t.jsx(Te,{children:t.jsx(He,{children:e})})}function Me(o,e){const[r,a]=ue(o.inputValue,o.defaultInputValue||""),P=ve(o.onInputChange,a),{contains:v}=ye({sensitivity:"base"}),l=i.useMemo(()=>e.filter(y=>v(y.title,r)),[r,e]);return{inputValue:r,handleInputChange:P,filteredItems:l}}const oe=i.forwardRef((o,e)=>{const{labelProps:r,alerts:a,id:P,placeholder:v,items:l,testID:y="combobox",...re}=o,k=i.useId(),j=i.useMemo(()=>l.filter(d=>d.isPromoted),[l]),S=i.useMemo(()=>l.filter(d=>!d.isPromoted),[l]),ae=i.useMemo(()=>[...j,...S],[j,S]),{inputValue:se,handleInputChange:ne,filteredItems:c}=Me(o,ae);return t.jsx(he,{fieldID:P||k,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:r,alerts:a,children:({labelledBy:d,describedBy:le})=>t.jsx(ge,{alert:a&&t.jsx(xe,{alerts:a}),children:t.jsx($e,{...r,children:t.jsxs(de,{...re,id:P||k,inputValue:se,onInputChange:ne,"aria-labelledby":d,"aria-describedby":le,"data-testid":y,children:[t.jsx(Le,{children:t.jsxs(Ae,{children:[t.jsx(x,{ref:e,placeholder:v}),t.jsx(De,{children:t.jsx(Ie,{})})]})}),t.jsx(Pe,{children:t.jsx(_e,{items:c,dependencies:[c],children:s=>{const ie=c.length,B=c.indexOf(s),ce=B+1,w=c.at(B+1);return t.jsx(Ce,{id:s.id,icon:s.icon,textValue:s.title,withDivider:s.isPromoted&&!(w!=null&&w.isPromoted),"aria-label":`${s.title}, menu item, group (${ce} of ${ie})`,children:s.title})}})})]})})})})});oe.displayName="Combobox";const Oe=Array.from({length:20},(o,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),te=Array.from({length:6},(o,e)=>{const r=`${e+1}`.padStart(2,"0"),a=[t.jsx(we,{width:24,height:24}),t.jsx(ke,{width:24,height:24}),t.jsx(je,{width:24,height:24}),t.jsx(Se,{width:24,height:24}),t.jsx(Be,{width:24,height:24}),t.jsx(Re,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:a[e]}}),Ve=Array.from({length:20},(o,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),We={title:"Components/Inputs/Combobox",component:oe,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:Oe}},u={args:{"aria-label":"Combobox label"}},b={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={args:{items:te,labelProps:{label:"Combobox label"}}},f={args:{items:Ve,labelProps:{label:"Combobox label"}}},h={args:{items:te,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},g={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},$={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var R,A,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,T,H;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(T=b.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,M,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var V,W,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,q,z;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,N,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["icon-item-02", "icon-item-04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(G=(N=h.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ee=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],so=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Disabled:g,DisabledItems:h,IconItems:p,Invalid:$,PromotedItems:f,WithHint:m,WithLabel:b,__namedExportsOrder:Ee,default:We},Symbol.toStringTag,{value:"Module"}));export{u as B,so as C,h as D,p as I,f as P,b as W,m as a,g as b,$ as c};
