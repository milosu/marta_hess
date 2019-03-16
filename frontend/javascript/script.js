$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("bg-light");
    } else {
      $(".navbar").removeClass("bg-light");
    }
  });
});

