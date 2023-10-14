"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var y=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},7235:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(){return n.createElement("div",{style:{height:"1px"}})}},1853:(e,t,r)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function a(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];n(t),window.toggleNavOnScroll=n.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}r.r(t),r.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>a})},8751:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(7294);function a(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:r,innerDisplay:a}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${r||400}px`}},n.createElement("div",{style:{display:a||"block"}},t))}},4602:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(1262),a=r(7294);function o(e){return a.createElement(n.Z,null,(()=>{const t=r(5197).DeepChat;return a.createElement(t,e,e.children)}))}},4995:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function a(e){let{isDisplayed:t,children:r}=e;return t?n.createElement("div",null,r):n.createElement("div",null)}function o(e){let{children:t}=e;const[r,o]=n.useState(!1);return n.createElement("div",null,n.createElement("div",{className:"code-toggle",onClick:()=>o(!r)},r?"Hide":"View"," Code"),n.createElement(a,{isDisplayed:r},t))}},7:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),o=r(8751),l=r(4602),i=(r(4995),r(7235)),s=r(1262);r(5162),r(4866);const u={sidebar_position:1},c="Sticky",d={unversionedId:"examples/Layout/sticky",id:"examples/Layout/sticky",title:"Sticky",description:"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to",source:"@site/docs/examples/Layout/sticky.mdx",sourceDirName:"examples/Layout",slug:"/examples/Layout/sticky",permalink:"/examples/Layout/sticky",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/Layout/sticky.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"examples",previous:{title:"Full Screen",permalink:"/examples/Layout/fullScreen"}},p={},m=[],f={toc:m},h="wrapper";function y(e){let{components:t,...u}=e;return(0,a.kt)(h,(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sticky"},"Sticky"),(0,a.kt)("p",null,"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to\nset the ",(0,a.kt)("a",{parentName:"p",href:"../../docs/styles#style"},(0,a.kt)("inlineCode",{parentName:"a"},"style"))," property with ",(0,a.kt)("em",{parentName:"p"},"position: fixed")," and defining the side you want to component to sit on e.g. ",(0,a.kt)("em",{parentName:"p"},"right: 7%"),"."),(0,a.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>r(1853).readdAutoNavShadowToggle())),(0,a.kt)("h3",null,"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  style="border-radius: 10px; position: fixed; bottom: 0px; right: 7%; z-index: 1"\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  demo="true"\n  stream="true"\n></deep-chat>\n')),(0,a.kt)(i.Z,{mdxType:"LineBreak"}),(0,a.kt)(o.Z,{minHeight:1,mdxType:"ComponentContainer"},(0,a.kt)(l.Z,{demo:!0,initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],stream:!0,style:{borderRadius:"10px",position:"fixed",bottom:"0px",right:"7%",zIndex:1},mdxType:"DeepChatBrowser"})))}y.isMDXComponent=!0}}]);