const burgerMenuDiv = document.querySelector(".burger");
const burgerBTNS = document.querySelectorAll(".burgerBTN");

burgerMenuBTN.addEventListener("click", () =>
  burgerMenuDiv.classList.toggle("open")
);

burgerCloseBTN.addEventListener("click", () =>
  burgerMenuDiv.classList.toggle("open")
);
