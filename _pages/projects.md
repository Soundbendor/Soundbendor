---
layout: page
permalink: /projects/
title: Student Projects
nav_title: Projects
nav: true
nav_order: 4
---

{% include tag_filter.liquid %}

{% assign years = site.data.projects | map: "year" | uniq %}
{% for y in years %}
<details class="sb-year sb-group" open>
<summary><h2 class="sb-collapse-h">{{ y }}</h2></summary>
<div class="sb-project-grid">
{% assign items = site.data.projects | where: "year", y %}
{% for pr in items %}{% include project_card.liquid pr=pr %}{% endfor %}
</div>
</details>
{% endfor %}

<section class="sb-programs" id="programs">
  <h2>Programs</h2>
  <dl>
    <div id="program-capstone"><dt>Capstone</dt><dd>EECS senior capstone: year-long team projects that build tools, apps and datasets for the lab. <a class="sb-prog-link" href="https://engineering.oregonstate.edu/EECS/alumni-industry/student-engagement/Capstone">EECS Capstone</a></dd></div>
    <div id="program-crf"><dt>CRF</dt><dd>Cascades Research Fellowship: a mentored research fellowship for OSU-Cascades students in Bend. <a class="sb-prog-link" href="https://osucascades.edu/research/students/cascades-research-and-scholarship-fellowship">CRF</a></dd></div>
    <div id="program-ursa"><dt>URSA</dt><dd>URSA Engage: a mentored first research experience for early undergraduates. <a class="sb-prog-link" href="https://undergradresearch.oregonstate.edu/ursa-engage">URSA Engage</a></dd></div>
    <div id="program-ncur"><dt>NCUR</dt><dd>Presentations at the National Conference on Undergraduate Research. <a class="sb-prog-link" href="https://www.cur.org/what/events/students/ncur/">NCUR</a></dd></div>
    <div id="program-ind-study"><dt>Ind. Study</dt><dd>Independent study: one-on-one research for course credit.</dd></div>
    <div id="program-grant"><dt>Grant</dt><dd>Student work supported by one of the lab's grants or contracts. <a class="sb-prog-link" href="{{ '/donnelly/#funding' | relative_url }}">Funding</a></dd></div>
  </dl>
</section>
