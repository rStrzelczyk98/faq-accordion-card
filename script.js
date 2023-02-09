'use strict';

const card = document.querySelector('.card');

card.addEventListener('click', function (e) {
  if (!e.target.closest('.btn')) return;
  const button = e.target.closest('.btn');
  button.classList.toggle('btn--active');
  button.parentElement.children[1].classList.toggle('active');
});
