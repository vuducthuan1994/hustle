//current slider

var pos = 1;
var totalSlides = $('#carousel-1 .item').length;

var setAutoTimeCount;
var timeCount = 0;

var sizeAndroid = $(".container_android").width();

var widthApple = $(".container_apple ").width();
var heightApple = $(".container_apple ").height();

$(document).ready(function() {
    // css({"propertyname":"value","propertyname":"value",...});
    $(".container_android").hover(function() {


        $(this).css({
            "width": widthApple,
            "height": heightApple,
            "border-radius": "32.5px"
        });


        $(".container_apple").css({
            "width": sizeAndroid,
            "height": sizeAndroid,
        });

        $(".container_apple").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(".container_apple").css({
                    "border-radius": "32.5px",
                    "display": "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "border": "#5c5d62 solid 1px"
                });

            });
        $(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(".container_apple").css({
                    "display": "flex",
                    "align-content": "center",
                    "align-items": "center",
                    "border": "#5c5d62 solid 1px"
                });
            });

        $(".container_apple ").css("background-color", "transparent");
        $(".container-text-apple").css("max-width", "0%");
        $(".logo-apple").css({
            "position": "absolute",
            "margin": "auto",
            "top": "0",
            "right": "0",
            "bottom": "0",
            "left": "0",
        });
    });

    $(".container_android").mouseleave(function() {
        $(".container_apple").css({
            "border": "none",
            "background-color": "#282e38",
            "width": widthApple,
            "height": heightApple,
            "border-radius": "30px"
        });

        $(this).css({
            "height": sizeAndroid,
            "width": sizeAndroid
        });
        $(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
                $(this).css("border-radius", "32.5px");
            });


        $(".container-text-apple").css("max-width", "100%");
        $(".container-text-apple").css("max-width", "100%");
        $(".logo-apple").css({
            "position": "relative",
            "margin": "inherit"
        });

    });


    $('#carousel-1 div div').eq(0).addClass('active');
    $('#carousel-2 div div').eq(1).addClass('active');
    $("#carousel-1").carousel("pause");
    $("#carousel-2").carousel("pause");

    $("#previousSlideBtn").hover(function() {
        const windowsize = $(window).width();
        if (windowsize > 768) {
            $("#previousSlideBtn img").css("opacity", "1");
            $("#previousSlideBtn img").css("width", " 3.3855vw");
            $("#nextSlideBtn img").css("width", "2.24375vw");
            $(this).css("border", "#b41233 2px solid");
            $("#nextSlideBtn").css("border", "none");
            $("#nextSlideBtn img").css("opacity", "0.5");
            $(".cb-cursor").css("opacity", "0");
        }
    });


    $("#nextSlideBtn").hover(function() {
        const windowsize = $(window).width();
        if (windowsize > 768) {
            $("#previousSlideBtn img").css("width", "2.24375vw");
            $("#nextSlideBtn img").css("width", "3.3855vw");
            $("#nextSlideBtn img").css("opacity", "1");
            $(this).css("border", "#b41233 2px solid");
            $("#previousSlideBtn").css("border", "none");
            $("#previousSlideBtn img").css("opacity", "0.5");
            $(".cb-cursor").css("opacity", "0");
        }
    });

    $("#nextSlideBtn").mouseleave(function() {
        $(".cb-cursor").css("opacity", "1");
    });

    $("#previousSlideBtn").mouseleave(function() {
        $(".cb-cursor").css("opacity", "1");
    });


    $("#carousel-1").carousel("pause");
    $("#carousel-2").carousel("pause");

    $('#nextSlideBtn').click(function() {
        slideRight();
    });

    $('#previousSlideBtn').click(function() {
        $("#carousel-1").carousel("prev");
        $("#carousel-2").carousel("prev");
        resetTimeCount();
        setAutoTimeCount = setInterval(setColorTimeColunm, 50);
    });

    $('#carousel-1').on('slide.bs.carousel', function() {
        setTimeout(function() {
            currentIndexPop = $('#carousel-1 div.active').index() + 1;
            $('#counter .rotate').html('<b>' + get2D(currentIndexPop) + '</b>' + ' ' + '<b>/</b>' + ' ' + '<b>' + get2D(totalSlides) + '</b>');
        }, 1000);
    });

    // setAutoTimeCount = setInterval(setColorTimeColunm, 50);

    for (var i = 1; i <= 100; i++) {
        var li = document.createElement('li');
        $('#timecount-wrap').append(li);
    }

    //counter
    countSlides();

    //hide/show controls/btns when hover

    // //pause automatic slide when hover
    // $('#slider-wrap').hover(
    //     function() {
    //         $(this).addClass('active');
    //         clearInterval(autoSlider);
    //     },
    //     function() {
    //         $(this).removeClass('active');
    //         autoSlider = setInterval(slideRight, 3000);
    //     }
    // );



}); //DOCUMENT READY


/***********
TIMECOUNT 5S
************/

function setColorTimeColunm() {
    if (timeCount == 5000) {
        slideRight();
    }
    var temp = 100 - timeCount / 50;
    $('#timecount-wrap li:eq(' + temp + ')').addClass('active');
    timeCount = timeCount + 50;
}



/************
 SLIDE RIGHT
*************/
function slideRight() {
    $("#carousel-1").carousel("next");
    $("#carousel-2").carousel("next");
    resetTimeCount();
    setAutoTimeCount = setInterval(setColorTimeColunm, 50);
}

function resetTimeCount() {
    timeCount = 0;
    $('#timecount-wrap li').removeClass('active');
    clearInterval(setAutoTimeCount);
}



/************************
 //*> OPTIONAL SETTINGS
************************/
function get2D(num) {
    if (num.toString().length < 2) // Integer of less than two digits
        return "0" + num; // Prepend a zero!
    return num.toString(); // return string for consistency
}

function countSlides() {
    $('#counter .rotate').html('<b>' + get2D(pos) + '</b>' + ' ' + '<b>/</b>' + ' ' + '<b>' + get2D(totalSlides) + '</b>');
}