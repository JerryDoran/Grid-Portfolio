const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
  e.preventDefault();
  // console.log(e.type, e.target);

  const modalToggle = e.target.closest('.portfolio-link');

  // console.log(modalToggle);
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  // console.log(modal);

  const closeButton = modal.querySelector('.modal-close');

  const modalOpen = function() {
    modal.classList.add('modal-open');
    modal.style.animation = 'modalFadeIn 500ms forwards';
    document.body.style.overflowY = 'hidden';
  };

  const modalClose = function() {
    modal.classList.remove('modal-open');
    modal.removeEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  };

  closeButton.addEventListener('click', () => {
    modal.style.animation = 'modalFadeOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      modal.style.animation = 'modalFadeOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
    }
  });

  modalOpen();
});
