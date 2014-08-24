
var Sai = require("sai");
var win = window;

Sai.on("jserror", function(err){

  var catched = false;
  var category = "jserror";
  var action = err.message;
  var label = err.file + "#L" + err.line;

  if (win._czc && typeof win._czc.push === "function"){

    win._czc.push(['_trackEvent', category, action, label]);
    catched = true;

  }

  err.catched = catched;

});
