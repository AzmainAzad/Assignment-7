const SubscribeSection = () => {
  return (
    <div className="relative  flex items-center justify-center">
      {/* Overlapping Card */}
      <div className="absolute -top-20 w-[90%] max-w-3xl bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-2xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold text-black">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mt-2">
          Get the latest updates and news right in your inbox!
        </p>

        {/* Input & Button */}
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="px-5 py-2 rounded-r-lg bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-500 text-black font-medium hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
