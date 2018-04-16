module.exports = function (app, models) {
  function isLoggedIn(req, resp, next) {
    if (req.isAuthenticated())
      return next();
    resp.redirect('/signin');
  }

  app.get('/api/teams', function (req, res) {
    models.team.findAll().then(function (teams) {
      res.send(JSON.stringify(teams, "", 4))
    })
  });
  app.get('/api/teams/:id', function (req, res) {
    models.team.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (team) {
      team ?
        res.send(JSON.stringify(team, "", 4)) :
        res.send('{}');
    })
  });
  app.get('/api/teams/:id/players', function (req, res) {
    models.player.findAll({
      where: {
        teamId: req.params.id
      }
    }).then(function (players) {
      players ?
        res.send(JSON.stringify(players, "", 4)) :
        res.send('{}')
    })
  });
  app.get('/api/teams/:id/matches', function (req, res) {
    models.match.findAll({
      where: {
        $or: [
          {
            team1Id: req.params.id
          },
          {
            team2Id: req.params.id
          }
        ]
      },
      include: [
        {
          model: models.team,
          as: 'first_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.team,
          as: 'second_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        }
      ],
      order: [['matchBegin', 'DESC']],
      limit: 5
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches, "", 4)) :
        res.send('{}')
    })
  });
  app.get('/api/players/:id', function (req, res) {
    models.team.findAll({
      attributes: {
        include: ['name']
      },
      include: [{
        model: models.player,
        required: true,
        where: {
          id: req.params.id
        },
        include: [{
          model: models.weapon,
          required: true,
          attributes: {
            include: ['name']
          }
        }]
      }]
    }).then(function (player) {
      player ?
        res.send(JSON.stringify(player, "", 4)) :
        res.send('{}')
    })
  });
  app.get('/api/matches/:id', function (req, res) {
    models.match.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: models.team,
          as: 'first_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.team,
          as: 'second_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.team,
          as: 'win_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.tournament,
          attributes: {
            exclude: ['id', 'startDate', 'winnerId', 'winnersPrize']
          }
        }
      ]
    }).then(function (match) {
      match ?
        res.send(JSON.stringify(match, "", 4)) :
        res.send('{}')
    })
  });
  app.get('/api/matches/:id/games', function (req, res) {
    models.game.findAll({
      where: {
        matchId: req.params.id
      }
    }).then(function (games) {
      games ?
        res.send(JSON.stringify(games)) :
        res.send('{}')
    })
  });
  app.get('/api/games/:id', function (req, res) {
    models.game.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (game) {
      game ?
        res.send(JSON.stringify(game)) :
        res.send('{}')
    })
  });
  app.get('/api/games/:id/rounds', function (req, res) {
    models.round.findAll({
      where: {
        gameId: req.params.id
      }
    }).then(function (rounds) {
      rounds ?
        res.send(JSON.stringify(rounds)) :
        res.send('{}')
    })
  });
  app.get('/api/tournaments', function (req, res) {
    models.tournament.findAll().then(function (teams) {
      res.send(JSON.stringify(teams))
    })
  });
  app.get('/api/tournaments/:id', function (req, res) {
    models.tournament.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: models.team,
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        }
      ]
    }).then(function (tournaments) {
      tournaments ?
        res.send(JSON.stringify(tournaments)) :
        res.send('{}');
    })
  });
  app.get('/api/tournaments/:id/matches', function (req, res) {
    models.match.findAll({
      where: {
        tournamentId: req.params.id
      },
      include: [
        {
          model: models.team,
          as: 'first_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.team,
          as: 'second_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        },
        {
          model: models.team,
          as: 'win_team',
          attributes: {
            exclude: ['id', 'country', 'history', 'favouriteMap', 'amountOfPrizes', 'yearOfEstablishment']
          }
        }
      ]
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches, "", 4)) :
        res.send('{}');
    })
  });
  app.get('/api/weapons/:id', function (req, res) {
    models.weapon.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (tournaments) {
      tournaments ?
        res.send(JSON.stringify(tournaments)) :
        res.send('{}');
    })
  });
  app.get('/api/news', function (req, res) {
    models.news.findAll().then(function (teams) {
      res.send(JSON.stringify(teams))
    })
  });
  app.get('/api/news/:id', function (req, res) {
    models.news.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (team) {
      team ?
        res.send(JSON.stringify(team)) :
        res.send('{}');
    })
  });
  app.get('/api/news/:id/comments', function (req, res) {
    models.comment.findAll({
      where: {
        newsId: req.params.id
      }
    }).then(function (team) {
      team ?
        res.send(JSON.stringify(team)) :
        res.send('{}');
    })
  });
  app.post('/api/news', isLoggedIn, function (req, res) {
    models.news.create({
      title: req.body.title,
      text: req.body.text,
      userId: 1
    }).then(function (news) {
      res.json(news);
    })
  });
  app.post('/api/news/:id', function (req, res) {
    models.comment.create({
      text: req.body.text,
      userId: 1,
      newsId: req.body.id
    }).then(function (news) {
      res.json(news);
    })
  });
};
