const darkModeToggle = document.getElementById("themeIcon");
const themeIcon = document.querySelector("#themeIcon i");
const heroImage = document.getElementById("heroID");
let isDarkMode = false;

darkModeToggle.onclick = function () {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#fafafa";
        document.body.style.color = "#2C2C2C";
        themeIcon.classList.remove("bi-brightness-high-fill");
        themeIcon.classList.add("bi-moon-fill");
        heroImage.src="/web design ideas/HeroID.jpg";
        
        isDarkMode = false;

    } else {
        document.body.style.backgroundColor = "#2C2C2C";
        document.body.style.color = "#fafafa";
        themeIcon.classList.remove("bi-moon-fill");
        themeIcon.classList.add("bi-brightness-high-fill");
        heroImage.src="/web design ideas/HeroIDDark1.jpg";
        
        isDarkMode = true;
    }
}
