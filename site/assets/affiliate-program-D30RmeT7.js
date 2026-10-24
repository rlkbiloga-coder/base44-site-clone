import{j as e,w as d}from"./vendor-react-DkljngLw.js";import{B as m}from"./BrandedFaq-7z2OFpx3.js";/* empty css                      */import{s as f,u as n,o as h,Z as x,V as g}from"./startup-BxiSko3P.js";import{d as b,B as u}from"./branded-shell-CSYu3nWa.js";import{B as w}from"./BrandedHomeSendoff-ne9FmaNn.js";/* empty css                          */import{u as _}from"./useScrollReveal-CzY-EvJG.js";import{u as j}from"./use-app-signup-url-GOu3QEOZ.js";import{b as v,g as y,c as N}from"./meta-kXIkcXKy.js";import"./branded-faq-helpers-DAl0fP-3.js";import"./CircleArrow-DqKTJhk7.js";import"./cn-BLSKlp9E.js";/* empty css                            */const l="https://app.impact.com/campaign-campaign-info-v2/base44.brand?io=XGVwOnWOh120x5ACiH0KfqjVd39zVmyoWGGXYibsS7ENW%2Bj3JE3dlIY9k5G7KxVL",E="affiliates@base44.com",S=["commission","payouts","support"],A=["signUp","share","track","earn"],z=["join","payout","rate","cookie","materials","terms","contact"],k=["join","payout","rate","cookie","referralPeriod","materials","terms"];function P(a,r){const t={terms:f("/terms-of-service",r),contact:`mailto:${E}`};return(r==="en"?z:k).map(i=>{const o=t[i];return{question:a(`affiliateProgram.faq.items.${i}.q`),answer:a(`affiliateProgram.faq.items.${i}.a`),link:o?{text:a(`affiliateProgram.faq.items.${i}.linkText`),href:o}:void 0}})}const F=`
.br-hero-inner{position:relative;width:100%;max-width:1920px;margin:0 auto;padding-left:clamp(20px,4.7vw,90px);padding-top:clamp(96px,9.4vw,170px);padding-right:0;padding-bottom:clamp(48px,6.25vw,60px);box-sizing:border-box;}
.br-hero-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,3vw,56px);align-items:center;}
.br-hero-grid>*{min-width:0;}
.br-hero-grid picture{display:block;min-width:0;}
.br-hero-collage{width:100%;height:auto;display:block;max-width:100%;aspect-ratio:1039/900;}
.br-hero-textblock{display:flex;flex-direction:column;gap:clamp(20px,2.1vw,40px);max-width:900px;}
.br-hero-headline{font-size:clamp(96px,6.46vw,124px);line-height:0.97;letter-spacing:-0.04em;margin:0;}
.br-hero-subcopy{font-size:clamp(24px,calc(21.33px + 0.35vw),28px);line-height:1.36;letter-spacing:-0.01em;margin:0;max-width:670px;color:var(--black, #1E1E24);}

@media (max-width:1099px){
  /* Single column; the collage fills the content width and bleeds to the right
     viewport edge (no right gap), left edge aligned to the text inset. Keep the
     right inset on the text only (base .br-hero-inner already has padding-right:0). */
  .br-hero-grid{grid-template-columns:minmax(0,1fr);gap:clamp(28px,5vw,48px);}
  .br-hero-textblock{padding-right:clamp(20px,4.7vw,90px);}
  .br-hero-collage{max-width:none;margin:0;aspect-ratio:593/520;}
}
/* Tablet (768–1099 px): 96px headline top edge at y:166px (Figma 645:72276). */
@media (min-width:768px) and (max-width:1099px){
  .br-hero-inner{padding-top:166px !important;}
  .br-hero-textblock{gap:clamp(32px,4.167vw,42px);}
  .br-hero-headline{font-size:clamp(96px,calc(77.3px + 2.43vw),124px);line-height:0.98;max-width:658px;}
  .br-hero-subcopy{line-height:1.33;max-width:518px;}
}
/* Mobile (<768 px): Figma 645:72446 type scale; collage stacks under the copy. */
@media (max-width:767px){
  .br-hero-inner{padding-top:104px !important;padding-left:20px;padding-right:0;}
  .br-hero-textblock{gap:clamp(16px,4.167vw,32px);max-width:none;padding-right:20px;}
  .br-hero-headline{font-size:clamp(40px,calc(1.9px + 12.25vw),96px);line-height:1.087;letter-spacing:-0.02em;}
  .br-hero-subcopy{font-size:clamp(16px,calc(8.94px + 1.96vw),24px);line-height:1.5;letter-spacing:0;max-width:none;}
  /* Hero CTA floors at the M size on mobile (44px) instead of the primitive's
     default S (40px) — a larger touch target. Overrides the fluid vars the
     Button sets inline; these base vars only drive the <768px breakpoint. */
  .br-aff-hero-cta{--cta-h:44px !important;--cta-px:22px !important;--cta-fs:16px !important;--cta-r:8px !important;}
  .br-hero-collage{max-width:none;aspect-ratio:593/520;}
}`,T="https://media.base44.com/images/public/marketing-site-assets/branded/affiliate",c=(a,r,t,s,i=85)=>{const o=a.replace(/\.[a-z]+$/,".avif");return`${T}/hero/${a}/v1/fit/w_${r},h_${Math.round(r*s/t)},q_${i}/${o}`},p=(a,r,t,s)=>s.map(i=>`${c(a,i,r,t)} ${i}w`).join(", "),I=c("hero-collage-desktop-v3.webp",1039,1039,900),$=p("hero-collage-desktop-v3.webp",1039,900,[780,1039,1400,2078]),O=p("hero-collage-tablet-mobile-v3.webp",593,520,[420,600,900,1300,1779]);function L(){const{t:a}=n(),r=a("affiliateProgram.cta.join");return e.jsxs("section",{className:"br-aff-hero",style:{position:"relative",zIndex:1,width:"100%",overflow:"hidden",background:"transparent",color:"#1e1e24"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx("div",{className:"br-hero-inner",children:e.jsxs("div",{className:"br-hero-grid",children:[e.jsxs("div",{className:"br-hero-textblock",children:[e.jsx("h1",{className:"br-display br-hero-headline",style:{fontWeight:600},children:a("affiliateProgram.hero.title")}),e.jsx("p",{className:"br-hero-subcopy",style:{fontFamily:"Geist, sans-serif"},children:a("affiliateProgram.hero.subtitle")}),e.jsx("div",{children:e.jsx(h,{className:"br-aff-hero-cta",variant:"primary",color:"black",size:"xl",href:l,target:"_blank",rel:"noopener noreferrer",children:r})})]}),e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 1099px)",srcSet:O,sizes:"100vw"}),e.jsx("img",{className:"br-hero-collage",src:I,srcSet:$,sizes:"47vw",alt:"","aria-hidden":"true",loading:"eager",decoding:"async"})]})]})})]})}function B({text:a}){return a.includes("$")?e.jsx(e.Fragment,{children:a.split(/(\$)/).map((r,t)=>r==="$"?e.jsx("span",{className:"br-aff-dollar",children:"$"},t):r)}):e.jsx(e.Fragment,{children:a})}function R(){const{t:a}=n();return e.jsx("section",{className:"br-aff-reasons",children:e.jsxs("div",{className:"br-aff-reasons__inner",children:[e.jsxs("div",{className:"br-aff-reasons__head",children:[e.jsx("h2",{className:"br-aff-reasons__title br-display",children:a("affiliateProgram.reasons.title")}),e.jsx("p",{className:"br-aff-reasons__sub",children:a("affiliateProgram.reasons.subtitle")})]}),e.jsx("div",{className:"br-aff-reasons__cards",children:S.map(r=>e.jsxs("div",{className:"br-aff-card",children:[e.jsx("h3",{className:"br-aff-card__title br-display",children:e.jsx(B,{text:a(`affiliateProgram.reasons.cards.${r}.title`)})}),e.jsx("p",{className:"br-aff-card__desc",children:a(`affiliateProgram.reasons.cards.${r}.description`)})]},r))})]})})}function C(){return e.jsxs("svg",{viewBox:"0 0 39 39",fill:"none","aria-hidden":"true",className:"br-aff-steps__arrow",children:[e.jsx("rect",{width:"39",height:"39",rx:"19.5",fill:"#1e1e24"}),e.jsx("path",{d:"M24 26V15H13M24 15L14 25",stroke:"#ffffff",strokeWidth:"2"})]})}function q(){const{t:a}=n();return e.jsxs("section",{className:"br-aff-steps",children:[e.jsxs("div",{className:"br-aff-steps__head",children:[e.jsx("p",{className:"br-aff-steps__eyebrow",children:a("affiliateProgram.steps.title")}),e.jsx("h2",{className:"br-aff-steps__heading br-display",children:a("affiliateProgram.steps.subtitle")})]}),e.jsx("div",{className:"br-aff-steps__band",children:e.jsx("ol",{className:"br-aff-steps__cards",children:A.map(r=>e.jsx("li",{className:"br-aff-steps__item",children:e.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"br-aff-steps__card",children:[e.jsx("h3",{className:"br-aff-steps__card-title br-display",children:a(`affiliateProgram.steps.items.${r}.title`)}),e.jsxs("div",{className:"br-aff-steps__card-foot",children:[e.jsx("p",{className:"br-aff-steps__card-desc",children:a(`affiliateProgram.steps.items.${r}.description`)}),e.jsx(C,{})]})]})},r))})})]})}const D=`
@media (prefers-reduced-motion: reduce) {
  /* Blanket reset (Andy Bell pattern) so every micro-interaction — scroll
     reveal, CTA arrow slides, FAQ underline/expand, colour fades — is
     effectively instant for users who opt out. */
  .affiliate-program-page *,
  .affiliate-program-page *::before,
  .affiliate-program-page *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;function M(){const a=j(),{t:r,lang:t}=n();return _("br-reveal"),e.jsxs(e.Fragment,{children:[e.jsx(x,{googleFontsImport:!1}),e.jsx("style",{dangerouslySetInnerHTML:{__html:b+`
`+D}}),e.jsxs("div",{className:"affiliate-program-page min-h-screen w-full text-[var(--black,#1E1E24)] antialiased",style:{fontFamily:"Dazzed, 'Dazzed Fallback', sans-serif"},children:[e.jsx(L,{}),e.jsx(R,{}),e.jsx(q,{}),e.jsx(m,{title:r("affiliateProgram.faq.title").replace(" ",`
`),items:P(r,t)}),e.jsx(w,{ctaUrl:a})]})]})}const te=()=>[{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-semibold.woff2",type:"font/woff2",crossOrigin:"anonymous"},{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-medium.woff2",type:"font/woff2",crossOrigin:"anonymous"},{rel:"preload",as:"font",href:"https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-regular.woff2",type:"font/woff2",crossOrigin:"anonymous"},{rel:"preload",as:"font",href:"/fonts/geist/geist-latin-wght-normal.woff2",type:"font/woff2",crossOrigin:"anonymous"}],ie=({params:a,matches:r})=>{const{t,lang:s}=g(a);return v({title:t("affiliateProgram.meta.title"),description:t("affiliateProgram.meta.description"),image:N(s),path:"/affiliates",params:a,publicOrigin:y(r)})},se=d(function(){return e.jsx("div",{className:"branded-affiliate-program-page",children:e.jsx(u,{children:e.jsx(M,{})})})});export{se as default,te as links,ie as meta};
