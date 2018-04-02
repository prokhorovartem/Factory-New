module.exports = function (app, models) {
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
  app.get('/api/tournaments/:id/:match/games', function (req, res) {
    models.game.findAll({
      include: [{
        model: models.match,
        required: true,
        where: {
          id: req.params.match
        },
        include: [{
          model: models.tournament,
          required: true,
          where: {
            id: req.params.id
          }
        }]
      }]
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches)) :
        res.send('{}');
    })
  });
  app.get('/api/tournaments/:id/:match/:game', function (req, res) {
    models.round.findAll({
      include: [{
        model: models.game,
        required: true,
        where: {
          id: req.params.game
        },
        include: [{
          model: models.match,
          required: true,
          where: {
            id: req.params.match
          },
          include: [{
            model: models.tournament
          }]
        }]
      }]
    }).then(function (matches) {
      matches ?
        res.send(JSON.stringify(matches)) :
        res.send('{}');
    })
  });
};
