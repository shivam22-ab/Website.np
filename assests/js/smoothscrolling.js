$(document).ready(function(){
    $('a[href*="#"]').on('click',function(){
        $('html, body').animate({
          scrollTop : $($(this).attr('href')).offset().top,
        },
          500, 
          'linear'
        );
      });
});
