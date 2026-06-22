import{j as n}from"./jsx-runtime-Blucd9Qg.js";import{i as a,u as i}from"./styled-components.browser.esm-hO7_nGqz.js";import{u as s}from"./index-CgLgilxD.js";import{C as h}from"./index-CRAeHTmb.js";import{$ as m,f as p}from"./Dialog-CrLtAaL_.js";import{u as $}from"./OverlayContext-BmgfW47V.js";const f=i(h)`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return a`
      display: block;
      width: ${o.button.icon.width};
      height: ${o.button.icon.height};
      color: ${o.button.icon.color.base};

      .react-aria-Select [data-hovered] &,
      .react-aria-ComboBox [data-hovered] & {
        color: ${o.button.icon.color.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-ComboBox[data-open] & {
        color: ${o.button.icon.color.active};
        rotate: 180deg;
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${o.button.icon.color.disabled};
      }
    `}}
`;function B(){return n.jsx(f,{"aria-hidden":"true"})}const x=i(m)`
  ${({$width:e})=>{const{tokens:{select:o,scrollBar:{thumbColor:t,trackColor:r}}}=s();return[a`
        display: grid;
        grid-template-rows: 1fr;
        width: var(--trigger-width);
        border-radius: ${o.menu.radius};
        border-width: ${o.menu.stroke.width};
        border-style: ${o.menu.stroke.style};
        border-color: ${o.menu.stroke.color};
        box-shadow: 0px 2px 2px ${o.menu.shadow.outer.color};
        background: ${o.menu.backgroundColor.base};
        scrollbar-color: ${t} ${r};
        z-index: ${o.menu.zIndex};
        overflow: hidden;

        &:focus,
        &:focus-visible {
          outline: none;
        }
      `,e&&a`
          width: ${e}px;
        `]}}
`,I=6,g=2,T=48,v=T*I,w=g+v;function L(e){const{width:o,isOpen:t,onOpenChange:r,triggerRef:d,...l}=e,{tokens:u}=s(),{select:b}=u,{portalElement:c}=$();return n.jsx(p,{getContainer:c&&(()=>c),children:n.jsx(x,{$width:o,maxHeight:w,offset:parseInt(b.gap,10),isOpen:t,onOpenChange:r,triggerRef:d,...l})})}export{B as C,w as M,L as P};
