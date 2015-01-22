//Print out Error message
function print(error) {
  console.log("Error type: " + error.name + " (" + error.message + ")");
};

module.exports.print = print; 