const connection = require('../config/conection');

const postData = (data) => {
  console.log(data)
  const {name, first, surname, url} = data
  const text = `INSERT INTO books(book_name) VALUES ('${name}'); INSERT INTO author(first_name, surname
        ) VALUES ('${first}', '${surname}'); INSERT INTO img(img_url) VALUES ('${url}'); INSERT INTO book_author_img (book_id, author_id, img_id) VALUES ((SELECT MAX(books.id) FROM books)
     ,(SELECT MAX(author.id) FROM author), (SELECT MAX(img.id) FROM img));`;
   return connection.query(text).then(() => console.log(1)).catch(err => console.log(err));
};

module.exports = postData;
