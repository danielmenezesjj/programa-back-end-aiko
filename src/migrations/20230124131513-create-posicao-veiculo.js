'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PosicaoVeiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      Veiculo_id :{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Veiculos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PosicaoVeiculos');
  }
};