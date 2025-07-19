
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [money, setMoney] = useState(0);

  const handleAddMoney = () => {
    setMoney(100000);
  }
  

  return (
    <>
      
      <div className='w-11/12 m-auto'>
          <Navbar money={money} handleAddMoney={handleAddMoney}></Navbar>
          
      </div>
      
    </>
  )
}

export default App
