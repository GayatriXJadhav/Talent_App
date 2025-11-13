import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTalent } from "../../features/talents/talentSlice";

const TalentForm = ({onClose}) => {
  const dispatch = useDispatch();
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return alert("Please fill all required fields!");

    const skillArray = skills.split(",").map((s) => s.trim());
    dispatch(addTalent({ name, email, skills: skillArray, experience }));

    // Clear form + close after submission
    setName("");
    setEmail("");
    setSkills("");
    setExperience("");
    setShowForm(false);

    onClose();
  };

  return (
    
     
      
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 mt-4 w-full max-w-md space-y-4 border border-gray-200 animate-fadeIn"
        >
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Add New Talent
          </h3>
        
        {/* Input field for Name Email skills Experience */}
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Add Talent
          </button>
        </form>
   
 
  );
};

export default TalentForm;
