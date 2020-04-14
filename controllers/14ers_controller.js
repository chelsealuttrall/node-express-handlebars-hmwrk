var express = require("express");

var router = express.Router();

var fourteener = require("../models/14ers.js");


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  fourteener.all(function(data) {
    var fourteenerObject = {
      fourteeners: data
    };
    console.log(fourteenerObject);
    res.render("index", fourteenerObject);
  });
});


router.post("/api/14ers", function(req, res) {
  fourteener.create(["14er", "climbed"], [req.body.name, req.body.climbed], function(res) {
    res.json({id: result.insertId});
    res.redirect("/");
  });

});


router.put("/api/14ers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);  

  fourteener.update(
      {
    climbed: req.body.climbed
  }, 
  condition, 
  function(res) {
      if (res.changedRows === 0){
          return res.status(404).end();
      }
      res.status(200);
        res.redirect("/").end();
  });
});


// Export routes for server.js to use.
module.exports = router;