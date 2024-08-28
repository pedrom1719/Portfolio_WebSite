$(document).ready(function () {
  $(".nav-item").click(function () {
    $(".active-nav").removeClass("active-nav");
    $(this).addClass("active-nav");
  });

  $(".navigation-trigger").click(function () {
    $(".navigation").addClass("nav-on-screen");
  });

  $(".navigation-trigger-menu").click(function () {
    $(".navigation").toggleClass("nav-on-screen");
  });

  $(".close-nav").click(function () {
    $(this).parents(".navigation").removeClass("nav-on-screen");
  });

  $("body").on("click", ".mobile-menu-icon", function () {
    $(".mobile-sidemenu").addClass("sidemenu-display");
  });

  $("body").on("click", ".sidemenu-title", function () {
    $(".mobile-sidemenu").removeClass("sidemenu-display");
  });

  const NavTimeout = setTimeout(ActiveNav, 3000);

  function ActiveNav() {
    $(".navigation").addClass("nav-on-screen");
  }
});
