(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7oih":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("zTTH"),a("HQhv"),a("v9g0");var o=a("wTIg"),n=a("q1tI"),r=a.n(n),s=a("Wbzz"),c=a("7ljp"),i=a("qKvR"),p=a("C6DT"),l=a("4FWg"),d=a("Z3Aq"),b=function(e){var t=e.children;return Object(i.d)(s.StaticQuery,{query:"1879031470",render:function(e){var a=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug,order:e.node.frontmatter.order,fileAbsolutePath:e.node.fileAbsolutePath}}));return t(a)},data:d})};a("zGcK"),a("TAD1");function u(e,t){for(var a=0;a<t.length;a++){var o=t[a];if(e.slug.startsWith(o.slug))return void u(e,o.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function m(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],a=0;a<e.length;a++){u(e[a],t)}return t.sort((function(e,t){return t.order-e.order})),t}a("Ll4R");function f(e,t){var a=t.match(/^\/docs\/(v[0-9]+)\//),o=a?a[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+o+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}a("pJf4"),a("gZdQ");var g=!("undefined"==typeof window||!window.document||!window.document.createElement),h={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},v=Object(o.a)("div",{target:"ednh1zf0"})("padding-bottom:10px;display:none;transition:box-shadow 0.4s ease-out;flex-direction:column;align-items:stretch;padding:10px;",(function(e){return e.scrolled&&h})," ",l.e.lg,"{display:flex;}.algolia-autocomplete,input{width:100%;}input{border:0;border-radius:20px;padding:10px 20px;transition:box-shadow 0.2s ease-in-out;&:focus{outline:0;box-shadow:0 0 0 5px #a93244;}}.algolia-autocomplete .ds-dropdown-menu:before{left:10px;}"),j=function(e){var t=e.name,o=e.className,r=e.scrolled;return Object(n.useEffect)((function(){g&&a.e(30).then(a.t.bind(null,"UjO/",7)).then((function(e){return null==document.querySelector(".algolia-autocomplete")&&e.default({apiKey:"d5fa05c4e33e776fbf2b8021cbc15b37",indexName:"popper",inputSelector:".docsearch-input-"+t,algoliaOptions:{facetFilters:["tags:v2"]}})}))}),[t]),Object(i.d)(v,{className:o,scrolled:r},Object(i.d)("input",{type:"search",placeholder:"Search the docs...",className:"docsearch-input-"+t}))},O=a("vUvN"),x=a.n(O),N=(a("sc67"),a("4DPX"),a("17x9")),y=a.n(N);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P=function(e){var t=e.color,a=e.size,o=w(e,["color","size"]);return r.a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};P.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},P.defaultProps={color:"currentColor",size:"24"};var L=P,z={name:"2p83c6",styles:"display:flex;flex-direction:column;transform:translateX(0);"},A=Object(o.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;transform:translateX(-",260,"px);display:none;z-index:2;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&z})," ",l.e.lg,"{display:flex;flex-direction:column;transform:translateX(0);box-shadow:none;}"),S={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},T=Object(o.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;margin-top:0;line-height:1.5;",(function(e){return!e.root&&S})),C=Object(o.a)(s.Link,{target:"e1y4lhx02"})({name:"60c8rm",styles:"display:block;color:white;text-decoration:none;padding:6px 15px;font-size:18px;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;font-weight:500;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),q=Object(o.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:2;",l.e.lg,"{display:none;}"),E=Object(o.a)("div",{target:"e1y4lhx04"})("background:#c83b50;width:100%;padding:6px 0 0;display:none;",l.e.lg,"{display:flex;flex-direction:column;align-items:center;}"),B={name:"1czmu1r",styles:"width:100px;height:50px;"},H=function(e){var t=e.mobile;return Object(i.d)(s.Link,{to:"/",css:Object(i.c)("display:block;margin:0 auto;user-select:none;margin-top:",t?"-12px":"0",";&,&:hover{border-width:0;}")},Object(i.d)("img",{src:x.a,draggable:"false",alt:"Popper Logo",css:B}))},I=Object(o.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),D=Object(o.a)("button",{target:"e1y4lhx06"})("display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;margin:10px 10px 0 10px;",l.e.lg,"{display:none;}"),M=Object(o.a)("div",{target:"e1y4lhx07"})("overflow:auto;min-height:0;flex:1;padding:0 10px 20px 0;margin-top:20px;",l.e.lg,"{margin-top:10px;}"),G=function e(t){var a=t.route;return Object(i.d)(r.a.Fragment,null,Object(i.d)(T,{root:!0},Object(i.d)("li",{style:{marginBottom:0}},Object(i.d)(C,{to:a.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",fontWeight:"bold"}},a.navigationLabel)),Object(i.d)(T,{root:2===a.slug.split("/").length},a.children.map((function(t,a){return Object(i.d)(e,{key:a,route:t})})))))},F=0;function R(e){e.description,e.lang,e.meta;var t=e.path,a=Object(n.useState)(!1),o=a[0],s=a[1],c=Object(n.useState)(!1),p=c[0],l=c[1],d=Object(n.useRef)();function u(){s(!0)}function g(){s(!1)}function h(){var e=d.current.scrollTop;F=e,l(e>10)}return Object(n.useLayoutEffect)((function(){var e=d.current;e.scrollTop=F;var t=e.querySelector('[aria-current="page"]');if(t){var a=t.getBoundingClientRect();(a.bottom>window.innerHeight||a.top<0)&&t.scrollIntoView()}}),[]),Object(i.d)(b,null,(function(e){return Object(i.d)(r.a.Fragment,null,Object(i.d)(q,null,Object(i.d)(I,{onClick:u,"aria-expanded":o?"true":"false","aria-label":"Click to open navigation menu"},Object(i.d)(L,{size:30})),Object(i.d)(H,{mobile:!0})),Object(i.d)(A,{open:o},Object(i.d)(E,null,Object(i.d)(H,null)),Object(i.d)(D,{onClick:g},"Close Menu"),Object(i.d)(j,{scrolled:p,name:"docs"}),Object(i.d)(M,{ref:d,onScroll:h},m(f(e,t)).map((function(e,t){return Object(i.d)(G,{route:e,key:t})})))))}))}var W=a("9CUm");a("8ypT"),a("cu9l");function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var X=function(e){var t=e.color,a=e.size,o=U(e,["color","size"]);return r.a.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};X.propTypes={color:y.a.string,size:y.a.oneOfType([y.a.string,y.a.number])},X.defaultProps={color:"currentColor",size:"24"};var K=X,Z=a("EAKA");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var Q=Object(o.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.e.lg,"{padding-top:0;margin-left:",260,"px;}"),_=Object(o.a)(l.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.e.lg,"{margin-left:",260,"px;}"),Y=Object(o.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(o.a)(l.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",l.e.md,"{padding:0 40px;}"),ee=Object(o.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),te=Object(o.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",l.e.md,"{display:block;}"),ae=Object(o.a)(s.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",l.e.md,"{font-size:22px;}",l.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),oe=Object(i.c)("vertical-align:3px;",l.e.md,"{vertical-align:0;}"),ne=Object(o.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",l.e.md,"{top:54px;}",l.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),re={"x-ad":p.a,a:function(e){return Object(i.d)("a",J({},e,{onClick:se}),e.children)}};function se(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var a="H2"===t.nodeName;window.innerWidth<=l.f.lg?a||window.scrollBy(0,-60):a&&window.scrollBy(0,50)}catch(o){}}var ce=function e(t){return t.reduce((function(t,a){return t.concat(a).concat(e(a.children))}),[])},ie={name:"1cbva5p",styles:"margin-top:15px;display:inline-block;"},pe=function(e){var t=e.path;return Object(i.d)(b,null,(function(e){var a=e.find((function(e){return e.slug===t}));return a&&Object(i.d)("a",{css:ie,href:"https://github.com/popperjs/popper-core/edit/master/docs/src/"+a.fileAbsolutePath.split("/docs/src/")[1],rel:"noopener noreferrer",target:"_blank"},"Edit this page")}))};t.a=function(e){var t=e.children,a=e.path,o=e.pageResources;!function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a])}(e,["children","path","pageResources"]);return Object(n.useLayoutEffect)(se,[]),Object(i.d)(c.a,{components:re},Object(i.d)(i.a,{styles:Object(i.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;font-weight:bold;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;line-height:1.3;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}li{margin-bottom:5px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(i.d)("div",null,o&&Object(i.d)(W.a,{title:o.json.pageContext.frontmatter.navigationLabel}),Object(i.d)(R,{root:"/",target:"location",path:a}),Object(i.d)(Q,null,Object(i.d)(l.a,null,t,Object(i.d)(pe,{path:a})),Object(i.d)(b,null,(function(e){var t=function(e){var t=ce(m(f(e,a))),o=t.findIndex((function(e){return e.slug===a}));return{prev:t[o-1],next:t[o+1]}}(e),o=t.prev,n=t.next;return Object(i.d)(Y,null,Object(i.d)($,null,Object(i.d)(ee,null,o&&Object(i.d)(ae,{to:o.slug+"/","data-first":!0},Object(i.d)(ne,{"data-prev":!0},Object(i.d)(K,{size:28,css:oe})),o.navigationLabel)),Object(i.d)(te,null),Object(i.d)(ee,null,n&&Object(i.d)(ae,{to:n.slug+"/","data-last":!0},n.navigationLabel,Object(i.d)(ne,{"data-next":!0},Object(i.d)(Z.a,{size:28,css:oe}))))))}))),Object(i.d)(_,null,"© ",(new Date).getFullYear()," MIT License")))}},Z3Aq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/404.mdx","fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null,"order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/index.mdx","fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v1/index.mdx","fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/browser-support.mdx","fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support","order":10}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/constructors.mdx","fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/lifecycle.mdx","fields":{"slug":"/docs/v2/lifecycle/"},"frontmatter":{"navigationLabel":"Lifecycle","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/migration-guide.mdx","fields":{"slug":"/docs/v2/migration-guide/"},"frontmatter":{"navigationLabel":"Migration Guide","order":11}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tippy.mdx","fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tree-shaking.mdx","fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking","order":7}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tutorial.mdx","fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/typings.mdx","fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/virtual-elements.mdx","fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/apply-styles.mdx","fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/arrow.mdx","fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/compute-styles.mdx","fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/event-listeners.mdx","fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/flip.mdx","fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/hide.mdx","fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/popper-offsets.mdx","fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/prevent-overflow.mdx","fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/detect-overflow.mdx","fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow","order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/index.mdx","fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/index.mdx","fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/faq.mdx","fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/offset.mdx","fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/index.mdx","fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)","order":1}}}]}}}')},qD2Y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var o=a("7ljp"),n=a("7oih");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var s={},c={_frontmatter:s},i=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(i,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"tree-shaking",style:{position:"relative"}},Object(o.b)("a",r({parentName:"h1"},{href:"#tree-shaking","aria-label":"tree shaking permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Tree-shaking"),Object(o.b)("p",null,"While Popper v2 saw a sizeable decrease in bundle size from v1 (-2 kB from ~7 kB\nminzipped to ~5 kB minzipped), this is still not optimal."),Object(o.b)("p",null,'Popper addresses a lot of use cases and complexity, but to help keep consumers\'\nbundle sizes small, we made the library tree-shakable. "Tree-shaking" is the\nprocess of eliminating unused code from your bundles, which is achieved by\nbundlers such as webpack, Rollup and Parcel.'),Object(o.b)("p",null,"If you're using the CDN, tree-shaking will not be available."),Object(o.b)("h2",{id:"popper-lite",style:{position:"relative"}},Object(o.b)("a",r({parentName:"h2"},{href:"#popper-lite","aria-label":"popper lite permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Lite"),Object(o.b)("p",null,"The most straightforward way to enable tree-shaking is to use Popper Lite and\nconfigure it with your needs."),Object(o.b)("p",null,"Instead of:"),Object(o.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(o.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",r({parentName:"code"},{className:"token comment"}),"// ❌ Imports all of Popper!"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";")))),Object(o.b)("p",null,"Use:"),Object(o.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(o.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",r({parentName:"code"},{className:"token comment"}),"// ✅"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";")))),Object(o.b)("p",null,"Popper Lite only comes with the following modifiers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("code",r({parentName:"li"},{className:"language-text"}),"popperOffsets")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("code",r({parentName:"li"},{className:"language-text"}),"computeStyles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("code",r({parentName:"li"},{className:"language-text"}),"applyStyles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("code",r({parentName:"li"},{className:"language-text"}),"eventListeners"))),Object(o.b)("p",null,"This effectively achieves the bare minimum functionality, and is around 3 kB\nminzipped. If 3 kB is still too much for your application, we recommend trying\nout CSS tooltip alternatives which are as tiny as 1 kB. Please note that such\nlibraries have many disadvantages that Popper doesn't, so assess the trade-offs\nwhere necessary."),Object(o.b)("p",null,"Now, you'll need to add the modifiers you need. These are accessible under the\n",Object(o.b)("code",r({parentName:"p"},{className:"language-text"}),"@popperjs/core/lib/modifiers/")," directory."),Object(o.b)("p",null,"Generally, we recommend ",Object(o.b)("code",r({parentName:"p"},{className:"language-text"}),"flip")," and ",Object(o.b)("code",r({parentName:"p"},{className:"language-text"}),"preventOverflow")," since these are the most\nattractive reasons for using Popper in the first place:"),Object(o.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(o.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"createPopper"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"flip",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")))),Object(o.b)("h3",{id:"popper-generator",style:{position:"relative"}},Object(o.b)("a",r({parentName:"h3"},{href:"#popper-generator","aria-label":"popper generator permalink",className:"gatsby-link-icon before"}),Object(o.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Generator"),Object(o.b)("p",null,"To pass these extra modifiers as default, you can use the ",Object(o.b)("code",r({parentName:"p"},{className:"language-text"}),"popperGenerator"),"\nfunction:"),Object(o.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(o.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  popperGenerator",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  defaultModifiers",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(o.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.b)("span",r({parentName:"code"},{className:"token keyword"}),"const")," createPopper ",Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.b)("span",r({parentName:"code"},{className:"token function"}),"popperGenerator"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  defaultModifiers",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"["),Object(o.b)("span",r({parentName:"code"},{className:"token operator"}),"..."),"defaultModifiers",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," flip",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.b)("span",r({parentName:"code"},{className:"token comment"}),"// Now you can use `createPopper`")))))}p.isMDXComponent=!0},vUvN:function(e,t,a){e.exports=a.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,a){"use strict";var o=a("P8UN"),n=a("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),o(o.P+o.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-tree-shaking-mdx-37ea379a1f2d8f93e9d9.js.map