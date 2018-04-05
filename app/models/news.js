module.exports = function(sequelize, Sequelize) {
    var News = sequelize.define('news', {
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
            type: Sequelize.DATEONLY,
            allowNull: false,
            field: 'date'
        }
    }, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
        tableName: 'match'
    });
    return News;
}
