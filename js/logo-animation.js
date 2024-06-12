(function () {
  var container = document.getElementById("header-logo");
  var state = 'play';
  var srollHeight = 150;

  var animation = lottie.loadAnimation({
    container: container,
    path: "https://assets7.lottiefiles.com/private_files/lf30_pwsepe6s.json",
    // path: "./json/logo-animation.json", Will need to be replaced after the project gets to the server
    renderer: "svg",
    loop: false,
    autoplay: false,
  });

  animation.goToAndStop(11, true);

  window.addEventListener("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (($(window).scrollTop() > srollHeight) && (state === 'play')) {
      animation.playSegments([11, 18], true);
      state = 'pause';
    }
    if (($(window).scrollTop() < srollHeight) && (state === 'pause')) {
      animation.playSegments([1, 11], true);
      state = 'play';
    }
  })

  setInterval(function () {
    if (state === 'pause') {
      animation.playSegments([18, 39], true);
    };
  }, 60000);
}());
