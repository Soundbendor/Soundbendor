// Theme-tag filter for Publications, Theses, Projects and People.
// Markup: a <div class="sb-filter"> of <a class="sb-chip" data-tag="..."> chips (data-tag="" = All),
// and filterable items carrying data-tags="Tag A|Tag B".
// The chosen tag is kept in ?tag=..., so chips on entries (href="?tag=X") and shared links work.
(function () {
  function apply(tag) {
    document.querySelectorAll("[data-tags]").forEach(function (el) {
      var tags = (el.getAttribute("data-tags") || "").split("|");
      var item = el.closest(".publications li") || el;
      item.classList.toggle("sb-hidden", !!tag && tags.indexOf(tag) === -1);
    });
    // hide year headings (and their lists) that have nothing left to show
    document.querySelectorAll(".publications h2.bibliography").forEach(function (h) {
      var list = h.nextElementSibling;
      if (!list) return;
      var visible = list.querySelectorAll("li:not(.sb-hidden)").length;
      h.classList.toggle("sb-hidden", visible === 0);
      list.classList.toggle("sb-hidden", visible === 0);
    });
    // hide People/Projects sections that have nothing left to show
    document.querySelectorAll(".sb-group").forEach(function (g) {
      var items = g.querySelectorAll("[data-tags]");
      var shown = g.querySelectorAll("[data-tags]:not(.sb-hidden)");
      g.classList.toggle("sb-hidden", items.length > 0 && shown.length === 0);
    });
    document.querySelectorAll(".sb-filter .sb-chip").forEach(function (c) {
      c.classList.toggle("active", (c.getAttribute("data-tag") || "") === (tag || ""));
    });
  }

  function current() {
    return new URLSearchParams(window.location.search).get("tag") || "";
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target.closest(".sb-chip, .sb-tag");
    if (!a || !document.querySelector(".sb-filter")) return;
    ev.preventDefault();
    var tag = a.getAttribute("data-tag") || "";
    if (a.classList.contains("sb-tag") && tag === current()) tag = "";
    var url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tag);
    else url.searchParams.delete("tag");
    history.replaceState(null, "", url);
    apply(tag);
  });

  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".sb-filter")) apply(current());
  });
})();
