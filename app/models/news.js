module.exports = function (sequelize, Sequelize) {
  return sequelize.define('news', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    text: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'user_id'
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'date'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'news'
  });
}
