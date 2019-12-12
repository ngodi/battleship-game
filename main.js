!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={displayBoard:(e,t)=>{let r,n=0,o="";for(let l=0;l<10;l++){r="<tr>";for(let o=0;o<10;o++)null!==e[n]?/X/.test(e[n])?r+="playerBoard"==t?`<td class='hit green'>${e[n].match(/X/)[0]}</td>`:`<td id=${n}></td>`:/O/.test(e[n])?r+="playerBoard"==t?`<td class='miss'>${e[n].match(/O/)[0]}</td>`:`<td id=${n} class='miss'></td>`:r+="playerBoard"==t?"<td class='green'></td>":`<td id=${n}></td>`:r+="playerBoard"==t?"<td></td>":`<td id=${n}></td>`,n++;o+=r+="</tr>"}document.getElementById(`${t}`).innerHTML=o},getPlacement:()=>({ship:document.getElementById("ship").value,position:document.getElementById("position").value,direction:document.getElementById("direction").value}),showMessage:e=>{document.getElementById("message-section").innerHTML=e}};var o=(e,t)=>{const r=new Array(e).fill(t);return{len:e,isSunk:()=>r.every(e=>"X"==e),hit:e=>r[e]="X",cha:t}};var l=()=>{const e=(e,t,r,n)=>{const o=e.len,l=(e=>{const t=[9,19,29,39,49,59,69,79,89,99];for(let r=0;r<t.length;r++)if(t[r]>=e)return t[r]})(t);if("down"==n){let e=0;for(let n=0;n<o;n++){if(null!==r[t+e])return!1;e+=10}}else if("right"==n){for(let e=0;e<o;e++)if(null!==r[t+e])return!1;if(t+(o-1)>l)return!1}return!0},t={c:"carrier",b:"battleship",cr:"cruiser",s:"submarine",d:"destroyer"};let r=[];const l=o(5,"c"),i=o(4,"b"),s=o(3,"cr"),a=o(3,"s"),d=o(2,"d");let c=[l,i,s,a,d];return{validatePlacement:e,placeShip:(t,o,l,i)=>{let s=e(t,o,l,i);if(r.includes(t))n.showMessage("ship placed already");else if(1!=s||r.includes(t))0==s&&n.showMessage("Invalid position");else{n.showMessage("");const e=t.len,s=t.cha;let a=0,d=0;for(;a<e;)"down"==i?(l[o+d]=`${a}-${s}`,a++,d+=10):"right"==i&&(l[o+a]=`${a}-${s}`,a++);r.push(t)}},receiveAttack:(e,t)=>{if(c=[l,i,s,a,d],null===t[e]||"O"===t[e])t[e]="O",n.showMessage("missed shot");else if(/X/.test(t[e]))n.showMessage("hit already");else{let r=c.filter(r=>t[e].split("-")[1]==r.cha),o=t[e].split("-")[0];t[e]+="X",r[0].hit(o),n.showMessage("")}},allSunk:()=>c.every(e=>e.isSunk()),ships:c,shipName:e=>t[e.cha],placedShips:r}};var i=(e,t,r)=>{return{attack:(e,t,r)=>{e.receiveAttack(t,r)},showBoard:(e,t)=>{n.displayBoard(e,t)},name:e,board:t,storage:r}};const s=new Array(100).fill(null),a=new Array(100).fill(null),d=l(),c=l(),u=i("player",d,s),h=i("computer",c,a);document.getElementById("submit").addEventListener("click",()=>{const e=n.getPlacement();let t=d.ships.filter(t=>t.cha==e.ship);d.placeShip(t[0],parseInt(e.position),s,e.direction),u.showBoard(s,"playerBoard"),h.showBoard(a,"computerBoard");let r="<ol>";d.placedShips.forEach(e=>{r+=`<li>${d.shipName(e)}</li>`}),r+="</ol>",document.getElementById("mid-section").innerHTML=r});const p=()=>{let e=Math.floor(100*Math.random());h.attack(d,e,s),u.showBoard(s,"playerBoard")};document.getElementById("start").addEventListener("click",()=>{d.placedShips.length<5?n.showMessage("finish placing ships"):(document.getElementById("ship-table-container").setAttribute("class","hidden"),document.querySelector(".mid-section").setAttribute("class","hidden"),(()=>{for(let e=0;e<100;e++)document.getElementById(`${e}`).addEventListener("click",()=>{u.attack(c,e,a),null===a[e]?document.getElementById(`${e}`).innerText="O":/X/.test(a[e])?document.getElementById(`${e}`).innerText="X":/O/.test(a[e])&&(document.getElementById(`${e}`).innerText="O"),p()})})())});u.showBoard(s,"playerBoard"),h.showBoard(a,"computerBoard"),(()=>{const{ships:[e,t,r,n,o]}=c;[[[e,0,a,"down"],[t,2,a,"right"],[r,7,a,"down"],[n,41,a,"right"],[o,70,a,"right"]],[[e,0,a,"down"],[t,2,a,"down"],[r,3,a,"down"],[n,4,a,"down"],[o,5,a,"down"]],[[e,9,a,"down"],[t,2,a,"right"],[r,30,a,"down"],[n,44,a,"right"],[o,55,a,"down"]]][Math.floor(3*Math.random())].forEach(e=>{c.placeShip(...e),h.showBoard(a,"computerBoard")})})()}]);