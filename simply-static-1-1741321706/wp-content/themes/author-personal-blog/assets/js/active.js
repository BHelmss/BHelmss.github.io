(function($) {
    "use strict";
    if ($.fn.menumaker) {
        let menuArgs = {
            title: "Menu", // The text of the button which toggles the menu
            breakpoint: 767, // The breakpoint for switching to the mobile view
            format: "multitoggle" // It takes three values: dropdown for a simple toggle menu, select for select list menu, multitoggle for a menu where each submenu can be toggled separately
        };
        let cssmenu = $("#cssmenu").menumaker(menuArgs);
        var siteNavigation = $('#cssmenu').children('ul');
        siteNavigation.find('a').on('focus blur', function() {
            let parentEl = $(this).parents('.menu-item, .page_item');
            let menufocus = parentEl.toggleClass('focus');
            if (parentEl.hasClass('focus')) {
                parentEl.children('.sub-menu').css('display', 'block');
                parentEl.children('.submenu-button').addClass('submenu-opened');
            }
        });
    }

    $('.scrooltotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    $('.contact-form').parents('.entry-content').addClass('contact-form-parent');
    $('table').addClass('table-bordered table').wrap('<div class="table-responsive"></div>');
    $('.shop_table').removeClass('table-bordered');
    $('.navigation.pagination').addClass('Page navigation example');
    $('.navigation.pagination div.nav-links').wrapInner('<ul class="pagination"></ul>');
    $('div.nav-links ul.pagination * ').wrap('<li class="page-item"></li>');
    $('p.wp-block-tag-cloud a').removeAttr('style');
    /* search template script*/
    $('.search-icon-wrapper a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $('.popup-search-template-area').toggleClass('visible');
        $('.widget_search input').focus();
    });
    $('.search-template-content-area-inner .container').on('click', function(event) {
        event.stopPropagation();
    });
    $('.popup-search-template-area').on('click', function() {
        $(this).removeClass('visible');
    });
    $('.search-template-hide-button a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $('.popup-search-template-area').removeClass('visible');
    });
    /*Book Purchase Website LIst Container*/
    var buyNowBtn = $('a.buy-now-button');
    var webListContainer = $('ul.website-list-container');
    buyNowBtn.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.website-list-container').toggleClass('open');
    });
    webListContainer.on('click', function(e) {
        e.stopPropagation();
        $(this).addClass('open');
    });
    $('body').on('click', function(e) {
        e.stopPropagation();
        webListContainer.removeClass('open');
    });

    // end mobile scripT
})(jQuery);

function apbMasonryActivate(){
    if (jQuery.fn.imagesLoaded) {
        var $grid = jQuery('.masonry_active').imagesLoaded(function() {
            $grid.masonry({
                itemSelector: '.blog-grid-layout',
            });
        });
    }
}

jQuery(window).on('load', function() {
    var $ = jQuery;
    $('#preloader-wrapper').fadeOut('slow', function() {
        $(this).remove();
    });
    // On before slide change
    $('.scrooltotop').css('display', 'none');
    /*Load Masonry When Window Is loaded*/
    apbMasonryActivate();
    $(".progress-bar-wrapper").hide();
});

jQuery(document).ready( function() {
    apbMasonryActivate();
    var $ = jQuery;
    const progressBar = $(".progress-bar-fill");
    const progressText = $(".progress-bar-text");

    $(window).on("load", function() {
        progressText.hide();
    });

    let percentage = 0;
    const interval = setInterval(function() {
        percentage += 10;
        progressBar.width(percentage + "%");
        $(".progress-bar-percentage").html(percentage + "%");

        if (percentage >= 100) {
            clearInterval(interval);
        }
    }, 200);
});

jQuery(window).on('scroll', function() {
    var topspace = jQuery(this).scrollTop();
    if (topspace > 300) {
        jQuery('.scrooltotop').css('display', 'block');
    } else {
        jQuery('.scrooltotop').css('display', 'none');
    }
    apbMasonryActivate();
})
