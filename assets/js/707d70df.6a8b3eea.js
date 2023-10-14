"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),p=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=k({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??m;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(m(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>r})},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n,innerDisplay:r}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:r||"block"}},t))}},5833:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t}=e;const[n,r]=a.useState(!0);return a.createElement("div",null,n&&t[0],!n&&t[1],a.createElement("div",{className:"component-key-toggle-button-container"},a.createElement("button",{className:"documentation-button component-key-toggle-button",onClick:()=>r(!n)},n&&"Insert test key",!n&&"Use placeholder key")))}},4602:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1262),r=n(7294);function o(e){return r.createElement(a.Z,null,(()=>{const t=n(5197).DeepChat;return r.createElement(t,e,e.children)}))}},1242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var a=n(7462),r=(n(7294),n(3905)),o=n(6623),l=n(5833),i=n(8751),s=n(4602),p=n(7235),u=n(1262),m=n(5162),d=n(4866);const c={sidebar_position:4},k=void 0,h={unversionedId:"docs/directConnection/Cohere",id:"docs/directConnection/Cohere",title:"Cohere",description:"Properties used to connect to Cohere.",source:"@site/docs/docs/directConnection/Cohere.mdx",sourceDirName:"docs/directConnection",slug:"/docs/directConnection/Cohere",permalink:"/docs/directConnection/Cohere",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/directConnection/Cohere.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"StabilityAI",permalink:"/docs/directConnection/StabilityAI"},next:{title:"Azure",permalink:"/docs/directConnection/Azure"}},b={},y=[{value:"<code>cohere</code>",id:"cohere",level:3},{value:"Service Types",id:"service-types",level:2},{value:"<code>Chat</code>",id:"Chat",level:3},{value:"Example",id:"example",level:4},{value:"<code>TextGeneration</code>",id:"TextGeneration",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>Summarization</code>",id:"Summarization",level:3},{value:"Example",id:"example-2",level:4}],f={toc:y},g="wrapper";function N(e){let{components:t,...c}=e;return(0,r.kt)(g,(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",null),(0,r.kt)("h1",{id:"cohere"},(0,r.kt)("img",{src:o.Z,width:"60",style:{float:"left"}}),(0,r.kt)("span",{className:"direct-service-title"},"Cohere")),(0,r.kt)("p",null,"Properties used to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/docs"},"Cohere"),"."),(0,r.kt)("h3",{id:"cohere"},(0,r.kt)("inlineCode",{parentName:"h3"},"cohere")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("a",{parentName:"li",href:"#Chat"},(0,r.kt)("inlineCode",{parentName:"a"},"chat?: Chat")),", ",(0,r.kt)("a",{parentName:"li",href:"#TextGeneration"},(0,r.kt)("inlineCode",{parentName:"a"},"textGeneration?: TextGeneration")),", ",(0,r.kt)("a",{parentName:"li",href:"#Summarization"},(0,r.kt)("inlineCode",{parentName:"a"},"summarization?: Summarization")),"}"),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("em",{parentName:"li"},"{textGeneration: true}"))),(0,r.kt)(u.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,r.kt)("h2",{id:"service-types"},"Service Types"),(0,r.kt)("h3",{id:"Chat"},(0,r.kt)("inlineCode",{parentName:"h3"},"Chat")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," | {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"model?: string"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name?: string"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"temperature?: number"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"max_tokens?: number")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Connect to Cohere's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/docs/conversational-ai"},(0,r.kt)("inlineCode",{parentName:"a"},"conversational AI"))," API (you may first need to apply for access to ",(0,r.kt)("a",{parentName:"p",href:"https://cohere.com/coral"},"Coral")," before using this). ",(0,r.kt)("br",null),"\nYou can either set this property to ",(0,r.kt)("em",{parentName:"p"},"true")," or use an object to augment the request parameters: ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"model")," is the name of the model used to generate text. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," is the name of the user. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"temperature")," is the degree of the response randomness. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"max_tokens")," is the maximum amount of tokens that can be used to generate the response. ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(l.Z,{mdxType:"ContainersKeyToggle"},(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{key:"placeholder key",chat:{temperature:1}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{chat:{temperature:1}}},mdxType:"DeepChatBrowser"}))),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "chat": {"temperature": 1}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(m.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "chat": {"temperature": 1}\n    }\n  }\'\n  style="border-radius: 8px"\n></deep-chat>\n')))),(0,r.kt)(p.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"TextGeneration"},(0,r.kt)("inlineCode",{parentName:"h3"},"TextGeneration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," | {",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"model?:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"command"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"base"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"base-light"'),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"max_tokens?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"temperature?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"k?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"p?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"frequency_penalty?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"presence_penalty?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"end_sequences?: string[]"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"stop_sequences?: string[]"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"logit_bias?: {[string]: number}"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"truncate?:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"NONE"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"START"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"END"')," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Default: ",(0,r.kt)("em",{parentName:"p"},'{model: "command", max_tokens: 1000}')))),(0,r.kt)("p",null,"Connect to Cohere's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/docs/intro-text-generation"},(0,r.kt)("inlineCode",{parentName:"a"},"text generation"))," API. ",(0,r.kt)("br",null),"\nYou can either set this property to ",(0,r.kt)("em",{parentName:"p"},"true")," or use an object to augment the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/reference/generate"},(0,r.kt)("inlineCode",{parentName:"a"},"request body")),": ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"model")," is the name of the model used to generate text. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"max_tokens")," denotes the number of tokens to predict per generation. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"temperature")," is a non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"k")," ensures only the top k most likely tokens are considered for generation at each step. The maximum value is 500. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"p")," is the probability (between 0.0 and 1.0) which ensures that only the most likely tokens - with total probability mass of p are considered for generation at each step. If both ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," are set, ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," acts after ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),". ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"frequency_penalty")," (between 0.0 and 1.0) can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"presence_penalty")," (between 0.0 and 1.0) can be used to reduce repetitiveness of generated tokens. Similar to frequency",(0,r.kt)("em",{parentName:"p"},"penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"em"},"end_sequences")," is used to cut the generated text at the beginning of the earliest occurence of an end sequence of strings. ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"em"},"stop_sequences")," is used to cut the generated text at the end of the earliest occurence of stop sequence strings. ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"em"},"logit_bias")," is used to prevent the model from generating unwanted tokens or to incentivize it to include desired ibes. The format is {token_id: bias} where bias is a float between -10 and 10. Tokens can be obtained from text using ",(0,r.kt)("a",{parentName:"em",href:"https://docs.cohere.com/reference/tokenize"},"Tokenize"),". E.g. if the value "),'{"11": -10}',(0,r.kt)("em",{parentName:"p"}," is provided, the model will be very unlikely to include the token ","_","11"),' ("\\n", the newline character) anywhere in the generated text. In contrast ',(0,r.kt)("em",{parentName:"p"},'{"11": 10}')," will result in generations that nearly only contain that token. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"truncate")," is used to specify how the API will handle inputs longer than the maximum token length. Passing ",(0,r.kt)("em",{parentName:"p"},'"START"')," will discard the start of the input. ",(0,r.kt)("em",{parentName:"p"},'"END"')," will discard the end of the input. ",(0,r.kt)("em",{parentName:"p"},'"NONE"')," will throw an error when the input exceeds the maximum input token length. ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(l.Z,{mdxType:"ContainersKeyToggle"},(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{key:"placeholder key",textGeneration:{model:"command"}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{textGeneration:{model:"command"}}},mdxType:"DeepChatBrowser"}))),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "textGeneration": {"model": "command"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(m.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "textGeneration": {"model": "command"}\n    }\n  }\'\n  style="border-radius: 8px"\n></deep-chat>\n')))),(0,r.kt)(p.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"Summarization"},(0,r.kt)("inlineCode",{parentName:"h3"},"Summarization")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," | {",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"model?:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"summarize-xlarge"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"summarize-medium"'),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"length?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"auto"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"short"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"medium"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"long"'),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"format?:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"auto"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"paragraph"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"bullets"'),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"extractiveness?:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"auto"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"low"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"medium"')," | ",(0,r.kt)("inlineCode",{parentName:"p"},'"high"'),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"temperature?: number"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"additional_command?: string")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Default: ",(0,r.kt)("em",{parentName:"p"},'{model: "summarize-xlarge"}')))),(0,r.kt)("p",null,"Connect to Cohere's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/docs/summarize"},(0,r.kt)("inlineCode",{parentName:"a"},"summarize"))," API. ",(0,r.kt)("br",null),"\nYou can either set this property to ",(0,r.kt)("em",{parentName:"p"},"true")," or use an object to augment the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.com/reference/summarize-2"},(0,r.kt)("inlineCode",{parentName:"a"},"request body")),": ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"model")," is the name of the model used to generate a summary. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"length")," indicates the approximate length of the summary. ",(0,r.kt)("em",{parentName:"p"},'"auto"')," chooses the best option based on the input text. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"format")," indicates the style in which the summary will be delivered - in a free form paragraph or in bullet points. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"extractiveness")," controls how close to the original text the summary is. ",(0,r.kt)("em",{parentName:"p"},'"high"')," extractiveness summaries will lean towards reusing sentences verbatim, while ",(0,r.kt)("em",{parentName:"p"},'"low"')," extractiveness summaries will tend to paraphrase more. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"temperature")," (from 0 to 5) controls the randomness of the output. Lower values tend to generate more predictable outputs, while higher values tend to generate more creative outputs. The sweet spot is typically between ",(0,r.kt)("em",{parentName:"p"},"0")," and ",(0,r.kt)("em",{parentName:"p"},"1"),". ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"additional_command")," is a free-form instruction for modifying how the summaries get generated. Should start with ",(0,r.kt)("em",{parentName:"p"},'"Generate a summary ',"_",'"'),". and end with Eg. ",(0,r.kt)("em",{parentName:"p"},'"focusing on the next steps"')," or ",(0,r.kt)("em",{parentName:"p"},'"written by Yoda"'),". ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)(l.Z,{mdxType:"ContainersKeyToggle"},(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{key:"placeholder key",summarization:{model:"summarize-xlarge"}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(s.Z,{style:{borderRadius:"8px"},directConnection:{cohere:{summarization:{model:"summarize-xlarge"}}},mdxType:"DeepChatBrowser"}))),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "summarization": {"model": "summarize-xlarge"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(m.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "cohere": {\n      "key": "placeholder key",\n      "summarization": {"model": "summarize-xlarge"}\n    }\n  }\'\n  style="border-radius: 8px"\n></deep-chat>\n')))),(0,r.kt)(p.Z,{mdxType:"LineBreak"}))}N.isMDXComponent=!0},6623:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);