import React from 'react';
import { IoGitNetworkOutline, IoStorefrontOutline, IoDocumentsOutline } from 'react-icons/io5';
import DashboardImage from '../assets/Dashboard.svg'; // Corrected import path

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-[#0E131A] border border-[#2A3C44] rounded-3xl p-8 w-full sm:w-[355px] h-auto sm:h-[250px] flex flex-col items-center text-center">
      <div className="mb-4 text-5xl text-white">{icon}</div>
      <h3 className="font-outfit text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="font-outfit text-base text-[#A1A1A1]">{description}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative text-white text-center py-10 sm:py-20 bg-gradient-to-b from-[#020C14] to-[#0F1E38]">
      <div className="container mx-auto flex flex-col items-center ">
        <h1 className="font-outfit font-normal text-4xl sm:text-5xl md:text-[82px] leading-tight sm:leading-[100px] bg-gradient-to-r from-white to-[#B4B2B2] bg-clip-text text-transparent mt-8 sm:mt-16">
          New way to manage your <br/> <span className="italic">Ecommerce Business!</span>
        </h1>
        <p className="mt-6 font-outfit text-base sm:text-[18px] leading-relaxed sm:leading-[28px] text-[#A1A1A1] w-full max-w-xs sm:max-w-md md:max-w-xl lg:w-[588px]">
          Build your dream ecommerce website with our all-in-one platform. Get started in minutes and watch your business grow.
        </p>
        <button className="mt-8 flex items-center justify-center w-[178px] h-[54px] bg-gradient-to-r from-[#6149F5] to-[#23B4D8] rounded-full font-inter font-semibold text-[16px] leading-[22px] text-white">
          Get Started
        </button>
      </div>

      <div className="relative">
        {/* Dashboard Preview */}
        <div className="mt-16 sm:mt-24 flex justify-center px-4">
          <img src={DashboardImage} alt="Dashboard Preview" className="w-full max-w-4xl h-auto rounded-2xl border-2 border-cyan-500/10 shadow-2xl shadow-cyan-500/20" />
        </div>
        
        {/* Features Section - Overlay */}
        <div className="relative -mt-20 sm:-mt-32 z-20 px-4 sm:px-8">
          <div className="max-w-[1145px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Build your Brand" 
              description="Your brand is a gateway to your true work. It also focuses on building a loyal and long-term customer base."
              icon={<IoGitNetworkOutline />}
            />
            <Card 
              title="Create your Store Instantly" 
              description="Over the last two years, we developed this platform to create a store like a snap of a finger."
              icon={<IoStorefrontOutline />}
            />
            <Card 
              title="Stay Organized" 
              description="Keep track of your Customers. It increases the likelihood that customers will make additional future purchases."
              icon={<IoDocumentsOutline />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
