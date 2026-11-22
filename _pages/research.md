---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 0
---


<nav class="sb-jump" aria-label="Research areas">
{%- for a in site.data.research -%}<a href="#{{ a.id }}">{{ a.title }}</a>{%- endfor -%}<a href="#datasets-and-code">Datasets &amp; code</a>
</nav>

{% for a in site.data.research %}
<section class="sb-area" id="{{ a.id }}">
  <img class="sb-area-img" loading="lazy" src="{{ a.image | prepend: '/assets/img/' | relative_url }}" alt="">
  <div class="sb-area-body">
    <h2>{{ a.title }}</h2>
    <p class="sb-area-q">{{ a.question }}</p>
    <p>{{ a.summary }}</p>
    <div class="sb-area-lists">
      {%- if a.papers.size > 0 -%}
      <div><h4>Papers</h4><ul>
        {%- for k in a.papers -%}{%- assign info = site.data.bibkeys[k] -%}{%- if info -%}<li><a href="{{ info.page | relative_url }}#{{ k }}">{{ info.title | default: info.label }}</a> <span class="sb-area-cite">{{ info.label }}</span></li>{%- endif -%}{%- endfor -%}
      </ul></div>
      {%- endif -%}
      {%- if a.theses.size > 0 -%}
      <div><h4>Theses</h4><ul>
        {%- for k in a.theses -%}{%- assign info = site.data.bibkeys[k] -%}{%- if info -%}<li><a href="{{ info.page | relative_url }}#{{ k }}">{{ info.title | default: info.label }}</a> <span class="sb-area-cite">{{ info.label }}</span></li>{%- endif -%}{%- endfor -%}
      </ul></div>
      {%- endif -%}
      {%- if a.projects.size > 0 -%}
      <div><h4>Projects</h4><ul>
        {%- for pid in a.projects -%}{%- assign pr = site.data.projects | where: "id", pid | first -%}{%- if pr -%}<li><a href="{{ '/projects/' | relative_url }}#{{ pid }}">{{ pr.title }}</a> <span class="sb-area-cite">{{ pr.type }} {{ pr.year }}</span></li>{%- endif -%}{%- endfor -%}
      </ul></div>
      {%- endif -%}
    </div>
    <div class="sb-area-browse">
      Browse all:
      {%- for t in a.tags -%}
        <a class="sb-tag sb-t-{{ t | slugify }}" data-tag="{{ t }}" href="{{ '/publications/' | relative_url }}?tag={{ t | url_encode }}">{{ t }} papers</a>
        <a class="sb-tag sb-t-{{ t | slugify }}" data-tag="{{ t }}" href="{{ '/projects/' | relative_url }}?tag={{ t | url_encode }}">{{ t }} projects</a>
      {%- endfor -%}
    </div>
  </div>
</section>
{% endfor %}

## Datasets &amp; code {#datasets-and-code}

Public data released with our papers. Each links to its paper for citation.

<div class="sb-resources">
{%- for r in site.data.resources -%}
  {%- assign info = site.data.bibkeys[r.paper] -%}
  <div class="sb-resource">
    <div class="sb-resource-head"><span class="sb-news-kind">{{ r.kind }}</span> <a href="{{ r.url }}"><strong>{{ r.name }}</strong></a> <span class="sb-area-cite">on {{ r.host }}{% if r.license %} · {{ r.license }} license{% endif %}</span></div>
    <p>{{ r.description }}</p>
    {%- if info -%}<div class="sb-area-cite">Cite: <a href="{{ info.page | relative_url }}#{{ r.paper }}">{{ info.title | default: info.label }}</a> ({{ info.label }})</div>{%- endif -%}
  </div>
{%- endfor -%}
</div>
