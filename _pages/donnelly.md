---
layout: page
permalink: /donnelly/
title: Patrick Donnelly
description: Director, Soundbendor Lab
nav: true
nav_order: 6
---

<img class="img-fluid rounded float-md-right ml-md-4 mb-3" style="max-width: 240px;" src="{{ '/assets/img/people/patrick-donnelly-2024.png' | relative_url }}" alt="Patrick Donnelly">

Patrick Donnelly is an Associate Professor of Computer Science at Oregon State University, where he directs the Soundbendor Lab.
Combining his background in machine learning and musicology, he uses computational approaches to better understand sound and music.

Patrick has always been fascinated by the intersection of math, music and language.
As an undergraduate at Washington University in St. Louis he majored in computer science, music and Italian.
He received master's degrees in Computer Music and Musicology from the Peabody Conservatory and in Computer Science from Johns Hopkins University,
and his Ph.D. in Computer Science from Montana State University in 2015, with a dissertation on classifying musical instrument timbre in polyphonic audio.
As a postdoctoral researcher in the Emotive Computing Lab at the University of Notre Dame, he analyzed teachers' instructional practices using acoustic signal processing and machine learning.
Before joining OSU in 2019 he taught computer science at Chico State.
He teaches mainly on the OSU-Cascades campus in Bend and mentors students in Corvallis, in Bend and on Ecampus.

**Email:** [patrick.donnelly@oregonstate.edu](mailto:patrick.donnelly@oregonstate.edu) · [Google Scholar](https://scholar.google.com/citations?user=TFDLhm4AAAAJ) · [OSU profile](https://engineering.oregonstate.edu/about/directory/patrick-donnelly)

<nav class="sb-jump" aria-label="On this page"><a href="#publications">Publications</a><a href="#earlier-work">Earlier work</a><a href="#theses">Theses</a><a href="#service">Service</a><a href="#funding">Funding</a></nav>

<div style="clear: both;"></div>

## Publications

{% include tag_filter.liquid %}

<div class="publications">
{% bibliography --file publications %}
</div>

<details class="sb-earlier" id="earlier-work">
<summary>Show earlier work (before 2019)</summary>
<div class="publications">
{% bibliography --file earlier %}
</div>
</details>

<details class="sb-earlier" id="theses">
<summary>Show theses (A.B., M.M., Ph.D.)</summary>
<div class="publications">
{% bibliography --file theses-pi --group_by none %}
</div>
</details>

## Service

{% for x in site.data.service %}
- **{{ x.role }}**, [{{ x.what }}]({{ x.url }}), *{{ x.venue }}*, {{ x.year }}
{% endfor %}

## Funding

{% for g in site.data.funding %}
- {% if g.role %}**{{ g.role }}**, {% endif %}[{{ g.title }}]({{ g.url }}). {{ g.sponsor }}{% if g.number %}, {{ g.number }}{% endif %}{% if g.years %}, {{ g.years }}{% endif %}.{% if g.poster %} [Poster]({{ g.poster | prepend: '/assets/pdf/' | relative_url }}){% endif %}
{% endfor %}
