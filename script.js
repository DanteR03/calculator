let number1 = 0;
let number2 = 0;
let operator = "";
const calculatorDisplay = document.querySelector("#calculator-display");
const calculatorButtons = document.querySelectorAll(".calculator-button");

calculatorButtons.forEach((button) => {
    button.addEventListener("click", pressButton);
})

function populateDisplay() {
    if (operator === "") {
        calculatorDisplay.textContent = number1;
    } else {
        calculatorDisplay.textContent = number1 + ` ${operator} ` + number2;
    }
}

function pressButton(button) {
    let buttonContent = button.target.textContent;
    if (buttonContent === "C") {
        number1 = 0;
        number2 = 0;
        operator = "";
    } else if (buttonContent === "=") {
        number1 = operate(number1, number2, operator);
        number2 = 0;
        operator = "";
    } else if (Number.isInteger(+buttonContent) && operator === "") {
        number1 = +buttonContent;
    } else if (Number.isInteger(+buttonContent) && operator !== "") {
        number2 = +buttonContent;
    } else {
        operator = buttonContent;
    };
    populateDisplay();
}

function addNums(num1, num2) {
    return num1 + num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return addNums(num1, num2);
            break;
        case "-":
            return subtractNums(num1, num2);
            break;
        case "x":
            return multiplyNums(num1, num2);
            break;
        case "÷":
            return divideNums(num1, num2);
            break;
    };
}