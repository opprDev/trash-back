var osascript = require('node-osascript');

osascript.executeFile('scripts/trash-back.scpt', { varName : 'value'}, function(err, result, raw){
  // if (err) return console.error(err)
  //   console.log(result, raw)
});
