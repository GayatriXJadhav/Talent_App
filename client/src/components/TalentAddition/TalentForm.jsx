import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTalent, clearError, updateTalent } from "../../features/talents/talentSlice";

const TalentForm = ({onClose ,talent=null  }) => {
  const dispatch = useDispatch();
  const {error,loading}=useSelector((state)=>state.talents);
 
  const isEditMode=Boolean(talent);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  
 useEffect(()=>{
  if(talent){
    setName(talent.name || '');
    setEmail(talent.email || '');
    setSkills(Array.isArray(talent.skills)?talent.skills.join(","):talent.skills || "");
    setExperience(talent.experience || "")
  }
   dispatch(clearError());
 },[talent,dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return alert("Please fill all required fields!");

    const skillArray = skills.split(",").map((s) => s.trim());
    const talentData={
      name,
      email,
      skills:skillArray,
      experience
    }
    if(isEditMode){
      dispatch(updateTalent({
        talentId: talent._id || talent.id, 
        updateData: talentData 
      }
      ))
      .unwrap()
      .then(()=>{
        onClose();
      })
      .catch(()=>{
        console.error("Update failed",error);
         alert(`Update failed: ${error || 'Please check the console for details'}`);  
      })
    }
    else{

      dispatch(addTalent(talentData))
      .unwrap()
      .then(()=>{
  
        // Clear form + close after submission
        setName("");
        setEmail("");
        setSkills("");
        setExperience("");
        
    
        onClose();
      })
     .catch(()=>{
        console.error("Add failed",error)
     })
    }
  };

    const clearErrorOnce=()=>{
      if(error){

        dispatch(clearError());
      }
    }
  return (
<form
  onSubmit={handleSubmit}
  className="bg-white shadow-2xl rounded-3xl p-8 w-full  mx-auto border border-indigo-50 animate-fadeIn"
>
  {/* Header */}
  <div className=" flex flex-row text-center mb-8 justify-center">
    {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl text-white">👤</span>
    </div> */}
    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
      {isEditMode ? "Update Talent" : "Add New Talent"}
    </h2>
   
  </div>

  {/* Error Message */}
  {error && (
    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-4 mb-6">
      <p className="text-red-800 font-medium flex items-center gap-3">
        <span className="text-red-500 text-lg">⚠️</span>
        {error}
      </p>
    </div>
  )}

  {/* Form Fields */}
  <div className="space-y-6">
    {/* Name Field */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Full Name
        </span>
      </label>
      <input
        placeholder="Enter full name"
        value={name}
        onChange={(e) => {
          clearErrorOnce();
          setName(e.target.value);
        }}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition duration-300"
        required
      />
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Email Address
        </span>
      </label>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => { 
          clearErrorOnce();
          setEmail(e.target.value);
        }}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition duration-300"
        required
      />
    </div>

    {/* Skills Field */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Skills
        </span>
      </label>
      <input
        placeholder="React, Node.js, Python, etc."
        value={skills}
        onChange={(e) => {
          clearErrorOnce();
          setSkills(e.target.value);
        }}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 transition duration-300"
        required
      />
      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
        <span>💡</span> Separate skills with commas
      </p>
    </div>

    {/* Experience Field */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          Experience (Years)
        </span>
      </label>
      <input
        type="number"
        min="0"
        max="50"
        placeholder="Enter years of experience"
        value={experience}
        onChange={(e) => { 
          clearErrorOnce();
          setExperience(e.target.value);
        }}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition duration-300"
        required
      />
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-4 mt-10">
    <button
      type="button"
      onClick={onClose}
      className="flex-1 py-4 px-6 border-2 border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
    >
        {loading ? "Saving..." : (isEditMode ? "Update Talent" : "Add Talent")}
    </button>
  </div>
</form>
  );
};

export default TalentForm;
