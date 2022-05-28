
let values: string[] = [];
let operator: string = '';
let num1: number = 0;
let num2: number = 0;
let finalResult: number = 0;
const display = document.getElementById(`display`);

function addToValues(val: string): void {
    values.push(val);
    updateDipslay();
}

function updateDipslay(): void {
    if (display) {
        if (values.length === 0) {
            display.innerText = '0';
        }
        let s: string = '';
        values.forEach(e => {
            s += e;
        });
        display.innerText = s;
    }
}

function setOperator(opr: string) {
    if (operator === '') { //if the operator is not set, set it
        operator = opr;
        num1 = getNumFromValues(values); //copy num from values array
        values = []; //reset values for the next number
    } else {
        displayError();
    }
}

function getNumFromValues(arr: string[]): number {
    let sumAsString: string = "";
    let hasDecimal: boolean = false;
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

function compute(): void {
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

let add = (x: number, y: number) => x + y;
let multiply = (x: number, y: number) => x * y;
let subtract = (x: number, y: number) => x - y;
let divide = (x: number, y: number) => x / y;

