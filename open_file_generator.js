var fs = require('fs');

///// THIS DOES NOT WORK!!!

function* getSecretMessage() {
  fs.readFile('./testdata.txt', function(err, data) {
    if (!err) {
      yield data;
    }
  });

  // OBS: we actually quite here...
}

console.log('The message is %j', getSecretMessage().next().value);
