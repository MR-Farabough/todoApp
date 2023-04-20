(()=>{"use strict";function e(){return document.getElementById("task-entry").value}function t(){const e=document.getElementById("School"),t=document.getElementById("Personal");return e.checked?"School":t.checked?"Personal":void 0}function n(){const e=document.getElementById("date-entry"),t=[];let n=[],o="",r="",l="";for(let n=0;n<10;n++)t.push(e.value[n]);for(let e=5;e<7;e++)r+=t[e];for(let e=8;e<10;e++)l+=t[e];for(let e=0;e<4;e++)o+=t[e];return"undefinedundefinedundefinedundefined"==o||null==r||null==l?n=[]:n.push(parseInt(r),parseInt(l),parseInt(o)),n}function o(e){console.error(e)}function r(e){let t=0,n={date:[(new Date).getMonth()+1,(new Date).getDate(),(new Date).getFullYear()]},r=function(e){return e[0]>12?o(`${e[0]} is not a valid month`):e[1]<(new Date).getDate()&&e[0]==(new Date).getMonth()+1?o("date is less than current date"):e[0]<(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?o(`${e[0]} is less than the current month`):e[2]<(new Date).getFullYear()?o(`${e[2]} is less than the current year`):{dueDate:e}}(e);const l=function(e,t,n){let o=[],r=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let a=0;a<n+1;a++){const c={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((l=e[2]+a)%4!=0||l%100==0&&l%400!=0||(c.February=29),o.push(c),e[1]+a===e[1]){const t=e[a]-1;for(let n=0;n<t;n++){delete c[r[n]];let t=c[r[n+1]];t-=e[1],c[r[n+1]]=t}}if(a==n)if(12===t[0])c[r[11]]=t[1];else{t[1],r.reverse();for(let e=0;e<r.length-t[0];e++){delete c[r[e]];let n=c[r[e+1]];n=t[1],c[r[e+1]]=n}}}var l;return o}(n.date,r.dueDate,r.dueDate[2]-n.date[2]);for(let n=0;n<l.length;n++){let o=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let r=0;r<o.length;r++)void 0===l[n][o[r]]?t+=0:e[0]==(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?t=e[1]-(new Date).getDate():t+=l[n][o[r]]}return t}function l(e){return r(e)}function a(e){let t=r(e)/7,n=0;return t%1!=0&&(n=(t%1*7).toFixed(),t-=t%1),1==t&&0==n?t=`${t} week`:t>1&&0==n&&(t=`${t} weeks`),n>1&&(t>1||t<1)?t=`${t} weeks and ${n} days`:1==n&&(t>1||t<1)?t=`${t} weeks and ${n} day`:n>1&&1==t?t=`${t} week and ${n} days`:1==n&&1==t&&(t=`${t} week and ${n} day`),t}class c{constructor(e,t,n,o,r,l,a){this.title=e,this.note=t,this.dueDate=n,this.priority=o,this.type=r,this.daysLeft=l,this.category=a}}function s(){return e().length<1?(o("Task Name invalid"),!1):null==t()?(o("Category must be filled  out"),!1):null==n()[0]||null==n()[1]||null==n()[2]?(o("Must enter Date"),!1):e().length>1&&null!=n()[0]&&null!=n()[1]&&null!=n()[2]&&null!=t()?new c(e(),document.getElementById("note-entry").value,n(),function(){const e=document.getElementById("Urgent"),t=document.getElementById("Important"),n=document.getElementById("Not-Prioritized");return e.checked?"URGENT":t.checked?"Important":(n.checked,"Not Prioritized")}(),document.getElementById("type").value,a(n()),t()):void 0}function d(e,t){t.reset(),e.classList.remove("active"),overlay.classList.remove("active")}function u(e){if(null==e)return[];{let t=[];for(let n=0;n<e.length;n++)e[n].daysLeft=a(e[n].dueDate),t.push(e[n]);return localStorage.setItem("storage-array",JSON.stringify(t))}}function i(e,t){const n=document.querySelector(".cards");if(null==localStorage.getItem("storage-array")||localStorage.getItem("storage-array").length<3){const e=new Image;e.src="imgs/cat.png",e.style.height="35%",e.style.width="35%",n.appendChild(e)}else{const o=function(e,t){const n=JSON.parse(localStorage.getItem("storage-array"));function o(t){const o=document.createElement("div");o.style.backgroundColor="white",o.style.width="95%",o.style.margin="10px",o.style.borderRadius="15px",o.style.padding="10px","Not Prioritized"==n[t].priority?o.style.borderLeft="8px solid green":"Important"==n[t].priority?o.style.borderLeft="8px solid orange":"URGENT"==n[t].priority&&(o.style.borderLeft="8px solid red"),o.style.justifyContent="space-evenly",o.style.alignItems="center";let r=document.createElement("h4");r.textContent=n[t].title;let l=document.createElement("p");l.textContent=n[t].notes;let a=document.createElement("p");a=`Due Date: ${n[t].dueDate} --- ${n[t].daysLeft} left`,document.createElement("p").textContent=`Priority: ${n[t].priority}`;let c=document.createElement("p");c.textContent=`Type: ${n[t].type}`;let s=document.createElement("p");s.textContent=n[t].category,"Personal"==s.innerHTML?(s.style.backgroundColor="lightgreen",s.style.padding="5px",s.style.width="fit-content"):(s.style.backgroundColor="lightcoral",s.style.padding="5px",s.style.width="fit-content");const d=document.createElement("button");d.classList.add("delete-button"),d.innerHTML="Delete Task",o.append(r,l,a,c,s,d),document.querySelector(".cards").append(o),d.addEventListener("click",(()=>{const r=n.indexOf(n[t]);return n.splice(r,1),o.remove(),localStorage.setItem("storage-array",JSON.stringify(n)),i(e),document.querySelector(".quote").textContent="Total Tasks "+(document.querySelector(".cards").childNodes.length-1),""}))}if(null!=n){if("Total"==e&&"Total"==t){for(let e=0;e<n.length;e++)o(e);return""}if("Today"==e&&"Total"==t){for(let e=0;e<n.length;e++)0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"Total"==t){for(let e=0;e<n.length;e++)l(n[e].dueDate)>7||o(e);return""}if("Total"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||o(e);return""}if("Today"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"Personal"==t){for(let e=0;e<n.length;e++)"Personal"!=n[e].category||l(n[e].dueDate)>7||o(e);return""}if("Total"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||o(e);return""}if("Today"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||0!=n[e].daysLeft||o(e);return""}if("Weeks"==e&&"School"==t){for(let e=0;e<n.length;e++)"School"!=n[e].category||l(n[e].dueDate)>7||o(e);return""}}}(e,t);n.append(o)}}u(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"Log One"),function e(){const t=document.querySelector(".clock");let n="",o=(new Date).getHours(),r=(new Date).getMinutes(),l=(new Date).getSeconds();return o>12&&(o-=12),l<10&&(l=`0${l}`),o<10&&(o=`0${o}`),r<10&&(r=`0${r}`),n=`${o}:${r}:${l}`,t.textContent=n,setTimeout(e,1e3),t}(),i("Total","Total"),document.getElementById("saveData").addEventListener("click",(()=>{!function(){const e=document.createElement("a"),t=new Blob([localStorage.getItem("storage-array")]);e.href=URL.createObjectURL(t),e.download="Storage.txt",e.click()}()}));const g=document.getElementById("new-task-button"),y=document.getElementById("close-button"),m=document.getElementById("task-modal"),h=document.getElementById("submit-task"),f=document.getElementById("modal"),p=document.getElementById("overlay");g.addEventListener("click",(()=>{!function(e){e.classList.add("active"),overlay.classList.add("active")}(f)})),p.addEventListener("click",(()=>{d(f,m)})),y.addEventListener("click",(()=>{d(f,m)}));let S="Total";const k=document.querySelector(".total-taskEL"),T=document.querySelector(".todays-taskEL"),E=document.querySelector(".weeks-taskEL"),v=document.querySelector(".page-location"),x=document.querySelector(".cards");document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1);const C=document.querySelector(".home-icon"),I=document.querySelector(".personal-button"),D=document.querySelector(".school-button");let L="Total";C.addEventListener("click",(()=>{L="Total",x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1),document.querySelector(".category-title").textContent="All Categories"})),I.addEventListener("click",(()=>{L="Personal",x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1),document.querySelector(".category-title").textContent="Personal Category"})),D.addEventListener("click",(()=>{L="School",x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1),document.querySelector(".category-title").textContent="School Category"})),k.addEventListener("click",(()=>{S="Total",v.textContent=`${S} Tasks`,x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1)})),T.addEventListener("click",(()=>{S="Today",v.textContent=`${S}'s Tasks`,x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1)})),E.addEventListener("click",(()=>{S="Weeks",v.textContent="Current Week",x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1)})),h.addEventListener("click",(e=>{e.preventDefault(),s()?(function(e){let t=[];null==e?o("Task not added to storage"):(null!=localStorage.getItem("storage-array")&&(t=JSON.parse(localStorage.getItem("storage-array"))),null!=e&&(t.push(e),localStorage.setItem("storage-array",JSON.stringify(t))))}(s()),u(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"log two"),x.textContent="",i(S,L),document.querySelector(".quote").textContent="Total Tasks: "+(x.childNodes.length-1),d(f,m)):e.preventDefault()}))})();