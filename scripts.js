// TODO: intake each digit as an input into an array and do math operation on equal sign
// ex 1 2 3 + 3 2 1 = 123 + 321 = whatever that equals...



let firstNum = 0; //state for first number
let secondNum = 0; //state for second number

let values = []; //this is used to capture digits that form a full number

//takes each digit entered into array and returns it as a int
const getNumFromValues = function(val){
    //take each number from val array and add it to a string
    let sumAsString = "";
    val.forEach(e => {
        sumAsString += e;
    });
    return parseInt(sumAsString);
}

//push numbers into an array
const addToValues = function(val){
    values.push(val);
}

//operate
const operate = function(command,num1, num2){
    //each function key on keypad will trigger operate plus command to operate, ex add will call operate(add,num1,num2)
}

//add two numbers
const add = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a + b;
}

//subtract two numbers
const subtract = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a - b;
}

//divide two numbers
const divide = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a / b;
}

//multiply two numbers
const multiply = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a * b;
}





