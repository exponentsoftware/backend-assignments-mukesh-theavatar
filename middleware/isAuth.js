var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    try {
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Username is incorrect. Please try again!",
          });
        }
        if (!user.validPassword(password)) {
          return done(null, false, {
            message: "Password is incorrect. Please try again!",
          });
        }
        return done(null, user);
      });
    } catch (error) {
      return res.status(511).send({
        message:
          "we are not able to authenticate your credentials, Please check and try again!",
      });
    }
  })
);
