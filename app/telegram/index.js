const TelegramBot = require('node-telegram-bot-api');
// Устанавливаем токен, который выдавал нам бот.
const token = process.env.token;
// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});
const models = require('../models');

//Выводит Сеню при старте
bot.onText(/\/start/, function (msg) {
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    bot.sendSticker(msg.chat.id, 'CAADAgADCBMAAkKvaQABJS_tlanrZB8C');
});
bot.onText(/\/teams/, function (msg) {
    var response = "Список всех команд:\n";
    models.team.findAll().then(function(teams) {
        for (var i = 0; i < teams.length; i++) {
            response += teams[i].name + "\n";
        }
        bot.sendMessage(msg.chat.id, response);
    });
});
bot.onText(/\/team (.+)/, function (msg, match) {
    var resp = match[1];
    models.team.findAll({
        include: [{model: models.player, required: true}],
        where: {
            name: resp
        }
    }).then(function (team) {
        var resp = "Название: " + team[0].name + "\n" + "Страна: " +
            team[0].country + "\n" + "Дата создания: " + team[0].yearOfEstablishment + "\n" +
            "Игроки: \n";
        for (var i = 0; i < 2; i++) {
            resp += team[0].players[i].nickname + "\n";
        }

        bot.sendMessage(msg.chat.id, resp);
    })
});
bot.onText(/\/players/, function (msg) {
    var response = "Список всех игроков:\n";
    models.player.findAll().then(function(players) {
        for (var i = 0; i < players.length; i++) {
            response += players[i].nickname + "\n";
        }
        bot.sendMessage(msg.chat.id, response);
    });
});
bot.onText(/\/player (.+)/, function (msg, match) {
    var resp = match[1];
    models.player.findAll({
        include: [{model: models.team, required: true}],
        where: {
            nickname: resp
        }
    }).then(function (player) {
        var resp = "Никнейм: " + player[0].nickname + "\n" + "Имя: " +
            player[0].name + "\n" + "Фамилия: " + player[0].surname + "\n" +
            "Дата рождения: " + player[0].dateOfBirth  + "\n" + "Страна: " + player[0].country+ "\n" +
            "Старт карьеры: " + player[0].startOfCareer  + "\n" + "Команда: " +
            player[0].team.name;
            bot.sendMessage(msg.chat.id, resp);
    })
});
bot.onText(/\/killers/, function (msg) {
    var resp = "Топ-10 киллеров:\n";
    models.frag.findAll({
        attributes: [[models.sequelize.fn('count', models.sequelize.col('frag.killer_id')), 'counter']],
        include: [{
            model: models.player,
            required: true,
            attributes: ['nickname']
        }],
        group: ['nickname', 'player.id'],
        order: [[models.sequelize.fn('count', models.sequelize.col('frag.killer_id')), 'DESC']],
        limit: 10
    }).then(function (killers) {
        console.log(killers[0].dataValues.counter);
        for (var i = 0; i < killers.length; i++) {
            resp += killers[i].player.nickname + " - " + killers[i].dataValues.counter + " фрага\n";
        }
        bot.sendMessage(msg.chat.id, resp);
    })
});

// Простая команда без параметров.
bot.on('message', function (msg) {
});

bot.on('polling_error', function (error) {
    console.log(error.code);  // => 'EFATAL'
});