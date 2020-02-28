!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a={displayBoard:(e,t)=>{let n,a=0,r="";for(let d=0;d<10;d++){n="<tr>";for(let r=0;r<10;r++)null!==e[a]?/X/.test(e[a])?n+="playerBoard"===t?`<td class='hit green'>${e[a].match(/X/)[0]}</td>`:`<td id=${a}></td>`:/O/.test(e[a])?n+="playerBoard"===t?`<td class='miss'>${e[a].match(/O/)[0]}</td>`:`<td id=${a} class='miss'></td>`:n+="playerBoard"===t?"<td class='green'></td>":`<td id=${a}></td>`:n+="playerBoard"===t?"<td></td>":`<td id=${a}></td>`,a++;n+="</tr>",r+=n}document.getElementById(`${t}`).innerHTML=r},getPlacement:()=>({ship:document.getElementById("ship").value,position:document.getElementById("position").value,direction:document.getElementById("direction").value}),showMessage:e=>{document.getElementById("message-section").innerHTML=e}};var r=(e,t)=>{const n=new Array(e).fill(t);return{len:e,isSunk:()=>n.every(e=>"X"===e),hit:e=>n[e]="X",cha:t,hitPos:n}};var d=()=>{const e={c:"carrier",b:"battleship",cr:"cruiser",s:"submarine",d:"destroyer"},t=[],n=r(5,"c"),a=r(4,"b"),d=r(3,"cr"),i=r(3,"s"),l=r(2,"d");let o=[n,a,d,i,l];const s=new Array(100).fill(null),c=(e,t,n,a)=>{const{len:r}=e,d=(e=>{const t=[9,19,29,39,49,59,69,79,89,99];for(let n=0;n<t.length;n+=1)if(t[n]>=e)return t[n]})(t);if("down"===a){let e=0;for(let a=0;a<r;a+=1){if(null!==n[t+e])return!1;e+=10}}else if("right"===a){for(let e=0;e<r;e+=1)if(null!==n[t+e])return!1;if(t+(r-1)>d)return!1}return!0};return{validatePlacement:c,placeShip:(e,n,a,r)=>{const d=c(e,n,a,r);let i="";if(t.includes(e))i="ship placed already";else if(!0!==d||t.includes(e))!1===d&&(i="Invalid position");else{const{len:d,cha:i}=e;let l=0,o=0;for(;l<d;)"down"===r?(a[n+o]=`${l}-${i}`,l++,o+=10):"right"===r&&(a[n+l]=`${l}-${i}`,l++);t.push(e)}return i},receiveAttack:(e,t)=>{let r="";if(o=[n,a,d,i,l],null===t[e])t[e]="O",r=!0;else if("O"===t[e])r=!1;else if(/X/.test(t[e]))r=!1;else{const n=o.filter(n=>t[e].split("-")[1]===n.cha),a=t[e].split("-")[0];t[e]+="X",n[0].hit(a),r=!0}return r},allSunk:()=>o.every(e=>e.isSunk()),ships:o,shipName:t=>e[t.cha],placedShips:t,data:s}};var i=(e,t)=>{return{attack:(e,t,n)=>e.receiveAttack(t,n),name:e,board:t}};const l=d(),o=d(),s=i("player",l),c=i("computer",o);document.getElementById("submit").addEventListener("click",()=>{const{ship:e,position:t,direction:n}=a.getPlacement(),r=l.ships.filter(t=>t.cha===e),d=l.placeShip(r[0],parseInt(t),l.data,n);a.displayBoard(l.data,"playerBoard"),a.showMessage(d);let i="<div>";l.placedShips.forEach(e=>{i+=`<p>${l.shipName(e)}</p>`}),i+="</div>",document.getElementById("mid-section").innerHTML=i});const u=()=>{const e=Math.floor(100*Math.random());if(c.attack(l,e,l.data))return a.displayBoard(l.data,"playerBoard"),l.allSunk()?(a.showMessage("Computer WINS"),0):0;setTimeout(u,1e3)};document.querySelector(".openbtn").addEventListener("click",()=>{document.getElementById("mySidebar").style.width="200px",document.getElementById("main").style.marginLeft="200px"}),document.querySelector(".closebtn").addEventListener("click",()=>{document.getElementById("mySidebar").style.width="0",document.getElementById("main").style.marginLeft="0"}),document.getElementById("start").addEventListener("click",()=>{l.placedShips.length<5?a.showMessage("Please place all ships first"):(document.getElementById("start").setAttribute("class","hidden"),document.getElementById("reset").classList.toggle("hidden"),(()=>{for(let e=0;e<100;e++)document.getElementById(`${e}`).addEventListener("click",()=>{if(s.attack(o,e,o.data)){if("O"===o.data[e]?document.getElementById(`${e}`).innerText="O":/X/.test(o.data[e])&&(document.getElementById(`${e}`).innerText="X"),o.allSunk())return a.showMessage("Player WINS"),0;setTimeout(u,1e3)}})})())});a.displayBoard(l.data,"playerBoard"),a.displayBoard(o.data,"computerBoard"),(()=>{const{ships:[e,t,n,r,d]}=o;[[[e,0,o.data,"down"],[t,2,o.data,"right"],[n,7,o.data,"down"],[r,41,o.data,"right"],[d,70,o.data,"right"]],[[e,0,o.data,"down"],[t,2,o.data,"down"],[n,3,o.data,"down"],[r,4,o.data,"down"],[d,5,o.data,"down"]],[[e,9,o.data,"down"],[t,2,o.data,"right"],[n,30,o.data,"down"],[r,44,o.data,"right"],[d,55,o.data,"down"]]][Math.floor(3*Math.random())].forEach(e=>{o.placeShip(...e),a.displayBoard(o.data,"computerBoard")})})()}]);