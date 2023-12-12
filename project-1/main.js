
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}

let opsi = document.querySelector('.option');

document.querySelector('#menu-icon').onclick = () => {
    opsi.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});