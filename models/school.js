/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    xue_xiao_ming_cheng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suo_su_di_qu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    xue_xiao_lei_xing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ban_xue_xing_zhi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jian_xiao_shi_jian: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    jing_du: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    wei_du: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'school'
  });
};
