
let firstNum: number = 0;
let secondNum: number = 0;
let values: string[]; //store input 
let operator: string = '';
let firstNumSet: boolean = false;


// convert string array into a number
function getNumFromStrArray(arr: string[]): number {
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

function calculate(operator: string) {
    //if first number is not set copy array vals to firstNum
    // set firstisset to true
    //set operator
    if (!firstNumSet) {
        firstNum = getNumFromStrArray(values);
        values = [];
        operator = operator;
        firstNumSet = true;
        updateDisplay('display');
    } else {
        secondNum = getNumFromStrArray(values);
        values = [];

        switch (operator) {
            case '':
                console.log('operator not set');
                break;
            case '+':
                firstNum = null // TODO: finish me also rename this calc functions
        }
        //calculate firstnum operator secondnum
        //set firstnum to secondnum value; set secondnum to 0;
        //clear operator 
        //set firstnumset to false;
    }
}

//push a value into our array from dom
function addToArray(val: string, arr: string[]): void {
    arr.push(val);
    updateDisplay('display');
}

function updateDisplay(id: string): void {
    const display = document.getElementById(`${id}`);
    if (display) {
        display.innerText = firstNum.toString();
    };
}


