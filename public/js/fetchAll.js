fetch('/all-data')
  .then((respond) => respond.json())
  .then((result) => showAllData(result))
  .catch((err) => err);
