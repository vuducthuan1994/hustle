$(document).ready(function() {

    $('.js-filter').click(function() {
        $('html').addClass("is-filter-dropdown-open");
        var p = $(this);
        var offset = p.offset();
        var w = $(window);
        var labelMenu = $(this).data("filter-default");
        console.log(labelMenu);
        $(".filter-dropdown-label").text(labelMenu);
        $('.filter-dropdown-wrapper').css({
            "left": offset.left - w.scrollLeft(),
            "top": offset.top - w.scrollTop()
        })

    });

    // CLOSE MENU HEADER //
    $('.filter-dropdown-close').click(function() {
        $('html').removeClass("is-filter-dropdown-open ");
    })
    $(".filter-dropdown-label").click(function() {
        $('html').removeClass("is-filter-dropdown-open ");
    })
});