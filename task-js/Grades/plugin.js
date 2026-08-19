function getMark(subjectName) {
    let mark;
    let isValid = false;

    while (isValid == false) {
        mark = prompt("Enter " + subjectName + " mark (0 - 50)");
        if (mark != null && mark.trim() != "" && isNaN(mark) == false && mark >= 0 && mark <= 50) {
            isValid = true; 
        } else {
            alert("Please enter number between 0 and 50");
        }
    }
    return mark * 1;
}

function calculateStudentGrade() {
    let physics = getMark("Physics");
    let chemistry = getMark("Chemistry");
    let biology = getMark("Biology");
    let math = getMark("Mathematics");
    let computer = getMark("Computer");

    let totalMarks = physics + chemistry + biology + math + computer;
    let percentage = (totalMarks / 250) * 100;
    
    let grade = "";

    if (percentage >= 90) {
        grade = "Grade A";
    } else if (percentage >= 80) {
        grade = "Grade B";
    } else if (percentage >= 70) {
        grade = "Grade C";
    } else if (percentage >= 60) {
        grade = "Grade D";
    } else if (percentage >= 40) {
        grade = "Grade E";
    } else {
        grade = "Grade F";
    }

    document.getElementById("result").innerText =   percentage + "%"+"  ,  "+ grade;
}

calculateStudentGrade();