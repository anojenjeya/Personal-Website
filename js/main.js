$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#hero' ).css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (scrollTop) / elementHeight;
    }
  });
});

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scrollTopBtn').fadeIn(); 
        } else { 
            $('#scrollTopBtn').fadeOut(); 
        } 
    }); 
    $('#scrollTopBtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});