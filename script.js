let number1 = "0";
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
    case (Number.isInteger(+buttonContent) && operator !== "" && number2 === null || number2 == 0):
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
        case (buttonContent === "←"):
            eraseInput();
            break;
        case (buttonContent === "."):
            addDecimal();
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

function countDecimals(number) {
    if (Math.floor(number) !== number) {
        return number.toString().split(".")[1].length || 0;
    }
}

function eraseInput() {
    switch (true) {
        case (number1.length === 1 && operator === ""):
            number1 = 0;
            break;
        case (number1.length > 1 && operator === ""):
            number1 = number1.substring(0, number1.length - 1);
            break;
        case (number2 === null && operator !== ""):
            operator = "";
            break;
        case (number2.length === 1 && operator !== ""):
            number2 = null;
            break;
        case (number2.length > 1 && operator !== ""):
            number2 = number2.substring(0, number2.length - 1);
            break;
    }
}

function addDecimal() {
    switch (true) {
        case (!number1.includes(".") && operator === ""):
            number1 += ".";
            break;
        case (!number2.includes(".") && number2 !== null && operator !== ""):
            number2 += ".";
            break;
    }
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
    if (+num2 !== 0) {
        return +num1 / +num2;
    } else {
        alert("You can't divide by zero!");
        return 0;
    }
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
    return (countDecimals(result) > 6) ? result.toFixed(6).toString() : result.toString();
}