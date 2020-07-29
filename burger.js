var burger = document.querySelector('#burger');
var bgc = document.querySelector('#welcome');
var button = document.querySelector('#welcome_button');
var nav = document.querySelector('#navigation');
var h1 = document.querySelector('#h1');

burger.onclick = function(){
    burger.classList.toggle('active_burger');
    nav.classList.toggle('active_menu');
    bgc.classList.toggle('active_bgc');
    button.classList.toggle('hide');
    h1.classList.toggle('hide');
}