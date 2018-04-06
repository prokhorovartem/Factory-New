const authController = require('../controllers/contentController');

module.exports = function(app, passport) {

    const isLoggedIn = function(req, resp, next) {
        if (req.isAuthenticated())
            return next();
        resp.redirect('/signin');
    };

    const isNotLoggedIn = function(req, resp, next) {
        if (!req.isAuthenticated())
            return next();
        resp.redirect('/main');
    };

    app.get('/main', isLoggedIn, authController.main);

    app.get('/settings', isLoggedIn, authController.settings);

};
