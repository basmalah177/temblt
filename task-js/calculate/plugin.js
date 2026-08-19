function getnumber(message) {
    let num;
    let isValid = false;
    while (isValid == false) {
        num = prompt(message);
        if (num != null && num.trim() != "" && isNaN(num) == false) {
            isValid = true;
        } else {
            alert(" Please enter number");
        }
    }
    
    return num * 1; 
}
function getoperator(message) {
    let op;
    let isValid = false;

    while (isValid == false) {
        op = prompt(message);

        if (op == "+" || op == "-" || op == "*" || op == "/" || op == "%") {
            isValid = true;
        } else {
            alert("Please enter one of (+, -, *, /, %).");
        }
    }
    
    return op;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    if (b == 0) {
        return "Error: Cannot divide by zero";
    }
    return a % b;
}

function calculate() {
    let num1 = getnumber("Enter the first number");
    let num2 = getnumber("Enter the second number");
    let operator = getoperator("Enter the operation (+, -, *, /, %)");
    let result = 0;

    if (operator == "+") {
        result = add(num1, num2);
    } else if (operator == "-") {
        result = subtract(num1, num2);
    } else if (operator == "*") {
        result = multiply(num1, num2);
    } else if (operator == "/") {
        result = divide(num1, num2);
    } else if (operator == "%") {
        result = modulus(num1, num2);
    }

    document.getElementById("result").innerText = "Result: " + result;
}

calculate();