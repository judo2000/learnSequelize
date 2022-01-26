const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {};

User.init(
    {
        // column declaration
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
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