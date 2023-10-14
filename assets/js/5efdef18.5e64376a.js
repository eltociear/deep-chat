"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=l,b=p["".concat(i,".").concat(c)]||p[c]||m[c]||r;return n?a.createElement(b,s(s({ref:t},d),{},{components:n})):a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),l=n(7294),r=n(6010),s=n(2466),o=n(6550),i=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=b({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=i??p;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var y=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(p(t),i(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},s,{className:(0,r.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(f,(0,a.Z)({},e,t)))}function C(e){const t=(0,y.Z)();return l.createElement(x,(0,a.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function l(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function l(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function r(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>r,readdAutoNavShadowToggle:()=>l})},8751:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var a=n(7294);function l(e){return e?.children[0]?.children[0]}function r(e){let{children:t,minHeight:n,innerDisplay:l}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:l||"block"}},t))}},4602:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(1262),l=n(7294);function r(e){return l.createElement(a.Z,null,(()=>{const t=n(5197).DeepChat;return l.createElement(t,e,e.children)}))}},1074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>g});var a=n(7462),l=(n(7294),n(3905)),r=n(8751),s=n(4602),o=n(7235),i=n(1262),u=n(5162),d=n(4866);const p={sidebar_position:1},m="Styles",c={unversionedId:"docs/messages/styles",id:"docs/messages/styles",title:"Styles",description:"Properties related to message styling.",source:"@site/docs/docs/messages/styles.mdx",sourceDirName:"docs/messages",slug:"/docs/messages/styles",permalink:"/docs/messages/styles",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/messages/styles.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Messages",permalink:"/docs/messages/"},next:{title:"HTML",permalink:"/docs/messages/HTML"}},b={},g=[{value:"<code>messageStyles</code>",id:"messageStyles",level:3},{value:"Types",id:"types",level:2},{value:"<code>MessageRoleStyles</code>",id:"MessageRoleStyles",level:3},{value:"<code>MessageElementsStyles</code>",id:"MessageElementsStyles",level:3},{value:"More Examples",id:"more-examples",level:2}],y={toc:g},k="wrapper";function h(e){let{components:t,...p}=e;return(0,l.kt)(k,(0,a.Z)({},y,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"styles"},"Styles"),(0,l.kt)("p",null,"Properties related to message styling."),(0,l.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,l.kt)("h3",{id:"messageStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"messageStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"default?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"image?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"audio?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"file?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"html?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"intro?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"loading?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"error?: MessageElementsStyles"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various message types. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"default")," is applied to all message types. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"image")," is applied to messages that contain an image. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," is applied to messages that contain an audio player. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"file")," is applied to messages that contain a file attachment. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"html")," is applied to messages that contain custom elements - ",(0,l.kt)("a",{parentName:"p",href:"./html"},"more info"),". ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"intro")," is applied to the ",(0,l.kt)("a",{parentName:"p",href:"../messages#introMessage"},(0,l.kt)("inlineCode",{parentName:"a"},"introMessage")),". ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"loading")," is applied to the loading bubble. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"error")," is applied to error messages. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"Shared property types for the ",(0,l.kt)("a",{parentName:"p",href:"#messageStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"messageStyles"))," object:"),(0,l.kt)("h3",{id:"MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageRoleStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"shared?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"user?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"ai?: MessageElementsStyles"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various message roles. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"shared")," is applied to all message roles. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"user")," is applied to messages from the user. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ai")," is applied to messages returned from the ai service. ",(0,l.kt)("br",null)),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{default:{shared:{bubble:{color:"white"}},ai:{bubble:{backgroundColor:"#3cbe3c"}},user:{bubble:{backgroundColor:"#6767ff"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageElementsStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"../styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"outerContainer?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"../styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"innerContainer?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"../styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"bubble?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"../styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"media?: CustomStyle"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various elements that encompass a message. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"outerContainer")," contains all elements related to the message. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"innerContainer")," is an element inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"outerContainer")," that is mostly used to set message side padding. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"bubble")," is the element that displays the actual message contents. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"media")," is applied to ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," type messages which contain an extra child element inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"bubble"),"\nto display the file contents. ",(0,l.kt)("br",null)),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{default:{shared:{outerContainer:{backgroundColor:"orange"},innerContainer:{backgroundColor:"yellow"},bubble:{color:"black"}},ai:{bubble:{backgroundColor:"lightgreen"}},user:{bubble:{backgroundColor:"lightblue"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"more-examples"},"More Examples"),(0,l.kt)("h3",null,"Files"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{image:{shared:{media:{borderRadius:"0px"}}},audio:{shared:{media:{borderRadius:"30px",border:"1px solid #8c8c8c",backgroundColor:"red"}}},file:{shared:{bubble:{backgroundColor:"grey"}}}},initialMessages:[{file:{src:"/img/city.jpeg",type:"image"},role:"user"},{file:{src:"/audio/cantinaBand.wav",type:"audio"},role:"ai"},{file:{src:"/text/text.txt",type:"file",name:"text-file.txt"},role:"user"}],demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n  initialMessages=\'[\n    {"file": {"src": "path-to-file.jpeg", "type": "image"}, "role": "user"},\n    {"file": {"src": "path-to-file.wav", "type": "audio"}, "role": "ai"},\n    {"file": {"src": "path-to-file.txt", name: "text-file.txt", "type": "file"}, "role": "user"}\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("em",{parentName:"p"},'"audio"')," media player is controlled by the browser and and its styling may not be overwritable by the ",(0,l.kt)("inlineCode",{parentName:"p"},"media")," property.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In the Safari browser, the ",(0,l.kt)("em",{parentName:"p"},'"audio"')," media player can be expanded by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," property in ",(0,l.kt)("inlineCode",{parentName:"p"},"media")," to ",(0,l.kt)("em",{parentName:"p"},"200px")," or higher.")),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Intro message"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{intro:{bubble:{backgroundColor:"#475cc7",color:"white",fontSize:"16px"}}},introMessage:{text:"Hi I am an AiAssistant, ask me anything!"},demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "intro": {"bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}}\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "intro": {\n      "bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}\n    }\n  }\'\n  introMessage=\'{"text": "Hi I am an AiAssistant, ask me anything!"}\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Loading bubble"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{loading:{bubble:{backgroundColor:"#3793ff",fontSize:"20px",color:"white"}}},demo:{displayLoadingBubble:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n  style="border-radius: 8px"\n  demo=\'{"displayLoadingBubble": true}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Error messages"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{style:{borderRadius:"8px"},messageStyles:{error:{bubble:{backgroundColor:"#f98e00",color:"white",fontSize:"15px"}}},demo:{displayErrors:{service:!0}},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n  style="border-radius: 8px"\n  demo=\'{"displayErrors": {"service": true}}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}))}h.isMDXComponent=!0}}]);