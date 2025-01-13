import React from 'react';

const FooterSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Div Kiri */}
        <div className="text-gray-700">
          <h1 className="text-sm lg:text-lg font-bold">PT. MAJJATRA HIKARI INDONESIA </h1>
        </div>

        {/* Div Kanan */}
        <div className="text-gray-600">
          <h1 className="lg:text-md text-sm font-medium text-gray-500">Copyright © 2025</h1>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
