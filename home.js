
// slider crousel
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel)


// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
  
// })




// for menu active &  navigation
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation_bar');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}




// for adding active class in all lists
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }

}


// home navbart// OwlcarouseljQuery(document).ready(function($) {
    jQuery(document).ready(function($) {
        var $owl = $('.owl-carousel');
          $owl.children().each( function( index ) {
            jQuery(this).attr( 'data-position', index ); 
          });
          
          $owl.owlCarousel({
            center: true,
            nav:true,
            loop: true,
            items: 5,
          margin:10,
            navText: ["<i class='fa arrow-circle-left'><</i>","<i class='fa arrow-right'>></i>"],
            responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
           }
          });
        $(document).on('click', '.item', function() {
          $owl.trigger('to.owl.carousel', $(this).data( 'position' ) ); 
        });
              });



            //   form validation
            // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()











// card hover

// $(".hover").mouseleave(
//     function() {
//       $(this).removeClass("hover");
//     }
//   );



// testemonials

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});




// preloader

