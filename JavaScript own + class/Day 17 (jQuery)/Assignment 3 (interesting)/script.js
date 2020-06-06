$(document).ready(() => {

    //Watermelon
    $('#watermelon').click((event) => {


        if (event.target.checked) {

            let watermelon = `<li class="canRemoveLaterWatermelon"> Watermelon </li>`;
            $('#ul').append(watermelon);
        } else {
            $('li').remove('.canRemoveLaterWatermelon');
        }
    })



    //Orange
    $('#orange').click((event) => {

        if (event.target.checked) {

            let orange = `<li class="canRemoveLaterOrange"> Orange </li>`;
            $('#ul').append(orange);
        } else {
            $('li').remove('.canRemoveLaterOrange');
        }
    })



    //Drangon fruit
    $('#dragon').click((event) => {

        if (event.target.checked) {

            let dragon = `<li class="canRemoveLaterDragon"> Dragon </li>`;
            $('#ul').append(dragon);
        } else {
            $('li').remove('.canRemoveLaterDragon');
        }
    })
})