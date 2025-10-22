// FAQ Module - Accordion functionality
const FAQ = {
  init() {
    console.log('FAQ module initialized');
    this.faqItems = document.querySelectorAll('.faq-item');
    this.bindEvents();
  },

  bindEvents() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => this.toggleFAQ(item));
      }
    });
  },

  toggleFAQ(item) {
    const isActive = item.classList.contains('active');

    // Close all other FAQ items
    this.faqItems.forEach(faqItem => {
      if (faqItem !== item) {
        faqItem.classList.remove('active');
      }
    });

    // Toggle current item
    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  },

  // Close all FAQs
  closeAll() {
    this.faqItems.forEach(item => {
      item.classList.remove('active');
    });
  }
};

// Export for main initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FAQ;
}
