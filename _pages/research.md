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
    <img class="sb-rarea-img" src="{{ a.image | prepend: '/assets/img/' | relative_url }}" alt="{{ a.alt | strip | escape }}" loading="lazy">
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
      {%- assign a_items = site.data.explore | where: "area", a.id -%}
      {%- assign a_try = "" | split: "" -%}{%- assign a_data = "" | split: "" -%}
      {%- for r in a_items -%}{%- if r.kind == "Demo" or r.kind == "Curiosity" -%}{%- assign a_try = a_try | push: r -%}{%- elsif r.kind == "Dataset" or r.kind == "Code" -%}{%- assign a_data = a_data | push: r -%}{%- endif -%}{%- endfor -%}
      {%- if a_items.size > 0 -%}
      <div class="sb-rarea-try">
        {%- if a_try.size > 0 -%}<b>Try it</b>{%- for r in a_try -%}<a href="{{ '/explore/' | relative_url }}#{{ r.kind | slugify }}-{{ r.name | slugify }}">{{ r.name }}</a>{%- unless forloop.last %} · {% endunless -%}{%- endfor -%}{%- endif -%}
        {%- if a_try.size > 0 and a_data.size > 0 -%}<span class="sb-sep"></span>{%- endif -%}
        {%- if a_data.size > 0 -%}<b>Data</b>{%- for r in a_data -%}<a href="{{ '/explore/' | relative_url }}#{{ r.kind | slugify }}-{{ r.name | slugify }}">{{ r.name }}</a>{%- unless forloop.last %} · {% endunless -%}{%- endfor -%}{%- endif -%}
      </div>
      {%- endif -%}
    </div>
  </div>
</section>
{% endfor %}

<p class="sb-research-explore" id="datasets-and-code"><a class="sb-btn" href="{{ '/explore/' | relative_url }}">All demos, curiosities, datasets and code <i class="fa-solid fa-arrow-right"></i></a></p>
