'use strict'
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('file', {
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
            folderId: {
                field: 'folder_id',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            url: {
                field: 'url',
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            intro: {
                field: 'intro',
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
            tableName: 'file',
            timestamps: false,
            freezeTableName: true
        });
};