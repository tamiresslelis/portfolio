$(document).ready(function() {
  $('.nav-toggle').click(function(event) {
    $('.nav').slideToggle(200);
    $('.navbar').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.nav li a').click(function(event) {
    if (parseInt($(window).width()) < 550) {
      $('.nav').slideToggle(200);
      $('.navbar').toggleClass('open');
      $('.nav-toggle').toggleClass('open');
    }
  });
});
