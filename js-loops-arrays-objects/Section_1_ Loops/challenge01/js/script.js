var html = '';
var red;
var green;
var blue;
var rgbColor;

// refactored code to make it DRY
function getColors() {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

for ( var i = 0; i < 10; i++ ) {
  getColors();
}

document.write(html);