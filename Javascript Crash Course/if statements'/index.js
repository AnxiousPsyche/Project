const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);
    if (age >= 100) {
    resultElement.innerHTML = "You are TOO OLD to enter this site";
    }
    else if (age == 0) {
    resultElement.innerHTML = "You are not born yet";
    }
    else if (age >= 18) {
    resultElement.innerHTML = "You can enter this site";
    }
    else if (age < 0) {
    resultElement.innerHTML = "Your age can't be below 0";
    }
    else {
    resultElement.innerHTML = "You are too young to enter this site";
    }
}
