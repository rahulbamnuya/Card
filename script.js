
let char=["pikachu.png","hathodi.png","ranger.png","doraemon.png"]
var main=document.getElementById("main");
var s=' ';
for(let i=0;i<55;i++){
    let r=Math.floor(Math.random()*char.length);
    s+='<div class="card"><img  id="cs"src="'+char[r]+'"}></div>';
    }

main.innerHTML=s;
