$(document).ready(function () {
  new WOW().init();
  var b = 0;
  function header_animation() {
    $(".cooling-head").animate({ width: "100%" }, 1800);
    setTimeout(function () {
      $(".cooling-head").css("border", "none");
    }, 1500);
    b = 1;
  }
  header_animation();
  
});
