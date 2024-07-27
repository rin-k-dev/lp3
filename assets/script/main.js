$(document).ready(function(){
  $('.voices__js-slide').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    dots: true,
    dotsClass: 'voices__dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });
});