module.exports = function (sequelize, Sequelize) {
  return sequelize.define('comment', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    text: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    newsId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'news_id'
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'date'
    }
  }, {
    timestamps: false,
    //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
    freezeTableName: true,
    tableName: 'comment'
  });
}
