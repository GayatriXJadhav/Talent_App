const { deleteTalent } = require("../../client/src/features/talents/talentAPI.js");
const Talent=require("../models/Talent.js");
const mongoose=require("mongoose");

const talentController={
    getAllTalents:async(req,res)=>{
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
    },
    createTalent:async(req,res)=>{
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
    },
    updateTalent:async(req,res)=>{
         try {
                const { id } = req.params;
                
               
        
                // Validate ID format
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid talent ID format" });
                }
        
                const talent = await Talent.findById(id);
                if (!talent) {
                   
                    return res.status(404).json({ message: "Talent not found" });
                }
        
                const { name, email, skills, experience } = req.body;
        
                // Check if email is being changed and if it already exists
                if (email && email !== talent.email) {
                    const emailExists = await Talent.findOne({ email });
                    if (emailExists) {
                        return res.status(400).json({ message: "Email already exists" });
                    }
                }
        
                // Prepare update data
                const updateData = {};
                if (name) updateData.name = name;
                if (email) updateData.email = email;
                if (skills) {
                    updateData.skills = Array.isArray(skills) ? skills : skills.split(",").map(s => s.trim());
                }
                if (experience !== undefined) updateData.experience = experience;
        
                
        
                const updatedTalent = await Talent.findByIdAndUpdate(
                    id,
                    updateData,
                    { new: true, runValidators: true }
                );
        
                
                res.status(200).json(updatedTalent);
            } catch (error) {
                console.error("Error updating talent:", error);
                res.status(500).json({ message: "Server error while updating talent" });
            }
    },
    deleteTalent:async(req,res)=>{
         try {
                const { id } = req.params;
                
              
        
                // Validate ID format
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid talent ID format" });
                }
        
                const talent = await Talent.findByIdAndDelete(id);
                if (!talent) {
                    
                    return res.status(404).json({ message: "Talent not found" });
                }
        
               
                res.status(200).json({ message: "Talent deleted successfully" });
            } catch (error) {
                console.error("Error deleting talent:", error);
                res.status(500).json({ message: "Server error while deleting talent" });
            }
    }

};
module.exports=talentController;