import{u as s,l as e,d as i,p as y}from"./index-DO5xE0d-.js";import{$ as b,a as u}from"./Tooltip-DEjGWxHc.js";import{T as x}from"./Typography-Dcn0-GyB.js";import{a as I,b as g,T as v}from"./index-eS8l-D1x.js";import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{b as T,c as k}from"./Dialog-DDvBM-Pk.js";import{r as l}from"./index-CcKhGcwW.js";import{$ as C}from"./Button-DoQgAJyY.js";import{I as w,a as B}from"./index-B_KGh3jf.js";const W=i(b)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return e`
      z-index: ${n.zIndex} !important;
    `}}
`,q=i.div`
  ${({$maxWidth:t})=>{const{tokens:n}=s(),{tooltip:o}=n;return e`
      max-width: ${t?`${t}px`:o.maxWidth};
      border-radius: ${o.radius};
      padding-top: ${o.padding.top};
      padding-bottom: ${o.padding.bottom};
      padding-left: ${o.padding.left};
      padding-right: ${o.padding.right.default};
      background: ${o.backgroundColor};
    `}}
`,G=i(x)`
  ${()=>{const{tokens:t}=s(),{scrollBar:n}=t;return e`
      overflow-y: auto;
      max-height: 45dvh;
      scrollbar-color: ${n.thumbColor} transparent;
    `}}
`,J=I.DEFAULT_OFFSET,K="top",F=i(T)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return e`
      svg {
        display: block;
        fill: ${n.backgroundColor};
      }

      &[data-placement="top"] svg {
        transform: rotate(0deg);
      }

      &[data-placement="left"] svg {
        transform: rotate(-90deg);
      }

      &[data-placement="right"] svg {
        transform: rotate(90deg);
      }

      &[data-placement="bottom"] svg {
        transform: rotate(180deg);
      }
    `}}
`;function Q(){const{tokens:t}=s(),{tooltip:n}=t,o=parseInt(n.arrow.height),r=parseInt(n.arrow.width);return a.jsx(F,{style:{width:r,height:o},children:a.jsx("svg",{width:r,height:o,viewBox:`0 0 ${r} ${o}`,children:a.jsx("path",{d:`M0 0 L${o} ${o} L${r} 0`})})})}const j=i.span`
  ${({$variant:t,$typographyVariant:n})=>{const{tokens:o}=s(),{iconButton:r,typography:d,spacing:$}=o;return e`
      width: ${r.inner.icon.width[t]};
      height: ${y(d.lineHeight[n])};
      margin-left: ${$.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,c=i(C)`
  ${({$tooltipRole:t,$variant:n})=>{const{tokens:o}=s(),{iconButton:r}=o;return[e`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${r.padding[n]};
        margin: -${r.padding[n]};
      `,t==="dialog"&&e`
          &:not([data-disabled]) {
            cursor: pointer;
          }
        `]}}
`,A=i.div`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o}=n;return e`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding[t]};
      border-radius: ${o.inner.radius[t]};
      background: ${o.inner.backgroundColor[t].base};

      ${c}[data-focus-visible] && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,h=i(w)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:r}=n;return e`
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${r.icon.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${r.icon.secondaryColor.base};
      }
    `}}
`,E=i(h)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t,o=l.useContext(u),r=(o==null?void 0:o.isOpen)||!1;return[e`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: none;
        }
      `,!r&&e`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${n.icon.primaryColor.hover};
            }
          }
        `,r&&e`
          display: none;
        `]}}
`,R=i(h)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t;return e`
      ${c}[data-hovered] && {
        & [data-primary-color] {
          color: ${n.icon.primaryColor.hover};
        }

        & [data-secondary-color] {
          color: ${n.icon.secondaryColor.hover};
        }
      }

      ${c}[data-pressed] && {
        display: none;
      }
    `}}
`,f=i(B)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:r}=n;return e`
      display: none;
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${r.iconFilled.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${r.iconFilled.secondaryColor.base};
      }
    `}}
`,D=i(f)`
  ${()=>{const t=l.useContext(u),n=(t==null?void 0:t.isOpen)||!1;return[e`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: block;
        }
      `,n&&e`
          display: block;
        `]}}
`,_=i(f)`
  ${()=>e`
      ${c}[data-pressed] && {
        display: block;
      }
    `}
`,m=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,testID:r="tooltip-icon-button",...d}=t,p=l.useContext(k)?"dialog":"tooltip";return a.jsx(c,{...d,ref:n,$tooltipRole:p,$variant:o,"data-testid":r,children:a.jsxs(A,{$variant:o,children:[p==="tooltip"&&a.jsxs(a.Fragment,{children:[a.jsx(E,{$variant:o}),a.jsx(D,{$variant:o})]}),p==="dialog"&&a.jsxs(a.Fragment,{children:[a.jsx(R,{$variant:o}),a.jsx(_,{$variant:o})]})]})})});m.displayName="TooltipIconButton";const L=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,typographyVariant:r=v.DEFAULT_VARIANT,...d}=t;return a.jsx(j,{$variant:o,$typographyVariant:r,children:a.jsx(m,{ref:n,variant:o,...d})})});L.displayName="InlineTooltipIconButton";export{Q as A,q as C,K as D,L as I,W as T,J as a,G as b,m as c};
