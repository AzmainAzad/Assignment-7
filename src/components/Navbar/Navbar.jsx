
const Navbar = ({money, handleAddMoney}) => {
    return (
        <div>

            {/* Navbar Section */}
            <div className="flex items-center justify-between mt-8">
                <div><img src="/images/logo.png" alt="" /></div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-5">
                       <a href=""><li>Home</li></a>
                       <a href=""><li>Fixture</li></a>
                       <a href=""><li>Team</li></a>
                       <a href=""><li>Schedule</li></a>
                    </ul>
                    <div className="flex gap-2 border-2 border-gray-400 p-2">
                            <span className="text-xl font-bold">{money} Coin</span>
                            <img className="10px" src="/images/Currency.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="text-center rounded-3xl bg-cover bg-center mt-10 p-5"
                style={{ backgroundImage: "url('/images/bg-shadow.png')" }}>

                    <img className="m-auto" src="/images/banner-main.png" alt="" />
                    <p className="mt-5 font-bold text-3xl">Assemble Your Ultimate Dream 11 Cricket Team</p>
                    <p className="mt-5 font-medium text-2xl">Beyond Boundaries Beyond Limits</p>
                    <button  onClick={handleAddMoney}  className="mt-5 p-3 bg-amber-300 font-bold text-md rounded-xl">Claim free credit</button>
               
            </div>


        </div>
    );
};

export default Navbar;