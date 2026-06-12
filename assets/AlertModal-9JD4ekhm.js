import{j as i}from"./jsx-runtime-Blucd9Qg.js";import{h as g}from"./index-eS8l-D1x.js";import{u as p}from"./index-CgLgilxD.js";import{f as j,g as T,W as A,E as B}from"./index-CRAeHTmb.js";import{i as d,u as c}from"./styled-components.browser.esm-hO7_nGqz.js";import{C as F,M as I,h as L,S}from"./ScrollShadowContainer-BGVZHWaZ.js";import{r as f}from"./index-CcKhGcwW.js";import{T as _}from"./Typography-BYRdA7Ce.js";import{B as P}from"./Button-JMOh16Cg.js";const C=c(F)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,D=c.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{modal:o,alertModal:t}=a;return d`
      display: grid;
      border-top-width: ${t.stroke.top.width};
      border-top-style: ${t.stroke.top.style};
      border-top-color: ${t.stroke.top.color[e]};
      padding-top: ${t.padding.mobile.top};
      padding-left: ${t.padding.mobile.left};
      padding-right: ${t.padding.mobile.right};

      padding-bottom: ${t.header.padding.bottom};
      gap: ${t.header.gap};

      @media (min-width: ${o.breakpoints.tablet}) {
        padding-top: ${t.padding.tablet.top};
        padding-left: ${t.padding.tablet.left};
        padding-right: ${t.padding.tablet.right};
      }
    `}}
`,O=c.div`
  ${({$severity:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return d`
      svg {
        display: block;
        width: ${o.icon.width.mobile};
        height: ${o.icon.height.mobile};

        & [data-primary-color] {
          color: ${o.icon.primaryColor[e]};
        }

        & [data-secondary-color] {
          color: ${o.icon.secondaryColor[e]};
        }
      }

      @media (min-width: ${t.breakpoints.tablet}) {
        svg {
          width: ${o.icon.width.tablet};
          height: ${o.icon.height.tablet};
        }
      }
    `}}
`,U=c.div`
  ${({$stickFooter:e})=>{const{tokens:a}=p(),{alertModal:o,modal:t}=a;return[d`
        color: ${o.body.color};

        padding-left: ${o.padding.mobile.left};
        padding-right: ${o.padding.mobile.right};

        @media (min-width: ${t.breakpoints.tablet}) {
          padding-left: ${o.padding.tablet.left};
          padding-right: ${o.padding.tablet.right};
        }
      `,e?d`
            padding-bottom: ${o.body.padding.withStickyFooter.bottom};
          `:d`
            padding-bottom: ${o.body.padding.default.bottom};
          `]}}
`,R=c.div`
  ${({$layout:e,$stickFooter:a})=>{const{tokens:o}=p(),{alertModal:t,modal:n}=o;return[d`
        gap: ${t.footer.gap};
      `,e==="inline"&&d`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&d`
          display: grid;
          grid-auto-flow: row;
        `,d`
        padding-left: ${t.padding.mobile.left};
        padding-right: ${t.padding.mobile.right};
        padding-bottom: ${t.padding.mobile.bottom};

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-left: ${t.padding.tablet.left};
          padding-right: ${t.padding.tablet.right};
          padding-bottom: ${t.padding.tablet.bottom};
        }
      `,a&&d`
          padding-top: ${t.footer.sticky.padding.top};
          padding-bottom: ${t.footer.sticky.padding.bottom};
          @media (min-width: ${n.breakpoints.tablet}) {
            padding-top: ${t.footer.sticky.padding.top};
            padding-bottom: ${t.footer.sticky.padding.bottom};
          }
        `]}}
`;function W(){return!/android/i.test(navigator.userAgent)&&/safari/i.test(navigator.userAgent)&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function $(){const{tokens:e}=p(),{modal:a}=e,o=window.matchMedia(`(min-width: ${a.breakpoints.tablet})`),[t,n]=f.useState(()=>o.matches);return f.useEffect(()=>{function l(r){n(r.matches)}return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]),{isMobile:!t}}function H(e,a,o){const{isMobile:t}=$(),n=(a||[]).map(s=>({...s,variant:"primary"})),l=(o||[]).map(s=>({...s,variant:"secondary"})),r=[];return t||e==="stacked"?r.push(...n.reverse(),...l.reverse()):r.push(...l,...n),{orderedButtonsProps:r}}function N(e){const{heading:a,headingLevel:o=g.DEFAULT_HEADING_LEVEL,severity:t=g.DEFAULT_SEVERITY,primaryButtonsProps:n,secondaryButtonsProps:l,footerLayout:r=g.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:s=!1,children:y,testID:k="alert-modal",...m}=e,{isOpen:v}=m,{tokens:w}=p(),{alertModal:h}=w,x={error:i.jsx(B,{}),warning:i.jsx(A,{}),success:i.jsx(T,{}),info:i.jsx(j,{})},{isMobile:M}=$(),{orderedButtonsProps:E}=H(r,n,l),b=i.jsx("div",{children:i.jsx(R,{$layout:M?"stacked":r,$stickFooter:s,children:E.map(u=>i.jsx(P,{...u},u.children))})});return i.jsx(I,{"aria-label":a,testID:k,...m,children:v&&i.jsxs(C,{children:[i.jsxs(D,{$severity:t,role:W()?"banner":void 0,children:[i.jsx(O,{$severity:t,"aria-hidden":!0,children:x[t]}),i.jsx(_,{component:`h${o}`,variant:h.heading.typography.variant,fontFamily:h.heading.typography.fontFamily,"aria-label":L()?`${a}, dialog`:a,children:a})]}),i.jsxs(S,{children:[i.jsx(U,{$stickFooter:s,children:y}),s?void 0:b]}),s?b:void 0]})})}N.displayName="AlertModal";export{N as A};
