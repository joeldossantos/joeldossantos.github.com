---
layout: content
title: projetos
---

<h3>Projetos</h3>\
{% for post in site.categories.projetos %}<p><a href="{{ post.url }}"><img src="images/item.png" width="20"/> {{ post.title }}</a></p>{% endfor %}