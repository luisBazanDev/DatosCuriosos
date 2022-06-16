const passport = require("passport");

function initPassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // Load Passport strategies
  require("../auth/GoogleStrategy.js").register(app, passport);
}

module.exports = {
  initPassport,
};
