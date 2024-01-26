const nav = document.querySelector(".navbar-nav");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".link-nav");

const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navToggleFunc();
  });
}

