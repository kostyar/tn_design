// Сonnecting the mPageScroll2id function from the PageScroll2id library for 'nav-btn'
$(window).on('load', function () {
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset: 120
  });
});
