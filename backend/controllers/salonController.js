const Salon = require("../models/Salon");

const getSalons = async (req, res) => {
  try {
    const salons = await Salon.find();

    res.status(200).json(salons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addSalon = async (req, res) => {
  try {
    const salon = await Salon.create(req.body);

    res.status(201).json(salon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSalons,
  addSalon,
};