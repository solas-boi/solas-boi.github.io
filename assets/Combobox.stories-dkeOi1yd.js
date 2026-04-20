import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{r as c}from"./index-CcKhGcwW.js";import{$ as de}from"./ComboBox-Cgzfm-3t.js";import{$ as be,b as R}from"./ListBox-Kkn7vHNz.js";import{d as n,u as $,l as I}from"./index-C1QKVHyt.js";import{$ as ue}from"./Button-DoQgAJyY.js";import{I as me}from"./TextInput.styled-bGddABZq.js";import{u as pe}from"./ScrollShadow.hooks-i9vNmSMF.js";import{R as he}from"./ReactAriaProviders-LKY0QchP.js";import{I as fe,a as ge,b as xe}from"./InputLabelTop-CXdwv7x6.js";import{C as $e,P as Ie}from"./Popover-CV035CvW.js";import{L as A}from"./ListBoxItem-DZ9s8P8k.js";import{n as Pe,o as ye,p as Ce,q as ve,r as we,s as ke}from"./index-B_KGh3jf.js";const je=n.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,x=n(me)`
  ${()=>{const{tokens:t}=$(),{select:e}=t;return I`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,re=n(ue)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Se=n(re)`
  ${()=>{const{tokens:t}=$(),{select:e}=t;return I`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,Be=n(be)`
  ${()=>{const{tokens:t}=$(),{select:e}=t,r=pe();return I`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,De=n.div`
  ${()=>{const{tokens:t}=$(),{outerField:e}=t;return I`
      border-radius: ${e.radius};

      &:has(${x}[data-focused]),
      &:has(${x}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,Re=n.div`
  ${()=>{const{tokens:t}=$(),{outerField:e}=t;return I`
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
      &:has(${re}[data-hovered]) {
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
`;function Ae(t){const{children:e}=t;return o.jsx(De,{children:o.jsx(Re,{children:e})})}const se=c.forwardRef((t,e)=>{const{labelProps:r,alerts:i,id:w,placeholder:le,menuTrigger:ne,items:a,testID:ie="combobox",disabledKeys:P,...ce}=t,k=c.useId(),j=c.useMemo(()=>a.filter(l=>l.isPromoted),[a]),S=c.useMemo(()=>a.filter(l=>!l.isPromoted),[a]),B=c.useMemo(()=>new Map(a.map((l,y)=>[l.id,y+1])),[a]),D=a.length;return o.jsx(he,{fieldID:w||k,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:i,children:({labelledBy:l,describedBy:y})=>o.jsx(fe,{alert:i&&o.jsx(xe,{alerts:i}),children:o.jsx(ge,{...r,children:o.jsxs(de,{...ce,id:w||k,"aria-labelledby":l,"aria-describedby":y,menuTrigger:ne,"data-testid":ie,children:[o.jsx(Ae,{children:o.jsxs(je,{children:[o.jsx(x,{ref:e,placeholder:le}),o.jsx(Se,{children:o.jsx($e,{})})]})}),o.jsx(Ie,{children:o.jsxs(Be,{children:[j.length>0&&o.jsx(R,{items:j,children:s=>{const C=P?P.includes(s.id):!1,v=B.get(s.id);return o.jsx(A,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:C,"aria-label":`${s.title}, menu item, group (${v} of ${D})`,children:s.title})}}),S.length>0&&o.jsx(R,{items:S,children:s=>{const C=P?P.includes(s.id):!1,v=B.get(s.id);return o.jsx(A,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:C,"aria-label":`${s.title}, menu item, group (${v} of ${D})`,children:s.title})}})]})})]})})})})});se.displayName="Combobox";const _e=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),ae=Array.from({length:6},(t,e)=>{const r=`${e+1}`.padStart(2,"0"),i=[o.jsx(Pe,{width:24,height:24}),o.jsx(ye,{width:24,height:24}),o.jsx(Ce,{width:24,height:24}),o.jsx(ve,{width:24,height:24}),o.jsx(we,{width:24,height:24}),o.jsx(ke,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:i[e]}}),Te=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Le={title:"Components/Inputs/Combobox",component:se,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:_e}},d={args:{"aria-label":"Combobox label"}},b={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={args:{items:ae,labelProps:{label:"Combobox label"}}},p={args:{items:Te,labelProps:{label:"Combobox label"}}},h={args:{items:ae,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},f={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},g={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var _,T,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var H,M,W;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(M=b.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var E,O,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,F,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(K=(F=m.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var N,V,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["icon-item-02", "icon-item-04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const He=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:f,DisabledItems:h,IconItems:m,Invalid:g,PromotedItems:p,WithHint:u,WithLabel:b,__namedExportsOrder:He,default:Le},Symbol.toStringTag,{value:"Module"}));export{d as B,Ue as C,h as D,m as I,p as P,b as W,u as a,f as b,g as c};
