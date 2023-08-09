const { Superheroes } = require("../models");

module.exports.createSuperHero = async (req, res, next) => {
  const { body } = req;
  const superHero = await Superheroes.create(body);
  res.status(201).send({ data: superHero });
};

module.exports.getSuperHeroes = async (req, res, next) => {
  const superHeroes = await Superheroes.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.status(200).send({ data: superHeroes });
};

module.exports.getSuperHero = async (req, res, next) => {
  const {
    params: { heroId },
  } = req;
  const superHero = await Superheroes.findByPk(heroId);
  res.status(200).send({ data: superHero });
};

module.exports.editSuperHerov1 = async (req, res, next) => {
  const {
    params: { heroId },
    body: newData,
  } = req;
  await Superheroes.update(newData, { where: { id: heroId } });
  res.status(201).send("Okay!");
};

module.exports.editSuperHero = async (req, res, next) => {
  const {
    body: newData,
    params: { heroId },
  } = req;
  const hero = await Superheroes.findByPk(heroId);
  await hero.update(newData, { returning: true });
  res.status(201).send({ data: hero });
};

module.exports.deleteSuperHero = async (req, res, next) => {
  const {
    params: { heroId },
  } = req;
  const hero = await Superheroes.findByPk(heroId);
  await hero.destroy();
  res.status(200).send({ data: hero });
};
