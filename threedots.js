// Normal Array declare 

const age = [55, 20, 30, 29, 66];
const age2 = [33, 22, 99, 100, 83];

const result = age.concat(age2).concat([10]);
console.log(result);



// Declare Array with three dots(...) by Es6


const friendAge = [33, 20, 99, 77, 66];
const friendAge2 = [99, 90, 66, 77, 88, 99];
const friendAge3 = [60, 77, 88, 99, 96,99];

const allArray = [...friendAge, ...friendAge2, 88, ...friendAge3];

console.log(allArray);


// Find maximum Value Normal Method 

const minister = 500;
const shocib = 300;
const business = 5000;

const maximum = Math.max(business, minister, shocib);
console.log(maximum);

// Find maximum Value by three dots (...) in Es6

const allMoney = [5000, 9000, 3000];
const maximumMoney = Math.max(...allMoney);
console.log(maximumMoney);