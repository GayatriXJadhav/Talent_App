import React, { useEffect, useState } from 'react'

const Navbar = ({onClick}) => {
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
     const handleScroll=()=>{
        setScrolled(window.scrollY > 50);
     };
     handleScroll();
     window.addEventListener('scroll',handleScroll);
     return ()=>window.removeEventListener('scroll',handleScroll);

    },[])
    
    //   console.log('Navbar rendered - scrolled state:', scrolled);
  return (
 <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
   }`}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className={`flex items-center gap-2 text-xl font-semibold transition-colors duration-300  ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          <div className={` font-bold italic px-2 py-1 rounded transition-colors duration-300 ${
            scrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>TP</div>
          <span>Talent Portal</span>
        </div>
            
        {/* Nav Links */}
         {/* <div className={`flex justify-start gap-4 text-sm font-medium transition-colors duration-300 ${
          scrolled ? 'text-gray-900' : 'text-white'}`}>
       <button className='font-bold text-base'>TalentList</button>
   
       <button className='font-bold text-base'>Filter</button>
       </div> */}

        {/* Right side */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button 
            onClick={onClick}
            className={`font-bold text-base transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            + Add Talent
          </button>
        </div> 
      </div>
    </nav>
  )
}

export default Navbar