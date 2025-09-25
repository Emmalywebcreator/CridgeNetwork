document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggleButtons = document.querySelectorAll(".theme-toggle"); // Get all theme toggle buttons
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const navBar = document.querySelector(".nav-bar");

    // Theme setup
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.setAttribute("data-theme", savedTheme);
    
    // Update all theme toggle buttons
    themeToggleButtons.forEach(toggle => {
        toggle.innerHTML = savedTheme === "dark" ? "☀️" : "🌙";
        toggle.addEventListener("click", toggleTheme);
    });

    // Mobile menu toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", toggleMobileMenu);
    }

    // Close menu when clicking a link
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (navBar && !navBar.contains(event.target) && mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

function toggleTheme() {
    const body = document.body;
    const themeToggleButtons = document.querySelectorAll(".theme-toggle"); // Get all theme toggle buttons
    const newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Update all theme toggle buttons
    themeToggleButtons.forEach(toggle => {
        toggle.innerHTML = newTheme === "dark" ? "☀️" : "🌙";
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");
    if (mobileMenu && hamburger) {
        mobileMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
}
