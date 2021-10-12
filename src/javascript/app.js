import { addToCartFunction, updateTotalPrice } from "./functions";

// -------------------------------------------
//         HAMBURGER MENU NAVIGATION
// -------------------------------------------
const burgerMenuDiv = document.querySelector(".burger");
const burgerBTNS = document.querySelectorAll(".toggleJsBtn");

for (let btn of burgerBTNS) {
  btn.addEventListener("click", () => burgerMenuDiv.classList.toggle("open"));
}

// ---------------------------------
//          SHOPPING CART
// ---------------------------------
// SHOPPING CART TOGGLE BTN
const shoppingCartToggle = document.querySelector(".shoppingCartToggle");
const shoppingCart = document.querySelector(".shoppingCart");

shoppingCartToggle.addEventListener("click", () =>
  shoppingCart.classList.toggle("open")
);

// CHECKOUT BTN (boutton acheter)
const checkoutBtn = document.querySelector(".checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  if (document.querySelector(".shoppingList").hasChildNodes()) {
    alert(
      "Achat validé. Vous allez être redirigé vers le site internet de votre banque pour confirmer le paiement."
    );
  }

  for (let elem of document.querySelectorAll(".cartItemSection")) {
    elem.remove();
  }

  shoppingCart.classList.toggle("open");
});

// QUANTITY MODIFICATION BUTTONS
const quantityNumber = document.querySelector(".quantityNumber");
const moinsBtn = document.querySelector(".moinsBTN");
const plusBtn = document.querySelector(".plusBTN");

let QUANTITY = 0;

moinsBtn.addEventListener("click", () => {
  if (QUANTITY > 0) {
    QUANTITY--;
    quantityNumber.innerHTML = QUANTITY;
  }
});

plusBtn.addEventListener("click", () => {
  QUANTITY++;
  quantityNumber.innerHTML = QUANTITY;
});

// ADD TO CART BTN
const addToCartBtn = document.querySelector(".addToCart");

addToCartBtn.addEventListener("click", () => {
  updateTotalPrice(QUANTITY);
  addToCartFunction(QUANTITY);
  shoppingCart.classList.add("open");
});

// -------------------------------------------
//          GALLERIE IMAGE BUTTONS
// -------------------------------------------
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const imgSection = document.querySelector("figure");

const imgArray = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

let i = 0;

prevBtn.addEventListener("click", () => {
  i--;
  if (i === -1) {
    i = imgArray.length - 1;
  }
  imgSection.style.backgroundImage = `url("${imgArray[i]}")`;
});

nextBtn.addEventListener("click", () => {
  i++;
  if (i === imgArray.length) {
    i = 0;
  }
  imgSection.style.backgroundImage = `url("${imgArray[i]}")`;
});
