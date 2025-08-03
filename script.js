// Surjeet Zenawi's Portfolio Script for PLP 1st Hackathon
// Enhanced typewriter effect and modal transitions with smooth animations

// Typewriter effect for hero section
const typewriterText = ["Forex Trader", "Full Time Entrepreneur", "Software Engineer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const textElement = document.getElementById("typewriter-text");
    if (isDeleting) {
        currentText = typewriterText[i].substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % typewriterText.length;
            setTimeout(type, 400);
            return;
        }
    } else {
        currentText = typewriterText[i].substring(0, j++);
        if (j > typewriterText[i].length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    }
    textElement.textContent = currentText;
    setTimeout(type, isDeleting ? 40 : 80);
}

// Modal controls with smooth transitions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("active");
    setTimeout(() => modal.style.display = "none", 300);
}

function handleScroll() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.style.animation = "fadeIn 1s ease forwards";
        }
    });
}

window.onload = () => {
    type();
    window.addEventListener("scroll", handleScroll);
    handleScroll();
};