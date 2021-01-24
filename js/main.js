const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');
const menuContact = document.querySelector('.menu-contact');
const homeButton = document.querySelector('.home-button');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuLeft.classList.add('show');
        menuRight.classList.add('show');
        menuContact.classList.add('show');
        if(homeButton) homeButton.classList.add('show');
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show');
        menuContact.classList.remove('show');
        if(homeButton) homeButton.classList.remove('show');
        showMenu = false;
    }
}