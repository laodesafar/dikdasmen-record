import { addClass, removeClass } from "./utils-class";

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu.className.indexOf("opacity-0") > -1) {
    addClass(dropdownMenu, "opacity-100 z-30 block");
    removeClass(dropdownMenu, "opacity-0 md:invisible hidden");
  } else {
    addClass(dropdownMenu, "opacity-0 md:invisible hidden");
    removeClass(dropdownMenu, "opacity-100 z-30 block");
  }
});

dropdown.addEventListener("mouseenter", (e) => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu.className.indexOf("opacity-0") > -1) {
    addClass(dropdownMenu, "opacity-100 z-30 block");
    removeClass(dropdownMenu, "opacity-0 md:invisible hidden");
  }
});
dropdown.addEventListener("mouseleave", (e) => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (!dropdownMenu.className.indexOf("opacity-0") > -1) {
    addClass(dropdownMenu, "opacity-0 md:invisible hidden");
    removeClass(dropdownMenu, "opacity-100 z-30 block");
  }
});
