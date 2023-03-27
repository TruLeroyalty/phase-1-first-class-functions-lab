const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier (num) {
    return function (number) {
        return number * num
}
}

function fareDoubler(num) {
    return num * 2
}

function fareTripler(num) {
    return num * 3;
}

function selectDifferentDrivers(drivers,func){
    return func(drivers)
}



