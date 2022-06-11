const { Schema, model } = require("mongoose");

const User = new Schema({
  id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  display_name: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "This user has not yet filled out their bio.",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
