(()=>{"use strict";function e(){return document.getElementById("task-entry").value}function t(){const e=document.getElementById("School"),t=document.getElementById("Personal");return e.checked?"School":t.checked?"Personal":void 0}function n(){const e=document.getElementById("date-entry"),t=[];let n=[],r="",o="",a="";for(let n=0;n<10;n++)t.push(e.value[n]);for(let e=5;e<7;e++)o+=t[e];for(let e=8;e<10;e++)a+=t[e];for(let e=0;e<4;e++)r+=t[e];return"undefinedundefinedundefinedundefined"==r||null==o||null==a?n=[]:n.push(parseInt(o),parseInt(a),parseInt(r)),n}function r(e){console.error(e)}function o(e){let t=function(e){let t=0,n={date:[(new Date).getMonth()+1,(new Date).getDate(),(new Date).getFullYear()]},o=function(e){return e[0]>12?r(`${e[0]} is not a valid month`):e[1]<(new Date).getDate()&&e[0]==(new Date).getMonth()+1?r("date is less than current date"):e[0]<(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?r(`${e[0]} is less than the current month`):e[2]<(new Date).getFullYear()?r(`${e[2]} is less than the current year`):{dueDate:e}}(e);const a=function(e,t,n){let r=[],o=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let l=0;l<n+1;l++){const c={January:31,February:28,March:31,April:30,May:31,June:30,July:31,August:31,September:30,October:31,November:30,December:31};if((a=e[2]+l)%4!=0||a%100==0&&a%400!=0||(c.February=29),r.push(c),e[1]+l===e[1]){const t=e[l]-1;for(let n=0;n<t;n++){delete c[o[n]];let t=c[o[n+1]];t-=e[1],c[o[n+1]]=t}}if(l==n)if(12===t[0])c[o[11]]=t[1];else{t[1],o.reverse();for(let e=0;e<o.length-t[0];e++){delete c[o[e]];let n=c[o[e+1]];n=t[1],c[o[e+1]]=n}}}var a;return r}(n.date,o.dueDate,o.dueDate[2]-n.date[2]);for(let n=0;n<a.length;n++){let r=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let o=0;o<r.length;o++)void 0===a[n][r[o]]?t+=0:e[0]==(new Date).getMonth()+1&&e[2]==(new Date).getFullYear()?t=e[1]-(new Date).getDate():t+=a[n][r[o]]}return t}(e)/7,n=0;return t%1!=0&&(n=(t%1*7).toFixed(),t-=t%1),1==t&&0==n?t=`${t} week`:t>1&&0==n&&(t=`${t} weeks`),n>1&&(t>1||t<1)?t=`${t} weeks and ${n} days`:1==n&&(t>1||t<1)?t=`${t} weeks and ${n} day`:n>1&&1==t?t=`${t} week and ${n} days`:1==n&&1==t&&(t=`${t} week and ${n} day`),t}class a{constructor(e,t,n,r,o,a,l){this.title=e,this.note=t,this.dueDate=n,this.priority=r,this.type=o,this.daysLeft=a,this.category=l}}function l(){return e().length<1?(r("Task Name invalid"),!1):null==t()?(r("Category must be filled  out"),!1):null==n()[0]||null==n()[1]||null==n()[2]?(r("Must enter Date"),!1):e().length>1&&null!=n()[0]&&null!=n()[1]&&null!=n()[2]&&null!=t()?new a(e(),document.getElementById("note-entry").value,n(),function(){const e=document.getElementById("Urgent"),t=document.getElementById("Important"),n=document.getElementById("Not-Prioritized");return e.checked?"URGENT":t.checked?"Important":(n.checked,"Not Prioritized")}(),document.getElementById("type").value,o(n()),t()):void 0}function c(e,t){t.reset(),e.classList.remove("active"),overlay.classList.remove("active")}function s(e){if(null==e)return[];{let t=[];for(let n=0;n<e.length;n++)e[n].daysLeft=o(e[n].dueDate),t.push(e[n]);return localStorage.setItem("storage-array",JSON.stringify(t))}}s(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"Log One"),function e(){const t=document.querySelector(".clock");let n="",r=(new Date).getHours(),o=(new Date).getMinutes(),a=(new Date).getSeconds();return r>12&&(r-=12),a<10&&(a=`0${a}`),r<10&&(r=`0${r}`),o<10&&(o=`0${o}`),n=`${r}:${o}:${a}`,t.textContent=n,setTimeout(e,1e3),t}(),function(e){const t=document.querySelector(".cards");if(null==localStorage.getItem("storage-array"))t.textContent="no TASKS";else{const e=function(e){const t=JSON.parse(localStorage.getItem("storage-array"));if(null!=t){for(let e=0;e<t.length;e++){const n=document.createElement("div");n.style.backgroundColor="white",n.style.width="95%",n.style.margin="10px",n.style.borderRadius="15px",n.style.padding="10px","Not Prioritized"==t[e].priority?n.style.borderLeft="8px solid green":"Important"==t[e].priority?n.style.borderLeft="8px solid orange":"URGENT"==t[e].priority&&(n.style.borderLeft="8px solid red"),n.style.justifyContent="space-evenly",n.style.alignItems="center";let r=document.createElement("h4");r.textContent=t[e].title;let o=document.createElement("p");o.textContent=t[e].notes;let a=document.createElement("p");a=`Due Date: ${t[e].dueDate} --- ${t[e].daysLeft} left`;let l=document.createElement("p");l.textContent=`Priority: ${t[e].priority}`;let c=document.createElement("p");c.textContent=`Type: ${t[e].type}`;let s=document.createElement("p");s.textContent=t[e].category,"Personal"==s.innerHTML?(s.style.backgroundColor="lightgreen",s.style.padding="5px",s.style.width="fit-content"):(s.style.backgroundColor="lightcoral",s.style.padding="5px",s.style.width="fit-content"),n.append(r,o,a,l,c,s),document.querySelector(".cards").append(n)}return""}}();t.append(e)}}(),document.getElementById("saveData").addEventListener("click",(()=>{!function(){const e=document.createElement("a"),t=new Blob([localStorage.getItem("storage-array")]);e.href=URL.createObjectURL(t),e.download="Storage.txt",e.click()}()}));const u=document.getElementById("new-task-button"),d=document.getElementById("close-button"),i=document.getElementById("task-modal"),g=document.getElementById("submit-task"),y=document.getElementById("modal"),m=document.getElementById("overlay");u.addEventListener("click",(()=>{!function(e){e.classList.add("active"),overlay.classList.add("active")}(y)})),m.addEventListener("click",(()=>{c(y,i)})),d.addEventListener("click",(()=>{c(y,i)})),g.addEventListener("click",(e=>{e.preventDefault(),l()?(function(e){let t=[];null==e?r("Task not added to storage"):(null!=localStorage.getItem("storage-array")&&(t=JSON.parse(localStorage.getItem("storage-array"))),null!=e&&(t.push(e),localStorage.setItem("storage-array",JSON.stringify(t))))}(l()),s(JSON.parse(localStorage.getItem("storage-array"))),console.log(JSON.parse(localStorage.getItem("storage-array")),"log two"),c(y,i)):e.preventDefault()}))})();