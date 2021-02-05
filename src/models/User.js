const Sequelize = require('sequelize')
const sequelize = require('../database/database')

module.exports = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true,
  },
  passwd: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
})
