const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('.input-bar');
const divResult = document.querySelector('.result-container');

const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

const createBookCard = (imgUrl, nameOfBook, nameOfAuthor) => {
  const bookCard = createNode('div', 'book-card', divResult);
  const bookImg = createNode('img', 'book-img', bookCard);
  bookImg.src = imgUrl;
  const details = createNode('div', 'book-details', bookCard);
  const bookName = createNode('h3', 'book-name', details);
  bookName.textContent = nameOfBook;
  const authorName = createNode('h4', 'author-name', details);
  authorName.textContent = nameOfAuthor;
};

const showSearchedData = (result) => {
  divResult.textContent = '';
  result.forEach((element) => {
    const author = `${element.first_name} ${element.surname}`;
    createBookCard(element.img_url, element.book_name, author);
  });
};
const showAllData = (result) => {
  result.forEach((element) => {
    const author = `${element.first_name} ${element.surname}`;
    createBookCard(element.img_url, element.book_name, author);
  });
};

searchButton.addEventListener('click', fetchSearchedData);
