module.exports = function(sequelize, DataTypes) {
    var Fourteeners = sequelize.define("14er", {
      fourteener: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      climbed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
  Fourteeners.associate = function(models) {
  
      Fourteeners.belongsTo(models.Climber, {
        foreignKey: {
        }
      });
  };
  
    return Fourteeners;
  };


//   // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = cat;