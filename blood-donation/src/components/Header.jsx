import React from 'react';

const Header = ({ totalDonors }) => {
  return (
    <header className="bg-linear-to-r from-rose-600 via-red-500 to-rose-500 text-white pt-10 pb-12 px-6 shadow-lg rounded-b-[2.5rem] mb-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
            🩸 LifeDrops
          </h1>

          <p className="text-rose-100 mt-2 font-medium text-lg">
            Community Blood Donor Finder
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
          {totalDonors} Heroes Available
        </div>

      </div>
    </header>
  );
};

export default Header;