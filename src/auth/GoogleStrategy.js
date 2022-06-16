const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GoogleUser = require("../models/GoogleUser");
const User = require("../models/User");

const LoginStrategy = new GoogleStrategy(
  {
    callbackURL: "http://localhost:3000/auth/google/callback",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    scope: ["profile", "email"],
    state: true,
  },
  async (token, refreshToken, profile, done) => {
    console.log("profile", profile);
    var googleData = GoogleUser.findOne({ id: profile.id });
    if (googleData) {
      const data = User.findOne({ id: googleData.user_id });
      if (data) return done(null, data);
    }
    return done(null, profile);
  }
);

const register = (app, passport) => {
  passport.use("google", LoginStrategy);
  app.get("/auth/google", passport.authenticate("google"));
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
};

const googleToUser = async (googleData) => {
  const user = await User.create({
    display_name: googleData.displayName,
    avatar_url: googleData._json.picture,
    email: googleData._json.email,
  });
};

module.exports = {
  register,
};
