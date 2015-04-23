var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for ( eachKey in person ) {
  if (eachKey == 'skills') {
    console.log(eachKey + ': ' + person[eachKey].join(', '));
  } else {
  console.log(eachKey + ': ' + person[eachKey]);
  }
}