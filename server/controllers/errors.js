const { join } = require('path');

const handleClientError404 = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};
const handleServerError500 = (error, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = { handleClientError404, handleServerError500 };
