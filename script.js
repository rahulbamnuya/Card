// let x=document.getElementById("main");
// // x.innerHTML="<h1>Goodbye</h1><h1>Goodbye</h1><h1>Goodbye</h1><h1>Goodbye</h1><h1>Goodbye</h1>"
// let y="";
// for(let i=1;i<=4;i++){
// y+="<h1>Goodbye </h1>";
// }
// x.innerHTML=y;
// x.innerHTML=y;
{/* <div class="card">
    <img src="/DOM/Card/doraemon.png" alt="">
</div>
<div class="card">
    <img src="/DOM/Card/hathodi.png" alt="">
</div>
<div class="card">
    <img src="/DOM/Card/ranger.png" alt="">
</div> */}
let char=["./image/pikachu.png","./image/hathodi.png","./image/ranger.png","./image/doraemon.png"]
var main=document.getElementById("main");
var s=' ';
for(let i=0;i<55;i++){
    let r=Math.floor(Math.random()*char.length);
    s+='<div class="card"><img  id="cs"src="'+char[r]+'"}></div>';
    }

main.innerHTML=s;
