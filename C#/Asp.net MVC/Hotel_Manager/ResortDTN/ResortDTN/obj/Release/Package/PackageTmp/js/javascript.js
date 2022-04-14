$('#owl1').owlCarousel({
    items:4,
    nav: true,
    navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})
$('#owl2').owlCarousel({
    items:1,
    dots:true,
    responsiveClass:true,
})
$('#owl3').owlCarousel({
    items:5,
    dots:true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        800:{
            items:4,
        },
        1000:{
            items:5,
        }
    }
})
$('#owl4').owlCarousel({
    items:4,
    dots:true,  
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        800:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})
$('#owl5').owlCarousel({
    items:4,
    dots:true,  
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        800:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

new Swiper('#news_events', {
    slidesPerView: 1,
    pagination: {
        el: '#news_events .pagination'
    }
})
new Swiper('#h-news-events-swiper-mo', {
    slidesPerView: 1,
    pagination: {
        el: '#h-news-events-swiper-mo .pagination',
        clickable: true
    }
});


var occupied_space = $('.Experience').width();
var container_width = $('.js-container').width();
var window_width = $(window).width();
var video_thumb_width = window_width - occupied_space - (window_width - container_width) / 2;
$('.video1').width(video_thumb_width);