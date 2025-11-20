import { useState } from 'react'

import './App.css'
import SkillFilter from './components/SkillFilter'

import TalentList from './components/TalentList'
import TalentFormModal from './components/TalentAddition/TalentFormModal'
import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className='mt-0 '>
      <Navbar onClick={()=>setIsModalOpen(true)}/>
      <DashBoard/>
      <SkillFilter/>
      <TalentFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      <TalentList/>
       <Footer/>
     
    </div>
    </>
  )
}
export default App
       
       

      



        

