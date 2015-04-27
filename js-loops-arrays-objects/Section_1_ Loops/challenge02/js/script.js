var numberOfDivs = 500;
var html = '';

function getRandomColor() {
  return Math.floor(Math.random() * 256 );
}

function getRGB() {
  var red = getRandomColor();
  var green = getRandomColor();
  var blue = getRandomColor();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

for (var i = 0; i < numberOfDivs; i += 1) {
  var rgbColor = getRGB();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);