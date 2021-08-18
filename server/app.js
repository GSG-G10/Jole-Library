const express = require('express');
const { join } = require('path');
const router = require("./controllers")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 2000);
app.get('/search', (req,res) => {
    res.sendFile(join(__dirname, '..', 'public', 'html', 'search.html'))
}
)
app.use(router);

module.exports = app;
