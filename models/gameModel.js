var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema(
  {
    title: String,
    plot: String,
    genre: String,
    release: String,
    developer: String,
  },
  {
    collection: "game_collection",
  }
);

module.exports = mongoose.model("gameModel", gameSchema);
