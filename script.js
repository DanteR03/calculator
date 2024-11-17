let number1 = 0;
let number2 = null;
let operator = "";
const calculatorDisplay = document.querySelector("#calculator-display");
const numberButtons = document.querySelectorAll(".number-button");
const functionButtons = document.querySelectorAll(".function-button");

numberButtons.forEach((button) => {
    button.addEventListener("click", pressNumberButton);
});

functionButtons.forEach((button) => {
    button.addEventListener("click", pressFunctionButton);
})

function populateDisplay() {
    if (operator === "") {
        calculatorDisplay.textContent = number1;
    } else if (number2 === null) {
        calculatorDisplay.textContent = number1 + ` ${operator} `;
    } else {
        calculatorDisplay.textContent = number1 + ` ${operator} ` + number2;
    }
}

function pressNumberButton(button) {
    let buttonContent = button.target.textContent;
    switch (true) {
    case (Number.isInteger(+buttonContent) && operator === "" && number1 == 0):
        number1 = buttonContent;
        break;
    case (Number.isInteger(+buttonContent) && operator === ""):
        number1 += buttonContent;
        break;
    case (Number.isInteger(+buttonContent) && operator !== "" && number2 === null):
        number2 = buttonContent;
        break;
    case (Number.isInteger(+buttonContent) && operator !== ""):
        number2 += buttonContent;
        break;
    };
    populateDisplay();
}

function pressFunctionButton(button) {
    let buttonContent = button.target.textContent;
    switch (true) {
        case (buttonContent === "C"):
            number1 = 0;
            number2 = null;
            operator = "";
            break;
        case (buttonContent === "=" && operator !== "" && number2 !== null):
            number1 = operate(number1, number2, operator);
            number2 = null;
            operator = "";
            break;
        case (buttonContent !== "=" && operator !== "" && number2 !== null):
            number1 = operate(number1, number2, operator);
            number2 = null;
            operator = buttonContent;
            break;
        case (buttonContent !== "=" && operator == ""):
            operator = buttonContent;
            break;
    };
    populateDisplay();
}

function addNums(num1, num2) {
    return +num1 + +num2;
}

function subtractNums(num1, num2) {
    return +num1 - +num2;
}

function multiplyNums(num1, num2) {
    return +num1 * +num2;
}

function divideNums(num1, num2) {
    return (+num2 !== 0) ? +num1 / +num2 : "You can't divide by zero!"
}

function operate(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = addNums(num1, num2);
            break;
        case "-":
            result = subtractNums(num1, num2);
            break;
        case "x":
            result = multiplyNums(num1, num2);
            break;
        case "÷":
            result = divideNums(num1, num2);
            break;
    };
    return result;
}