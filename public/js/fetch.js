const fetchSearchedData = () => {
  const inputValue = searchInput.value;
  fetch(`/search/:${inputValue}`)
    .then((respond) => respond.json())
    .then((result) => showSearchedData(result))
    .catch((err) => err);
};
