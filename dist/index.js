"use strict";
let values = [];
let operator = '';
let num1 = 0;
let num2 = 0;
let finalResult = 0;
const display = document.getElementById(`display`);
function addToValues(val) {
    values.push(val);
    updateDipslay();
}
function updateDipslay() {
    if (display) {
        if (values.length === 0) {
            display.innerText = '0';
        }
        let s = '';
        values.forEach(e => {
            s += e;
        });
        display.innerText = s;
    }
}
function setOperator(opr) {
    if (operator === '') {
        operator = opr;
        num1 = getNumFromValues(values);
        values = [];
    }
    else {
        displayError();
    }
}
function getNumFromValues(arr) {
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
function compute() {
    num2 = getNumFromValues(values);
    switch (operator) {
        case '':
            displayError();
            reset();
            break;
        case '+':
            finalResult = add(num1, num2);
            displayFinalResult();
            reset();
            break;
        case '-':
            finalResult = subtract(num1, num2);
            displayFinalResult();
            reset();
            break;
        case '*':
            finalResult = multiply(num1, num2);
            displayFinalResult();
            reset();
            break;
        case '/':
            finalResult = divide(num1, num2);
            displayFinalResult();
            reset();
            break;
    }
}
function reset() {
    finalResult = 0;
    values = [];
}
function resetCalculator() {
    finalResult = 0;
    values = [];
    operator = '';
    updateDipslay();
}
function displayError() {
    if (display) {
        display.innerText = 'Error';
    }
    reset();
}
function displayFinalResult() {
    if (display) {
        display.innerHTML = finalResult.toString();
    }
}
let add = (x, y) => x + y;
let multiply = (x, y) => x * y;
let subtract = (x, y) => x - y;
let divide = (x, y) => x / y;
