

const Selected = ({ selectedCount }) => {
    return (
        <div className="flex justify-between my-10">
            <p className="text-4xl font-bold">Available Players</p>
            <div className="flex">
               <button className="bg-amber-300 font-semibold rounded-tl-lg rounded-bl-lg p-2"> Available</button>
               <button className="p-2 bg-white text-gray-400 border-1 border-gray-200 rounded-tr-lg rounded-br-lg">Selected <span>({ selectedCount }) </span></button>
            </div>
        </div>
    );
};

export default Selected;