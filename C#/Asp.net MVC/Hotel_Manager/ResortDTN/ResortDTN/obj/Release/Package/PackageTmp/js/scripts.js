(function($){

	"use strict";
	
	var rtime = new Date('1', '1', '2000', '12', '0', '0');
	var timeout = false;
	var delta = 200;
	$(window).resize(function () {
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout(resizeEnd, delta);
		}
	});	
		
	function resizeEnd() {
		if (new Date() - rtime < delta) {
			setTimeout(resizeEnd, delta);
		} else {
			timeout = false;
			sailor.rebind_menu_events();
		}               
	}
	
	function trigger_click(){
		
	};
	
	var sailor = {
	
		rebind_menu_events: function() {
			$('.advanced-search').hide();
			$('.search-trigger').off('click');
			$('.search-trigger').on('click', function (e) {
				e.preventDefault();
			   $('.advanced-search').slideToggle(500);
			});
		},	
		init: function () {
			
			//SEARCH FILTER
			$('.filter-show').hide(500);
			
			$('.filter-hide').on('click', function () {
			   $('aside.fixed').slideUp(500);
			   $('.filter-show').show(500);
			   $('.offset').css('margin-top','0');
			});
			
			$('.filter-show').on('click', function () {
			   $('aside.fixed').slideDown(500);
			   $('.filter-show').hide(500);
			   $('.offset').css('margin-top','197px');
			});
			
			
			//ADVANCED SEARCH
			$('.advanced-search').hide();
			$('.search-trigger').off('click');
			$('.search-trigger').on('click', function () {
			   $('.advanced-search').slideToggle(500);
			});
			
			$('.search-hide').on('click', function () {
			  $('.advanced-search').hide(500);
			});
			
			function disableSecledDateOfEndDateInput(startDateId, endDateId) {
				var startDate = $(startDateId).datepicker('getDate');
				startDate.setDate(startDate.getDate() + 1);
				$(endDateId).datepicker('option', 'minDate', startDate)
			}

			var endDate = new Date();
			
            $('#startDate').datepicker({
                minDate: 0,
                dateFormat: 'dd-mm-yy',
                onSelect: function () {
                	disableSecledDateOfEndDateInput('#startDate', '#endDate');
                },
                beforeShow: function() {
                	
                }
            });
            $('#endDate').datepicker({
                dateFormat: 'dd-mm-yy',
                minDate: 1,
                beforeShow: function() {
                	disableSecledDateOfEndDateInput('#startDate', '#endDate');
                }
            });
            
            
            $('#r_startDate').datepicker({
                minDate: 0,
                dateFormat: 'dd-mm-yy',
                onSelect: function () {
                    disableSecledDateOfEndDateInput('#r_startDate', '#r_endDate');
                },
                beforeShow: function() {

                }
            }); 
            $('#r_endDate').datepicker({
                dateFormat: 'dd-mm-yy',
                minDate: 1,
               	beforeShow: function() {
               		disableSecledDateOfEndDateInput('#r_startDate', '#r_endDate');
               	}
            });
            
            
			$('#birthDate').datepicker({
				changeMonth: true,
				changeYear: true,
				yearRange: '1920:2000',
				minDate: new Date(1920, 1 - 1, 25),
				maxDate: '+80Y'
			});		
			
			// CUSTOM FORM ELEMENTS
			$('input[type=radio], input[type=checkbox],input[type=number],select').uniform();			
			
			// ACCORDION
			$('.accordion dd').hide();
			$('.accordion dt').on('click', function () {
				$(this).next('.accordion dd').slideToggle(500);
				$(this).toggleClass('expanded');
			});
			
			$('.accordion .next-step').on('click', function (e) {
				$(this).closest('.accordion dd').next('.accordion dt').next('.accordion dd').slideToggle(500);
				$(this).closest('.accordion dd').next('.accordion dt').toggleClass('expanded');
				e.preventDefault();
			});
			
			$('.bookingSteps .thank-you-note').hide();
			$('.accordion .submit-step').on('click', function (e) {
				$(this).closest('.accordion').slideToggle(500);
				$('.bookingSteps .thank-you-note').slideToggle(500);

				$('html, body').animate({
					scrollTop: parseInt($("#tab-navigation").position().top, 10)
				}, 1000);

				e.preventDefault();
			});			
			
			// BOOKING STEPS
			$('.booking').hide();
			$('.availability .button').on('click', function () {
				$('.availability').hide();
				$('.selectDates').show(500);
			});
			
			$('.selectDates .button').on('click', function () {
				$('.selectDates').hide();
				$('.bookingSteps').show(500);
			});
			
			
			// CONTACT FORM
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").show(500,function() {
				$('#message').hide();
				$('#submit')
					.after('<img src="images/contact-ajax-loader.gif" class="loader" />')
					.attr('disabled','disabled');
				
				$.post(action, { 
					name: $('#name').val(),
					email: $('#email').val(),
					phone: $('#phone').val(),
					comments: $('#comments').val()
				},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled'); 
				});
				
				});
				return false; 
			});
			
			// TABS
			$('.content .tab-content').hide().first().show();
			$('.content .tabs li:first').addClass('current');

			$('.content .tabs a').on('click', function (e) {
				e.preventDefault();
				$(this).closest('li').addClass('current').siblings().removeClass('current');
				$($(this).attr('href')).show().siblings('.tab-content').hide();
			});

			var hash = $.trim( window.location.hash );
			if (hash) $('.content .tabs a[href$="'+hash+'"]').trigger('click');
			
			
			// SMOOTH ANCHOR SCROLLING
			var $root = $('html, body');
			$('.intro .button, .anchor').on('click', function(e) {
				var href = $.attr(this, 'href');
				if (typeof ($(href)) != 'undefined' && $(href).length > 0) {
					var anchor = '';
					
					if(href.indexOf("#") != -1) {
						anchor = href.substring(href.lastIndexOf("#"));
					}
					
					var scrollToPosition = $(anchor).offset().top - 80;
						
					if (anchor.length > 0) {
						$root.animate({
							scrollTop: scrollToPosition
						}, 500, function () {
							window.location.hash = anchor;
							// This hash change will jump the page to the top of the div with the same id
							// so we need to force the page to back to the end of the animation
							$('html').animate({ 'scrollTop': scrollToPosition }, 0);
						});
						e.preventDefault();
					}
				}
			});

			//MAIN MENU 
			// $().jetmenu();		
		
		},
		load: function () {
			// UNIFY HEIGHT
			var maxHeight = 0;
				
			$('.heightfix').each(function(){
				if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
			});
			$('.heightfix').height(maxHeight);	

			// PRELOADER
			$('.preloader').fadeOut();
		}
	}
	
	$(document).ready(function () {
	
		sailor.init();
		
		var $root = $('html, body');
		if (window.location.hash && window.location.hash == '#tab-navigation') {
			var scrollToPosition = $('#tab-navigation').offset().top - 80;

			$root.animate({
				scrollTop: scrollToPosition
			}, 500, function () {
				window.location.hash = 'tab-navigation';
				// This hash change will jump the page to the top of the div with the same id
				// so we need to force the page to back to the end of the animation
				$('html').animate({ 'scrollTop': scrollToPosition }, 0);
			});
		}
	});
	
	$(window).on('load', function() {
		sailor.load();
	});	

	mycode();


})(jQuery);

