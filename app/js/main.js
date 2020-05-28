$(function(){

    $(".rate-star").rateYo({
        rating: 4.6,
        starWidth: "14px",
        readOnly: true
      });


    var mixer = mixitup('.product__inner-box');

    $('.slaider-content').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
        appendArrows: '.slaider-arrows',

      });


    
});