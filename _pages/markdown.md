---
layout: default
published: true
permalink: /markdown/
related_links:
  - name: related link 1
    url: 'http://www.geog.ox.ac.uk'
    external: true
  - name: related link 2
    url: /
  - name: related link 3
    url: '!science_url!'
  - name: related link 4
    url: '!dpe_url!'
  - name: related link 5
    url: '!dpe_url!/what_are_droughts/'
---

<style>
.container {}
.container > div {
    display: inline;
    padding: 0 30px 0 0;
}
.container img {
    max-width: 100%;
    vertical-align: middle;
}
</style>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sapiente veniam delectus optio expedita vero aspernatur, quidem sed dicta quae, voluptatem cum. Asperiores aliquam necessitatibus labore nam voluptas, enim recusandae?

I'm a [link](http://www.google.com) that opens in CURRENT window/tab

I'm a [link](http://www.google.com){:target="_blank"} that opens in a NEW browser window/tab

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita illo repellendus corporis, maxime voluptas soluta, provident incidunt omnis esse, eveniet a. Officia nesciunt, rerum quidem possimus, aut quo accusamus blanditiis.


<div class="container">
    <div>
        <img src="{{ site.assets_url }}/img/logos/university_of_oxford.png"/>
    </div>
    <div>
        <img src="{{ site.assets_url }}/img/logos/cranfield_university.png" />
    </div>
    <div>
        <img src="{{ site.assets_url }}/img/logos/metoffice.png" />
    </div>
    <div>
        <img src="{{ site.assets_url }}/img/logos/ceh.png" />
    </div>
    <div>
        <img src="{{ site.assets_url }}/img/logos/university_of_bristol.png" />
    </div>
</div>