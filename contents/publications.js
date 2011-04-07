---
layout: content
title: publicacoes
---

<h3>Publica&ccedil;&otilde;es</h3>\
{% for post in site.categories.publicacoes %}<p><a href="{{ post.url }}"><img src="images/item.png" width="20"/> {{ post.title }}</a></p>{% endfor %}