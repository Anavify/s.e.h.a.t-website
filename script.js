// Custom JavaScript - Project Specific Functionality
// Add any custom functionality specific to s.e.h.a.t here

// Example: Analytics tracking
function trackEvent(eventName, eventData) {
  console.log('Event tracked:', eventName, eventData);
  // Add your analytics tracking code here (Google Analytics, Mixpanel, etc.)
}

// Example: Form handling
function handleFormSubmit(formData) {
  console.log('Form submitted:', formData);
  // Add your form submission logic here
}

// Example: Custom interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add custom event listeners or functionality here
  console.log('Custom scripts loaded');

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('[data-cta]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      trackEvent('cta_click', { action: this.getAttribute('data-cta') });
    });
  });
});
