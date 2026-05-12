import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{r as p}from"./index-CcKhGcwW.js";import{$ as b,d as m,e as x,g as h,f}from"./Dialog-CpjsrLqg.js";import{M as g}from"./index-eS8l-D1x.js";import{u as l,p as c,y as a}from"./index-SVU_pXp3.js";import{u as k}from"./ScrollShadow.hooks-Cs9JdiV3.js";import{u as M}from"./OverlayContext-BmgfW47V.js";import{$ as I}from"./Pressable-Bbn2RcYB.js";const T=a(b)`
  ${()=>{const{tokens:{menu:e,scrollBar:{thumbColor:o,trackColor:r}}}=l();return c`
      display: grid;
      grid-template-rows: 1fr;
      width: max-content;
      max-width: ${e.maxWidth};
      border-radius: ${e.radius};
      border-width: ${e.stroke.width};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color};
      box-shadow: 0px 2px 2px ${e.shadow.outer.color};
      background: ${e.backgroundColor.base};
      scrollbar-color: ${o} ${r};
      z-index: ${e.zIndex};
      overflow: hidden;
    `}}
`,y=a(m)`
  ${()=>{const e=k();return c`
      outline: none;
      overflow-y: auto;

      ${e}
    `}}
`,i=a(x)`
  ${()=>{const{tokens:e}=l(),{menu:o}=e;return c`
      display: grid;
      min-height: ${o.option.minHeight};
      padding: ${o.option.padding};
      background: ${o.option.backgroundColor.base};
      border-bottom-width: ${o.separator.width};
      border-bottom-style: ${o.separator.style};
      border-bottom-color: ${o.separator.color};
      cursor: pointer;
      outline: none;

      &:last-of-type {
        border-bottom-color: transparent;
      }
    `}}
`,v=a.div`
  ${()=>{const{tokens:e}=l(),{menu:o,select:r}=e;return c`
      display: grid;
      align-items: center;
      color: ${o.option.inner.color.base};
      border-radius: ${o.option.inner.radius};
      background: ${o.option.inner.backgroundColor.base};
      outline-width: ${o.option.inner.stroke.width};
      outline-style: ${o.option.inner.stroke.style};
      outline-color: ${o.option.inner.stroke.color.base};
      outline-offset: ${o.option.inner.stroke.offset};
      overflow: hidden;

      ${i}[data-hovered] &,
      ${i}[data-focus-visible] & {
        background: ${o.option.inner.backgroundColor.hover};
        outline-color: ${o.option.inner.stroke.color.hover};
      }

      ${i}[data-pressed] & {
        background: ${o.option.inner.backgroundColor.active};
        outline-color: ${o.option.inner.stroke.color.active};
      }

      ${i}[data-disabled] & {
        cursor: not-allowed;
        color: ${r.menu.option.inner.color.disabled};
      }
    `}}
`,B="bottom end",w=6,C=2,E=48,_=E*w,S=C+_,$=p.createContext({}),j=e=>{const{children:o,...r}=e;return t.jsx($.Provider,{value:r,children:o})};function n(e){const{children:o,testID:r="menu",...s}=e;return t.jsx(j,{...s,testID:r,children:t.jsx(h,{children:o})})}n.Trigger=function(o){return t.jsx(I,{...o})};n.Content=function(o){const{children:r}=o,{popoverProps:s,testID:d}=p.useContext($),{portalElement:u}=M();return t.jsx(f,{getContainer:u&&(()=>u),children:t.jsx(T,{offset:g.DEFAULT_OFFSET,maxHeight:S,...s,children:t.jsx(y,{"data-testid":d,children:r})})})};n.Item=function(o){const{children:r,...s}=o;return t.jsx(i,{...s,children:d=>t.jsx(v,{children:typeof r=="function"?r(d):r})})};n.displayName="Menu";n.Trigger.displayName="Menu.Trigger";n.Content.displayName="Menu.Content";n.Item.displayName="Menu.Item";export{B as D,n as M};
