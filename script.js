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

  const menuButton = document.querySelector('.btn__menu');
  const closeButton = document.querySelector('.btn__menu--close');
  const menuBackdrop = document.querySelector('.menu__backdrop');

  menuButton.addEventListener('click', () => {
    menuBackdrop.classList.add('show');
  });

  closeButton.addEventListener('click', () => {
    menuBackdrop.classList.remove('show');
  });
});
