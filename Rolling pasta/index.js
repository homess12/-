$(function() {
    $.scrollify({
        section:".pages > .page",
        updateHash: true,
        touchScroll: true,
        setHeights: false,
        before:function(i, panels) {
            var ref = panels[i].attr("data-section-name");
            $('.top-bar .menu-box-1 > ul > li').removeClass('active');
            $('.top-bar .menu-box-1 > ul > li.' + ref + '-menu-item').addClass('active');
            
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            
            if ( ref != 'page-1' ) {
                setTimeout(function() {
                    $('.top-bar').addClass('hover');
                }, 600);
            }
            else {
                setTimeout(function() {
                    $('.top-bar').removeClass('hover');
                }, 600);
            }
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".pages > .page").each(function(i) {
                activeClass = "";
                if ( i === 0 ) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".page-indicator-box").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
            $('.top-bar .menu-box-1 > ul > li > a').on("click", $.scrollify.move);
            $('.scroll-down-icon-box > a').on("click", $.scrollify.move);
        }
    });
});

$('.my-carousel-1 > .owl-carousel').owlCarousel({
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    margin:0,
    nav:true,
    navText:['<span class="btn-left"></span>', '<span class="btn-right"></span>'],
    responsive:{
        0:{
            items:1
        }
    },
    autoplayHoverPause:true
});

$('.popup-box-1 .btn-close').click(function() {
    $(this).closest('.popup-box-1').remove();
    
    $('.page-1 .scroll-down-icon-box').addClass('active');
});

setTimeout(function() {
    $.scrollify.move("#page-3");
}, 300);

function SlickSlider1__init() {
    // 캐러셀 그리기
    $('.page-2 .slick-slider-box-1 > .slick-slider').slick({
        dots:false,
        arrows:true,
        prevArrow:$('.slick-slider-box-1 > .btn-left'),
        nextArrow:$('.slick-slider-box-1 > .btn-right')
    });
    
    // On before slide change
    $('.page-2 .slick-slider-box-1 > .slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        
        $('.page-2 .head > .con > .menu-cell > .list-1 > li.selected').removeClass('selected');
        $('.page-2 .head > .con > .menu-cell > .list-1 > li').eq(nextSlide).addClass('selected');
        
    });
    
    $('.page-2 .head > .con > .menu-cell > .list-1 > li').click(function() {
        var index = $(this).index();
        $('.page-2 .slick-slider-box-1 > .slick-slider').slick('slickGoTo', index, false);
    });
}

SlickSlider1__init();

function SlickSlider2__init() {
    // 캐러셀 그리기
    $('.page-3 .slick-slider-box-2 > .slick-slider').slick({
        dots:false,
        arrows:true,
        prevArrow:$('.page-3 .slick-slider-box-2 > .btn-left'),
        nextArrow:$('.page-3 .slick-slider-box-2 > .btn-right')
    });
    
    // On before slide change
    $('.page-3 .slick-slider-box-2 > .slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        
        $('.page-3 .head > .con > .list-1 > li.selected').removeClass('selected');
        $('.page-3 .head > .con > .list-1 > li').eq(nextSlide).addClass('selected');
        
    });
    
    $('.page-3 .head > .con > .list-1 > li').click(function() {
        var index = $(this).index();
        $('.page-3 .slick-slider-box-2 > .slick-slider').slick('slickGoTo', index, false);
    });
}

SlickSlider2__init();

$('.page-4 > .list-box-1 > .body > .row > li').click(function() {
    var duration = 300;
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active')
        $(this).find(' > .content').slideUp(duration);
    }
    else {
        // 기존에 활성화된 녀석들 정리
        $(this).siblings('.active').find(' > .content').slideUp(duration);
        $(this).siblings('.active').removeClass('active');
        
        // 현재 활성화 시켜야 하는 녀석 활성화
        $(this).addClass('active');
        $(this).find(' > .content').slideDown(duration);
    }
})

$('.page-4 > .list-box-1 > .body > .row > li > .content').click(function() {
    return false;
});