var totalImages = $("._container-small-images li img").length;
var totalSizes = $(".js-custom-options-list--size li").length;
var totalCurrencys = $(".js-custom-options-list--currency li").length;

$(document).ready(function() {

    $('#_detail-image div div').eq(0).addClass('active');
    $('._container-small-images li img').eq(0).addClass('active');
    $('.carousel').carousel({
        pause: true,
        interval: false
    });

    for (let i = 0; i < totalImages; i++) {
        let indexImage = i;
        $('._container-small-images li img').eq(i).click(function() {
            $("#_detail-image").carousel(indexImage);
            $('._container-small-images li img').removeClass('active');
            $('._container-small-images li img').eq(indexImage).addClass('active');
        });
    }

    $(".js-select-overlay").click(function() {
        $(this).removeClass("is-active")
        $(".js-custom-options-list--size").removeClass("is-active")
        $(".js-custom-options-list--currency").removeClass("is-active")
    })

    $(".js-product").click(function() {
        $(".js-custom-options-list--size").addClass("is-active")
        $(".js-select-overlay").addClass("is-active");
    });
    $(".js-custom-label--currency").click(function() {
        $(".js-custom-options-list--currency").addClass("is-active");
        $(".js-select-overlay").addClass("is-active");

    });

    // SET SIZE PRODUCT IN FRONT END
    for (let i = 0; i < totalSizes; i++) {
        $('.js-custom-options-list--size li').eq(i).click(function() {
            $('.js-custom-options-list--size li').removeClass('is-active');
            $('.js-custom-options-list--size li').eq(i).addClass('is-active');
            var size = $('.js-custom-options-list--size li').eq(i).text();
            $('.js-product').text(size);
            $(".js-custom-options-list--size").removeClass("is-active")
        });
    }

    // SET SIZE CURRENTCY PRODUCT IN FRONT END
    for (let i = 0; i < totalCurrencys; i++) {
        $('.js-custom-options-list--currency li').eq(i).click(function() {
            $('.js-custom-options-list--currency  li').removeClass('is-active');
            $('.js-custom-options-list--currency  li').eq(i).addClass('is-active');
            var size = $('.js-custom-options-list--currency  li').eq(i).text();
            $('.js-custom-label--currency').text(size);
            $(".js-custom-options-list--currency").removeClass("is-active")
        });
    }
});