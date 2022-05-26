$('.slider-for-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav-js',
  prevArrow: $('.slick-prev-js'),
  nextArrow: $('.slick-next-js'),
});
$('.slider-nav-js').slick({
  mobileFirst: true,
  infinity: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for-js',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  focusOnSelect: true,
  centerlMode: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
  ],
});
