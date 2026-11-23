---
layout: page
permalink: /people/
title: People
nav: true
nav_order: 1
---

<div class="sb-person sb-director">
  <img class="sb-photo" src="{{ '/assets/img/people/patrick-donnelly-2024.png' | relative_url }}" alt="Patrick Donnelly">
  <div class="sb-person-body">
    <div class="sb-name"><a href="{{ '/donnelly/' | relative_url }}">Patrick Donnelly</a> <a class="sb-icon" href="https://scholar.google.com/citations?user=TFDLhm4AAAAJ" aria-label="Patrick Donnelly on Google Scholar"><i class="ai ai-google-scholar"></i></a></div>
    <div class="sb-meta">Associate Professor of Computer Science<br><span class="sb-campus">Bend</span></div>
  </div>
</div>

{% include tag_filter.liquid %}

{% assign current = site.data.people | where: "status", "current" %}
{% assign alumni = site.data.people | where: "status", "alumni" %}

<h2>Current members</h2>
{% assign groups = "phd:Ph.D. students|ms:M.S. students|bs:Undergraduates" | split: "|" %}
{% for g in groups %}
  {% assign parts = g | split: ":" %}
  {% assign list = current | where: "level", parts[0] %}
  {% if list.size > 0 %}
  <details class="sb-year sb-group" open>
    <summary><h3 class="sb-collapse-h">{{ parts[1] }}</h3></summary>
    <div class="sb-people-grid">{% for p in list %}{% include person_card.liquid p=p %}{% endfor %}</div>
  </details>
  {% endif %}
{% endfor %}

<h2>Alumni</h2>
{% assign grads = alumni | where_exp: "p", "p.level != 'bs'" %}
<details class="sb-year sb-group" open>
  <summary><h3 class="sb-collapse-h">Graduate students</h3></summary>
  <div class="sb-people-grid">{% for p in grads %}{% include person_card.liquid p=p %}{% endfor %}</div>
</details>

{% assign ugrads = alumni | where: "level", "bs" %}
{% assign uyears = ugrads | map: "year" | uniq %}
{% for y in uyears %}
<details class="sb-year sb-group" open>
  <summary><h3 class="sb-collapse-h">{% if y != "" %}Undergraduates, {{ y }}{% else %}Transferred{% endif %}</h3></summary>
  {% assign list = ugrads | where: "year", y %}
  <div class="sb-people-grid sb-compact-grid">{% for p in list %}{% include person_card.liquid p=p compact=true %}{% endfor %}</div>
</details>
{% endfor %}

<p class="sb-optout">Listed here by mistake, or want something changed or removed? Email <a href="mailto:{{ site.lab_email }}">{{ site.lab_email }}</a>.</p>
