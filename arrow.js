// Normal function 

function doubleIt(num){
    return num * 2;
}

const result = doubleIt(20);
console.log(result);


// function expression & deceleration 

const expression = function (sum){

    return sum +2;
}

const total = expression(50);
console.log(total);


// Write function single parameter  short by Es6

const totalMulti = number => number * 5;

const totalNumber = totalMulti(2);
console.log(totalNumber);

// Write function with multi parameter shortcut by Es6

const multiParameter = (x , y) => x * y;

const totalResult = multiParameter(50, 20);
console.log(totalResult);

// Write function without parameter shortcut by Es6

const give5 = () => 5;

const totalgive5 = give5();
console.log(totalgive5);


// Write function with So many parameter shortcut by Es6
const doMath = (x, y) =>{

        const sum1 = (x + y);
        const subtract = (x - y);
        const resultAll = sum1 * subtract;
        return resultAll;

}

const value = doMath(20,10);
console.log(value);