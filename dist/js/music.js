"use strict";var _createClass=function(){function n(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(a,e,t){return e&&n(a.prototype,e),t&&n(a,t),a}}();function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}!function(a,e){var t="pause",n=function(){function e(a){_classCallCheck(this,e),this.src=a,this.audio=new Audio,this.status=t}return _createClass(e,[{key:"play",value:function(){this.audio.play(),this.status="play"}},{key:"pause",value:function(){this.audio.pause(),this.status=t}},{key:"getAudio",value:function(a){this.audio.src=a,this.audio.load()}},{key:"playTo",value:function(a){this.audio.currentTime=a}}]),e}();e.audioManager=n}(window.Zepto,window.player||(window.player={}));