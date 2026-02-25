import React from 'react';
import { BLOOD_GROUPS } from '../utils/helpers';

const FilterBar = ({
  selectedBg,
  setSelectedBg,
  searchCity,
  setSearchCity,
  sortByAvailability,
  setSortByAvailability
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border flex flex-col md:flex-row gap-5 mb-10 max-w-4xl mx-auto">

      <input
        type="text"
        placeholder="Search city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className="w-full md:w-1/3 px-4 py-3 rounded-xl bg-slate-50"
      />

      <select
        value={selectedBg}
        onChange={(e) => setSelectedBg(e.target.value)}
        className="w-full md:w-1/3 px-4 py-3 rounded-xl bg-slate-50"
      >
        <option value="All">All Blood Groups</option>

        {BLOOD_GROUPS.map(bg => (
          <option key={bg} value={bg}>{bg}</option>
        ))}
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={sortByAvailability}
          onChange={(e) => setSortByAvailability(e.target.checked)}
        />
        Available First
      </label>

    </div>
  );
};

export default FilterBar;