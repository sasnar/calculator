function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}



function calculator() {
    let firstNumber;
    let secondNumber;
    let operator;
    
    function operate (firstNumber, secondNumber, operator) {
        switch (operator) {
            case "+": 
                return add(firstNumber, secondNumber);
            case "-":
                return subtract(firstNumber, secondNumber);
            case "*":
                let result = multiply(firstNumber, secondNumber);
                if (result % 1 == 0) {
                    return multiply(firstNumber, secondNumber); 
                } else {
                    return Math.round(result * 100) / 100;
                }
            case "/":
                if(firstNumber == 0 || secondNumber == 0) {
                    for (let i = 0; i < digits.length; i ++) {
                        digits[i].disabled = true;
                    }
                    for (let i = 0; i < operands.length; i++) {
                        operands[i].disabled = true;
                    }
                    return "You cannot divide by zero!";
                } else {
                    let result = divide(firstNumber, secondNumber);
                    if (result % 1 == 0) {
                        return result;
                    } else {
                        return Math.round(result * 100) / 100;
                    }
                }
            case "=":
                flag = false;
                console.log("equal");
                return +display.textContent;
        }
    }

    let displayValue = [];
    let digits = document.querySelectorAll('.digit');
    let display = document.querySelector('.display');
    digits.forEach(function (digit) {
        digit.addEventListener('click', function() {
            displayValue.push(digit.textContent);
            display.textContent = displayValue.join("");
        });
    });

    let buffer;
    let result;
    let operands = document.querySelectorAll('.operand');
    let flag = false; 
    let bufferOperator;
    let clear = document.querySelector('.clear');
    operands.forEach(function (operand) {
        operand.addEventListener('click', function() {
            if (flag == false) {
                buffer = +displayValue.join("");
                displayValue.length = 0;
                display.textContent = buffer;
                bufferOperator = operand.textContent;
            }
            if (flag == true) {     
                result = operate(buffer, +displayValue.join(""),bufferOperator);
                display.textContent = result;
                displayValue.length = 0;
                buffer = result;
                bufferOperator = operand.textContent;
            }
            flag = true;
        })
    });
    clear.addEventListener('click', function () {
        window.location.reload();
    });


}

calculator();