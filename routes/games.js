var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var gameModel = require("../models/gameModel.js");

// Listar alla dokument.
router.get("/", function (req, res, next) {
  gameModel.find(function (err, allGames) {
    if (err) return next(err);
    else {
      res.json(allGames);
    }
  });
});

// Hämtar ett dokument med ett visst ID.
router.get("/:id", function (req, res, next) {
  gameModel.findById(req.params.id, req.body, function (err, game) {
    if (err) return next(err);
    else {
      res.json(game);
    }
  });
});

// Hämtar alla dokument med en viss genre. (/genre/<genre>)
router.get("/genre/:genre", function (req, res, next) {
  gameModel.find({ genre: req.params.genre }, function (err, genreGames) {
    if (err) return next(err);
    else {
      res.json(genreGames);
    }
  });
});

// Hämtar alla dokument med ett visst årtal. (/release/<årtal>)
router.get("/release/:release", function (req, res, next) {
  gameModel.find({ release: req.params.release }, function (err, relGames) {
    if (err) return next(err);
    else {
      res.json(relGames);
    }
  });
});

// Hämtar alla dokument med en viss utvecklare. (/dev/<utvecklare>)
router.get("/dev/:developer", function (req, res, next) {
  gameModel.find({ developer: req.params.developer }, function (err, devGames) {
    if (err) return next(err);
    else {
      res.json(devGames);
    }
  });
});

// Lägger till ett dokument.
router.post("/", function (req, res, next) {
  gameModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Tar bort ett dokument med ett specifikt ID.
router.delete("/:id", function (req, res, next) {
  gameModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Uppdatering av specifikt ID.
router.put("/:id", function (req, res, next) {
  gameModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
