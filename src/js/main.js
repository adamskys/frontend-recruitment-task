'use strict';

// 1.

const title = 'Mario Krok-Adamski - Recruitment task';
document.querySelector('title').textContent = title;

// 3.
/*--  Selecting elements  --*/
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup-container');
const popupParagraph = document.querySelector('.popup-paragraph');
const btnOpenPopup = document.querySelector('.button-popup');
const btnClosePopup = document.querySelector('.close-popup');

let userClickCount = 0;

/*--  Opening and closing modal + counting clicks  --*/
btnOpenPopup.addEventListener('click', () => {
  popup.classList.remove('hidden');
  userClickCount += 1;
  popupParagraph.textContent = `You have clicked ${userClickCount} times to related button.`;
})

const closePopup = () => {
  popup.classList.add('hidden');
}

btnClosePopup.addEventListener('click', () => {closePopup()});

document.addEventListener('click', e => {
  if(e.target.classList.contains('popup')) {
    closePopup();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePopup();
  }
});

/*--  Counting and storing clicks  --*/
