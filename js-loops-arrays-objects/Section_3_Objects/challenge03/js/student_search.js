var request = '';
var results;
var searchResults;

while ( request !== 'quit' && request !== null ) {
  if ( request.trim() !== '' ) { 
    results = searchStudents(request);
    if (results.length > 0 ) {
      outputResults(results);
    }
  }
  request = prompt("Enter a name to search for or 'quit' to stop searching."); 
}

function searchStudents(searchTerm) {
  searchResults = [];
  for (var i = 0; i < students.length; i++) {
    if ( searchTerm.toUpperCase() == students[i].name.toUpperCase() ) {
      searchResults.push(i);
    }
  }
  return searchResults;
}
