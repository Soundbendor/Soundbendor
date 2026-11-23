---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 0
---

{%- comment -%} pages where each tag has results: lab publications first, then projects, then theses {%- endcomment -%}
{%- assign pubtags = "|" -%}
{%- for e in site.data.bibkeys -%}{%- if e[1].page == "/publications/" -%}{%- assign pubtags = pubtags | append: e[1].tags | append: "|" -%}{%- endif -%}{%- endfor -%}
{%- assign thesistags = "|" -%}
{%- for e in site.data.bibkeys -%}{%- if e[1].page == "/theses/" -%}{%- assign thesistags = thesistags | append: e[1].tags | append: "|" -%}{%- endif -%}{%- endfor -%}
{%- assign projtags = "|" -%}
{%- for p in site.data.projects -%}{%- assign pj = p.tags | join: "|" -%}{%- assign projtags = projtags | append: pj | append: "|" -%}{%- endfor -%}

{% for a in site.data.research %}
<section class="sb-rarea" id="{{ a.id }}" style="--sb-accent: {{ a.accent }};">
  <h2 class="sb-rarea-title">{{ a.title }}</h2>
  <div class="sb-rarea-body">
    <img class="sb-rarea-img" src="{{ a.image | prepend: '/assets/img/' | relative_url }}" alt="{{ a.alt | strip }}" loading="lazy">
    <div class="sb-rarea-text">
      <p>{{ a.summary }}</p>
      <div class="sb-tags sb-rarea-tags">
        {%- for t in a.tags -%}
          {%- assign needle = "|" | append: t | append: "|" -%}
          {%- if pubtags contains needle -%}{%- assign dest = '/publications/' -%}
          {%- elsif projtags contains needle -%}{%- assign dest = '/projects/' -%}
          {%- elsif thesistags contains needle -%}{%- assign dest = '/theses/' -%}
          {%- else -%}{%- assign dest = '/publications/' -%}{%- endif -%}
          <a class="sb-tag sb-t-{{ t | slugify }}" data-tag="{{ t }}" href="{{ dest | relative_url }}?tag={{ t | url_encode }}">{{ t }}</a>
        {%- endfor -%}
        {%- if a.feature -%}
          {%- if a.feature.url contains '://' -%}{%- assign fu = a.feature.url -%}{%- else -%}{%- assign fu = a.feature.url | relative_url -%}{%- endif -%}
          <a class="sb-rarea-feature" href="{{ fu }}">{{ a.feature.label }} <i class="fa-solid fa-arrow-right"></i></a>
        {%- endif -%}
      </div>
    </div>
  </div>
</section>
{% endfor %}

## Datasets &amp; Code {#datasets-and-code}

<div class="sb-datasets">
{%- for r in site.data.resources -%}
  {%- assign info = site.data.bibkeys[r.paper] -%}
  <div class="sb-dataset">
    <div class="sb-dataset-name"><strong>{{ r.name }}</strong> <a class="sb-prog-link" href="{{ r.url }}">{{ r.host }}</a></div>
    <p>{{ r.short }}</p>
    {%- if info -%}<a class="sb-dataset-cite" href="{{ info.page | relative_url }}#{{ r.paper }}">Cite: {{ info.label }}</a>{%- endif -%}
  </div>
{%- endfor -%}
</div>
