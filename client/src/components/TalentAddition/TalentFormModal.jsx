import React from "react";
import TalentForm from "./TalentForm";

const TalentFormModal = ({ isOpen, onClose, children ,talent=null}) => {
  if (!isOpen) return null; // 👈 don’t render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white/20 flex-row p-6 rounded-xl shadow-lg w-[70%] max-w-3xl h-[90%] relative overflow-hidden">
        {/* Close Button */}
       
   

       
        <TalentForm onClose={onClose}  talent={talent}/>
      </div>
    </div>
  );
};

export default TalentFormModal;
