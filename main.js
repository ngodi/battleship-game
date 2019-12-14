!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var n={displayBoard:(e,t)=>{let a,n=0,r="";for(let d=0;d<10;d++){a="<tr>";for(let r=0;r<10;r++)null!==e[n]?/X/.test(e[n])?a+="playerBoard"===t?`<td class='hit green'>${e[n].match(/X/)[0]}</td>`:`<td id=${n}></td>`:/O/.test(e[n])?a+="playerBoard"===t?`<td class='miss'>${e[n].match(/O/)[0]}</td>`:`<td id=${n} class='miss'></td>`:a+="playerBoard"===t?"<td class='green'></td>":`<td id=${n}></td>`:a+="playerBoard"===t?"<td></td>":`<td id=${n}></td>`,n++;r+=a+="</tr>"}document.getElementById(`${t}`).innerHTML=r},getPlacement:()=>({ship:document.getElementById("ship").value,position:document.getElementById("position").value,direction:document.getElementById("direction").value}),showMessage:e=>{document.getElementById("message-section").innerHTML=e}};var r=(e,t)=>{const a=new Array(e).fill(t);return{len:e,isSunk:()=>a.every(e=>"X"===e),hit:e=>a[e]="X",cha:t}};var d=()=>{const e={c:"carrier",b:"battleship",cr:"cruiser",s:"submarine",d:"destroyer"},t=[],a=r(5,"c"),n=r(4,"b"),d=r(3,"cr"),i=r(3,"s"),l=r(2,"d");let o=[a,n,d,i,l];const s=new Array(100).fill(null),c=(e,t,a,n)=>{const{len:r}=e,d=(e=>{const t=[9,19,29,39,49,59,69,79,89,99];for(let a=0;a<t.length;a+=1)if(t[a]>=e)return t[a]})(t);if("down"===n){let e=0;for(let n=0;n<r;n+=1){if(null!==a[t+e])return!1;e+=10}}else if("right"===n){for(let e=0;e<r;e+=1)if(null!==a[t+e])return!1;if(t+(r-1)>d)return!1}return!0};return{validatePlacement:c,placeShip:(e,a,n,r)=>{const d=c(e,a,n,r);let i="";if(t.includes(e))i="ship placed already";else if(!0!==d||t.includes(e))!1===d&&(i="Invalid position");else{const{len:d,cha:i}=e;let l=0,o=0;for(;l<d;)"down"===r?(n[a+o]=`${l}-${i}`,l++,o+=10):"right"===r&&(n[a+l]=`${l}-${i}`,l++);t.push(e)}return i},receiveAttack:(e,t)=>{let r="";if(o=[a,n,d,i,l],null===t[e])t[e]="O",r=!0;else if("O"===t[e])r=!1;else if(/X/.test(t[e]))r=!1;else{const a=o.filter(a=>t[e].split("-")[1]===a.cha),n=t[e].split("-")[0];t[e]+="X",a[0].hit(n),r=!0}return r},allSunk:()=>o.every(e=>e.isSunk()),ships:o,shipName:t=>e[t.cha],placedShips:t,data:s}};var i=(e,t)=>{return{attack:(e,t,a)=>e.receiveAttack(t,a),name:e,board:t}};const l=d(),o=d(),s=i("player",l),c=i("computer",o);document.getElementById("submit").addEventListener("click",()=>{const{ship:e,position:t,direction:a}=n.getPlacement(),r=l.ships.filter(t=>t.cha===e),d=l.placeShip(r[0],parseInt(t),l.data,a);n.displayBoard(l.data,"playerBoard"),n.showMessage(d);let i="<ol>";l.placedShips.forEach(e=>{i+=`<li>${l.shipName(e)}</li>`}),i+="</ol>",document.getElementById("mid-section").innerHTML=i});const u=()=>{const e=Math.floor(100*Math.random());if(c.attack(l,e,l.data))return n.displayBoard(l.data,"playerBoard"),l.allSunk()?(n.showMessage("Computer WINS"),0):0;u()};document.getElementById("start").addEventListener("click",()=>{l.placedShips.length<5?n.showMessage("finish placing ships"):(document.getElementById("ship-table-container").setAttribute("class","hidden"),document.getElementById("start").setAttribute("class","hidden"),document.getElementById("reset").classList.toggle("hidden"),(()=>{for(let e=0;e<100;e++)document.getElementById(`${e}`).addEventListener("click",()=>{if(s.attack(o,e,o.data)){if("O"===o.data[e]?document.getElementById(`${e}`).innerText="O":/X/.test(o.data[e])&&(document.getElementById(`${e}`).innerText="X"),o.allSunk())return n.showMessage("Player WINS"),0;u()}})})())});n.displayBoard(l.data,"playerBoard"),n.displayBoard(o.data,"computerBoard"),(()=>{const{ships:[e,t,a,r,d]}=o;[[[e,0,o.data,"down"],[t,2,o.data,"right"],[a,7,o.data,"down"],[r,41,o.data,"right"],[d,70,o.data,"right"]],[[e,0,o.data,"down"],[t,2,o.data,"down"],[a,3,o.data,"down"],[r,4,o.data,"down"],[d,5,o.data,"down"]],[[e,9,o.data,"down"],[t,2,o.data,"right"],[a,30,o.data,"down"],[r,44,o.data,"right"],[d,55,o.data,"down"]]][Math.floor(3*Math.random())].forEach(e=>{o.placeShip(...e),n.displayBoard(o.data,"computerBoard")})})()}]);