---
layout: page
permalink: /projects/
title: Projects
description: Student research projects and capstones, with videos, slides and posters. Projects that led to a paper or thesis link to it.
nav: true
nav_order: 4
---

{% include tag_filter.liquid %}

{% assign years = site.data.projects | map: "year" | uniq %}
{% for y in years %}
<section class="sb-group">
<h2 class="sb-year">{{ y }}</h2>
<div class="sb-project-grid">
{% assign items = site.data.projects | where: "year", y %}
{% for pr in items %}{% include project_card.liquid pr=pr %}{% endfor %}
</div>
</section>
{% endfor %}
