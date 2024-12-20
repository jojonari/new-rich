import WeightConverter from '@/components/converter/WeightConverter';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-50">
      {/* Calculator */}
      <div className="flex flex-grow justify-center w-full h-full p-2">
        <div className="flex-1 w-full h-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <WeightConverter />
        </div>
      </div>
    </div>
  );
};

export default Home;
