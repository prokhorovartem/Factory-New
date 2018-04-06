var bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const VkStrategy = require('passport-vkontakte').Strategy;

module.exports = function(passport, user){
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if(user){
                done(null, user.get());
            }
            else{
                done(user.errors,null);
            }
        });
    });
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done){
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
              where: {
                username:username
              }
            }).then(function(user){
                if(user)
                {
                    return done(null, false, {
                      message : 'Пользователь с таким логином уже существует'
                    } );
                }
                else
                {
                    var userPassword = generateHash(password);
                    var data =
                        {
                          username: username,
                          password: userPassword
                        };
                    User.create(data).then(function(newUser,created){
                        if(!newUser){
                            return done(null,false);
                        }
                        if(newUser){
                            return done(null,newUser);
                        }
                    });
                }
            });
        }
    ));
    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            var User = user;
            var isValidPassword = function(realPassword, inputPassword){
                return bCrypt.compareSync(inputPassword, realPassword);
            };
            User.findOne({
              where : {
                username: username
              }
            }).then(function (user) {
                if (!user || !isValidPassword(user.password, password)) {
                    return done(null, false, {
                      message: 'Указаны неверные данные.'
                    });
                }
                return done(null, user.dataValues);
            }).catch(function(err){
                console.log("Error:",err);
                return done(null, false, {
                  message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    passport.use(new VkStrategy({
        //Ид приложения записан в переменную окружения APP_ID
        clientID: process.env.APP_ID,
        //Секретный ключ приложения записан в переменную окружения APP_SECRET
        clientSecret: process.env.APP_SECRET,
        callbackURL: '/auth/vk/callback',
        apiVersion: '5.69'
      },
      function(accessToken, refreshToken, params, profile, done) {
        User.findOrCreate({
          where: {
            username: profile.id.toString()
          }
        }).spread(function(user, created) {
          return done(null, user);
        }).catch(function (err) {
          console.log("Error:", err);
          return done(null, false, {
            message: 'Что-то пошло не так.'
          });
        });
      }
    ));
};
