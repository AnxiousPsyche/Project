
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick= function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;

}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your level is currently:" + gameLevel);