function mycode() {
	// end test code

	function youtube_parser(url) {
	    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    return match && match[7].length == 11 ? match[7] : false;
	  }
	$('.js-show-more-filter').click(function(e) {
		e.preventDefault();
		$('.js-show-more-filter-block').slideToggle();
	})
 //  	$('.date_picker').each(function(index, el) {
	// 	var date_picker_id = 'date_picker_' + index;
	// 	$(el).addClass(date_picker_id);
	// 	$('.' + date_picker_id).datepicker();
	// })
	$(".range-slider").each(function(index, el) {
		var $slider = $(el);
		var min = parseInt($slider.attr('min') || 0);
		var max = parseInt($slider.attr('max') || 500);
		var initial_val = parseInt($slider.attr('value') || 250);
		var step =  parseInt($slider.attr('step') || 1);
		var postfix = $slider.attr('postfix') || '';
		console.log(step);

		$slider.ionRangeSlider({
			min: min,
			max: max,
			from: initial_val,
			step: step,
			prettify_separator: ".",
			postfix: postfix + ''
		});
	})	

	$('.js-video-popup-show').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var $popup = $(".js-video-popup");
		var $video_frame = $('#video-popup-frame');
		var video_id = youtube_parser($this.attr('video-src'));
		var embed_url = "https://www.youtube.com/embed/" + video_id + "?";
		$video_frame.attr('src', embed_url + 'playlist=' + video_id + '&rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1&loop=1&autohide=2&mute=0&controls=0');

		$popup.fadeIn();
	})
	$('.js-video-popup-hide').click(function(e) {
		$(".js-video-popup").fadeOut();
		$('#video-popup-frame').attr('src', '');
	});
	$('.mag-gallery').each(function(index, el) {
		var id = 'mag-gallery-' + index;
		el.classList.add(id);
		$('.' + id + ' .mag-gallery-item').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	});

	function setWidthAboutPage() {
		var about_container_width = $('.js-a_p-hi-container').width();
		var about_occupied = $('.js-a_p-hi-occupied').width();
		var window_width = $(window).width();
		$('.js-a_p-hi-target').width(window_width - about_occupied - (window_width - about_container_width) / 2);
	}
	setWidthAboutPage();

	$(window).resize(function() {
		setWidthAboutPage();
	})


	// meeting page slide 
	$('.meeting-owl').owlCarousel({
	    loop:true,
	    margin:40,
	    items: 1,
	    smartSpeed: 800,
	    nav: true,
	    navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
	});

	// detatail room
	$('.room_detail-img-list').each(function(index, el) {
		var _this = $(this);
		var id = 'room_detail-img-list-' + index;
		_this.attr('id', id);

		var viewImg = _this.siblings('.js-room-img');
		var viewImgId = 'js-room-img-' + index;
		viewImg.attr('id', viewImgId);
 		new Swiper('#' + id, {
			// direction: 'vertical',
			slidesPerView: 'auto',
		    freeMode: true,
		    scrollbar: {
		        el: '.swiper-scrollbar',
		    },
		    mousewheel: true,
		    on: {
		    	init: function() {
		    		this.update();
		    	}
		    }
		})

		$('#' + id + ' .item').click(function() {
			var _this = $(this);
			var img_src = _this.find('img').attr('src');
			// var img_src = _this.attr('img-src');
			if (_this.hasClass('active')) {
				return;
			} else {
				_this.siblings('.item').removeClass('active');
				_this.addClass('active');
				viewImg.attr('src', img_src);
			}
		})

		$(window).resize(function() {

		})
	})

	$('.g_p-item-container').each(function() {
		var grid = $('.g_p-item-container').isotope({
		    // set itemSelector so .grid-sizer is not used in layout
		    itemSelector: '.g_p-item',
		    percentPosition: true,
		    filter: '*'
		})

		$('.js-g_p-filters .js-filter').click(function(e) {
			e.preventDefault();
			console.log('click');
			var $this = $(this);
			var filter  = $this.attr('filter');

			if($this.hasClass('active')) {
				return;
			} else {
				grid.isotope({filter: filter});
				$this.addClass('active').siblings().removeClass('active');
			}
		})
	})

	$('.js-gallery-detail a').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});

