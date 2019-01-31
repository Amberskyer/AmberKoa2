/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pinyin', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pinyin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hanzi: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'pinyin'
  });
};
