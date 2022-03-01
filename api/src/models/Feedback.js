const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
// Define the model 
  sequelize.define('feedback', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payment_process: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coustomer_service: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
   }
  },
    { timestamps: false });
};