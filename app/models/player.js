module.exports = function (sequelize, DataTypes) {
  return sequelize.define('player', {
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
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'surname'
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_of_birth'
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nickname'
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'country'
    },
    startOfCareer: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_of_career'
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'team_id'
    },
    weaponId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'weapon_id',
      defaultValue: '1'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'player'
  });
};
