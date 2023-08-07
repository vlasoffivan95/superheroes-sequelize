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
