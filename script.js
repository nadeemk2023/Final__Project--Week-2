document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(item => {
        item.classList.remove('active');
      });
      if (!isActive) {
        item.classList.toggle('active');
      }
    });
  });
});
