module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bomb', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		roundId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'round_id'
		},
		bomberId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'bomber_id'
		},
		sapperId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sapper_id'
		},
		statusOfBomb: {
			type: DataTypes.ENUM("planted","defused","exploded","laid","carried"),
			allowNull: false,
			field: 'status_of_bomb'
		},
		placeOfBomb: {
			type: DataTypes.ENUM("A","B"),
			allowNull: true,
			field: 'place_of_bomb'
		}
	}, {
        timestamps: false,
        //freezeTableName - sequelize пытается обзывать таблицы во множественном числе
        freezeTableName: true,
		tableName: 'bomb'
	});
};
