$(function() {
  var $body = $('body');
  var $window = $(window);
  var header = $('.header');
  var headerHeight = header.outerHeight();
  var horizontalTabletWidth = 1024;
  var verticalTabletWidth = 768;
  scrollPrev = 0;

  // Mob menu open/close
  function toggleMobileMenu() {
    if ($body.hasClass('menu-mob-open')) {
      $body.removeClass();
    } else {
      $body.addClass('menu-mob-open');
    }
  }

  $('._menuBtn').on('click', toggleMobileMenu);

  // Сhanging the header when scrolling the page
  function changeHeaderBg() {
    if (window.innerWidth > horizontalTabletWidth) {
      if ($window.scrollTop() > headerHeight) {
        header.addClass('header-bg');
      } else {
        header.removeClass('header-bg');
      }
    }
  }

  changeHeaderBg();

  // Hide and show header when scrolling
  function headerHide() {
    var scrolled = $window.scrollTop();

    if ( scrolled > headerHeight && scrolled > scrollPrev ) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }
    scrollPrev = scrolled;
  }

  // Hide and show nav-btn when scrolling
  function navBtn() {
    if ($('.nav-btn').length) {
      var blockTop = $('.block-with-nav-btn').offset().top;
      $('.nav-btn')['fade' + ($window.scrollTop() >= (blockTop - headerHeight) ? 'In' : 'Out')](200);
    }
  }

  // Listening to the scroll
  $window.scroll(function(e) {
    changeHeaderBg();
    headerHide();
    navBtn();
  });

  // Active vacancy
  $('._vacancyTitle').click(function() {
    if (!$(this).is('.left-item-active')) {
      $('._vacancyTitle').removeClass('left-item-active');
      $(this).addClass('left-item-active');
    }
  })

  // Popups
  $('._vacancy-description').click(function() {
    if (window.innerWidth > verticalTabletWidth) {
      $body.removeClass('popup-vacancy-list-active');
      $body.addClass('popup-active popup-vacancy-active');
    } else {
      $body.addClass('popup-active popup-vacancy-active');
    }
  })

  $('._close').click(function() {
    if ($body.hasClass('popup-vacancy-list-active')) {
      $body.removeClass('popup-vacancy-active');
    }
    else if ($body.hasClass('menu-mob-open')) {
      $body.removeClass('popup-contact-us-active');
    } else {
      $body.removeClass();
    }
  })

  $('._vacancyTitle ').click(function() {
    if (window.innerWidth < verticalTabletWidth) {
      $body.addClass('popup-active popup-vacancy-list-active');
    }
  })

  $('._our-life').click(function() {
    $body.addClass('popup-active popup-gallery-active');
  })

  $('._contact-us').click(function() {
    $body.addClass('popup-active popup-contact-us-active');
  })

  $('._item-leader').click(function() {
    $body.addClass('popup-active popup-leader-active');
  })

  // Popup slider
  $('._close-link').click(function() {
    $body.removeClass();
    $body.addClass('popup-vacancy-list-close');
    setTimeout(function() {
      $body.removeClass();
    }, 300);
  })

  // Send form
  function isEmpty(input) {
    if ($(input).val().trim() === '') {
      $(input).addClass('error');
    } else {
      $(input).removeClass('error');
    }
  }

  function isEmail(email) {
    var regex = /.+?\@.+/g;
    return regex.test(email.val());
  }

  (function() {
    var formItem = $('.send-form-item');
    var email = $('.send-form__email');
    var company = $('.send-form__company');

    $('._send-form-button').on('click', function (e) {
      e.preventDefault();
      formItem.each(function () {
        isEmpty(this);
      });
      if ( !isEmail(email) ) {
        email.addClass('error');
      }
      if ($('.error').length) {
        e.stopPropagation();

        return false;
      }
    });
  })();
});
