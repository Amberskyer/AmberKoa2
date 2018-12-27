'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
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
                allowNull: true,
            },
            password: {
                field: 'password',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                field: 'status',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            createTime: {
                field: 'create_time',
                type: DataTypes.DATE,
                allowNull: true,
            },
            updateTime: {
                field: 'update_time',
                type: DataTypes.DATE,
                allowNull: true,
            }
        },
        {
            tableName: 'user',
            timestamps: false,
            freezeTableName: true// 默认false修改表名为复数，true不修改表名，与数据库表名同步
        });
};