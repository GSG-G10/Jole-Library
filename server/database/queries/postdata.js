const connection = require('../config/conection');

const postData = (data) => {
  const text = `INSERT INTO books(book_name) VALUES ('${data.name}'); INSERT INTO author(first_name, surname
        ) VALUES ('${data.first}', '${data.surname}'); INSERT INTO img(img_url) VALUES ('${data.url}'); INSERT INTO book_author_img(author_id, book_id, img_id) VALUES ((SELECT MAX(books.id) FROM books)
     ,(SELECT MAX(author.id) FROM author), (SELECT MAX(img.id) FROM img))`;
  return connection.query(text);
};

module.exports = postData;
