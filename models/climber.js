var sequelize = require("sequelize")

var climber = sequelize.define("Climber", {
      name: {
        type: DataTypes.STRING
      }
    });
  
    climber.associate = function(models) {
  
      climber.hasMany(models.Fourteeners, {
        onDelete: "cascade"
      });
    }
  module.exports = climber;