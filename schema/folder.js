'use strict'
module.exports = function (sequelize, DataTypes) {
    var Folder = sequelize.define('folder', {
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
            parentId: {
                field: 'parent_id',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            intro: {
                field: 'intro',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            logo: {
                field: 'logo',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            userId: {
                field: 'user_id',
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
            tableName: 'folder',
            timestamps: false,
            freezeTableName: true
        });
    return Folder
};