const superHeroesRouter = require("express").Router();
const SuperHeroesController = require("../controllers/superHeroesController");

superHeroesRouter.post("/", SuperHeroesController.createSuperHero);
superHeroesRouter.get("/", SuperHeroesController.getSuperHeroes);
superHeroesRouter.get("/:heroId", SuperHeroesController.getSuperHero)

module.exports = superHeroesRouter;
