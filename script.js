let number1 = 0;
let number2 = 0;
let operator = "";

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
        case "*":
            return multiplyNums(num1, num2);
            break;
        case "/":
            return divideNums(num1, num2);
            break;
    };
}