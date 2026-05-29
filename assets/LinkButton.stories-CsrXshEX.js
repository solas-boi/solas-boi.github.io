import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{i as H,A as J}from"./index-CRAeHTmb.js";import{a as K}from"./index-NgCCK6aN.js";import{B as f}from"./index-eS8l-D1x.js";import{r as Q}from"./index-CcKhGcwW.js";import{u as h,p as b,y as s,a as v}from"./index-Z8nU1pHX.js";import{$ as X}from"./Link-0Gg2Dd8x.js";import{T as Z}from"./Typography-DVnGbd4X.js";import{S as rr}from"./Spinner-DiOFgdjW.js";const n=s(X)`
  ${({$variant:o,$fullWidth:a})=>{const{tokens:r}=h(),{button:e}=r;return b`
      all: unset;
      position: relative;
      display: ${a?"grid":"inline-grid"};
      align-items: start;
      height: ${e.height};
      width: ${a?"100%":"auto"};
      min-width: ${e.minWidth};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
        opacity: ${e.opacity.disabled};
      }

      &[aria-disabled] {
        cursor: not-allowed;
      }

      &[data-pending] {
        cursor: not-allowed;
        opacity: 1;
      }

      &[data-focus-visible]:not([data-pending]) {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[o]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,or=s.div`
  ${({$variant:o})=>{const{tokens:a}=h(),{button:r}=a;return[b`
        position: relative;
        overflow: hidden;
        color: ${r.topLayer.color[o].base};
        background: ${r.topLayer.backgroundColor[o].base};
        height: ${r.topLayer.height[o]};
        padding-left: ${r.topLayer.padding[o].left};
        padding-right: ${r.topLayer.padding[o].right};
        border-width: ${r.topLayer.stroke.width};
        border-style: ${r.topLayer.stroke.style};
        border-color: ${r.topLayer.stroke.color[o].base};
        border-radius: ${r.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${r.topLayer.animationDuration}ms;

        ${n}[data-hovered] && {
          color: ${r.topLayer.color[o].hover};
          background: ${r.topLayer.backgroundColor[o].hover};
          transform: translateY(${r.topLayer.translateY[o].hover});
        }

        ${n}[data-pressed] && {
          color: ${r.topLayer.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-hovered] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-pressed] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-focus-visible] && {
          border-radius: ${r.topLayer.stroke.radius};
          outline-width: ${r.focusRing.width};
          outline-style: ${r.focusRing.style};
          outline-color: ${r.focusRing.color[o]};
          outline-offset: ${r.focusRing.offset};
        }
      `,o==="secondary"&&b`
          ${n}[data-hovered] && {
            border-color: ${r.topLayer.stroke.color[o].hover};
          }

          ${n}[data-pressed] && {
            border-color: ${r.topLayer.stroke.color[o].active};
          }
        `]}}
`,tr=s.div`
  ${({$variant:o})=>{const{tokens:a}=h(),{button:r}=a,{shadow:e}=r.bottomLayer;return b`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${r.bottomLayer.height};
      border-radius: ${r.bottomLayer.radius};
      background: ${r.bottomLayer.backgroundColor[o].base};
      box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

      ${n}[data-hovered] && {
        background: ${r.bottomLayer.backgroundColor[o].hover};
      }

      ${n}[data-pressed] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
        box-shadow: none;
      }

      ${n}[data-pending] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
        box-shadow: none;
      }

      ${n}[data-pending][data-hovered] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
      }

      ${n}[data-pending][data-pressed] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
      }
    `}}
`,er=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,nr=s.span`
  ${()=>{const{tokens:o}=h(),{button:a}=o,r=v(a.topLayer.icon.width),e=v(a.topLayer.icon.width);return b`
      display: flex;
      flex-shrink: 0;

      ${n}[data-pending] & {
        visibility: hidden;
      }

      svg {
        width: ${r};
        height: ${e};
      }
    `}}
`,ar=s.div`
  overflow: hidden;

  ${n}[data-pending] & {
    visibility: hidden;
  }
`,ir=s.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,i=Q.forwardRef((o,a)=>{const{variant:r=f.DEFAULT_VARIANT,startIcon:e,fullWidth:z,isPending:m,isDisabled:M,children:U,testID:k="link-button",...q}=o,{tokens:G}=h(),{button:L}=G;return t.jsxs(n,{...q,ref:a,$variant:r,$fullWidth:z,isDisabled:M||m,"data-pending":m||void 0,"data-testid":k,children:[t.jsx(tr,{$variant:r}),t.jsx(or,{$variant:r,children:t.jsxs(er,{children:[e&&t.jsx(nr,{children:e}),t.jsx(ar,{children:t.jsx(Z,{variant:L.topLayer.text.typography.variant,fontFamily:L.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",component:"div",testID:`${k}-text`,children:U})}),m&&t.jsx(ir,{children:t.jsx(rr,{"aria-label":"Loading...",variant:f.SPINNER_VARIANTS[r],testID:`${k}-spinner`})})]})})]})});i.displayName="LinkButton";const sr={title:"Components/Inputs/LinkButton",component:i,argTypes:{children:{control:{type:"text"}},href:{control:{type:"text"}},target:{control:{type:"text"}},variant:{control:{type:"select"},options:f.VARIANTS},isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:K(H)},args:{href:"#",children:"Link button text"}},d={},c={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",children:"Primary link button"}},l={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",children:"Secondary link button"}},p={argTypes:{variant:{control:{disable:!0}},isDisabled:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(i,{href:"#",variant:"primary",isDisabled:!0,children:"Primary link button"}),t.jsx(i,{href:"#",variant:"secondary",isDisabled:!0,children:"Secondary link button"})]})},u={argTypes:{isPending:{control:{disable:!0}},children:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(i,{href:"#",variant:"primary",isPending:!0,children:"Primary link button"}),t.jsx(i,{href:"#",variant:"secondary",isPending:!0,children:"Secondary link button"})]})},y={argTypes:{variant:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(i,{href:"#",variant:"primary",fullWidth:!0,children:"Primary link button"}),t.jsx(i,{href:"#",variant:"secondary",fullWidth:!0,children:"Secondary link button"})]})},g={args:{startIcon:t.jsx(J,{})},render:({startIcon:o})=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(i,{href:"#",variant:"primary",startIcon:o,children:"Primary link button"}),t.jsx(i,{href:"#",variant:"secondary",startIcon:o,children:"Secondary link button"})]})};var $,x,S;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,w,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    children: "Primary link button"
  }
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var P,I,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    children: "Secondary link button"
  }
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,C,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    },
    isDisabled: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <LinkButton href="#" variant="primary" isDisabled>
        Primary link button
      </LinkButton>
      <LinkButton href="#" variant="secondary" isDisabled>
        Secondary link button
      </LinkButton>
    </div>
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,Y,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    isPending: {
      control: {
        disable: true
      }
    },
    children: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <LinkButton href="#" variant="primary" isPending>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" isPending>
        Secondary link button
      </LinkButton>
    </div>
}`,...(A=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var _,N,E;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <LinkButton href="#" variant="primary" fullWidth>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" fullWidth>
        Secondary link button
      </LinkButton>
    </div>
}`,...(E=(N=y.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,O,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <LinkButton href="#" variant="primary" startIcon={startIcon}>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" startIcon={startIcon}>
        Secondary link button
      </LinkButton>
    </div>
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const dr=["Basic","Primary","Secondary","Disabled","Pending","Stacked","WithIcon"],kr=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:p,Pending:u,Primary:c,Secondary:l,Stacked:y,WithIcon:g,__namedExportsOrder:dr,default:sr},Symbol.toStringTag,{value:"Module"}));export{d as B,p as D,kr as L,u as P,l as S,g as W,y as a};
