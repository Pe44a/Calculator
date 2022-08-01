const displayValue = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
let firstNum = '';//First num in calculator
let secondNum = '';//Second num in calculator
let operatorValue = '';//Calculator parameter


const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}


const operate = function(operator,a,b){ 
    if(operator === '+'){
        let result = add(a,b);
            return result;
    } else if(operator === '-'){
        let result = subtract(a,b);
            return result;
    } else if(operator === 'x'){
        let result = multiply(a,b);
            return result;
    } else if(operator === ':'){
        let result = divide(a,b);
            return result;
    }
}

const calculate = function() {
    const result = operate(operatorValue,Number(firstNum),Number(secondNum));
        displayValue.textContent = result;
            firstNum = result;
                secondNum = '';
}


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        displayValue.style.color = 'white';

        //Checks whether you pressed a number or dot
        if(event.target.classList.contains('number') && operatorValue === '') {
            displayValue.textContent += event.target.textContent;
                firstNum += event.target.textContent;
        } 
        //When you press 5-2 and then press + it shows the result of that calculation, 3, it repeats until you press =
        if(event.target.classList.contains('operator') && firstNum !== '' && secondNum !== '' && operatorValue !== '') {
            calculate();
        }
        //Saves what operator you have pressed
        if(event.target.classList.contains('operator')) {
            operatorValue = event.target.textContent;
        }
        //Saves secondNum if parameter value is present
        if(event.target.classList.contains('number') && operatorValue !== '') {
            secondNum += event.target.textContent;
                displayValue.textContent = secondNum; 
        }
        //Runs operator function if all parameters are present
        if(event.target.id === 'equal' && firstNum !== '' && secondNum !== '' && operatorValue !== '') {
            calculate();
        }
        if(event.target.id === 'clear') {
            firstNum = '';
            secondNum = '';
            operatorValue = '';
            displayValue.textContent = '';
        }
    });
  });