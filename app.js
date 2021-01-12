$(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });

  $('.autoplay').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });
});
