import { addToCartFunction, updateTotalPrice } from "./functions";
import imgGallery1 from "../images/image-product-1.jpg";
import imgGallery2 from "../images/image-product-2.jpg";
import imgGallery3 from "../images/image-product-3.jpg";
import imgGallery4 from "../images/image-product-4.jpg";

// -------------------------------------------
//         HAMBURGER MENU NAVIGATION
// -------------------------------------------
const burgerMenuDiv = document.querySelector(".burger");
const burgerBTNS = document.querySelectorAll(".toggleJsBtn");

for (let btn of burgerBTNS) {
  btn.addEventListener("click", () => {
    burgerMenuDiv.classList.toggle("open");
    document.querySelector("#divFilter2").classList.toggle("cache"); // FILTER DARK
    shoppingCart.classList.remove("open"); // Ferme le panier à l'ouverture du menu de navigation
  });
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
  alert(
    "Achat validé. Vous allez être redirigé vers le site internet de votre banque pour confirmer le paiement."
  );

  for (let elem of document.querySelectorAll(".cartItemSection")) {
    elem.remove();
  }

  checkoutBtn.classList.add("cache");
  document.querySelector(".shoppingList").innerHTML = "Your cart is empty.";
  document.querySelector(".shoppingList").classList.add("emptyCartText");

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
  if (
    document.querySelector(".shoppingList").innerHTML === "Your cart is empty."
  ) {
    document.querySelector(".shoppingList").innerHTML = "";
  }
  document.querySelector(".shoppingList").classList.remove("emptyCartText");

  updateTotalPrice(QUANTITY);

  addToCartFunction(QUANTITY);

  checkoutBtn.classList.remove("cache");
  shoppingCart.classList.add("open");
  shoppingCartToggle.classList.add("black");
});

// "YOUR CART IS EMPTY" (Se joue directement au chargement de la page car le panier est vide de base)
if (document.querySelector(".shoppingList").hasChildNodes() === false) {
  checkoutBtn.classList.add("cache");
  document.querySelector(".shoppingList").innerHTML = "Your cart is empty.";
  document.querySelector(".shoppingList").classList.add("emptyCartText");
}

// -------------------------------------------
//          GALLERIE IMAGE BUTTONS
// -------------------------------------------
const prevBtns = document.querySelectorAll(".previous");
const nextBtns = document.querySelectorAll(".next");
const imgSection = document.querySelectorAll(".bigPicture");

const imgArray = [imgGallery1, imgGallery2, imgGallery3, imgGallery4];

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

// GALLERY BTNS (la grande image + la croix)
for (let btn of document.querySelectorAll(".coucouKelian")) {
  btn.addEventListener("click", () => {
    document.querySelector(".imgGallery").classList.toggle("cache");
    document.querySelector("#divFilter").classList.toggle("cache"); // FILTER DARK
    shoppingCart.classList.remove("open"); // Ferme le panier à l'ouverture la gallery
  });
}

// GALLERY THUMBNAIL (j'ai donné un id de 0 à 3 aux images, qui correspond aux index des images dans le array [imgArray])
for (let img of document.querySelectorAll(".thumbnailHover")) {
  img.addEventListener("click", (e) => {
    for (let img of imgSection) {
      img.style.backgroundImage = `url("${imgArray[e.target.id]}")`;
    }
    i = e.target.id;
  });
}
