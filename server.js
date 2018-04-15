var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var path = require('path');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');

require('./app/telegram');

//For BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(flash());

// For Passport
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', __dirname + '/app/FrontEnd/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Настройки Handlebars
app.set('views', './views');
app.engine('hbs', expressHandlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Настройка статического пути (root)
app.use(express.static(path.join(__dirname, '/views')));

//Models
var models = require("./app/models");

//Routes
require('./app/routes/authRoute.js')(app, passport);
require('./app/controllers/dataController')(app, models);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync({
  // force: true
}).then(function () {
  console.log('Nice! Database looks fine')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

app.listen(5000, function (err) {
  if (!err)
    console.log("Site is live"); else console.log(err)
});
