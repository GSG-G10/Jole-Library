const express = require('express');
const { join } = require('path');
const router = require("./controllers");
const { handleClientError404, handleServerError500 } = require('./controllers/errors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 2000);

app.use(router);
app.use(handleClientError404);
app.use(handleServerError500);

module.exports = app;
