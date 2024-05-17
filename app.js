// Part 1


const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const  sizeOfEachPlant =  0.8;
const startingAreaOfPlants = 20;
const weekOne = sizeOfEachPlant * startingAreaOfPlants * 2;
const weekTwo = sizeOfEachPlant * startingAreaOfPlants * 4;
const weekThree = sizeOfEachPlant * startingAreaOfPlants *8;
const maxCapacity = area / sizeOfEachPlant;


console.log(area);
console.log(weekOne);
console.log(weekTwo);
console.log(weekThree);


let fiftyPercent = (50 * area) / 100;
let seventyFivePercent = (75 * area) / 100;
let ninetyFivePercent = (95 * area) / 100;


console.log(fiftyPercent);
console.log(seventyFivePercent);
console.log(ninetyFivePercent);


// Planted


console.log(weekOne < fiftyPercent);




// Monitored


console.log(weekOne < seventyFivePercent);


//Pruned


console.log(weekOne > ninetyFivePercent);


// Part 2


const weekFour = sizeOfEachPlant * startingAreaOfPlants * 16;
const weekFive= sizeOfEachPlant * startingAreaOfPlants * 32;
const weekSix = sizeOfEachPlant * startingAreaOfPlants *64 ;
const weekSeven = sizeOfEachPlant * startingAreaOfPlants *128;
const weekEight = sizeOfEachPlant * startingAreaOfPlants *256;
const weekNine = sizeOfEachPlant * startingAreaOfPlants * 512;
const weekTen = sizeOfEachPlant * startingAreaOfPlants * 1024;


console.log(weekFour);
console.log(weekFive);
console.log(weekSix);
console.log(weekSeven);
console.log(weekEight);
console.log(weekNine);
console.log(weekTen);


// Part 3

try {
    if (weekOne < fiftyPercent) {
        console.log("Planted");
    } else if (weekOne < seventyFivePercent) {
        console.log("Monitored");
    } else if (weekOne > ninetyFivePercent) {
        console.log("Pruned");
    } else {
        console.log("Error");
    }
} catch (error) {
        console.log("Error",error);
}  

















