(function($){
  $(function(){ 
      // scroll is still position
      var scroll = $(document).scrollTop();
      var headerHeight = $('.s-header').outerHeight();
      //console.log(headerHeight);
      
      $(window).scroll(function() {
        // scrolled is new position just obtained
        var scrolled = $(document).scrollTop();
                
        // optionally emulate non-fixed positioning behaviour
      
        if (scrolled > headerHeight){
          $('.s-header').addClass('off-canvas');
        } else {
          $('.s-header').removeClass('off-canvas');
        }

          if (scrolled > scroll){
               // scrolling down
           $('.s-header').removeClass('fixed');
            } else {
            //scrolling up
            $('.s-header').addClass('fixed');
          }       
         
        scroll = $(document).scrollTop(); 
       });
    
    
  });
})(jQuery);  