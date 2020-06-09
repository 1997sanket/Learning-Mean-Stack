const ride = new Promise((resolve, reject) => {

    //Making a promise
    let arrived = false;

    //If successful 
    if (arrived) {
        resolve('Driver arrived and promise was fulfilled');
    }

    //If couldnt make it
    else {
        reject('Driver stood us up and promise was broken')
    }
})



ride

    .then((result) => {
        console.log(result);

        //Driver arrived, promise fulfilled
    })

    .catch((error) => {
        console.log(error);

        //Driver bailed out, promise broken
    })
