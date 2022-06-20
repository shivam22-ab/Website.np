$(document).ready(function (){
    function preLoader(){
      $(".bg-preloader").fadeOut(3000);
    }
    preLoader();
    $("#bar-button").click(function (){
      $(".mobile-navigation").show(200);
      $("#cross-button").show(200);
      $("#bar-button").hide(200);
    });
    $("#cross-button").click(function (){
      $(".mobile-navigation").hide(200);
      $("#cross-button").hide(200);
      $("#bar-button").show(200);
    });
  });