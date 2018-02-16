module.exports = function(sequelize, DataTypes) {
    return sequelize.define('weapon', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'name'
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'country'
        },
        patrons: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'patrons'
        },
        costs: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'costs'
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'description'
        }
    }, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
        tableName: 'weapon'
    });
};
