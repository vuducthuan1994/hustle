var totalImages = $("._container-small-images li img").length;


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

});