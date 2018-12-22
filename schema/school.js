'use strict'
module.exports = function (sequelize, DataTypes) {
    var School = sequelize.define('school', {
            id: {
                field: 'id',
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            xue_xiao_ming_cheng: {
                field: 'xue_xiao_ming_cheng',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            suo_su_di_qu: {
                field: 'suo_su_di_qu',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            xue_xiao_lei_xing: {
                field: 'xue_xiao_lei_xing',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            ban_xue_xing_zhi: {
                field: 'ban_xue_xing_zhi',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            jian_xiao_shi_jian: {
                field: 'jian_xiao_shi_jian',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            jing_du: {
                field: 'jing_du',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            wei_du: {
                field: 'wei_du',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tableName: 't_suzhou_001_xue_xiao',
            timestamps: false,
            freezeTableName: true
        });
    return School
};