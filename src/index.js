require("dotenv").config();
const MongoDB = require("./modules/MongoDB");
const HttpServer = require("./modules/HttpServer");
const Passport = require("./modules/Passport");

// starts
Passport.initPassport(HttpServer);

MongoDB.initMongoDB();
