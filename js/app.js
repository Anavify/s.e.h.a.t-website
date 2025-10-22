// Main Application Module
const App = {
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  },

  start() {
    console.log('s.e.h.a.t website initialized');
    console.log('DOM ready, initializing modules...');

    // Initialize modules
    if (typeof Navigation !== 'undefined') {
      Navigation.init();
      console.log('Navigation module loaded');
    }

    if (typeof FAQ !== 'undefined') {
      FAQ.init();
      console.log('FAQ module loaded');
    }

    // Setup custom functionality
    this.setupCTA();
    this.setupBackToTop();

    // Add scroll reveal class to elements that should animate
    this.markScrollRevealElements();

    // Initialize animations after marking elements
    if (typeof Animations !== 'undefined') {
      // Delay animations slightly to ensure elements are marked
      setTimeout(() => {
        Animations.init();
        console.log('Animations module loaded');
      }, 100);
    }

    // Force visibility check
    this.ensureVisibility();
  },

  ensureVisibility() {
    // Ensure all sections are visible
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    });

    console.log(`Ensured visibility for ${sections.length} sections`);
  },

  markScrollRevealElements() {
    // Add scroll-reveal class to cards and sections
    const elementsToReveal = [
      '.card',
      '.section-header',
      '.stat-item',
      '.step-card',
      '.faq-item'
    ];

    let totalMarked = 0;
    elementsToReveal.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        // Don't add scroll-reveal to elements in the hero section
        if (!element.closest('.hero')) {
          element.classList.add('scroll-reveal');
          totalMarked++;
        }
      });
    });

    console.log(`Marked ${totalMarked} elements for scroll reveal`);
  },

  setupCTA() {
    const ctaButtons = document.querySelectorAll('[data-cta]');
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-cta');
        this.handleCTAClick(action);
      });
    });
  },

  handleCTAClick(action) {
    console.log(`CTA clicked: ${action}`);
    // Add your CTA handling logic here
    // For example, open a modal, redirect, or show a form

    switch(action) {
      case 'get-started':
        alert('Get Started functionality - Connect to your backend or app store');
        break;
      case 'learn-more':
        Utils.scrollToElement('#solutions', 80);
        break;
      case 'contact':
        alert('Contact functionality - Connect to your contact form');
        break;
      default:
        console.log('Unknown CTA action');
    }
  },

  setupBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', Utils.throttle(() => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, 100));

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add styles
    this.addBackToTopStyles();
  },

  addBackToTopStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: var(--color-white);
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 999;
        box-shadow: var(--shadow-md);
      }

      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
      }

      .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }

      @media (max-width: 768px) {
        .back-to-top {
          bottom: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Initialize the application
App.init();
