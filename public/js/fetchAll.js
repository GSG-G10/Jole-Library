fetch('/all-data')
  .then((respond) => respond.json())
  .then((result) => showSearchedData(result))
  .catch((err) => err);
