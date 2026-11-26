// Explore page (_pages/explore.html): research-area filter for the Demos grid, and the sticky jump bar's offset
// below the fixed navbar. Without JS every demo shows and the bar sits below the navbar's usual height.
(function () {
  "use strict";
  function start() {
    var nav = document.getElementById("navbar");
    var bar = document.querySelector(".sb-x-jump");
    function offset() {
      if (nav && bar) bar.style.top = nav.offsetHeight + "px";
    }
    offset();
    window.addEventListener("resize", offset);

    var chips = Array.prototype.slice.call(document.querySelectorAll(".sb-x-chip"));
    var cards = Array.prototype.slice.call(document.querySelectorAll(".sb-x-demo"));
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var area = c.getAttribute("data-area");
        chips.forEach(function (o) { o.setAttribute("aria-pressed", String(o === c)); });
        cards.forEach(function (d) { d.hidden = !!area && d.getAttribute("data-area") !== area; });
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
