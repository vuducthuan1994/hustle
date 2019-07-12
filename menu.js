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
});

$('.closeButton').click(function() {
    tlmenu.reverse(0);
});
$('#cartMenu').click(function() {
    $("#navRightCart").css("right", "0");
    $(".container-menu-mobie").css("opacity", 0.5);
});

$('.closeCart').click(function() {
    console.log("close cart")
    $("#navRightCart").css("right", "-500px");
    $(".container-menu-mobie").css("opacity", 1);

});

const $menu = $('#navRightCart');

$(document).mouseup(function(e) {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        &&
        $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $("#navRightCart").css("right", "-500px");
    }
});