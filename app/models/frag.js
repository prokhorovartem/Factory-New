module.exports = function (sequelize, DataTypes) {
  return sequelize.define('frag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    roundId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'round_id'
    },
    killerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'killer_id'
    },
    deadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'dead_id'
    },
    weaponId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'weapon_id'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'frag'
  });
};
