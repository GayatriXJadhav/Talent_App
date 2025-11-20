import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-600 text-sm">
              © 2025 Talent Portal. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer