module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tournament', {
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
		startDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'start_date'
		},
		endDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'end_date'
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'country'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'city'
		},
		winnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'winner_id'
		},
		amountOfTeam: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'amount_of_team'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		tableName: 'tournament'
	});
};
