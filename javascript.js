/* ================================
    MOBILE NAV MENU
================================ */
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a link (mobile) */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ================================
    SMOOTH SCROLLING
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ================================
    TYPING EFFECT
================================ */

const typingElement = document.querySelector(".typing");
const words = ["Full-Stack Developer", "Programmer", "Java Developer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 60;
let delayBetweenWords = 1500;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, 1000);
});


/* ================================
    AOS INITIALIZATION
================================ */
AOS.init({
    duration: 1000,
    once: true
});
