import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import SelectedList from './components/SelectedList/SelectedList';

function App() {
  const [money, setMoney] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const handleAddMoney = () => {
    setMoney(17000000);
  };

  const handleSelectPlayer = (player) => {
    const alreadySelected = selectedPlayers.find(p => p.name === player.name);

    if (alreadySelected) {
      alert("Player already selected!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      alert("You cannot select more than 6 players!");
      return;
    }

    if (money < player.price) {
      alert("Not enough coins!");
      return;
    }

    
    setSelectedPlayers([...selectedPlayers, player]);
    setMoney(money - player.price);
  };

  const handleRemovePlayer = (playerName) => {
    const playerToRemove = selectedPlayers.find(p => p.name === playerName);
    if (!playerToRemove) return; 

    const updatedList = selectedPlayers.filter(p => p.name !== playerName);
    setSelectedPlayers(updatedList);
    setMoney(money + playerToRemove.price);  
  };

  return (
    <div className='w-11/12 m-auto'>
    
      <Navbar money={money} handleAddMoney={handleAddMoney} />

     
      <Selected
        selectedCount={selectedPlayers.length}
        showSelected={showSelected}
        setShowSelected={setShowSelected}
      />

      {showSelected ? (
        <SelectedList
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
          setShowSelected={setShowSelected}
        />
      ) : (
        <Players handleSelectPlayer={handleSelectPlayer} />
      )}
    </div>
  );
}

export default App;

