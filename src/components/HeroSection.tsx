import React from "react";
import Head from "next/head";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/image.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Restaurant
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Serving the best dishes since 1990
        </p>
        <a
          href="#menu"
          className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300"
        >
          View Menu
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
