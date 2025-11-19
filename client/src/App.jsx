import { useState } from 'react'

import './App.css'
import SkillFilter from './components/SkillFilter'
import TalentForm from './components/TalentAddition/TalentForm'
import TalentList from './components/TalentList'
import TalentFormModal from './components/TalentAddition/TalentFormModal'
import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className='mt-0 '>

      <Navbar onClick={()=>setIsModalOpen(true)}/>
      <DashBoard/>
      

       <SkillFilter/>

        

      <TalentFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
       
        {/* <TalentForm onClose={() => setIsModalOpen(false)} />
      </TalentFormModal> */}
      <TalentList/>
       
     
    </div>
    </>
  )
}

export default App
