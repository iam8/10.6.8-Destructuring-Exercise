// Ioana Alex Mititean
// 10/14/22
// Exercise 10.6.8: Destructuring


// Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// Object Destructuring 2
let planetFacts = {
    numPlanets2: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets2, ...discoveryYears} = planetFacts;
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}));
// Your name is Alejandro and you like purple

console.log(getUserData({firstName: "Melissa"}));
// Your name is Melissa and you like green

console.log(getUserData({}));
// Your name is undefined and you like green


// Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


// Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings);
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


// Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers) // [10, 30, 20]


// ES2015 Refactoring ------------------------------------------------------------------------------

// ES5 Assigning Variables to Object Properties
var obj0 = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a0 = obj0.numbers.a;
var b0 = obj0.numbers.b;
console.log("a (ES5 result):", a0);
console.log("b (ES5 result):", b0);

// ES2015 Assigning Variables to Object Properties With Destructuring
const obj1 = {
    numbers: {
        a: 1,
        b: 2
    }
}

const {numbers: {a: a1, b: b1}} = obj1; // a1 = 1, b1 = 2
const {a2, b2} = obj1.numbers; // Instructor solution: even shorter
console.log("a (ES2015 result):", a1);
console.log("b (ES2015 result):", b1);


// ES5 Array Swap
var arr0 = [1, 2];
var temp = arr0[0];
arr0[0] = arr0[1];
arr0[1] = temp;
console.log("Array (ES5 result):", arr0);

// ES2015 Array Swap With Destructuring
let arr1 = [1, 2];
[arr1[0], arr1[1]] = [arr1[1], arr1[0]]; // arr1 = [2, 1]
console.log("Array (ES2015 result):", arr1);


// raceResults function
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));
