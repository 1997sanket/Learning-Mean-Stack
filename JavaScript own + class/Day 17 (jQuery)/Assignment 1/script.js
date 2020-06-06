$(document).ready(() => {
    $('button').click(() => {
        console.log('button clicked');
        $('#txt2').val($('#txt1').val());
    });
});