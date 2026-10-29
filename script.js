
/* =========================================
   SYPIIL — PERSONAL PORTFOLIO
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("#nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isExpanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
            navLinks.classList.toggle("is-open", !isExpanded);
        });

        // Close the mobile menu after selecting a navigation link
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("is-open");
            });
        });

        // Close the menu when returning to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                menuToggle.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("is-open");
            }
        });
    }

    // Automatically display the current year
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
