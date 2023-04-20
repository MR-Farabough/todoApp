(()=>{"use strict";function e(){return document.getElementById("task-entry").value}function t(){const e=document.getElementById("School"),t=document.getElementById("Personal");return e.checked?"School":t.checked?"Personal":void 0}function n(){const e=document.getElementById("date-entry"),t=[];let n=[],o="",r="",l="";for(let n=0;n<10;n++)t.push(e.value[n]);for(let e=5;e<7;e++)r+=t[e];for(let e=8;e<10;e++)l+=t[e];for(let e=0;e<4;e++)o+=t[e];return"undefinedundefinedundefinedundefined"==o||null==r||null==l?n=[]:n.push(parseInt(r),parseInt(l),parseInt(o)),n}function o(e){console.error(e)}function r(e){let t=0,n={date:[(new Date).getMonth()+1,(new Date).getDate(),(new Date).getFullYear()]},r=function(e){return e[0]>12?o(`${e[0]} is not a valid month`):e[1]<(new Date).getDate()&&e[0]==(new Date).getMonth()+1?o("date is less than current date"):e[0]<(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?o(`${e[0]} is less than the current month`):e[2]<(new Date).getFullYear()?o(`${e[2]} is less than the current year`):{dueDate:e}}(e);const l=function(e,t,n){let o=[],r=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let a=0;a<n+1;a++){const c={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((l=e[2]+a)%4!=0||l%100==0&&l%400!=0||(c.February=29),o.push(c),e[1]+a===e[1]){const t=e[a]-1;for(let n=0;n<t;n++){delete c[r[n]];let t=c[r[n+1]];t-=e[1],c[r[n+1]]=t}}if(a==n)if(12===t[0])c[r[11]]=t[1];else{t[1],r.reverse();for(let e=0;e<r.length-t[0];e++){delete c[r[e]];let n=c[r[e+1]];n=t[1],c[r[e+1]]=n}}}var l;return o}(n.date,r.dueDate,r.dueDate[2]-n.date[2]);for(let n=0;n<l.length;n++){let o=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let r=0;r<o.length;r++)void 0===l[n][o[r]]?t+=0:e[0]==(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?t=e[1]-(new Date).getDate():t+=l[n][o[r]]}return t}function l(e){return r(e)}function a(e){let t=r(e)/7,n=0;return t%1!=0&&(n=(t%1*7).toFixed(),t-=t%1),1==t&&0==n?t=`${t} week`:t>1&&0==n&&(t=`${t} weeks`),n>1&&(t>1||t<1)?t=`${t} weeks and ${n} days`:1==n&&(t>1||t<1)?t=`${t} weeks and ${n} day`:n>1&&1==t?t=`${t} week and ${n} days`:1==n&&1==t&&(t=`${t} week and ${n} day`),t}class c{constructor(e,t,n,o,r,l,a){this.title=e,this.note=t,this.dueDate=n,this.priority=o,this.type=r,this.daysLeft=l,this.category=a}}function s(){return e().length<1?(o("Task Name invalid"),!1):null==t()?(o("Category must be filled  out"),!1):null==n()[0]||null==n()[1]||null==n()[2]?(o("Must enter Date"),!1):e().length>1&&null!=n()[0]&&null!=n()[1]&&null!=n()[2]&&null!=t()?new c(e(),document.getElementById("note-entry").value,n(),function(){const e=document.getElementById("Urgent"),t=document.getElementById("Important"),n=document.getElementById("Not-Prioritized");return e.checked?"URGENT":t.checked?"Important":(n.checked,"Not Prioritized")}(),document.getElementById("type").value,a(n()),t()):void 0}function u(e,t){t.reset(),e.classList.remove("active"),overlay.classList.remove("active")}function d(e){if(null==e)return[];{let t=[];for(let n=0;n<e.length;n++)e[n].daysLeft=a(e[n].dueDate),t.push(e[n]);return localStorage.setItem("storage-array",JSON.stringify(t))}}function i(){const e=document.querySelector(".cards");if("Total Tasks: 0"==document.querySelector(".quote").textContent&&null==e.querySelector("img")){const t=["imgs/cat.png","imgs/cat1.png","imgs/cuteDog.png","imgs/dog-watermelon.png","imgs/dog1.png","imgs/dog2.png","imgs/dogYawn.png","imgs/hampster.png"],n=Math.floor(Math.random()*t.length),o=new Image;o.src=t[n],o.style.height="35%",o.style.width="35%",o.style.minHeight="300px",o.style.minWidth="300px",e.appendChild(o)}}function g(){const e=document.querySelector(".cards");return null==e.querySelector("div")?0:e.childElementCount}function y(e,t){const n=document.querySelector(".cards");if(null==localStorage.getItem("storage-array")||localStorage.getItem("storage-array").length<3)i();else{const o=function(e,t){const n=JSON.parse(localStorage.getItem("storage-array"));function o(o){const r=document.createElement("div");r.style.backgroundColor="white",r.style.width="95%",r.style.margin="10px",r.style.borderRadius="15px",r.style.padding="10px","Not Prioritized"==n[o].priority?r.style.borderLeft="8px solid green":"Important"==n[o].priority?r.style.borderLeft="8px solid orange":"URGENT"==n[o].priority&&(r.style.borderLeft="8px solid red"),r.style.justifyContent="space-evenly",r.style.alignItems="center";let l=document.createElement("h4");l.textContent=n[o].title;let a=document.createElement("p");a.textContent=n[o].notes;let c=document.createElement("p");c=`Due Date: ${n[o].dueDate} --- ${n[o].daysLeft} left`,document.createElement("p").textContent=`Priority: ${n[o].priority}`;let s=document.createElement("p");s.textContent=`Type: ${n[o].type}`;let u=document.createElement("p");u.textContent=n[o].category,"Personal"==u.innerHTML?(u.style.backgroundColor="lightgreen",u.style.padding="5px",u.style.width="fit-content"):(u.style.backgroundColor="lightcoral",u.style.padding="5px",u.style.width="fit-content");const d=document.createElement("button");d.classList.add("delete-button"),d.innerHTML="Delete Task",r.append(l,a,c,s,u,d),document.querySelector(".cards").append(r),d.addEventListener("click",(()=>{const l=n.indexOf(n[o]);n.splice(l,1),r.remove(),localStorage.setItem("storage-array",JSON.stringify(n)),document.querySelector(".cards").textContent="",y(e,t),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,i()}))}if(null!=n){if("Total"==e&&"Total"==t){for(let e=0;e<n.length;e++)o(e);return""}if("Today"==e&&"Total"==t){for(let e=0;e<n.length;e++)0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"Total"==t){for(let e=0;e<n.length;e++)l(n[e].dueDate)>7||o(e);return""}if("Total"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||o(e);return""}if("Today"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||l(n[e].dueDate)>7||o(e);return""}if("Total"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||o(e);return""}if("Today"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||l(n[e].dueDate)>7||o(e);return""}}}(e,t);n.append(o)}}d(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"Log One"),function e(){const t=document.querySelector(".clock");let n="",o=(new Date).getHours(),r=(new Date).getMinutes(),l=(new Date).getSeconds();return o>12&&(o-=12),l<10&&(l=`0${l}`),o<10&&(o=`0${o}`),r<10&&(r=`0${r}`),n=`${o}:${r}:${l}`,t.textContent=n,setTimeout(e,1e3),t}(),y("Total","Total"),document.getElementById("saveData").addEventListener("click",(()=>{!function(){const e=document.createElement("a"),t=new Blob([localStorage.getItem("storage-array")]);e.href=URL.createObjectURL(t),e.download="Storage.txt",e.click()}()}));const m=document.getElementById("new-task-button"),f=document.getElementById("close-button"),h=document.getElementById("task-modal"),p=document.getElementById("submit-task"),S=document.getElementById("modal"),k=document.getElementById("overlay");m.addEventListener("click",(()=>{!function(e){e.classList.add("active"),overlay.classList.add("active")}(S)})),k.addEventListener("click",(()=>{u(S,h)})),f.addEventListener("click",(()=>{u(S,h)}));let T="Total";const x=document.querySelector(".total-taskEL"),E=document.querySelector(".todays-taskEL"),v=document.querySelector(".weeks-taskEL"),C=document.querySelector(".page-location"),q=document.querySelector(".cards");document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,i();const D=document.querySelector(".home-icon"),I=document.querySelector(".personal-button"),w=document.querySelector(".school-button");let L="Total";D.addEventListener("click",(()=>{L="Total",q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,document.querySelector(".category-title").textContent="All Categories",i()})),I.addEventListener("click",(()=>{L="Personal",q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,document.querySelector(".category-title").textContent="Personal Category",i()})),w.addEventListener("click",(()=>{L="School",q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,document.querySelector(".category-title").textContent="School Category",i()})),x.addEventListener("click",(()=>{T="Total",C.textContent=`${T} Tasks`,q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,i()})),E.addEventListener("click",(()=>{T="Today",C.textContent=`${T}'s Tasks`,q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,i()})),v.addEventListener("click",(()=>{T="Weeks",C.textContent="Current Week",q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,i()})),p.addEventListener("click",(e=>{e.preventDefault(),s()?(i(),function(e){let t=[];null==e?o("Task not added to storage"):(null!=localStorage.getItem("storage-array")&&(t=JSON.parse(localStorage.getItem("storage-array"))),null!=e&&(t.push(e),localStorage.setItem("storage-array",JSON.stringify(t))))}(s()),d(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"log two"),q.textContent="",y(T,L),document.querySelector(".quote").textContent=`Total Tasks: ${g()}`,u(S,h)):e.preventDefault()}))})();