
const Player = ({ player, handleSelectPlayer }) => {
    const {name, rating, preferred_hand, price, image} = player;
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border-1 border-gray-200 ">
      <img src={image} className="rounded-2xl mb-2" alt="" />  
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div className="flex justify-between mb-4">
        <p className="text-gray-700">India</p>
        <p className="p-2 rounded-md bg-gray-200">All-Rounder</p>
      </div>
      <hr className="text-gray-200"/>
      <div className="flex justify-between my-2">
           <p className="font-semibold">Rating:</p> <p className="text-gray-600">{rating}</p> 
      </div>
     
     <div className="flex justify-between mb-2">
        <p className="font-semibold">Batting Hand:</p> <p className="text-gray-600">{preferred_hand}</p>
     </div>
      
      <div className="flex justify-between mb-2">
        <p className=" font-semibold">Price: ৳{price}</p>
         <button
          onClick={() => handleSelectPlayer(player)}
          className="border border-gray-200 p-2 hover:bg-gray-100"
        >
          Choose Player
        </button>
      </div>
      
    </div>
  );
};

export default Player;
