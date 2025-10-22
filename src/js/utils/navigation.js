// Navigation utilities
export function initNavigation() {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav__link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // Active link on scroll
  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
}

function updateActiveLink() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav__link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}
