import { addClass, removeClass } from "./utils-class";

const dropdownId = document.getElementById("dropdown");
dropdownId.addEventListener("click", function () {
  const dropdownMenuId = document.getElementById("dropdown-menu");
  if (dropdownMenuId.className.indexOf("opacity-0") > -1) {
    addClass(dropdownMenuId, "opacity-100 z-30 block");
    removeClass(dropdownMenuId, "opacity-0 md:invisible hidden");
  } else {
    addClass(dropdownMenuId, "opacity-0 md:invisible hidden");
    removeClass(dropdownMenuId, "opacity-100 z-30 block");
  }
});
