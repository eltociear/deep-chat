"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7474],{1853:(e,o,t)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function s(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const o=e[0];n(o),window.toggleNavOnScroll=n.bind(this,o),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function l(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(o){console.error(o),console.log("element was not rendered in time - use MutationObserver")}}),2)}t.r(o),t.d(o,{fadeIn:()=>l,readdAutoNavShadowToggle:()=>s})},4466:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l});var n=t(1262),s=t(7294);function l(){return s.createElement(n.Z,null,(()=>{try{const e=t(1853);setTimeout((()=>{const e=document.querySelector(".homepage > body > #__docusaurus > nav");e&&(e.style.opacity="1")}),1800),e.fadeIn(),e.readdAutoNavShadowToggle()}catch(e){console.error(e)}}))}}}]);