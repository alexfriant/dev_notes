var xhrEmployees = new XMLHttpRequest();
xhrEmployees.onreadystatechange = function () {
  if(xhrEmployees.readyState === 4 && xhrEmployees.status === 200) {
    var employees = JSON.parse(xhrEmployees.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhrEmployees.open('GET', 'data/employees.json');
xhrEmployees.send();

var xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
  if(xhrRooms.readyState === 4 && xhrRooms.status === 200) {
    var rooms = JSON.parse(xhrRooms.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();
