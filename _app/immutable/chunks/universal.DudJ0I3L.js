import{J as s,K as r}from"./runtime.BUdK6G03.js";function c(a,d,i,o){d.addEventListener("input",()=>{o(d[a])}),s(()=>{var n=i();if(d[a]!==n)if(n==null){var f=d[a];o(f)}else d[a]=n+""})}function u(a,d,i,o,n){var f=()=>{o(i[a])};i.addEventListener(d,f),n?s(()=>{i[a]=n()}):f(),(i===document.body||i===window||i===document)&&r(()=>{i.removeEventListener(d,f)})}export{c as a,u as b};
