const express=require("express");
const Talent=require("../models/Talent.js")

const router = express.Router();

router.get('/talents', async (req, res) => {
    try {
        const { skill } = req.query;
        let talents;
        if (skill) {
            talents = await Talent.find({ skills: { $regex: new RegExp(skill, "i") } });
        }
        else {
            talents = await Talent.find();
        }
        res.status(200).json(talents);
    }
    catch (error) {
        console.log("Error Fetching talents", error);
        res.status(500).json({ message: "Server Error while fetching talents" });
    }
})
router.post('/talents', async (req, res) => {
    try {
        const { name, email, skills, experience } = req.body;
        if (!name || !email) {
            return res.status(401).json({ message: "Name and Email are required" });
        }

        const alreadyexists = await Talent.findOne({ email });
        if (alreadyexists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newtalent = new Talent({
            name,
            email,
            skills: Array.isArray(skills) ? skills: skills?.split(",").map(s => s.trim()),
            experience,

        });
        const savedTalent = await newtalent.save();
        res.status(201).json(savedTalent);
    }
    catch (error) {
        console.error("Error adding talent", error);
        res.status(500).json({ message: "server error while adding talent" });
    }
})

module.exports = router;