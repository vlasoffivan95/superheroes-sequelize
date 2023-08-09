const express = require("express");
const router = express.Router();
const superHeroesRouter = require("./superheroesRouter");
const superPowerRouter = require("./supepowerRouter");

router.use("/superheroes", superHeroesRouter);
router.use("/superpowers", superPowerRouter);

module.exports = router;
