import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillFilter from './components/skillFilter'
import TalentForm from './components/TalentAddition/TalentForm'
import TalentList from './components/TalentList'
import TalentFormModal from './components/TalentAddition/TalentFormModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className='mt-0'>

      <div className= 'bg-blue-100 flex flex-row items-center justify-center p-5 text-2xl'>

      <h1 >Welcome to Talent Portal</h1>
      </div>
      

       <SkillFilter/>

        <div className="flex justify-center my-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          + Add Talent
        </button>
      </div>

      <TalentFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
       
        <TalentForm onClose={() => setIsModalOpen(false)} />
      </TalentFormModal>
      <TalentList/>

    </div>
    </>
  )
}

export default App
