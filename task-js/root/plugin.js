function getnumber(message) {
    let num;
    let isValid = false;

    while (isValid == false) {
        num = prompt(message);
        if (num != null && num.trim() != "" && isNaN(num) == false) {
            isValid = true;
        } else {
            alert("Please enter number");
        }
    }
    return num * 1;
}

function calculatroot(){
    let number = getnumber("Enter the number");
    let root = getnumber("Enter the degre of root");

    let result = number ** (1 / root);

    document.getElementById("result").innerText =  "Result: " + result;
}
calculatroot();