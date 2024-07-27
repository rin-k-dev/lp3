$(document).ready(function(){
  $('.voices__js-slide').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    dots: true,
    dotsClass: 'voices__dots',
    respondTo: 'slider',
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          variableWidth: true
        }
      }
    ]
  });
});