$(document).ready(() => {
    $('#txt').blur(() => {
        console.log('on blur');
        $('#txt').css({
            'backgroundColor': 'grey'
        });
    }).keydown(() => {
        console.log('On keydown');
        $('#txt').css({
            'color': 'aqua'
        });
    });
});