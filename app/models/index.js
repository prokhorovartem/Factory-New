"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

// fs
//     .readdirSync(__dirname)
//     .filter(function(file) {
//         return (file.indexOf(".") !== 0) && (file !== "index.js");
//     })
//     .forEach(function(file) {
//         var model = sequelize.import(path.join(__dirname, file));
//         db[model.name] = model;
//     });

// Object.keys(db).forEach(function(modelName) {
//     if ("associate" in db[modelName]) {
//         db[modelName].associate(db);
//     }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.bomb = require('../models/bomb.js')(sequelize, Sequelize);
db.frag = require('../models/frag.js')(sequelize, Sequelize);
db.game = require('../models/game.js')(sequelize, Sequelize);
db.match = require('../models/match.js')(sequelize, Sequelize);
db.player = require('../models/player.js')(sequelize, Sequelize);
db.round = require('../models/round.js')(sequelize, Sequelize);
db.team = require('../models/team.js')(sequelize, Sequelize);
db.tournament = require('../models/tournament.js')(sequelize, Sequelize);
db.user = require('../models/user.js')(sequelize, Sequelize);
db.weapon = require('../models/weapon.js')(sequelize, Sequelize);

//Relations
db.player.belongsTo(db.team);
db.team.hasMany(db.player);
db.tournament.belongsTo(db.team, {foreignKey: 'winner_id'});
db.team.hasMany(db.tournament, {foreignKey: 'winner_id'});
db.match.belongsTo(db.team, {foreignKey: 'team1_id'});
db.team.hasMany(db.match, {foreignKey: 'team1_id'});
db.match.belongsTo(db.team, {foreignKey: 'team2_id'});
db.team.hasMany(db.match, {foreignKey: 'team2_id'});
db.match.belongsTo(db.team, {foreignKey: 'winner_id'});
db.team.hasMany(db.match, {foreignKey: 'winner_id'});
db.match.belongsTo(db.tournament, {foreignKey: 'tournament_id'});
db.tournament.hasMany(db.match, {foreignKey: 'tournament_id'});
db.game.belongsTo(db.match, {foreignKey: 'match_id'});
db.match.hasMany(db.game, {foreignKey: 'match_id'});
db.game.belongsTo(db.player, {foreignKey: 'mvp_id'});
db.player.hasMany(db.game, {foreignKey: 'mvp_id'});
db.round.belongsTo(db.game, {foreignKey: 'game_id'});
db.game.hasMany(db.round, {foreignKey: 'game_id'});
db.round.belongsTo(db.team, {foreignKey: 'winner_id'});
db.team.hasMany(db.round, {foreignKey: 'winner_id'});
db.round.belongsTo(db.player, {foreignKey: 'mvp_id'});
db.player.hasMany(db.round, {foreignKey: 'mvp_id'});
db.frag.belongsTo(db.round, {foreignKey: 'round_id'});
db.round.hasMany(db.frag, {foreignKey: 'round_id'});
db.frag.belongsTo(db.player, {foreignKey: 'killer_id'});
db.player.hasMany(db.frag, {foreignKey: 'killer_id'});
db.frag.belongsTo(db.weapon, {foreignKey: 'weapon_id'});
db.weapon.hasMany(db.frag, {foreignKey: 'weapon_id'});
db.bomb.belongsTo(db.round, {foreignKey: 'round_id'});
db.round.hasMany(db.bomb, {foreignKey: 'round_id'});
db.bomb.belongsTo(db.player, {foreignKey: 'bomber_id'});
db.player.hasMany(db.bomb, {foreignKey: 'bomber_id'});
db.bomb.belongsTo(db.player, {foreignKey: 'sapper_id'});
db.player.hasMany(db.bomb, {foreignKey: 'sapper_id'});

module.exports = db;