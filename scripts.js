
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



module.exports = add;
module.exports = subtract;
module.exports = multiply;
module.exports = divide;

