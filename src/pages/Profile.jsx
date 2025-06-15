import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 text-white bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] min-h-screen">
      <h2 className="text-3xl font-bold mb-4">My Profile</h2>
      <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md w-full max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-gray-300" />
          <div>
            <h3 className="text-xl font-semibold">Username</h3>
            <p className="text-gray-600">email@example.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Phone</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter phone" />
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
