(function () {
  "use strict";

  document.querySelector("html").classList = "js";

  var swiper = new Swiper(".vehicle-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".vehicle-pagination",
      clickable: false,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".featured-swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".featured-pagination1",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".featured-swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".featured-pagination2",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".review-pagination",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Scrollspy

  window.addEventListener("scroll", () => {   //Serve pra quando eu descer a tela, a nav ficar da cor da atual seção que estou
    var windo = window.pageYOffset + 350;
    if (vehicles.offsetTop <= windo && services.offsetTop > windo) {   // Pra afetar o nav Dishes, uso "dishes" e o nome da próxima nav que no caso aqui é o "about"

      document.querySelector(".homee").removeAttribute("id", "active")
      document.querySelector(".vehicless").setAttribute("id", "active")
      document.querySelector(".servicess").removeAttribute("id", "active")
      document.querySelector(".featuredd").removeAttribute("id", "active")
      document.querySelector(".reviewss").removeAttribute("id", "active")
      document.querySelector(".contactt").removeAttribute("id", "active")
    }

    else if (services.offsetTop <= windo && featured.offsetTop > windo) {

      document.querySelector(".homee").removeAttribute("id", "active")
      document.querySelector(".vehicless").removeAttribute("id", "active")
      document.querySelector(".servicess").setAttribute("id", "active")
      document.querySelector(".featuredd").removeAttribute("id", "active")
      document.querySelector(".reviewss").removeAttribute("id", "active")
      document.querySelector(".contactt").removeAttribute("id", "active")
    }

    else if (featured.offsetTop <= windo && reviews.offsetTop > windo) {

      document.querySelector(".homee").removeAttribute("id", "active")
      document.querySelector(".vehicless").removeAttribute("id", "active")
      document.querySelector(".servicess").removeAttribute("id", "active")
      document.querySelector(".featuredd").setAttribute("id", "active")
      document.querySelector(".reviewss").removeAttribute("id", "active")
      document.querySelector(".contactt").removeAttribute("id", "active")
    }

    else if (reviews.offsetTop <= windo && contact.offsetTop > windo) {

      document.querySelector(".homee").removeAttribute("id", "active")
      document.querySelector(".vehicless").removeAttribute("id", "active")
      document.querySelector(".servicess").removeAttribute("id", "active")
      document.querySelector(".featuredd").removeAttribute("id", "active")
      document.querySelector(".reviewss").setAttribute("id", "active")
      document.querySelector(".contactt").removeAttribute("id", "active")
    }

    else if (contact.offsetTop <= windo) {

      document.querySelector(".homee").removeAttribute("id", "active")
      document.querySelector(".vehicless").removeAttribute("id", "active")
      document.querySelector(".servicess").removeAttribute("id", "active")
      document.querySelector(".featuredd").removeAttribute("id", "active")
      document.querySelector(".reviewss").removeAttribute("id", "active")
      document.querySelector(".contactt").setAttribute("id", "active")
    }

    else if (home.offsetTop <= windo) {

      document.querySelector(".homee").setAttribute("id", "active")
      document.querySelector(".vehicless").removeAttribute("id", "active")
      document.querySelector(".servicess").removeAttribute("id", "active")
      document.querySelector(".featuredd").removeAttribute("id", "active")
      document.querySelector(".reviewss").removeAttribute("id", "active")
      document.querySelector(".contactt").removeAttribute("id", "active")
    }
  })
})()