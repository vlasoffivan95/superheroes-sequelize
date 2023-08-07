const express = require("express");
const router = express.Router();
const superHeroesRouter = require("./superheroesRouter");

router.use("/superheroes", superHeroesRouter);

module.exports = router;
