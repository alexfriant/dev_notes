var questions = 3;

function questionsLeft() {
  return questions--; 
};

var adjective = prompt('Please type an adjective [' + questionsLeft() + ' questions left]');
var verb = prompt('Please type a verb [' + questionsLeft() + ' questions left]');
var noun = prompt('Please type a noun [' + questionsLeft() + ' questions left]');
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);