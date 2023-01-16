import Book from './modules/book.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';
import { store } from './modules/store.js';

const dt = DateTime.now();

document.getElementById('date').innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
document.addEventListener('DOMContentLoaded', UI.displayAllBooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = store.numberOfBooks;

  const book = new Book(title, author, id);

  UI.addBookList(book);
  store.addBook(book);
  UI.clearFields();
  UI.hideOrRemoveFieldet();
});

document.querySelector('#container-book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const btnID = e.target.id;
  const arrValues = btnID.split('-');
  const idString = arrValues[arrValues.length - 1];
  const id = parseInt(idString, 10);
  store.removeBook(id);
  UI.hideOrRemoveFieldet();
});

document.querySelector('#book-list-menu').addEventListener('click', () => {
  document.querySelector('.books-container').classList.remove('hide');
  document.querySelector('.form').classList.add('hide');
  document.querySelector('.section-contact-info').classList.add('hide');
});

document.querySelector('#add-new-book-menu').addEventListener('click', () => {
  document.querySelector('.form').classList.remove('hide');
  document.querySelector('.books-container').classList.add('hide');
  document.querySelector('.section-contact-info').classList.add('hide');
});

document.querySelector('#contact-menu').addEventListener('click', () => {
  document.querySelector('.section-contact-info').classList.remove('hide');
  document.querySelector('.form').classList.add('hide');
  document.querySelector('.books-container').classList.add('hide');
});