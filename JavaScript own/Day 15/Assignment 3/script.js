$(document).ready(() => {
    $('h1').mouseenter(() => {
        console.log('enter');
        $('h1').css({
            'border': 'solid red'
        });
    });
});