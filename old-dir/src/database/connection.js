const Sequelize = require('sequelize')
const sequelize = new Sequelize('socialnetwork', 'pratham', 'rootedpirate', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAlias: false,
})

module.exports = sequelize
global.sequelize = sequelize
