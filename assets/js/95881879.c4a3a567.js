"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7168],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var v=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9814:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},8751:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function l(e){let{children:t,minHeight:n}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",null,t))}},6619:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){return e.data.map(((e,t)=>{const n=""===e?"":JSON.stringify(e);return a.createElement("div",{key:t},">"," ",n)}))}},9433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=n(7462),r=n(7294),l=n(3905),o=n(8751),s=n(6619);const i=r.forwardRef(((e,t)=>{let{propertyName:n}=e;const[a,l]=r.useState(["onComponentRender"===n?"Finished rendering":""]);return r.useImperativeHandle(t,(()=>{const e=[];return{updateText:n=>{t.current&&void 0!==n&&(e.length>3&&e.pop(),e.unshift(JSON.parse(JSON.stringify(n))),l([...e]))}}})),r.createElement("div",null,"Latest events:",r.createElement(s.Z,{data:a}))}));function u(e){let{children:t,propertyName:n}=e;const a=r.useRef(null),l=r.useRef(null);return r.useEffect((()=>{setTimeout((()=>{if(a.current){const e=a.current;if(a.current&&l.current){(0,o.a)(a.current.children[0])[n]=l.current?.updateText}else{(0,o.a)(e.children[0])[n]=()=>{}}}}),200)}),[]),r.createElement("div",null,r.createElement("div",{ref:a},r.createElement(o.Z,null,t)),r.createElement("div",{className:"documentation-example-container method-example-container"},r.createElement(i,{propertyName:n,ref:l})))}var c=n(4602),d=n(9814),m=n(1262),p=n(5162),h=n(4866);const f={sidebar_position:10},v="Events",b={unversionedId:"docs/events",id:"docs/events",title:"Events",description:"Events can be observed in two ways, either by assigning a function to a property or by listening to custom events fired from the component element.",source:"@site/docs/docs/events.mdx",sourceDirName:"docs",slug:"/docs/events",permalink:"/docs/events",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/events.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/methods"},next:{title:"Interceptors",permalink:"/docs/interceptors"}},g={},k=[{value:"<code>onNewMessage</code>",id:"onNewMessage",level:3},{value:"Example",id:"example",level:4},{value:"<code>onComponentRender</code>",id:"onComponentRender",level:3},{value:"Example",id:"example-1",level:4}],y={toc:k},E="wrapper";function N(e){let{components:t,...r}=e;return(0,l.kt)(E,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"Events can be observed in two ways, either by assigning a function to a property or by listening to custom events fired from the component element."),(0,l.kt)("h3",{id:"onNewMessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"onNewMessage")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function: (",(0,l.kt)("inlineCode",{parentName:"li"},"newMessage: Body"),") => ",(0,l.kt)("inlineCode",{parentName:"li"},"void")),(0,l.kt)("li",{parentName:"ul"},"Event: ",(0,l.kt)("inlineCode",{parentName:"li"},"new-message")),(0,l.kt)("li",{parentName:"ul"},"Body: {",(0,l.kt)("a",{parentName:"li",href:"./messages#MessageContent"},(0,l.kt)("inlineCode",{parentName:"a"},"message: MessageContent")),", ",(0,l.kt)("inlineCode",{parentName:"li"},"isInitial: boolean"),"}")),(0,l.kt)("p",null,"Triggered when a message is sent from the user and recieved from the target service. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"message")," encompasses all of the message contents. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"isInitial")," is used to determine whether if the message is from the prepopulated ",(0,l.kt)("a",{parentName:"p",href:"./messages#initialMessages"},(0,l.kt)("inlineCode",{parentName:"a"},"initialMessages"))," property."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)(m.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,l.kt)(u,{propertyName:"onNewMessage",mdxType:"ComponentContainerEvents"},(0,l.kt)(c.Z,{containerStyle:{borderRadius:"8px"},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(h.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Function",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"chatElementRef.onNewMessage = (message) => { console.log(message); };\n"))),(0,l.kt)(p.Z,{value:"py",label:"Event",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\nchatElementRef.addEventListener('new-message', (message) => { console.log(message.detail); });\n")))),(0,l.kt)(d.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"onComponentRender"},(0,l.kt)("inlineCode",{parentName:"h3"},"onComponentRender")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Function: () => ",(0,l.kt)("inlineCode",{parentName:"li"},"void")),(0,l.kt)("li",{parentName:"ul"},"Event: ",(0,l.kt)("inlineCode",{parentName:"li"},"render"))),(0,l.kt)("p",null,"Triggered when the component has finished rendering on the browser's window."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)(u,{propertyName:"onComponentRender",mdxType:"ComponentContainerEvents"},(0,l.kt)(c.Z,{containerStyle:{borderRadius:"8px"},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(h.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Function",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'chatElementRef.onComponentRender = () => { console.log("Finished rendering"); };\n'))),(0,l.kt)(p.Z,{value:"py",label:"Event",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\nchatElementRef.addEventListener('render', () => { console.log(\"Finished rendering\"); });\n")))),(0,l.kt)(d.Z,{mdxType:"LineBreak"}))}N.isMDXComponent=!0}}]);