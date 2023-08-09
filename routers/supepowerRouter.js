const superPowerRouter = require("express").Router();
const superPowerController = require("../controllers/superPowerController");

superPowerRouter.post("/", superPowerController.createSuperPower);
superPowerRouter.get("/", superPowerController.getSuperPowers);
superPowerRouter.get("/:superPowerId", superPowerController.getSuperPower);
superPowerRouter.put("/:superPowerId", superPowerController.editSuperPower);
superPowerRouter.delete("/:superPowerId", superPowerController.deleteSuperPower)

module.exports = superPowerRouter;
