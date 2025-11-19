import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTalent, clearError } from "../../features/talents/talentSlice";

const TalentForm = ({onClose ,talent=null  }) => {
  const dispatch = useDispatch();
  const {error}=useSelector((state)=>state.talents);
 
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
      dispatch(updateTalent({id:talent._id || talent.id,...talentData}))
      .unwrap()
      .then(()=>{
        onClose();
      })
      .catch(()=>{})
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
  
     })
    }
  };

    const clearErrorOnce=()=>{
      if(error){

        dispatch(clearError());
      }
    }
  return (
    
     
      
      //   <form
      //     onSubmit={handleSubmit}
      //     className="bg-white shadow-lg rounded-xl p-6 mt-4 w-full space-y-4 border border-gray-200 animate-fadeIn"
      //   >
       
      //    {error && (
      //   <p className="text-red-500 text-center font-medium">
      //     {error}
      //   </p>
      // )}
      //   {/* Input field for Name Email skills Experience */}
          
      //     <input
      //       placeholder="Name"
      //       value={name}
            
      //       onChange={(e) =>{
      //         clearErrorOnce();
      //         setName(e.target.value);

      //       }}
      //       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      //       required
      //     />

      //     <input
      //       placeholder="Email"
      //       value={email}
      //       onChange={(e) =>{ 
      //         clearErrorOnce();
      //         setEmail(e.target.value)}}
      //       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      //       required
      //     />

      //     <input
      //       placeholder="Skills (comma separated)"
      //       value={skills}
      //       onChange={(e) => {
      //         clearErrorOnce();
      //         setSkills(e.target.value)}}
      //       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      //       required
      //     />

      //     <input
      //       placeholder="Experience"
      //       value={experience}
      //       onChange={(e) =>{ 
      //         clearErrorOnce();
      //         setExperience(e.target.value)}}
      //       className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      //       required
      //     />

      //      <div className=" flex flex-row justify-center"> 

      //     <button
      //       type="submit"
      //       className="m-3 w-full bg-blue-600 text-white py-2 rounded-lg text-xl hover:bg-blue-700 transition-all duration-200"
          
      //     >
      //     {isEditMode ? "Update Talent": " Add Talent"}
      //     </button>
      //          <button
      //               onClick={onClose}
      //               className=" m-3 py-2 border-2 rounded-lg px-2 text-gray-500 hover:text-gray-700 text-xl  "
      //             >
                   
      //              Cancel
      //             </button>
      //      </div>
      //   </form>
   
 
//       <form
//   onSubmit={handleSubmit}
//   className="bg-white shadow-xl rounded-2xl p-8 w-full  mx-auto border border-gray-100 animate-fadeIn"
// >
//   {/* Header */}
//   <div className="text-center mb-8">
//     <h2 className="text-2xl font-bold text-gray-800">
//       {isEditMode ? "Update Talent" : "Add New Talent"}
//     </h2>
//     <p className="text-gray-600 mt-2">
//       {isEditMode ? "Update talent information" : "Add a new talent to your portfolio"}
//     </p>
//   </div>

//   {/* Error Message */}
//   {error && (
//     <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//       <p className="text-red-700 text-center font-medium flex items-center justify-center gap-2">
//         <span>⚠️</span>
//         {error}
//       </p>
//     </div>
//   )}

//   {/* Form Fields */}
//   <div className="space-y-6">
//     {/* Name Field */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Full Name *
//       </label>
//       <input
//         placeholder="Enter full name"
//         value={name}
//         onChange={(e) => {
//           clearErrorOnce();
//           setName(e.target.value);
//         }}
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//         required
//       />
//     </div>

//     {/* Email Field */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Email Address *
//       </label>
//       <input
//         type="email"
//         placeholder="Enter email address"
//         value={email}
//         onChange={(e) => { 
//           clearErrorOnce();
//           setEmail(e.target.value);
//         }}
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//         required
//       />
//     </div>

//     {/* Skills Field */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Skills *
//       </label>
//       <input
//         placeholder="React, Node.js, Python, etc."
//         value={skills}
//         onChange={(e) => {
//           clearErrorOnce();
//           setSkills(e.target.value);
//         }}
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//         required
//       />
//       <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
//     </div>

//     {/* Experience Field */}
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Experience (Years) *
//       </label>
//       <input
//         type="number"
//         min="0"
//         max="50"
//         placeholder="Enter years of experience"
//         value={experience}
//         onChange={(e) => { 
//           clearErrorOnce();
//           setExperience(e.target.value);
//         }}
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//         required
//       />
//     </div>
//   </div>

//   {/* Action Buttons */}
//   <div className="flex gap-3 mt-8">
//     <button
//       type="button"
//       onClick={onClose}
//       className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
//     >
//       Cancel
//     </button>
//     <button
//       type="submit"
//       className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
//     >
//       {isEditMode ? "Update Talent" : "Add Talent"}
//     </button>
//   </div>
// </form>
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
      {isEditMode ? "Update Talent" : "Add Talent"}
    </button>
  </div>
</form>
  );
};

export default TalentForm;