var iframeSize = function iframeSize(w, h, ratio) {
	var iw, ih;
	var rw = 16;
	var rh = 9;
	if (w / h > rw / rh) {
		iw = w;
		ih = rh * w / rw;
	} else {
		iw = rw * h / rh;
		ih = h;
	}
	return { width: iw, height: ih };
};
	new Swiper('.index-swiper', {
		slidesPerView: 1,
		speed: 800,
		navigation: {
		    nextEl: '.index-swiper .arrow .next',
		    prevEl: '.index-swiper .arrow .prev',
		},
		pagination: {
			el: '.index-swiper-pagination',
		    clickable: true
		},
		on: {
			init: function() {
				var player = new videojs('index-banner-video', {
					controls: false, 
					autoplay: false,
				});

				var video_wrapper = $('.index-swiper .video-wrapper');

				$('.index-swiper .play-btn').click(function(e) {
					var $this = $(this);

					var video_type = $this.attr('video-type');
					var video_url = $this.attr('video-url');

					player.src({
						type: 'video/' + video_type,
						src: video_url
					})

					var video_container_size = iframeSize(video_wrapper.width(), video_wrapper.height());
					video_wrapper.find('.video-js').css({
						width: video_container_size.width + 'px',
						height: video_container_size.height + 'px'
					});

					setTimeout(function() {
						player.play();
					}, 200)

					video_wrapper.addClass('open');
				})

				video_wrapper.find('.overlay').click(function() {
					if (player.paused()) {
						player.play();
					} else {
						player.pause();
					}
				})

				player.on("pause", function () {
					video_wrapper.removeClass('open');
					player.pause();
				});
				player.on('ended', function() {
					video_wrapper.removeClass('open');
				});

				$(window).resize(function() {
					var video_container_size = iframeSize(video_wrapper.width(), video_wrapper.height());
					video_wrapper.find('.video-js').css({
						width: video_container_size.width + 'px',
						height: video_container_size.height + 'px'
					});
				})
			}
		}
	}),

	$('.swiper-rooms').each(function(index, el) {
		var _this = $(this);
		id = 'swiper-room-' + index;

		_this.attr('id', id);
		_this.find('.room-swiper-pagination')

		new Swiper('#' + id, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			pagination: {
				el: '#' + id + ' .room-swiper-pagination',
			    clickable: true
			},
			navigation: {
			    nextEl: '#' + id + ' .room-next',
			    prevEl: '#' + id + ' .room-prev',
			},
		})
	})
}

$('.x-menu-close').click(function(e) {
	var menu_wrapper = $('.jetmenu');
	if(menu_wrapper.is(':visible')) {
		menu_wrapper.slideUp();
	} else {
		menu_wrapper.slideDown();
	}
})

$('.booking-check').click(function(e) {
	console.log('click');
	e.preventDefault();
	$('.js-booking-form').slideToggle(500);
})
$('.mobile-menu-trigger').click(function(e) {
	e.preventDefault();
	$('nav.mobile-menu ul').slideToggle(500);
})

$('#holiday-promo').modal('show');