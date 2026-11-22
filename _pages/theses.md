---
layout: page
permalink: /theses/
title: Theses
nav: true
nav_order: 3
---

{% include tag_filter.liquid %}

<div class="publications">

<h2 class="sb-section">M.S. theses</h2>
{% bibliography --file theses-ms --group_by none %}

<h2 class="sb-section">M.S. projects</h2>
{% bibliography --file theses-msproject --group_by none %}

<h2 class="sb-section">Honors theses</h2>
{% bibliography --file theses-honors --group_by none %}

</div>
