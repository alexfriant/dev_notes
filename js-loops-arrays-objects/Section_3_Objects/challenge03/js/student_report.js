var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function outputResults(studentsIndexList) {
  for (var i = 0; i < studentsIndexList.length; i++) {
    student = students[studentsIndexList[i]];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
  }
  print(message);
  message = '';
}
