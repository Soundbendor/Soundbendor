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
    // hide collapsible year groups that have nothing left to show
    document.querySelectorAll(".publications details.sb-year").forEach(function (d) {
      d.classList.toggle("sb-hidden", d.querySelectorAll("li:not(.sb-hidden)").length === 0);
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
    // result count and clear link
    var status = document.querySelector(".sb-filter-status");
    if (status) {
      var n = 0;
      document.querySelectorAll("[data-tags]").forEach(function (el) {
        var item = el.closest(".publications li") || el;
        if (!item.classList.contains("sb-hidden")) n++;
      });
      status.hidden = !tag;
      status.querySelector(".sb-filter-count").textContent =
        n + (n === 1 ? " item" : " items") + " tagged \u201c" + tag + "\u201d";
    }
    document.querySelectorAll(".sb-filter .sb-chip").forEach(function (c) {
      c.classList.toggle("active", (c.getAttribute("data-tag") || "") === (tag || ""));
    });
  }

  function current() {
    return new URLSearchParams(window.location.search).get("tag") || "";
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target.closest(".sb-chip, .sb-tag, .sb-filter-clear");
    if (!a || !document.querySelector(".sb-filter")) return;
    ev.preventDefault();
    var tag = a.classList.contains("sb-filter-clear") ? "" : a.getAttribute("data-tag") || "";
    if (a.classList.contains("sb-tag") && tag === current()) tag = "";
    var url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tag);
    else url.searchParams.delete("tag");
    history.replaceState(null, "", url);
    apply(tag);
  });

  // .sb-year-toggle: wrap each year heading and its list in a <details>, open by default
  function wrapYears() {
    document.querySelectorAll(".sb-year-toggle h2.bibliography").forEach(function (h) {
      var list = h.nextElementSibling;
      if (!list || list.tagName !== "OL") return;
      var d = document.createElement("details");
      d.className = "sb-year";
      h.classList.add("sb-collapse-h");
      d.open = true;
      var sum = document.createElement("summary");
      h.parentNode.insertBefore(d, h);
      sum.appendChild(h);
      d.appendChild(sum);
      d.appendChild(list);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector(".sb-filter")) return;
    wrapYears();
    apply(current());
  });
})();
