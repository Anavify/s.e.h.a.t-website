// Animation Module - Scroll Reveal & Intersection Observer
const Animations = {
  init() {
    console.log('Animations module initialized');
    this.observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    this.setupScrollReveal();
    this.setupCounters();
    this.addStaggerToCards();
  },

  setupScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    console.log(`Found ${revealElements.length} elements to reveal`);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a small delay for smoother effect
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      }, this.observerOptions);

      revealElements.forEach(element => {
        observer.observe(element);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      console.log('IntersectionObserver not supported, revealing all elements');
      revealElements.forEach(element => {
        element.classList.add('revealed');
      });
    }
  },

  addStaggerToCards() {
    // Add stagger delays to cards in each section
    const sections = ['#problems', '#solutions', '#emergency', '#benefits'];

    sections.forEach(sectionId => {
      const section = document.querySelector(sectionId);
      if (section) {
        const cards = section.querySelectorAll('.card');
        cards.forEach((card, index) => {
          card.style.transitionDelay = `${index * 0.1}s`;
        });
      }
    });
  },

  setupCounters() {
    const counters = document.querySelectorAll('[data-count]');

    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  },

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;

        // Add suffix if exists
        const suffix = element.nextElementSibling;
        if (suffix && suffix.classList.contains('stat-suffix')) {
          suffix.style.opacity = '1';
          suffix.style.transform = 'translateX(0)';
        }
      }
    };

    updateCounter();
  },

  // Utility function to add stagger delays
  staggerElements(selector, baseDelay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * baseDelay}ms`;
    });
  }
};

// Export for main initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Animations;
}
