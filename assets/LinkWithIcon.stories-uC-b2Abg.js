import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{L as g}from"./index-eS8l-D1x.js";import{i as k,k as C,D as P,L as G}from"./index-CRAeHTmb.js";import{f as q,a as x}from"./index-NgCCK6aN.js";import{u,p as H}from"./index-CgLgilxD.js";import{u as h,i as p}from"./styled-components.browser.esm-hO7_nGqz.js";import{L as J}from"./LinkBase-W-sdDtvK.js";import{T as K}from"./Typography-BYRdA7Ce.js";const R=h(J)``,I=h.div`
  ${()=>{const{tokens:n}=u(),{link:r}=n;return[p`
        display: inline-flex;
        gap: ${r.withIcon.gap};
      `]}}
`,Q=h(K)`
  ${({$isUnderlined:n,$isDashed:r})=>{const{tokens:s}=u(),{link:e}=s;return[p`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${I}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${I}:active && {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        ${R}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,n&&p`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,n&&r&&p`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=h.div`
  ${({$variant:n,$isCentered:r})=>{const{tokens:s}=u(),{link:e}=s,t=H(e.withIcon.size[n]);return p`
      display: flex;
      flex-shrink: 0;
      align-items: ${r?"center":"flex-start"};

      svg {
        display: block;
        width: ${t};
        height: ${t};
      }
    `}}
`,z=q((n,r)=>{const{isUnderlined:s=!0,isDashed:e=!1,variant:t=g.DEFAULT_VARIANT,startIcon:f,endIcon:y,children:F,testID:m="link",...O}=n,{tokens:V}=u(),{link:M}=V;return o.jsx(R,{...O,ref:r,display:"inline-flex",testID:m,children:o.jsxs(I,{children:[f&&o.jsx($,{$variant:t,"data-testid":`${m}-start-icon-wrapper`,children:f}),o.jsx(Q,{component:"span",color:"inherit",variant:t,fontFamily:M.typography.fontFamily,$isUnderlined:s,$isDashed:e,children:F}),y&&o.jsx($,{$isCentered:!0,$variant:t,"data-testid":`${m}-end-icon-wrapper`,children:y})]})})});z.displayName="LinkWithIcon";const X={title:"Components/Inputs/LinkWithIcon",component:z,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS.filter(n=>["bodyL","bodyM","bodyS"].includes(n))},startIcon:{...x(k),if:{arg:"endIcon",truthy:!1}},endIcon:{...x(k),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},a={args:{children:"Download report"}},i={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:o.jsx(C,{}),isDashed:!0,children:"Download report"}},c={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:o.jsx(C,{}),isUnderlined:!1,children:"Download report"}},d={args:{children:"Download report",startIcon:o.jsx(P,{})}},l={args:{children:"Log in",endIcon:o.jsx(G,{})}};var D,b,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(L=(b=a.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var T,w,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    isDashed: {
      control: {
        disable: true
      }
    }
  },
  args: {
    startIcon: <Icons.AccountIcon />,
    isDashed: true,
    children: "Download report"
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,j,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    isUnderlined: {
      control: {
        disable: true
      }
    }
  },
  args: {
    startIcon: <Icons.AccountIcon />,
    isUnderlined: false,
    children: "Download report"
  }
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var _,U,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(E=(U=d.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var N,W,B;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Y=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],ie=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Dashed:i,EndIcon:l,NoUnderline:c,StartIcon:d,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{a as B,i as D,l as E,ie as L,c as N,d as S};
