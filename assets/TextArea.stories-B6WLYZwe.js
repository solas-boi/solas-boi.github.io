import{fn as se}from"./index-DeN4tkzB.js";import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-BlWTxUPR.js";import{$ as ne,a as le}from"./filterDOMProps-_sa4KaGY.js";import{a as ie,$ as ce}from"./TextField-s0ehmXw6.js";import{$ as de}from"./useControlledState-vz5rV1ck.js";import{f as ue}from"./index-BDNQ1RZ6.js";import{u as m,i as n,a as g,p as k}from"./index-KUtr2Lc-.js";import{I as pe,a as he,b as be}from"./InputLabelTop-Dnnu44bU.js";import{C as fe}from"./CharactersCounter-DYLN7rl5.js";const me=g(ie)`
  ${({$autoGrow:a,$maxHeight:r})=>{const{tokens:e}=m(),{textArea:o,typography:l,scrollBar:$}=e,i=o.typography.variant,f=k(l.fontSize[i]),y=k(l.lineHeight[i]);return[n`
        position: relative;
        z-index: 0;

        all: unset;
        white-space: pre-wrap;
        word-wrap: break-word;
        min-height: ${o.minHeight};
        padding: calc(${o.paddingVertical} - 2px)
          calc(${o.paddingHorizontal} - 2px);
        margin: 2px;
        color: ${o.color.base};
        font-family: ${l.fontFamily[i]};
        font-size: ${f};
        line-height: ${y};
        scrollbar-color: ${$.thumbColor} transparent;

        &[data-readonly] {
          color: ${o.color.readOnly};
        }

        &[data-disabled] {
          color: ${o.color.disabled};
        }

        &::placeholder {
          color: ${o.color.placeholder};
        }
      `,r&&n`
          max-height: ${r}px;
        `,a&&n`
          field-sizing: content;
        `]}}
`,ge=g.div`
  ${()=>{const{tokens:a}=m(),{spacing:r}=a;return n`
      width: 100%;
      display: grid;
      gap: ${r.s4};
    `}}
`,$e=g.div`
  ${()=>{const{tokens:a}=m(),{outerField:r}=a;return n`
      border-radius: ${r.radius};

      &:has([data-focused]) {
        outline-width: ${r.focusRing.width.focus};
        outline-style: ${r.focusRing.style};
        outline-color: ${r.focusRing.color};
        outline-offset: ${r.focusRing.offset.focus};
      }
    `}}
`,xe=g.div`
  ${({$displayInnerShadow:a})=>{const{tokens:r}=m(),{outerField:e,textArea:o}=r;return n`
      position: relative;
      z-index: 1;
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

      &:has([data-invalid]) {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has([data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has([data-focused]) {
        outline-width: ${e.stroke.width.active};
        outline-color: ${e.stroke.color.active};
        outline-offset: ${e.stroke.offset.active};
      }

      &:has([data-disabled]) {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${o.innerShadow.height};
        pointer-events: none;
        opacity: ${o.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px ${o.innerShadow.color} inset;
        border-radius: ${e.radius} ${e.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px ${o.innerShadow.color} inset;
        border-radius: 0 0 ${e.radius} ${e.radius};
      }
      ${(a==="TOP"||a==="BOTH")&&n`
        &::before {
          opacity: ${o.innerShadow.opacity.active};
        }
      `}
      ${(a==="BOTTOM"||a==="BOTH")&&n`
        &::after {
          opacity: ${o.innerShadow.opacity.active};
        }
      `}
    `}}
`;function we(a){const{displayInnerShadow:r,children:e}=a;return t.jsx($e,{children:t.jsx(xe,{$displayInnerShadow:r,children:e})})}const Q=w.forwardRef((a,r)=>{const{labelProps:e,alerts:o,placeholder:l,autoGrow:$,maxHeight:i,withCharacterCounter:f,onChange:y,testID:v="textarea",...P}=a,{maxLength:x}=P,[U,X]=w.useState(null),T=ne(r),[A,Y]=de(a.value,a.defaultValue||""),Z=le(a.onChange,Y),ee=()=>{const C=T.current;if(C){const{scrollTop:ae,scrollHeight:re,offsetHeight:te}=C;X(ue.determineInnerShadowToDisplay(ae,re,te))}},oe=w.useCallback(()=>{ee()},[]);return t.jsx(ce,{...P,value:A,onChange:Z,children:t.jsx(pe,{alert:o&&t.jsx(be,{alerts:o}),gap:f&&x!==void 0?"4px":"8px",children:t.jsxs(ge,{children:[t.jsx(he,{...e,children:t.jsx(we,{displayInnerShadow:U,children:t.jsx(me,{ref:T,$autoGrow:$,$maxHeight:i,placeholder:l,onScroll:oe,"data-testid":v})})}),f&&x!==void 0&&t.jsx(fe,{length:A.length,maxLength:x,testID:`${v}-character-counter`})]})})})});Q.displayName="TextArea";const ye={title:"Components/Inputs/TextArea",component:Q,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},autoGrow:{control:"boolean"},maxHeight:{control:"number"},maxLength:{control:"number"},withCharacterCounter:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:se()}},s={args:{"aria-label":"TextArea label"}},c={...s,args:{labelProps:{label:"TextArea label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={...s,args:{labelProps:{label:"TextArea label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"TextArea label"}}},p={args:{isInvalid:!0,labelProps:{label:"TextArea label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},h={args:{withCharacterCounter:!0,maxLength:15,labelProps:{label:"TextArea label"}}},b={...s,args:{labelProps:{label:"TextArea label"},autoGrow:!0,maxHeight:300}};var S,I,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextArea label"
  }
}`,...(H=(I=s.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var B,j,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label",
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
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var D,O,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label",
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
}`,...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var W,G,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(L=(G=u.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var _,E,F;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "TextArea label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,q,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    withCharacterCounter: true,
    maxLength: 15,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var N,J,K;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label"
    },
    autoGrow: true,
    maxHeight: 300
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ve=["Basic","WithLabel","WithHint","Disabled","Invalid","WithCounter","AutoGrow"],Re=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:b,Basic:s,Disabled:u,Invalid:p,WithCounter:h,WithHint:d,WithLabel:c,__namedExportsOrder:ve,default:ye},Symbol.toStringTag,{value:"Module"}));export{b as A,s as B,u as D,p as I,Re as T,c as W,d as a,h as b};
