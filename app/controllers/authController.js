module.exports = {
  signup: function (req, res) {
    res.render('signup', {
      message: req.flash('error')
    });
  },
  main: function (req, resp) {
    resp.render('main');
  },
  signin: function (req, resp) {
    resp.render('signin', {
      message: req.flash('error')
    });
  },
  logout: function (req, resp) {
    req.session.destroy(function (err) {
      resp.redirect('/signin');
    });
  }
};
