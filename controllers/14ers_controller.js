var express = require("express");

var router = express.Router();

var fourteener = require("../models/14ers.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
  fourteener.all(function (data) {
    var handlebarsObject = {
      fourteeners: data,
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

router.post("/api/14ers", function(req, res) {
  fourteener.create(
    ["name", "climbed"],
    [req.body.name, req.body.climbed],
    function (result) {
      res.json({ id: result.insertId });
     
    }
  );
});

router.put("/api/14ers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  fourteener.update(
    {
      climbed: req.body.climbed,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
