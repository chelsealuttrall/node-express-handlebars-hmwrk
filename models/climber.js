module.exports = function(sequelize, DataTypes) {
    var Climber = sequelize.define("Climber", {
      name: {
        type: DataTypes.STRING
      }
    });
  
    Climber.associate = function(models) {
  
      Climber.hasMany(models.Fourteeners, {
        onDelete: "cascade"
      });
    };
  
    return Climber;
  };
  