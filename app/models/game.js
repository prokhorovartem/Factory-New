/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		matchId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'match_id'
		},
		points1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0',
			field: 'points1'
		},
		points2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0',
			field: 'points2'
		},
		mvpId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'mvp_id'
		},
		gameStart: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'game_start'
		},
		gameEnd: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'game_end'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		tableName: 'game'
	});
};
