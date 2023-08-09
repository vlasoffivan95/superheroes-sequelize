const superHeroesRouter = require("express").Router();
const SuperHeroesController = require("../controllers/superHeroesController");

superHeroesRouter.post("/", SuperHeroesController.createSuperHero);
superHeroesRouter.get("/", SuperHeroesController.getSuperHeroes);
superHeroesRouter.get("/:heroId", SuperHeroesController.getSuperHero)
superHeroesRouter.put("/:heroId", SuperHeroesController.editSuperHero)
superHeroesRouter.delete("/:heroId", SuperHeroesController.deleteSuperHero)

module.exports = superHeroesRouter;
