
let js = "amazing";

console.log(23);

let firstName = "Stellar";
console.log(firstName);

// Values and Variables

/*
let country = "Nigeria";
let continent = "Africa";
let population = 600;

console.log(country);
console.log(continent);
console.log(population);


// Datatypes

let isIsland = false;

let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


LECTURE: let, const and var

let language;


language = "Yoruba"
const country = "Nigeria"
const continent = "Africa";
let isIsland = false;
isIsland = true;

console.log(typeof isIsland);
console.log(typeof continent);
console.log(typeof country);
console.log(typeof language);
*/

// Coding Challenge #1
// Test Data 1
/* 
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Test Data 2
let markMass1 = 95;
let johnMass1 = 85;
let markHeight1 = 1.88;
let johnHeight1 = 1.76;
let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log(markBMI1, johnBMI1);
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);
*/ 

// Basic Operators
let country = "Nigeria";
let continent = "Africa";
let population = 10;
let language = "Yoruba"
console.log(population / 2);
population++;
console.log(population);
console.log(population > 200);
console.log(population < 33);
let description = 
country +
" is in"
continent + 
" and its"
population + 
" million people speak" 
language;
console.log(description);

// Strings and Template Literals
const newMe = "Oluwatobiloba";
const birthYear = 2002;
const year = 2026;
const job = "lawyer, developer and fashion designer.";
const Stellar = `I'm ${newMe}, a ${year - birthYear} years old. I am a ${job}`;
console.log(Stellar);

// Assignment on template literals
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

// What if and else statement
const ass = 23;
const noAss = 0;
if (ass >= 1) {
    console.log("Yes");
} else {
    console.log("No");
};

// Ass on if else statement
if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is lower than the average`);
};

// Coding Challenge #2
// Test Data
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
};

// Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

