import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__userInfo");

window.$(document).ready(function() {
  console.log("ready");
});
toggleBtn.addEventListener("click", () => {
  console.log("cliekd");
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
