'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clubName: {
        field: 'club_name',
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('clubs');
  }
};