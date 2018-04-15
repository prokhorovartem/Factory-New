var authController = require('../controllers/authController.js');

module.exports = function (app, passport) {
  app.get('/signup', isNotLoggedIn, authController.signup);

  app.get('/signin', isNotLoggedIn, authController.signin);

  app.get('/logout', isLoggedIn, authController.logout);

  app.post('/signup', passport.authenticate('local-signup', {
      badRequestMessage: 'Заполните ВСЕ поля.',
      successRedirect: '/main',
      failureRedirect: '/signup',
      failureFlash: true
    }
  ));

  app.post('/signin', passport.authenticate('local-signin', {
      badRequestMessage: 'Заполните ВСЕ поля.',
      successRedirect: '/main',
      failureRedirect: '/signin',
      failureFlash: true
    }
  ));

  app.get('/auth/vk', passport.authenticate('vkontakte'), function (req, resp) {

  });

  app.get('/auth/vk/callback', passport.authenticate('vkontakte', {
      successRedirect: '/main',
      failureRedirect: '/signin'
    }
  ));

  app.get('/main', isLoggedIn, authController.main);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }

  function isNotLoggedIn(req, resp, next) {
    if (!req.isAuthenticated())
      return next();
    resp.redirect('/');
  }
}
