const express = require("express");
const router = express.Router();

const {
  getSalons,
  addSalon,
} = require("../controllers/salonController");

router.get("/", getSalons);
router.post("/", addSalon);

module.exports = router;