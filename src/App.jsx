import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import SelectedList from './components/SelectedList/SelectedList';
import Footer from './components/Footer/Footer';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [money, setMoney] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const handleAddMoney = () => {
    setMoney(17000000);
    toast.success("💰 Free credit claimed successfully!");
  };

  const handleSelectPlayer = (player) => {
    const alreadySelected = selectedPlayers.find(p => p.name === player.name);

    if (alreadySelected) {
      toast.warning("⚠️ Player already selected!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.warning("⚠️ You cannot select more than 6 players!");
      return;
    }

    if (money < player.price) {
      toast.warning("⚠️ Not enough money! Please claim free credit.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setMoney(money - player.price);

  
    toast.success(`🎉 Congratulations! You selected ${player.name}`);
  };

  const handleRemovePlayer = (playerName) => {
    const playerToRemove = selectedPlayers.find(p => p.name === playerName);
    if (!playerToRemove) return; 

    const updatedList = selectedPlayers.filter(p => p.name !== playerName);
    setSelectedPlayers(updatedList);
    setMoney(money + playerToRemove.price);  
    toast.info(`ℹ️ ${playerName} has been removed.`);
  };

  return (
    <div className='w-11/12 m-auto'>
    
      <Navbar money={money} handleAddMoney={handleAddMoney} />

      <Selected
        selectedCount={selectedPlayers.length}
        showSelected={showSelected}
        setShowSelected={setShowSelected}
      />

      <div className='mb-[200px]'>
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
      
      <SubscribeSection/>
      <Footer/>

         <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
