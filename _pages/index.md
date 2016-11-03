---
layout: homepage
published: true
permalink: /homepage/

extra_css:
  - vendor/slick/slick.css
  - vendor/slick/slick-theme.css

extra_js:
  - vendor/slick/slick.min.js

_title: Homepage
---

<style>
.link-box div {
	<!-- width: 100px; -->
	height: 500px; 
	background-color: #000;
	color: #f00;
}

#box {
	<!-- width: 100px; -->
	height: 500px; 
	background-color: #000;
	color: #f00;
	display: block;
}

.panel {
	background-color: #000;
	color: #fff;
}
</style>

<div class="panel">

	<div class="your-class">
	  <div>your content</div>
	  <div>your content</div>
	  <div>your content</div>
	</div>

</div>

<div class="expanded row link-box">
	<div id="box" class="large-4 columns">About MaRIUS</div>
	<div class="large-4 columns">Our Work</div>
	<div class="large-4 columns">News &amp; Events</div>
</div>