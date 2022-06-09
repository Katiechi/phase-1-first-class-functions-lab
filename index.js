// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
     
    return [...drivers.slice(0,2)]
}
console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers = function(){
     
    return [...drivers.slice(-2)]
}
console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (){

    return function multiplier(a=5,b=5){

        return a*b
    }
    
}
console.log(createFareMultiplier())

const  fareDoubler = function(a){
    if(typeof a === 'number'){
        return a*2
    }
    else{
        return `Please input a number`
    }
}
console.log(fareDoubler(5))


const  fareTripler = function(a){
    if(typeof a === 'number'){
        return a*3
    }
    else{
        return `Please input a number`
    }
}
console.log(fareTripler(5))

const selectDifferentDrivers = function(arrayOfDrivers,functionName){
    return functionName(arrayOfDrivers)
}
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))

