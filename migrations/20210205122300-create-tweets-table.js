'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tweets', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: Sequelize.STRING(300),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tweets')
  },
}
