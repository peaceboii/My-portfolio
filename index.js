
  $(".hamburger").click(function () {
    $("#navMenu").toggleClass("show-nav");
  });
  $(document).click(function () {
    if (!$(event.target).closest(".hamburger, #navMenu").length) {
      $("#navMenu").removeClass("show-nav");
    }
  });
