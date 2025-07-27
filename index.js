
  $(".hamburger").click(function () {
    $("#navMenu").toggleClass("show-nav");
  });


  $('.fill').each(function () {
    var elementTop = $(this).offset().top;
    var viewportBottom = $(window).scrollTop() + $(window).height();

    if (elementTop < viewportBottom - 50 && !$(this).hasClass("animated")) {
      var percent = $(this).attr("data-percent");
      $(this).css("width", percent);
      $(this).addClass("animated");
    }
  });

  