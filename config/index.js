const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // 4 parameters in this order
    // 1. Name of datrabase we want to connect to
    process.env.DB_NAME,
    // 2 Which user do we want to connect as
    process.env.DB_USER,
    // 3  What is the password of the user that we want to connect as
    process.env.DB_PASSWORD,
    // 4 a confiruration object for the database we want to connect to
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
)

module.exports = sequelize;