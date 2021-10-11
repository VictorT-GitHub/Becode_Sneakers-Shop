const burgerMenuDiv = document.querySelector(".burger");
const burgerMenuBTN = document.querySelector(".burgerBTN");
const burgerCloseBTN = document.querySelector(".burgerMenuCloseBTN");

burgerMenuBTN.addEventListener("click", () =>
  burgerMenuDiv.classList.toggle("open")
);

burgerCloseBTN.addEventListener("click", () =>
  burgerMenuDiv.classList.toggle("open")
);
