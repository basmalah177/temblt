function getNumber(message) {
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
function maxandmin() {
    let n1 = getNumber("Enter the first number:");
    let n2 = getNumber("Enter the second number:");
    let n3 = getNumber("Enter the third number:");

    let max = n1; 
    if (n2 > max) {
        max = n2; }
    if (n3 > max) {
        max = n3;} 
    let min = n1; 
    if (n2 < min) {
        min = n2;}
    if (n3 < min) {
        min = n3;}

    document.getElementById("result").innerText = 

        "Max number: " + max + "  ,  " + "Minimum number: " + min;
}

maxandmin();