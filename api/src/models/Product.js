const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
// Define the model 
  sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
   }
  },
    { timestamps: false });
};