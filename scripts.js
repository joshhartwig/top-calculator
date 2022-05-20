


//add two numbers
const add = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a + b;
}

//subtract two numbers
const subtract = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a - b;
}

//divide two numbers
const divide = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a / b;
}

//multiply two numbers
const multiply = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    return a * b;
}

const createCalculatorDivs = function(id){
    const container = document.querySelector(`#${id}`);

    for(let r = 1; r <= 6; r++){
        let row = document.createElement('div');

        for(let c = 1; c <= 4; c++){
            let col = document.createElement('div');
            col.classList.add(`grid-row:${r}`);
            col.classList.add(`grid-column:${c}`);
            col.style.cssText = `outline: 3px dashed #f90;`;

            row.appendChild(col);
        }

        container.appendChild(row);
    }
}



