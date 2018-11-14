'use strict'
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            field: 'username',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            field: 'password',
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            tableName: 'user',
            timestamps: false,
            freezeTableName: true
        });
    return User
};