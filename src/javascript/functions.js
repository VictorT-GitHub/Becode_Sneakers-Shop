// VARIABLES
let TOTALPRICE = 0;

// FUNCTIONS
export function updateTotalPrice(q) {
  TOTALPRICE = 125 * q;
}

export function addToCartFunction(q) {
  const shoppingList = document.querySelector(".shoppingList");

  const cartItem = document.createElement("section");
  cartItem.classList.add("cartItemSection");

  const cartItemImg = document.createElement("div");
  cartItemImg.classList.add("imgCartItem");

  const cartItemInfo = document.createElement("div");

  const cartItemTitle = document.createElement("h5");
  cartItemTitle.innerHTML = "Autumn Limited Edition...";

  const cartItemPriceQuantity = document.createElement("div");
  const cartItemPrice = document.createElement("span");
  cartItemPrice.innerHTML = "$125.00";
  let cartItemQuantity = document.createElement("span");
  cartItemQuantity.innerHTML = `x ${q}`;
  let cartItemTOTALPrice = document.createElement("span");
  cartItemTOTALPrice.innerHTML = `$${TOTALPRICE}.00`;
  cartItemTOTALPrice.style.fontWeight = "700";
  cartItemPriceQuantity.appendChild(cartItemPrice);
  cartItemPriceQuantity.appendChild(cartItemQuantity);
  cartItemPriceQuantity.appendChild(cartItemTOTALPrice);

  cartItemInfo.appendChild(cartItemTitle);
  cartItemInfo.appendChild(cartItemPriceQuantity);

  const cartItemRemoveBtn = document.createElement("button");
  cartItemRemoveBtn.classList.add("cartItemRemoveBtn");
  cartItemRemoveBtn.addEventListener("click", () => {
    cartItem.remove();
    if (document.querySelector(".shoppingList").hasChildNodes() === false) {
      document.querySelector(".checkoutBtn").classList.add("cache");
      document.querySelector(".shoppingList").innerHTML = "Your cart is empty.";
      document.querySelector(".shoppingList").classList.add("emptyCartText");
    }
  });

  cartItem.appendChild(cartItemImg);
  cartItem.appendChild(cartItemInfo);
  cartItem.appendChild(cartItemRemoveBtn);

  shoppingList.appendChild(cartItem);
}
