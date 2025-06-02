const counterE1=document.querySelector(".counter");
const barE1=document.querySelector(".loading-bar-front");

let idx=0;

updatenum();

function updatenum(){
    counterE1.innerHTML=idx+"%";
    barE1.style.width=idx+"%";
    idx++;

    if(idx <= 100){
        setTimeout(updatenum,100);

        }
 }