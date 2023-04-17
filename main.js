const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoShoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

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

  closeProductDetailAside();

  mobileMenu.classList.toggle("oculto");
  /*
  if (aside.className.includes("inactive") != true) {
    aside.classList.add("inactive");
  } */
}

function toggleCarritoShoppingCartContainer() {
   /*Una alternativa para validar */
  const isMobileMenuClosed = mobileMenu.classList.contains("oculto");
  const isDestockMenu  = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("oculto");
  }

  if (!isDestockMenu) {
    desktopMenu.classList.add("inactive");
  }

  
  const isProductDetailClosed =
  productDetailContainer.classList.contains("inactive");
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
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


function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

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

function renderProcducs(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProcducs(productList);
