BEGIN;
DROP TABLE IF EXISTS author , books ,img, book_author_img CASCADE;
CREATE TABLE author(
    id SERIAL PRIMARY KEY ,
    first_name VARCHAR(300) NOT NULL,
    surname VARCHAR (300) NOT NULL
);
CREATE TABLE books(
    id SERIAL PRIMARY KEY ,
    book_name VARCHAR (300) NOT NULL 
);
CREATE TABLE img(
    id SERIAL PRIMARY KEY ,
    img_url TEXT NOT NULL
);

CREATE TABLE book_author_img(
    book_id integer REFERENCES books(id) ON UPDATE CASCADE,
    author_id integer REFERENCES author(id) ON UPDATE CASCADE,
    img_id  integer REFERENCES img(id) ON UPDATE CASCADE
);
INSERT INTO author(first_name , surname) VALUES
('Sidney','Morris' ),
('Karl','Hofmann'),
('Randall' ,'Hansen' ),
('Michael', 'Wolff'),
('Arthur','Miller'),
('Robert','Barnard'),
('Agatha','Christie'),
('Paulo','Coelho'),
('Fyodor','Dostoevsky'),
('Morris','Kline')
RETURNING ID;
INSERT INTO books(book_name ) VALUES
('Topology Without Tears' ),
('The Structure of Compact Groups'),
('Fire and Fury'),
('Death of a Salesman'),
('Murder on the Orient Express'),
('The Mysterious Affair at Styles'),
('The Murder at the Vicarage'),
('The Alchemist'),
('Veronika Decides to Die'),
('The Brothers Karamazov'),
('Calculus : An Intuitive and Physical Approach')
RETURNING ID;
INSERT INTO img(img_url) VALUES
('https://lh6.googleusercontent.com/proxy/EVnUxETNOGL3rHFbgT-CxIpC06nB496XLrC9JAdf80SI97eZ6WNWrjrlXKN1VWJlcAVd8-a621P_hwSwWncaKNK95eKudNFN1Zax9RHvRFxD0Olaf_hCc_UalM2l84gusOgkh7zsTfF5lRR7lfiOTf0xDRrx0iZfuwpDZil16w'),
('https://images-na.ssl-images-amazon.com/images/I/41bX8xKI0UL._SX353_BO1,204,203,200_.jpg'),
('https://www.deslegte.com/images/cached/resample/jpg/data/uploads/297/450/cms_visual_994654.jpg_1510324486000_297x450.jpg'),
('https://m.media-amazon.com/images/I/51VvhkvdeHL.jpg'),
('https://upload.wikimedia.org/wikipedia/en/2/20/DeathOfASalesman.jpg'),
('https://www.bing.com/images/blob?bcid=RO2BNV6oGh0DaHMS7V5KL7i2y8J4.....zM'),
('https://upload.wikimedia.org/wikipedia/en/c/c0/Murder_on_the_Orient_Express_First_Edition_Cover_1934.jpg'),
('https://upload.wikimedia.org/wikipedia/en/8/8c/Mysterious_affair_at_styles.jpg'),
('https://upload.wikimedia.org/wikipedia/en/b/bf/The_Murder_at_the_Vicarage_First_Edition_Cover_1930.jpg'),
('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7225/9780722532935.jpg'),
('https://images-na.ssl-images-amazon.com/images/I/81UqvCm-RnL.jpg'),
('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4864/9780486437910.jpg'),
('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4864/9780486404530.jpg')
RETURNING ID;
INSERT INTO book_author_img(author_id ,book_id,img_id ) VALUES
(1,1,1),
(1,2,2),
(2,2,2),
(3,3,3),
(4,3,4),
(5,4,5),
(6,4,6),
(7,5,7),
(7,6,8),
(7,7,9),
(8,9,11),
(8,8,10),
(9,10,12),
(10,11,13);


COMMIT;