"use strict";!function(s,m){var i=60,e=void 0,l=0,u=0,a=null;function c(n){n=Math.round(n);var t=Math.floor(n/i),e=n-t*i;return t<10&&(t="0"+t),e<10&&(e="0"+e),t+":"+e}function o(n){var t=n*l;t=c(t),s(".start-time").html(t);var e=100*(n-1)+"%";s(".pro-top").css({transform:"translateX("+e+")"})}m.boot={start:function(n){u=void 0===n?u:n,a=(new Date).getTime(),function n(){var t=(new Date).getTime();o(u+(t-a)/(1e3*l)),e=requestAnimationFrame(n)}()},stop:function(){cancelAnimationFrame(e);var n=(new Date).getTime();u+=(n-a)/(1e3*l)},upDate:o},m.renDomList=function(n){n.forEach(function(n){var t=n.song,e=n.singer,i=s("<li><div><span>"+t+"</span><span>-"+e+"</span></div></li>");s(".item-list").append(i)})},m.renDom=function(n){var t,e,i,a,o,r;t=n.image,(e=new Image).src=t,e.onload=function(){s(".image .img-box img").attr("src",t),m.blurImg(e,s("body"))},i=n.duration,a=c(l=i),s(".end-time").html(a),u=0,r='\n\t\t\t<h3 class="song-name">'+(o=n).song+"</h3>\n        \t<p>"+o.singer+"</p>\n        \t<p>"+o.album+"</p>",s(".song-info").html(r),n.isLike?s(".likes").addClass("like"):s(".likes").removeClass("like")}}(window.Zepto,window.player||(widnow.player={}));