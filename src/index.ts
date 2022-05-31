const display = document.getElementById('display');
const allowedNumericValues: string[] = ['1','2','3','4','5','6','7','8','9','0','.'];
const allowedOperatorValues: string[] = ['/','+','*','-']
let operator: string = '';
let buffer: string[] = [];

let firstNum: number;
let secondNum: number;
let result: number;
let firstNumSet: boolean = false;


// adds to our display buffer
function addToBuffer(val: string): void {
    if(allowedNumericValues.includes(val)){ // if the value pass is one of the allowed values push it
        buffer.push(val);
        updateDipslay(buffer);
    }
}

function calculate():void {
    if(operator != ''){
        if (!firstNumSet){ // if first num is not set copy the value to first num and do cleanup
            firstNum = getNumFromValues(buffer);
            result = firstNum;
            clearBuffer();
            firstNumSet = true;
            updateDipslay(buffer);
        } else {
            secondNum = getNumFromValues(buffer);
            result = generateResult(operator,firstNum,secondNum);
            clearNumbers();
            clearBuffer();
            updateDipslay(buffer);
            firstNum = result;
        }   
    } else {
        console.log('error operator must be set.');
    }
    
}

// check if the operator passed is an allowed operator and set the operator
function setOperator(opr:string){
    if(allowedOperatorValues.includes(opr)){
        operator = opr;
        calculate();
    } else {
        console.log('wrong operator passed');
    }
}


// returns the result of an operator and two numbers
function generateResult(opr:string, num1:number, num2:number):number {
    let r: number = 0;
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
    }
    return r;
}


// returns a number from our display bugger
function getNumFromValues(arr: string[]): number {
    if(arr.length == 0) {
        return 0;
    }
    
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

// update display displays buffer if content exists in the buffer
// else it will display the result
function updateDipslay(arr:string[]): void {
    if (display) {
        if (arr.length > 0) { // if buffer has any content write that content to display
            let s: string = '';
            arr.forEach(e => {
            s += e;});
        display.innerText = s;
        } else {
            display.innerText = result.toString();
        }
    }
}

// clears the buffer to ready for next input
function clearBuffer(){
    buffer = [];
}


// displays error message
function displayError() {
    if(display){
        display.innerText = 'Error';
    }
}

// resets the buffer numbers and results (use with c)
function reset() {
    clearBuffer();
    clearNumbers();
    result; 
}

// just clear first and second numbers
function clearNumbers() {
    firstNum;
    secondNum;
}

// math functions
let add = (x: number, y: number) => x + y;
let multiply = (x: number, y: number) => x * y;
let subtract = (x: number, y: number) => x - y;
let divide = (x: number, y: number) => x / y;




