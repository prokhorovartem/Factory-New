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
	return Team;
};
