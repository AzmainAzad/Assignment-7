
const Footer = () => {
    return (
        <div className="bg-[#050f38] text-white p-20">
            <div className="mb-10"> 
                <img src="/images/logo-footer.png" alt="" className="m-auto" />
            </div>
            <div className="flex justify-around">
               <div className="w-[300px]">
                <p className="mb-3">About US</p>
                <p>We are a passionate team dedicated to providing the best services to our customers.</p>
               </div>

               <div className="w-[300px]">
                <p className="mb-3">Quick Links</p>
                <ul className="list-disc ml-5">
                    <a href=""><li>Home</li></a> 
                    <a href=""><li>Services</li></a> 
                    <a href=""><li>About</li></a> 
                    <a href=""><li>Contact</li></a> 
                </ul>
               </div>

               <div className="w-[300px]">
                <p className="mb-3">Subscribe</p>
                <p>Subscribe to our newsletter for the latest updates.</p>
                <div className="flex mt-4">
                  <input type="email" placeholder="Enter your email"className="flex-1 px-3 py-2 rounded-l-lg focus:outline-none text-black bg-[white]"/>

                    <button className="px-5 py-2 rounded-r-lg bg-gradient-to-r from-gray-200 via-pink-200 to-yellow-400 text-black font-medium hover:opacity-90 transition">Subscribe</button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;