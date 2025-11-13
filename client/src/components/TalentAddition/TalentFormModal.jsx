import React from "react";
import TalentForm from "./TalentForm";

const TalentFormModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // 👈 don’t render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-50 bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

       
        <TalentForm onClose={onClose} />
      </div>
    </div>
  );
};

export default TalentFormModal;
