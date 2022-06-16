const { Schema, model } = require("mongoose");

const GoogleUser = new Schema({
  id: {
    type: String,
  },
  user_id: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: "en",
  },
  token: {
    type: String,
    required: true,
  },
  refrest_token: {
    type: String,
    required: true,
  },
});

module.exports = model("GoogleUser", GoogleUser);
