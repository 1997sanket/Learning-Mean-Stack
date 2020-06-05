$(document).ready(() => {
    $('h3').mouseover(
        () => {
            console.log('enter');
            $('h3').hide(1000);
        }).mouseleave(() => {
            console.log('leave');
            $('h3').show(1000);
        })

});