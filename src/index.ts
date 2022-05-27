
let values: string[] = [];
let operator: string = '';
let num1: number = 0;
let num2: number = 0;
let finalResult: number = 0;
const display = document.getElementById(`display`);

function addToValues(val:string):void {
    values.push(val);
    updateDipslay();
}

function updateDipslay(): void {
    if(display){
        if (values.length === 0){
                display.innerText = '0';
            }
            display.innerText = values.toString();
        }
    }

function setOperator(opr:string){
    if(operator === ''){ //if the operator is not set, set it
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
    switch (operator){
        case '':
            displayError();
            reset();
            break;
        case '+':
            finalResult = add(num1,num2);
            displayFinalResult();
            reset();
            break;
        case '-':
            finalResult = subtract(num1,num2);
                displayFinalResult();
                reset();
                break;
            }
    }

function reset(){
    finalResult = 0;
    values = [];
    updateDipslay();
}

function displayError() {
    if(display){
        display.innerText = 'Error';
    }
    reset();
}


function displayFinalResult() {
    if(display){
        display.innerHTML = finalResult.toString();
    }
}

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

