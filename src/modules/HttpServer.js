const express = require("express");
const app = express();

// Middleware
const expressSession = require("express-session");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: true,
    saveUninitialized: false,
  })
);

app.listen(process.env.PORT | 3000, () => {
  console.log(`Server started on port ${process.env.PORT | 3000}`);
});

module.exports = app;
