---
layout: page
title: Home
permalink: /
description: Machine understanding of sound and music
nav: false
announcements:
  limit: 3
---

<img class="img-fluid only-light" src="{{ '/assets/img/logo/soundbendor-logo.png' | relative_url }}" alt="Soundbendor Lab" style="max-width: 420px; margin: 0 auto 1.5rem; display: block;">
<img class="img-fluid only-dark" src="{{ '/assets/img/logo/soundbendor-logo-dark.png' | relative_url }}" alt="Soundbendor Lab" style="max-width: 420px; margin: 0 auto 1.5rem; display: block;">

The Soundbendor Lab is a research group in the School of Electrical Engineering and Computer Science at Oregon State University.
Our interdisciplinary research focuses on a computational understanding of sound and music using artificial intelligence and deep learning.
We work on computational musicology, music emotion, acoustic analysis and bioacoustics, with students in Corvallis, in Bend (OSU-Cascades) and on Ecampus.

### Research themes

Each theme links to the papers, theses and projects tagged with it.

<div class="sb-tags">
{%- for t in site.data.tags -%}
  <a class="sb-tag" data-tag="{{ t }}" href="{{ '/publications/' | relative_url }}?tag={{ t | url_encode }}">{{ t }}</a>
{%- endfor -%}
</div>

### News

{% include news.liquid limit=true %}

<div class="sb-band">
  <strong>Join us.</strong> We welcome students with backgrounds in music and computer science, from undergraduate research to the Ph.D.
  See <a href="{{ '/join/' | relative_url }}">how to get involved</a>.
</div>
