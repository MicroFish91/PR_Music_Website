const fs = require('fs');

function jsonParser(newData, fileLocation){
  fs.writeFile(fileLocation, newData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports = jsonParser;