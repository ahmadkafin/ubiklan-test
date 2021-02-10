var bigimage = $("#big");
var thumbs = $("#thumbs");

var syncedSecondary = true;
bigimage
  .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
    ],
  })
  .on("changed.owl.carousel");

thumbs.on("click", ".item", function (e) {
  e.preventDefault();
  var number = $(this).index();
  bigimage.data("owl.carousel").to(number, 300, true);
});

$(".dropdown").hover(function () {
  $(".dropdown-menu").toggle();
});
