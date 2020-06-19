const body = document.querySelector("body"),
  mobileMenu = document.querySelector(".mobile-menu"),
  mobileButtonSearch = document.querySelector(".mobile-button--search"),
  mobileButtonMenu = document.querySelector(".mobile-button--menu");

const actorsTitle = document.getElementById("actors-title"),
  creatorsTitle = document.getElementById("creators-title"),
  actors = document.getElementById("actors"),
  creators = document.getElementById("creators");

mobileButtonSearch.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--active");
  body.classList.toggle("no-scroll");
});

mobileButtonMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--active");
  body.classList.toggle("no-scroll");
});

actorsTitle.addEventListener('click', () => {
  actorsTitle.classList.toggle("section-title--active");
  creatorsTitle.classList.toggle("section-title--active");
  actors.classList.toggle("tabs-content--active");
  creators.classList.toggle("tabs-content--active");
})

creatorsTitle.addEventListener('click', () => {
  creatorsTitle.classList.toggle("section-title--active");
  actorsTitle.classList.toggle("section-title--active");
  creators.classList.toggle("tabs-content--active");
  actors.classList.toggle("tabs-content--active");
})


// Swiper
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
