module.exports = {
  signup: function (req, res) {
    res.redirect('/signup');
  },
  main: function (req, resp) {
    resp.redirect('/');
  },
  signin: function (req, resp) {
    resp.redirect('signin');
  },
  logout: function (req, resp) {
    req.session.destroy(function (err) {
      resp.redirect('/');
    });
  }
};
