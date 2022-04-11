function add (a, b) {
  return +a + +b;
};

function substract (a, b) {
  return +a - +b;
};

function multiply (a, b) {
  return +a * +b;
};

function divide (a, b) {
  return +a / +b;
};

function operate (a, b, c) {
  if (b === "+") {
    return add(a, c);
  } else if (b === "-") {
    return substract(a, c);
  } else if (b === "*") {
    return multiply(a, c);
  } else if (b === "/") {
    return divide(a, c);
  };
};

let firstOperand;
let secondOperand;
let calcOperator;

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (firstOperand === undefined || firstOperand === 0) {
      operand = e.target.textContent;
      displayValue = operand;
      firstOperand = operand;
      display.textContent = displayValue;
    } else if (firstOperand != NaN && calcOperator === undefined) {
      operand = firstOperand + e.target.textContent;
      displayValue = operand;
      firstOperand = operand;
      display.textContent = displayValue;
    } else if (secondOperand === undefined) {
      operand = e.target.textContent;
      secondOperand = operand;
      displayValue = `${firstOperand} ${calcOperator} ${secondOperand}`;
      display.textContent = displayValue;
    } else {
      operand = secondOperand + e.target.textContent;
      secondOperand = operand;
      displayValue = `${firstOperand} ${calcOperator} ${secondOperand}`;
      display.textContent = displayValue;
    }
  });
});

let operator;

const operators = document.querySelectorAll(".operators");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (secondOperand === undefined) {
      operator = e.target.textContent;
      calcOperator = operator;
      displayValue = `${firstOperand} ${calcOperator}`
      display.textContent = displayValue;
    } else {
      firstOperand = Math.round(operate(firstOperand, calcOperator, secondOperand) * 10) / 10;
      operator = e.target.textContent;
      calcOperator = operator;
      displayValue = `${firstOperand} ${calcOperator}`;
      display.textContent = displayValue;
      secondOperand = undefined;
    }
  });
});

const result = document.querySelector(".result");

result.addEventListener("click", () => {
  if (firstOperand != undefined && secondOperand != undefined && calcOperator != undefined)
  displayValue = Math.round(operate(firstOperand, calcOperator, secondOperand) * 10) / 10;
  display.textContent = displayValue;
  firstOperand = displayValue;
  secondOperand = undefined;
  calcOperator = undefined;
})

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  firstOperand = undefined;
  secondOperand = undefined;
  calcOperator = undefined;
  displayValue = 0;
  display.textContent = displayValue;
})

let displayValue = 0;

const display = document.querySelector(".display");
display.textContent = displayValue;