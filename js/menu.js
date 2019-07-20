// THIS PROJECT IS PART OF A UDEMY TUTORIAL ON GREENSOCK JAVASCRIPT ANIMATIONS
// LEARN HOW TO ANIMATE WITH JAVASCRIPT BY ENROLLING IN THE COURSE: https://www.udemy.com/javascript-animations-using-greensock/
// USE DISCOUNT CODE 'CODEPEN' TO TAKE THE COURSE FOR JUST $9.99! 

//NAV

$('.burgerIcon').hover(function() {
        TweenMax.to('.burgerLine:first-child', 0.2, { x: -10 });
        TweenMax.to('.burgerLine:last-child', 0.2, { x: 10 });
    },

    function() {
        TweenMax.to('.burgerLine:first-child', 0.2, { x: 0 });
        TweenMax.to('.burgerLine:last-child', 0.2, { x: 0 });
    });

var tlmenu = new TimelineMax({ paused: true });

tlmenu.to('.navMobie', 0.3, { autoAlpha: 1 })
    .staggerFromTo('.navMobie li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);

$('.burgerIcon').click(function() {
    tlmenu.play(0);
    $('html').addClass('is-main-menu-open');
});

$('.closeButton').click(function() {
    tlmenu.reverse(0);
});

$(document).ready(function() {
    $('.js-custom-cart').click(function() {
        $("#cart-background").addClass('is-open');
        $('html').addClass('is-cart-open');
        $("#navRightCart").css("right", "0");
    });
    $('.closeCart').click(function() {
        $("#cart-background").removeClass('is-open');
        $("#navRightCart").css("right", "-500px");
        $('html').removeClass('is-cart-open');
    });
    const $menu = $('#navRightCart');

    $('#cart-background').mouseup(function(e) {
        console.log("test")
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            &&
            $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $("#navRightCart").css("right", "-500px");
            $("#cart-background").removeClass('is-open');
            $('html').removeClass('is-cart-open');
        }
    });

});