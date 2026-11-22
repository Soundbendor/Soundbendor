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
<section class="sb-group">
<h2 class="sb-year">{{ y }}</h2>
<div class="sb-project-grid">
{% assign items = site.data.projects | where: "year", y %}
{% for pr in items %}{% include project_card.liquid pr=pr %}{% endfor %}
</div>
</section>
{% endfor %}

<section class="sb-programs" id="programs">
  <h2>Programs</h2>
  <dl>
    <div id="program-capstone"><dt>Capstone</dt><dd>Senior capstone in Electrical Engineering and Computer Science: year-long team projects that build tools, apps and datasets for the lab. <a href="https://engineering.oregonstate.edu/EECS/alumni-industry/student-engagement/Capstone">EECS capstone</a></dd></div>
    <div id="program-crf"><dt>CRF</dt><dd>Cascades Research and Scholarship Fellowship (formerly the Layman Fellowship): a mentored research fellowship for OSU-Cascades students in Bend. <a href="https://osucascades.edu/research/students/cascades-research-and-scholarship-fellowship">CRF</a></dd></div>
    <div id="program-ursa"><dt>URSA</dt><dd>URSA Engage: a mentored first research experience for early undergraduates. <a href="https://undergradresearch.oregonstate.edu/ursa-engage">URSA Engage</a></dd></div>
    <div id="program-ncur"><dt>NCUR</dt><dd>Projects presented at the National Conference on Undergraduate Research. <a href="https://www.cur.org/what/events/students/ncur/">NCUR</a></dd></div>
    <div id="program-ind-study"><dt>Ind. Study</dt><dd>Independent study: one-on-one research for course credit, supervised by Dr. Donnelly.</dd></div>
    <div id="program-grant-project"><dt>Grant project</dt><dd>Student work supported by one of the lab's grants. <a href="{{ '/donnelly/#funding' | relative_url }}">Funding</a></dd></div>
    <div id="program-research"><dt>Research</dt><dd>Other student research in the lab.</dd></div>
  </dl>
</section>
