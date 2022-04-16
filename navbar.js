const navbarWraper = document.querySelector(".navbar-wraper");
const navToggleButton = document.querySelector(".nav-toggle-button");
const navSpace = document.querySelector(".nav-space");

const navToggle = () => {
    navbarWraper.classList.toggle("nav-open");
    navSpace.classList.toggle("nav-open");
}

navToggleButton.addEventListener("click", navToggle);