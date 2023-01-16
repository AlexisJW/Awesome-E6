import { store } from './store.js';

export default class UI {
  static displayAllBooks() {
    const awesomeBooks = store.getListBooks();
    awesomeBooks.forEach((book) => UI.addBookList(book));
    UI.hideOrRemoveFieldet();
  }

  static addBookList = (book) => {
    const TheBookList = document.getElementById('container-book-list');

    const divContent = document.createElement('div');
    divContent.innerHTML = `<div>"${book.title}" By ${book.author}</div>
    <button id="book-num-${book.id}"class="btn-remove-item"> Remove </button>
    `;
    TheBookList.appendChild(divContent);
    divContent.classList.add('book-row');
  }

  static deleteBook = (element) => {
    if (element.classList.contains('btn-remove-item')) {
      element.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static hideOrRemoveFieldet = () => {
    if (store.getListBooks().length === 0) {
      document.querySelector('#fieldset').classList.add('hide');
    } else {
      document.querySelector('#fieldset').classList.remove('hide');
    }

    document.addEventListener('DOMContentLoaded', UI.displayAllBooks);
    document.querySelector('.books-container').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
  }
}