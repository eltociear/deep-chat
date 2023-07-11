"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6683],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},9814:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",null,t))}},4995:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function r(e){let{isDisplayed:t,children:n}=e;return t?a.createElement("div",null,n):a.createElement("div",null)}function o(e){let{children:t}=e;const[n,o]=a.useState(!1);return a.createElement("div",null,a.createElement("div",{className:"code-toggle",onClick:()=>o(!n)},n?"Hide":"View"," Code"),a.createElement(r,{isDisplayed:n},t))}},3898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),o=n(8751),l=n(4602),s=n(4995),i=n(9814),u=n(1262),c=n(5162);n(4866);const d={sidebar_position:0},p="Full Screen",m={unversionedId:"examples/Layout/fullScreen",id:"examples/Layout/fullScreen",title:"Full Screen",description:"Examples to help you expand the chat component dimensions. The trick is to simply set the containerStyle property to the dimensions you desire",source:"@site/docs/examples/Layout/fullScreen.mdx",sourceDirName:"examples/Layout",slug:"/examples/Layout/fullScreen",permalink:"/examples/Layout/fullScreen",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/Layout/fullScreen.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"examples",previous:{title:"Frameworks",permalink:"/examples/frameworks"},next:{title:"Sticky",permalink:"/examples/Layout/sticky"}},h={},g=[{value:"Default",id:"default",level:3},{value:"ChatGPT",id:"chatGPT",level:3}],b={toc:g},f="wrapper";function y(e){let{components:t,...d}=e;return(0,r.kt)(f,(0,a.Z)({},b,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"full-screen"},"Full Screen"),(0,r.kt)("p",null,"Examples to help you expand the chat component dimensions. The trick is to simply set the ",(0,r.kt)("a",{parentName:"p",href:"../../docs/styles#containerStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"containerStyle"))," property to the dimensions you desire\nand define the ",(0,r.kt)("em",{parentName:"p"},"fontSize")," which will control the size of the elements."),(0,r.kt)("h3",{id:"default"},"Default"),(0,r.kt)("p",null,"This example uses the default Deep Chat theme."),(0,r.kt)(u.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,r.kt)(o.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{directConnection:{demo:!0},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],containerStyle:{borderRadius:"10px",width:"96vw",height:"calc(100vh - 70px)",fontSize:"1.37rem",paddingTop:"10px"},stream:!0,mdxType:"DeepChatBrowser"})),(0,r.kt)(s.Z,{mdxType:"CodeToggle"},(0,r.kt)(c.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  containerStyle=\'{\n    "borderRadius": "10px",\n    "width": "96vw",\n    "height": "calc(100vh - 70px)",\n    "fontSize": "1.37rem",\n    "paddingTop": "10px"\n  }\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  directConnection=\'{"demo": true}\'\n  stream="true"\n></deep-chat>\n')))),(0,r.kt)(i.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"chatGPT"},"ChatGPT"),(0,r.kt)("p",null,"This example uses a design similar to ",(0,r.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"ChatGPT"),"."),(0,r.kt)(o.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{directConnection:{demo:!0},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],containerStyle:{borderRadius:"10px",width:"96vw",height:"calc(100vh - 70px)",paddingTop:"10px",fontSize:"1.37rem"},messageStyles:{default:{shared:{bubble:{maxWidth:"100%",backgroundColor:"unset",marginTop:"10px",marginBottom:"10px"}},user:{bubble:{marginLeft:"0px",color:"black"}},ai:{outerContainer:{backgroundColor:"rgba(247,247,248)",borderTop:"1px solid rgba(0,0,0,.1)",borderBottom:"1px solid rgba(0,0,0,.1)"}}}},stream:!0,avatars:{default:{styles:{position:"left"}},ai:{src:"/img/openAIGreyLogo.svg",styles:{avatar:{filter:"brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(893%) hue-rotate(65deg) brightness(99%) contrast(89%)"}}}},submitButtonStyles:{submit:{container:{default:{backgroundColor:"#19c37d"},hover:{backgroundColor:"#0bab69"},click:{backgroundColor:"#068e56"}},svg:{content:'<?xml version="1.0" encoding="utf-8"?> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z"> </path> </svg>',styles:{default:{width:"1.3em",marginTop:"0.15em",filter:"brightness(0) saturate(100%) invert(100%) sepia(28%) saturate(2%) hue-rotate(69deg) brightness(107%) contrast(100%)"}}}},loading:{svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}}}},stop:{container:{default:{backgroundColor:"white"}},svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}}}}},textInput:{placeholder:{text:"Send a message"}},mdxType:"DeepChatBrowser"})),(0,r.kt)(s.Z,{mdxType:"CodeToggle"},(0,r.kt)(c.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  containerStyle=\'{\n    "borderRadius": "10px",\n    "width": "96vw",\n    "height": "calc(100vh - 70px)",\n    "paddingTop": "10px",\n    "fontSize": "1.37rem"\n  }\'\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "bubble": {\n          "maxWidth": "100%", "backgroundColor": "unset", "marginTop": "10px", "marginBottom": "10px"}},\n      "user": {\n        "bubble": {\n          "marginLeft": "0px", "color": "black"}},\n      "ai": {\n        "outerContainer": {\n          "backgroundColor": "rgba(247,247,248)", "borderTop": "1px solid rgba(0,0,0,.1)", "borderBottom": "1px solid rgba(0,0,0,.1)"\n        }\n      }\n    }\n  }\'\n  avatars=\'{\n    "default": {"styles": {"position": "left"}},\n    "ai": {"src": "path-to-icon.png"}\n  }\'\n  submitButtonStyles=\'{\n    "submit": {\n      "container": {\n        "default": {"backgroundColor": "#19c37d"},\n        "hover": {"backgroundColor": "#0bab69"},\n        "click": {"backgroundColor": "#068e56"}\n      },\n      "svg": {\n        "content": "<?xml version=\\"1.0\\" ?> <svg viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"> <g> <path d=\\"M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z\\"> </path> </g> </svg>",\n        "styles": {\n          "default": {\n            "width": "1.3em",\n            "marginTop": "0.15em",\n            "filter": "brightness(0) saturate(100%) invert(100%) sepia(28%) saturate(2%) hue-rotate(69deg) brightness(107%) contrast(100%)"\n          }\n        }\n      }\n    },\n    "loading": {\n      "svg": {\n        "styles": {\n          "default": {"filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}\n        }\n      }\n    },\n    "stop": {\n      "container": {"default": {"backgroundColor": "white"}},\n      "svg": {\n        "styles": {\n          "default": {"filter": "brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%) contrast(96%)"}\n        }\n      }\n    }\n  }\'\n  textInput=\'{"placeholder": {"text": "Send a message"}}\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  directConnection=\'{"demo": true}\'\n  stream="true"\n></deep-chat>\n')))),(0,r.kt)(i.Z,{mdxType:"LineBreak"}))}y.isMDXComponent=!0}}]);