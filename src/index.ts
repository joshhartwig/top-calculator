let evaluate: boolean = false;

let values: string[]; 


// convert string array into a number
function getNumFromStrArray(arr:string[]):number{
    let sumAsString: string = "";
    let hasDecimal: boolean = false;
    arr.forEach(e => {
        if(e === '.'){
            hasDecimal = true;
        }
        sumAsString += e;
    });
    if (hasDecimal){
        return parseFloat(sumAsString);
    }
    return parseInt(sumAsString);
}

//push a value into our array from dom
function addToStringArray(val:string, arr:string[]):void {
    arr.push(val);
    updateDisplay('display');
}

function updateDisplay(id:string,num?:number):void{
    const display = document.getElementById(`${id}`);
    if(num === undefined && display != null){
        display.innerText = getNumFromStrArray(values).toString();
    } else {
        display?.innerText = num?.toString();
    }
}
