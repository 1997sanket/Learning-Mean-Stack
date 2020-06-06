$(document).ready(() => {
    //Aqua 
    $('#aqua').click(() => {
        if (event.target.checked) {
            $('#txt').keydown(() => {
                $('#txt').css({
                    'color': 'aqua'
                })
            })
        }
    })


    //Bisque 
    $('#bisque').click(() => {
        if (event.target.checked) {
            $('#txt').keydown(() => {
                $('#txt').css({
                    'color': 'bisque'
                })
            })
        }
    })


    //Red 
    $('#red').click(() => {
        if (event.target.checked) {
            $('#txt').keydown(() => {
                $('#txt').css({
                    'color': 'red'
                })
            })
        }
    })

})