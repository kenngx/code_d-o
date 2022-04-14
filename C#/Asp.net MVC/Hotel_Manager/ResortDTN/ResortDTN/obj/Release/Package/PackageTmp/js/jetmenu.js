/*
NAME: Jet Responsive Megamenu 
AUTHOR PAGE: http://codecanyon.net/user/marcoarib
ITEM PAGE: http://codecanyon.net/item/jet-responsive-megamenu/5719593
*/

(function($){

	jQuery.fn.jetmenu = function(options){
		var settings = {
			indicator: true,
			speed: 500,
			delay: 0,
			hideDelay: 0,
			hideClickOut: true,
			align: "left",
			submenuTrigger: "hover",
			scrollable: true,
			scrollableMaxHeight: 400
		}
		$.extend( settings, options );
		
		var menu = $(".jetmenu");
		$(menu).wrap("<div class='jetmenu-wrapper'></div>");
		var menuWrapper = $(".jetmenu-wrapper");
		var lastScreenWidth = windowWidth();
		var bigScreen = false;
		
		$(menu).prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
		
		if(settings.indicator == true){
			$(menu).find("a").each(function(){
				if($(this).siblings(".dropdown, .megamenu").length > 0){
					$(this).append("<span class='indicator'>+</span>");
				}
			});
		}
			
		screenSize();
		
		$(window).resize(function() {
			if(lastScreenWidth <= 980 && windowWidth() > 980){
				unbindEvents();
				hideCollapse();
				bindHover();
				if(settings.align == "right" && bigScreen == false){
					rightAlignMenu();
					bigScreen = true;
				}
			}
			if(lastScreenWidth > 980 && windowWidth() <= 980){
				unbindEvents();
				showCollapse();
				bindClick();
				if(bigScreen == true){
					rightAlignMenu();
					bigScreen = false;
				}
			}
			if(settings.align == "right"){
				if(lastScreenWidth > 980 && windowWidth() > 980)
					fixSubmenuRight();
			}
			else{
				if(lastScreenWidth > 980 && windowWidth() > 980)
					fixSubmenuLeft();
			}
			lastScreenWidth = windowWidth();
		});
		
		function screenSize(){
			if(windowWidth() <= 980){
				showCollapse();
				bindClick();
				if(bigScreen == true){
					rightAlignMenu();
					bigScreen = false;
				}
			}
			else{
				hideCollapse();
				bindHover();
				if(settings.align == "right"){
					rightAlignMenu();
					bigScreen = true;
				}
				else{
					fixSubmenuLeft();
				}
			}
		}
		
		function bindHover(){
			if (navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || settings.submenuTrigger == "click"){						
				$(menu).find("a").on("click touchstart", function(e){
					e.stopPropagation(); 
					e.preventDefault();
					$(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
					if($(this).siblings(".dropdown, .megamenu").css("display") == "none"){
						$(this).siblings(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
						return false; 
					}
					else{
						$(this).siblings(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
						$(this).siblings(".dropdown").find(".dropdown").stop(true, true).fadeOut(settings.speed);
					}
					if($(this).attr("target") == "_blank" || $(this).attr("target") == "blank"){
						window.open($(this).attr("href"));
					}
					else{
						window.location.href = $(this).attr("href");
					}
				});
				
				$(menu).find("li").on("mouseleave", function(){
					$(this).children(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
				});
				
				if(settings.hideClickOut == true){
					$(document).on("click.menu touchstart.menu", function(ev){
						if($(ev.target).closest(menu).length == 0){
							$(menu).find(".dropdown, .megamenu").fadeOut(settings.speed);
						}
					});
				}
			}
			else{
				$(menu).find("li").on("mouseenter", function(){
					$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
				}).on("mouseleave", function(){
					$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.hideDelay).fadeOut(settings.speed);
				});
			}
		}
		
		function bindClick(){
			$(menu).find("li:not(.showhide)").each(function(){
				if($(this).children(".dropdown, .megamenu").length > 0){
					$(this).children("a").on("click", function(e){
						if($(this).siblings(".dropdown, .megamenu").css("display") == "none"){
							$(this).siblings(".dropdown, .megamenu").delay(settings.delay).slideDown(settings.speed).focus();
							$(this).parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(settings.speed);
							return false;
						}
						else{
							$(this).siblings(".dropdown, .megamenu").slideUp(settings.speed).focus();
							firstItemClick = 1;
						}
					});
				}
			});
		}
		
		function showCollapse(){
			$(menu).children("li:not(.showhide)").hide(0);
			$(menu).children("li.showhide").show(0);
			$(menu).children("li.showhide").on("click", function(){
				if($(menu).children("li").is(":hidden")){
					$(menu).children("li").slideDown(settings.speed);
					scrollable(true);
				}
				else{
					$(menu).children("li:not(.showhide)").slideUp(settings.speed);
					$(menu).children("li.showhide").show(0);
					$(menu).find(".dropdown, .megamenu").hide(settings.speed);
					scrollable(false);
				}
			});
		}
		
		function hideCollapse(){
			$(menu).children("li").show(0);
			$(menu).children("li.showhide").hide(0);
			scrollable(false);
		}	
		
		function rightAlignMenu(){
			$(menu).children("li").addClass("jsright");
			var items = $(menu).children("li");
			$(menu).children("li:not(.showhide)").detach();
			for(var i = items.length; i >= 1; i--){
				$(menu).append(items[i]);
			}			
			fixSubmenuRight();
		}
		
		function fixSubmenuRight(){
			$(menu).children("li").removeClass("last");
			var items = $(menu).children("li");
			for(var i = 1; i <= items.length; i++){
				if($(items[i]).children(".dropdown, .megamenu").length > 0){
					var lastItemsWidth = 0;
					for(var y = 1; y <= i; y++){
						lastItemsWidth = lastItemsWidth + $(items[y]).outerWidth();
					}
					if($(items[i]).children(".dropdown, .megamenu").outerWidth() > lastItemsWidth){
						$(items[i]).addClass("last");
					}
				}
			}
		}
		
		function fixSubmenuLeft(){
			$(menu).children("li").removeClass("fix-sub");
			var items = $(menu).children("li");
			var menuWidth = $(menu).outerWidth();
			var itemsWidth = 0;
			for(var i = 1; i <= items.length; i++){
				if($(items[i]).children(".dropdown, .megamenu").length > 0){
					if($(items[i]).position().left + $(items[i]).children(".dropdown, .megamenu").outerWidth() > menuWidth){
						$(items[i]).addClass("fix-sub");
					}
				}
			}
		}
		
		function unbindEvents(){
			$(menu).find("li, a").unbind();
			$(document).unbind("click.menu touchstart.menu");
			$(menu).find(".dropdown, .megamenu").hide(0);
		}
		
		function windowWidth(){
			return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
		}
		
		function scrollable(flag){
			if(settings.scrollable){
				if(flag){
					$(menuWrapper).css("max-height", settings.scrollableMaxHeight).addClass("scrollable");
				}
				else{
					$(menuWrapper).css("max-height", "auto").removeClass("scrollable");
				}
			}
		}
	}

}(jQuery));







