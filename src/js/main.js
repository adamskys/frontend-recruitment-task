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

const counterParagraphInject = () => {
  popupParagraph.innerHTML = `<p class="popup-paragraph">You have clicked <strong>${userClickCount} times</strong> to related button.</p>`;  
}

const openPopupAndCount = () => {

  popup.classList.remove('hidden');
  // get value from storage
  userClickCount = Number(localStorage.getItem(localStorageCounter));
  localStorage.setItem(localStorageCounter, userClickCount += 1);
  // popupParagraph.textContent = `You have clicked ${userClickCount} times to related button.`;
  counterParagraphInject();
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
  counterParagraphInject();
  btnResetCounter.classList.add('hidden');
});

// 4.
const url = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  const response = await fetch(url);

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const users = await response.json();

    users.map(user => {
      const tableContent = document.querySelector('.table-content')
      let row = `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
      </tr>`
    tableContent.insertAdjacentHTML('afterbegin', row);
    });
}
fetchUsers().catch(err => {
  err.message;
});




// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     const users = data;

//     users.map(user => {
//       const tableContent = document.querySelector('.table-content')
//       let row = `<tr>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
//         <td>${user.phone}</td>
//         <td>${user.company.name}</td>
//       </tr>`

//       tableContent.insertAdjacentHTML('afterbegin', row);
//       // tableContent.innerHTML += row;
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });
