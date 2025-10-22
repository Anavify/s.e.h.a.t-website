// Main application script
import { initNavigation } from "./utils/navigation.js";
import { initSmoothScroll } from "./utils/smoothScroll.js";
import { initScrollReveal, addRevealClass } from "./utils/scrollReveal.js";
import { loadAllComponents } from "./utils/componentLoader.js";

// Initialize the application
async function init() {
  // Load all components
  await loadAllComponents();

  // Initialize utilities after components are loaded
  initNavigation();
  initSmoothScroll();
  addRevealClass();
  initScrollReveal();

  // Add loading animation
  document.body.classList.add("loaded");
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Optional: Add page loading indicator
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }
});
