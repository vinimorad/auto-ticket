const Sequelize = require('sequelize');
const connection = require('../database/database');


const events = connection.define('event', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  client_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ticket_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

})

events.sync({force: false})


module.exports = events;