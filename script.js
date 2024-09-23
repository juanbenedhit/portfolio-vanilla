// sticky navbar & hamburger menu
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// hamburger menu
document.getElementById("nav-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".custom-navbar .nav").classList.toggle("active");
});

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
