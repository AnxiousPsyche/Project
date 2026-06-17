const darkModeToggle = document.getElementById("themeIcon");
const themeIcon = document.querySelector("#themeIcon i");

darkModeToggle.onclick = function() {
    
    if(document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeIcon.classList.remove("bi-brightness-high-fill");
        themeIcon.classList.add("bi-moon-fill");
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeIcon.classList.remove("bi-moon-fill");
        themeIcon.classList.add("bi-brightness-high-fill");
    }   
}
