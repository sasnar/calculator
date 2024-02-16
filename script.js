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
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

function calculator() {
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
    let operands = document.querySelectorAll('.operand');
    operands.forEach(function (operand) {
        operand.addEventListener('click', function() {
            if (!buffer) {
                buffer = +displayValue.join("");
                console.log(typeof(buffer));
            }
        })
    });
}

calculator();