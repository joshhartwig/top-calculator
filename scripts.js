// TODO: intake each digit as an input into an array and do math operation on equal sign
// TODO: decimal is broken, fix it by keeping track of where decimal is... cannot be first it must come after a number 
// TODO: get +/- to work, we need to append a negative or positive to the values array and push everything back
// TODO: complete the final eval expression function and add once done add that value back to a clear values array
// TODO: in getNextValue... if evaluate is true, the second number in the eqaution is entered and we need to calcuate and display
// else do logic to get next value

let values = []; //this is used to capture digits that form a full number
let fullOperation = [];
let evaluate = false;








//takes each digit entered into array and returns it as a int
const getNumFromValues = function (val) {
    //take each number from val array and add it to a string
    let sumAsString = "";
    let hasDecimal = false;
    val.forEach(e => {
        if (e === '.') {
            hasDecimal = true;
        }
        sumAsString += e;
    });
    if (hasDecimal) {
        return parseFloat(sumAsString);
    }
    return parseInt(sumAsString);
}

//append operator to values then set display to previous number, copy all values to fullOperation array and clear values array
const getNextValue = function (operator) {
    updateDisplay('display', getNumFromValues(values))
    values.push(operator);
    //copy everything from value to full operation and clear values. We will use full operation to do the math.
    values.forEach(e => {
        fullOperation.push(e);
    });

    //clear values array
    values = []; // we should now be ready to take the next input and continue this loop. The next value entered will append
    // to the values array and trigger an update of the display with the new number.
}

//push numbers into an array
const addToValues = function (val) {
    values.push(val);
    updateDisplay('display');
}

//update the display to show the number currently in the array
const updateDisplay = function (id, num) {
    const display = document.getElementById(`${id}`)
    if (num === undefined) {
        display.innerText = getNumFromValues(values);
    } else {
        display.innerText = num;
    }
}

const evaluate = function (arr) {
    //we should have an array that we need to evaluate
    //we need to clear out that array when done

}

//add two numbers
const add = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    return a + b;
}

//subtract two numbers
const subtract = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    return a - b;
}

//divide two numbers
const divide = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    return a / b;
}

//multiply two numbers
const multiply = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    return a * b;
}





