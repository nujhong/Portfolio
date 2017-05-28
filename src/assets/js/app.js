var pContainerHeight = $('#hero-wrapper').height(),
    pNavHeight = $('.selector').outerHeight(),
    offset = $('#content').offset().top - 80,
    subnavTop = $('.unfix-nav .sub-nav').offset().top;

$(document).foundation();

var $content = $('#content'),
    $body = $('html, body'),
    setting = {
        speed: Math.abs($content.offset().top - $(window).scrollTop())
    };

$(document).ready(function() {
    $('.tabs .tab').on('click', tabClick);
    $('.toggle-menu').on('click', menuClick);
});

$(window).on({
    'scroll': startParallax,
    'load': setTimeout(fadeCover, 2000),
    'mousehweel': stopScroll
});

function tabClick() {
    var $tabs = $('.tabs, .tab-content'),
        href = $(this).attr('data-tab'),
        $target = $('#' + href),
        $this = $(this);
    $tabs.removeClass('current');
    $this.add('#'+href).toggleClass('current');

    $body.animate({
        scrollTop: $target.offset().top - 80
    });
};

function menuClick() {
    $(this).toggleClass("is-menu-open");
    $("#menu").toggleClass("is-open");
    $("body").toggleClass("is-overlay-active");
};

function startParallax() {
    var wScroll = $(window).scrollTop(),
        $profile = $('.profile'),
        $wrapper = $('site-wrapper'),
        $nav = $('.unfix-nav .sub-nav');

    $profile.css({
        'transform': 'translate(0px, ' + wScroll + 'px)'
    });

    if (wScroll > subnavTop) {
        $wrapper.removeClass('unfix-nav').addClass('fix-nav');
    } else {
        $wrapper.addClass('unfix-nav').removeClass('fix-nav');
        $nav.css({
            'bottom': wScroll + 'px'
        });
    }
};

function fadeCover() {
    $('.overlay').fadeOut('slow', function() {
        $(this).remove();
    });
    $('body').removeClass('is-overlay-active');
};

function stopScroll() {
    $body.stop();
};
