import React from 'react'
import IMG from '../assets/IMG.webp'


const DashBoard = () => {
  return (
    <div className='relative w-full h-[750px] overflow-hidden '> 
     <img src={IMG} alt="Recruitement" className="w-full h-full object-cover  object-top scale-125  translate-y-21" />
    
    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

      {/* TEXT CONTENT */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-2xl">
        
        <h1 className="text-7xl font-bold leading-tight">
          Anything’s possible <br />
          <span className=' text-4xl font-small'> 

           when you have the <br /> 
          </span>
          Right talent
        </h1>

        <p className="mt-4 text-lg">
          Find skilled candidates, in-demand jobs and the solutions you need
          to help you do your best work yet.
        </p>
        </div>
  </div>
  )

}

export default DashBoard;
