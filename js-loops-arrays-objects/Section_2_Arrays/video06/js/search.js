var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while ( true ) {
  search = prompt("Search for a product in our store. Type 'list' to show all of the produce. Type 'quit' to exit the search.").trim().toLowerCase();
  if ( search === 'quit' || search === 'exit' ) {
    break;
  } else if ( search === 'list') {
    print(inStock.join(', '));
  } else if ( search !== '' ) {
    if ( inStock.indexOf( search ) === -1 ) {
      print("Sorry, we don't have " + search + " in stock.");
    } else {
      print("Yes, we have " + search + " in stock.");
    }
  }
}