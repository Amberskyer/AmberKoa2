'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('school_info', {
            id: {
                field: 'id',
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            schoolid: {
                field: 'schoolid',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            yz: {
                field: 'yz',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            jj: {
                field: 'jj',
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },
        {
            tableName: 'school_info',
            timestamps: false,
            freezeTableName: true// 默认false修改表名为复数，true不修改表名，与数据库表名同步
        });
};