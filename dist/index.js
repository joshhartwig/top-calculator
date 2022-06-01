"use strict";
const display = document.getElementById('display');
const allowedNumericValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const allowedOperatorValues = ['/', '+', '*', '-', '%'];
let operator = '';
let buffer = [];
let firstNum;
let secondNum;
let result;
let firstNumSet = false;
function addToBuffer(val) {
    if (allowedNumericValues.includes(val)) {
        buffer.push(val);
        updateDipslay(buffer);
    }
}
function calculate() {
    if (operator != '') {
        if (!firstNumSet) {
            firstNum = getNumFromValues(buffer);
            result = firstNum;
            clearBuffer();
            firstNumSet = true;
            updateDipslay(buffer);
        }
        else {
            secondNum = getNumFromValues(buffer);
            result = generateResult(operator, firstNum, secondNum);
            clearNumbers();
            clearBuffer();
            updateDipslay(buffer);
            firstNum = result;
        }
    }
    else {
        console.log('error operator must be set.');
    }
}
function setOperator(opr) {
    if (operator === '') {
        if (allowedOperatorValues.includes(opr)) {
            operator = opr;
            calculate();
        }
        else {
            console.log('wrong operator passed');
        }
    }
    else {
        calculate();
        operator = opr;
    }
}
function generateResult(opr, num1, num2) {
    let r = 0;
    switch (opr) {
        case '':
            displayError();
            reset();
            break;
        case '+':
            r = add(num1, num2);
            break;
        case '-':
            r = subtract(num1, num2);
            break;
        case '*':
            r = multiply(num1, num2);
            break;
        case '/':
            r = divide(num1, num2);
            break;
        case '%':
            r = modulus(num1, num2);
            break;
    }
    return r;
}
function getNumFromValues(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let sumAsString = "";
    let hasDecimal = false;
    arr.forEach(e => {
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
function updateDipslay(arr) {
    if (display) {
        if (arr.length > 0) {
            let s = '';
            arr.forEach(e => {
                s += e;
            });
            display.innerText = s;
        }
        else {
            display.innerText = result.toString();
        }
    }
}
function clearBuffer() {
    buffer = [];
}
function displayError() {
    if (display) {
        display.innerText = 'Error';
    }
}
function reset() {
    clearBuffer();
    clearNumbers();
    result = 0;
    updateDipslay(buffer);
}
function clearNumbers() {
    firstNum = 0;
    secondNum = 0;
}
let add = (x, y) => x + y;
let multiply = (x, y) => x * y;
let subtract = (x, y) => x - y;
let divide = (x, y) => x / y;
let modulus = (x, y) => x % y;
