$(document).ready(() => {

    //Toggle
    $('#toggleBtn').click(() => {
        $('img').slideToggle('slow');

    });

    //Animate
    $('#animateBtn').click(() => {
        $('img').animate({
            height: '70%',
            width: '60%'
        });
    });


    //Hide
    $('#hideBtn').click(() => {
        $('img').hide('slow', () => {
            $('h1').css({
                'display': 'block'
            });
        });
    });

});