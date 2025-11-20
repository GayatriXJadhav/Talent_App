const express=require("express");
const Talent=require("../models/Talent.js");
const talentController = require("../Controllers/talentController.js");
const { default: mongoose } = require("mongoose");

const router = express.Router();



router.get('/talents', talentController.getAllTalents);
router.post('/talents', talentController.createTalent);
router.put('/talents/:id', talentController.updateTalent);
router.delete('/talents/:id', talentController.deleteTalent);

module.exports = router;