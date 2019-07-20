var totalImages = $("._container-small-images li img").length;
var totalSizes = $(".js-custom-options-list--size li").length;
var totalCurrencys = $(".js-custom-options-list--currency li").length;
var totalColor = $(".select-colors span").length;

var sizeAndroidFooter = $(".footer-app-android").width();

var widthAppleFooter = $(".footer-app-apple").width();
var heightAppleFooter = $(".footer-app-apple").height();

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
            $(".js-select-overlay").removeClass("is-active");
        });
    }

    // SET type CURRENTCY PRODUCT IN FRONT END
    for (let i = 0; i < totalCurrencys; i++) {
        $('.js-custom-options-list--currency li').eq(i).click(function() {
            $('.js-custom-options-list--currency  li').removeClass('is-active');
            $('.js-custom-options-list--currency  li').eq(i).addClass('is-active');
            var size = $('.js-custom-options-list--currency  li').eq(i).text();
            $('.js-custom-label--currency').text(size);
            $(".js-custom-options-list--currency").removeClass("is-active");
            $(".js-select-overlay").removeClass("is-active");
        });
    }
    initColor();
    setColor();


    // ANIMATION FOOTER
    $(".footer-app-android").hover(function() {
        $(this).css({
            "width": widthAppleFooter,
            "height": heightAppleFooter,
            "border-radius": "32.5px"
        });


        $(".footer-app-apple").css({
            "width": sizeAndroidFooter,
            "height": sizeAndroidFooter,
        });

        $(".footer-app-apple").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(".footer-app-apple").css({
                    "border-radius": "32.5px",
                    "display": "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "border": "#5c5d62 solid 1px"
                });

            });
        $(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(".footer-app-apple").css({
                    "display": "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "border": "#5c5d62 solid 1px"
                });
            });

        $(".footer-app-apple ").css("background-color", "transparent");
        $(".container-text-apple").css("max-width", "0%");
        $(".footer-logo-apple").css({
            "position": "absolute",
            "margin": "auto",
            "top": "0",
            "right": "0",
            "bottom": "0",
            "left": "0",
        });
    });


    // WHEN OUT HOVER ANDROID LOGO
    $(".footer-app-android").mouseleave(function() {
        $(".footer-app-apple").css({
            "border": "none",
            "background-color": "white",
            "width": widthAppleFooter,
            "height": heightAppleFooter,
            "border-radius": "30px"
        });

        $(this).css({
            "height": sizeAndroidFooter,
            "width": sizeAndroidFooter
        });
        $(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(this).css("border-radius", "32.5px");
            });


        $(".container-text-apple").css("max-width", "100%");
        $(".container-text-apple").css("max-width", "100%");
        $(".footer-logo-apple").css({
            "position": "relative",
            "margin": "inherit",
            "margin-left": "3rem"
        });

    });
});

function initColor() {
    for (let i = 0; i < totalColor; i++) {
        var colorCode = $(".select-colors span").eq(i).attr("color-code");
        $(".select-colors span").eq(i).css("background-color", colorCode);
        if (colorCode == '#ffffff') {
            $(".select-colors span").eq(i).css("border", "#9c9fa3 1px solid");
            $(".select-colors span div").eq(i).css("background-color", "#282e38");
        }
    }
}

function setColor() {
    for (let i = 0; i < totalColor; i++) {
        $('.select-colors span').eq(i).click(function() {
            $('.select-colors span div').removeClass('is-active');
            $('.select-colors span div').eq(i).addClass('is-active');
        });
    }
}