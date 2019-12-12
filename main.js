!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={displayBoard:(e,t)=>{let n,r=0,o="";for(let l=0;l<10;l++){n="<tr>";for(let o=0;o<10;o++)null!==e[r]?/X/.test(e[r])?n+="playerBoard"==t?`<td class='hit green'>${e[r].match(/X/)[0]}</td>`:`<td id=${r}></td>`:/O/.test(e[r])?n+="playerBoard"==t?`<td class='miss'>${e[r].match(/O/)[0]}</td>`:`<td id=${r} class='miss'></td>`:n+="playerBoard"==t?"<td class='green'></td>":`<td id=${r}></td>`:n+="playerBoard"==t?"<td></td>":`<td id=${r}></td>`,r++;o+=n+="</tr>"}document.getElementById(`${t}`).innerHTML=o},getPlacement:()=>({ship:document.getElementById("ship").value,position:document.getElementById("position").value,direction:document.getElementById("direction").value}),showMessage:e=>{document.getElementById("message-section").innerHTML=e}};var o=(e,t)=>{const n=new Array(e).fill(t);return{len:e,isSunk:()=>n.every(e=>"X"==e),hit:e=>n[e]="X",cha:t}};var l=()=>{const e=(e,t,n,r)=>{const o=e.len,l=(e=>{const t=[9,19,29,39,49,59,69,79,89,99];for(let n=0;n<t.length;n++)if(t[n]>=e)return t[n]})(t);if("down"==r){let e=0;for(let r=0;r<o;r++){if(null!==n[t+e])return!1;e+=10}}else if("right"==r){for(let e=0;e<o;e++)if(null!==n[t+e])return!1;if(t+(o-1)>l)return!1}return!0},t={c:"carrier",b:"battleship",cr:"cruiser",s:"submarine",d:"destroyer"};let n=[];const l=o(5,"c"),a=o(4,"b"),i=o(3,"cr"),s=o(3,"s"),d=o(2,"d");let c=[l,a,i,s,d];return{validatePlacement:e,placeShip:(t,o,l,a)=>{let i=e(t,o,l,a);if(n.includes(t))r.showMessage("ship placed already");else if(1!=i||n.includes(t))0==i&&r.showMessage("Invalid position");else{r.showMessage("");const e=t.len,i=t.cha;let s=0,d=0;for(;s<e;)"down"==a?(l[o+d]=`${s}-${i}`,s++,d+=10):"right"==a&&(l[o+s]=`${s}-${i}`,s++);n.push(t)}},receiveAttack:(e,t)=>{if(c=[l,a,i,s,d],null===t[e]||"O"===t[e])t[e]="O";else if(/X/.test(t[e]));else{let n=c.filter(n=>t[e].split("-")[1]==n.cha),o=t[e].split("-")[0];t[e]+="X",n[0].hit(o),r.showMessage("")}},allSunk:()=>c.every(e=>e.isSunk()),ships:c,shipName:e=>t[e.cha],placedShips:n}};var a=(e,t,n)=>{return{attack:(e,t,n)=>{e.receiveAttack(t,n)},showBoard:(e,t)=>{r.displayBoard(e,t)},name:e,board:t,storage:n}};const i=new Array(100).fill(null),s=new Array(100).fill(null),d=l(),c=l(),u=a("player",d,i),p=a("computer",c,s);document.getElementById("submit").addEventListener("click",()=>{const e=r.getPlacement();let t=d.ships.filter(t=>t.cha==e.ship);d.placeShip(t[0],parseInt(e.position),i,e.direction),u.showBoard(i,"playerBoard"),p.showBoard(s,"computerBoard");let n="<ol>";d.placedShips.forEach(e=>{n+=`<li>${d.shipName(e)}</li>`}),n+="</ol>",document.getElementById("mid-section").innerHTML=n});const h=()=>{let e=Math.floor(100*Math.random());p.attack(d,e,i),u.showBoard(i,"playerBoard"),d.allSunk()&&r.showMessage("Computer WINS")};document.getElementById("start").addEventListener("click",()=>{d.placedShips.length<5?r.showMessage("finish placing ships"):(document.getElementById("ship-table-container").setAttribute("class","hidden"),(()=>{for(let e=0;e<100;e++)document.getElementById(`${e}`).addEventListener("click",()=>{u.attack(c,e,s),null===s[e]?document.getElementById(`${e}`).innerText="O":/X/.test(s[e])?document.getElementById(`${e}`).innerText="X":/O/.test(s[e])&&(document.getElementById(`${e}`).innerText="O"),c.allSunk()&&r.showMessage("Player WINS"),h()})})())});u.showBoard(i,"playerBoard"),p.showBoard(s,"computerBoard"),(()=>{const{ships:[e,t,n,r,o]}=c;[[[e,0,s,"down"],[t,2,s,"right"],[n,7,s,"down"],[r,41,s,"right"],[o,70,s,"right"]],[[e,0,s,"down"],[t,2,s,"down"],[n,3,s,"down"],[r,4,s,"down"],[o,5,s,"down"]],[[e,9,s,"down"],[t,2,s,"right"],[n,30,s,"down"],[r,44,s,"right"],[o,55,s,"down"]]][Math.floor(3*Math.random())].forEach(e=>{c.placeShip(...e),p.showBoard(s,"computerBoard")})})()}]);