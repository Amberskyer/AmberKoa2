/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('file', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    folder_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'file'
  });
};
