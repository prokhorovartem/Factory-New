module.exports = function (sequelize, Sequelize) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    //Not Null не установлен, т.к. возможна авторизация через вк
    password: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.ENUM('admin', 'moderator', 'user'),
      defaultValue: 'user'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true
  });
}
