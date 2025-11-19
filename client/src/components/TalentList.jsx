import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTalents } from "../features/talents/talentSlice";
import TalentFormModal from "./TalentAddition/TalentFormModal";

const TalentList = () => {
  const dispatch = useDispatch();
  const { data, loading, error, filterSkill } = useSelector((state) => state.talents);
  const [editingTalent,setEditingTalent]=useState(null);
  const [isModalopen,setIsModalOpen]=useState(false);

  useEffect(() => {
    dispatch(fetchTalents());
  }, [dispatch]);

const handleEdit=(talent)=>{
  setEditingTalent(talent);
  setIsModalOpen(true);
} 
const handleCloseEdit=()=>{
  setEditingTalent(null);
  setIsModalOpen(false);
}

  if (loading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error.message || error}</p>;

  return (
  <div className="  border-0 m-2 rounded-lg  bg-gray-100">
   
    <div className="bg-gray-800 rounded-t-lg p-6 mb-4">
    <h2 className="font-bold text-4xl text-white text-center">
      Talent Management
    </h2>
    <p className="text-gray-300 text-center mt-2">
      {data.length} talented professionals
    </p>
  </div>

   <TalentFormModal 
   isOpen={isModalopen} 
   onClose={handleCloseEdit}
   talent={editingTalent}
   />
       
    
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {data.map((talent) => {
    const createdDate = talent.createdAt
      ? new Date(talent.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "N/A";

    return (
      <div
        key={talent.id || talent._id}
        className="bg-white shadow-md border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200 group"
      >
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{talent.name}</h3>
          <p className="text-md text-gray-500">{talent.email}</p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {talent.skills.slice(0, 4).map((skill, id) => (
            <span
              key={id}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md border border-blue-100"
            >
              {skill}
            </span>
          ))}
          {talent.skills.length > 4 && (
            <span className="px-2 py-1 text-xs bg-gray-50 text-gray-500 rounded-md">
              +{talent.skills.length - 4} more
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex justify-between text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span className="font-medium">Exp:</span>
            <span className="font-semibold text-gray-800">{talent.experience}yrs</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Added:</span>
            <span>{createdDate}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => handleEdit(talent)}
            className="flex-1 bg-white border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm font-medium"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDelete(talent._id || talent.id)}
            className="flex-1 bg-white border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
      )}
    </div>
  </div>
);
};

export default TalentList;
