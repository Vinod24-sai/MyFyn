import React, { useRef } from 'react';

const assetData = [
  { title: "Bank Accounts", color: "bg-blue-100", text: "text-blue-800" },
  { title: "Investments", color: "bg-green-100", text: "text-green-800" },
  { title: "Real Estate", color: "bg-yellow-100", text: "text-yellow-800" },
  { title: "Vehicles", color: "bg-red-100", text: "text-red-800" },
  { title: "Digital Assets", color: "bg-purple-100", text: "text-purple-800" },
  { title: "Other", color: "bg-pink-100", text: "text-pink-800" }
];

const Assets = () => {
  const sectionRefs = useRef([]);

  return (
    <div className="p-6 min-h-screen bg-white overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Assets</h2>
      {assetData.map((asset, idx) => (
        <div
          key={idx}
          ref={el => (sectionRefs.current[idx] = el)}
          className={`mb-8 p-6 rounded-lg shadow ${asset.color}`}
        >
          <h3 className={`text-2xl font-semibold mb-2 ${asset.text}`}>{asset.title}</h3>
          <p className="text-gray-700">Summary of your {asset.title.toLowerCase()} goes here.</p>
        </div>
      ))}
    </div>
  );
};

export default Assets;
