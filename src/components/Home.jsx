import React from "react";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://cdn.b12.io/client_media/fvoatBts/045fbb24-6d45-11ef-b7d1-0242ac110002-jpg-hero_image.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-lg px-6 py-8 sm:py-12 md:pl-16 lg:pl-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
          EMPOWERING INNOVATION
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Experience AI solutions
        </h2>
        <button className="bg-[#046878] text-white px-6 py-2 text-lg font-light rounded-full hover:text-gray-800 transition">
          View Services
        </button>
      </div>
    </div>
  );
};

export default Home;
