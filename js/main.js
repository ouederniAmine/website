function main() {
  (function () {
    "use strict";

    $("a.page-scroll").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 50,
            },
            900
          );
          return false;
        }
      }
    });

    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80,
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });

    // Nivo Lightbox
    $(".portfolio-item a").nivoLightbox({
      effect: "slideDown",
      keyboardNav: true,
    });
  })();
}
main();

var Bilinga = {
  title: "Bilinga",
  description:
    "Freshly cut Bilinga is yellow to orange-yellow, turning to an orange-red to golden brown colour. The 30-50 mm thick sapwood is clearly distinguishable and is pale yellow to white.<br> <br> Bilinga is listed in the Dutch norm NEN 5493 'Quality Requirements For Hardwoods In Road Construction Works, Hydraulic Engineering Works And Other Structural Applications’.<br>  <br>Bilinga is used for a diversity of construction purposes, for both inside and outside, fendering, jetties, bridges, bridge decks",
  mainImg: "img/wood/BilingaMain.jpg",
  img1: "imgwood\240px-Bilinga_kruisdraad.jpg",
  img2: "imgwood\bilinga.jpeg",
  img3: "imgwood\blinga-thumb.jpg",
};

$(function () {
  if (document.getElementById("bilinga") != null) {
    document.getElementById("bilinga").addEventListener("click", () => {
      sessionStorage.setItem("title", Bilinga.title);
      sessionStorage.setItem("description", Bilinga.description);
      sessionStorage.setItem("mainImg", Bilinga.mainImg);
      sessionStorage.setItem("img1", Bilinga.img1);
      sessionStorage.setItem("img2", Bilinga.img2);
      sessionStorage.setItem("img3", Bilinga.img3);
      window.location.href = "product.html";
    });
  }
});
