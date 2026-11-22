---
layout: page
title: Soundbendor Lab
permalink: /
description: Machine understanding of sound and music · School of Electrical Engineering and Computer Science, Oregon State University
nav: false
---

<img class="sb-home-logo only-light" src="{{ '/assets/img/logo/soundbendor-logo.png' | relative_url }}" alt="">
<img class="sb-home-logo only-dark" src="{{ '/assets/img/logo/soundbendor-logo-dark.png' | relative_url }}" alt="">

The Soundbendor Lab is a research group in the School of Electrical Engineering and Computer Science at Oregon State University.
Our interdisciplinary research focuses on a computational understanding of sound and music using artificial intelligence and deep learning.
We work on computational musicology, music emotion, acoustic analysis and bioacoustics, with students in Corvallis, in Bend (OSU-Cascades) and on Ecampus.

<div class="sb-home-cta">
  <a class="sb-cta-primary" href="{{ '/research/' | relative_url }}">Explore our research</a>
  <a class="sb-cta-secondary" href="{{ '/join/' | relative_url }}">Join the lab</a>
</div>

## Research themes

Browse publications by topic:

<div class="sb-tags">
{%- for t in site.data.tags -%}
  <a class="sb-tag" data-tag="{{ t }}" href="{{ '/publications/' | relative_url }}?tag={{ t | url_encode }}">{{ t }}</a>
{%- endfor -%}
</div>

## News

{% include sb_news.liquid limit=3 student=true %}

<p class="sb-more-news"><a href="{{ '/news/' | relative_url }}">All news <i class="fa-solid fa-arrow-right"></i></a></p>

<div class="sb-band">
  <strong>Join us.</strong> We welcome students with backgrounds in music and computer science, from undergraduate research to the Ph.D.
  See <a href="{{ '/join/' | relative_url }}">how to get involved</a>.
</div>
