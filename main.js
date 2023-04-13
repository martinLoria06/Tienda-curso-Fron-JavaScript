const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("oculto");
  /*
  if (aside.className.includes("inactive") != true) {
    aside.classList.add("inactive");
  } */
}

function toggleCarritoAside() {
  /*Una alternativa para validar */
  const isMobilClosed = mobileMenu.classList.contains("oculto");
  const isDestockMenu = desktopMenu.classList.contains("inactive");

  if (!isMobilClosed) {
    mobileMenu.classList.add("oculto");
  }

  if(!isDestockMenu){
    desktopMenu.classList.add('inactive');
  }
  aside.classList.toggle("inactive");

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
