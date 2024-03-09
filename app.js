// // Task 1
// var result = prompt("Enter your city");
// if(result == "karachi") {
//     alert("Welcome to the City of Lights");
// }

// // Task 2
// var resultOne = prompt("Enter your Gender")
// if(resultOne == "male"){
//     alert("Good Morning Sir")
// }
// else if(resultOne== "female"){
//     alert("Good Morning Mam")
// }
// else{
//     alert("Fuck off there are only 2 genders")
// }

// // Task 3
// var signal = prompt("Color on the traffic signal?");
// if(signal == "red") {
//     alert("Must Stop")
// }
// else if(signal == "yellow") {
//     alert("Ready to Move")
// }
// else if (signal == "green"){
//     alert("Move now")
// }
// else(
//     alert("Invalid input")
// )
// Task 6
var totalMarks1 = +prompt("Enter total marks of 1st subject:");
var totalMarks2 = +prompt("Enter total marks of 2nd subject:");
var totalMarks3 = +prompt("Enter total marks of 3rd subject:");
var totalMarks = totalMarks1 + totalMarks2 + totalMarks3;
alert(totalMarks)
var obtMarks1 = +prompt("Enter obtained marks of 1st subject:");
var obtMarks2 = +prompt("Enter obtained marks of 2nd subject:");
var obtMarks3 = +prompt("Enter obtained marks of 3rd subject:");
var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
var percentage1 = +(obtMarks1/totalMarks1)*100;
var percentage2 = +(obtMarks2/totalMarks2)*100;
var percentage3 = +(obtMarks3/totalMarks3)*100;
var totalpercent = totalObtMarks/totalMarks*100;
var grade;

if(percentage1 >= "80"){
    document.write("<br>Total Marks: " + totalMarks);
    document.write("<br>Marks Obtained: " + totalObtMarks);
    document.write("<br>Percentage: " + totalpercent + "%");
    document.write("<br>Grade: A-one");
    document.write("<br>Remarks: Excellent");
}else if(percentage1 >= "70"){
    document.write("<br>Total Marks: " + totalMarks);
    document.write("<br>Marks Obtained: " + totalObtMarks);
    document.write("<br>Percentage: " + totalpercent + "%");
    document.write("<br>Grade: A");
    document.write("<br>Remarks: Good");
}else if(percentage1 >= "60"){
    document.write("<br>Total Marks: " + totalMarks);
    document.write("<br>Marks Obtained: " + totalObtMarks);
    document.write("<br>Percentage: " + totalpercent + "%");
    document.write("<br>Grade: B");
    document.write("<br>Remarks: You need to improve");
}else if(percentage1 < "60"){
    document.write("<br>Total Marks: " + totalMarks);
    document.write("<br>Marks Obtained: " + totalObtMarks);
    document.write("<br>Percentage: " + totalpercent + "%");
    document.write("<br>Grade: Fail");
    document.write("<br>Remarks: Sorry");
}

