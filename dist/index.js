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
        display.innerText = values.toString();
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
    }
}
function reset() {
    finalResult = 0;
    values = [];
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
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
