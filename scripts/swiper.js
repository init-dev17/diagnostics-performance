const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
        enabled: true,
        delay: 5500,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });