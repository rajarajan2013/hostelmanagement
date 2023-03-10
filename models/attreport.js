const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const addStudent = sequelize.define("student", {
  

  StudentId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  StudentName: {
    type: Sequelize.STRING,
    allowNull:false
  },
  RoomNum: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  Roomtype: {
    type: Sequelize.STRING,
    allowNull:false
  },
  Bookingtype: {
    type: Sequelize.STRING,
  },
  TotalAmount: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  Status:{
    type: DataTypes.BOOLEAN,
    allowNull:false
  }
});

module.exports = Addfeedetail;
