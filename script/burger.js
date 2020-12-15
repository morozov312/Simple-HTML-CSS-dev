let burger = document.querySelector('#burger');
let bgc = document.querySelector('#welcome');
let button = document.querySelector('#welcome_button');
let nav = document.querySelector('#navigation');
let h1 = document.querySelector('#h1');

burger.addEventListener('click', () => {
    burger.classList.toggle('active_burger');
    nav.classList.toggle('active_menu');
    bgc.classList.toggle('active_bgc');
    button.classList.toggle('hide');
    h1.classList.toggle('hide');
})