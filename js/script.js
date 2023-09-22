
let currentInput = '';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

function press(num) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += num;
    document.getElementById('display').innerText = currentInput;
}

function setOP(op) {
    if (operator !== '' || currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clr() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('display').innerText = '0';
}

function calculate() {
    if (operator === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    document.getElementById('display').innerText = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    resultDisplayed = true;
}
