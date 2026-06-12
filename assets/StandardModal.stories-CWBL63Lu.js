import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{a as q}from"./index-B-lxVbXh.js";import{n as I,H as B}from"./index-eS8l-D1x.js";import{r as p}from"./index-CcKhGcwW.js";import{u as g}from"./index-CgLgilxD.js";import{b as _}from"./index-CRAeHTmb.js";import{u as l,i as o}from"./styled-components.browser.esm-hO7_nGqz.js";import{C as L,M as D,S as O,h as k}from"./ScrollShadowContainer-BGVZHWaZ.js";import{I as F}from"./IconButton-D1Ef6OPn.js";import{T as r}from"./Typography-BYRdA7Ce.js";import{B as w}from"./Button-JMOh16Cg.js";const R=l(L)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,H=l.header`
  ${({$borderVisible:i})=>{const{tokens:e}=g(),{standardModal:t,modal:n}=e;return[o`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${t.header.gap};
        overflow: hidden;
        border-bottom-width: ${t.header.stroke.bottom.width};
        border-bottom-style: ${t.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${t.header.padding.mobile.top};
        padding-left: ${t.header.padding.mobile.left};
        padding-right: ${t.header.padding.mobile.right};
        padding-bottom: ${t.header.padding.mobile.bottom};
        transition: border-bottom-color 0.15s;

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-top: ${t.header.padding.tablet.top};
          padding-left: ${t.header.padding.tablet.left};
          padding-right: ${t.header.padding.tablet.right};
          padding-bottom: ${t.header.padding.tablet.bottom};
        }
      `,i&&o`
          border-bottom-color: ${t.header.stroke.bottom.color};
        `]}}
`,Q=l.div`
  ${({$headingVisible:i})=>{const{tokens:{modal:e,standardModal:{header:{padding:t}}}}=g(),n=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`,s=`calc(${t.mobile.top} + ${t.mobile.bottom} + 100%)`;return[o`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${n});
        @media (min-width: ${e.breakpoints.tablet}) {
          transform: translateY(${s});
        }
      `,!i&&o`
          && {
            transform: translateY(0);
          }
        `]}}
`,Y=l.div`
  margin-top: -10px;
  margin-bottom: -11px;
`,W=l.div`
  ${()=>{const{tokens:i}=g(),{standardModal:e,modal:t}=i;return o`
      display: grid;
      gap: ${e.content.gap};
      padding-top: ${e.content.padding.mobile.top};
      padding-left: ${e.content.padding.mobile.left};
      padding-right: ${e.content.padding.mobile.right};
      padding-bottom: ${e.content.padding.mobile.bottom};

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-top: ${e.content.padding.tablet.top};
        padding-left: ${e.content.padding.tablet.left};
        padding-right: ${e.content.padding.tablet.right};
        padding-bottom: ${e.content.padding.tablet.bottom};
      }
    `}}
`,G=l.footer`
  ${()=>{const{tokens:i}=g(),{standardModal:e,modal:t}=i;return o`
      height: ${e.footer.height.mobile};
      @media (min-width: ${t.breakpoints.tablet}) {
        height: ${e.footer.height.tablet};
      }
    `}}
