---
layout: page
permalink: /donnelly/
title: Patrick Donnelly
description: Director
_styles: >
  .post-description { font-family: "Barlow Semi Condensed", "Arial Narrow", sans-serif; font-weight: 600;
  font-size: 1.45rem !important; text-transform: uppercase; letter-spacing: 0.07em; color: #006a8e !important; }
  html[data-theme="dark"] .post-description { color: #8cc8e0 !important; }
nav: true
nav_order: 6
---

<div class="sb-pi-head">
  <img class="sb-pi-photo" src="{{ '/assets/img/people/patrick/headshot-2026.jpg' | relative_url }}" alt="Patrick Donnelly">
  <div class="sb-pi-links">
    <!-- Contact -->
    <a href="mailto:patrick.donnelly@oregonstate.edu"><i class="fa-solid fa-envelope"></i>Email</a>
    <a href="https://engineering.oregonstate.edu/about/directory/patrick-donnelly"><i class="fa-solid fa-building-columns"></i>OSU</a>
    <a href="https://osucascades.edu/directory/patrick-donnelly"><i class="fa-solid fa-mountain-sun"></i>OSU Cascades</a>
    <!-- Scholarship -->
    <a href="{{ '/assets/pdf/cv/donnelly-cv.pdf' | relative_url }}"><i class="fa-solid fa-file-lines"></i>CV</a>
    <a href="https://scholar.google.com/citations?user=TFDLhm4AAAAJ"><i class="ai ai-google-scholar"></i>Google Scholar</a>
    <a href="https://orcid.org/0000-0003-1033-5931"><i class="ai ai-orcid"></i>ORCID</a>
    <!-- Profiles -->
    <a href="https://www.linkedin.com/in/patrick-donnelly-77a143b3/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
    <a href="https://github.com/Soundbendor"><i class="fa-brands fa-github"></i>GitHub</a>
    <a href="https://www.youtube.com/@soundbendorlab7615"><i class="fa-brands fa-youtube"></i>YouTube</a>
  </div>
</div>

Patrick Donnelly is an Associate Professor of Computer Science at Oregon State University, where he directs the Soundbendor Lab.
Combining his background in machine learning and musicology, he uses computational approaches to better understand sound and music,
studying music emotion, timbre, music theory, bioacoustics and sustainability.

Patrick has always been fascinated by the intersection of math, music and language.
As an undergraduate at Washington University in St. Louis he majored in computer science, music and Italian.
He received master's degrees in Computer Music and Musicology from the Peabody Conservatory and in Computer Science from Johns Hopkins University,
and his Ph.D. in Computer Science from Montana State University in 2015, with a dissertation on classifying musical instrument timbre in polyphonic audio.
As a postdoctoral researcher in the Emotive Computing Lab at the University of Notre Dame, he analyzed teachers' instructional practices using acoustic signal processing and machine learning.
Before joining OSU in 2019 he taught computer science at Chico State.
He teaches mainly on the OSU-Cascades campus in Bend and mentors undergraduate and graduate student researchers in Corvallis, in Bend and online through Oregon State Ecampus.


<nav class="sb-jump" aria-label="On this page"><a href="#publications">Publications</a><a href="#earlier-work">Before 2020</a><a href="#theses">Student Theses</a><a href="#service">Service</a><a href="#funding">Funding</a><a href="#outside-the-lab">Outside the lab</a></nav>

<div style="clear: both;"></div>

## Publications

{% include tag_filter.liquid %}

<div class="publications sb-pi">
{% bibliography --file donnelly %}
</div>

<details class="sb-earlier" id="earlier-work">
<summary>Before 2020</summary>
<div class="publications sb-pi">
{% bibliography --file earlier %}
</div>
</details>

<details class="sb-earlier" id="theses">
<summary>Student Theses</summary>
<div class="publications sb-pi">
{% bibliography --file theses-pi --group_by none %}
</div>
</details>

{% include sb_scholar.liquid %}

## Service

{% for x in site.data.service -%}
- **{{ x.role }}:** [{{ x.what }}]({{ x.url }}){% if x.venue %}, *{{ x.venue }}*{% endif %}, {{ x.year }}
{% endfor -%}
- **Reviewer:** EvoMUSART, ISMIR, *Computer Music Journal*, IEEE TAFFC, IEEE Access, ACM ICMI and others

## Funding

{% for g in site.data.funding %}
- {% if g.role %}**{{ g.role }}**, {% endif %}[{{ g.title }}]({{ g.url }}). {{ g.sponsor }}{% if g.number %}, {{ g.number }}{% endif %}{% if g.years %}, {{ g.years }}{% endif %}.{% if g.poster %} <a class="sb-pill-link" href="{{ g.poster | prepend: '/assets/pdf/' | relative_url }}"><i class="fa-solid fa-image"></i> Poster</a>{% endif %}
{% endfor %}

## Outside the lab

<div class="sb-outside">
  <figure><img src="{{ '/assets/img/people/patrick/dogs.jpg' | relative_url }}" alt="Patrick in sunglasses and a cap, mouth open in mock surprise, with his two dogs on a trail" loading="lazy"></figure>
  <figure><img src="{{ '/assets/img/people/patrick/hiking.jpg' | relative_url }}" alt="Patrick taking a selfie on a hike above a river canyon" loading="lazy"></figure>
  <figure><img src="{{ '/assets/img/people/patrick/opera.jpg' | relative_url }}" alt="Patrick in a feathered helmet and armour costume, arms spread wide" loading="lazy"></figure>
  <figure><img src="{{ '/assets/img/people/patrick/performance.jpg' | relative_url }}" alt="Patrick in a tuxedo holding a bouquet of flowers after a performance" loading="lazy"></figure>
</div>
