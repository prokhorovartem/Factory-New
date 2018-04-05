module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstname: {
          type: Sequelize.STRING,
          notEmpty: true
        },
        lastname: {
          type: Sequelize.STRING,
          notEmpty: true
        },
        username: {
          type:Sequelize.TEXT,
          notEmpty: true
        },
        password : {
          type: Sequelize.STRING,
          allowNull: false
        },
        role: {
          type: Sequelize.ENUM('admin','moderator'),
          defaultValue:'admin'
        }
    }, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true
    });
    return User;
}
