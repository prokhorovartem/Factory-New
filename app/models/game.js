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
			allowNull: false,
			field: 'match_id'
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
		mvpId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'mvp_id'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		    tableName: 'game'
	});
};
