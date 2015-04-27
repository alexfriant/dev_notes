function printMessage(message) {
  console.log("printing message function");
  var div = document.getElementById("output");
  div.innerHTML = message;
}

function buildStudentReport(studentList) {
  var report = "";
  for (i = 0; i < studentList.length; i++) {
    report += unpackStudentRecord(studentList[i]);
  }
  return report;
}

function unpackStudentRecord(studentRecord) {
  var record = "";
  for ( key in studentRecord ) {
    if ( key == 'name' ) {
      var addField = "<p><h2>" + key + ": " + studentRecord[key] + "</h2></p>";
    } else {
      var addField = "<p>" + key + ": " + studentRecord[key] + "</p>";
    }
    record += addField;
  }
  return record;
}

console.log(students);
printMessage(buildStudentReport(students));
