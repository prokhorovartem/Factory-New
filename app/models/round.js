module.exports = function (sequelize, DataTypes) {
  return sequelize.define('round', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'game_id'
    },
    winnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'winner_id'
    },
    mvpId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mvp_id'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'round'
  });
};
