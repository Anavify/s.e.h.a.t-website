// Utility Functions Module
const Utils = {
  // Debounce function for performance optimization
  debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Get scroll position
  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  },

  // Smooth scroll to element
  scrollToElement(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },

  // Add class on scroll
  addClassOnScroll(selector, className, scrollThreshold = 100) {
    const element = document.querySelector(selector);
    if (!element) return;

    const handleScroll = this.throttle(() => {
      if (this.getScrollPosition() > scrollThreshold) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
  },

  // Format numbers with commas
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  // Lazy load images
  lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Export for main initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}
