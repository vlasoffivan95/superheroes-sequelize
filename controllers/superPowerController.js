const { Superpowers } = require("../models");

module.exports.createSuperPower = async (req, res, next) => {
  const { body } = req;
  const superpower = await Superpowers.create(body);
  res.status(201).send({ data: superpower });
};

module.exports.getSuperPowers = async (req, res, next) => {
  const superPowers = await Superpowers.findAll();
  res.status(200).send({ data: superPowers });
};

module.exports.getSuperPower = async (req, res, next) => {
  const {
    params: { superPowerId },
  } = req;
  const superPower = await Superpowers.findByPk(superPowerId);
  res.status(200).send({ data: superPower });
};

module.exports.editSuperPower = async (req, res, next) => {
  const {
    params: { superPowerId },
    body: newData,
  } = req;
  const superpower = await Superpowers.findByPk(superPowerId);
  await superpower.update(newData, { returning: true });
  res.status(201).send({ data: superpower });
};

module.exports.deleteSuperPower = async (req, res, next) => {
  const {
    params: { superPowerId },
  } = req;
  const superpower = await Superpowers.findByPk(superPowerId);
  await superpower.destroy();
  res.status(201).send({ data: superpower });
};
