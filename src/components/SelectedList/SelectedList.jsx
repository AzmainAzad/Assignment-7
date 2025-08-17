import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SelectedList = ({
  selectedPlayers,
  handleRemovePlayer,
  setShowSelected,
  maxPlayers = 6,
}) => {
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <p className="text-gray-500 text-lg">No players selected yet.</p>
      ) : (
        <>
          {/* Title */}
          <p className="text-2xl font-bold mb-4">
            Selected Players ({selectedPlayers.length}/{maxPlayers})
          </p>

          {/* Players list */}
          <div className="space-y-4">
            {selectedPlayers.map((player, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 flex items-center justify-between"
              >
                {/* Left side: Image + Name + Price */}
                <div className="flex items-center gap-6">
                  <img
                    src={player.image}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <h2 className="text-xl font-semibold mb-1">
                      {player.name}
                    </h2>
                    <p className="font-semibold">Price: ৳{player.price}</p>
                  </div>
                </div>

                {/* Right side: Trash icon button */}
                <button
                  onClick={() => handleRemovePlayer(player.name)}
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-lg" />
                </button>
              </div>
            ))}
          </div>

          {/* Add More Player button */}
          <div className="mt-6">
            <button
              onClick={() => setShowSelected(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
            >
              Add More Player
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedList;
