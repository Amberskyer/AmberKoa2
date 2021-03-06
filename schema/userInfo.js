'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_info', {
            id: {
                field: 'id',
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                field: 'user_id',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tel: {
                field: 'tel',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            logo: {
                field: 'logo',
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'user_info',
            timestamps: false,
            freezeTableName: true
        });
};