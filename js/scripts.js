'use strict';

const modalButton = document.querySelector('.modal__button');
const closeSvg = document.querySelector('.closeSvg');
const modalAuth = document.querySelector('.modal__auth');
const linkTo = document.querySelectorAll('.linkTo');

for (let i = 0; i < linkTo.length; i++) {
  linkTo[i].addEventListener('click', closeFoo);
}

function closeFoo() {
  modalAuth.classList.add('close');
  modalAuth.classList.remove('open');
}

function openFoo() {
  modalAuth.classList.remove('close');
  modalAuth.classList.add('open');
}

modalButton.addEventListener('click', openFoo);
closeSvg.addEventListener('click', closeFoo);
