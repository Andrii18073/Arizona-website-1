function resizeEvent(e){$(".slide").css("width",$(".slider__wrapper").width()+"px")}function handleEvent(e){var t=e.detail.currentSlide-1;$(".slider-dots span").removeClass("active"),$(".slider-dots span:eq("+t+")").addClass("active")}$(document).on("click","button.btn--hp-slider",function(){jQuery("html").animate({scrollTop:2900},1e3)}),$(document).on("click",".present-video__title",function(){0!=$(document).find(".present-video__title").index($(this))?$("body").css("overflow","hidden").append('<div class="videoplayer"><div class="videoplayer__bg" onclick="document.getElementsByClassName(&quot;videoplayer&quot;)[0].remove(); document.getElementsByTagName(&quot;body&quot;)[0].style.overflow = &quot;unset&quot;;"></div><div class="videoplayer__inner"><iframe src="https://www.youtube.com/embed/kTaj4LRri1E?autoplay=1&amp;html5=1" class="videoplayer__iframe"></iframe></div><button class="videoplayer__close" onclick="document.getElementsByClassName(&quot;videoplayer&quot;)[0].remove(); document.getElementsByTagName(&quot;body&quot;)[0].style.overflow = &quot;unset&quot;;">Закрыть</button></div>'):$("body").css("overflow","hidden").append('<div class="videoplayer"><div class="videoplayer__bg" onclick="document.getElementsByClassName(&quot;videoplayer&quot;)[0].remove(); document.getElementsByTagName(&quot;body&quot;)[0].style.overflow = &quot;unset&quot;;"></div><div class="videoplayer__inner"><iframe src="https://www.youtube.com/embed/cSYty-Dt-H4?autoplay=1&amp;html5=1" class="videoplayer__iframe"></iframe></div><button class="videoplayer__close" onclick="document.getElementsByClassName(&quot;videoplayer&quot;)[0].remove(); document.getElementsByTagName(&quot;body&quot;)[0].style.overflow = &quot;unset&quot;;">Закрыть</button></div>')}),window.innerWidth>1280?$(".lory-frame").css("width: 1280px"):$(".lory-frame").css("width",$(window).width()-30+"px"),$(".slide").css("width",$(".slider__wrapper").width()+"px"),$(".lory-slider").lory({infinite:!0,classNameFrame:"lory-frame",classNameSlideContainer:"lory-slides",enableMouseEvents:!0}),$(".slider-dots span").click(function(){$(".slider-dots span").removeClass("active"),$(this).addClass("active");var e=$(this).data("to")-1;$(".lory-slider").data().lory.slideTo(e)});var events=document.querySelector(".lory-slider");events.addEventListener("on.lory.resize",resizeEvent),events.addEventListener("after.lory.slide",handleEvent),setInterval(function(){$(".lory-slider").data().lory.next()},2e4),$(".faq-item").click(function(){$(this).find(".faq-item__answer").is(":hidden")?($(this).find(".faq-item__answer").show(),$(this).addClass("opened")):($(this).find(".faq-item__answer").hide(),$(this).removeClass("opened"))})