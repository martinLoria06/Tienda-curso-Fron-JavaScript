const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoShoppingCartContainer);

function toggleDesktopMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("oculto");
  /*
  if (aside.className.includes("inactive") != true) {
    aside.classList.add("inactive");
  } */
}

function toggleCarritoShoppingCartContainer() {
  /*Una alternativa para validar */
  const isMobilClosed = mobileMenu.classList.contains("oculto");
  const isDestockMenu = desktopMenu.classList.contains("inactive");

  if (!isMobilClosed) {
    mobileMenu.classList.add("oculto");
  }

  if (!isDestockMenu) {
    desktopMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");

  /* console.log(mobileMenu.className.includes('oculto'));
    if(mobileMenu.className.includes('oculto') != true){
        mobileMenu.classList.add('oculto');
    }else {
        console.log(mobileMenu.className);
    } */
}

/* Una alternativa para reutlizar el codigo */
/*
const ocultar = (element) => {
    element.classList.toggle('inactive');
}

menuEmail.addEventListener('click',()=>{
    ocultar(desktopMenu);
});
menuHamIcon.addEventListener('click',()=>{
    ocultar(mobileMenu);
}); */

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 1999,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Laptop",
  price: 6250,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProcducs(productList){
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
      
        const producInfo = document.createElement("div");
        producInfo.classList.add("product-info");
      
        const producInfoDiv = document.createElement("div");
        
        const producPrice = document.createElement("p");
        producPrice.innerText = '$' + product.price;
      
        const producName = document.createElement("p");
        producName.innerText = product.name;
      
        producInfoDiv.append(producPrice,producName);
      
        const producInfoFigure  = document.createElement("figure");
      
        const productImgCard  = document.createElement("img");
        productImgCard.setAttribute("src", './icons/bt_add_to_cart.svg');
      
        producInfoFigure.appendChild(productImgCard);
      
        producInfo.append(producInfoDiv, producInfoFigure);
      
        productCard.append(img,producInfo);
      
        cardContainer.appendChild(productCard);
      
      }
      
}

renderProcducs(productList);