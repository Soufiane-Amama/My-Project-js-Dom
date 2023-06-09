let imgs = document.querySelectorAll(".img");
const main = document.querySelector("#main");

const btnLeft = document.getElementById("left-btn");
const btnRight = document.getElementById("right-btn");

let count1 = 7;
let count2 = 0;

btnLeft.addEventListener("click", function(){
    count1--;
    main.src = imgs[count1].src;
    if(count1 === 0){
        count1 = 7;
    }
});

btnRight.addEventListener("click", function(){
    main.src = imgs[count2].src;
    count2++;
    if(count2 === 7){
        count2 = 0;
    }
});
