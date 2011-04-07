---
layout: content
title: tutoriais
---

<h3>Tutoriais</h3>\
{% for post in site.categories.tutoriais %}<p><a href="{{ post.url }}"><img src="images/item.png" width="20"/> {{ post.title }}</a></p>{% endfor %}