(function($) {
  $(document).ready(function() {

    $("ul.switcher li:nth-child(1)").click(function() {
      $('body').css('background', 'url(http://i.imgur.com/DYm1aqo.jpg)');
    });

    $("ul.switcher li:nth-child(2)").click(function() {
      $('body').css('background', 'url(http://i.imgur.com/pWNgnmO.jpg)');
    });

    $("ul.switcher li:nth-child(3)").click(function() {
      $('body').css('background', 'url(http://i.imgur.com/09ierta.jpg)');
    });

    $("ul.switcher li:nth-child(4)").click(function() {
      $('body').css('background', 'url(http://i.imgur.com/Ve1wAfQ.jpg)');
    });

  });
})(jQuery);
