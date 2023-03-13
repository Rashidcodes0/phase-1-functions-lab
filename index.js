// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const hq = 42;
    return Math.abs(hq - someValue);
}


function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    const block = 264;
    return distanceFromHqInBlocks(someValue) * block;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    const block = 264;
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * block;
    //returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }

    return fare;
}