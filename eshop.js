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
    $("body").css("height", "8000px")
    $(".js-select-overlay").click(function() {
        $(this).removeClass("is-active")
        $(".product-custom-select-options").removeClass("is-active")
    })

    $(".js-product").click(function() {
        console.log("hahahha");
        $(".product-custom-select-options").addClass("is-active")
        $(".js-select-overlay").addClass("is-active");
    })

});