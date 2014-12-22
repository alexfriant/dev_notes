var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  console.log("employees XHR readystate: " 
              + xhr.readyState);
  if(xhr.readyState === 4 ) {
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
  }
};

xhr.open('GET', 'data/employees.json');

xhr.send();