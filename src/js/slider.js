$('.slider-for-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav-js',
  prevArrow: $('slick-prev-js'),
  nextArrow: $('slick-next-js'),
});
$('.slider-nav-js').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for-js',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  centerPadding: '0px',
});
