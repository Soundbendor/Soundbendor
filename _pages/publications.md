---
layout: page
permalink: /publications/
title: Publications
description: Papers by Soundbendor students and Dr. Donnelly since the lab began in 2019. Filter by theme.
nav: true
nav_order: 2
---

{% include tag_filter.liquid %}

<div class="publications">
{% bibliography --file publications %}
</div>

Earlier work by Dr. Donnelly is on [his page]({{ '/donnelly/' | relative_url }}#earlier-work).
