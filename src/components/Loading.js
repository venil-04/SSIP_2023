import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="p-4 text-center bg-white rounded shadow-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
