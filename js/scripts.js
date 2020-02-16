$(document).ready(() => {
    /**
     * HEADER
     */
    $(document).on('scroll', () => {
        let fixedHeader = $('.header_fixed');
        if ($(document).scrollTop() < 200) {
            fixedHeader.removeClass('header_fixed_show');
        }
        else {
            fixedHeader.addClass('header_fixed_show');
        }
    });

    /**
     * ANCHOR
     */
    let headerNav = $('.header__nav');
    let sDocument = $('body, html');

    headerNav.on('click', 'a', (e) => {
        sDocument.stop(true, false);
        e.preventDefault();
        let id = $(e.target).attr('href'),
            top = $(id).offset().top - 80;
        sDocument.animate({scrollTop: top}, 1500);
    });

    /**
     * MODAL
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
        beforeShow: function() {
            $('html').addClass('fancybox-scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('fancybox-scroll-disable');
        }
    });
});