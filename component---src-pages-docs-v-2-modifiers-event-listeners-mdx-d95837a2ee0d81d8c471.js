(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7oih":function(e,t,o){"use strict";o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi"),o("E5k/"),o("zTTH"),o("HQhv"),o("v9g0");var r=o("wTIg"),a=o("q1tI"),n=o.n(a),i=o("Wbzz"),s=o("7ljp"),l=o("qKvR"),c=o("eVhr"),d=o("4FWg"),p=o("Z3Aq"),b=function(e){var t=e.children;return Object(l.d)(i.StaticQuery,{query:"1879031470",render:function(e){var o=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug,order:e.node.frontmatter.order,fileAbsolutePath:e.node.fileAbsolutePath}}));return t(o)},data:p})};o("zGcK"),o("TAD1");function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];if(e.slug.startsWith(r.slug))return void u(e,r.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function f(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],o=0;o<e.length;o++){u(e[o],t)}return t.sort((function(e,t){return t.order-e.order})),t}o("Ll4R");function g(e,t){var o=t.match(/^\/docs\/(v[0-9]+)\//),r=o?o[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+r+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}o("pJf4"),o("gZdQ");var m=!("undefined"==typeof window||!window.document||!window.document.createElement),h={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},v=Object(r.a)("div",{target:"ednh1zf0"})("padding-bottom:10px;display:none;transition:box-shadow 0.4s ease-out;flex-direction:column;align-items:stretch;padding:10px;",(function(e){return e.scrolled&&h})," ",d.e.lg,"{display:flex;}.algolia-autocomplete,input{width:100%;}input{border:0;border-radius:20px;padding:10px 20px;transition:box-shadow 0.2s ease-in-out;&:focus{outline:0;box-shadow:0 0 0 5px #a93244;}}.algolia-autocomplete .ds-dropdown-menu:before{left:10px;}"),x=function(e){var t=e.name,r=e.className,n=e.scrolled;return Object(a.useEffect)((function(){m&&o.e(31).then(o.t.bind(null,"UjO/",7)).then((function(e){return null==document.querySelector(".algolia-autocomplete")&&e.default({apiKey:"d5fa05c4e33e776fbf2b8021cbc15b37",indexName:"popper",inputSelector:".docsearch-input-"+t,algoliaOptions:{facetFilters:["tags:v2"]}})}))}),[t]),Object(l.d)(v,{className:r,scrolled:n},Object(l.d)("input",{type:"search",placeholder:"Search the docs...",className:"docsearch-input-"+t}))},j=o("vUvN"),O=o.n(j),y=(o("sc67"),o("4DPX"),o("17x9")),w=o.n(y);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var z=function(e){var t=e.color,o=e.size,r=k(e,["color","size"]);return n.a.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),n.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),n.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};z.propTypes={color:w.a.string,size:w.a.oneOfType([w.a.string,w.a.number])},z.defaultProps={color:"currentColor",size:"24"};var L=z,P={name:"2p83c6",styles:"display:flex;flex-direction:column;transform:translateX(0);"},A=Object(r.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;transform:translateX(-",260,"px);display:none;z-index:2;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&P})," ",d.e.lg,"{display:flex;flex-direction:column;transform:translateX(0);box-shadow:none;}"),S={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},C=Object(r.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;margin-top:0;line-height:1.5;",(function(e){return!e.root&&S})),H=Object(r.a)(i.Link,{target:"e1y4lhx02"})({name:"60c8rm",styles:"display:block;color:white;text-decoration:none;padding:6px 15px;font-size:18px;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;font-weight:500;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),T=Object(r.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:2;",d.e.lg,"{display:none;}"),q=Object(r.a)("div",{target:"e1y4lhx04"})("background:#c83b50;width:100%;padding:6px 0 0;display:none;",d.e.lg,"{display:flex;flex-direction:column;align-items:center;}"),E={name:"1czmu1r",styles:"width:100px;height:50px;"},M=function(e){var t=e.mobile;return Object(l.d)(i.Link,{to:"/",css:Object(l.c)("display:block;margin:0 auto;user-select:none;margin-top:",t?"-12px":"0",";&,&:hover{border-width:0;}")},Object(l.d)("img",{src:O.a,draggable:"false",alt:"Popper Logo",css:E}))},V=Object(r.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),B=Object(r.a)("button",{target:"e1y4lhx06"})("display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;margin:10px 10px 0 10px;",d.e.lg,"{display:none;}"),D=Object(r.a)("div",{target:"e1y4lhx07"})("overflow:auto;min-height:0;flex:1;padding:0 10px 20px 0;margin-top:20px;",d.e.lg,"{margin-top:10px;}"),R=function e(t){var o=t.route;return Object(l.d)(n.a.Fragment,null,Object(l.d)(C,{root:!0},Object(l.d)("li",{style:{marginBottom:0}},Object(l.d)(H,{to:o.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",fontWeight:"bold"}},o.navigationLabel)),Object(l.d)(C,{root:2===o.slug.split("/").length},o.children.map((function(t,o){return Object(l.d)(e,{key:o,route:t})})))))},F=0;function W(e){e.description,e.lang,e.meta;var t=e.path,o=Object(a.useState)(!1),r=o[0],i=o[1],s=Object(a.useState)(!1),c=s[0],d=s[1],p=Object(a.useRef)();function u(){i(!0)}function m(){i(!1)}function h(){var e=p.current.scrollTop;F=e,d(e>10)}return Object(a.useLayoutEffect)((function(){var e=p.current;e.scrollTop=F;var t=e.querySelector('[aria-current="page"]');if(t){var o=t.getBoundingClientRect();(o.bottom>window.innerHeight||o.top<0)&&t.scrollIntoView()}}),[]),Object(l.d)(b,null,(function(e){return Object(l.d)(n.a.Fragment,null,Object(l.d)(T,null,Object(l.d)(V,{onClick:u,"aria-expanded":r?"true":"false","aria-label":"Click to open navigation menu"},Object(l.d)(L,{size:30})),Object(l.d)(M,{mobile:!0})),Object(l.d)(A,{open:r},Object(l.d)(q,null,Object(l.d)(M,null)),Object(l.d)(B,{onClick:m},"Close Menu"),Object(l.d)(x,{scrolled:c,name:"docs"}),Object(l.d)(D,{ref:p,onScroll:h},f(g(e,t)).map((function(e,t){return Object(l.d)(R,{route:e,key:t})})))))}))}var I=o("9CUm");o("8ypT"),o("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var X=function(e){var t=e.color,o=e.size,r=U(e,["color","size"]);return n.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),n.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};X.propTypes={color:w.a.string,size:w.a.oneOfType([w.a.string,w.a.number])},X.defaultProps={color:"currentColor",size:"24"};var K=X,Z=o("EAKA");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var Q=Object(r.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",d.e.lg,"{padding-top:0;margin-left:",260,"px;}"),_=Object(r.a)(d.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",d.e.lg,"{margin-left:",260,"px;}"),Y=Object(r.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(r.a)(d.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",d.e.md,"{padding:0 40px;}"),ee=Object(r.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),te=Object(r.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",d.e.md,"{display:block;}"),oe=Object(r.a)(i.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",d.e.md,"{font-size:22px;}",d.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),re=Object(l.c)("vertical-align:3px;",d.e.md,"{vertical-align:0;}"),ae=Object(r.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",d.e.md,"{top:54px;}",d.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ne={"x-ad":c.a,a:function(e){return Object(l.d)("a",J({},e,{onClick:ie}),e.children)}};function ie(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var o="H2"===t.nodeName;window.innerWidth<=d.f.lg?o||window.scrollBy(0,-60):o&&window.scrollBy(0,50)}catch(r){}}var se=function e(t){return t.reduce((function(t,o){return t.concat(o).concat(e(o.children))}),[])},le={name:"1cbva5p",styles:"margin-top:15px;display:inline-block;"},ce=function(e){var t=e.path;return Object(l.d)(b,null,(function(e){var o=e.find((function(e){return e.slug===t}));return o&&Object(l.d)("a",{css:le,href:"https://github.com/popperjs/popper-core/edit/master/docs/src/"+o.fileAbsolutePath.split("/docs/src/")[1],rel:"noopener noreferrer",target:"_blank"},"Edit this page")}))};t.a=function(e){var t=e.children,o=e.path,r=e.pageResources;!function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o])}(e,["children","path","pageResources"]);return Object(a.useLayoutEffect)(ie,[]),Object(l.d)(s.a,{components:ne},Object(l.d)(l.a,{styles:Object(l.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;font-weight:bold;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;line-height:1.3;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}li{margin-bottom:5px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",d.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",d.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(l.d)("div",null,r&&Object(l.d)(I.a,{title:r.json.pageContext.frontmatter.navigationLabel}),Object(l.d)(W,{root:"/",target:"location",path:o}),Object(l.d)(Q,null,Object(l.d)(d.a,null,t,Object(l.d)(ce,{path:o})),Object(l.d)(b,null,(function(e){var t=function(e){var t=se(f(g(e,o))),r=t.findIndex((function(e){return e.slug===o}));return{prev:t[r-1],next:t[r+1]}}(e),r=t.prev,a=t.next;return Object(l.d)(Y,null,Object(l.d)($,null,Object(l.d)(ee,null,r&&Object(l.d)(oe,{to:r.slug+"/","data-first":!0},Object(l.d)(ae,{"data-prev":!0},Object(l.d)(K,{size:28,css:re})),r.navigationLabel)),Object(l.d)(te,null),Object(l.d)(ee,null,a&&Object(l.d)(oe,{to:a.slug+"/","data-last":!0},a.navigationLabel,Object(l.d)(ae,{"data-next":!0},Object(l.d)(Z.a,{size:28,css:re}))))))}))),Object(l.d)(_,null,"© ",(new Date).getFullYear()," MIT License")))}},FBA4:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return c}));o("E5k/"),o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi"),o("q1tI");var r=o("7ljp"),a=o("7oih");o("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},l=a.a;function c(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(r.b)(l,n({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"event-listeners",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h1"},{href:"#event-listeners","aria-label":"event listeners permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Event Listeners"),Object(r.b)("p",null,"The ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"eventListeners")," modifier adds ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"scroll")," and ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"resize")," listeners that update\nthe position of the popper when necessary. These are not exhaustive and don't\ncover the following cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the reference element moves or changes size."),Object(r.b)("li",{parentName:"ul"},"When the popper element changes size (i.e. content).")),Object(r.b)("p",null,"Manually updating the instance via ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"instance.update()"),", a ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"ResizeObserver")," or\n",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"requestAnimationFrame")," loop (if animating) can solve these if necessary."),Object(r.b)("x-ad",null),Object(r.b)("h2",{id:"phase",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(r.b)("p",null,Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"write")),Object(r.b)("h2",{id:"options",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(r.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(r.b)("pre",n({parentName:"div"},{className:"language-flow"}),Object(r.b)("code",n({parentName:"pre"},{className:"language-flow"}),Object(r.b)("span",n({parentName:"code"},{className:"token keyword"}),"type")," Options ",Object(r.b)("span",n({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),"{"),"\n  scroll",Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.b)("span",n({parentName:"code"},{className:"token type tag"}),"boolean"),Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.b)("span",n({parentName:"code"},{className:"token comment"}),"// true"),"\n  resize",Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.b)("span",n({parentName:"code"},{className:"token type tag"}),"boolean"),Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.b)("span",n({parentName:"code"},{className:"token comment"}),"// true"),"\n",Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),"}"),Object(r.b)("span",n({parentName:"code"},{className:"token punctuation"}),";")))),Object(r.b)("h3",{id:"scroll",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h3"},{href:"#scroll","aria-label":"scroll permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("code",n({parentName:"h3"},{className:"language-text"}),"scroll")),Object(r.b)("p",null,"Determines if ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"scroll")," listeners are added."),Object(r.b)("h3",{id:"resize",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h3"},{href:"#resize","aria-label":"resize permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("code",n({parentName:"h3"},{className:"language-text"}),"resize")),Object(r.b)("p",null,"Determines if ",Object(r.b)("code",n({parentName:"p"},{className:"language-text"}),"resize")," listeners are added."),Object(r.b)("h2",{id:"data",style:{position:"relative"}},Object(r.b)("a",n({parentName:"h2"},{href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",n({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Data"),Object(r.b)("p",null,"This modifier currently has no data."))}c.isMDXComponent=!0},Z3Aq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/404.mdx","fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null,"order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/index.mdx","fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v1/index.mdx","fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/browser-support.mdx","fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support","order":10}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/constructors.mdx","fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/faq.mdx","fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/index.mdx","fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/lifecycle.mdx","fields":{"slug":"/docs/v2/lifecycle/"},"frontmatter":{"navigationLabel":"Lifecycle","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/migration-guide.mdx","fields":{"slug":"/docs/v2/migration-guide/"},"frontmatter":{"navigationLabel":"Migration Guide","order":11}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tippy.mdx","fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tree-shaking.mdx","fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking","order":7}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tutorial.mdx","fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/typings.mdx","fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/virtual-elements.mdx","fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/apply-styles.mdx","fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/compute-styles.mdx","fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/event-listeners.mdx","fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/flip.mdx","fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/hide.mdx","fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/index.mdx","fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/offset.mdx","fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/popper-offsets.mdx","fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/prevent-overflow.mdx","fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/detect-overflow.mdx","fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow","order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/index.mdx","fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/arrow.mdx","fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/community-modifiers.mdx","fields":{"slug":"/docs/v2/modifiers/community-modifiers/"},"frontmatter":{"navigationLabel":"Community Modifiers","order":10}}}]}}}')},vUvN:function(e,t,o){e.exports=o.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,o){"use strict";var r=o("P8UN"),a=o("Wadk")(6),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-modifiers-event-listeners-mdx-d95837a2ee0d81d8c471.js.map