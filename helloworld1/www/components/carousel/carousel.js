'use strict';
ons.bootstrap()
  .directive('myCarousel', ['$document', function($document) {
	
	var template = ['<ons-page>',
	  '<ons-toolbar>',
	    '<div class="left">',
	      '<ons-toolbar-button ng-click="carousel.prev()">',
	        '<ons-icon icon="md-chevron-left"></ons-icon>',
	      '</ons-toolbar-button>',
	    '</div>',
	    '<div class="center">Carousel</div>',
	    '<div class="right">',
	      '<ons-toolbar-button ng-click="carousel.next()">',
	        '<ons-icon icon="md-chevron-right"></ons-icon>',
	      '</ons-toolbar-button>',
	    '</div>',
	  '</ons-toolbar>',
	
	  '<ons-carousel var="carousel" fullscreen swipeable auto-scroll overscrollable id="carousel" direction="horizontal">',
	    '<ons-carousel-item style="background-color: #085078;">',
	      '<div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">',
	        'A carousel is a UI component that is used to display several items in the same place. Switching between the content can either be automatic or controlled by the user.\
\
In Onsen UI a carousel is created using the <ons-carousel> element.\
\
<code><div class="hljs-tag">&lt;<span class="hljs-name">ons-carousel</span>&gt;</div>\
  <div class="hljs-tag">&lt;<span class="hljs-name">ons-carousel-item</span>&gt;</div>\
    ...\
  <div class="hljs-tag">&lt;/<span class="hljs-name">ons-carousel-item</span>&gt;</div>\
  <div class="hljs-tag">&lt;<span class="hljs-name">ons-carousel-item</span>&gt;</div>\
    ...\
  <div class="hljs-tag">&lt;/<span class="hljs-name">ons-carousel-item</span>&gt;</div>\
  ...\
<div class="hljs-tag">&lt;/<span class="hljs-name">ons-carousel</span>&gt;</div>\
</code>',
    		'</div>',
	    '</ons-carousel-item>',
	    '<ons-carousel-item style="background-color: #373B44;">',
	      '<div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">',
	        '<div id="tutorial-content" class="frame"><h2 id="customization">Customization</h2>\
<p>The <code>&lt;ons-carousel&gt;</code> element has a large number of attributes that control its behavior.</p>\
<p>By default the carousel can not be controlled by swiping. The <code>swipeable</code> attribute will enabled this.</p>\
<p>To make it automatically snap to item borders the <code>auto-scroll</code> attribute is used. The <code>overscrollable</code> attribute makes it possible to scroll past the first and last element of the carousel.</p>\
<p>To make it cover the whole screen you can use the <code>fullscreen</code> attribute.</p>\
</div>',
	      '</div>',
	    '</ons-carousel-item>',
	    '<ons-carousel-item style="background-color: #D38312;">',
	      '<div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">',
	        '<div id="tutorial-content" class="frame"><h2 id="changing-the-direction">Changing the direction</h2>\
<p>The carousel goes from left to right by default. It is possible to make scroll vertically by using the <code>direction</code> attribute.</p>\
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">ons-carousel</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"vertical"</span>&gt;</span>\
  ...\
<span class="hljs-tag">&lt;/<span class="hljs-name">ons-carousel</span>&gt;</span>\
</code></pre><p>You can try adding the <code>direction="vertical"</code> attribute to this example to see how it works.</p>\
</div>',
	      '</div>',
	    '</ons-carousel-item>',
	    '<ons-carousel-item>\
	    <div>\
		Events\
The carousel element emits DOM event. Every time the current item has changed it emits the postchange event which is useful to make sure which is the currently displayed item.\
In AngularJS this event can be handled in ons-postchange attribute:\
<code><span class="hljs-tag">&lt;<span class="hljs-name">ons-carousel</span> <span class="hljs-attr">ons-postchange</span>=<span class="hljs-string">"console.log(\'Changed to \' + $event.activeIndex)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ons-carousel</span>&gt;</span>\
</code>\
	    </div>\
	    </ons-carousel-item>',
	    '<ons-carousel-item>\
	    <div>\
	    Methods\
		The carousel can also be controlled programmatically. To switch to the previous or next item the prev() and next() are used.\
		To switch to a specific item the setActiveIndex(index) method is used.</div>\
	    </ons-carousel-item>',
	  '</ons-carousel>',
	'</ons-page>'].join('');
	return {
		template: template,
		restrict: 'E',
		link: function($scope, element) {
	      
		}
	};
}]);
