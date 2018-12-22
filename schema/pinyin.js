'use strict'
module.exports = function (sequelize, DataTypes) {
    var PinYin = sequelize.define('pinyin', {
            id: {
                field: 'id',
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            pinyin: {
                field: 'pinyin',
                type: DataTypes.INTEGER,
                allowNull: false,
                set: function (val) {
                    this.setDataValue('pinyin', val.toLowerCase());
                },
                get: function (val) {
                    this.getDataValue('pinyin', val.toUpperCase());
                }
            },
            hanzi: {
                field: 'hanzi',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'pinyin',
            timestamps: false,
            freezeTableName: true
        });
    return PinYin
};