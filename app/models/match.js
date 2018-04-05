module.exports = function(sequelize, DataTypes) {
	return sequelize.define('match', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		team1Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'team1_id'
		},
		team2Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'team2_id'
		},
		points1: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '0',
			field: 'points1'
		},
		points2: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '0',
			field: 'points2'
		},
		winnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'winner_id'
		},
		matchBegin: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'match_begin'
		},
		matchEnd: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'match_end'
		},
		tournamentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'tournament_id'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		    tableName: 'match'
	});
};
