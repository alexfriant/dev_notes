var answerList = [];

var questionList = [
  ["How many sides on a normal dice?", "6"],
  ["What is PI, to two significant digits?", "3.14"],
  ["How many minutes is 25% of an hour?", "15"]
];

function print(message) {
  document.getElementById('output').innerHTML = message;
}

function buildListItem( qN, wr ) {
  return '<li>' + questionList[qN][0] + ' <span class="' + wr + '">' + answerList[qN]+ '</span></li>';
}

// start the quiz
for ( var i = 0; i < questionList.length; i++) {
  answerList[i] = prompt(questionList[i][0]);
}

/* report the questions you got right */

//build right/wrong html items and correct count variable
var rightHTML = '<h2>These are the questions you got right: </h2><ol>';
var wrongHTML = '<h2>These are the questions you got wrong: </h2><ol>';
var rightCount = 0;

//check answers and build out right/wrong lists
for (var i = 0; i < questionList.length; i++) {
  if ( answerList[i] === questionList[i][1] ) {
    rightHTML += buildListItem( i, 'right' );
    rightCount += 1;
  } else {
    wrongHTML += buildListItem( i, 'wrong' );
  }
}

//finish the ordered lists for both html items
rightHTML += "</ol>";
wrongHTML += "</ol>";

//output the results, based on how they did
if ( rightCount === questionList.length ) {
  print("<h1>You got 100% correct!</h1>" + rightHTML);
} else if ( rightCount === 0 ) {
  print("<h1>You got 0% corrrect. :-(</h1>" + wrongHTML);
} else {
  var percent = (rightCount / questionList.length * 100).toFixed(0) + "%";
  print("<h1>You got " + percent + " correct.</h1>" + rightHTML + wrongHTML);
}