const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const gCashBtn = document.getElementById("gCashBtn");
const payMayaBtn = document.getElementById("payMayaBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


submitBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.textContent = `You are not subscribed!`;
    }
}