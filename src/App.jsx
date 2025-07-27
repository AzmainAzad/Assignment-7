
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';



function App() {

  const [money, setMoney] = useState(0);
   const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleAddMoney = () => {
    setMoney(20000000);
  }

    const handleSelectPlayer = (player) => {
    
    const alreadySelected = selectedPlayers.find(p => p.name === player.name);
    if (!alreadySelected && money >= player.price) {
      setSelectedPlayers([...selectedPlayers, player]);
      setMoney(money - player.price);
    } else if (money < player.price) {
      alert("Not enough coins!");
    }
  };
  

  return (
    <>
      
      <div className='w-11/12 m-auto'>
          <Navbar money={money} handleAddMoney={handleAddMoney}></Navbar>
          <Selected selectedCount={selectedPlayers.length}></Selected>
          <Players handleSelectPlayer={handleSelectPlayer}></Players>
      </div>
      
    </>
  )
}

export default App

