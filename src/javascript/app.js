// ---------------------------------
//        HAMBURGER MENU NAV
// ---------------------------------
const burgerMenuDiv = document.querySelector(".burger");
const burgerBTNS = document.querySelectorAll(".toggleJsBtn");

for (let btn of burgerBTNS) {
  btn.addEventListener("click", () => burgerMenuDiv.classList.toggle("open"));
}

// ---------------------------------
//          SHOPPING CART
// ---------------------------------
// creation element in shopping list section (for add to cart btn)
// const shoppingList = document.querySelector('.shoppingList')

// const cartItemImg = document.createElement('div');
// cartItemImg.classList.add('');

// const cartItemInfo = document.createElement('div');
//   const cartItemTitle = document.createElement('h5');
//     cartItemTitle.innerHTML = ;
//   const cartItemPriceQuantity = document.createElement('div');
//     const cartItemPrice = document.createElement('span');
//       cartItemPrice.innerHTML = ;
//     let cartItemQuantity = document.createElement('span');
//       cartItemPrice.innerHTML = ;
//     let cartItemTOTALPrice = document.createElement('span');
//       cartItemPrice.innerHTML = ;

// const cartItemRemoveBtn = document.createElement('button');
// cartItemRemoveBtn.classList.add('');

// function display shopping cart list -> toggle .open class css on shopping list section
