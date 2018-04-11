module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tournament', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'start_date'
    },
    winnerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'winner_id'
    },
    winnersPrize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'winners_prize',
      defaultValue: '0'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'tournament'
  });
};
