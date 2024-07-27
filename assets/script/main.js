$(document).ready(function(){
  $('.voices__js-slide').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    dots: true,
    dotsClass: 'voices__dots'
  });
});