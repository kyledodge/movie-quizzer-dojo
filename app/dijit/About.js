//>>built
require({cache:{"url:app/dijit/templates/About.html":'\x3cdiv class\x3d"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" style\x3d"margin: 100px 10px 10px 10px;"\x3e\n    \x3ch2\x3eA Movie Guessing Game\x3c/h2\x3e\n\n    \x3cp\x3e\n        This is a movie guessing game: You\'ll get the tagline to the movie and four options\n        to choose from. If you need a hint, you will get additional information such as year\n        released, director and top actors of the movie.\n    \x3c/p\x3e\n\n    \x3ch4 class\x3d"text-left"\x3eBuilt with:\x3c/h4\x3e\n    \x3cul class\x3d"text-left"\x3e\n        \x3cli\x3e\n            \x3ca href\x3d"http://freebase.com/"\x3eGoogle Freebase\x3c/a\x3e\n        \x3c/li\x3e\n        \x3cli\x3e\n            \x3ca href\x3d"http://dojotoolkit.org/"\x3eDojo\x3c/a\x3e JavaScript framework\n        \x3c/li\x3e\n        \x3cli\x3e\n            \x3ca href\x3d"http://theintern.io/"\x3eIntern\x3c/a\x3e unit testing framework\n        \x3c/li\x3e\n        \x3cli\x3e\n            \x3ca href\x3d"http://usejsdoc.org/"\x3eJSDoc\x3c/a\x3e documentation generator\n        \x3c/li\x3e\n    \x3c/ul\x3e\n\n    \x3ca data-dojo-attach-point\x3d"playGameBtn" class\x3d"btn btn-success"\x3ePlay!\x3c/a\x3e\n\x3c/div\x3e'}});
define("app/dijit/About","dijit/_WidgetsInTemplateMixin dijit/_TemplatedMixin dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/on dojo/topic app/events/NavigationEvent dojo/text!app/dijit/templates/About.html".split(" "),function(a,b,c,d,e,f,g,h,k){return d([c,b,a],{templateString:k,startup:function(){this.inherited(arguments);f(this.playGameBtn,"click",e.hitch(this,this.playGameClicked))},playGameClicked:function(a){g.publish(h.prototype.PLAY)}})});
//# sourceMappingURL=About.js.map