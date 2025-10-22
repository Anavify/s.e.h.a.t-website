// Main Script - Import and initialize all modules
import { initNavigation } from "./src/js/utils/navigation.js";
import { initSmoothScroll } from "./src/js/utils/smoothScroll.js";
import { initScrollReveal, addRevealClass } from "./src/js/utils/scrollReveal.js";
import { loadAllComponents } from "./src/js/utils/componentLoader.js";

// Initialize the application
async function init() {
  try {
    // Load all components
    await loadAllComponents();

    // Initialize utilities after components are loaded
    initNavigation();
    initSmoothScroll();
    addRevealClass();
    initScrollReveal();

    // Initialize scroll to top button
    initScrollToTop();

    // Add loading animation
    document.body.classList.add("loaded");
  } catch (error) {
    console.error("Error initializing application:", error);
  }
}

// Scroll to top button functionality
function initScrollToTop() {
  // Create scroll to top button
  const scrollButton = document.createElement("button");
  scrollButton.className = "scroll-to-top";
  scrollButton.innerHTML = "↑";
  scrollButton.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollButton);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  });

  // Scroll to top on click
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Page loading indicator
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }
});

// Handle errors globally
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

// Handle unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});
