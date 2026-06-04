import{u as n}from"./index-CgLgilxD.js";import{i as s,f as a}from"./styled-components.browser.esm-hO7_nGqz.js";function e(o){return a`
    0% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: transparent;
    }
    0.01% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: ${o};
    }
    99.9% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: ${o};
    }
    100% {
      --top-shadow-color: transparent;
      --bottom-shadow-color: ${o};
    }
  `}function r(o){return s`
    scroll-timeline-name: --scroll-shadow;
    scroll-timeline-axis: block;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      user-select: none;
      pointer-events: none;

      box-shadow: inset 0 -7px 9px -7px var(--top-shadow-color),
        inset 0 7px 9px -7px var(--bottom-shadow-color);

      animation: ${o} linear;
      animation-timeline: --scroll-shadow;
    }
  `}function d(){const{tokens:o}=n(),{scrollShadowContainer:t}=o;return r(e(t.shadow.color))}export{d as u};
