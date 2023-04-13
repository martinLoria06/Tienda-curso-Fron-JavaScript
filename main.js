const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('oculto');
}

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