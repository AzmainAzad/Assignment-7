const Selected = ({ selectedCount, showSelected, setShowSelected }) => {
  return (
    <div className="flex justify-between my-10">
      <p className="text-4xl font-bold">
        {showSelected ? "Selected Players" : "Available Players"}
      </p>
      <div className="flex">
        <button
          onClick={() => setShowSelected(false)}
          className={`p-2 rounded-tl-lg rounded-bl-lg ${
            !showSelected ? 'bg-amber-300 font-semibold' : 'bg-white text-gray-400'
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setShowSelected(true)}
          className={`p-2 rounded-tr-lg rounded-br-lg ${
            showSelected ? 'bg-amber-300 font-semibold' : 'bg-white text-gray-400'
          }`}
        >
          Selected <span>({selectedCount})</span>
        </button>
      </div>
    </div>
  );
};

export default Selected;
