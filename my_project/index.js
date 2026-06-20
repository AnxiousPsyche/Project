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
function startClock(timezone) {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
            timeZone: timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
        document.querySelector(".time").textContent = timeString;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// Ask browser for user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
                .then(res => res.json())
                .then(data => {
                    const city = data.address.city || data.address.town || data.address.village || data.address.county;
                    const country = data.address.country;
                    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                    document.querySelector(".location-text").textContent = `${city}, ${country}`;
                    startClock(timezone);
                });
        },
        () => {
            // Denied — guess from browser's system timezone
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // Convert timezone to readable city/country e.g. "Asia/Manila" → "Manila, Philippines"
            const tzParts = timezone.split("/");
            const city = tzParts[tzParts.length - 1].replace(/_/g, " ");

            document.querySelector(".location-text").textContent = `${city} (approximate)`;
            startClock(timezone);
        }
    );
} else {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzParts = timezone.split("/");
    const city = tzParts[tzParts.length - 1].replace(/_/g, " ");

    document.querySelector(".location-text").textContent = `${city} (approximate)`;
    startClock(timezone);
}
