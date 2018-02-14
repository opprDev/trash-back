var osascript = require('./lib/index');
var resolve = require('path').resolve;

console.log("Putting trash back...");
console.log("Please wait...");

osascript.executeFile (
  resolve (__dirname, '../scripts/trash-back.scpt'),
  { varName : 'value'},
  function (err, result, raw) {
    if (err) {
      return console.error(err);
    }
    console.log(result, raw);
    console.log("Task finish.");
    console.log("Thank you.");
  }
);
