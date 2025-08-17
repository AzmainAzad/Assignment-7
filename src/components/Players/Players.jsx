import React, { useEffect, useState } from 'react';
import Player from '../Player/Player.jsx';


const Players = ({ handleSelectPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
  fetch('/players.json') 
    .then((res) => res.json())
    .then((data) => setPlayers(data));
}, []);

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {players.map((player, index) => (
        
        <Player key={index} player={player} handleSelectPlayer={handleSelectPlayer}></Player>
      ))}
    </div>
  );
};

export default Players;
