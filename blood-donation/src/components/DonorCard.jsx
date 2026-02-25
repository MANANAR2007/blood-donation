import React, { useState } from 'react';

export default function DonorCard({ donor }) {
  const [isRequested, setIsRequested] = useState(false);

  const handleRequest = () => {
    if (donor.isAvailable && !isRequested) {
      setIsRequested(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border shadow-sm">

      <h3 className="text-xl font-bold">{donor.name}</h3>
      <p className="text-gray-500">{donor.city}</p>

      <div className="mt-4 font-bold">
        {donor.bloodGroup}
      </div>

      <button
        onClick={handleRequest}
        disabled={isRequested || !donor.isAvailable}
        className="w-full mt-6 py-3 rounded-xl bg-rose-500 text-white disabled:bg-gray-300"
      >
        {isRequested ? 'Request Sent' : 'Request Help'}
      </button>

    </div>
  );
}