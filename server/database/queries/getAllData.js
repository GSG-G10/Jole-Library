const conection = require('../config/conection');

const getAllData = () => {
  const text = `select books.book_name , author.first_name , author.surname , img.img_url from author inner join book_author_img on book_author_img.author_id = author.id inner join books on book_author_img.book_id = books.id inner join img on book_author_img.img_id = img.id;`;
  return conection.query(text);
};

module.exports = getAllData;
