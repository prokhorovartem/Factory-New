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
  models.team.findAll().then(function (teams) {
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
      team[0].country + "\n" + "Дата создания: " + team[0].yearOfEstablishment + "\n" + "Любимая карта: " +
      team[0].favouriteMap + "\n" + "Выиграно призовых: " + team[0].amountOfPrizes + "\n" + "Игроки: \n";
    for (var i = 0; i < team[0].players.length; i++) {
      resp += team[0].players[i].nickname + "\n";
    }
    bot.sendMessage(msg.chat.id, resp);
  })
});
bot.onText(/\/players/, function (msg) {
  var response = "Список всех игроков:\n";
  models.player.findAll().then(function (players) {
    for (var i = 0; i < players.length; i++) {
      response += players[i].nickname + "\n";
    }
    bot.sendMessage(msg.chat.id, response);
  });
});
bot.onText(/\/player (.+)/, function (msg, match) {
  var resp = match[1];
  models.team.findAll({
    attributes: {
      include: ['name']
    },
    include: [{
      model: models.player,
      required: true,
      where: {
        nickname: resp
      },
      include: [{
        model: models.weapon,
        required: true,
        attributes: {
          include: ['name']
        }
      }]
    }]
  }).then(function (team) {
    var resp = "Никнейм: " + team[0].players[0].nickname + "\n" + "Имя: " +
      team[0].players[0].name + "\n" + "Фамилия: " + team[0].players[0].surname + "\n" +
      "Дата рождения: " + team[0].players[0].dateOfBirth + "\n" + "Страна: " + team[0].players[0].country + "\n" +
      "Старт карьеры: " + team[0].players[0].startOfCareer + "\n" + "Команда: " +
      team[0].name + "\n" + "Любимое оружие: " + team[0].players[0].weapon.name;
    bot.sendMessage(msg.chat.id, resp);
  })
})
;
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
