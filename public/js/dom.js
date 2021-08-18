const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector(".input-bar");
const divResult = document.querySelector(".result-container");

searchButton.addEventListener("click", fetchSearchedData);
const showSearchedData = (result) => {
  result.forEach((element) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    divResult.appendChild(bookCard);
    const bookImg = document.createElement("img");
    bookImg.classList.add("book-img");
    bookCard.appendChild(bookImg);
    bookImg.src = element.url;
    const details = document.createElement("div");
    details.classList.add("book-details");
    bookCard.appendChild(details);
    const bookName = document.createElement("h3");
    bookName.classList.add("book-name");
    details.appendChild(bookName);
    bookName.textContent = element.name;
    const authorName = document.createElement("h4");
    authorName.classList.add("author-name");
    details.appendChild(authorName);
    authorName.textContent = element.first + " " + element.surname ;
  });
};

