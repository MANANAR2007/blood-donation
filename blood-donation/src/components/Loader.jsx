import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-500">Finding heroes nearby...</p>
  </div>
);

export default Loader;