const displayValue = document.querySelector('.display');
const displayText = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        displayText.style.color = 'white';
        displayText.textContent += event.target.textContent;
    });
  });



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

