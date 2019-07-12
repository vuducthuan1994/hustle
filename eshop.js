var totalImages = $("._container-small-images li img").length;
console.log(totalImages);

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
});