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

shoppingCartToggle.addEventListener("click", () => {
  shoppingCart.classList.toggle("open");
  shoppingCartToggle.classList.toggle("black");
});

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
  shoppingCartToggle.classList.toggle("black");
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
  shoppingCartToggle.classList.add("black");
});

// -------------------------------------------
//          GALLERIE IMAGE BUTTONS
// -------------------------------------------
const prevBtns = document.querySelectorAll(".previous");
const nextBtns = document.querySelectorAll(".next");
const imgSection = document.querySelectorAll(".bigPicture");

const imgArray = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

let i = 0;

for (let btn of prevBtns) {
  btn.addEventListener("click", () => {
    i--;
    if (i === -1) {
      i = imgArray.length - 1;
    }
    for (let img of imgSection) {
      img.style.backgroundImage = `url("${imgArray[i]}")`;
    }
  });
}

for (let btn of nextBtns) {
  btn.addEventListener("click", () => {
    i++;
    if (i === imgArray.length) {
      i = 0;
    }
    for (let img of imgSection) {
      img.style.backgroundImage = `url("${imgArray[i]}")`;
    }
  });
}

document.querySelector("#imgBtnGallery").addEventListener("click", () => {
  document.querySelector(".imgGallery").classList.toggle("cache");
  document.querySelector("#divFilter").classList.toggle("cache");
});
