var visitor = prompt('What is your name?');
var message = 'Hello ' + visitor;
//message = message + ". Welcome to Treehouse.";
message += ". Welcome to Treehouse.<br>";
message += " We are so glad that you came by to visit, ";
message += visitor.split(" ")[0];
message += ". Please come again, when you want to learn more JavaScript!"
document.write(message);