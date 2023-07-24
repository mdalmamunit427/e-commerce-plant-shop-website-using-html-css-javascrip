const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// review section

let arrowIcon = document.getElementsByClassName("arrow-icon");
const slide = document.getElementById("slide");

arrowIcon[0].onclick = () => {
  slide.style.transform = "translateX(0)";
};
arrowIcon[1].onclick = () => {
  slide.style.transform = "translateX(-800px)";
};
arrowIcon[2].onclick = () => {
  slide.style.transform = "translateX(-1600px)";
};
arrowIcon[3].onclick = () => {
  slide.style.transform = "translateX(-2400px)";
};

// media queries

function myFunction(x) {
  let arrowIcon = document.getElementsByClassName("arrow-icon");
  const slide = document.getElementById("slide");
  if (x.matches) {
    // If media query matches
    arrowIcon[0].onclick = () => {
        slide.style.transform = "translateX(0)";
      };
      arrowIcon[1].onclick = () => {
        slide.style.transform = "translateX(-380px)";
      };
      arrowIcon[2].onclick = () => {
        slide.style.transform = "translateX(-760px)";
      };
      arrowIcon[3].onclick = () => {
        slide.style.transform = "translateX(-1000px)";
      };
  } 
}

var x = window.matchMedia("(max-width: 576px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes


// animation 
const animation = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
animation.reveal('.banner-content, .products, .about, .categories, .review, footer', {delay: 200, origin: 'top'});
animation.reveal('.banner-img, .review-container', {delay: 200, origin: 'right'});
animation.reveal('.best-selling-content', {delay: 200, origin: 'left'});
