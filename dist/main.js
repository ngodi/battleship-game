!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={displayBoard:(e,t)=>{let r,n=0,l="";for(let t=0;t<10;t++){r="<tr>";for(let t=0;t<10;t++)null!==e[n]?/X/.test(e[n])?r+=`<td id=${n} class='hit green'>${e[n].match(/X/)[0]}</td>`:/O/.test(e[n])?r+=`<td id=${n} class='miss'>${e[n].match(/O/)[0]}</td>`:r+=`<td id=${n} class='green'></td>`:r+=`<td id=${n}></td>`,n++;l+=r+="</tr>"}document.getElementById(`${t}`).innerHTML=l}};var l=(e,t)=>{const r=new Array(e).fill(t);return{len:e,isSunk:()=>r.every(e=>"X"==e),hit:e=>r[e]="X",cha:t}};var i=(()=>{const e=(e,t,r,n)=>{const l=e.len;if("down"==n){let e=0;for(let n=0;n<l;n++){if(null!==r[t+e])return!1;e+=10}}else if("right"==n)for(let e=0;e<l;e++)if(null!==r[t+e])return!1;return!0};return{validatePlacement:e,placeShip:(t,r,n,l)=>{if(e(t,r,n,l)){const e=t.len,i=t.cha;let o=0,a=0;for(;o<e;)"down"==l?(n[r+a]=`${o}-${i}`,o++,a+=10):"right"==l&&(n[r+o]=`${o}-${i}`,o++)}else console.log("invalid ship placement")},receiveAttack:(e,t)=>{const r=[o.carrier,o.battleship,o.cruiser,o.submarine,o.destroyer];if(null===t[e])t[e]+="O",console.log("missed shot");else if(/X/.test(t[e]))console.log("hit already");else{let n=r.filter(r=>t[e].split("-")[1]==r.cha),l=t[e].split("-")[0];t[e]+="X",n[0].hit(l)}},allSunk:e=>e.every(e=>e.isSunk())}})();var o=(()=>{const e=new Array(100).fill(null),t=new Array(100).fill(null),r=l(5,"c"),o=l(4,"b"),a=l(3,"cr"),c=l(3,"s"),s=l(2,"d");return{showBoards:()=>{n.displayBoard(e,"playerBoard"),n.displayBoard(t,"computerBoard")},place:()=>{i.placeShip(r,0,e,"down"),i.placeShip(o,11,e,"right"),i.placeShip(a,37,e,"down")},attack:()=>{i.receiveAttack(20,e),i.receiveAttack(31,e),i.receiveAttack(37,e),i.receiveAttack(37,e)},carrier:r,battleship:o,cruiser:a,submarine:c,destroyer:s}})();o.showBoards(),o.place(),o.attack(),o.showBoards()}]);