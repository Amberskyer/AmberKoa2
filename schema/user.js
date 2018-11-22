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
            userinfoid: {
                field: 'user_info_id',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            password: {
                field: 'password',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                field: 'status',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createTime: {
                field: 'create_time',
                type: DataTypes.DATE,
                allowNull: false,
            },
            updateTime: {
                field: 'update_time',
                type: DataTypes.DATE,
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