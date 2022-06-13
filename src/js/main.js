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
const btnResetCounter = document.querySelector('.reset-counter');

const localStorageCounter = 'counter';
let userClickCount = 0;

/*--  Click event and counting clicks  --*/
const closePopup = () => {
  popup.classList.add('hidden');
}

const openPopupAndCount = () => {
  popup.classList.remove('hidden');
  // get value from storage
  userClickCount = Number(localStorage.getItem(localStorageCounter));
  localStorage.setItem(localStorageCounter, userClickCount += 1);
  popupParagraph.textContent = `You have clicked ${userClickCount} times to related button.`;
  if (userClickCount > 5) {
    btnResetCounter.classList.remove('hidden');
  }
}

btnOpenPopup.addEventListener('click', () => {
  openPopupAndCount();
});

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

btnResetCounter.addEventListener('click', () => {
  localStorage.setItem(localStorageCounter, userClickCount = 0);
  popupParagraph.textContent = `You have clicked ${userClickCount} times to related button.`;
  btnResetCounter.classList.add('hidden');
});

// 4.
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let users = data;
    console.log(users);

    users.map(user => {
      const tableUsers = document.querySelector('.table-content')
      let row = `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
      </tr>`

      tableUsers.insertAdjacentHTML('afterbegin', row);
    })
  })
