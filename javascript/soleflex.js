
//Plugin Carousel

$(document).ready(function() {
     
    $("#slider-main").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: true,
        pagination : true,
        paginationNumbers: false
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
     
});




//scroll to top
$(document).ready(function() {

        //Menu vertical
        $('.menu-vertical li').click(function(ev) {
            $(this).find('>ul').slideToggle();
            ev.stopPropagation();
        });


        $('.menu-vertical li').has('ul').addClass('hassub');

});





//stiker
 /*
$(document).ready(function() {
    var s = $("#stiker");
    var pos = s.position();                   
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
       
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});
 
*/

 
// jQuery HC-Sticky
// =============
// Version: 1.2.3
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: https://github.com/somewebmedia/hc-sticky
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Cross-browser jQuery plugin that makes any element attached to the page and always visible while you scroll.

(function(c,h,f){var l=c(h),k=h.document,r=c(k),v=function(){for(var c=3,b=k.createElement("div"),a=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++c+"]><i></i><![endif]--\x3e",a[0];);return 4<c?c:void 0}(),g=function(){var c=h.pageXOffset!==f?h.pageXOffset:"CSS1Compat"==k.compatMode?h.document.documentElement.scrollLeft:h.document.body.scrollLeft,b=h.pageYOffset!==f?h.pageYOffset:"CSS1Compat"==k.compatMode?h.document.documentElement.scrollTop:h.document.body.scrollTop;"undefined"==
typeof g.x&&(g.x=c,g.y=b);"undefined"==typeof g.distanceX?(g.distanceX=c,g.distanceY=b):(g.distanceX=c-g.x,g.distanceY=b-g.y);var a=g.x-c,e=g.y-b;g.direction=0>a?"right":0<a?"left":0>=e?"down":0<e?"up":"first";g.x=c;g.y=b};l.on("scroll",g);c.fn.style=function(g){if(!g)return null;var b=c(this),a,e=b.clone().css("display","none");e.find("input:radio").attr("name","copy-"+Math.floor(100*Math.random()+1));b.after(e);var f=function(a,c){var e;a.currentStyle?e=a.currentStyle[c.replace(/-\w/g,function(b){return b.toUpperCase().replace("-",
"")})]:h.getComputedStyle&&(e=k.defaultView.getComputedStyle(a,null).getPropertyValue(c));return e=/margin/g.test(c)?parseInt(e)===b[0].offsetLeft?e:"auto":e};"string"==typeof g?a=f(e[0],g):(a={},c.each(g,function(b,c){a[c]=f(e[0],c)}));e.remove();return a||null};c.fn.extend({hcSticky:function(k){if(0==this.length)return this;this.pluginOptions("hcSticky",{top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,className:"sticky",wrapperClassName:"wrapper-sticky",stickTo:null,responsive:!0,followScroll:!0,
offResolutions:null,onStart:c.noop,onStop:c.noop,on:!0,fn:null},k||{},{reinit:function(){c(this).hcSticky()},stop:function(){c(this).pluginOptions("hcSticky",{on:!1}).each(function(){var b=c(this),a=b.pluginOptions("hcSticky"),e=b.parent("."+a.wrapperClassName),e=b.offset().top-e.offset().top;b.css({position:"absolute",top:e,bottom:"auto",left:"auto",right:"auto"}).removeClass(a.className)})},off:function(){c(this).pluginOptions("hcSticky",{on:!1}).each(function(){var b=c(this),a=b.pluginOptions("hcSticky"),
e=b.parent("."+a.wrapperClassName);b.css({position:"relative",top:"auto",bottom:"auto",left:"auto",right:"auto"}).removeClass(a.className);e.css("height","auto")})},on:function(){c(this).each(function(){c(this).pluginOptions("hcSticky",{on:!0,remember:{offsetTop:l.scrollTop()}}).hcSticky()})},destroy:function(){var b=c(this),a=b.pluginOptions("hcSticky"),e=b.parent("."+a.wrapperClassName);b.removeData("hcStickyInit").css({position:e.css("position"),top:e.css("top"),bottom:e.css("bottom"),left:e.css("left"),
right:e.css("right")}).removeClass(a.className);l.off("resize",a.fn.resize).off("scroll",a.fn.scroll);b.unwrap()}});k&&"undefined"!=typeof k.on&&(k.on?this.hcSticky("on"):this.hcSticky("off"));return"string"==typeof k?this:this.each(function(){var b=c(this),a=b.pluginOptions("hcSticky"),e=function(){var d=b.parent("."+a.wrapperClassName);return 0<d.length?(d.css({height:b.outerHeight(!0),width:function(){var a=d.style("width");return 0<=a.indexOf("%")||"auto"==a?("border-box"==b.css("box-sizing")||
"border-box"==b.css("-moz-box-sizing")?b.css("width",d.width()):b.css("width",d.width()-parseInt(b.css("padding-left")-parseInt(b.css("padding-right")))),a):b.outerWidth(!0)}()}),d):!1}()||function(){var d=b.style("width margin-left left right top bottom float display".split(" ")),e=b.css("display"),g=c("<div>",{"class":a.wrapperClassName}).css({display:e,height:b.outerHeight(!0),width:function(){return 0<=d.width.indexOf("%")||"auto"==d.width&&"inline-block"!=e&&"inline"!=e?(b.css("width",parseFloat(b.css("width"))),
d.width):"auto"!=d.width||"inline-block"!=e&&"inline"!=e?"auto"==d["margin-left"]?b.outerWidth():b.outerWidth(!0):b.width()}(),margin:d["margin-left"]?"auto":null,position:function(){var a=b.css("position");return"static"==a?"relative":a}(),"float":d["float"]||null,left:d.left,right:d.right,top:d.top,bottom:d.bottom,"vertical-align":"top"});b.wrap(g);7===v&&0===c("head").find("style#hcsticky-iefix").length&&c('<style id="hcsticky-iefix">.'+a.wrapperClassName+" {zoom: 1;}</style>").appendTo("head");
return b.parent()}();if(!b.data("hcStickyInit")){b.data("hcStickyInit",!0);var k=a.stickTo&&("document"==a.stickTo||a.stickTo.nodeType&&9==a.stickTo.nodeType||"object"==typeof a.stickTo&&a.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))?!0:!1,w=a.stickTo?k?r:"string"==typeof a.stickTo?c(a.stickTo):a.stickTo:e.parent();b.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});l.load(function(){b.outerHeight(!0)>w.height()&&(e.css("height",b.outerHeight(!0)),b.hcSticky("reinit"))});
var u=function(d){b.hasClass(a.className)||(d=d||{},b.css({position:"fixed",top:d.top||0,left:d.left||e.offset().left}).addClass(a.className),a.onStart.apply(this))},x=function(d){d=d||{};d.position=d.position||"absolute";d.top=d.top||0;d.left=d.left||0;parseInt(b.css("top"))!=d.top&&(b.css({position:d.position,top:d.top,left:d.left}).removeClass(a.className),a.onStop.apply(this))},s=!1,m=!1,A=function(){y();z();var d=function(){"fixed"==b.css("position")?b.css("left",e.offset().left):b.css("left",
0)};if(a.responsive){m||(m=b.clone().attr("style","").css({visibility:"hidden",height:0,overflow:"hidden",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}),e.after(m));var c=e.style("width"),g=m.style("width");"auto"==g&&"auto"!=c&&(g=parseInt(b.css("width")));g!=c&&e.width(g);s&&clearTimeout(s);s=setTimeout(function(){s=!1;m.remove();m=!1;d()},100)}else d();b.outerWidth(!0)!=e.width()&&(c="border-box"==b.css("box-sizing")||"border-box"==b.css("-moz-box-sizing")?e.width():e.width()-parseInt(b.css("padding-left"))-
parseInt(b.css("padding-right")),c=c-parseInt(b.css("margin-left"))-parseInt(b.css("margin-right")),b.css("width",c))};b.pluginOptions("hcSticky",{fn:{scroll:function(d){if(a.on&&!(b.outerHeight(!0)>=w.height())){var f=a.innerSticker?c(a.innerSticker).position().top:a.innerTop?a.innerTop:0,h=e.offset().top,v=w.height()-a.bottomEnd+(k?0:h),m=e.offset().top-a.top+f,n=b.outerHeight(!0)+a.bottom,p=l.height(),q=l.scrollTop(),t=b.offset().top,r=t-q,s;"undefined"!=typeof a.remember&&a.remember?(d=t-a.top-
f,n-f>p&&a.followScroll?d<q&&q+p<=d+b.height()&&(a.remember=!1):a.remember.offsetTop>d?q<=d&&(u({top:a.top-f}),a.remember=!1):q>=d&&(u({top:a.top-f}),a.remember=!1)):(q>m?v+a.bottom-(a.followScroll&&p<n?0:a.top)<=q+n-f-(n-f>p-(m-f)&&a.followScroll?0<(s=n-p-f)?s:0:0)?x({top:v-n+a.bottom-h}):n-f>p&&a.followScroll?r+n<=p?"down"==g.direction?u({top:p-n}):0>r&&"fixed"==b.css("position")&&x({top:t-(m+a.top-f)-g.distanceY}):"up"==g.direction&&t>=q+a.top-f?u({top:a.top-f}):"down"==g.direction&&t+n>p&&"fixed"==
b.css("position")&&x({top:t-(m+a.top-f)-g.distanceY}):u({top:a.top-f}):x(),!0===d&&b.css("top","fixed"==b.css("position")?a.top-f:0))}},resize:A}});var z=function(){if(a.offResolutions){c.isArray(a.offResolutions)||(a.offResolutions=[a.offResolutions]);var d=!0;c.each(a.offResolutions,function(a,c){0>c?l.width()<-1*c&&(d=!1,b.hcSticky("off")):l.width()>c&&(d=!1,b.hcSticky("off"))});d&&!a.on&&b.hcSticky("on")}};z();l.on("resize",A);var y=function(){if(b.outerHeight(!0)<w.height()){var d=!1;c._data(h,
"events").scroll!=f&&c.each(c._data(h,"events").scroll,function(b,c){c.handler==a.fn.scroll&&(d=!0)});d||(a.fn.scroll(!0),l.on("scroll",a.fn.scroll))}};y()}})}})})(jQuery,this);
(function(c,h){c.fn.extend({pluginOptions:function(f,l,k,r){this.data(f)||this.data(f,{});if(f&&"undefined"==typeof l)return this.data(f).options;k=k||l||{};return"object"==typeof k||k===h?this.each(function(){var h=c(this);h.data(f).options?h.data(f,c.extend(h.data(f),{options:c.extend(h.data(f).options,k||{})})):(h.data(f,{options:c.extend(l,k||{})}),r&&(h.data(f).commands=r))}):"string"==typeof k?this.each(function(){c(this).data(f).commands[k].call(this)}):this}})})(jQuery);