`;function U(){const i=p.useRef(null),[e,t]=p.useState(!0);return p.useEffect(()=>{if(!i.current)return;const n=new IntersectionObserver(([s])=>{s&&t(s.isIntersecting)});return n.observe(i.current),()=>{n.disconnect()}},[]),{headingRef:i,headingVisible:e}}function b(i){const{heading:e,headingLevel:t=I.DEFAULT_HEADING_LEVEL,closeButtonProps:n,children:s,testID:u="standard-modal",...h}=i,{isOpen:x,onRequestClose:j}=h,{tokens:T}=g(),{standardModal:d}=T,v=p.useId();return a.jsx(D,{...h,"aria-labelledby":e?v:void 0,testID:u,children:x&&a.jsx(z,{children:({borderVisible:N,setBorderVisible:V,headingRef:A,headingVisible:P})=>a.jsxs(R,{children:[a.jsxs(H,{$borderVisible:N,children:[a.jsx(Q,{$headingVisible:P,inert:"",children:!!e&&a.jsx(r,{noWrap:!0,component:"p",variant:d.header.heading.typography.variant,fontFamily:d.header.heading.typography.fontFamily,children:e})}),a.jsx(Y,{children:a.jsx(F,{"aria-label":"Close modal",testID:`${u}-close-button`,...n,onClick:j,variant:d.header.closeButton.variant,children:a.jsx(_,{})})})]}),a.jsx(O,{onChange:({topShadowVisible:C})=>{V(C)},children:a.jsxs(W,{children:[!!e&&a.jsx(r,{ref:A,id:v,component:`h${t}`,variant:d.content.heading.typography.variant,fontFamily:d.content.heading.typography.fontFamily,"aria-label":k()?`${e}, dialog`:e,children:e}),a.jsx("div",{children:s})]})}),a.jsx(G,{"aria-hidden":"true"})]})})})}function z(i){const{children:e}=i,[t,n]=p.useState(!1),{headingRef:s,headingVisible:u}=U();return e({borderVisible:t,setBorderVisible:n,headingRef:s,headingVisible:u})}b.displayName="StandardModal";const{useArgs:K}=__STORYBOOK_MODULE_PREVIEW_API__,J={title:"Components/Surfaces/StandardModal",component:b,render:function(e){const[{isOpen:t},n]=K();function s(){n({isOpen:!0}),q("openModal")()}function u(){n({isOpen:!1}),q("modalClosed")()}return a.jsxs(a.Fragment,{children:[a.jsx(w,{variant:"primary",onClick:s,children:"Open Modal"}),a.jsx(b,{...e,isOpen:t,onRequestClose:u})]})},argTypes:{onRequestClose:{control:{disable:!0}},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:B},tabletWidth:{control:{type:"number"}},children:{control:{disable:!0}}},args:{isOpen:!1}},m={args:{heading:"Short modal content",children:a.jsx(r,{variant:"bodyM",children:"This is the content"})}},c={args:{heading:"Long modal content",children:a.jsxs(a.Fragment,{children:[a.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),a.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),a.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),a.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),a.jsx(r,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}};var f,y,$;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: "Short modal content",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...($=(y=m.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var E,M,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    heading: "Long modal content",
    children: <>
        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec
          ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at.
          Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor
          id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra
          ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in
          hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum
          enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo
          vel orci porta non. Ut placerat orci nulla pellentesque dignissim.
          Enim lobortis scelerisque fermentum dui faucibus in ornare quam.
        </Typography>

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
          Penatibus et magnis dis parturient montes nascetur. Purus in massa
          tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc
          faucibus a pellentesque sit amet porttitor. At tempor commodo
          ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc
          consequat interdum varius sit amet mattis. Nunc id cursus metus
          aliquam eleifend mi in. Elit pellentesque habitant morbi tristique.
          Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing
          elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue
          mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In
          pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus
          ultricies tristique nulla aliquet enim. Pharetra convallis posuere
          morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis
          aenean et tortor. Egestas pretium aenean pharetra magna ac placerat.
          Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna
          ac. Quis enim lobortis scelerisque fermentum dui faucibus in.
        </Typography>

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
          Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim
          nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum
          varius. Cras semper auctor neque vitae tempus quam pellentesque nec
          nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis
          nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin
          sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit
          amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor
          leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie
          nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet
          aliquam id diam maecenas ultricies. A iaculis at erat pellentesque.
          Quisque sagittis purus sit amet volutpat consequat mauris. Nulla
          porttitor massa id neque aliquam.
        </Typography>

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
          Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis.
          Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam
          purus sit amet luctus venenatis lectus. Pellentesque massa placerat
          duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor
          urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales
          neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac
          turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices.
          Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus
          pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam
          vulputate ut pharetra. Viverra vitae congue eu consequat ac felis
          donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at
          varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis
          dis parturient montes nascetur ridiculus. Non quam lacus suspendisse
          faucibus interdum posuere lorem ipsum dolor.
        </Typography>

        <Typography variant="bodyM">
          Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae
          justo eget magna. Aliquet sagittis id consectetur purus ut faucibus.
          Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et
          malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit
          eget gravida. Elementum facilisis leo vel fringilla est ullamcorper
          eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt
          praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique
          magna sit amet purus gravida quis blandit.
        </Typography>
      </>
  }
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const X=["Basic","LongContent"],de=Object.freeze(Object.defineProperty({__proto__:null,Basic:m,LongContent:c,__namedExportsOrder:X,default:J},Symbol.toStringTag,{value:"Module"}));export{m as B,c as L,de as S};
