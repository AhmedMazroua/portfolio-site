//sticks navbar to top of screen when scrolling
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

//toggles page when in mobile setting
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// clickable div
function openWebsite(url) {
  window.open(url, "_blank");
}
//resets submit button
document.querySelector("contact-form").onsubmit = (e) => {
  e.target.submit();
  e.target.reset();
  return false;
};
