$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#hero' ).css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 1 - (scrollTop) / elementHeight;
    }
  });
});