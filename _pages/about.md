---
layout: page
title: Soundbendor Lab
nav_title: Lab
permalink: /
nav: false
_styles: >
  .post-header { display: none; }
---

<img class="sb-home-logo only-light" src="{{ '/assets/img/logo/soundbendor-logo.png' | relative_url }}" alt="">
<img class="sb-home-logo only-dark" src="{{ '/assets/img/logo/soundbendor-logo-dark.png' | relative_url }}" alt="">

<p class="sb-tagline">Machine Understanding of Sound and Music</p>

<p class="sb-intro">The <strong class="sb-hl-osu">Soundbendor</strong> Lab is a research group in the
<a class="sb-hl-eecs" href="https://engineering.oregonstate.edu/EECS">School of Electrical Engineering and Computer Science</a> at
<a class="sb-hl-osu" href="https://oregonstate.edu/">Oregon State University</a>.
We use artificial intelligence and deep learning to study sound and music, drawing on computer science, signal processing, and musicology.
Our interdisciplinary research explores computational musicology, music emotion recognition, acoustic analysis, and bioacoustics
through hands-on projects with students in Corvallis, Bend,&nbsp;&amp;&nbsp;Ecampus.</p>

<div class="sb-section-head">
  <h2 id="research-themes">Research themes</h2>
  <a class="sb-btn" href="{{ '/research/' | relative_url }}">Explore our research <i class="fa-solid fa-arrow-right"></i></a>
</div>

<div class="sb-tags">
{%- for t in site.data.tags -%}
  <a class="sb-tag sb-t-{{ t | slugify }}" data-tag="{{ t }}" href="{{ '/publications/' | relative_url }}?tag={{ t | url_encode }}">{{ t }}</a>
{%- endfor -%}
</div>

{% assign sb_fds = site.data.featured_demos %}

<div class="sb-section-head">
  <h2 id="featured-demo">Featured Demo</h2>
  <a class="sb-btn" href="{{ '/research/' | relative_url }}#datasets-and-code">All demos <i class="fa-solid fa-arrow-right"></i></a>
</div>

<div class="sb-carousel sb-carousel-feature" data-interval="10000" data-label="featured demo" aria-roledescription="carousel" aria-label="Featured demos">
<div class="sb-carousel-track" aria-live="off">
{%- for fd in sb_fds -%}{%- assign fd_cite = site.data.bibkeys[fd.paper] -%}{%- if fd.project -%}{%- assign fd_pr = site.data.projects | where: "id", fd.project | first -%}{%- assign fd_pp = site.data.people | where: "id", fd_pr.people[0] | first -%}{%- endif %}
<div class="sb-slide sb-feature{% if forloop.first %} is-active{% endif %}" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}: {{ fd.title | escape }}">
  <a class="sb-feature-imglink" href="{{ fd.url }}"><img class="sb-feature-img" src="{{ fd.image | prepend: '/assets/' | relative_url }}?v={{ site.time | date: '%s' }}" alt="{{ fd.alt | escape }}"{% unless forloop.first %} loading="lazy"{% endunless %}></a>
  <div class="sb-feature-text">
    <h3 class="sb-feature-title">{{ fd.title }}</h3>
    <p>{{ fd.description }}</p>
    <div class="sb-feature-foot">
      <a class="sb-btn" href="{{ fd.url }}">Try the demo <i class="fa-solid fa-arrow-right"></i></a>
      <span class="sb-feature-meta">{% for pid in fd.people %}{% assign fp = site.data.people | where: "id", pid | first %}{% if fp %}<a href="{{ '/people/' | relative_url }}#{{ pid }}">{{ fp.name }}</a>{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}{% if fd_cite %}<span class="sb-sep">•</span>Cite: <a href="{{ fd_cite.page | relative_url }}#{{ fd.paper }}">{{ fd_cite.label }}</a>{% elsif fd_pr %}<span class="sb-sep">•</span>Project: <a href="{{ '/projects/' | relative_url }}#{{ fd.project }}">{% if fd_pp %}{{ fd_pp.name | split: ' ' | last }} {% endif %}{{ fd_pr.year }}</a>{% endif %}</span>
    </div>
  </div>
</div>
{%- assign fd_pr = nil -%}{%- assign fd_pp = nil -%}
{%- endfor %}
</div>
{% if sb_fds.size > 1 %}{% include sb_carousel_controls.liquid label="featured demo" %}{% endif %}
</div>

## Recent News

{% include sb_news.liquid limit=3 student=true %}

<p class="sb-more-news"><a href="{{ '/news/' | relative_url }}">All news <i class="fa-solid fa-arrow-right"></i></a></p>

{% assign sb_funs = site.data.fun_demos %}
<div class="sb-carousel sb-carousel-fun" data-interval="10000" data-label="fun demo" aria-roledescription="carousel" aria-label="Just for fun demos">
<div class="sb-carousel-track" aria-live="off">
{%- for fun in sb_funs %}
<div class="sb-slide sb-fun{% if forloop.first %} is-active{% endif %}" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}: {{ fun.title | escape }}">
  <a class="sb-fun-imglink" href="{{ fun.url }}"><img class="sb-fun-img" src="{{ fun.image | prepend: '/assets/' | relative_url }}?v={{ site.time | date: '%s' }}" alt="{{ fun.alt | escape }}" title="{{ fun.credit | escape }}"{% unless forloop.first %} loading="lazy"{% endunless %}></a>
  <div class="sb-fun-text">
    <div class="sb-fun-label">Just for fun: {{ fun.title }}</div>
    <h3 class="sb-fun-title">{{ fun.question }}</h3>
    <p>{{ fun.text }}</p>
    <a class="sb-btn" href="{{ fun.url }}">{{ fun.button | default: "Try the demo" }} <i class="fa-solid fa-{{ fun.icon | default: 'arrow-right' }}"></i></a>
  </div>
</div>
{%- endfor %}
</div>
{% if sb_funs.size > 1 %}{% include sb_carousel_controls.liquid label="fun demo" %}{% endif %}
</div>

<script src="{{ '/assets/js/sb-carousel.js' | relative_url | bust_file_cache }}" defer></script>

<div class="sb-band sb-join-band">
  <div>We welcome students with backgrounds in music and computer science,<br>from their first undergraduate research project through doctoral study.</div>
  <a class="sb-btn" href="{{ '/join/' | relative_url }}">Join the lab <i class="fa-solid fa-arrow-right"></i></a>
</div>
