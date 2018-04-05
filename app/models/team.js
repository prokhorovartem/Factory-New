'use strict';
module.exports = function(sequelize, DataTypes) {
	var Team = sequelize.define('team', {
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
      field: 'amount_of_prizes'
    }
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		    tableName: 'team'
	});
	return Team;
};
