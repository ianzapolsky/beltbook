/*

*/

(function() {
  
  var menuExpanded = false;

  $(document).ready(function() {

    $('.nav-bar-collapse-button').click(function(ev) {
      ev.preventDefault();
      if (menuExpanded === false) {
        $('.collapse-menu').addClass('active');
        menuExpanded = true;
      } else {
        $('.collapse-menu').removeClass('active');
        menuExpanded = false;
      }
    });

    $('.button-flip').click(function() {
      $('.flipper').toggleClass('flipped');
    });

  });

}());
