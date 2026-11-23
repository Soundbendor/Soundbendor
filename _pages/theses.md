---
layout: page
permalink: /theses/
title: Theses
nav: true
nav_order: 3
---

{% include tag_filter.liquid %}

<div class="publications">

<details class="sb-year" open>
<summary><h2 class="sb-collapse-h">M.S. Theses</h2></summary>
{% bibliography --file theses-ms --group_by none %}
</details>

<details class="sb-year" open>
<summary><h2 class="sb-collapse-h">M.S. Projects</h2></summary>
{% bibliography --file theses-msproject --group_by none %}
</details>

<details class="sb-year" open>
<summary><h2 class="sb-collapse-h">Honors Theses</h2></summary>
{% bibliography --file theses-honors --group_by none %}
</details>

</div>
