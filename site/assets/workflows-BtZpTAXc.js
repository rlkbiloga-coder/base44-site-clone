import{j as e,r as f,w as $,l as z}from"./vendor-react-DkljngLw.js";import{b as B,g as S,c as E}from"./meta-kXIkcXKy.js";import{p as y,B as I}from"./branded-shell-CSYu3nWa.js";import{o as j,R as M,aA as O,aN as T,I as k,Z as R,as as D}from"./startup-BxiSko3P.js";import{B as L}from"./BrandedFaq-7z2OFpx3.js";/* empty css                      */import{B as q}from"./BrandedHomeSendoff-ne9FmaNn.js";/* empty css                          */import{u as P}from"./useScrollReveal-CzY-EvJG.js";import{a as N,u as F}from"./use-app-signup-url-GOu3QEOZ.js";import"./branded-faq-helpers-DAl0fP-3.js";import"./CircleArrow-DqKTJhk7.js";import"./cn-BLSKlp9E.js";/* empty css                            */const A=1920,b=(r,s,i)=>`clamp(${s}px, ${(r/A*100).toFixed(3)}vw, ${i??r}px)`,g=1099,H="https://media.base44.com/images/public/marketing-site-assets/branded/sections/workflows/hero-desktop.png",W="https://media.base44.com/images/public/marketing-site-assets/branded/sections/workflows/hero-mobile.png";function _({label:r,eyebrow:s,headlineLines:i,subcopy:n,primaryCtaText:o,primaryCtaHref:l="#",imageAlt:t,className:a=""}){const d={position:"relative",width:"100%",background:"var(--offwhite, #eeeceb)",overflow:"hidden",minHeight:"100vh",paddingTop:b(180,104,180),paddingBottom:b(120,64,150)},m={position:"relative",zIndex:1,width:"100%",maxWidth:1920,marginInline:"auto",boxSizing:"border-box",display:"flex",alignItems:"center",gap:b(64,40,88)};return e.jsxs("section",{className:`br-wf-hero ${a}`.trim(),style:d,"aria-label":r,children:[e.jsx("style",{children:`.br-wf-hero-inner{padding-inline:20px;}.br-wf-hero-sub{max-width:670px;}@media (min-width:768px){.br-wf-hero-inner{padding-inline:5.21vw;}}@media (min-width:1100px){.br-wf-hero-inner{padding-inline:min(4.6875vw,90px);}.br-wf-hero-title span{white-space:nowrap;}
/* Track the headline's nowrap width (~47vw at the desktop font) so the copy
   column never grows wider than the headline — leaving the rest for the image. */
.br-wf-hero-sub{max-width:min(670px, 47vw);}}
/* Stacked (tablet/mobile): the graphic's right edge bleeds to the screen edge —
   left edge stays on the content gutter — matching the desktop right-bleed. */
.br-wf-hero-img{display:block;height:auto;aspect-ratio:687/905;width:calc(100% + 20px);max-width:none;margin:0 -20px 0 0;}
@media (min-width:768px){.br-wf-hero-img{width:calc(100% + 5.21vw);margin-right:-5.21vw;}}
@media (min-width:${g+1}px){.br-wf-hero-img{flex:1 1 0;min-width:0;width:auto;max-width:none;margin:0;margin-right:calc(-1 * min(4.6875vw, 90px));aspect-ratio:1674/1228;}}
@media (max-width:${g}px){.br-wf-hero-inner{flex-direction:column !important;}}`}),e.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(30,30,36,0.07) 1.1px, transparent 1.1px)",backgroundSize:"12px 12px",zIndex:0,pointerEvents:"none"}}),e.jsxs("div",{className:"br-wf-hero-inner",style:m,children:[e.jsxs("div",{className:"br-wf-hero-copy",children:[e.jsx("p",{className:"br-wf-hero-eyebrow",style:{margin:0,fontFamily:"var(--font-body)",color:"#1e1e24"},children:s}),e.jsx("h1",{className:"br-wf-hero-title br-display",style:{margin:`${b(40,20,40)} 0 0`,color:"#1e1e24"},children:i.map((w,u)=>e.jsx("span",{style:{display:"block"},children:w},u))}),e.jsx("p",{className:"br-wf-hero-sub",style:{margin:`${b(40,20,40)} 0 0`,fontFamily:"var(--font-body)",color:"#1e1e24"},children:n}),e.jsx("div",{className:"br-wf-hero-cta",style:{display:"flex",flexWrap:"wrap",gap:14,marginTop:b(50,28,50)},children:e.jsx(j,{variant:"primary",color:"orange",size:"xl",href:l,...y(()=>N("1")),children:o})})]}),e.jsx(M,{className:"br-wf-hero-img",src:W,width:687,height:905,widths:[344,516,687],sizes:"100vw",sources:[{src:H,media:`(min-width:${g+1}px)`,width:1674,height:1228,widths:[640,960,1280,1674],sizes:"53vw"}],pictureProps:{style:{display:"contents"}},resize:"fit",loading:"eager",fetchPriority:"high",alt:t})]})]})}const Z=1920,h=(r,s,i)=>`clamp(${s}px, ${(r/Z*100).toFixed(3)}vw, ${i??r}px)`;function G({heading:r,capabilities:s,className:i=""}){const n=f.useRef(null),[o,l]=f.useState(!1);f.useEffect(()=>{const d=n.current;if(!d||o)return;if(typeof IntersectionObserver>"u"){l(!0);return}const m=new IntersectionObserver(w=>{w.some(u=>u.isIntersecting)&&(l(!0),m.disconnect())},{rootMargin:"400px"});return m.observe(d),()=>m.disconnect()},[o]);const t={position:"relative",width:"100%",overflow:"hidden",backgroundColor:"var(--offwhite, #eeeceb)",backgroundImage:o?"url(https://media.base44.com/images/public/marketing-site-assets/branded/sections/workflows/grow-bg.webp)":void 0,backgroundSize:"cover",backgroundPosition:"center",paddingTop:h(96,40,104),paddingInline:h(130,16,130),paddingBottom:0,boxSizing:"border-box"},a={width:"100%",maxWidth:1660,margin:"0 auto",position:"relative",zIndex:1,background:"var(--offwhite, #eeeceb)",padding:`${h(64,36,80)} ${h(80,16,80)} ${h(108,60,124)}`,boxSizing:"border-box",boxShadow:"var(--shadow-lg, 0 20px 60px -40px rgba(15,15,15,0.24))"};return e.jsxs("section",{ref:n,className:`br-wf-caps ${i}`.trim(),style:t,"aria-label":r,children:[e.jsxs("div",{className:"br-wf-caps-panel",style:a,children:[e.jsx("h2",{className:"br-wf-caps-title br-display",children:r}),e.jsx("div",{className:"br-wf-caps-grid",role:"list",children:s.map(d=>e.jsxs("article",{role:"listitem",className:"br-wf-caps-card",children:[e.jsx("h3",{className:"br-wf-caps-card-title br-display",children:d.title}),e.jsx("p",{className:"br-wf-caps-card-body",children:d.body})]},d.title))})]}),e.jsx("div",{"aria-hidden":"true",style:{height:h(21,10,21),background:"var(--orange-500, #ff631f)",marginInline:`calc(-1 * ${h(130,24,130)})`,marginTop:h(92,42,100)}})]})}const c="https://media.base44.com/images/public/marketing-site-assets/homepage-clone/images/superagents-new",K=[{key:"gmail",src:`${c}/integ-gmail.svg`,alt:"Gmail",label:"Gmail"},{key:"calendar",src:`${c}/integ-calendar.svg`,alt:"Calendar",label:"Calendar"},{key:"drive",src:`${c}/integ-drive.svg`,alt:"Drive",label:"Drive"},{key:"discord",src:`${c}/integ-discord.svg`,alt:"Discord"},{key:"linkedin",src:`${c}/integ-linkedin.svg`,alt:"LinkedIn"},{key:"notion",src:`${c}/integ-notion.svg`,alt:"Notion"},{key:"wix",src:`${c}/integ-wix.svg`,alt:"Wix"},{key:"hubspot",src:`${c}/integ-hubspot.svg`,alt:"HubSpot"},{key:"telegram",src:`${c}/integ-telegram.svg`,alt:"Telegram"},{key:"slack",src:`${c}/integ-slack.svg`,alt:"Slack"}];function U(){const[r,s]=f.useState(!1),[i,n]=f.useState(!1),o=f.useRef(i);o.current=i;const l=f.useRef(null);return f.useEffect(()=>{if(!i)return;const t=a=>{a.pointerType!=="mouse"&&n(!1)};return document.addEventListener("pointerdown",t),()=>document.removeEventListener("pointerdown",t)},[i]),{paused:r||i,pressed:i,onPointerEnter:t=>{t.pointerType==="mouse"&&T("(hover: hover)")&&s(!0)},onPointerLeave:t=>{t.pointerType==="mouse"&&s(!1)},onPointerDown:t=>{l.current=t.pointerType,t.pointerType!=="mouse"&&!o.current&&n(!0)},onKeyDown:t=>{!t.repeat&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n(a=>!a))},onClick:()=>{const t=l.current;if(l.current=null,t==="touch"||t==="pen")return;const a=!o.current;n(a),a||s(!1)}}}function V({logos:r,pauseLabel:s,resumeLabel:i}){const n=O(),{paused:o,pressed:l,onPointerEnter:t,onPointerLeave:a,onPointerDown:d,onKeyDown:m,onClick:w}=U(),u=[...r,...r],x=e.jsx("div",{className:"br-wf-mq-track","data-paused":o,"aria-hidden":!0,children:u.map((p,C)=>e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"clamp(22px, 2.34vw, 45px)"},children:[e.jsx("span",{className:"br-wf-mq-logo","data-logo":p.key,children:p.label?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:p.src,alt:""}),p.label]}):e.jsx("img",{src:p.src,alt:p.alt})}),e.jsx("span",{className:"br-wf-mq-dot"})]},`${p.key}-${C}`))});return n?e.jsx("div",{className:"br-wf-mq-marquee","aria-hidden":!0,children:x}):e.jsx("button",{type:"button",className:"br-wf-mq-marquee","aria-label":l?i:s,onPointerEnter:t,onPointerLeave:a,onPointerDown:d,onKeyDown:m,onClick:w,children:x})}function Y({heading:r,subcopy:s,pauseLabel:i,resumeLabel:n,logos:o=K,className:l=""}){return e.jsxs("section",{className:`br-wf-mq ${l}`.trim(),"aria-label":r,children:[e.jsx("div",{className:"br-wf-mq-inner",children:e.jsxs("div",{className:"br-wf-mq-head",children:[e.jsx("h2",{className:"br-wf-mq-title br-display",children:r}),e.jsx("p",{className:"br-wf-mq-statement br-display",children:s})]})}),e.jsx(V,{logos:o,pauseLabel:i,resumeLabel:n})]})}function X(){return e.jsxs("svg",{className:"br-wf-wedge-mark",viewBox:"0 0 32 32.0547",fill:"none","aria-hidden":"true",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM16 3.11111C8.88166 3.11111 3.11111 8.88166 3.11111 16C3.11111 23.1183 8.88166 28.8889 16 28.8889C23.1183 28.8889 28.8889 23.1183 28.8889 16C28.8889 8.88166 23.1183 3.11111 16 3.11111Z",fill:"#BDBDBD"}),e.jsx("path",{d:"M9 14.5547H23V17.5547H9V14.5547Z",fill:"#BDBDBD"})]})}function Q(){return e.jsxs("svg",{className:"br-wf-wedge-mark",viewBox:"0 0 32 32.0547",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M23.0417 11.9236L15.9089 21.0148C15.6505 21.3439 15.2701 21.5552 14.8542 21.6007C14.4381 21.6461 14.0205 21.5218 13.697 21.2561L8.82986 17.2561L10.8056 14.8524L14.4427 17.842L20.5938 10.0035L23.0417 11.9236Z",fill:"#1E1E24"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM16 3.11111C8.88166 3.11111 3.11111 8.88166 3.11111 16C3.11111 23.1183 8.88166 28.8889 16 28.8889C23.1183 28.8889 28.8889 23.1183 28.8889 16C28.8889 8.88166 23.1183 3.11111 16 3.11111Z",fill:"#1E1E24"})]})}function v({label:r,points:s,positive:i}){return e.jsxs("div",{children:[e.jsx("p",{className:"br-wf-wedge-label",children:r}),e.jsx("div",{children:s.map(n=>e.jsxs("div",{className:"br-wf-wedge-row",children:[i?e.jsx(Q,{}):e.jsx(X,{}),e.jsx("span",{className:"br-wf-wedge-point br-display",children:n})]},n))})]})}function J({heading:r,subcopy:s,oldWay:i,newWay:n,className:o=""}){return e.jsxs("section",{className:`br-wf-wedge ${o}`.trim(),"aria-label":r,children:[e.jsx("span",{className:"br-wf-wedge-cog","aria-hidden":"true",children:e.jsx(k,{name:"cog",color:"blue",size:"clamp(240px, 16.77vw, 322px)"})}),e.jsxs("div",{className:"br-wf-wedge-inner",children:[e.jsxs("div",{className:"br-wf-wedge-head",children:[e.jsx("h2",{className:"br-wf-wedge-title br-display",children:r}),e.jsx("p",{className:"br-wf-wedge-sub",children:s})]}),e.jsxs("div",{className:"br-wf-wedge-list",children:[e.jsx(v,{label:i.label,points:i.points,positive:!1}),e.jsx(v,{label:n.label,points:n.points,positive:!0})]})]})]})}function ee({heading:r,subcopy:s,suggestions:i,ctaText:n,ctaHref:o,biFoldName:l="2",className:t=""}){return e.jsx("section",{className:`br-wf-cases ${t}`.trim(),"aria-label":r,children:e.jsxs("div",{className:"br-wf-cases-inner",children:[e.jsxs("div",{className:"br-wf-cases-intro",children:[e.jsx("h2",{className:"br-wf-cases-title br-display",children:r}),e.jsx("p",{className:"br-wf-cases-sub",children:s.split("<br/>").map((a,d,m)=>e.jsxs(f.Fragment,{children:[d>0&&e.jsx("br",{className:"br-wf-cases-sub-break","aria-hidden":"true"}),a,d<m.length-1?" ":""]},a))}),o&&e.jsx("div",{className:"br-wf-cases-cta",children:e.jsx(j,{variant:"primary",size:"l",href:o,...y(()=>N(l)),children:n})})]}),e.jsx("div",{className:"br-wf-cases-grid",role:"list",children:i.map(a=>e.jsxs("article",{role:"listitem",className:"br-wf-cases-card",children:[e.jsxs("div",{className:"br-wf-cases-card-head",children:[a.label&&e.jsx("p",{className:"br-wf-cases-card-label",children:a.label}),e.jsx("h3",{className:"br-wf-cases-card-title br-display",children:a.title})]}),e.jsx("p",{className:"br-wf-cases-card-body",children:a.sub}),e.jsx(k,{name:a.symbol,color:"orange",size:"var(--wf-icon)",style:{position:"absolute",top:0,right:0}})]},a.title))})]})})}const re=`
/* Reserve the scrollbar gutter so locking page scroll when a header dropdown
   opens doesn't shift the fixed header / content sideways. */
html { scrollbar-gutter: stable; }

/* ===== Header nav emphasis — on hover/active the label switches to the real
   font-weight 600/700. An invisible ::after reserves the bold width up front so
   nothing shifts. ===== */
.br-nav-label { display: inline-grid; justify-items: center; }
.br-nav-label::after {
  content: attr(data-text);
  font-weight: 600;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}
.br-nav-em:hover,
.br-nav-em[data-active="true"] { font-weight: 600; }

.br-nav-sa { font-weight: 600; }
.br-nav-sa:hover { font-weight: 700; }
.br-nav-sa-label { display: inline-grid; justify-items: center; }
.br-nav-sa-label::after {
  content: attr(data-text);
  font-weight: 700;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

/* ===== Header mega-menu open (dropdown panel + backdrop) =====
   Panel slides down from behind the header bar (clipped by an overflow-hidden
   wrapper) with a snappy ease-out. */
@keyframes brDropdownIn { from { transform: translateY(-100%); } to { transform: translateY(0); } }
@keyframes brBackdropIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes brDropdownOut { from { transform: translateY(0); } to { transform: translateY(-100%); } }
@keyframes brBackdropOut { from { opacity: 1; } to { opacity: 0; } }
.br-dropdown-enter { animation: brDropdownIn 0.34s cubic-bezier(0.16, 1, 0.3, 1); will-change: transform; }
.br-dropdown-exit { animation: brDropdownOut 0.3s cubic-bezier(0.5, 0, 0.84, 0) forwards; will-change: transform; }
.br-backdrop-enter { animation: brBackdropIn 0.28s ease-out; }
.br-backdrop-exit { animation: brBackdropOut 0.26s ease-in forwards; }

@media (prefers-reduced-motion: reduce) {
  .br-dropdown-enter,
  .br-dropdown-exit,
  .br-backdrop-enter,
  .br-backdrop-exit { animation: none; }
}

/* ===== Footer link underline (verbatim from BRANDED_CHROME) — the shared
   BrandedFooter draws an underline in from the left on hover, out to the right
   on leave. Desktop only. ===== */
.br-footer-underline { position: relative; }
.br-footer-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 180ms ease;
}
@media (min-width: 1100px) {
  .br-footer-link:hover .br-footer-underline::after {
    transform: scaleX(1);
    transform-origin: left center;
  }
}

/* ===== Sendoff CTA — always one line. "Build workflows" is longer than the
   shared sendoff's default "Start building", so at the shared tablet/mobile
   sizing (branded-home-chrome: 12.5vw tablet, up to 56px mobile) the CTA reaches
   the page edges on tablet and wraps to two lines on mobile. Scale the sendoff
   statement (headline + CTA share .br-sendoff-headline) down a touch for
   tablet/mobile so the CTA clears the sides and stays one line — the same fix
   branded-home-chrome already applies per-language for longer copy. Page-scoped
   (only one .br-sendoff on this page); higher specificity beats the shared
   !important sizing. ===== */
.br-sendoff .br-sendoff-cta-underline { white-space: nowrap; }
@media (min-width: 768px) and (max-width: 1099px) {
  .br-sendoff .br-sendoff-headline { font-size: clamp(64px, 10vw, 104px) !important; }
}
@media (max-width: 767px) {
  .br-sendoff .br-sendoff-headline { font-size: clamp(28px, 9vw, 40px) !important; }
}
`;function se({page:r}){const s=F();return P("br-reveal"),e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(I,{homeHref:"/",children:e.jsxs("div",{style:{fontFamily:"var(--font-body)"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:re}}),e.jsxs("div",{style:{overflowX:"clip"},children:[e.jsx(_,{label:r.hero.label,eyebrow:r.hero.eyebrow,headlineLines:r.hero.headline.split("<br/>"),subcopy:r.hero.subcopy,primaryCtaText:r.hero.cta,primaryCtaHref:s,imageAlt:r.hero.imageAlt}),e.jsx("div",{id:"how",children:e.jsx(G,{heading:r.capabilities.heading,capabilities:r.capabilities.items})}),e.jsx(Y,{...r.marquee}),e.jsx(J,{...r.wedge}),e.jsx(ee,{heading:r.useCases.heading,subcopy:r.useCases.subcopy,suggestions:r.useCases.suggestions,ctaText:r.useCases.cta,ctaHref:s}),e.jsx(L,{title:r.faqTitle,items:r.faq}),e.jsx(q,{ctaUrl:s,headlineLines:r.sendoff.headline.split("<br/>"),ctaText:r.sendoff.cta,biFoldName:"sendoff"})]})]})})]})}const ue=({data:r,params:s,matches:i})=>r?[...B({title:r.page.meta.title,description:r.page.meta.description,path:"/features/workflows",image:E(D(s)),params:s,publicOrigin:S(i)})]:[],ge=()=>[{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-semibold.woff2",type:"font/woff2",crossOrigin:"anonymous"},{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-medium.woff2",type:"font/woff2",crossOrigin:"anonymous"},{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-regular.woff2",type:"font/woff2",crossOrigin:"anonymous"}],xe=$(function(){const{page:s}=z();return e.jsx(se,{page:s})});export{xe as default,ge as links,ue as meta};
