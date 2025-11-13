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
    }, 5000);

    // Cleanup timer if user types again before 500 ms
    return () => clearTimeout(handler);
  }, [query, dispatch]);
  return (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 justify-center items-center bg-white shadow-md rounded-lg w-full max-w-xl mx-auto mt-6 border border-gray-200">
    <label className="text-gray-700 font-medium text-lg">
      Filter by Skill
    </label>

    <input
      className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      type="text"
      placeholder="Type a skill..."
      onChange={(e) => dispatch(filterTalentBySkill(e.target.value))}
    />
  </div>
);
};

export default SkillFilter;
