
var Sai = require("sai");
var win = window;

Sai.on("jserror", function(err){

  var catched = false;
  var category = "jserror";
  var action = err.message;
  var label = err.file + "#L" + err.line;

  var _czc = win._czc;

  if (_czc && typeof _czc.push === "function"){

    _czc.push(['_trackEvent', category, action, label]);
    catched = true;

  }

  err.catched = catched;

});
