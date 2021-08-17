const conection = require('../config/conection');

const getSearchData = (input) => {
  const text = 'select books.book_name , author.first_name , author.surname , img.img_url from author inner join book_author_img on book_author_img.author_id = author.id inner join books on book_author_img.book_id = books.id inner join img on book_author_img.img_id = img.id WHERE lower(book_name) like ' % $1 % ' or lower(author.first_name) like ' % $1 % ' or lower(author.surname) like ' % $1 % ';';
  return conection.query(text, input);
};

module.exports = getSearchData;
