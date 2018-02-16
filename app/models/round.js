/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('round', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		gameId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'game_id'
		},
		winnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'winner_id'
		},
		mvpId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'mvp_id'
		},
		roundStart: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'round_start'
		},
		roundEnd: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'round_end'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		tableName: 'round'
	});
};
