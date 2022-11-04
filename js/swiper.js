$('.slider').slick({
   dots: false,
   arrows: false,
   infinite: false,
   speed: 300,
   slidesToShow: 2,
   slidesToScroll: 1,
   variableWidth: true,
   responsive: [
     {
      
     },
     {
       breakpoint: 700,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
})
