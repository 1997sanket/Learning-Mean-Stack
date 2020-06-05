//When document is loaded
$(document).ready(function () {

    //TO hide
    $("#hide").click(function () {

        $("p").hide(500, () => {
            console.log('You click hide button');
        });
    });

    //To show
    $('#show').click(() => {
        $('p').show(500, () => {
            console.log('You clicked show button');
        });
    });


    //To Hide toggle
    $('#toggle').click(() => {
        $('p').toggle(500, () => {
            console.log('You clicked hide toggle');
        });
    });

    //TO fade toggle 
    $('#fadeToggle').click(() => {
        $('p').fadeToggle(500, () => {
            console.log('You click fade toggle');
        });
    });

    //Reduce opacity
    $('#fadeTo1').click(() => {
        $('p').fadeTo(500, 0.5);
    });

    //Increase opacity
    $('#fadeTo2').click(() => {
        $('p').fadeTo(500, 1); //Second parameter is opacity
    });


    //Animate
    $('#animate').click(() => {
        let x = $('#container');
        x.animate({
            height: '200px',
            width: '200px',
            left: '250px'
        }, 5000);

        let y = $('p');
        y.animate({
            fontSize: '2em'
        }, 5000)

    });



    //Stop Effect
    $('#stop').click(() => {
        $('#container').stop();

        $('p').stop();
    });


    //Get Value, lly we can get text as well as HTML
    $('#get').click(() => {
        alert('Value of the text box is : ' + $('#txt').val());
        alert('Text in p tag is : ' + $('p').text());
    });


    //Set Value, text, html
    $('#set').click(() => {
        $('#txt').val('<3 Fathima');
        $('p').text('Sanket');
    });


    //Remove Div tag
    $('#remove').click(() => {
        $('#container').remove();
    });

    //Empty Div tag
    $('#empty').click(() => {
        $('#container').empty();
    });

    //Setting CSS
    $('#setCss').click(() => {
        $('#container').css({
            "background-color": "aqua",
            "height": "100px",
            "width": "100px"
        });
    });

    //Getting CSS
    $('#getCss').click(() => {
        alert('Background color of container is : ' + $('#container').css('background-color'));
    });



});