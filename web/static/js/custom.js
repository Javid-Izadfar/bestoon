$(document).ready(function(){
   function Navbartoggler(){
      if ($(this).scrollTop() > 1) {
         $('#header_navbar').addClass('sticky-navbar grey-darken-4 elevate-2').removeClass('super-thick-navbar')
      } else {
         $('#header_navbar').removeClass('sticky-navbar grey-darken-4 elevate-2').addClass('super-thick-navbar')
      }
   }
   $(window).scroll(function() {
      Navbartoggler()
   })
   Navbartoggler()
})

$(document).ready(function(){
   $('.joqd.input').each(function(){
      $(this).input({
         openLabelColor: 'green-darken-1',
         openInputColor: 'green'
      });
   })
})
