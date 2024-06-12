$(function() {
  var $mapWrapper = $('.map-slider-wrapper');
  var padding = 90;
  var maxMarginLeft = $('.map-slide__1').outerWidth() * 2 + padding - $(window).width();

  $('._circle').click(function(e) {
    if (e.target.classList.contains('circle__1')) {
      $mapWrapper.animate({scrollLeft: '0'}, 500);
    } else {
      $mapWrapper.animate({scrollLeft: `${maxMarginLeft}`}, 500);
    }
  })

  $mapWrapper.on( 'scroll', function(){
    var classActive = 'active';
    var halfScrollLeft = maxMarginLeft / 2;

    $('._circle').removeClass(classActive);

    if ($mapWrapper.scrollLeft() > halfScrollLeft) {
      $('.circle__2').addClass(classActive);
    } else {
      $('.circle__1').addClass(classActive);
    }
  });
});
