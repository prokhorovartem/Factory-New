module.exports = function (app, models) {
  function isLoggedIn(req, resp, next) {
    if (req.isAuthenticated())
      return next();
    resp.redirect('/signin');
  }

  app.get('/api/teams', function (req, res) {
    models.team.findAll().then(function (teams) {
      res.send(JSON.stringify(teams))
    })
  });
  app.get('/api/teams/:id', function (req, res) {
    models.team.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (team) {
      team ?
        res.send(JSON.stringify(team)) :
        res.send('{}');
    })
  });
  app.get('/api/teams/:id/players', function (req, res) {
    models.player.findAll({
      where:{
        teamId: req.params.id
      }
    }).then(function (players) {
      players ?
        res.send(JSON.stringify(players)) :
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
      order: [['matchBegin', 'DESC']],
      limit: 5
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches)) :
        res.send('{}')
    })
  });
  app.get('/api/players/:id', function (req, res) {
    models.player.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (players) {
      players ?
        res.send(JSON.stringify(players)) :
        res.send('{}')
    })
  });
  app.get('/api/matches/:id', function (req, res) {
    models.match.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (match) {
      match ?
        res.send(JSON.stringify(match)) :
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
      }
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
      }
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches)) :
        res.send('{}');
    })
  });
};
