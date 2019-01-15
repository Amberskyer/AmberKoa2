'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('image', {
            id: {
                field: 'id',
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                field: 'name',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            url: {
                field: 'url',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            isdown: {
                field: 'isdown',
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'image',
            timestamps: false,
            freezeTableName: true// 默认false修改表名为复数，true不修改表名，与数据库表名同步
        });
};