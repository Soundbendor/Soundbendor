// Home carousels ("Featured Demo", "Just for fun"): one slide at a time, arrows, dots, auto-advance.
// Markup: _pages/about.md (.sb-carousel > .sb-carousel-track > .sb-slide) + _includes/sb_carousel_controls.liquid.
// Slides are stacked in one grid cell (CSS), so the tallest sets the height and nothing jumps.
// Auto-advance every data-interval ms; pauses on mouse hover, keyboard focus, a hidden tab, or the pause button.
// prefers-reduced-motion: starts paused (arrows and dots still work). Without JS only the first slide shows.
// Class names toggled here (kept literally so PurgeCSS sees them): is-active, is-paused, fa-pause, fa-play.
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll(".sb-slide"));
    var bar = root.querySelector(".sb-carousel-controls");
    if (slides.length < 2 || !bar) return;
    var track = root.querySelector(".sb-carousel-track");
    var dotsBox = bar.querySelector(".sb-carousel-dots");
    var pauseBtn = bar.querySelector(".sb-carousel-pause");
    var pauseIcon = pauseBtn.querySelector("i");
    var label = root.getAttribute("data-label") || "slide";
    var interval = parseInt(root.getAttribute("data-interval"), 10) || 10000;
    var cur = 0, timer = null, userPaused = reduce, hover = false, focused = false;

    var dots = slides.map(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sb-carousel-dot";
      b.setAttribute("aria-label", "Show " + label + " " + (i + 1) + " of " + slides.length);
      b.addEventListener("click", function () { go(i, true); });
      dotsBox.appendChild(b);
      return b;
    });

    function go(i, byUser) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("is-active", k === cur); });
      dots.forEach(function (d, k) {
        d.classList.toggle("is-active", k === cur);
        if (k === cur) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
      });
      if (byUser) restart();
    }

    function restart() {
      clearTimeout(timer);
      timer = null;
      var run = !userPaused && !hover && !focused;
      track.setAttribute("aria-live", run ? "off" : "polite");
      root.classList.toggle("is-paused", userPaused);
      if (run) timer = setTimeout(tick, interval);
    }

    function tick() {
      if (document.hidden) { timer = setTimeout(tick, interval); return; }
      go(cur + 1, false);
      restart();
    }

    function setPaused(p) {
      userPaused = p;
      pauseIcon.className = p ? "fa-solid fa-play" : "fa-solid fa-pause";
      pauseBtn.setAttribute("aria-label", p ? "Resume automatic scrolling" : "Pause automatic scrolling");
      restart();
    }

    bar.querySelector(".sb-carousel-prev").addEventListener("click", function () { go(cur - 1, true); });
    bar.querySelector(".sb-carousel-next").addEventListener("click", function () { go(cur + 1, true); });
    pauseBtn.addEventListener("click", function () { setPaused(!userPaused); });

    // hover pause for a real mouse only (a tap on a touch screen never sends the matching "leave")
    root.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") { hover = true; restart(); } });
    root.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") { hover = false; restart(); } });
    // pause while the keyboard is inside the carousel (not after a mouse click on an arrow)
    root.addEventListener("focusin", function (e) {
      var t = e.target;
      focused = !!(t && t.matches && t.matches(":focus-visible"));
      restart();
    });
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) { focused = false; restart(); }
    });

    // swipe on touch screens
    var x0 = null;
    track.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    bar.hidden = false;
    go(0, false);
    setPaused(userPaused);
  }

  function start() {
    Array.prototype.forEach.call(document.querySelectorAll(".sb-carousel"), init);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
