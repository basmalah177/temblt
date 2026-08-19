function getnumber(message) {
    let num;
    let isValid = false;

    while (isValid == false) {
        num = prompt(message);

        if (num != null && num.trim() != "" && isNaN(num) == false) {
            isValid = true;
        } else {
            alert("Please enter a number");
        }
    }
    return num * 1;
}

function checknumber() {
    let num = getnumber("Enter number to check");
    let sign = "";
    let type = "";

    if (num > 0) {
        sign = "positive";
    } else if (num < 0) {
        sign = "negative";
    } else {
        sign = "zero";
    }

    if (num % 2 == 0) {
        type = "even";
    } else {
        type= "odd";
    }

    document.getElementById("result").innerText = 
        "Sign: " + sign + "  ,  " + "Type: " + type;
}
checknumber();