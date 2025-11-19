import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterTalentBySkill } from "../features/talents/talentSlice";

const SkillFilter = () => {
  const dispatch = useDispatch();
  const [query,setQuery]=useState("");

   useEffect(() => {
    // Wait 500ms after typing stops before dispatching
    const handler = setTimeout(() => {
      if (query.trim()) {
        dispatch(filterTalentBySkill(query));
      } else {
        dispatch(filterTalentBySkill("")); // show all if input cleared
      }
    }, 500);

    // Cleanup timer if user types again before 500 ms
    return () => clearTimeout(handler);
  }, [query, dispatch]);
  const handleSummit=(e)=>{
    e.preventDefault();
  }
  console.log("Component rendered", query);


  return (

  <div className="flex flex-col md:flex-row gap-6 justify-between items-center border border-gray-200 m-2 rounded-xl p-6 bg-white shadow-sm">
  <form onSubmit={handleSummit} className="flex flex-col sm:flex-row gap-4 p-4 justify-center items-center bg-gray-100 rounded-xl w-full md:w-auto border border-blue-100">
    <label className="text-gray-700 font-semibold text-lg whitespace-nowrap">
      🔍 Filter by Skill
    </label>
    <input
      className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
      type="text"
      placeholder="Type a skill..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </form>
  
  <div className="flex gap-4">
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-6 py-3 text-center min-w-[140px] shadow-sm">
      <div className="text-2xl font-bold text-green-700">95%</div>
      <div className="text-sm text-green-600 font-medium">Relevance</div>
    </div>
    
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-6 py-3 text-center min-w-[140px] shadow-sm">
      <div className="text-2xl font-bold text-blue-700">247</div>
      <div className="text-sm text-blue-600 font-medium">Total Talents</div>
    </div>
  </div>
</div>
);
};

export default SkillFilter;
