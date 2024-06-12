(function () {
  var container = document.getElementById("header-logo");
  var logo = "https://assets4.lottiefiles.com/private_files/lf30_5wlk7adj.json";
  // var logo = "./json/logo-animation-wink.json"; Will need to be replaced after the project gets to the server
  var logoBlue = "https://assets8.lottiefiles.com/private_files/lf30_blzth5uo.json";
  // var logoBlue = "./json/logo-animation-wink-blue.json"; Will need to be replaced after the project gets to the server
  var logoGreen = "https://assets7.lottiefiles.com/private_files/lf30_jcrmdo2p.json";
  // var logoGreen = "./json/logo-animation-wink-green.json"; Will need to be replaced after the project gets to the server
  var url = window.location.pathname;
  var logoPath = (url.search('/newsroom') != -1)
    ? logoBlue : (url.search('/career') != -1)
      ? logoGreen : logo;

  var animation = lottie.loadAnimation({
    container: container,
    path: logoPath,
    renderer: "svg",
    loop: false,
    autoplay: false,
  });

  animation.goToAndStop(0, true);

  setInterval(function () {
    animation.playSegments([1, 20], true);
  }, 60000);
}());
