// Navigation Module
const Navigation = {
  init() {
    this.navbar = document.querySelector('.navbar');
    this.navbarToggle = document.querySelector('.navbar-toggle');
    this.navbarMenu = document.querySelector('.navbar-menu');
    this.navLinks = document.querySelectorAll('.navbar-menu a');

    this.bindEvents();
  },

  bindEvents() {
    // Mobile menu toggle
    if (this.navbarToggle) {
      this.navbarToggle.addEventListener('click', () => this.toggleMenu());
    }

    // Close menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => this.handleScroll());

    // Smooth scroll for anchor links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.smoothScroll(e));
    });
  },

  toggleMenu() {
    this.navbarToggle.classList.toggle('active');
    this.navbarMenu.classList.toggle('active');
    document.body.style.overflow = this.navbarMenu.classList.contains('active') ? 'hidden' : '';
  },

  closeMenu() {
    this.navbarToggle.classList.remove('active');
    this.navbarMenu.classList.remove('active');
    document.body.style.overflow = '';
  },

  handleScroll() {
    if (window.scrollY > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  },

  smoothScroll(e) {
    const href = e.target.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navbarHeight = this.navbar.offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
};

// Export for main initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
