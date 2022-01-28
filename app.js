// making variables to make the code easier
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const icon= document.querySelector(".icon");
const closeMenu= document.querySelector(".fas.fa-times-circle");
const openMenu = document.querySelector(".fas.fa-bars");
// toggling the menu when clicking the button
function toggleMenu() {
  if (menu.classList.contains(".showMenu")) {
    menu.classList.remove(".showMenu");
    menu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    menu.classList.add(".showMenu");
    menu.style.dislay = "flex";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
}

icon.addEventListener("click", toggleMenu);