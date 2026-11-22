---
layout: page
title: Soundbendor Lab
permalink: /
nav: false
---

<img class="sb-home-logo only-light" src="{{ '/assets/img/logo/soundbendor-logo.png' | relative_url }}" alt="">
<img class="sb-home-logo only-dark" src="{{ '/assets/img/logo/soundbendor-logo-dark.png' | relative_url }}" alt="">

<p class="sb-tagline">Machine understanding of sound and music</p>

<p class="sb-intro">The <strong class="sb-hl-osu">Soundbendor</strong> Lab is a research group in the
<a class="sb-hl-eecs" href="https://engineering.oregonstate.edu/EECS">School of Electrical Engineering and Computer Science</a> at
<a class="sb-hl-osu" href="https://oregonstate.edu/">Oregon State University</a>.
We use artificial intelligence and deep learning to study sound and music, drawing on computer science, signal processing, and musicology.
Our interdisciplinary research explores computational musicology, music emotion recognition, acoustic analysis, and bioacoustics,
engaging undergraduate and graduate students in Corvallis, Bend, and on Ecampus.</p>

<div class="sb-section-head">
  <h2 id="research-themes">Research themes</h2>
  <a class="sb-btn" href="{{ '/research/' | relative_url }}">Explore our research <i class="fa-solid fa-arrow-right"></i></a>
</div>

{% comment -%} only topics that have at least one paper on /publications/ {%- endcomment -%}
{%- assign pubtags = "|" -%}
{%- for e in site.data.bibkeys -%}{%- if e[1].page == "/publications/" -%}{%- assign pubtags = pubtags | append: e[1].tags | append: "|" -%}{%- endif -%}{%- endfor -%}
<div class="sb-tags">
{%- for t in site.data.tags -%}
  {%- assign needle = "|" | append: t | append: "|" -%}
  {%- unless pubtags contains needle -%}{%- continue -%}{%- endunless -%}
  <a class="sb-tag sb-t-{{ t | slugify }}" data-tag="{{ t }}" href="{{ '/publications/' | relative_url }}?tag={{ t | url_encode }}">{{ t }}</a>
{%- endfor -%}
</div>

## News

{% include sb_news.liquid limit=3 student=true %}

<p class="sb-more-news"><a href="{{ '/news/' | relative_url }}">All news <i class="fa-solid fa-arrow-right"></i></a></p>

<div class="sb-band sb-join-band">
  <div><strong>Join us.</strong> We welcome students with backgrounds in music and computer science, from undergraduate research to the Ph.D.</div>
  <a class="sb-btn" href="{{ '/join/' | relative_url }}">Join the lab <i class="fa-solid fa-arrow-right"></i></a>
</div>
