const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {};

User.init(
    {
        // column declaration
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        // database configureation
        sequelize,
        timestams: false,
        modelName: 'User',
    }
);

module.exports = User;