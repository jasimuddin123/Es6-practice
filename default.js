
// Normal as usual function 
function add(num1, num2){

    return num1 + num2;
}

const total = add(20, 25);

console.log(total);

// Make default value in function parameter

function add(add1, add2 = 20){
    return add1 + add2;

}
const sum = add(30, 1);

console.log(sum);