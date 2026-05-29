import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{r as c}from"./index-CcKhGcwW.js";import{$ as de}from"./ComboBox-CATZF6qV.js";import{a as R}from"./ListBox-COM2lQ3b.js";import{y as l,u as $,p as I}from"./index-Z8nU1pHX.js";import{$ as be}from"./Button-rLog8i9z.js";import{I as ue}from"./TextInput.styled-B3xprNcQ.js";import{u as me}from"./ScrollShadow.hooks-BlQBWLIH.js";import{R as pe}from"./ReactAriaProviders-LKY0QchP.js";import{I as he,a as fe,b as ge}from"./InputLabelTop-DyfifPlk.js";import{C as xe,P as $e}from"./Popover-YyRyfmVw.js";import{L as A}from"./ListBoxItem-Df_rOAlm.js";import{n as Ie,o as Pe,p as ye,q as Ce,r as ve,s as we}from"./index-CRAeHTmb.js";const ke=l.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,x=l(ue)`
  ${()=>{const{tokens:t}=$(),{select:e}=t;return I`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,re=l(be)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,je=l(re)`
  ${()=>{const{tokens:t}=$(),{select:e}=t;return I`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,Se=l.div`
  ${()=>{const{tokens:t}=$(),{select:e}=t,r=me();return I`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,Be=l.div`
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
`,De=l.div`
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
`;function Re(t){const{children:e}=t;return o.jsx(Be,{children:o.jsx(De,{children:e})})}const se=c.forwardRef((t,e)=>{const{labelProps:r,alerts:i,id:w,placeholder:ne,menuTrigger:le,items:a,testID:ie="combobox",disabledKeys:P,...ce}=t,k=c.useId(),j=c.useMemo(()=>a.filter(n=>n.isPromoted),[a]),S=c.useMemo(()=>a.filter(n=>!n.isPromoted),[a]),B=c.useMemo(()=>new Map(a.map((n,y)=>[n.id,y+1])),[a]),D=a.length;return o.jsx(pe,{fieldID:w||k,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:i,children:({labelledBy:n,describedBy:y})=>o.jsx(he,{alert:i&&o.jsx(ge,{alerts:i}),children:o.jsx(fe,{...r,children:o.jsxs(de,{...ce,id:w||k,"aria-labelledby":n,"aria-describedby":y,menuTrigger:le,"data-testid":ie,children:[o.jsx(Re,{children:o.jsxs(ke,{children:[o.jsx(x,{ref:e,placeholder:ne}),o.jsx(je,{children:o.jsx(xe,{})})]})}),o.jsx($e,{children:o.jsxs(Se,{children:[j.length>0&&o.jsx(R,{items:j,children:s=>{const C=P?P.includes(s.id):!1,v=B.get(s.id);return o.jsx(A,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:C,"aria-label":`${s.title}, menu item, group (${v} of ${D})`,children:s.title})}}),S.length>0&&o.jsx(R,{items:S,children:s=>{const C=P?P.includes(s.id):!1,v=B.get(s.id);return o.jsx(A,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:C,"aria-label":`${s.title}, menu item, group (${v} of ${D})`,children:s.title})}})]})})]})})})})});se.displayName="Combobox";const Ae=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),ae=Array.from({length:6},(t,e)=>{const r=`${e+1}`.padStart(2,"0"),i=[o.jsx(Ie,{width:24,height:24}),o.jsx(Pe,{width:24,height:24}),o.jsx(ye,{width:24,height:24}),o.jsx(Ce,{width:24,height:24}),o.jsx(ve,{width:24,height:24}),o.jsx(we,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:i[e]}}),_e=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Te={title:"Components/Inputs/Combobox",component:se,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:Ae}},d={args:{"aria-label":"Combobox label"}},b={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={args:{items:ae,labelProps:{label:"Combobox label"}}},p={args:{items:_e,labelProps:{label:"Combobox label"}}},h={args:{items:ae,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},f={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},g={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var _,T,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(te=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Le=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:f,DisabledItems:h,IconItems:m,Invalid:g,PromotedItems:p,WithHint:u,WithLabel:b,__namedExportsOrder:Le,default:Te},Symbol.toStringTag,{value:"Module"}));export{d as B,Qe as C,h as D,m as I,p as P,b as W,u as a,f as b,g as c};
