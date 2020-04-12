var express = require("express");
var db = require("../models");

module.exports = function(app) {


app.get("/", function(req, res) {
  db.Fourteeners.findAll({
    where: {},
    include: [{
        model: db.Climber
      }]
  }).then(function (dbFourteeners) {
    console.log(dbFourteeners);
    var fourteenerObj = {Fourteeners: dbFourteeners};
    res.render("index", fourteenerObj);
  })
});

app.post("/", function(req, res) {
  db.Fourteeners.create({Fourteener: req.body.name}).then(function(dbFourteeners) {
      res.redirect("/");
    });
});

app.post("/:id", function(req, res) {
  var climberName = req.body.Climber;
  var Fourteener = req.params.id;
  var resVar = res;
  db.Climber.findAll({}).then(function(dbClimbers) {
    var flag = false;
    for (var i; i < dbClimbers.length; i++) {
      if (climberName === dbClimber[i].name) {
        flag = true;
      }
      else {
        console.log("not a match");
      }
    }
    if (!flag) {
      db.Climber.create({
          name: climberName
      }).then(function (dbCreate) {
        fourteenerUpdate(climberName, fourteenerId, resVar);
      });
    }
    else {
      fourteenerUpdate(climberName, fourteenerId, resVar);
    }
  });
});

function fourteenerUpdate (climberName, fourteenerId, resVar) {
  db.Climber.findOne({
    where: {
      name: climberName
    }
  }).then(function (dbClimber) {
    var id = dbClimber.id;
    db.Climber.update(
      {
        climbed: true,
        ClimberId: id
      },
      {
        where: {
          id: fourteenerId
        }
      }).then(function(dbFourteeners) {
        resVar.redirect("/");
      });
  });
};

}
