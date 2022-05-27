// TODO: all person to press num from key 1 = add to array...
// TODO: add everything to an array and eval
// TODO: display shows everything in the array
// TODO: = processes the equation and display final result on display
// TODO: clear the array set final result to 0 make updatedisplay take optional num to display if num exists just dipslay num else display array


let values: string[] = [];
let finalResult: number = 0;

function addToValues(val:string):void {
    values.push(val);
    updateDipslay('display');
}

function updateDipslay(id:string,num?:number): void {
    const display = document.getElementById(`${id}`);
    if(display){
        if(num){
            display.innerText = num.toString();
        } else {
            display.innerText = getNumFromValues(values).toString();
        }
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

function compute(arr: string[]): void {
    //set final result based on computing the string array
    //update disply with final result
    //reset
}

function reset(){
    finalResult = 0;
    values = [];
    updateDipslay('display');
}