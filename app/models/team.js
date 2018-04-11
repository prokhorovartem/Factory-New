module.exports = function (sequelize, DataTypes) {
  return sequelize.define('team', {
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
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'country'
    },
    history: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'history'
    },
    favouriteMap: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'favourite_map'
    },
    amountOfPrizes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'amount_of_prizes',
      defaultValue: '0'
    },
    yearOfEstablishment: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'year_of_establishment'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'team'
  });
};
