// Scroll reveal animations
export function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Reveal when element is in viewport
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        element.classList.add("active");
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Check on scroll
  window.addEventListener("scroll", revealOnScroll);

  // Check on resize
  window.addEventListener("resize", revealOnScroll);
}

export function addRevealClass() {
  // Add reveal class to elements that should animate on scroll
  const animateElements = document.querySelectorAll(
    ".problem-card, .solution-card, .benefit-card, .gap-card, .hero__feature"
  );

  animateElements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.1}s`;
  });
}
