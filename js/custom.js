document.addEventListener("DOMContentLoaded", function() {
  new Splide("#image-slider", {
    arrows: true,
    autoplay: true,
    easing: "ease",
    gap: "1rem",
    interval: 3000,
    keyboard: false,
    lazyLoad: "sequental",
    padding: { left: "10%", right: "10%" },
    pagination: false,
    pauseOnHover: true,
    perPage: 2,
    type: "loop",
  }).mount();
});
