const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open"); 
};

// review section

let arrowIcon = document.getElementsByClassName('arrow-icon');
const slide = document.getElementById('slide');

arrowIcon[0].onclick = () => {
    slide.style.transform = "translateX(0)";
}
arrowIcon[1].onclick = () => {
    slide.style.transform = "translateX(-800px)";
}
arrowIcon[2].onclick = () => {
    slide.style.transform = "translateX(-1600px)";
}
arrowIcon[3].onclick = () => {
    slide.style.transform = "translateX(-2400px)";
}