const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navDropdown = primaryNav.querySelector(".header__nav--dropdown");

navToggle.addEventListener("click", toggleNav);

function toggleNav() { 
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true)
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  } 
}

function closeNav(event) {
  const isOutside = !event.target.closest("header");
  if (isOutside) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
}

window.addEventListener("click", closeNav);

function toggleNavDropdown() {
  const navDropdownMenu = event.currentTarget.querySelector("ul");
  const isSelected = navDropdown.getAttribute("aria-selected");
  if (isSelected === "true") {
    navDropdown.setAttribute("aria-selected", "false");
  } else {
    navDropdown.setAttribute("aria-selected", "true");
  }
}

navDropdown.addEventListener("click", toggleNavDropdown);

function closeNavDropdown(event) {
  const isOutside = !event.target.closest("header");
  if (isOutside) {
    navDropdown.setAttribute("aria-selected", "false"); 
  }
}

window.addEventListener("click", closeNavDropdown);