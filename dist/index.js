"use strict";
let values = [];
let finalResult = 0;
function addToValues(val) {
    values.push(val);
    updateDipslay('display');
}
function updateDipslay(id, num) {
    const display = document.getElementById(`${id}`);
    if (display) {
        if (num) {
            display.innerText = num.toString();
        }
        else {
            display.innerText = getNumFromValues(values).toString();
        }
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
