import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Loader from './components/Loader';
import DonorCard from './components/DonorCard';
import { enrichDonorData } from './utils/helpers';

export default function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedBg, setSelectedBg] = useState('All');
  const [searchCity, setSearchCity] = useState('');
  const [sortByAvailability, setSortByAvailability] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDonors(enrichDonorData(data));
      } catch (error) {
        console.error("Failed to fetch donors", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  let processedDonors = donors.filter(donor => {
    const matchesBg =
      selectedBg === 'All' || donor.bloodGroup === selectedBg;

    const matchesCity =
      donor.city.toLowerCase().includes(searchCity.toLowerCase());

    return matchesBg && matchesCity;
  });

  if (sortByAvailability) {
    processedDonors = [...processedDonors].sort((a, b) =>
      a.isAvailable === b.isAvailable
        ? 0
        : a.isAvailable
        ? -1
        : 1
    );
  }

  const availableCount = processedDonors.filter(d => d.isAvailable).length;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Header totalDonors={availableCount} />

      <main className="max-w-7xl mx-auto px-6 mt-10">
        <div className="w-full mb-10">
          <FilterBar
            selectedBg={selectedBg}
            setSelectedBg={setSelectedBg}
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            sortByAvailability={sortByAvailability}
            setSortByAvailability={setSortByAvailability}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {loading ? (
            <Loader />
          ) : processedDonors.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
              <p className="text-slate-400 font-bold text-xl">
                No donors found matching those criteria.
              </p>

              <button
                onClick={() => {
                  setSearchCity('');
                  setSelectedBg('All');
                }}
                className="mt-4 text-rose-500 font-black hover:text-rose-600"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processedDonors.map(donor => (
                <DonorCard key={donor.id} donor={donor} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}